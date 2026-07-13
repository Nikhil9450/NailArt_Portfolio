import imageCompression from "browser-image-compression";

export async function compressImage(file: File) {
  const options = {
    maxSizeMB: 3,
    maxWidthOrHeight: 2500,
    useWebWorker: true,
    initialQuality: 0.9,
  };

  return await imageCompression(file, options);
}