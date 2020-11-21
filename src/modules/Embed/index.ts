// Import dependancies
import { bot } from '../../../index';
import { MessageEmbed } from 'discord.js';


// Export custom embed from Discord MessageEmbed, with custom foot and timestamp
export class Embed extends MessageEmbed {
    constructor(color: number) {
        super();
        this.setColor(color);
        this.setFooter(`${bot.user!.username} by Pascal ✔#8855`, bot.user!.displayAvatarURL());
        this.setTimestamp(Date.now());
    }
}