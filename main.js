const Discord = require('discord.js');
const fetch = require("node-fetch");
const client = new Discord.Client();
const token = process.env.token;
const prefix = "-"

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});





let commands = {
  "ping": require('./commands/ping.js'),
  "epic_phrase": require('./commands/epic_phrase.js'),
  "say": require('./commands/say.js'),
  "canned": require('./commands/canned.js'),
  "get_tl": require('./commands/get_tl.js'),
  "get_user":  require('./commands/get_user.js'),
  "help": require('./commands/help.js'),
  "8ball": require('./commands/8ball.js'),
  "kick": require('./commands/kick.js'),
  "ban": require('./commands/ban.js'),
  "bee": require('./commands/beemoviequote.js')
}

client.on('message', msg => {
  if (msg.author.bot) return;

  const message = msg.content;
  let args = message.slice(prefix.length).trim().split(' ');

  if(message.charAt(0) != prefix){
    //console.log('This message doesnt begin with the prefix.');
    return;
  }

  console.log(args[0].toLowerCase());
  let cmd = commands[args[0].toLowerCase()];
  if (cmd) {
    args.shift();

    if(args[0] == "LUA"){
      args.shift();
    }
    cmd(msg, args, Discord, client);
  }
});

client.login(token);
