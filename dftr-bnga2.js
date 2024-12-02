let mode = 'tambah'

const tampilkanBunga = () => {

    const tblBunga = document.getElementById('tblBunga')
    tblBunga.innerHTML = '<tr><th>No</th><th>Nama Pelanggan</th><th>Nama Bunga</th><th>Link Bunga</th><th>Harga Bunga</th><th>Jumlah Bunga</th><th>Harga Total</th><th>Edit</th><th>Hapus</th></tr>'

    for(let idx in daftarBunga) {
        console.log(`${parseInt(idx) + 1}. ${daftarBunga[idx].namaPelanggan} ${daftarBunga[idx].namaBunga} ${daftarBunga[idx].linkBunga} ${daftarBunga[idx].hargaBunga} ${daftarBunga[idx].jumlahBunga} ${daftarBunga[idx].hargaTotal}`)
    
        tblBunga.innerHTML += `<tr><td>${parseInt(idx) + 1}</td><td>${daftarBunga[idx].namaPelanggan}</td><td>${daftarBunga[idx].namaBunga}</td><td>${daftarBunga[idx].linkBunga}</td><td>${daftarBunga[idx].hargaBunga}</td><td>${daftarBunga[idx].jumlahBunga}</td><td>${daftarBunga[idx].hargaTotal}</td><td><button class="btn btn-warning" onclick="editBunga('${daftarBunga[idx].namaBunga}')">Edit</button></td><td><button class="btn btn-danger" onclick="hapusBunga('${daftarBunga[idx].namaBunga}')">Delete</button></td></tr>`
    }
}

const tambahBunga = () => {

    const namaPelanggan = document.getElementById('namaPelanggan').value 
    const namaBunga = document.getElementById('namaBunga').value 
    const linkBunga = document.getElementById('linkBunga').value 
    const hargaBunga = document.getElementById('hargaBunga').value
    const jumlahBunga = document.getElementById('jumlahBunga').value 
    const hargaTotal = document.getElementById('hargaTotal').value


    const bungaBaru = {
        namaPelanggan: namaPelanggan,
        namaBunga: namaBunga,
        linkBunga: linkBunga,
        hargaBunga: hargaBunga,
        jumlahBunga: jumlahBunga,
        hargaTotal: hargaTotal
    }

    if (mode == 'tambah') {
        daftarBunga.push(bungaBaru)
    } else {
        // jika edit
        daftarBunga[mode] = bungaBaru
    } 

    document.getElementById('namaPelanggan').value = ""
    document.getElementById('namaBunga').value = ""
    document.getElementById('linkBunga').value = ""
    document.getElementById('hargaBunga').value = ""
    document.getElementById('jumalahBunga').value = ""
    document.getElementById('hargaTotal').value = ""

    mode = 'tambah'

    tampilkanBunga()
}

const cariBunga = (namaBunga) => {
    for (let i=0; i<daftarBunga.length; i++) {
        if(daftarBunga[i].namaBunga == namaBunga) {
            return i
        }
    }
    return -1;
}

const hapusBunga = (target) => {
    const indexDihapus = cariBunga(target)
    if (indexDihapus !== -1) {
        daftarBunga.splice(indexDihapus,1)
        tampilkanBunga()
    }
}

const editBunga = (target) => {
    const indexEdit = cariBunga(target)

    console.log(target)
    console.log(indexEdit)
    console.log(daftarBunga[indexEdit])

    const bungaDiedit = daftarBunga[indexEdit]

    const namaPelanggan = document.getElementById('namaPelanggan').value = bungaDiedit.namaPelanggan
    const namaBunga = document.getElementById('namaBunga').value = bungaDiedit.namaBunga
    const linkBunga = document.getElementById('linkBunga').value = bungaDiedit.linkBunga
    const hargaBunga = document.getElementById('hargaBunga').value = bungaDiedit.hargaBunga
    const jumalahBunga = document.getElementById('jumlahBunga').value = bungaDiedit.jumlahBunga
    const hargaTotal = document.getElementById('hargaTotal').value = bungaDiedit.hargaTotal

    mode = indexEdit

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