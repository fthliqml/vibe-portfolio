import CodeCard from './CodeCard';
import { personalInfo } from '@/data/personal';

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
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Left Column - Front End */}
          <div className="lg:col-span-4 order-2 lg:order-1">
            <p className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">
              front end
            </p>
            <CodeCard title="Component.tsx" code={frontEndCode} language="typescript" />
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
            <CodeCard title="server.ts" code={backEndCode} language="typescript" />
          </div>
        </div>
      </div>
    </section>
  );
}
