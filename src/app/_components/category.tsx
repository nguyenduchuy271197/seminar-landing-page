import { cn } from "@/lib/utils";

export const categoryOptions = [
  {
    label: "Tất cả",
    value: "all",
  },
  {
    label: "Ngôn ngữ",
    value: "language",
  },
  {
    label: "Kỹ năng",
    value: "skill",
  },
  {
    label: "Marketing",
    value: "marketing",
  },
  {
    label: "Sức khoẻ",
    value: "health",
  },
  {
    label: "Nghệ thuật",
    value: "art",
  },
  {
    label: "Tài chính/đầu tư",
    value: "finance",
  },
];

export default function Category({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <section>
      <ul className="flex gap-4 md:justify-center items-center md:flex-wrap overflow-scroll md:overflow-auto">
        {categoryOptions.map((item, idx) => (
          <li key={idx} className="rounded-md overflow-hidden shrink-0">
            <button
              className={cn(
                "px-8 py-3 bg-neutral-200 body1-semi",
                value === item.value && "text-white bg-[#010174]"
              )}
              onClick={() => onChange(item.value)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
