

const reverseAlphabetical = (string) => {

    let res = string.split(``).sort().reverse().join('');
    return res;
}

console.log(reverseAlphabetical("test"));
console.log(reverseAlphabetical("exioi"));