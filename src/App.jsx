import { useState, useEffect, useRef } from "react";

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
  {
    img: "Iahtalinga_image.png",
    title: "Ishtalinga",
    subtitle: "Symbol of the Universe",
    body: "The personal symbol of the Universe, held close to the heart — a direct, equal connection between every devotee and the divine. No caste. No hierarchy.",
    accent: "#C94F0A",
  },
  {
    img: "social_equality.jpeg",
    title: "Social Equality",
    subtitle: "Unity in Diversity",
    body: "Basavanna's movement broke caste barriers 800 years before modern civil rights. Every person — regardless of birth — was equal in the Anubhava Mantapa.",
    accent: "#B8860B",
  },
  {
    img: "vachana_image.jpg",
    title: "Vachana Literature",
    subtitle: "Sacred Lyric Poetry",
    body: "Lyric prose-poems written by the Sharanas — one of the oldest literary forms in Kannada, speaking of justice, love, and inner divinity in plain, accessible language.",
    accent: "#8B4513",
  },
  {
    img: "anubhava_mantapa.jpg",
    title: "Anubhava Mantapa",
    subtitle: "World's First Parliament",
    body: "The world's first democratic spiritual assembly. Men and women of all backgrounds debated, shared wisdom, and governed together as equals in 12th-century Kalyana.",
    accent: "#C94F0A",
  },
  {
    img: "dasoha_image.jpg",
    title: "Dasoha",
    subtitle: "Selfless Service",
    body: "Selfless giving — of food, wealth, knowledge, and time. Every act of generosity is considered sacred. Dasoha is the living heartbeat of every BSOAA gathering.",
    accent: "#B8860B",
  },
  {
    img: "non_descrimination_image.jpg",
    title: "Non-Discrimination",
    subtitle: "One Human Family",
    body: "BSOAA Melbourne carries this legacy forward — welcoming all backgrounds, professions, and genders into a genuinely equal and inclusive community space.",
    accent: "#8B4513",
  },
];

const events = [
  { date: "25 Apr 2026", day: "Saturday", title: "Basava Jayanthi 2026", desc: "Annual celebration — cultural performances, vachana recitals, community feast. In the divine presence of His Holiness Dr. Mahanta Prabhu Swamiji. RSVP required by 19 April.", tag: "🎉 Major Festival", img: "basava_jayanthi_2026.jpeg", fullImg: "basava_jayanthi_2026.jpeg", rsvp: "https://forms.gle/XR4Pmb1tsS5aEJmc8" },
  { date: "Oct 2025", day: "Sunday", title: "Deepawali Festival", desc: "Free community Deepawali gathering with singing, dancing, Dandiya and much more. Food available to purchase. RSVP is a must.", tag: "🪔 Festival", img: "deepavali_event.jpeg", fullImg: "deepavali_event.jpeg", rsvp: null },
  { date: "Monthly", day: "Last Sunday", title: "Mahamane Gathering", desc: "Monthly spiritual gathering — vachana singing, Sharana philosophy discussions, community bonding.", tag: "🙏 Monthly", img: "past_event-4.jpg", fullImg: "past_event-4.jpg", rsvp: null },
  { date: "Ongoing", day: "Year-round", title: "Dasoha — Community Service", desc: "Volunteer-led service activities in Melbourne — food drives, cultural education, and neighbourhood outreach.", tag: "🤝 Service", img: "past_event-5.jpg", fullImg: "past_event-5.jpg", rsvp: null },
];

const galleryImages = [
  { file: "community_activity_image-1.jpg", caption: "Cultural Program — Award Ceremony" },
  { file: "community_activity_image-2.jpg", caption: "Award Recognition Ceremony" },
  { file: "community_activity_image-3.jpg", caption: "Community Picnic" },
  { file: "community_activity_image-4.jpg", caption: "Mahamane Gathering" },
  { file: "community_activity_image-5.jpg", caption: "BSOAA Melbourne Team" },
  { file: "community_activity_image-6.jpg", caption: "Monthly Gathering" },
  { file: "community_activity_image-7.jpg", caption: "Cultural Event" },
  { file: "community_activity_image-8.jpg", caption: "Dasoha — Community Cleanup" },
  { file: "past_evvents.png", caption: "Past Events Highlights" },
];

const recognitionImages = [
  { file: "recognition_image-1.jpg", caption: "Global Recognition Ceremony" },
  { file: "recognition_image-2.jpg", caption: "Community Honours" },
  { file: "recognition_image-3.jpg", caption: "Leadership Commitment" },
  { file: "recognition_image-4.jpg", caption: "PM Modi paying tribute to Basavanna" },
];

const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Philosophy", id: "philosophy" },
  { label: "Vachanas", id: "vachanas" },
  { label: "Events", id: "events" },
  { label: "Gallery", id: "gallery" },
  { label: "Recognition", id: "recognition" },
  { label: "Membership", id: "membership" },
  { label: "Contact", id: "contact" },
];

function scrollTo(id) { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); }

