// Import dependancies
import { GuildMember, TextChannel } from 'discord.js';
import bot from '../../../index';
import captchaTest from '../../utils/captchaTest';

// Export 'ready' event, when the bot logs in
const guildMemberAddEvent = {
	name: 'guildMemberAdd',
	run: async (member: GuildMember) => {
		const captchaChannel = await member.createDM();
		captchaTest(captchaChannel, member, true);
	},
};

export default guildMemberAddEvent;
