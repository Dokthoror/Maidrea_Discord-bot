// Import depandencies
import { pingCommand } from './ping';
import { helpCommand } from './help';


// Export commands handler, which is an array of Command objects
export const commandsHandler = [pingCommand, helpCommand];