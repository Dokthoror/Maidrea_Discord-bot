// Events handler file

import { readyEvent } from './ready';       // Ready event, when the bot logs in
import { messageEvent } from './message'    // Message event, when the bot receives a message


// Export the event handler
// eventHandler is an array of functions with one optional parameter
export const eventsHandler: Array<{ name: string, run: (p?: any) => void }> = [readyEvent, messageEvent];