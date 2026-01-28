import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-emerald-400 mb-4">EduGenerate</h3>
            <p className="text-gray-400 mb-6">
              Empowering educators with intelligent tools to create high-quality, standards-aligned curriculum in seconds, not hours.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-emerald-400 transition">Features</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-emerald-400 transition">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition">Lesson Planner</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition">Quiz Generator</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition">What's New</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition">Help Center</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-emerald-400 transition">Contact Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-emerald-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  217 Ijegun-Ikotun Road,<br />
                  Alimosho, Lagos<br />
                  Nigeria
                </span>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-emerald-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <a href="mailto:info@edugenerate.com" className="text-gray-400 hover:text-emerald-400 transition block">
                    info@edugenerate.com
                  </a>
                  <a href="mailto:support@edugenerate.com" className="text-gray-400 hover:text-emerald-400 transition block">
                    support@edugenerate.com
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-emerald-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  +234 808 992 8821<br />
                  Mon-Fri, 9AM - 5PM PST
                </span>
              </li>
              <li className="flex items-start">
                <MessageCircle className="w-5 h-5 text-emerald-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <span className="text-gray-400 block">WhatsApp Support</span>
                  <span className="text-gray-400 block">+234 808 992 8821</span>
                  <span className="text-emerald-400 text-sm">Available 24/7</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2026 EduGenerate AI. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Made with <span className="text-red-500">❤️</span> for teachers
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-emerald-500 to-blue-600 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Reclaim Your Time?
          </h3>
          <p className="text-xl text-white opacity-90 mb-8">
            Join the AI revolution in education today. No credit card required for free account.
          </p>
          <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition font-bold text-lg shadow-lg">
            Get Started Free - No Credit Card
          </button>
        </div>
      </div>
    </footer>
  );
}
