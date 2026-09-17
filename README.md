# airdrop-turbine-prereqs

TypeScript prerequisites for the Solana Turbin3 builders program: the first on-chain steps every Solana developer takes.

| Script | What it does |
|---|---|
| `keygen.ts` | Generates a new Solana keypair |
| `airdrop.ts` | Requests devnet SOL for it |
| `transfer.ts` | Sends SOL between wallets, including emptying one after fees |
| `enroll.ts` | Calls the Turbin3 prerequisite Anchor program to register a GitHub handle on-chain |

## Run

```bash
yarn install
yarn keygen
yarn airdrop
yarn transfer
yarn enroll
```

Stack: `@solana/web3.js`, `@coral-xyz/anchor`, TypeScript. Devnet only.

Keep keypair files out of git.
