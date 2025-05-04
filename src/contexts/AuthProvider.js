import React, { useState, useEffect } from 'react';

// Tạo provider
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); // null nếu chưa đăng nhập
    const [loading, setLoading] = useState(true);

    // Kiểm tra trạng thái đăng nhập khi ứng dụng tải
    useEffect(() => {
        fetch('http://localhost/authentication/login.php', {
            method: 'GET',
            credentials: 'include', // Gửi cookie session
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    setUser(data.user); // Lưu thông tin user: { id, username, role }
                } else {
                    setUser(null);
                }
                setLoading(false);
            })
            .catch((error) => {
                console.error('Lỗi kiểm tra session:', error);
                setUser(null);
                setLoading(false);
            });
    }, []);

    // Hàm đăng nhập: Xử lý phản hồi từ server
    const login = (data) => {
        if (data.success) {
            const userData = {
                id: data.id,
                username: data.username,
                role: data.role,
            };
            setUser(userData);
            return { success: true, redirect: data.redirect };
        } else {
            return { success: false, message: data.message };
        }
    };

    // Hàm đăng xuất
    const logout = () => {
        fetch('http://localhost/authentication/login.php', {
            method: 'POST',
            credentials: 'include', // Gửi cookie session
        })
            .then(() => {
                setUser(null);
            })
            .catch((error) => {
                console.error('Lỗi đăng xuất:', error);
                setUser(null);
            });
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};