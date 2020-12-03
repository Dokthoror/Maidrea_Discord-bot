// Import the dependancies
import {Message} from 'discord.js';
import {ErrorEmbed} from '../../modules/ErrorEmbed';
import {commandsHandler} from '../../commands/commandsHandler';


// Export 'message' event, when the bot receives a message
export const messageEvent = {
    name: 'message',
    run: (msg: Message) => {
        // If the message is from a bot or a private channel, does nothing
        if (msg.author.bot || msg.channel.type == 'dm') return;

        // If the message begins with the command prefix
        if (msg.content.startsWith(process.env.COMMAND_PREFIX!)) {
            const args = msg.content.split(/\s+/); // Contains an array of string
            const commandName: string | undefined = args.shift()?.replace(process.env.COMMAND_PREFIX!, '').toLowerCase(); // Contains the command name to lower case
            const command = commandsHandler.find((c) => c.name == commandName); // Search for the command in the handler xith the given name

            if (command) { // If the command exists
                if (msg.member!.hasPermission(command.permission)) { // If the guild member has enough permission
                    command.run(msg, args); // Runs the command...
                } else {
                    const errorEmbed = new ErrorEmbed()
                        .setDescription('You don\'t have enough permission to run this command.')
                        .addField('EXPECTED', command.permission, true)
                        .addField('CURRENT', msg.member!.permissions.toArray().join(', '));
                    msg.channel.send(errorEmbed); // ...or send an error message
                }
            }
        }
    },
};
