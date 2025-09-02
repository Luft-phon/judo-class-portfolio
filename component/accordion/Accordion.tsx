import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionClass() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger style={{ fontFamily: 'var(--sub-heading)', fontWeight: '900', fontSize:'1.5em' }}>Lịch tập</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p style={{ fontFamily: 'var(--content)' }}>
            Lớp tụi mình hoạt động mỗi tối thứ 3-5-7 từ 18h30-20h30 hàng tuần và sẽ được tập luyện cùng với mọi người.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger style={{ fontFamily: 'var(--sub-heading)', fontWeight: '900', fontSize:'1.5em' }}>Học Phí</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p style={{ fontFamily: 'var(--content)' }}>
            Học phí bên mình là 500k/tháng bạn nhé sẽ bao gồm: <br />
            ☑️ Huấn luyện cơ bản cho người mới bắt đầu. <br />
            ☑️ Tập luyện và giảng dạy trực tiếp bởi HLV chuyên nghiệp có bằng cấp HLV quốc gia.<br />
            ☑️ Có trợ giảng hỗ trợ nhiệt tình trong suốt buổi tập.<br />
            ☑️ Có cơ hội tham gia các giải đấu và giao lưu với các đối thủ từ các quận, thành phố do ban ngành tổ chức.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger style={{ fontFamily: 'var(--sub-heading)', fontWeight: '900', fontSize:'1.5em' }}>Võ Phục</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p style={{ fontFamily: 'var(--content)' }}>
            Võ phục sẽ bao gồm 2 loại là vải thường và vải gai cao cấp: <br />
            💰 Giá dao động từ 300-400k đối với vải thường dành cho người mới nhập môn.<br />
            💰 Giá dao động từ 800-1tr6 đối với vải gai cao cấp dành cho người tập nâng cao.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
