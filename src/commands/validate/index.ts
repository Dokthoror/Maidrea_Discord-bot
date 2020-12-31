// Import dependancies
import {
	Message, PermissionResolvable, TextChannel,
} from 'discord.js';
import Command from '../../modules/Command';
import captchaTest from '../../utils/captchaTest';

const name = 'validate';

const description = 'sends a test captcha';

const howto = '';

const type = 'MISCELLENAOUS';

const permission: PermissionResolvable = 'SEND_MESSAGES';

const run = async (msg: Message, args: Array<string>) => {
	captchaTest(msg.channel as TextChannel, msg.member!, false);
};

// Export ping command
const validateCommand = new Command(name, description, type, howto, permission, run);
export default validateCommand;
