'use client'
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../lib/firebaseConfig';
import { useState } from 'react';
import { useRouter } from "next/navigation";
import Link from 'next/link';

export default function Register() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password do not match!");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User Created:", userCredential.user);
      await signOut(auth);
      
      router.push("/login");
    } catch (error) {
      console.error("Firebase Error:", error.code, error.message);
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-slate-400">
      <div className="flex flex-col items-center gap-4 p-8 bg-white rounded-lg shadow-md w-[350px]">
        <form className="flex flex-col w-full items-center" onSubmit={onSubmit}>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full h-10 p-2 mb-4 rounded-md shadow border"
          />
          <input
            type="password"
            placeholder="Create password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full h-10 p-2 mb-4 rounded-md shadow border"
          />
          <input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="w-full h-10 p-2 mb-4 rounded-md shadow border"
          />
          <button
            type="submit"
            className="w-[100px] px-4 py-2 text-[#1A2130] bg-[#E7F0DC] text-center rounded-md transition hover:bg-[#d4e7c0]"
          >
            Sign Up
          </button>
          <p className="mt-4 text-center text-sm">
            Already have an account?{' '}
            <Link href="/login" className="text-blue-500 hover:underline">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
