const daftarPelanggan = JSON.parse(localStorage.getItem('pelanggan')) || [];

const tambahPelanggan = () => {
    console.info('Ini Jalan Loh');
    const nama = document.getElementById('exampleInputNama1').value
    const email = document.getElementById('exampleInputEmail1').value
    const noTelepon = document.getElementById('exampleInputnoTelp1').value
    const alamat = document.getElementById('exampleInputAlamat').value

    const id = daftarPelanggan[daftarPelanggan.length - 1]?.id + 1 || 1;
    const pelangganBaru = {
        id,
        nama: nama,
        email: email,
        noTelepon: noTelepon,
        alamat: alamat,
    }
    
    daftarPelanggan.push(pelangganBaru);
    localStorage.setItem('pelanggan', JSON.stringify(daftarPelanggan));

    document.getElementById('exampleInputNama1').value = ""
    document.getElementById('exampleInputEmail1').value = ""
    document.getElementById('exampleInputnoTelp1').value = ""
    document.getElementById('exampleInputNama1').value = ""


    window.location.href = "daftar penjualan.html";  
}


const formPelanggan = document.getElementById('formPelanggan');

formPelanggan.addEventListener('submit', (e) => {
    e.preventDefault();
    tambahPelanggan();
})