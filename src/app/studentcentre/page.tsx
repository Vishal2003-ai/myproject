import StudentCentreSection from "@/components/student-centre-section";

export const metadata = {
  title: "Student Centre | SRD Education Center",
  description: "Access your student dashboard, courses, and reports at SRD Education Center.",
};

export default function StudentCentrePage() {
  return (
    <main className="min-h-screen">
      <StudentCentreSection />
    </main>
  );
}
