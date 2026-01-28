import { Clock, Target, Users, Shield, Zap } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: Clock,
      title: 'Save 10+ Hours Every Week',
      description: 'Stop spending weekends searching Google and formatting documents. Generate complete lesson plans in 30 seconds instead of 2 hours.',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: Target,
      title: 'Standards-Aligned Every Time',
      description: 'Automatically align to Common Core, TEKS, NGSS, and state-specific standards. No more second-guessing if your content meets requirements.',
      color: 'bg-emerald-100 text-emerald-600',
    },
    {
      icon: Zap,
      title: 'All Tools in One Platform',
      description: 'Stop juggling five different websites. Get lesson plans, quizzes, worksheets, rubrics, and differentiated content all in one place.',
      color: 'bg-amber-100 text-amber-600',
    },
    {
      icon: Users,
      title: 'Differentiate with One Click',
      description: 'Adapt any content for varying ability levels and IEP needs instantly. Create personalized materials for every student without the extra work.',
      color: 'bg-purple-100 text-purple-600',
    },
    {
      icon: Shield,
      title: 'Export & Customize Instantly',
      description: 'Download to PDF, Word, or Google Docs with perfect formatting. Edit anything you want and make it your own in seconds.',
      color: 'bg-rose-100 text-rose-600',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Teachers Choose EduGenerate
          </h2>
          <p className="text-xl text-gray-600">
            The comprehensive AI teaching assistant that actually understands pedagogy and saves you real time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-xl hover:border-emerald-200 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-lg ${benefit.color} flex items-center justify-center mb-6`}>
                <benefit.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Stop Working Weekends. Start Living Again.
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            The average teacher spends 10+ hours a week searching for resources and formatting documents.
            EduGenerate gives that time back to you—so you can focus on your students (or just relax).
          </p>
          <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition font-bold text-lg shadow-lg">
            Try It Free - No Credit Card Required
          </button>
        </div>
      </div>
    </section>
  );
}
