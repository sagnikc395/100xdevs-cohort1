function calc(a, b, op) {
    if (op == "add") {
        return a + b;
    }
    else if (op == "sub") {
        return a - b;
    }
    else if (op == "mul") {
        return a * b;
    }
    else if (op == "div") {
        return a / b;
    }
    return undefined;
}
console.log(calc(123, 456, 'add'));
console.log(calc(456, 789, ''));
