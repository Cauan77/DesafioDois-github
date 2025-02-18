alert ('Bem vindo ao jogo do número secreto');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


var minimo = 0;

var maximo = 10;

let numeroSecreto = getRandomInt(minimo, maximo);

console.log ('O NÚMERO SECRÉTO É O ' + numeroSecreto);

var i = true;

var t = true;

var tentarnov = '';

var tentativa = 1;

while (i == true) {

    t = true;

    let chute = prompt ('Escolha um número entre ' + minimo + ' e ' + maximo);

    if (numeroSecreto == chute) {

        alert ('Isso aí! você descobriu o número secreto! (' + numeroSecreto + ')');

        i = false; 

    } else {

        alert ('Você errou!');
        
        if (numeroSecreto > chute) {

            alert ('O número secreto é maior do que ' + chute + '. Tente novamente.');

        } else {

            alert ('O número secreto é menor do que ' + chute + '. Tente novamente.');

        }

        while (t == true) {

            tentarnov = prompt ('Você deseja tentar novamente? Se sim, digite "S", caso contrário, digite "N" para não');

            tentarnov = tentarnov.trim();

            if (tentarnov == 'N' || tentarnov == 'n' ) {

                t = false;
                i = false;

            } else {

                if (tentarnov == 'S' || tentarnov == 's') {

                    tentativa++;

                    t = false;

                } else {

                    alert ('Você digitou um caracter inválido, peço que digite "S" para sim ou "N" para não, por gentileza.');

                }

            }

        }

    }

}


let palavratent = tentativa > 1 ? 'tentativas' : 'tentativa';
alert ('Parabéns, você precisou de ' + tentativa + ' ' + palavratent + ' para conseguir acertar o número secreto!');


