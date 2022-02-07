
const evaluate = (expr) => {

    if (expr.length > 3) {
        throw new TypeError();
    }

    let op = expr[1];
    switch (op) {
        case '+':
            const add = (expr) => {
                return parseInt(expr[0]) + parseInt(expr[2]);
            }
            return add;
        case '-':
            const sub = (expr) => {
                return parseInt(expr[0]) - parseInt(expr[2]);
            }
            return sub;
        case '/':
            const div = (expr) => {
                return parseInt(expr[0]) / parseInt(expr[2]);
            }
            return div;
        case '*':
            const mult = (expr) => {
                return parseInt(expr[0]) * parseInt(expr[2]);
            }
            return mult;
        case '%':
            const mod = (expr) => {
                return parseInt(expr[0]) % parseInt(expr[2]);
            }
            return mod;
        case '^':
            const exp = (expr) => {
                return parseInt(expr[0]) ** parseInt(expr[2]);
            }
            return exp;
        default:
            throw new TypeError('Invalid Operation')
    }
}

const expression = '8%3';
let operator = evaluate(expression);
console.log(`${expression} = ${operator(expression)}`)

const expressionTwo = '2^8'
operator = evaluate(expressionTwo);
console.log(`${expressionTwo} = ${operator(expressionTwo)}`)