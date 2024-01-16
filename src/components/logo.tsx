import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image src="/Logo 1.png" width={200} height={20} alt="Turning Point" />
    </Link>
  );
}
