import HighlightWord from "@/components/highlight-word";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function FAQ() {
  return (
    <section id="faq">
      <div className="container">
        <div className="space-y-16 sm:pt-28">
          <div className="text-center">
            <h2 className="h2">
              Bạn <HighlightWord>thắc mắc</HighlightWord> nhưng chưa có lời
              giải?
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="body1-semi">
                  Quỹ đầu tư là gì và làm thế nào để đầu tư vào chúng?
                </AccordionTrigger>
                <AccordionContent className="body2-regular">
                  Quỹ đầu tư là một khoản tiền được thu thập từ nhiều nhà đầu tư
                  khác nhau để đầu tư vào một danh mục đa dạng của cổ phiếu,
                  trái phiếu hoặc tài sản khác, được quản lý bởi một quỹ quản lý
                  chuyên nghiệp. Để đầu tư vào quỹ, bạn có thể mở tài khoản tại
                  một tổ chức quản lý quỹ hoặc thông qua một ngân hàng hoặc công
                  ty chứng khoán.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="body1-semi">
                  Có những loại quỹ nào và chúng khác nhau như thế nào?
                </AccordionTrigger>
                <AccordionContent className="body2-regular">
                  Có nhiều loại quỹ như quỹ ETF (quỹ giao dịch trên sàn), quỹ cổ
                  phiếu, quỹ trái phiếu, quỹ tiền tệ, và quỹ cân bằng. Mỗi loại
                  quỹ có mục tiêu và chiến lược đầu tư riêng, phù hợp với nhu
                  cầu và mục tiêu đầu tư của từng nhà đầu tư.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="body1-semi">
                  Làm thế nào để chọn quỹ đầu tư phù hợp với mục tiêu và nguyện
                  vọng của tôi?
                </AccordionTrigger>
                <AccordionContent className="body2-regular">
                  Để chọn quỹ phù hợp, bạn cần xác định rõ mục tiêu đầu tư, mức
                  độ rủi ro mong muốn và thời gian đầu tư. Sau đó, nghiên cứu và
                  so sánh các quỹ theo lợi nhuận, rủi ro, và chi phí để chọn quỹ
                  tốt nhất phù hợp với bạn.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="body1-semi">
                  Quỹ đầu tư có những lợi ích gì so với việc đầu tư trực tiếp
                  vào cổ phiếu hoặc trái phiếu?
                </AccordionTrigger>
                <AccordionContent className="body2-regular">
                  Quỹ đầu tư mang lại sự đa dạng hóa, quản lý chuyên nghiệp,
                  tiết kiệm thời gian và nỗ lực nghiên cứu, cũng như giảm thiểu
                  rủi ro thông qua phân bổ tài sản. Đối với nhà đầu tư không
                  chuyên, đầu tư vào quỹ còn giúp tiếp cận dễ dàng vào thị
                  trường tài chính.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="body1-semi">
                  Làm thế nào để đánh giá hiệu suất của một quỹ đầu tư?
                </AccordionTrigger>
                <AccordionContent className="body2-regular">
                  Bạn có thể đánh giá hiệu suất của quỹ bằng cách so sánh lợi
                  nhuận trung bình hàng năm của quỹ với chỉ số thị trường hoặc
                  với các quỹ đầu tư khác cùng loại. Đồng thời, bạn cũng cần xem
                  xét lịch sử hiệu suất, chi phí và các yếu tố khác.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="body1-semi">
                  Quỹ đầu tư có những rủi ro nào và làm thế nào để kiểm soát
                  chúng?
                </AccordionTrigger>
                <AccordionContent className="body2-regular">
                  Rủi ro của quỹ đầu tư bao gồm rủi ro thị trường, rủi ro liên
                  quan đến loại tài sản đầu tư, và rủi ro quản lý. Để kiểm soát
                  rủi ro, bạn cần phải diversify danh mục đầu tư, nghiên cứu kỹ
                  lưỡng trước khi chọn quỹ, và tuân thủ kế hoạch đầu tư.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger className="body1-semi">
                  Tôi cần phải hiểu về gì trước khi quyết định đầu tư vào quỹ?
                </AccordionTrigger>
                <AccordionContent className="body2-regular">
                  Trước khi đầu tư vào quỹ, bạn cần hiểu rõ về mục tiêu đầu tư,
                  chiến lược đầu tư của quỹ, rủi ro và chi phí liên quan đến
                  quỹ, cũng như lịch sử hiệu suất và nguyên tắc quản lý của quỹ.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8">
                <AccordionTrigger className="body1-semi">
                  Làm thế nào để tìm hiểu về quản lý và chiến lược đầu tư của
                  một quỹ?
                </AccordionTrigger>
                <AccordionContent className="body2-regular">
                  Để tìm hiểu về quản lý và chiến lược đầu tư của một quỹ, bạn
                  có thể nghiên cứu về tổ chức quản lý quỹ, thông tin trên trang
                  web của quỹ, báo cáo thường niên của quỹ, và các bài viết phân
                  tích từ các chuyên gia tài chính.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9">
                <AccordionTrigger className="body1-semi">
                  Quỹ đầu tư có phí và chi phí nào tôi cần phải biết?
                </AccordionTrigger>
                <AccordionContent className="body2-regular">
                  Quỹ đầu tư thường có các loại phí như phí quản lý, phí tư vấn,
                  và phí giao dịch. Để hiểu rõ về chi phí, bạn cần đọc kỹ tài
                  liệu cung cấp từ tổ chức quản lý quỹ.
                </AccordionContent>
              </AccordionItem>

              {/* <AccordionItem value="item-10">
                <AccordionTrigger className="body1-semi">
                  Các nguồn tài nguyên online có thể hỗ trợ việc phát âm Tiếng
                  Trung không?
                </AccordionTrigger>
                <AccordionContent className="body2-regular">
                  Các trang web như Forvo và FluentU cung cấp đoạn âm thanh và
                  video, giúp cho phát âm và ngữ điệu của bạn trở nên hoàn thiện
                  hơn trong Tiếng Trung.
                </AccordionContent>
              </AccordionItem> */}
            </Accordion>

            <div className="pt-10">
              <p className="body1-semi">Bạn vẫn thắc mắc...</p>
              <span className="body2-semi">
                Hãy liên hệ với chúng tôi qua{" "}
                <Link
                  href="https://www.m.me/193757480493266"
                  target="_blank"
                  className="text-primary font-semibold"
                >
                  Messenger
                </Link>
                .
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
