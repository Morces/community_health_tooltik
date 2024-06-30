"use client";

import React, { useState } from "react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/react";
import { Checkbox } from "@nextui-org/checkbox";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { HiMiniEye, HiMiniEyeSlash } from "react-icons/hi2";

const Login = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  async function handleSubmit() {
    let res = await fetch("/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    if (res.ok) {
      router.push("/dashboard");
    }
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-2/5 bg-white p-4 rounded-lg shadow-2xl max-md:w-[90%]">
        <h3 className="font-bold text-center mt-4 text-2xl">Login Here</h3>
        <div className="mt-5 w-full space-y-8">
          <div className="grid w-full items-center gap-2">
            <Input
              type="email"
              label="Email"
              labelPlacement="outside"
              variant="bordered"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
            />
          </div>
          <div className="grid w-full items-center gap-2">
            <Input
              label="Password"
              labelPlacement="outside"
              variant="bordered"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <HiMiniEyeSlash className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <HiMiniEye className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isVisible ? "text" : "password"}
            />
          </div>

          <div className="flex items-center justify-between max-md:flex-wrap">
            <div className="flex items-center space-x-2 mt-1">
              <Checkbox
                size="md"
                value={remember}
                onChange={(e) => setRemember(e.target.value)}
              >
                Remember Me?
              </Checkbox>
            </div>
            <Link href="">Forgot password?</Link>
          </div>

          <div className="mt-2 w-full flex items-center justify-center">
            <Button
              variant="solid"
              size="md"
              className="w-full"
              color="primary"
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
