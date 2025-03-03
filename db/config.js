const fs = require('fs')
const chalk = require('chalk')

global.owner = ['628988033295'] //Ganti
global.botName = 'Absurbd store' //Ganti
global.ownerName = 'Nas bre' //Ganti
global.sessionName = 'session-bot'

global.user = 'xxx' // Daftar di https://j-f.cloud/api/wl

global.gold = 50000 //Ganti harga role gold
global.platinum = 100000 //Ganti harga role platinum

// Untuk case 'pay' ganti aja
global.pay = `Untuk Pembayaran Silahkan Transfer ke Payment dibawah ini

Bank dan E-Wallet
1140023230835 | MANDIRI
087796183366 | DANA (+100 perak)
087796183366 | GOPAY
087796183366 | OVO
Pembayaran dari Bank ke E-Wallet Wajib +1500 !!!

Note :
Wajib Sertakan Screenshot Detail Pembayaran!!!
Berani Kirim Bukti TF Palsu atau Bukti punya Orang lain
Auto Kick Permanen!!`

// Mongodb
global.mongodb = "mongodb+srv://iki69:iki69@cluster0.mrq8e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0" //Ganti url databasemu
global.database = "iki69" //Ganti sesuai nama databasemu

// Paydisini Apikey
global.paydisini_apikey = "APIKEY"; // APIKEY Paydisini.co.id
global.paydisini_nomer = 087796183366;
global.minimalDepoOtomatis = 1000; // Minimal Deposit
global.maximalDepoOtomatis = 1000000; // Maksimal Deposit

//JF Store Apikey 
global.apikey = "APIKEY JFSTORE"; //Ambil di topup.j-f.cloud/api/docs

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})
