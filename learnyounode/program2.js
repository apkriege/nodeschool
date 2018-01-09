let args = process.argv;
let ct = 0;

for(let i=2; i<args.length; i++){
	ct = ct + Number(args[i]);
}

console.log(ct);
