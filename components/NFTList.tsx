import NFTCard from './NFTCard';
import { NFT } from '../lib/mock-nfts';

export default function NFTList({ nfts }: { nfts: NFT[] }) {
  if (!nfts.length) {
    return <p>No NFTs found.</p>;
  }
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {nfts.map((nft) => (
        <NFTCard key={nft.id} nft={nft} />
      ))}
    </div>
  );
}
