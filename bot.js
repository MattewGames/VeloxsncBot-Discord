const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("Sono pronto!");
});

client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");

  }
});
client.on("message", (message) => {
  if (message.content.startsWith("Diego")) {
    message.channel.send("è stupido!");
  } else

  if (message.content.startsWith("porcodio")) {
    message.channel.send("Ciao Germa!");
  }
});

client.login("NTM3MzM2OTU4NTc0MTMzMjYx.DytYdA.EKoM7SqpOLbGZFRoEBOxZrolGYE");
