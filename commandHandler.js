const fetch = require('node-fetch');

module.exports = async (message) => {
  const replies = ['Helloooooo there!', 'Howdy!', 'Hola amigo!', 'Hey buddy'];
  // console.log(message.content);
  const userMsg = message.content.split(' ');
  let keywords = 'We welcome you';
  if (keywords.length > 1) {
    keywords = userMsg.slice(1, userMsg.length).join(' ');
  }

  if (message.channel.id === process.env.CHANNEL_ID) {
    if (userMsg[0] === 'Hi!') {
      message.reply(replies[Math.trunc(Math.random() * replies.length)]);
    } else if (userMsg[0] === '!gif') {
      let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENOR_API_KEY}&contentfilter=high`;
      let response = await fetch(url);
      let json = await response.json();
      // console.log(json);
      message.channel.send(
        json.results[Math.trunc(Math.random() * json.results.length)].url
      );
    }
  }
};
