"use client";
import { useEffect } from "react";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    console.log("Preloader mounted");
    const timer = setTimeout(() => {
      console.log("Preloader calling onComplete");
      onComplete();
    }, 3500); // 3.5 seconds
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-b from-slate-900 to-gray-900 overflow-hidden">
      {/* Professional Background Elements */}
      <div className="absolute inset-0 z-0 bg-pattern">
        {/* Grid Lines */}
        <div className="grid-lines">
          {[...Array(10)].map((_, i) => (
            <div
              key={`h-${i}`}
              className="h-line"
              style={{
                top: `${(i + 1) * 10}%`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
          {[...Array(10)].map((_, i) => (
            <div
              key={`v-${i}`}
              className="v-line"
              style={{
                left: `${(i + 1) * 10}%`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>

        {/* Professional City Skyline */}
        <svg
          className="absolute bottom-0 left-0 right-0 w-full"
          height="180"
          preserveAspectRatio="none"
          viewBox="0 0 1440 180"
        >
          <path
            d="M0,180 L0,140 L30,140 L30,120 L60,120 L60,140 L90,140 L90,100 L120,100 L120,140 L150,140 L150,80 L180,80 L180,140 L210,140 L210,110 L240,110 L240,140 L270,140 L270,90 L300,90 L300,140 L330,140 L330,120 L360,120 L360,140 L390,140 L390,70 L420,70 L420,140 L450,140 L450,100 L480,100 L480,140 L510,140 L510,110 L540,110 L540,140 L570,140 L570,60 L600,60 L600,140 L630,140 L630,90 L660,90 L660,140 L690,140 L690,120 L720,120 L720,140 L750,140 L750,70 L780,70 L780,140 L810,140 L810,120 L840,120 L840,140 L870,140 L870,90 L900,90 L900,140 L930,140 L930,110 L960,110 L960,140 L990,140 L990,80 L1020,80 L1020,140 L1050,140 L1050,100 L1080,100 L1080,140 L1110,140 L1110,70 L1140,70 L1140,140 L1170,140 L1170,120 L1200,120 L1200,140 L1230,140 L1230,100 L1260,100 L1260,140 L1290,140 L1290,80 L1320,80 L1320,140 L1350,140 L1350,110 L1380,110 L1380,140 L1410,140 L1410,90 L1440,90 L1440,180 Z"
            fill="#1E293B"
            className="skyline"
          />

          <path
            d="M0,180 L0,150 L50,150 L50,130 L100,130 L100,150 L150,150 L150,120 L200,120 L200,150 L250,150 L250,140 L300,140 L300,150 L350,150 L350,130 L400,130 L400,150 L450,150 L450,110 L500,110 L500,150 L550,150 L550,140 L600,140 L600,150 L650,150 L650,130 L700,130 L700,150 L750,150 L750,120 L800,120 L800,150 L850,150 L850,140 L900,140 L900,150 L950,150 L950,130 L1000,130 L1000,150 L1050,150 L1050,120 L1100,120 L1100,150 L1150,150 L1150,140 L1200,140 L1200,150 L1250,150 L1250,130 L1300,130 L1300,150 L1350,150 L1350,120 L1400,120 L1400,150 L1440,150 L1440,180 Z"
            fill="#0F172A"
            className="skyline-closer"
          />

          {/* Building Windows */}
          {[...Array(20)].map((_, i) => (
            <rect
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

        {/* Professional Location Pins */}
        <div className="location-pins">
          {[...Array(5)].map((_, i) => (
            <div
              key={`pin-${i}`}
              className="location-pin"
              style={{
                top: `${20 + i * 15}%`,
                left: `${10 + i * 20}%`,
                animationDelay: `${i * 0.7}s`,
              }}
            >
              <svg width="24" height="36" viewBox="0 0 24 36">
                <path
                  d="M12 0C5.4 0 0 5.4 0 12c0 9 12 24 12 24s12-15 12-24c0-6.6-5.4-12-12-12zm0 18c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"
                  fill={i % 2 === 0 ? "#3B82F6" : "#F97316"}
                />
              </svg>
              <div className="pulse-ring"></div>
            </div>
          ))}
        </div>

        {/* Delivery Route Lines */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M10,50 Q30,20 50,50 T90,50"
            stroke="#3B82F6"
            strokeWidth="0.2"
            fill="none"
            className="route-path"
          />
          <path
            d="M5,70 Q25,40 45,70 T95,70"
            stroke="#F97316"
            strokeWidth="0.2"
            fill="none"
            className="route-path"
            style={{ animationDelay: "1.5s" }}
          />
        </svg>
      </div>

      {/* Main Centered Animation Container */}
      <div className="flex flex-col items-center justify-center z-10 absolute-center">
        <svg
          width="500"
          height="340"
          viewBox="0 0 500 340"
          fill="none"
          className="main-animation"
        >
          {/* Road and Base */}
          <rect
            x="50"
            y="280"
            width="400"
            height="8"
            rx="2"
            fill="#475569"
            className="road"
          />
          <rect
            x="50"
            y="280"
            width="400"
            height="2"
            rx="1"
            fill="#94A3B8"
            className="road-highlight"
          />
          <ellipse
            cx="250"
            cy="288"
            rx="200"
            ry="15"
            fill="#1E293B"
            opacity="0.6"
            className="shadow"
          />

          {/* Modern Restaurant Building */}
          <g className="restaurant">
            <rect
              x="80"
              y="100"
              width="90"
              height="180"
              rx="3"
              fill="#334155"
            />
            <rect
              x="85"
              y="105"
              width="80"
              height="170"
              rx="2"
              fill="#1E293B"
            />

            {/* Restaurant Windows */}
            <rect x="90" y="120" width="30" height="40" rx="1" fill="#475569" />
            <rect
              x="130"
              y="120"
              width="30"
              height="40"
              rx="1"
              fill="#475569"
            />
            <rect x="90" y="170" width="30" height="40" rx="1" fill="#475569" />
            <rect
              x="130"
              y="170"
              width="30"
              height="40"
              rx="1"
              fill="#475569"
            />

            {/* Restaurant Door */}
            <rect
              x="110"
              y="230"
              width="30"
              height="50"
              rx="2"
              fill="#64748B"
            />

            {/* Restaurant Sign */}
            <rect x="95" y="80" width="60" height="15" rx="2" fill="#3B82F6" />
            <text
              x="125"
              y="91"
              fill="#FFFFFF"
              fontSize="8"
              fontFamily="Arial, sans-serif"
              textAnchor="middle"
            >
              RESTAURANT
            </text>

            {/* Restaurant Logo */}
            <circle cx="125" cy="210" r="10" fill="#F97316" />
            <path d="M120 208 L130 208" stroke="white" strokeWidth="1.5" />
            <path d="M120 211 L130 211" stroke="white" strokeWidth="1.5" />
            <path d="M120 214 L130 214" stroke="white" strokeWidth="1.5" />
          </g>
        </svg>

        {/* Professional loading text */}
        <div className="flex items-center justify-center mt-6">
          <p className="text-blue-400 font-sans text-lg tracking-wide font-medium pr-2">
            Se pregătește livrarea
          </p>
          <span className="loading-dots">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </span>
        </div>
      </div>

      <style jsx>{`
        /* Perfect Centering */
        .absolute-center {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          max-width: 500px;
        }

        /* Main Animation Phases */
        .phase1 {
          opacity: 1;
          animation: phase1Anim 1.6s linear forwards;
        }

        .phase2 {
          opacity: 0;
          animation: phase2Anim 1.7s 1.6s linear forwards;
        }

        .phase3 {
          opacity: 0;
          animation: phase3Anim 1.7s 3.3s linear forwards;
        }

        @keyframes phase1Anim {
          0%,
          85% {
            opacity: 1;
            transform: translateX(0);
          }
          100% {
            opacity: 0;
            transform: translateX(-30px);
          }
        }

        @keyframes phase2Anim {
          0% {
            opacity: 0;
            transform: translateX(-30px);
          }
          15% {
            opacity: 1;
            transform: translateX(0);
          }
          85% {
            opacity: 1;
            transform: translateX(0);
          }
          100% {
            opacity: 0;
            transform: translateX(-30px);
          }
        }

        @keyframes phase3Anim {
          0% {
            opacity: 0;
            transform: translateX(0);
          }
          15% {
            opacity: 1;
            transform: translateX(0);
          }
          100% {
            opacity: 1;
            transform: translateX(180px) translateY(-5px);
          }
        }

        /* Professional Wheel Animation */
        .rotating {
          animation: spin 0.6s linear infinite;
          transform-origin: center;
        }

        @keyframes spin {
          100% {
            transform: rotate(360deg);
          }
        }

        /* Professional Steam Effect */
        .steam1 {
          animation: professionalSteamRise 2s ease-in-out infinite;
        }

        .steam2 {
          animation: professionalSteamRise 2.5s ease-in-out 0.3s infinite;
        }

        @keyframes professionalSteamRise {
          0% {
            transform: translateY(0);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-6px);
            opacity: 0.2;
          }
          100% {
            transform: translateY(-10px);
            opacity: 0;
          }
        }

        /* Professional Motion Lines */
        .motion-line {
          animation: motionFade 0.8s linear infinite;
        }

        @keyframes motionFade {
          0% {
            opacity: 0.4;
            transform: translateX(0);
          }
          100% {
            opacity: 0;
            transform: translateX(-40px);
          }
        }

        /* Professional Background Styling */
        .grid-lines {
          position: absolute;
          width: 100%;
          height: 100%;
          opacity: 0.15;
        }

        .h-line {
          position: absolute;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            #3b82f6 50%,
            transparent 100%
          );
          animation: horizontalScan 5s ease-in-out infinite;
        }

        .v-line {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 1px;
          background: linear-gradient(
            180deg,
            transparent 0%,
            #3b82f6 50%,
            transparent 100%
          );
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

        /* Professional City Animation */
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

        /* Professional Building Window Animation */
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

        /* Professional Location Pin Animation */
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

        /* Professional Route Path Animation */
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

        /* Professional Loading Dots */
        .loading-dots {
          display: flex;
          align-items: center;
          height: 24px;
        }

        .dot {
          display: block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #3b82f6;
          margin: 0 3px;
          animation: dotPulse 1.5s infinite ease-in-out;
        }

        .dot:nth-child(2) {
          animation-delay: 0.2s;
        }

        .dot:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes dotPulse {
          0%,
          100% {
            transform: scale(0.8);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.2);
            opacity: 1;
          }
        }

        /* Headlight Animation */
        .headlight-beam {
          animation: beamFlicker 1s alternate infinite;
        }

        @keyframes beamFlicker {
          0% {
            opacity: 0.1;
          }
          100% {
            opacity: 0.2;
          }
        }
      `}</style>
    </div>
  );
}
