import Image from "next/image";
import Link from "next/link";

const card = [
  {
    src: "https://lifehacking.co.kr/uploads/shop/product/96/6fe4314880fe9c034df24994ac8ef101.png",
    title: "스마트스토어와 라이브 커머스로 월 천 수익내기",
  },
  {
    src: "https://lifehacking.co.kr/uploads/shop/product/90/844114ed89709013bcb95e2ed5c5ae99.png",
    title: "부동산 공매 투자로 10억 만들기",
  },
  {
    src: "https://lifehacking.co.kr/uploads/shop/product/95/1cc1caf198f6230dce6ecaffc2741adb.jpg",
    title: "바닥부터 시작하는 극초기 마케팅",
  },
];
export default function SeminarList3() {
  return (
    <section>
      <div className="container">
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="h2">신규 클래스</h2>
            <p className="body2-regular">
              새롭게 런칭된 클래스를 확인해 보세요.
            </p>
          </div>

          <ul className="grid md:grid-cols-3 gap-8 items-center justify-center">
            {card.map((item, idx) => (
              <li key={idx} className="space-y-4">
                <Link href="/chinese-webinar" className="relative group">
                  <div className="overflow-hidden">
                    <Image
                      src={item.src}
                      alt=""
                      width={245}
                      height={347}
                      className="w-full group-hover:scale-105 transition"
                    />
                  </div>

                  <div className="absolute bottom-0 right-0 bg-black hover:bg-black/20 rounded-full size-[35px] flex justify-center items-center mb-2.5 mr-2.5">
                    <Image
                      src="https://lifehacking.co.kr/static/front/images/main/heart.svg"
                      alt=""
                      width={18}
                      height={18}
                    />
                  </div>
                </Link>
                <h3 className="body1-regular">{item.title}</h3>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
