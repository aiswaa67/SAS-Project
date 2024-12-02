const daftarPelanggan = JSON.parse(localStorage.getItem('pelanggan')) || [];
const tampilkanPelanggan = () => {

    const tblPelanggan =  document.getElementById('tblPelanggan')
    tblPelanggan.innerHTML = `<tr><th>No</th><th>Nama</th><th>Email</th><th>No Telepon</th><th>Alamat</th><th>Edit</th><th>Hapus</th></tr>`;

    for(let idx in daftarPelanggan.reverse()){
        console.log(`${parseInt(idx) + 1}. ${daftarPelanggan[idx].nama} emailnya ${daftarPelanggan[idx].email} dengan nomor telepon ${daftarPelanggan[idx].noTelepon} dan alamatnya di ${daftarPelanggan[idx].alamat}`);

        tblPelanggan.innerHTML += `<tr><td>${parseInt(idx) + 1}</td><td>${daftarPelanggan[idx].nama}</td><td>${daftarPelanggan[idx].email}</td><td>${daftarPelanggan[idx].noTelepon}</td><td>${daftarPelanggan[idx].alamat}</td><td><button class= "btn btn-warning" onclick="editPelanggan('${daftarPelanggan[idx].nama}')">Edit</button></td><td><button class= "btn btn-danger" onclick="hapusPelanggan('${daftarPelanggan[idx].nama}')">Delete</button></td></tr>`;

    }
}
tampilkanPelanggan();


const cariPelanggan = (nama) => {
    for(let i =0; i<daftarPelanggan.length; i++) 
        if (daftarPelanggan[i].nama == nama){
            return i
        }
        return -1;
 }
 
 const hapusPelanggan = (target) => {
    const indexDihapus= cariPelanggan (target)
    if (indexDihapus !== -1){
        daftarPelanggan.splice(indexDihapus,1)
        localStorage.setItem('pelanggan',JSON.stringify(daftarPelanggan));
        tampilkanPelanggan() 
    }
 }

 const editPelanggan = (target) => {
    const indexEdit= cariPelanggan (target)
    
    console.log(target)
    console.log(indexEdit)
    console.log(daftarPelanggan[indexEdit])

    const pelangganDiedit = daftarPelanggan[indexEdit]

    const nama = document.getElementById('exampleInputNama1').value = pelangganDiedit.nama
    const email = document.getElementById('exampleInputEmail1').value = pelangganDiedit.email
    const noTelepon = document.getElementById('exampleInputnoTelp1').value = pelangganDiedit.noTelepon
    const alamat = document.getElementById('exampleInputAlamat').value = pelangganDiedit.alamat

    mode =  indexEdit

    }

    const batalEdit = (target) => {
    document.getElementById('exampleInputNama1').value = ""
    document.getElementById('exampleInputEmail1').value = ""
    document.getElementById('exampleInputnoTelp1').value = ""
    document.getElementById('exampleInputAlamat').value = ""

         mode = 'tambah' 
    }