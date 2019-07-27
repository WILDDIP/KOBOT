const discord = require('./discord/index.js'),
      vk = require('./vk/index.js'),
      web = require('./web/index.js')

// Discord initialization

discord.init(process.env.DISCORD_TOKEN, (client, time) => {
  console.log(`[${time}ms] Discord: ${client.user.tag}`);
});


// VK initialization

/* vk.init(discord.client, (group, time) => {
  console.log(`[${time}ms] VK: ${group.name} ${group.url}`);
}); */


// Web initialization

/* web.init(discord.client, vk.client, (server, time) => {
  console.log(`[${time}ms] Web: listening ${server.url} on port ${server.port}`);
}) */