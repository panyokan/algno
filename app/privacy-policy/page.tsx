"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          
          <div className="prose prose-slate max-w-none text-slate-300">
            {/* <p className="text-lg mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p> */}

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">1. Introduction</h2>
              <p>
                Algonix Technologies ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. 
                This privacy policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">2. Information We Collect</h2>
              <h3 className="text-xl font-medium mb-2 text-white">2.1 Personal Information</h3>
              <p>We may collect the following personal information:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Name and contact information (email, phone number)</li>
                <li>Company information</li>
                <li>Project requirements and specifications</li>
                <li>Communication preferences</li>
              </ul>
              
              <h3 className="text-xl font-medium mb-2 text-white">2.2 Technical Information</h3>
              <p>We automatically collect certain technical information:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>IP address and device information</li>
                <li>Browser type and version</li>
                <li>Usage patterns and website interactions</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">3. How We Use Your Information</h2>
              <p>We use your information for:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Providing and improving our services</li>
                <li>Communicating with you about projects and updates</li>
                <li>Marketing and promotional activities (with your consent)</li>
                <li>Legal compliance and fraud prevention</li>
                <li>Website analytics and optimization</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">4. Data Sharing and Disclosure</h2>
              <p>We do not sell your personal data. We may share your information with:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Trusted third-party service providers</li>
                <li>Legal authorities when required by law</li>
                <li>Business partners with your explicit consent</li>
                <li>In case of business transfer or merger</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your data against 
                unauthorized access, alteration, disclosure, or destruction. However, no method of transmission 
                over the internet is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">6. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Access and update your personal information</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Data portability and correction</li>
                <li>Object to processing in certain circumstances</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">7. Cookies Policy</h2>
              <p>
                We use cookies to enhance your experience. You can control cookie settings through your browser preferences. 
                For more details, see our <Link href="/cookie-policy" className="text-purple-400 hover:text-purple-300">Cookie Policy</Link>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">8. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-slate-800 rounded-lg">
                <p>Email: privacy@algonixtechnologies.com</p>
                {/* <p>Address: [Your Business Address]</p> */}
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">9. Updates to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any material changes 
                by posting the new policy on our website with an updated effective date.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-800">
            <Link 
              href="/" 
              className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
