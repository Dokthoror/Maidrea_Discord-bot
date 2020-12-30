// Import dependencies
import { Message, PermissionResolvable } from 'discord.js';
import fetch from 'node-fetch';
import { Command } from '../../modules/Command';
import { Embed } from '../../modules/Embed';

const name = 'awooify';

const description = 'awooify someones avatar';

const howto = '<@member: optionnal>';

const type = 'FUN';

const permission: PermissionResolvable = 'SEND_MESSAGES';

const run = async (msg: Message, args: Array<string>) => {
	const person = msg.mentions.users.first() || msg.author;
	const message = await msg.channel.send('Generating...');

	fetch(`https://nekobot.xyz/api/imagegen?type=awooify&url=${person.displayAvatarURL({ dynamic: true, size: 1024 })}`)
		.then((res) => res.json())
		.then((body) => {
			// console.log(body)
			const embed = new Embed(msg.guild!.members.cache.get(person.id)!.displayColor)
				.setAuthor(`${person.username} has been awooified !`)
				.setImage(body.message);
			message.edit(embed);
		});
};

const awooifyCommand = new Command(name, description, type, howto, permission, run);
export default awooifyCommand;
