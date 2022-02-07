

const apply = (string, fun) => {

    return (fun(string))
}

const exprOne = 'supercalifragilisticexpialidocious';
console.log(`${apply(exprOne, str => str.replaceAll('c', '?c').split('?'))}`)

const exprTwo = 'supercalifragilisticexpialidocious';
let res = apply(exprOne, str => (
    {
        originalString: str,
        modifiedString: str.replaceAll('a', 'A'),
        numberReplaced: str.replaceAll('a', 'A').split('A').length - 1,
        length: str.replaceAll('a', 'A').length
    })
)
console.table(res)

