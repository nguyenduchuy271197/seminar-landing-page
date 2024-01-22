"use client";

import WaitlistContent from "./_components/waitlist-content";
import WaitlistForm from "./_components/waitlist-form";

export default function Waitlist({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  return (
    <section>
      <div className="max-w-screen-lg mx-auto px-8">
        <div className="grid lg:grid-cols-[1fr_350px] sm:gap-12 py-8 space-y-10">
          <WaitlistForm slug={searchParams.slug} />
          <WaitlistContent />
        </div>
      </div>
    </section>
  );
}
