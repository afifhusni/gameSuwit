var cobaLagi = true;
while (cobaLagi) {
    // menangkap pilihan user
    var p = prompt('pilih : gajah, semut, orang');

    // menangkap pilihan computer
    // membangkitkan pilihan random
    var comp = Math.random();

    if (comp < 0.34) {
        comp = 'gajah';
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = 'semut';
    } else {
        comp = 'orang';
    }

    // menentukan rules
    if (p == comp) {
        hasil = 'Seri banh gausah ngarep menang';
    } else if (p == 'gajah') {
        hasil = (comp == 'orang') ? 'Menang!' : 'Awokawokawok kalah banh mampus';
    } else if (p === 'semut') {
        hasil = (comp == 'orang') ? 'Awokawokawok kalah banh mampus' : 'Menang!';
    } else if (p == 'orang') {
        hasil = (comp == 'gajah') ? 'Awokawokawok kalah banh mampus' : 'Menang!';
    } else {
        alert('yang anda masukkan tidak ada dalam daftar pilihan!!!');
    }

    // tampilkan hasilnya
    alert('Kamu memilih : ' + p + ' dan komputer memilih : ' + comp + '\n' + hasil);

    cobaLagi = confirm('coba lagi?');
}

alert('terima kasih telah bermain');