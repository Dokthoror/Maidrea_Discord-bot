import { bot } from '../../../index';


// Export 'ready' event, when the bot logs in
export const readyEvent = {
    name: 'ready',
    run: () => {
        console.log(`Logged in as ${bot.user!.username}`);
    }
}