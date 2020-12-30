// Import dependancies
import { Message, PermissionResolvable } from 'discord.js';
import Command from '../../modules/Command';

const name = 'ping';

const description = 'shows nothing';

const howto = '';

const type = 'MISCELLENAOUS';

const permission: PermissionResolvable = 'SEND_MESSAGES';

const run = (msg: Message, args: Array<string>) => {
	msg.reply('pong !');
};

// Export ping command
const pingCommand = new Command(name, description, type, howto, permission, run);
export default pingCommand;
