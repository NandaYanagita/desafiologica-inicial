//variáveis
let nomePlayer = "Nanda Hime "
let xp = 8987
let nivelPlayer;

//laço decisão
if (xp < 1000) {
    nivelPlayer = "Ferro";} 
else if (xp >= 1001 && xp <= 2000) {
    nivelPlayer = "Bronze";} 
else if (xp >= 2001 && xp <= 5000) {
    nivelPlayer = "Prata";} 
else if (xp >= 5001 && xp <= 7000) {
    nivelPlayer = "Ouro";} 
else if (xp >= 7001 && xp <= 8000) {
    nivelPlayer = "Platina"} 
else if (xp >= 8001 && xp <= 9000) {
    nivelPlayer = "Ascendente";} 
else if (xp >= 9001 && xp <= 10000) {
    nivelPlayer = "Imortal";} 
else if (xp >= 10001) {
    nivelPlayer = "Radiante";}

//saída
console.log (nomePlayer + "voçê está no nível " + nivelPlayer + " com " + xp + " pontos de xp. ")
