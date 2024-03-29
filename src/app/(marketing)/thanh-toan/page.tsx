import PaymentContent from "./_components/payment-content";
import PaymentForm from "./_components/payment-form";

export default function PaymentPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const slug = searchParams.slug;

  return (
    <section>
      <div className="max-w-screen-lg mx-auto px-8">
        <div className="grid sm:grid-cols-2 gap-12 py-20">
          <PaymentContent slug={slug} />
          <PaymentForm slug={slug} />
        </div>
      </div>
    </section>
  );
}
