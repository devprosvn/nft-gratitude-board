import Navbar from '../components/Navbar';
import Head from 'next/head';
import { useState } from 'react';
import MintDialog from '../components/MintDialog';

export default function Create() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Head>
        <title>Create NFT - NFT Gratitude Board</title>
      </Head>
      <Navbar />
      <main className="max-w-6xl mx-auto p-4 space-y-4">
        <button
          onClick={() => setShow(true)}
          className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
        >
          New NFT
        </button>
        {show && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center" onClick={() => setShow(false)}>
            <div onClick={(e) => e.stopPropagation()}>
              <MintDialog onMinted={() => setShow(false)} />
            </div>
          </div>
        )}
      </main>
    </>
  );
}
