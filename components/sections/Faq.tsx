'use client';

import { useState } from 'react';
import { faqs } from '@/lib/site';

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => {
        const isOpen = open === index;

        return (
          <div
            key={faq.question}
            className="
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-white/[0.04]
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-blue-400/30
            "
          >
            <button
              type="button"
              onClick={() =>
                setOpen(isOpen ? null : index)
              }
              className="
                flex
                w-full
                items-center
                justify-between
                px-6
                py-5
                text-left
                font-black
                text-white
              "
            >
              {faq.question}

              <span
                className={`
                  text-xl
                  transition-transform
                  duration-300
                  ${isOpen ? 'rotate-45' : ''}
                `}
              >
                +
              </span>
            </button>

            <div
              className={`
                overflow-hidden
                transition-all
                duration-300
                ${
                  isOpen
                    ? 'max-h-[400px] opacity-100'
                    : 'max-h-0 opacity-0'
                }
              `}
            >
              <div className="border-t border-white/5 px-6 pb-5 pt-4">
                <p className="leading-8 text-[var(--muted)]">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
