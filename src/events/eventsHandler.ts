// Events handler file
import readyEvent from './ready'; // Ready event, when the bot logs in
import messageEvent from './message'; // Message event, when the bot receives a message
import guildMemberAddEvent from './guildMemberAdd'; // Guild member add event, when a new member enters the server

// Export the event handler
// eventHandler is an array of functions with one optional parameter
const eventsHandler: Array<{ name: string, run: (p?: any) => void }> = [readyEvent, messageEvent, guildMemberAddEvent];
export default eventsHandler;
