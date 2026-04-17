"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CookiePolicy() {
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
            Cookie Policy
          </h1>
          
          <div className="prose prose-slate max-w-none text-slate-300">
            {/* <p className="text-lg mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p> */}

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">1. What Are Cookies?</h2>
              <p>
                Cookies are small text files that are placed on your device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences and 
                understanding how you use our site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">2. How We Use Cookies</h2>
              <p>Algonix Technologies uses cookies for the following purposes:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Essential website functionality</li>
                <li>Remembering your preferences and settings</li>
                <li>Analyzing website traffic and usage patterns</li>
                <li>Improving our services and user experience</li>
                <li>Security and fraud prevention</li>
                <li>Marketing and advertising (with your consent)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">3. Types of Cookies We Use</h2>
              
              <h3 className="text-xl font-medium mb-2 text-white">3.1 Essential Cookies</h3>
              <p>
                These cookies are necessary for the website to function properly. They enable basic functions 
                like page navigation and access to secure areas of the website.
              </p>
              <div className="mt-4 mb-6 p-4 bg-slate-800 rounded-lg">
                <p className="font-medium text-white">Examples:</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Session management cookies</li>
                  <li>Security cookies</li>
                  <li>Load balancing cookies</li>
                </ul>
              </div>

              <h3 className="text-xl font-medium mb-2 text-white">3.2 Analytics Cookies</h3>
              <p>
                These cookies help us understand how visitors interact with our website by collecting 
                and reporting information anonymously.
              </p>
              <div className="mt-4 mb-6 p-4 bg-slate-800 rounded-lg">
                <p className="font-medium text-white">Examples:</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Google Analytics cookies</li>
                  <li>Heat mapping cookies</li>
                  <li>A/B testing cookies</li>
                </ul>
              </div>

              <h3 className="text-xl font-medium mb-2 text-white">3.3 Functional Cookies</h3>
              <p>
                These cookies enable the website to provide enhanced functionality and personalization.
              </p>
              <div className="mt-4 mb-6 p-4 bg-slate-800 rounded-lg">
                <p className="font-medium text-white">Examples:</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Language preference cookies</li>
                  <li>Theme preference cookies</li>
                  <li>Form data cookies</li>
                </ul>
              </div>

              {/* <h3 className="text-xl font-medium mb-2 text-white">3.4 Marketing Cookies</h3>
              <p>
                These cookies are used to track visitors across websites to display relevant and 
                engaging advertisements.
              </p>
              <div className="mt-4 mb-6 p-4 bg-slate-800 rounded-lg">
                <p className="font-medium text-white">Examples:</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Social media tracking cookies</li>
                  <li>Advertising network cookies</li>
                  <li>Retargeting cookies</li>
                </ul>
              </div> */}
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">4. Third-Party Cookies</h2>
              <p>We may use third-party services that set cookies on our website, including:</p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
                <li><strong>Social Media Platforms:</strong> For social sharing and login functionality</li>
                <li><strong>Marketing Tools:</strong> For email marketing and lead generation</li>
                <li><strong>Customer Support:</strong> For chat widgets and support tools</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">5. Managing Your Cookie Preferences</h2>
              
              <h3 className="text-xl font-medium mb-2 text-white">5.1 Browser Settings</h3>
              <p>
                Most web browsers allow you to control cookies through their settings preferences. 
                You can typically:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>View what cookies are stored on your device</li>
                <li>Delete cookies</li>
                <li>Block cookies from specific sites</li>
                <li>Block third-party cookies</li>
                <li>Block all cookies</li>
              </ul>

              <h3 className="text-xl font-medium mb-2 text-white">5.2 Our Cookie Consent Tool</h3>
              <p>
                When you first visit our website, you'll see a cookie consent banner that allows you to:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Accept all cookies</li>
                <li>Reject non-essential cookies</li>
                <li>Customize your cookie preferences</li>
                <li>Learn more about each cookie category</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">6. Popular Browser Instructions</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-800 rounded-lg">
                  <h4 className="font-medium text-white mb-2">Chrome</h4>
                  <p className="text-sm">Settings → Privacy and Security → Cookies and other site data</p>
                </div>
                <div className="p-4 bg-slate-800 rounded-lg">
                  <h4 className="font-medium text-white mb-2">Firefox</h4>
                  <p className="text-sm">Options → Privacy & Security → Cookies and Site Data</p>
                </div>
                <div className="p-4 bg-slate-800 rounded-lg">
                  <h4 className="font-medium text-white mb-2">Safari</h4>
                  <p className="text-sm">Preferences → Privacy → Manage Website Data</p>
                </div>
                <div className="p-4 bg-slate-800 rounded-lg">
                  <h4 className="font-medium text-white mb-2">Edge</h4>
                  <p className="text-sm">Settings → Cookies and site permissions</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">7. Impact of Disabling Cookies</h2>
              <p>
                Please note that disabling cookies may affect your experience on our website:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Some features may not work properly</li>
                <li>You may need to re-enter information</li>
                <li>Personalized content may not be available</li>
                <li>Website performance may be reduced</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">8. Updates to This Policy</h2>
              <p>
                We may update this Cookie Policy from time to time to reflect changes in our practices 
                or for other operational, legal, or regulatory reasons. We will notify you of any 
                material changes by updating the "Last updated" date at the top of this policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">9. Contact Us</h2>
              <p>
                If you have any questions about our use of cookies, please contact us:
              </p>
              <div className="mt-4 p-4 bg-slate-800 rounded-lg">
                <p>Email: info@algonixtechnologies.com</p>
                <p>Subject: Cookie Policy Inquiry</p>
                {/* <p>Address: [Your Business Address]</p> */}
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">10. Related Policies</h2>
              <p>
                This Cookie Policy should be read in conjunction with our:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li><Link href="/privacy-policy" className="text-purple-400 hover:text-purple-300">Privacy Policy</Link></li>
                <li><Link href="/terms-of-service" className="text-purple-400 hover:text-purple-300">Terms of Service</Link></li>
              </ul>
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
