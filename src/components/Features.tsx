import { BookOpen, FileText, ClipboardList, BarChart3, Library, Shuffle } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: BookOpen,
      title: 'Lesson Planner',
      description: 'Generate comprehensive, standards-aligned lesson plans in seconds. Include objectives, activities, assessments, and differentiation.',
    },
    {
      icon: ClipboardList,
      title: 'Quiz Generator',
      description: 'Create multiple choice, short answer, and true/false quizzes instantly. Complete with answer keys and scoring guides.',
    },
    {
      icon: FileText,
      title: 'Worksheets',
      description: 'Custom worksheets with answer keys, ready to print. Perfect formatting every time, no more copying and pasting.',
    },
    {
      icon: BarChart3,
      title: 'Rubric Builder',
      description: 'Detailed scoring guides for any assignment or project. Clear success criteria that students actually understand.',
    },
    {
      icon: Library,
      title: 'Decodable Texts',
      description: 'Stories tailored to specific phonics patterns and reading levels. Perfect for early literacy development.',
    },
    {
      icon: Shuffle,
      title: 'Differentiation',
      description: 'One-click adjustment of content for different ability levels. Create IEP-friendly versions in seconds.',
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            All Your Teaching Tools in One Place
          </h2>
          <p className="text-xl text-gray-600">
            Stop juggling five different websites. EduGenerate bundles all your essential planning tools into one powerful AI assistant.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-12 text-white">
              <h3 className="text-2xl font-bold mb-6">The Old Way</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 text-xl">×</span>
                  <span>2 hours searching Google</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 text-xl">×</span>
                  <span>Formatting nightmares</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 text-xl">×</span>
                  <span>Generic content</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 text-xl">×</span>
                  <span>No answer keys</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 text-xl">×</span>
                  <span>Working weekends</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-500 to-blue-600 p-12 text-white">
              <h3 className="text-2xl font-bold mb-6">With EduGenerate</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-white mr-3 text-xl">✓</span>
                  <span>Done in 30 seconds</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3 text-xl">✓</span>
                  <span>Perfect styling every time</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3 text-xl">✓</span>
                  <span>Custom to YOUR class</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3 text-xl">✓</span>
                  <span>Answer keys included</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3 text-xl">✓</span>
                  <span>Weekends are yours again</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition font-bold text-lg shadow-lg">
            Start Saving Time Today
          </button>
        </div>
      </div>
    </section>
  );
}
