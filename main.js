function calculaSaldoRanckeadas(vitoria, derrotas){
  return vitoria - derrotas
}

function retornaNivelJogador(saldo){
  let nivel = ""
  if(saldo <= 10) nivel = "Ferro"
  if(saldo > 10 && saldo <= 20)  nivel= "Bronze"
  if(saldo > 20 && saldo <= 50)  nivel= "Prata"
  if(saldo > 50 && saldo <= 80)  nivel= "Ouro"
  if(saldo > 80 && saldo <= 90)  nivel= "Diamante"
  if(saldo > 90 && saldo <= 100) nivel = "Lendário"
  if(saldo >= 101 ) nivel = "Imortal"
  return nivel
  }

let vitorias = Number.parseInt(prompt("Quantas vitórias teve o Jogador?"))
let derrotas = Number.parseInt(prompt("Quantas derrotas teve o Jogador?"))


let saldoVitorias = calculaSaldoRanckeadas(vitorias, derrotas)
let nivel = retornaNivelJogador(saldoVitorias)
console.log(`O Herói tem de saldo de **${saldoVitorias}** está no nível de **${nivel}**`)
alert(`O Herói tem de saldo de **${saldoVitorias}** está no nível de **${nivel}**`)