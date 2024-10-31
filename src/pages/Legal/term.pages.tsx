
const RefundPolicy = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-8">Refund and Cancellation Policy</h2>
        <p className="mb-6">
          If you are not satisfied with a service, you may request a refund. Once a request is received and verified, we initiate the refund process immediately.
        </p>
        <h3 className="text-2xl font-semibold mb-4">Refund Process</h3>
        <p className="mb-4">
          After processing your refund request, we will settle the amount with our payment provider. The entire process, including crediting the amount to your bank account, will take approximately 2-3 working days.
        </p>
        <h3 className="text-2xl font-semibold mb-4">Cancellation Policy</h3>
        <p className="mb-4">
        If you need to cancel an appointment, please do so at least 2 hours before the scheduled time to avoid cancellation fees. Refunds for cancellations will be processed according to the timelines mentioned above.
        </p>
      </div>
    </div>
  );
};

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-8">Terms and Conditions</h2>
        <p className="mb-6">
          Welcome to Perfect3Sixty. By using our platform, you agree to the following terms:
        </p>
        <ul className="list-disc ml-6 space-y-4">
          <li>Services are available only to users in compliance with our platform policies.</li>
          <li>Pricing is displayed in INR and is subject to change based on service provider rates.</li>
          <li>Booking services are non-transferable and are valid only for the booked time and date.</li>
        </ul>
        <h3 className="text-2xl font-semibold mb-4 mt-8">Shipping Policy</h3>
        <p className="mb-4">
          Our services do not involve physical product shipments. However, digital confirmations are sent immediately upon booking completion.
        </p>
      </div>
    </div>
  );
};

const ContactInfo = () => {
    return (
      <div className="min-h-screen">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
          <p>If you have any questions, please contact us:</p>
          <p className="mt-2">
            Email: mail@perfect3sixty.com<br />
            Phone: +91-7077817628<br />
            Complaint or Feedback: +91-8273511939<br />
            {/* Address: [Operating Address in India] */}
          </p>
        </div>
      </div>
    );
  };
export { RefundPolicy, TermsAndConditions, ContactInfo };
