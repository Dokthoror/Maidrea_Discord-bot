// Import dependancies
import { Message, PermissionResolvable } from "discord.js";


// Export Command class, which will create an instance for each command of the bot
export class Command {
    name: string;
    description: string;
    type: string;
    howto: string;
    permission: PermissionResolvable;
    run: (m: Message, a: Array<string>) => void;

    constructor(name: string, description: string, type: string, howto: string, permission: PermissionResolvable, run: (p: Message, a: Array<string>) => void) {
        this.name = name;
        this.description = description;
        this.type = type;
        this.howto = howto;
        this.permission = permission;
        this.run = run;
    }
}