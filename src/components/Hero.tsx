import CodeCard from "./CodeCard";
import { personalInfo } from "@/data/personal";

export default function Hero() {
  const frontEndCode = `import { useState } from 'react';

export const Component = () => {
  const [active, setActive] = useState(false);
  
  return (
    <div className="container">
      <h1>Hello World</h1>
    </div>
  );
};`;

  const backEndCode = `import express from 'express';

const app = express();

app.get('/api/users', (req, res) => {
  res.json({ 
    status: 'ok',
    data: users 
  });
});

app.listen(3000);`;

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Main background grid pattern - larger and more visible */}
      <div 
        className="absolute inset-0 opacity-40" 
        style={{
          backgroundImage: `
            radial-gradient(circle at 3px 3px, rgb(160 160 160) 2.5px, transparent 0),
            linear-gradient(rgba(160, 160, 160, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(160, 160, 160, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px, 40px 40px, 40px 40px',
          backgroundPosition: '0 0, 0 0, 0 0'
        }}
      ></div>

      {/* Random decorative grid - Left side */}
      <div className="absolute left-0 top-1/4 w-64 h-64 opacity-25">
        <div className="absolute top-10 left-8 w-16 h-16 border-2 border-gray-500"></div>
        <div className="absolute top-32 left-16 w-24 h-12 border-2 border-gray-500"></div>
        <div className="absolute top-48 left-4 w-12 h-20 border-2 border-gray-500"></div>
        <div className="absolute top-2 left-32 w-20 h-16 border-2 border-gray-400"></div>
      </div>

      {/* Random decorative grid - Right side */}
      <div className="absolute right-0 top-1/3 w-64 h-64 opacity-25">
        <div className="absolute top-8 right-12 w-20 h-20 border-2 border-gray-500"></div>
        <div className="absolute top-36 right-24 w-16 h-24 border-2 border-gray-500"></div>
        <div className="absolute top-56 right-8 w-24 h-16 border-2 border-gray-400"></div>
        <div className="absolute top-4 right-36 w-12 h-12 border-2 border-gray-500"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Left Column - Front End */}
          <div className="lg:col-span-4 order-2 lg:order-1">
            <p className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">
              front end
            </p>
            <CodeCard
              title="Component.tsx"
              code={frontEndCode}
              language="typescript"
              animated
            />
          </div>

          {/* Center Column - Main Content */}
          <div className="lg:col-span-4 order-1 lg:order-2 text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
              {personalInfo.name}
            </h1>
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mt-2">
              {personalInfo.title}
            </p>
            <p className="text-lg text-gray-500 mt-6 leading-relaxed max-w-lg mx-auto">
              {personalInfo.description}
            </p>
          </div>

          {/* Right Column - Back End */}
          <div className="lg:col-span-4 order-3">
            <p className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">
              back end
            </p>
            <CodeCard
              title="server.ts"
              code={backEndCode}
              language="typescript"
              animated
            />
          </div>
        </div>
      </div>
    </section>
  );
}
