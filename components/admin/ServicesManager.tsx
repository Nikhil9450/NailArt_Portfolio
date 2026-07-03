"use client";

import { useEffect, useState } from "react";

import Container from "@/components/layout/Container";
import { Service } from "@/types/service";
import { getServices } from "@/lib/api/service";
import EditServiceDialog from "./services/EditServiceDialog";
import ServicesTable from "./services/ServicesTable";
import AddServiceDialog from "./services/AddServiceDialog";
import DeleteServiceDialog from "./services/DeleteServiceDialog";
export default function ServicesManager() {
    const [services, setServices] = useState<Service[]>([]);
    const [addOpen, setAddOpen] = useState(false);
    const [selectedService, setSelectedService] =
    useState<Service | null>(null);
    const [deleteOpen, setDeleteOpen] = useState(false);

    const [editOpen, setEditOpen] = useState(false);
  useEffect(() => {
    loadServices();
  }, []);

  async function loadServices() {
    try {
      const data = await getServices();
      setServices(data);
    } catch (error) {
      console.error(error);
    }
  }

    const handleEdit = (service: Service) => {
    setSelectedService(service);
    setEditOpen(true);
    };

    const handleDelete = (service: Service) => {
    setSelectedService(service);
    setDeleteOpen(true);
    };
  return (
    <main className="min-h-screen bg-gray-100 py-10">
      <Container>
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold">
              Services Management
            </h1>

            <p className="mt-2 text-gray-500">
              Manage salon services.
            </p>
          </div>

          <button
            onClick={() => setAddOpen(true)}
            className="rounded-xl bg-pink-600 px-5 py-3 text-white transition hover:bg-pink-700"
          >
            + Add Service
          </button>
        </div>

        <ServicesTable
            services={services}
            onEdit={handleEdit}
            onDelete={handleDelete}
        />

        <AddServiceDialog
          open={addOpen}
          onOpenChange={setAddOpen}
          onSuccess={loadServices}
        />
        <EditServiceDialog
        open={editOpen}
            onOpenChange={setEditOpen}
            onSuccess={loadServices}
            service={selectedService}
        />
        <DeleteServiceDialog
            open={deleteOpen}
            onOpenChange={setDeleteOpen}
            service={selectedService}
            onSuccess={loadServices}
        />
      </Container>
    </main>
  );
}