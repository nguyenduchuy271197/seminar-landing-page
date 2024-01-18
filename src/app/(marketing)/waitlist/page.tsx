"use client";

import WaitlistForm from "./_components/waitlist-form";

export default function Waitlist() {
  return (
    <section>
      <div className="max-w-screen-sm mx-auto px-8">
        <div className="py-8 space-y-10">
          <div className="text-center h2">
            <h1>Khoá học sắp diễn ra...</h1>
          </div>

          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}
