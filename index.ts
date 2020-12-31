// Import dependancies
import {
	Client, GuildMember, Intents, Message,
} from 'discord.js';
import * as dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

import eventsHandler from './src/events/eventsHandler';

// Config for environment variables
dotenv.config();

// Initiates a new PrismaClient instance
// eslint-disable-next-line no-unused-vars
const prisma = new PrismaClient();

// Initiates a new 'Client' instance
const bot = new Client({ ws: { intents: new Intents(Intents.ALL) } });
export default bot;

// When the bot logs in, run the ready event
bot.on('ready', async () => eventsHandler.find((e) => e.name === 'ready')!.run());

bot.on('message', async (msg: Message) => eventsHandler.find((e) => e.name === 'message')!.run(msg));

bot.on('guildMemberAdd', async (member: GuildMember) => eventsHandler.find((e) => e.name === 'guildMemberAdd')!.run(member));

// Logs the bot in
bot.login(process.env.TOKEN);
