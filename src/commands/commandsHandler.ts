// Import depandencies
import pingCommand from './ping';
import helpCommand from './help';
import kickCommand from './kick';
import banCommand from './ban';
import botinfoCommand from './botinfo';
import baguetteCommand from './baguetter';
import awooifyCommand from './awooify';
import validateCommand from './validate';

// Export commands handler, which is an array of Command objects
const commandsHandler = [pingCommand, helpCommand, kickCommand, banCommand, botinfoCommand, baguetteCommand, awooifyCommand, validateCommand];
export default commandsHandler;
