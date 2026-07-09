"use client";

import { useEffect, useState } from "react";

import Container from "@/components/layout/Container";

import { Service } from "@/types/service";
import { getServices } from "@/lib/api/service";

import ServicesTable from "./services/ServicesTable";
import AddServiceDialog from "./services/AddServiceDialog";
import EditServiceDialog from "./services/EditServiceDialog";
import usePagination from "@/hooks/usePagination";
import Pagination from "@/components/common/Pagination";
import DeleteServiceDialog from "./services/DeleteServiceDialog";
export default function ServicesManager() {
  const [services, setServices] = useState<Service[]>([]);
  const [selectedService, setSelectedService] =
    useState<Service | null>(null);

  const [addOpen, setAddOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

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

  const {
    page,
    setPage,
    totalPages,
    currentItems,
  } = usePagination(services, 10);

  const handleEdit = (service: Service) => {
    setSelectedService(service);
    setEditOpen(true);
  };

  const handleDelete = (service: Service) => {
    setSelectedService(service);
    setDeleteOpen(true);
  };

  return (
      <Container className="py-6">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">
              Services Management
            </h1>

            <p className="text-sm md:text-base text-gray-500">
              Manage salon services.
            </p>
          </div>

          <button
            onClick={() => setAddOpen(true)}
             className="self-start rounded-xl  px-5 py-3 bg-theme text-white hover:bg-pink-700 md:self-auto" 
             >
            + Add Service
          </button>
        </div>

        <ServicesTable
          services={currentItems}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

        <Pagination
          page={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />

        <AddServiceDialog
          open={addOpen}
          onOpenChange={setAddOpen}
          onSuccess={loadServices}
        />

        <EditServiceDialog
          open={editOpen}
          onOpenChange={setEditOpen}
          service={selectedService}
          onSuccess={loadServices}
        />

        <DeleteServiceDialog
          open={deleteOpen}
          onOpenChange={setDeleteOpen}
          service={selectedService}
          onSuccess={loadServices}
        />
      </Container>
  );
}