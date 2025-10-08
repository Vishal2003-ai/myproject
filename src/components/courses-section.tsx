"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Code, Monitor } from "lucide-react";
import Link from "next/link";

export default function CoursesSection() {
  const computerCourses = [
    { title: "CCC", slug: "ccc", desc: "Course on Computer Concepts – Government certified basic computer course.", icon: BookOpen },
    { title: "O Level", slug: "o-level", desc: "NIELIT certified foundational IT course for professional skills.", icon: BookOpen },
    { title: "DCA", slug: "dca", desc: "Diploma in Computer Applications – ideal for office & data management skills.", icon: BookOpen },
    { title: "ADCA", slug: "adca", desc: "Advanced Diploma in Computer Applications – professional-level computer education.", icon: BookOpen },
    { title: "MDCA", slug: "mdca", desc: "Master Diploma in Computer Applications – complete IT training course.", icon: BookOpen },
    { title: "PGDCA", slug: "pgdca", desc: "Post Graduate Diploma in Computer Applications – advanced IT qualification.", icon: BookOpen },
    { title: "Basic Computer", slug: "basic-computer", desc: "Fundamentals of computer, MS Office, Internet, and Typing.", icon: BookOpen },
    { title: "Advance Excel", slug: "advance-excel", desc: "Master Excel functions, formulas, and data analysis tools.", icon: BookOpen },
  ];

  const devCourses = [
    { title: "Web Development", slug: "web-development", desc: "Frontend + Backend web development for modern websites.", icon: Code },
    { title: "Python Programming", slug: "python-programming", desc: "Learn Python from basics to advanced for automation and AI.", icon: Code },
    { title: "Full Stack Development", slug: "full-stack-development", desc: "Complete MERN stack (MongoDB, Express, React, Node.js).", icon: Monitor },
    { title: "HTML", slug: "html", desc: "Structure web pages using HTML5.", icon: Code },
    { title: "CSS", slug: "css", desc: "Style and design web layouts using CSS3.", icon: Code },
    { title: "JavaScript", slug: "javascript", desc: "Add interactivity and logic to websites.", icon: Code },
    { title: "Tailwind CSS", slug: "tailwind-css", desc: "Rapid modern UI design using Tailwind CSS.", icon: Code },
    { title: "Bootstrap", slug: "bootstrap", desc: "Responsive website layouts with Bootstrap 5.", icon: Code },
    { title: "Node.js", slug: "nodejs", desc: "Backend JavaScript for building APIs and servers.", icon: Code },
    { title: "MongoDB", slug: "mongodb", desc: "Learn NoSQL database for modern web apps.", icon: Code },
  ];

  return (
    <section className="w-full py-20 bg-gradient-to-b from-background via-background/90 to-muted">
      <div className="container mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-center text-primary mb-12"
        >
          Our Courses
        </motion.h1>

        {/* --- Computer Courses --- */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-primary mb-6 text-center">Computer Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {computerCourses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="hover:shadow-lg transition-all h-full flex flex-col justify-between">
                  <CardHeader>
                    <course.icon className="w-10 h-10 text-primary mb-2" />
                    <CardTitle>{course.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{course.desc}</p>
                    <Link href={`/courses/${course.slug}`}>
                      <Button variant="outline" className="w-full">View Details</Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* --- Programming & Development --- */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-primary mb-6 text-center">
            Programming & Development
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {devCourses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="hover:shadow-lg transition-all h-full flex flex-col justify-between">
                  <CardHeader>
                    <course.icon className="w-10 h-10 text-primary mb-2" />
                    <CardTitle>{course.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{course.desc}</p>
                    <Link href={`/courses/${course.slug}`}>
                      <Button variant="outline" className="w-full">View Details</Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
