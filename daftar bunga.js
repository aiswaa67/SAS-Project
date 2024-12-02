const daftarBunga = JSON.parse(localStorage.getItem('bunga')) || [];

const tambahBunga = () => {
    console.info('Ini Jalan Loh');
    const namaPelanggan = document.getElementById('namaPelanggan').value
    const namaBunga = document.getElementById('namaBunga').value
    const linkBunga = document.getElementById('linkBunga').value
    const hargaBunga = document.getElementById('hargaBunga').value
    const jumlahBunga = document.getElementById('jumlahBunga').value
    const hargaTotal = document.getElementById('hargaTotal').value

    const id = daftarBunga[daftarBunga.length - 1]?.id + 1 || 1;
    const pelangganBaru = {
        id,
        namaPelanggan: namaPelanggan,
        namaBunga: namaBunga,
        linkBunga: linkBunga,
        hargaBunga: hargaBunga,
        jumlahBunga: jumlahBunga,
        hargaTotal: hargaBunga,
    }
    
    daftarBunga.push(bungaBaru);
    localStorage.setItem('bunga', JSON.stringify(daftarBunga));

    document.getElementById('namaPelanggan').value = ""
    document.getElementById('namaBunga').value = ""
    document.getElementById('linkBunga').value = ""
    document.getElementById('hargaBunga').value = ""
    document.getElementById('jumlahBunga').value = ""
    document.getElementById('hargaTotal').value = ""


    window.location.href = "keranjang.html";  
}


const formBunga = document.getElementById('formBunga');

formBunga.addEventListener('pesan', (e) => {
    e.preventDefault();
    tambahBunga();
})