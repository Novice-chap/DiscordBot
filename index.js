const Discord = require('discord.js');

const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const commandHandler = require('./commandHandler');

// console.log(process.env.CODE);
// create a new Discord client
const client = new Discord.Client();

client.login(process.env.DISCORD_SECRET_TOKEN);

client.once('ready', () => {
  console.log('Ready!');
});

client.on('message', commandHandler);
