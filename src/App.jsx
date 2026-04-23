import { useState, useEffect, useRef } from "react";

/* ─── DATA ─── */
const heroTaglines = [
  "One Invisible God · One Universe · Single Humankind",
  "Work is Divine — Kayaka Vishwakarma Nidhi",
  "ISHTALINGA is the Symbol of the Universe",
];

const vachanas = [
  { text: "The rich will make temples for Shiva. What shall I, a poor man, do? My legs are pillars, the body the shrine, the head a cupola of gold.", author: "Basavanna" },
  { text: "Work is worship. The fruit of labour is sacred offering. Share freely — this is Dasoha.", author: "Basavanna" },
  { text: "Make of my body the beam of a lute, of my head the sounding gourd, of my nerves the strings.", author: "Akka Mahadevi" },
  { text: "Caste distinctions are a creation of man. In the eyes of the divine, all beings are one and equal.", author: "Allama Prabhu" },
  { text: "The one who has experienced the inner light needs no outer temple. The heart, purified, is the holiest of shrines.", author: "Siddharama" },
];

const philosophyCards = [
  { img: "/bsoaa_melbourne/Iahtalinga_image.png", title: "Ishtalinga", subtitle: "Symbol of the Universe", body: "The personal symbol of the Universe, held close to the heart — a direct, equal connection between every devotee and the divine. No caste. No hierarchy.", accent: "#C94F0A" },
  { img: "/bsoaa_melbourne/social_equality.jpeg", title: "Social Equality", subtitle: "Unity in Diversity", body: "Basavanna's movement broke caste barriers 800 years before modern civil rights. Every person — regardless of birth — was equal in the Anubhava Mantapa.", accent: "#B8860B" },
  { img: "/bsoaa_melbourne/vachana_image.jpg", title: "Vachana Literature", subtitle: "Sacred Lyric Poetry", body: "Lyric prose-poems written by the Sharanas — one of the oldest literary forms in Kannada, speaking of justice, love, and inner divinity in plain, accessible language.", accent: "#8B4513" },
  { img: "/bsoaa_melbourne/anubhava_mantapa.jpg", title: "Anubhava Mantapa", subtitle: "World's First Parliament", body: "The world's first democratic spiritual assembly. Men and women of all backgrounds debated, shared wisdom, and governed together as equals in 12th-century Kalyana.", accent: "#C94F0A" },
  { img: "/bsoaa_melbourne/dasoha_image.jpg", title: "Dasoha", subtitle: "Selfless Service", body: "Selfless giving — of food, wealth, knowledge, and time. Every act of generosity is considered sacred. Dasoha is the living heartbeat of every BSOAA gathering.", accent: "#B8860B" },
  { img: "/bsoaa_melbourne/non_descrimination_image.jpg", title: "Non-Discrimination", subtitle: "One Human Family", body: "BSOAA Melbourne carries this legacy forward — welcoming all backgrounds, professions, and genders into a genuinely equal and inclusive community space.", accent: "#8B4513" },
];

const events = [
  { date: "25 Apr 2026", day: "Saturday", title: "Basava Jayanthi 2026", desc: "Annual celebration — cultural performances, vachana recitals, community feast. In the divine presence of His Holiness Dr. Mahanta Prabhu Swamiji. RSVP required by 19 April.", tag: "🎉 Major Festival", img: "/bsoaa_melbourne/basava_jayanthi_2026.jpeg", fullImg: "/bsoaa_melbourne/basava_jayanthi_2026.jpeg", rsvp: "https://forms.gle/XR4Pmb1tsS5aEJmc8" },
  { date: "Oct 2025", day: "Sunday", title: "Deepawali Festival", desc: "Free community Deepawali gathering with singing, dancing, Dandiya and much more. Food available to purchase. RSVP is a must.", tag: "🪔 Festival", img: "/bsoaa_melbourne/deepavali_event.jpeg", fullImg: "/bsoaa_melbourne/deepavali_event.jpeg", rsvp: null },
  { date: "Monthly", day: "Last Sunday", title: "Mahamane Gathering", desc: "Monthly spiritual gathering — vachana singing, Sharana philosophy discussions, community bonding.", tag: "🙏 Monthly", img: "/bsoaa_melbourne/past_event-4.jpg", fullImg: "/bsoaa_melbourne/past_event-4.jpg", rsvp: null },
  { date: "Ongoing", day: "Year-round", title: "Dasoha — Community Service", desc: "Volunteer-led service activities in Melbourne — food drives, cultural education, and neighbourhood outreach.", tag: "🤝 Service", img: "/bsoaa_melbourne/past_event-5.jpg", fullImg: "/bsoaa_melbourne/past_event-5.jpg", rsvp: null },
];

const galleryImages = [
  { file: "/bsoaa_melbourne/community_activity_image-1.jpg", caption: "Cultural Program — Award Ceremony" },
  { file: "/bsoaa_melbourne/community_activity_image-2.jpg", caption: "Award Recognition Ceremony" },
  { file: "/bsoaa_melbourne/community_activity_image-3.jpg", caption: "Community Picnic" },
  { file: "/bsoaa_melbourne/community_activity_image-4.jpg", caption: "Mahamane Gathering" },
  { file: "/bsoaa_melbourne/community_activity_image-5.jpg", caption: "BSOAA Melbourne Team" },
  { file: "/bsoaa_melbourne/community_activity_image-6.jpg", caption: "Monthly Gathering" },
  { file: "/bsoaa_melbourne/community_activity_image-7.jpg", caption: "Cultural Event" },
  { file: "/bsoaa_melbourne/community_activity_image-8.jpg", caption: "Dasoha — Community Cleanup" },
  { file: "/bsoaa_melbourne/past_evvents.png", caption: "Past Events Highlights" },
];

const recognitionImages = [
  { file: "/bsoaa_melbourne/recognition_image-1.jpg", caption: "Global Recognition Ceremony" },
  { file: "/bsoaa_melbourne/recognition_image-2.jpg", caption: "Community Honours" },
  { file: "/bsoaa_melbourne/recognition_image-3.jpg", caption: "Leadership Commitment" },
  { file: "/bsoaa_melbourne/recognition_image-4.jpg", caption: "PM Modi paying tribute to Basavanna" },
];

const purposes = [
  "To preserve and propagate Basava philosophy by practicing it and promoting this universal message in the wider community for the benefit of our future generation.",
  "To bring Basava followers of the Australasian region and globally together to make a real contribution to the development of our community, region and world.",
  "To maintain and enhance Basava philosophy harmoniously among the members of BSOAA as well as the wider community with the idea of everybody living a content and happy life.",
  "To enhance members' lifestyle to adopt Basava philosophy by harmoniously living with the local environment.",
  "To increase knowledge by regular practice of Basava philosophy and sharing our history and culture among the locals.",
  "To offer help or assist the needy to maintain equality in the community.",
  "To maintain links with other Basava Samithis across the world and keep members informed of developments in Karnataka (India) or any other country.",
  "To publish a newsletter to communicate with the members of the Association.",
  "To establish a library for the benefit of the members.",
  "To enter into any suitable agreement with government or authority to achieve the objectives of the association.",
];

