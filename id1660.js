const cosmwasm = require('cosmwasm');

const config = require('./config');

const msgOwner = {
    tokens: {
        owner: 'stars183e7ccwsnngj2q8lfxnmekunspnfxs6q8nzqcf',
        limit: 10000,
    },
};

const msgCollectionInfo = {
    contract_info: { },
}

async function main() {
    
    const client = await cosmwasm.CosmWasmClient.connect(config.rpc);

    const contracts = await client.getContracts(1660);

    console.log(contracts);

    for (const contract of contracts) {
        let nfts = await client.queryContractSmart(contract, msgOwner);

        let tokens = nfts.tokens;
        if (tokens.length > 0) {
            console.log(contract);
            console.log(tokens);
            const info_1st_token = await client.queryContractSmart(contract, {
                all_nft_info: { token_id: tokens[0]},
            })
            console.log(info_1st_token)
        } //else {console.log (`user has no nfts of ${sg721} collection`)}
        
    }


   
}

main()