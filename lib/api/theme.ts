import { Theme } from "@/types/theme";

export async function getTheme(): Promise<Theme> {
  const response = await fetch("/api/theme", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch theme");
  }

  return response.json();
}

export async function updateTheme(theme: Theme) {
  const response = await fetch("/api/theme", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(theme),
  });

  if (!response.ok) {
    throw new Error("Failed to update theme");
  }

  return response.json();
}