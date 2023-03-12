const rpc = 'https://rpc.elgafar-1.stargaze-apis.com/'; // testnet rpc

const recipient = 'stars1046np7yag468x8za9z3pjj5kx6ujalcmsyjcfk';

const sg721 =  'stars1s3ry4zwvrl828eemma26f5gvwxkh8tscpye0lgfym3xvkz5ky3sq5y0dxl';


const msgTokensOfAddr = {
    tokens: {
        owner: recipient,
        limit: 9000,
    },
};

module.exports = {
    rpc,
    recipient,
    sg721,
    msgTokensOfAddr,
}