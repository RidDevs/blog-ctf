export default function About() {
  const name = "Priyam";
  const dob = "2003";
  

  const key = `${name}+${dob}`;

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px",
        background:
          "linear-gradient(160deg, #003ab0 0%, #060f4a 50%, #00061f 100%)",
        color: "white",
        fontFamily: "Arial, sans-serif",
        maxWidth: "100%",
        margin: "0 auto"
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
        About Me
      </h1>

      <p style={{ fontSize: "1.2rem", lineHeight: "1.8" }}>
        Hi, I'm Priyam. I was born in 2003 and have always been curious about how
        systems work beneath the surface. That curiosity eventually turned into
        a deep interest in cybersecurity, ethical hacking, and digital
        forensics.
      </p>

      <p style={{ fontSize: "1.2rem", marginTop: "20px", lineHeight: "1.8" }}>
        I enjoy exploring vulnerabilities, studying attack vectors, and
        understanding how small details can reveal much bigger truths. In
        security, the smallest piece of information can unlock everything.
      </p>

      <p style={{ fontSize: "1.2rem", marginTop: "20px", lineHeight: "1.8" }}>
        Sometimes the answer is personal.  
        Sometimes you need to add it up.  
        Find the answer and you're let in.
      </p>

      <div
        className="hero-image-wrap"
        style={{ position: "relative", overflow: "hidden", marginTop: "40px" }}
      >
        <img
          src="/images/3.jpg"
          alt="Cybersecurity workspace"
          style={{
            width: "70%",
            height: "70%",
            objectFit: "cover",
            objectPosition: "center",
            borderRadius: "8px"
          }}
        />
      </div>
    </div>
  );
}