const presidentMessages = [
  {
    name: "Praveen Patil",
    year: "President 2025",
    date: "April 14, 2025",
    img: "/bsoaa_melbourne/Praveen_Patil_president_image.jpg",
    message: "Sharanu, I would like to take this opportunity to thank Basava Samithi of Australasia Melbourne chapter members for electing me as president. It is a great opportunity to serve as Melbourne chapter president and engage in Basava Samithi activities. I am grateful to all members, my family, and friends. Basava Samithi Melbourne chapter was established in 1999 and since then has been serving the community through monthly Sharana Sangama, Mahamane, Australia Day parade, Clean Up Australia Day, Basava Jayanthi and Deepavali celebrations. As president, I will ensure the organisation's objectives and goals are attained, work collaboratively with the Executive Committee, serve community needs honestly, and follow organisation guidelines.",
  },
  {
    name: "Jaya Hunagund",
    year: "President 2021–2022",
    date: "2021",
    img: "/bsoaa_melbourne/Jaya_Hunagund_president_image.jpg",
    message: "Sharanu, I would like to warmly welcome all members and supporters of Basava Samithi of Australasia — Melbourne Chapter. It is an honour and privilege to serve in the role of President. The Samithi has been serving the community for over 20 years in Melbourne. It offers a platform for people from all walks of life to come and share their wisdom, knowledge and experiences. In an effort to preserve and practice Sharana Philosophy, the Samithi organises monthly Sharana Sangama, Maneyalli Mahamane (home-based Sharana gatherings) and special events such as Diwali and Basava Jayanthi celebrations.",
  },
];

const navLinks = [
  { label: "Home", id: "home" },
  { label: "Events", id: "events" },
  { label: "Gallery", id: "gallery" },
  { label: "Recognition", id: "recognition" },
  { label: "Membership", id: "membership" },
  { label: "Contact", id: "contact" },
];

