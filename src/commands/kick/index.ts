// Import dependancies
import { DiscordAPIError, Message, PermissionResolvable } from 'discord.js';
import { readyEvent } from '../../events/ready';
import { Command } from '../../modules/Command';
import { Embed } from '../../modules/Embed';
import { ErrorEmbed } from '../../modules/ErrorEmbed';


const name = 'kick';

const description = 'kick the mentioned member with reasaon'

const howto = '<@member: required> <reason: optional>';

const type = 'MODERATION';

const permission: PermissionResolvable = 'KICK_MEMBERS';


const run = (msg: Message, args: Array<string>) => {
    if (args[0] && msg.mentions.members?.first() && args[0] == `<@!${msg.mentions.members?.first()?.id}>`) {
        let member = msg.mentions.members.first()!;
        let reason = 'Undefined';
        if (args[0]) reason = args.slice(1).join(' ');
        let embed: Embed | ErrorEmbed;

        member.kick(reason).catch((e: DiscordAPIError) => {
            embed = new ErrorEmbed().setDescription(`Unable to kick ${member}: \`\`${e.message}\`\``);
            msg.channel.send(embed);
        })
    }
}


// Export kick command
export const kickCommand = new Command(name, description, type, howto, permission, run);