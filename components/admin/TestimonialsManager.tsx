"use client";

import { useEffect, useState } from "react";
import Container from "@/components/layout/Container";
import { Testimonial } from "@/types/testimonial";
import { getTestimonials } from "@/lib/api/testimonial";
import TestimonialsTable from "./testimonials/TestimonialsTable";
import AddTestimonialDialog from "./testimonials/AddTestimonialDialog";
import { Button } from "../ui/button";
import DeleteTestimonialDialog from "./testimonials/DeleteTestimonialDialog";
import EditTestimonialDialog from "./testimonials/EditTestimonialDialog";
export default function TestimonialsManager() {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [addOpen, setAddOpen] = useState(false);
    const [editOpen, setEditOpen] = useState(false);

    const [deleteOpen, setDeleteOpen] = useState(false);

    const [selectedTestimonial, setSelectedTestimonial] =
    useState<Testimonial | null>(null);
    useEffect(() => {
        loadTestimonials();
    }, []);

  async function loadTestimonials() {
    try {
      const data = await getTestimonials();
      setTestimonials(data);
    } catch (error) {
      console.error(error);
    }
  }

  const handleEdit = (testimonial: Testimonial) => {
  setSelectedTestimonial(testimonial);
  setEditOpen(true);
};

const handleDelete = (testimonial: Testimonial) => {
  setSelectedTestimonial(testimonial);
  setDeleteOpen(true);
};

  return (
    <main className="min-h-screen bg-gray-100 py-10">
      <Container>
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">
              Testimonials Management
            </h1>

            <p className="text-sm md:text-base text-gray-500">
              Manage customer testimonials.
            </p>
          </div>

        <Button onClick={() => setAddOpen(true)}>
        + Add Testimonial
        </Button>
        </div>

        <TestimonialsTable
        testimonials={testimonials}
        onEdit={handleEdit}
        onDelete={handleDelete}
        />

<AddTestimonialDialog
  open={addOpen}
  onOpenChange={setAddOpen}
  onSuccess={loadTestimonials}
/>

<EditTestimonialDialog
  open={editOpen}
  onOpenChange={setEditOpen}
  testimonial={selectedTestimonial}
  onSuccess={loadTestimonials}
/>

<DeleteTestimonialDialog
  open={deleteOpen}
  onOpenChange={setDeleteOpen}
  testimonial={selectedTestimonial}
  onSuccess={loadTestimonials}
/>
      </Container>
    </main>
  );
}