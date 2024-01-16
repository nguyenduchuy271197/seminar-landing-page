import Banner from "../_components/banner";
import SeminarList from "../_components/seminar-list";
import Lecturers from "../_components/lecturers";

export default function HomePage() {
  return (
    <div className="space-y-24 pb-16">
      <Banner />
      <SeminarList />

      {/* <Lecturers /> */}
    </div>
  );
}
