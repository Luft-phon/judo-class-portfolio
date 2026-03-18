import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useTranslations } from "next-intl";

export function AccordionFaqs() {
  const t = useTranslations("Homepage.faqs");
  return (
    <Accordion
      type="single"
      collapsible
      className="w-200"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger style={{ fontWeight: '600', fontSize: '1.3em' }}>{t("question1.title")}</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p style={{ fontFamily: 'var(--content)', color: 'var(--light-smoke)' }}>
            {t("question1.content")}
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger style={{ fontWeight: '600', fontSize: '1.3em' }}>{t("question2.title")}</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p style={{ fontFamily: 'var(--content)', color: 'var(--light-smoke)' }}>
            {t("question2.content")}
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger style={{ fontWeight: '600', fontSize: '1.3em' }}>{t("question3.title")}</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p style={{ fontFamily: 'var(--content)', color: 'var(--light-smoke)' }}>
            {t("question3.content")}
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger style={{ fontWeight: '600', fontSize: '1.3em' }}>{t("question4.title")}</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p style={{ fontFamily: 'var(--content)', color: 'var(--light-smoke)' }}>
            {t("question4.content")}
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
