def clasificar_imc(peso: float, altura: float) -> str:
    imc = peso / altura**2

    if imc < 18.5:
        return "Bajo peso"
    elif imc < 25:
        return "Peso normal"
    elif imc < 30:
        return "Sobrepeso"
    else:
        return "Obesidad"
