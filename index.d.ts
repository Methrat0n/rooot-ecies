/**
 * Note: This module is based off the original eccrypto module
 */
/// <reference types="node" />
export declare const kdf: (secret: Buffer, outputLength: number) => Buffer;
/**
 * Compute the public key for a given private key.
 * @param {Buffer} privateKey - A 32-byte private key
 * @return {Promise<Buffer>} A promise that resolve with the 65-byte public key or reject on wrong private key.
 * @function
 */
export declare const getPublic: (privateKey: Buffer) => Promise<Buffer>;
/**
 * Create an ECDSA signature.
 * @param {Buffer} privateKey - A 32-byte private key
 * @param {Buffer} msg - The message being signed, no more than 32 bytes
 * @return {Promise.<Buffer>} A promise that resolves with the
 * signature and rejects on bad key or message.
 */
export declare const sign: (privateKey: Buffer, msg: Buffer) => Promise<Buffer>;
/**
 * Verify an ECDSA signature.
 * @param {Buffer} publicKey - A 65-byte public key
 * @param {Buffer} msg - The message being verified
 * @param {Buffer} sig - The signature
 * @return {Promise.<null>} A promise that resolves on correct signature
 * and rejects on bad key or signature.
 */
export declare const verify: (publicKey: Buffer, msg: Buffer, sig: Buffer) => Promise<null>;
/**
 * Derive shared secret for given private and public keys.
 * @param {Buffer} privateKey - Sender's private key (32 bytes)
 * @param {Buffer} publicKey - Recipient's public key (65 bytes)
 * @return {Promise.<Buffer>} A promise that resolves with the derived
 * shared secret (Px, 32 bytes) and rejects on bad key.
 */
export declare const derive: (privateKey: Buffer, publicKey: Buffer) => Promise<Buffer>;
/**
 * Encrypt message for given recepient's public key.
 * @param {Buffer} publicKeyTo - Recipient's public key (65 bytes)
 * @param {Buffer} msg - The message being encrypted
 * @param {?{?iv: Buffer, ?ephemPrivateKey: Buffer}} opts - You may also
 * specify initialization vector (16 bytes) and ephemeral private key
 * (32 bytes) to get deterministic results.
 * @return {Promise.<Buffer>} - A promise that resolves with the ECIES structure serialized
 */
export declare const encrypt: (publicKeyTo: Buffer, msg: Buffer, opts?: {
    iv?: Buffer | undefined;
    ephemPrivateKey?: Buffer | undefined;
} | undefined) => Promise<Buffer>;
/**
 * Decrypt message using given private key.
 * @param {Buffer} privateKey - A 32-byte private key of recepient of
 * the mesage
 * @param {Ecies} encrypted - ECIES serialized structure (result of ECIES encryption)
 * @return {Promise.<Buffer>} - A promise that resolves with the
 * plaintext on successful decryption and rejects on failure.
 */
export declare const decrypt: (privateKey: Buffer, encrypted: Buffer) => Promise<Buffer>;
