import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Divine Light Basic Seminar — World Divine Light Organization",
  description:
    "Join the 3-Day Divine Light Basic Seminar and discover the Art of Divine Light. Learn how to purify the soul, elevate the spirit, and embrace a life of unconditional love.",
};

/* ─── Leaf SVG Divider ─── */
function LeafDivider({ color = "#C9A86C" }: { color?: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", margin: "0 auto 32px" }}>
      <span style={{ display: "block", width: "48px", height: "1px", background: color, opacity: 0.5 }} />
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6 8 4 14 12 22C20 14 18 8 12 2Z" fill={color} opacity="0.7" />
        <line x1="12" y1="22" x2="12" y2="10" stroke={color} strokeWidth="1" opacity="0.5" />
      </svg>
      <span style={{ display: "block", width: "48px", height: "1px", background: color, opacity: 0.5 }} />
    </div>
  );
}

/* ─── Day Schedule Card ─── */
function DayCard({
  day,
  title,
  items,
  highlight,
}: {
  day: string;
  title?: string;
  items: string[];
  highlight?: boolean;
}) {
  return (
    <div
      style={{
        background: highlight ? "#7D5A4F" : "#FFFFFF",
        borderRadius: "16px",
        padding: "32px 28px",
        boxShadow: "0 4px 24px rgba(125,90,79,0.10)",
        flex: 1,
        minWidth: "260px",
      }}
    >
      <div
        style={{
          fontSize: "0.65rem",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: highlight ? "#F5D9C8" : "#9B7060",
          marginBottom: "6px",
          fontFamily: "var(--font-inter)",
          fontWeight: 500,
        }}
      >
        {day}
      </div>
      {title && (
        <div
          style={{
            fontSize: "0.8rem",
            fontWeight: 700,
            letterSpacing: "0.10em",
            textTransform: "uppercase",
            color: highlight ? "#FDEAE0" : "#7D5A4F",
            marginBottom: "20px",
            fontFamily: "var(--font-inter)",
          }}
        >
          {title}
        </div>
      )}
      {!title && <div style={{ marginBottom: "20px" }} />}
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
        {items.map((item) => (
          <li
            key={item}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "10px",
              fontSize: "0.88rem",
              color: highlight ? "#FDEAE0" : "#4A3728",
              lineHeight: 1.55,
              fontFamily: "var(--font-inter)",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: highlight ? "#F5C4A8" : "#C9A86C",
                marginTop: "7px",
                flexShrink: 0,
              }}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─── Course Card ─── */
function CourseCard({
  level,
  label,
  description,
}: {
  level: string;
  label: string;
  description: string;
}) {
  return (
    <div
      style={{
        background: "#FFFFFF",
        borderRadius: "16px",
        padding: "36px 28px",
        boxShadow: "0 4px 28px rgba(125,90,79,0.08)",
        flex: 1,
        minWidth: "240px",
        borderTop: "3px solid #C9A86C",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
      className="card-hover"
    >
      <div
        style={{
          fontSize: "0.6rem",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "#C9A86C",
          marginBottom: "8px",
          fontFamily: "var(--font-inter)",
          fontWeight: 600,
        }}
      >
        {level}
      </div>
      <div
        style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "1.4rem",
          color: "#4A3728",
          marginBottom: "16px",
        }}
      >
        {label}
      </div>
      <p
        style={{
          fontSize: "0.88rem",
          color: "#7A5A4A",
          lineHeight: 1.8,
          fontFamily: "var(--font-inter)",
          margin: 0,
        }}
      >
        {description}
      </p>
    </div>
  );
}

export default function SeminarPage() {
  return (
    <main
      style={{
        background: "#FAF5F0",
        color: "#4A3728",
        fontFamily: "var(--font-inter)",
        overflowX: "hidden",
      }}
    >
      {/* ═══════════════ HERO ═══════════════ */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        {/* Background image */}
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=85"
          alt="Peaceful sunrise over calm water"
          fill
          unoptimized
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
        />
        {/* Warm overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(160deg, rgba(250,245,240,0.82) 0%, rgba(200,155,110,0.55) 50%, rgba(125,90,79,0.65) 100%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "780px",
            padding: "100px 24px",
            width: "100%",
          }}
        >
          {/* Logo */}
          <div style={{ marginBottom: "32px" }}>
            <Image
              src="/logo_w.png"
              alt="World Divine Light Organization"
              width={160}
              height={80}
              style={{
                width: "160px",
                height: "auto",
                objectFit: "contain",
                filter: "brightness(0) saturate(100%) invert(22%) sepia(30%) saturate(500%) hue-rotate(340deg) brightness(90%)",
                opacity: 0.85,
              }}
            />
          </div>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              fontSize: "0.65rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#7D5A4F",
              marginBottom: "20px",
            }}
          >
            <span style={{ width: "24px", height: "1px", background: "#7D5A4F", display: "block" }} />
            World Divine Light Organization
            <span style={{ width: "24px", height: "1px", background: "#7D5A4F", display: "block" }} />
          </div>

          <h1
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
              fontWeight: 400,
              lineHeight: 1.15,
              color: "#3A2518",
              marginBottom: "24px",
              letterSpacing: "-0.01em",
            }}
          >
            Divine Light
            <br />
            <em style={{ fontStyle: "italic", color: "#7D5A4F" }}>Basic Seminar</em>
          </h1>

          <p
            style={{
              fontSize: "clamp(1rem, 2vw, 1.15rem)",
              color: "#5A3D2E",
              lineHeight: 1.9,
              maxWidth: "560px",
              margin: "0 auto 48px",
              fontWeight: 300,
            }}
          >
            A transformative 3-day journey into the Art of Divine Light —
            purifying the soul, elevating the spirit, and opening the path
            toward a life of unconditional love and inner harmony.
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="#seminar-info"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "15px 40px",
                background: "#7D5A4F",
                color: "#FAF5F0",
                fontSize: "0.78rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                textDecoration: "none",
                borderRadius: "4px",
                fontWeight: 500,
                transition: "background 0.25s",
                minHeight: "52px",
              }}
            >
              Seminar Details
            </a>
            <a
              href="#schedule"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "15px 40px",
                background: "transparent",
                color: "#4A2E1E",
                border: "1.5px solid #7D5A4F",
                fontSize: "0.78rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                textDecoration: "none",
                borderRadius: "4px",
                fontWeight: 500,
                transition: "background 0.25s",
                minHeight: "52px",
              }}
            >
              View Schedule
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "36px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            opacity: 0.6,
          }}
        >
          <span style={{ fontSize: "0.58rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#7D5A4F" }}>
            Scroll
          </span>
          <div style={{ width: "1px", height: "44px", background: "linear-gradient(to bottom, #7D5A4F, transparent)" }} />
        </div>
      </section>

      {/* ═══════════════ PURPOSE ═══════════════ */}
      <section
        style={{
          padding: "100px 24px",
          background: "#FAF5F0",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div
            style={{
              fontSize: "0.62rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#C9A86C",
              marginBottom: "12px",
              fontWeight: 600,
            }}
          >
            Our Organization
          </div>
          <h2
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(1.9rem, 4vw, 3rem)",
              fontWeight: 400,
              color: "#3A2518",
              lineHeight: 1.3,
              marginBottom: "24px",
            }}
          >
            What is the Purpose of the
            <br />
            <em style={{ fontStyle: "italic", color: "#7D5A4F" }}>Divine Light Seminar?</em>
          </h2>
          <LeafDivider />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "48px",
            alignItems: "start",
          }}
        >
          {/* Image */}
          <div
            style={{
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 12px 48px rgba(125,90,79,0.15)",
              aspectRatio: "4/5",
              position: "relative",
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=800&q=85"
              alt="Person in peaceful meditation at sunrise"
              fill
              unoptimized
              style={{ objectFit: "cover", objectPosition: "center top" }}
            />
          </div>

          {/* Text */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {[
              "Humanity has embarked on a new chapter within God's Divine Plan. The World Divine Light Organization (Sekai Mahikari Bunemi Kyodan) places significant emphasis on spiritual principles, guiding individuals towards embodying the essence of \"people of light\" who are destined to thrive in the forthcoming era of an enlightened civilization.",
              "The Divine Light Civilization is the sum of individuals living in harmony with the laws and principles of God. The expression of their divine nature in every moment is the hallmark of humanity in this new age.",
              "As children of God, our divinity shines through as our thoughts, words, and deeds are elevated to higher levels of God's unconditional love.",
              "By practicing the Art of Divine Light, cultivating unconditional altruistic love, and dedicating our talents to the service of God and others, we establish the foundation for a Divine Light Civilization.",
            ].map((text, i) => (
              <p
                key={i}
                style={{
                  fontSize: "0.95rem",
                  color: "#5A3D2E",
                  lineHeight: 1.9,
                  margin: 0,
                }}
              >
                {text}
              </p>
            ))}
            <p
              style={{
                fontSize: "0.88rem",
                color: "#8B6A58",
                lineHeight: 1.85,
                borderLeft: "3px solid #C9A86C",
                paddingLeft: "16px",
                margin: "4px 0 0",
                fontStyle: "italic",
              }}
            >
              To embody the essence of &quot;people of light,&quot; Kamikumite devote themselves to training
              their souls, minds, and bodies, with the aim of elevating the vibration of their innermost
              mind, known as SONEN.
            </p>
            <p style={{ fontSize: "0.82rem", color: "#9B7060", lineHeight: 1.75, margin: 0 }}>
              Our spiritual training system comprises three levels: basic, intermediate, and advanced.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════ MISSION ═══════════════ */}
      <section
        style={{
          background: "#7D5A4F",
          padding: "100px 24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative circle */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-120px",
            width: "480px",
            height: "480px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.03)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "-80px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.03)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: "860px", margin: "0 auto", position: "relative" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div
              style={{
                fontSize: "0.62rem",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#F5C4A8",
                marginBottom: "12px",
                fontWeight: 600,
              }}
            >
              Our Calling
            </div>
            <h2
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(1.9rem, 4vw, 3rem)",
                fontWeight: 400,
                color: "#FFF5EE",
                lineHeight: 1.3,
                marginBottom: "24px",
              }}
            >
              Mission Statement
            </h2>
            <LeafDivider color="#F5C4A8" />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {[
              "This organization respectfully worships MOTOSUOHOKAMI, the Creator of heaven, earth, and humankind.",
              "We have developed the spiritual movement to help humanity, separated from God, regain its innermost heart of unconditional love, sincerity, and beauty. We seek to be \"people of light\" at work, at home, in the community, and internationally, to promote the well-being of people, considering the three aspects of the soul, mind, and body.",
              "Our purpose is to manifest God's Great Plan on earth which is to bring the true Heavenly civilization of Light into this world.",
              "To achieve this objective, we established regional guidance departments which administrate our spiritual training centers and smaller contact branches that are installed in necessary areas throughout society.",
              "Here we conduct rituals of worship, fellowship events, educational workshops to lead people to a life of salvation through prayer and practice of spiritual purification.",
            ].map((text, i) => (
              <p
                key={i}
                style={{
                  fontSize: "1rem",
                  color: "#F5E8DC",
                  lineHeight: 1.95,
                  margin: 0,
                  textAlign: i === 0 ? "center" : "left",
                  fontStyle: i === 0 ? "italic" : "normal",
                  fontFamily: i === 0 ? "var(--font-playfair)" : "var(--font-inter)",
                  fontSize: i === 0 ? "1.15rem" : "0.95rem",
                }}
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ COURSES ═══════════════ */}
      <section style={{ padding: "100px 24px", background: "#FAF5F0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <div
              style={{
                fontSize: "0.62rem",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#C9A86C",
                marginBottom: "12px",
                fontWeight: 600,
              }}
            >
              Spiritual Training
            </div>
            <h2
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(1.9rem, 4vw, 3rem)",
                fontWeight: 400,
                color: "#3A2518",
                lineHeight: 1.3,
                marginBottom: "24px",
              }}
            >
              What You Learn
              <br />
              <em style={{ fontStyle: "italic", color: "#7D5A4F" }}>at Each Course</em>
            </h2>
            <LeafDivider />
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
            <CourseCard
              level="Level 1"
              label="Basic Course"
              description="Gain an understanding of the interplay between the material world and the unseen realm, including the spiritual world, as well as the fundamental principles governing the universe. Comprehend the significance of revitalizing our soul, mind, and body by engaging in the practice of the Art of Divine Light and embracing the universal principles."
            />
            <CourseCard
              level="Level 2"
              label="Intermediate Course"
              description="Acquire the knowledge and techniques required to elevate our Sonen — the innermost aspect of our mind — to higher levels of God's unconditional love, empowering us to wholeheartedly dedicate ourselves in service to God."
            />
            <CourseCard
              level="Level 3"
              label="Advanced Course"
              description="Cultivate a profound understanding of God, encompassing insights on how to live a present life that nurtures a close connection with the divine. By gaining knowledge about the progression and future operation of God's plan, we can actively engage in service to God."
            />
          </div>
        </div>
      </section>

      {/* ═══════════════ PHOTO BREAK ═══════════════ */}
      <section style={{ position: "relative", height: "360px", overflow: "hidden" }}>
        <Image
          src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=1920&q=85"
          alt="Soft light filtering through forest trees"
          fill
          unoptimized
          style={{ objectFit: "cover", objectPosition: "center 60%" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, rgba(250,245,240,0.92) 0%, rgba(250,245,240,0.5) 40%, rgba(125,90,79,0.6) 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "0 8%",
          }}
        >
          <blockquote
            style={{
              maxWidth: "500px",
              margin: 0,
              borderLeft: "3px solid #C9A86C",
              paddingLeft: "28px",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(1.3rem, 3vw, 2rem)",
                color: "#3A2518",
                lineHeight: 1.55,
                margin: "0 0 12px",
                fontStyle: "italic",
              }}
            >
              &ldquo;The practice of divine light and sacred teachings empowers individuals, leading them towards spiritual upliftment in their pursuit of eternal happiness.&rdquo;
            </p>
          </blockquote>
        </div>
      </section>

      {/* ═══════════════ SEMINAR INFO ═══════════════ */}
      <section id="seminar-info" style={{ padding: "100px 24px", background: "#FDF8F4" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <div
              style={{
                fontSize: "0.62rem",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#C9A86C",
                marginBottom: "12px",
                fontWeight: 600,
              }}
            >
              Join Us
            </div>
            <h2
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(1.9rem, 4vw, 3rem)",
                fontWeight: 400,
                color: "#3A2518",
                lineHeight: 1.3,
                marginBottom: "24px",
              }}
            >
              Divine Light
              <br />
              <em style={{ fontStyle: "italic", color: "#7D5A4F" }}>Basic Seminars</em>
            </h2>
            <LeafDivider />
            <p
              style={{
                maxWidth: "640px",
                margin: "0 auto",
                fontSize: "0.95rem",
                color: "#6B4E3E",
                lineHeight: 1.9,
              }}
            >
              This seminar offers crucial insights into bestowing the Art of Divine Light, along with
              practical guidance for manifesting God&rsquo;s Love and Light in our everyday existence.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "24px",
            }}
          >
            {/* Time */}
            <InfoCard
              icon={
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A86C" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              }
              title="Time"
              lines={["Day 1  10:00am – 6:00pm", "Day 2  10:00am – 6:00pm", "Day 3  10:00am – 6:00pm"]}
            />

            {/* Place */}
            <InfoCard
              icon={
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A86C" strokeWidth="1.5">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
              }
              title="Place"
              lines={["Los Angeles Center", "809 S Atlantic Blvd, Unit 378", "Monterey Park, CA 91754"]}
            />

            {/* Seminar Fee */}
            <InfoCard
              icon={
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A86C" strokeWidth="1.5">
                  <rect x="2" y="5" width="20" height="14" rx="2" />
                  <line x1="2" y1="10" x2="22" y2="10" />
                </svg>
              }
              title="Seminar Fee"
              lines={[
                "$130.00*",
                "*Due date: One week prior to first day",
                "*Cancellation: Fully refunded before seminar starts. No refunds once started.",
              ]}
              small
            />

            {/* Monthly Offering */}
            <InfoCard
              icon={
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A86C" strokeWidth="1.5">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              }
              title="Monthly Offering"
              lines={[
                "REISEN: Gratitude for Spiritual Line",
                "(霊線保持御礼: REISEN HOJI ONREI)",
                "$10.00* · By 20th of the month",
              ]}
              small
            />
          </div>
        </div>
      </section>

      {/* ═══════════════ 3-DAY SCHEDULE ═══════════════ */}
      <section id="schedule" style={{ padding: "100px 24px", background: "#FAF5F0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <div
              style={{
                fontSize: "0.62rem",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#C9A86C",
                marginBottom: "12px",
                fontWeight: 600,
              }}
            >
              Program
            </div>
            <h2
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(1.9rem, 4vw, 3rem)",
                fontWeight: 400,
                color: "#3A2518",
                lineHeight: 1.3,
                marginBottom: "24px",
              }}
            >
              Three Day Basic
              <br />
              <em style={{ fontStyle: "italic", color: "#7D5A4F" }}>Seminar Schedule</em>
            </h2>
            <LeafDivider />
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "stretch" }}>
            <DayCard
              day="< Day 1 >"
              items={[
                "Definition of Happiness",
                "The Materialization of Spirit",
                "The Spiritual World",
                "Composition of Human Body",
                "Death of Human Beings",
                "Spiritual Rank",
                "Spiritual Inheritance",
                "Guardian Spirits",
              ]}
            />
            <DayCard
              day="< Day 2 >"
              items={[
                "Spirit-Primary, Mind-Secondary and Body-Subordinate",
                "Cause of Misfortunes",
                "Spiritual Impurities and Negative Karma",
                "Examples of Spiritual Disturbances",
                "An Outline of the Humanity Toxification Environment",
              ]}
            />
            <DayCard
              day="< Day 3 >"
              title="Omitama Granting Ceremony"
              items={[
                "Great Divine Plan of Su-God",
                "Main Activity as Kamikumites",
                "The Three Pillars of Truth (Spiritual Training)",
                "Amatsu Norigoto",
                "How to Handle Omitama",
                "Vital Points of the Art of Divine Light",
                "Guidelines for Divine Light Sessions",
                "The Encouragement of Divine Light",
              ]}
              highlight
            />
          </div>

          {/* Footnote about Kamikumite */}
          <div
            style={{
              marginTop: "40px",
              padding: "24px 28px",
              background: "#F5EDE5",
              borderRadius: "12px",
              borderLeft: "3px solid #C9A86C",
            }}
          >
            <p style={{ fontSize: "0.82rem", color: "#7A5A4A", lineHeight: 1.85, margin: 0 }}>
              <strong style={{ color: "#5A3D2E" }}>*Kamikumite:</strong> Within this organization, a practitioner is referred to as a
              &ldquo;Kamikumite&rdquo; or &ldquo;Kumite.&rdquo; These terms signify an individual who willingly dedicates themselves
              to the practice of Divine Principles, actively collaborating with God &lsquo;hand in hand&rsquo; to propagate the
              Divine Will. Three essential stages of learning to become &ldquo;people of light.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA ═══════════════ */}
      <section
        style={{
          position: "relative",
          padding: "100px 24px",
          overflow: "hidden",
          textAlign: "center",
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=1920&q=85"
          alt="Soft light filtering through forest"
          fill
          unoptimized
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, rgba(250,245,240,0.90) 0%, rgba(200,155,110,0.70) 100%)",
          }}
        />

        <div style={{ position: "relative", zIndex: 1, maxWidth: "680px", margin: "0 auto" }}>
          <div
            style={{
              fontSize: "0.62rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#7D5A4F",
              marginBottom: "16px",
              fontWeight: 600,
            }}
          >
            Begin Your Journey
          </div>
          <h2
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 400,
              color: "#3A2518",
              lineHeight: 1.3,
              marginBottom: "24px",
            }}
          >
            Ready to Step Into
            <br />
            <em style={{ fontStyle: "italic", color: "#7D5A4F" }}>the Light?</em>
          </h2>
          <LeafDivider />
          <p
            style={{
              fontSize: "1rem",
              color: "#5A3D2E",
              lineHeight: 1.9,
              marginBottom: "40px",
            }}
          >
            Join us at the Los Angeles Center for a life-changing experience.
            <br />
            We warmly welcome all who seek peace, healing, and spiritual growth.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="mailto:takayamak44@worlddivinelight.org"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "16px 44px",
                background: "#7D5A4F",
                color: "#FAF5F0",
                fontSize: "0.78rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                textDecoration: "none",
                borderRadius: "4px",
                fontWeight: 500,
                minHeight: "52px",
              }}
            >
              Contact Us
            </a>
            <a
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "16px 44px",
                background: "transparent",
                color: "#4A2E1E",
                border: "1.5px solid #7D5A4F",
                fontSize: "0.78rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                textDecoration: "none",
                borderRadius: "4px",
                fontWeight: 500,
                minHeight: "52px",
              }}
            >
              Back to Home
            </a>
          </div>

          {/* Address */}
          <p
            style={{
              marginTop: "40px",
              fontSize: "0.82rem",
              color: "#7A5A4A",
              lineHeight: 1.8,
            }}
          >
            809 S Atlantic Blvd, Unit 378 · Monterey Park, CA 91754
          </p>
        </div>
      </section>

      {/* ═══════════════ FOOTER ═══════════════ */}
      <footer
        style={{
          background: "#4A3728",
          padding: "40px 24px",
          textAlign: "center",
        }}
      >
        <Image
          src="/logo_w.png"
          alt="World Divine Light Organization"
          width={120}
          height={60}
          style={{
            width: "120px",
            height: "auto",
            objectFit: "contain",
            filter: "brightness(0) invert(1)",
            opacity: 0.7,
            marginBottom: "16px",
          }}
        />
        <p style={{ fontSize: "0.75rem", color: "#B8977E", letterSpacing: "0.08em", margin: "0 0 4px" }}>
          World Divine Light Organization — Los Angeles Center
        </p>
        <p style={{ fontSize: "0.72rem", color: "#8B6A58", margin: 0 }}>
          809 S Atlantic Blvd, Unit 378, Monterey Park, CA 91754
        </p>
      </footer>
    </main>
  );
}

/* ─── Info Card Component ─── */
function InfoCard({
  icon,
  title,
  lines,
  small,
}: {
  icon: React.ReactNode;
  title: string;
  lines: string[];
  small?: boolean;
}) {
  return (
    <div
      style={{
        background: "#FFFFFF",
        borderRadius: "16px",
        padding: "32px 24px",
        boxShadow: "0 4px 24px rgba(125,90,79,0.08)",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
      className="card-hover"
    >
      <div>{icon}</div>
      <div
        style={{
          fontSize: "0.65rem",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "#C9A86C",
          fontWeight: 700,
        }}
      >
        {title}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        {lines.map((line, i) => (
          <p
            key={i}
            style={{
              margin: 0,
              fontSize: small ? "0.82rem" : "0.92rem",
              color: i === 0 && !small ? "#3A2518" : "#6B4E3E",
              fontWeight: i === 0 && !small ? 500 : 400,
              lineHeight: 1.75,
            }}
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}
