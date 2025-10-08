import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

interface CourseInfo {
  title: string;
  description: string;
  duration: string;
  syllabus: string[];
  highlights: string[];
  certification: string;
}

const courseDetails: Record<string, CourseInfo> = {
  "ccc": {
    title: "CCC (Course on Computer Concepts)",
    description:
      "The Course on Computer Concepts (CCC) is a government-recognized program designed to equip students with basic computer literacy. It covers fundamentals of computing, office automation, and digital communication to prepare students for both academic and professional use of technology.",
    duration: "3 Months",
    syllabus: [
      "Introduction to Computers & Operating Systems",
      "MS Word, MS Excel, MS PowerPoint",
      "Internet, Email & Online Forms",
      "Digital Payments & Cyber Security Basics",
    ],
    highlights: [
      "Ideal for government exams and entry-level IT jobs.",
      "Covers all essential office productivity tools.",
      "Government-recognized certificate by NIELIT.",
    ],
    certification: "NIELIT (Government of India)",
  },

  "o-level": {
    title: "O Level (NIELIT)",
    description:
      "‘O’ Level is a foundational IT course offered by NIELIT. It aims to develop computer professionals in software and IT services. The course includes programming, internet technology, and digital project work to enhance practical skills.",
    duration: "1 Year",
    syllabus: [
      "IT Tools and Business Systems",
      "Internet Technology & Web Design",
      "Programming and Problem Solving through Python",
      "Application of .NET Technology",
      "Project Work",
    ],
    highlights: [
      "Nationally recognized NIELIT certification.",
      "Practical hands-on programming and project work.",
      "Qualifies for Government IT job positions.",
    ],
    certification: "NIELIT (Government of India)",
  },

  "dca": {
    title: "DCA (Diploma in Computer Applications)",
    description:
      "DCA is a 6-month diploma course that provides essential knowledge of computer applications. It is ideal for students seeking to build a foundation in IT and office software, making it suitable for office-based roles and data handling jobs.",
    duration: "6 Months",
    syllabus: [
      "Computer Fundamentals & Operating Systems",
      "MS Office (Word, Excel, PowerPoint, Access)",
      "Internet & Email Applications",
      "Introduction to Tally & Basic Programming",
    ],
    highlights: [
      "Perfect for beginners entering the computer field.",
      "Covers both theory and practical computer knowledge.",
      "Enhances employability in administrative jobs.",
    ],
    certification: "SRD Education Center / NIELIT (Optional)",
  },

  "adca": {
    title: "ADCA (Advanced Diploma in Computer Applications)",
    description:
      "ADCA is an advanced-level course that extends DCA topics with programming, design, and database skills. It’s suitable for students aiming for IT jobs or freelancing opportunities in web and software development.",
    duration: "12 Months",
    syllabus: [
      "MS Office Advanced & Internet Tools",
      "Tally ERP with GST",
      "C Programming & Visual Basic",
      "HTML, CSS, and Web Design",
      "Database Management with MySQL",
    ],
    highlights: [
      "Upgrades your DCA knowledge to professional level.",
      "Practical-based projects and assignments.",
      "Prepares you for web design and IT job roles.",
    ],
    certification: "SRD Education Center",
  },

  "mdca": {
    title: "MDCA (Master Diploma in Computer Applications)",
    description:
      "MDCA provides complete training in computer technology — covering software, programming, accounting, and web design. It’s a full IT career-oriented course for students who wish to become proficient computer professionals.",
    duration: "18 Months",
    syllabus: [
      "MS Office & DTP Tools",
      "Tally ERP & GST Accounting",
      "C, C++, Java Programming",
      "Web Design (HTML, CSS, JavaScript)",
      "Python, MySQL, and Project Work",
    ],
    highlights: [
      "Covers software, web, and accounting together.",
      "Ideal for IT jobs and computer teaching fields.",
      "Comprehensive master-level diploma.",
    ],
    certification: "SRD Education Center",
  },

  "pgdca": {
    title: "PGDCA (Post Graduate Diploma in Computer Applications)",
    description:
      "PGDCA is a professional one-year course designed for graduates to build expertise in computer programming, database management, and software development.",
    duration: "12 Months",
    syllabus: [
      "Computer Organization & Operating Systems",
      "Programming with C / Python",
      "Database Management System (DBMS)",
      "Software Engineering & Project Work",
    ],
    highlights: [
      "Postgraduate qualification for advanced IT roles.",
      "Builds strong programming and software design skills.",
      "Recognized by universities and IT companies.",
    ],
    certification: "SRD Education Center / NIELIT",
  },

  "advance-excel": {
    title: "Advance Excel",
    description:
      "Advance Excel course helps you master professional Excel features used in corporate offices for data analysis, reporting, and automation.",
    duration: "2 Months",
    syllabus: [
      "Formulas, Functions, and Conditional Formatting",
      "Pivot Tables, Charts, and Data Validation",
      "Macros, VBA, and Automation Techniques",
    ],
    highlights: [
      "Learn Excel for MIS & Analyst roles.",
      "Includes real-world office case studies.",
      "Perfect for accounting and admin jobs.",
    ],
    certification: "SRD Education Center",
  },

  "web-development": {
    title: "Web Development (Frontend + Backend)",
    description:
      "The Web Development course trains students to build responsive, modern websites using the latest technologies. Covers both frontend (React, Tailwind) and backend (Node.js, MongoDB).",
    duration: "6 Months",
    syllabus: [
      "HTML5, CSS3, and Tailwind CSS",
      "JavaScript & React Framework",
      "Node.js, Express & MongoDB",
      "Hosting and Deployment",
    ],
    highlights: [
      "Project-based learning approach.",
      "Build a complete portfolio website.",
      "Prepare for freelancing or IT jobs.",
    ],
    certification: "SRD Education Center",
  },

  "python-programming": {
    title: "Python Programming",
    description:
      "Python Programming course covers core programming concepts, OOPs, and real-world applications in automation, web development, and data science.",
    duration: "4 Months",
    syllabus: [
      "Python Syntax and Data Structures",
      "Functions and Object-Oriented Programming",
      "File Handling & Exception Handling",
      "Mini Projects and Automation",
    ],
    highlights: [
      "Ideal for beginners in programming.",
      "Useful for AI, ML, and data analysis.",
      "Practical-based mini projects included.",
    ],
    certification: "SRD Education Center",
  },
  "Full-Stack-Development": {
    title: "Web Development (Frontend + Backend)",
    description:
      "The Web Development course trains students to build responsive, modern websites using the latest technologies. Covers both frontend (React, Tailwind) and backend (Node.js, MongoDB).",
    duration: "6 Months",
    syllabus: [
      "HTML5, CSS3, and Tailwind CSS",
      "JavaScript & React Framework",
      "Node.js, Express & MongoDB",
      "Hosting and Deployment",
    ],
    highlights: [
      "Project-based learning approach.",
      "Build a complete portfolio website.",
      "Prepare for freelancing or IT jobs.",
    ],
    certification: "SRD Education Center",
  },
};

export default function CourseDetailPage({ params }: { params: { slug: string } }) {
  const course = courseDetails[params.slug];

  if (!course) return notFound();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-20 px-6">
      <Card className="max-w-4xl w-full shadow-md">
        <CardContent className="p-8">
          <h1 className="text-4xl font-bold text-primary mb-4">{course.title}</h1>
          <p className="text-gray-700 mb-6 leading-relaxed">{course.description}</p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h2 className="text-2xl font-semibold text-primary mb-3">📅 Duration</h2>
              <p className="text-gray-600">{course.duration}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-primary mb-3">🎓 Certification</h2>
              <p className="text-gray-600">{course.certification}</p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-primary mb-3">📘 Syllabus</h2>
          <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-1">
            {course.syllabus.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold text-primary mb-3">🌟 Highlights</h2>
          <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-1">
            {course.highlights.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
            <Link href="/register">
          <Button size="lg" className="w-full cursor-pointer">Enroll Now</Button></Link>
        </CardContent>
      </Card>
    </div>
  );
}
