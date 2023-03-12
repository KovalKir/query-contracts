const config = require('./config');

const cosmwasm = require('cosmwasm');


async function main() {
    
    const client = await cosmwasm.CosmWasmClient.connect(config.rpc);
    
    
    //get list of avaliable sg721 contracts 
    const contracts = await client.getContracts(274);

    console.log(contracts)

    // uncomment else to see working with collections which user has no NFTs
    for (const sg721 of contracts) {
        let nfts = await client.queryContractSmart(sg721, config.msgTokensOfAddr);

        let tokens = nfts.tokens;
        if (tokens.length > 0) {
            console.log(sg721);
            console.log(tokens);
        } //else {console.log (`user has no nfts of ${sg721} collection`)}
    }

}

main()
