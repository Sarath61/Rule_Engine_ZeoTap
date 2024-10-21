import mongoose, { Document, Model, Schema } from "mongoose";

export interface IRules extends Document {
  name: string;
  ast: JSON;
}

const RulesSchema = new Schema<IRules>({
  name: {
    type: String,
    required: [true, "rule requires name"],
  },
  ast: {
    type: JSON,
    required: [true, "required AST"],
  },
});

const Rules: Model<IRules> =
  mongoose.models.rules || mongoose.model<IRules>("rules", RulesSchema);

export default Rules;
