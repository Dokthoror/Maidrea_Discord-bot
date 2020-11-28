// Import dependencies
import { DiscordAPIError, Message, PermissionResolvable, MessageEmbed, GuildMember } from 'discord.js';
import { Command } from '../../modules/Command';
import { Embed } from '../../modules/Embed';
import { ErrorEmbed } from '../../modules/ErrorEmbed';
import fetch from "node-fetch"

const name = "baguetter";

const description = "baguettify someones avatar";

const howto = "<@member: optionnal>"

const type = "FUN";

const permission: PermissionResolvable = "SEND_MESSAGES";

const run = async (msg: Message, args: Array<string>) => {
    const person = msg.mentions.users.first() || msg.author;
    const message = await msg.channel.send("Generating...");

    fetch(`https://nekobot.xyz/api/imagegen?type=baguette&url=${person.displayAvatarURL({ dynamic: true, size: 1024 })}`)
        .then((res) => res.json())
        .then((body) => {
            // console.log(body)
            let embed = new Embed(msg.member!.displayColor)
                .setAuthor(`${person.username} has been baguettified !`)
                .setImage(body.message);
            message.edit(embed);
        });
}

export const baguetteCommand = new Command(name, description, type, howto, permission, run);