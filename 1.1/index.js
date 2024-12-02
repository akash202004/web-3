const crypto = require("crypto");

function findHashPrefix(prefix) {
  let inp = 0;
  while (true) {
    let input = "100xdevs" + inp.toString();
    let newInp =
      `harkirat => Raman | Rs 100 Ram => Ankit | Rs 10` + inp.toString();
    let hash = crypto.createHash("sha256").update(newInp).digest("hex");
    if (hash.startsWith(prefix)) {
      return {
        input: newInp,
        hash: hash,
      };
    }
    inp++;
  }
}

const out = findHashPrefix("00000");
console.log(out.input);
console.log(out.hash);
