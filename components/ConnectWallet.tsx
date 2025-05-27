import { useWallet } from '@mysten/wallet-kit';

export default function ConnectWallet() {
  const { connect, disconnect, connected, connecting, currentWallet } = useWallet();

  return (
    <button
      onClick={connected ? disconnect : connect}
      className="px-4 py-2 font-semibold text-white bg-purple-600 rounded hover:bg-purple-700 disabled:opacity-50"
      disabled={connecting}
    >
      {connected ? 'Disconnect' : connecting ? 'Connecting...' : 'Connect Wallet'}
    </button>
  );
}
