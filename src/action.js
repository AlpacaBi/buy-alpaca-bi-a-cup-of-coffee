const qrcode = require('qrcode-terminal');
const chalk = require("chalk")
const { sleep } = require('./utils');

const map = new Map();

map.set('chinese', async() => {
    console.log("\n\n你好，我是Alpaca Bi, 一个来自广州的Web全栈工程师\n")
    await sleep(1.5)
    console.log("感谢大佬给我投喂咖啡!!!\n")
    await sleep(1.5)
    console.log(`${chalk.green.bold("微信支付")}👇`)
    qrcode.generate("wxp://f2f0KtjBVNpOFTX96GYJRZSYJGwMoOnJtIYm", {small: true})
    await sleep(1.5)
    console.log(`${chalk.blue.bold("支付宝")}👇`)
    qrcode.generate("https://qr.alipay.com/fkx17442xocvwp4p9sfgn98", {small: true})
    await sleep(1.5)
})

map.set('english', async() => {
    console.log("\n\nHi, I am Alpaca Bi, A Web Full Stack Developer From China\n")
    await sleep(1.5)
    console.log("Thank you for your sponsorship!!!\n")
    await sleep(1.5)
    console.log(`${chalk.green.bold("Wechat Pay")}👇`)
    qrcode.generate("wxp://f2f0KtjBVNpOFTX96GYJRZSYJGwMoOnJtIYm", {small: true})
    await sleep(1.5)
    console.log(`${chalk.blue.bold("Alipay")}👇`)
    qrcode.generate("https://qr.alipay.com/fkx17442xocvwp4p9sfgn98", {small: true})
    await sleep(1.5)
})


const action = language => map.get(language)()

module.exports = action;