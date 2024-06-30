import { Schema, model } from 'mongoose';
import { TBlog } from './blog.types';

const blogSchema = new Schema<TBlog>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  publicationDate: { type: Date, default: Date.now },
});

const Blog = model('Blog', blogSchema);
export default Blog;
