const config = require('./config');

const cosmwasm = require('cosmwasm');

const ics721 = 'stars1ve46fjrhcrum94c7d8yc2wsdz8cpuw73503e8qn9r44spr6dw0lsvmvtqh';

//const message = {class_id: {contract:'stars1ff06t96hwd96fa3pq7uxgrxqqt3gv4zda444k0kappcr6tcwyzass8e4jz'}};

const message = {class_id: {contract:'stars1n23k88tvv7s9mk38wcjpw255fvqfajqtysm5pn4q478dqd9cac5qmszm4g'}};

//const message = {nft_contract:{class_id: 'wasm.stars1ve46fjrhcrum94c7d8yc2wsdz8cpuw73503e8qn9r44spr6dw0lsvmvtqh/channel-203/uptickCollection0226'}};

//const message = {class_metadata:{class_id: 'wasm.stars1ve46fjrhcrum94c7d8yc2wsdz8cpuw73503e8qn9r44spr6dw0lsvmvtqh/channel-203/uptickCollection0226'}};

//const message = {token_metadata:{class_id: 'wasm.stars1ve46fjrhcrum94c7d8yc2wsdz8cpuw73503e8qn9r44spr6dw0lsvmvtqh/channel-207/arkprotocol002', token_id:'ark003'}};

//const message = {owner:{class_id: 'wasm.stars1ve46fjrhcrum94c7d8yc2wsdz8cpuw73503e8qn9r44spr6dw0lsvmvtqh/channel-207/arkprotocol002', token_id:'ark003'}};

//const message = {pauser:{}};

//const message = {paused:{}};

//const message = {proxy:{}};

async function main() {
    
    const client = await cosmwasm.CosmWasmClient.connect(config.rpc);

    let response = await client.queryContractSmart(ics721, message);


    console.log(response)


   
}

main()
