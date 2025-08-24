"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Globe, Upload, ArrowLeft, Send, CheckCircle, ChevronDown, Globe2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState("EN")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  })

  useEffect(() => {
    // Load Google Translate script
    const script = document.createElement("script")
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    script.async = true
    document.head.appendChild(script)

    // Initialize Google Translate
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,es,fr,de,it,pt,zh,ja,ar,hi,ru",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        "google_translate_element",
      )
    }

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
    { code: "it", name: "Italiano", flag: "🇮🇹" },
    { code: "pt", name: "Português", flag: "🇵🇹" },
    { code: "zh", name: "中文", flag: "🇨🇳" },
    { code: "ja", name: "日本語", flag: "🇯🇵" },
    { code: "ar", name: "العربية", flag: "🇸🇦" },
    { code: "hi", name: "हिन्दी", flag: "🇮🇳" },
    { code: "ru", name: "Русский", flag: "🇷🇺" },
  ]

  const handleLanguageChange = (langCode, langName) => {
    setCurrentLanguage(langName.split(" ")[0].toUpperCase())
    setShowLanguageDropdown(false)

    // Trigger Google Translate
    const selectElement = document.querySelector(".goog-te-combo")
    if (selectElement) {
      selectElement.value = langCode
      selectElement.dispatchEvent(new Event("change"))
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || "Not specified"}
Subject: ${formData.subject}

Message:
${formData.message}

---
This message was sent via the DeTrust Labs contact form.
    `.trim()

    const mailtoUrl = `mailto:info@detrust-labs.com?subject=${encodeURIComponent(formData.subject || "Contact Form Submission")}&body=${encodeURIComponent(emailBody)}`

    window.location.href = mailtoUrl

    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center">
        {/* Hidden Google Translate Element */}
        <div id="google_translate_element" style={{ display: "none" }}></div>

        <Card className="max-w-md mx-4 border-green-200">
          <CardContent className="p-8 text-center">
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <h2 className="font-serif font-bold text-2xl text-slate-700 mb-4">Email Client Opened!</h2>
            <p className="font-sans text-slate-600 mb-6">
              Your email client should have opened with a pre-filled message. Please send the email to complete your
              inquiry.
            </p>
            <div className="space-y-3">
              <Link href="/">
                <Button className="w-full bg-green-700 hover:bg-green-800 text-white">Back to Home</Button>
              </Link>
              <Button
                variant="outline"
                onClick={() => setIsSubmitted(false)}
                className="w-full border-green-700 text-green-700 hover:bg-green-700 hover:text-white"
              >
                Send Another Message
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      {/* Hidden Google Translate Element */}
      <div id="google_translate_element" style={{ display: "none" }}></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-green-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/decentralised-trust.png"
                alt="DeTrust Labs Logo"
                width={32}
                height={32}
                className="brightness-0 saturate-100 hue-rotate-90 contrast-200"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(25%) sepia(100%) saturate(2000%) hue-rotate(90deg) brightness(0.8) contrast(1.2)",
                }}
              />
              <span className="font-serif font-bold text-xl text-green-700">DeTrust Labs</span>
            </Link>

            <div className="flex items-center space-x-3">
              {/* Language Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                  className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-green-700 hover:text-green-800 transition-colors"
                >
                  <Globe2 className="h-4 w-4" />
                  <span>{currentLanguage}</span>
                  <ChevronDown className="h-4 w-4" />
                </button>

                {showLanguageDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-green-100 py-2 z-50">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code, lang.name)}
                        className="w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-green-50 flex items-center space-x-3"
                      >
                        <span>{lang.flag}</span>
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/">
                <Button
                  variant="outline"
                  className="border-green-700 text-green-700 hover:bg-green-700 hover:text-white bg-transparent"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Contact Form Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-serif font-bold text-4xl sm:text-5xl text-slate-700 mb-6">Get in Touch</h1>
            <p className="font-sans text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Ready to discuss your Web3 project or join our team? We'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-slate-700">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="font-sans font-medium text-slate-700">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="mt-1 border-green-200 focus:border-green-500 focus:ring-green-500"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="font-sans font-medium text-slate-700">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="mt-1 border-green-200 focus:border-green-500 focus:ring-green-500"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="company" className="font-sans font-medium text-slate-700">
                          Company/Organization
                        </Label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="mt-1 border-green-200 focus:border-green-500 focus:ring-green-500"
                          placeholder="Your company name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="subject" className="font-sans font-medium text-slate-700">
                          Subject *
                        </Label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="mt-1 border-green-200 focus:border-green-500 focus:ring-green-500"
                          placeholder="What's this about?"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message" className="font-sans font-medium text-slate-700">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="mt-1 border-green-200 focus:border-green-500 focus:ring-green-500"
                        placeholder="Tell us about your project, questions, or how we can help..."
                      />
                    </div>

                    <div>
                      <Label className="font-sans font-medium text-slate-700">
                        Attachments (CV, Portfolio, Documents)
                      </Label>
                      <div className="mt-1 px-6 pt-5 pb-6 border-2 border-green-200 border-dashed rounded-lg bg-green-50">
                        <div className="space-y-1 text-center">
                          <Upload className="mx-auto h-12 w-12 text-green-400" />
                          <div className="text-sm text-slate-600">
                            <p className="font-medium text-green-600">Attach files to your email</p>
                            <p className="mt-1">
                              After clicking "Send Message", you can attach files directly in your email client
                            </p>
                          </div>
                          <p className="text-xs text-slate-500">PDF, DOC, TXT, PNG, JPG recommended</p>
                        </div>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-green-700 hover:bg-green-800 text-white font-sans font-semibold"
                    >
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information Sidebar */}
            <div className="space-y-6">
              <Card className="border-green-200 bg-green-50">
                <CardContent className="p-6">
                  <h3 className="font-serif font-bold text-xl text-slate-700 mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Mail className="h-5 w-5 text-green-700 mt-1" />
                      <div>
                        <p className="font-sans font-medium text-slate-700">Email</p>
                        <p className="font-sans text-slate-600">info@detrust-labs.com</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-green-700 mt-1" />
                      <div>
                        <p className="font-sans font-medium text-slate-700">London Office</p>
                        <p className="font-sans text-slate-600">
                          71-75 Shelton Street
                          <br />
                          Covent Garden, London
                          <br />
                          WC2H 9JQ
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Globe className="h-5 w-5 text-green-700 mt-1" />
                      <div>
                        <p className="font-sans font-medium text-slate-700">Website</p>
                        <p className="font-sans text-slate-600">www.detrust-labs.com</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-200">
                <CardContent className="p-6">
                  <h3 className="font-serif font-bold text-xl text-slate-700 mb-4">Response Time</h3>
                  <p className="font-sans text-slate-600 mb-4">
                    We typically respond to all inquiries within 24 hours during business days.
                  </p>
                  <p className="font-sans text-sm text-slate-500">
                    For urgent matters, please mention "URGENT" in your subject line.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-800 text-slate-400">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Image
                src="/decentralised-trust.png"
                alt="DeTrust Labs Logo"
                width={24}
                height={24}
                style={{
                  filter: "brightness(0) saturate(100%) invert(1)",
                }}
              />
              <span className="font-serif font-bold text-lg text-white">DeTrust Labs Limited</span>
            </div>
            <p className="font-sans text-sm">© 2025 DeTrust Labs Limited. Building decentralised trust for everyone.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
