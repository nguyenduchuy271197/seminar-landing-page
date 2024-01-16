import Banner from "../_components/banner";
import SeminarList from "../_components/seminar-list";
import Lecturers from "../_components/lecturers";

export default function HomePage() {
  return (
    <div className="space-y-24 pb-16">
      <h1 className="sr-only">
        Turning Point | Chúng tôi tin đây là thời khắc bạn cần lập tức thay đổi
        cuộc sống của bạn.
      </h1>
      <Banner />
      <SeminarList />

      {/* <Lecturers /> */}
    </div>
  );
}
