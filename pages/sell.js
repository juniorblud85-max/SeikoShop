import { useState } from "react"

export default function Sell() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    image_url: "",
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Montre ajoutée ! (dans une vraie version, elle serait sauvegardée)")
  }

  return (
    <div className="max-w-lg mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">🕰️ Vendre une montre</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Nom du modèle"
          value={form.title}
          onChange={handleChange}
          className="w-full border rounded-xl p-2"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="w-full border rounded-xl p-2"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Prix (€)"
          value={form.price}
          onChange={handleChange}
          className="w-full border rounded-xl p-2"
          required
        />
        <input
          type="url"
          name="image_url"
          placeholder="Lien de l’image"
          value={form.image_url}
          onChange={handleChange}
          className="w-full border rounded-xl p-2"
          required
        />
        <button className="w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition">
          Publier l’annonce
        </button>
      </form>
    </div>
  )
}