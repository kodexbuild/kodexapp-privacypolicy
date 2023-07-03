import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Privacy Policy for Kodex Digital Learning Platform App

Effective Date: [Insert Date]

Thank you for choosing Kodex Digital Learning Platform App. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you use our app. By using the Kodex Digital Learning Platform App, you consent to the practices described in this Privacy Policy.

Information We Collect
1.1 Personal Information
We may collect personal information that you provide directly to us when you create an account, use our app, communicate with us, or participate in our services. This may include your name, email address, username, password, profile information, and any other information you voluntarily provide.

1.2 Usage and Device Information
When you use our app, we automatically collect certain information about your usage and device. This may include your IP address, device type, operating system, browser type, app version, language preferences, unique device identifiers, and other diagnostic data. We may also collect information about your interactions with the app, such as the features you use, the content you view, and the actions you take.

1.3 Cookies and Similar Technologies
We may use cookies and similar tracking technologies to collect information and improve our app's functionality. Cookies are small files that are stored on your device, enabling us to recognize your device and remember certain information. You can manage your cookie preferences through your device or browser settings.

How We Use Your Information
2.1 Provide and Improve the App
We use your personal information to provide you with access to our app and its features, personalize your experience, and improve our services. This includes, but is not limited to, analyzing usage patterns, troubleshooting issues, and enhancing the overall functionality and performance of the app.

2.2 Communication and Support
We may use your personal information to communicate with you, respond to your inquiries or requests, and provide customer support. We may also send you administrative and service-related messages, including updates, security alerts, and other app-related notifications.

2.3 Research and Analytics
We may aggregate and anonymize your information for research and analytical purposes to understand user preferences, trends, and app usage patterns. This helps us improve our app and develop new features and offerings.

2.4 Legal Compliance and Protection
We may use and disclose your information to comply with applicable laws, regulations, legal processes, or enforceable governmental requests. We may also use your information to investigate, prevent, or take action against any illegal activities, fraud, or violations of our terms and conditions.

Data Sharing and Disclosure
3.1 Service Providers
We may engage third-party service providers to perform certain functions on our behalf, such as hosting, data analysis, customer support, and marketing assistance. These service providers have access to your personal information only to the extent necessary to perform their services and are obligated to maintain the confidentiality and security of your information.

3.2 Business Transfers
In the event of a merger, acquisition, or any form of sale or transfer of some or all of our assets, we may disclose or transfer your personal information to the acquiring entity. We will notify you before your personal information becomes subject to a different privacy policy.

3.3 Legal Requirements
We may disclose your personal information if required to do so by law or in response to valid requests by public authorities (e.g., court orders, government agencies).

Data Security
We take reasonable measures to protect your personal information from unauthorized access, loss, misuse, or alteration. However, no data transmission or storage system can be guaranteed to be 100% secure. Therefore, while we strive to protect your information, we cannot guarantee its absolute security.

Children's Privacy
The Kodex Digital Learning Platform App is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information from our records.

Your Choices
You have the right to access, correct, update, or delete your personal information. You can do so by accessing your account settings or by contacting us directly. Please note that we may retain certain information as required by law or for legitimate business purposes.

Changes to this Privacy Policy
We reserve the right to modify this Privacy Policy at any time. Any changes will be effective immediately upon posting the updated Privacy Policy on the app. We encourage you to review this Privacy Policy periodically for any updates.

Contact Us
If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at [insert contact information].

By using the Kodex Digital Learning Platform App, you acknowledge that you have read and understood this Privacy Policy and agree to its terms and conditions
        </p>
      </main>

      <Footer />
    </div>
  )
}
