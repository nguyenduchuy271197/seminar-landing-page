import Image from "next/image";
import Link from "next/link";

const card = [
  {
    src: "https://lifehacking.co.kr/uploads/shop/content/2022-03-08/81d92e7969f3f1de50379451b4b81f53.png",
    title: "건강식품 쇼핑몰",
    description: "월급이상 버는 건강기능식품 쇼핑몰 창업 보부상",
  },
  {
    src: "https://lifehacking.co.kr/uploads/shop/content/2021-03-23/ef21b47e21728cbd2a683398e3b7abfc.jpg",
    title: "카피라이팅",
    description: "글 1개로 1000만원 버는 글쓰기 전략 곤팀장",
  },
  {
    src: "https://lifehacking.co.kr/uploads/shop/content/2021-07-27/427278962fc35d7632bec9f9d97f0611.jpg",
    title: "지능 심리학",
    description: "지능의 심리학과 연봉 10억의 상관 관계 자청",
  },
  {
    src: "https://lifehacking.co.kr/uploads/shop/content/2022-04-27/240b5a1349cfa06a4a24174ce7ca34ba.png",
    title: "코인 트레이딩",
    description: "시드머니 불리는 비트코인 선물 트레이딩 최범길",
  },
];

export default function SeminarList() {
  return (
    <section>
      <div className="container">
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="h2">인기 클래스</h2>
            <p className="body2-regular">
              가장 많은 분들이 수강 중인 클래스를 만나보세요!
            </p>
          </div>
          <ul className="grid md:grid-cols-4 gap-8 items-center justify-center">
            {card.map((item, idx) => (
              <li key={idx}>
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

                  <div className="absolute text-white text-center bottom-10 space-y-2 w-full">
                    <h2 className="subtitle1">{item.title}</h2>
                    <div className="border-t border-white w-4 mx-auto" />
                    <p className="body2-regular">{item.description}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
