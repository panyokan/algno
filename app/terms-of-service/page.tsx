"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function TermsOfService() {
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
            Terms of Service
          </h1>
          
          <div className="prose prose-slate max-w-none text-slate-300">
            {/* <p className="text-lg mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p> */}

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">1. Agreement to Terms</h2>
              <p>
                By accessing and using Algonix Technologies' website and services, you accept and agree to be bound by 
                the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">2. Services Description</h2>
              <p>Algonix Technologies provides:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Custom software development services</li>
                <li>Mobile application development</li>
                <li>Web development and design</li>
                <li>AI and machine learning solutions</li>
                <li>Database design and management</li>
                <li>Analytics and reporting solutions</li>
                <li>Technical consulting and support</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">3. Client Responsibilities</h2>
              <p>As a client, you agree to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Provide accurate and complete information</li>
                <li>Respond to requests for information in a timely manner</li>
                <li>Make payments according to agreed terms</li>
                <li>Respect intellectual property rights</li>
                <li>Use our services lawfully and ethically</li>
                <li>Maintain confidentiality of sensitive project information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">4. Payment Terms</h2>
              <ul className="list-disc pl-6 mb-4">
                <li>Payment terms will be specified in individual project contracts</li>
                <li>Late payments may incur additional fees</li>
                <li>Refunds are subject to the terms of specific project agreements</li>
                <li>All prices are exclusive of applicable taxes unless stated otherwise</li>
                <li>Payment disputes must be raised within 30 days of invoice date</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">5. Intellectual Property</h2>
              <h3 className="text-xl font-medium mb-2 text-white">5.1 Client IP</h3>
              <p>
                You retain ownership of your existing intellectual property, data, and content provided to us.
              </p>
              
              <h3 className="text-xl font-medium mb-2 text-white">5.2 Developed Solutions</h3>
              <p>
                Intellectual property rights in custom-developed solutions will be specified in individual project contracts. 
                Generally, upon full payment, clients receive ownership or appropriate licensing rights.
              </p>
              
              <h3 className="text-xl font-medium mb-2 text-white">5.3 Our IP</h3>
              <p>
                We retain ownership of our methodologies, frameworks, and pre-existing intellectual property.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">6. Confidentiality</h2>
              <p>
                We maintain strict confidentiality regarding all client information and project details. 
                We will not disclose confidential information to third parties without explicit consent, 
                except as required by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">7. Limitation of Liability</h2>
              <p>
                Algonix Technologies' liability is limited to the amount paid for the specific service. 
                We are not liable for indirect, incidental, or consequential damages. Our total liability 
                shall not exceed the total amount paid by the client for the services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">8. Warranties and Disclaimers</h2>
              <p>
                We provide services "as is" and make no warranties beyond those specified in individual contracts. 
                We warrant that services will be performed with reasonable care and skill, but do not guarantee 
                specific outcomes or results.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">9. Termination</h2>
              <p>
                Either party may terminate services with appropriate notice as specified in project contracts. 
                Upon termination, all outstanding payments become due, and both parties must return confidential materials.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">10. Force Majeure</h2>
              <p>
                Neither party shall be liable for delays or failures caused by circumstances beyond their reasonable control, 
                including natural disasters, government actions, or other unforeseeable events.
              </p>
            </section>

            {/* <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">11. Governing Law</h2>
              <p>
                These terms are governed by the laws of [Your Jurisdiction]. Any disputes will be resolved through 
                appropriate legal channels in [Your Jurisdiction].
              </p>
            </section> */}

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">11. Contact Information</h2>
              <p>
                For questions about these Terms of Service, contact us at:
              </p>
              <div className="mt-4 p-4 bg-slate-800 rounded-lg">
                <p>Email: info@algonixtechnologies.com</p>
                {/* <p>Address: [Your Business Address]</p> */}
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-white">12. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Material changes will be communicated 
                to active clients with appropriate notice period.
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
