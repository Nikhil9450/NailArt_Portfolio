import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingBooking from "@/components/common/FloatingBooking";
export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <FloatingBooking/>
      <Footer />
    </>
  );
}