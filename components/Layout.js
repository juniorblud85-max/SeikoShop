import Head from "next/head"

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>SeikoShop</title>
        <meta name="description" content="Marketplace de montres Seiko & Mods" />
      </Head>
      <main className="min-h-screen bg-gray-50">{children}</main>
    </>
  )
}