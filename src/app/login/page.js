'use client'
import { signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../lib/firebaseConfig';
import { useRouter } from "next/navigation";
import { useState, useEffect } from 'react';

export default function Login() {
    const route = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAlreadyLog, setIsAlredyLog] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(user && isAlreadyLog === false) {
                setIsAlredyLog(true);
                route.push("/dashboard");
            } 
        });
        return () => unsubscribe();
    }, [isAlreadyLog]);

    const onLogin = async (e) => {
        e.preventDefault();

        if(!email || !password) {
            alert("You must enter an Email & Password!");
            return;
        }

        try{
            const userCredential = await (auth, email, password)
            console.log("User Created:", userCredential.user);
            route.push("/dashboard");
        } catch(error) {
            console.error("Firebase error:", error.code, error.message);
        }
    }

    const onLogGoogle = async () => {
        const provider = new GoogleAuthProvider();

        try{
            const userCredential = await signInWithPopup(auth, provider)
            console.log("User Logged In:", userCredential.user);
            route.push("/dashboard");
        }catch(error) {
            console.error("Firebase error:", error.code, error.message);
        }
    }

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-slate-400">
          <div className="flex flex-col items-center gap-4 p-8 bg-white rounded-lg shadow-md w-[350px]">
            <form className="flex flex-col w-full items-center" onSubmit={onLogin}>
              <input
                type="email"
                placeholder=" Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full h-10 p-2 mb-6 rounded-md  shadow border"
              />
              <input
                type="password"
                placeholder=" Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-10 p-2 mb-6 rounded-md  shadow border"
              />
              <button
                type="submit"
                className="w-[100px] px-4 py-2 text-[#1A2130] bg-[#E7F0DC] text-center rounded-md transition hover:bg-[#d4e7c0]"
              >
                Login
              </button>
              <p className="mt-5 mb-5 text-center text-lg">or</p>
              <button
                type="button"
                onClick={onLogGoogle}
                className="w-full h-10 p-2 rounded-md  shadow border"
              >
                Login with Google
              </button>
            </form>
          </div>
        </div>
      )
      
}