import { Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function PhoneCall() {
  return (
    <Link
      href="tel:086 713 3779"
      className="animate-play text-white bg-secondary size-14 sm:size-16 flex justify-center items-center mx-auto rounded-full border-2 border-secondary"
    >
      <Phone className="animate-waving" />
    </Link>
  );
}
