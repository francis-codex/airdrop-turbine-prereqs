import { Keypair } from "@solana/web3.js";
import bs58 from 'bs58';
import promptSync from 'prompt-sync';

// Initialize prompt with default options
const prompt = promptSync({sigint: true});

// Generate a new Keypair
let kp = Keypair.generate();

console.log(`You've generated a new Solana wallet: ${kp.publicKey.toBase58()}`);
console.log(`[${kp.secretKey}]`);

// Function to convert base58 to wallet
function base58ToWallet() {
    console.log("Enter your base58 encoded wallet:");
    const base58 = prompt('> ');
    // Example base58: gdtKSTXYULQNx87fdD3YgXkzVeyFeqwtxHm6WdEb5a9YJRnHse7GQr7t5pbepsyvUCk7VvksUGhPt4SZ8JHVSkt
    if (base58) {
        const wallet = bs58.decode(base58);
        console.log("Decoded wallet:", wallet);
    } else {
        console.log("No input provided.");
    }
}

// Function to convert wallet to base58
function walletToBase58() {
    const wallet = new Uint8Array([34,46,55,124,141,190,24,204,134,91,70,184,161,181,44,122,15,172,63,62,153,150,99,255,202,89,105,77,41,89,253,130,27,195,134,14,66,75,242,7,132,234,160,203,109,195,116,251,144,44,28,56,231,114,50,131,185,168,138,61,35,98,78,53]);
    const base58 = bs58.encode(wallet);
    console.log("Encoded base58:", base58);
}

// Call the functions
base58ToWallet();
walletToBase58();