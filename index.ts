// Soal 1
const num1: number = 9;
for(let i = 1; i <= 10; i++) {
    console.log(`${num1} X ${i}`);
}

// Soal 2
let str: string = "madam";
let rev: string = str.split("").reverse().join("");
console.log(str === rev ? `${str} -> palindrom` : `${str} -> not palindrom`);

// Soal 3
let cm: number = 100000;
const cmToKm: number = cm / 100000;

console.log(`100000 -> ${cmToKm} Km`);

// Soal 4
let num2: number = 1000;
const numToCurr = num2.toLocaleString("in-ID", {
    style: "currency",
    currency: "IDR"
});

console.log(`1000 -> ${numToCurr}`);

// Soal 5
let str2: string = "Hello World";
const searchStr: string = "ell";

console.log(`ell -> ${str2.replace(searchStr, "")}`);
