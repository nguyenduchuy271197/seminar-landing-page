"use client";

import { useState } from "react";
import Logo from "../../../components/logo";
import { Button } from "../../../components/ui/button";
import Link from "next/link";
import NavList from "@/app/(webinars)/chinese-one-day-class-ngung-hoc-vet-tieng-trung-voi-phuong-phap-mst-chi-3-gio-thanh-thao-tieng-trung-tao-an-tuong-tuyet-doi-trong-moi-cuoc-phong-van-xin-viec/_components/share/nav-list";
import { classes } from "@/app/_components/data";
import NavButton from "./nav-button";

const NAVBAR_HEIGHT = 64;

export default function Navbar() {
  const [state, setState] = useState(false);

  return (
    <nav className="bg-white w-full border-b fixed top-0 left-0 right-0 z-40">
      <div className="container">
        <div
          className="lg:flex items-center py-1"
          style={{ height: NAVBAR_HEIGHT }}
        >
          <div className="flex items-center justify-between lg:block">
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
            className={`flex-1 bg-white w-full lg:block lg:pb-0 lg:mt-0 absolute top-full left-0 px-8 lg:px-0 lg:static ${
              state ? "block" : "hidden"
            }`}
          >
            <NavList />
          </div>
          <div className="hidden lg:inline-flex">
            <NavButton />
          </div>
        </div>
      </div>
    </nav>
  );
}
