import express from 'express';
import multer from 'multer';
import { analyzeImage } from './gemini';

const app = express();
const upload = multer();

app.post('/upload', upload.single('image'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).send('No file uploaded');
        }
        
        const result = await analyzeImage(req.file);
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});