import { useEffect, useState } from 'react';
import { useWallet } from '@aptos-labs/wallet-adapter-react';

export default function ConnectWalletButton() {
  const { connected, account, connect, wallets } = useWallet();
  
  console.log('Wallet state:', { connected, account, wallets });
  
  const handleConnect = async () => {
    console.log('Connect button clicked');
    console.log('Available wallets:', wallets);
    
    // If there are wallets available, try to connect to the first one
    // In a real implementation, you would show a wallet selection dialog
    if (wallets && wallets.length > 0) {
      console.log('Attempting to connect to:', wallets[0].name);
      try {
        // Connect to the first available wallet
        await connect(wallets[0].name);
        console.log('Successfully initiated connection to:', wallets[0].name);
      } catch (error) {
        console.error('Failed to connect wallet:', error);
      }
    } else {
      console.log('No wallets available');
    }
  };
  
  if (!connected) {
    return (
      <button
        onClick={handleConnect}
        style={{
          padding: '8px 16px',
          borderRadius: 8,
          background: 'linear-gradient(135deg, #22c55e, #06b6d4)',
          color: 'white',
          border: 'none',
          fontFamily: 'Press Start 2P, monospace',
          fontSize: 11,
          cursor: 'pointer',
        }}
      >
        Connect Wallet
      </button>
    );
  }

  return (
    <div
      style={{
        padding: '8px 16px',
        borderRadius: 8,
        background: 'rgba(30, 41, 59, 0.95)',
        color: '#e5e7eb',
        border: '1px solid rgba(148, 163, 184, 0.25)',
        fontFamily: 'Press Start 2P, monospace',
        fontSize: 11,
      }}
    >
      {account?.address.toString().substring(0, 6)}...{account?.address.toString().substring(account?.address.toString().length - 4)}
    </div>
  );
}
