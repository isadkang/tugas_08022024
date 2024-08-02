// Data Siswa
const siswa = [
    { nama: "Siswa 1", MTK: 90, INDO: 95, INGG: 85, DPK: 98, AGAMA: 90, kehadiran: 100 },
    { nama: "Siswa 2", MTK: 80, INDO: 85, INGG: 80, DPK: 85, AGAMA: 90, kehadiran: 100 },
    { nama: "Siswa 3", MTK: 100, INDO: 90, INGG: 95, DPK: 90, AGAMA: 100, kehadiran: 100 },
    { nama: "Siswa 4", MTK: 100, INDO: 90, INGG: 95, DPK: 90, AGAMA: 100, kehadiran: 100 },
];

let juara = null;

for (let i = 0; i < siswa.length; i++) {
    const totalNilai = siswa[i].MTK + siswa[i].INDO + siswa[i].INGG + siswa[i].DPK + siswa[i].AGAMA;
    console.log(totalNilai);
    if (totalNilai >= 475 && siswa[i].kehadiran === 100) {
        juara = siswa[i];
    }
}

if (juara) {
    console.log(`Juara kelas adalah ${juara.nama} dengan total nilai ${juara.MTK + juara.INDO + juara.INGG + juara.DPK + juara.AGAMA} dan kehadiran ${juara.kehadiran}.`);
} else {
    console.log('Tidak ada siswa yang memenuhi kriteria juara.');
}
