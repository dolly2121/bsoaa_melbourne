import { useState, useEffect, useRef } from "react";


/* ─── DATA ─── */
const heroTaglines = [
  "One Invisible God · One Universe · Single Humankind",
  "Work is Divine - Kayaka Vishwakarma Nidhi",
  "ISHTALINGA is the Symbol of the Universe",
];

const vachanas = [
  { text: "The rich will make temples for Shiva. What shall I, a poor man, do? My legs are pillars, the body the shrine, the head a cupola of gold.", author: "Basavanna" },
  { text: "Work is worship. The fruit of labour is sacred offering. Share freely - this is Dasoha.", author: "Basavanna" },
  { text: "Make of my body the beam of a lute, of my head the sounding gourd, of my nerves the strings.", author: "Akka Mahadevi" },
  { text: "Caste distinctions are a creation of man. In the eyes of the divine, all beings are one and equal.", author: "Allama Prabhu" },
  { text: "The one who has experienced the inner light needs no outer temple. The heart, purified, is the holiest of shrines.", author: "Siddharama" },
];

const philosophyCards = [
  { img: "/Iahtalinga_image.png", title: "Ishtalinga", subtitle: "Symbol of the Universe", body: "The personal symbol of the Universe, held close to the heart - a direct, equal connection between every devotee and the divine. No caste. No hierarchy.", accent: "#C94F0A" },
  { img: "/social_equality.jpeg", title: "Social Equality", subtitle: "Unity in Diversity", body: "Basavanna's movement broke caste barriers 800 years before modern civil rights. Every person - regardless of birth - was equal in the Anubhava Mantapa.", accent: "#B8860B" },
  { img: "/vachana_image.jpg", title: "Vachana Literature", subtitle: "Sacred Lyric Poetry", body: "Lyric prose-poems written by the Sharanas - one of the oldest literary forms in Kannada, speaking of justice, love, and inner divinity in plain, accessible language.", accent: "#8B4513" },
  { img: "/anubhava_mantapa.jpg", title: "Anubhava Mantapa", subtitle: "World's First Parliament", body: "The world's first democratic spiritual assembly. Men and women of all backgrounds debated, shared wisdom, and governed together as equals in 12th-century Kalyana.", accent: "#C94F0A" },
  { img: "/dasoha_image.jpg", title: "Dasoha", subtitle: "Selfless Service", body: "Selfless giving - of food, wealth, knowledge, and time. Every act of generosity is considered sacred. Dasoha is the living heartbeat of every BSOAA gathering.", accent: "#B8860B" },
  { img: "/non_descrimination_image.jpg", title: "Non-Discrimination", subtitle: "One Human Family", body: "BSOAA Melbourne carries this legacy forward - welcoming all backgrounds, professions, and genders into a genuinely equal and inclusive community space.", accent: "#8B4513" },
];

const featuredEvent = {
  date: "14 Jun 2026", day: "Sunday", title: "Sharana Sangama 2026",
  desc: "Basava Samithi Melbourne Chapter warmly invites you and your family to attend Sharana Sangama featuring a special online session on Maths Magic and Motivational Speech about Basava Philosophy by Shri Basavaraj Umrani (Human Computer). Date: Sunday 14 June 2026, 3:00 PM – 6:00 PM AEST. Venue: 21 Electra Avenue, Ashwood VIC 3147.",
  joinLink: "https://meet.google.com/mkv-novx-yxv",
  tag: "⭐ Featured Event", img: "/sharana_sangama_2026-06-04.jpeg", fullImg: "/sharana_sangama_2026-06-04.jpeg", rsvp: null
};

const events = [
  { date: "25 Apr 2026", day: "Saturday", title: "Basava Jayanthi 2026", desc: "Annual celebration - cultural performances, vachana recitals, community feast. In the divine presence of His Holiness Dr. Mahanta Prabhu Swamiji. RSVP required by 19 April.", tag: "🎉 Major Festival", img: "/basava_jayanthi_2026.jpeg", fullImg: "/basava_jayanthi_2026.jpeg", rsvp: "https://forms.gle/XR4Pmb1tsS5aEJmc8" },
  { date: "Oct 2025", day: "Sunday", title: "Deepawali Festival", desc: "Free community Deepawali gathering with singing, dancing, Dandiya and much more. Food available to purchase. RSVP is a must.", tag: "🪔 Festival", img: "/deepavali_event.jpeg", fullImg: "/deepavali_event.jpeg", rsvp: null },
  { date: "Monthly", day: "Last Sunday", title: "Mahamane Gathering", desc: "Monthly spiritual gathering - vachana singing, Sharana philosophy discussions, community bonding.", tag: "🙏 Monthly", img: "/past_event-4.jpg", fullImg: "/past_event-4.jpg", rsvp: null },
  { date: "Ongoing", day: "Year-round", title: "Dasoha - Community Service", desc: "Volunteer-led service activities in Melbourne - food drives, cultural education, and neighbourhood outreach.", tag: "🤝 Service", img: "/past_event-5.jpg", fullImg: "/past_event-5.jpg", rsvp: null },
];

const galleryImages = [
  { file: "/community_activity_image-1.jpg", caption: "Cultural Program - Group Dancing" },
  { file: "/community_activity_image-2.jpg", caption: "Lamp Lighting Ceremony" },
  { file: "/community_activity_image-3.jpg", caption: "Community Picnic" },
  { file: "/community_activity_image-4.jpg", caption: "Mahamane Gathering" },
  { file: "/community_activity_image-5.jpg", caption: "BSOAA Melbourne Team" },
  { file: "/community_activity_image-6.jpg", caption: "Monthly Gathering" },
  { file: "/community_activity_image-7.jpg", caption: "Cultural Event" },
  { file: "/community_activity_image-8.jpg", caption: "Dasoha - Community Cleanup" },
  { file: "/community_activity_image-9.jpg", caption: "Deepavali Celebration" },
  { file: "/community_activity_image-10.jpg", caption: "Deepavali Gathering" },

];

