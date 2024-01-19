"use client";

import { useState } from "react";
import Logo from "../../../components/logo";
import { Button } from "../../../components/ui/button";
import Link from "next/link";

export const NAVBAR_HEIGHT = 64;

export default function Navbar() {
  const [state, setState] = useState(false);

  return (
    <nav
      className="bg-white w-full border-b fixed top-0 left-0 right-0 z-40"
      style={{ height: NAVBAR_HEIGHT }}
    >
      <div className="container">
        <div className="lg:flex justify-between items-center py-1">
          <div className="flex items-center justify-between lg:block">
            <Logo />
          </div>
          <div className="hidden lg:inline-flex">
            <Link href="/#cac-khoa-hoc">
              <Button variant="secondary">Xem khoá học</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
