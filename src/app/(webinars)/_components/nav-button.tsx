"use client";

import { classes } from "@/app/_components/data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavButton() {
  const pathname = usePathname();
  const slug = pathname.slice(1);

  const classDetail = classes.find((c) => c.slug === slug);

  if (!classDetail) return null;

  const status = classDetail.status;

  return (
    <Link
      href={
        status === "happened"
          ? `/waitlist?slug=${slug}`
          : `/thanh-toan?slug=${slug}`
      }
    >
      <Button variant="secondary">Giữ vé ngay</Button>
    </Link>
  );
}
