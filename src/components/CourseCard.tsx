// components/CourseCard.tsx
"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CourseCardProps {
  title: string;
  description: string;
  slug: string;
}

export function CourseCard({ title, description, slug }: CourseCardProps) {
  return (
    <Card className="hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-3">{description}</p>
        <Link className="cursor-pointer" href={`/courses/${slug}`}>
          <Button variant="outline" className="w-full">
            View Details
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
