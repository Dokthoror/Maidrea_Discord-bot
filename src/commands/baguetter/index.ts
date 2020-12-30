// Import dependencies
import { Message, PermissionResolvable } from 'discord.js';
import fetch from 'node-fetch';
import { Command } from '../../modules/Command';
import { Embed } from '../../modules/Embed';

const name = 'baguetter';

const description = 'baguettify someones avatar';

const howto = '<@member: optionnal>';

const type = 'FUN';

const permission: PermissionResolvable = 'SEND_MESSAGES';

const run = async (msg: Message, args: Array<string>) => {
	const person = msg.mentions.users.first() || msg.author;
	const message = await msg.channel.send('Generating...');

	fetch(`https://nekobot.xyz/api/imagegen?type=baguette&url=${person.displayAvatarURL({ dynamic: true, size: 1024 })}`)
		.then((res) => res.json())
		.then((body) => {
			// console.log(body)
			const embed = new Embed(msg.member!.displayColor)
				.setAuthor(`${person.username} has been baguettified !`)
				.setImage(body.message);
			message.edit(embed);
		});
};

const baguetteCommand = new Command(name, description, type, howto, permission, run);
export default baguetteCommand;
