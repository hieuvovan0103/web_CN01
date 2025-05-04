import { useState } from "react";
// import validator from "validator";
// import { useNavigate } from 'react-router-dom';
import {AuthProvider} from '../contexts/AuthContext.jsx';

export default function Login() {
    // const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [username, setUsername] = useState('');
    const [user, setUser] = useState(null); // null nếu chưa đăng nhập
    // const [isLoggedIn, setIsLoggedIn] = useState(false);

    // const navigate = useNavigate();
    // const { login } = useAuth();

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

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!username || username.trim() === '') {
            setError('Vui lòng nhập tên đăng nhập');
            return;
        }

        if (password.length < 6) {
            setError('Mật khẩu phải có ít nhất 6 ký tự');
            return;
        }

        setError('');

        try {
            const response = await fetch('http://localhost/authentication/login.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({
                    username: username,
                    password: password
                })

            });

            const data = await response.json();

            if (data.success) {
                setError('');
                login({data})
                window.location.href = data.redirect;
                // Xử lý sau đăng nhập
            } else {
                setError(data.message || 'Đăng nhập thất bại');
            }
        } catch (error) {
            setError('Lỗi kết nối đến máy chủ');
            console.error(error);
        }
    };


    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                    Vui lòng đăng nhập tài khoản T Shop của bạn
                </h2>
            </div>
            <div className="border-2 sm:px-10 sm:py-10 border-gray-300 rounded-lg shadow-lg sm:mx-auto sm:w-full sm:max-w-sm">


                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                Hãy nhập tên đăng nhập của bạn
                            </label>
                            <div className="mt-2">
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    required
                                    placeholder={"Nhập tên đăng nhập" }
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 shadow-sm focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                    Mật khẩu
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Quên mật khẩu?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    placeholder = {"Nhập mật khẩu"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 shadow-sm focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 sm:text-sm"
                                />
                            </div>
                        </div>

                        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-lime-400 px-3 py-1.5 text-sm/6 font-semibold text-black shadow-xs hover:bg-lime-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Đăng nhập
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm/6 text-gray-500">
                        Chưa có tài khoản?{' '}
                        <a href="/register" className="font-semibold text-indigo-600 hover:text-indigo-500">
                            Đăng kí tại đây
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
