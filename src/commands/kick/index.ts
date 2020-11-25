// Import dependancies
import { DiscordAPIError, Message, PermissionResolvable } from 'discord.js';
import { readyEvent } from '../../events/ready';
import { Command } from '../../modules/Command';
import { Embed } from '../../modules/Embed';
import { ErrorEmbed } from '../../modules/ErrorEmbed';


const name = 'kick';

const description = 'kick the mentioned member with specified reason'

const howto = '<@member: required> <reason: optional>';

const type = 'MODERATION';

const permission: PermissionResolvable = 'KICK_MEMBERS';


const run = (msg: Message, args: Array<string>) => {
    let embed: Embed | ErrorEmbed;
    if (args[0] && msg.mentions.members?.first() && args[0] == `<@!${msg.mentions.members?.first()?.id}>`) {    // Verifies that the first argument is a mentionned member
        let memberToKick = msg.mentions.members.first()!;
        let reason = 'Undefined';                                                                               // If no reason given, sets it to 'Undefined'
        if (args[1]) reason = args.slice(1).join(' ');

        memberToKick.kick(reason).then(kicked => {                                                              // If member kicked successfully, sends confirmation
            embed = new Embed(msg.member!.displayColor)
                .setAuthor(`${kicked.user.username} was kicked !`, kicked.user.displayAvatarURL())
                .addField('Moderator', msg.member!, true)
                .addField('Reason', reason, true);
            msg.channel.send(embed);
        }).catch((e: DiscordAPIError) => {                                                                      // If error, sends error
            embed = new ErrorEmbed().setDescription(`Unable to kick ${memberToKick}: \`\`${e.message}\`\``);
            msg.channel.send(embed);
        });
    }
    else {                                                                                                      // If no member was given, sends an error
        embed = new ErrorEmbed().setDescription('No member to kick, please mention one.');
        msg.channel.send(embed);
    }
}


// Export kick command
export const kickCommand = new Command(name, description, type, howto, permission, run);