var saldo = 0;
function tambahSaldo(a) {
  let tambah = saldo += a;
  return tambah;
}
function kurangiSaldo(b) {
  let kurang = saldo - b;
  return kurang;
}

let pilihan = prompt("Masukkan Pilihan Anda: \n 1.Saldo ditambah \n 2.Saldo Dikurang");

if (pilihan == 1) {
  let saldoBertambah = prompt("Saldo Ditambah Sebesar: ");
  let hasilTambah = tambahSaldo(saldoBertambah);
  alert(hasilTambah);

} else if (pilihan == 2) {
  let saldoBerkurang = prompt("Saldo Dikurang Sebesar: ");
  let hasilKurang = kurangiSaldo(saldoBerkurang);
  alert(hasilKurang);

} else {
  alert("Inputan Salah");
}
