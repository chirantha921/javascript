// Global scope
var globalVar = "I'm a global variable 1";
var globalVar="I'm a global variable I re- declared";
let globalLet = "I'm also global, but scoped with let";

const globalConst = "I'm a global constant";
{
// Block scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}

// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"

//Block Scope
console.log(blockVar);
//console.log(blockLet);

function show(){
    var functionVar="Im a blocked scoped var";
    let functionLet="Im a blocked scoped let";
    const funtionConst="Im a blocked scoped const";
}

show();
//console.log(functionvar);
//console.log(fuctionLet);
//console.log(functionConst);