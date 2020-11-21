// Import dependancies
import { Message } from 'discord.js';
import { Embed } from '../../modules/Embed';
import { ErrorEmbed } from '../../modules/ErrorEmbed';

// Export 'message' event, when the bot receives a message
export const messageEvent = {
    name: 'message',
    run: (msg: Message) => {
        // If the message is from a bot or a private channel, does nothing
        if (msg.author.bot || msg.channel.type == 'dm') return;
    }
}