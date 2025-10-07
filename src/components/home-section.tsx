"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HomeSection() {
  return (
    <section className="w-full bg-gradient-to-b from-background via-background/90 to-muted py-20 md:py-32">
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
            Welcome to SRD Education Center
          </h1>
          <p className="text-muted-foreground text-base md:text-lg mb-6">
            Your trusted partner in computer and technical education.  
            We provide government-recognized courses like <strong>CCC, O Level, DCA, ADCA</strong> and more — empowering students for a digital future.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <Link href="/courses">
              <Button size="lg">Explore Courses</Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Contact Us
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center"
        >
          <Image
            src="/img5.jpg" // Replace with your actual image path
            alt="SRD Education Center"
            width={450}
            height={450}
            className="rounded-2xl shadow-lg object-cover"
          />
        </motion.div>
      </div>

      {/* Highlights */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="container mx-auto mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 text-center"
      >
        <div className="p-6 bg-card rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-primary">Experienced Faculty</h3>
          <p className="text-sm text-muted-foreground mt-2">
            Learn from certified and skilled instructors with years of experience.
          </p>
        </div>
        <div className="p-6 bg-card rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-primary">Government Approved</h3>
          <p className="text-sm text-muted-foreground mt-2">
            SRD Education Center offers NIELIT and government-certified programs.
          </p>
        </div>
        <div className="p-6 bg-card rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-primary">Modern Infrastructure</h3>
          <p className="text-sm text-muted-foreground mt-2">
            Smart classrooms and advanced computer labs for effective learning.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
