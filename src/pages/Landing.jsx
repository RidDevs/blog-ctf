const tags = ["Music", "Vanguard Visionaries"];

const paragraphs = [
  `There's a compelling case that Daft Punk stand as the most influential musical act of the 21st century. Long before EDM dominated global charts, the French duo had already become icons within dance music during the mid-to-late '90s. Their tracks blended irresistible funk riffs, authentic house grooves, and meticulous production with a raw, almost rebellious edge that justified the "punk" in their name.`,
  `Thomas Bangalter and Guy-Manuel de Homem-Christo hardly fit the image of future dance megastars. They were reserved, slightly scruffy teenagers from suburban Paris who stumbled into electronic production out of curiosity rather than ambition. Yet those early experiments quickly plugged them into the global rave underground. Their first records appeared on Soma, the Glasgow label co-founded by techno heavyweights Slam. A now-legendary 1996 video shows them performing at the fiercely independent Even Furthur rave in the United States—still maskless, still unknown. Even after achieving worldwide fame, their closest collaborators remained rooted in club culture, working alongside figures like Armand Van Helden in New York, DJ Sneak in Chicago, and Basement Jaxx in the UK.`,
  `Bangalter, however, did have a subtle connection to the music business. His father, Daniel Vangarde, was a respected disco producer and songwriter. Though Thomas hadn't planned to follow in his footsteps, that background likely sharpened the duo's instincts—not only for groove and melody but also for navigating the industry and shaping their public image. By the time they released Discovery in 2001, they weren't just refining dance music—they were reshaping pop culture itself.`,
  `The album's huge hooks and pop sensibility helped lay the groundwork for a generation of global stars, from fellow French artists like David Guetta and Justice to international names such as Calvin Harris, Martin Garrix, and Disclosure. Yet Daft Punk themselves avoided settling into predictable EDM bombast. Instead, they pivoted toward refined musicianship with Random Access Memories, collaborating with legends like Pharrell Williams and Nile Rodgers and reaching even greater commercial heights.`,
  `Although they officially announced their split in 2021, their presence hasn't faded. Reissues like the "Drumless Edition" of Random Access Memories and special vinyl editions of Discovery, along with cinema screenings of Interstella 5555—their anime collaboration with Leiji Matsumoto—have kept their legacy alive and vivid.`,
  `More importantly, their influence is woven into the fabric of contemporary music. Amid the helmets, spectacle, and myth-making, it's easy to overlook a simple truth: Daft Punk were an exceptional band. That's why this playlist exists—not as a definitive retrospective, but as a celebration. Structured like a DJ set, it moves through peaks of intensity, stretches of relentless groove, and moments of emotional lift, honoring both their roots in dance culture and the timeless magic of their sound.`,
];

const placeholderImages = [
  "Early Days",
  "Club Culture",
  "Discovery Era",
  "Random Access Memories",
  "Legacy",
];

export default function ArticlePage() {
  return (
    <div style={{ fontFamily: "'Barlow', sans-serif", minHeight: "100vh", background: "linear-gradient(160deg, #003ab0 0%, #060f4a 50%, #00061f 100%)", color: "#0a0a0a" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,400;0,700;1,400&family=Barlow+Condensed:wght@700;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-24px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .hero-text { animation: fadeInLeft 0.7s ease both; }
        .hero-image-wrap { animation: fadeIn 0.9s ease 0.1s both; }
        @media (max-width: 768px) {
          .hero { grid-template-columns: 1fr !important; max-height: none !important; }
          .hero-image-wrap { height: 60vw !important; }
        }
      `}</style>

    

    
      <nav style={{
        background: "#000", display: "flex", alignItems: "center",
        justifyContent: "space-between", padding: "0 2rem", height: 56,
        position: "sticky", top: 0, zIndex: 100,
      }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{
            fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900,
            fontSize: "1.6rem", letterSpacing: "0.18em", textTransform: "uppercase",
            background: "linear-gradient(90deg, #00e676 0%, #fff 60%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            paddingRight: "0.1em",
          }}>Priyam</span>
          <span style={{
            display: "inline-block", width: 6, height: 6, borderRadius: "50%",
            background: "#00e676", marginLeft: 2, marginBottom: 2, verticalAlign: "middle",
          }} />
        </div>
        {/*<div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          {[["About Me", "/about"], ["Login", "/login"]].map(([label, href]) => (
            <a key={label} href={href} style={{
              color: "#fff", textDecoration: "none", fontSize: "0.8rem",
              fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
            }}>{label}</a>
          ))}
        </div>
        */}
      </nav>

  



      <section className="hero" style={{
        display: "grid", gridTemplateColumns: "42% 58%",
        minHeight: "calc(100vh - 56px)", maxHeight: 720,
      }}>
        <div className="hero-text" style={{
          padding: "3.5rem 3rem 3rem", background: "rgba(255,255,255,0.1)",
          backdropFilter: "blur(12px)",
          display: "flex", flexDirection: "column", justifyContent: "flex-start",
        }}>
          <h1 style={{
            fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900,
            fontSize: "clamp(2.2rem, 4vw, 3.2rem)", lineHeight: 1.05,
            letterSpacing: "-0.01em", marginBottom: "2.2rem", color: "#fff",
          }}>
            A Deep Dive Into Daft Punk's Legacy and Lasting Musical Brilliance
          </h1>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {tags.map(tag => (
              <span key={tag} style={{
                background: "#00e676", color: "#0a0a0a", fontSize: "0.72rem",
                fontWeight: 700, padding: "0.3rem 0.85rem", borderRadius: 999,
                letterSpacing: "0.03em", textTransform: "uppercase",
              }}>{tag}</span>
            ))}
          </div>
        </div>

        <div className="hero-image-wrap" style={{ position: "relative", overflow: "hidden" }}>
          <img src="./images/1.jpg" alt="Article Cover" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }} />
        </div>
      </section>

      


      <div style={{ maxWidth: 720, margin: "0 auto", padding: "3rem 2rem 5rem", borderTop: "1px solid rgba(255,255,255,0.15)" }}>
        {paragraphs.map((para, i) => (
          <div key={i}>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.85, color: "#e8eaf6", marginBottom: "2rem" }}>
              {para}
            </p>
            {i < paragraphs.length - 1 && (
              <div style={{ display: "flex", justifyContent: "center", marginBottom: "2.5rem" }}>
                <img
                  src={`./images/${i + 2}.jpg`}
                  alt={placeholderImages[i]}
                  style={{ width: "100%", maxWidth: 560, height: 300, objectFit: "cover", borderRadius: 10, display: "block" }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    




      <nav style={{
        background: "#000", display: "flex", alignItems: "center",
        justifyContent: "center", gap: "3rem", padding: "0 2rem", height: 56,
      }}>
        <span style={{ color: "#888", fontSize: "0.78rem", letterSpacing: "0.05em", fontStyle: "italic" }}>
          THINK IN THE BOX TO FIND THE FLAG
        </span>
      </nav>
    </div>
  );
}
