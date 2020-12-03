// Import dependancies
import {Message, PermissionResolvable} from 'discord.js';


/**
 * @class Command
 */
export class Command {
    name: string;
    description: string;
    type: string;
    howto: string;
    permission: PermissionResolvable;
	run: (m: Message, a: Array<string>) => void;

	/**
	 * Create a command
	 * @param {string} name - The name of the command
	 * @param {string} description - The description of the command
	 * @param {string} type - The type of the command
	 * @param {string} howto - How to use the command
	 * @param {PermissionResolvable} permission - The minimum required permission to run the command
	 * @param {void} run - The function of the command
	 */
	constructor(name: string, description: string, type: string, howto: string, permission: PermissionResolvable, run: (p: Message, a: Array<string>) => void) {
		this.name = name;
		this.description = description;
		this.type = type;
		this.howto = howto;
		this.permission = permission;
		this.run = run;
	}
}
