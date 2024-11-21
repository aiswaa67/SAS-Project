const daftarKaryawan = [
    {
        nama:"Devyn Ramirez",
        masaKerja: "10",
        noInduk: "1234567890",
        gajiKaryawan: "7000000"

    },
    {
        nama:"Harmony Duncan",
        masaKerja: "5",
        noInduk: "2109876543",
        gajiKaryawan: "4000000"

    },
    {
        nama:"Clarissa Burgess",
        masaKerja: "8",
        noInduk: "3210987654",
        gajiKaryawan: "7000000"

    },
    {
        nama:"Reilly Blanchard",
        masaKerja: "7",
        noInduk: "4321098765",
        gajiKaryawan: "7000000"

    },
    {
        nama: "Zion Brooks",
        masaKerja: "4",
        noInduk: "5432109876",
        gajiKaryawan: " 4000000"

    },
    {
        nama:"Jovanny Mays",
        masaKerja: "10",
        noInduk: "6543210987",
        gajiKaryawan: "7000000"

    },
    {
        nama:"Cindy Chase",
        masaKerja: "9",
        noInduk: "7654321098",
        gajiKaryawan: "7000000"

    },
    {
        nama:"Kristin Mcdaniel",
        masaKerja: "8",
        noInduk: "8765432109",
        gajiKaryawan: "7000000"

    },
    {
        nama:"Macey Sanford",
        masaKerja: "7",
        noInduk: "9876543210",
        gajiKaryawan: "7000000"

    },
    {
        nama:"Alfredo Faulkner",
        masaKerja: "10",
        noInduk: "10987654321",
        gajiKaryawan: "7000000"

},
]
     let mode = 'tambah'


 const tampilkanKaryawan = () => {

    const tblKaryawan =  document.getElementById('tblKaryawan')
    tblKaryawan.innerHTML = `<tr><th>No</th><th>Nama</th><th>Nomor Induk</th><th>Masa Kerja</th><th>Gaji Karyawan</th><th>Edit</th><th>Hapus</th></tr>`

    for(let idx in daftarKaryawan){
        console.log(`${parseInt(idx) + 1}. ${daftarKaryawan[idx].nama} bernomor induk ${daftarKaryawan[idx].noInduk} dengan masa kerja ${daftarKaryawan[idx].masaKerja} tahun dan memiliki gaji ${daftarKaryawan[idx].gajiKaryawan}`);

        tblKaryawan.innerHTML += `<tr><td>${parseInt(idx) + 1}</td><td>${daftarKaryawan[idx].nama}</td><td>${daftarKaryawan[idx].noInduk}</td><td>${daftarKaryawan[idx].masaKerja}</td><td>${daftarKaryawan[idx].gajiKaryawan}</td><td><buton class= "btn btn-warning" onclick="editKaryawan('${daftarKaryawan[idx].nama}')">Edit</button></td><td><buton class= "btn btn-danger" onclick="hapusKaryawan('${daftarKaryawan[idx].nama}')">Delete</button></td></tr>`

    }
}


const tambahKaryawan = () => {
    const nama = document.getElementById('txtNama').value
    const masaKerja = document.getElementById('noInduk').value
    const noInduk = document.getElementById('masaKerja').value
    const gajiKaryawan = document.getElementById('gajiKaryawan').value
    const karyawanBaru= {
        nama: nama,
        noInduk: noInduk,
        masaKerja: masaKerja,
        gajiKaryawan: gajiKaryawan,
    }
    if (mode == 'tambah') {
        daftarKaryawan.push(karyawanBaru)
    } else {
        daftarKaryawan[0] = karyawanBaru
    }
    
    document.getElementById('txtNama').value =""
    document.getElementById('noInduk').value = ""
    document.getElementById('masaKerja').value = ""
    document.getElementById('gajiKaryawan').value = ""

    mode = 'tambah'

    tampilkanKaryawan()
    
 }

 const cariKaryawan = (nama) => {
    for(let i =0; i<daftarKaryawan.length; i++) 
        if (daftarKaryawan[i].nama == nama){
            return i
        }
        return -1;
 }
 
 const hapusKaryawan= (target) => {
    const indexDihapus= cariKaryawan (target)
    if (indexDihapus !== -1){
        daftarKaryawan.splice(indexDihapus,1)
        tampilkanKaryawan()
    }
 }

 const editKaryawan = (target) => {
    const indexEdit= cariKaryawan (target)
    
    console.log(target)
    console.log(indexEdit)
    console.log(daftarKaryawan[indexEdit])

    const karyawanDiedit = daftarKaryawan[indexEdit]

    document.getElementById('txtNama').value = karyawanDiedit.nama
    document.getElementById('noInduk').value = karyawanDiedit.noInduk
    document.getElementById('masaKerja').value = karyawanDiedit.masaKerja
    document.getElementById('gajiKaryawan').value = karyawanDiedit.gajiKaryawan

    mode =  indexEdit
    }
    const batalEdit = (target) => {
    document.getElementById('txtNama').value = ""
    document.getElementById('noInduk').value = ""
    document.getElementById('masaKerja').value = ""
    document.getElementById('gajiKaryawan').value = ""

         mode = 'tambah' 
    }
 
