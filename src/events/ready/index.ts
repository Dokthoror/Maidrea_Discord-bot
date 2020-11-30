// Import dependancies
import { bot } from '../../../index';
import { PrismaClient, prisma_test } from '@prisma/client';


const prisma = new PrismaClient();


// Export 'ready' event, when the bot logs in
export const readyEvent = {
    name: 'ready',
    run: () => {
        console.log(`Logged in as ${bot.user!.username}`);

        prisma.prisma_test.findMany().then((res: prisma_test[]) => {
            console.log(res);
        });
    }
}