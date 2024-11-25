import React from 'react';
import { motion } from 'framer-motion';
import { ScrollAnimatedSection } from '../../components';
import { Lock, Eye, Share2, Mail } from 'lucide-react';

const keyPoints = [
  {
    icon: Lock,
    title: 'Data Protection',
    content: 'Your personal information is encrypted and stored securely using industry-standard protocols.'
  },
  {
    icon: Eye,
    title: 'Transparency',
    content: 'We are clear about what data we collect and how we use it to improve your experience.'
  },
  {
    icon: Share2,
    title: 'Limited Sharing',
    content: 'We only share your information with service providers when necessary for booking services.'
  }
];

const privacyContent = [
  {
    title: 'Introduction to Our Privacy Policy',
    content: `At Perfect3sixty, we take your privacy seriously and are committed to protecting your personal information. This Privacy Policy is designed to provide a clear and comprehensive understanding of how we collect, use, protect, and share information about you when you use our mobile application and website. By using our services, you acknowledge and agree to the collection and use of information as described in this policy.

    We believe in complete transparency about our data practices. Our goal is to help you understand exactly what information we collect, the purposes for which we collect it, and how you can maintain control over your personal data. We strive to present this information in clear, straightforward language, avoiding technical jargon whenever possible.`
  },
  {
    title: 'Information We Collect',
    content: `To provide and enhance our services, we collect various types of information through your interaction with our platform. When you create an account, we collect basic personal information such as your name, email address, and phone number, which are essential for creating and maintaining your Perfect3sixty profile. If you choose to enhance your profile, you may provide additional information such as profile pictures and service preferences, which help us personalize your experience.

    As you use our platform, we gather information about your interactions, including your booking history and service preferences. This usage data helps us understand how you engage with our platform and allows us to provide more relevant recommendations. With your explicit permission, we may also collect location data to help you find nearby services and provide location-specific features.

    Our platform also automatically collects certain technical information, such as log data and device identifiers, which help us maintain platform security and improve performance. We use cookies and similar tracking technologies to enhance your browsing experience and understand usage patterns. Additionally, we collect analytics data about how you use our platform, which helps us identify areas for improvement and develop new features that better serve our users' needs.`
  },
  {
    title: 'How We Use Your Information',
    content: `Your information serves multiple important purposes in delivering and improving our services. Primarily, we use your data to facilitate the core functions of our platform, including account management, booking processing, and payment handling. This allows us to seamlessly connect you with beauty service providers and ensure smooth transaction processing. We also use your contact information to send essential communications about your appointments, including confirmations and reminders.

    Beyond basic service provision, we analyze user data to continuously improve our platform. This includes studying usage patterns to enhance user experience, developing new features based on user needs, and optimizing existing services. We carefully analyze feedback and interaction data to make informed decisions about platform improvements.

    We may also use your information for communication purposes, including sending important service updates and responding to customer support inquiries. If you've given us consent, we may send promotional offers and updates about new services that we think might interest you. You can control these communications through your account settings or by contacting our support team.`
  },
  {
    title: 'Data Sharing and Disclosure',
    content: `We maintain strict policies regarding the sharing of your personal information and only share data when necessary for service provision or when required by law. In the normal course of business, we share relevant appointment information with salons and beauty professionals to facilitate your bookings. This includes only the information necessary for service fulfillment, such as your name, preferred service, and appointment time.

    For payment processing, we work with trusted payment service providers who receive only the necessary transaction data. Our customer service providers may also access certain information to help resolve any issues you encounter. In all cases, these service providers are bound by strict confidentiality agreements and are prohibited from using your information for any other purposes.

    There may be instances where we are required to share information to comply with legal obligations, protect our rights and safety, or prevent fraud and abuse. However, we want to emphasize that we never sell your personal information to third parties for marketing purposes. Your privacy is paramount, and we share information only when absolutely necessary for providing our services or meeting legal requirements.`
  },
  {
    title: 'Data Security',
    content: `Protecting your personal information is one of our highest priorities. We employ comprehensive security measures across our entire platform to safeguard your data. This includes implementing industry-standard encryption protocols for all data transmission, ensuring that your sensitive information remains protected during transfer between your device and our servers.

    Our secure storage systems are regularly updated with the latest security patches and improvements. We maintain strict access controls and authentication requirements for our systems, ensuring that only authorized personnel can access user data when necessary for their job functions. Regular security audits and assessments are conducted to identify and address any potential vulnerabilities.

    Our commitment to data security extends to our team members, who receive regular training on data protection practices and privacy protocols. However, we also believe in being transparent about the realities of online security. While we implement these robust safeguards and continuously work to protect your information, no system can guarantee absolute security. We remain vigilant and continuously update our security measures to address emerging threats and protect your data.`
  },
  {
    title: 'Your Privacy Rights',
    content: `We believe in empowering our users with control over their personal information. You have comprehensive rights regarding your data, and we are committed to honoring these rights promptly and transparently. You can request access to your personal information at any time, and we will provide you with a copy of the data we hold about you.

    If you notice that your information is incorrect or incomplete, you have the right to request corrections. You can also request the deletion of your personal data, although certain information may need to be retained for legal or business purposes. We respect your choices regarding marketing communications, and you can opt out of receiving promotional messages while still receiving essential service updates.

    For transparency and portability, you can request your data in a structured, commonly used format. These rights can be exercised through your account settings or by contacting our dedicated privacy team, who are ready to assist with any privacy-related requests or concerns.`
  },
  {
    title: 'Third-Party Websites and Services',
    content: `Our platform may contain links to third-party websites or services that are not owned or controlled by Perfect3sixty. When you click on such links, you will be directed away from our site to external destinations. We want to make it clear that we are not responsible for the privacy practices of other sites and strongly encourage you to read their privacy statements.
  
    The third-party service providers we use will only collect, use, and disclose your information to the extent necessary to allow them to perform the services they provide to us. These providers have their own privacy policies governing the handling of user information. We recommend reviewing these policies to understand how your personal information will be handled by these providers.
  
    Please note that if you proceed with a transaction involving a third-party service provider, your information may become subject to the laws of the jurisdiction(s) in which that service provider or its facilities are located.`
  },
  {
    title: 'Payment Processing and Security',
    content: `We use "Razorpay" for processing payments in our platform. We want to assure you that neither we nor Razorpay store your complete card data on our servers. All payment data is encrypted through the Payment Card Industry Data Security Standard (PCI-DSS) when processing payment transactions. Your purchase transaction data is only used as long as is necessary to complete your purchase transaction and is not saved afterward.
  
    Our payment gateway adheres to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, MasterCard, American Express, and Discover. These PCI-DSS requirements help ensure the secure handling of credit card information by our platform and our service providers.
  
    For additional information about payment security, we encourage you to review Razorpay's terms and conditions at https://razorpay.com.`
  },
  {
    title: 'Cookies and Session Management',
    content: `We use cookies and similar tracking technologies to maintain your user session and enhance your experience on our platform. These cookies are essential for the basic functionality of our services and are not used to personally identify you on other websites. 
  
    Our cookie usage is limited to maintaining session information and providing a seamless experience while you use our platform. We may also use cookies to remember your preferences and provide a more personalized experience during future visits.`
  },
  {
    title: 'Data Retention',
    content: `Our data retention policies are designed to keep your information only for as long as necessary to provide our services and meet our legal obligations. Account information is maintained while your account remains active, allowing you to access our services seamlessly. We retain booking history and transaction records as required for legal and business purposes, such as resolving disputes and maintaining accurate financial records.

    Payment information is retained in accordance with legal requirements and financial regulations. Usage data that helps us improve our services is retained for analytical purposes, but we regularly review and anonymize data that's no longer needed for specific purposes. When we determine that certain information is no longer necessary, we employ secure deletion methods or anonymization techniques to ensure your privacy is protected even after the data is no longer in active use.`
  },
  {
    title: 'Updates to This Policy',
    content: `Our Privacy Policy may evolve as we enhance our services or as privacy regulations change. When we make updates to this policy, we're committed to keeping you informed. Any significant changes will be communicated through the app or via email, ensuring you're always aware of how your information is being protected and used.

    We encourage you to review these updates when notified, as they may affect how your information is handled. Your continued use of our services after policy updates indicates your acceptance of the changes. We maintain all previous versions of our privacy policy for reference, and you can always contact our privacy team if you have questions about any changes or how they might affect you.`
  }
];

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <ScrollAnimatedSection>
        <div className="bg-black text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-lg opacity-90 max-w-2xl">
              Learn how Perfect3sixty protects and handles your personal information.
            </p>
            <p className="text-sm opacity-75 mt-4">Last Updated: 2nd Nov, 2024</p>
          </div>
        </div>
      </ScrollAnimatedSection>

      {/* Key Points */}
      <ScrollAnimatedSection>
        <section className="py-16 bg-black bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {keyPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-xl"
                >
                  <point.icon className="w-8 h-8 text-orange-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{point.title}</h3>
                  <p className="text-gray-600">{point.content}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimatedSection>

      {/* Detailed Content */}

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              {privacyContent.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-white rounded-xl p-8 shadow-sm"
                >
                  <h2 className="text-2xl font-bold mb-6 text-gray-900">{section.title}</h2>
                  <div className="space-y-4"> {/* Removed prose class */}
                    {section.content.split('\n\n').map((paragraph, idx) => (
                      <p key={idx} className="text-gray-600 leading-relaxed"> {/* Added leading-relaxed for better readability */}
                        {paragraph.trim()}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}

              {/* Contact Section */}
              <div className="bg-black text-white rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-4">Privacy Questions?</h2>
                <p className="mb-4 text-gray-100"> {/* Added specific text color */}
                  If you have any questions about our Privacy Policy or how we handle your data,
                  please contact us at:
                </p>
                <div className="flex items-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <a href="mailto:mail@perfect3sixty.com"
                    className="text-orange-400 hover:text-orange-300 transition-colors">
                    mail@perfect3sixty.com
                  </a>                
                </div>
              </div>
            </div>
          </div>
        </section>
  
    </div>
  );
};

export default PrivacyPolicy;