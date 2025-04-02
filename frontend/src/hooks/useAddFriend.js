import { useState } from 'react'

const useAddFriend = () => {
    const [loading, setLoading] = useState(false);
    const addFriend = async (friendId,userId)=>{
        setLoading(true);
        try {
            const res = await fetch(`/api/users/addfriend/${userId}`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({friendId})
            })
            const data = await res.json();
            if(data.error){
                throw new Error(data.error)
            }
            return data;
        }
        catch (error) {
            console.log(error)
        }
        finally{
            setLoading(false)
        }
    }
    return {addFriend, loading}
}

export default useAddFriend