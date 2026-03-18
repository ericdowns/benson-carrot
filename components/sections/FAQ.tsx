"use client";

import { useState } from "react";
import { Unknown } from "@/components/ui/Unknown";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqs: FAQItem[] = [
  {
    question: "What is The Carrot?",
    answer:
      "The Carrot is a printed magazine and business directory produced entirely by graphic design students at Benson High School. Every layout, photo, and headline is student work. This is the third edition.",
  },
  {
    question: "Who sees my ad?",
    answer: (
      <>
        The Carrot is distributed free of charge throughout the Benson neighborhood — at
        restaurants, bars, shops, and community spaces.{" "}
        <Unknown note="Print run / circulation: ask Annie — the number of copies is the key stat for this answer" />
      </>
    ),
  },
  {
    question: "Do I need to supply artwork?",
    answer: (
      <>
        <Unknown note="Ask Annie: do businesses supply finished artwork, or can students help design the ad? If students assist, add that here as a selling point." block />
      </>
    ),
  },
  {
    question: "What file format do you need for my ad?",
    answer: (
      <>
        <Unknown note="Ask Annie: what file formats and resolution specs are required for ad submission? (e.g., print-ready PDF, 300dpi, CMYK)" block />
      </>
    ),
  },
  {
    question: "How do I pay?",
    answer: (
      <>
        <Unknown note="Ask Annie: invoice? Check? Online payment? Add the payment process here once confirmed." block />
      </>
    ),
  },
  {
    question: "What happens after I submit the form?",
    answer:
      "Annie Butler will reach out to confirm your ad placement, answer any questions, and walk you through next steps. Expect a response within a few business days.",
  },
  {
    question: "Can I make changes to my ad after submitting?",
    answer: (
      <>
        <Unknown note="Ask Annie: is there a revision window or cutoff after ad submission? What's the policy?" block />
      </>
    ),
  },
  {
    question: "What if I miss the April 1 deadline?",
    answer:
      "Ad reservations close April 1, 2026. After that date, placements cannot be guaranteed for this issue. Reach out to Annie directly if you have a late request and she can let you know if space is still available.",
  },
  {
    question: "Is there a limit on how many ads are available?",
    answer: (
      <>
        <Unknown note="Ask Annie: are ad slots limited per size? First come, first served? Add the answer here." block />
      </>
    ),
  },
  {
    question: "Is my ad purchase tax deductible?",
    answer: (
      <>
        <Unknown
          note="Ask Annie: is BFF Omaha a registered 501(c)(3)? If so, ad purchases may qualify as a tax-deductible charitable contribution — a strong selling point worth calling out prominently."
          block
        />
      </>
    ),
  },
  {
    question: "Is The Carrot published every year?",
    answer:
      "Yes — The Carrot is an annual publication produced by Benson High School Design & Construction Academy students.",
  },
];

function FAQRow({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
      >
        <span className="font-semibold text-gray-950">{item.question}</span>
        <i
          className={`fa-regular ${open ? "fa-circle-minus" : "fa-circle-plus"} text-gray-300 text-lg shrink-0`}
          aria-hidden="true"
        />
      </button>
      {open && (
        <div className="pb-5 text-gray-600 leading-relaxed text-sm pr-8">
          {item.answer}
        </div>
      )}
    </div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="border-b border-gray-200 py-20 px-6 scroll-mt-16">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
        <div>
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">FAQ</p>
          <h2 className="text-3xl font-bold text-gray-950 mb-4">
            Common Questions
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Don&apos;t see your question here?{" "}
            <a
              href="mailto:annie@bffomaha.org"
              className="text-gray-700 underline underline-offset-2 hover:text-gray-950 transition-colors"
            >
              Email Annie directly.
            </a>
          </p>
        </div>
        <div className="md:col-span-2">
          {faqs.map((faq) => (
            <FAQRow key={faq.question} item={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
