const json = require("./json.json")
const discord = require("discord.js")
const bot = new discord.Bot(intents: 32767)
bot.on("ready",async() => {
	console.log("bot ready!")
})

bot.login(json.token)




