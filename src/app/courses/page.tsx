import CoursesSection from "@/components/courses-section";

export const metadata = {
  title: "Courses | SRD Education Center",
  description: "Explore all computer and programming courses offered by SRD Education Center.",
};

export default function CoursesPage() {
  return (
    <main className="min-h-screen">
      <CoursesSection />
    </main>
  );
}
