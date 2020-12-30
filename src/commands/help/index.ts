// Import dependancies
import { Message, PermissionResolvable } from 'discord.js';
import { Command } from '../../modules/Command';
import { Embed } from '../../modules/Embed';
import commandsHandler from '../commandsHandler';

const name = 'help';

const description = 'shows this page';

const howto = '<command: optional>';

const type = 'MISCELLENAOUS';

const permission: PermissionResolvable = 'SEND_MESSAGES';

const run = (msg: Message, args: Array<string>) => {
	const embed = new Embed(msg.member!.displayColor);

	if (args[0] && commandsHandler.find((el) => el.name === args[0].toLowerCase())) { // If the args corresponds to a known command,
		const command = commandsHandler.find((el) => el.name === args[0].toLowerCase()); // will send specified help for this command
		embed
			.setAuthor(`Here is the help for the ${args[0].toLowerCase()} command`)
			.addField('Description', `\`\`${command!.description}\`\``)
			.addField('How to use it', `\`\`${process.env.COMMAND_PREFIX}${command!.name} ${command!.howto}\`\``);
	} else { // If no args or unknown command,
		const types: Array<{ type: string, use: string }> = []; // show all the available commands
		commandsHandler.forEach((command) => {
			if (!types.find((t) => t.type === command.type)) { // Type is used for command categories
				types.push({ type: command.type, use: '' }); // Reviews all the command and
			} // if a type doesn't exist in the type array, push it with empty 'use' field
            types.find((t) => t.type === command.type)!.use += `${command.name} : \`\`${command.description}\`\`\n`;
		});
		embed.setAuthor('Here is my command list');
        types!.forEach((ty) => {
        	embed.addField(ty.type, ty.use);
        });
	}

	msg.channel.send(embed); // Sends the help message
};

// Export help command
const helpCommand = new Command(name, description, type, howto, permission, run);
export default helpCommand;
