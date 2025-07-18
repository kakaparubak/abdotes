"use client";
import { toast } from "sonner";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

const LogOutButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogOut = async () => {
    setIsLoading((prev) => !prev);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const errorMsg = null;

    if(!errorMsg) {
      toast.success("Logged Out", {
        description: "You have been succesfully logged out."
      })
      router.push("/")
    } else {
      toast.error("Uh oh...", {
        description: errorMsg,
      })
    }

    setIsLoading((prev) => !prev);

    console.log("logging out...");
  };

  return (
    <>
      <Button
        onClick={handleLogOut}
        variant={"outline"}
        className="w-20"
        disabled={isLoading}
      >
        {isLoading ? <Loader2 className="animate-spin" /> : "Log Out"}
      </Button>
    </>
  );
};

export default LogOutButton;
