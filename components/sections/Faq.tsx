import { faqs } from '@/lib/site';

export function Faq() {
  return (
    <div>
      {faqs.map((faq, index) => (
        <details
          key={faq.question}
          open={index === 0}
          className="mb-2.5 rounded-[var(--radius)] border border-[var(--line)] bg-white/[0.05] px-3.5 py-3 transition duration-200 hover:-translate-y-0.5 hover:border-white/20 open:border-blue-300/30"
        >
          <summary className="cursor-pointer font-black">{faq.question}</summary>
          <p className="mt-2 leading-[1.7] text-[var(--muted)]">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
