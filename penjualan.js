const daftarPelanggan= [
    {
        nama:"Naradhipta Bayanaka",
        email: "dhipta@gmail.com",
        noTelepon: "089765473241",
        alamat: "Jalan Srigunting Raya No.1 Party Anthem / (022) 601-1304"

    },
    {
        nama:"Anasera Lavanya",
        email: "anasera@gmail.com",
        noTelepon: "086754321785",
        alamat: "Jalan Batununggal No.3, Mengger / 753-1377"

    },
    {
        nama:"Maisadipta Awahita",
        email: "mais@gmail.com",
        noTelepon: "082356741853",
        alamat: "Jalan Alun-Alun Utara No. 211 / 780-0003"

    },
    {
        nama:"Saskara Raespati",
        email: "raespat@gmail.com",
        noTelepon: "089673583231",
        alamat: "Jalan A H Nasution No. 14, Jatihandap / 727-1129 "

    },
    {
        nama: "Abhipraya Gautama",
        email: "abhipray@gmail.com",
        noTelepon: "085643128954",
        alamat: "Jalan Venus No.6, Gumuruh / 731-6330"

    }
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

