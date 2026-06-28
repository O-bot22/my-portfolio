import Link from 'next/link';
import { robotCollage } from '@/src/components/robotCollageData';

export default function CollagePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-gray-100">
      <section id="robot-collage" className="relative py-16 px-6 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.14),transparent_25%),rgba(15,23,42,0.96)]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between text-center md:text-left">
            <div>
              <h2 className="text-4xl font-bold">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Robot Collage
                </span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto mt-4 md:mx-0">
                A quick visual showcase of robots, prototypes, and build highlights. Hover over an image for a short description.
              </p>
            </div>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-950/90 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-blue-400/60 hover:bg-slate-900"
            >
              Back to home
            </Link>
          </div>

          <div className="overflow-hidden transition-all duration-500 ease-out max-h-[3000px] opacity-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-4">
              {robotCollage.map((item, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-3xl border border-slate-700 bg-slate-950/80 shadow-black/20 hover:border-blue-400/50 transition-all"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-x-0 bottom-0 p-3">
                    <p className="text-sm text-gray-100 opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
