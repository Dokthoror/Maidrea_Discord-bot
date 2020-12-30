// Import dependancies
import { Message, PermissionResolvable } from 'discord.js';

/**
 * @class Command
 */
class Command {
    private _name: string;

    private _description: string;

    private _type: string;

    private _howto: string;

    private _permission: PermissionResolvable;

	public run: (m: Message, a: Array<string>) => void;

	/**
	 * Create a command
	 * @param {string} _name - The name of the command
	 * @param {string} _description - The description of the command
	 * @param {string} _type - The type of the command
	 * @param {string} _howto - How to use the command
	 * @param {PermissionResolvable} _permission - The minimum required permission to run the command
	 * @param {void} run - The function of the command
	 */
	private constructor(name: string, description: string, type: string, howto: string, permission: PermissionResolvable, run: (p: Message, a: Array<string>) => void) {
		this._name = name;
		this._description = description;
		this._type = type;
		this._howto = howto;
		this._permission = permission;
		this.run = run;
	}

	public get name(): string {
		return this._name;
	}

	public get description() : string {
		return this._description;
	}

	public get type() : string {
		return this._type;
	}

	public get howto() : string {
		return this._howto;
	}

	public get permission() : PermissionResolvable {
		return this._permission;
	}
}

export default Command;
