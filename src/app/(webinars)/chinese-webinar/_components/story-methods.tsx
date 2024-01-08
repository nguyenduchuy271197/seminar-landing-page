import HighlightWord from "@/components/highlight-word";
import Image from "next/image";

const table = [
  {
    title: "Thời gian học",
    traditional: "20 phút",
    fast: "1 giờ",
  },
  {
    title: "Hiệu quả",
    traditional: "Ngay lập tức",
    fast: "Chậm",
  },
  {
    title: "Ghi nhớ",
    traditional: "Kém",
    fast: "Tốt",
  },
  {
    title: "Phản xạ",
    traditional: "Kém",
    fast: "Tốt",
  },
];

export default function StoryMethods() {
  return (
    <section>
      <div className="container">
        <h2 className="h2 md:w-[1000px] mb-11">
          Lột xác với phương pháp MST được thiết kế{" "}
          <span className="text-primary">riêng biệt</span> và
          <HighlightWord>duy nhất</HighlightWord>cho bạn
        </h2>
        <div className="flex flex-col-reverse md:grid md:grid-cols-[4fr_3fr] gap-20 sm:gap-28">
          <div className="flex flex-col gap-10">
            <table>
              <thead className="uppercase">
                <tr className="font-bold text-left">
                  <th></th>
                  <th className=" text-neutral-600 subtitle2">
                    Phương pháp truyền thống
                  </th>
                  <th className="uppercase bg-[#008900] text-white border-white border rounded-t-sm px-8 py-4 subtitle2">
                    Phương Pháp học MST
                  </th>
                </tr>
              </thead>
              <tbody>
                {table.map((content, idx) => (
                  <tr key={idx} className="border-t-[1px]">
                    <td className="subtitle2 w-[160px]">{content.title}</td>
                    <td className="body1-regular">{content.traditional}</td>
                    <td className="bg-[#008900] text-white body1-semi px-8 py-4 border">
                      {content.fast}
                    </td>
                  </tr>
                ))}

                <tr className="border-t-[1px]">
                  <td className="subtitle2 w-[160px]">Lâu dài</td>
                  <td className="body1-regular">Quên dần</td>
                  <td className="bg-[#008900] text-white body1-semi px-8 py-4 border rounded-b-sm">
                    Nhớ lâu
                  </td>
                </tr>
              </tbody>
            </table>

            <p className="body2-regular">
              93% mọi người học tiếng Trung theo các phương pháp truyền thống để
              tiết kiệm thời gian nhưng dễ quên, phải học đi học lại nhiều lần
              và tốn thời gian hơn.
            </p>

            <p className="body2-regular">
              Với phương pháp 3H Học - Hiểu - Hành giúp bạn đầu tư thời gian
              hiệu quả và thông minh, dứt điểm ngay trong 1 lần học.
            </p>

            <div className="space-y-10">
              <h3 className="subtitle2">
                Nếu việc học vẫn chưa đâu vào đâu, bạn sẽ...
              </h3>

              <div className="relative">
                <div className="grid sm:grid-cols-2 rounded-md overflow-hidden">
                  <div className="subtitle2">
                    <p className="uppercase bg-[#D9EDD9] text-[#008900] text-center sm:text-left py-5 sm:pl-8 pb-16 sm:pb-5">
                      Đi kiếm 45 triệu/tháng
                    </p>
                  </div>
                  <div>
                    <p className="subtitle2 uppercase bg-red-100 text-red-500 py-5 text-center sm:text-right sm:pr-8 pt-16 sm:pt-5">
                      Nhìn người khác thành công
                    </p>
                  </div>
                </div>
                <div className="subtitle2 bg-black uppercase text-white rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-24 flex items-center justify-center">
                  <p>Hay</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <Image src="/Diagram.png" alt="Diagram" width={445} height={512} />
          </div>
        </div>
      </div>
    </section>
  );
}
