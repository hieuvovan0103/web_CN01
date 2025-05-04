import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

// Tạo context
const UserContext = createContext(null);

// Custom hook để dùng cho tiện
export const useUser = () => useContext(UserContext);

// Provider
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Kiểm tra session khi app khởi động
    useEffect(() => {
        const checkSession = async () => {
            try {
                const res = await axios.get('http://localhost/backend/session.php', {
                    withCredentials: true,
                });
                setUser(res.data);
            } catch (err) {
                setUser(null);
            }
        };

        checkSession();
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};
