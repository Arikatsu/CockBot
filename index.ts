import DiscordJS, { Intents } from 'discord.js'
import WOKCommands from 'wokcommands'
import path from 'path'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

import testSchema from './test-schema'

dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
    ]
})

client.on('ready', () => {
    console.log('Cock Support is ready')

    new WOKCommands(client, {
      commandsDir: path.join(__dirname, 'commands'),
      typeScript: true,
      testServers: ['878562477275750430'],
      botOwners: ['593787701409611776'],
      mongoUri: process.env.MONGO_URI,
    })
  })

  setTimeout(async () => {
      await new testSchema({
          message: 'poggers', 
      }).save()
  })
    


client.on('messageCreate', (message) => {
    if (message.content === 'ping') {
        message.reply({
            content: 'I LOVE PONG',
        })
    }
})

client.on('messageCreate', (message) => {
    if (message.content.toLowerCase() === 'scald help' )
        message.channel.send('scald help pls')
})


client.login(process.env.TOKEN)