// src/components/AdminLayout.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLayout = ({ children, setIsLoggedIn }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        setIsLoggedIn(false);           // cập nhật trạng thái đăng xuất
        navigate('/login');             // chuyển về trang login
    };

    return (
        <div style={{ display: 'flex' }}>
            <aside style={{ width: '220px', background: '#333', color: '#fff', padding: '20px', minHeight: '100vh' }}>
                <h3>Admin Menu</h3>
                <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                    <li>Dashboard</li>
                    <li>Users</li>
                    <li>Settings</li>
                    <li>
                        <button onClick={handleLogout} style={{
                            marginTop: '20px',
                            padding: '8px 16px',
                            backgroundColor: '#e74c3c',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}>
                            Logout
                        </button>
                    </li>
                </ul>
            </aside>
            <main style={{ flexGrow: 1, padding: '20px' }}>
                <header style={{ marginBottom: '20px', borderBottom: '1px solid #ccc' }}>
                    <h2>Admin Panel</h2>
                </header>
                {children}
            </main>
        </div>
    );
};

export default AdminLayout;
