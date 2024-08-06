
class Jogador {
    constructor(nome, gols, assistencias) {
        this.nome = nome;
        this.gols = gols;
        this.assistencias = assistencias;
    }
}


class Atacante extends Jogador {
    constructor(nome, gols, assistencias, faltas, cartoesAmarelos, cartoesVermelhos) {
        super(nome, gols, assistencias); 
        this.faltas = faltas;
        this.cartoesAmarelos = cartoesAmarelos;
        this.cartoesVermelhos = cartoesVermelhos;
    }
}


class Defensor extends Jogador {
    constructor(nome, gols, assistencias, faltas, cartoesAmarelos, cartoesVermelhos) {
        super(nome, gols, assistencias); 
        this.faltas = faltas;
        this.cartoesAmarelos = cartoesAmarelos;
        this.cartoesVermelhos = cartoesVermelhos;
    }
}


const atacante1 = new Atacante("Cristiano Ronaldo", 700, 200, 30, 10, 1);
const atacante2 = new Atacante("Lionel Messi", 750, 300, 25, 8, 0);
const defensor1 = new Defensor("Sergio Ramos", 100, 50, 150, 150, 20);


console.log(atacante1);
console.log(atacante2);
console.log(defensor1);
