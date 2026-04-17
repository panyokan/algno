"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    company: "",
    subject: "",
    message: "",
    address: "Algonix",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    try {
      const response = await fetch("https://algonod.onrender.com/contact-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus("success");
        setFormData({
          name: "",
          email: "",
          number: "",
          company: "",
          subject: "",
          message: "",
          address: "Algonix",
        });
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus("error");
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 rounded-full backdrop-blur-sm border border-purple-500/20 mb-4">
            <span className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Get In Touch
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Let's Work Together
          </h1>
          <p className="text-slate-300 text-lg">
            Have a project in mind? We'd love to hear about it. Fill out the
            form below and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-purple-600/20 to-cyan-400/20 rounded-xl blur-xl opacity-50"></div>
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Us</h3>

              {formStatus === "success" ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                    <CheckCircle className="h-8 w-8 text-green-500" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-slate-300 mb-6">
                    Thank you for reaching out. Our team will get back to you
                    shortly.
                  </p>
                  <Button
                    onClick={() => setFormStatus("idle")}
                    className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white border-0"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-slate-800/50 border-slate-700 focus-visible:ring-purple-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-slate-800/50 border-slate-700 focus-visible:ring-purple-500"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="number" className="text-sm font-medium">
                        Phone Number
                      </label>
                      <Input
                        id="number"
                        name="number"
                        value={formData.number}
                        onChange={handleChange}
                        className="bg-slate-800/50 border-slate-700 focus-visible:ring-purple-500"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium">
                        Company Name
                      </label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Acme Inc."
                        className="bg-slate-800/50 border-slate-700 focus-visible:ring-purple-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium"
                    >
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-slate-800/50 border-slate-700 focus-visible:ring-purple-500"
                      placeholder="How can we help you?"
                    />
                  </div>

                  {/* <div className="space-y-2">
                    <label htmlFor="project" className="text-sm font-medium">
                      Project Type
                    </label>
                    <select
                      id="project"
                      className="w-full bg-slate-800/50 border border-slate-700 rounded-md h-10 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="">Select a project type</option>
                      <option value="web">Web Development</option>
                      <option value="mobile">Mobile App</option>
                      <option value="software">Custom Software</option>
                      <option value="ai">AI & Machine Learning</option>
                      <option value="other">Other</option>
                    </select>
                  </div> */}

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="min-h-[120px] bg-slate-800/50 border-slate-700 focus-visible:ring-purple-500"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white border-0 h-12"
                  >
                    {formStatus === "submitting" ? (
                      <span className="flex items-center gap-2">
                        <svg
                          className="animate-spin h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center shrink-0">
                    <Mail className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email Us</h4>
                    <p className="text-slate-300 mb-1">
                      For general inquiries:
                    </p>
                    <a
                      href="mailto:sales@algonixtechnologies.com"
                      className="text-cyan-400 hover:underline"
                    >
                      sales@algonixtechnologies.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center shrink-0">
                    <Phone className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Call Us</h4>
                    <p className="text-slate-300 mb-1">
                      Monday to Sunday, 8am-9pm:
                    </p>
                    <a
                      href="tel:+4917668969565"
                      className="text-cyan-400 hover:underline"
                    >
                      🇩🇪 +49 176 68 969 565 
                    </a>
                    <br></br>

                    <a
                      href="tel:+251923901095"
                      className="text-cyan-400 hover:underline"
                    >
                      🇪🇹 +251 923 901 095
                    </a>
                  </div>
                </div>

                {/* <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Visit Us</h4>
                    <p className="text-slate-300">
                      123 Tech Street
                      <br />
                      Innovation Hub
                      <br />
                      San Francisco, CA 94105
                    </p>
                  </div>
                </div> */}
              </div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                {[
                  {
                    question: "What is your typical project timeline?",
                    answer:
                      "Project timelines vary based on complexity, but most projects take 2-20 weeks from kickoff to launch.",
                  },
                  {
                    question: "Do you work with startups?",
                    answer:
                      "We love working with startups and can tailor our approach to fit your budget and timeline.",
                  },
                  {
                    question: "What is your pricing model?",
                    answer:
                      "We offer both project-based and hourly pricing depending on your needs. We'll provide a detailed quote after our initial consultation.",
                  },
                  {
                    question: "Do you provide ongoing support?",
                    answer:
                      "Yes, we offer maintenance and support packages to ensure your solution continues to run smoothly after launch.",
                  },
                ].map((faq, index) => (
                  <div
                    key={index}
                    className="border-b border-slate-800 pb-4 last:border-0 last:pb-0"
                  >
                    <h4 className="font-medium mb-2">{faq.question}</h4>
                    <p className="text-slate-400 text-sm">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
