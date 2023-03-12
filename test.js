const config = require('./config');

const cosmwasm = require('cosmwasm');


async function main() {
    
    const client = await cosmwasm.CosmWasmClient.connect(config.rpc);

    const contracts = await client.getContracts(274);

    // find config.sg721 contract among contracts
    const ach = contracts.find(element => element == config.sg721);
    //find config.sg721's index
    const achIndex = contracts.findIndex(element => element == config.sg721);
    //query tokens owned by address
    const nfts = await client.queryContractSmart(contracts[achIndex], config.msgTokensOfAddr);
    
    console.log(nfts);

    const info = await client.queryContractSmart(contracts[achIndex], {
        all_nft_info: { token_id: '3'},
    });

    console.log(info)
    

}

main()
