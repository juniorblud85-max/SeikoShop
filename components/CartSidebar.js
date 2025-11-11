export default function CartSidebar() {
  return (
    <div className="border rounded-2xl p-4 shadow-sm sticky top-4">
      <h2 className="text-xl font-semibold mb-2">🛍️ Panier</h2>
      <p className="text-gray-500 text-sm mb-4">Aucun article pour le moment.</p>
      <button className="w-full bg-black text-white rounded-xl py-2 font-medium hover:bg-gray-800 transition">
        Voir le panier
      </button>
    </div>
  )
}