import { MessageCircle, Phone } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { defaultWhatsappMessage, siteConfig, telLink, whatsappLink } from "@/lib/site";

type WhatsAppCtaProps = {
  title?: string;
  description?: string;
  message?: string;
};

export function WhatsAppCta({
  title = "Need trusted builders or repair experts today?",
  description = "Talk directly with our team for site visits, quotations, maintenance support, and urgent service inquiries.",
  message = defaultWhatsappMessage
}: WhatsAppCtaProps) {
  return (
    <section className="container-px">
      <div className="mx-auto max-w-7xl rounded-[2rem] bg-black px-6 py-10 text-white shadow-2xl shadow-black/20 sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:px-14 lg:py-14">
        <div className="max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--whatsapp)]">Fast inquiry</p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-4 text-base leading-8 text-zinc-300">{description}</p>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:shrink-0">
          <ButtonLink href={whatsappLink(message)} variant="primary" target="_blank" rel="noreferrer" className="gap-2">
            <MessageCircle size={18} aria-hidden />
            WhatsApp Now
          </ButtonLink>
          <ButtonLink href={telLink(siteConfig.phonePrimary)} variant="ghost" className="gap-2">
            <Phone size={18} aria-hidden />
            Call {siteConfig.phonePrimary}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
