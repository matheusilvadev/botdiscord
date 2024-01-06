const { SlashCommandBuilder } = require("discord.js")


module.exports = {
    data: new SlashCommandBuilder()
        .setName('playlist')
        .setDescription('Ouça a melhor playlist BR'),

    async execute(interaction) {
        await interaction.reply("https://open.spotify.com/playlist/37i9dQZF1DX10zKzsJ2jva?si=8ecd78ae06f6426e")
    }
}