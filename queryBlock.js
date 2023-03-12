const config = require('./config');

const cosmwasm = require('cosmwasm');

async function main() {
    
    const client = await cosmwasm.CosmWasmClient.connect(config.rpc);
    

    const obj = await client.searchTx({height: 	3720236});

    console.log(obj);

}

main()