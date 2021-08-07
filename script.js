console.log("Javascript carregando...");

// 3 - Verifica o cpf
function validaCPF(cpf) {
    
    console.log(cpf.length);
    if(cpf.length != 11) {
        return false;
    } else {
        const numeros = cpf.substring(0, 9);
        const digitos = cpf.substring(9);
        console.log(`Números do cpf ${numeros} `);
        console.log(`Dígitos do cpf ${digitos} `);

        var soma = 0;

        for(let i = 10; i > 1; i--) {
            soma += numeros.charAt(10 - i) * i;
        }

        console.log(`soma é ${soma}`);

        var resultado = (soma % 11 < 2) ? 0 : 11 - (soma % 11);

        // Validação do primeiro dígito
        if(resultado != digitos.charAt(0)) {
            return false;
        }

        console.log(
            `${digitos.toString.charAt(0)} é a primeira posição da variável soma`
        );

        soma = 0;
        // numeros = cpf.substring(0, 10);

        // for(var k = 11; k > 1; k--) {
        //     soma += numeros.charAt(11 - k) * k;
        // }

        // console.log(soma);


        return true;
    }    
}

function validacao() {
    
    // Limpa mensagem de success e error
    document.getElementById("success").style.display = "none";
    document.getElementById("error").style.display = "none";
    
    console.log("Inicinado validação CPF");    

    // 1 - Obtendo cpf digitado
    let cpf = document.getElementById("cpf_digitado").value;
    console.log(cpf);

    // 2 - Chama função para validar
    const resultadoValidacao = validaCPF(cpf);

    // 4 - Exibe mensagem de sucesso, caso cpf esteja correto
    if(resultadoValidacao) {
        document.getElementById("success").style.display = "block";
    } else {
        document.getElementById("error").style.display = "block";
    }

}
