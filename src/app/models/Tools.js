import { Schema, model } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

const ToolsSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tags: [
    {
      type: String,
      required: true,
    },
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

ToolsSchema.plugin(mongoosePaginate);

export default model('Tools', ToolsSchema);
