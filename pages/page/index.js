import Link from "next/link"
import ProductCard from "../components/ProductCard"
import CartSidebar from "../components/CartSidebar"

export default function Home() {
  const sampleProducts = [
    {
      id: 1,
      title: "Seiko SKX007 Mod",
      description: "Un classique modifié avec un cadran bleu océan et un insert céramique.",
      price: 450,
      image_url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
    },
    {
      id: 2,
      title: "Seiko Turtle Vintage",
      description: "Version restaurée d’un modèle 1970’s en parfait état.",
      price: 620,
      image_url: "https://images.unsplash.com/photo-1518544801958-efcbf8a7ec10"
    }
  ]

  return (
    <div className="max-w-6xl mx-auto p-6">
      <header className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">🕰️ SeikoShop</h1>
          <p className="text-gray-500 text-sm">Marketplace de montres Seiko & mods</p>
        </div>
        <Link href="/sell" className="px-3 py-2 border rounded-lg">Vendre</Link>
      </header>

      <main className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <section className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {sampleProducts.map(p => <ProductCard key={p.id} product={p} />)}
        </section>

        <aside className="lg:col-span-1">
          <CartSidebar />
        </aside>
      </main>
    </div>
  )
}