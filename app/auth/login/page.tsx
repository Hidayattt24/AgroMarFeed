'use client';
import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { login, initiateGoogleLogin, initiateGitHubLogin } from '@/lib/auth';
import { AuthCredentials } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

export default function LoginPage() {
  const [credentials, setCredentials] = useState<AuthCredentials>({ email: '', password: '' });
  const [error, setError] = useState<string>('');
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await login(credentials);
      router.push('/');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-5 p-4">
      {/* Back Button - Outside Container */}
        <div className="absolute top-8 left-8 z-10">
          <Link href="/" className="bg-6  hover:bg-2 transition-colors shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-bg-1">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </Link>
        </div>
      <div className="w-full max-w-6xl bg-7 rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden relative">
        {/* Left: Image Container with Fixed Aspect Ratio */}
        <div className="relative w-full md:w-1/2 p-4 flex items-center justify-center">
          <div className="relative w-full h-auto aspect-square">
            <Image
              src="/images/loginimage.png"
              alt="Login Illustration"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Right: Form */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-center bg-7">
          <div className="max-w-sm w-full mx-auto">
            <div className="flex justify-center mb-6">
              <Image src="/images/agromarfeed-logo.png" alt="Logo" width={60} height={60} className="rounded-full" />
            </div>
            <h2 className="text-2xl font-semibold text-center text-bg-1 mb-6">Login</h2>

            {error && <p className="text-red-500 text-center mb-4 text-sm">{error}</p>}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-bg-1 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={credentials.email}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-6 text-bg-1 border-none rounded-lg focus:ring-2 focus:ring-bg-2 outline-none placeholder:text-bg-1/50"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-bg-1 mb-1">Password</label>
                <input
                  type="password"
                  name="password"
                  value={credentials.password}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-6 text-bg-1 border-none rounded-lg focus:ring-2 focus:ring-bg-2 outline-none placeholder:text-bg-1/50"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-2 text-white font-medium py-3 rounded-lg hover:bg-3 transition duration-200"
              >
                Login
              </button>
            </form>

            <div className="mt-6 space-y-3">
              <button
                onClick={initiateGoogleLogin}
                className="w-full bg-red-600 text-white font-medium py-3 rounded-lg hover:bg-red-700 transition duration-200"
              >
                Login with Google
              </button>
              <button
                onClick={initiateGitHubLogin}
                className="w-full bg-gray-800 text-white font-medium py-3 rounded-lg hover:bg-gray-900 transition duration-200"
              >
                Login with GitHub
              </button>
            </div>

            <p className="mt-6 text-center text-sm text-bg-1">
              Don't have an account?{' '}
              <a href="/auth/register" className="text-bg-3 hover:underline">
                Register
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}