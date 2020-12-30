// Import dependancies
import { DiscordAPIError, Message, PermissionResolvable } from 'discord.js';
import Command from '../../modules/Command';
import Embed from '../../modules/Embed';
import ErrorEmbed from '../../modules/ErrorEmbed';

const name = 'ban';

const description = 'ban the mentioned member with specified reason';

const howto = '<@member: required> <reason: optional>';

const type = 'MODERATION';

const permission: PermissionResolvable = 'BAN_MEMBERS';

const run = async (msg: Message, args: Array<string>) => {
	let embed: Embed | ErrorEmbed;
	if (args[0] && msg.mentions.members?.first() && args[0] === `<@!${msg.mentions.members?.first()?.id}>`) { // Verifies that the first argument is a mentionned member
		const memberToBan = msg.mentions.members.first()!;
		let reason = 'Undefined'; // If no reason given, sets it to 'Undefined'
		if (args[1]) reason = args.slice(1).join(' ');

		try {
			await msg.mentions.members.first()!.ban({ reason });
			if (msg.guild!.members.cache.get(memberToBan.user.id)) throw new Error('DiscordAPIError: Missing Permissions');
			embed = new Embed(msg.member!.displayColor)
				.setAuthor(`${memberToBan.user.username} was banned !`, memberToBan.user.displayAvatarURL())
				.addField('Moderator', msg.member!, true)
				.addField('Reason', reason, true);
			msg.channel.send(embed);
		} catch (e) {
			embed = new ErrorEmbed().setDescription(`Unable to ban ${memberToBan}: \`\`${e.message}\`\``);
			msg.channel.send(embed);
		}
	} else { // If no member was given, sends an error
		embed = new ErrorEmbed().setDescription('No member to ban, please mention one.');
		msg.channel.send(embed);
	}
};

// Export ban command
const banCommand = new Command(name, description, type, howto, permission, run);
export default banCommand;
