import PageBanner from '@/components/sections/PageBanner';
import Link from 'next/link';
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: 'Privacy Policy | Think4Ever',
  description: 'Learn how Think4Ever collects, uses, and protects your personal information.',
  canonicalUrl: "https://www.think4ever.com/new_site/privacy-policy/",
});

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Banner */}
      <PageBanner
        title="Privacy Policy"
        bgImage="https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029&auto=format&fit=crop"
      />

      {/* Content */}
      <article className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        {/* Back Link */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-[#e25d24] transition-colors mb-8 group"
        >
          <span className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center group-hover:border-[#e25d24]/20 group-hover:bg-[#e25d24]/5">
            ←
          </span>
          Back to Home
        </Link>

        {/* Meta info */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-[13px] text-gray-400 mb-10 pb-8 border-b border-gray-100">
          <span>Effective Date: <strong className="text-gray-600">April 13, 2026</strong></span>
          <span className="hidden sm:inline text-gray-200">|</span>
          <span>Last Updated: <strong className="text-gray-600">April 13, 2026</strong></span>
        </div>

        {/* Prose content */}
        <div className="space-y-14">

          {/* Intro */}
          <div className="space-y-4 max-w-4xl">
            <p className="text-gray-500 text-[15px] leading-[1.8]">
              Thank you for visiting <strong className="text-[#1f2937]">Think4Ever</strong> (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you visit our website at{' '}
              <Link href="https://www.think4ever.com" className="text-[#e25d24] font-semibold hover:underline underline-offset-2 transition-colors">www.think4ever.com</Link>{' '}
              (the &quot;Site&quot;) or use any of our services.
            </p>
            <p className="text-gray-500 text-[15px] leading-[1.8]">
              By using our Site, you agree to the practices described in this Privacy Policy. Please read this policy carefully. If you do not agree with the terms of this Privacy Policy, please <strong className="text-[#1f2937]">discontinue your use of the Site</strong>.
            </p>
          </div>

          {/* Section 1 */}
          <section>
            <h2 className="text-[22px] font-bold text-[#1f2937] mb-6 tracking-tight">1. Information We Collect</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-[16px] font-bold text-[#1f2937] mb-3">1.1 Information You Provide Directly</h3>
                <p className="text-gray-500 text-[15px] leading-[1.8] mb-4">
                  We collect information you voluntarily provide when you:
                </p>
                <ul className="space-y-2.5 text-[14.5px] text-gray-500 leading-[1.8] pl-1">
                  {[
                    'Create an account or register on our Site',
                    'Submit a contact form or inquiry',
                    'Subscribe to our newsletter or mailing list',
                    'Participate in surveys, contests, or promotions',
                    'Communicate with us via email or other channels',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="mt-[10px] w-1.5 h-1.5 rounded-full bg-[#e25d24]/40 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-gray-500 text-[14.5px] leading-[1.8] mt-4">
                  Types of personal information collected may include your <strong className="text-[#1f2937]">name, email address, phone number, postal address</strong>, and any other information you choose to provide.
                </p>
              </div>

              <div>
                <h3 className="text-[16px] font-bold text-[#1f2937] mb-3">1.2 Information Collected Automatically</h3>
                <p className="text-gray-500 text-[15px] leading-[1.8] mb-4">
                  When you visit our Site, we automatically collect:
                </p>
                <ul className="space-y-2.5 text-[14.5px] text-gray-500 leading-[1.8] pl-1">
                  {[
                    'IP address and approximate geographic location',
                    'Browser type and version',
                    'Device type and operating system',
                    'Pages visited and time spent',
                    'Clickstream data and interaction patterns',
                    'Cookies and tracking technologies',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="mt-[10px] w-1.5 h-1.5 rounded-full bg-[#e25d24]/40 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-[22px] font-bold text-[#1f2937] mb-6 tracking-tight">2. How We Use Your Information</h2>
            <p className="text-gray-500 text-[15px] leading-[1.8] mb-4">
              We use the information we collect for the following purposes:
            </p>
            <ul className="space-y-2.5 text-[14.5px] text-gray-500 leading-[1.8] pl-1">
              {[
                'To operate, maintain, and improve our Site and services',
                'To respond to your inquiries and provide customer support',
                'To send you newsletters, updates, and promotional communications (with your consent)',
                'To personalize your experience on our Site',
                'To analyze usage patterns and improve our content and user experience',
                'To detect, prevent, and address technical issues or fraudulent activity',
                'To comply with applicable laws and legal obligations',
                'To enforce our Terms of Service and other agreements',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="mt-[10px] w-1.5 h-1.5 rounded-full bg-[#e25d24]/40 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-[22px] font-bold text-[#1f2937] mb-6 tracking-tight">3. Cookies and Tracking Technologies</h2>
            <p className="text-gray-500 text-[15px] leading-[1.8] mb-6">
              Our Site uses <strong className="text-[#1f2937]">cookies and similar tracking technologies</strong> to enhance your experience. Cookies are small data files stored on your device that help us recognize you on return visits and understand how you use our Site.
            </p>

            <h3 className="text-[16px] font-bold text-[#1f2937] mb-4">3.1 Types of Cookies We Use</h3>
            <div className="space-y-4 mb-6">
              {[
                { name: 'Essential Cookies', desc: 'Required for the Site to function properly and cannot be disabled.' },
                { name: 'Analytics Cookies', desc: 'Help us understand how visitors interact with our Site (e.g., Google Analytics).' },
                { name: 'Preference Cookies', desc: 'Remember your settings and preferences for future visits.' },
                { name: 'Marketing Cookies', desc: 'Used to deliver relevant advertisements and track campaign effectiveness.' },
              ].map((cookie, idx) => (
                <div key={idx} className="pl-5 border-l-2 border-[#e25d24]/20">
                  <strong className="text-[14.5px] text-[#1f2937]">{cookie.name}:</strong>
                  <span className="text-[14.5px] text-gray-500 ml-1.5">{cookie.desc}</span>
                </div>
              ))}
            </div>

            <p className="text-gray-500 text-[14.5px] leading-[1.8]">
              You can control or disable cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of our Site. To learn more about cookies, visit{' '}
              <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-[#e25d24] font-semibold hover:underline underline-offset-2 transition-colors">www.allaboutcookies.org</a>.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-[22px] font-bold text-[#1f2937] mb-6 tracking-tight">4. How We Share Your Information</h2>
            <p className="text-gray-500 text-[15px] leading-[1.8] mb-6">
              We <strong className="text-[#1f2937]">do not sell, rent, or trade</strong> your personal information to third parties for their own marketing purposes. We may share your information in the following circumstances:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-[16px] font-bold text-[#1f2937] mb-2">4.1 Service Providers</h3>
                <p className="text-gray-500 text-[14.5px] leading-[1.8]">
                  We may share your information with trusted third-party vendors and service providers who assist us in operating our Site, including <strong className="text-[#1f2937]">web hosting, analytics, email delivery, and payment processing</strong>. These parties are contractually obligated to keep your information confidential and use it only for the services they provide to us.
                </p>
              </div>

              <div>
                <h3 className="text-[16px] font-bold text-[#1f2937] mb-2">4.2 Legal Requirements</h3>
                <p className="text-gray-500 text-[14.5px] leading-[1.8]">
                  We may disclose your information if required to do so by law, court order, or governmental authority, or if we believe disclosure is necessary to protect our rights, your safety, or the safety of others.
                </p>
              </div>

              <div>
                <h3 className="text-[16px] font-bold text-[#1f2937] mb-2">4.3 Business Transfers</h3>
                <p className="text-gray-500 text-[14.5px] leading-[1.8]">
                  In the event of a merger, acquisition, reorganization, or sale of assets, your information may be transferred as part of that transaction. We will notify you of any such change and any choices you may have regarding your information.
                </p>
              </div>

              <div>
                <h3 className="text-[16px] font-bold text-[#1f2937] mb-2">4.4 With Your Consent</h3>
                <p className="text-gray-500 text-[14.5px] leading-[1.8]">
                  We may share your information with third parties when you have given us explicit consent to do so.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-[22px] font-bold text-[#1f2937] mb-6 tracking-tight">5. Data Retention</h2>
            <p className="text-gray-500 text-[15px] leading-[1.8]">
              We retain your personal information for as long as necessary to fulfill the purposes described in this Privacy Policy, unless a longer retention period is required or permitted by law. When your information is no longer needed, we will <strong className="text-[#1f2937]">securely delete or anonymize it</strong>.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-[22px] font-bold text-[#1f2937] mb-6 tracking-tight">6. Data Security</h2>
            <p className="text-gray-500 text-[15px] leading-[1.8] mb-4">
              We take reasonable <strong className="text-[#1f2937]">administrative, technical, and physical measures</strong> to protect your personal information against unauthorized access, loss, theft, disclosure, or alteration. However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee its absolute security.
            </p>
            <p className="text-gray-500 text-[15px] leading-[1.8]">
              We encourage you to use <strong className="text-[#1f2937]">strong, unique passwords</strong> for your account and to notify us immediately if you suspect any unauthorized use of your account.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-[22px] font-bold text-[#1f2937] mb-6 tracking-tight">7. Your Rights and Choices</h2>
            <p className="text-gray-500 text-[15px] leading-[1.8] mb-6">
              Depending on your location, you may have the following rights regarding your personal information:
            </p>
            <div className="space-y-3 mb-6">
              {[
                { label: 'Access', desc: 'Request a copy of the personal information we hold about you.' },
                { label: 'Correction', desc: 'Request that we correct inaccurate or incomplete information.' },
                { label: 'Deletion', desc: 'Request that we delete your personal information, subject to certain exceptions.' },
                { label: 'Opt-Out', desc: 'Opt out of marketing communications at any time by clicking "unsubscribe" in our emails or contacting us directly.' },
                { label: 'Data Portability', desc: 'Request a copy of your data in a structured, machine-readable format.' },
                { label: 'Restriction', desc: 'Request that we restrict processing of your information in certain circumstances.' },
                { label: 'Objection', desc: 'Object to processing of your personal information based on our legitimate interests.' },
              ].map((right, idx) => (
                <div key={idx} className="flex items-start gap-3 text-[14.5px]">
                  <span className="mt-[10px] w-1.5 h-1.5 rounded-full bg-[#e25d24]/40 shrink-0" />
                  <p className="text-gray-500 leading-[1.8]">
                    <strong className="text-[#1f2937]">{right.label}:</strong>{' '}{right.desc}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-[14.5px] leading-[1.8]">
              To exercise any of these rights, please contact us using the details provided in <strong className="text-[#1f2937]">Section 11</strong>. We will respond to your request within <strong className="text-[#e25d24]">30 days</strong>.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-[22px] font-bold text-[#1f2937] mb-6 tracking-tight">8. Children&apos;s Privacy</h2>
            <p className="text-gray-500 text-[15px] leading-[1.8]">
              Our Site is <strong className="text-[#1f2937]">not directed to children under the age of 13</strong>, and we do not knowingly collect personal information from children. If we become aware that we have inadvertently collected personal information from a child under 13, we will take steps to delete such information promptly. If you believe we may have collected information from a child, please contact us immediately.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-[22px] font-bold text-[#1f2937] mb-6 tracking-tight">9. Third-Party Links</h2>
            <p className="text-gray-500 text-[15px] leading-[1.8]">
              Our Site may contain links to third-party websites or services. This Privacy Policy does not apply to those external sites, and we are not responsible for their privacy practices. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-[22px] font-bold text-[#1f2937] mb-6 tracking-tight">10. Changes to This Policy</h2>
            <p className="text-gray-500 text-[15px] leading-[1.8] mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. When we make material changes, we will update the <strong className="text-[#1f2937]">&quot;Last Updated&quot;</strong> date at the top of this page and, where appropriate, notify you by email or a prominent notice on our Site.
            </p>
            <p className="text-gray-500 text-[15px] leading-[1.8]">
              Your continued use of our Site following the posting of changes constitutes your acceptance of those changes. We encourage you to review this Privacy Policy periodically.
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-[22px] font-bold text-[#1f2937] mb-6 tracking-tight">11. Contact Us</h2>
            <p className="text-gray-500 text-[15px] leading-[1.8] mb-6">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="bg-[#fafbfc] rounded-xl p-6 sm:p-8 border border-gray-100 space-y-2.5">
              <p className="text-[16px] font-bold text-[#1f2937]">Think4Ever</p>
              <p className="text-[14.5px] text-gray-500">
                Website:{' '}
                <a href="https://www.think4ever.com" className="text-[#e25d24] font-semibold hover:underline underline-offset-2 transition-colors">www.think4ever.com</a>
              </p>
              <p className="text-[14.5px] text-gray-500">
                Email:{' '}
                <a href="mailto:privacy@think4ever.com" className="text-[#e25d24] font-semibold hover:underline underline-offset-2 transition-colors">privacy@think4ever.com</a>
              </p>
            </div>
            <p className="text-gray-500 text-[14.5px] leading-[1.8] mt-6">
              We take your privacy seriously and will do our best to address your concerns promptly and thoroughly.
            </p>
          </section>

        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-100 text-center text-[13px] text-gray-400">
          © 2026 Think4Ever. All rights reserved.
        </div>
      </article>
    </main>
  );
};

export default PrivacyPolicy;
