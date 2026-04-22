import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  PhoneCall,
  Send,
} from "lucide-react";

type Lang = "en" | "hi";

const WA_NUMBER = "917394854399";
const EMAILS =
  "chhotelalpublicjuniorschoolpad@gmail.com,anandrawat6391@gmail.com";

export function Contact() {
  const [lang, setLang] = useState<Lang>("en");

  const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Namaskar! I would like to inquire about Chhotelal Public Junior High School.")}`;
  const mailLink = `mailto:${EMAILS}?subject=${encodeURIComponent("Inquiry – Chhotelal Public Junior High School")}`;
  const callLink = "tel:+917394854399";

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">
            {lang === "en" ? "Get In Touch" : "संपर्क करें"}
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground leading-tight mb-4">
            {lang === "en"
              ? "Inquire / Contact Us"
              : "पूछताछ / हमसे संपर्क करें"}
          </h3>
          <p className="text-lg text-muted-foreground mb-6">
            {lang === "en"
              ? "Have questions about admissions, fees, or want to visit? Reach us instantly."
              : "प्रवेश, शुल्क या विद्यालय भ्रमण के बारे में कोई प्रश्न है? हमसे तुरंत संपर्क करें।"}
          </p>

          {/* Language toggle */}
          <div className="inline-flex items-center rounded-full border border-border bg-background p-1 gap-1">
            <button
              onClick={() => setLang("en")}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                lang === "en"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLang("hi")}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                lang === "hi"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              हिंदी
            </button>
          </div>
        </motion.div>

        {/* Quick Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-3 gap-4 mb-6"
        >
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="link-whatsapp-inquire"
            className="flex flex-col items-center gap-2 p-5 rounded-2xl bg-green-500 hover:bg-green-600 text-white font-semibold text-sm transition-all shadow-sm hover:shadow-md"
          >
            <MessageCircle className="w-7 h-7" />
            {lang === "en" ? "WhatsApp" : "WhatsApp करें"}
          </a>

          <a
            href={callLink}
            data-testid="link-call-inquire"
            className="flex flex-col items-center gap-2 p-5 rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm transition-all shadow-sm hover:shadow-md"
          >
            <PhoneCall className="w-7 h-7" />
            {lang === "en" ? "Call Us" : "कॉल करें"}
          </a>

          <a
            href={mailLink}
            data-testid="link-email-inquire"
            className="flex flex-col items-center gap-2 p-5 rounded-2xl bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold text-sm transition-all shadow-sm hover:shadow-md"
          >
            <Send className="w-7 h-7" />
            {lang === "en" ? "Email Us" : "ईमेल करें"}
          </a>
        </motion.div>

        {/* Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-card rounded-3xl border border-border/50 shadow-sm divide-y divide-border/50"
        >
          {/* Visit Us */}
          <div className="flex gap-5 p-7">
            <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="font-bold text-foreground text-lg mb-2">
                {lang === "en" ? "Visit Us" : "हमसे मिलें"}
              </h4>
              <div className="text-muted-foreground leading-relaxed text-sm space-y-0.5">
                {lang === "en" ? (
                  <>
                    <p>Village: Padari (Buchwapur)</p>
                    <p>Post: Kusaura Bazar, Kalwari</p>
                    <p>District: Basti &nbsp;|&nbsp; Block: Bahadurpur</p>
                    <p>Pin Code: 272301, Uttar Pradesh, India</p>
                  </>
                ) : (
                  <>
                    <p>ग्राम: पडरी (बुचवापुर)</p>
                    <p>पोस्ट: कुसौरा बाजार, कलवारी</p>
                    <p>जिला: बस्ती &nbsp;|&nbsp; ब्लॉक: बहादुरपुर</p>
                    <p>पिन कोड: 272301, उत्तर प्रदेश, भारत</p>
                  </>
                )}
                <a
                  href="https://maps.app.goo.gl/v5j7kM8nstpFT7NaA"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="link-google-maps"
                  className="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary font-semibold text-sm transition-colors"
                >
                  <MapPin className="w-4 h-4 shrink-0" />
                  {lang === "en"
                    ? "Open in Google Maps"
                    : "Google Maps पर खोलें"}
                </a>
              </div>
            </div>
          </div>

          {/* School Hours */}
          <div className="flex gap-5 p-7">
            <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="font-bold text-foreground text-lg mb-2">
                {lang === "en" ? "School Hours" : "विद्यालय समय"}
              </h4>
              <div className="text-muted-foreground text-sm space-y-1">
                <p>
                  {lang === "en"
                    ? "Monday – Saturday: 7:00 AM – 2:00 PM"
                    : "सोमवार – शनिवार: प्रातः 7:00 – दोपहर 2:00"}
                </p>
                <p>{lang === "en" ? "Sunday: Closed" : "रविवार: अवकाश"}</p>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="flex gap-5 p-7">
            <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="font-bold text-foreground text-lg mb-2">
                {lang === "en" ? "Email" : "ईमेल"}
              </h4>
              <a
                href={mailLink}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/10 hover:bg-secondary/20 text-secondary-foreground font-semibold text-sm transition-colors"
              >
                <Mail className="w-4 h-4" />
                {lang === "en" ? "Send us an Email" : "हमें ईमेल भेजें"}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
