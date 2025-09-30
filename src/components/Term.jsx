import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles


const TermsConditions = () => {
  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-black text-white mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1
          data-aos="fade-up"
          className="text-3xl font-semibold text-center mb-6"
        >
          Website Terms of Use
        </h1>
        <p
          data-aos="fade-up"
          className="text-center text-gray-200"
        >
          Last updated: 09/09/25
        </p>

        <div className="mt-8 space-y-6">
          <section data-aos="fade-up">
            <h2 className="text-2xl font-medium">1. Use of Our Website</h2>
            <p className="text-white">
              The content on this website is for general information only.
              You must not use this site for unlawful purposes or in any way that may damage our reputation or impair its availability.
            </p>
          </section>

          <section data-aos="fade-up">
            <h2 className="text-2xl font-medium">2. Accuracy of Information</h2>
            <p className="text-white">
              We make reasonable efforts to keep information on this website up to date, but we do not guarantee accuracy, completeness, or reliability.
              Any reliance on website content is at your own risk. For project details, quotes, or professional advice, please contact us directly.
            </p>
          </section>

          <section data-aos="fade-up">
            <h2 className="text-2xl font-medium">3. Intellectual Property</h2>
            <p className="text-white">
              All content on this website (including text, images, graphics, and logos) is owned by or licensed to S.L Smart repairs.
              You may view, download, and print content for personal use only.
              You must not copy, reproduce, or distribute our website content without prior written consent.
            </p>
          </section>

          <section data-aos="fade-up">
            <h2 className="text-2xl font-medium">4. Links to Other Websites</h2>
            <p className="text-white">
              This site may include links to external websites for convenience.
              We are not responsible for the content or practices of third-party websites.
            </p>
          </section>

          <section data-aos="fade-up">
            <h2 className="text-2xl font-medium">5. Liability</h2>
            <p className="text-white">
              We are not liable for any loss or damage arising from use of this website, except where required by law.
              Nothing in these terms excludes or limits liability for death or personal injury caused by negligence.
            </p>
          </section>

          <section data-aos="fade-up">
            <h2 className="text-2xl font-medium">6. Privacy & Data Protection</h2>
            <p className="text-white">
              Our use of your personal data is explained in our Privacy Policy, which forms part of these terms.
            </p>
          </section>

          <section data-aos="fade-up">
            <h2 className="text-2xl font-medium">7. Changes to These Terms</h2>
            <p className="text-white">
              We may update these terms from time to time. Please check this page periodically for the latest version.
            </p>
          </section>

          <section data-aos="fade-up">
            <h2 className="text-2xl font-medium">8. Governing Law</h2>
            <p className="text-white">
              These terms are governed by the laws of England and Wales. Any disputes will be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <section data-aos="fade-up">
            <h2 className="text-2xl font-medium">9. Contact Us</h2>
            <p className="text-white">
              If you have any questions about these Terms of Use, please contact us:
            </p>
            <div className="text-white">
              <p><strong>Alino</strong></p>
             <p>Email: <a href="mailto:alinokam2002@yahoo.fr" className="text-[#D10806] hover:underline">alinokam2002@yahoo.fr</a></p>
              <p>Phone: +44 7737 098045</p>
            <p>Address: 11 Narborough Rd Leicester LE3 0LE</p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default TermsConditions;
