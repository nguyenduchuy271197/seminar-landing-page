import React, { ReactNode } from "react";
import Navbar, { NAVBAR_HEIGHT } from "./_components/navbar";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div style={{ marginTop: NAVBAR_HEIGHT }}>
      <Navbar />
      {children}
    </div>
  );
}
