const Discord = require('discord.js'),
      client = new Discord.Client(),
      fs = require('fs')

fs.readdir(`./discord/cmds/`, (err, files) => {
  if (err) return console.error(err);
  if (!files || files == null) return;
  let i = 0;
  files.forEach(f => {
    if (!f.endsWith(`.js`)) return;
    let
      props   = require(`./cmds/${f}`),
      cmdName = f.split(`.`)[0],
      cmdBL   = ['example', 'index'] 
    if (cmdBL.indexOf(cmdName) !== -1) return;
    client.cmds.set(cmdName, props);
    i++;
  })
})

exports.init = (token) => {
  client.login(token).catch(() => {
    console.error('Incorrect token')
  });
  return client;
}