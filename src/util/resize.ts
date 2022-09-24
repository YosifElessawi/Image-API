import express from 'express';
import path from 'path';
import sharp from 'sharp';
import fs from 'fs';
const checkIfFileExist = (req: express.Request, res: express.Response, next: () => void):
void => {
    const fileName = req.query.filename as string;
    const width = req.query.width as string;
    const height = req.query.height as string;
    const imgPath = path.join(path.resolve('./images'), `${fileName}.jpg`);
    //Check if Thumbs folder exists if not we create it
    try {
        if (!fs.existsSync('./images/thumbs')) {
            fs.mkdirSync('./images/thumbs');
        }
    } catch (err) {
        console.log(err);
    }
    const thumbsPath = path.join('./images/thumbs', `${fileName}_${width}_${height}.jpg`);
    //Check if image exits
    if (!fs.existsSync(imgPath)) {
        res.send('Image does dont exist')
        return 
    }
    //Check cache for image
    if (fs.existsSync(thumbsPath)) {
        console.log('Already exists');
        res.sendFile(path.resolve(thumbsPath));
        return
    }
    next();
}
const resizefunc = (req: express.Request, res: express.Response, next: () => void):
    void => {
    // Get all needed paramters
    const fileName = req.query.filename as string;
    const width = req.query.width as string;
    const height = req.query.height as string;
    const imgPath = path.join(path.resolve('./images'), `${fileName}.jpg`);
    //Resized image path construction 
    const thumbsPath = path.join('./images/thumbs', `${fileName}_${width}_${height}.jpg`);
    //process image (resizing using )
    console.log('processing image ...!')
    sharp(imgPath)
        .resize(parseInt(width), parseInt(height), {
            position: 'right top',
        })
        .toFile(thumbsPath)
        .then(() => res.sendFile(path.resolve(thumbsPath)))
        .catch(() => next());
}
export default {resizefunc, checkIfFileExist}
