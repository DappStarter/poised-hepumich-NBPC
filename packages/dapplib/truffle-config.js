require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea kitten fresh skull drift reflect noise attitude hope enrich sure gauge'; 
let testAccounts = [
"0xb44d5e28eb58f1740e4f454521429800631764852d5aa55de75aa13382262752",
"0x1bdecc1f757178289d9aaba6f935fb340eba9d6621d9cf29a94439d78c501f9a",
"0x1e4f26be7929f2a3e8603dfdf7f2bb8cf8601426af862eb5810fdb2677f0b570",
"0x4e555b169a6d4645f3ada710768b46af565eed1f3b23f5672d8317ba735e339d",
"0x5df76649aab067ac19dbf780b8ad276d31550a09bd1c9804014b63fb1b9c819c",
"0x4bc0220e60d01fc407adef0e60f1887a45cadc9033b52785d5b6a10c124afa59",
"0xc0717a2a81bf288b4266c446d80df809c200a3de6696e5c5d77a1fc8d86cac2f",
"0xa34f7ab5e9933415e1d0ba43634952ced3e0b0a582fd97d7d60c4eff75d7105a",
"0x513340e8baf0b57c7c1d936add5d0f757e2391ce411929cb512e61a3ae7a623e",
"0x9bcb4b7ae83910b64feb8bb9b39eb0b7c13b7017c91d314eaee6beb53fac3d03"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


