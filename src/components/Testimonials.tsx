import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah J.',
      role: '5th Grade Teacher',
      content: "I used to spend my entire Sunday planning for the week. Now I'm done by Friday afternoon. It's honestly changed my life.",
      avatar: 'bg-blue-500',
    },
    {
      name: 'Mark T.',
      role: 'Special Ed Coordinator',
      content: 'The differentiation feature is a game changer for my IEP students. I can create 3 versions of a reading passage in seconds.',
      avatar: 'bg-green-500',
    },
    {
      name: 'Emily R.',
      role: 'High School History',
      content: 'Finally, an AI tool that actually understands pedagogy. The lesson plans follow a proper structure that my principal loves.',
      avatar: 'bg-purple-500',
    },
    {
      name: 'Ifeoma Odigbo',
      role: 'High School Science Teacher',
      content: 'EduGenerate has completely transformed how I approach lesson planning. What used to take hours now takes minutes, allowing me to focus on what really matters - my students.',
      avatar: 'bg-rose-500',
    },
    {
      name: 'John Bukayo',
      role: 'Special Education Coordinator',
      content: 'As a special education teacher, the differentiation tools have been a game-changer. I can now create personalized materials for each of my students in a fraction of the time.',
      avatar: 'bg-amber-500',
    },
    {
      name: 'Mary Adewusi',
      role: 'Middle School Math Teacher',
      content: "The AI-generated quizzes and worksheets have significantly improved my students' engagement. The content is always relevant, well-structured, and aligned with our curriculum standards.",
      avatar: 'bg-teal-500',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Teachers Say About EduGenerate
          </h2>
          <p className="text-xl text-gray-600">
            Join a community of educators reclaiming their time and rediscovering their passion for teaching.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <div className={`w-12 h-12 rounded-full ${testimonial.avatar} flex items-center justify-center text-white font-bold mr-4`}>
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-white rounded-2xl shadow-xl p-12">
            <div className="flex items-center justify-center mb-6">
              <div className="flex -space-x-2">
                <div className="w-12 h-12 rounded-full bg-blue-500 border-4 border-white"></div>
                <div className="w-12 h-12 rounded-full bg-green-500 border-4 border-white"></div>
                <div className="w-12 h-12 rounded-full bg-purple-500 border-4 border-white"></div>
                <div className="w-12 h-12 rounded-full bg-rose-500 border-4 border-white"></div>
                <div className="w-12 h-12 rounded-full bg-amber-500 border-4 border-white"></div>
              </div>
            </div>
            <div className="flex items-center justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-2">4.9 out of 5 stars</p>
            <p className="text-gray-600 mb-6">Based on 10,000+ teacher reviews</p>
            <button className="bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition font-bold text-lg shadow-lg">
              Join 10,000+ Happy Teachers
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
