import Navbar from '../components/Navbar';
import Head from 'next/head';

export default function Gallery() {
  return (
    <>
      <Head>
        <title>Gallery - NFT Gratitude Board</title>
      </Head>
      <Navbar />
      <main className="max-w-6xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Gallery</h1>
        <p>NFT list will appear here.</p>
      </main>
    </>
  );
}
