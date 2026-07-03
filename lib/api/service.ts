import { Service } from "@/types/service";

export async function getServices(): Promise<Service[]> {
  const response = await fetch("/api/services");

  if (!response.ok) {
    throw new Error("Failed");
  }

  return response.json();
}

export async function createService(data: unknown) {
  const response = await fetch("/api/services", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed");
  }

  return response.json();
}

export async function updateService(
  id: string,
  data: unknown
) {
  const response = await fetch(
    `/api/services/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type":
          "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    throw new Error(
      "Failed to update service"
    );
  }

  return response.json();
}

export async function deleteService(
  id: string
) {
  const response = await fetch(
    `/api/services/${id}`,
    {
      method: "DELETE",
    }
  );

  if (!response.ok) {
    throw new Error(
      "Failed to delete service"
    );
  }

  return response.json();
}