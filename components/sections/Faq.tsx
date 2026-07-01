'use client';

import { useState } from 'react';
import { faqs } from '@/lib/site';

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-2.5 md:space-y-3">
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
                px-4
                py-3.5
                text-sm
                md:px-6
                md:py-5
                md:text-base
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
              <div className="border-t border-white/5 px-4 pb-4 pt-3 md:px-6 md:pb-5 md:pt-4">
                <p className="text-sm leading-6 text-[var(--muted)] md:text-base md:leading-8">
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
