// Import dependancies
import {
	DMChannel,
	GuildMember, MessageReaction, TextChannel, User,
} from 'discord.js';
import bot from '../../../index';
import GenerateCaptcha from '../../modules/GenerateCaptcha';
import Embed from '../../modules/Embed';
import ErrorEmbed from '../../modules/ErrorEmbed';

const captchaTest = async (channel: TextChannel | DMChannel, member: GuildMember, enteringServer: boolean) => {
	const generatingMessage = await channel.send('Generating...');
	const captcha = await GenerateCaptcha.generateCaptcha();

	const embed = new Embed(member.displayColor || 'WHITE')
		.setAuthor('Please do a little checking before you have access to the entire server.', member.user.displayAvatarURL())
		.setDescription('In which square is Mario upright ?')
		.setImage('attachment://captcha.png');

	const captchaMessage = await channel.send({
		files: [{
			attachment: captcha.buffer,
			name: 'captcha.png',
		}],
		embed,
	});
	await generatingMessage.delete();

	captchaMessage.react('1️⃣');
	captchaMessage.react('2️⃣');
	captchaMessage.react('3️⃣');
	captchaMessage.react('4️⃣');

	try {
		  const collected = await captchaMessage.awaitReactions((reaction: MessageReaction, user: User) => ['1️⃣', '2️⃣', '3️⃣', '4️⃣'].includes(reaction.emoji.name) && !user.bot,
		    {
		      max: 1,
		    });

		  const index = ['1️⃣', '2️⃣', '3️⃣', '4️⃣'].indexOf(
		    collected.first()!.emoji.name,
		  );

		  if (index === captcha.correctAnswer) {
		    await channel.send('✅ Welcome in the server !');
		    if (enteringServer) await member.roles.add('724205652284669953');
		  } else {
			  const errorEmbed = new ErrorEmbed()
			  .setDescription('Validation failed. Please contact a staff member...');
		    await channel.send(errorEmbed);
		  }
	} catch (e) {
		const errorEmbed = new ErrorEmbed()
			.setDescription(`\`\`${e.message}\`\``);
		  channel.send(errorEmbed);
	}
};
export default captchaTest;
