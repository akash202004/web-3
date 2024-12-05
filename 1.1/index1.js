const crypto = require("crypto");

function findHashPrefix(prefix) {
  let inp = 0;
  while (true) {
    let input = inp.toString();
    let hash = crypto.createHash("sha256").update(input).digest("hex");
    if (hash.startsWith(prefix)) {
      return {
        input: input,
        hash: hash,
      };
    }
    inp++;
  }
}

const out = findHashPrefix("00000");
console.log(out.input);
console.log(out.hash);
