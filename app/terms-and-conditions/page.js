import PageBanner from '@/components/sections/PageBanner';
import Link from 'next/link';
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: 'Terms and Conditions | Think4Ever',
  description: 'Read the Terms and Conditions for using Think4Ever services and website.',
  canonicalUrl: "https://www.think4ever.com/new_site/terms-and-conditions/",
});

const TermsAndConditions = () => {
  return (
    <main className="min-h-screen bg-white">
      <PageBanner title="Terms and Conditions" />

      <article className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Meta info */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-[13px] text-gray-400 mb-10 pb-8 border-b border-gray-100">
          <span>Effective Date: <strong className="text-gray-600">April 13, 2026</strong></span>
          <span className="hidden sm:inline text-gray-200">|</span>
          <span>Last Updated: <strong className="text-gray-600">April 13, 2026</strong></span>
        </div>

        <div className="space-y-14">

          {/* Intro */}
          <div className="space-y-4 max-w-4xl">
            <p className="text-gray-500 text-[15px] leading-[1.8]">
              Welcome to <strong className="text-[#1f2937]">Think4Ever</strong>. These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of the website located at{' '}
              <Link href="https://www.think4ever.com" className="text-[#e25d24] font-semibold hover:underline underline-offset-2 transition-colors">www.think4ever.com</Link>{' '}
              (the &quot;Site&quot;) and any related services provided by Think4Ever (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
            </p>
            <p className="text-gray-500 text-[15px] leading-[1.8]">
              By accessing or using our Site, you agree to be bound by these Terms. If you <strong className="text-[#1f2937]">do not agree</strong> to all the terms and conditions of this agreement, then you may not access the Site or use any services.
            </p>
          </div>

          {/* Section 1 */}
          <section>
            <h2 className="text-[22px] font-bold text-[#1f2937] mb-6 tracking-tight">1. Acceptance of Terms</h2>
            <p className="text-gray-500 text-[15px] leading-[1.8] mb-4">
              By creating an account, making a purchase, or simply browsing our Site, you acknowledge that you have read, understood, and agree to be bound by these Terms, along with our{' '}
              <Link href="/privacy-policy" className="text-[#e25d24] font-semibold hover:underline underline-offset-2 transition-colors">Privacy Policy</Link>, which is incorporated herein by reference.
            </p>
            <p className="text-gray-500 text-[15px] leading-[1.8]">
              We reserve the right to update or modify these Terms at any time without prior notice. Your continued use of the Site following any changes constitutes your acceptance of the new Terms. It is your responsibility to review these Terms periodically.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-[22px] font-bold text-[#1f2937] mb-6 tracking-tight">2. Eligibility</h2>
            <p className="text-gray-500 text-[15px] leading-[1.8] mb-4">
              To use our Site and services, you must:
            </p>
            <ul className="space-y-2.5 text-[14.5px] text-gray-500 leading-[1.8] pl-1">
              {[
                'Be at least 18 years of age, or the age of majority in your jurisdiction',
                'Have the legal capacity to enter into a binding agreement',
                'Not be prohibited from using the Site under any applicable laws',
                'Provide accurate and complete registration information, if applicable',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="mt-[10px] w-1.5 h-1.5 rounded-full bg-[#e25d24]/40 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-gray-500 text-[14.5px] leading-[1.8] mt-4">
              If you are using the Site on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these Terms.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-[22px] font-bold text-[#1f2937] mb-6 tracking-tight">3. User Accounts</h2>
            <p className="text-gray-500 text-[15px] leading-[1.8] mb-4">
              When you create an account with us, you must provide information that is <strong className="text-[#1f2937]">accurate, complete, and current</strong> at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
            </p>
            <p className="text-gray-500 text-[15px] leading-[1.8] mb-4">
              You are responsible for safeguarding the password that you use to access the Site and for any activities or actions under your password. You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
            </p>
            <p className="text-gray-500 text-[15px] leading-[1.8]">
              We reserve the right to <strong className="text-[#1f2937]">suspend or terminate</strong> your account at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties, or for any other reason.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-[22px] font-bold text-[#1f2937] mb-6 tracking-tight">4. Services and Products</h2>
            <p className="text-gray-500 text-[15px] leading-[1.8] mb-4">
              Think4Ever provides a multi-agent SDLC platform and related digital services. We reserve the right to:
            </p>
            <ul className="space-y-2.5 text-[14.5px] text-gray-500 leading-[1.8] pl-1">
              {[
                'Modify, suspend, or discontinue any aspect of the Site or services at any time',
                'Impose limits on certain features or restrict access to parts or all of the Site',
                'Update pricing, features, or service tiers without prior notice',
                'Refuse service to anyone for any reason at any time',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="mt-[10px] w-1.5 h-1.5 rounded-full bg-[#e25d24]/40 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-gray-500 text-[14.5px] leading-[1.8] mt-4">
              We shall not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the service.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-[22px] font-bold text-[#1f2937] mb-6 tracking-tight">5. Intellectual Property Rights</h2>
            <p className="text-gray-500 text-[15px] leading-[1.8] mb-4">
              The Site and its entire contents, features, and functionality — including but not limited to all <strong className="text-[#1f2937]">information, software, text, displays, images, video, audio, design, selection, and arrangement</strong> — are owned by Think4Ever, its licensors, or other providers of such material and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
            <p className="text-gray-500 text-[15px] leading-[1.8]">
              You must not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Site without our prior written consent.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-[22px] font-bold text-[#1f2937] mb-6 tracking-tight">6. Prohibited Uses</h2>
            <p className="text-gray-500 text-[15px] leading-[1.8] mb-4">
              You agree not to use the Site:
            </p>
            <ul className="space-y-2.5 text-[14.5px] text-gray-500 leading-[1.8] pl-1">
              {[
                'In any way that violates any applicable federal, state, local, or international law or regulation',
                'To transmit any advertising or promotional material, including spam or similar solicitation',
                'To impersonate or attempt to impersonate the company, an employee, another user, or any other person',
                'To engage in any conduct that restricts or inhibits the use or enjoyment of the Site',
                'To introduce any viruses, trojan horses, worms, or other material that is malicious or harmful',
                'To attempt to gain unauthorized access to any parts of the Site, server, or any database connected to the Site',
                'To use the Site in any manner that could disable, damage, or impair the Site',
                'To use any robot, spider, or other automatic device to access the Site for any purpose',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="mt-[10px] w-1.5 h-1.5 rounded-full bg-[#e25d24]/40 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-[22px] font-bold text-[#1f2937] mb-6 tracking-tight">7. Payment and Billing</h2>
            <p className="text-gray-500 text-[15px] leading-[1.8] mb-4">
              If you purchase any services through our Site, you agree to provide <strong className="text-[#1f2937]">current, complete, and accurate</strong> billing and payment information. You agree to promptly update your account and payment information to keep it accurate and current.
            </p>
            <div className="space-y-4 mb-4">
              {[
                { name: 'Pricing', desc: 'All prices are listed in USD unless otherwise stated. We reserve the right to change prices at any time.' },
                { name: 'Billing Cycle', desc: 'Subscription-based services are billed in advance on a recurring basis (monthly or annually) depending on the plan you select.' },
                { name: 'Refunds', desc: 'Refund requests are handled on a case-by-case basis. Please contact us within 14 days of purchase for refund inquiries.' },
                { name: 'Cancellation', desc: 'You may cancel your subscription at any time through your account settings. Cancellation takes effect at the end of the current billing period.' },
              ].map((item, idx) => (
                <div key={idx} className="pl-5 border-l-2 border-[#e25d24]/20">
                  <strong className="text-[14.5px] text-[#1f2937]">{item.name}:</strong>
                  <span className="text-[14.5px] text-gray-500 ml-1.5">{item.desc}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-[22px] font-bold text-[#1f2937] mb-6 tracking-tight">8. Limitation of Liability</h2>
            <p className="text-gray-500 text-[15px] leading-[1.8] mb-4">
              To the fullest extent permitted by applicable law, in no event shall Think4Ever, its affiliates, directors, employees, or agents be liable for any <strong className="text-[#1f2937]">indirect, incidental, special, consequential, or punitive damages</strong>, including but not limited to:
            </p>
            <ul className="space-y-2.5 text-[14.5px] text-gray-500 leading-[1.8] pl-1">
              {[
                'Loss of profits, data, use, goodwill, or other intangible losses',
                'Damages resulting from unauthorized access to or use of our servers',
                'Damages resulting from any interruption or cessation of transmission to or from our Site',
                'Damages resulting from any bugs, viruses, or similar issues transmitted through the Site',
                'Any errors or omissions in content or for any loss or damage incurred from the use of content',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="mt-[10px] w-1.5 h-1.5 rounded-full bg-[#e25d24]/40 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-gray-500 text-[14.5px] leading-[1.8] mt-4">
              Our total liability to you for all claims arising out of or relating to the use of the Site shall not exceed the amount you paid to us during the <strong className="text-[#e25d24]">twelve (12) months</strong> prior to the claim.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-[22px] font-bold text-[#1f2937] mb-6 tracking-tight">9. Disclaimer of Warranties</h2>
            <p className="text-gray-500 text-[15px] leading-[1.8] mb-4">
              The Site and all services are provided on an <strong className="text-[#1f2937]">&quot;AS IS&quot; and &quot;AS AVAILABLE&quot;</strong> basis without any warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance.
            </p>
            <p className="text-gray-500 text-[15px] leading-[1.8]">
              Think4Ever does not warrant that the Site will function uninterrupted, secure, or available at any particular time or location, or that any errors or defects will be corrected, or that the results of using the Site will meet your requirements.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-[22px] font-bold text-[#1f2937] mb-6 tracking-tight">10. Indemnification</h2>
            <p className="text-gray-500 text-[15px] leading-[1.8]">
              You agree to defend, indemnify, and hold harmless Think4Ever, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys&apos; fees) arising out of or relating to your violation of these Terms or your use of the Site.
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-[22px] font-bold text-[#1f2937] mb-6 tracking-tight">11. Third-Party Links</h2>
            <p className="text-gray-500 text-[15px] leading-[1.8]">
              Our Site may contain links to third-party websites or services that are not owned or controlled by Think4Ever. We have <strong className="text-[#1f2937]">no control over and assume no responsibility</strong> for the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that Think4Ever shall not be responsible or liable for any damage or loss caused by or in connection with the use of such content, goods, or services.
            </p>
          </section>

          {/* Section 12 */}
          <section>
            <h2 className="text-[22px] font-bold text-[#1f2937] mb-6 tracking-tight">12. Termination</h2>
            <p className="text-gray-500 text-[15px] leading-[1.8] mb-4">
              We may terminate or suspend your account and access to the Site <strong className="text-[#1f2937]">immediately, without prior notice or liability</strong>, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
            <p className="text-gray-500 text-[15px] leading-[1.8]">
              Upon termination, your right to use the Site will immediately cease. All provisions of the Terms which by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
            </p>
          </section>

          {/* Section 13 */}
          <section>
            <h2 className="text-[22px] font-bold text-[#1f2937] mb-6 tracking-tight">13. Governing Law</h2>
            <p className="text-gray-500 text-[15px] leading-[1.8]">
              These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which Think4Ever operates, without regard to its conflict of law provisions. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located within that jurisdiction.
            </p>
          </section>

          {/* Section 14 */}
          <section>
            <h2 className="text-[22px] font-bold text-[#1f2937] mb-6 tracking-tight">14. Severability</h2>
            <p className="text-gray-500 text-[15px] leading-[1.8]">
              If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law, and the remaining provisions will continue in full force and effect.
            </p>
          </section>

          {/* Section 15 */}
          <section>
            <h2 className="text-[22px] font-bold text-[#1f2937] mb-6 tracking-tight">15. Changes to Terms</h2>
            <p className="text-gray-500 text-[15px] leading-[1.8] mb-4">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least <strong className="text-[#e25d24]">30 days&apos;</strong> notice prior to any new terms taking effect.
            </p>
            <p className="text-gray-500 text-[15px] leading-[1.8]">
              What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Site after those revisions become effective, you agree to be bound by the revised terms.
            </p>
          </section>

          {/* Section 16 */}
          <section>
            <h2 className="text-[22px] font-bold text-[#1f2937] mb-6 tracking-tight">16. Contact Us</h2>
            <p className="text-gray-500 text-[15px] leading-[1.8] mb-6">
              If you have any questions about these Terms and Conditions, please contact us at:
            </p>
            <div className="bg-[#fafbfc] rounded-xl p-6 sm:p-8 border border-gray-100 space-y-2.5">
              <p className="text-[16px] font-bold text-[#1f2937]">Think4Ever</p>
              <p className="text-[14.5px] text-gray-500">
                Website:{' '}
                <a href="https://www.think4ever.com" className="text-[#e25d24] font-semibold hover:underline underline-offset-2 transition-colors">www.think4ever.com</a>
              </p>
              <p className="text-[14.5px] text-gray-500">
                Email:{' '}
                <a href="mailto:legal@think4ever.com" className="text-[#e25d24] font-semibold hover:underline underline-offset-2 transition-colors">legal@think4ever.com</a>
              </p>
            </div>
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

export default TermsAndConditions;
