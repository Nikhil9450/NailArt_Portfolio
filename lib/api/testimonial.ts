import { Testimonial } from "@/types/testimonial";

export async function getTestimonials(): Promise<Testimonial[]> {
  const response = await fetch("/api/testimonials");

  if (!response.ok) {
    throw new Error("Failed to fetch testimonials");
  }

  return response.json();
}

export async function createTestimonial(
  testimonial: Testimonial
): Promise<Testimonial> {
  const response = await fetch("/api/testimonials", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(testimonial),
  });

  if (!response.ok) {
    throw new Error("Failed to create testimonial");
  }

  return response.json();
}

export async function updateTestimonial(
  id: string,
  testimonial: Testimonial
): Promise<Testimonial> {
  const response = await fetch(`/api/testimonials/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(testimonial),
  });

  if (!response.ok) {
    throw new Error("Failed to update testimonial");
  }

  return response.json();
}

export async function deleteTestimonial(
  id: string
): Promise<void> {
  const response = await fetch(`/api/testimonials/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete testimonial");
  }
}