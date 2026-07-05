import { toast } from "sonner";

const MAX_IMAGE_SIZE = 3 * 1024 * 1024; // 3 MB

export function validateImage(file: File | null) {
  if (!file) {
    toast.error("Please select an image.");
    return false;
  }

  if (!file.type.startsWith("image/")) {
    toast.error("Only JPG, PNG, WEBP images are allowed.");
    return false;
  }

  const allowedTypes = [
    "image/jpeg",
    "image/png",
    "image/webp",
  ];

  if (!allowedTypes.includes(file.type)) {
    toast.error("Only JPG, PNG and WEBP images are allowed.");
    return false;
  }

  if (file.size > MAX_IMAGE_SIZE) {
    toast.error("Image must be smaller than 3 MB.");
    return false;
  }

  return true;
}