export default function Register() {



    return (
        <>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    {/*<img*/}
                    {/*    alt="Your Company"*/}
                    {/*    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"*/}
                    {/*    className="mx-auto h-10 w-auto"*/}
                    {/*/>*/}
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                        Chào mừng bạn đến với T Shop
                    </h2>

                    <h3 className="mt-10 text-center text-xl font-bold tracking-tight text-gray-900">
                        Hãy đăng kí để nhận được những ưu đãi mới nhất
                    </h3>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form action="#" method="POST" className="space-y-6">

                        {/* Phần Username */}
                        <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900 mt-4">
                            Nhập username của bạn
                        </label>
                        <div className="mt-2">
                            <input
                                id="username"
                                name="username"
                                type="text"
                                required
                                autoComplete="username"
                                placeholder="Tên người dùng của bạn"
                                className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 shadow-sm focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 sm:text-sm"
                            />
                        </div>

                        {/* Phần Username */}
                        <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900 mt-4">
                            Nhập username của bạn
                        </label>
                        <div className="mt-2">
                            <input
                                id="username"
                                name="username"
                                type="text"
                                required
                                autoComplete="username"
                                placeholder="Tên người dùng của bạn"
                                className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 shadow-sm focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 sm:text-sm"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    placeholder="Địa chỉ email của bạn"
                                    className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 shadow-sm focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                Số điện thoại
                            </label>
                            <div className="mt-2">
                                <input
                                    id="phone_number"
                                    name="phone_number"
                                    type="tel"
                                    required
                                    autoComplete="tel"
                                    placeholder="Số điện thoại"
                                    className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 shadow-sm focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                    Mật khẩu
                                </label>

                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    autoComplete="current-password"
                                    placeholder="Nhập mật khẩu"
                                    className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 shadow-sm focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="confirm-password" className="block text-sm/6 font-medium text-gray-900">
                                    Nhập lại mật khẩu
                                </label>

                            </div>
                            <div className="mt-2">
                                <input
                                    id="confirm-password"
                                    name="confirm-password"
                                    type="password"
                                    required
                                    autoComplete="new-password"
                                    placeholder="Nhập lại mật khẩu"
                                    className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 shadow-sm focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>

                    {/*<p className="mt-10 text-center text-sm/6 text-gray-500">*/}
                    {/*    Not a member?{' '}*/}
                    {/*    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">*/}
                    {/*        Start a 14 day free trial*/}
                    {/*    </a>*/}
                    {/*</p>*/}
                </div>
            </div>
        </>
    )
}
