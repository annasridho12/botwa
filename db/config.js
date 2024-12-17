const fs = require('fs')
const chalk = require('chalk')

global.owner = ['6285773305337'] //Ganti
global.botName = 'Titanz Store' //Ganti
global.ownerName = 'JF Dev' //Ganti
global.sessionName = 'session-bot'

global.user = 'xxx' // Daftar di https://j-f.cloud/api/wl

global.gold = 50000 //Ganti harga role gold
global.platinum = 100000 //Ganti harga role platinum

// Untuk case 'pay' ganti aja
global.pay = `Untuk Pembayaran Silahkan Transfer ke Payment dibawah ini

Bank dan E-Wallet
7635169958 | BCA
085773305337 | DANA (+100 perak)
085773305337 | GOPAY
085773305337 | OVO
Pembayaran dari Bank ke E-Wallet Wajib +1500 !!!

Note :
Wajib Sertakan Screenshot Detail Pembayaran!!!
Berani Kirim Bukti TF Palsu atau Bukti punya Orang lain
Auto Kick Permanen!!`

// Mongodb
global.mongodb = "mongodb+srv://" //Ganti url databasemu
global.database = "botdb" //Ganti sesuai nama databasemu

// Paydisini Apikey
global.paydisini_apikey = "APIKEY"; // APIKEY Paydisini.co.id
global.paydisini_nomer = 085773305337;
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
