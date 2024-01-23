import React, { ReactNode } from "react";
import Navbar, { NAVBAR_HEIGHT } from "./_components/navbar";
import PhoneCall from "../_components/phone-call";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div style={{ marginTop: NAVBAR_HEIGHT }}>
      <Navbar />
      {children}
      <PhoneCall />
    </div>
  );
}
