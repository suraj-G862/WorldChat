import express from 'express';

import { upload } from '../config/cloudinary.js';
import { protectRoute } from '../middleware/protectRoute.js';
import { getUsersForSidebar ,uploadImage ,addFriend } from '../controllers/user.controller.js'

const router = express.Router();

router.get("/",protectRoute,getUsersForSidebar);
router.post("/upload-profile-image", upload.single('profileImage') , uploadImage );
router.post("/addfriend/:userId", addFriend);

export default router;
