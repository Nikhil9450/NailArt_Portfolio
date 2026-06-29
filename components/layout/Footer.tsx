import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t py-8">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-gray-500">
            © 2026 Nail Studio. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">WhatsApp</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}