import Navbar from '../components/Navbar';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>NFT Gratitude Board</title>
      </Head>
      <Navbar />
      <main className="max-w-6xl mx-auto p-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to NFT Gratitude Board</h1>
        <p className="mb-8">Create, store and share your gratitude as NFTs on Sui blockchain.</p>
      </main>
    </>
  );
}
