import HighlightWord from "@/components/highlight-word";
import { Button } from "@/components/ui/button";

export default function StoryTable() {
  const tableItems = [
    {
      job: "Kế toán",
      salary: "150.000 - 250.000",
      average: "Cell text",
    },
    {
      job: "Phân tích tài chính",
      salary: "150.000 - 350.000",
      average: "Cell text",
    },
    {
      job: "Thiết kế HTML",
      salary: "180.000 - 350.000",
      average: "Cell text",
    },
    {
      job: "Nhà phát triển Java",
      salary: "240.000 - 550.000",
      average: "Cell text",
    },
    {
      job: "Giám đốc tiếp thị",
      salary: "300.000 - 800.000",
      average: "Cell text",
    },
  ];
  return (
    <section>
      <div className="max-w-screen-lg px-8 mx-auto">
        <div className="grid sm:grid-cols-[400px_1fr] gap-10">
          <div>
            <h3 className="text-4xl mb-6">
              Một tháng bạn kiếm được bao nhiêu?
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </p>
          </div>

          {/* Table */}
          <div className="">
            <table className="w-full border table-auto text-sm text-left mb-6 shadow-sm overflow-x-auto">
              <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                <tr className="uppercase">
                  <th className="py-3 px-6">Nghề nghiệp</th>
                  <th className="py-3 px-6">
                    Mức lương trung bình hằng năm (CNV)
                  </th>
                  <th className="py-3 px-6">Mức lương trung bình</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 divide-y">
                {tableItems.map((item, idx) => (
                  <tr key={idx}>
                    <td className="px-6 py-4 whitespace-nowrap">{item.job}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.salary}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.average}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Description */}
            <h3 className="text-2xl font-bold text-center mb-8">
              Mức lương trung bình tại Thượng Hải 2021
            </h3>
          </div>
        </div>
        <div className="flex justify-center items-center pt-6">
          <Button variant="secondary" size="lg">
            Nhận ngay công việc lương 80 triệu
          </Button>
        </div>
      </div>
    </section>
  );
}
