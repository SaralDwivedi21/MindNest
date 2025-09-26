import mongoose from "mongoose";

import User from "./User";

const contentType = ['image','note', 'video', 'audio', 'article', 'youtube', 'twitter', 'facebook','link',];

const ContentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
  },
  type: {
    type: String,
    enum: contentType,
    required: true,
  },
  tag: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tag',
    required: true,
  }],
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }
}, { timestamps: true });

const TagSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true, trim: true }
}, { timestamps: true });

const Tag = mongoose.model('Tag', TagSchema);
const Content = mongoose.model('Content', ContentSchema);

export { Content, Tag };
