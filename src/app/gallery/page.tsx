"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function GalleryPage() {
  // You can replace these filenames with your real images from /public/gallery/
  const images = [
    "/gallery/event1.jpg",
    "/gallery/event2.jpg",
    "/gallery/event3.jpg",
    "/gallery/event4.jpg",
    "/gallery/event5.jpg",
    "/gallery/event6.jpg",
    "/gallery/event7.jpg",
    "/gallery/event8.jpg",
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="min-h-screen bg-muted/30 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-3">
          SRD Education Center Gallery
        </h1>
        <p className="text-muted-foreground">
          Explore moments from our institute — cultural events, parties, and student achievements.
        </p>
      </div>

      {/* Image Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
      >
        {images.map((src, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="relative overflow-hidden rounded-xl shadow-md cursor-pointer group"
            onClick={() => setSelectedImage(src)}
          >
            <Image
              src={src}
              alt={`SRD event ${i + 1}`}
              width={400}
              height={300}
              className="object-cover w-full h-52 group-hover:brightness-75 transition-all duration-300"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-sm font-medium transition">
              View Photo
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Image Popup Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative"
          >
            <Image
              src={selectedImage}
              alt="Selected image"
              width={900}
              height={600}
              className="rounded-2xl object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 bg-white/90 rounded-full px-3 py-1 text-sm font-semibold hover:bg-white"
            >
              ✕
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
}