const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&family=Lato:wght@300;400;700&display=swap');
  *{box-sizing:border-box;margin:0;padding:0;}
  html{scroll-behavior:smooth;}
  ::-webkit-scrollbar{width:5px;}
  ::-webkit-scrollbar-thumb{background:#E8671A;border-radius:3px;}
  .nb{background:none;border:none;cursor:pointer;}
  .evCard{transition:transform .3s,box-shadow .3s;}
  .evCard:hover{transform:translateY(-6px);box-shadow:0 20px 52px rgba(93,58,30,.2);}
  .evCard:hover .viewHint{opacity:1!important;}
  .zoom{overflow:hidden;}
  .zoom img{transition:transform .55s;}
  .zoom:hover img{transform:scale(1.07);}
  .btnS{background:linear-gradient(135deg,#E8671A,#C94F0A);color:#fff;border:none;padding:12px 28px;border-radius:4px;font-family:Lato,sans-serif;font-size:.88rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;cursor:pointer;transition:opacity .2s,transform .2s;}
  .btnS:hover{opacity:.88;transform:translateY(-2px);}
  .btnO{background:transparent;border:2px solid #E8671A;color:#E8671A;padding:11px 26px;border-radius:4px;font-family:Lato,sans-serif;font-size:.85rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;cursor:pointer;transition:background .2s,color .2s;}
  .btnO:hover{background:#E8671A;color:#fff;}
  .btnOG{background:transparent;border:2px solid #D4A017;color:#D4A017;padding:11px 26px;border-radius:4px;font-family:Lato,sans-serif;font-size:.85rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;cursor:pointer;transition:all .2s;}
  .btnOG:hover{background:#D4A017;color:#3B1F0A;}
  .iF{width:100%;background:#fff;border:1.5px solid #F5D78E;border-radius:4px;padding:11px 14px;font-family:Lato,sans-serif;font-size:.95rem;color:#2C1A0A;outline:none;transition:border-color .2s;}
  .iF:focus{border-color:#E8671A;}
  .nBtn{background:none;border:none;cursor:pointer;font-family:Lato,sans-serif;font-size:.78rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:4px 0;border-bottom:2px solid transparent;transition:color .2s,border-color .2s;}
  .nBtn:hover,.nBtn.act{color:#E8671A;border-color:#E8671A;}
  @keyframes ken{0%{transform:scale(1);}100%{transform:scale(1.04) translateX(-6px);}}
  @keyframes bob{0%,100%{transform:translateY(0);}50%{transform:translateY(-5px);}}
  @keyframes pu{0%,100%{opacity:.5;}50%{opacity:1;}}
  @keyframes slideInRight{from{opacity:0;transform:translateX(24px);}to{opacity:1;transform:none;}}
  @keyframes slideOutLeft{from{opacity:1;transform:translateX(0);}to{opacity:0;transform:translateX(-24px);}}
  @keyframes fadeUp{from{opacity:0;transform:translateY(16px);}to{opacity:1;transform:none;}}
  @keyframes progressBar{from{width:0%}to{width:100%}}
  .kenImg{animation:ken 35s ease-in-out infinite alternate;}
  .bob{animation:bob 7s ease-in-out infinite;}
  .pu{animation:pu 3s ease-in-out infinite;}
  .tl{transition:opacity .45s ease,transform .45s ease;}
  .tl.show{opacity:1;transform:translateY(0);}
  .tl.hide{opacity:0;transform:translateY(10px);}
  .vIn{animation:slideInRight .55s ease forwards;}
  .vOut{animation:slideOutLeft .45s ease forwards;}
  .pageIn{animation:fadeUp .35s ease forwards;}
  @media(max-width:900px){.philoGrid{grid-template-columns:repeat(2,1fr)!important;}}
  @media(max-width:600px){.philoGrid{grid-template-columns:1fr!important;}}
  @media(max-width:768px){.dNav{display:none!important;}.mBtn{display:flex!important;}.g2{grid-template-columns:1fr!important;}.g3{grid-template-columns:1fr!important;}.g4{grid-template-columns:repeat(2,1fr)!important;}}
  @media(min-width:769px){.mBtn{display:none!important;}}
`;

function scrollToTop() { window.scrollTo({ top: 0, behavior: "smooth" }); }

/* ════════════════════════════════════════════
   SHARED COMPONENTS — defined outside App
════════════════════════════════════════════ */

function SH({ tag, title, sub, light = false }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ display: "inline-flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
        <div style={{ height: 1, width: 32, background: "#D4A017", opacity: .5 }} />
        <div style={{ fontFamily: "Lato,sans-serif", fontSize: ".66rem", fontWeight: 700, color: light ? "#D4A017" : "#8B6914", letterSpacing: ".18em", textTransform: "uppercase" }}>{tag}</div>
        <div style={{ height: 1, width: 32, background: "#D4A017", opacity: .5 }} />
      </div>
      <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(1.8rem,4vw,3rem)", color: light ? "#F5D78E" : "#3B1F0A", lineHeight: 1.2 }}>{title}</h2>
      {sub && <p style={{ fontFamily: "Lato,sans-serif", fontSize: ".95rem", color: light ? "rgba(245,215,142,.8)" : "#4A2810", marginTop: 12, lineHeight: 1.8, maxWidth: 680, margin: "12px auto 0" }}>{sub}</p>}
      <div style={{ width: 52, height: 3, background: "linear-gradient(90deg,#E8671A,#D4A017)", margin: "16px auto 0", borderRadius: 2 }} />
    </div>
  );
}

function PhiloCardAnimated({ card, index }) {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check(); window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setTimeout(() => setVisible(true), index * 120); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [index]);
  const active = isMobile ? true : hovered;
  return (
    <div ref={ref} onMouseEnter={() => !isMobile && setHovered(true)} onMouseLeave={() => !isMobile && setHovered(false)}
      style={{ position: "relative", borderRadius: 14, overflow: "hidden", cursor: "pointer", aspectRatio: isMobile ? "4/3" : "3/4", opacity: visible ? 1 : 0, transform: visible ? (hovered && !isMobile ? "translateY(-12px) scale(1.025)" : "translateY(0) scale(1)") : "translateY(50px) scale(0.96)", boxShadow: hovered && !isMobile ? `0 32px 64px rgba(0,0,0,.55),0 0 0 2px ${card.accent}` : "0 8px 32px rgba(0,0,0,.35)", transition: visible ? `opacity .6s ease,transform ${hovered && !isMobile ? ".45s cubic-bezier(.34,1.56,.64,1)" : ".45s ease"},box-shadow .4s ease` : "opacity .6s ease,transform .6s ease" }}>
      <img src={card.img} alt={card.title} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block", transform: hovered && !isMobile ? "scale(1.13)" : "scale(1)", transition: "transform .75s cubic-bezier(.25,.46,.45,.94)" }} />
      <div style={{ position: "absolute", inset: 0, background: active ? "linear-gradient(to top,rgba(26,8,0,.97) 0%,rgba(26,8,0,.78) 45%,rgba(0,0,0,.2) 100%)" : "linear-gradient(to top,rgba(26,8,0,.94) 0%,rgba(26,8,0,.45) 55%,rgba(0,0,0,.08) 100%)", transition: "background .45s ease" }} />
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: active ? 5 : 3, background: `linear-gradient(90deg,${card.accent},#D4A017,${card.accent})`, transition: "height .3s ease", boxShadow: active ? `0 2px 12px ${card.accent}88` : "none" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "clamp(14px,2.5vw,26px)" }}>
        <div style={{ fontFamily: "Lato,sans-serif", fontSize: ".65rem", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "#D4A017", marginBottom: 8, opacity: active ? 1 : 0, transform: active ? "translateY(0)" : "translateY(10px)", transition: "all .35s ease .05s" }}>{card.subtitle}</div>
        <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(1.1rem,2vw,1.55rem)", fontWeight: 600, color: "#F5D78E", lineHeight: 1.2, marginBottom: active ? 12 : 8, transition: "margin .35s ease" }}>{card.title}</h3>
        <div style={{ width: active ? 44 : 20, height: 2, background: `linear-gradient(90deg,${card.accent},#D4A017)`, marginBottom: active ? 14 : 0, transition: "all .4s ease", borderRadius: 2 }} />
        <div style={{ overflow: "hidden", maxHeight: active ? 200 : 0, opacity: active ? 1 : 0, transition: "max-height .45s cubic-bezier(.25,.46,.45,.94) .05s,opacity .35s ease .05s" }}>
          <p style={{ fontFamily: "Lato,sans-serif", fontSize: "clamp(.76rem,1.1vw,.88rem)", color: "rgba(253,246,227,.85)", lineHeight: 1.75, paddingTop: 2 }}>{card.body}</p>
        </div>
      </div>
      {!isMobile && <div style={{ position: "absolute", top: 14, right: 14, width: 34, height: 34, borderRadius: "50%", background: "rgba(253,246,227,.1)", border: "1px solid rgba(245,215,142,.25)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Cinzel Decorative',serif", fontSize: ".6rem", color: "rgba(245,215,142,.65)", opacity: hovered ? 0 : 1, transition: "opacity .3s ease" }}>{String(index + 1).padStart(2, "0")}</div>}
    </div>
  );
}

function SharedFooter({ goTo }) {
  return (
    <footer style={{ background: "#2C1A0A", padding: "52px clamp(16px,5vw,80px) 28px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 36, marginBottom: 40 }} className="g3">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <img src="/bsoaa_melbourne/basava_logo.jpg" alt="BSOAA" style={{ width: 42, height: 42, objectFit: "contain" }} />
              <div style={{ fontFamily: "'Cinzel Decorative',serif", fontSize: ".7rem", color: "#D4A017", letterSpacing: ".07em" }}>BSOAA Melbourne</div>
            </div>
            <p style={{ fontFamily: "Lato,sans-serif", fontSize: ".8rem", color: "rgba(245,215,142,.5)", lineHeight: 1.8, maxWidth: 290 }}>A non-profit community established in the late 1990s, dedicated to spreading Sharana philosophy across Melbourne and Australasia.</p>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: ".95rem", color: "rgba(245,215,142,.35)", fontStyle: "italic", marginTop: 14 }}>"Work is the Abode of God"</div>
          </div>
          <div>
            <div style={{ fontFamily: "'Cinzel Decorative',serif", fontSize: ".6rem", color: "#D4A017", letterSpacing: ".12em", marginBottom: 14 }}>QUICK LINKS</div>
            {navLinks.map(({ label, id }) => (
              <button key={id} className="nb" onClick={() => goTo(id)} style={{ display: "block", fontFamily: "Lato,sans-serif", fontSize: ".8rem", color: "rgba(245,215,142,.45)", marginBottom: 9, textAlign: "left", padding: 0 }}>{label}</button>
            ))}
          </div>
          <div>
            <div style={{ fontFamily: "'Cinzel Decorative',serif", fontSize: ".6rem", color: "#D4A017", letterSpacing: ".12em", marginBottom: 14 }}>CONTACT</div>
            {["contact.bsoamelbourne@gmail.com", "secretary.bsoamelbourne@gmail.com", "Melbourne, Victoria, Australia"].map(v => (
              <div key={v} style={{ fontFamily: "Lato,sans-serif", fontSize: ".8rem", color: "rgba(245,215,142,.45)", marginBottom: 9, lineHeight: 1.5 }}>{v}</div>
            ))}
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(245,215,142,.08)", paddingTop: 22, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
          <div style={{ fontFamily: "Lato,sans-serif", fontSize: ".72rem", color: "rgba(245,215,142,.25)" }}>© 2025 Basava Samithi of Australasia Inc — Melbourne Chapter · Non-Profit Organisation</div>
          <div style={{ fontFamily: "Lato,sans-serif", fontSize: ".72rem", color: "rgba(245,215,142,.25)" }}>Proudly supported by the Victorian Multicultural Commission</div>
        </div>
      </div>
    </footer>
  );
}

/* ════════════════════════════════════════════
   PAGE COMPONENTS — defined outside App so
   React doesn't recreate them on every render
════════════════════════════════════════════ */

function HomePage({ goTo, taglineIdx, taglineFade, vachanaIdx, vachanaDir, purposeIdx, setPurposeIdx }) {
  return (
    <div>
      {/* HERO */}
      <section id="home" style={{ minHeight: "100vh", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", paddingTop: 100 }}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <img className="kenImg" src="/bsoaa_melbourne/hero_picture.jpg" alt="Hero" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(115deg,rgba(59,31,10,.92) 0%,rgba(93,58,30,.68) 55%,rgba(184,134,11,.38) 100%)" }} />
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 120, background: "linear-gradient(to bottom,transparent,#FDF6E3)" }} />
        </div>
        <div style={{ position: "absolute", right: "-6%", top: "50%", transform: "translateY(-50%)", opacity: .04, pointerEvents: "none" }}>
          <img src="/bsoaa_melbourne/hero_section_background.png" alt="" style={{ width: 520, height: 520, objectFit: "contain" }} />
        </div>
        <div style={{ position: "relative", zIndex: 2, padding: "60px clamp(20px,6vw,100px)", maxWidth: 820 }}>
          <div style={{ display: "inline-block", background: "rgba(212,160,23,.18)", border: "1px solid rgba(212,160,23,.45)", borderRadius: 20, padding: "5px 18px", marginBottom: 22, backdropFilter: "blur(6px)" }}>
            <span style={{ fontFamily: "Lato,sans-serif", fontSize: ".7rem", fontWeight: 700, letterSpacing: ".15em", color: "#F5D78E", textTransform: "uppercase" }}>Basava Samithi of Australasia · Melbourne Chapter · Est. 1990s</span>
          </div>
          <h1 style={{ fontFamily: "'Cinzel Decorative',serif", fontSize: "clamp(2rem,5.5vw,4rem)", color: "#FDF6E3", lineHeight: 1.15, marginBottom: 28, textShadow: "0 4px 28px rgba(0,0,0,.55)" }}>
            Spreading<br /><span style={{ color: "#F5D78E" }}>Basava Philosophy</span><br />Across the Globe
          </h1>
          <div style={{ minHeight: 56, display: "flex", alignItems: "center", marginBottom: 30 }}>
            <div style={{ borderLeft: "3px solid #E8671A", paddingLeft: 18 }}>
              <p className={`tl ${taglineFade ? "show" : "hide"}`} style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(1.05rem,2.4vw,1.45rem)", color: "rgba(245,215,142,.95)", lineHeight: 1.5, fontStyle: "italic", fontWeight: 600 }}>
                {heroTaglines[taglineIdx]}
              </p>
            </div>
          </div>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <button className="btnS" onClick={() => goTo("events")}>Upcoming Events</button>
            <button className="btnOG" onClick={() => goTo("membership")}>Join the Samithi</button>
          </div>
          <div style={{ display: "flex", gap: "clamp(12px,3vw,32px)", marginTop: 40, flexWrap: "wrap" }}>
            {[["EST.", "Late 1990s"], ["CHAPTERS", "6 Cities"], ["CORE VALUE", "Kayaka"]].map(([l, v]) => (
              <div key={l} style={{ background: "rgba(0,0,0,.35)", padding: "12px 20px", borderRadius: 8, backdropFilter: "blur(6px)", border: "1px solid rgba(245,215,142,.2)" }}>
                <div style={{ fontFamily: "'Cinzel Decorative',serif", fontSize: "1.1rem", color: "#F5D78E", fontWeight: 700 }}>{v}</div>
                <div style={{ fontFamily: "Lato,sans-serif", fontSize: ".68rem", color: "rgba(245,215,142,.9)", letterSpacing: ".12em", textTransform: "uppercase", marginTop: 3 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="pu" style={{ position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6, cursor: "pointer", zIndex: 3 }} onClick={() => window.scrollBy({ top: 400, behavior: "smooth" })}>
          <span style={{ fontFamily: "Lato,sans-serif", fontSize: ".62rem", letterSpacing: ".15em", color: "rgba(245,215,142,.5)", textTransform: "uppercase" }}>Scroll</span>
          <div style={{ width: 1, height: 36, background: "linear-gradient(to bottom,rgba(245,215,142,.5),transparent)" }} />
        </div>
      </section>

      {/* PILLARS */}
      <div style={{ background: "linear-gradient(135deg,#3B1F0A,#6B2D0A)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", maxWidth: 1100, margin: "0 auto" }} className="g3">
          {[{ img: "/bsoaa_melbourne/kayaka_image_hero_section.jpg", t: "Kayaka", s: "Work is Divine — every honest labour is worship" }, { img: "/bsoaa_melbourne/dasoha_image_hero_section.jpg", t: "Dasoha", s: "Selfless service — give freely of time and wealth" }, { img: "/bsoaa_melbourne/prasada_image_hero_section.jpg", t: "Prasada", s: "Sacred sharing — the fruit of work offered to all" }].map(({ img, t, s }) => (
            <div key={t} style={{ padding: "28px 20px", borderRight: "1px solid rgba(245,215,142,.1)", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
              <div style={{ width: 72, height: 72, borderRadius: "50%", overflow: "hidden", border: "2px solid rgba(212,160,23,.5)", boxShadow: "0 4px 16px rgba(0,0,0,.4)", flexShrink: 0 }}>
                <img src={img} alt={t} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
              <div>
                <div style={{ fontFamily: "'Cinzel Decorative',serif", fontSize: ".75rem", color: "#F5D78E", marginBottom: 6, letterSpacing: ".08em" }}>{t}</div>
                <div style={{ fontFamily: "Lato,sans-serif", fontSize: ".78rem", color: "rgba(245,215,142,.85)", lineHeight: 1.65 }}>{s}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section style={{ padding: "56px clamp(16px,5vw,64px)", background: "#FDF6E3" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SH tag="Who We Are" title="Basava Samithi of Australasia" sub="A Melbourne community rooted in 12th-century Sharana philosophy, living it in 21st-century Australia." />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, marginTop: 36, alignItems: "center" }} className="g2">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {["community_activity_image-4.jpg", "community_activity_image-5.jpg", "community_activity_image-6.jpg", "community_activity_image-3.jpg"].map(f => (
                <div key={f} className="zoom" style={{ borderRadius: 8, overflow: "hidden", aspectRatio: "4/3", boxShadow: "0 6px 24px rgba(93,58,30,.14)" }}>
                  <img src={f} alt="Community" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                </div>
              ))}
            </div>
            <div>
              <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.2rem", color: "#5C3A1E", lineHeight: 1.85, fontStyle: "italic", marginBottom: 20 }}>"Our inspiration and aspiration — to spread Basava Philosophy around the globe."</p>
              <p style={{ fontFamily: "Lato,sans-serif", fontSize: ".92rem", color: "#5C3A1E", lineHeight: 1.9, marginBottom: 14 }}>Established in the late 1990s, BSOAA Melbourne Chapter is a non-profit organisation that preserves and promotes Sharana philosophy — a revolutionary 12th-century movement championing social equality, human dignity, and divine work.</p>
              <p style={{ fontFamily: "Lato,sans-serif", fontSize: ".92rem", color: "#5C3A1E", lineHeight: 1.9, marginBottom: 28 }}>We are one of six chapters across Australasia — Sydney, Brisbane, Perth, Adelaide, New Zealand, and Singapore — united by Basavanna's teachings and the Anubhava Mantapa tradition.</p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <button className="btnS" onClick={() => goTo("events")}>Our Events</button>
                <button className="btnO" onClick={() => goTo("membership")}>Join the Samithi</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BASAVANNA FEATURE */}
      <section style={{ background: "linear-gradient(160deg,#3B1F0A,#7B3F10)", padding: "56px clamp(16px,5vw,64px)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: -80, top: "50%", transform: "translateY(-50%)", opacity: .055, pointerEvents: "none" }}>
          <img src="/bsoaa_melbourne/hero_section_background.png" alt="" style={{ width: 460 }} />
        </div>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "260px 1fr", gap: 56, alignItems: "center" }} className="g2">
          <div className="bob">
            <div style={{ borderRadius: 12, overflow: "hidden", boxShadow: "0 24px 64px rgba(0,0,0,.55)", border: "3px solid rgba(212,160,23,.35)" }}>
              <img src="/bsoaa_melbourne/hero_picture.jpg" alt="Basavanna" style={{ width: "100%", display: "block", objectFit: "cover", aspectRatio: "3/4" }} />
            </div>
          </div>
          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ fontFamily: "'Cinzel Decorative',serif", fontSize: ".68rem", color: "#D4A017", letterSpacing: ".18em", marginBottom: 14 }}>THE FOUNDER SAINT</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2rem,4vw,3rem)", color: "#F5D78E", marginBottom: 16, lineHeight: 1.2 }}>Basavanna</h2>
            <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.15rem", color: "rgba(245,215,142,.82)", lineHeight: 1.9, fontStyle: "italic", marginBottom: 20 }}>"The rich will make temples for Shiva. What shall I, a poor man, do? My legs are pillars, the body the shrine, the head a cupola of gold."</p>
            <p style={{ fontFamily: "Lato,sans-serif", fontSize: ".88rem", color: "rgba(245,215,142,.82)", lineHeight: 1.85 }}>12th-century statesman, poet, philosopher and social reformer. Founder of the Lingayat movement and the Anubhava Mantapa — the world's first recorded parliament of spiritual equals, held in Kalyana, Karnataka.</p>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section style={{ padding: "56px clamp(16px,5vw,64px)", background: "#1A0F05", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 20% 50%,rgba(232,103,26,.06) 0%,transparent 60%),radial-gradient(circle at 80% 20%,rgba(212,160,23,.05) 0%,transparent 50%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
              <div style={{ height: 1, width: 40, background: "#D4A017", opacity: .5 }} />
              <div style={{ fontFamily: "Lato,sans-serif", fontSize: ".68rem", fontWeight: 700, color: "#8B6914", letterSpacing: ".2em", textTransform: "uppercase" }}>Our Beliefs</div>
              <div style={{ height: 1, width: 40, background: "#D4A017", opacity: .5 }} />
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2rem,4.5vw,3.2rem)", color: "#F5D78E", lineHeight: 1.15 }}>Sharana Philosophy</h2>
            <p style={{ fontFamily: "Lato,sans-serif", fontSize: ".9rem", color: "rgba(245,215,142,.75)", marginTop: 12, maxWidth: 540, margin: "12px auto 0", lineHeight: 1.7 }}>
              A revolutionary spiritual movement from 12th-century Karnataka — radical, inclusive, and eternally relevant.<br />
              <span style={{ color: "rgba(245,215,142,.45)", fontSize: ".8rem" }}>Hover over each card to explore</span>
            </p>
            <div style={{ width: 56, height: 3, background: "linear-gradient(90deg,#E8671A,#D4A017)", margin: "18px auto 0", borderRadius: 2 }} />
          </div>
          <div className="philoGrid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22 }}>
            {philosophyCards.map((card, idx) => <PhiloCardAnimated key={card.title} card={card} index={idx} />)}
          </div>
        </div>
      </section>

      {/* VACHANAS */}
      <section style={{ padding: "56px clamp(16px,5vw,64px)", background: "linear-gradient(180deg,#3B1F0A,#5C2A08)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", opacity: .05, pointerEvents: "none" }}>
          <img src="/bsoaa_melbourne/hero_section_background.png" alt="" style={{ width: 600 }} />
        </div>
        <div style={{ maxWidth: 800, margin: "0 auto", position: "relative", zIndex: 1, textAlign: "center" }}>
          <div style={{ fontFamily: "'Cinzel Decorative',serif", fontSize: ".7rem", letterSpacing: ".2em", color: "#D4A017", marginBottom: 12 }}>SACRED WORDS</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2rem,4vw,3rem)", color: "#F5D78E" }}>Vachanas</h2>
          <div style={{ width: 56, height: 2, background: "#D4A017", margin: "16px auto 48px" }} />
          <div style={{ overflow: "hidden", minHeight: 100 }}>
            <div key={vachanaIdx} className={vachanaDir === "in" ? "vIn" : "vOut"}>
              <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(1.1rem,2.5vw,1.5rem)", color: "#F5D78E", lineHeight: 1.9, fontStyle: "italic", marginBottom: 24, padding: "0 clamp(0px,4vw,32px)" }}>
                "{vachanas[vachanaIdx].text}"
              </p>
              <div style={{ fontFamily: "'Cinzel Decorative',serif", fontSize: ".68rem", color: "#D4A017", letterSpacing: ".12em" }}>— {vachanas[vachanaIdx].author}</div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: 10, marginTop: 36 }}>
            {vachanas.map((_, i) => (
              <button key={i} className="nb" style={{ width: i === vachanaIdx ? 24 : 8, height: 8, borderRadius: 4, background: i === vachanaIdx ? "#D4A017" : "rgba(212,160,23,.22)", transition: "all .3s" }} />
            ))}
          </div>
          <div style={{ marginTop: 32, display: "flex", justifyContent: "center" }}>
            <div style={{ width: 180, borderRadius: 10, overflow: "hidden", boxShadow: "0 16px 48px rgba(0,0,0,.5)", border: "2px solid rgba(212,160,23,.3)" }}>
              <img src="/bsoaa_melbourne/vachana_image.jpg" alt="Vachana Book" style={{ width: "100%", display: "block" }} />
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14, marginTop: 28 }} className="g4">
            {["Basavanna", "Akka Mahadevi", "Allama Prabhu", "Siddharama"].map(n => (
              <div key={n} style={{ padding: "16px 10px", background: "rgba(255,255,255,.05)", borderRadius: 8, border: "1px solid rgba(212,160,23,.18)", textAlign: "center" }}>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: ".95rem", color: "#F5D78E", fontStyle: "italic", marginBottom: 4 }}>{n}</div>
                <div style={{ fontFamily: "Lato,sans-serif", fontSize: ".65rem", color: "rgba(245,215,142,.4)", letterSpacing: ".07em" }}>12th Century Sharana</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PURPOSES */}
      <section style={{ padding: "56px clamp(16px,5vw,64px)", background: "#F0E6C8" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SH tag="Our Mission" title="Purposes of BSOAA Melbourne" sub="The founding objectives that guide everything we do as a community." />
          <div style={{ marginTop: 32, position: "relative", overflow: "hidden", background: "#fff", borderRadius: 12, boxShadow: "0 4px 24px rgba(93,58,30,.1)", border: "1px solid #F5D78E" }}>
            <div key={purposeIdx} style={{ animation: "slideInRight .5s ease forwards", padding: "48px clamp(24px,5vw,64px)", minHeight: 160, display: "flex", alignItems: "center", gap: 24 }}>
              <div style={{ width: 48, height: 48, borderRadius: "50%", background: "linear-gradient(135deg,#E8671A,#C94F0A)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontFamily: "'Cinzel Decorative',serif", fontSize: ".85rem", color: "#fff" }}>
                {String(purposeIdx + 1).padStart(2, "0")}
              </div>
              <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(1rem,2vw,1.3rem)", color: "#3B1F0A", lineHeight: 1.85, fontStyle: "italic" }}>
                {purposes[purposeIdx]}
              </p>
            </div>
            <div style={{ height: 4, background: "#F0E6C8" }}>
              <div key={purposeIdx} style={{ height: "100%", background: "linear-gradient(90deg,#E8671A,#D4A017)", animation: "progressBar 8s linear forwards", borderRadius: 2 }} />
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: 8, padding: "14px 0" }}>
              {purposes.map((_, i) => (
                <div key={i} onClick={() => setPurposeIdx(i)} style={{ width: i === purposeIdx ? 20 : 7, height: 7, borderRadius: 4, background: i === purposeIdx ? "#E8671A" : "rgba(232,103,26,.2)", transition: "all .3s", cursor: "pointer" }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <SharedFooter goTo={goTo} />
    </div>
  );
}

function EventsPage({ goTo, setLightbox }) {
  return (
    <div style={{ paddingTop: 100, background: "#FDF6E3", minHeight: "100vh" }} className="pageIn">
      <div style={{ padding: "48px clamp(16px,5vw,64px)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SH tag="Calendar" title="Events & Gatherings" sub="Come celebrate, serve, and grow with our Melbourne family" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 26, marginTop: 32 }} className="g2">
            {events.map(ev => (
              <div key={ev.title} className="evCard" style={{ background: "#fff", borderRadius: 12, overflow: "hidden", boxShadow: "0 4px 24px rgba(93,58,30,.1)" }}>
                <div className="zoom" style={{ height: 260, overflow: "hidden", position: "relative", cursor: "pointer" }} onClick={() => setLightbox({ file: ev.fullImg, caption: ev.title })}>
                  <img src={ev.img} alt={ev.title} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }} />
                  <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0)", display: "flex", alignItems: "center", justifyContent: "center", transition: "background .3s" }}
                    onMouseEnter={e => e.currentTarget.style.background = "rgba(0,0,0,.35)"}
                    onMouseLeave={e => e.currentTarget.style.background = "rgba(0,0,0,0)"}>
                    <div className="viewHint" style={{ background: "rgba(232,103,26,.9)", color: "#fff", padding: "8px 18px", borderRadius: 20, fontFamily: "Lato,sans-serif", fontSize: ".75rem", fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", opacity: 0, transition: "opacity .3s", pointerEvents: "none" }}>View Full Invitation ↗</div>
                  </div>
                </div>
                <div style={{ padding: "22px 26px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8, flexWrap: "wrap", gap: 6 }}>
                    <span style={{ fontFamily: "Lato,sans-serif", fontSize: ".7rem", fontWeight: 700, color: "#E8671A", letterSpacing: ".1em", textTransform: "uppercase" }}>{ev.tag}</span>
                    <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: ".95rem", color: "#8B6914", fontStyle: "italic" }}>{ev.date} · {ev.day}</span>
                  </div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.35rem", color: "#3B1F0A", fontWeight: 600, marginBottom: 8 }}>{ev.title}</h3>
                  <p style={{ fontFamily: "Lato,sans-serif", fontSize: ".85rem", color: "#8B6914", lineHeight: 1.75, marginBottom: 16 }}>{ev.desc}</p>
                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                    {ev.rsvp && <a href={ev.rsvp} target="_blank" rel="noreferrer"><button className="btnS" style={{ fontSize: ".78rem", padding: "9px 20px" }}>RSVP Now</button></a>}
                    <button className="btnO" style={{ fontSize: ".78rem", padding: "8px 18px" }} onClick={() => setLightbox({ file: ev.fullImg, caption: ev.title })}>View Invitation</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <SharedFooter goTo={goTo} />
    </div>
  );
}

function GalleryPage({ goTo, setLightbox }) {
  return (
    <div style={{ paddingTop: 100, background: "#F0E6C8", minHeight: "100vh" }} className="pageIn">
      <div style={{ padding: "48px clamp(16px,5vw,64px)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SH tag="Our Community" title="Photo Gallery" sub="Celebrations, gatherings, service, and joy — all in one family" />
          <div style={{ columns: "clamp(160px,22vw,280px)", columnGap: 14, marginTop: 32 }}>
            {galleryImages.map(({ file, caption }) => (
              <div key={file} className="zoom" style={{ marginBottom: 14, borderRadius: 8, overflow: "hidden", cursor: "pointer", breakInside: "avoid", boxShadow: "0 4px 16px rgba(93,58,30,.12)", transition: "box-shadow .3s" }} onClick={() => setLightbox({ file, caption })}>
                <img src={file} alt={caption} style={{ width: "100%", display: "block" }} onError={e => { e.target.parentElement.style.display = "none"; }} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <SharedFooter goTo={goTo} />
    </div>
  );
}

function RecognitionPage({ goTo, setLightbox }) {
  return (
    <div style={{ paddingTop: 100, background: "linear-gradient(160deg,#3B1F0A,#6B2D0A)", minHeight: "100vh" }} className="pageIn">
      <div style={{ padding: "48px clamp(16px,5vw,64px)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SH tag="Honours and Milestones" title="Global Recognition" light={true} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 22, marginTop: 32 }} className="g2">
            {recognitionImages.map(({ file, caption }) => (
              <div key={file} className="zoom" style={{ borderRadius: 10, overflow: "hidden", position: "relative", cursor: "pointer", aspectRatio: "16/9", boxShadow: "0 8px 32px rgba(0,0,0,.4)", transition: "transform .3s,box-shadow .3s" }}
                onClick={() => setLightbox({ file, caption })}
                onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.02)"; e.currentTarget.style.boxShadow = "0 16px 48px rgba(0,0,0,.6)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,.4)"; }}>
                <img src={file} alt={caption} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px 18px 14px", background: "linear-gradient(to top,rgba(59,31,10,.9),transparent)" }}>
                  <div style={{ fontFamily: "Lato,sans-serif", fontSize: ".82rem", color: "#F5D78E", fontWeight: 700 }}>{caption}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <footer style={{ background: "#1A0A02", padding: "32px clamp(16px,5vw,80px)" }}>
        <div style={{ fontFamily: "Lato,sans-serif", fontSize: ".72rem", color: "rgba(245,215,142,.25)", textAlign: "center" }}>© 2025 Basava Samithi of Australasia Inc — Melbourne Chapter</div>
      </footer>
    </div>
  );
}

function MembershipPage({ goTo, presidentIdx, setPresidentIdx }) {
  const pm = presidentMessages[presidentIdx];
  return (
    <div style={{ paddingTop: 100, background: "#FDF6E3", minHeight: "100vh" }} className="pageIn">
      <div style={{ padding: "48px clamp(16px,5vw,64px)" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <SH tag="Join Us" title="Become a Member" sub="Be part of Melbourne's Sharana community — all are welcome" />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, marginTop: 32 }} className="g2">
            <div style={{ background: "#fff", borderRadius: 12, padding: "34px 30px", boxShadow: "0 4px 24px rgba(93,58,30,.1)", border: "1px solid #F5D78E" }}>
              <div style={{ fontFamily: "'Cinzel Decorative',serif", fontSize: ".62rem", color: "#E8671A", letterSpacing: ".12em", marginBottom: 10 }}>ANNUAL MEMBERSHIP</div>
              <div style={{ display: "flex", alignItems: "flex-end", gap: 4, marginBottom: 4 }}>
                <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "3.2rem", color: "#3B1F0A", lineHeight: 1 }}>$50</span>
                <span style={{ fontFamily: "Lato,sans-serif", fontSize: ".8rem", color: "#8B6914", paddingBottom: 8 }}>/year</span>
              </div>
              <div style={{ width: 36, height: 2, background: "#E8671A", marginBottom: 22 }} />
              {["All year-round events and activities", "Free cultural program participation", "Monthly Mahamane invitations", "Community newsletters and updates", "Full voting rights in the Samithi"].map(b => (
                <div key={b} style={{ display: "flex", gap: 10, marginBottom: 11 }}>
                  <span style={{ color: "#E8671A", flexShrink: 0, marginTop: 1 }}>✦</span>
                  <span style={{ fontFamily: "Lato,sans-serif", fontSize: ".86rem", color: "#5C3A1E", lineHeight: 1.5 }}>{b}</span>
                </div>
              ))}
              <a href="mailto:secretary.bsoamelbourne@gmail.com" style={{ textDecoration: "none" }}>
                <button className="btnS" style={{ width: "100%", marginTop: 22 }}>Become a Member</button>
              </a>
            </div>
            <div style={{ background: "linear-gradient(160deg,#3B1F0A,#6B2D0A)", borderRadius: 12, padding: "34px 30px" }}>
              <div style={{ fontFamily: "'Cinzel Decorative',serif", fontSize: ".62rem", color: "#D4A017", letterSpacing: ".12em", marginBottom: 10 }}>DASOHA — SELFLESS SERVICE</div>
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.8rem", color: "#F5D78E", fontStyle: "italic", marginBottom: 10, lineHeight: 1.2 }}>Give Your Time</div>
              <div style={{ width: 36, height: 2, background: "#D4A017", marginBottom: 20 }} />
              <p style={{ fontFamily: "Lato,sans-serif", fontSize: ".86rem", color: "rgba(245,215,142,.72)", lineHeight: 1.85, marginBottom: 22 }}>Dasoha — selfless service — is the beating heart of our philosophy. Volunteer for events, cultural programs, or community service. All backgrounds welcome. Just a willing heart.</p>
              <img src="/bsoaa_melbourne/community_activity_image-8.jpg" alt="Dasoha" style={{ width: "100%", borderRadius: 8, height: 150, objectFit: "cover", display: "block", marginBottom: 22, opacity: .85 }} />
              <a href="mailto:contact.bsoamelbourne@gmail.com" style={{ textDecoration: "none" }}>
                <button className="btnOG" style={{ width: "100%" }}>Get Involved</button>
              </a>
            </div>
          </div>

          {/* PRESIDENT MESSAGES */}
          <div style={{ marginTop: 48 }}>
            <SH tag="From Our Leaders" title="President's Message" sub="Words from those who have served and led our Melbourne chapter." />
            <div style={{ marginTop: 28, background: "#fff", borderRadius: 16, overflow: "hidden", boxShadow: "0 8px 40px rgba(93,58,30,.12)", border: "1px solid #F5D78E" }}>
              <div key={presidentIdx} style={{ animation: "slideInRight .5s ease forwards", display: "grid", gridTemplateColumns: "280px 1fr", minHeight: 360 }} className="g2">
                <div style={{ background: "linear-gradient(160deg,#3B1F0A,#6B2D0A)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 28px", gap: 16 }}>
                  <div style={{ width: 130, height: 130, borderRadius: "50%", overflow: "hidden", border: "4px solid rgba(212,160,23,.6)", boxShadow: "0 8px 32px rgba(0,0,0,.4)" }}>
                    <img src={pm.img} alt={pm.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }} />
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.2rem", color: "#F5D78E", fontWeight: 600, marginBottom: 4 }}>{pm.name}</div>
                    <div style={{ fontFamily: "'Cinzel Decorative',serif", fontSize: ".6rem", color: "#D4A017", letterSpacing: ".1em" }}>{pm.year}</div>
                    <div style={{ fontFamily: "Lato,sans-serif", fontSize: ".72rem", color: "rgba(245,215,142,.5)", marginTop: 4 }}>{pm.date}</div>
                  </div>
                </div>
                <div style={{ padding: "40px 36px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <div style={{ fontFamily: "'Cinzel Decorative',serif", fontSize: ".62rem", color: "#E8671A", letterSpacing: ".12em", marginBottom: 14 }}>MESSAGE FROM THE PRESIDENT</div>
                  <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.05rem", color: "#3B1F0A", lineHeight: 1.9, fontStyle: "italic" }}>
                    {pm.message}
                  </p>
                  <div style={{ marginTop: 24, fontFamily: "Lato,sans-serif", fontSize: ".85rem", color: "#E8671A", fontWeight: 700 }}>Sharanu Sharanarthi,</div>
                  <div style={{ fontFamily: "Lato,sans-serif", fontSize: ".85rem", color: "#5C3A1E" }}>{pm.name}</div>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "center", gap: 10, padding: "16px 0", background: "#FDF6E3", borderTop: "1px solid #F5D78E" }}>
                {presidentMessages.map((_, i) => (
                  <div key={i} onClick={() => setPresidentIdx(i)} style={{ width: i === presidentIdx ? 24 : 8, height: 8, borderRadius: 4, background: i === presidentIdx ? "#E8671A" : "rgba(232,103,26,.2)", transition: "all .3s", cursor: "pointer" }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <SharedFooter goTo={goTo} />
    </div>
  );
}

function ContactPage({ goTo }) {
  const [formSent, setFormSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  return (
    <div style={{ paddingTop: 100, background: "#F0E6C8", minHeight: "100vh" }} className="pageIn">
      <div style={{ padding: "48px clamp(16px,5vw,64px)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <SH tag="Get In Touch" title="Contact Us" sub="We would love to hear from you — reach out anytime" />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, marginTop: 32, alignItems: "start" }} className="g2">
            <div>
              <img src="/bsoaa_melbourne/community_activity_image-5.jpg" alt="Team" style={{ width: "100%", borderRadius: 10, height: 210, objectFit: "cover", display: "block", marginBottom: 28, boxShadow: "0 8px 32px rgba(93,58,30,.14)" }} />
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                {[{ ic: "✉️", l: "General Enquiries", v: "contact.bsoamelbourne@gmail.com", h: "mailto:contact.bsoamelbourne@gmail.com" }, { ic: "📋", l: "Secretary", v: "secretary.bsoamelbourne@gmail.com", h: "mailto:secretary.bsoamelbourne@gmail.com" }, { ic: "📍", l: "Location", v: "Melbourne, Victoria, Australia", h: null }, { ic: "🌐", l: "Website", v: "bsoaamelbourne.org", h: "https://bsoaamelbourne.org" }].map(({ ic, l, v, h }) => (
                  <div key={l} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <div style={{ width: 40, height: 40, background: "#fff", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, flexShrink: 0, border: "1px solid #F5D78E" }}>{ic}</div>
                    <div>
                      <div style={{ fontFamily: "Lato,sans-serif", fontSize: ".62rem", fontWeight: 700, color: "#8B6914", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 2 }}>{l}</div>
                      {h ? <a href={h} style={{ fontFamily: "Lato,sans-serif", fontSize: ".88rem", color: "#E8671A", textDecoration: "none" }}>{v}</a> : <div style={{ fontFamily: "Lato,sans-serif", fontSize: ".88rem", color: "#5C3A1E" }}>{v}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: "#fff", borderRadius: 12, padding: "34px 30px", boxShadow: "0 4px 24px rgba(93,58,30,.1)", border: "1px solid #F5D78E" }}>
              {formSent ? (
                <div style={{ textAlign: "center", padding: "40px 0" }}>
                  <div style={{ fontSize: 48, marginBottom: 14 }}>🙏</div>
                  <h4 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.5rem", color: "#3B1F0A", marginBottom: 8 }}>Namaskara!</h4>
                  <p style={{ fontFamily: "Lato,sans-serif", color: "#8B6914" }}>Thank you for reaching out. We will be in touch soon.</p>
                </div>
              ) : (
                <form onSubmit={e => { e.preventDefault(); setFormSent(true); }} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  <h4 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.45rem", color: "#3B1F0A", marginBottom: 4 }}>Send a Message</h4>
                  <input className="iF" placeholder="Your Name" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                  <input className="iF" type="email" placeholder="Email Address" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                  <textarea className="iF" placeholder="Your message..." rows={5} required value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} style={{ resize: "vertical" }} />
                  <button type="submit" className="btnS">Send Message 🙏</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      <SharedFooter goTo={goTo} />
    </div>
  );
}

/* ════════════════════════════════════════════
   MAIN APP
════════════════════════════════════════════ */
export default function App() {
  const [page, setPage] = useState("home");
  const [taglineIdx, setTaglineIdx] = useState(0);
  const [taglineFade, setTaglineFade] = useState(true);
  const [vachanaIdx, setVachanaIdx] = useState(0);
  const [vachanaDir, setVachanaDir] = useState("in");
  const [lightbox, setLightbox] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [purposeIdx, setPurposeIdx] = useState(0);
  const [presidentIdx, setPresidentIdx] = useState(0);

  const goTo = (p) => { setPage(p); setMenuOpen(false); scrollToTop(); };

  /* Tagline rotator */
  useEffect(() => {
    const t = setInterval(() => {
      setTaglineFade(false);
      setTimeout(() => { setTaglineIdx(i => (i + 1) % heroTaglines.length); setTaglineFade(true); }, 450);
    }, 3800);
    return () => clearInterval(t);
  }, []);

  /* Vachana rotator */
  useEffect(() => {
    const t = setInterval(() => {
      setVachanaDir("out");
      setTimeout(() => { setVachanaIdx(i => (i + 1) % vachanas.length); setVachanaDir("in"); }, 400);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  /* Purposes rotator */
  useEffect(() => {
    const t = setInterval(() => setPurposeIdx(i => (i + 1) % purposes.length), 8000);
    return () => clearInterval(t);
  }, []);

  /* President message rotator */
  useEffect(() => {
    const t = setInterval(() => setPresidentIdx(i => (i + 1) % presidentMessages.length), 12000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div style={{ fontFamily: "Georgia,serif", background: "#FDF6E3", color: "#2C1A0A", overflowX: "hidden" }}>
      <style>{GLOBAL_CSS}</style>

      {/* ── NAVBAR ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        height: 88, display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 clamp(16px,4vw,56px)",
        background: scrolled ? "rgba(253,246,227,.97)" : "rgba(253,246,227,.92)",
        backdropFilter: "blur(10px)",
        boxShadow: scrolled ? "0 2px 16px rgba(93,58,30,.12)" : "none",
        transition: "all .3s",
        overflow: "visible"
      }}>
        {/* Logo — large badge overflowing below nav, matching image 2 */}
        <div style={{ display: "flex", alignItems: "center", gap: 18, cursor: "pointer", position: "relative" }} onClick={() => goTo("home")}>
          <div style={{
            position: "relative",
            top: 18,
            width: 112, height: 112,
            flexShrink: 0,
            zIndex: 1001,
            filter: "drop-shadow(0 6px 20px rgba(93,58,30,.45))",
          }}>
            <img
              src="/bsoaa_melbourne/basava_logo.jpg"
              alt="BSOAA Logo"
              style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
            />
          </div>
          <div>
            <div style={{ fontFamily: "'Cinzel Decorative',serif", fontSize: "1rem", color: "#E8671A", letterSpacing: ".07em", lineHeight: 1.3 }}>BSOAA Melbourne</div>
            <div style={{ fontFamily: "Lato,sans-serif", fontSize: ".72rem", color: "#8B6914", letterSpacing: ".12em", textTransform: "uppercase", marginTop: 3 }}>Basava Samithi of Australasia</div>
          </div>
        </div>

        {/* Desktop nav links */}
        <div className="dNav" style={{ display: "flex", gap: 18, alignItems: "center" }}>
          {navLinks.map(({ label, id }) => (
            <button key={id} className={`nBtn${page === id ? " act" : ""}`} onClick={() => goTo(id)} style={{ color: page === id ? "#E8671A" : "#5C3A1E" }}>{label}</button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button className="mBtn nb" onClick={() => setMenuOpen(!menuOpen)} style={{ display: "none", flexDirection: "column", gap: 5, padding: 6 }}>
          {[0, 1, 2].map(i => <div key={i} style={{ width: 24, height: 2, background: "#E8671A", borderRadius: 2 }} />)}
        </button>
      </nav>

      {/* Mobile menu backdrop */}
      {menuOpen && <div onClick={() => setMenuOpen(false)} style={{ position: "fixed", inset: 0, zIndex: 998, background: "rgba(0,0,0,.3)" }} />}

      {/* Mobile menu panel */}
      <div style={{ display: menuOpen ? "flex" : "none", position: "fixed", top: 72, left: 0, right: 0, zIndex: 999, background: "rgba(253,246,227,.98)", borderBottom: "2px solid #F5D78E", flexDirection: "column", padding: "16px 24px", gap: 14 }}>
        {navLinks.map(({ label, id }) => (
          <button key={id} className="nb" onClick={() => goTo(id)} style={{ textAlign: "left", fontFamily: "Lato,sans-serif", fontSize: "1rem", fontWeight: 700, color: "#5C3A1E" }}>{label}</button>
        ))}
      </div>

      {/* ── PAGE CONTENT ── */}
      {page === "home" && (
        <HomePage
          goTo={goTo}
          taglineIdx={taglineIdx}
          taglineFade={taglineFade}
          vachanaIdx={vachanaIdx}
          vachanaDir={vachanaDir}
          purposeIdx={purposeIdx}
          setPurposeIdx={setPurposeIdx}
        />
      )}
      {page === "events" && <EventsPage goTo={goTo} setLightbox={setLightbox} />}
      {page === "gallery" && <GalleryPage goTo={goTo} setLightbox={setLightbox} />}
      {page === "recognition" && <RecognitionPage goTo={goTo} setLightbox={setLightbox} />}
      {page === "membership" && <MembershipPage goTo={goTo} presidentIdx={presidentIdx} setPresidentIdx={setPresidentIdx} />}
      {page === "contact" && <ContactPage goTo={goTo} />}

      {/* LIGHTBOX */}
      {lightbox && (
        <div onClick={() => setLightbox(null)} style={{ position: "fixed", inset: 0, zIndex: 3000, background: "rgba(0,0,0,.95)", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px", cursor: "pointer", overflowY: "auto" }}>
          <div style={{ maxWidth: 600, width: "100%", textAlign: "center", margin: "auto" }} onClick={e => e.stopPropagation()}>
            <img src={lightbox.file} alt={lightbox.caption} style={{ width: "100%", borderRadius: 10, display: "block", boxShadow: "0 20px 60px rgba(0,0,0,.7)", maxHeight: "85vh", objectFit: "contain" }} />
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.1rem", color: "#F5D78E", marginTop: 16, fontStyle: "italic" }}>{lightbox.caption}</div>
            <button onClick={() => setLightbox(null)} style={{ marginTop: 14, background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.2)", color: "#F5D78E", padding: "8px 24px", borderRadius: 4, cursor: "pointer", fontFamily: "Lato,sans-serif", fontSize: ".85rem" }}>Close ✕</button>
          </div>
        </div>
      )}
    </div>
  );
}
