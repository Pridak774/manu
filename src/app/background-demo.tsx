"use client";
import { useState } from "react";
import BackgroundAnimations from "../components/BackgroundAnimations";

export default function BackgroundDemo() {
  const [animationType, setAnimationType] = useState("grid");
  const [primaryColor, setPrimaryColor] = useState("#3B82F6");
  const [secondaryColor, setSecondaryColor] = useState("#F97316");
  const [opacity, setOpacity] = useState(0.15);
  const [speed, setSpeed] = useState("medium");

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-900 to-gray-900 overflow-hidden">
      <BackgroundAnimations
        type={animationType as AnimationType}
        color={primaryColor}
        secondary={secondaryColor}
        opacity={opacity}
        speed={speed as "slow" | "medium" | "fast"}
      />

      <div className="relative z-10 container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-white mb-10 text-center">
          Background Animation Demos
        </h1>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-white mb-2">Animation Type</label>
              <select
                value={animationType}
                onChange={(e) => setAnimationType(e.target.value)}
                className="w-full bg-slate-800 text-white rounded px-3 py-2 border border-slate-600"
              >
                <option value="grid">Grid Lines</option>
                <option value="cityscape">City Skyline</option>
                <option value="routes">Delivery Routes</option>
                <option value="particles">Floating Particles</option>
                <option value="waves">Abstract Waves</option>
                <option value="foodIcons">Food Icons</option>
              </select>
            </div>

            <div>
              <label className="block text-white mb-2">Animation Speed</label>
              <select
                value={speed}
                onChange={(e) => setSpeed(e.target.value)}
                className="w-full bg-slate-800 text-white rounded px-3 py-2 border border-slate-600"
              >
                <option value="slow">Slow</option>
                <option value="medium">Medium</option>
                <option value="fast">Fast</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-white mb-2">Primary Color</label>
              <div className="flex items-center">
                <input
                  type="color"
                  value={primaryColor}
                  onChange={(e) => setPrimaryColor(e.target.value)}
                  className="w-10 h-10 rounded mr-2"
                />
                <input
                  type="text"
                  value={primaryColor}
                  onChange={(e) => setPrimaryColor(e.target.value)}
                  className="flex-1 bg-slate-800 text-white rounded px-3 py-2 border border-slate-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-white mb-2">Secondary Color</label>
              <div className="flex items-center">
                <input
                  type="color"
                  value={secondaryColor}
                  onChange={(e) => setSecondaryColor(e.target.value)}
                  className="w-10 h-10 rounded mr-2"
                />
                <input
                  type="text"
                  value={secondaryColor}
                  onChange={(e) => setSecondaryColor(e.target.value)}
                  className="flex-1 bg-slate-800 text-white rounded px-3 py-2 border border-slate-600"
                />
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-white mb-2">Opacity: {opacity}</label>
            <input
              type="range"
              min="0.05"
              max="0.5"
              step="0.05"
              value={opacity}
              onChange={(e) => setOpacity(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>

          <div className="p-4 bg-slate-800 rounded-lg text-sm text-slate-300">
            <p className="font-mono">
              {`<BackgroundAnimations`}
              <br />
              {`  type="${animationType}"`}
              <br />
              {`  color="${primaryColor}"`}
              <br />
              {`  secondary="${secondaryColor}"`}
              <br />
              {`  opacity={${opacity}}`}
              <br />
              {`  speed="${speed}"`}
              <br />
              {`/>`}
            </p>
          </div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-white/70 mb-4">
            These background animations can be used throughout the main website
            for consistent branding
          </p>
        </div>
      </div>
    </div>
  );
}
