require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glimpse flame tone struggle dash prefer pulse good kiwi army giggle'; 
let testAccounts = [
"0x2bf6f08b488aafbfcb9b95e4942580d0116da021ec75c658afd088ab5afa45bb",
"0x88fe4aac49124059ba2777069a06c920656829c354c27c23074e1bb0de78a9c4",
"0x3f32c99f6a5d45a70c80c9f32c7498fc55e6392ce7c53f64e9ebe2b352b47136",
"0x28a4cdf43be56be1119e66ed7c71b9edfe0485d47fa7f68f51b64861f14f1eea",
"0x9ae5b30026e690fa40ac81c7e157b0ce29c22f60074677ce0dfffc34e4320b3e",
"0xd36d74aea83abd3a7ad8ae2ffff64fa04e60199e4c7946aa03e3434b282b5fa0",
"0xab4deae94cee6d11a9b8fc7974ded68af7e70dcaba5c394fa9c45c9d7a79cbff",
"0x6e34534375a8ef0295dba73c4b89d028dbb1c6666f19cbe6f6ca2e3df4e784eb",
"0x957278299fb73fc04f6d1bcffdff5b49416311a101526037923737c8c3e185a9",
"0x3e7a3bfd5b8d2f41974a7debb5ad062134aa26be1e31860dcc644228bf509e92"
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
            gas: 8000000,
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


