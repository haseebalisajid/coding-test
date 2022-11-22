import React, { FC, useState } from "react";
import useAPI from "../hooks/useAPI";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
const Login: FC = () => {
  const { getAuthenticate } = useAPI();
  const navigate=useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const login=async(e:React.MouseEvent<HTMLButtonElement,MouseEvent>)=>{
    e.preventDefault();
    if(email && password){
        const result=await getAuthenticate(email,password);
        if(result?.user){
            toast('Login Success',{type:"success",autoClose:1000});
            setTimeout(()=>{
                navigate('/Welcome')
            },1200)
        }
    }
  }
  return (
    <div className="flex flex-col justify-center min-h-screen">
      <div className="w-full p-6 m-auto bg-white rounded-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
          Sign in
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label className="text-sm font-semibold text-gray-800">Email</label>
            <input
              type="email"
              className="w-full px-4 mt-2 text-black-700 bg-white-700 border rounded-md focus:border-purple-400 focus:outline-none"
              value={email}
              onChange={(e)=>{
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="mb-6">
            <label className="text-sm font-semibold text-gray-800">Password</label>
            <input
              type="password"
              className="w-full px-4 mt-2 text-black-700 bg-white-700 border rounded-md focus:border-purple-400 focus:outline-none"
              value={password}
              onChange={(e)=>{
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="mt-6">
              <button className="w-full px-4 py-2 text-white cursor-pointer bg-purple-700 rounded-md hover:big-purple-600 focus:outline-none" onClick={login}>
                Login
              </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
