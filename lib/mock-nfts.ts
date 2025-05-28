export interface NFT {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
}

export const mockNFTs: NFT[] = [
  {
    id: '1',
    title: 'Gratitude to Mom',
    description: 'Thanks for always being there!',
    imageUrl: 'https://via.placeholder.com/300x200.png?text=NFT+1'
  },
  {
    id: '2',
    title: 'Thank You Friend',
    description: 'For all the good times together.',
    imageUrl: 'https://via.placeholder.com/300x200.png?text=NFT+2'
  },
  {
    id: '3',
    title: 'Special Mentor',
    description: 'Appreciate your guidance.',
    imageUrl: 'https://via.placeholder.com/300x200.png?text=NFT+3'
  }
];
