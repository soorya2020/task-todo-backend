import { Router } from "express";
import {
  getCollections,
  createCollection,
  updateCollectionTodos,
  getCollectionById,
  deleteCollection,
} from "../controllers/collection.controllers.js";
import { authorize } from "../middleware/authorize.middleware.js";

const collectionRouter = Router();

collectionRouter.get("/collections", authorize, getCollections);

collectionRouter.post("/collections", authorize, createCollection);

collectionRouter.put("/collections/:id", authorize, updateCollectionTodos);
collectionRouter.get("/collections/:id", authorize, getCollectionById);
collectionRouter.delete("/collections/:id", authorize, deleteCollection);

getCollectionById;

export default collectionRouter;
