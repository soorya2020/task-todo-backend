import Collection from "../models/collection.model.js";

// GET all collections for the logged-in user
export const getCollections = async (req, res, next) => {
  try {
    const collections = await Collection.find({ user: req.user.id });
    res.status(200).json({
      success: true,
      data: collections,
    });
  } catch (error) {
    next(error);
  }
};

// CREATE a new collection
export const createCollection = async (req, res, next) => {
  try {
    const { name, todos } = req.body;
    const newCollection = await Collection.create({
      name,
      user: req.user.id,
      todos: todos || [],
    });

    res.status(201).json({
      success: true,
      message: "Collection created",
      data: newCollection,
    });
  } catch (error) {
    next(error);
  }
};

export const updateCollectionTodos = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, todos } = req.body;

    const updateData = {};

    if (name !== undefined) updateData.name = name;
    if (todos !== undefined) updateData.todos = todos;

    const collection = await Collection.findOneAndUpdate(
      { _id: id },
      { $set: updateData },
      { new: true, runValidators: true },
    );

    if (!collection) {
      const error = new Error("Collection not found");
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({
      success: true,
      data: collection,
    });
  } catch (error) {
    next(error);
  }
};

export const getCollectionById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const collection = await Collection.findOne({
      _id: id,
      user: req.user.id,
    });

    if (!collection) {
      return res.status(404).json({
        success: false,
        error: "Collection not found",
      });
    }

    res.status(200).json({
      success: true,
      data: collection,
    });
  } catch (error) {
    next(error);
  }
};

// controllers/collection.controllers.js
export const deleteCollection = async (req, res, next) => {
  try {
    const { id } = req.params;

    const collection = await Collection.findOneAndDelete({
      _id: id,
      user: req.user.id,
    });

    if (!collection) {
      const error = new Error("Collection not found");
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({
      success: true,
      message: "Collection deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

