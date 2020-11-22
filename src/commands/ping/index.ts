// Import depedancies
import { Message, PermissionResolvable } from 'discord.js';
import { Command } from '../../modules/Command';


const name = 'ping';

const description = 'shows nothing'

const howto = `${process.env.COMMAND_PREFIX!}${name}`;

const type = 'MISCELLENAOUS';

const permission: PermissionResolvable = 'SEND_MESSAGES';

const run = (msg: Message, args: Array<string>) => {
    msg.reply('pong !');
}

// Export ping command
export const pingCommand = new Command(name, description, type, howto, permission, run);