"use client";
import { useState, useEffect } from "react";

export type AnimationType =
  | "grid"
  | "cityscape"
  | "routes"
  | "particles"
  | "waves"
  | "foodIcons";

interface BackgroundAnimationsProps {
  readonly type?: AnimationType;
  readonly color?: string;
  readonly secondary?: string;
  readonly opacity?: number;
  readonly speed?: "slow" | "medium" | "fast";
  readonly interactive?: boolean;
  readonly className?: string;
}

export default function BackgroundAnimations({
  type = "grid",
  color = "#3B82F6", // Default blue
  secondary = "#F97316", // Default orange
  opacity = 0.15,
  speed = "medium",
  interactive = false,
  className = "",
}: BackgroundAnimationsProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Set initial dimensions
    setDimensions({ width: window.innerWidth, height: window.innerHeight });

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    if (interactive) {
      const handleMouseMove = (e: MouseEvent) => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
        });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }

    return () => window.removeEventListener("resize", handleResize);
  }, [interactive]);

  // Calculate animation speed modifier
  const getSpeedModifier = () => {
    switch (speed) {
      case "slow":
        return 1.5;
      case "fast":
        return 0.6;
      default:
        return 1; // Medium
    }
  };

  const renderGridAnimation = () => (
    <div className={`grid-animation ${className}`} style={{ opacity }}>
      <div className="grid-lines">
        {[...Array(10)].map((_, i) => (
          <div
            // eslint-disable-next-line react/no-array-index-key
            key={`h-${i}`}
            className="h-line"
            style={{
              top: `${(i + 1) * 10}%`,
              animationDelay: `${i * 0.2}s`,
              background: `linear-gradient(90deg, transparent 0%, ${color} 50%, transparent 100%)`,
              animationDuration: `${5 * getSpeedModifier()}s`,
            }}
          />
        ))}
        {[...Array(10)].map((_, i) => (
          <div
            // eslint-disable-next-line react/no-array-index-key
            key={`v-${i}`}
            className="v-line"
            style={{
              left: `${(i + 1) * 10}%`,
              animationDelay: `${i * 0.2}s`,
              background: `linear-gradient(180deg, transparent 0%, ${color} 50%, transparent 100%)`,
              animationDuration: `${5 * getSpeedModifier()}s`,
            }}
          />
        ))}
      </div>
    </div>
  );

  const renderCityAnimation = () => (
    <div className={`cityscape-animation ${className}`} style={{ opacity }}>
      <svg
        className="absolute bottom-0 left-0 right-0 w-full"
        height="180"
        preserveAspectRatio="none"
        viewBox="0 0 1440 180"
      >
        <path
          d="M0,180 L0,140 L30,140 L30,120 L60,120 L60,140 L90,140 L90,100 L120,100 L120,140 L150,140 L150,80 L180,80 L180,140 L210,140 L210,110 L240,110 L240,140 L270,140 L270,90 L300,90 L300,140 L330,140 L330,120 L360,120 L360,140 L390,140 L390,70 L420,70 L420,140 L450,140 L450,100 L480,100 L480,140 L510,140 L510,110 L540,110 L540,140 L570,140 L570,60 L600,60 L600,140 L630,140 L630,90 L660,90 L660,140 L690,140 L690,120 L720,120 L720,140 L750,140 L750,70 L780,70 L780,140 L810,140 L810,120 L840,120 L840,140 L870,140 L870,90 L900,90 L900,140 L930,140 L930,110 L960,110 L960,140 L990,140 L990,80 L1020,80 L1020,140 L1050,140 L1050,100 L1080,100 L1080,140 L1110,140 L1110,70 L1140,70 L1140,140 L1170,140 L1170,120 L1200,120 L1200,140 L1230,140 L1230,100 L1260,100 L1260,140 L1290,140 L1290,80 L1320,80 L1320,140 L1350,140 L1350,110 L1380,110 L1380,140 L1410,140 L1410,90 L1440,90 L1440,180 Z"
          fill={color}
          className="skyline"
          style={{ animationDuration: `${50 * getSpeedModifier()}s` }}
        />

        <path
          d="M0,180 L0,150 L50,150 L50,130 L100,130 L100,150 L150,150 L150,120 L200,120 L200,150 L250,150 L250,140 L300,140 L300,150 L350,150 L350,130 L400,130 L400,150 L450,150 L450,110 L500,110 L500,150 L550,150 L550,140 L600,140 L600,150 L650,150 L650,130 L700,130 L700,150 L750,150 L750,120 L800,120 L800,150 L850,150 L850,140 L900,140 L900,150 L950,150 L950,130 L1000,130 L1000,150 L1050,150 L1050,120 L1100,120 L1100,150 L1150,150 L1150,140 L1200,140 L1200,150 L1250,150 L1250,130 L1300,130 L1300,150 L1350,150 L1350,120 L1400,120 L1400,150 L1440,150 L1440,180 Z"
          fill={secondary}
          className="skyline-closer"
          style={{ animationDuration: `${30 * getSpeedModifier()}s` }}
        />

        {/* Building Windows */}
        {[...Array(20)].map((_, i) => (
          <rect
            // eslint-disable-next-line react/no-array-index-key
            key={`window-${i}`}
            className="building-window"
            x={100 + i * 65}
            y={80 + (i % 3) * 20}
            width="4"
            height="6"
            fill="#FBBF24"
            style={{
              animationDelay: `${(i * 0.3) % 5}s`,
            }}
          />
        ))}
      </svg>
    </div>
  );

  const renderRoutesAnimation = () => (
    <div className={`routes-animation ${className}`} style={{ opacity }}>
      {/* Location Pins */}
      <div className="location-pins">
        {[...Array(6)].map((_, i) => (
          <div
            // eslint-disable-next-line react/no-array-index-key
            key={`pin-${i}`}
            className="location-pin"
            style={{
              top: `${15 + i * 14}%`,
              left: `${5 + i * 18}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${3 * getSpeedModifier()}s`,
            }}
          >
            <svg width="24" height="36" viewBox="0 0 24 36">
              <path
                d="M12 0C5.4 0 0 5.4 0 12c0 9 12 24 12 24s12-15 12-24c0-6.6-5.4-12-12-12zm0 18c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"
                fill={i % 2 === 0 ? color : secondary}
              />
            </svg>
            <div className="pulse-ring"></div>
          </div>
        ))}
      </div>

      {/* Route Paths */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          d="M10,50 Q30,20 50,50 T90,50"
          stroke={color}
          strokeWidth="0.2"
          fill="none"
          className="route-path"
          style={{ animationDuration: `${5 * getSpeedModifier()}s` }}
        />
        <path
          d="M5,70 Q25,40 45,70 T95,70"
          stroke={secondary}
          strokeWidth="0.2"
          fill="none"
          className="route-path"
          style={{
            animationDelay: "1.5s",
            animationDuration: `${5 * getSpeedModifier()}s`,
          }}
        />
        <path
          d="M15,30 Q35,60 55,30 T95,30"
          stroke={color}
          strokeWidth="0.2"
          fill="none"
          className="route-path"
          style={{
            animationDelay: "2.5s",
            animationDuration: `${5 * getSpeedModifier()}s`,
          }}
        />
      </svg>
    </div>
  );

  const renderParticlesAnimation = () => {
    // Generate random particles
    const particles = Array(50)
      .fill(0)
      .map((_, i) => {
        const size = Math.random() * 6 + 2;
        const xPos = Math.random() * 100;
        const yPos = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = (Math.random() * 15 + 10) * getSpeedModifier();

        return {
          id: i,
          size,
          x: xPos,
          y: yPos,
          delay,
          duration,
          color: Math.random() > 0.5 ? color : secondary,
        };
      });

    return (
      <div className={`particles-animation ${className}`} style={{ opacity }}>
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="floating-particle"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: particle.color,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
              opacity: Math.random() * 0.5 + 0.1,
            }}
          />
        ))}
      </div>
    );
  };

  const renderWavesAnimation = () => (
    <div className={`waves-animation ${className}`} style={{ opacity }}>
      <svg
        className="absolute w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 1440 800"
      >
        <path
          d="M0,800 L0,700 C120,650 240,600 360,625 C480,650 600,750 720,750 C840,750 960,650 1080,625 C1200,600 1320,650 1440,700 L1440,800 Z"
          fill={color}
          opacity="0.05"
          className="wave wave1"
          style={{ animationDuration: `${25 * getSpeedModifier()}s` }}
        />
        <path
          d="M0,800 L0,750 C120,725 240,700 360,700 C480,700 600,725 720,750 C840,775 960,800 1080,775 C1200,750 1320,675 1440,650 L1440,800 Z"
          fill={secondary}
          opacity="0.05"
          className="wave wave2"
          style={{ animationDuration: `${20 * getSpeedModifier()}s` }}
        />
        <path
          d="M0,800 L0,775 C120,750 240,725 360,725 C480,725 600,750 720,775 C840,800 960,825 1080,812.5 C1200,800 1320,750 1440,725 L1440,800 Z"
          fill={color}
          opacity="0.05"
          className="wave wave3"
          style={{ animationDuration: `${15 * getSpeedModifier()}s` }}
        />
      </svg>
    </div>
  );

  const renderFoodIconsAnimation = () => (
    <div className={`food-icons-animation ${className}`} style={{ opacity }}>
      <div className="food-icons">
        <svg
          className="food-icon pizza"
          viewBox="0 0 50 50"
          width="30"
          height="30"
          style={{
            top: "15%",
            left: "10%",
            animationDuration: `${15 * getSpeedModifier()}s`,
            animationDelay: "0s",
          }}
        >
          <circle cx="25" cy="25" r="20" fill="#FFA726" />
          <path d="M25,5 L5,35 L45,35 Z" fill="#FF7043" />
          <circle cx="15" cy="20" r="2" fill="#BF360C" />
          <circle cx="25" cy="15" r="2" fill="#BF360C" />
          <circle cx="35" cy="20" r="2" fill="#BF360C" />
          <circle cx="20" cy="25" r="2" fill="#BF360C" />
          <circle cx="30" cy="25" r="2" fill="#BF360C" />
        </svg>

        <svg
          className="food-icon burger"
          viewBox="0 0 50 50"
          width="35"
          height="35"
          style={{
            top: "25%",
            right: "15%",
            animationDuration: `${11 * getSpeedModifier()}s`,
            animationDelay: "0.5s",
          }}
        >
          <rect x="10" y="10" width="30" height="5" rx="2" fill="#FFA000" />
          <rect x="10" y="15" width="30" height="3" rx="1" fill="#7B1FA2" />
          <rect x="10" y="18" width="30" height="8" rx="2" fill="#8D6E63" />
          <rect x="10" y="26" width="30" height="3" rx="1" fill="#689F38" />
          <rect x="10" y="29" width="30" height="6" rx="2" fill="#8D6E63" />
          <rect x="10" y="35" width="30" height="5" rx="2" fill="#FFA000" />
        </svg>

        <svg
          className="food-icon fries"
          viewBox="0 0 50 50"
          width="25"
          height="25"
          style={{
            top: "45%",
            left: "20%",
            animationDuration: `${12 * getSpeedModifier()}s`,
            animationDelay: "1s",
          }}
        >
          <rect x="15" y="10" width="20" height="30" rx="2" fill="#F44336" />
          <rect x="17" y="5" width="3" height="30" rx="1" fill="#FFCC80" />
          <rect x="22" y="5" width="3" height="30" rx="1" fill="#FFCC80" />
          <rect x="27" y="5" width="3" height="30" rx="1" fill="#FFCC80" />
          <rect x="32" y="5" width="3" height="30" rx="1" fill="#FFCC80" />
        </svg>

        <svg
          className="food-icon sushi"
          viewBox="0 0 50 50"
          width="30"
          height="30"
          style={{
            top: "30%",
            left: "75%",
            animationDuration: `${9 * getSpeedModifier()}s`,
            animationDelay: "1.5s",
          }}
        >
          <rect x="10" y="20" width="30" height="10" rx="5" fill="#8D6E63" />
          <rect x="10" y="17" width="30" height="6" rx="3" fill="#FFECB3" />
          <rect x="15" y="16" width="20" height="8" rx="4" fill="#F48FB1" />
        </svg>

        <svg
          className="food-icon coffee"
          viewBox="0 0 50 50"
          width="22"
          height="22"
          style={{
            top: "60%",
            right: "25%",
            animationDuration: `${14 * getSpeedModifier()}s`,
            animationDelay: "2s",
          }}
        >
          <path
            d="M15,15 L15,35 C15,38 20,40 25,40 C30,40 35,38 35,35 L35,15 Z"
            fill="#795548"
          />
          <path
            d="M15,15 L35,15 C35,12 30,10 25,10 C20,10 15,12 15,15 Z"
            fill="#BCAAA4"
          />
          <path
            d="M35,20 L38,20 C40,20 42,22 42,25 C42,28 40,30 38,30 L35,30 Z"
            fill="#A1887F"
          />
        </svg>

        <svg
          className="food-icon taco"
          viewBox="0 0 50 50"
          width="28"
          height="28"
          style={{
            bottom: "25%",
            left: "40%",
            animationDuration: `${13 * getSpeedModifier()}s`,
            animationDelay: "2.5s",
          }}
        >
          <path
            d="M10,25 Q25,5 40,25 Q40,40 25,40 Q10,40 10,25 Z"
            fill="#FFC107"
          />
          <path
            d="M15,25 Q25,15 35,25"
            stroke="#FF5722"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M15,30 L35,30"
            stroke="#4CAF50"
            strokeWidth="3"
            fill="none"
          />
          <path
            d="M18,35 L32,35"
            stroke="#A1887F"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
      {/* eslint-disable-next-line react/no-unknown-property */}
      <style jsx>{`
        .food-icons-animation {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }
        .food-icon {
          position: absolute;
          animation: float 10s infinite ease-in-out alternate;
          will-change: transform;
        }

        @keyframes float {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(15deg);
          }
          100% {
            transform: translateY(0px) rotate(-15deg);
          }
        }
      `}</style>
    </div>
  );

  if (!mounted) return null;

  // Render selected animation type
  const renderAnimationType = () => {
    switch (type) {
      case "grid":
        return renderGridAnimation();
      case "cityscape":
        return renderCityAnimation();
      case "routes":
        return renderRoutesAnimation();
      case "particles":
        return renderParticlesAnimation();
      case "waves":
        return renderWavesAnimation();
      case "foodIcons":
        return renderFoodIconsAnimation();
      default:
        return renderGridAnimation();
    }
  };

  return (
    <div className="background-animation-container absolute inset-0 z-0 overflow-hidden">
      {renderAnimationType()}

      {/* eslint-disable-next-line react/no-unknown-property */}
      <style jsx>{`
        .background-animation-container {
          pointer-events: ${interactive ? "auto" : "none"};
        }

        /* Grid Animation */
        .grid-lines {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .h-line {
          position: absolute;
          left: 0;
          right: 0;
          height: 1px;
          animation: horizontalScan 5s ease-in-out infinite;
        }

        .v-line {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 1px;
          animation: verticalScan 5s ease-in-out infinite;
        }

        @keyframes horizontalScan {
          0%,
          100% {
            opacity: 0.1;
            background-position: -100% 0;
          }
          50% {
            opacity: 0.2;
            background-position: 200% 0;
          }
        }

        @keyframes verticalScan {
          0%,
          100% {
            opacity: 0.1;
            background-position: 0 -100%;
          }
          50% {
            opacity: 0.2;
            background-position: 0 200%;
          }
        }

        /* City Animation */
        .skyline {
          animation: skylineMove 50s linear infinite;
          transform-origin: bottom;
        }

        .skyline-closer {
          animation: skylineMove 30s linear infinite;
          transform-origin: bottom;
        }

        @keyframes skylineMove {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-50%);
          }
        }

        /* Building Window Animation */
        .building-window {
          animation: windowGlow 4s alternate infinite;
        }

        @keyframes windowGlow {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
        }

        /* Routes Animation */
        .location-pin {
          position: absolute;
          animation: pinPulse 3s ease-in-out infinite;
        }

        .pulse-ring {
          position: absolute;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: rgba(59, 130, 246, 0.2);
          top: 8px;
          left: 2px;
          animation: pulsate 2s ease-out infinite;
        }

        @keyframes pinPulse {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes pulsate {
          0% {
            transform: scale(0.8);
            opacity: 0.5;
          }
          100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }

        .route-path {
          stroke-dasharray: 220;
          stroke-dashoffset: 220;
          animation: drawPath 5s linear infinite;
        }

        @keyframes drawPath {
          to {
            stroke-dashoffset: 0;
          }
        }

        /* Particles Animation */
        .floating-particle {
          position: absolute;
          border-radius: 50%;
          animation: floatParticle linear infinite;
        }

        @keyframes floatParticle {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) translateX(20px) rotate(120deg);
          }
          66% {
            transform: translateY(10px) translateX(-15px) rotate(240deg);
          }
          100% {
            transform: translateY(0) translateX(0) rotate(360deg);
          }
        }

        /* Waves Animation */
        .wave {
          animation: waveMove linear infinite;
          transform-origin: center;
        }

        .wave1 {
          animation-delay: 0s;
        }

        .wave2 {
          animation-delay: -5s;
        }

        .wave3 {
          animation-delay: -10s;
        }

        @keyframes waveMove {
          0% {
            transform: translateX(0) translateY(0);
          }
          50% {
            transform: translateX(-2%) translateY(1%);
          }
          100% {
            transform: translateX(0) translateY(0);
          }
        }

        /* Food Icons Animation */
        .food-icons {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .food-icon {
          position: absolute;
          filter: drop-shadow(0 3px 5px rgba(0, 0, 0, 0.2));
        }

        .pizza {
          animation: float 15s ease-in-out infinite,
            moveRight 40s linear infinite;
        }

        .burger {
          animation: float 11s ease-in-out infinite,
            moveLeft 35s linear infinite;
        }

        .fries {
          animation: float 12s ease-in-out infinite,
            moveRight 50s linear infinite;
        }

        .sushi {
          animation: float 9s ease-in-out infinite, moveLeft 42s linear infinite;
        }

        .coffee {
          animation: float 14s ease-in-out infinite,
            moveRight 38s linear infinite;
        }

        .taco {
          animation: float 13s ease-in-out infinite,
            moveLeft 45s linear infinite;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes moveRight {
          from {
            margin-left: -10%;
          }
          to {
            margin-left: 110%;
          }
        }

        @keyframes moveLeft {
          from {
            margin-right: -10%;
          }
          to {
            margin-right: 110%;
          }
        }
      `}</style>
    </div>
  );
}

// Usage examples:
// <BackgroundAnimations type="grid" color="#3B82F6" opacity={0.1} />
// <BackgroundAnimations type="cityscape" color="#334155" secondary="#0F172A" speed="slow" />
// <BackgroundAnimations type="foodIcons" opacity={0.15} speed="medium" />
// <BackgroundAnimations type="particles" color="#F97316" secondary="#3B82F6" opacity={0.2} speed="fast" />
