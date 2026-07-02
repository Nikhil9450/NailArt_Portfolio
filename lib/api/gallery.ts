import { Gallery } from "@/types/gallery";

export async function getGallery(): Promise<Gallery[]> {
  const response = await fetch("/api/gallery");

  if (!response.ok) {
    throw new Error("Failed to fetch gallery");
  }

  return response.json();
}

export async function createGallery(data: unknown) {
  const response = await fetch("/api/gallery", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to create image");
  }

  return response.json();
}