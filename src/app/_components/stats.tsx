import StatCard from "./share/stat-card";

export default function Stats() {
  const stats = [
    {
      value: 3,
      title: "Giờ ứng dụng phương pháp 3H",
    },
    {
      postfix: "HSK",
      title: "Chuẩn giáo trình tiếng Trung",
    },
    {
      value: 600,
      postfix: "+",
      title: "NGƯỜI TÌM VIỆC THÀNH CÔNG",
    },
    {
      value: 1268,
      // postfix: "TR",
      title: "Người đã đăng ký",
    },
  ];
  return (
    <div className="flex justify-center sm:block">
      <ul className="grid grid-cols-2 lg:flex text-center gap-8 lg:flex-row lg:text-left">
        {stats.map((item, idx) => (
          <StatCard key={idx} {...item} />
        ))}
      </ul>
    </div>
  );
}
