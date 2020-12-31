// Import dependancies
import { MessageEmbed } from 'discord.js';
import bot from '../../../index';

// Export custom embed from Discord MessageEmbed, with custom foot and timestamp
class Embed extends MessageEmbed {
	constructor(color: number | string) {
		super();
		this.setColor(color);
		this.setFooter(`${bot.user!.username} by Pascal ✔#8855`, bot.user!.displayAvatarURL());
		this.setTimestamp(Date.now());
	}
}

export default Embed;
