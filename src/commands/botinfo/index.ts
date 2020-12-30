// Import dependancies
import { Message, PermissionResolvable } from 'discord.js';
import Command from '../../modules/Command';
import Embed from '../../modules/Embed';
import bot from '../../../index';

const name = 'botinfo';

const description = 'sends information about me';

const howto = '';

const type = 'MISCELLENAOUS';

const permission: PermissionResolvable = 'SEND_MESSAGES';

const run = async (msg: Message, args: Array<string>) => {
	const embed = new Embed(msg.guild!.members.cache.get(bot.user!.id)!.displayColor)
		.setAuthor('Here are my informations', bot.user!.displayAvatarURL())
		.addField('Name', bot.user!.username, true)
		.addField('Prefix', process.env.COMMAND_PREFIX, true)
		.addField('Uptime', `${Math.round((bot.uptime!) / 60000)} minutes`, true)
		.addField('Support server', 'None', true)
		.addField('Number of servers', `${bot.guilds.cache.array().length} servers`, true)
		.addField('When did I join the server', msg.guild!.joinedAt.toDateString(), true)
		.addField('Author', '[Pascal ✔#8855](https://github.com/Dokthoror)', true)
		.addField('Github', '[Full code available, feel free to help ;)](https://github.com/Dokthoror/Maidrea_Discord-bot)', true)
		.setDescription('Join the support server! (Not open now)')
		.setThumbnail(msg.guild!.iconURL()!);
	msg.channel.send(embed);
};

// Export ping command
const botinfoCommand = new Command(name, description, type, howto, permission, run);
export default botinfoCommand;
