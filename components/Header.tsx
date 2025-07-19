import Link from "next/link";
import React from "react";
import { IoMusicalNoteSharp } from "react-icons/io5";
import { Button } from "./ui/button";
import { ModeToggle } from "./DarkModeToggle";
import LogOutButton from "./LogOutButton";
import { getUser } from "@/auth/server";

const Header = async () => {
  const user = await getUser();

  return (
    <header className="w-full flex justify-between items-center">
      <Link href="/">
        <div className="flex w-fit items-center justify-center text-4xl font-bold">
          <IoMusicalNoteSharp />
          <p>Abdotes.</p>
        </div>
      </Link>

      <div className="flex w-fit items-center justify-center gap-2">
        {user ? (
          <LogOutButton />
        ) : (
          <>
            <Button asChild variant={"outline"}>
              <Link href="/sign-up">Sign Up</Link>
            </Button>

            <Button asChild variant={"outline"}>
              <Link href="/login">Login</Link>
            </Button>
          </>
        )}
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
