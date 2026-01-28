import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Is the content aligned to standards?',
      answer: 'Yes! You can specify any standard set (Common Core, TEKS, NGSS, etc.) and EduGenerate will ensure the generated content aligns perfectly. Our AI is trained on curriculum standards from all 50 states.',
    },
    {
      question: 'Can I edit the generated materials?',
      answer: 'Absolutely. All content is fully editable within the platform, and you can export to Word, PDF, or Google Docs to make further changes. You have complete control over every aspect of your materials.',
    },
    {
      question: 'Is there a free version?',
      answer: 'Yes, we offer a generous free tier that lets you generate a limited number of resources every month forever. No credit card required to start. You can upgrade anytime when you need more generations.',
    },
    {
      question: 'How quickly will I receive a response?',
      answer: 'We typically respond to all inquiries within 24-48 hours during business days. Urgent technical issues may receive faster response times. Pro and Team plan members get priority support.',
    },
    {
      question: 'What types of support do you offer?',
      answer: 'We provide technical support, account assistance, billing help, curriculum guidance, and platform training for educators. We also offer comprehensive training programs for schools and districts.',
    },
    {
      question: 'Do you offer phone support?',
      answer: 'Yes, we offer phone support during business hours (Monday-Friday, 9AM-5PM PST) and 24/7 WhatsApp support for urgent matters at +234 808 992 8821.',
    },
    {
      question: 'Can I request new features?',
      answer: 'Absolutely! We welcome feature requests and use them to guide our product development roadmap. Your feedback helps us build the tools you actually need.',
    },
    {
      question: 'How do I report a bug or technical issue?',
      answer: 'You can report bugs through our contact form, email support@edugenerate.com, or use the in-app feedback tool. We take all reports seriously and work quickly to resolve issues.',
    },
    {
      question: 'Do you offer training for schools or districts?',
      answer: 'Yes, we provide comprehensive training programs for schools and districts. Contact us for more information about our institutional support packages, which include onboarding, ongoing training, and dedicated support.',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our platform and services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition"
              >
                <span className="font-bold text-lg text-gray-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-emerald-600 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Still Have Questions?</h3>
          <p className="text-xl mb-8 opacity-90">
            Our support team is here to help. Reach out and we'll get back to you within 24 hours.
          </p>
          <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition font-bold text-lg shadow-lg">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
}
