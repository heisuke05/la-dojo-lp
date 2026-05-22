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
        padding: "140px 24px 100px",
        position: "relative",
        overflow: "hidden",
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
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "34%",
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
            top: "34%",
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
          top: "34%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          pointerEvents: "none",
          opacity: 0.07,
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

      {/* Central emblem */}
      <div
        style={{ position: "relative", marginBottom: "52px" }}
        className="anim-fade-up"
      >
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <circle cx="40" cy="40" r="18" fill="none" stroke="#C09040" strokeWidth="1.5" />
          <circle cx="40" cy="40" r="7" fill="#C09040" opacity="0.9" />
          {Array.from({ length: 16 }, (_, i) => {
            const angle = (i * 360) / 16;
            const rad = (angle * Math.PI) / 180;
            const len = i % 2 === 0 ? 35 : 25;
            return (
              <line
                key={i}
                x1="40"
                y1="40"
                x2={40 + len * Math.cos(rad)}
                y2={40 + len * Math.sin(rad)}
                stroke="#C09040"
                strokeWidth={i % 2 === 0 ? "1.2" : "0.6"}
                opacity={i % 2 === 0 ? "0.95" : "0.45"}
              />
            );
          })}
          <circle cx="40" cy="40" r="36" fill="none" stroke="#C09040" strokeWidth="0.5" opacity="0.3" />
        </svg>
      </div>

      {/* Content */}
      <div style={{ position: "relative", maxWidth: "860px" }}>
        {/* Eyebrow */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "14px",
            fontSize: "0.68rem",
            letterSpacing: "0.30em",
            textTransform: "uppercase",
            color: "#C09040",
            marginBottom: "28px",
            fontFamily: "var(--font-inter)",
          }}
          className="anim-fade-up anim-delay-1"
        >
          <span
            style={{
              display: "block",
              width: "32px",
              height: "1px",
              background: "#C09040",
            }}
          />
          World Divine Light Organization · Los Angeles
          <span
            style={{
              display: "block",
              width: "32px",
              height: "1px",
              background: "#C09040",
            }}
          />
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
            style={{ fontStyle: "italic" }}
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
            Visit the Dojo
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
            background:
              "linear-gradient(to bottom, #C09040, transparent)",
          }}
        />
      </div>
    </section>
  );
}
