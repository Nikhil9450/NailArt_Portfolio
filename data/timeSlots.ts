export interface TimeSlot {
  id: number;
  time: string;
  available: boolean;
}

export const timeSlots: TimeSlot[] = [
  {
    id: 1,
    time: "10:00 AM",
    available: true,
  },
  {
    id: 2,
    time: "11:00 AM",
    available: false,
  },
  {
    id: 3,
    time: "12:00 PM",
    available: true,
  },
  {
    id: 4,
    time: "01:00 PM",
    available: true,
  },
  {
    id: 5,
    time: "02:00 PM",
    available: false,
  },
  {
    id: 6,
    time: "03:00 PM",
    available: true,
  },
];