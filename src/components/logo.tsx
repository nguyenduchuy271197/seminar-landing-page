import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image src="/logo-black.svg" width={150} height={50} alt="Vercel" />
    </Link>
  );
}
