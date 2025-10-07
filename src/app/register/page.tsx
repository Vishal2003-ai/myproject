"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const res = await fetch("/api/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    setLoading(false);

    if (res.ok) {
      setMessage("✅ Registration successful!");
      setFormData({ fullName: "", email: "", phone: "", course: "" });
    } else {
      setMessage("❌ " + data.message);
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-muted/30 py-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card shadow-lg rounded-xl p-8 w-full max-w-md"
      >
        <h1 className="text-2xl font-bold text-center text-primary mb-6">
          Student Registration Form
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              required
            />
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
          </div>

          <div>
            <Label htmlFor="course">Course Name</Label>
            <Input
              id="course"
              placeholder="Enter your course (e.g., DCA, O Level)"
              value={formData.course}
              onChange={(e) => setFormData({ ...formData, course: e.target.value })}
              required
            />
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </Button>
        </form>

        {message && (
          <p className="text-center text-sm mt-4 text-muted-foreground">{message}</p>
        )}
      </motion.div>
    </section>
  );
}
