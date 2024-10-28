import React from 'react';

const certifications = [
  {
    id: 'soc2',
    title: 'SOC 2 Type 2',
    description: "We're SOC 2 Type 2 compliant.",
    icon: 'SOC'
  },
  {
    id: 'gdpr',
    title: 'GDPR',
    description: "We're GDPR compliant. Ask us for our DPA.",
    icon: 'GDPR'
  },
  {
    id: 'hipaa',
    title: 'HIPAA',
    description: "We're happy to sign a BAA in the enterprise plan.",
    icon: 'HIPAA'
  },
  {
    id: 'iso',
    title: 'ISO 27001',
    description: "We're ISO 27001 compliant.",
    icon: 'ISO'
  }
];

const informationCollected = [
  {
    title: 'Account Information',
    content: 'When you sign up, we collect personal information such as your name, email address, phone number, and password via our user authentication platform, Clerk.'
  },
  {
    title: 'Location Data',
    content: 'With your permission, we collect your real-time location data to help you find nearby salons and service providers. You can control location access through your device settings.'
  },
  {
    title: 'Booking Details',
    content: 'When you book an appointment, we collect information such as selected services, preferred time slot, and payment details for processing your booking and facilitating payment.'
  },
  {
    title: 'Payment Information',
    content: 'We may collect payment-related details when you choose your preferred payment method for bookings. Payment processing is securely managed through our payment provider, and we do not store credit card or bank information on our servers.'
  }
];

const policyContent = [
  {
    id: 'how-we-use',
    title: '2. How We Use Your Information',
    content: [
      'To Provide and Improve Our Services: To enable account creation, secure login, and account management.',
      'To Locate Nearby Salons: Based on your location and service search preferences.',
      'For Appointment Management: To schedule and track your bookings, manage salon availability, and facilitate payment processing.',
      'Customer Support: To assist with any issues you encounter while using our app.',
      'Safety and Security: To detect and prevent fraud or any other unauthorized activities.'
    ]
  },
  {
    id: 'data-storage',
    title: '3. Data Storage and Security',
    content: [
      'Backend Security: All backend processes are handled in JavaScript with MongoDB as our database. Our code is rigorously developed to ensure high-security standards and prevent unauthorized access.',
      'User Authentication: We utilize Clerk, a third-party user authentication service, for secure user registration and login.',
      'Data Encryption: All sensitive data transmitted between your device and our servers is encrypted to safeguard your privacy.'
    ]
  },
  {
    id: 'sharing',
    title: '4. Sharing Your Information',
    content: ['We do not sell, trade, or otherwise transfer your personal data to third parties, except as required for payment processing, law enforcement, or as necessary to protect the rights and safety of our users. We may share anonymized data for research or analytics to improve our services without identifying individual users.']
  },
  {
    id: 'retention',
    title: '5. Data Retention',
    content: ['We retain your information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, or resolve disputes.']
  },
  {
    id: 'third-party',
    title: '6. Third-Party Services',
    content: [
      'Our app integrates with trusted third-party services like:',
      'Clerk for user sign-up and authentication.',
      'Payment Service Providers to securely process your payments.',
      'We ensure that these third-party services are GDPR-compliant and adhere to industry-standard data protection practices.'
    ]
  }
];

const contactInfo = {
  email: 'mail@perfect3sixty.com',
  address: ''
};

interface CertificationCardProps {
  title: string;
  description: string;
  icon: string;
}

const CertificationCard: React.FC<CertificationCardProps> = ({ title, description, icon }) => (
  <div className="text-center">
    <div className="w-24 h-24 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
      <div className="w-16 h-16 text-blue-600">{icon}</div>
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Policy = () => {
  return (
    <div className='min-h-screen'>

      <div
        className="relative w-full h-[400px] bg-cover bg-center mb-16"
        style={{
          backgroundImage: 'url("https://wallpaperboat.com/wp-content/uploads/2021/08/05/78116/iOS-13-liquid-01.jpg")'
        }}
      >
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/10">
          <div className="max-w-6xl mx-auto px-4 h-full flex items-center">
            <h1 className="text-5xl font-bold text-white">Trust & Security</h1>
            {/* <p className="text-lg text-gray-600 max-w-4xl">
            We strive to meet the highest level of security certification across borders and industries.
            Our compliance and certification are managed by Vanta and our incredible audit partners.
          </p> */}
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Trust & Security Header */}

        {/* Certification Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {certifications.map((cert) => (
            <CertificationCard key={cert.id} {...cert} />
          ))}
        </div> */}

        {/* Privacy Policy Content */}
        <div className="prose max-w-none">
          <h2 className="text-3xl font-bold mb-8">Privacy Policy</h2>
          <p className="text-gray-600 mb-4">Last Updated: 28th Oct, 2024</p>

          <p className="mb-6">
            Welcome to Perfect3Sixty, an appointment booking platform designed for convenient access to
            barbershops, spas, hairdressers, facial care, nail salons, and more. This Privacy Policy
            outlines how we collect, use, protect, and disclose your information. By using Perfect3Sixty,
            you agree to the terms of this Privacy Policy.
          </p>

          {/* Information We Collect Section */}
          <section className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">1. Information We Collect</h3>
            <p className="mb-4">
              When you use Perfect3Sixty, we collect and process different types of information to
              provide you with personalized services:
            </p>

            <div className="ml-6 space-y-4">
              {informationCollected.map((info, index) => (
                <div key={index}>
                  <h4 className="font-semibold">{info.title}:</h4>
                  <p>{info.content}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Other Policy Sections */}
          {policyContent.map((section) => (
            <section key={section.id} className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">{section.title}</h3>
              {section.content.map((paragraph, index) => (
                <p key={index} className="mb-2">{paragraph}</p>
              ))}
            </section>
          ))}

          {/* Contact Section */}
          <section className="mt-8">
            <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <p className="mt-2">
              Email: {contactInfo.email}<br />
              {/* Address: {contactInfo.address} */}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Policy;