const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true})


client.on('message', message => { 

if (!message.guild) return; 

if (message.content === 'wara') { 
 if (!message.member.hasPermission("ADMINISTRATOR"))  ;
if (message.member.voiceChannel) { 

message.member.voiceChannel.join() 

.then(connection => { 


}) 

.catch(console.log); 

} else { 

message.reply('** پێویستە تۆ لە ڤۆیسەکە بیت **'); 

} 

} 

});


client.on("message" , message => {

if(message.channel.type === 'dm') {

if (message.content.startsWith("https://discord.gg/")) {
    
  message.author.send(` دانرا تۆش ڕیکلامەکە بکە https://discord.gg/npKpkMHkr8 `) // لینکی سێرڤەری خۆت لیرە دابنی بە هەتا هەتای بێت
    
  client.channels.get("825159130209714207").send(
`>  By: <@${message.author.id}> ✅ 
${message.content}`)
}
    }
        })




client.on('ready', () => {
console.log(`ON ${client.guilds.size} Servers`);
console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`it'sME SQWAD `) 
});




client.login("ODU5MDUyMjc3ODk2NzA4MDk2.YNnExw.hU9Ql7exDZwgGVIRa5pZmybv6pI");// Your Token
