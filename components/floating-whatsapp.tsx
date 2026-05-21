import { MessageCircle } from "lucide-react";
import { defaultWhatsappMessage, whatsappLink } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink(defaultWhatsappMessage)}
      target="_blank"
      rel="noreferrer"
      className="focus-ring fixed bottom-5 right-5 z-40 inline-flex size-14 items-center justify-center rounded-full bg-[var(--whatsapp)] text-black shadow-2xl shadow-green-900/25 transition hover:scale-105 hover:bg-[#30e273]"
      aria-label="Contact Genuine Builders on WhatsApp"
    >
      <MessageCircle size={25} aria-hidden />
    </a>
  );
}
