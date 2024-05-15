import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId,io } from "../socket/socket.js";

export const sendMessage = async (req,res) => {
   try{
      const {message} = req.body;
      const {id }= req.params;
      const senderId = req.user._id;

      let conversation = await Conversation.findOne({
         participants: { $all: [id,senderId] }
      })

      if(!conversation){
         conversation = await Conversation.create({
            participants:[id,senderId],
         })
      }

      const newMessage = new Message({
         senderId,
         receiverId:id,
         message
      })

      if(newMessage){
         conversation.messages.push(newMessage._id);
      }
       
      await Promise.all([conversation.save(),newMessage.save()]);

      const receiverSocketId = getReceiverSocketId(id);
      if(receiverSocketId){
         io.to(receiverSocketId).emit("newMessage",newMessage);
      }

      res.status(201).json(newMessage);
   }
   catch (error) {
          console.log("Error in sendMessage controller",error.message);
          res.status(500).json({error:"Internal  Server Error"});
   }
}

export const getMessage = async (req,res) => {
   try{
         const {id : userToChatId} =req.params;
         const senderId = req.user._id; 
         const conversation = await Conversation.findOne({
            participants: { $all: [senderId,userToChatId] }
         }).populate("messages");   
         if(!conversation){
            return res.status(200).json([]);
         } 
         const messages = conversation.messages;
         res.status(200).json(messages);
   }
   catch (error) { 
          console.log("Error in getMessage controller",error.message);
          res.status(500).json({error:"Internal  Server Error"});
   } 
}