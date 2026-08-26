import mongoose, { Document, Model, Schema } from "mongoose";

export interface IContact extends Document {
  name: string;
  phone: number;
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const ContactSchema: Schema<IContact> = new mongoose.Schema(
  {
    name: { type: String },
    phone: { type: Number, required: true },
    email: { type: String },
  },
  { timestamps: true }
);

const Contact: Model<IContact> =
  mongoose.models.Contact || mongoose.model<IContact>("Contact", ContactSchema);

export default Contact;
