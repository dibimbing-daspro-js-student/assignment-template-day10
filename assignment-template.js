class Sekolahan {
    constructor(daftarSiswa) {
        this.daftarSiswa = daftarSiswa
    }

    searchNilaiMapel(mapel, nilai) {
        const daftarSiswaByNilaiMapel = []
        // kode untuk search nilai mata pelajaran

        return daftarSiswaByNilaiMapel
    }

    daftarRankingSiswa() {
        const daftarRanking = this.daftarSiswa.map(siswa => ({ ranking: siswa.ranking, nama: siswa.nama, kelas: siswa.kelas, "nilai rata rata": siswa.nilaiRataUjian }))
        // kode untuk membuat ranking siswa

        return daftarRanking
    }

    daftarAbsensiSiswa() {
        const daftarAbsensi = this.daftarSiswa.map(siswa => ({ nama: siswa.nama, kelas: siswa.kelas }))
        // kode untuk membuat absensi siswa

        return daftarAbsensi
    }
}

// buat class Siswa dibawah sini


// --------

const bima = {
    nama: "Bima",
    kelas: "10A",
    nilaiUjian: { matematika: 90, ipa: 88, ips: 29, bahasa: 70, komputer: 100 },
    nilaiRataUjian: 0,
    ranking: 0,
}

const daftarSiswa = [
    bima,
    // 9 data lain ...
]

const sekolahTadikaMesra = new Sekolahan(daftarSiswa)

const daftarSiswaByNilaiMapel = sekolahTadikaMesra.searchNilaiMapel("ipa", 80)
const daftarRankingSiswa = sekolahTadikaMesra.daftarRankingSiswa()
const daftarAbsensiSiswa = sekolahTadikaMesra.daftarAbsensiSiswa()

console.log("=============== DAFTAR SISWA UNTUK PELAJARAN ===============")
console.table(daftarSiswaByNilaiMapel)

console.log("=============== DAFTAR RANKING ===============")
console.table(daftarRankingSiswa)

console.log("=============== DAFTAR ABSENSI ===============")
console.table(sekolahTadikaMesra.daftarAbsensiSiswa())