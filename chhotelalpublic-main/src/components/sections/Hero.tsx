import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const images = [
  "/assets/school_1.jpeg",
  "/assets/school_2.jpeg",
  "/assets/school_3.jpeg",
  "/assets/school_4.jpeg",
  "/assets/school_5.jpeg",
  "/assets/school_6.jpeg",
];

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => {
        setPrev(c);
        return (c + 1) % images.length;
      });
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (i: number) => {
    setPrev(current);
    setCurrent(i);
  };

  const scrollToAcademics = () => {
    document
      .querySelector("#academics")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative h-[100svh] min-h-[600px] overflow-hidden"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {/* Slideshow images */}
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            zIndex: 0,
            opacity: i === current ? 1 : 0,
            transform: i === current ? "scale(1.04)" : "scale(1)",
            transition: "opacity 1.5s ease-in-out, transform 5s ease-in-out",
          }}
        />
      ))}

      {/* Vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 10,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse at center, transparent 25%, rgba(0,0,0,0.5) 65%, rgba(0,0,0,0.88) 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 10,
          pointerEvents: "none",
          background:
            "linear-gradient(to top, rgba(0,0,0,0.80) 0%, transparent 45%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 10,
          pointerEvents: "none",
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, transparent 35%)",
        }}
      />

      {/* Content — pushed below navbar with paddingTop */}
      <div
        className="container relative mx-auto px-4 md:px-6"
        style={{
          zIndex: 20,
          paddingTop: "clamp(80px, 20vw, 120px)", // scales with screen width, always clears navbar
        }}
      >
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-yellow-600/30 text-yellow-400 border border-yellow-400/40 font-medium text-sm mb-4 backdrop-blur-sm">
              Empowering Tomorrow's Leaders
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            style={{
              fontSize: "clamp(1.6rem, 6vw, 4.5rem)", // fluid font: ~26px on 375px, grows smoothly
              fontWeight: 700,
              color: "white",
              lineHeight: 1.15,
              marginBottom: "1.25rem",
            }}
            className="font-display"
          >
            Chhotelal Public School
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="mb-8 max-w-2xl space-y-2"
          >
            <p className="text-sm md:text-lg text-slate-200 leading-relaxed">
              A trusted center of education in the region, having mentored over
              10,000 students. Since 2011, we have been providing Lower and
              Upper Kindergarten, Primary, and Secondary education at an
              affordable cost, ensuring that quality learning remains accessible
              to all. We offer scholarships to hardworking and determined
              students, and provide free education to children who lack parental
              support.
            </p>
            <p className="text-xs md:text-base text-slate-300/80 leading-relaxed">
              क्षेत्र में एक विश्वसनीय शिक्षा केंद्र, जहाँ अब तक हम 10,000+
              छात्रों का मार्गदर्शन कर चुके हैं। हम 2011 से एलकेजी, यूकेजी,
              प्राथमिक एवं माध्यमिक शिक्षा किफायती शुल्क में प्रदान कर रहे हैं,
              ताकि शिक्षा सभी के लिए सुलभ बन सके। हम मेहनती और जुझारू
              विद्यार्थियों को छात्रवृत्ति प्रदान करते हैं, तथा जिन बच्चों को
              पारिवारिक सहारा नहीं है, उन्हें निःशुल्क शिक्षा देते हैं। भले ही
              हमारा इंफ्रास्ट्रक्चर बड़े स्कूलों जैसा न हो, लेकिन शिक्षा की
              गुणवत्ता के प्रति हमारा समर्पण अटूट है।
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-yellow-500 text-black hover:bg-yellow-400 font-semibold px-8 h-12 text-base"
            >
              Begin Your Journey
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToAcademics}
              className="bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-md font-semibold px-8 h-12 text-base group"
            >
              Explore Programs
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Dot indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex gap-2 mt-8"
          >
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                style={{
                  height: "6px",
                  width: i === current ? "32px" : "8px",
                  borderRadius: "9999px",
                  background:
                    i === current ? "#facc15" : "rgba(255,255,255,0.4)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.4s ease",
                  padding: 0,
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ zIndex: 20 }}
      >
        <span className="text-white/60 text-xs font-medium uppercase tracking-widest">
          Scroll
        </span>
        <div className="w-[1px] h-10 bg-white/20 relative overflow-hidden">
          <motion.div
            className="w-full h-1/2 bg-yellow-400 absolute top-0"
            animate={{ y: [0, 40] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
