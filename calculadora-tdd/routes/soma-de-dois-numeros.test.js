const soma = require("./soma-de-dois-numeros")
const multiplicacao = require("./soma-de-dois-numeros")
const divisao = require("./soma-de-dois-numeros")
const subtracao = require("./soma-de-dois-numeros")

test("Deve somar dois numeros", () => {
    expect(soma(2, 4)).toBe(6)
})

// test("Deve multiplicar dois numeros", () => {
//     expect(multiplicacao(2, 4)).toBe(8)
// })

// test("Deve dividir dois numeros", () => {
//     expect(divisao(2, 4)).toBe(2)
// })

// test("Deve subtrair dois numeros", () => {
//     expect(subtracao(10, 4)).toBe(6)
// })