const Discord = require("discord.js");
const client = new Discord.Client();
const token = "NDAxNzI1NDEyOTczMjE1NzQ0.DTuXqQ.NrBYlYc71-WRbkrImAz8QRVnaKs";
var prefix = "-";
var mention = "@401725412973215744"


client.on("ready", () => {
var servers = client.guilds.array().map(g => g.game).join(',');
console.log('ReDy est pret a être en ligne => Go verifier sur Discord !');
client.user.setGame("-aide |");


 client.user.setStatus("online");

})

 
var messages = [];
client.on('message', message => {
if (message.content.startsWith(prefix + "test")) {
message.channel.send('5/5')
}

if (message.content === "ah") {
    message.channel.send("Tu te prends pour Denis Brogniard ?!")

}

if(message.content === prefix + "invite") {
	var help_embed = new Discord.RichEmbed()		.setColor('#00FFE3')
		.setTitle('Invite ReDy')
		.setFooter('Lien pour invitation du bot')
		.setDescription('https://discordapp.com/oauth2/authorize?client_id=401725412973215744&scope=bot&permissions=8')
		
message.channel.send(help_embed);
}  

if(message.content === prefix + "redy") {
	var help_embed = new Discord.RichEmbed()
		.setColor('#FF0004')
		.setDescription('ptdr le boss quoi')
		
message.channel.send(help_embed);
}
if(message.content === prefix + "botinfos") {
	var help_embed = new Discord.RichEmbed()
		.setColor('#FF0004')
		.setTitle('Infos du Bot')
		.setFooter('ReDy-Bot')
		.addField('Informations principales du bot', 'Ce Bot est un bot programé en JavaScript et sur android . Je suis en developpement et je suis tres difficile pour mon owner xD')
		.addField('Nouveautées du Bot', '-newsbot => Nouveautés')
		.addField('Petites infos', '-owner => Je vous dit mon owner')
message.channel.send(help_embed);
}  

if(message.content === prefix + "testembed") {
	var help_embed = new Discord.RichEmbed()
		.setColor('#000000')
		.setTitle('Test-embed')
		.setFooter('test')
		.setDescription('test')
		
message.channel.send(help_embed);
}  

if(message.content === prefix + "serv") {
	var help_embed = new Discord.RichEmbed()
		.setColor('#FF0003')
		.setTitle('Serveur')
		.addField('Mon serveur :', 'https://discord.gg/Pnf7N8m')
		
message.channel.send(help_embed);
}  
if(message.content === prefix + "testembed") {
	var help_embed = new Discord.RichEmbed()
		.setColor('#000000')
		.setTitle('Test-embed')
		.setFooter('test')
		.setDescription('test')
		
message.channel.send(help_embed);
}  

if(message.content === prefix + "serv") {
	var help_embed = new Discord.RichEmbed()
		.setColor('#FF0003')
		.setTitle('Serveur')
		.addField('Mon serveur :', 'https://discord.gg/Pnf7N8m')
		
message.channel.send(help_embed);
}  

if(message.content === prefix + "newsbot") {
	var help_embed = new Discord.RichEmbed()
		.setColor('#FF0004')
		.setTitle('NewsBot')
		.setFooter('Made by ReDy')
		.setDescription('|-|Reparation des bugs', '|-| Commandes ajoutés et modifiés', '|-|ajout de notre serveur support', '|-|Vous pouvez a présent donner des idees de commandes pour le bot')
		
message.channel.send(help_embed);
}  

if(message.content === prefix + "owner") {
	var help_embed = new Discord.RichEmbed()
		.setColor('#81FF00')
		.setTitle('Owner')
		.setFooter('Made by ReDy')
		.setDescription('**Mon owner est -【ReDy】√ -#3547**', ' Dedi a Xory_#4166 qui ma aidé')
message.channel.send(help_embed);
}  


if(message.content === prefix + "aide") {
	var help_embed = new Discord.RichEmbed()
		.setColor('#FF0017')
		.setTitle('Menu-Aide')
		.setFooter('Made by ReDy')
		.addField('Fun', '-redy => mé ki é le boss ?')
		.addField('Divers', '-botinfos => informations sur le bot', '-serv => mon serveur', '-invite => pour inviter le bot')
		.addField('Administration', '-kick => kick quelqun')
message.channel.send(help_embed);
}  
   if (message.content.startsWith(prefix + "avatar")) {
        if (!message.mentions.users.first()) return message.channel.send("** ❌ |Entrez un utilisateur.**")
   let user = message.mentions.users.first() ? message.mentions.users.first() : message.author
  let ava = user.displayAvatarURL
  let embed = {
      color:0x542437,
      description:"Voici l'avatar de "+user.username+": *[url]("+ava+")*",
      image:{url:ava}
    }
  message.channel.send("", {embed})
}



});

client.login(token)
