import React, { ReactNode } from "react";
import Navbar, { NAVBAR_HEIGHT } from "./_components/navbar";
import PhoneCall from "../_components/phone-call";
import MessengerChat from "../_components/messenger-chat";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div style={{ marginTop: NAVBAR_HEIGHT }}>
      <Navbar />
      {children}
      <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8">
        <div className="flex flex-col gap-4">
          <MessengerChat />
          <PhoneCall />
        </div>
      </div>
    </div>
  );
}
