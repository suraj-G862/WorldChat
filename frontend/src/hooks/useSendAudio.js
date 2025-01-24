import { useState } from 'react'
import useConversation from '../zustand/useConversation';
import toast from 'react-hot-toast';
const useSendAudio = () => {
    const [loadingAudio, setLoadingAudio] = useState(false)
    const {messages, setMessages, selectedConversation} = useConversation();

    const sendAudio = async (message) => {
        setLoadingAudio(true);
        try {
            const formData = new FormData();
            formData.append('audio', audioFile);
            const res = await fetch(`/api/messages/send/${selectedConversation._id}`, {
                method: 'POST',
                body: formData,
            });
            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }
            setMessages([...messages, data]); 
        } catch (error) {
            toast.error(error.message)
        }
        finally{
            setLoadingAudio(false)
        }
    }
    return {sendAudio, loadingAudio }
}

export default useSendAudio