import TestimonialCard from "@/components/cards/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export default function TestimonialSlider() {
  return (
    <div className="mt-16 grid gap-8 md:grid-cols-3">
      {testimonials.map((testimonial) => (
        <TestimonialCard
          key={testimonial.id}
          testimonial={testimonial}
        />
      ))}
    </div>
  );
}