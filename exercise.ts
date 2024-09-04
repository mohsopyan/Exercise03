// Soal 1 "Write a code to display the multiplication table of a given integer"
const num1: number = 9;
for(let i = 1; i <= 10; i++) {
    console.log(`${num1} X ${i}`);
}

// Soal 2 "Write a code to check whether a string is a palindrome or not"
let str: string = "madam";
let rev: string = str.split("").reverse().join("");
console.log(str === rev ? `${str} -> palindrom` : `${str} -> not palindrom`);

// Soal 3 "Write a code to convert centimeter to kilometer"
let cm: number = 100000;
const cmToKm: number = cm / 100000;

console.log(`100000 -> ${cmToKm} Km`);

// Soal 4 "Write a code to format number as currency (IDR)"
// cara 1
let num2: number = 1000;
let numToCurr = num2.toLocaleString("in-ID", {
    style: "currency",
    currency: "IDR"
});
console.log(`1000 -> ${numToCurr}`);

// Cara 2
numToCurr = new Intl.NumberFormat("in-ID", {
    style: "currency",
    currency: "IDR"
}).format(num2);
console.log(`1000 -> ${numToCurr}`);

// Soal 5 "Write a code to remove the first occurrence of a given 'search string' from a string"
let str2: string = "Hello World";
const searchStr: string = "ell";

console.log(`ell -> ${str2.replace(searchStr, "")}`);

// Soal 6 "Write a code to capitalize the first letter of each word in a string"
let firstStr: string = "hello word";
const words: string[] = firstStr.split(' ');// Membagi string menjadi kata-kata

 // Menggunakan huruf kapital pada huruf pertama dan membuat sisanya menjadi huruf kecil
const result: string[] = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
const toStr: string = result.join(' '); // Gabungkan kata-kata kembali menjadi satu string

console.log(`${firstStr} -> ${toStr}`);