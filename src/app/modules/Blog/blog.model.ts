import { Schema, model } from 'mongoose';

const blogSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  publicationDate: { type: Date, default: Date.now },
});

const Blog = model('Blog', blogSchema);
export default Blog;
