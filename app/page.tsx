import { client } from '@/lib/sanity'

async function getProducts() {
  return await client.fetch(`*[_type == "product"]`)
}

export default async function Home() {
  const products = await getProducts()

  return (
    <main className="min-h-screen bg-stone-100 text-stone-800 p-8 flex flex-col relative">

      <div className="fixed inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)',
        backgroundSize: '80px 80px'
      }}></div>

      <header className="flex justify-between items-start relative z-10">
        <span className="font-mono text-xs tracking-widest uppercase text-stone-400">Belski/Semble</span>
        <span className="font-mono text-xs tracking-widest uppercase text-stone-400">Signal &gt; Noise</span>
      </header>

      <section className="flex-1 flex flex-col justify-center relative z-10 mt-24">
        <p className="font-mono text-xs tracking-widest text-stone-400 uppercase mb-6">Day Dot — 001</p>
        <h1 className="font-mono uppercase leading-none text-stone-800" style={{
          fontSize: 'clamp(3rem, 10vw, 8rem)',
          letterSpacing: '0.25em',
        }}>
          S e m b l e
        </h1>
        <p className="font-mono text-xs tracking-widest text-stone-400 mt-6 ml-1">
          Est. Melbourne, 2026
        </p>
      </section>

      <section className="mt-32 relative z-10 border-t border-stone-300 pt-8 max-w-xs">
        <p className="font-mono text-xs tracking-widest text-stone-400 uppercase mb-3">001 / Object</p>
        <p className="font-mono text-xs leading-relaxed text-stone-500">
          Objects for the beginning of a life. Handmade. Small run.
        </p>
      </section>

      <footer className="mt-16 flex justify-between items-end relative z-10 border-t border-stone-300 pt-6">
        <span className="font-mono text-xs text-stone-400 tracking-widest">Belski</span>
        <span className="font-mono text-xs text-stone-400 tracking-widest">semble.net.au</span>
      </footer>

    </main>
  )
}