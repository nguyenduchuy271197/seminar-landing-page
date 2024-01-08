import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <ul className="space-y-2">
        <li>
          <Link href="/chinese-webinar">Chinese Webinar</Link>
        </li>
        <li>
          <Link href="/japanese-webinar">Japanese Webinar</Link>
        </li>
        <li>
          <Link href="/dating-webinar">Dating Webinar</Link>
        </li>
      </ul>
    </div>
  );
}
