// Import depandencies
import { pingCommand } from './ping';
import { helpCommand } from './help';
import { kickCommand } from './kick';
import { banCommand } from './ban'
import { botinfoCommand } from './botinfo';


// Export commands handler, which is an array of Command objects
export const commandsHandler = [pingCommand, helpCommand, kickCommand, banCommand, botinfoCommand];