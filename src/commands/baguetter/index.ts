// Import dependencies
import { Message, PermissionResolvable } from 'discord.js';
import fetch from 'node-fetch';
import Command from '../../modules/Command';
import ErrorEmbed from '../../modules/ErrorEmbed';
import Embed from '../../modules/Embed';

const name = 'baguetter';

const description = 'baguettify someone\'s avatar';

const howto = '<@member: optionnal>';

const type = 'FUN';

const permission: PermissionResolvable = 'SEND_MESSAGES';

const run = async (msg: Message, args: Array<string>) => {
	const person = msg.mentions.users.first() || msg.author;
	const message = await msg.channel.send('Generating...');

	try {
		const res = await (await fetch(`https://nekobot.xyz/api/imagegen?type=baguette&url=${person.displayAvatarURL({ dynamic: true, size: 1024 })}`)).json();
		const embed = new Embed(msg.guild!.members.cache.get(person.id)!.displayColor)
			.setAuthor(`${person.username} has been baguettified !`)
			.setImage(res.message);
		message.edit({
			content: '',
			embed,
		});
	} catch (e) {
		const embed = new ErrorEmbed()
			.setDescription(`Unable to generate the picture: \`\`${e.message}\`\``);
		msg.channel.send(embed);
	}
};

const baguetteCommand = new Command(name, description, type, howto, permission, run);
export default baguetteCommand;
