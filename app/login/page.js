import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-2/5 bg-white p-4 rounded-lg shadow-2xl max-md:w-[90%]">
        <h3 className="font-bold text-center mt-4 text-2xl">Login Here</h3>
        <div className="mt-5 w-full space-y-8">
          <div className="grid w-full items-center gap-2">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" />
          </div>
          <div className="grid w-full items-center gap-2">
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" placeholder="*******" />
          </div>

          <div className="flex items-center justify-between max-md:flex-wrap">
            <div className="flex items-center space-x-2 mt-1">
              <Checkbox id="remember" />
              <label
                htmlFor="remember"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Remember me
              </label>
            </div>
            <Link href="">Forgot password?</Link>
          </div>

          <div className="mt-2 w-full flex items-center justify-center">
            <Button variant="default" size="lg" className="w-full" asChild>
              <Link href="/dashboard">Login</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
