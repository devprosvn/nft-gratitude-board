import { useState } from 'react';
import { useWallet } from '@mysten/wallet-kit';

export default function MintDialog({ onMinted }: { onMinted: () => void }) {
  const { signAndExecuteTransactionBlock } = useWallet();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleMint = async () => {
    setLoading(true);
    try {
      // TODO: build transaction block and call move package
      await signAndExecuteTransactionBlock({ transactionBlock: {} as any });
      onMinted();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 bg-white rounded shadow-md space-y-4">
      <h2 className="text-xl font-bold">Create NFT</h2>
      <input
        className="w-full border p-2 rounded"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="w-full border p-2 rounded"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        className="w-full border p-2 rounded"
        placeholder="Image URL (optional)"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <button
        onClick={handleMint}
        disabled={loading}
        className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 disabled:opacity-50"
      >
        {loading ? 'Minting...' : 'Mint NFT'}
      </button>
    </div>
  );
}
