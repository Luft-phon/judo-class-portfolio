import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useTranslations } from "next-intl";

export function AccordionClass() {
  const t = useTranslations("Homepage");
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger style={{ fontWeight: '600', fontSize: '1.3em' }}>{t("schedule.title")}</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p style={{ fontFamily: 'var(--content)', color: 'var(--light-smoke)' }}>
            {t("schedule.content")}
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger style={{ fontWeight: '600', fontSize: '1.3em' }}>{t("fee.title")}</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p className="whitespace-pre-line" style={{ fontFamily: 'var(--content)', color: 'var(--light-smoke)' }}>
            {t("fee.content")}
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger style={{ fontWeight: '600', fontSize: '1.3em' }}>{t("uniform.title")}</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p className="whitespace-pre-line" style={{ fontFamily: 'var(--content)', color: 'var(--light-smoke)' }}>
            {t("uniform.content")}
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
