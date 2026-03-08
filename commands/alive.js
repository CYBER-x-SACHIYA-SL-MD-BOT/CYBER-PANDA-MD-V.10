 const settings = require("../settings");
async function aliveCommand(sock, chatId, message) {
    try {
        const message1 = `*🐼 CYBER-PANDA-MD-V.10 is Active! 🐼*\n\n` +
                       `*Version:* ${settings.version}\n` +
                       `*Bot:* Online💘`;

        await sock.sendMessage(chatId, {
            text: message1,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363420618370733@newsletter',
                    newsletterName: 'CYBER-PANDA-MD-V.10',
                    serverMessageId: -1
                }
            }
        }, { quoted: message });
    } catch (error) {
        console.error('Error in alive command:', error);
        await sock.sendMessage(chatId, { text: 'Bot is alive and running!' }, { quoted: message });
    }
}

module.exports = aliveCommand;
