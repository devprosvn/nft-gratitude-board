import Image from 'next/image';
import { NFT } from '../lib/mock-nfts';

export default function NFTCard({ nft }: { nft: NFT }) {
  return (
    <div className="bg-white rounded shadow p-4 space-y-2">
      {nft.imageUrl && (
        <div className="relative w-full h-48">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={nft.imageUrl}
            alt={nft.title}
            className="object-cover w-full h-full rounded"
          />
        </div>
      )}
      <h3 className="text-lg font-semibold truncate">{nft.title}</h3>
      <p className="text-sm text-gray-700 line-clamp-2">{nft.description}</p>
    </div>
  );
}
