import { motion } from "framer-motion";
import { AlertCircle, MessageCircle, Mail } from "lucide-react";

const WA_COMPLAINT = `https://wa.me/917394854399?text=${encodeURIComponent("Namaskar! I would like to submit a complaint regarding Chhotelal Public Junior High School.")}`;
const MAIL_COMPLAINT = `mailto:chhotelalpublicjuniorschoolpad@gmail.com,anandrawat6391@gmail.com?subject=${encodeURIComponent("Complaint – Chhotelal Public Junior High School")}`;

export function Complaints() {
  return (
    <section id="complaints" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">
            Your Voice Matters
          </h2>
          <p className="text-xs text-muted-foreground mb-4">आपकी आवाज़ महत्वपूर्ण है</p>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground leading-tight mb-4">
            Lodge a Complaint
          </h3>
          <p className="text-sm text-muted-foreground mb-2">शिकायत दर्ज करें</p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4">
            We value your feedback and take all complaints seriously. Share your concerns with us confidentially.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed mt-2">
            हम आपकी प्रतिक्रिया को महत्व देते हैं और सभी शिकायतों को गंभीरता से लेते हैं। अपनी चिंताओं को हमारे साथ गोपनीयता के साथ साझा करें।
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-muted/30 p-6 rounded-2xl border border-border/50 mb-8"
        >
          <div className="flex gap-3">
            <AlertCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-foreground mb-1">How We Handle Complaints</h4>
              <p className="text-xs text-muted-foreground mb-3">हम शिकायतों को कैसे संभालते हैं</p>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-1.5">
                <ul className="text-muted-foreground space-y-1.5 text-sm">
                  <li>✓ All complaints are reviewed seriously</li>
                  <li>✓ Confidentiality is guaranteed</li>
                  <li>✓ Anonymous submissions are respected</li>
                  <li>✓ Swift action on valid concerns</li>
                </ul>
                <ul className="text-muted-foreground space-y-1.5 text-xs">
                  <li>✓ सभी शिकायतों की गंभीरता से समीक्षा होती है</li>
                  <li>✓ गोपनीयता की गारंटी दी जाती है</li>
                  <li>✓ गुमनाम सबमिशन का सम्मान किया जाता है</li>
                  <li>✓ वैध चिंताओं पर तेज़ कार्रवाई होती है</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid sm:grid-cols-2 gap-4"
        >
          <a
            href={WA_COMPLAINT}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="link-whatsapp-complaint"
            className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-green-500 hover:bg-green-600 text-white font-semibold text-base transition-all shadow-sm hover:shadow-md"
          >
            <MessageCircle className="w-6 h-6 shrink-0" />
            <span>
              WhatsApp पर शिकायत करें
              <span className="block text-xs font-normal opacity-90">WhatsApp your complaint</span>
            </span>
          </a>

          <a
            href={MAIL_COMPLAINT}
            data-testid="link-email-complaint"
            className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base transition-all shadow-sm hover:shadow-md"
          >
            <Mail className="w-6 h-6 shrink-0" />
            <span>
              ईमेल से शिकायत करें
              <span className="block text-xs font-normal opacity-90">Email your complaint</span>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
