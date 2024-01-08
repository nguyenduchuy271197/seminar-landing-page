"use client";

import { useState } from "react";
import Logo from "./logo";
import { Button } from "./ui/button";
import Link from "next/link";
import NavList from "@/app/_components/share/nav-list";

export default function Navbar() {
  const [state, setState] = useState(false);

  return (
    <nav className="bg-white w-full border-b fixed top-0 left-0 right-0 z-40">
      <div className="container">
        <div className="lg:flex items-center py-1">
          <div className="flex items-center justify-between py-3 lg:py-5 lg:block">
            <Logo />
            <div className="lg:hidden">
              <button
                className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                onClick={() => setState(!state)}
              >
                {state ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${
              state ? "block" : "hidden"
            }`}
          >
            <NavList />
          </div>
          <div className="hidden lg:inline-flex">
            <Link href="/thanh-toan">
              <Button variant="secondary">Giữ vé ngay</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
