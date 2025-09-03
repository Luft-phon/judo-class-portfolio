import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionFaqs() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-200"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger style={{fontWeight: '600', fontSize:'1.3em' }}>Tôi có cần kinh nghiệm tập võ để tham gia lớp Judo không ?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p style={{ fontFamily: 'var(--content)', color:'var(--light-smoke)' }}>
            Không cần có kinh nghiệm trước đây. Lớp phong trào Judo Quân Khu 7 chủ yếu tập luyện trên tinh thần vui vẻ hoà đồng với học hỏi lẫn nhau và môn Judo chào đón mọi đối tượng, từ người mới bắt đầu đến người đã có kinh nghiệm trong võ thuật.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger style={{fontWeight: '600', fontSize:'1.3em' }}>Trang phục ngày đầu tiên?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p style={{ fontFamily: 'var(--content)', color:'var(--light-smoke)' }}>
            Trang phục chính thức của Judo gồm áo Judo (hay gi) và quần Judo. Bạn có thể liên hệ trực tiếp fanpage hoặc đến phòng tập để mua võ phục nhé.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger style={{fontWeight: '600', fontSize:'1.3em' }}>Judo có an toàn không ?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p style={{ fontFamily: 'var(--content)', color:'var(--light-smoke)' }}>
            Khi được huấn luyện đúng cách và dưới sự giám sát của giáo viên có kinh nghiệm, Judo là một môn võ an toàn. Các kỹ thuật và phương pháp rèn luyện được thiết kế để giảm thiểu nguy cơ chấn thương và bảo vệ sức khỏe của học viên.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger style={{fontWeight: '600', fontSize:'1.3em' }}>Lịch sinh hoạt như thế nào ?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p style={{ fontFamily: 'var(--content)', color:'var(--light-smoke)' }}>
              Lớp tụi mình hoạt động mỗi tối thứ 3-5-7 từ 18h30-20h30 hàng tuần bạn nhé. Lớp mình sẽ không hoạt động và thứ 2-4-6, thay vào đó là lịch hoạt động của lớp thầy Đình.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
