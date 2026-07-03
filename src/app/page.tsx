"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

type SideKey = "operator" | "writer" | "dancer" | "speaker" | "philanthropist";

const SIDES: {
  key: SideKey;
  label: string;
  pre: string;
  linkText?: string;
  url?: string;
  post?: string;
}[] = [
  {
    key: "operator",
    label: "Operator",
    pre: "I help early-stage startups turn scrappy momentum into systems that scale. I focus on product, customer success, and GTM strategies.",
  },
  {
    key: "writer",
    label: "Writer",
    pre: "I write medium-form essays about ambition, doubt, careers, and money.",
  },
  {
    key: "dancer",
    label: "Dancer",
    pre: "Dance is my creative outlet. You can find me at various salsa socials across New York City.",
  },
  {
    key: "speaker",
    label: "Speaker",
    pre: "I speak at workshops and on podcasts, and moderate interviews on entrepreneurship and financial health.",
  },
  {
    key: "philanthropist",
    label: "Philanthropist",
    pre: "I sit on the board of the ",
    linkText: "La Unidad Latina Foundation",
    url: "https://lulfoundation.org/about-us",
    post: ", expanding scholarships and college access for first-generation students.",
  },
];

const ROLES = [
  {
    role: "Equities sales trading",
    note: "Traded Latin American single name stocks for global asset managers and hedge funds.",
    stops: [{ co: "Goldman Sachs", years: "2022–2024" }],
  },
  {
    role: "Product",
    note: "0-to-1 at a Techstars-backed startup, then product at enterprise scale.",
    stops: [
      { co: "RentCheck", years: "2024–2025" },
      { co: "American Express", years: "2025–2026" },
    ],
  },
  {
    role: "Scaling startups",
    note: "Helping founders build the systems and teams that outlast the sprint.",
    stops: [{ co: "Dutchess Management", years: "Today" }],
  },
];

const ESSAYS = [
  {
    no: "01",
    title: "Redesigning How We Talk About Money",
    meta: "SUBSTACK",
    url: "https://wealthonthe7.substack.com/p/redesigning-how-we-talk-about-money",
  },
  {
    no: "02",
    title: "On Using Money for Childlike Superpowers",
    meta: "SUBSTACK",
    url: "https://wealthonthe7.substack.com/p/on-using-money-for-childlike-superpowers",
  },
  {
    no: "03",
    title: "Learnings from Warm Days After the Cold",
    meta: "SUBSTACK",
    url: "https://wealthonthe7.substack.com/p/learnings-from-warm-days-after-the",
  },
  {
    no: "04",
    title: "$30 and a Gold Smiley Face Charm",
    meta: "SUBSTACK",
    url: "https://wealthonthe7.substack.com/p/30-and-a-gold-smiley-face-charm",
  },
];

type AppKey = "styling" | "fireside" | "colormyworld";

const APPS: {
  key: AppKey;
  idx: string;
  name: string;
  emoji: string;
  tag: string;
  blurb: string;
  long: string;
  img: string;
  imgWidth: number;
  imgHeight: number;
  url: string;
  cta: string;
}[] = [
  {
    key: "styling",
    idx: "01",
    name: "Virtual Stylist",
    emoji: "VS",
    tag: "FASHION · AI",
    blurb: "A virtual stylist — build outfits from what you already own.",
    long: "A virtual styling app: photograph your wardrobe once, and it suggests outfits by occasion, weather, and mood, learning your taste over time. The goal was to make getting dressed feel like play instead of a daily decision tax.",
    img: "/assets/virtual-stylist.png",
    imgWidth: 1583,
    imgHeight: 1422,
    url: "https://virtual-styling-assistant-391764515898.us-west1.run.app/",
    cta: "TRY IT ↗",
  },
  {
    key: "fireside",
    idx: "02",
    name: "Fireside Chat Buddy",
    emoji: "FCB",
    tag: "AI · INTERVIEW PREP",
    blurb:
      "A calm, structured way to rehearse for fireside chats, panels, and high-stakes Q&A.",
    long: "Master the art of live conversation. This tool helps you research your guest, structure a compelling narrative, and practice in a realistic simulation.",
    img: "/assets/fireside-coach.png",
    imgWidth: 801,
    imgHeight: 1256,
    url: "mailto:joss.navas09@gmail.com",
    cta: "REQUEST ACCESS ↗",
  },
  {
    key: "colormyworld",
    idx: "03",
    name: "ColorMyWorld",
    emoji: "CMW",
    tag: "AI · KIDS",
    blurb:
      "An AI-powered children's coloring book generator that creates custom, printable coloring pages.",
    long: "An AI-powered children's coloring book generator that creates custom, printable coloring pages.",
    img: "/assets/colormyworld.png",
    imgWidth: 562,
    imgHeight: 506,
    url: "mailto:joss.navas09@gmail.com",
    cta: "REQUEST ACCESS ↗",
  },
];

