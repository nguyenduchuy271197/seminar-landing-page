import HighlightWord from "@/components/highlight-word";

export default function Benefits() {
  const features = [
    {
      icon: (
        <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11 25V19.875L13.375 20.125C14.0664 20.0866 14.7207 19.7999 15.2177 19.3177C15.7147 18.8354 16.0209 18.19 16.08 17.5V10.375C16.0883 8.57421 15.3809 6.84386 14.1134 5.56462C12.8458 4.28539 11.1221 3.56207 9.32125 3.55378C7.52043 3.54549 5.79007 4.25292 4.51084 5.52043C3.23161 6.78794 2.50829 8.51171 2.5 10.3125C2.5 13.8125 3.32 14.13 3.75 16C4.0406 17.1294 4.05304 18.3123 3.78625 19.4475L2.5 25"
            stroke="black"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24.75 22.2501C26.5073 20.4926 27.4948 18.1093 27.4955 15.624C27.4962 13.1387 26.51 10.7548 24.7538 8.99634"
            stroke="black"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.25 18.75C21.659 18.3411 21.9828 17.8552 22.2028 17.3204C22.4228 16.7855 22.5346 16.2124 22.5317 15.6341C22.5288 15.0558 22.4112 14.4838 22.1859 13.9512C21.9605 13.4186 21.6318 12.936 21.2188 12.5312"
            stroke="black"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Học cách diễn đạt phổ biến mà người bản xứ ưa dùng",
      desc: "Học đúng những thứ cần học, áp dụng thực tế, hiệu quả ngay lập tức, không lan man.",
    },
    {
      icon: (
        <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15 27.5C15 27.5 25 22.5 25 15V6.25L15 2.5L5 6.25V15C5 22.5 15 27.5 15 27.5Z"
            stroke="black"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.25 15L13.75 17.5L18.75 12.5"
            stroke="black"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Học với chuyên gia, người thật, việc thật",
      desc: "Nói tiếng Trung thành thạo, phản xạ nhanh nhạy, từ vựng đúng ngữ cảnh.",
    },
    {
      icon: (
        <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M23.75 5H6.25C4.86929 5 3.75 6.11929 3.75 7.5V25C3.75 26.3807 4.86929 27.5 6.25 27.5H23.75C25.1307 27.5 26.25 26.3807 26.25 25V7.5C26.25 6.11929 25.1307 5 23.75 5Z"
            stroke="black"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 2.5V7.5"
            stroke="black"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 2.5V7.5"
            stroke="black"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.75 12.5H26.25"
            stroke="black"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.25 20L13.75 22.5L18.75 17.5"
            stroke="black"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Phương pháp phù hợp với người ít thời gian rảnh",
      desc: "Người bận rộn đến mấy cũng có thể học được, không bị bỏ cuộc giữa chừng.",
    },
    {
      icon: (
        <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M27.5 12.5V20M27.5 12.5L15 6.25L2.5 12.5L15 18.75L27.5 12.5Z"
            stroke="black"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.5 15V21.25C11.25 25 18.75 25 22.5 21.25V15"
            stroke="black"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Bỏ cách học rập khuôn, cứng nhắc, không hiệu quả",
      desc: "Người bận rộn đến mấy cũng có thể học được, không bị bỏ cuộc giữa chừng.",
    },
  ];

  return (
    <section className="bg-neutral-100" id="benefits">
      <div className="container">
        <div className="space-y-12 py-20">
          <div className="h2">
            <h2 className="max-w-[750px]">
              Nếu chỉ với
              <HighlightWord>3 giờ</HighlightWord>
              học tiếng Trung, có bị xem là học vẹt?
            </h2>
          </div>

          <div className="relative mt-12">
            <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((item, idx) => (
                <li
                  key={idx}
                  className="bg-white space-y-3 p-9 border rounded-md hover:drop-shadow-xl"
                >
                  <div className="text-primary p-3 rounded-md size-16 bg-red-100">
                    {item.icon}
                  </div>
                  <h4 className="subtitle2 text-gray-800 uppercase">
                    {item.title}
                  </h4>
                  <p className="body2-regular">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
