import Navbar from '../components/Navbar';
import Head from 'next/head';
import NFTList from '../components/NFTList';
import { mockNFTs } from '../lib/mock-nfts';

export default function Gallery() {
  return (
    <>
      <Head>
        <title>Gallery - NFT Gratitude Board</title>
      </Head>
      <Navbar />
      <main className="max-w-6xl mx-auto p-4 space-y-4">
        <h1 className="text-2xl font-bold">Gallery</h1>
        <NFTList nfts={mockNFTs} />
      </main>
    </>
  );
}
