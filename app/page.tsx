import { client } from '@/lib/sanity'

async function getProducts() {
  return await client.fetch(`*[_type == "product"]`)
}

export default async function Home() {
  const products = await getProducts()

  return (
    <main className="min-h-screen bg-zinc-900 text-white p-8 overflow-hidden">
      
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[23%] left-[60%] w-px h-48 bg-zinc-700"></div>
        <div className="absolute top-[70%] left-[20%] w-32 h-px bg-amber-700 opacity-60"></div>
        <div className="absolute top-[45%] left-[75%] text-zinc-700 text-xs rotate-90" style={{fontFamily: "var(--font-mono)"}}>00 / 01</div>
      </div>

      <header className="mb-48 mt-4">
        <span className="text-xs text-zinc-500 tracking-[0.3em] uppercase" style={{fontFamily: "var(--font-mono)"}}>S — E — M — B — L — E</span>
      </header>

      <section className="relative">
        <p className="text-xs text-zinc-600 mb-2 tracking-widest" style={{fontFamily: "var(--font-mono)"}}>Day Dot</p>
        <h1 className="text-[11vw] font-semibold tracking-tight leading-none text-zinc-100" style={{fontFamily: "var(--font-crimson)"}}>
          Semble
        </h1>
        <h1 className="text-[3vw] font-semibold tracking-tight leading-none text-amber-700 ml-[8vw] -mt-2" style={{fontFamily: "var(--font-mono)"}}>
          by belsk.
        </h1>
      </section>

      <section className="mt-32 max-w-xs ml-[40%]">
        <p className="text-zinc-500 text-sm leading-loose" style={{fontFamily: "var(--font-mono)"}}>
          soft form / fabric user<br />
          mentalSci / ecoSci<br />
          melbourne
        </p>
      </section>

      <section className="mt-32">
        <p className="text-xs text-zinc-600 mb-8 tracking-widest" style={{fontFamily: "var(--font-mono)"}}>Products</p>
        {products.map((product: any) => (
          <div key={product._id} className="mb-8 border-t border-zinc-800 pt-8">
            <h2 className="text-2xl font-semibold" style={{fontFamily: "var(--font-crimson)"}}>{product.name}</h2>
            <p className="text-zinc-500 text-sm mt-2" style={{fontFamily: "var(--font-mono)"}}>{product.description}</p>
            <p className="text-amber-700 text-sm mt-2" style={{fontFamily: "var(--font-mono)"}}>A${product.price}</p>
          </div>
        ))}
      </section>

      <footer className="mt-48 flex justify-between items-end">
        <div className="text-zinc-700 text-xs tracking-widest" style={{fontFamily: "var(--font-mono)"}}>2026</div>
        <div className="w-2 h-2 rounded-full bg-blue-400 opacity-50"></div>
      </footer>

    </main>
  )
}