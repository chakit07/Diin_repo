import React from 'react';
import { Check, Info } from 'lucide-react';

// Note: Since we are using Stripe Payment Links, we no longer need to initialize Stripe.js on the client side.
// This also resolves the "must use HTTPS" warning during local development.

// Note: Since redirectToCheckout is deprecated/removed for client-only integrations,
// we now use Stripe Payment Links for a seamless, secure experience.

const plans = [
    {
        name: 'Website',
        price: '15,000',
        type: 'One-time',
        description: 'Perfect for small businesses looking for a professional web presence.',
        features: [
            'Custom Design',
            'Mobile Responsive',
            'SEO Optimization',
            'Contact Form',
            '5 Pages',
            'CMS Integration'
        ],
        buttonText: 'Pay Now',
        paymentLink: 'https://buy.stripe.com/test_9B6fZa1DxaPs9mL8Tv4c800', // Create this in Stripe Dashboard
    },
    {
        name: 'App Development',
        price: '30,000',
        type: 'One-time',
        description: 'Scalable and feature-rich mobile or web application development.',
        features: [
            'Full Stack Development',
            'User Authentication',
            'Database Integration',
            'API Development',
            'Admin Dashboard',
            'Push Notifications'
        ],
        buttonText: 'Pay Now',
        isPopular: true,
        paymentLink: 'https://buy.stripe.com/test_4gM6oAeqj4r4aqPedP4c802', // Create this in Stripe Dashboard
    },
    {
        name: 'Maintenance',
        price: '2,999',
        type: '/month',
        description: 'Worry-free support and ongoing maintenance for your digital assets.',
        features: [
            'Security Updates',
            'Bug Fixes',
            'Regular Backups',
            'Performance Monitoring',
            'Content Updates (2h/mo)',
            'Priority Support'
        ],
        buttonText: 'Subscribe',
        paymentLink: 'https://buy.stripe.com/test_aFa14g95Ze1E1Ujc5H4c801', // Create this in Stripe Dashboard
    }
];

const Pricing = () => {
    const handleCheckout = (paymentLink) => {
        if (!paymentLink || paymentLink.includes('placeholder') || paymentLink.includes('your_')) {
            alert('Please configure your Stripe Payment Link in the dashboard and update the code.');
            return;
        }
        // Redirect to the Stripe Payment Link
        window.location.href = paymentLink;
    };

    return (
        <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-base font-semibold text-primary-600 tracking-wide uppercase">Pricing</h2>
                    <p className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl">
                        Choose the right plan for your business
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                        Transparent pricing with no hidden fees. All plans include standard support.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`relative bg-white rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl border-2 ${plan.isPopular ? 'border-primary-500 scale-105 z-10' : 'border-transparent'
                                }`}
                        >
                            {plan.isPopular && (
                                <div className="absolute top-0 right-0 bg-primary-500 text-white px-4 py-1 rounded-bl-xl text-sm font-bold uppercase tracking-wider">
                                    Most Popular
                                </div>
                            )}

                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                                <p className="text-gray-500 text-sm mb-6 min-h-[40px]">{plan.description}</p>
                                <div className="flex items-baseline mb-8">
                                    <span className="text-4xl font-extrabold text-gray-900">₹{plan.price}</span>
                                    <span className="text-gray-500 ml-1 text-lg">{plan.type}</span>
                                </div>

                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-center text-gray-600">
                                            <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    onClick={() => handleCheckout(plan.paymentLink)}
                                    className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] ${plan.isPopular
                                        ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-200'
                                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                                        }`}
                                >
                                    {plan.buttonText}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <div className="inline-flex items-center px-4 py-2 bg-primary-50 rounded-full text-primary-700 text-sm font-medium">
                        <Info className="w-4 h-4 mr-2" />
                        Custom enterprise plans available. <a href="/contact" className="ml-1 underline font-bold">Contact us</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
