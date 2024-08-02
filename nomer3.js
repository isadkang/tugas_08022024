const total_detik = 5440

const jam = Math.floor(total_detik / 3600)
const sisa = Math.round(total_detik % 3600)
const menit = Math.floor(sisa / 60)
const detik = Math.round(sisa % 60)

console.log(`Jadi konversi dari ${total_detik} detik adalah ${jam} jam ${menit} menit ${detik} detik`);