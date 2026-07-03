"use client";

import { useEffect, useState } from "react";
import AddGalleryDialog from "./gallery/AddGalleryDialog";
import Container from "@/components/layout/Container";
import GalleryTable from "./gallery/GalleryTable";
import EditGalleryDialog from "./gallery/EditGalleryDialog";
import { getGallery } from "@/lib/api/gallery";
import { Gallery } from "@/types/gallery";
import DeleteGalleryDialog from "./gallery/DeleteGalleryDialog";

export default function GalleryManager() {
  const [images, setImages] = useState<Gallery[]>([]);
  const [selectedImage, setSelectedImage] =
    useState<Gallery | null>(null);
  const [deleteOpen, setDeleteOpen] =
    useState(false);
  const [addOpen, setAddOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);

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

  const handleEdit = (image: Gallery) => {
    setSelectedImage(image);
    setEditOpen(true);
  };

const handleDelete = (image: Gallery) => {
  setSelectedImage(image);
  setDeleteOpen(true);
};

  return (
    <main className="min-h-screen bg-gray-100 py-10">
      <Container>
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-4xl font-bold">
              Gallery Management
            </h1>

            <p className="mt-2 text-gray-500">
              Manage gallery images.
            </p>
          </div>

          <button
            onClick={() => setAddOpen(true)}
            className="rounded-xl bg-pink-600 px-5 py-3 text-white transition hover:bg-pink-700"
          >
            + Add Image
          </button>
        </div>

        <GalleryTable
          images={images}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

        {/* Add Gallery Dialog */}
        <AddGalleryDialog
          open={addOpen}
          onClose={() => setAddOpen(false)}
          onSuccess={loadGallery}
        />

        {/* Edit Gallery Dialog */}
        {editOpen && selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
              <h2 className="mb-4 text-2xl font-bold">
                Edit Gallery Image
              </h2>

              <p className="text-gray-500">
                Editing: {selectedImage.title}
              </p>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setEditOpen(false)}
                  className="rounded-lg bg-gray-200 px-4 py-2 hover:bg-gray-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
        <EditGalleryDialog
          open={editOpen}
          onClose={() => setEditOpen(false)}
          onSuccess={loadGallery}
          image={selectedImage}
        />
        <DeleteGalleryDialog
          open={deleteOpen}
          image={selectedImage}
          onClose={() => setDeleteOpen(false)}
          onSuccess={loadGallery}
        />
      </Container>
    </main>
  );
}