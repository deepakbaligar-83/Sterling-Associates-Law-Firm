import FadeIn from "../components/FadeIn";
import ContactForm from "../components/ContactForm";

export const metadata = { title: "Contact Us | Sterling & Associates" };

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-50 to-white dark:from-[#0b0e14] dark:to-[#0d121a] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-4xl font-bold text-[--navy] dark:text-white">Contact Us</h1>
            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              We're here to help. Schedule a consultation or send us a message.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Split Layout: Contact Info + Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Contact Info */}
            <FadeIn>
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold text-[--navy] dark:text-white mb-4">Get In Touch</h2>
                  <p className="text-gray-700 dark:text-gray-300">
                    Reach out to discuss your legal needs. We offer confidential consultations and are ready to assist you.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[--accent]/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[--accent]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-[--navy] dark:text-white">Phone</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">(555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[--accent]/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[--accent]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-[--navy] dark:text-white">Email</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">contact@sterlinglaw.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[--accent]/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[--accent]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-[--navy] dark:text-white">Address</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        123 Main Street, Suite 500<br />
                        City, ST 10001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[--accent]/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[--accent]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-[--navy] dark:text-white">Working Hours</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Mon-Fri: 9:00 AM - 6:00 PM<br />
                        Sat-Sun: By appointment
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Media Links */}
                <div>
                  <p className="font-semibold text-[--navy] dark:text-white mb-2">Follow Us</p>
                  <div className="flex items-center gap-4">
                    <a href="https://www.linkedin.com/company/sterling-associates" target="_blank" rel="noopener noreferrer" className="text-[--accent] hover:underline text-sm">LinkedIn</a>
                    <a href="https://twitter.com/sterlinglaw" target="_blank" rel="noopener noreferrer" className="text-[--accent] hover:underline text-sm">Twitter/X</a>
                    <a href="https://www.facebook.com/sterlingassociates" target="_blank" rel="noopener noreferrer" className="text-[--accent] hover:underline text-sm">Facebook</a>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Right: Contact Form */}
            <FadeIn delay={200}>
              <div className="rounded-lg border border-black/5 dark:border-white/10 bg-white dark:bg-[#0f1420] p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-[--navy] dark:text-white mb-4">Send Us a Message</h3>
                <ContactForm />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Map Embed */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="aspect-[16/9] w-full overflow-hidden rounded-lg border border-black/5 dark:border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location Map"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[--navy] to-[#0d1b2a] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold">Schedule a Consultation</h2>
            <p className="mt-3 text-lg text-gray-200">
              Let's discuss how we can help you achieve your legal goals.
            </p>
            <a
              href="tel:5551234567"
              className="mt-6 inline-flex items-center rounded-md bg-gradient-to-r from-purple-900 via-purple-700 to-pink-600 cursor-pointer px-8 py-3 text-base font-semibold hover:opacity-90 transition"
            >
              Call Now: (555) 123-4567
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
