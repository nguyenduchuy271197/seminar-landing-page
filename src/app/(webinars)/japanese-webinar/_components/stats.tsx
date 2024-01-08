import StatCard from "./share/stat-card";

export default function Stats() {
  const stats = [
    {
      value: 3,
      title: "Giờ ứng dụng phương pháp KotoOnsei",
    },
    {
      postfix: "JLPT",
      title: "Chuẩn giáo trình tiếng Nhật",
    },
    {
      value: 100,
      postfix: "+",
      title: "Quản lý nhân sự",
    },
    {
      value: 2688,
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
