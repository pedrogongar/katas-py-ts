type CategoriaImc = "Bajo peso" | "Peso normal" | "Sobrepeso" | "Obesidad"

export const clasificarImc = (peso: number, altura: number): CategoriaImc => {
    const imc = peso / altura ** 2

    if (imc < 18.5) return "Bajo peso"
    else if (imc < 25) return "Peso normal"
    else if (imc < 30) return "Sobrepeso"
    else return "Obesidad"
}
