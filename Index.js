const Discord = require("discord.js");
const client = new Discord.Client();
const token = "NDAyNTYyODYwMzA5NTQ0OTYw.DT6l9w.AmdIbb20a-lbEKDPkjn5aLf04NY";
var prefix = "-";
var mention = "@401725412973215744"


client.on("ready", () => {
var servers = client.guilds.array().map(g => g.game).join(',');
console.log('ReDy est pret a être en ligne => Go verifier sur Discord !');
client.user.setGame("-aide |");


 client.user.setStatus("online");

})

 
client.login(token)
		
