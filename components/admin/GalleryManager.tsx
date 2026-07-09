"use client";

import { useEffect, useState } from "react";

import Container from "@/components/layout/Container";

import GalleryTable from "./gallery/GalleryTable";
import AddGalleryDialog from "./gallery/AddGalleryDialog";
import EditGalleryDialog from "./gallery/EditGalleryDialog";
import DeleteGalleryDialog from "./gallery/DeleteGalleryDialog";

import { getGallery } from "@/lib/api/gallery";

import { Gallery } from "@/types/gallery";

import usePagination from "@/hooks/usePagination";
import Pagination from "@/components/common/Pagination";

export default function GalleryManager() {
  const [images, setImages] = useState<Gallery[]>([]);
  const [selectedImage, setSelectedImage] =
    useState<Gallery | null>(null);

  const [addOpen, setAddOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] =
    useState(false);

  useEffect(() => {
    loadGallery();
  }, []);

  async function loadGallery() {
    try {
      const data = await getGallery();
      setImages(data);
    } catch (error) {
      console.error(error);
    }
  }

  const {
    page,
    setPage,
    totalPages,
    currentItems,
  } = usePagination(images, 10);

  const handleEdit = (image: Gallery) => {
    setSelectedImage(image);
    setEditOpen(true);
  };

  const handleDelete = (image: Gallery) => {
    setSelectedImage(image);
    setDeleteOpen(true);
  };

  return (
      <Container className="py-6">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">
              Gallery Management
            </h1>

            <p className="text-sm md:text-base text-gray-500">
              Manage gallery images.
            </p>
          </div>

          <button
            onClick={() => setAddOpen(true)}
            className="rounded-xl bg-theme  px-5 py-3 text-white transition hover:bg-pink-700"
          >
            + Add Image
          </button>
        </div>

        <GalleryTable
          images={currentItems}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

        <Pagination
          page={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />

        <AddGalleryDialog
          open={addOpen}
          onClose={() => setAddOpen(false)}
          onSuccess={loadGallery}
        />

        <EditGalleryDialog
          open={editOpen}
          onClose={() => setEditOpen(false)}
          image={selectedImage}
          onSuccess={loadGallery}
        />

        <DeleteGalleryDialog
          open={deleteOpen}
          image={selectedImage}
          onClose={() => setDeleteOpen(false)}
          onSuccess={loadGallery}
        />
      </Container>
  );
}