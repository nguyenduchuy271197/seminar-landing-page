import Link from "next/link";
import Banner from "../_components/banner";
import SeminarList from "../_components/seminar-list";
import SeminarList3 from "../_components/seminar-list-3";

export default function HomePage() {
  return (
    // <div>
    //   <ul className="space-y-2">
    //     <li>
    //       <Link href="/chinese-webinar">Chinese Webinar</Link>
    //     </li>
    //     <li>
    //       <Link href="/japanese-webinar">Japanese Webinar</Link>
    //     </li>
    //     <li>
    //       <Link href="/dating-webinar">Dating Webinar</Link>
    //     </li>
    //   </ul>
    // </div>
    <div className="space-y-24 pb-16">
      <Banner />
      <SeminarList3 />
      <SeminarList />
    </div>
  );
}
