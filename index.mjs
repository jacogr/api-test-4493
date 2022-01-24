import { ApiPromise, WsProvider } from '@polkadot/api';

async function main () {
	const api = await ApiPromise.create({
		provider: new WsProvider('wss://westmint-rpc.polkadot.io')
	});

	console.log('\nquery', api.query.uniques, '\ntx', api.tx.uniques);
}

main()
	.catch(console.error)
	.finally(() => process.exit(0));
