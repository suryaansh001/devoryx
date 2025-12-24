import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { ContactForm } from "@/components/contact-form"
import Aurora from "@/components/Aurora"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Contact Us - Erebor",
  description: "Get in touch with Erebor. Let's discuss your project and how we can help you succeed.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <main className="min-h-screen relative overflow-hidden">
        <div className="fixed inset-0 w-full h-full">
          <Aurora colorStops={["#475569", "#64748b", "#475569"]} amplitude={1.2} blend={0.6} speed={0.8} />
        </div>
        <div className="relative z-10">
          <GlassmorphismNav />
          <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
                  Get In Touch
                </h1>
                <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto text-pretty">
                  Ready to start your project? Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
          <Footer />
        </div>
      </main>
    </div>
  )
}
