import HighlightWord from "@/components/highlight-word";
import { Check, X } from "lucide-react";
import Image from "next/image";

export default function Story() {
  const story1 = [
    {
      url: "/story/Story Polaroid Image-1.png",
      description:
        "Năm 18 tuổi, với bao hi vọng và hoài bão của tuổi trẻ, tôi nộp đơn vào ngành ngôn ngữ Hàn. Thế nhưng, khi cầm kết quả trong tay, mọi thứ sụp đổ, tôi rớt nguyện vọng 1. Tôi mông lung và mất định hướng. Dưới sức ép từ gia đình, tôi phải lựa chọn ngôn ngữ Nhật như giải pháp thay thế.",
    },
    {
      url: "/story/Story Polaroid Image-2.png",
      description:
        "Mọi chuyện càng tệ hơn, tôi gặp khó khăn khi phát âm và không thể truyền đạt theo đúng ý mình. Dần dần tôi mất đi sự tự tin và ngại giao tiếp. Sau 2 năm chán nản, tôi muốn bỏ cuộc vì mình không thể làm tốt được bất cứ điều gì.",
    },
    {
      url: "/story/Story Polaroid Image-3.png",
      description:
        "Nhưng áp lực từ phía gia đình và nguyên tắc sống không cho phép tôi dừng bước, tôi cần hoàn thành việc mình đã bắt đầu. Tôi nhanh chóng vực dậy và nắm lấy tấm vé du học Nhật Bản để làm lại lần nữa.",
    },
  ];
  const story2 = [
    {
      url: "/story/Story Polaroid Image-4.png",
      description:
        "Đặt chân tới Nhật, mục tiêu của tôi là làm sao cải thiện khả năng nói tệ hại của mình. Khổ luyện thôi! Thành công mấu chốt là tập trung vào việc lắng nghe và mô phỏng âm thanh chính xác từ người bản xứ.",
    },
    {
      url: "/story/Story Polaroid Image-5.png",
      description:
        "Thay vì chỉ chú ý đến cách từ vựng được phát âm, tôi bắt đầu chú ý đến cách người Nhật Bản thực sự phát âm các từ và câu, thần thái, cách họ phản ứng với các từ ngữ, đặc biệt là cảm thán.",
    },
    {
      url: "/story/Story Polaroid Image-6.png",
      description:
        "Mọi thứ thay đổi 100%. Phát âm của tôi trở nên chính xác, gọn gàng và diễn đạt ý một cách rõ ràng hơn. Bí kíp vẫn là quan sát cách người Nhật phản ứng trong cuộc sống hàng ngày. Đó là lúc tôi tìm ra bí kíp giúp cải thiện tiếng Nhật: KotoOnsei.",
    },
  ];
  const story3 = [
    {
      url: "/story/Story Polaroid Image-7.png",
      description:
        "Tôi nhìn các anh chị sensai và ngưỡng mộ tài năng của họ. Tôi muốn cố gắng hết mình để trở thành một người thật giỏi, để sau này các hậu bối cũng sẽ nhìn tôi với ánh mắt như vậy.",
    },
    {
      url: "/story/Story Polaroid Image-8.png",
      description:
        "Lý tưởng đó đã tiếp thêm sức mạnh cho tôi vượt qua áp lực và nỗi sợ “không đủ giỏi” để chiến thắng Giải đặc biệt cuộc thi hùng biện tiếng Nhật lần thứ 12 tại trường Đại học Wakayama, trở thành dịch thuật viên ở các Lễ hội và Hội thảo du học Nhật Bản và Đại sứ Việt Nam của Mạng lưới Cựu Sinh viên Quốc tế - Đại học Wakayama.",
    },
    {
      url: "/story/Story Polaroid Image-9.png",
      description:
        "Tới nay, tôi tích luỹ được 8 năm kinh nghiệm làm ở các công ty Nhật, hoàn thành bậc học Thạc sĩ ngành Kinh Doanh Quốc Tế. Hiện tại, tôi đảm nhận vai trò Operation Manager (Quản lý vận hành) khi ở ngưỡng tuổi 30, độ tuổi rất trẻ so với các cấp quản lý ở Nhật. Tôi dám khẳng định rằng tôi chưa lần nào hối hận vì những quyết định của bản thân ngày đó.",
    },
  ];
  return (
    <section id="story">
      <div>
        <div className="space-y-2 text-center max-w-[750px] mx-auto py-16">
          <h2 className="h2">
            Cuộc đời xoay chuyển hoàn toàn khi biết đến{" "}
            <HighlightWord>KotoOnsei</HighlightWord>
          </h2>

          <p className="body2-regular">
            Câu chuyện có thật từ hành trình của Ms. Katherine Trần
          </p>
        </div>

        {/* <ul className="grid sm:grid-cols-3 gap-8">
            {story.map((s, idx) => (
              <li key={idx} className="h-full flex flex-col items-center">
                <div>
                  <Image src={s.url} alt="Story 1" width={424} height={350} />
                </div>

                <div className="grid grow auto-rows-fr max-w-[424px]">
                  <div className="bg-[#FFE4DF] flex gap-4 p-6">
                    <div className="size-4 rounded-full bg-primary shrink-0 flex justify-center items-center mt-1">
                      <X className="text-white size-3" />
                    </div>
                    <p className="body1-regular">{s.no}</p>
                  </div>

                  <div className="bg-[#D9EDD9] flex gap-4 p-6">
                    <div className="size-4 rounded-full bg-[#008900] shrink-0 flex justify-center items-center mt-1">
                      <Check className="text-white size-3" />
                    </div>
                    <p className="body1-regular">{s.yes}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul> */}

        <div className="bg-neutral-900">
          <div className="container">
            <div className="h3 text-center text-white py-16">
              <h3 className="h3">
                Chương 1: Đánh mất ước mơ,{" "}
                <span className="text-secondary">bỏ cuộc</span> hay{" "}
                <HighlightWord className="text-secondary">
                  đi tiếp
                </HighlightWord>
                ?
              </h3>
            </div>
            <ul className="grid sm:grid-cols-3 gap-8 pb-16">
              {story1.map((stories1, idx) => (
                <li
                  key={idx}
                  className="h-full flex flex-col items-center bg-[url('/story/Line.png')] rounded-md"
                >
                  <div className="pt-8">
                    <Image
                      src={stories1.url}
                      alt="Story 1"
                      width={424}
                      height={350}
                    />
                  </div>

                  <div className="max-w-[424px]">
                    <div className="flex gap-4 p-6">
                      <p className="body1-regular">{stories1.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-secondary">
          <div className="container">
            <div className="h3 text-center py-16">
              <h3 className="h3">
                Chương 2: Tôi tưởng mình đã chìm, chiếc phao cứu sinh{" "}
                <HighlightWord>KotoOnsei</HighlightWord>
              </h3>
            </div>
            <ul className="grid sm:grid-cols-3 gap-8 pb-16">
              {story2.map((stories2, idx) => (
                <li
                  key={idx}
                  className="h-full flex flex-col items-center bg-[url('/story/Line.png')] rounded-md"
                >
                  <div className="pt-8">
                    <Image
                      src={stories2.url}
                      alt="Story 1"
                      width={424}
                      height={350}
                    />
                  </div>

                  <div className="max-w-[424px]">
                    <div className="flex gap-4 p-6">
                      <p className="body1-regular">{stories2.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-primary">
          <div className="container">
            <div className="h3 text-center text-white py-16">
              <h3 className="h3">
                Chapter 3: Tiếp bước các sensei, tôi muốn trở thành người{" "}
                <HighlightWord className="text-secondary">
                  xứng đáng
                </HighlightWord>{" "}
                để hậu bối noi theo
              </h3>
            </div>
            <ul className="grid sm:grid-cols-3 gap-8 pb-16">
              {story3.map((stories3, idx) => (
                <li
                  key={idx}
                  className="h-full flex flex-col items-center bg-[url('/story/Line.png')] rounded-md"
                >
                  <div className="pt-8">
                    <Image
                      src={stories3.url}
                      alt="Story 1"
                      width={424}
                      height={350}
                    />
                  </div>

                  <div className="max-w-[424px]">
                    <div className="flex gap-4 p-6">
                      <p className="body1-regular">{stories3.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