/* ── Philosophy Card Component ── */
function PhiloCard({ card, index }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: 14,
        overflow: "hidden",
        cursor: "pointer",
        aspectRatio: "3/4",
        boxShadow: hovered
          ? `0 28px 60px rgba(59,31,10,.45), 0 0 0 2px ${card.accent}`
          : "0 8px 32px rgba(59,31,10,.2)",
        transform: hovered ? "translateY(-10px) scale(1.02)" : "translateY(0) scale(1)",
        transition: "all 0.45s cubic-bezier(0.34,1.56,0.64,1)",
        animationDelay: `${index * 0.1}s`,
      }}
      className="philoCard"
    >
      {/* Background image */}
      <img
        src={card.img}
        alt={card.title}
        style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          objectFit: "cover", display: "block",
          transform: hovered ? "scale(1.12)" : "scale(1)",
          transition: "transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94)",
        }}
      />

      {/* Always-visible gradient bottom */}
      <div style={{
        position: "absolute", inset: 0,
        background: hovered
          ? `linear-gradient(to top, rgba(59,31,10,.97) 0%, rgba(59,31,10,.75) 50%, rgba(0,0,0,.25) 100%)`
          : `linear-gradient(to top, rgba(59,31,10,.92) 0%, rgba(59,31,10,.4) 55%, rgba(0,0,0,.1) 100%)`,
        transition: "background 0.45s ease",
      }} />

      {/* Accent top bar */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0,
        height: hovered ? 4 : 3,
        background: `linear-gradient(90deg, ${card.accent}, #D4A017)`,
        transition: "height 0.3s ease",
      }} />

      {/* Content */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        padding: "clamp(16px,3vw,28px)",
      }}>
        {/* Subtitle — slides in on hover */}
        <div style={{
          fontFamily: "Lato, sans-serif",
          fontSize: ".68rem",
          fontWeight: 700,
          letterSpacing: ".14em",
          textTransform: "uppercase",
          color: "#D4A017",
          marginBottom: 8,
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateY(0)" : "translateY(8px)",
          transition: "all 0.35s ease 0.05s",
        }}>
          {card.subtitle}
        </div>

        {/* Title */}
        <h3 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(1.2rem,2.2vw,1.6rem)",
          fontWeight: 600,
          color: "#F5D78E",
          marginBottom: hovered ? 12 : 6,
          lineHeight: 1.2,
          transition: "margin 0.35s ease",
        }}>
          {card.title}
        </h3>

        {/* Divider line */}
        <div style={{
          width: hovered ? 40 : 24,
          height: 2,
          background: `linear-gradient(90deg, ${card.accent}, #D4A017)`,
          marginBottom: hovered ? 14 : 0,
          transition: "all 0.4s ease",
          borderRadius: 2,
        }} />

        {/* Body text — slides up on hover */}
        <p style={{
          fontFamily: "Lato, sans-serif",
          fontSize: "clamp(.78rem,1.2vw,.9rem)",
          color: "rgba(253,246,227,.82)",
          lineHeight: 1.75,
          maxHeight: hovered ? 200 : 0,
          opacity: hovered ? 1 : 0,
          overflow: "hidden",
          transition: "all 0.4s cubic-bezier(0.25,0.46,0.45,0.94) 0.05s",
        }}>
          {card.body}
        </p>

        {/* Read more arrow */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          marginTop: hovered ? 14 : 0,
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateX(0)" : "translateX(-10px)",
          transition: "all 0.35s ease 0.15s",
          color: "#D4A017",
          fontFamily: "Lato, sans-serif",
          fontSize: ".75rem",
          fontWeight: 700,
          letterSpacing: ".08em",
          textTransform: "uppercase",
        }}>
          <span>Learn More</span>
          <span style={{ fontSize: "1rem", transition: "transform .3s", transform: hovered ? "translateX(4px)" : "translateX(0)" }}>→</span>
        </div>
      </div>

      {/* Number badge */}
      <div style={{
        position: "absolute",
        top: 16, right: 16,
        width: 36, height: 36,
        borderRadius: "50%",
        background: "rgba(253,246,227,.12)",
        border: "1px solid rgba(245,215,142,.3)",
        backdropFilter: "blur(6px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: "'Cinzel Decorative', serif",
        fontSize: ".65rem",
        color: "rgba(245,215,142,.7)",
        opacity: hovered ? 0 : 1,
        transition: "opacity 0.3s ease",
      }}>
        {String(index + 1).padStart(2, "0")}
      </div>
    </div>
  );
}

