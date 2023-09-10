
let nomePlayer = "Nanda Hime "
let matarMinotauro = 3000
let matarDragão = 5000
let matarGlobblin = 500

console.log (nomePlayer + " venceu a batalha contra o Globblin + 500 xp")
console.log (nomePlayer + " venceu a batalha contra o Minotauro + 3000 xp")
console.log (nomePlayer + " venceu a batalha contra o Minotauro + 3000 xp")
console.log (nomePlayer + " venceu a batalha contra o Dragão + 5000 xp")

let calcularXp = (matarGlobblin + matarDragão + 2* matarMinotauro)
let xp = calcularXp

let nivelPlayer;

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


console.log (nomePlayer + "voçê está no nível " + nivelPlayer + " com " + xp + " pontos de xp. ")
