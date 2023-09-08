class BankAccount {
  constructor(owner, nama, balance) {
    if (this.constructor === BankAccount) {
      throw new Error("Cannot instantiate from Abstract Class");
    }
    this.owner = owner;
    this.nama = nama;
    this.balance = balance;
  }
  tampilBalance() {
    console.log(`Saldo Sekarang:  ${this.balance}`);
  }
}

class Transaksi extends BankAccount {
  constructor(owner, nama, balance) {
    super(owner, nama, balance);
  }
  deposit(amount) {
    setTimeout(() => {
      if (amount <= 0) {
        throw new Error("Saldo harus lebih dari 0");
      } else {
        console.log("Deposit sebesar: " + amount);
        this.balance += amount;
        this.tampilBalance();
      }
    }, 5000);
  }

  withdraw(amount) {
    setTimeout(() => {
      if (amount > this.balance) {
        throw new Error("Saldo tidak cukup boss!!");
      } else {
        console.log("Withdraw sebesar: " + amount);
        this.balance -= amount;
        this.tampilBalance();
      }
    }, 5000);
  }
  transaksi() {
    super.tampilBalance;
    super.deposit;
    super.withdraw;
  }
}

const bankAccount = new Transaksi("Afif", "BCA", 50000);

let pilihan = Number(
  prompt("Silahkan pilih operasional: \n1. Deposit\n2. Withdraw")
);
let amount = Number(prompt("Masukkan nominal: "));

switch (pilihan) {
  case 1:
    console.log(bankAccount);
    bankAccount.deposit(amount);
    break;
  case 2:
    console.log(bankAccount);
    bankAccount.withdraw(amount);
    break;
  default:
}
