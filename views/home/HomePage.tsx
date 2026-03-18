import Image from "next/image";
import Group from "../../public/Cover/activity.jpg";
import Landing from "../../public/Cover/logo.jpg";
import Fee from "../../public/Cover/fee.jpg";
import "../home/homePage.css"
import { AccordionClass } from "@/component/accordion/Accordion";
import TrainningCard from "@/component/cards/Trainning";
import { Fade } from "react-awesome-reveal";

import { FaMessage } from "react-icons/fa6";
import { FaRocket, FaStar, FaUserFriends } from "react-icons/fa";
import { AccordionFaqs } from "@/component/accordion/Faqs";
import { useTranslations } from "next-intl";
export default function HomePage() {
  const photo = [
    { value: "activities/10.jpg" },
    { value: "Cover/homeCover.jpg" },
    { value: "tour/9.jpg" }
  ]
  const t = useTranslations("Homepage");

  return (
    <>
      <main>
        <section id="landing">
          <div className="title">
            <h1 className="uppercase">Judo Quân Khu 7</h1>
            <h3 className="uppercase">{t("hero.title")}</h3>
          </div>
          <Fade>
            <Image
              src={Landing}
              alt="Group"
              priority
              className="img-cover object-cover"
            />


            <div className="content">
              <p>{t("hero.concept")}</p>
            </div>
          </Fade>
        </section>

        <section id="info">
          <div className="class-content">
            <div className="class-content-left">
              <h3 className="uppercase">{t("hero.class_title")}</h3>
              <Fade direction='left' duration={1000}>
                <p>{t("hero.class_content")}</p>
              </Fade>
            </div>
            <div className="class-content-right">
              <Fade direction='right' duration={1000}>
                <AccordionClass />
              </Fade>

            </div>
          </div>
          <div className="class-imgs">
            {/* <Fade direction='up' duration={1000}> */}
            <div className="class-imgs-1">
              <div className="img-cover">
                <Image
                  src={Group}
                  alt="Group"
                  priority
                />
              </div>
              <TrainningCard />
            </div>

            <div className="class-imgs-2">
              {photo.map((item, idx) => (
                <div className="img-cover" key={idx}>
                  <Image

                    src={`/${item.value}`}
                    alt="Group"
                    priority
                    className="w-full h-auto"
                    width={1200}                   // BẮT BUỘC khi dùng chuỗi
                    height={800}
                    sizes="(max-width:768px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
            {/* </Fade> */}
          </div>
        </section>

        <section id="getting-start">
          {/* làm về get start today giống web bên karate */}
          <div className="getting-started-title">
            <h1 className="uppercase">{t("Method.title")}</h1>
            <p className="text-[var(--light-smoke)]">{t("Method.content")}</p>
          </div>
          {/* <section className="mx-auto max-w-6xl px-4 py-16"> */}
          <Fade duration={500}>
            <ul className="space-y-24">
              {/* Bước 1 - card bên phải */}
              <li className="grid items-center gap-6 grid-cols-1 md:grid-cols-[1fr_2px_1fr] cursor-pointer">
                {/* left (trống ở md) */}
                <div className="md:min-h-[160px]" />
                {/* center line + dot */}
                <div className="relative hidden md:block h-full w-[2px] bg-blue-300/70">
                  <span className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-5 w-5 rounded-full bg-gradient-to-br from-blue-500 to-emerald-600 shadow-lg" />
                </div>
                {/* right card */}
                <article className="rounded-2xl bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-transform duration-300">
                  <h3 className="mb-2 text-xl font-semibold flex"><span className="text-[var(--blue)] flex items-center gap-2"><FaMessage /> {t("Method.step1.title")}</span></h3>
                  <p className="text-neutral-600">{t("Method.step1.content")}</p>
                </article>
              </li>

              {/* Bước 2 - card bên trái */}
              <li className="grid items-center gap-6 grid-cols-1 md:grid-cols-[1fr_2px_1fr] cursor-pointer ">
                {/* card (cột 1) */}
                <article className="rounded-2xl bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] md:col-start-1 hover:-translate-y-2 transition-transform duration-300">
                  <h3 className="mb-2 text-xl font-semibold flex"><span className="text-[var(--blue)] flex items-center gap-2"><FaUserFriends /> {t("Method.step2.title")}</span></h3>
                  <p className="text-neutral-600">{t("Method.step2.content")}</p>
                </article>

                {/* line (cột 2) */}
                <div className="relative hidden md:block h-full w-[2px] bg-blue-300/70 md:col-start-2">
                  <span className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-5 w-5 rounded-full bg-gradient-to-br from-blue-500 to-emerald-600 shadow-lg" />
                </div>

                {/* trống (cột 3) */}
                <div className="md:min-h-[160px] md:col-start-3" />
              </li>

              <li className="grid items-center gap-6 grid-cols-1 md:grid-cols-[1fr_2px_1fr] cursor-pointer">
                {/* left (trống ở md) */}
                <div className="md:min-h-[160px]" />
                {/* center line + dot */}
                <div className="relative hidden md:block h-full w-[2px] bg-blue-300/70">
                  <span className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-5 w-5 rounded-full bg-gradient-to-br from-blue-500 to-emerald-600 shadow-lg" />
                </div>
                {/* right card */}
                <article className="rounded-2xl bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-transform duration-300">
                  <h3 className="mb-2 text-xl font-semibold flex"><span className="text-[var(--blue)] flex items-center gap-2"><FaRocket /> {t("Method.step3.title")}</span></h3>
                  <p className="text-neutral-600">{t("Method.step3.content")}</p>
                </article>
              </li>

              <li className="grid items-center gap-6 grid-cols-1 md:grid-cols-[1fr_2px_1fr] cursor-pointer">
                {/* card (cột 1) */}
                <article className="rounded-2xl bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] md:col-start-1 hover:-translate-y-2 transition-transform duration-300">
                  <h3 className="mb-2 text-xl font-semibold flex"><span className="text-[var(--blue)] flex items-center gap-2"><FaStar /> {t("Method.step4.title")}</span></h3>
                  <p className="text-neutral-600">{t("Method.step4.content")}</p>
                </article>

                {/* line (cột 2) */}
                <div className="relative hidden md:block h-full w-[2px] bg-blue-300/70 md:col-start-2">
                  <span className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-5 w-5 rounded-full bg-gradient-to-br from-blue-500 to-emerald-600 shadow-lg" />
                </div>

                {/* trống (cột 3) */}
                <div className="md:min-h-[160px] md:col-start-3" />
              </li>
              {/* ...các bước tiếp theo: lặp lại, đổi vị trí như 1/2 ở trên */}
            </ul>
          </Fade>


          {/* Mobile: thêm đường kẻ dọc đơn giản bên trái nếu muốn */}
          <style jsx>{`
    @media (max-width: 767px) {
      li { position: relative; }
      li::before {
        content: "";
        position: absolute;
        left: 0.5rem; top: 0; bottom: 0;
        width: 2px; background: var(--blue)
      }
      li > div > span { display: none; } /* ẩn dot lớn ở mobile */
    }
  `}</style>
          <br />
          {/*  */}
        </section>

        <section>
          {/* khách hàng đánh giá */}
        </section>
        <section id="faqs">
          {/* câu hỏi thường gặp  */}
          <div className="getting-started-title">
            <p className="text-[var(--dark-smoke)]">FAQ</p>
            <h1 className="uppercase flex">{t("faqs.title")}</h1>
            <p className="text-[var(--light-smoke)]">{t("faqs.content")}</p>
          </div>
          <div className="flex justify-center">
            <AccordionFaqs />
          </div>

          <Image
            src={Fee}
            alt="Group"
            priority
            className="border-1 border-black rounded-lg"
          />
        </section>
      </main>
    </>
  );
}
