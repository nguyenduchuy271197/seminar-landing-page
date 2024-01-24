"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavButton() {
  const pathname = usePathname();
  const slug = pathname.slice(1);

  return (
    <Link href={`/thanh-toan?slug=${slug}`}>
      <Button variant="secondary">Giữ vé ngay</Button>
    </Link>
  );
}