export default function App() {
  const [taglineIdx, setTaglineIdx] = useState(0);
  const [taglineFade, setTaglineFade] = useState(true);
  const [vachanaIdx, setVachanaIdx] = useState(0);
  const [lightbox, setLightbox] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("home");
  const [formSent, setFormSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineFade(false);
      setTimeout(() => { setTaglineIdx(i => (i + 1) % heroTaglines.length); setTaglineFade(true); }, 450);
    }, 3800);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setVachanaIdx(i => (i + 1) % vachanas.length), 5000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) setActiveNav(e.target.id); });
    }, { threshold: 0.25 });
    navLinks.forEach(({ id }) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add("vis"), e.target.dataset.delay || 0);
        }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll(".rev").forEach((el, i) => {
      el.dataset.delay = (i % 4) * 80;
      obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div style={{ fontFamily: "Georgia, serif", background: "#FDF6E3", color: "#2C1A0A", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&family=Lato:wght@300;400;700&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        html{scroll-behavior:smooth;}
        ::-webkit-scrollbar{width:5px;}
        ::-webkit-scrollbar-thumb{background:#E8671A;border-radius:3px;}

        .rev{opacity:0;transform:translateY(32px);transition:opacity .65s ease,transform .65s ease;}
        .rev.vis{opacity:1;transform:none;}

        .philoCard{opacity:0;transform:translateY(40px);}
        .philoCard.vis{opacity:1;transform:translateY(0);}

        .nb{background:none;border:none;cursor:pointer;}
        .evCard{transition:transform .3s,box-shadow .3s;cursor:pointer;}
        .evCard:hover{transform:translateY(-6px);box-shadow:0 20px 52px rgba(93,58,30,.2);}
        .evCard:hover .viewHint{opacity:1!important;}
        .zoom{overflow:hidden;}
        .zoom img{transition:transform .55s;}
        .zoom:hover img{transform:scale(1.07);}

        .btnS{background:linear-gradient(135deg,#E8671A,#C94F0A);color:#fff;border:none;padding:12px 28px;border-radius:4px;font-family:Lato,sans-serif;font-size:.88rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;cursor:pointer;transition:opacity .2s,transform .2s,box-shadow .2s;}
        .btnS:hover{opacity:.9;transform:translateY(-2px);box-shadow:0 8px 24px rgba(201,79,10,.4);}
        .btnO{background:transparent;border:2px solid #E8671A;color:#E8671A;padding:11px 26px;border-radius:4px;font-family:Lato,sans-serif;font-size:.85rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;cursor:pointer;transition:background .2s,color .2s;}
        .btnO:hover{background:#E8671A;color:#fff;}
        .btnOG{background:transparent;border:2px solid #D4A017;color:#D4A017;padding:11px 26px;border-radius:4px;font-family:Lato,sans-serif;font-size:.85rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;cursor:pointer;transition:all .2s;}
        .btnOG:hover{background:#D4A017;color:#3B1F0A;}
        .iF{width:100%;background:#fff;border:1.5px solid #F5D78E;border-radius:4px;padding:11px 14px;font-family:Lato,sans-serif;font-size:.95rem;color:#2C1A0A;outline:none;transition:border-color .2s;}
        .iF:focus{border-color:#E8671A;}
        .nBtn{background:none;border:none;cursor:pointer;font-family:Lato,sans-serif;font-size:.78rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:4px 0;border-bottom:2px solid transparent;transition:color .2s,border-color .2s;}
        .nBtn:hover,.nBtn.act{color:#E8671A;border-color:#E8671A;}

        @keyframes ken{0%{transform:scale(1) translateX(0);}100%{transform:scale(1.09) translateX(-15px);}}
        @keyframes bob{0%,100%{transform:translateY(0);}50%{transform:translateY(-10px);}}
        @keyframes sp{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}
        @keyframes pu{0%,100%{opacity:.45;}50%{opacity:1;}}
        @keyframes fu{from{opacity:0;transform:translateY(18px);}to{opacity:1;transform:none;}}
        @keyframes slideTag{from{opacity:0;transform:translateX(-12px);}to{opacity:1;transform:none;}}

        .kenImg{animation:ken 22s ease-in-out infinite alternate;}
        .bob{animation:bob 4.5s ease-in-out infinite;}
        .sp{animation:sp 30s linear infinite;}
        .pu{animation:pu 2.5s ease-in-out infinite;}

        .tl{transition:opacity .45s ease,transform .45s ease;}
        .tl.show{opacity:1;transform:translateY(0);}
        .tl.hide{opacity:0;transform:translateY(16px);}

        @media(max-width:900px){
          .philoGrid{grid-template-columns:repeat(2,1fr)!important;}
        }
        @media(max-width:600px){
          .philoGrid{grid-template-columns:1fr!important;}
          .philoCard{aspect-ratio:4/3!important;}
        }
        @media(max-width:768px){
          .dNav{display:none!important;}
          .mBtn{display:flex!important;}
          .g2{grid-template-columns:1fr!important;}
          .g3{grid-template-columns:1fr!important;}
          .g4{grid-template-columns:repeat(2,1fr)!important;}
          .mDr{display:flex!important;}
        }
        @media(min-width:769px){
          .mBtn{display:none!important;}
          .mDr{display:none!important;}
        }
      `}</style>

      {/* ── NAV ── */}
      <nav style={{ position:"fixed",top:0,left:0,right:0,zIndex:1000,height:64,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 clamp(16px,4vw,56px)",background:scrolled?"rgba(253,246,227,.97)":"rgba(253,246,227,.82)",backdropFilter:"blur(10px)",borderBottom:`2px solid ${scrolled?"#F5D78E":"rgba(245,215,142,.25)"}`,transition:"all .3s" }}>
        <div style={{display:"flex",alignItems:"center",gap:10,cursor:"pointer"}} onClick={()=>scrollTo("home")}>
          <img src="hero_section_background.png" alt="logo" style={{width:42,height:42,objectFit:"contain",borderRadius:"50%"}} />
          <div>
            <div style={{fontFamily:"'Cinzel Decorative',serif",fontSize:".66rem",color:"#E8671A",letterSpacing:".07em"}}>BSOAA Melbourne</div>
            <div style={{fontFamily:"Lato,sans-serif",fontSize:".56rem",color:"#8B6914",letterSpacing:".1em",textTransform:"uppercase"}}>Basava Samithi of Australasia</div>
          </div>
        </div>
        <div className="dNav" style={{display:"flex",gap:18,alignItems:"center"}}>
          {navLinks.map(({label,id})=>(
            <button key={id} className={`nBtn${activeNav===id?" act":""}`} onClick={()=>scrollTo(id)} style={{color:activeNav===id?"#E8671A":"#5C3A1E"}}>{label}</button>
          ))}
        </div>
        <button className="mBtn nb" onClick={()=>setMenuOpen(!menuOpen)} style={{display:"none",flexDirection:"column",gap:5,padding:6}}>
          {[0,1,2].map(i=><div key={i} style={{width:24,height:2,background:"#E8671A",borderRadius:2}} />)}
        </button>
      </nav>

      {/* Mobile overlay */}
      {menuOpen && (
        <div onClick={()=>setMenuOpen(false)} style={{position:"fixed",inset:0,zIndex:998,background:"rgba(0,0,0,.3)"}} />
      )}

      {/* Mobile drawer */}
      <div style={{display:menuOpen?"flex":"none",position:"fixed",top:64,left:0,right:0,zIndex:999,background:"rgba(253,246,227,.98)",borderBottom:"2px solid #F5D78E",flexDirection:"column",padding:"16px 24px",gap:14}}>
        {navLinks.map(({label,id})=>(
          <button key={id} className="nb" onClick={()=>{scrollTo(id);setMenuOpen(false);}} style={{textAlign:"left",fontFamily:"Lato,sans-serif",fontSize:"1rem",fontWeight:700,color:"#5C3A1E"}}>{label}</button>
        ))}
      </div>

      {/* ── HERO ── */}
      <section id="home" style={{minHeight:"100vh",position:"relative",overflow:"hidden",display:"flex",alignItems:"center",paddingTop:64}}>
        <div style={{position:"absolute",inset:0,overflow:"hidden"}}>
          <img className="kenImg" src="hero_picture.jpg" alt="Hero" style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}} />
          <div style={{position:"absolute",inset:0,background:"linear-gradient(115deg,rgba(59,31,10,.92) 0%,rgba(93,58,30,.68) 55%,rgba(184,134,11,.38) 100%)"}} />
          <div style={{position:"absolute",bottom:0,left:0,right:0,height:120,background:"linear-gradient(to bottom,transparent,#FDF6E3)"}} />
        </div>
        <div className="sp" style={{position:"absolute",right:"-6%",top:"50%",transform:"translateY(-50%)",opacity:.055,pointerEvents:"none"}}>
          <img src="hero_section_background.png" alt="" style={{width:520,height:520,objectFit:"contain"}} />
        </div>
        <div style={{position:"relative",zIndex:2,padding:"60px clamp(20px,6vw,100px)",maxWidth:820}}>
          <div style={{display:"inline-block",background:"rgba(212,160,23,.18)",border:"1px solid rgba(212,160,23,.45)",borderRadius:20,padding:"5px 18px",marginBottom:22,backdropFilter:"blur(6px)"}}>
            <span style={{fontFamily:"Lato,sans-serif",fontSize:".7rem",fontWeight:700,letterSpacing:".15em",color:"#F5D78E",textTransform:"uppercase"}}>Basava Samithi of Australasia · Melbourne Chapter · Est. 1990s</span>
          </div>
          <h1 style={{fontFamily:"'Cinzel Decorative',serif",fontSize:"clamp(2rem,5.5vw,4rem)",color:"#FDF6E3",lineHeight:1.15,marginBottom:28,textShadow:"0 4px 28px rgba(0,0,0,.55)"}}>
            Spreading<br/><span style={{color:"#F5D78E"}}>Basava Philosophy</span><br/>Across the Globe
          </h1>
          <div style={{minHeight:56,display:"flex",alignItems:"center",marginBottom:30}}>
            <div style={{borderLeft:"3px solid #E8671A",paddingLeft:18}}>
              <p className={`tl ${taglineFade?"show":"hide"}`} style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(1.05rem,2.4vw,1.45rem)",color:"rgba(245,215,142,.95)",lineHeight:1.5,fontStyle:"italic",fontWeight:600}}>
                {heroTaglines[taglineIdx]}
              </p>
            </div>
          </div>
          <div style={{display:"flex",gap:8,marginBottom:36}}>
            {heroTaglines.map((_,i)=>(
              <div key={i} onClick={()=>{setTaglineIdx(i);setTaglineFade(true);}} style={{width:i===taglineIdx?28:8,height:8,borderRadius:4,background:i===taglineIdx?"#E8671A":"rgba(245,215,142,.3)",transition:"all .35s",cursor:"pointer"}} />
            ))}
          </div>
          <div style={{display:"flex",gap:14,flexWrap:"wrap"}}>
            <button className="btnS" onClick={()=>scrollTo("about")}>Discover Our Community</button>
            <button className="btnOG" onClick={()=>scrollTo("events")}>Upcoming Events</button>
          </div>
          <div style={{display:"flex",gap:"clamp(24px,4vw,56px)",marginTop:52,flexWrap:"wrap"}}>
            {[["EST.","Late 1990s"],["CHAPTERS","6 Cities"],["CORE VALUE","Kayaka"]].map(([l,v])=>(
              <div key={l} style={{background:"rgba(0,0,0,.35)",padding:"12px 20px",borderRadius:8,backdropFilter:"blur(6px)",border:"1px solid rgba(245,215,142,.2)"}}>
                <div style={{fontFamily:"'Cinzel Decorative',serif",fontSize:"1.1rem",color:"#F5D78E",fontWeight:700}}>{v}</div>
                <div style={{fontFamily:"Lato,sans-serif",fontSize:".68rem",color:"rgba(245,215,142,.9)",letterSpacing:".12em",textTransform:"uppercase",marginTop:3}}>{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="pu" style={{position:"absolute",bottom:28,left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",alignItems:"center",gap:6,cursor:"pointer",zIndex:3}} onClick={()=>scrollTo("about")}>
          <span style={{fontFamily:"Lato,sans-serif",fontSize:".62rem",letterSpacing:".15em",color:"rgba(245,215,142,.5)",textTransform:"uppercase"}}>Scroll</span>
          <div style={{width:1,height:36,background:"linear-gradient(to bottom,rgba(245,215,142,.5),transparent)"}} />
        </div>
      </section>

      {/* PILLARS */}
      <div style={{background:"linear-gradient(135deg,#3B1F0A,#6B2D0A)"}}>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",maxWidth:1100,margin:"0 auto"}} className="g3">
          {[{i:"🙏",t:"Kayaka",s:"Work is Divine — every honest labour is worship"},{i:"🍽️",t:"Dasoha",s:"Selfless service — give freely of time and wealth"},{i:"☯️",t:"Prasada",s:"Sacred sharing — the fruit of work offered to all"}].map(({i,t,s})=>(
            <div key={t} style={{padding:"26px 20px",borderRight:"1px solid rgba(245,215,142,.1)",textAlign:"center"}}>
              <div style={{fontSize:26,marginBottom:8}}>{i}</div>
              <div style={{fontFamily:"'Cinzel Decorative',serif",fontSize:".75rem",color:"#F5D78E",marginBottom:6}}>{t}</div>
              <div style={{fontFamily:"Lato,sans-serif",fontSize:".78rem",color:"rgba(245,215,142,.85)",lineHeight:1.65}}>{s}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── ABOUT ── */}
      <section id="about" style={{padding:"88px clamp(16px,5vw,80px)",background:"#FDF6E3"}}>
        <div style={{maxWidth:1100,margin:"0 auto"}}>
          <SH tag="Who We Are" title="Basava Samithi of Australasia" sub="A Melbourne community rooted in 12th-century Sharana philosophy, living it in 21st-century Australia." />
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:48,marginTop:60,alignItems:"center"}} className="g2 rev">
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
              {["community_activity_image-4.jpg","community_activity_image-5.jpg","community_activity_image-6.jpg","community_activity_image-3.jpg"].map(f=>(
                <div key={f} className="zoom" style={{borderRadius:8,overflow:"hidden",aspectRatio:"4/3",boxShadow:"0 6px 24px rgba(93,58,30,.14)"}}>
                  <img src={f} alt="Community" style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}} />
                </div>
              ))}
            </div>
            <div>
              <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"1.2rem",color:"#5C3A1E",lineHeight:1.85,fontStyle:"italic",marginBottom:20}}>
                "Our inspiration and aspiration — to spread Basava Philosophy around the globe."
              </p>
              <p style={{fontFamily:"Lato,sans-serif",fontSize:".92rem",color:"#5C3A1E",lineHeight:1.9,marginBottom:14}}>
                Established in the late 1990s, BSOAA Melbourne Chapter is a non-profit organisation that preserves and promotes Sharana philosophy — a revolutionary 12th-century movement championing social equality, human dignity, and divine work.
              </p>
              <p style={{fontFamily:"Lato,sans-serif",fontSize:".92rem",color:"#5C3A1E",lineHeight:1.9,marginBottom:28}}>
                We are one of six chapters across Australasia — Sydney, Brisbane, Perth, Adelaide, New Zealand, and Singapore — united by Basavanna's teachings and the Anubhava Mantapa tradition.
              </p>
              <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
                <button className="btnS" onClick={()=>scrollTo("philosophy")}>Our Philosophy</button>
                <button className="btnO" onClick={()=>scrollTo("membership")}>Join the Samithi</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BASAVANNA FEATURE */}
      <section style={{background:"linear-gradient(160deg,#3B1F0A,#7B3F10)",padding:"80px clamp(16px,5vw,80px)",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",right:-80,top:"50%",transform:"translateY(-50%)",opacity:.055,pointerEvents:"none"}}>
          <img src="hero_section_background.png" alt="" style={{width:460}} />
        </div>
        <div style={{maxWidth:1100,margin:"0 auto",display:"grid",gridTemplateColumns:"260px 1fr",gap:56,alignItems:"center"}} className="g2">
          <div className="bob">
            <div style={{borderRadius:12,overflow:"hidden",boxShadow:"0 24px 64px rgba(0,0,0,.55)",border:"3px solid rgba(212,160,23,.35)"}}>
              <img src="hero_picture.jpg" alt="Basavanna" style={{width:"100%",display:"block",objectFit:"cover",aspectRatio:"3/4"}} />
            </div>
          </div>
          <div style={{position:"relative",zIndex:1}}>
            <div style={{fontFamily:"'Cinzel Decorative',serif",fontSize:".68rem",color:"#D4A017",letterSpacing:".18em",marginBottom:14}}>THE FOUNDER SAINT</div>
            <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(2rem,4vw,3rem)",color:"#F5D78E",marginBottom:16,lineHeight:1.2}}>Basavanna</h2>
            <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"1.15rem",color:"rgba(245,215,142,.82)",lineHeight:1.9,fontStyle:"italic",marginBottom:20}}>
              "The rich will make temples for Shiva. What shall I, a poor man, do? My legs are pillars, the body the shrine, the head a cupola of gold."
            </p>
            <p style={{fontFamily:"Lato,sans-serif",fontSize:".88rem",color:"rgba(245,215,142,.82)",lineHeight:1.85}}>
              12th-century statesman, poet, philosopher and social reformer. Founder of the Lingayat movement and the Anubhava Mantapa — the world's first recorded parliament of spiritual equals, held in Kalyana, Karnataka.
            </p>
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY — IMAGE CARDS ── */}
      <section id="philosophy" style={{padding:"96px clamp(16px,5vw,80px)",background:"#1A0F05",position:"relative",overflow:"hidden"}}>
        {/* Subtle background texture */}
        <div style={{position:"absolute",inset:0,backgroundImage:"radial-gradient(circle at 20% 50%, rgba(232,103,26,.06) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(212,160,23,.05) 0%, transparent 50%)",pointerEvents:"none"}} />

        <div style={{maxWidth:1200,margin:"0 auto",position:"relative",zIndex:1}}>
          {/* Section header — light on dark */}
          <div style={{textAlign:"center",marginBottom:64}} className="rev">
            <div style={{display:"inline-flex",alignItems:"center",gap:12,marginBottom:14}}>
              <div style={{height:1,width:40,background:"#D4A017",opacity:.5}} />
              <div style={{fontFamily:"Lato,sans-serif",fontSize:".68rem",fontWeight:700,color:"#8B6914",letterSpacing:".2em",textTransform:"uppercase"}}>Our Beliefs</div>
              <div style={{height:1,width:40,background:"#D4A017",opacity:.5}} />
            </div>
            <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(2rem,4.5vw,3.2rem)",color:"#F5D78E",lineHeight:1.15}}>Sharana Philosophy</h2>
            <p style={{fontFamily:"Lato,sans-serif",fontSize:".9rem",color:"rgba(245,215,142,.75)",marginTop:12,maxWidth:540,margin:"12px auto 0",lineHeight:1.7}}>
              A revolutionary spiritual movement from 12th-century Karnataka — radical, inclusive, and eternally relevant.<br/>
              <span style={{color:"rgba(245,215,142,.55)",fontSize:".8rem"}}>Hover over each card to explore</span>
            </p>
            <div style={{width:56,height:3,background:"linear-gradient(90deg,#E8671A,#D4A017)",margin:"18px auto 0",borderRadius:2}} />
          </div>

          {/* 3×2 image card grid */}
          <div className="philoGrid" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:22}}>
            {philosophyCards.map((card, idx) => (
              <PhiloCardAnimated key={card.title} card={card} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* ── VACHANAS ── */}
      <section id="vachanas" style={{padding:"88px clamp(16px,5vw,80px)",background:"linear-gradient(180deg,#3B1F0A,#5C2A08)",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",opacity:.05,pointerEvents:"none"}}>
          <img src="hero_section_background.png" alt="" style={{width:600}} />
        </div>
        <div style={{maxWidth:800,margin:"0 auto",position:"relative",zIndex:1,textAlign:"center"}}>
          <div style={{fontFamily:"'Cinzel Decorative',serif",fontSize:".7rem",letterSpacing:".2em",color:"#D4A017",marginBottom:12}}>SACRED WORDS</div>
          <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(2rem,4vw,3rem)",color:"#F5D78E"}}>Vachanas</h2>
          <div style={{width:56,height:2,background:"#D4A017",margin:"16px auto 48px"}} />
          <div key={vachanaIdx} style={{animation:"fu .6s ease"}}>
            <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(1.1rem,2.5vw,1.5rem)",color:"#F5D78E",lineHeight:1.9,fontStyle:"italic",marginBottom:24,padding:"0 clamp(0px,4vw,32px)"}}>
              "{vachanas[vachanaIdx].text}"
            </p>
            <div style={{fontFamily:"'Cinzel Decorative',serif",fontSize:".68rem",color:"#D4A017",letterSpacing:".12em"}}>— {vachanas[vachanaIdx].author}</div>
          </div>
          <div style={{display:"flex",justifyContent:"center",gap:10,marginTop:36}}>
            {vachanas.map((_,i)=>(
              <button key={i} className="nb" onClick={()=>setVachanaIdx(i)}
                style={{width:i===vachanaIdx?24:8,height:8,borderRadius:4,background:i===vachanaIdx?"#D4A017":"rgba(212,160,23,.22)",transition:"all .3s"}} />
            ))}
          </div>
          {/* Vachana book image */}
          <div style={{marginTop:56,display:"flex",justifyContent:"center"}}>
            <div style={{width:180,borderRadius:10,overflow:"hidden",boxShadow:"0 16px 48px rgba(0,0,0,.5)",border:"2px solid rgba(212,160,23,.3)"}}>
              <img src="vachana_image.jpg" alt="Vachana Book" style={{width:"100%",display:"block"}} />
            </div>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:14,marginTop:48}} className="g4">
            {["Basavanna","Akka Mahadevi","Allama Prabhu","Siddharama"].map(n=>(
              <div key={n} style={{padding:"16px 10px",background:"rgba(255,255,255,.05)",borderRadius:8,border:"1px solid rgba(212,160,23,.18)",textAlign:"center"}}>
                <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:".95rem",color:"#F5D78E",fontStyle:"italic",marginBottom:4}}>{n}</div>
                <div style={{fontFamily:"Lato,sans-serif",fontSize:".65rem",color:"rgba(245,215,142,.4)",letterSpacing:".07em"}}>12th Century Sharana</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EVENTS ── */}
      <section id="events" style={{padding:"88px clamp(16px,5vw,80px)",background:"#FDF6E3"}}>
        <div style={{maxWidth:1100,margin:"0 auto"}}>
          <SH tag="Calendar" title="Events & Gatherings" sub="Come celebrate, serve, and grow with our Melbourne family" />
          <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:26,marginTop:56}} className="g2">
            {events.map(ev=>(
              <div key={ev.title} className="evCard rev" style={{background:"#fff",borderRadius:12,overflow:"hidden",boxShadow:"0 4px 24px rgba(93,58,30,.1)"}}>
                {/* Clickable image — opens full invitation poster */}
                <div className="zoom" style={{height:210,overflow:"hidden",position:"relative",cursor:"pointer"}}
                  onClick={()=>setLightbox({file:ev.fullImg, caption:ev.title})}>
                  <img src={ev.img} alt={ev.title} style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"top",display:"block"}} />
                  {/* View full poster overlay hint */}
                  <div style={{
                    position:"absolute",inset:0,
                    background:"rgba(0,0,0,0)",
                    display:"flex",alignItems:"center",justifyContent:"center",
                    transition:"background .3s",
                  }}
                    onMouseEnter={e=>e.currentTarget.style.background="rgba(0,0,0,.35)"}
                    onMouseLeave={e=>e.currentTarget.style.background="rgba(0,0,0,0)"}
                  >
                    <div style={{
                      background:"rgba(232,103,26,.9)",color:"#fff",
                      padding:"8px 18px",borderRadius:20,
                      fontFamily:"Lato,sans-serif",fontSize:".75rem",fontWeight:700,
                      letterSpacing:".08em",textTransform:"uppercase",
                      opacity:0,transition:"opacity .3s",
                      pointerEvents:"none",
                    }}
                      className="viewHint"
                    >
                      View Full Invitation ↗
                    </div>
                  </div>
                </div>
                <div style={{padding:"22px 26px"}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:8,flexWrap:"wrap",gap:6}}>
                    <span style={{fontFamily:"Lato,sans-serif",fontSize:".7rem",fontWeight:700,color:"#E8671A",letterSpacing:".1em",textTransform:"uppercase"}}>{ev.tag}</span>
                    <span style={{fontFamily:"'Cormorant Garamond',serif",fontSize:".95rem",color:"#8B6914",fontStyle:"italic"}}>{ev.date} · {ev.day}</span>
                  </div>
                  <h3 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"1.35rem",color:"#3B1F0A",fontWeight:600,marginBottom:8}}>{ev.title}</h3>
                  <p style={{fontFamily:"Lato,sans-serif",fontSize:".85rem",color:"#8B6914",lineHeight:1.75,marginBottom:16}}>{ev.desc}</p>
                  <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
                    {ev.rsvp&&<a href={ev.rsvp} target="_blank" rel="noreferrer"><button className="btnS" style={{fontSize:".78rem",padding:"9px 20px"}}>RSVP Now</button></a>}
                    <button className="btnO" style={{fontSize:".78rem",padding:"8px 18px"}} onClick={()=>setLightbox({file:ev.fullImg,caption:ev.title})}>View Invitation</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section id="gallery" style={{padding:"88px clamp(16px,5vw,80px)",background:"#F0E6C8"}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <SH tag="Our Community" title="Photo Gallery" sub="Celebrations, gatherings, service, and joy — all in one family" />
          <div style={{columns:"clamp(160px,22vw,280px)",columnGap:14,marginTop:56}}>
            {galleryImages.map(({file,caption})=>(
              <div key={file} className="zoom rev" style={{marginBottom:14,borderRadius:8,overflow:"hidden",cursor:"pointer",breakInside:"avoid",boxShadow:"0 4px 16px rgba(93,58,30,.12)",transition:"box-shadow .3s"}}
                onClick={()=>setLightbox({file,caption})}>
                <img src={file} alt={caption} style={{width:"100%",display:"block"}} onError={e=>{e.target.parentElement.style.display="none";}} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RECOGNITION ── */}
      <section id="recognition" style={{padding:"88px clamp(16px,5vw,80px)",background:"linear-gradient(160deg,#3B1F0A,#6B2D0A)"}}>
        <div style={{maxWidth:1100,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:52}} className="rev">
            <div style={{display:"inline-flex",alignItems:"center",gap:12,marginBottom:14}}>
              <div style={{height:1,width:32,background:"#D4A017",opacity:.5}} />
              <div style={{fontFamily:"Lato,sans-serif",fontSize:".66rem",fontWeight:700,color:"#8B6914",letterSpacing:".18em",textTransform:"uppercase"}}>Honours & Milestones</div>
              <div style={{height:1,width:32,background:"#D4A017",opacity:.5}} />
            </div>
            <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(2rem,4vw,3rem)",color:"#F5D78E"}}>Global Recognition</h2>
            <div style={{width:52,height:3,background:"linear-gradient(90deg,#E8671A,#D4A017)",margin:"16px auto 0",borderRadius:2}} />
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:22}} className="g2">
            {recognitionImages.map(({file,caption})=>(
              <div key={file} className="zoom rev" style={{borderRadius:10,overflow:"hidden",position:"relative",cursor:"pointer",aspectRatio:"16/9",boxShadow:"0 8px 32px rgba(0,0,0,.4)",transition:"transform .3s,box-shadow .3s"}}
                onClick={()=>setLightbox({file,caption})}
                onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.02)";e.currentTarget.style.boxShadow="0 16px 48px rgba(0,0,0,.6)";}}
                onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";e.currentTarget.style.boxShadow="0 8px 32px rgba(0,0,0,.4)";}}>
                <img src={file} alt={caption} style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}} />
                <div style={{position:"absolute",bottom:0,left:0,right:0,padding:"20px 18px 14px",background:"linear-gradient(to top,rgba(59,31,10,.9),transparent)"}}>
                  <div style={{fontFamily:"Lato,sans-serif",fontSize:".82rem",color:"#F5D78E",fontWeight:700}}>{caption}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MEMBERSHIP ── */}
      <section id="membership" style={{padding:"88px clamp(16px,5vw,80px)",background:"#FDF6E3"}}>
        <div style={{maxWidth:960,margin:"0 auto"}}>
          <SH tag="Join Us" title="Become a Member" sub="Be part of Melbourne's Sharana community — all are welcome" />
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:28,marginTop:56}} className="g2">
            <div className="rev" style={{background:"#fff",borderRadius:12,padding:"34px 30px",boxShadow:"0 4px 24px rgba(93,58,30,.1)",border:"1px solid #F5D78E"}}>
              <div style={{fontFamily:"'Cinzel Decorative',serif",fontSize:".62rem",color:"#E8671A",letterSpacing:".12em",marginBottom:10}}>ANNUAL MEMBERSHIP</div>
              <div style={{display:"flex",alignItems:"flex-end",gap:4,marginBottom:4}}>
                <span style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"3.2rem",color:"#3B1F0A",lineHeight:1}}>$50</span>
                <span style={{fontFamily:"Lato,sans-serif",fontSize:".8rem",color:"#8B6914",paddingBottom:8}}>/year</span>
              </div>
              <div style={{width:36,height:2,background:"#E8671A",marginBottom:22}} />
              {["All year-round events & activities","Free cultural program participation","Monthly Mahamane invitations","Community newsletters & updates","Full voting rights in the Samithi"].map(b=>(
                <div key={b} style={{display:"flex",gap:10,marginBottom:11}}>
                  <span style={{color:"#E8671A",flexShrink:0,marginTop:1}}>✦</span>
                  <span style={{fontFamily:"Lato,sans-serif",fontSize:".86rem",color:"#5C3A1E",lineHeight:1.5}}>{b}</span>
                </div>
              ))}
              <a href="mailto:secretary.bsoamelbourne@gmail.com" style={{textDecoration:"none"}}>
                <button className="btnS" style={{width:"100%",marginTop:22}}>Become a Member</button>
              </a>
            </div>
            <div className="rev" style={{background:"linear-gradient(160deg,#3B1F0A,#6B2D0A)",borderRadius:12,padding:"34px 30px"}}>
              <div style={{fontFamily:"'Cinzel Decorative',serif",fontSize:".62rem",color:"#D4A017",letterSpacing:".12em",marginBottom:10}}>DASOHA — SELFLESS SERVICE</div>
              <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"1.8rem",color:"#F5D78E",fontStyle:"italic",marginBottom:10,lineHeight:1.2}}>Give Your Time</div>
              <div style={{width:36,height:2,background:"#D4A017",marginBottom:20}} />
              <p style={{fontFamily:"Lato,sans-serif",fontSize:".86rem",color:"rgba(245,215,142,.72)",lineHeight:1.85,marginBottom:22}}>
                Dasoha — selfless service — is the beating heart of our philosophy. Volunteer for events, cultural programs, or community service. All backgrounds welcome. Just a willing heart.
              </p>
              <img src="community_activity_image-8.jpg" alt="Dasoha" style={{width:"100%",borderRadius:8,height:150,objectFit:"cover",display:"block",marginBottom:22,opacity:.85}} />
              <a href="mailto:contact.bsoamelbourne@gmail.com" style={{textDecoration:"none"}}>
                <button className="btnOG" style={{width:"100%"}}>Get Involved</button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{padding:"88px clamp(16px,5vw,80px)",background:"#F0E6C8"}}>
        <div style={{maxWidth:1000,margin:"0 auto"}}>
          <SH tag="Get In Touch" title="Contact Us" sub="We'd love to hear from you — reach out anytime" />
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:48,marginTop:56,alignItems:"start"}} className="g2">
            <div className="rev">
              <img src="community_activity_image-5.jpg" alt="Team" style={{width:"100%",borderRadius:10,height:210,objectFit:"cover",display:"block",marginBottom:28,boxShadow:"0 8px 32px rgba(93,58,30,.14)"}} />
              <div style={{display:"flex",flexDirection:"column",gap:18}}>
                {[
                  {ic:"✉️",l:"General Enquiries",v:"contact.bsoamelbourne@gmail.com",h:"mailto:contact.bsoamelbourne@gmail.com"},
                  {ic:"📋",l:"Secretary",v:"secretary.bsoamelbourne@gmail.com",h:"mailto:secretary.bsoamelbourne@gmail.com"},
                  {ic:"📍",l:"Location",v:"Melbourne, Victoria, Australia",h:null},
                  {ic:"🌐",l:"Website",v:"bsoaamelbourne.org",h:"https://bsoaamelbourne.org"},
                ].map(({ic,l,v,h})=>(
                  <div key={l} style={{display:"flex",gap:14,alignItems:"flex-start"}}>
                    <div style={{width:40,height:40,background:"#fff",borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,flexShrink:0,border:"1px solid #F5D78E"}}>{ic}</div>
                    <div>
                      <div style={{fontFamily:"Lato,sans-serif",fontSize:".62rem",fontWeight:700,color:"#8B6914",letterSpacing:".1em",textTransform:"uppercase",marginBottom:2}}>{l}</div>
                      {h?<a href={h} style={{fontFamily:"Lato,sans-serif",fontSize:".88rem",color:"#E8671A",textDecoration:"none"}}>{v}</a>
                        :<div style={{fontFamily:"Lato,sans-serif",fontSize:".88rem",color:"#5C3A1E"}}>{v}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rev" style={{background:"#fff",borderRadius:12,padding:"34px 30px",boxShadow:"0 4px 24px rgba(93,58,30,.1)",border:"1px solid #F5D78E"}}>
              {formSent?(
                <div style={{textAlign:"center",padding:"40px 0"}}>
                  <div style={{fontSize:48,marginBottom:14}}>🙏</div>
                  <h4 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"1.5rem",color:"#3B1F0A",marginBottom:8}}>Namaskara!</h4>
                  <p style={{fontFamily:"Lato,sans-serif",color:"#8B6914"}}>Thank you for reaching out. We'll be in touch soon.</p>
                </div>
              ):(
                <form onSubmit={e=>{e.preventDefault();setFormSent(true);}} style={{display:"flex",flexDirection:"column",gap:14}}>
                  <h4 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"1.45rem",color:"#3B1F0A",marginBottom:4}}>Send a Message</h4>
                  <input className="iF" placeholder="Your Name" required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} />
                  <input className="iF" type="email" placeholder="Email Address" required value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
                  <textarea className="iF" placeholder="Your message..." rows={5} required value={form.message} onChange={e=>setForm({...form,message:e.target.value})} style={{resize:"vertical"}} />
                  <button type="submit" className="btnS">Send Message 🙏</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{background:"#2C1A0A",padding:"52px clamp(16px,5vw,80px) 28px"}}>
        <div style={{maxWidth:1100,margin:"0 auto"}}>
          <div style={{display:"grid",gridTemplateColumns:"2fr 1fr 1fr",gap:36,marginBottom:40}} className="g3">
            <div>
              <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:14}}>
                <img src="hero_section_background.png" alt="BSOAA" style={{width:38,height:38,objectFit:"contain",borderRadius:"50%"}} />
                <div style={{fontFamily:"'Cinzel Decorative',serif",fontSize:".7rem",color:"#D4A017",letterSpacing:".07em"}}>BSOAA Melbourne</div>
              </div>
              <p style={{fontFamily:"Lato,sans-serif",fontSize:".8rem",color:"rgba(245,215,142,.5)",lineHeight:1.8,maxWidth:290}}>
                A non-profit community established in the late 1990s, dedicated to spreading Sharana philosophy across Melbourne and Australasia.
              </p>
              <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:".95rem",color:"rgba(245,215,142,.35)",fontStyle:"italic",marginTop:14}}>"Work is the Abode of God"</div>
            </div>
            <div>
              <div style={{fontFamily:"'Cinzel Decorative',serif",fontSize:".6rem",color:"#D4A017",letterSpacing:".12em",marginBottom:14}}>QUICK LINKS</div>
              {navLinks.map(({label,id})=>(
                <button key={id} className="nb" onClick={()=>scrollTo(id)} style={{display:"block",fontFamily:"Lato,sans-serif",fontSize:".8rem",color:"rgba(245,215,142,.45)",marginBottom:9,letterSpacing:".04em",textAlign:"left",padding:0}}>{label}</button>
              ))}
            </div>
            <div>
              <div style={{fontFamily:"'Cinzel Decorative',serif",fontSize:".6rem",color:"#D4A017",letterSpacing:".12em",marginBottom:14}}>CONTACT</div>
              {["contact.bsoamelbourne@gmail.com","secretary.bsoamelbourne@gmail.com","Melbourne, Victoria, Australia"].map(v=>(
                <div key={v} style={{fontFamily:"Lato,sans-serif",fontSize:".8rem",color:"rgba(245,215,142,.45)",marginBottom:9,lineHeight:1.5}}>{v}</div>
              ))}
            </div>
          </div>
          <div style={{borderTop:"1px solid rgba(245,215,142,.08)",paddingTop:22,display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:10}}>
            <div style={{fontFamily:"Lato,sans-serif",fontSize:".72rem",color:"rgba(245,215,142,.25)"}}>© 2025 Basava Samithi of Australasia Inc — Melbourne Chapter · Non-Profit Organisation</div>
            <div style={{fontFamily:"Lato,sans-serif",fontSize:".72rem",color:"rgba(245,215,142,.25)"}}>Proudly supported by the Victorian Multicultural Commission</div>
          </div>
        </div>
      </footer>

      {/* LIGHTBOX */}
      {lightbox&&(
        <div onClick={()=>setLightbox(null)} style={{position:"fixed",inset:0,zIndex:3000,background:"rgba(0,0,0,.95)",display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",cursor:"pointer",overflowY:"auto"}}>
          <div style={{maxWidth:600,width:"100%",textAlign:"center",margin:"auto"}} onClick={e=>e.stopPropagation()}>
            <img src={lightbox.file} alt={lightbox.caption} style={{width:"100%",borderRadius:10,display:"block",boxShadow:"0 20px 60px rgba(0,0,0,.7)",maxHeight:"85vh",objectFit:"contain"}} />
            <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"1.1rem",color:"#F5D78E",marginTop:16,fontStyle:"italic"}}>{lightbox.caption}</div>
            <button onClick={()=>setLightbox(null)} style={{marginTop:14,background:"rgba(255,255,255,.1)",border:"1px solid rgba(255,255,255,.2)",color:"#F5D78E",padding:"8px 24px",borderRadius:4,cursor:"pointer",fontFamily:"Lato,sans-serif",fontSize:".85rem"}}>Close ✕</button>
          </div>
        </div>
      )}
    </div>
  );
}

/* Animated philosophy card with intersection observer */
function PhiloCardAnimated({ card, index }) {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => setVisible(true), index * 120);
      }
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [index]);

  // On mobile, always treat as "hovered" so text is always visible
  const active = isMobile ? true : hovered;

  return (
    <div
      ref={ref}
      onMouseEnter={() => !isMobile && setHovered(true)}
      onMouseLeave={() => !isMobile && setHovered(false)}
      style={{
        position: "relative",
        borderRadius: 14,
        overflow: "hidden",
        cursor: "pointer",
        aspectRatio: isMobile ? "4/3" : "3/4",
        opacity: visible ? 1 : 0,
        transform: visible
          ? hovered && !isMobile ? "translateY(-12px) scale(1.025)" : "translateY(0) scale(1)"
          : "translateY(50px) scale(0.96)",
        boxShadow: hovered && !isMobile
          ? `0 32px 64px rgba(0,0,0,.55), 0 0 0 2px ${card.accent}`
          : "0 8px 32px rgba(0,0,0,.35)",
        transition: visible
          ? `opacity .6s ease, transform ${hovered && !isMobile ? ".45s cubic-bezier(.34,1.56,.64,1)" : ".45s ease"}, box-shadow .4s ease`
          : "opacity .6s ease, transform .6s ease",
      }}
    >
      {/* BG image */}
      <img
        src={card.img}
        alt={card.title}
        style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          objectFit: "cover", display: "block",
          transform: hovered && !isMobile ? "scale(1.13)" : "scale(1)",
          transition: "transform .75s cubic-bezier(.25,.46,.45,.94)",
        }}
      />

      {/* Gradient overlay — always strong on mobile */}
      <div style={{
        position: "absolute", inset: 0,
        background: active
          ? "linear-gradient(to top, rgba(26,8,0,.97) 0%, rgba(26,8,0,.78) 45%, rgba(0,0,0,.2) 100%)"
          : "linear-gradient(to top, rgba(26,8,0,.94) 0%, rgba(26,8,0,.45) 55%, rgba(0,0,0,.08) 100%)",
        transition: "background .45s ease",
      }} />

      {/* Top accent bar */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0,
        height: active ? 5 : 3,
        background: `linear-gradient(90deg, ${card.accent}, #D4A017, ${card.accent})`,
        transition: "height .3s ease",
        boxShadow: active ? `0 2px 12px ${card.accent}88` : "none",
      }} />

      {/* Content */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "clamp(14px,2.5vw,26px)" }}>

        {/* Subtitle — always visible on mobile */}
        <div style={{
          fontFamily: "Lato, sans-serif", fontSize: ".65rem", fontWeight: 700,
          letterSpacing: ".14em", textTransform: "uppercase",
          color: "#D4A017", marginBottom: 8,
          opacity: active ? 1 : 0,
          transform: active ? "translateY(0)" : "translateY(10px)",
          transition: "all .35s ease .05s",
        }}>
          {card.subtitle}
        </div>

        {/* Title — always visible */}
        <h3 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(1.1rem,2vw,1.55rem)",
          fontWeight: 600, color: "#F5D78E", lineHeight: 1.2,
          marginBottom: active ? 12 : 8,
          transition: "margin .35s ease",
        }}>
          {card.title}
        </h3>

        {/* Divider */}
        <div style={{
          width: active ? 44 : 20, height: 2,
          background: `linear-gradient(90deg, ${card.accent}, #D4A017)`,
          marginBottom: active ? 14 : 0,
          transition: "all .4s ease", borderRadius: 2,
        }} />

        {/* Body — always visible on mobile */}
        <div style={{
          overflow: "hidden",
          maxHeight: active ? 200 : 0,
          opacity: active ? 1 : 0,
          transition: "max-height .45s cubic-bezier(.25,.46,.45,.94) .05s, opacity .35s ease .05s",
        }}>
          <p style={{
            fontFamily: "Lato, sans-serif",
            fontSize: "clamp(.76rem,1.1vw,.88rem)",
            color: "rgba(253,246,227,.85)",
            lineHeight: 1.75, paddingTop: 2,
          }}>
            {card.body}
          </p>
        </div>
      </div>

      {/* Number badge — hidden on mobile, hides on hover on desktop */}
      {!isMobile && (
        <div style={{
          position: "absolute", top: 14, right: 14,
          width: 34, height: 34, borderRadius: "50%",
          background: "rgba(253,246,227,.1)",
          border: "1px solid rgba(245,215,142,.25)",
          backdropFilter: "blur(4px)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: "'Cinzel Decorative', serif", fontSize: ".6rem",
          color: "rgba(245,215,142,.65)",
          opacity: hovered ? 0 : 1,
          transition: "opacity .3s ease",
        }}>
          {String(index + 1).padStart(2, "0")}
        </div>
      )}
    </div>
  );
}

function SH({ tag, title, sub }) {
  return (
    <div style={{ textAlign: "center" }} className="rev">
      <div style={{ display: "inline-flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
        <div style={{ height: 1, width: 32, background: "#D4A017", opacity: .5 }} />
        <div style={{ fontFamily: "Lato,sans-serif", fontSize: ".66rem", fontWeight: 700, color: "#8B6914", letterSpacing: ".18em", textTransform: "uppercase" }}>{tag}</div>
        <div style={{ height: 1, width: 32, background: "#D4A017", opacity: .5 }} />
      </div>
      <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(1.8rem,4vw,3rem)", color: "#3B1F0A", lineHeight: 1.2 }}>{title}</h2>
      {sub && <p style={{ fontFamily: "Lato,sans-serif", fontSize: ".95rem", color: "#4A2810", marginTop: 12, lineHeight: 1.8, maxWidth: 680, margin: "12px auto 0", fontWeight:400 }}>{sub}</p>}
      <div style={{ width: 52, height: 3, background: "linear-gradient(90deg,#E8671A,#D4A017)", margin: "16px auto 0", borderRadius: 2 }} />
    </div>
  );
}
