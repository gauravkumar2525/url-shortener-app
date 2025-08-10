const express = require('express');
const mongoose = require('mongoose');
const shortid = require('shortid');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/urlshortener', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
mongoose.connect('mongodb://localhost:27017/urlshortener');

// Schema
const urlSchema = new mongoose.Schema({
  original_url: { type: String, required: true },
  short_code: { type: String, required: true, unique: true },
  clicks: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

const Url = mongoose.model('Url', urlSchema);

// POST /api/shorten
app.post('/api/shorten', async (req, res) => {
  const { originalUrl } = req.body;
  if (!originalUrl) return res.status(400).json({ error: 'Missing URL' });

  // Check if URL already exists
  let url = await Url.findOne({ original_url: originalUrl });
  if (url) {
    return res.json({ shortCode: url.short_code });
  }

  // Generate short code
  const shortCode = shortid.generate();

  // Save to DB
  url = new Url({
    original_url: originalUrl,
    short_code: shortCode,
  });

  await url.save();

  res.json({ shortCode });
});

// GET /:shortcode
app.get('/:shortcode', async (req, res) => {
  const { shortcode } = req.params;
  const url = await Url.findOne({ short_code: shortcode });
  if (url) {
    url.clicks++;
    await url.save();
    return res.redirect(url.original_url);
  } else {
    return res.status(404).send('URL not found');
  }
});

// Bonus: Admin route - list all URLs and click counts
app.get('/admin/urls', async (req, res) => {
  const urls = await Url.find().sort({ createdAt: -1 });
  res.json(urls);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
