"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function StudentCentreSection() {
  return (
    <section className="w-full bg-gradient-to-b from-background via-background/90 to-muted py-20 md:py-28">
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
            SRD Education Student Centre
          </h1>
          <p className="text-muted-foreground text-base md:text-lg mb-6">
            A central hub for our students — to learn, grow, and achieve excellence.  
            Access your academic resources, view results, explore new courses, and stay connected with the SRD Education community.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <Link href="/login">
              <Button size="lg">Student Login</Button>
            </Link>
            <Link href="/register">
              <Button size="lg" variant="outline">
                Register Now
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center"
        >
          <Image
            src="/student-centre.png" // Add image in /public
            alt="Student Centre"
            width={450}
            height={450}
            className="rounded-2xl shadow-lg object-cover"
          />
        </motion.div>
      </div>

      {/* Highlights Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="container mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6"
      >
        <div className="p-6 bg-card rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-primary">Online Classes</h3>
          <p className="text-sm text-muted-foreground mt-2">
            Attend interactive online classes for CCC, O Level, DCA, ADCA, and more.
          </p>
        </div>
        <div className="p-6 bg-card rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-primary">Progress Reports</h3>
          <p className="text-sm text-muted-foreground mt-2">
            Access your marks, attendance, and performance insights anytime.
          </p>
        </div>
        <div className="p-6 bg-card rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-primary">Career Guidance</h3>
          <p className="text-sm text-muted-foreground mt-2">
            Get expert counseling and support for your IT career journey.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
