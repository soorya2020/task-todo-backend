import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    task: { type: String, required: true },
    completed: { type: Boolean, default: false },
  },
  { timestamps: true },
);

const collectionSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    todos: [todoSchema], // Embedded sub-documents
  },
  { timestamps: true },
);

const Collection = mongoose.model("Collection", collectionSchema);
export default Collection;
