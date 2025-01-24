import User from "../models/user.model.js";

export const getUsersForSidebar = async (req,res) => {
    try{
        const loggedInUserId = req.user._id;
        const filteredUsers = await User.find( { _id: { $ne: loggedInUserId } } ).select("-password")
        res.status(200).json(filteredUsers);
    }
    catch (error) {
        console.log("Error in getUsersForSidebar controller",error.message);
        res.status(500).json({error:"Internal  Server Error"});
    }
}

export const uploadImage  = async (req, res) => {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }
    const { ImageName ,userId } = req.body; 
    const user = await User.findOneAndUpdate( { _id: userId }, { profilePicture: req.file.filename },{} );
    res.status(200).json({
      message: 'File uploaded successfully',
      imageUrl: req.file.path,
      public_id: req.file.filename, 
    });
  }