import { Check } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$1',
      period: '/mo',
      description: 'For educators just getting started.',
      features: [
        '500 Generations per month',
        'Basic Lesson Plans',
        'Standard Quizzes',
        'Community Support',
        'Per Tool Generation (Text): 40 Credit',
        'Per Tool Generation (Image): 50 Credit',
      ],
      buttonText: 'Start Free Trial',
      buttonStyle: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
      popular: false,
    },
    {
      name: 'Pro Individual',
      price: '$4.5',
      period: '/mo',
      description: 'For supercharging your workflow.',
      features: [
        '5000 Generations per month',
        'Access to ALL Tools',
        'History & Saving',
        'Advanced AI Models',
        'Priority Support',
        'Per Tool Generation (Text): 30 Credit',
        'Per Tool Generation (Image): 40 Credit',
      ],
      buttonText: 'Get Started Now',
      buttonStyle: 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg',
      popular: true,
    },
    {
      name: 'School Teams',
      price: '$8',
      period: '/mo',
      description: 'For departments and districts.',
      features: [
        'Everything in Pro',
        '10000 Generations per month',
        'Admin Dashboard',
        'Shared Resources',
        'Training & Onboarding',
        'Per Tool Generation (Text): 25 Credit',
        'Per Tool Generation (Image): 35 Credit',
      ],
      buttonText: 'Contact Sales',
      buttonStyle: 'bg-blue-600 text-white hover:bg-blue-700',
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600">
            Start for free, upgrade for unlimited power. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? 'bg-gradient-to-br from-emerald-500 to-blue-600 text-white shadow-2xl transform scale-105'
                  : 'bg-white border-2 border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    plan.popular ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm mb-4 ${
                    plan.popular ? 'text-white opacity-90' : 'text-gray-600'
                  }`}
                >
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center">
                  <span
                    className={`text-5xl font-bold ${
                      plan.popular ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-xl ml-1 ${
                      plan.popular ? 'text-white opacity-90' : 'text-gray-600'
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check
                      className={`w-5 h-5 mr-3 flex-shrink-0 mt-0.5 ${
                        plan.popular ? 'text-white' : 'text-emerald-600'
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        plan.popular ? 'text-white' : 'text-gray-700'
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-lg font-bold text-lg transition ${plan.buttonStyle}`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500">
            <span>✓ Cancel anytime</span>
            <span>✓ No hidden fees</span>
            <span>✓ Instant access</span>
            <span>✓ 30-day money-back guarantee</span>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl p-12 text-center border border-emerald-100">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Not Sure Which Plan is Right for You?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our team is here to help you choose the perfect plan for your needs. Schedule a free demo or chat with our education specialists.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition font-bold text-lg">
              Schedule a Demo
            </button>
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg border-2 border-emerald-600 hover:bg-emerald-50 transition font-bold text-lg">
              Talk to Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