const recognitionImages = [
  // { file: "/recognition_image-1.jpg", caption: "Global Recognition Ceremony" },
  // { file: "/recognition_image-2.jpg", caption: "Community Honours" },
  // { file: "/recognition_image-3.jpg", caption: "Leadership Commitment" },
  { file: "/recognition_image-4.jpg", caption: "PM Modi paying tribute to Basavanna" },
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
    name: "Nagaraj Navalgatti",
    year: "President 2026",
    img: "/Jaya_Hunagund_president_image.jpg",
    message: "Sharanu, I would like to warmly welcome all members and supporters of Basava Samithi of Australasia Inc. - Melbourne Chapter. It is an honour and privilege to serve in the role of President. The Samithi has been serving the community for over 20 years in Melbourne. It offers a platform for people from all walks of life to come and share their wisdom, knowledge and experiences. In an effort to preserve and practice Sharana Philosophy, the Samithi organises monthly Sharana Sangama, Maneyalli Mahamane (home-based Sharana gatherings) and special events such as Diwali and Basava Jayanthi celebrations.",
  },
];

const navLinks = [
  { label: "Home", id: "home" },
  { label: "About Us", id: "about" },
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
  @media(max-width:768px){.dNav{display:none!important;}.mBtn{display:flex!important;}.g2{grid-template-columns:1fr!important;}.g3{grid-template-columns:1fr!important;}.g4{grid-template-columns:repeat(2,1fr)!important;}.navSub{font-size:.55rem!important;letter-spacing:.06em!important;}}
  @media(min-width:769px){.mBtn{display:none!important;}.logoWrap{top:18px!important;width:112px!important;height:112px!important;}}
  @media(max-width:768px){.navSub{font-size:.55rem!important;letter-spacing:.06em!important;}}
`;

function scrollToTop() {
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

/* ════════════════════════════════════════════
   SHARED COMPONENTS - defined outside App
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
              <img src="/basava_logo.png" alt="BSOAA" style={{ width: 42, height: 42, objectFit: "contain" }} />
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
          <div style={{ fontFamily: "Lato,sans-serif", fontSize: ".72rem", color: "rgba(245,215,142,.25)" }}>© 2025 Basava Samithi of Australasia Inc. - Melbourne Chapter · Non-Profit Organisation</div>
          <div style={{ fontFamily: "Lato,sans-serif", fontSize: ".72rem", color: "rgba(245,215,142,.25)" }}>Proudly supported by the Victorian Multicultural Commission</div>
        </div>
      </div>
    </footer>
  );
}

/* ════════════════════════════════════════════
   PAGE COMPONENTS - defined outside App so
   React doesn't recreate them on every render
════════════════════════════════════════════ */

function HomePage({ goTo, taglineIdx, taglineFade, vachanaIdx, vachanaDir, purposeIdx, setPurposeIdx }) {
  return (
    <div>
      {/* HERO */}
      <section id="home" style={{ minHeight: "100vh", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", paddingTop: 100 }}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <img className="kenImg" src="/hero_picture.jpg" alt="Hero" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(115deg,rgba(59,31,10,.92) 0%,rgba(93,58,30,.68) 55%,rgba(184,134,11,.38) 100%)" }} />
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 120, background: "linear-gradient(to bottom,transparent,#FDF6E3)" }} />
        </div>
        <div style={{ position: "absolute", right: "-6%", top: "50%", transform: "translateY(-50%)", opacity: .04, pointerEvents: "none" }}>
          <img src="/hero_section_background.png" alt="" style={{ width: 520, height: 520, objectFit: "contain" }} />
        </div>
        <div style={{ position: "relative", zIndex: 2, padding: "60px clamp(20px,6vw,100px)", maxWidth: 820 }}>
          <div style={{ display: "inline-block", background: "rgba(212,160,23,.18)", border: "1px solid rgba(212,160,23,.45)", borderRadius: 20, padding: "5px 18px", marginBottom: 22, backdropFilter: "blur(6px)" }}>
            <span style={{ fontFamily: "Lato,sans-serif", fontSize: ".7rem", fontWeight: 700, letterSpacing: ".15em", color: "#F5D78E", textTransform: "uppercase" }}>Basava Samithi of Australasia Inc. Melbourne Chapter · Est. 1990s</span>
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
          {[{ img: "/kayaka_image_hero_section.jpg", t: "Kayaka", s: "Work is Divine - every honest labour is worship" }, { img: "/dasoha_image_hero_section.jpg", t: "Dasoha", s: "Selfless service - give freely of time and wealth" }, { img: "/prasada_image_hero_section.jpg", t: "Prasada", s: "Sacred sharing - the fruit of work offered to all" }].map(({ img, t, s }) => (
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
          <SH tag="Who We Are" title="Basava Samithi of Australasia Inc. Melbourne Chapter" sub="A Melbourne community rooted in 12th-century Sharana philosophy, living it in 21st-century Australia." />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, marginTop: 36, alignItems: "center" }} className="g2">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, position: "relative" }}>
              {[
                { f: "/community_activity_image-4.jpg", span: false },
                { f: "/community_activity_image-5.jpg", span: false },
                { f: "/community_activity_image-6.jpg", span: false },
                { f: "/community_activity_image-3.jpg", span: false },
              ].map(({ f }, i) => (
                <div key={f} className="zoom" style={{ borderRadius: i === 0 ? "12px 4px 4px 4px" : i === 1 ? "4px 12px 4px 4px" : i === 2 ? "4px 4px 4px 12px" : "4px 4px 12px 4px", overflow: "hidden", aspectRatio: "4/3", boxShadow: "0 6px 24px rgba(93,58,30,.14)" }}>
                  <img src={f} alt="Community" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                </div>
              ))}
              {/* Floating badge in centre */}
              <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 64, height: 64, borderRadius: "50%", background: "linear-gradient(135deg,#E8671A,#C94F0A)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 20px rgba(232,103,26,.5)", zIndex: 2, border: "3px solid #FDF6E3" }}>
                <span style={{ fontFamily: "'Cinzel Decorative',serif", fontSize: ".55rem", color: "#fff", letterSpacing: ".06em", textAlign: "center", lineHeight: 1.4 }}>EST.<br/>1990s</span>
              </div>
            </div>
            <div>
              <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.2rem", color: "#5C3A1E", lineHeight: 1.85, fontStyle: "italic", marginBottom: 20 }}>"Our inspiration and aspiration - to spread Basava Philosophy around the globe."</p>
              <p style={{ fontFamily: "Lato,sans-serif", fontSize: ".92rem", color: "#5C3A1E", lineHeight: 1.9, marginBottom: 14 }}>Established in the late 1990s, BSOAA Melbourne Chapter is a non-profit organisation that preserves and promotes Sharana philosophy - a revolutionary 12th-century movement championing social equality, human dignity, and divine work.</p>
              <p style={{ fontFamily: "Lato,sans-serif", fontSize: ".92rem", color: "#5C3A1E", lineHeight: 1.9, marginBottom: 28 }}>We are one of six chapters across Australasia - Sydney, Brisbane, Perth, Adelaide, New Zealand, and Singapore - united by Basavanna's teachings and the Anubhava Mantapa tradition.</p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <button className="btnS" onClick={() => goTo("events")}>Our Events</button>
                <button className="btnO" onClick={() => goTo("membership")}>Join the Samithi</button>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* VACHANAS */}
      <section style={{ padding: "56px clamp(16px,5vw,64px)", background: "linear-gradient(180deg,#3B1F0A,#5C2A08)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", opacity: .05, pointerEvents: "none" }}>
          <img src="/hero_section_background.png" alt="" style={{ width: 600 }} />
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
              <div style={{ fontFamily: "'Cinzel Decorative',serif", fontSize: ".68rem", color: "#D4A017", letterSpacing: ".12em" }}>- {vachanas[vachanaIdx].author}</div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: 10, marginTop: 36 }}>
            {vachanas.map((_, i) => (
              <button key={i} className="nb" style={{ width: i === vachanaIdx ? 24 : 8, height: 8, borderRadius: 4, background: i === vachanaIdx ? "#D4A017" : "rgba(212,160,23,.22)", transition: "all .3s" }} />
            ))}
          </div>
          {/* Sharana poets - editorial style */}
          <div style={{ marginTop: 52, borderTop: "1px solid rgba(212,160,23,.15)", paddingTop: 36 }}>
            <div style={{ fontFamily: "Lato,sans-serif", fontSize: ".6rem", fontWeight: 700, color: "rgba(212,160,23,.45)", letterSpacing: ".2em", textTransform: "uppercase", marginBottom: 24 }}>The Sharana Poets</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 0 }} className="g4">
              {[
                { name: "Basavanna", title: "Founder Saint", desc: "Statesman, philosopher & social reformer" },
                { name: "Akka Mahadevi", title: "Mystic Poet", desc: "Voice of feminine divinity & liberation" },
                { name: "Allama Prabhu", title: "Spiritual Master", desc: "Teacher of inner awakening & wisdom" },
                { name: "Siddharama", title: "Devotee Saint", desc: "Champion of justice & community service" },
              ].map(({ name, title, desc }, i) => (
                <div key={name} style={{ padding: "20px 16px", borderLeft: i > 0 ? "1px solid rgba(212,160,23,.12)" : "none", textAlign: "left" }}>
                  <div style={{ width: 20, height: 2, background: "linear-gradient(90deg,#E8671A,#D4A017)", borderRadius: 2, marginBottom: 12 }} />
                  <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.05rem", color: "#F5D78E", fontWeight: 600, marginBottom: 3 }}>{name}</div>
                  <div style={{ fontFamily: "Lato,sans-serif", fontSize: ".62rem", color: "#D4A017", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 8 }}>{title}</div>
                  <div style={{ fontFamily: "Lato,sans-serif", fontSize: ".75rem", color: "rgba(245,215,142,.45)", lineHeight: 1.6 }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PURPOSES */}
      <section style={{ padding: "56px clamp(16px,5vw,64px)", background: "#F0E6C8" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SH tag="Our Mission" title="Purposes of BSOAA Melbourne" sub="The founding objectives that guide everything we do as a community." />
          <div style={{ marginTop: 32, position: "relative", background: "#fff", borderRadius: 12, boxShadow: "0 4px 24px rgba(93,58,30,.1)", border: "1px solid #F5D78E", overflow: "hidden" }}>
            <div key={purposeIdx} style={{ animation: "slideInRight .5s ease forwards", padding: "48px clamp(52px,8vw,96px)", minHeight: 160, display: "flex", alignItems: "center", gap: 24 }}>
              <div style={{ width: 52, height: 52, borderRadius: "50%", background: "linear-gradient(135deg,#E8671A,#C94F0A)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontFamily: "'Cinzel Decorative',serif", fontSize: ".85rem", color: "#fff" }}>
                {String(purposeIdx + 1).padStart(2, "0")}
              </div>
              <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(1rem,2vw,1.3rem)", color: "#3B1F0A", lineHeight: 1.85, fontStyle: "italic" }}>
                {purposes[purposeIdx]}
              </p>
            </div>
            {/* LEFT ARROW */}
            <button onClick={() => setPurposeIdx(i => (i - 1 + purposes.length) % purposes.length)}
              style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 48, background: "linear-gradient(to right,rgba(232,103,26,.12),transparent)", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "background .2s" }}
              onMouseEnter={e => e.currentTarget.style.background = "linear-gradient(to right,rgba(232,103,26,.25),transparent)"}
              onMouseLeave={e => e.currentTarget.style.background = "linear-gradient(to right,rgba(232,103,26,.12),transparent)"}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E8671A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            {/* RIGHT ARROW */}
            <button onClick={() => setPurposeIdx(i => (i + 1) % purposes.length)}
              style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 48, background: "linear-gradient(to left,rgba(232,103,26,.12),transparent)", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "background .2s" }}
              onMouseEnter={e => e.currentTarget.style.background = "linear-gradient(to left,rgba(232,103,26,.25),transparent)"}
              onMouseLeave={e => e.currentTarget.style.background = "linear-gradient(to left,rgba(232,103,26,.12),transparent)"}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E8671A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
            {/* DOTS */}
            <div style={{ display: "flex", justifyContent: "center", gap: 8, padding: "14px 0", borderTop: "1px solid #F5D78E" }}>
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

          {/* ── FEATURED (BIG) CARD ── */}
          <div className="evCard" style={{ background: "#fff", borderRadius: 16, overflow: "hidden", boxShadow: "0 8px 40px rgba(93,58,30,.15)", marginTop: 36, display: "grid", gridTemplateColumns: "1fr 1fr" }} id="featuredEvCard">
            {/* Image side */}
            <div className="zoom" style={{ position: "relative", minHeight: 380, cursor: "pointer", overflow: "hidden" }} onClick={() => setLightbox({ file: featuredEvent.fullImg, caption: featuredEvent.title })}>
              <img src={featuredEvent.img} alt={featuredEvent.title} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }} />
              {/* Featured badge */}
              <div style={{ position: "absolute", top: 18, left: 18, background: "linear-gradient(135deg,#E8671A,#C94F0A)", color: "#fff", padding: "5px 14px", borderRadius: 20, fontFamily: "Lato,sans-serif", fontSize: ".68rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", boxShadow: "0 4px 12px rgba(232,103,26,.4)" }}>
                ⭐ Featured Event
              </div>
              <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0)", display: "flex", alignItems: "center", justifyContent: "center", transition: "background .3s" }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(0,0,0,.3)"}
                onMouseLeave={e => e.currentTarget.style.background = "rgba(0,0,0,0)"}>
                <div className="viewHint" style={{ background: "rgba(232,103,26,.9)", color: "#fff", padding: "10px 22px", borderRadius: 20, fontFamily: "Lato,sans-serif", fontSize: ".78rem", fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", opacity: 0, transition: "opacity .3s", pointerEvents: "none" }}>View Full Invitation ↗</div>
              </div>
            </div>
            {/* Content side */}
            <div style={{ padding: "40px 36px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12, flexWrap: "wrap", gap: 8 }}>
                <span style={{ fontFamily: "Lato,sans-serif", fontSize: ".72rem", fontWeight: 700, color: "#E8671A", letterSpacing: ".1em", textTransform: "uppercase" }}>{featuredEvent.tag}</span>
                <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1rem", color: "#8B6914", fontStyle: "italic" }}>{featuredEvent.date} · {featuredEvent.day}</span>
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(1.6rem,2.8vw,2.2rem)", color: "#3B1F0A", fontWeight: 600, lineHeight: 1.2, marginBottom: 12 }}>{featuredEvent.title}</h2>
              <div style={{ width: 44, height: 3, background: "linear-gradient(90deg,#E8671A,#D4A017)", borderRadius: 2, marginBottom: 18 }} />
              <p style={{ fontFamily: "Lato,sans-serif", fontSize: ".9rem", color: "#8B6914", lineHeight: 1.85, marginBottom: 28, flexGrow: 1 }}>{featuredEvent.desc}</p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                {featuredEvent.rsvp && <a href={featuredEvent.rsvp} target="_blank" rel="noreferrer"><button className="btnS">RSVP Now</button></a>}
                <a href={featuredEvent.joinLink} target="_blank" rel="noreferrer"><button className="btnS">Join Online</button></a>
                <button className="btnO" onClick={() => setLightbox({ file: featuredEvent.fullImg, caption: featuredEvent.title })}>View Invitation</button>
              </div>
            </div>
          </div>
          <style>{`@media(max-width:768px){#featuredEvCard{grid-template-columns:1fr!important;}#featuredEvCard>div:first-child{min-height:240px!important;}}`}</style>

          {/* ── 4 SMALLER CARDS IN A ROW ── */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20, marginTop: 20 }} className="g4">
            {events.map(ev => (
              <div key={ev.title} className="evCard" style={{ background: "#fff", borderRadius: 12, overflow: "hidden", boxShadow: "0 4px 20px rgba(93,58,30,.1)", display: "flex", flexDirection: "column" }}>
                {/* Image */}
                <div className="zoom" style={{ height: 180, overflow: "hidden", position: "relative", cursor: "pointer", flexShrink: 0 }} onClick={() => setLightbox({ file: ev.fullImg, caption: ev.title })}>
                  <img src={ev.img} alt={ev.title} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }} />
                  {/* Gradient overlay with tag */}
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(59,31,10,.75) 0%, transparent 55%)" }} />
                  <div style={{ position: "absolute", bottom: 12, left: 14, fontFamily: "Lato,sans-serif", fontSize: ".65rem", fontWeight: 700, color: "#F5D78E", letterSpacing: ".08em", textTransform: "uppercase" }}>{ev.tag}</div>
                </div>
                {/* Content */}
                <div style={{ padding: "16px 18px 20px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                  <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: ".85rem", color: "#8B6914", fontStyle: "italic", marginBottom: 6 }}>{ev.date} · {ev.day}</div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.1rem", color: "#3B1F0A", fontWeight: 600, lineHeight: 1.3, marginBottom: 8 }}>{ev.title}</h3>
                  <p style={{ fontFamily: "Lato,sans-serif", fontSize: ".78rem", color: "#8B6914", lineHeight: 1.7, marginBottom: 14, flexGrow: 1 }}>{ev.desc}</p>
                  <button className="btnO" style={{ fontSize: ".72rem", padding: "7px 14px", alignSelf: "flex-start" }} onClick={() => setLightbox({ file: ev.fullImg, caption: ev.title })}>View Invitation</button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── PROPOSED ACTIVITIES ── */}
      <section style={{ background: "#1A0F05", padding: "56px clamp(16px,5vw,64px)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SH tag="Basava Sadana" title="Proposed Activities" light={true}
            sub="A glimpse of what our permanent community home will offer - every day of the week." />

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, marginTop: 48 }} className="g2">

            {/* WEEKDAYS */}
            <div style={{ borderRadius: 16, overflow: "hidden", background: "linear-gradient(175deg,#2C1505,#3B1F0A)" }}>
              {/* Header */}
              <div style={{ padding: "24px 28px", borderBottom: "1px solid rgba(212,160,23,.15)", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                <div>
                  <div style={{ fontFamily: "Lato,sans-serif", fontSize: ".62rem", fontWeight: 700, color: "#D4A017", letterSpacing: ".2em", textTransform: "uppercase", marginBottom: 6 }}>Mon - Fri</div>
                  <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.8rem", color: "#F5D78E", fontWeight: 600, lineHeight: 1 }}>Weekdays</div>
                </div>
                <div style={{ fontFamily: "'Cinzel Decorative',serif", fontSize: "3rem", color: "rgba(212,160,23,.08)", lineHeight: 1 }}>W</div>
              </div>
              {/* Activity tiles grid */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "rgba(212,160,23,.08)" }}>
                {[
                  { label: "Morning Prayers", sub: "Meditation & devotional recitals" },
                  { label: "Language Classes", sub: "Kannada & Vachana (after school)" },
                  { label: "Senior Gatherings", sub: "Social & wellness programs" },
                  { label: "Philosophy Sessions", sub: "Discussions & teaching" },
                  { label: "Volunteer Work", sub: "Coordination & social service", wide: true },
                ].map(({ label, sub, wide }) => (
                  <div key={label} style={{
                    background: "linear-gradient(160deg,#2C1505,#3B1F0A)",
                    padding: "18px 20px",
                    gridColumn: wide ? "span 2" : "span 1",
                    borderTop: "2px solid transparent",
                    borderImage: "linear-gradient(90deg,#E8671A,#D4A017) 1",
                    transition: "background .3s"
                  }}>
                    <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1rem", color: "#F5D78E", fontWeight: 600, marginBottom: 4 }}>{label}</div>
                    <div style={{ fontFamily: "Lato,sans-serif", fontSize: ".72rem", color: "rgba(245,215,142,.5)", lineHeight: 1.5 }}>{sub}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* WEEKENDS */}
            <div style={{ borderRadius: 16, overflow: "hidden", background: "linear-gradient(175deg,#1A0A02,#2C1505)" }}>
              {/* Header */}
              <div style={{ padding: "24px 28px", borderBottom: "1px solid rgba(232,103,26,.15)", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                <div>
                  <div style={{ fontFamily: "Lato,sans-serif", fontSize: ".62rem", fontWeight: 700, color: "#E8671A", letterSpacing: ".2em", textTransform: "uppercase", marginBottom: 6 }}>Sat - Sun</div>
                  <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.8rem", color: "#F5D78E", fontWeight: 600, lineHeight: 1 }}>Weekends</div>
                </div>
                <div style={{ fontFamily: "'Cinzel Decorative',serif", fontSize: "3rem", color: "rgba(232,103,26,.08)", lineHeight: 1 }}>W</div>
              </div>
              {/* Activity tiles grid */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "rgba(232,103,26,.08)" }}>
                {[
                  { label: "Spiritual Gatherings", sub: "Satsangs & Sharana Sangama" },
                  { label: "Anubhava Mantapa", sub: "Basava philosophy sessions" },
                  { label: "Youth Programs", sub: "Workshops & leadership camps" },
                  { label: "Dasoha", sub: "Community meals & social service" },
                  { label: "Arts & Culture", sub: "Music, dance & cultural celebrations", wide: true },
                ].map(({ label, sub, wide }) => (
                  <div key={label} style={{
                    background: "linear-gradient(160deg,#1A0A02,#2C1505)",
                    padding: "18px 20px",
                    gridColumn: wide ? "span 2" : "span 1",
                    borderTop: "2px solid transparent",
                    borderImage: "linear-gradient(90deg,#D4A017,#E8671A) 1",
                  }}>
                    <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1rem", color: "#F5D78E", fontWeight: 600, marginBottom: 4 }}>{label}</div>
                    <div style={{ fontFamily: "Lato,sans-serif", fontSize: ".72rem", color: "rgba(245,215,142,.5)", lineHeight: 1.5 }}>{sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CLOSING QUOTE */}
          <div style={{ marginTop: 36, borderRadius: 14, padding: "40px clamp(20px,4vw,64px)", textAlign: "center", border: "1px solid rgba(212,160,23,.2)", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,rgba(232,103,26,.06),rgba(212,160,23,.04))" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ fontFamily: "'Cinzel Decorative',serif", fontSize: ".62rem", color: "#D4A017", letterSpacing: ".2em", marginBottom: 20 }}>KAYAKAVE KAILASA</div>
              <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(1.2rem,2.5vw,1.7rem)", color: "#F5D78E", fontStyle: "italic", lineHeight: 1.8, maxWidth: 720, margin: "0 auto 28px" }}>
                "Work is the path to divinity. Let Basava Sadana be our collective Kayaka for generations to come."
              </p>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSeT0rWQXeEcbkHTDcqKKwN-DPOhyekbDBEZpdn5QUJP2apylQ/viewform" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                <button className="btnS">Get Involved in Basava Sadana</button>
              </a>
            </div>
          </div>

        </div>
      </section>

      <SharedFooter goTo={goTo} />
    </div>
  );
}

function GalleryPage({ goTo, setLightbox }) {
  return (
    <div style={{ paddingTop: 100, background: "#F0E6C8", minHeight: "100vh" }} className="pageIn">
      <div style={{ padding: "48px clamp(16px,5vw,64px)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SH tag="Our Community" title="Photo Gallery" sub="Celebrations, gatherings, service, and joy - all in one family" />
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
        <div style={{ fontFamily: "Lato,sans-serif", fontSize: ".72rem", color: "rgba(245,215,142,.25)", textAlign: "center" }}>© 2025 Basava Samithi of Australasia Inc. - Melbourne Chapter</div>
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
          <SH tag="Join Us" title="Become a Member" sub="Be part of Melbourne's Sharana community - all are welcome" />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, marginTop: 32 }} className="g2">
            <div style={{ background: "#fff", borderRadius: 12, padding: "34px 30px", boxShadow: "0 4px 24px rgba(93,58,30,.1)", border: "1px solid #F5D78E" }}>
              <div style={{ fontFamily: "'Cinzel Decorative',serif", fontSize: ".62rem", color: "#E8671A", letterSpacing: ".12em", marginBottom: 10 }}>ANNUAL MEMBERSHIP</div>
              <div style={{ width: 36, height: 2, background: "#E8671A", marginBottom: 22 }} />
              {["All year-round events and activities", "Free cultural program participation", "Monthly Mahamane invitations", "Community newsletters and updates", "Full voting rights in the Samithi"].map(b => (
                <div key={b} style={{ display: "flex", gap: 10, marginBottom: 11 }}>
                  <span style={{ color: "#E8671A", flexShrink: 0, marginTop: 1 }}>✦</span>
                  <span style={{ fontFamily: "Lato,sans-serif", fontSize: ".86rem", color: "#5C3A1E", lineHeight: 1.5 }}>{b}</span>
                </div>
              ))}
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSeT0rWQXeEcbkHTDcqKKwN-DPOhyekbDBEZpdn5QUJP2apylQ/viewform" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                <button className="btnS" style={{ width: "100%", marginTop: 22 }}>Become a Member</button>
              </a>
            </div>
            <div style={{ background: "linear-gradient(160deg,#3B1F0A,#6B2D0A)", borderRadius: 12, padding: "34px 30px" }}>
              <div style={{ fontFamily: "'Cinzel Decorative',serif", fontSize: ".62rem", color: "#D4A017", letterSpacing: ".12em", marginBottom: 10 }}>DASOHA - SELFLESS SERVICE</div>
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.8rem", color: "#F5D78E", fontStyle: "italic", marginBottom: 10, lineHeight: 1.2 }}>Give Your Time</div>
              <div style={{ width: 36, height: 2, background: "#D4A017", marginBottom: 20 }} />
              <p style={{ fontFamily: "Lato,sans-serif", fontSize: ".86rem", color: "rgba(245,215,142,.72)", lineHeight: 1.85, marginBottom: 22 }}>Dasoha - selfless service - is the beating heart of our philosophy. Volunteer for events, cultural programs, or community service. All backgrounds welcome. Just a willing heart.</p>
              <img src="/community_activity_image-8.jpg" alt="Dasoha" style={{ width: "100%", borderRadius: 8, height: 150, objectFit: "cover", display: "block", marginBottom: 22, opacity: .85 }} />
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSeT0rWQXeEcbkHTDcqKKwN-DPOhyekbDBEZpdn5QUJP2apylQ/viewform" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
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
          <SH tag="Get In Touch" title="Contact Us" sub="We would love to hear from you - reach out anytime" />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, marginTop: 32, alignItems: "start" }} className="g2">
            <div>
              <img src="/community_activity_image-5.jpg" alt="Team" style={{ width: "100%", borderRadius: 10, height: 210, objectFit: "cover", display: "block", marginBottom: 28, boxShadow: "0 8px 32px rgba(93,58,30,.14)" }} />
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


function AboutPage({ goTo }) {
  return (
    <div style={{ paddingTop: 100, background: "#FDF6E3", minHeight: "100vh" }} className="pageIn">

      {/* ── OUR BELIEFS ── */}
      <section style={{ padding: "56px clamp(16px,5vw,64px)", background: "#1A0F05", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 20% 50%,rgba(232,103,26,.06) 0%,transparent 60%),radial-gradient(circle at 80% 20%,rgba(212,160,23,.05) 0%,transparent 50%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <SH tag="Our Beliefs" title="Sharana Philosophy" light={true}
            sub="A revolutionary spiritual movement from 12th-century Karnataka - radical, inclusive, and eternally relevant. Hover over each card to explore." />
          <div className="philoGrid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22, marginTop: 48 }}>
            {philosophyCards.map((card, idx) => <PhiloCardAnimated key={card.title} card={card} index={idx} />)}
          </div>
        </div>
      </section>

      {/* ── VISION & MISSION ── */}
      <section style={{ padding: "56px clamp(16px,5vw,64px)", background: "#FDF6E3" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SH tag="Who We Are" title="Vision & Mission" sub="The purpose and direction that guides the Basava Samithi of Australasia Inc. - Melbourne Chapter." />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginTop: 40 }} className="g2">
            {/* Vision */}
            <div style={{ background: "#fff", borderRadius: 14, padding: "36px 32px", boxShadow: "0 4px 28px rgba(93,58,30,.1)", border: "1px solid #F5D78E", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "linear-gradient(90deg,#E8671A,#D4A017)" }} />
              <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
                <div style={{ width: 38, height: 38, borderRadius: "50%", background: "linear-gradient(135deg,#E8671A,#C94F0A)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem" }}>👁</div>
                <div style={{ fontFamily: "'Cinzel Decorative',serif", fontSize: ".72rem", color: "#E8671A", letterSpacing: ".12em", textTransform: "uppercase" }}>Our Vision</div>
              </div>
              <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(1.5rem,2.5vw,2rem)", color: "#3B1F0A", marginBottom: 16, lineHeight: 1.2 }}>Living the Philosophy</h3>
              <div style={{ width: 40, height: 2, background: "linear-gradient(90deg,#E8671A,#D4A017)", marginBottom: 20, borderRadius: 2 }} />
              <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.1rem", color: "#5C3A1E", lineHeight: 1.9, fontStyle: "italic" }}>
                "Preserve and propagate Sharana Samskruthi (or Sharana Philosophy) as a way of our lives."
              </p>
            </div>
            {/* Mission */}
            <div style={{ background: "linear-gradient(160deg,#3B1F0A,#6B2D0A)", borderRadius: 14, padding: "36px 32px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "linear-gradient(90deg,#D4A017,#E8671A)" }} />
              <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
                <div style={{ width: 38, height: 38, borderRadius: "50%", background: "linear-gradient(135deg,#D4A017,#B8860B)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem" }}>🌿</div>
                <div style={{ fontFamily: "'Cinzel Decorative',serif", fontSize: ".72rem", color: "#D4A017", letterSpacing: ".12em", textTransform: "uppercase" }}>Our Mission</div>
              </div>
              <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(1.5rem,2.5vw,2rem)", color: "#F5D78E", marginBottom: 16, lineHeight: 1.2 }}>Lead by Example</h3>
              <div style={{ width: 40, height: 2, background: "linear-gradient(90deg,#D4A017,#E8671A)", marginBottom: 20, borderRadius: 2 }} />
              <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.1rem", color: "rgba(245,215,142,.88)", lineHeight: 1.9, fontStyle: "italic" }}>
                "Lead by example by adapting Sharana philosophy that promotes values such as Social Justice, human rights, anti-discrimination and Dasoha (selfless volunteerism) into our daily lives."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── BASAVANNA FEATURE ── */}
      <section style={{ background: "linear-gradient(160deg,#3B1F0A,#7B3F10)", padding: "56px clamp(16px,5vw,64px)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: -80, top: "50%", transform: "translateY(-50%)", opacity: .055, pointerEvents: "none" }}>
          <img src="/hero_section_background.png" alt="" style={{ width: 460 }} />
        </div>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "260px 1fr", gap: 56, alignItems: "center" }} className="g2">
          <div className="bob">
            <div style={{ borderRadius: 12, overflow: "hidden", boxShadow: "0 24px 64px rgba(0,0,0,.55)", border: "3px solid rgba(212,160,23,.35)" }}>
              <img src="/hero_picture.jpg" alt="Basavanna" style={{ width: "100%", display: "block", objectFit: "cover", aspectRatio: "3/4" }} />
            </div>
          </div>
          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ fontFamily: "'Cinzel Decorative',serif", fontSize: ".68rem", color: "#D4A017", letterSpacing: ".18em", marginBottom: 14 }}>THE FOUNDER SAINT</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2rem,4vw,3rem)", color: "#F5D78E", marginBottom: 16, lineHeight: 1.2 }}>Basavanna</h2>
            <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.15rem", color: "rgba(245,215,142,.82)", lineHeight: 1.9, fontStyle: "italic", marginBottom: 20 }}>"The rich will make temples for Shiva. What shall I, a poor man, do? My legs are pillars, the body the shrine, the head a cupola of gold."</p>
            <p style={{ fontFamily: "Lato,sans-serif", fontSize: ".88rem", color: "rgba(245,215,142,.82)", lineHeight: 1.85 }}>12th-century statesman, poet, philosopher and social reformer. Founder of the Lingayat movement and the Anubhava Mantapa - the world's first recorded parliament of spiritual equals, held in Kalyana, Karnataka.</p>
          </div>
        </div>
      </section>

      {/* ── BASAVA SADANA ── */}
      <section style={{ background: "linear-gradient(160deg,#3B1F0A,#5C2A08)", padding: "56px clamp(16px,5vw,64px)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 80% 50%,rgba(212,160,23,.07) 0%,transparent 60%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ display: "inline-block", background: "rgba(212,160,23,.15)", border: "1px solid rgba(212,160,23,.4)", borderRadius: 20, padding: "5px 20px", marginBottom: 18 }}>
              <span style={{ fontFamily: "Lato,sans-serif", fontSize: ".68rem", fontWeight: 700, letterSpacing: ".15em", color: "#D4A017", textTransform: "uppercase" }}>A Vision for the Future</span>
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2rem,4.5vw,3.2rem)", color: "#F5D78E", lineHeight: 1.15, marginBottom: 16 }}>Basava Sadana</h2>
            <p style={{ fontFamily: "Lato,sans-serif", fontSize: ".95rem", color: "rgba(245,215,142,.7)", marginBottom: 8 }}>First Basava Bhavana in the Southern Hemisphere</p>
            <div style={{ width: 56, height: 3, background: "linear-gradient(90deg,#E8671A,#D4A017)", margin: "16px auto 24px", borderRadius: 2 }} />
            <blockquote style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(1.1rem,2.2vw,1.5rem)", color: "#F5D78E", fontStyle: "italic", maxWidth: 720, margin: "0 auto", lineHeight: 1.8 }}>
              "Kayakave Kailasa - Work is the path to divinity. A cultural hub is not just a building - it is a living space for identity, unity and growth."
            </blockquote>
          </div>
          {/* Why We Need It */}
          <div style={{ marginBottom: 20 }}>
            <div style={{ fontFamily: "'Cinzel Decorative',serif", fontSize: ".68rem", color: "#D4A017", letterSpacing: ".18em", textAlign: "center", marginBottom: 28 }}>WHY WE NEED BASAVA SADANA</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 18 }} className="g2">
              {[
                { num: "01", title: "Contribution to Public Good", body: "Basava Sadana will significantly contribute to the Australian public good - promoting social justice, gender justice, equality and inclusivity." },
                { num: "02", title: "Strengthening Democracy", body: "Help strengthen democratic values and institutions, which have recently come under pressure in modern society." },
                { num: "03", title: "First in Southern Hemisphere", body: "Basava Bhavana established in Melbourne will be the first of its kind in the Southern Hemisphere - a proud milestone for our community." },
                { num: "04", title: "Community Identity & Belonging", body: "A physical address for our community - enabling a permanent, visible presence in multicultural Australia." },
              ].map(({ num, title, body }) => (
                <div key={title} style={{ background: "rgba(255,255,255,.05)", border: "1px solid rgba(212,160,23,.2)", borderRadius: 12, padding: "26px 24px" }}>
                  <div style={{ fontFamily: "'Cinzel Decorative',serif", fontSize: "1.4rem", color: "#E8671A", marginBottom: 12, opacity: .8 }}>{num}</div>
                  <h4 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.15rem", color: "#F5D78E", fontWeight: 600, marginBottom: 10, lineHeight: 1.3 }}>{title}</h4>
                  <p style={{ fontFamily: "Lato,sans-serif", fontSize: ".82rem", color: "rgba(245,215,142,.65)", lineHeight: 1.8 }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
          {/* What It Stands For */}
          <div style={{ marginTop: 48 }}>
            <div style={{ fontFamily: "'Cinzel Decorative',serif", fontSize: ".68rem", color: "#D4A017", letterSpacing: ".18em", textAlign: "center", marginBottom: 28 }}>WHAT BASAVA SADANA STANDS FOR</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }} className="g3">
              {[
                { title: "Heritage Preservation", body: "Keeps traditions, language, and Basava philosophy alive for future generations." },
                { title: "Community Gathering", body: "A place for families, celebrations, discussions and festivals - building belonging." },
                { title: "Education & Awareness", body: "Classes, workshops and lectures for children and youth on cultural and spiritual values." },
                { title: "Support Network", body: "Mutual help, mentoring and intergenerational connection - elders and youth together." },
                { title: "Representation", body: "A visible, proud presence in multicultural Australia promoting inclusivity and dialogue." },
                { title: "Organisational Sustainability", body: "A permanent hub for regular programs, building long-term pride and commitment." },
              ].map(({ title, body }) => (
                <div key={title} style={{ background: "rgba(255,255,255,.04)", border: "1px solid rgba(212,160,23,.15)", borderRadius: 10, padding: "22px 18px" }}>
                  <div style={{ width: 28, height: 2, background: "linear-gradient(90deg,#E8671A,#D4A017)", borderRadius: 2, marginBottom: 12 }} />
                  <h4 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1rem", color: "#F5D78E", fontWeight: 600, marginBottom: 8, lineHeight: 1.3 }}>{title}</h4>
                  <p style={{ fontFamily: "Lato,sans-serif", fontSize: ".78rem", color: "rgba(245,215,142,.6)", lineHeight: 1.75 }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── EXECUTIVE COMMITTEE ── */}
      <section style={{ padding: "56px clamp(16px,5vw,64px)", background: "#F0E6C8" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <SH tag="Our People" title="Executive Committee" sub="The dedicated members who lead and serve the BSOAA Melbourne Chapter." />
          <div style={{ marginTop: 40, borderRadius: 16, overflow: "hidden", boxShadow: "0 12px 48px rgba(93,58,30,.18)", border: "3px solid rgba(212,160,23,.3)" }}>
            <img
              src="/basava_members_image.jpg"
              alt="BSOAA Melbourne Executive Committee 2021–2022"
              style={{ width: "100%", display: "block" }}
            />
          </div>
          <p style={{ fontFamily: "Lato,sans-serif", fontSize: ".8rem", color: "#8B6914", textAlign: "center", marginTop: 16, letterSpacing: ".06em" }}>
            Basava Samithi Melbourne - Executive Committee 2021–2022
          </p>
        </div>
      </section>

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

  const goTo = (p) => { setPage(p); setMenuOpen(false); };

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

  /* Scroll to top AFTER new page renders - double RAF ensures iOS Safari paints first */
  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      });
    });
    return () => cancelAnimationFrame(raf);
  }, [page]);

  return (
    <div style={{ fontFamily: "Georgia,serif", background: "#FDF6E3", color: "#2C1A0A", overflowX: "hidden" }}>
      <style>{GLOBAL_CSS}</style>

      {/* ── NAVBAR ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        height: 72, display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 clamp(16px,4vw,56px)",
        background: (page === "home" && !scrolled) ? "transparent" : "rgba(253,246,227,.97)",
        backdropFilter: (page === "home" && !scrolled) ? "none" : "blur(10px)",
        boxShadow: (page === "home" && !scrolled) ? "none" : "0 2px 16px rgba(93,58,30,.12)",
        transition: "all .4s",
        overflow: "visible"
      }}>
        {/* Logo - large badge overflowing below nav */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer", position: "relative" }} onClick={() => goTo("home")}>
          <div className="logoWrap" style={{
            position: "relative",
            top: 0,
            width: 56, height: 56,
            flexShrink: 0,
            zIndex: 1001,
            filter: "drop-shadow(0 4px 12px rgba(93,58,30,.45))",
          }}>
            <img
              src="/basava_logo.png"
              alt="BSOAA Logo"
              style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
            />
          </div>
          <div>
            <div style={{ fontFamily: "'Cinzel Decorative',serif", fontSize: "clamp(.72rem,.9rem,1rem)",
              color: (page === "home" && !scrolled) ? "#F5D78E" : "#E8671A",
              letterSpacing: ".07em", lineHeight: 1.3, transition: "color .4s" }}>BSOAA Melbourne</div>
            <div className="navSub" style={{ fontFamily: "Lato,sans-serif", fontSize: ".65rem",
              color: (page === "home" && !scrolled) ? "rgba(245,215,142,.75)" : "#8B6914",
              letterSpacing: ".1em", textTransform: "uppercase", marginTop: 3, transition: "color .4s" }}>Basava Samithi of Australasia Inc. Melbourne Chapter</div>
          </div>
        </div>

        {/* Desktop nav links */}
        <div className="dNav" style={{ display: "flex", gap: 18, alignItems: "center" }}>
          {navLinks.map(({ label, id }) => (
            <button key={id} className={`nBtn${page === id ? " act" : ""}`} onClick={() => goTo(id)}
              style={{ color: page === id ? "#E8671A" : (page === "home" && !scrolled) ? "rgba(245,215,142,.9)" : "#5C3A1E" }}>{label}</button>
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
      {page === "about" && <AboutPage goTo={goTo} />}
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
