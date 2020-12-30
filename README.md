# Maidrea Discord bot

<div style="text-align: center"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen"> <img src="https://img.shields.io/github/issues-pr/dokthoror/maidrea_discord-bot"> <img src="https://img.shields.io/github/issues/dokthoror/maidrea_discord-bot"> <img src="https://img.shields.io/github/license/Dokthoror/Maidrea_Discord-bot"> <img src="https://img.shields.io/github/last-commit/dokthoror/maidrea_discord-bot/master"> <img src="https://img.shields.io/github/package-json/v/dokthoror/maidrea_discord-bot"></div>

<div style="text-align: center"><img src="https://img.shields.io/github/followers/dokthoror?style=social"> <img src="https://img.shields.io/github/stars/dokthoror/maidrea_discord-bot?style=social"></div>

---

Maidrea is an open source Discord bot written in **Typescript** and using **discord.js** library. It will be able to moderate any Discord server, add joy and fun in it and all the easier way possible !

## Feel free to join ! It's a lot of work and I need help to continue

Things to do :

- [x] build a basic bot
- [ ] staff application
- [ ] anime things
- [ ] moderation commands
- [ ] user/guild info
- [ ] avatar and emoji management
- [ ] xp and level related
- [ ] graphics (maybe)
- [ ] music (non priority)

## How to help

1. Clone the project
2. Run ``npm install`` to install dependancies
3. Create a ``.env`` file with two variables :
    - ``COMMAND_PREFIX`` : contains the bot's prefix for the commands
    - ``TOKEN`` : the bot's token (KEEP IT SECRET)
4. Create a MySQL server and run the ``./db/bot_db_setup.sql`` script with root account (it will create the ``maidrea_bot`` user and the ``maidrea_bot_db`` database)
5. Add a branch for your updates
6. When finished, make a pull request for this repository

Then I will check your code and update the bot.

Thanks ! :D
