
import { useWallet } from '@solana/wallet-adapter-react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

export default function Home() {
  const { connected } = useWallet()

  return (
    <div className={StyleSheet.container}>
   
   
    </div>
  )
}