import StatCard from "./share/stat-card";

export default function Stats() {
  const stats = [
    {
      value: 3,
      postfix: "H",
      title: "lĩnh hội quy tắc đầu tư số 1",
    },
    {
      postfix: "CFA",
      title: "Chứng chỉ tài chính và bảo hiểm",
    },
    {
      value: 80,
      postfix: "%",
      title: "chiến thắng thị trường",
    },
    {
      value: 3501,
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
