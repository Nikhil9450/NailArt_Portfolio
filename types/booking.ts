export interface Booking {
  _id: string;

  serviceId: string;   // NEW
  service: string;

  price: number;
  duration: string;

  name: string;
  phone: string;
  instagram?: string;
  notes?: string;

  date: string;
  time: string;

  status:
    | "Pending"
    | "Confirmed"
    | "Completed"
    | "Cancelled";

  createdAt: string;
  updatedAt: string;
}