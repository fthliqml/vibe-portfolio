import { personalInfo } from '@/data/personal';

export default function Contact() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
          Let's Work Together
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-600 mt-6 leading-relaxed">
          I'm always excited to work on new projects and collaborate with talented people. 
          Feel free to reach out!
        </p>

        {/* CTA Button */}
        <a
          href={personalInfo.social.email}
          className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-all duration-300"
        >
          Get in Touch
          <span>→</span>
        </a>
      </div>
    </section>
  );
}
