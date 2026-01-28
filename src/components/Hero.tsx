import { Sparkles, Clock, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-24 pb-20 bg-gradient-to-br from-emerald-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            New: AI Teaching Assistant
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Automate Your Lesson Planning.<br />
            <span className="text-emerald-600">Reclaim Your Weekends.</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Create standards-aligned lesson plans, quizzes, worksheets, and rubrics in seconds.
            Join <strong>10,000+ teachers</strong> saving <strong>10+ hours every week</strong>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Start Creating Now - It's Free!
            </button>
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg border-2 border-emerald-600 hover:bg-emerald-50 transition font-bold text-lg">
              Watch 2-Min Demo
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2 text-emerald-600" />
              <span><strong>10,000+</strong> educators</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2 text-emerald-600" />
              <span><strong>10+ hours</strong> saved weekly</span>
            </div>
            <div className="flex items-center">
              <div className="flex -space-x-2 mr-2">
                <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-green-500 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-yellow-500 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-red-500 border-2 border-white"></div>
              </div>
              <span className="flex items-center">
                <span className="text-yellow-500 mr-1">★★★★★</span>
                <strong>4.9/5</strong> rating
              </span>
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold flex-shrink-0">
                T
              </div>
              <div className="flex-1">
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <p className="text-gray-700">
                    <strong>Teacher:</strong> I need a lesson plan on The Water Cycle for 4th Grade. Include a hands-on experiment.
                  </p>
                </div>
                <div className="bg-emerald-50 rounded-lg p-6 border border-emerald-200">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">💧 The Water Cycle Adventure</h3>
                    <span className="text-sm text-emerald-600 font-medium">Generated in 8 seconds</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    <strong>Grade:</strong> 4th Grade Science<br />
                    <strong>Objective:</strong> Students will identify and explain the three main stages of the water cycle: evaporation, condensation, and precipitation.
                  </p>
                  <div className="bg-white rounded-lg p-4 border border-emerald-100">
                    <h4 className="font-bold text-gray-900 mb-2">Hands-on Activity: "Water in a Bag" Experiment</h4>
                    <p className="text-gray-600 text-sm">
                      <strong>Materials:</strong> Ziploc bag, water, blue food coloring, sunny window.<br />
                      Students observe condensation and precipitation in real-time...
                    </p>
                    <button className="mt-3 text-emerald-600 font-medium text-sm hover:text-emerald-700">
                      Download Complete PDF →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm mb-4">Trusted by innovative schools worldwide</p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            <div className="text-gray-400 font-bold text-lg">Riverdale High</div>
            <div className="text-gray-400 font-bold text-lg">Tech Academy</div>
            <div className="text-gray-400 font-bold text-lg">Global Schools</div>
            <div className="text-gray-400 font-bold text-lg">Future Learning</div>
          </div>
        </div>
      </div>
    </section>
  );
}
