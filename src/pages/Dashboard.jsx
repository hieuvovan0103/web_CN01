import { Navigate } from 'react-router-dom';

// function AdminDashboard() {
//     const user = getUserFromSessionOrApi(); // Lấy thông tin người dùng
//     if (user.role !== 'admin') {
//         return <Navigate to="/user/home" />;
//     }
//     return <div>Admin Dashboard</div>;
// }

export default function Dashboard() {
    return (
        <div>
            <p>This is DASHBOARD</p>
        </div>
    );
};