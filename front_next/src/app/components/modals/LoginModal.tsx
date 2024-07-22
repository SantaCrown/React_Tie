import Button from "../Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, MouseEvent, FormEvent } from "react";
import { PiEyeSlashThin, PiEyeThin } from "react-icons/pi";

interface LoginResponse {
    token: string;
    user: {
        id: string;
        email: string;
        name: string;
    };
}

interface LoginError {
    message: string;
}

const LoginModal = () => {
    // const { setUser } = useAuth();
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleMouseDown = (e: MouseEvent) => {
        e.preventDefault();
        setShowPassword(true);
    };

    const handleMouseUp = (e: MouseEvent) => {
        e.preventDefault();
        setShowPassword(false);
    };

    // const handleLogin = async (e: FormEvent) => {
    //     e.preventDefault();
    //     setIsLoading(true);
    //     setError(null);

    //     try {
    //         const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({ email, password }),
    //         });

    //         if (!response.ok) {
    //             const errorData: LoginError = await response.json();
    //             throw new Error(errorData.message || 'Login failed');
    //         }

    //         const data: LoginResponse = await response.json();

    //         // Handle successful login
    //         console.log('Login successful', data);

    //         // Store token in HttpOnly cookie
    //         setCookie(null, 'auth_token', data.token, {
    //             maxAge: rememberMe ? 7 * 24 * 60 * 60 : 24 * 60 * 60, // 7 days or 1 day
    //             path: '/',
    //             httpOnly: true,
    //             secure: process.env.NODE_ENV === 'production',
    //         });

    //         // Update auth context
    //         setUser(data.user);

    //         // Redirect to dashboard
    //         router.push('/');

    //     } catch (error) {
    //         console.error('Error during login:', error);
    //         setError(error instanceof Error ? error.message : 'An unexpected error occurred');
    //     } finally {
    //         setIsLoading(false);
    //     }
    // };

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="sm:w-[520px] h-full p-8 rounded-[16px]  bg-white">
                <h2 className="text-[#1A1F36] text-left text-xl font-bold">ログイン</h2>
                <form className="mt-4 text-[#1A1F36] space-y-4" onSubmit={() => { }}>
                    <div>
                        <label className="text-[14px] mb-2 block font-bold">メールアドレス</label>
                        <div className="relative flex items-center">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full bg-[#F8F9F9] text-sm border border-[#D9DCE1] px-4 py-3 rounded-md outline-blue-600"
                                placeholder="example@example.com"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label className="text-[14px] mb-2 block font-bold">パスワード</label>
                            <div className="text-sm mb-2">
                                <a href="jajvascript:void(0);" className="text-blue-600 hover:underline font-semibold">
                                    パスワードをお忘れですか？
                                </a>
                            </div>
                        </div>
                        <div className="relative flex items-center">
                            <input
                                id="password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full bg-[#F8F9F9] text-sm border border-[#D9DCE1] px-4 py-3 rounded-md outline-blue-600"
                                placeholder="password"
                            />
                            <button
                                type="button"
                                onMouseDown={handleMouseDown}
                                onMouseUp={handleMouseUp}
                                onMouseLeave={handleMouseUp}
                            >
                                {showPassword ? <PiEyeSlashThin className="w-4 h-4 absolute right-4 top-4 opacity-40" /> : <PiEyeThin className="w-4 h-4 absolute right-4 opacity-40 top-4" />}
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                                className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <label className="ml-3 block text-sm text-gray-800">
                                1週間ログインしたままにする。
                            </label>
                        </div>
                    </div>

                    <div className="!mt-8">
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                        >
                            {isLoading ? "'処理中..." : "パスワード"}
                        </button>
                        <button className="w-full py-[7px] px-6 border-2 border-gray-300 rounded-lg transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100 mt-4">
                            <div className="relative flex items-center justify-center">
                                <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg" className="absolute left-0 w-5" alt="google logo" />
                                <span className="block w-max font-semibold tracking-wide text-gray-700 text-[14px] transition duration-300 group-hover:text-blue-600">Google で続ける</span>
                            </div>
                        </button>
                    </div>
                </form>
                <p className="text-gray-800 text-sm !mt-8 text-center">
                    アカウントをお持ちでないですか？
                    <Link href="/register" className="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold">
                        会員登録
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default LoginModal;