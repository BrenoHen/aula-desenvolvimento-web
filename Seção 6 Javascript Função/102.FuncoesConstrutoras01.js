function Carro(velocidadeMaxima = 200, delta = 5){
    // atributo privado
    let velocidadeAtual = 0;

    // metodo publico
    this.acelerar = function(){
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta;
        } else {
            velocidadeAtual = velocidadeMaxima;
        }
    }

    // metodo publico
    this.getVelocidadeAtual = () => velocidadeAtual;
}

const uno = new Carro();
uno.acelerar();
console.log(`Velocidade atual do Uno: ${uno.getVelocidadeAtual().toFixed(2)} Km/H`);
