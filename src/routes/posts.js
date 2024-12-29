const express = require('express');
const fs = require('fs');
const router = express.Router();
const path = require('path');

const postsFile = path.join(__dirname, '../../data/posts.json');

// Utility functions
const readPosts = () => JSON.parse(fs.readFileSync(postsFile, 'utf8'));
const writePosts = (posts) => fs.writeFileSync(postsFile, JSON.stringify(posts, null, 2));

// Get all posts
router.get('/', (req, res) => {
  const posts = readPosts();
  res.json(posts);
});

// Get a single post by ID
router.get('/:id', (req, res) => {
  const posts = readPosts();
  const post = posts.find((p) => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).json({ error: 'Post not found' });
  res.json(post);
});

// Create a new post
router.post('/', (req, res) => {
  const posts = readPosts();
  const newPost = { 
    id: Date.now(), 
    title: req.body.title, 
    body: req.body.body, 
    createdAt: new Date().toISOString() 
  };
  posts.push(newPost);
  writePosts(posts);
  res.status(201).json(newPost);
});

// Update a post by ID
router.put('/:id', (req, res) => {
  const posts = readPosts();
  const postIndex = posts.findIndex((p) => p.id === parseInt(req.params.id));
  if (postIndex === -1) return res.status(404).json({ error: 'Post not found' });

  posts[postIndex] = { ...posts[postIndex], ...req.body, updatedAt: new Date().toISOString() };
  writePosts(posts);
  res.json(posts[postIndex]);
});

// Delete a post by ID
router.delete('/:id', (req, res) => {
  const posts = readPosts();
  const newPosts = posts.filter((p) => p.id !== parseInt(req.params.id));
  if (posts.length === newPosts.length) return res.status(404).json({ error: 'Post not found' });

  writePosts(newPosts);
  res.status(204).send();
});

module.exports = router;