export default function Home() {
  const [side, setSide] = useState<SideKey>("operator");
  const [openApp, setOpenApp] = useState<AppKey | null>(null);

  const sideCur = SIDES.find((s) => s.key === side) ?? SIDES[0];
  const app = APPS.find((a) => a.key === openApp) ?? null;
  const closeModal = () => setOpenApp(null);

  return (
    <div id="top">
      {/* NAV */}
      <div className={styles.nav}>
        <div className={styles.navInner}>
          <a className={styles.navLogo} href="#top">
            JOSSELYN NAVAS ©2026
          </a>
          <div className={styles.navLinks}>
            <a className={styles.navLink} href="#story">
              STORY
            </a>
            <a className={styles.navLink} href="#work">
              WORK
            </a>
            <a className={styles.navLink} href="#portfolio">
              PORTFOLIO
            </a>
            <a className={`${styles.navLink} ${styles.navLinkActive}`} href="#connect">
              CONNECT
            </a>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        {/* HERO */}
        <div className={styles.hero}>
          <h1 className={styles.heroTitle}>
            Josselyn
            <br />
            <span className={styles.heroOutline}>Navas</span>
          </h1>
        </div>

        {/* SIDES TOGGLE */}
        <div className={styles.sides}>
          <div className={styles.sidesLabel}>
            <span className={styles.sidesLabelDot}>✦</span>&nbsp;&nbsp;I AM A / AN —
          </div>
          <div className={styles.sidesRow}>
            {SIDES.map((s) => (
              <button
                key={s.key}
                type="button"
                className={`${styles.sideBtn} ${s.key === side ? styles.sideBtnActive : ""}`}
                onClick={() => setSide(s.key)}
              >
                {s.label}
              </button>
            ))}
          </div>
          <p className={styles.sideLine}>
            {sideCur.pre}
            {sideCur.linkText && (
              <a
                className={styles.sideLineLink}
                href={sideCur.url}
                target="_blank"
                rel="noopener"
              >
                {sideCur.linkText}
              </a>
            )}
            {sideCur.post ?? ""}
          </p>
        </div>

        {/* 01 MY STORY */}
        <div id="story" className={styles.story}>
          <div className={styles.storyImgWrap}>
            <Image
              className={styles.storyImg}
              src="/assets/portrait-v5.jpg"
              alt="Josselyn Navas"
              fill
              sizes="380px"
              priority
            />
          </div>
          <div>
            <div className={styles.sectionLabel}>01 — MY STORY</div>
            <div className={styles.storyText}>
              <p>
                I&apos;m a New York-based builder and creative working at the
                intersection of finance and technology. I started on Wall
                Street at 22, trading Latin American equities for the
                world&apos;s largest money managers.
              </p>
              <p>
                Since then, I&apos;ve shipped products and led customer
                success across scrappy startups and larger enterprises.
              </p>
              <p>
                Today, I help founders scale. I build the systems that hold a
                company together, make the hires that change its trajectory,
                and work through the hard problems of building a business
                guided by the vision of a better tomorrow. I graduated from
                the University of Chicago, magna cum laude, with a degree in
                Economics.
              </p>
              <p className={styles.storyFinal}>
                I also{" "}
                <span className={styles.storyHighlight}>
                  write, dance, speak,
                </span>{" "}
                and <span className={styles.storyHighlight}>give back.</span>
              </p>
            </div>
          </div>
        </div>

        {/* 02 WHERE I'VE BEEN */}
        <div id="work" className={styles.work}>
          <div className={styles.workLabel}>02 — WHERE I&apos;VE BEEN</div>
          <div className={styles.roleList}>
            {ROLES.map((r) => (
              <div key={r.role} className={styles.roleRow}>
                <div>
                  <div className={styles.roleTitle}>{r.role}</div>
                  <p className={styles.roleNote}>{r.note}</p>
                </div>
                <div className={styles.roleStops}>
                  {r.stops.map((st) => (
                    <div key={st.co} className={styles.roleStop}>
                      <span className={styles.roleCo}>{st.co}</span>
                      <span className={styles.roleYears}>{st.years}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 03 PORTFOLIO */}
        <div id="portfolio" className={styles.portfolioHeader}>
          <div className={styles.portfolioLabel}>03 — PORTFOLIO</div>
        </div>

        {/* 03a TINKERING */}
        <div id="tinkering" className={styles.tinkering}>
          <div className={styles.tinkeringHead}>
            <div className={styles.tinkeringLabel}>
              PORTFOLIO&nbsp;&nbsp;/&nbsp;&nbsp;
              <span className={styles.tinkeringAccent}>TINKERING</span>
            </div>
            <div className={styles.tinkeringSub}>
              little things I&apos;ve built for fun · tap any to open
            </div>
          </div>
          <div className={styles.appsGrid}>
            {APPS.map((a) => (
              <button
                key={a.key}
                type="button"
                className={styles.appCard}
                onClick={() => setOpenApp(a.key)}
              >
                <div className={styles.appEmoji}>{a.emoji}</div>
                <div className={styles.appTopRow}>
                  <span className={styles.appTag}>{a.tag}</span>
                  <span className={styles.appIdx}>{a.idx}</span>
                </div>
                <div className={styles.appBody}>
                  <div className={styles.appName}>{a.name}</div>
                  <p className={styles.appBlurb}>{a.blurb}</p>
                  <span className={styles.appOpen}>OPEN →</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* 04 WRITING */}
        <div id="writing" className={styles.writing}>
          <div className={styles.writingHead}>
            <div className={styles.writingLabel}>
              PORTFOLIO&nbsp;&nbsp;/&nbsp;&nbsp;
              <span className={styles.tinkeringAccent}>WRITING</span>
            </div>
            <a
              className={styles.allEssays}
              href="https://wealthonthe7.substack.com"
              target="_blank"
              rel="noopener"
            >
              ALL ESSAYS →
            </a>
          </div>
          <div className={styles.essayList}>
            {ESSAYS.map((e) => (
              <a
                key={e.no}
                className={styles.essayRow}
                href={e.url}
                target="_blank"
                rel="noopener"
              >
                <span className={styles.essayNo}>{e.no}</span>
                <span className={styles.essayTitle}>{e.title}</span>
                <span className={styles.essayMetaWrap}>
                  <span className={styles.essayMeta}>{e.meta}</span>
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* 05 SPEAKING */}
        <div id="speaker" className={styles.speaking}>
          <div className={styles.speakingHead}>
            <div className={styles.speakingLabel}>
              PORTFOLIO&nbsp;&nbsp;/&nbsp;&nbsp;
              <span className={styles.tinkeringAccent}>SPEAKING</span>
            </div>
            <div className={styles.speakingSub}>
              workshops · podcasts · fireside chats
            </div>
          </div>
          <div className={styles.speakingGrid}>
            <div>
              <h2 className={styles.speakingHeading}>
                I speak on stages, in studios, and in both my languages.
              </h2>
              <p className={styles.speakingBody}>
                I engage audiences on entrepreneurship and financial health,
                through the lens of research and lived experience. I run
                workshops for high school and college students, join
                podcasts, and moderate interviews. I speak in English and
                Spanish.
              </p>
              <a
                className={styles.speakingCta}
                href="https://open.spotify.com/episode/7tEnjMWZsiOwUJ3wTFtYGt?si=697102c7bc574837&nd=1&dlsi=f2c2e38df2c94f5f"
                target="_blank"
                rel="noopener"
              >
                ▶ WATCH A TALK ↗
              </a>
            </div>
            <div className={styles.speakingImgWrap}>
              <Image
                className={styles.speakingImg}
                src="/assets/speaker.jpg"
                alt="Josselyn Navas speaking at the Women Scholars Symposium"
                fill
                sizes="470px"
              />
              <span className={styles.speakingCaption}>
                WOMEN SCHOLARS SYMPOSIUM · 2026
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* CONNECT */}
      <div id="connect" className={styles.connect}>
        <div className={styles.connectInner}>
          <div>
            <div className={styles.connectLabel}>04 — SAY HELLO</div>
            <h2 className={styles.connectTitle}>
              Let&apos;s
              <br />
              connect.
            </h2>
          </div>
          <div className={styles.connectLinks}>
            <a
              className={styles.connectLink}
              href="https://www.linkedin.com/in/josselyn-navas/"
              target="_blank"
              rel="noopener"
            >
              LINKEDIN ↗
            </a>
            <a
              className={styles.connectLink}
              href="https://wealthonthe7.substack.com/"
              target="_blank"
              rel="noopener"
            >
              SUBSTACK ↗
            </a>
            <a
              className={styles.connectLink}
              href="mailto:joss.navas09@gmail.com"
            >
              EMAIL ↗
            </a>
          </div>
        </div>
      </div>

      {/* APP MODAL */}
      {app && (
        <div className={styles.modalOverlay}>
          <button
            type="button"
            aria-label="Close"
            className={styles.modalBackdrop}
            onClick={closeModal}
          />
          <div className={styles.modalBox}>
            <div className={styles.modalImgWrap}>
              <Image
                className={styles.modalImg}
                src={app.img}
                alt={app.name}
                width={app.imgWidth}
                height={app.imgHeight}
              />
            </div>
            <div className={styles.modalPad}>
              <div className={styles.modalHead}>
                <div>
                  <div className={styles.modalTag}>{app.tag}</div>
                  <h3 className={styles.modalName}>{app.name}</h3>
                </div>
                <button
                  type="button"
                  className={styles.modalClose}
                  onClick={closeModal}
                >
                  ✕
                </button>
              </div>
              <p className={styles.modalDesc}>{app.long}</p>
              <a
                className={styles.modalCta}
                href={app.url}
                target={/^https?:/.test(app.url) ? "_blank" : undefined}
                rel="noopener"
                onClick={closeModal}
              >
                {app.cta}
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
