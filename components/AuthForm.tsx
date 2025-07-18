"use client";
import { useRouter } from "next/navigation";
import React, { useTransition } from "react";
import { toast } from "sonner";
import { CardContent, CardFooter } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import Link from "next/link";

interface AuthProps {
  type: "login" | "signUp";
}

const AuthForm = ({ type }: AuthProps) => {
  const isLoginForm = type === "login";
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const handleSubmit = (formData: FormData) => {
    console.log(formData);
  };

  return (
    <form action={handleSubmit}>
      <CardContent>
        <div>
          <div>
            <Label className="text-sm mb-1" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="example@email.com"
              required
              disabled={isPending}
            />
          </div>
          <div className="mt-2">
            <Label className="text-sm mb-1" htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="********"
              required
              disabled={isPending}
            />
          </div>
        </div>
      </CardContent>

      <CardFooter className="mt-6 flex justify-end flex-col items-center gap-1">
        <Button
          type="submit"
          className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
          disabled={isPending}
          onClick={() => {
            startTransition(() => {
              handleSubmit(new FormData());
            });
          }}
        >
          {isPending ? (
            <Loader2 className="animate-spin" />
          ) : isLoginForm ? (
            "Login"
          ) : (
            "Sign Up"
          )}
        </Button>
        <p className="mt-1 text-sm text-gray-500">
          {isLoginForm ? "Don't have an account? " : "Already have an account? "}
          <Link href={isLoginForm ? "/sign-up" : "/login"} className="text-indigo-600 hover:text-shadow-sm hover:text-shadow-indigo-600/50 transition-all">
            {isLoginForm ? "Sign Up" : "Login"}
          </Link>
        </p>
      </CardFooter>
    </form>
  );
};

export default AuthForm;
