import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';

import {dotenv} from './dotenv.js';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});


const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params:  (req, file) => {
      const imageName = file.originalname.split('.')[0]; 
      console.log(imageName);
      return {
        folder: 'user_profiles', 
        public_id: imageName, 
        resource_type: 'image',
        allowed_formats: ['jpg', 'jpeg', 'png'], 
        transformation: [{ width: 150, height: 150, crop: 'thumb', gravity: 'face' }],
      };
    },
});

const upload = multer({ storage });

export { upload };