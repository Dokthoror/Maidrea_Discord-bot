// Import dependencies
import { DiscordAPIError, Message, PermissionResolvable, MessageEmbed, GuildMember } from 'discord.js';
import { Command } from '../../modules/Command';
import { Embed } from '../../modules/Embed';
import { ErrorEmbed } from '../../modules/ErrorEmbed';
import fetch from "node-fetch"

const name = "awooify";

const description = "awooify someones avatar";

const howto = "<@member: required>"

const type = "FUN";

const permission: PermissionResolvable = "SEND_MESSAGES";

const run = async (msg: Message, args: Array<string>) => {
    const person = msg.mentions.users.first() || msg.author;
    const message = await msg.channel.send("Generating...");

     fetch(`https://nekobot.xyz/api/imagegen?type=awooify&url=${person.displayAvatarURL({dynamic: true, size: 1024})}`)
        .then((res) => res.json())
        .then((body) => {
            console.log(body)
            let embed = new MessageEmbed()
            .setImage(body.message)
            .setColor("#9cc4e4")
            message.edit(embed)
        })
}

export const awooifyCommand = new Command(name, description, type, howto, permission, run);