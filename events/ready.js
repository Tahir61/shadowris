const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");

let prefix = process.env.prefix;

module.exports = client => {
  console.log(
    ` [${moment().format(
      "YYYY-MM-DD HH:mm:ss"
    )}] BOT: Aktif, Komutlar yüklendi!`
  );
  console.log(
    ` [${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: ${
      client.user.username
    } ismi ile giriş yapıldı!`
  );
  client.user.setStatus("idle");

  client.user.setActivity(
    `CruzyHost Bilişim Merkezi`,
    { type: "WATCHING" }
  );

  console.log(
    ` [${moment().format("YYYY-MM-DD HH:mm:ss")}] Oyun ismi ayarlandı!`
  );
};
