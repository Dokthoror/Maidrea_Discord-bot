// Import dependancies
import { Message, PermissionResolvable } from 'discord.js';
import { Command } from '../../modules/Command';
import { Embed } from '../../modules/Embed';
import { ErrorEmbed } from '../../modules/ErrorEmbed';


const name = 'kick';

const description = 'kick the mentioned member with reasaon'

const howto = '<@member: required> <reason: optional>';

const type = 'MODERATION';

const permission: PermissionResolvable = 'KICK_MEMBERS';


const run = (msg: Message, args: Array<string>) => {
    console.log(args[0]);

    if (args[0] && msg.mentions.members && args[0] == `<@!${msg.mentions.members!.first()!.id}>`) {
        msg.reply('ok');
    }
}


// Export kick command
export const kickCommand = new Command(name, description, type, howto, permission, run);