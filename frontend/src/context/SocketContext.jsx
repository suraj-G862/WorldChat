import { createContext ,useState, useEffect , useContext} from "react";
import { useAuthContext } from "./AuthContext";
import io from 'socket.io-client';

export const SocketContext = createContext();

export const useSocketContext = () => {
    return useContext(SocketContext);

}

export const SocketContextProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const {authUser} = useAuthContext();

    useEffect(() => {
         if(authUser){
            // const socket = io("https://worldchat-54nd.onrender.com",{    //for deployment
            const socket = io("http://localhost:5000",{    //for development
                query:{
                    userId: authUser._id
                }
            });
            setSocket(socket);
            socket.on("getOnlineUser",(users)=>{
                setOnlineUsers(users);
            });
            return () => {
                socket.close();
            } 
         }
         else{
            if(socket){
                socket.close();
                setSocket(null);
            }
         }
    }, [authUser]);

    return (
        <SocketContext.Provider value={{socket,onlineUsers}}>
        {children} 
        </SocketContext.Provider>
    );
} 