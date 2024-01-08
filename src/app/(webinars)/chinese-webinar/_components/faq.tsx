import HighlightWord from "@/components/highlight-word";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section id="faq">
      <div className="container">
        <div className="space-y-16 sm:pt-28">
          <div className="text-center">
            <h2 className="h2">
              Bạn<HighlightWord>thắc mắc</HighlightWord>nhưng chưa có lời giải?
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="body1-semi">
                  Làm thế nào để cải thiện phản xạ ngôn ngữ khi nói Tiếng Trung?
                </AccordionTrigger>
                <AccordionContent className="body2-regular">
                  Để cải thiện phản xạ ngôn ngữ khi nói Tiếng Trung, thực hành
                  hàng ngày là quan trọng. Sử dụng các ứng dụng học tập trên
                  điện thoại di động hoặc tham gia các cộng đồng trò chuyện, kết
                  bạn để thực hành giao tiếp. Đồng thời, lắng nghe và mô phỏng
                  cách người bản xứ phát âm cũng giúp nâng cao kỹ năng nói của
                  bạn.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="body1-semi">
                  Làm thế nào để duy trì và nâng cao trình độ Tiếng Trung sau
                  khi đã học?
                </AccordionTrigger>
                <AccordionContent className="body2-regular">
                  Để duy trì và nâng cao trình độ Nói Tiếng Trung, hãy thường
                  xuyên luyện tập, tham gia các nhóm thảo luận trên mạng xã hội,
                  xem phim hoặc đọc sách bằng Tiếng Trung để giữ vững phong độ
                  nói của bạn.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="body1-semi">
                  Lợi ích khi sử dụng Tiếng Trung trong môi trường kinh doanh?
                </AccordionTrigger>
                <AccordionContent className="body2-regular">
                  Nếu công việc của bạn liên quan tới mảng kinh doanh như thu
                  mua, bán hàng,… thì sử dụng Tiếng Trung mang lại lợi ích lớn,
                  đặc biệt là khi giao tiếp với đối tác Trung Quốc. Điều này mở
                  rộng cơ hội kinh doanh, tạo dựng mối quan hệ chặt chẽ và thể
                  hiện sự tôn trọng đối với văn hóa kinh doanh của đối tác.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="body1-semi">
                  Mất bao lâu để nói thành thạo Tiếng Trung?
                </AccordionTrigger>
                <AccordionContent className="body2-regular">
                  Thời gian để nói thành thạo phụ thuộc vào nhiều yếu tố như mức
                  độ cam kết, thời gian luyện tập hàng ngày và phương pháp học.
                  Tuy nhiên, với sự nỗ lực đều đặn, đạt được trình độ giao tiếp
                  cơ bản trong vài tháng là hoàn toàn có thể.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="body1-semi">
                  Các nền tảng phổ biến để nói chuyện bằng Tiếng Trung với người
                  bản xứ?
                </AccordionTrigger>
                <AccordionContent className="body2-regular">
                  Tất nhiên! Các nền tảng trao đổi ngôn ngữ phổ biến như Tandem
                  và HelloTalk sẽ giúp kết nối bạn với những người nói Tiếng
                  Trung bản xứ để thực hành giao tiếp.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="body1-semi">
                  Làm thế nào để học Tiếng Trung hiệu quả?
                </AccordionTrigger>
                <AccordionContent className="body2-regular">
                  Bạn có thể sử dụng các nền tảng tương tác như Duolingo hoặc
                  HelloChinese, Rosetta Stone và Tandem,… Các ứng dụng này cung
                  cấp bài học thú vị, bài tập tương tác và thực hành cách phát
                  âm giúp cải thiện trình độ tiếng Trung của bạn nhanh chóng..
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger className="body1-semi">
                  Tôi có thể tìm các nguồn tài nguyên miễn phí để học Tiếng
                  Trung ở đâu?
                </AccordionTrigger>
                <AccordionContent className="body2-regular">
                  Có, bây giờ rất nhiều trang web như BBC Languages, các kênh
                  YouTube về tiếng Trung cung cấp các bài học miễn phí và hữu
                  ích cho những bạn mới học và tự học Tiếng Trung.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8">
                <AccordionTrigger className="body1-semi">
                  Làm sao để giữ động lực khi học Tiếng Trung?
                </AccordionTrigger>
                <AccordionContent className="body2-regular">
                  Hãy đặt ra cho mình các mục tiêu có thể đạt được, tham gia vào
                  các nhóm tương tác, tạo các mối quan hệ với một vài người bạn
                  cùng học tiếng Trung hoặc đơn giản là đắm chìm trong văn hóa
                  Trung Quốc qua phim, nhạc, ẩm thực,…
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9">
                <AccordionTrigger className="body1-semi">
                  Làm thế nào để vượt qua thách thức trong việc học chữ Hán?
                </AccordionTrigger>
                <AccordionContent className="body2-regular">
                  Bạn có thể chia nhỏ chữ thành các thành phần, và sử dụng ứng
                  dụng flashcard như Anki và thực hành viết để nâng cao khả năng
                  nhận biết chữ Hán của bạn.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10">
                <AccordionTrigger className="body1-semi">
                  Các nguồn tài nguyên online có thể hỗ trợ việc phát âm Tiếng
                  Trung không?
                </AccordionTrigger>
                <AccordionContent className="body2-regular">
                  Các trang web như Forvo và FluentU cung cấp đoạn âm thanh và
                  video, giúp cho phát âm và ngữ điệu của bạn trở nên hoàn thiện
                  hơn trong Tiếng Trung.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="pt-10">
              <p className="body1-semi">Bạn vẫn thắc mắc...</p>
              <span className="body2-semi">
                Hãy liên hệ với chúng tôi qua{" "}
                <a href="#" className="text-primary font-semibold">
                  Messenger
                </a>
                .
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
