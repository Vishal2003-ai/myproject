import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-background/70 backdrop-blur-sm mt-10">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-primary">MyWebsite</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Empowering learners with quality education online.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/courses">Courses</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">Follow Us</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#">Facebook</Link></li>
              <li><Link href="#">Instagram</Link></li>
              <li><Link href="#">LinkedIn</Link></li>
            </ul>
          </div>
        </div>
        <Separator className="my-6" />
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} MyWebsite. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
