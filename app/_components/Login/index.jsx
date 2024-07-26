"use client";

import React, { useState } from "react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/react";
import { Checkbox } from "@nextui-org/checkbox";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { HiMiniEye, HiMiniEyeSlash } from "react-icons/hi2";
import { signIn } from "next-auth/react";
import Image from "next/image";
import logo from "../../Assets/cht_logo.png";

import { useToast } from "../../../components/ui/use-toast";
import { ToastAction } from "../../../components/ui/toast";

const Login = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  async function handleSubmit() {
    const signInData = await signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
    });

    if (signInData?.error !== null) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    } else {
      toast({
        variant: "success",
        title: "Logging you in...",
        description: "",
      });
      router.refresh();
      router.push("/dashboard");
    }
  }

  return (
    <>
      <div className="flex justify-between p-4 items-center border-b max-md:flex-wrap">
        <div className="flex items-center gap-3">
          <Image
            src={logo}
            width={60}
            height={60}
            alt="Logo"
            className="rounded-full"
          />
          <h3 className="font-semibold text-xl">Community Health Toolkit</h3>
        </div>
      </div>

      <div className="flex items-center justify-center h-[90vh]">
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
                onPress={handleSubmit}
              >
                Login
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
