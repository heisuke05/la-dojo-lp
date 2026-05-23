import Image from "next/image";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "80px 24px 100px",
        position: "relative",
        overflow: "visible",
        background:
          "radial-gradient(ellipse 110% 80% at 50% 5%, #261F10 0%, #14110C 50%, #0A0806 100%)",
      }}
    >
      {/* Radial glow layers */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "800px",
            height: "800px",
            background:
              "radial-gradient(circle, rgba(192,144,64,0.10) 0%, transparent 65%)",
            borderRadius: "50%",
          }}
          className="anim-pulse-glow"
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "400px",
            height: "400px",
            background:
              "radial-gradient(circle, rgba(221,185,106,0.16) 0%, transparent 60%)",
            borderRadius: "50%",
          }}
        />
      </div>

      {/* Rotating ray ring */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          pointerEvents: "none",
          opacity: 0.06,
          overflow: "hidden",
        }}
        className="anim-slow-spin"
      >
        <svg viewBox="0 0 600 600" width="600" height="600">
          {Array.from({ length: 24 }, (_, i) => {
            const angle = (i * 360) / 24;
            const rad = (angle * Math.PI) / 180;
            const x2 = 300 + 290 * Math.cos(rad);
            const y2 = 300 + 290 * Math.sin(rad);
            return (
              <line
                key={i}
                x1="300"
                y1="300"
                x2={x2}
                y2={y2}
                stroke="#DDB96A"
                strokeWidth={i % 3 === 0 ? "1.5" : "0.6"}
              />
            );
          })}
          <circle cx="300" cy="300" r="289" fill="none" stroke="#DDB96A" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Content */}
      <div style={{ position: "relative", maxWidth: "860px", width: "100%" }}>

        {/* Logo + Center name */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "52px",
          }}
          className="anim-fade-up"
        >
          <Image
            src="/logo_w.png"
            alt="World Divine Light Organization Logo"
            width={200}
            height={100}
            style={{
              objectFit: "contain",
              filter: "brightness(0) invert(1) sepia(1) saturate(2) hue-rotate(5deg) brightness(0.85)",
              opacity: 0.92,
              marginBottom: "20px",
            }}
            priority
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              fontSize: "0.68rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#C09040",
              fontFamily: "var(--font-inter)",
            }}
          >
            <span style={{ display: "block", width: "28px", height: "1px", background: "#C09040" }} />
            Los Angeles Spiritual Center
            <span style={{ display: "block", width: "28px", height: "1px", background: "#C09040" }} />
          </div>
        </div>

        {/* Eyebrow */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "14px",
            fontSize: "0.65rem",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#7A6840",
            marginBottom: "24px",
            fontFamily: "var(--font-inter)",
          }}
          className="anim-fade-up anim-delay-1"
        >
          World Divine Light Organization
        </div>

        {/* Main headline */}
        <h1
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(2.6rem, 6vw, 5rem)",
            fontWeight: 400,
            lineHeight: 1.15,
            color: "#F5EDD5",
            marginBottom: "28px",
            letterSpacing: "-0.01em",
          }}
          className="anim-fade-up anim-delay-2"
        >
          A{" "}
          <em
            className="gold-shimmer"
            style={{ fontStyle: "italic", paddingRight: "0.12em" }}
          >
            Light from God
          </em>
          <br />
          for All of Humanity
        </h1>

        {/* Tagline */}
        <p
          style={{
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            color: "#B8A070",
            lineHeight: 1.85,
            maxWidth: "600px",
            margin: "0 auto 52px",
            fontFamily: "var(--font-inter)",
            fontWeight: 300,
          }}
          className="anim-fade-up anim-delay-3"
        >
          Discover the Art of Divine Light — a sacred practice that purifies the
          soul, elevates the spirit, and opens the path toward a world of true
          harmony.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
          className="anim-fade-up anim-delay-4"
        >
          <a href="#practice" className="btn-gold-solid">
            Discover the Practice
          </a>
          <a href="#contact" className="btn-gold">
            Visit the Center
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          opacity: 0.45,
        }}
      >
        <span
          style={{
            fontSize: "0.6rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#C09040",
            fontFamily: "var(--font-inter)",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: "1px",
            height: "48px",
            background: "linear-gradient(to bottom, #C09040, transparent)",
          }}
        />
      </div>
    </section>
  );
}
