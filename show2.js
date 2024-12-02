const daftarBunga = JSON.parse(localStorage.getItem('bunga')) || [];
const tampilkanBunga = () => {

    const tblBunga =  document.getElementById('tblBunga')
    tblBunga.innerHTML = `<tr><th>No</th><th>Nama Pelanggan</th><th>Nama Bunga</th><th>Link Bunga</th><th>Harga Bunga</th><th>Jumlah Bunga</th><th>Harga Total</th></tr><th>Edit</th><th>Hapus</th></tr>`;

    for(let idx in daftarBunga.reverse()){
        console.log(`${parseInt(idx) + 1}. ${daftarBunga[idx].namaPelanggan} membeli ${daftarBunga[idx].namaBunga} dan ini gambar bunganya ${daftarBunga[idx].linkBunga} harga satu tangkai bunga ini ${daftarBunga[idx].hargaBunga} saya membeli bunga berjumlah ${daftarBunga[idx].jumlahBunga} dan harga total bunganya Rp.  ${daftarBunga[idx].hargaTotal}`);

        tblBunga.innerHTML += `<tr><td>${parseInt(idx) + 1}</td><td>${daftarBunga[idx].namaPelanggan}</td><td>${daftarBunga[idx].namaBunga}</td><td>${daftarBunga[idx].linkBunga}</td><td>${daftarBunga[idx].hargaBunga}</td><td>${daftarBunga[idx].jumlahBunga}</td><td>${daftarBunga[idx].hargaTotal}</td><td><button class= "btn btn-warning" onclick="editBunga('${daftarBunga[idx].namaBunga}')">Edit</button></td><td><button class= "btn btn-danger" onclick="hapusBunga('${daftarBunga[idx].namaBunga}')">Delete</button></td></tr>`;

    }
}
tampilkanBunga();


const cariBunga = (nama) => {
    for(let i =0; i<daftarBunga.length; i++) 
        if (daftarBunga[i].namaBunga == namaBunga){
            return i
        }
        return -1;
 }
 
 const hapusBunga= (target) => {
    const indexDihapus= cariBunga (target)
    if (indexDihapus !== -1){
        daftarBunga.splice(indexDihapus,1)
        localStorage.setItem('bunga',JSON.stringify(daftarBunga));
        tampilkanBunga()
    }
 }

 const editBunga = (target) => {
    const indexEdit= cariBunga (target)
    
    console.log(target)
    console.log(indexEdit)
    console.log(daftarBunga[indexEdit])

    const bungaDiedit = daftarBunga[indexEdit]

    document.getElementById('namaPelanggan').value = bungaDiedit.namaPelanggan
    document.getElementById('namaBunga').value = bungaDiedit.namaBunga
    document.getElementById('linkBunga').value = bungaDiedit.linkBunga
    document.getElementById('hargaBunga').value = bungaDiedit.hargaBunga
    document.getElementById('jumlahBunga').value = bungaDiedit.jumlahBunga
    document.getElementById('hargaTotal').value = bungaDiedit.hargaTotal

    mode =  indexEdit
    }
    const batalEdit = (target) => {
    document.getElementById('namaPelanggan').value = ""
    document.getElementById('namaBunga').value = ""
    document.getElementById('linkBunga').value = ""
    document.getElementById('hargaBunga').value = ""
    document.getElementById('jumlahBunga').value = ""
    document.getElementById('hargaTotal').value = ""

         mode = 'tambah' 
    }