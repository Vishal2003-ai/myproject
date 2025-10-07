"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-muted/30 py-20 px-5 md:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-[300px] md:h-[400px]"
        >
          <Image
            src="/img2.jpg"
            alt="SRD Education Center"
            fill
            className="rounded-2xl object-cover shadow-lg"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            About SRD Education Center
          </h2>

          <p className="text-muted-foreground mb-6 leading-relaxed">
            SRD Education Center is a leading computer training and skill
            development institute dedicated to empowering students with
            knowledge, confidence, and practical experience in the world of IT.
            <br /><br />
            Established with a vision to make computer education accessible to
            everyone, SRD Education Center offers a variety of government and
            professional courses like <strong>DCA, ADCA, CCC, O Level, and
            Programming in Python, Web Development, and Advanced Excel</strong>.
          </p>

          <p className="text-muted-foreground mb-6 leading-relaxed">
            Our mission is to deliver quality education that aligns with
            industry standards, ensuring that every student who joins us
            becomes job-ready and future-ready. With experienced faculty,
            modern infrastructure, and a supportive learning environment, we
            are shaping the next generation of IT professionals.
          </p>

          <Button variant="default" size="lg" className="rounded-xl shadow">
            Learn More
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
