import { Edit3, Sparkles, Download } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Edit3,
      number: '1',
      title: 'Enter Details',
      description: 'Input your grade level, topic, standards, and specific learning objectives. Tell us what you need.',
    },
    {
      icon: Sparkles,
      number: '2',
      title: 'AI Generates',
      description: 'Our advanced AI models construct a pedagogically-structured plan in seconds. Watch the magic happen.',
    },
    {
      icon: Download,
      number: '3',
      title: 'Export & Teach',
      description: 'Review, edit if needed, and export to PDF, Word, or Google Docs. Start teaching immediately.',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How EduGenerate Works
          </h2>
          <p className="text-xl text-gray-600">
            Three simple steps to generate high-quality teaching materials. No learning curve required.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-1 bg-gradient-to-r from-emerald-200 to-blue-200 z-0" />
              )}
              <div className="relative bg-white text-center z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute top-0 right-1/2 transform translate-x-1/2 -translate-y-4 w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center font-bold text-lg shadow">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Try It Yourself Right Now
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                See how fast EduGenerate can create a complete lesson plan customized for your classroom. No signup required to try.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <span className="text-emerald-600 mr-3">✓</span>
                  Export to PDF, Word, and Google Docs
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-emerald-600 mr-3">✓</span>
                  Aligns to Common Core, TEKS, NGSS, and more
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-emerald-600 mr-3">✓</span>
                  History saves automatically—never lose a lesson
                </li>
              </ul>
              <button className="bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition font-bold text-lg shadow-lg">
                Create Your First Lesson Free
              </button>
            </div>
            <div className="bg-white rounded-xl shadow-xl p-6 border-2 border-emerald-200">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Grade Level</label>
                  <input
                    type="text"
                    placeholder="e.g., 4th Grade"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Topic</label>
                  <input
                    type="text"
                    placeholder="e.g., The Water Cycle"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Special Requirements</label>
                  <input
                    type="text"
                    placeholder="e.g., Include hands-on experiment"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
                <button className="w-full bg-gradient-to-r from-emerald-500 to-blue-600 text-white py-3 rounded-lg font-bold hover:from-emerald-600 hover:to-blue-700 transition">
                  Generate Lesson Plan ✨
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
