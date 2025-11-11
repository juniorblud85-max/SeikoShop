import Link from "next/link"

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-2xl overflow-hidden shadow hover:shadow-lg transition">
      <img src={product.image_url} alt={product.title} className="w-full h-56 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{product.title}</h3>
        <p className="text-gray-600 text-sm mb-2">{product.description}</p>
        <p className="text-lg font-bold mb-3">{product.price} €</p>
        <Link href={`/product/${product.id}`} className="text-blue-600 hover:underline">
          Voir la montre →
        </Link>
      </div>
    </div>
  )
}