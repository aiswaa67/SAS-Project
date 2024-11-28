const daftarPelanggan= [
    {
        nama:"Devyn Ramirez",
        email: "awwwrsavh@gmail.com",
        noTelepon: "123456789009",
        alamat: "Jalan Melati"

    },
    {
        nama:"Harmony Duncan",
        email: "5",
        noTelepon: "2109876543",
        alamat: "4000000"

    },
    {
        nama:"Clarissa Burgess",
        email: "8",
        noTelepon: "3210987654",
        alamat: "7000000"

    },
    {
        nama:"Reilly Blanchard",
        email: "7",
        noTelepon: "4321098765",
        alamat: "7000000"

    },
    {
        nama: "Zion Brooks",
        email: "4",
        noTelepon: "5432109876",
        alamat: " 4000000"

    },
    {
        nama:"Jovanny Mays",
        email: "10",
        noTelepon: "6543210987",
        alamat: "7000000"

    },
    {
        nama:"Cindy Chase",
        email: "9",
        noTelepon: "7654321098",
        alamat: "7000000"

    },
    {
        nama:"Kristin Mcdaniel",
        email: "8",
        noTelepon: "8765432109",
        alamat: "7000000"

    },
    {
        nama:"Macey Sanford",
        email: "7",
        noTelepon: "9876543210",
        alamat: "7000000"

    },
    {
        nama:"Alfredo Faulkner",
        email: "10",
        noTelepon: "10987654321",
        alamat: "7000000"

},
]
     let mode = 'tambah'


 const tampilkanPelanggan = () => {

    const tblPelanggan =  document.getElementById('tblPelanggan')
    tblPelanggan.innerHTML = <tr><th>No</th><th>Nama</th><th>Email</th><th>No Telepon</th><th>Alamat</th><th>Edit</th><th>Hapus</th></tr>

    for(let idx in daftarPelanggan){
        console.log(`${parseInt(idx) + 1}. ${daftarPelanggan[idx].nama} emailnya ${daftarPelanggan[idx].email} dengan nomor telepon ${daftarPelanggan[idx].noTelepon} dan alamatnya di ${daftarPelanggan[idx].alamat}`);

        tblPelanggan.innerHTML += <tr><td>${parseInt(idx) + 1}</td><td>${daftarPelanggan[idx].nama}</td><td>${daftarPelanggan[idx].email}</td><td>${daftarPelanggan[idx].noTelepon}</td><td>${daftarPelanggan[idx].alamat}</td><td><button class= "btn btn-warning" onclick="editPelanggan('${daftarPelanggan[idx].nama}')">Edit</button></td><td><button class= "btn btn-danger" onclick="hapusPelanggan('${daftarPelanggan[idx].nama}')">Delete</button></td></tr>

    }
}


const tambahPelanggan = () => {
    const nama = document.getElementById('exampleInputNama1').value
    const email = document.getElementById('exampleInputEmail1').value
    const noTelepon = document.getElementById('exampleInputnoTelp1').value
    const alamat = document.getElementById('exampleInputNama1').value
    const pelangganBaru= {
        nama: nama,
        email: email,
        noTelepon: noTelepon,
        alamat: alamat,
    }
    if (mode == 'tambah') {
        daftarPelanggan.push(pelangganBaru)
    } else {
        daftarPelanggan[0] = pelangganBaru
    }
    
    document.getElementById('exampleInputNama1').value =""
    document.getElementById('exampleInputEmail1').value = ""
    document.getElementById('exampleInputnoTelp1').value = ""
    document.getElementById('exampleInputNama1').value = ""

    mode = 'tambah'

    tampilkanPelanggan()
    
 }

 const cariPelanggan = (nama) => {
    for(let i =0; i<daftarPelanggan.length; i++) 
        if (daftarPelanggan[i].nama == nama){
            return i
        }
        return -1;
 }
 
 const hapusPelanggan= (target) => {
    const indexDihapus= cariPelanggan (target)
    if (indexDihapus !== -1){
        daftarPelanggan.splice(indexDihapus,1)
        tampilkanPelanggan()
    }
 }

 const editPelanggan = (target) => {
    const indexEdit= cariPelanggan (target)
    
    console.log(target)
    console.log(indexEdit)
    console.log(daftarPelanggan[indexEdit])

    const pelangganDiedit = daftarPelanggan[indexEdit]

    document.getElementById('exampleInputNama1').value = pelangganDiedit.nama
    document.getElementById('exampleInputEmail1').value = pelangganDiedit.email
    document.getElementById('exampleInputnoTelp1').value = pelangganDiedit.noTelepon
    document.getElementById('exampleInputNama1').value = pelangganDiedit.alamat

    mode =  indexEdit
    }
    const batalEdit = (target) => {
    document.getElementById('exampleInputNama1').value = ""
    document.getElementById('exampleInputEmail1').value = ""
    document.getElementById('exampleInputnoTelp1').value = ""
    document.getElementById('exampleInputNama1').value = ""

         mode = 'tambah' 
    }

