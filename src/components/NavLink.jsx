import {
    Disclosure, DisclosureButton, DisclosurePanel,
    Menu, MenuButton, MenuItem, MenuItems
} from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ShoppingCartIcon } from "lucide-react";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';

const navigation = [
    { name: 'Trang chủ', href: '/' },
    { name: 'Sản phẩm', href: '/products' },
    { name: 'Về chúng tôi', href: '/about' },
    { name: 'Hỏi đáp', href: '/QA' },
    { name: 'Liên hệ', href: '/contact' },
    { name: 'Blog', href: '/blog' },
];


function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}


export default function NavLink() {
    const location = useLocation();
    const navigate = useNavigate();

    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        try {
            const userCookie = Cookies.get('user');
            if (!userCookie) return false;

            const user = JSON.parse(userCookie);
            console.log(user);
            // Kiểm tra các thông tin cần thiết có tồn tại không
            return user && user.username;
        } catch (e) {
            console.error('Lỗi khi parse cookie user:', e);
            return false;
        }
    });

    useEffect(() => {
        localStorage.setItem('isLoggedIn', isLoggedIn ? 'true' : 'false');
    }, [isLoggedIn]);

    const handleLogin = () => {
        navigate('/login');
    };

    const handleLogout = () => {
        Cookies.remove('user'); // Xóa cookie có tên 'user_info'
        navigate('/login'); // Chuyển hướng sau khi xóa
    };

    return (
        <Disclosure as="nav" className="bg-lime-400">
            <div className="mx-auto min-w-full px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    {/* Mobile button */}
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
                            <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                        </DisclosureButton>
                    </div>

                    {/* Logo */}
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex shrink-0 items-center">
                            <h1 className="text-2xl font-bold text-black">
                                <Link to="/">
                                    <span className="text-black">T Shop</span>
                                </Link>
                            </h1>
                        </div>

                        {/* Menu items */}
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        aria-current={location.pathname === item.href ? 'page' : undefined}
                                        className={classNames(
                                            location.pathname === item.href ? 'bg-lime-500 text-white' : 'text-black',
                                            'rounded-md px-3 py-2 text-sm font-medium'
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right side: auth / cart / user */}
                    {!isLoggedIn ? (
                        <button
                            onClick={handleLogin}
                            className="bg-black text-white px-3 py-1 rounded text-sm hover:bg-gray-800 transition"
                        >
                            Đăng nhập
                        </button>
                    ) : (
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            {/* Cart */}
                            <button
                                type="button"
                                className="relative py-2 px-6 rounded bg-lime-400 border-black p-1 text-black hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
                            >
                                <span className="sr-only">View cart</span>
                                <ShoppingCartIcon className="size-6" />
                            </button>

                            {/* Profile menu */}
                            <Menu as="div" className="relative ml-3">
                                <MenuButton className="relative flex rounded-full bg-lime-400 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                                    <img
                                        alt=""
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        className="size-8 rounded-full"
                                    />
                                </MenuButton>
                                <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5">
                                    <MenuItem>
                                        <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                            Your Profile
                                        </Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                            Settings
                                        </Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <button
                                            onClick={handleLogout}
                                            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                            Log out
                                        </button>
                                    </MenuItem>
                                </MenuItems>
                            </Menu>
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile Menu */}
            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as={Link}
                            to={item.href}
                            className={classNames(
                                location.pathname === item.href ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-300',
                                'block rounded-md px-3 py-2 text-base font-medium'
                            )}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    );
}
