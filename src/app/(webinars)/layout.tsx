import React, { ReactNode } from "react";
import Navbar from "./_components/navbar";
import { NAVBAR_HEIGHT } from "../(marketing)/_components/navbar";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div style={{ marginTop: NAVBAR_HEIGHT }}>
      <Navbar />
      {children}
    </div>
  );
}
