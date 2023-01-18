const A = { register: () => {} };
const B = { register: () => {} };

async function main(minimum, callbackDelayPairs) {
	const wait = (ms) => new Promise((done) => setTimeout(done, ms));
	const all = [];
	const filtered = [];
	for (const [ callback, delay ] of callbackDelayPairs) {
		const [ value ] = await Promise.all([
			callback(A, B),
			wait(delay),
		]);
		all.push([ callback, value ]);
		if (value >= minimum) {
			filtered.push([ callback, value ]);
		}
	}
	filtered.sort((a, b) => a[1] - b[1]);
	return { all, filtered };
};

// Teste
async function f1(A, B) {
	A.register(f1, 4);
	return 4;
}
async function f2(A, B) {
	B.register(f2, 5);
	return 5;
}
async function f3(A, B) {
	A.register(f3, 20);
	return 20;
}
let minimum = 5;
let callbackDelayPairs = [
	[f1, 100],
	[f2, 0],
	[f3, 5000],
];
main(minimum, callbackDelayPairs).then(console.log);