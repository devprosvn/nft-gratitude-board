import Link from 'next/link';
import ConnectWallet from './ConnectWallet';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="text-xl font-bold text-purple-600">NFT Gratitude</Link>
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="hover:text-purple-600">Home</Link>
            <Link href="/gallery" className="hover:text-purple-600">Gallery</Link>
            <Link href="#" className="hover:text-purple-600">Create NFT</Link>
            <Link href="#" className="hover:text-purple-600">Guide</Link>
          </div>
          <div className="hidden md:block">
            <ConnectWallet />
          </div>
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            <span className="sr-only">Toggle Menu</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/gallery" className="block" onClick={() => setOpen(false)}>Gallery</Link>
            <Link href="#" className="block" onClick={() => setOpen(false)}>Create NFT</Link>
            <Link href="#" className="block" onClick={() => setOpen(false)}>Guide</Link>
            <ConnectWallet />
          </div>
        )}
      </div>
    </nav>
  );
}
