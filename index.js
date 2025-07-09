import { Client, PermissionsBitField, GatewayIntentBits,StringSelectMenuBuilder,ApplicationCommandType, Partials, ChannelType, ActivityType, EmbedBuilder, WebhookClient, ActionRowBuilder, TextInputStyle, ApplicationCommandOptionType, ButtonBuilder, ButtonStyle, AttachmentBuilder, Integration, ContextMenuCommandBuilder, embedLength, Embed } from 'discord.js';
import fs from 'fs';
import fetch from 'node-fetch';
import modal from 'discord-modals';
import ms from "ms"
import { createRequire } from 'module';
const data = JSON.parse(readFileSync('./data.json', 'utf-8'));
import { MongoClient, ServerApiVersion } from 'mongodb'
import https from 'https'
import axios from 'axios'

const agent = new https.Agent({  
  rejectUnauthorized: false  // Selbstsignierte Zertifikate erlauben
});
const uri = data.mongo;
const mclient = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
});
const uri2 = data.mongo2;
const mcdb = new MongoClient(uri2, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
});


function loadJSON(filePath) {
  try {
    const data = readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    console.error(`Error loading ${filePath}:`, err.message);
    return {}; // Fallback empty object
  }
}


const require = createRequire(import.meta.url);
const client = new Client({
    partials: [
      Partials.Message,
      Partials.Channel,
      Partials.GuildMember,
      Partials.Reaction,
      Partials.GuildScheduledEvent,
      Partials.User,
      Partials.ThreadMember,
    ],
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMembers, 
      GatewayIntentBits.GuildBans, 
      GatewayIntentBits.GuildEmojisAndStickers,
      GatewayIntentBits.GuildIntegrations,
      GatewayIntentBits.GuildWebhooks, 
      GatewayIntentBits.GuildInvites,
      GatewayIntentBits.GuildVoiceStates,
      GatewayIntentBits.GuildPresences,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.GuildMessageReactions, 
      GatewayIntentBits.GuildMessageTyping,
      GatewayIntentBits.DirectMessages,
      GatewayIntentBits.DirectMessageReactions,
      GatewayIntentBits.DirectMessageTyping,
      GatewayIntentBits.MessageContent,
    ],
  })
modal(client);
import { readFileSync } from 'fs';

// Load all JSON files using readFileSync
const db = JSON.parse(readFileSync('./db.json', 'utf-8'));
const scans = JSON.parse(readFileSync('./scans.json', 'utf-8'));
const cheater = JSON.parse(readFileSync('./cheater.json', 'utf-8'));
const warns = JSON.parse(readFileSync('./warns.json', 'utf-8'));
const bansdb = JSON.parse(readFileSync('./bans.json', 'utf-8'));
const blacklist = JSON.parse(readFileSync('./blacklist.json', 'utf-8'));
const ticketdb = JSON.parse(readFileSync('./support.json', 'utf-8'));
const staffdb = JSON.parse(readFileSync('./staff.json', 'utf-8'));
const serverlist2 = JSON.parse(readFileSync('./serverlist.json', 'utf-8'));
const partner2 = JSON.parse(readFileSync('./partner.json', 'utf-8'));
const botdb = JSON.parse(readFileSync('./bot.json', 'utf-8'));
const coins = JSON.parse(readFileSync('./coins.json', 'utf-8'));
const serverdata = JSON.parse(readFileSync('./serverdata.json', 'utf-8'));
import { isMainThread } from 'worker_threads';
let previousPlayerList = []
const token = data.token
const aufnahmerolle ="1280197933987270656" // rolle für ap
const aufnahmechannel ="1280197933987270656" // channel wo alle ids rein sollen die ap haben
const modderrolle ="1280197933987270656" // role die user bekommen sollen wenn sie modden
const ergebnischannel ="1280197927976960092" // channel id wo die ergebnisse rein sollen
const boss = "1255261103567536285" //deine discord id
const bearbeitung = "1276004918842363986" // verify channel
const final = "1276282421905719369" // exposed channel
const serverrequest = "1280912030379016222"
const userstats = "1282300811505831957"
const cheaterstats = "1282300874554867782"
const pingstats = "1282300912802599026"

const ticketstaff2="1094525389566652487" // nur support ticket

const kick = 3 // ammount of warns to get kicked
const ban = 6 // ammount of warns for a perma ban
const tickecat = "1276007176061849631" //ticket kategrorie id//wenn falls werden die channel ganz oben ohne kategorie erstellt
const ticketstaff = "1279408618537750530" // role id für tickets sehen
const löscht = "1276297137117859933" //channel für nachricht gelöscht
const join ="1276291210226700288" // channel für join log
const leave = "1276291210226700288" //channel für leave log
const joinpuplic ="1276281840545824858" // channel für die puplic join message
const leavepuplic ="1276281840545824858" // channel für die puplic leave message
const edit = "1276297137117859933" // channel für message edit
const mod = "1276284544131010582" // log channel für moderation commands
var echoApiKeys = data.api.echo
client.on("error", async(error)=>{
console.log(error)
})
async function getUserDatafivem(id) {
    try {
      await mclient.connect();
      const db = mclient.db('cheatdiscords');
      const usersCollection = db.collection('users');
      const userfile = await usersCollection.findOne({ _id: id });
      let sedata = false
 //     /*
      try {
        const response = await fetch('https://db.kenytics.xyz/users/'+id, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer 8d971d8a-b712-4854-b084-e5c1508ae624`,
                'Content-Type': 'application/json',
            },
        });
     //   console.log(await response)
        sedata = await response.json();
    }catch (error) {
        console.log(error)
        sedata = false
    }
    //    */
    let cheat1embed,cheat3embed,cheat2embed, cheatembednotfall
    if(userfile){
        const udata=userfile.info
        let s1=""
        let s2=""
        let s2n = ""
let doneslist = []
        udata.reverse().forEach(ser=>{
if(!doneslist.includes(ser.id)){
doneslist.push(ser.id)
    s1=s1+"**"+ser.name+"** - found <t:"+Math.floor(ser.time/1000)+":R>\n"
            if(ser.roles.length>0){
let donerlist = []
                let safes2 = s2
                s2=s2+"**"+ser.name+"**\n"
                ser.roles.reverse().forEach(rol=>{
if(!donerlist.includes(rol.id)){
donerlist.push(rol.id)
                    s2=s2+rol.name+" <t:"+Math.floor(rol.time/1000)+":R>\n"
}
                })
                s2=s2+"\n"
                if(s2.split("").length>4000){
                    s2 = safes2
                    s2n=s2n+ser.name
                ser.roles.forEach(rol=>{
if(!donerlist.includes(rol.id)){
donerlist.push(rol.id)
                    sn2=s2n+rol.name+" <t:"+Math.floor(rol.time/1000)+":R>"
}
                })
                s2n=s2n+"\n"
                }
            }
}
        })
        s2 = s2.slice(0,-2)
        s1=s1+"ㅤ"
        s2=s2+"\nㅤ"
        cheat1embed = new EmbedBuilder()
        .setColor("#FFA500")
        .setAuthor({ name: 'This user is on Cheat/Reseller Discords', iconURL: 'https://i.postimg.cc/JhXf9ZFS/vergrosserungsglas.png'})
        .setDescription("### Servers\n"+s1)
        .addFields(
        { name: '**Discord Id**', value: id, inline: true },
        { name: '**Discord Name**', value: userfile.username, inline: true },
        { name: '**Info**', value:"🔍 This user was found on all of these Discords, check the embed below to see what roles he might have!", inline: false },
	    )
        .setTimestamp()
        .setFooter({ text: 'Synex.cc LOGS', iconURL: 'https://cdn.discordapp.com/icons/1275957721195352104/4ec6418528843fc7d8eb19b3ac74736f.webp?size=4096' });
        cheat2embed = new EmbedBuilder()
        .setColor("#FF0000")
        .setAuthor({ name: 'This user may be a cheater', iconURL: 'https://i.postimg.cc/JhXf9ZFS/vergrosserungsglas.png'})
        .setDescription("### Rollen\n"+s2)
        .addFields(
        { name: '**Discord Id**', value: id, inline: true },
        { name: '**Discord Name**', value: userfile.username, inline: true },
        { name: '**Info**',  value: '🔍 This user was found in our Discord database with the roles listed above.', inline: false },
	    )
        .setTimestamp()
        .setFooter({ text: 'Synex.cc LOGS', iconURL: 'https://cdn.discordapp.com/icons/1275957721195352104/4ec6418528843fc7d8eb19b3ac74736f.webp?size=4096' });
    }
    if(sedata.servers?.length>0){
        let s3="```yaml\n"
        sedata.servers.forEach(ser=>{
            s3=s3+ser.serverName+"\n"
            ser.roles.forEach(rol=>{
                s3=s3+rol.roleName+"\n"
 })
        })
        s3=s3+"\n```"
        cheat3embed = new EmbedBuilder()
        .setColor("#FF0000")
    .setAuthor({ name: 'This user is/was 100% a modder', iconURL: 'https://imgs.search.brave.com/Z_0JDIydtpPUxR2bUb9rEo7JuHIqa3KJfoYmCRRZczI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNC8w/NC8wMi8xMC8zOC9z/aWduLTMwNDA5M182/NDAucG5n'})
    .setDescription('🔍 Here is some information about the cheater:')
    .addFields(
        { name: '**Discord Id**', value: id, inline: true },
        { name: '**Discord Name**', value: "<@"+id+">", inline: true },
        { name: '**Servers & Roles**', value: s3, inline: false },
)
    .setTimestamp()
    .setFooter({ text: 'Synex.cc LOGS', iconURL: 'https://cdn.discordapp.com/icons/1275957721195352104/4ec6418528843fc7d8eb19b3ac74736f.webp?size=4096' });
    }
    if(userfile && sedata.servers?.length>=0){
        return [cheat1embed,cheat2embed,cheat3embed]
    } else if(sedata.servers?.length>=0){
        return [cheat3embed]
    } else if(userfile){
        return [cheat1embed,cheat2embed]
    } else {
        return false
    }
    } catch (err) {
      console.error(`Fehler beim Abrufen der Daten für Benutzer ${id}:`, err);
      const embede = new EmbedBuilder()
      .setTitle("An error has occurred")
      .setDescription("Please try again later and report this to the team.")
      .setColor("#FF0000")
      return [embede]
    } finally {
        try {
         //   await mclient.close()
        } catch (error){
            console.log(error)
        }
    }
  }
async function getUserData(id,ex,partner,file) {
    if(!file){
    try {
      await mclient.connect();
      const db = mclient.db('cheatdiscords');
      const usersCollection = db.collection('users');
      const userfile = await usersCollection.findOne({ _id: id });
      let sedata = false
 //     /*
      try {
        const response = await fetch('https://db.kenytics.xyz/users/'+id, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer 8d971d8a-b712-4854-b084-e5c1508ae624`,
                'Content-Type': 'application/json',
            },
        });
     //   console.log(await response)
        sedata = await response.json();
    }catch (error) {
        console.log(error)
        sedata = false
    }
    //    */
    let cheat1embed,cheat3embed,cheat2embed, cheatembednotfall
    if(userfile){
        const udata=userfile.info
        let s1=""
        let s2=""
        let s2n = ""
let doneslist = []
        udata.reverse().forEach(ser=>{
if(!doneslist.includes(ser.id)){
doneslist.push(ser.id)
    if(partner) s1=s1+"**"+ser.name+"** - found <t:"+Math.floor(ser.time/1000)+":R>\n"
    if(!partner) s1=s1+"**"+ser.name+"**\n"
            if(ser.roles.length>0){
let donerlist = []
                let safes2 = s2
                s2=s2+"**"+ser.name+"**\n"
                ser.roles.reverse().forEach(rol=>{
if(!donerlist.includes(rol.id)){
donerlist.push(rol.id)
                    s2=s2+rol.name+" <t:"+Math.floor(rol.time/1000)+":R>\n"
}
                })
                s2=s2+"\n"
                if(s2.split("").length>4000){
                    s2 = safes2
                    s2n=s2n+ser.name
                ser.roles.forEach(rol=>{
if(!donerlist.includes(rol.id)){
donerlist.push(rol.id)
                    sn2=s2n+rol.name+" <t:"+Math.floor(rol.time/1000)+":R>"
}
                })
                s2n=s2n+"\n"
                }
            }
}
        })
        s2 = s2.slice(0,-2)
        s1=s1+"ㅤ"
        s2=s2+"\nㅤ"
        cheat1embed = new EmbedBuilder()
        .setColor("#FFA500")
        .setAuthor({ name: 'This user is on Cheat/Reseller Discords', iconURL: 'https://i.postimg.cc/JhXf9ZFS/vergrosserungsglas.png'})
        .setDescription("### Servers\n"+s1)
        .addFields(
        { name: '**Discord Id**', value: id, inline: true },
        { name: '**Discord Name**', value: userfile.username, inline: true },
        { name: '**Info**', value: partner?"🔍 This user was found on all of these Discords, check the embed below to see what roles he might have!":"🔍 This user was found on all of these Discords, to see the roles you need to be a partner", inline: false },
	    )
        .setTimestamp()
        .setFooter({ text: 'Command executed by '+ex, iconURL: 'https://cdn.discordapp.com/icons/1275957721195352104/4ec6418528843fc7d8eb19b3ac74736f.webp?size=4096' });
        cheat2embed = new EmbedBuilder()
        .setColor("#FF0000")
        .setAuthor({ name: 'This user may be a cheater', iconURL: 'https://i.postimg.cc/JhXf9ZFS/vergrosserungsglas.png'})
        .setDescription("### Rollen\n"+s2)
        .addFields(
        { name: '**Discord Id**', value: id, inline: true },
        { name: '**Discord Name**', value: userfile.username, inline: true },
        { name: '**Info**',  value: '🔍 This user was found in our Discord database with the roles listed above.', inline: false },
	    )
        .setTimestamp()
        .setFooter({ text: 'Command executed by '+ex, iconURL: 'https://cdn.discordapp.com/icons/1275957721195352104/4ec6418528843fc7d8eb19b3ac74736f.webp?size=4096' });
    }
    if(sedata.servers?.length>0){
        let s3="```yaml\n"
        sedata.servers.forEach(ser=>{
            s3=s3+ser.serverName+"\n"
            ser.roles.forEach(rol=>{
                s3=s3+rol.roleName+"\n"
 })
        })
        s3=s3+"\n```"
        cheat3embed = new EmbedBuilder()
        .setColor("#FF0000")
    .setAuthor({ name: 'This user is/was 100% a modder', iconURL: 'https://imgs.search.brave.com/Z_0JDIydtpPUxR2bUb9rEo7JuHIqa3KJfoYmCRRZczI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNC8w/NC8wMi8xMC8zOC9z/aWduLTMwNDA5M182/NDAucG5n'})
    .setDescription('🔍 Here is some information about the cheater:')
    .addFields(
        { name: '**Discord Id**', value: id, inline: true },
        { name: '**Discord Name**', value: "<@"+id+">", inline: true },
        { name: '**Servers & Roles**', value: s3, inline: false },
)
    .setTimestamp()
    .setFooter({ text: 'Command executed by '+ex, iconURL: 'https://cdn.discordapp.com/icons/1275957721195352104/4ec6418528843fc7d8eb19b3ac74736f.webp?size=4096' });
    }
    if(userfile && sedata.servers?.length>=0){
        if(partner) return [cheat1embed,cheat2embed,cheat3embed]
        if(!partner)return [cheat1embed]
    } else if(sedata.servers?.length>=0 && partner){
        return [cheat3embed]
    } else if(userfile){
        if(partner) return [cheat1embed,cheat2embed]
        if(!partner) return [cheat1embed]
    } else {
        const embed = new EmbedBuilder()
        .setColor("#008000")
    .setAuthor({ name: 'The user is not a modder', iconURL: 'https://imgs.search.brave.com/UMVH5ELHAAPDJG1CdZIjxSoJoGhG9hWGXeTVyDtpLes/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxMy8w/Ny8xMi8xMi8xNy9j/aGVjay0xNDU1MTJf/XzM0MC5wbmc'})
    .addFields(
        { name: '**Discord Id**', value: id, inline: true },
        { name: '**Discord Ping**', value: "<@"+id+">", inline: true },
        { name: '**Info**',  value: '🔍 The user was not found in the Anti Cheater Discord database', inline: false },
    )
    .setTimestamp()
    .setFooter({ text: 'Command executed by '+ex, iconURL: 'https://cdn.discordapp.com/icons/1275957721195352104/4ec6418528843fc7d8eb19b3ac74736f.webp?size=4096' });
        return [embed]
    }
    } catch (err) {
      console.error(`Fehler beim Abrufen der Daten für Benutzer ${id}:`, err);
      const embede = new EmbedBuilder()
      .setTitle("An error has occurred")
      .setDescription("Please try again later and report this to the team.")
      .setColor("#FF0000")
      return [embede]
    } finally {
        try {
         //   await mclient.close()
        } catch (error){
            console.log(error)
        }
    }
} else {
    await mclient.connect();
    const db = mclient.db('cheatdiscords');
    const usersCollection = db.collection('users');
    const userfile = await usersCollection.findOne({ _id: id });
    if(!userfile) return {content:id+" wasnt found in the database"}
    fs.writeFileSync("./files/"+id+".json", JSON.stringify(userfile, null, 2));
    return {content:id,files:["./files/"+id+".json"]}
    await mclient.close()
}
  }
client.on("ready", async() => {
    /*
    const agent = new https.Agent({
        rejectUnauthorized: false,  // Ignore self-signed certificate
      });
      console.log("Start")
      fetch('https://185.254.98.172:30120/players.json', { agent })
        .then(response => response.json())
        .then(data => {
          serverdata.narco=data
          fs.writeFile("./serverdata.json", JSON.stringify(serverdata), err =>{
            if(err){
                console.log(err);
            }
        });
        console.log("Done")
        })
        .catch(error => {
          console.error('Error fetching JSON:', error);
        });
        */
    const userecho =false
    /*
    const ids = ["1284926075813498910"]
ids.forEach(id=>{
    client.application.commands.fetch(id)
    .then( (command) => {
  console.log(`Fetched command ${command.name}`)
  command.delete()
  console.log(`Deleted command ${command.name}`)
  })
})
*/
    if(!botdb.giveaways){
        botdb.giveaways = []
      }
    console.log(client.user.username+" is Online")
    client.user.setPresence({
        activities: [{ name: 'Cheaters getting exposed', type: ActivityType.Watching }],
        status: 'online'
    });
    const staffrole = {
        name:"setstaffrole",
        description:"set up the system",
        options:[
            {
                name:"analyst",
                description:"your pc check team role",
                type:ApplicationCommandOptionType.Role,
                required:true
            },
            {
                name:"team",
                description:"your normal staff role",
                type:ApplicationCommandOptionType.Role,
                required:true
            }
        ]
    }
    await client.application.commands.create(staffrole)
    .catch(e => {
        console.log("Error: "+e)
    })
    const checkdiscord = {
        name:"checkdiscord",
        description:"check a discord for modder",
        options:[
            {
                name:"role",
                description:"should onyl users with a specific role be scanned?",
                type:ApplicationCommandOptionType.Role,
                required:false
            },
        ]
    }
    await client.application.commands.create(checkdiscord)
    .catch(e => {
        console.log("Error: "+e)
    })
    const commands = [
        {
            name:"coins",
            description:"check your credits",
        },
        {
            name:"faq",
            description:"send an faq"
        },
        {
            name:"checkdiscords",
            description:"check what roles a user have on a cheat discord",
            options:[
                {
                    name:"user",
                    description:"the user id you want to check",
                    type:ApplicationCommandOptionType.String,
                    required:true,
                },
            ] 
           },
           {
            name: "giveaway",
            description: "manage the giveaways",
            options: [{
                name: "create",
                type: 1,
                description: "Create a giveaway",
                options: [{
                    name: "channel",
                    type: ApplicationCommandOptionType.Channel,
                    required: true,
                    description: "The channel of the giveway"
                }, {
                    name: "price",
                    type: ApplicationCommandOptionType.String,
                    required: true,
                    description: "what do you want to giveaway"
                }, {
                    name: "duration",
                    type: ApplicationCommandOptionType.String,
                    required: true,
                    description: "When should the giveaway end",
                }, {
                    name: "winner",
                    type: ApplicationCommandOptionType.Number,
                    required: true,
                    description: "how many winners should the giveaway have"
                }, {
                  name: "image",
                  type: ApplicationCommandOptionType.Attachment,
                  required: false,
                  description: "add a big image to the giveaway?"
              },{
                  name:"thumbnail",
                  type: ApplicationCommandOptionType.Attachment,
                  required: false,
                  description: "add a small image to the giveaway?"
              },{
                  name:"ping",
                  type:ApplicationCommandOptionType.Role,
                  required:false,
                  description:"do you want to ping a role at the giveaway begin"
              }]
            }, {
                name: "end",
                type: 1,
                description: "End a giveaway and pick a winner before th timer is over",
                options: [{
                    name: "id",
                    type: ApplicationCommandOptionType.String,
                    required: true,
                    description: "Message ID of the giveaway"
                }]
            }, {
              name: "delete",
              type: 1,
              description: "Delete a giveaway without picking a winner ",
              options: [{
                  name: "id",
                  type: ApplicationCommandOptionType.String,
                  required: true,
                  description: "Message ID of the giveaway"
              }]
          }],
          },
          {
            name:"server",
            description:"Serverlist",
            options:[
                {
                    name:"add",
                    description:"add a server to the list",
                    type:ApplicationCommandOptionType.Subcommand,
                    options:[
                        {
                            name:"name",
                            description:"server name",
                            type:ApplicationCommandOptionType.String,
                            required:true
                        },
                        {
                            name:"invite",
                            description:"server invite",
                            type:ApplicationCommandOptionType.String,
                            required:true
                        },
                        {
                            name:"role",
                            description:"server role",
                            type:ApplicationCommandOptionType.Role,
                            required:true
                        },
                    ]
                },
                {
                    name:"remove",
                    description:"remove a server from the list",
                    type:ApplicationCommandOptionType.Subcommand,
                    options:[
                        {
                            name:"role",
                            description:"server role",
                            type:ApplicationCommandOptionType.Role,
                            required:true
                        },
                    ]
                },
            ]
        },
        {
            name:"partner",
            description:"Parnerlist",
            options:[
                {
                    name:"add",
                    description:"add a server to the list",
                    type:ApplicationCommandOptionType.Subcommand,
                    options:[
                        {
                            name:"name",
                            description:"server name",
                            type:ApplicationCommandOptionType.String,
                            required:true
                        },
                        {
                            name:"invite",
                            description:"server invite",
                            type:ApplicationCommandOptionType.String,
                            required:true
                        },
                        {
                            name:"role",
                            description:"server role",
                            type:ApplicationCommandOptionType.Role,
                            required:true
                        },
                    ]
                },
                {
                    name:"remove",
                    description:"remove a server from the list",
                    type:ApplicationCommandOptionType.Subcommand,
                    options:[
                        {
                            name:"role",
                            description:"server role",
                            type:ApplicationCommandOptionType.Role,
                            required:true
                        },
                    ]
                },
            ]
        },
        {
            name:"permission",
            description:"set command perms",
            options:[
                {
                    name:"add",
                    description:"add permission",
                    type:ApplicationCommandOptionType.Subcommand,
                    options:[
                        {
                            name:"to",
                            description:"select the role or user",
                            type:ApplicationCommandOptionType.Mentionable,
                            required:true
                        },
                        {
                            name:"perm",
                            description:"select the permission",
                            type:ApplicationCommandOptionType.String,
                            required:true,
                            choices:[
                                {name:"warn",value:"warn"},
                                {name:"ban/kick",value:"bk"},
                                {name:"echo",value:"echo"},
                                {name:"moderation all",value:"mod"},
    
                            ]
                        }
                    ]
                },
                {
                    name:"remove",
                    description:"remove permission",
                    type:ApplicationCommandOptionType.Subcommand,
                    options:[
                        {
                            name:"from",
                            description:"select the role or user",
                            type:ApplicationCommandOptionType.Mentionable,
                            required:true
                        },
                        {
                            name:"perm",
                            description:"select the permission",
                            type:ApplicationCommandOptionType.String,
                            required:true,
                            choices:[
                                {name:"warn",value:"warn"},
                                {name:"ban/kick",value:"bk"},
                                {name:"echo",value:"echo"},
                                {name:"moderation all",value:"mod"},
    
                            ]
                        }
                    ]
                },
            ]
        },
        {
            name:"moderation",
            description:"mod commands",
            options:[
                {
                    name:"warn",
                    description:"warn commands",
                    type:ApplicationCommandOptionType.SubcommandGroup,
                    options:[
                        {
                            name:"add",
                            description:"give a user a warn",
                            type:ApplicationCommandOptionType.Subcommand,
                            options:[
                                {
                                    name:"user",
                                    description:"the user you want to warn",
                                    required:true,
                                    type:ApplicationCommandOptionType.User
                                },
                                {
                                    name:"reason",
                                    description:"the reason for the warn",
                                    required:true,
                                    type:ApplicationCommandOptionType.String
                                },
                                {
                                    name:"dm",
                                    description:"dm the user that he got warned",
                                    required:true,
                                    type:ApplicationCommandOptionType.String,
                                    choices:[
                                        {name:"Yes",value:"Yes"},
                                        {name:"No",value:"No"}
                                    ]
                                },
                                {
                                    name:"warns",
                                    description:"how many warns should the user get - default 1",
                                    required:false,
                                    type:ApplicationCommandOptionType.Integer
                                },
                            ]
                        },
                        {
                            name:"remove",
                            description:"remove a user warn",
                            type:ApplicationCommandOptionType.Subcommand,
                            options:[
                                {
                                    name:"user",
                                    description:"the user you want to remove the warn from",
                                    required:true,
                                    type:ApplicationCommandOptionType.User
                                },
                                {
                                    name:"reason",
                                    description:"the reason for the revoke",
                                    required:true,
                                    type:ApplicationCommandOptionType.String
                                },
                                {
                                    name:"id",
                                    description:"id of the warn - /warn check",
                                    required:true,
                                    type:ApplicationCommandOptionType.Integer
                                },
                                {
                                    name:"dm",
                                    description:"dm the user that his warn was removed",
                                    required:true,
                                    type:ApplicationCommandOptionType.String,
                                    choices:[
                                        {name:"Yes",value:"Yes"},
                                        {name:"No",value:"No"}
                                    ]
                                },
                            ]
                        },
                        {
                            name:"check",
                            description:"check the warns of a user",
                            type:ApplicationCommandOptionType.Subcommand,
                            options:[
                                {
                                    name:"user",
                                    description:"the user you want to check",
                                    required:true,
                                    type:ApplicationCommandOptionType.User
                                },
                            ]
                        },
                    ]
                },
                {
                    name:"kick",
                    description:"kick a user from the server",
                    type:ApplicationCommandOptionType.Subcommand,
                    options:[
                        {
                            name:"user",
                            description:"the user you want to kick",
                            required:true,
                            type:ApplicationCommandOptionType.User
                        },
                        {
                            name:"reason",
                            description:"the reason for the kick",
                            required:true,
                            type:ApplicationCommandOptionType.String
                        },
                        {
                            name:"dm",
                            description:"dm the user that he got kicked",
                            required:true,
                            type:ApplicationCommandOptionType.String,
                            choices:[
                                {name:"Yes",value:"Yes"},
                                {name:"No",value:"No"}
                            ]
                        },
                    ]
                },
                {
                    name:"ban",
                    description:"ban a user from the server",
                    type:ApplicationCommandOptionType.Subcommand,
                    options:[
                        {
                            name:"user",
                            description:"the user you want to ban",
                            required:true,
                            type:ApplicationCommandOptionType.User
                        },
                        {
                            name:"reason",
                            description:"the reason for the ban",
                            required:true,
                            type:ApplicationCommandOptionType.String
                        },
                        {
                            name:"dm",
                            description:"dm the user that he got banned",
                            required:true,
                            type:ApplicationCommandOptionType.String,
                            choices:[
                                {name:"Yes",value:"Yes"},
                                {name:"No",value:"No"}
                            ]
                        },
                        {
                            name:"time",
                            description:"how long do you want to ban him",
                            required:false,
                            type:ApplicationCommandOptionType.String
                        },
                    ]
                },
                {
                    name:"clear",
                    description:"delete messages",
                    type:ApplicationCommandOptionType.Subcommand,
                    options:[
                        {
                            name:"amount",
                            description:"how many messages you want to delete",
                            type:ApplicationCommandOptionType.Integer,
                            required:true
                        }
                    ]
                },
                {
                    name:"blacklist",
                    description:"copmmands for blacklist system",
                    type:ApplicationCommandOptionType.SubcommandGroup,
                    options:[
                        {
                            name:"add",
                            description:"add a person to the blacklist",
                            type:ApplicationCommandOptionType.Subcommand,
                            options:[
                                {
                                    name:"id",
                                    description:"discord id of the user",
                                    type:ApplicationCommandOptionType.String,
                                    required:true
                                },
                                {
                                    name:"reason",
                                    description:"reason for blacklist",
                                    type:ApplicationCommandOptionType.String,
                                    required:true
                                },
                            ]
                        },
                        {
                            name:"list",
                            description:"list of all blacklistet users",
                            type:ApplicationCommandOptionType.Subcommand,
                        },
                        {
                            name:"check",
                            description:"check the reason for a blacklist",
                            type:ApplicationCommandOptionType.Subcommand,
                            options:[
                                {
                                    name:"id",
                                    description:"discord id of the user",
                                    type:ApplicationCommandOptionType.String,
                                    required:true
                                },
                            ]
                        },
                        {
                            name:"remove",
                            description:"remove a person to the blacklist",
                            type:ApplicationCommandOptionType.Subcommand,
                            options:[
                                {
                                    name:"id",
                                    description:"discord id of the user",
                                    type:ApplicationCommandOptionType.String,
                                    required:true
                                },
                                {
                                    name:"reason",
                                    description:"reason for unblacklist",
                                    type:ApplicationCommandOptionType.String,
                                    required:true
                                },
                            ]
                        },
                    ]
                }
            ]
        },
        {
            "name": "Echo Scan Senden",
            "type": ApplicationCommandType.User
              },
              {
                "name": "Echo Scan Ergebnis",
                "type": ApplicationCommandType.User
                  },
                  {
                    name:"cheaterlist",
                    description:"get discord ids of all cheaters",
            
                },
                {
                    
                        name:"check",
                        description:"check the amount of submits of a user",
                        options:[
                            {
                                name:"user",
                                description:"the user you want to check to",
                                type:ApplicationCommandOptionType.User,
                                required:true
                            }
                        ]
                },
                {
                    name:"echo",
                    description:"echo.ac api command",
                    options:[
                    {
                    name:"key",
                    description:"fivem key optionen",
                    type:2,
                    options:[
                    {
                    name:"generieren",
                    description:"generiere einen key für echo",
                    type:1
                    },
                    {
                    name:"check",
                    description:"überprüfe das ergebnis eines codes",
                    type:1,
                    options:[
                    {
                    name:"code",
                    description:"code des scans",
                    type:ApplicationCommandOptionType.String,
                    required:true
                    }
                    ]
                    }
                    ]
                    },
                    ]
                    }
    ]
    /*
 commands.forEach(async (cmd)=>{
        const guildId = '1275957721195352104'; 
await client.guilds.cache.get(guildId)?.commands.create(cmd)
    .then(() => {
        console.log('Command '+cmd.name+' registered successfully in the specified server.');
    })
    .catch(e => {
        console.log("Error: " + e);
    });
    })
    */
})
function savecheater() {
    fs.writeFile("./cheater.json", JSON.stringify(cheater), err =>{
        if(err){
            console.log(err);
        }
    });
}
function savedb() {
    fs.writeFile("./db.json", JSON.stringify(db), err =>{
        if(err){
            console.log(err);
        }
    });
}
function savebans() {
    fs.writeFile("./bans.json", JSON.stringify(bansdb), err =>{
        if(err){
            console.log(err);
        }
    });
}
function savewarns() {
    fs.writeFile("./warns.json", JSON.stringify(warns), err =>{
        if(err){
            console.log(err);
        }
    });
}
function saveb() {
    fs.writeFile("./blacklist.json", JSON.stringify(blacklist), err =>{
        if(err){
            console.log(err);
        }
    });
}
function savetdb() {
    fs.writeFile("./support.json", JSON.stringify(ticketdb), err =>{
        if(err){
            console.log(err);
        }
    });
}
function savestaffdb() {
    fs.writeFile("./staff.json", JSON.stringify(staffdb), err =>{
        if(err){
            console.log(err);
        }
    });
}
function saveslist() {
    fs.writeFile("./serverlist.json", JSON.stringify(serverlist2), err =>{
        if(err){
            console.log(err);
        }
    });
}
function saveplist() {
    fs.writeFile("./partner.json", JSON.stringify(partner2), err =>{
        if(err){
            console.log(err);
        }
    });
}
function savecoins() {
    fs.writeFile("./coins.json", JSON.stringify(coins), err =>{
        if(err){
            console.log(err);
        }
    });
}
client.on('interactionCreate', async(interaction) => {
    if(!interaction.guild) return interaction.reply("Their was an error, please try again later.")
if(!coins[interaction.user.id]) {
        coins[interaction.user.id] = {
            coins:0,
            roletime:false
        }
    }
savecoins()

    if(coins[interaction.user.id]?.roletime < Date.now()) {
        const g = client.guilds.cache.get("1275957721195352104")
await g.members.fetch
        const mem = await g.members.cache.get(interaction.user.id)
        if(mem?.roles.cache.has("1283469110977495123")) mem.roles.remove("1283469110977495123")
        coins[interaction.user.id].roletime =false
        savecoins()
    }
    let userpartner = false
    if(interaction.member.roles.cache.has("1282327535845376203")) userpartner = true
    if(interaction.member.roles.cache.has("1276932445647802471")) userpartner = true
    if(interaction.member.roles.cache.has("1283469110977495123")) userpartner = true
    if(interaction.member.roles.cache.has("1276000833024294932")) userpartner = true
    if(interaction.member.id === "1255261103567536285") userpartner=true
    if(interaction.member.id === "881470112337649684") userpartner=true
    partner2.servers.forEach(ser=>{
        if(interaction.member.roles.cache.has(ser.role)) userpartner = true
    })
    if(!ticketdb[interaction.guild.db]){
        ticketdb[interaction.guild.id] = {
            anfrage:false
        }
    }
    savetdb()
    if(interaction.customId?.startsWith("fullscan-")){
        const [name,rang,id] = interaction.customId.split("-")
        if(!coins[interaction.user.id]) {
            coins[interaction.user.id] = {
                coins:0,
                roletime:false
            }
        }
        let usercoins = parseFloat(coins[interaction.user.id].coins)
        cheater.allowed.forEach(ch=>{
            if(ch.reporter===interaction.user.id)usercoins=usercoins+1
        })
        if(rang !== "Partner") {
            if(rang === "Booster") {
                if(usercoins-5<0) return interaction.reply({ephemeral:true,content:"Not enough coins!"})
                    coins[interaction.user.id].coins=coins[interaction.user.id].coins-5
                    savecoins()
            } else {
                if(usercoins-15<0) return interaction.reply({ephemeral:true,content:"Not enough coins!"})
                    coins[interaction.user.id].coins=coins[interaction.user.id].coins-15
                    savecoins()
            }
        }
        let guild = client.guilds.cache.get("1275957721195352104")
        let ch = guild.channels.cache.get("1285257898368438365")
                    interaction.reply({ephemeral:true,content:"The scan is now running. Please wait"})
                if(id!=="0"){
                    interaction.guild.members.cache.forEach(async m=>{
                            if(await m.roles.cache.has(id)) await interaction.channel.send({embeds:await getUserData(m.id,interaction.guild.name,true)})
                    })
                } else {
                interaction.guild.members.cache.forEach(async m=>{
                        await interaction.channel.send({embeds:await getUserData(m.id,interaction.guild.name,true)})
                })
            }
                setTimeout(async() => {
                await ch.send("Neuer Scan von "+interaction.guild.name+". Ausgeführt von "+interaction.user.username+" - "+interaction.user.id+" Scan Art: Partner Scan")
                }, 1500);
            } else if(interaction.customId?.startsWith("smallscan-")){
            const [name,rang,id] = interaction.customId.split("-")
            if(!coins[interaction.user.id]) {
                coins[interaction.user.id] = {
                    coins:0,
                    roletime:false
                }
            }
            let usercoins = parseFloat(coins[interaction.user.id].coins)
            cheater.allowed.forEach(ch=>{
                if(ch.reporter===interaction.user.id)usercoins=usercoins+1
            })
            let perms = false
            if(rang === "Partner") perms=true
            if(rang === "Booster") perms=true
            if(!perms) {
                if(usercoins-5<0) return interaction.reply({ephemeral:true,content:"Not enough coins!"})
            }
            if(!perms){
            coins[interaction.user.id].coins=coins[interaction.user.id].coins-5
            savecoins()
            }
            let guild = client.guilds.cache.get("1275957721195352104")
            let ch = guild.channels.cache.get("1285257898368438365")
                        interaction.reply({ephemeral:true,content:"The scan is now running. Please wait"})
                    if(id!=="0"){
                        interaction.guild.members.cache.forEach(async m=>{
                                if(await m.roles.cache.has(id)) await interaction.channel.send({embeds:await getUserData(m.id,interaction.guild.name,false)})
                        })
                    } else {
                    interaction.guild.members.cache.forEach(async m=>{
                            await interaction.channel.send({embeds:await getUserData(m.id,interaction.guild.name,false)})
                    })
                }
                    setTimeout(async() => {
                    await ch.send("Neuer Scan von "+interaction.guild.name+". Ausgeführt von "+interaction.user.username+" - "+interaction.user.id+" Scan Art: Partner Scan")
                    }, 1500);
                } else if(interaction.commandName==="checkdiscord"){
        if(interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)){
            const role = interaction.options.getRole("role")?interaction.options.getRole("role").id:0
            const guild = client.guilds.cache.get("1275957721195352104")
            await guild.members.fetch()
            if(!guild.members.cache.has(interaction.user.id)) return interaction.reply({ephemeral:true,content:"You need to be on our Discord for this Command: discord.gg/anticheater"})
            const mem = guild.members.cache.get(interaction.user.id)
            let userpartner = false
            if(mem.roles.cache.has("1282327535845376203")) userpartner = true
         //   if(mem.roles.cache.has("1276932445647802471")) userpartner = true
        // if(mem.roles.cache.has("1283469110977495123")) userpartner = true
            if(mem.roles.cache.has("1276000833024294932")) userpartner = true
            if(mem.id === "1255261103567536285") userpartner=true
             if(mem.id === "881470112337649684") userpartner=true
            partner2.servers.forEach(ser=>{
                if(interaction.member.roles.cache.has(ser.role)) userpartner = true
            })
            let booster = false
            if(mem.roles.cache.has("1276932445647802471")) booster = true
                if(!coins[interaction.user.id]) {
                    coins[interaction.user.id] = {
                        coins:0,
                        roletime:false
                    }
                }
                let usercoins = parseFloat(coins[interaction.user.id].coins)
                cheater.allowed.forEach(ch=>{
                    if(ch.reporter===interaction.user.id)usercoins=usercoins+1
                })
            const embed = new EmbedBuilder()
            .setTitle("Check this Discord")
            .setDescription("You can check this hole discord if their are on any cheat/reseller discords")
            .addFields(
                {
                    name:"**Small scan**",
                    value:"**Info:**\nJust get the servers the user was/is on\n\n**Prices:**\nPartner: `Free`\nNitro booster: `Free`\nUser: `5`<:3043coin:1284931936539774998>\nㅤ"
                },
                {
                    name:"**Full scan**",
                    value:"**Info:**\nGet the servers, the roles and the time the user had them\n\n**Prices:**\nPartner: `Free`\nNitro booster: `5`<:3043coin:1284931936539774998>\nUser: `15`<:3043coin:1284931936539774998>\nㅤ"
                },
                {
                    name:"**Your coins**",
                    value:usercoins.toString(),
                    inline:true
                },
                {
                    name:"**Your role**",
                    value:userpartner?"Partner":booster?"Booster":"User",
                    inline:true
                }
            )
            .setColor("#ffe000")
            const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                .setLabel("Small scan")
                .setCustomId("smallscan-"+(userpartner?"Partner":booster?"Booster":"User")+"-"+role)
                .setStyle(ButtonStyle.Success),
                new ButtonBuilder()
                .setLabel("Full scan")
                .setCustomId("fullscan-"+(userpartner?"Partner":booster?"Booster":"User")+"-"+role)
                .setStyle(ButtonStyle.Success),
            )
            interaction.reply({ephemeral:true,embeds:[embed],components:[row]})
        } else {
            interaction.reply({ephemeral:true,content:"You need to be an server Admin to do this."})
        }
        return
    } else if(interaction.commandName==="setstaffrole"){
        if(!interaction.member.permissions.has([PermissionsBitField.Flags.Administrator]) && !boss && interaction.user.id!=="881470112337649684") return interaction.reply({ephemeral:true,content:"You need to be an Discord Admin on this Server."})
        const analy = interaction.options.getRole("analyst")
        const te = interaction.options.getRole("team")
        if(ticketdb[interaction.guild.id].anfrage) return interaction.reply({ephemeral:true,content:"You already have a open request\nPlease wait until our team reviews it."})
        ticketdb[interaction.guild.id].anfrage = {name:interaction.guild.name,team:te.id,analyst:analy.id,submit:interaction.user.id}
        savetdb()
        const embed = new EmbedBuilder()
        .setTitle("Request send")
        .setDescription("Thank you for register.\nIn the next 24h a staff member will review your server.\nPlease answer all their questions if their open a ticket.")
        interaction.reply({ephemeral:true,embeds:[embed]})
        interaction.user.send({embeds:[embed]})
        const inv = await interaction.channel.createInvite({
            maxAge: 0, 
            maxUses: 0, 
            unique: true
        });
        const emb = new EmbedBuilder()
        .setTitle("New server request")
        .addFields([
            {name:"Server name",value:interaction.guild.name},
            {name:"Server invite",value:inv.url},
            {name:"Staff role",value:`${te.name} - ${te.id}`},
            {name:"Analyst role",value:`${analy.name} - ${analy.id}`},
            {name:"Submit by",value:interaction.user.username}
        ])
        .setTimestamp()
        const row = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setLabel("Accept")
            .setCustomId("serverrequesta-"+interaction.guild.id)
            .setStyle(ButtonStyle.Success),
            new ButtonBuilder()
            .setLabel("Deny")
            .setCustomId("serverrequestd-"+interaction.guild.id)
            .setStyle(ButtonStyle.Danger)
        )
        const ch = client.channels.cache.get(serverrequest)
        await ch.send({components:[row],embeds:[emb]})
        return
    } else {
    if(interaction.guild.id !== "1275957721195352104") return interaction.reply({ephemeral:true,content:"you cant use this command.\nCommands available for you:\n/setstaffrole"})
        if(!ticketdb[interaction.user.id]){
            ticketdb[interaction.user.id] = {
                support:false,
                tbw:false,
                dbw:false,
                verify:false
            }
        }
        savetdb()
        if(!db.warn){
            db.warn = []
        }
        if(!db.bk){
            db.bk = []
        }
        if(!db.echo){
            db.echo = []
        }
        if(!db.mod){
            db.mod= []
        }
savedb()
var warn= false
var bk = false
var echo = false
var mod = false
if(interaction.user.id === boss){
    warn = true
    bk = true
    echo = true
    mod = true
}
if(interaction.user.id ==="881470112337649684"){
    warn = true
    bk = true
    echo = true
    mod = true
}
db.mod.forEach(an=>{
    if(interaction.member && interaction.member.roles.cache.has(an)) mod = true
    if(interaction.user.id === an) mod = true
})
db.bk.forEach(an=>{
    if(interaction.member && interaction.member.roles.cache.has(an)) bk = true
    if(interaction.user.id === an) bk = true
})
db.echo.forEach(an=>{
    if(interaction.member && interaction.member.roles.cache.has(an)) echo = true
    if(interaction.user.id === an) echo = true
})
db.warn.forEach(an=>{
    if(interaction.member && interaction.member.roles.cache.has(an))  warn= true
    if(interaction.user.id === an) warn = true
})
echoApiKeys = data.api.echo
const bans = bansdb.bans
if(interaction.commandName==="coins"){
    if(!coins[interaction.user.id]) {
        coins[interaction.user.id] = {
            coins:0,
            roletime:false
        }
    }
    let usercoins = parseFloat(coins[interaction.user.id].coins)
    cheater.allowed.forEach(ch=>{
        if(ch.reporter===interaction.user.id)usercoins=usercoins+1
    })
    let status = false
    if(!coins[interaction.user.id].roletime) status = "Not active" 
    if(coins[interaction.user.id].roletime) status = "Active until <t:"+Math.floor(coins[interaction.user.id].roletime/1000)+":R>"
    const embed = new EmbedBuilder()
    .setAuthor({ 
        name: interaction.user.username, 
        iconURL: interaction.user.displayAvatarURL({ dynamic: true }) // Gets user's avatar URL
    })
  //  .setTitle(interaction.user.username)
    .setColor("#ffe000")
   // .setDescription("### Get Coins:\nEach <#1276003892181733378> that get acceptet is 1<:3043coin:1284931936539774998>\n### Reward:\n1<:3043coin:1284931936539774998> = 2 hours partner access\n10<:3043coin:1284931936539774998> = 1 day partner access")
    .addFields(
        {
            name:"**Get Coins**",
            value:"Each <#1276003892181733378> that get acceptet is 1<:3043coin:1284931936539774998>",
            inline:false
        },
        {
            name:"**Reward**",
            value:"1<:3043coin:1284931936539774998> = 2 hours premium access\n10<:3043coin:1284931936539774998> = 1 day premium access"
        },
        {
            name:"**Status**",
            value:status?status:"Not Found"
        },
        {
            name:"**Coins**",
            value:usercoins.toString()+"<:3043coin:1284931936539774998>",
            inline:true
        },
    )
    const row = new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
        .setCustomId("coinsredeem1-"+interaction.user.id)
        .setLabel("Redeem")
        .setStyle(ButtonStyle.Success)
        .setEmoji("<:3043coin:1284931936539774998>")
    )
    interaction.reply({embeds:[embed],components:[row]})
}
if(interaction.commandName==="checkdiscords"){
    //if(interaction.user.id!=="881470112337649684" && interaction.user.id!=="1255261103567536285")return interaction.reply({content:"Der Command befindet sich gerade in Wartung, probiere es später erneut."})
    const id = interaction.options.getString("user")
    if(botdb.blacklist.indexOf(id)>=0) return interaction.reply({ephemeral:false,content:"Its not allowed to scan this user anymore.\nIf you have any questions, open a Ticket"})
    if(!userpartner && db.partnerstatus) return interaction.reply({content:"This is just a part of the Scan!\nTo get the full Informations (the roles the user have, when he had them and when he was on the servers) their are 3 options:\n- Boost this Discord\n- Become a partner (open a <#1280625470525804585>)\n- Be active in <#1276003892181733378> (</coins:1284926840406020199>)",embeds:await getUserData(id,interaction.user.username,false)})
    await interaction.reply({embeds:await getUserData(id,interaction.user.username,true)})
}
if(interaction.commandName === "giveaway"){
    if(!mod) return interaction.reply({ephemeral:true, content:"You can't use this Command"})
    if(interaction.options._subcommand === "create"){
      const channel = interaction.options.getChannel("channel")
      const price = interaction.options.getString("price")
      const duration = interaction.options.getString("duration")
      const winner = interaction.options.getNumber("winner")
      const image = interaction.options.getAttachment("image")
      const role = interaction.options.getRole("ping")
      const thump = interaction.options.getAttachment("thumbnail")
      if(!botdb.giveaways){
        botdb.giveaways = []
      }
let currentG = botdb.giveaways.length
const times = Date.now() + ms(duration)
botdb.giveaways.push({
"channel":channel.id,
"price":price,
"winners":winner,
"end":times,
"members":[],
"mId":0,
"ended":false,
"host": interaction.user.id
})
fs.writeFile("./bot.json", JSON.stringify(botdb), err =>{
if(err){
console.log(err);
}
})
  let em = new EmbedBuilder()
.setAuthor({name:"🎉 GIVEAWAY 🎉"})
.setTitle(price.toString())
.setDescription("Press the button to enter the giveaway.\n**Giveaway ends**: <t:"+(Math.floor(times/1000))+":R>\nHosted by: <@!"+interaction.user.id+">\nWinners:"+winner.toString())
.setColor("#000000")
.setFooter({text:botdb.giveaways[currentG].members.length+" Participant(s)"})
.setTimestamp();
if(image){
em.setImage(image.url)
}
        if(thump){
            em.setThumbnail(thump.url)
        }
 let row = new ActionRowBuilder()
.addComponents(
new ButtonBuilder()
.setEmoji("🎉")
.setStyle(ButtonStyle.Secondary)
.setCustomId("giveaway_teilnahme")
)
 if(role){
await channel.send({embeds:[em], components:[row],content:"<@&"+role+">"}).then(msg=>{
botdb.giveaways[currentG].mId = msg.id
botdb.giveaways[currentG].end = times
fs.writeFile("./bot.json", JSON.stringify(botdb), err =>{
if(err){
  console.log(err);
}
})
return
})
 } else{
         await channel.send({embeds:[em], components:[row]}).then(msg=>{
botdb.giveaways[currentG].mId = msg.id
botdb.giveaways[currentG].end = times
fs.writeFile("./bot.json", JSON.stringify(botdb), err =>{
if(err){
  console.log(err);
}
})
})
 }
} else if(interaction.options._subcommand === "end"){
const id = interaction.options.getString("id")
var find = false
botdb.giveaways.forEach(gw =>{
if(gw.mId === id.toString()){
find = botdb.giveaways.indexOf(gw)
}    

})
if(find === false) return interaction.reply({ephemeral:true,content:"I can't find a giveaway with the message id "+id})
if(botdb.giveaways[find].ended === true) return interaction.reply({ephemeral:true,content:"The giveaway is already over. If you want to get a new winner, please use /giveaway reroll"})
const now = Date.now()
botdb.giveaways[find].end = 0
const channele = client.channels.cache.get(botdb.giveaways[find].channel)
const msg = await client.channels.cache.get(botdb.giveaways[find].channel).messages.fetch(botdb.giveaways[find].mId)
const emb = msg.embeds[0].data
emb.description = "Press the button to enter the giveaway.\n**Giveaway ends**: <t:"+Math.floor(now/1000)+":R>\nHosted by: <@!"+botdb.giveaways[find].host+">\nWinners: "+botdb.giveaways[find].winners
channele.messages.cache.get(botdb.giveaways[find].mId).edit({embeds: [emb]})
fs.writeFile("./bot.json", JSON.stringify(botdb), err =>{
if(err){
 console.log(err);
}
})




} else if(interaction.options._subcommand === "delete"){
const id = interaction.options.getString("id")
var find = false
botdb.giveaways.forEach(gw =>{
if(gw.mId === id.toString()){
find = botdb.giveaways.indexOf(gw)
}    

})
if(find === false) return interaction.reply({ephemeral:true,content:"I can't find a giveaway with the message id "+id+"\nmaybe it is already over"})
if(botdb.giveaways[find].ended === true) return interaction.reply({ephemeral:true,content:"The giveaway is already over."})
const gw = botdb.giveaways[find]
interaction.reply({ephemeral:true,content:"i have successfully deleted the giveaway"})
client.channels.cache.get(gw.channel).messages.fetch(gw.mId).then(msg =>{
if(!msg) return
msg.delete()
})
botdb.giveaways.splice(find, 1) 
fs.writeFile("./bot.json", JSON.stringify(botdb), err =>{
if(err){
 console.log(err);
}
})
}
   }
   if(interaction.commandName==="server"){
    if(!mod) return interaction.reply({ephemeral:true, content:"You can't use this Command"})
    const serverlist = serverlist2.servers
    if(interaction.options._subcommand==="add"){
        var ind = false
        serverlist.forEach(server=>{
            if(server.role ===interaction.options.getRole("role").id ) ind = serverlist.indexOf(server)
        })
    if(ind !== false) return interaction.reply({ephemeral:true,content:"Their is already a server with this role: "+serverlist[ind].name})
        serverlist.push(
            {
                name:interaction.options.getString("name"),
                invite:interaction.options.getString("invite"),
                role:interaction.options.getRole("role").id
            }
        )
        saveslist()
    } else {
        var ind = false
        serverlist.forEach(server=>{
            if(server.role ===interaction.options.getRole("role").id ) ind = serverlist.indexOf(server)
        })
    if(ind === false) return interaction.reply({ephemeral:true,content:"This role is not set to any server so i cant remove it"})
    serverlist.splice(ind,1)
saveslist()
    }
    interaction.reply({ephemeral:true,content:"Done"})
}
if(interaction.commandName==="partner"){
    if(!mod) return interaction.reply({ephemeral:true, content:"You can't use this Command"})
    const partnerlist = partner2.servers
    if(interaction.options._subcommand==="add"){
        var ind = false
        partnerlist.forEach(server=>{
            if(server.role ===interaction.options.getRole("role").id ) ind = partnerlist.indexOf(server)
        })
    if(ind !== false) return interaction.reply({ephemeral:true,content:"Their is already a server with this role: "+partnerlist[ind].name})
        partnerlist.push(
            {
                name:interaction.options.getString("name"),
                invite:interaction.options.getString("invite"),
                role:interaction.options.getRole("role").id
            }
        )
        saveplist()
    } else {
        var ind = false
        partnerlist.forEach(server=>{
            if(server.role ===interaction.options.getRole("role").id ) ind = partnerlist.indexOf(server)
        })
    if(ind === false) return interaction.reply({ephemeral:true,content:"This role is not set to any server so i cant remove it"})
    partnerlist.splice(ind,1)
saveplist()
    }
    interaction.reply({ephemeral:true,content:"Done"})
}
if(interaction.commandName==="permission"){
    if(interaction.user.id !== boss && interaction.user.id !=="881470112337649684") return interaction.reply({ephemeral:true,content:"No perms to use this"})
        const t = interaction.options.getString("perm")
        const perm = interaction.options.getMentionable("to") || interaction.options.getMentionable("from")
    if(interaction.options._subcommand==="add"){
        db[t].push(perm.id)
    } else {
        const i = db[t].indexOf(perm.id)
        if(i<0)return interaction.reply({ephemeral:true,content:"this user/role dont have this permission"})
        db[t].splice(i,1)
    }
    savedb()
interaction.reply({ephemeral:true,content:"Saved"})
}
if(interaction.commandName==="faq"){
    if(!mod) return interaction.reply({ephemeral:true,content:"No Perms :cry:"})
    let m = new modal.Modal()
    .setCustomId("faq")
    .setTitle("Send an FAQ")
    .addComponents([
        new modal.TextInputComponent()
        .setCustomId('q')
        .setLabel("Question")
        .setRequired(true)
        .setMaxLength(1800)
        .setStyle(TextInputStyle.Paragraph),
        new modal.TextInputComponent()
        .setCustomId('a')
        .setLabel("Answer")
        .setRequired(true)
        .setMaxLength(1800)
        .setStyle(TextInputStyle.Paragraph),
    ])
modal.showModal(m, {
        client: client,
        interaction: interaction
    })
}
if(interaction.commandName === "check"){
    const user = interaction.options.getUser("user").id
    var all = 0
    var allowed = 0
    var denied = 0
    cheater.submit.forEach(sub=>{
        if(sub.reporter===user) all++
    })
    cheater.denied.forEach(sub=>{
        if(sub.reporter===user) denied++
    })
    cheater.allowed.forEach(sub=>{
        if(sub.reporter===user) allowed++
    })
    const embed = new EmbedBuilder()
    .setTitle("User stats")
    .addFields([
        {name:"User",value:`<@${user}>`},
        {name:"Submits",value:all.toString()},
        {name:"Accepted",value:allowed.toString()},
        {name:"Denied",value:denied.toString()},
    ])
    interaction.reply({embeds:[embed]})
}
if(interaction.commandName === "send"){
    if(!warn) return interaction.reply({ephemeral:true,content:"<a:deny:1285608966184898643> No permission to use this command"})
    const to = interaction.options.getMentionable("send")
    const text = interaction.options.getString("text")
    if(text === "detec")to.send("Fragen für die Einstellung in das Detection Team\n||PS. Leider müssen die Fragen auf Englisch gestellt werden da sie sonst kein Sinn ergeben und ihr im Detection Team Englisch beehrschen solltet!||\n\nBeantworte folgende Fragen:\nWhat are YARA rules, and how are they used in cheat detection?\nWhat are in-memory strings, and why are they important for detecting cheats?\nWhat type of hash out of the ones below is the best hash for a detection?\nMD5\nSHA-1\nSHA-256\nVhash\nAuthentihash\nImportantHash\nimphash\nSSDEEP\nTLSH\nWhat is memory analysis, and how is it used to detect cheats that load into memory?\nHow can we detect process Hollowing?")
    if(text === "team")to.send("Wie Bewerbe ich mich?\nGanz easy in nur 3 Schritten\n\nInfos:\nGoogle Docs only\nMin. Alter 16.\n\n\n1.\nFragen:  [bitte als Inhaltsverzeichnis in der bewerbung auflisten]\nName\nAlter\nSeit wann FiveM\nWelche spezifischen Projekte oder Server haben Sie in der Vergangenheit unterstützt?\nWelche Tools und Methoden verwenden Sie für PC-Kontrollen in der FiveM-Community?\nWie vertraut sind Sie mit den Anti-Cheat-Systemen von FiveM?\nHaben Sie Erfahrung mit der Erkennung und Analyse von Cheats oder Exploits?\nKönnen Sie Beispiele für frühere Fälle geben, bei denen Sie Cheats oder Manipulationen identifiziert haben?\nWie gehen Sie bei der Analyse von verdächtigen Aktivitäten auf einem Server vor?\nWie sorgen Sie dafür, dass die Privatsphäre und die Sicherheit der Spieler bei PC-Kontrollen gewahrt bleiben?\nKönnen Sie einen Fall beschreiben, in dem Sie ein schwieriges Problem lösen mussten? Wie sind Sie vorgegangen?\nWie gut kennen Sie sich mit den Mechaniken und Scripts von FiveM aus?\nHaben Sie Erfahrung mit der Entwicklung eigener Tools oder Scripts zur Unterstützung Ihrer Arbeit?\n\n2.\nZusätzlich wichtige infos über sie als person\nHast du zusätzliches Interesse am Detection Team? Wenn ja schreibe es bitte **GUT** Sichtbar in die Bewerbung\n\n3.\nGoogle docs öffentlich stellen")
        interaction.reply({ephemeral:true,content:"Send to the user/channel"})
    }
if(interaction.commandName==="moderation"){
    const sube = interaction.options._subcommand
    const loh = interaction.guild.channels.cache.get("1276284544131010582")
    if(sube === "ban"){
        if(!bk) return interaction.reply({ephemeral:true,content:"<a:deny:1285608966184898643> No permission to use this command"})
        const user = interaction.options.getMember("user")
        const reason=interaction.options.getString("reason")
        const dm =interaction.options.getString("dm")
        let time =interaction.options.getString("time")
        if(time === null) {
            time = Infinity
        } else {
            if(ms(time) === undefined)return interaction.reply({ephemeral:true,embeds:[new EmbedBuilder().setTitle("Time").setDescription("Please follow these rules for the time:\nDays: 1d/2d/3d...\nHours: 1h/2h/3h...")]})
            time = ms(time)
        }
       if(!user.bannable) return interaction.reply({ephemeral:true,content:"<a:deny:1285608966184898643> I can't ban this user!"})
        bans.push({user:user.id,reason:reason,time:time,by:interaction.user.id})
    savebans()
    if (dm === "Yes") {
        try {
            const embed = new EmbedBuilder()
                .setTitle("You have bemember!")
                .setColor("#f40000")
                .setDescription(`\nYou have been **banned** by the team member **${interaction.user.username}** from the server **${interaction.guild.name}**.\n\n**The reason for your ban is:** ${reason}\n\n*If you think it is a false ban, click on the unban Discord button below.*`);

    
            const row = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setLabel("Unban Discord")
                        .setStyle(ButtonStyle.Link)
                        .setURL("https://discord.gg/KuDA7Ybb2n") // Überprüfe den Unban-Link
                );
    
            await user.send({ embeds: [embed], components: [row] });
    
            // Ban the user after a small delay
            setTimeout(() => {
                user.ban({ reason });
            }, 250);
    
        } catch (error) {
            console.error("Failed to send DM or ban the user:", error);
        }
    } else {
        user.ban({reason})
    }
    interaction.reply({ephemeral:false,content:"<a:IMG_Hacken:1285608154628886720> Succesfully banned the from "+interaction.guild.name+". Reason: "+reason})
    const emb = new EmbedBuilder()
    .setTitle("New Ban")
    .addFields([
        {name:"Executor",value:`<@${interaction.user.id}>`},
        {name:"Target",value:user.user.username+" - "+user.id},
        {name:"Reason",value:reason},
        {name:"Banned until",value:time===Infinity?"Forever":`<t:${(Date.now()+time)/1000}:R>`}
    ])
    await loh.send({embeds:[emb]})
    }
    if(sube === "kick"){
        if(!bk) return interaction.reply({ephemeral:true,content:"<a:deny:1285608966184898643> No permission to use this command"})
        const user = interaction.options.getMember("user")
        const reason=interaction.options.getString("reason")
        const dm =interaction.options.getString("dm")
        if(!user.kickable) return interaction.reply({ephemeral:true,content:"<a:deny:1285608966184898643> I cant kick this user"})
    if(dm === "Yes"){
        try {
            const embed=new EmbedBuilder()
            .setTitle("You have been kicked!")
            .setColor("#f40000")
            .setDescription("\nYou have been kicked by the team member "+interaction.user.username+" from the server "+interaction.guild.name+"\n\nThe reason for your kick is: "+reason)
        user.send({embeds:[embed]})
        } finally {
            setTimeout(() => {
                user.kick({reason})
            }, 250);
        }
    } else {
        user.kick({reason})
    }
    interaction.reply({ephemeral:false,content:"<a:IMG_Hacken:1285608154628886720> Succesfully kicked the user from "+interaction.guild.name+". Reason: "+reason})
    const emb = new EmbedBuilder()
    .setTitle("User kicked")
    .addFields([
        {name:"Executor",value:`<@${interaction.user.id}>`},
        {name:"Target",value:user.user.username+" - "+user.id},
        {name:"Reason",value:reason},
    ])
    await loh.send({embeds:[emb]})
    }
    if(sube === "clear"){
        if(!mod) return interaction.reply({ephemeral:true,content:"<a:deny:1285608966184898643> No permission to use this command"})
        const amount = interaction.options.getInteger('amount')
        if (amount < 1 || amount > 100) return interaction.reply({content: 'Please specify a number between 1 and 100.',ephemeral: true });
        try {
            const messages = await interaction.channel.bulkDelete(amount, true);
            await interaction.reply({
                content: `Successfully deleted ${messages.size} messages.`,
                ephemeral: true
            });
            const emb = new EmbedBuilder()
    .setTitle("Message Clear")
    .addFields([
        {name:"Executor",value:`<@${interaction.user.id}>`},
        {name:"Channel",value:`<#${interaction.channel.id}>`},
        {name:"Amount",value:amount.toString()}
    ])
    await loh.send({embeds:[emb]})
        } catch (error) {
            console.error('Failed to delete messages:', error);
            await interaction.reply({
                content: '<a:deny:1285608966184898643> There was an error trying to clear messages in this channel.',
                ephemeral: true
            });
        }
    }
    if(interaction.options._group === "warn"){
        if(!warn) return interaction.reply({ephemeral:true,content:"<a:deny:1285608966184898643> No permission to use this command"})
    if(sube === "add"){
        const user = interaction.options.getMember("user")
        const reason=interaction.options.getString("reason")
        const dm =interaction.options.getString("dm")
        const warnse = interaction.options.getInteger("warns")||1
        if(!warns[user.id]){
            warns[user.id]=[]
        }
        for (let index = 0; index < warnse; index++) {
            warns[user.id].push({reason:reason})
            
        }
        savewarns()
        if(dm==="Yes"){
            const embed=new EmbedBuilder()
            .setTitle("You have been warned!")
            .setColor("#f40000")
            .setDescription("\nYou have been warned by the team member "+interaction.user.username+" from the server "+interaction.guild.name+"\n\nThe reason for your warn is: "+reason)
        user.send({embeds:[embed]})
        }
        interaction.reply({ephemeral:false,content:"<a:IMG_Hacken:1285608154628886720> Succesfully warned the.\nThis user now has "+warns[user.id].length+" warns"})
        const emb = new EmbedBuilder()
    .setTitle("New Warn")
    .addFields([
        {name:"Executor",value:`<@${interaction.user.id}>`},
        {name:"Target",value:user.user.username+" - "+user.id},
        {name:"Reason",value:reason},
        {name:"Received warn amount",value:warnse.toString()}
    ])
    await loh.send({embeds:[emb]})
    }
    if(sube === "remove"){
        const user = interaction.options.getMember("user")
        const reason=interaction.options.getString("reason")
        const dm =interaction.options.getString("dm")==="Yes"
        const id = interaction.options.getInteger("id")
        if(!warns[user.id]) return interaction.reply({ephemeral:true,content:"The user has no warns"})
        if(!warns[user.id].length > id) return interaction.reply({ephemeral:true,content:"the user has no warn with the id "+id.toString()+"\nPlease use **/moderation warn check**"})
        const oldwarn = warns[user.id][id-1]
        warns[user.id].splice(id-1,1)
        interaction.reply({ephemeral:true,content:"<a:IMG_Hacken:1285608154628886720> Succesfully removed the warn"})
        const emb = new EmbedBuilder()
    .setTitle("Warn revoked")
    .addFields([
        {name:"Executor",value:`<@${interaction.user.id}>`},
        {name:"Target",value:user.user.username+" - "+user.id},
        {name:"Revoke reason",value:reason},
        {name:"Old warn reson",value:oldwarn.reason},
        {name:"Warn Id",value:id.toString()}
    ])
    await loh.send({embeds:[emb]})
        if(dm){
            const embed = new EmbedBuilder()
            .setTitle("Warn Removed")
            .setDescription("Your warns with the reason "+oldwarn.reason+" got revoked.\nReason for the revoke:\n"+reason)
            user.send({embeds:[embed]})
        }
    }
    if(sube === "check"){
        const user = interaction.options.getMember("user")
        if(!warns[user.id]) return interaction.reply({ephemeral:true,content:"The user has no warns"})
        const embed = new EmbedBuilder()
    .setTitle("Warns of "+user.user.username)
    warns[user.id].forEach(warn=>{
        if(warns[user.id].indexOf(warn)<25){
        embed.addFields({name:"Warn "+(warns[user.id].indexOf(warn)+1),value:warn.reason})
        }
    })
    interaction.reply({ephemeral:true,embeds:[embed]})
}
    } else if(interaction.options._group === "blacklist"){
        if(!mod) return interaction.reply({ephemeral:true,content:"<a:deny:1285608966184898643> No permission to use this command"})
        if(sube === "list"){
     let list = []
    let ch = Object.keys(blacklist)
    for (let i = 0; i < ch.length; i++) {
       if(i%25===0 || i===0){
           list.push([])
       }
       list[list.length-1].push(ch[i])
    }
    var string = ""
    list[0].forEach(scan =>{
        string = string+scan+": "+blacklist[scan]+"\n"
    })
            const embed = new EmbedBuilder()
            .setTitle("All blacklistet user id")
            .setDescription(string)
            .setFooter({text:"Page 1/"+list.length})
            const row =new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
        .setCustomId("listblback")
        .setEmoji("⏪")
        .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
        .setCustomId("listblfor")
        .setEmoji("⏩")
        .setStyle(ButtonStyle.Primary)
        )
            interaction.reply({ephemeral:true,embeds:[embed],components:[row]})
        }
        if(sube === "add"){
            const id = interaction.options.getString("id")
            const reason = interaction.options.getString("reason")
            blacklist[id] = reason
            saveb()
            interaction.reply({ephemeral:false,content:"<a:IMG_Hacken:1285608154628886720> is now on the Blacklist of "+interaction.guild.name+". Reason: "+reason})
            const emb = new EmbedBuilder()
            .setTitle("Blacklist add")
            .addFields([
                {name:"Executor",value:`<@${interaction.user.id}>`},
                {name:"Target",value:`<@${id}> -  ${id}`},
                {name:"Reason",value:reason}
            ])
            await loh.send({embeds:[emb]})
        }
        if(sube === "remove"){
            const id = interaction.options.getString("id")
            if(!blacklist[id]) return interaction.reply({ephemeral:true,content:"<a:deny:1285608966184898643> please provide a valid user id that is on the blacklist"})
                const reason = blacklist[id]
            blacklist[id] = false
            saveb()
            interaction.reply({ephemeral:true,content:"<a:IMG_Hacken:1285608154628886720> User got removed from the blacklist succesfully"})
            const emb = new EmbedBuilder()
            .setTitle("Blacklist remove")
            .addFields([
                {name:"Executor",value:`<@${interaction.user.id}>`},
                {name:"Target",value:`<@${id}> -  ${id}`},
                {name:"Old reason",value:reason}
            ])
            await loh.send({embeds:[emb]})
        }
        if(sube === "check"){
            const id = interaction.options.getString("id")
            if(!blacklist[id]) return interaction.reply({ephemeral:true,content:"<a:deny:1285608966184898643> please provide a valid user id that is on the blacklist"})
                const reason = blacklist[id]
            interaction.reply({ephemeral:true,content:"The user is on the blacklist for "+reason})
        }
    }
}



if(interaction.commandName === "cheaterlist"){
    let list = []
let listee = []
    let ch = cheater.allowed
    for (let i = 0; i < ch.length; i++) {
       if(i%50===0 || i===0){
           list.push([])
       }
       list[list.length-1].push(ch[i])
listee.push(ch[i].reportet)
    }
    var string = ""
    list[0].forEach(scan =>{
        string = string+scan.reportet+"\n"
    })
    const embed = new EmbedBuilder()
    .setTitle("All exposed cheaters")
    .setDescription(string)
    .setFooter({text:"Page 1/"+list.length})
    const row =new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
        .setCustomId("listclback")
        .setEmoji("⏪")
        .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
        .setCustomId("listclfor")
        .setEmoji("⏩")
        .setStyle(ButtonStyle.Primary)
        )
    fs.writeFileSync("./files/cheater.json", JSON.stringify(listee, null, 2));
    interaction.reply({embeds:[embed],components:[row],files:["./files/cheater.json"]})  
}



    if (interaction.commandName === 'Echo Scan Senden') {
        if(!echo) return interaction.reply({ephemeral:true,content:"<a:deny:1285608966184898643> No permission to use this command"})
        const response = await fetch('https://api.echo.ac/v1/user/pin', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${echoApiKeys[Math.floor(Math.random() * echoApiKeys.length)]}`,
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        const code = data.pin;
        const link = data.links.fivem;
        if(!link || !code) return interaction.reply({ content: `Ein fehler beim Code generieren ist aufgetreten. Probiere es erneut oder nutze /echo code generieren`, ephemeral: true });
        const embed = new EmbedBuilder()
        .setTitle("PC Kontrolle")
        .setColor('#0099ff')
        .setDescription("**Bedingungen der PC-Kontrolle**\n\nMit dem Drücken des Buttons stimmst du den folgenden Bedingungen zu:\n\n1. **Dateneinsicht**: Der Analyst erhält während des Scans Zugriff auf ausgewählte Log-Dateien sowie andere relevante Informationen deines PCs, die im Rahmen der Kontrolle analysiert werden. Diese Daten dienen ausschließlich dazu, verdächtige Aktivitäten im Zusammenhang mit der Einhaltung der Serverregeln zu überprüfen.\n\n2. **Datenschutz und Weitergabe**: Die Ergebnisse des Scans werden vertraulich behandelt. Allerdings können die Daten an andere Teammitglieder zur weiteren Analyse weitergegeben werden. In Ausnahmefällen, beispielsweise bei schwerwiegenden Regelverstößen, behält sich das Serverteam das Recht vor, die Ergebnisse zu dokumentieren und zu veröffentlichen, um Transparenz zu gewährleisten.\n\n3. **Zustimmung und Mitwirkungspflicht**: Durch das Fortfahren erklärst du dich ausdrücklich damit einverstanden, dass dein PC überprüft wird. Du verpflichtest dich, den Anweisungen des Analysten während der Kontrolle Folge zu leisten und notwendige Informationen bereitzustellen, um eine gründliche Überprüfung zu ermöglichen.\n\n4. **Konsequenzen bei Verstößen**: Sollten während der Kontrolle Regelverstöße festgestellt werden, kann dies zu einem sofortigen und permanenten Ausschluss vom Server führen. Auch das Ignorieren von Anweisungen oder auffälliges Verhalten während der Kontrolle kann zu strengen Maßnahmen, wie einem permanenten Bann oder einer Aufnahmepflicht, führen.\n\n5. **Verweigerungsrecht**: Du hast das Recht, die Kontrolle zu verweigern. Beachte jedoch, dass eine Verweigerung in der Regel als Schuldeingeständnis gewertet wird und somit einen sofortigen und permanenten Ausschluss vom Server zur Folge haben kann.\n\n6. **Haftungsausschluss**: Qseng Crimelife übernimmt keine Haftung für etwaige Schäden oder Verluste, die durch die Durchführung der Kontrolle entstehen könnten. Die Teilnahme an der PC-Kontrolle erfolgt auf eigenes Risiko.\n\n7. **Vertraulichkeit und Sicherheit**: Alle durch die Kontrolle erhobenen Daten werden mit größtmöglicher Sorgfalt und unter Einhaltung strenger Sicherheitsmaßnahmen behandelt. Diese Daten werden nach Abschluss der Kontrolle und finaler Beurteilung nicht weiter Verbreitet, sofern keine Regelverstöße festgestellt wurden.")
        const buttonRow = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setLabel('Zum Scan')
                .setStyle(5)
                .setURL(link),
    
                new ButtonBuilder()
                .setLabel('Echo FAQ')
                .setStyle(5)
                .setURL('https://echo.ac/#faq') ,
                new ButtonBuilder()
                .setLabel('Code')
                .setCustomId("echocode-"+code)
                .setStyle(ButtonStyle.Success)
        );
        interaction.targetUser.send({embeds:[embed],components:[buttonRow]})
            interaction.reply({ content: `Eine DM wurde an ${interaction.targetUser.username} gesendet! Scan Code: `+code.toString(), ephemeral: true });
            scans[interaction.targetUser.id] = {
                code:code,
                link:link
            }
            fs.writeFile("./scans.json", JSON.stringify(scans), err =>{
                if(err){
                    console.log(err);
                }
            });
    }
    if(interaction.commandName === "Echo Scan Ergebnis"){
        if(!echo) return interaction.reply({ephemeral:true,content:"<a:deny:1285608966184898643> No permission to use this command"})
        if(!scans[interaction.targetUser.id]) return interaction.reply({ content: `Es konnte kein Code des Users gefunden werden.Überpüfe ob der Scan bereits abgeschlossen ist. Falls ja: Bitte nutze **/echo code check** und gebe den Code ein. Den Code kann der User durch das drücken des Buttons in den DM's anzeigen lassen.`, ephemeral: true });
        const scanID= scans[interaction.targetUser.id].code
        var result = false
                  const response = await fetch(`https://api.echo.ac/v1/user/scans/all`, {
                      method: 'GET',
                      headers: {
                          'Authorization': `Bearer ${echoApiKeys[Math.floor(Math.random() * echoApiKeys.length)]}`,
                          'Content-Type': 'application/json'
                      }
                  });
          const dataa = await response.json();
          for (const scan of dataa) {
          try {
              const response = await fetch(`https://api.echo.ac/v1/scan/${scan.uuid}`, {
                  method: 'GET',
                  headers: {
                      'Authorization': `Bearer ${echoApiKeys[Math.floor(Math.random() * echoApiKeys.length)]}`,
                      'Content-Type': 'application/json'
                  }
              });
              const dade = await response.json();
              if (dade.pin === scanID) {
                  result = dade
                  break;
              }
          } catch (error) {
              console.error('Fehler beim Abrufen der Daten:', error);
          }
      }
      if(!result) return interaction.reply({ephemeral:true,content:"der pin ist ungültig"})
          const dade = result
          const e = new EmbedBuilder()
        .setTitle('General Information')
        .setDescription(`Details for UUID: ${dade.uuid}`)
        .addFields(
          { name: 'Game', value: dade.game, inline: true },
          { name: 'Marked', value: dade.marked ? 'Yes' : 'No', inline: true },
          { name: 'Pin', value: dade.pin, inline: true },
          { name: 'Public', value: dade.public ? 'Yes' : 'No', inline: true },
          { name: 'Steam Accounts', value: dade.accounts.join('\n'), inline: false },
          { name: 'OS', value: dade.results.info.os, inline: true },
          { name: 'VPN', value: dade.results.info.vpn, inline: true },
          { name: 'Country', value: dade.results.info.country, inline: true }
        )
        .setTimestamp(new Date(dade.time))
        .setFooter({ text: 'General Information' });
      const ee = new EmbedBuilder()
        .setTitle('Timestamps')
        .addFields(
          { name: 'Recycle Bin Modified', value: `<t:${Math.floor(new Date(dade.results.info.recycleBinModified).getTime() / 1000)}:F>`, inline: false },
          { name: 'Start Time (DGT)', value: `<t:${dade.results.start_time.dgt}:F>`, inline: true },
          { name: 'Start Time (DNS)', value: `<t:${dade.results.start_time.dns}:F>`, inline: true },
          { name: 'Start Time (DPS)', value: `<t:${dade.results.start_time.dps}:F>`, inline: true },
          { name: 'Start Time (Explorer)', value: `<t:${dade.results.start_time.explorer}:F>`, inline: true },
          { name: 'System Time', value: `<t:${dade.results.start_time.sys}:F>`, inline: true },
          { name: 'SysMain Time', value: `<t:${dade.results.start_time.sysmain}:F>`, inline: true },
          { name: 'PCA Time', value: `<t:${dade.results.start_time.pca}:F>`, inline: true }
        )
        .setFooter({ text: 'Timestamps' });
      
      // Dritter Embed: Traces (Umformatiert wie gewünscht)
      const traceFields = [];
      const logFields = [];
      const traces = dade.results.traces; // Replace with actual data
      const logs = dade.results.logs;     // Replace with actual data
      
      // Process traces and logs
      traces.forEach(trace => {
          const [severity, process] = trace.in_instance.split('|');
          traceFields.push({
              name: `${severity}`,
              value: `${trace.name}`,
          });
      });
      
      const row = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
        .setCustomId("echogut-"+interaction.targetUser.id+"-"+scanID)
        .setLabel("Sauber")
        .setStyle(ButtonStyle.Success),
        new ButtonBuilder()
        .setCustomId("echoauf-"+interaction.targetUser.id+"-"+scanID)
        .setLabel("Aufnahmepflicht")
        .setStyle(ButtonStyle.Danger),
        new ButtonBuilder()
        .setCustomId("echoschlecht-"+interaction.targetUser.id+"-"+scanID)
        .setLabel("Modding 100")
        .setStyle(ButtonStyle.Danger),
      )
          const traceText = traceFields.map(field => `${field.name}: ${field.value}`).join('\n');
if(traceText.split("").length > 4000){
          fs.writeFileSync('traces.txt', traceText, 'utf8');
          const tracesAttachment = new AttachmentBuilder('traces.txt');
  
          interaction.reply({ephemeral:true,embeds:[e,ee],files:[tracesAttachment],components:[row]})
} else {
const embed = new EmbedBuilder()
.setDescription(traceText)
interaction.reply({ephemeral:true,embeds:[e,ee,embed],components:[row]})
}
    }
if(interaction.commandName === "echo"){
    if(!echo) return interaction.reply({ephemeral:true,content:"<a:deny:1285608966184898643> No permission to use this command"})
    if (interaction.options._subcommand === "generieren") {
interaction.reply({content:"Generiere Key"})
 const response = await fetch('https://api.echo.ac/v1/user/pin', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${echoApiKeys[Math.floor(Math.random() * echoApiKeys.length)]}`,
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) return interaction.channel.send({content:"Falsche Res des Servers"})
        const data = await response.json();
        const fivemCode = data.pin;
        const fivemLink = data.links.fivem;

        if (!fivemCode || !fivemLink) return interaction.channel.send({content:"Code/Link nicht gefunden"})
        const row = new ActionRowBuilder()
        .addComponents(
        new ButtonBuilder()
            .setCustomId("ergebnis-"+fivemCode)
            .setLabel("Ergebnis")
            .setStyle(ButtonStyle.Success)
        )
        interaction.channel.send({ content: fivemLink+"\n\nCode:"+fivemCode,components:[row]});
} else if(interaction.options._subcommand === "check"){
    const scanID= interaction.options.getString("code")
  var result = false
            const response = await fetch(`https://api.echo.ac/v1/user/scans/all`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${echoApiKeys[Math.floor(Math.random() * echoApiKeys.length)]}`,
                    'Content-Type': 'application/json'
                }
            });
	const dataa = await response.json();
    for (const scan of dataa) {
    try {
        const response = await fetch(`https://api.echo.ac/v1/scan/${scan.uuid}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${echoApiKeys[Math.floor(Math.random() * echoApiKeys.length)]}`,
                'Content-Type': 'application/json'
            }
        });
        const dade = await response.json();
        if (dade.pin === scanID) {
            result = dade
            break;
        }
    } catch (error) {
        console.error('Fehler beim Abrufen der Daten:', error);
    }
}
if(!result) return interaction.reply({content:"der pin ist ungültig"})
    const dade = result
    const eeeee = new EmbedBuilder()
    .setTitle("Custom Detections")
    const fields = []
    dade.results.custom.forEach(res=>{
        var text = ""
              res.notes.forEach(no=>{
                  text = text + no + "\n"
              })
        if(text.split("").length < 1024){
        fields.push({name:res.name,value:text})
        }
    })
    if(fields.length > 0) eeeee.addFields(fields)
    const e = new EmbedBuilder()
  .setTitle('General Information')
  .setDescription(`Details for UUID: ${dade.uuid}`)
  .addFields(
    { name: 'Game', value: dade.game, inline: true },
    { name: 'Marked', value: dade.marked ? 'Yes' : 'No', inline: true },
    { name: 'Pin', value: dade.pin, inline: true },
    { name: 'Public', value: dade.public ? 'Yes' : 'No', inline: true },
    { name: 'Steam Accounts', value: dade.accounts.join('\n'), inline: false },
    { name: 'OS', value: dade.results.info.os, inline: true },
    { name: 'VPN', value: dade.results.info.vpn, inline: true },
    { name: 'Country', value: dade.results.info.country, inline: true }
  )
  .setTimestamp(new Date(dade.time))
  .setFooter({ text: 'General Information' });
const ee = new EmbedBuilder()
  .setTitle('Timestamps')
  .addFields(
    { name: 'Recycle Bin Modified', value: `<t:${Math.floor(new Date(dade.results.info.recycleBinModified).getTime() / 1000)}:F>`, inline: false },
    { name: 'Start Time (DGT)', value: `<t:${dade.results.start_time.dgt}:F>`, inline: true },
    { name: 'Start Time (DNS)', value: `<t:${dade.results.start_time.dns}:F>`, inline: true },
    { name: 'Start Time (DPS)', value: `<t:${dade.results.start_time.dps}:F>`, inline: true },
    { name: 'Start Time (Explorer)', value: `<t:${dade.results.start_time.explorer}:F>`, inline: true },
    { name: 'System Time', value: `<t:${dade.results.start_time.sys}:F>`, inline: true },
    { name: 'SysMain Time', value: `<t:${dade.results.start_time.sysmain}:F>`, inline: true },
    { name: 'PCA Time', value: `<t:${dade.results.start_time.pca}:F>`, inline: true }
  )
  .setFooter({ text: 'Timestamps' });
const traceFields = [];
const logFields = [];
const traces = dade.results.traces;
const logs = dade.results.logs;
traces.forEach(trace => {
    const [severity, process] = trace.in_instance.split('|');
    traceFields.push({
        name: `${severity}`,
        value: `${trace.name}`,
        inline: false
    });
});

const traceText = traceFields.map(field => `${field.name}: ${field.value}`).join('\n');
if(traceText.split("").length > 4000){
          fs.writeFileSync('traces.txt', traceText, 'utf8');
          const tracesAttachment = new AttachmentBuilder('traces.txt');
  
          interaction.reply({embeds:[e,ee,eeeee],files:[tracesAttachment]})
} else {
const embed = new EmbedBuilder()
.setDescription(traceText)
interaction.reply({embeds:[e,ee,eeeee,embed]})
}
}
}
if(interaction.isModalSubmit()){
    if(interaction.customId==="coinsredeem2"){
        const a = parseInt(interaction.fields.getTextInputValue('coins'))
        if(a=== NaN || a<=0) return interaction.reply({ephemeral:true,content:"The ammount of coins isnt a valid number!\nPlease try again!"})
        let usercoins = parseFloat(coins[interaction.user.id].coins)
        cheater.allowed.forEach(ch=>{
            if(ch.reporter===interaction.user.id)usercoins=usercoins+1
        })
        let finalsum = 0
        if(a<10)finalsum=coins[interaction.user.id].roletime?coins[interaction.user.id].roletime+(parseInt(a)*2*60*60*1000):Date.now()+(parseInt(a)*2*60*60*1000)
         if(a>=10)finalsum=coins[interaction.user.id].roletime?coins[interaction.user.id].roletime+(parseInt(a)*2.4*60*60*1000):Date.now()+(parseInt(a)*2.4*60*60*1000)
        if(usercoins<a) return interaction.reply({ephemeral:true,content:"Not enough coins.\nMissing: "+(a-usercoins).toString()+"<:3043coin:1284931936539774998>"})
        const embed = new EmbedBuilder()
        .setTitle("Confirmation")
        .setDescription("Please confirm that you want to use "+a+"<:3043coin:1284931936539774998>\nYou will have acces until <t:"+Math.floor(finalsum/1000)+":R> if you do this!")
        const row = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setLabel("Confirm")
            .setStyle(ButtonStyle.Success)
            .setCustomId("coinsredeem3-"+a.toString())
        )
        interaction.reply({ephemeral:true,components:[row],embeds:[embed]})
    }
    if(interaction.customId==="faq"){
        const a = interaction.fields.getTextInputValue('a')
        const q = interaction.fields.getTextInputValue('q')
        const mebd = new EmbedBuilder()
        .setTitle("FAQ's")
        .setDescription("### Question:\n```"+q+"```\n### Answer:\n```"+a+"```")
        .setFooter({iconURL:"https://cdn.discordapp.com/attachments/1280160403128848439/1281717443475275827/4ec6418528843fc7d8eb19b3ac74736f.webp?ex=66dd64a3&is=66dc1323&hm=cb904f14c1315ceb7129712d214d52ebd68f210c8529e804feeeba7e4f8e9620&",text:"©2024 Published by "+interaction.user.username+ " & Synex.cc"})
        .setImage("https://i.postimg.cc/c1ckgWRH/void-default-bar.png")
        const ch = client.channels.cache.get("1277628616271986698")
        await ch.send({embeds:[mebd]})
        interaction.reply({ephemeral:true,content:"Done"})
    }
    if(interaction.customId ==="cheatcheck"){
        const id = interaction.fields.getTextInputValue('id')
        let cheat = false
        cheater.allowed.forEach(pep=>{
         if(pep.reportet === id)cheat = pep
        })
        if(cheat) return interaction.reply({ephemeral:true,content:"This person is marked as a cheater in our system, reason: "+cheat.found})
        interaction.reply({ephemeral:true,content:"The user isnt as a cheater in our system, if he is a cheater, please report him with the cheat request button"})
    }
    /*
    const data = ticketdb[interaction.customId.split("-")[1]].anfrage
        const sid = interaction.customId.split("-")[1]
        if(!data) return interaction.reply({ephemeral:true,content:"Their was an error finding this request in the database"})
            let m = new modal.Modal()
        .setCustomId("serverrequestd"-sid)
        .setTitle("Deny a Server Request")
        .addComponents([
            new modal.TextInputComponent()
            .setCustomId('reason')
            .setLabel("Reason")
            .setStyle("SHORT")
        .setMinLength(1)
            .setMaxLength(100),
        ])
    modal.showModal(m, {
            client: client,
            interaction: interaction
        })
            */
        
    if(interaction.customId==="supsample"){
        const ch = client.channels.cache.get("1281688277862191156")
        const embed = new EmbedBuilder()
        .setTitle("New Cheat Sample")
        .addFields([
            {name:"From",value:"<@"+interaction.user.id+"> - `"+interaction.user.id+"`"},
            {name:"Cheat Name",value:interaction.fields.getTextInputValue('name')},
            {name:"Cheat DC/Webseite",value:interaction.fields.getTextInputValue('dc')?interaction.fields.getTextInputValue('dc'):"/"},
            {name:"File Link",value:interaction.fields.getTextInputValue('link')}
        ])
        interaction.reply({ephemeral:true,content:"Thanks for your submit"})
        await ch.send({embeds:[embed]})
    }
    if(interaction.customId.startsWith("serverrequestd")){
        const data = ticketdb[interaction.customId.split("-")[1]].anfrage
        const sid = interaction.customId.split("-")[1]
        if(!data) return interaction.reply({ephemeral:true,content:"Their was an error finding this request in the database"})
        const user = client.users.cache.get(data.submit)
        if(!user) return interaction.reply({ephemeral:true,content:"I cant find the user that sends the request"})
            const row =new  ActionRowBuilder()
            .addComponents(
             new ButtonBuilder()
             .setLabel("Denied by "+interaction.user.username)
             .setCustomId("nichtbeachten")
             .setStyle(ButtonStyle.Danger)
             .setDisabled(true)
            )
           await interaction.update({components:[row]})
           user.send("Your request got denied\nReason:\n"+interaction.fields.getTextInputValue('reason'))
            ticketdb[sid].anfrage = false
            savetdb()
            interaction.reply({})
    }
    if(interaction.customId==="verifyrequest"){
        if (ticketdb[interaction.user.id]?.verify) {
            return interaction.reply({ content: "You already have a ticket", ephemeral: true });
        }
        ticketdb[interaction.user.id] = { ...ticketdb[interaction.user.id], verify: {claim:false,claimby:[]} };
        const ch = await interaction.guild.channels.create({
            name: `🔎┋${interaction.user.id.toString()}`,
            type: ChannelType.GuildText,
            parent: tickecat,
            permissionOverwrites: [
                {
                    id:"1284929501075214378",//manage
                    allow: [PermissionsBitField.Flags.ViewChannel],
                },
                {
                    id: interaction.user.id,
                    allow: [PermissionsBitField.Flags.SendMessages, PermissionsBitField.Flags.ViewChannel],
                },
                {
                    id: interaction.guild.roles.everyone.id,
                    deny: [PermissionsBitField.Flags.SendMessages, PermissionsBitField.Flags.ViewChannel],
                }
            ]
        });
        const servern = interaction.fields.getTextInputValue('servern')
        const serveri = interaction.fields.getTextInputValue('serveri')
        const trole = interaction.fields.getTextInputValue('role')
        const embed = new EmbedBuilder()
            .setTitle("Verify")
            .setDescription(`Welcome to the support of ${interaction.guild.name}\n\nPlease wait until a staff member reviews your request.\nThis could take up to 24h\nPlease also answer all questions off the staff team as fast as you can.`);
        const ansere = new EmbedBuilder()
        .addFields([
            {name:"Server Name",value:servern},
            {name:"Server Invite",value:serveri},
            {name:"Role in the Team",value:trole}
        ])
        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setLabel("close")
                    .setStyle(ButtonStyle.Danger)
                    .setCustomId("ticketclose"),
                    new ButtonBuilder()
                    .setLabel("Claim")
                    .setStyle(ButtonStyle.Success)
                    .setCustomId("claim")
            );
        await ch.send({ components: [row], embeds: [embed,ansere], content: `<@${interaction.user.id}> - @here` });
        await interaction.reply({ ephemeral: true, content: `Your ticket was successfully created: <#${ch.id}>` });
        savetdb();
    }
    if(interaction.customId==="staffbewerbungein"){
        if (ticketdb[interaction.user.id]?.tbw) {
            return interaction.reply({ content: "You already have a ticket", ephemeral: true });
        }
        ticketdb[interaction.user.id] = { ...ticketdb[interaction.user.id], tbw: {claim:false,claimby:[]}};
        const ch = await interaction.guild.channels.create({
            name: `📋┋${interaction.user.id.toString()}`,
            type: ChannelType.GuildText,
            parent: tickecat,
            permissionOverwrites: [
                {
                    id: "1284929501075214378",//manage
                    allow: [PermissionsBitField.Flags.ViewChannel],
                },
                {
                    id: interaction.user.id,
                    allow: [PermissionsBitField.Flags.SendMessages, PermissionsBitField.Flags.ViewChannel],
                },
                {
                    id: interaction.guild.roles.everyone.id,
                    deny: [PermissionsBitField.Flags.SendMessages, PermissionsBitField.Flags.ViewChannel],
                },
            ]
        });
        const servern = interaction.fields.getTextInputValue('bewerbung')
        const embed = new EmbedBuilder()
            .setTitle("Staff Application")
            .setDescription(`Welcome to the support of ${interaction.guild.name}\n\nPlease wait until a staff member reviews your application.\nThis could take up to 24h\nPlease also answer all questions off the staff team as fast as you can.`);
        const ansere = new EmbedBuilder()
        .addFields([
            {name:"Application",value:servern},
        ])
        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setLabel("close")
                    .setStyle(ButtonStyle.Danger)
                    .setCustomId("ticketclose"),
                    new ButtonBuilder()
                    .setLabel("Claim")
                    .setStyle(ButtonStyle.Success)
                    .setCustomId("claim")
            );
        await ch.send({ components: [row], embeds: [embed,ansere], content: `<@${interaction.user.id}> - @here` });
        await interaction.reply({ ephemeral: true, content: `Your ticket was successfully created: <#${ch.id}>` });
        savetdb();
    }
    if(interaction.customId==="detecbewerbungein"){
        if (ticketdb[interaction.user.id]?.dbw) {
            return interaction.reply({ content: "You already have a ticket", ephemeral: true });
        }
        ticketdb[interaction.user.id] = { ...ticketdb[interaction.user.id], dbw: {claim:false,claimby:[]} };
        const ch = await interaction.guild.channels.create({
            name: `📄┋${interaction.user.id.toString()}`,
            type: ChannelType.GuildText,
            parent: tickecat,
            permissionOverwrites: [
                {
                    id: "1278516693802680413",//detec team
                    allow: [PermissionsBitField.Flags.ViewChannel],
                },
                {
                    id: "1284929501075214378",//manage
                    allow: [PermissionsBitField.Flags.ViewChannel],
                },
                {
                    id: interaction.user.id,
                    allow: [PermissionsBitField.Flags.SendMessages, PermissionsBitField.Flags.ViewChannel],
                },
                {
                    id: interaction.guild.roles.everyone.id,
                    deny: [PermissionsBitField.Flags.SendMessages, PermissionsBitField.Flags.ViewChannel],
                },
            ]
        });
        const servern = interaction.fields.getTextInputValue('bewerbung')
        const embed = new EmbedBuilder()
            .setTitle("Detection Team Application")
            .setDescription(`Welcome to the support of ${interaction.guild.name}\n\nPlease wait until a staff member reviews your application.\nThis could take up to 24h\nPlease also answer all questions off the staff team as fast as you can.`);
        const ansere = new EmbedBuilder()
        .addFields([
            {name:"Application",value:servern},
        ])
        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setLabel("close")
                    .setStyle(ButtonStyle.Danger)
                    .setCustomId("ticketclose"),
                    new ButtonBuilder()
                    .setLabel("Claim")
                    .setStyle(ButtonStyle.Success)
                    .setCustomId("claim")
            );
        await ch.send({ components: [row], embeds: [embed,ansere], content: `<@${interaction.user.id}> - @here` });
        await interaction.reply({ ephemeral: true, content: `Your ticket was successfully created: <#${ch.id}>` });
        savetdb();
    }
    if(interaction.customId==="c5"){
        if (ticketdb[interaction.user.id]?.partn) {
            return interaction.reply({ content: "You already have a ticket", ephemeral: true });
        }
        ticketdb[interaction.user.id] = { ...ticketdb[interaction.user.id], partn: {claim:false,claimby:[]} };
        const ch = await interaction.guild.channels.create({
            name: `🤝┋${interaction.user.id.toString()}`,
            type: ChannelType.GuildText,
            parent: tickecat,
            permissionOverwrites: [
                {
                    id: "1285510870650064957",//admin
                    allow: [PermissionsBitField.Flags.ViewChannel],
                },
                {
                    id: "1284929501075214378",//manage
                    allow: [PermissionsBitField.Flags.ViewChannel],
                },
                {
                    id: interaction.user.id,
                    allow: [PermissionsBitField.Flags.SendMessages, PermissionsBitField.Flags.ViewChannel],
                },
                {
                    id: interaction.guild.roles.everyone.id,
                    deny: [PermissionsBitField.Flags.SendMessages, PermissionsBitField.Flags.ViewChannel],
                },
            ]
        });
        const na = interaction.fields.getTextInputValue('name')
        const s = interaction.fields.getTextInputValue('dc')
        const server = interaction.fields.getTextInputValue('tx')
        const servern = interaction.fields.getTextInputValue('rang')
        const embed = new EmbedBuilder()
            .setTitle("Partner")
            .setDescription(`Welcome to the support of ${interaction.guild.name}\n\nPlease wait until a staff member reviews your application.\nThis could take up to 24h\nPlease also answer all questions off the staff team as fast as you can.`);
        const ansere = new EmbedBuilder()
        .addFields([
            {name:"Server Name",value:na},
            {name:"Discord",value:s},
            {name:"TX",value:server},
            {name:"Team possition",value:servern},
        ])
        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setLabel("close")
                    .setStyle(ButtonStyle.Danger)
                    .setCustomId("ticketclose"),
                new ButtonBuilder()
                .setLabel("Claim")
                .setStyle(ButtonStyle.Success)
                .setCustomId("claim")
            );
        await ch.send({ components: [row], embeds: [embed,ansere], content: `<@${interaction.user.id}> - @here` });
        await interaction.reply({ ephemeral: true, content: `Your ticket was successfully created: <#${ch.id}>` });
        savetdb();
    }
    if(interaction.customId==="cheatrequest"){
        const id = interaction.fields.getTextInputValue('id')
       let cheat = false
       cheater.allowed.forEach(pep=>{
        if(pep.reportet === id)cheat = true
       })
       if(cheat) return interaction.reply({ephemeral:true,content:"this person is already marked as a cheater in our system"})
        const doo = interaction.fields.getTextInputValue('do')
        const found = interaction.fields.getTextInputValue('found')
        const link = interaction.fields.getTextInputValue('link')
        const server = interaction.fields.getTextInputValue('server')
        if(!link.split("https://").length === 1) return interaction.reply({ephemeral:true,content:"Please provide a valid link"})
        const embed = new EmbedBuilder()
    .setTitle("New Cheat Expose to review")
    .addFields([
        {name:"Submit by",value:"<@"+interaction.user.id+"> - `"+interaction.user.id+"`"},
           {name:"Cheater",value:"<@"+id+"> - `"+id+"`"},
        {name:"What did he do",value:doo},
        {name:"Scan/Screenshot link",value:link},
        {name:"Found",value:found},
        {name:"Server he got caught on",value:server}
    ])
    .setColor("#0000FF")
    cheater.submit.push({reporter:interaction.user.id,reportet:id,done:doo,found:found,link:link,server:server})
    const subid = cheater.submit.length-1
    savecheater()
    const row = new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
        .setLabel("Accept")
        .setStyle(ButtonStyle.Success)
        .setCustomId("cheatangenommen-"+subid),
        new ButtonBuilder()
        .setLabel("Deny with reason")
        .setStyle(ButtonStyle.Danger)
        .setCustomId("cheatabgelehnt-"+subid),
        new ButtonBuilder()
        .setLabel("Deny without reason")
        .setStyle(ButtonStyle.Danger)
        .setCustomId("cheatabgelehnt2-"+subid),
    )
    const ch = client.channels.cache.get(bearbeitung)
    await ch.send({embeds:[embed],components:[row]}).catch(error=>{
console.log(error)
return interaction.reply({ephemeral:true,content:"The report could not be send. Reason: channel not found"})
})
interaction.reply({ephemeral:true,content:"<a:IMG_Hacken:1285608154628886720> the request was send succesfully"})
    } else if(interaction.customId.startsWith("cheatrequestdeny")){
        const subid = interaction.customId.split("-")[1]
        const doo = interaction.fields.getTextInputValue('reason')
       cheater.denied.push(cheater.submit[subid])
       savecheater()
       const d = cheater.submit[subid]
       const embed = new EmbedBuilder()
       .setTitle("New Cheat Expose to review")
       .addFields([
           {name:"Submit by",value:"<@"+d.reporter+"> - `"+d.reporter+"`"},
           {name:"Cheater",value:"<@"+d.reportet+"> - `"+d.reportet+"`"},
           {name:"What did he done",value:d.done},
           {name:"Scan/Screenshot link",value:d.link},
           {name:"Found",value:d.found},
           {name:"Server he got caught on",value:d.server}
       ])
       .setColor("#FF0000")
       const row = new ActionRowBuilder()
       .addComponents(
        new ButtonBuilder()
        .setLabel("Denied by "+interaction.user.username)
        .setCustomId("nichtbeachten")
        .setStyle(ButtonStyle.Danger)
        .setDisabled(true)
       )
      await interaction.update({embeds:[embed],components:[row]})
      const user = interaction.guild.members.cache.get(cheater.submit[subid].reporter)
      if(!user) return interaction.reply({ephemeral:true,content:"The user that report this cheater isnt on the server anymore"})
   await user.send({content:"Your cheater expose request got denied.\nReason:\n"+doo})
interaction.followUp({ephemeral:true,content:"The request got denied"})
    }
}
if (interaction.isStringSelectMenu()) {
    if(interaction.customId==="Informations"){
         // Hier ändern
        const tt = interaction.values[0]
        if(tt==="c1"){
            const embed = new EmbedBuilder()
            .setTitle("> Partner Informations")
            .setDescription("Do you want to know how to become an official <@&1282327535845376203> and what benefits you will have? Then this is the perfect guide to get fully informed. Read it carefully and, if you're interested, request a partnership [here](https://discord.com/channels/1275957721195352104/1280625470525804585). \n\n> **How does a partnership with you work?** \n\nYou submit our partner text, which you can find by clicking on partner Application under the [ticket](https://discord.com/channels/1275957721195352104/1280625470525804585) category. Then, you send the text to a partner channel on your server ([Example](https://skript.gay/TYaek)). Once you have submitted the text, open a [ticket](https://discord.com/channels/1275957721195352104/1280625470525804585) and include the channel link with the submitted text in the form, and fill out the rest of the form. Once you have completed everything and followed all the rules, you will receive the <@&1282327535845376203> role from us, giving you access to all of our partnership benefits listed below. \n\n> **What benefits do I receive from an official partnership?** \n\n- You get access to our current largest and most exclusive command </checkdiscords:1282354452682117161>\n More info tomorrow xD as of 11.09.24 11 PM Berlin time")
            //.setImage()
            .setThumbnail("https://media.discordapp.net/attachments/1280971579559379044/1283131527802130544/benutzerhandbuch.png?ex=66e1e0db&is=66e08f5b&hm=9e2c22804204f300c023a1883be7751c639190fed15d2e6091c6f95d73b0ab1b&=&format=webp&quality=lossless")
                interaction.reply({ephemeral:true,embeds:[embed]})
            }
            if(tt==="c2"){
                const embed = new EmbedBuilder()
                .setTitle("> Report cheater")
                .setDescription("Here you can find the information on how to correctly report cheaters.\n> **Submitting a Cheater:** \n**What do we need?**\n- The cheaters licenses\n- Concrete evidence in the form of [SS-tool](https://stormss.cc/) scans or clear screenshots from the cheaters computer. XML, AI, and RPF files are not considered cheats.\n**What do you need to consider?**\n- Every submission will be thoroughly reviewed before it is published.\n- False reports will result in an immediate ban from the Discord server.\n**Do you think you meet all the requirements?**\n- Then submit your cheater [here](https://discord.com/channels/1275957721195352104/1276003892181733378) now")
                //.setImage()
                .setThumbnail("https://media.discordapp.net/attachments/1280971579559379044/1283131527802130544/benutzerhandbuch.png?ex=66e1e0db&is=66e08f5b&hm=9e2c22804204f300c023a1883be7751c639190fed15d2e6091c6f95d73b0ab1b&=&format=webp&quality=lossless")
                    interaction.reply({ephemeral:true,embeds:[embed]})
                }
                if(tt==="c3"){
                    const embed = new EmbedBuilder()
                    .setTitle("> Cheat submit")
                    .setDescription("### SOON")
                    //.setImage()
                    .setThumbnail("https://media.discordapp.net/attachments/1280971579559379044/1283131527802130544/benutzerhandbuch.png?ex=66e1e0db&is=66e08f5b&hm=9e2c22804204f300c023a1883be7751c639190fed15d2e6091c6f95d73b0ab1b&=&format=webp&quality=lossless")
                        interaction.reply({ephemeral:true,embeds:[embed]})
                    }
                    if(tt==="c4"){
                        const embed = new EmbedBuilder()
                        //.setTitle()
                        //.setDescription()
                        //.setImage()
                        //.setThumbnail()
                            interaction.reply({ephemeral:true,embeds:[embed]})
                        }
    }
    if (interaction.customId === "ticketselect") {
        const tt = interaction.values[0];
        if (tt === "support") {
            if (ticketdb[interaction.user.id]?.support) {
                return interaction.reply({ content: "You already have a ticket", ephemeral: true });
            }
            ticketdb[interaction.user.id] = { ...ticketdb[interaction.user.id], support: {claim:false,claimby:[]}, };
            const ch = await interaction.guild.channels.create({
                name: `🎫┋${interaction.user.id.toString()}`,
                type: ChannelType.GuildText,
                parent: tickecat,
                permissionOverwrites: [
                    {
                        id: "1279897330929238078",//support
                        allow: [PermissionsBitField.Flags.ViewChannel],
                    },
                    {
                        id: "1276000833024294932",//staff
                        allow: [PermissionsBitField.Flags.ViewChannel],
                    },
                    {
                        id: "1285510870650064957",//admin
                        allow: [PermissionsBitField.Flags.ViewChannel],
                    },
                    {
                        id: "1284929501075214378",//manage
                        allow: [PermissionsBitField.Flags.ViewChannel],
                    },
                    {
                        id: interaction.user.id,
                        allow: [PermissionsBitField.Flags.SendMessages, PermissionsBitField.Flags.ViewChannel],
                    },
                    {
                        id: interaction.guild.roles.everyone.id,
                        deny: [PermissionsBitField.Flags.SendMessages, PermissionsBitField.Flags.ViewChannel],
                    },
                ]
            });
            const embed = new EmbedBuilder()
                .setTitle("Support")
                .setDescription(`Welcome to the support of ${interaction.guild.name}\n\nPlease write your request as soon as possible.\nPlease don't just write "hello" or "I have a question".\nJust say directly what you need.\nPlease do not ping the team, we will reply as soon as possible, but within 24 hours at the latest.`);
            const row = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setStyle(ButtonStyle.Danger)
                        .setCustomId("ticketclose")
                        .setLabel("close"),
                        new ButtonBuilder()
                        .setLabel("Claim")
                        .setStyle(ButtonStyle.Success)
                        .setCustomId("claim")
                );
            await ch.send({ components: [row], embeds: [embed], content: `<@${interaction.user.id}> - @here` });
            await interaction.reply({ ephemeral: true, content: `Your ticket was successfully created: <#${ch.id}>` });
            savetdb();
        }
        if(tt==="supstaff"){
            const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                .setCustomId("staffbewerbungein")
                .setLabel("Send application")
                .setStyle(ButtonStyle.Success)
            )
            interaction.reply({ephemeral:true,components:[row],content:"Wie Bewerbe ich mich?\nGanz easy in nur 3 Schritten\n\nInfos:\nGoogle Docs only\nMin. Alter 16.\n\n\n1.\nFragen:  [bitte als Inhaltsverzeichnis in der bewerbung auflisten]\nName\nAlter\nSeit wann FiveM\nWelche spezifischen Projekte oder Server haben Sie in der Vergangenheit unterstützt?\nWelche Tools und Methoden verwenden Sie für PC-Kontrollen in der FiveM-Community?\nWie vertraut sind Sie mit den Anti-Cheat-Systemen von FiveM?\nHaben Sie Erfahrung mit der Erkennung und Analyse von Cheats oder Exploits?\nKönnen Sie Beispiele für frühere Fälle geben, bei denen Sie Cheats oder Manipulationen identifiziert haben?\nWie gehen Sie bei der Analyse von verdächtigen Aktivitäten auf einem Server vor?\nWie sorgen Sie dafür, dass die Privatsphäre und die Sicherheit der Spieler bei PC-Kontrollen gewahrt bleiben?\nKönnen Sie einen Fall beschreiben, in dem Sie ein schwieriges Problem lösen mussten? Wie sind Sie vorgegangen?\nWie gut kennen Sie sich mit den Mechaniken und Scripts von FiveM aus?\nHaben Sie Erfahrung mit der Entwicklung eigener Tools oder Scripts zur Unterstützung Ihrer Arbeit?\n\n2.\nZusätzlich wichtige infos über sie als person\nHast du zusätzliches Interesse am Detection Team? Wenn ja schreibe es bitte **GUT** Sichtbar in die Bewerbung\n\n3.\nGoogle docs öffentlich stellen"})
        }
        if (tt === "c4") {
            if (ticketdb[interaction.user.id]?.bug) {
                return interaction.reply({ content: "You already have a ticket", ephemeral: true });
            }
            ticketdb[interaction.user.id] = { ...ticketdb[interaction.user.id], bug: {claim:false,claimby:[]} };
            const ch = await interaction.guild.channels.create({
                name: `🤖┋${interaction.user.id.toString()}`,
                type: ChannelType.GuildText,
                parent: tickecat,
                permissionOverwrites: [
                    {
                        id: "1279897330929238078",//support
                        allow: [PermissionsBitField.Flags.ViewChannel],
                    },
                    {
                        id: "1276000833024294932",//staff
                        allow: [ PermissionsBitField.Flags.ViewChannel],
                    },
                    {
                        id: "1285510870650064957",//admin
                        allow: [ PermissionsBitField.Flags.ViewChannel],
                    },
                    {
                        id: "1284929501075214378",//manage
                        allow: [PermissionsBitField.Flags.ViewChannel],
                    },
                    {
                        id: interaction.user.id,
                        allow: [PermissionsBitField.Flags.SendMessages, PermissionsBitField.Flags.ViewChannel],
                    },
                    {
                        id: interaction.guild.roles.everyone.id,
                        deny: [PermissionsBitField.Flags.SendMessages, PermissionsBitField.Flags.ViewChannel],
                    },
                ]
            });
            const embed = new EmbedBuilder()
                .setTitle("Bug Report")
                .setDescription(`Welcome to the support of ${interaction.guild.name}\n\nPlease write your request as soon as possible.\nPlease don't just write "hello" or "I have a question".\nJust say directly what you need.\nPlease do not ping the team, we will reply as soon as possible, but within 24 hours at the latest.`);
            const row = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setStyle(ButtonStyle.Danger)
                        .setCustomId("ticketclose")
                        .setLabel("close"),
                        new ButtonBuilder()
                        .setLabel("Claim")
                        .setStyle(ButtonStyle.Success)
                        .setCustomId("claim")
                );
            await ch.send({ components: [row], embeds: [embed], content: `<@${interaction.user.id}> - @here` });
            await interaction.reply({ ephemeral: true, content: `Your ticket was successfully created: <#${ch.id}>` });
            savetdb();
        }
        if(tt==="c5"){
            let m = new modal.Modal()
            .setCustomId("c5")
            .setTitle("Partner")
            .addComponents([
                new modal.TextInputComponent()
                .setCustomId('name')
                .setLabel("Server Name")
                .setStyle("SHORT")
                .setRequired(true),
                new modal.TextInputComponent()
                .setCustomId('dc')
                .setLabel("Discord")
                .setStyle("SHORT")
            .setRequired(true),
            new modal.TextInputComponent()
            .setCustomId('tx')
            .setLabel("TX Statistics (Screenshot Link)")
            .setStyle("SHORT")
            .setRequired(true),
            new modal.TextInputComponent()
            .setCustomId('rang')
            .setLabel("Your position on the serverteam")
            .setStyle("SHORT")
            .setRequired(true)
            ])
        modal.showModal(m, {
                client: client,
                interaction: interaction
            })
        }
        if(tt==="supstaff"){
            const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                .setCustomId("staffbewerbungein")
                .setLabel("Send application")
                .setStyle(ButtonStyle.Success)
            )
            interaction.reply({ephemeral:true,components:[row],content:"Wie Bewerbe ich mich?\nGanz easy in nur 3 Schritten\n\nInfos:\nGoogle Docs only\nMin. Alter 16.\n\n\n1.\nFragen:  [bitte als Inhaltsverzeichnis in der bewerbung auflisten]\nName\nAlter\nSeit wann FiveM\nWelche spezifischen Projekte oder Server haben Sie in der Vergangenheit unterstützt?\nWelche Tools und Methoden verwenden Sie für PC-Kontrollen in der FiveM-Community?\nWie vertraut sind Sie mit den Anti-Cheat-Systemen von FiveM?\nHaben Sie Erfahrung mit der Erkennung und Analyse von Cheats oder Exploits?\nKönnen Sie Beispiele für frühere Fälle geben, bei denen Sie Cheats oder Manipulationen identifiziert haben?\nWie gehen Sie bei der Analyse von verdächtigen Aktivitäten auf einem Server vor?\nWie sorgen Sie dafür, dass die Privatsphäre und die Sicherheit der Spieler bei PC-Kontrollen gewahrt bleiben?\nKönnen Sie einen Fall beschreiben, in dem Sie ein schwieriges Problem lösen mussten? Wie sind Sie vorgegangen?\nWie gut kennen Sie sich mit den Mechaniken und Scripts von FiveM aus?\nHaben Sie Erfahrung mit der Entwicklung eigener Tools oder Scripts zur Unterstützung Ihrer Arbeit?\n\n2.\nZusätzlich wichtige infos über sie als person\nHast du zusätzliches Interesse am Detection Team? Wenn ja schreibe es bitte **GUT** Sichtbar in die Bewerbung\n\n3.\nGoogle docs öffentlich stellen"})
        }
        if(tt==="supdetec"){
            const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                .setCustomId("detecbewerbungein")
                .setLabel("Send application")
                .setStyle(ButtonStyle.Success)
            )
            interaction.reply({ephemeral:true,components:[row],content:"Info:\nBewerbung als Google Docs!\n\nFragen für die Einstellung in das Detection Team\n||PS. Leider müssen die Fragen auf Englisch gestellt werden da sie sonst kein Sinn ergeben und ihr im Detection Team Englisch beehrschen solltet!||\n\nBeantworte folgende Fragen:\nWhat are YARA rules, and how are they used in cheat detection?\nWhat are in-memory strings, and why are they important for detecting cheats?\nWhat type of hash out of the ones below is the best hash for a detection?\nMD5\nSHA-1\nSHA-256\nVhash\nAuthentihash\nImportantHash\nimphash\nSSDEEP\nTLSH\nWhat is memory analysis, and how is it used to detect cheats that load into memory?\nHow can we detect process Hollowing?"})
        }
        if(tt==="supsample"){
            let m = new modal.Modal()
            .setCustomId("supsample")
            .setTitle("Submit a cheat")
            .addComponents([
                new modal.TextInputComponent()
                .setCustomId('name')
                .setLabel("Cheat Name")
                .setStyle("SHORT")
            .setMinLength(1)
                .setMaxLength(100)
                .setPlaceholder("example: TZX,HX,redENGINE..."),
                new modal.TextInputComponent()
                .setCustomId('dc')
                .setLabel("Cheat Webseite and/or Discord (if exist)")
                .setStyle("SHORT")
            .setMinLength(1)
            .setRequired(false)
                .setMaxLength(100)
                .setPlaceholder("example: https://..."),
                new modal.TextInputComponent()
                .setCustomId('link')
                .setLabel("File Link")
                .setStyle("SHORT")
            .setMinLength(1)
                .setMaxLength(100)
                .setPlaceholder("example: https://workupload.com/file/3gpg..."),
            ])
        modal.showModal(m, {
                client: client,
                interaction: interaction
            })
        }
    }
}
if(interaction.isButton()){
    if(interaction.customId.startsWith("coinsredeem1-")){
        const id = interaction.customId.split("-")[1]
        if(id!==interaction.user.id) return interaction.reply({ephemeral:true,content:"Please create your own embed with your own button: </coins:1284926840406020199>"})
        let m = new modal.Modal()
        .setCustomId("coinsredeem2")
        .setTitle("Coins Umtauschen")
        .addComponents([
            new modal.TextInputComponent()
            .setCustomId('coins')
            .setLabel("Anzahl der Coins")
            .setStyle("SHORT")
            .setRequired(true)
        ])
    modal.showModal(m, {
            client: client,
            interaction: interaction
        })
        
    } else if(interaction.customId.startsWith("coinsredeem3-")){
        const id = interaction.customId.split("-")[1]
        let usercoins = parseFloat(coins[interaction.user.id].coins)
    cheater.allowed.forEach(ch=>{
        if(ch.reporter===interaction.user.id)usercoins=usercoins+1
    })
    if(usercoins<id) return interaction.reply({ephemeral:true,content:"Not enough coins.\nMissing: "+(id-usercoins).toString()+"<:3043coin:1284931936539774998>"})
    if(id<10)coins[interaction.user.id].roletime=coins[interaction.user.id].roletime?coins[interaction.user.id].roletime+(parseInt(id)*2*60*60*1000):Date.now()+(parseInt(id)*2*60*60*1000)
    if(id>=10)coins[interaction.user.id].roletime=coins[interaction.user.id].roletime?coins[interaction.user.id].roletime+(parseInt(id)*2.4*60*60*1000):Date.now()+(parseInt(id)*2.4*60*60*1000)
        coins[interaction.user.id].coins =parseFloat(coins[interaction.user.id].coins)-parseFloat(id)
    savecoins()
    interaction.member.roles.add("1283469110977495123")
    interaction.reply("<@"+interaction.user.id+">\nThe time was added!\nYou now have access until <t:"+Math.floor(coins[interaction.user.id].roletime/1000)+":R>")
    }
    if(interaction.customId==="listclfor"){
        let page = parseInt(interaction.message.embeds[0].data.footer.text.split("Page ")[1])
        let list = []
        let ch = cheater.allowed
        for (let i = 0; i < ch.length; i++) {
           if(i%50===0 || i===0){
               list.push([])
           }
           list[list.length-1].push(ch[i])
        }
        var string = ""
        if(page >= list.length) page = 0
        list[page].forEach(scan =>{
            string = string+scan.reportet+"\n"
        })
        const embed = new EmbedBuilder()
        .setTitle("All exposed cheaters")
        .setDescription(string)
        .setFooter({text:"Page "+(page+1)+"/"+list.length})
        const row =new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setCustomId("listclback")
            .setEmoji("⏪")
            .setStyle(ButtonStyle.Primary),
            new ButtonBuilder()
            .setCustomId("listclfor")
            .setEmoji("⏩")
            .setStyle(ButtonStyle.Primary)
            )
        interaction.update({ephemeral:true,embeds:[embed],components:[row]})
        }
        if(interaction.customId==="listclback"){
            let page = parseInt(interaction.message.embeds[0].data.footer.text.split("Page ")[1])-2
            let list = []
            let ch = cheater.allowed
            for (let i = 0; i < ch.length; i++) {
               if(i%50===0 || i===0){
                   list.push([])
               }
               list[list.length-1].push(ch[i])
            }
            var string = ""
            if(page < 0) page = list.length-1
            list[page].forEach(scan =>{
                string = string+scan.reportet+"\n"
            })
            const embed = new EmbedBuilder()
            .setTitle("All exposed cheaters")
            .setDescription(string)
            .setFooter({text:"Page "+(page+1)+"/"+list.length})
            const row =new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                .setCustomId("listclback")
                .setEmoji("⏪")
                .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                .setCustomId("listclfor")
                .setEmoji("⏩")
                .setStyle(ButtonStyle.Primary)
                )
            interaction.update({ephemeral:true,embeds:[embed],components:[row]})
            }
            if(interaction.customId==="listblback"){
                let page = parseInt(interaction.message.embeds[0].data.footer.text.split("Page ")[1])-2
                let list = []
                let ch = Object.keys(blacklist)
                for (let i = 0; i < ch.length; i++) {
                   if(i%25===0 || i===0){
                       list.push([])
                   }
                   list[list.length-1].push(ch[i])
                }
                var string = ""
                if(page < 0) page = list.length-1
                list[page].forEach(scan =>{
                    string = string+scan+": "+blacklist[scan]+"\n"
                })
                        const embed = new EmbedBuilder()
                        .setTitle("All blacklistet user id")
                        .setDescription(string)
                        .setFooter({text:"Page "+(page+1)+"/"+list.length})
                        const row =new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                    .setCustomId("listblback")
                    .setEmoji("⏪")
                    .setStyle(ButtonStyle.Primary),
                    new ButtonBuilder()
                    .setCustomId("listblfor")
                    .setEmoji("⏩")
                    .setStyle(ButtonStyle.Primary)
                    )
                interaction.update({ephemeral:true,embeds:[embed],components:[row]})
                }
                if(interaction.customId==="listblfor"){
                    let page = parseInt(interaction.message.embeds[0].data.footer.text.split("Page ")[1])
                    let list = []
                    let ch = Object.keys(blacklist)
                    for (let i = 0; i < ch.length; i++) {
                       if(i%25===0 || i===0){
                           list.push([])
                       }
                       list[list.length-1].push(ch[i])
                    }
                    var string = ""
                    if(page >= list.length) page = 0
                    list[page].forEach(scan =>{
                        string = string+scan+": "+blacklist[scan]+"\n"
                    })
                            const embed = new EmbedBuilder()
                            .setTitle("All blacklistet user id")
                            .setDescription(string)
                            .setFooter({text:"Page "+(page+1)+"/"+list.length})
                            const row =new ActionRowBuilder()
                    .addComponents(
                        new ButtonBuilder()
                        .setCustomId("listblback")
                        .setEmoji("⏪")
                        .setStyle(ButtonStyle.Primary),
                        new ButtonBuilder()
                        .setCustomId("listblfor")
                        .setEmoji("⏩")
                        .setStyle(ButtonStyle.Primary)
                        )
                    interaction.update({ephemeral:true,embeds:[embed],components:[row]})
                    }
    if(interaction.customId === "giveaway_teilnahme"){
        let gg = false
        for(let i=0;i<botdb.giveaways.length;i++){
            if(botdb.giveaways[i].mId == interaction.message.id){
                gg = i
                break;
            }
        }
        if(gg===false) return interaction.reply({ephemeral:true,content:"The Giveaway is already over"})
        if(botdb.giveaways[gg].ended == true){
          return interaction.reply({ephemeral:true,
            embeds: [{
            color: 15158332,
         title: "❌ The giveaway has already ended"
       }]
    })
        }
        if(botdb.giveaways[gg].members.indexOf(interaction.user.id) === -1){
          await interaction.reply({ ephemeral: true,
                embeds: [{
                color: 3066993,
                       title: "✅ You have successfully joined the giveaway"
                   }]
               });
          botdb.giveaways[gg].members.push(interaction.user.id)
          fs.writeFile("./bot.json", JSON.stringify(botdb), err =>{
            if(err){
                console.log(err);
            }
        })
        const msg = client.channels.cache.get(botdb.giveaways[gg].channel)
        const channel = client.channels.cache.get(botdb.giveaways[gg].channel).messages.fetch(botdb.giveaways[gg].mId)
        msg.messages.fetch();
        const currentG = gg
        const emb = interaction.message.embeds[0].data
        emb.footer = {text:botdb.giveaways[gg].members.length+" Participant(s)"}
       msg.messages.cache.get(botdb.giveaways[gg].mId).edit({embeds: [emb]})
        // interaction.edit({content:"button pressed"})
        } else {
          return interaction.reply({ephemeral:true,
            embeds: [{
            color: 15158332,
         title: "❌ You are already participating in the giveaway!"
       }]
    })
        }
      }
    //"1272959549938077769":{"anfrage":{"name":"Echo","team":"1274143632814768208","analyst":"1274143632814768208","submit":"881470112337649684"}}}
    if(interaction.customId.startsWith("serverrequesta")){
        const data = ticketdb[interaction.customId.split("-")[1]].anfrage
        const sid = interaction.customId.split("-")[1]
        if(!data) return interaction.reply({ephemeral:true,content:"Their was an error finding this request in the database"})
        const user = client.users.cache.get(data.submit)
    if(!user) return interaction.reply({ephemeral:true,content:"I cant find the user that sends the request"})
        const row =new  ActionRowBuilder()
        .addComponents(
         new ButtonBuilder()
         .setLabel("Accepted by "+interaction.user.username)
         .setCustomId("nichtbeachten")
         .setStyle(ButtonStyle.Success)
         .setDisabled(true)
        )
       await interaction.update({components:[row]})
       user.send("Your request got accepted.\nYour Staff and Analyst Team members can now join our Server and get their roles within 30 seconds\n Invite Link https://discord.gg/bEfMJuNTBh")
        staffdb[sid] = {
            team:data.team,
            ana:data.analyst
        }
        savestaffdb()
        ticketdb[sid].anfrage = false
        savetdb()
        interaction.reply({})
    
    }
    if(interaction.customId.startsWith("serverrequestd")){
        const data = ticketdb[interaction.customId.split("-")[1]].anfrage
        const sid = interaction.customId.split("-")[1]
        if(!data) return interaction.reply({ephemeral:true,content:"Their was an error finding this request in the database"})
            let m = new modal.Modal()
        .setCustomId("serverrequestd-"+sid)
        .setTitle("Deny a Server Request")
        .addComponents([
            new modal.TextInputComponent()
            .setCustomId('reason')
            .setLabel("Reason")
            .setStyle("SHORT")
        .setMinLength(1)
        .setRequired(true)
            .setMaxLength(100),
        ])
    modal.showModal(m, {
            client: client,
            interaction: interaction
        })
    }
    if(interaction.customId==="claim"){
        if(!interaction.member.roles.cache.has("1276000833024294932") && !interaction.member.roles.cache.has("1279897330929238078")) return
        const name = interaction.channel.name
        var tname = name.split("┋")[1]
        var type = name.split("┋")[0]
        let status = false
        if(type==="📄") status = ticketdb[name.split("┋")[1]].dbw 
        if(type ==="📋")status =ticketdb[name.split("┋")[1]].tbw 
        if(type==="🔎")status =ticketdb[name.split("┋")[1]].verify 
        if(type==="🎫")status =ticketdb[name.split("┋")[1]].support
        if(type==="🤖")status =ticketdb[name.split("┋")[1]].bug
        if(type==="🤝")status = ticketdb[name.split("┋")[1]].partn
const targetChannel = await client.channels.cache.get(interaction.channel.id) 
const targetUser = interaction.member
const permissionsForUser = targetChannel.permissionOverwrites.resolve(targetUser.id);
        if(status.claim&&(status.claimby[status.claimby.length-1].time+(60*60*1000))>Date.now()){
            if(status.claimby[status.claimby.length-1].id!==interaction.user.id) return interaction.reply({ephemeral:true,content:"Already claimed, if the claimer doesnt answer you can reclaim <t:"+Math.floor((status.claimby[status.claimby.length-1].time+(60*60*1000))/1000)+":R>"})
            status.claim = false
if (!permissionsForUser) {
    targetChannel.permissionOverwrites.create(targetUser, {
        [PermissionsBitField.Flags.SendMessages]: false
    })
} else {
    targetChannel.permissionOverwrites.edit(targetUser, {
        [PermissionsBitField.Flags.SendMessages]: false
    })
}
const embed = new EmbedBuilder()
.setTitle("Ticket unclaimed")
.setColor("Red")
.setDescription("Your ticket got unclaimed from <@"+interaction.user.id+"> he will no longer assist you in this ticket.")
  .setTimestamp()
  .setFooter({ text: 'Unclaimed by '+interaction.user.username})
interaction.reply({embeds:[embed]})
        } else {
            status.claim = true
            status.claimby.push({id:interaction.user.id,time:Date.now()})
            if (!permissionsForUser) {
                targetChannel.permissionOverwrites.create(targetUser, {
                    [PermissionsBitField.Flags.SendMessages] : true
                })
            } else {
                targetChannel.permissionOverwrites.edit(targetUser, {
                    [PermissionsBitField.Flags.SendMessages]: true
                })
            }
            const embed = new EmbedBuilder()
            .setTitle("Ticket claimed")
            .setColor("#1bff00")
            .setDescription("Your ticket has now been claimed by <@"+interaction.user.id+"> he will assist you in this ticket.")
              .setTimestamp()
              .setFooter({ text: 'Claimed by '+interaction.user.username})
              interaction.reply({embeds:[embed]})
    }
    savetdb()
    }
    if(interaction.customId==="ticketclose"){
  const messagese = await interaction.channel.messages.fetch({ limit: 100 });
  const messageArray = Array.from(messagese.values()).reverse();
  let transcriptHTML = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Ticket Transcript</title>
      <style>
          body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              background-color: #36393f;
              color: #dcddde;
              margin: 0;
              padding: 20px;
          }
          .container {
              max-width: 800px;
              margin: 0 auto;
          }
          .message {
              display: flex;
              padding: 10px;
              margin-bottom: 10px;
              background-color: #2f3136;
              border-radius: 5px;
          }
          .avatar {
              margin-right: 10px;
          }
          .avatar img {
              border-radius: 50%;
              width: 50px;
              height: 50px;
          }
          .content {
              flex: 1;
          }
          .author {
              font-weight: bold;
              color: #7289da;
          }
          .timestamp {
              font-size: 0.85em;
              color: #72767d;
          }
          .embed {
              margin-top: 10px;
              padding: 10px;
              background-color: #4f545c;
              border-left: 5px solid #7289da;
              border-radius: 5px;
          }
          .embed-title {
              font-weight: bold;
              color: #ffffff;
          }
          .embed-description {
              margin-top: 5px;
              color: #dcddde;
          }
          .embed-footer {
              font-size: 0.85em;
              color: #72767d;
          }
          img {
              max-width: 100%;
              height: auto;
              border-radius: 5px;
              margin-top: 10px;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <h1>Ticket Transcript</h1>
  `;
  messageArray.forEach(message => {
      const avatarUrl = message.author.displayAvatarURL({ format: 'png', size: 64 });
      transcriptHTML += `
      <div class="message">
          <div class="avatar">
              <img src="${avatarUrl}" alt="${message.author.username}">
          </div>
          <div class="content">
              <div class="author">${message.author.username} (${message.author.id})</div>
              <div class="timestamp">${message.createdAt.toLocaleString()}</div>
              <div class="text">${message.content || ''}</div>
      `;
      if (message.attachments.size > 0) {
          message.attachments.forEach(attachment => {
              if (attachment.contentType && attachment.contentType.startsWith('image/')) {
                  transcriptHTML += `<img src="${attachment.url}" alt="Image">`;
              }
          });
      }
      if (message.embeds.length > 0) {
          message.embeds.forEach(embed => {
              transcriptHTML += `
              <div class="embed">
                  ${embed.title ? `<div class="embed-title">${embed.title}</div>` : ''}
                  ${embed.description ? `<div class="embed-description">${embed.description}</div>` : ''}
                  ${embed.footer ? `<div class="embed-footer">${embed.footer.text}</div>` : ''}
              </div>
              `;
          });
      }

      transcriptHTML += `</div></div>`;
  });

  transcriptHTML += `
      </div>
  </body>
  </html>
  `;
  const name = interaction.channel.name
  var tname = name.split("┋")[1]
  if(client.users.cache.has(name.split("┋")[1])){
    const iusid = client.users.cache.get(name.split("┋")[1])
    tname =await iusid.username
  }
  const fileName = `transcript-${tname}.html`;
  fs.writeFileSync("./tickets/"+fileName, transcriptHTML);
      //  if(!warn || !mod || !bk || !echo) return interaction.reply({ephemeral:true,content:"only the team can close tickets"})
            let type =name.split("┋")[0]
      let stat = false
      if(type==="📄")stat =  ticketdb[name.split("┋")[1]].dbw
      if(type ==="📋")stat = ticketdb[name.split("┋")[1]].tbw 
      if(type==="🔎")stat = ticketdb[name.split("┋")[1]].verify 
      if(type==="🎫")stat = ticketdb[name.split("┋")[1]].support
      if(type==="🤖")stat = ticketdb[name.split("┋")[1]].bug
      if(type==="🤝")stat = ticketdb[name.split("┋")[1]].partn
    let helperst= []
    await stat.claimby.forEach(async us=>{
        const name = (await client.users.cache.get(us.id)).username
        if(!helperst.includes(name)) helperst.push(name)
    })
      if(type==="📄") ticketdb[name.split("┋")[1]].dbw =false 
      if(type ==="📋")ticketdb[name.split("┋")[1]].tbw =false 
      if(type==="🔎")ticketdb[name.split("┋")[1]].verify =false 
      if(type==="🎫")ticketdb[name.split("┋")[1]].support =false 
      if(type==="🤖")ticketdb[name.split("┋")[1]].bug =false 
      if(type==="🤝")ticketdb[name.split("┋")[1]].partn =false 
       savetdb()
        const tlogch = client.channels.cache.get("1279133828065263716")
        const semb = new EmbedBuilder()
        .setTitle("Ticket Closed")
        .setDescription("The ticket of <@"+name.split("┋")[1]+"> - `"+name.split("┋")[1]+"` was closed\nClosed by: <@"+interaction.user.id+">\nTranscript:")
        await tlogch.send({embeds:[semb]})
        await tlogch.send({files:["./tickets/"+fileName]})
        interaction.channel.delete()
        if(client.users.cache.has(name.split("┋")[1])){
            const iusid = client.users.cache.get(name.split("┋")[1])
            const uemb = new EmbedBuilder()
            .setTitle("Your Ticket got closed")
            .setDescription("We hope you are satisfied with the support and all issues have been resolved\nIf you have any other questions, you can always open a ticket again\You can check the transcript below this embed if you need it again.")
            const rateembed = new EmbedBuilder()
            .setTitle("Rate your support")
            .setColor("#000000")
            .setDescription("How would you rate the support of the following team members "+helperst+"?")
              .setTimestamp()
              .setFooter({ text: 'Your support experiences at Synex.cc'})
           await iusid.send({embeds:[uemb]})
          }
    }
    if(interaction.customId==="serververify"){
        const embed = new EmbedBuilder()
        .setTitle("Server Team Verify")
        .setDescription("- Invite our bot to your server (the bot doesnt need permissions, [Invite here](https://discord.com/oauth2/authorize?client_id=1280193677632868405&permissions=1&integration_type=0&scope=bot+applications.commands))\n- use /setteamrole\n- Wait till our team reviews your server\n- all your staff members can now join and get within 30 seconds the role")
    interaction.reply({ephemeral:true,embeds:[embed]})
    }
    if(interaction.customId==="selfverify"){
        let m = new modal.Modal()
        .setCustomId("verifyrequest")
        .setTitle("Questions for verify")
        .addComponents([
            new modal.TextInputComponent()
            .setCustomId('servern')
            .setLabel("Server name")
            .setStyle("SHORT")
            .setRequired(true)
        .setMinLength(1)
            .setMaxLength(100),
            new modal.TextInputComponent()
            .setCustomId('serveri')
            .setLabel("Server invite")
            .setStyle("SHORT")
            .setRequired(true)
        .setMinLength(1)
            .setMaxLength(100)
            .setPlaceholder("discord.gg/"),
            new modal.TextInputComponent()
            .setCustomId('role')
            .setLabel("Your role in the team")
            .setStyle("SHORT")
        .setMinLength(1)
        .setRequired(true)
            .setMaxLength(100)
            .setPlaceholder("example: Analyst/Admin/..."),
        ])
    modal.showModal(m, {
            client: client,
            interaction: interaction
        })
    }
    if(interaction.customId==="detecbewerbungein"){
        let m = new modal.Modal()
        .setCustomId("detecbewerbungein")
        .setTitle("Detection team application")
        .addComponents([
            new modal.TextInputComponent()
            .setCustomId('bewerbung')
            .setLabel("Google Docs link")
            .setStyle("SHORT")
        .setMinLength(10)
        .setRequired(true)
            .setMaxLength(100)
            .setPlaceholder("docs.google.com/...")
        ])
    modal.showModal(m, {
            client: client,
            interaction: interaction
        })
    }
    if(interaction.customId==="staffbewerbungein"){
        let m = new modal.Modal()
        .setCustomId("staffbewerbungein")
        .setTitle("Staff application")
        .addComponents([
            new modal.TextInputComponent()
            .setCustomId('bewerbung')
            .setLabel("Google Docs link")
            .setStyle("SHORT")
            .setRequired(true)
        .setMinLength(10)
            .setMaxLength(100)
            .setPlaceholder("docs.google.com/...")
        ])
    modal.showModal(m, {
            client: client,
            interaction: interaction
        })
    }
    if(interaction.customId.startsWith("cheatangenommen")){
        const subid = interaction.customId.split("-")[1]
        cheater.allowed.push(cheater.submit[subid])
       savecheater()
        const d = cheater.submit[subid]
       const embed = new EmbedBuilder()
       .setTitle("New Cheat Expose to review")
       .addFields([
           {name:"Submit by",value:`<@${d.reporter}> - ${d.reporter}`},
           {name:"Cheater",value:`<@${d.reportet}> - ${d.reportet}`},
           {name:"What did he done",value:d.done},
           {name:"Scan/Screenshot link",value:d.link},
           {name:"Found",value:d.found},
           {name:"Server he got caught on",value:d.server}
       ])
       .setColor("#00FF00")
       const row =new  ActionRowBuilder()
       .addComponents(
        new ButtonBuilder()
        .setLabel("Accepted by "+interaction.user.username)
        .setCustomId("nichtbeachten")
        .setStyle(ButtonStyle.Success)
        .setDisabled(true)
       )
      await interaction.update({embeds:[embed],components:[row]})
      const emb = new EmbedBuilder()
      .setTitle("New cheater expose")
.setDescription("**Cheater:** <@"+d.reportet+"> - `"+d.reportet+"`\n**What did he do:** "+d.done+"\n**Found:** "+d.found+"\n**Caught by:** "+d.server)
    /*  .addFields([
        {name:"Cheater",value:`<@${d.reportet}> - ${d.reportet}`},
        {name:"What did he done",value:d.done},
        {name:"Found",value:d.found},
        {name:"Caught by",value:d.server}
      ])
*/
      .setThumbnail("https://i.postimg.cc/t462Q3BC/ZnfGrkV.png")
      .setFooter({iconURL:"https://cdn.discordapp.com/attachments/1280160403128848439/1281717443475275827/4ec6418528843fc7d8eb19b3ac74736f.webp?ex=66dd64a3&is=66dc1323&hm=cb904f14c1315ceb7129712d214d52ebd68f210c8529e804feeeba7e4f8e9620&",text:"©2024 Published by "+interaction.user.username+ " & Synex.cc"})
      const ch = client.channels.cache.get(final)
      await ch.send({embeds:[emb]}).then(msg=>{
        blacklist[d.reportet] = `Cheater https://discord.com/channels/${msg.guild.id}/${msg.channel.id}/${msg.id}`
       saveb()
       msg.crosspost()
      })
      const user = interaction.guild.members.cache.get(cheater.submit[subid].reporter)
       if(!user) return interaction.reply({ephemeral:true,content:"The user that report this cheater isnt on the server anymore"})
    await user.send({content:"Your cheater request got accepted"})
       interaction.followUp({ephemeral:true,content:"Done"})
    }
    if(interaction.customId.startsWith("cheatabgelehnt-")){
        const subid = interaction.customId.split("-")[1]
        let m = new modal.Modal()
        .setCustomId("cheatrequestdeny-"+subid)
        .setTitle("Deny a request")
        .addComponents([
            new modal.TextInputComponent()
            .setCustomId('reason')
            .setLabel("reason for deny the request")
            .setStyle("SHORT")
        .setMinLength(1)
            .setMaxLength(100)
            .setPlaceholder("example: Wrong Scan Link"),
        ])
    modal.showModal(m, {
            client: client,
            interaction: interaction
        })
    }
    if(interaction.customId.startsWith("cheatabgelehnt2")){
        const subid = interaction.customId.split("-")[1]
       cheater.denied.push(cheater.submit[subid])
       savecheater()
       const d = cheater.submit[subid]
       const embed = new EmbedBuilder()
       .setTitle("New Cheat Expose to review")
       .addFields([
           {name:"Submit by",value:`<@${d.reporter}> - ${d.reporter}`},
           {name:"Cheater",value:`<@${d.reportet}> - ${d.reportet}`},
           {name:"What did he done",value:d.done},
           {name:"Scan/Screenshot link",value:d.link},
           {name:"Found",value:d.found},
           {name:"Server he got caught on",value:d.server}
       ])
       .setColor("#FF0000")
       const row = new ActionRowBuilder()
       .addComponents(
        new ButtonBuilder()
        .setLabel("Denied by "+interaction.user.username)
        .setCustomId("nichtbeachten")
        .setStyle(ButtonStyle.Danger)
        .setDisabled(true)
       )
      await interaction.update({embeds:[embed],components:[row]})
      const user = interaction.guild.members.cache.get(cheater.submit[subid].reporter)
       if(!user) return interaction.reply({ephemeral:true,content:"The user that report this cheater isnt on the server anymore"})
   await user.send({content:"Your cheater expose request got denied.\nTheir was no reason provided"})
       interaction.followUp({ephemeral:true,content:"The request got denied"})
    }
    if(interaction.customId==="cheatercheck"){
        let m = new modal.Modal()
        .setCustomId("cheatcheck")
        .setTitle('Check if user is cheater')
        .addComponents([
            new modal.TextInputComponent()
            .setCustomId('id')
            .setLabel("DC ID of possibel cheater")
            .setStyle("SHORT")
        .setMinLength(15)
            .setMaxLength(25)
            .setPlaceholder("example: 1255261103567536285"),
        ])
        modal.showModal(m, {
            client: client,
            interaction: interaction
        })
    }
    if(interaction.customId==="cheaterrequest"){
        let m = new modal.Modal()
        .setCustomId("cheatrequest")
        .setTitle('Report a cheater')
        .addComponents([
            new modal.TextInputComponent()
            .setCustomId('id')
            .setLabel("discord id of the cheater (only one id)")
            .setStyle("SHORT")
        .setMinLength(15)
            .setMaxLength(25)
            .setPlaceholder("example: 1255261103567536285"),
            new modal.TextInputComponent()
            .setCustomId('do')
            .setLabel("what did he do")
            .setStyle("SHORT")
        .setMinLength(5)
            .setMaxLength(50)
            .setPlaceholder("example: cheating/spoofing"),
            new modal.TextInputComponent()
            .setCustomId('found')
            .setLabel("what did you found")
            .setStyle("SHORT")
        .setMinLength(2)
            .setMaxLength(50)
            .setPlaceholder("example: tz/redengine/hx/..."),
            new modal.TextInputComponent()
            .setCustomId('link')
            .setLabel("Prove (SS-Tool/Screenshot link)")
            .setStyle("SHORT")
        .setMinLength(5)
            .setMaxLength(200)
            .setPlaceholder("example: https://scan.echo.ac/..."),
            new modal.TextInputComponent()
            .setCustomId('server')
            .setLabel("Wich server did you caugh him cheating on")
            .setStyle("SHORT")
        .setMinLength(1)
            .setMaxLength(200)
         //   .setPlaceholder(""),
        ])
    modal.showModal(m, {
            client: client,
            interaction: interaction
        })
    }
    if(interaction.customId.startsWith("echogut") || interaction.customId.startsWith("echoauf") || interaction.customId.startsWith("echoschlecht")){
        const uid = interaction.customId.split("-")[1]
                const scanID = interaction.customId.split("-")[2]
        var result = false
                          const response = await fetch(`https://api.echo.ac/v1/user/scans/all`, {
                              method: 'GET',
                              headers: {
                                  'Authorization': `Bearer ${echoApiKeys[Math.floor(Math.random() * echoApiKeys.length)]}`,
                                  'Content-Type': 'application/json'
                              }
                          });
                  const dataa = await response.json();
                  for (const scan of dataa) {
                  try {
                      const response = await fetch(`https://api.echo.ac/v1/scan/${scan.uuid}`, {
                          method: 'GET',
                          headers: {
                              'Authorization': `Bearer ${echoApiKeys[Math.floor(Math.random() * echoApiKeys.length)]}`,
                              'Content-Type': 'application/json'
                          }
                      });
                      const dade = await response.json();
                      if (dade.pin === scanID) {
                          result = dade
                          break;
                      }
                  } catch (error) {
                      console.error('Fehler beim Abrufen der Daten:', error);
                  }
              }
              if(!result) return interaction.reply({ephemeral:true,content:"der pin ist ungültig"})
                  const dade = result
        const traceFields = []
        const traces = dade.results.traces
        traces.forEach(trace => {
                  const [severity, process] = trace.in_instance.split('|');
                  traceFields.push({
                      name: `${severity}`,
                      value: `${trace.name}`,
                      inline: false
                  });
              });
        const traceText = traceFields.map(field => `${field.name}: ${field.value}`).join('\n');
                  fs.writeFileSync('traces.txt', traceText, 'utf8');
                  const tracesAttachment = new AttachmentBuilder('traces.txt');
                  const embed = new EmbedBuilder()
      if(interaction.customId.startsWith("echogut")){
        embed.setTitle("Sauber")
        embed.addFields([
            {name:"Analyst",value:"<@"+interaction.user.id+"> ("+interaction.user.id+")"},
            {name:"Durchsucht",value:"<@"+uid+"> ("+uid+")"}
        ])
        embed.setColor("#00FF00")
      }
      if(interaction.customId.startsWith("echoauf")){
        embed.setTitle("Verdächtig/Aufnahmepflicht")
        embed.addFields([
            {name:"Analyst",value:"<@"+interaction.user.id+"> ("+interaction.user.id+")"},
            {name:"Durchsucht",value:"<@"+uid+"> ("+uid+")"}
        ])
        embed.setColor("#FFA500")
        interaction.guild.members.cache.get(uid).roles.add(aufnahmerolle)
        client.channels.cache.get(aufnahmechannel).send(uid)
      }
      if(interaction.customId.startsWith("echoschlecht")){
        embed.setTitle("Modding 100")
        embed.addFields([
            {name:"Analyst",value:"<@"+interaction.user.id+"> ("+interaction.user.id+")"},
            {name:"Durchsucht",value:"<@"+uid+"> ("+uid+")"}
        ])
        embed.setColor("#FF0000")
        interaction.guild.members.cache.get(uid).roles.add(modderrolle)
      }
      interaction.guild.channels.cache.get(ergebnischannel).send({embeds:[embed],files:[tracesAttachment]})
    }
    if(interaction.customId.startsWith("echocode-")){
        interaction.reply("Dein Scan Code ist "+interaction.customId.split("-")[1])
    }
if(interaction.customId === "echocode"){
    const response = await fetch('https://api.echo.ac/v1/user/pin', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${echoApiKeys[Math.floor(Math.random() * echoApiKeys.length)]}`,
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    const fivemCode = data.pin;
    const fivemLink = data.links.fivem;
interaction.reply({ephemeral:true,content:fivemLink})
}
if(interaction.customId.startsWith("ergebnis")){
    interaction.deferReply()
    var scanID = interaction.customId.split("-")[1]
     var result = false
            const response = await fetch(`https://api.echo.ac/v1/user/scans/all`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${echoApiKeys[Math.floor(Math.random() * echoApiKeys.length)]}`,
                    'Content-Type': 'application/json'
                }
            });
	const dataa = await response.json();
    for (const scan of dataa) {
    try {
        const response = await fetch(`https://api.echo.ac/v1/scan/${scan.uuid}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${echoApiKeys[Math.floor(Math.random() * echoApiKeys.length)]}`,
                'Content-Type': 'application/json'
            }
        });
        try {
        const dade = await response.json();
        if (dade.pin === scanID) {
            result = dade
            break;
        }
             } catch (error) {
            console.log(error)
        }
    } catch (error) {
        console.log('Fehler beim Abrufen der Daten:', error);
    }
}
if(!result ||!result.uuid) return interaction.editReply({content:"Ein fehler ist aufgetreten, überprüfe ob der Scan bereits fertig ist."})
    const dade = result
    const eeeee = new EmbedBuilder()
    .setTitle("Custom Detections")
    const fields = []
    dade.results.custom.forEach(res=>{
        var text = ""
              res.notes.forEach(no=>{
                  text = text + no + "\n"
              })
        if(text.split("").length < 1024){
        fields.push({name:res.name,value:text})
        }
    })
    if(fields.length > 0) eeeee.addFields(fields)
    const e = new EmbedBuilder()
  .setTitle('General Information')
  .setDescription(`Details for UUID: ${dade.uuid}`)
  /*.addFields([
    { name: 'Game', value: dade.game, inline: true },
    { name: 'Pin', value: dade.pin, inline: true },
    { name: 'Public', value: dade.public ? 'Yes' : 'No', inline: true },
    { name: 'Steam Accounts', value: dade.accounts.join('\n'), inline: false },
  ])
    */
  .setTimestamp(new Date(dade.time))
  .setFooter({ text: 'General Information' });
const ee = new EmbedBuilder()
  .setTitle('Timestamps')
  .addFields(
    { name: 'Recycle Bin Modified', value: `<t:${Math.floor(new Date(dade.results.info.recycleBinModified).getTime() / 1000)}:F>`, inline: false },
    { name: 'Start Time (DGT)', value: `<t:${dade.results.start_time.dgt}:F>`, inline: true },
    { name: 'Start Time (DNS)', value: `<t:${dade.results.start_time.dns}:F>`, inline: true },
    { name: 'Start Time (DPS)', value: `<t:${dade.results.start_time.dps}:F>`, inline: true },
    { name: 'Start Time (Explorer)', value: `<t:${dade.results.start_time.explorer}:F>`, inline: true },
    { name: 'System Time', value: `<t:${dade.results.start_time.sys}:F>`, inline: true },
    { name: 'SysMain Time', value: `<t:${dade.results.start_time.sysmain}:F>`, inline: true },
    { name: 'PCA Time', value: `<t:${dade.results.start_time.pca}:F>`, inline: true }
  )
  .setFooter({ text: 'Timestamps' });

// Dritter Embed: Traces (Umformatiert wie gewünscht)
const traceFields = [];
const logFields = [];
const traces = dade.results.traces; // Replace with actual data
const logs = dade.results.logs;     // Replace with actual data

// Process traces and logs
traces.forEach(trace => {
    const [severity, process] = trace.in_instance.split('|');
    traceFields.push({
        name: `${severity}`,
        value: `${trace.name}`,
        inline: false
    });
});

const traceText = traceFields.map(field => `${field.name}: ${field.value}`).join('\n');
if(traceText.split("").length > 4000){
          fs.writeFileSync('traces.txt', traceText, 'utf8');
          const tracesAttachment = new AttachmentBuilder('traces.txt');
  
          interaction.reply({embeds:[e,ee,eeeee],files:[tracesAttachment]})
} else {
const embed = new EmbedBuilder()
.setDescription(traceText)
interaction.editReply({embeds:[e,ee,embed,eeeee]})
}
}
}
}
})
client.login(token)
client.on("messageCreate", async(message)=>{
    if(!message.guild) return

    if(message.content==="!ping"){
        const latency = Date.now() - message.createdTimestamp;
        const apiLatency = client.ws.ping
        const embed = new EmbedBuilder()
            .setColor('#0099ff')
            .setTitle('Pong!')
            .addFields(
                { name: 'Latency', value: `${latency}ms`, inline: true },
                { name: 'API Latency', value: `${apiLatency}ms`, inline: true }
            )
            .setTimestamp();

       
        await message.reply({ embeds: [embed] });

    }
    if(message.content==="!embed"&&message.author.id==="881470112337649684"){
        const embed = new EmbedBuilder()
        .setTitle("Embed")
        message.channel.send({embeds:[embed]})
    }
    if(message.content.startsWith("!addlog") && (message.author.id==="881470112337649684"||message.member?.roles.cache.has("1287487639439675444"))){
        const split=message.content.split(" ")
        const ip = split[1]
        const ch = split[2]
        if(!ip || !ch) return message.reply(" !addlog ip channel\nbsp: !addlog 104.234.180.66 1288893377395425355")
        serverdata[ip] = ch
        fs.writeFile("./serverdata.json", JSON.stringify(serverdata), err =>{
            if(err){
             console.log(err);
            }
            })
            message.reply("Done")
    }
    if(message.guild.id !== "1275957721195352104") return 
    if(message.content.startsWith("!done")){
        const lang = message.content.split(" ")[1]
        if(lang === "de"){
            if(message.channel.parentId!=="1276007176061849631") return
        const name = message.channel.name
        var tname = name.split("┋")[1]
        message.channel.send(`<@${name.split("┋")[1]}>\n<#1276003892181733378> -> sende hier von dir/deinem server gefundene cheater ein\n<#1276282421905719369> -> sehe von anderen servern eingesendetet cheater\n<#1280625470525804585> -> Fragen oder Teambewerbung? Kein Problem, öffne ein Ticket!\n<#1275962060420812854> -> Nutze commands wie /checkdiscords. Bei diesem Command musst du eine Discord ID angeben und erhälst alle Cheat/Reseller Discords wo der user drauf ist.\n\nFalls du interesse an einer Partnerschaft hast teile uns das gerne mit. Du erhälst zugriff auf mehr Informationen bei checkdiscords sowie Custom Strings. Bei Fragen stehen wir gerne zur Verfügung`)
message.delete()
        } else if (lang === "en"){
            if(message.channel.parentId!=="1276007176061849631") return
        const name = message.channel.name
        var tname = name.split("┋")[1]
        message.channel.send(`<@${name.split("┋")[1]}>\n<#1276003892181733378> -> send in cheaters found by you/your server here\n<#1276282421905719369> -> see cheaters sent in by other servers\n<#1280625470525804585> -> Questions or team application? No problem, open a ticket!\n<#1275962060420812854> -> Here you can use slash commands like /checkdiscords, where you can check the cheat/reseller discords a user id is on.\n\nIf you are interested in a partnership, please let us know and you will get access to exclusive commands and custom strings.\nIf you have any questions, please do not hesitate to contact us.`)
message.delete()
        } else {
            message.reply({content:"please provide an valid language options: **!done de** - german, **!done en** - english"}).then(msg=>{
                message.delete()
                setTimeout(() => {
                   msg.delete() 
                }, 5000);
            })
        }
    }
    if(message.content.startsWith("!dbcheck embed")&& message.member.roles.cache.has("1276000833024294932")){
        const ids = message.content.split(" ")
        ids.splice(0,2)
        if(ids.length===-1) return message.reply("Bitte gebe mindestens eine id an:\ncommand: !dbcheck file/embed id1 id2 ...")
        ids.forEach(async id=>{
                await message.reply({content: id,embeds:await getUserData(id,client.user.username,true)});
    })
    } else if(message.content.startsWith("!dbcheck file") && message.member.roles.cache.has("1276000833024294932")){
        const ids = message.content.split(" ")
        ids.splice(0,2)
        if(ids.length===-1) return message.reply("Bitte gebe mindestens eine id an:\ncommand: !dbcheck file/embed id1 id2 ...")
        ids.forEach(async id=>{
                await message.reply(await getUserData(id,client.user.username,true,true));
    })
    } else if(message.content.startsWith("!dbcheck") && message.member.roles.cache.has("1276000833024294932")){
        message.reply("Bitte gebe ein format an:\ncommand: !dbcheck file/embed id1 id2 ...")
    }
    if(message.author.id !== boss && message.author.id !=="881470112337649684") return
    if(message.content.startsWith("!coins")){
        const options = message.content.split(" ")
        if(options.length!==5) return message.reply("Nicht alles angegeben\nAchte auf die Command Struktur:\n!coins time <id> +/- <time>\n!coins coins <id> +/- <wert>")
        if(options[3]!=="+"&&options[3]!=="-") return message.reply("+/- vergessen!\nAchte auf die Command Struktur:\n!coins time <id> +/- <time>\n!coins coins <id> +/- <wert>")
if(!coins[options[2]]) {
        coins[options[2]] = {
            coins:0,
            roletime:false
        }
    }
savecoins()
        if(options[1]==="coins" && (parseInt(options[4])=== NaN || parseInt(options[4])<=0 || parseInt(options[4])>999999)) return message.reply("Ungültige anzahl an coins!\nAchte auf die Command Struktur:\n!coins time <id> +/- <time>\n!coins coins <id> +/- <wert>")
        if(options[1]==="time" && ms(options[4])===undefined) return message.reply("Ungültige zeit - [richtige angabe](https://www.npmjs.com/package/ms)!\nAchte auf die Command Struktur:\n!coins time <id> +/- <time>\n!coins coins <id> +/- <wert>")
        switch (options[1]) {
            case "coins":
                console.log(coins[options[2]].coins)
                console.log(options[4])
                if(options[3]==="+") coins[options[2]].coins = (parseInt(coins[options[2]].coins)+parseInt(options[4])).toString()
                if(options[3]==="-") coins[options[2]].coins = coins[options[2]].coins-options[4]
                savecoins()
                let usercoins = parseFloat(coins[options[2]].coins)
                cheater.allowed.forEach(ch=>{
                    if(ch.reporter===options[2])usercoins=usercoins+1
                })
                message.reply("The user <@"+options[2]+"> has now "+usercoins+"<:3043coin:1284931936539774998>")
                break;
            case "time":
                if(!coins[options[2]].roletime)coins[options[2]].roletime= Date.now()
                if(options[3]==="+") coins[options[2]].roletime = coins[options[2]].roletime+ms(options[4])
                if(options[3]==="-") coins[options[2]].roletime = coins[options[2]].roletime-ms(options[4])
                if(coins[options[2]].roletime<Date.now()){
                    const g = client.guilds.cache.get("1275957721195352104")
							await g.members.fetch
                    const mem = await g.members.cache.get(options[2])
                    if(mem?.roles.cache.has("1283469110977495123")) mem.roles.remove("1283469110977495123")
                    coins[options[2]].roletime =false
                } else {
                    const g = client.guilds.cache.get("1275957721195352104")
							await g.members.fetch
                    const mem = await g.members.cache.get(options[2])
                    if(mem?.roles.cache.has("1283469110977495123")){

                    }else mem.roles.add("1283469110977495123")
                }
                savecoins()
                let stringgg=coins[options[2]].roletime?"<t:"+Math.floor(coins[options[2]].roletime/1000)+":R>":"0 (dont have it)"
                message.reply("The user <@"+options[2]+"> has now until "+stringgg)
                break
            default:
                message.reply("Achte auf die Command Struktur:\n!coins time <id> +/- <time>\n!coins coins <id> +/- <wert>")
        }
    }
    if(message.content==="!partnerswitch"){
        db.partnerstatus=!db.partnerstatus
        savedb()
        message.reply("The Status was set to "+db.partnerstatus.toString())
    }
    if(message.content.startsWith("!b")){
        const d = message.content.split(" ")
        const di = d[1]
        const id = d[2]
        if(di==="add"){
            botdb.blacklist.push(id)
            message.reply("Ok")
            fs.writeFile("./bot.json", JSON.stringify(botdb), err =>{
                if(err){
                 console.log(err);
                }
                })
        } else if(di==="remove"){
            const i = botdb.blacklist.indexOf(id)
            if(i<0) return message.reply("Invalid id")
            botdb.blacklist.splice(i,1)
        message.reply("Ok")
        fs.writeFile("./bot.json", JSON.stringify(botdb), err =>{
            if(err){
             console.log(err);
            }
            })
        } else {
            message.reply("Command: !b add|remove id")
        }
    }
    if(message.content === "!send" && message.author.id === "1255261103567536285"){
        const embed = new EmbedBuilder()
        .setTitle("Cheater Optiones")
        .setDescription("1. Submit a cheater\nSend us a new cheater\nOur team reviews it\nIf everything is fine, the cheater get exposed in the puplic channel\n\n2. Cheak Cheater\nCheck if a User(Discord-ID) was ever send us")
        const row = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setStyle(ButtonStyle.Success)
            .setLabel("Submit a cheater")
            .setCustomId("cheaterrequest"),
            new ButtonBuilder()
            .setStyle(ButtonStyle.Success)
            .setLabel("Check Cheater")
            .setCustomId("cheatercheck")
        )
        message.channel.send({embeds:[embed],components:[row]})
        message.delete()
    }
    if(message.content === "!send2" && message.author.id === "1255261103567536285"){
        const embed = new EmbedBuilder()
        .setTitle("<:emoji29:1285602842530549811>  Open a ticket")
        .setDescription("Please **select** one of the **ticket categories below**.\nIt may take up to **24 hours** for a **response** to your **support ticket**.\n\n**__Categories:__**\n\n> :ticket: - **Support**\n> :handshake: - **Partner**\n> <:BugHunter:1284936526962364559> - **Bug report**\n> :clipboard: - **Staff application**\n> :mag_right: - **Detection team application**\n> :test_tube: - **Cheat sample**\n\nPlease note that **pinging team members** is **forbidden**!\n\n**The <@&1276000833024294932> will get back to you as soon as possible!**")
        const row = new ActionRowBuilder()
        .addComponents(
            new StringSelectMenuBuilder()
					.setCustomId('ticketselect')
					.setPlaceholder('please select why you want to open a ticket')
					.addOptions(
						{
							label: 'Support',
							description: 'General questions',
							value: 'support',
                            emoji:"🎫"
						},
                        {
							label: 'Partner',
							description: 'Become a Partner',
							value: 'c5',
                            emoji:"🤝"
						},
                        {
							label: 'Bug Report',
							description: 'Report a bug of the bot',
							value: 'c4',
                            emoji:"<:BugHunter:1284936526962364559>"
						},
                        {
							label: 'Staff application',
							description: 'Application for the staff',
							value: 'supstaff',
                            emoji:"📋"
						},
                        {
							label: 'Detection team application',
							description: 'Application for the detection team',
							value: 'supdetec',
                            emoji:"🔎"
						},
                        {
							label: 'Cheat Sample',
							description: 'Send a cheat file for detection',
							value: 'supsample',
                            emoji:"🧪"
						},
					),
        )
        message.channel.send({embeds:[embed],components:[row]})
        message.delete()
    }
    if(message.content === "!send5" && message.author.id === "1255261103567536285"){
        // Hier ändern
        const embed = new EmbedBuilder()
        .setTitle("> Informations & Guides")
        .setDescription("Here you can view information or various guides.\nSimply choose one of the available options.")
        //.setImage()
        .setThumbnail("https://media.discordapp.net/attachments/1280971579559379044/1283131527802130544/benutzerhandbuch.png?ex=66e1e0db&is=66e08f5b&hm=9e2c22804204f300c023a1883be7751c639190fed15d2e6091c6f95d73b0ab1b&=&format=webp&quality=lossless")
        const row = new ActionRowBuilder()
        .addComponents(
            new StringSelectMenuBuilder()
					.setCustomId('Informations')
					.setPlaceholder('Select the information you need')
					.addOptions(
						{
							label: 'Partner',
							description: 'Get information about official partnerships',
							value: 'c1',
                            emoji:"🤝"
						},
                        {
							label: 'Cheater Submit',
							description: 'How do I report a cheater?',
							value: 'c2',
                            emoji:"🔎"
						},
                        {
							label: 'Cheat Sumbit',
							description: 'How do I submit a cheat?',
							value: 'c3',
                            emoji:"🧪"
						},
					),
        )
        message.channel.send({embeds:[embed],components:[row]})
        message.delete()
    }
    if(message.content === "!send3" && message.author.id === "1255261103567536285"){
        const embed = new EmbedBuilder()
        .setTitle("Role request")
        .setDescription("If you are member of a Server you have two options to get access to the server:\n\n### 1. Verify your serverteam\n- Invite our bot to your server (the bot doesnt need permissions, [Invite here](https://discord.com/oauth2/authorize?client_id=1280193677632868405&permissions=1&integration_type=0&scope=bot+applications.commands))\n- use /setteamrole\n- Wait till our team reviews your server\n- all your staff members can now join and get within 30 seconds the role\n\n### 2. Verify yourself\n- Open a ticket with the button under this message\n- fill out the form\n- wait till a staff member reviews your request")
        const row = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setLabel("Verify yourself")
            .setCustomId("selfverify")
            .setStyle(ButtonStyle.Success),
            new ButtonBuilder()
            .setLabel("Verify your server")
            .setCustomId("serververify")
            .setStyle(ButtonStyle.Success),
        )
        message.channel.send({embeds:[embed],components:[row]})
        message.delete()
    }
    if(message.content === "!send4"){
        const embeds = new EmbedBuilder()
        .setTitle("Server Teams")
        message.channel.send({embeds:[embeds]}).then(msg=>{
            const id = msg.id
            const serverlist = serverlist2
            serverlist.embed={
                channel : message.channel.id,
                message:id
            }
            saveslist()
            message.delete()
        })
    }
})
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err.stack || err);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

client.on("guildMemberAdd", async(member)=>{
    if(member.guild.id !== "1275957721195352104") return 
    const ch = client.channels.cache.get(join)
    const embed = new EmbedBuilder()
    .setTitle("New member")
    .setDescription("A new member joined the Server\nName: "+member.user.username+"\nId: "+member.id+"\nPing: <@"+member.id+">")
    .setTimestamp()
    await ch.send({embeds:[embed]})
    const che = client.channels.cache.get(joinpuplic)
    await che.send({content:"<:Join:1276284967277695049> <@"+member.id+"> just joined "+member.guild.name})
    if(blacklist[member.id]) ch.send({content:"@everyone The user above is on the blacklist for "+blacklist[member.id]})
await ch.send({embeds:await getUserData(member.id,"Synex.cc",true)})
})
client.on("guildMemberRemove", async(member)=>{
    if(member.guild.id !== "1275957721195352104") return
    const ch = client.channels.cache.get(leave)
    const embed = new EmbedBuilder()
    .setTitle("Member leave")
    .setDescription("A member left the Server\nName: "+member.user.username+"\nId: "+member.id+"\nPing: <@"+member.id+">")
    .setTimestamp()
    await ch.send({embeds:[embed]})

    const che = client.channels.cache.get(leavepuplic)
   await che.send({content:"<:Leave:1276284992569344023> <@"+member.id+"> - "+member.id+" just left "+member.guild.name})
})
client.on('messageDelete', async (message) => {
    if(message.guild.id !== "1275957721195352104") return
    const embed = new EmbedBuilder()
        .setTitle('Message Deleted')
        .setColor('#FF0000')
        .addFields([
            {name:'Author', value:message.author ? message.author.tag : 'Unknown', inline:true},
            {name:'Channel', value:`<#${message.channel.id}>`, inline:true},
            {name:'Message Content',value: message.content || 'No content', inline:false}
        ])
        .setTimestamp()
        .setFooter({ text: `ID: ${message.id}` });

    const logChannel = client.channels.cache.get(löscht); 
    if (logChannel) {
        logChannel.send({ embeds: [embed] });
    } else {
        console.error('Log channel not found.');
    }
});


client.on('messageUpdate', async (oldMessage, newMessage) => {
    if(oldMessage.guild?.id !== "1275957721195352104") return 
    if (oldMessage.content === newMessage.content) return; 
    const embed = new EmbedBuilder()
        .setTitle('Message Edited')
        .setColor('#FFFF00')
        .addFields([
            {name:'Author',value: newMessage.author ? newMessage.author.tag : 'Unknown',inline: true},
            {name:'Channel', value:`<#${newMessage.channel.id}>`, inline:true},
            {name:'Old Content', value:oldMessage.content || 'No content', inline:false},
            {name:'New Content', value:newMessage.content || 'No content', inline:false},

        ])
        .setTimestamp()
        .setFooter({ text: `ID: ${newMessage.id}` });

    const logChannel = client.channels.cache.get(edit); 
    if (logChannel) {
        logChannel.send({ embeds: [embed] });
    } else {
        console.error('Log channel not found.');
    }
});
setInterval(async () => {
    const mainGuild = client.guilds.cache.get("1275957721195352104");
    const secteam = "1275958110112190526"
    const sverify = "1280924837908582512"
    const servteam ="1280920765134278876"
    for ( const [member] of await mainGuild.members.cache) {
        let st = false
        let at = false
            client.guilds.cache.forEach(gu=>{
                if(staffdb[gu.id] && gu.members.cache.has(member)){
                    if(!st && gu.members.cache.get(member).roles.cache.has(staffdb[gu.id].team)){
                        st = true
                    }
                    if(!at && gu.members.cache.get(member).roles.cache.has(staffdb[gu.id].ana)){
                        at = true
                    }
                }
            })
            const us = await mainGuild.members.cache.get(member)
            const sveryc = await us.roles.cache.has(sverify)
            const ssync = await us.roles.cache.has(servteam)
            const ansync = await us.roles.cache.has(secteam)
            if(!st&&sveryc && ssync) await us.roles.remove(servteam)
            if(!at&&sveryc&& ansync) await us.roles.remove(secteam)
            if(!ssync && !ansync && sverify) await us.roles.remove(sverify)
            if(st) await us.roles.add(servteam)
            if(at) await us.roles.add(secteam)
            if(at || st) await us.roles.add(sverify)
            if(!ssync && !ansync && sverify) await us.roles.remove(sverify)
    }
}, 60000);

setInterval(async() => {
    const serverlist = serverlist2.servers;
    let list = ""
    let list2 = ""
let list3 = ""
let list4 = ""
let list5 =""
let i = 0
    serverlist.forEach(s => {
        const gmembers = [];
        const g = client.guilds.cache.get("1275957721195352104");
        
        g.members.cache.forEach(mem => {
            if (mem.roles.cache.has(s.role)) {
                gmembers.push(mem.id);
            }
        });
        
        for (let index = 0; index < gmembers.length; index++) {
            if (gmembers.length === 1) {
                gmembers[index] = "└ <@" + gmembers[index] + ">";
            } else {
                if (index === 0) {
                    gmembers[index] = "┌ <@" + gmembers[index] + ">";
                } else if (index === gmembers.length - 1) {
                    gmembers[index] = "└ <@" + gmembers[index] + ">";
                } else {
                    gmembers[index] = "├ <@" + gmembers[index] + ">";
                }
            }
        }
        if (gmembers.length > 0) {
i++
if(i<10)list = list + `### [**${s.name}**](${s.invite})\n`+gmembers.join("\n")+"\n\n"
if(i>=10&&i<20)list2= list2+ `### [**${s.name}**](${s.invite})\n`+gmembers.join("\n")+"\n\n"
if(i>=20&&i<30)list3= list3+ `### [**${s.name}**](${s.invite})\n`+gmembers.join("\n")+"\n\n"
if(i>=30&&i<40)list4= list4+ `### [**${s.name}**](${s.invite})\n`+gmembers.join("\n")+"\n\n"
if(i>=40&&i<50)list5= list5 + `### [**${s.name}**](${s.invite})\n`+gmembers.join("\n")+"\n\n"
           /* list.push({
                name: `[${s.name}](${s.invite})`,
                value: gmembers.join("\n") 
            });*/
        }
    });
    const embed = new EmbedBuilder()
    .setTitle("Server Teams")
    .setDescription(list)
    .setTimestamp()
    .setThumbnail("https://media.discordapp.net/attachments/1280160403128848439/1281717443475275827/4ec6418528843fc7d8eb19b3ac74736f.webp?ex=66dcbbe3&is=66db6a63&hm=6d51f5aca3b061237285c4c57545e34bf1de8b86c6c82e8a3f3b4619347729a7&=&format=webp")
    const ids = serverlist2.embed
    const channel = await client.channels.fetch(ids.channel);
    const message = await channel.messages.fetch(ids.message);
const embed2= new EmbedBuilder()
    .setDescription(list2)
    .setTimestamp()
    .setThumbnail("https://media.discordapp.net/attachments/1280160403128848439/1281717443475275827/4ec6418528843fc7d8eb19b3ac74736f.webp?ex=66dcbbe3&is=66db6a63&hm=6d51f5aca3b061237285c4c57545e34bf1de8b86c6c82e8a3f3b4619347729a7&=&format=webp")
const embed3= new EmbedBuilder()
    .setDescription(list3)
    .setTimestamp()
    .setThumbnail("https://media.discordapp.net/attachments/1280160403128848439/1281717443475275827/4ec6418528843fc7d8eb19b3ac74736f.webp?ex=66dcbbe3&is=66db6a63&hm=6d51f5aca3b061237285c4c57545e34bf1de8b86c6c82e8a3f3b4619347729a7&=&format=webp")
const embed4= new EmbedBuilder()
    .setDescription(list4)
    .setTimestamp()
    .setThumbnail("https://media.discordapp.net/attachments/1280160403128848439/1281717443475275827/4ec6418528843fc7d8eb19b3ac74736f.webp?ex=66dcbbe3&is=66db6a63&hm=6d51f5aca3b061237285c4c57545e34bf1de8b86c6c82e8a3f3b4619347729a7&=&format=webp")
if(list5.split("").length>2){
const embed5= new EmbedBuilder()
    .setDescription(list5)
    .setTimestamp()
    .setThumbnail("https://media.discordapp.net/attachments/1280160403128848439/1281717443475275827/4ec6418528843fc7d8eb19b3ac74736f.webp?ex=66dcbbe3&is=66db6a63&hm=6d51f5aca3b061237285c4c57545e34bf1de8b86c6c82e8a3f3b4619347729a7&=&format=webp")
await message.edit({embeds:[embed,embed2,embed3,embed4,embed5]})

} else await message.edit({embeds:[embed,embed2,embed3,embed4]});
    
},45000);
setInterval(async() => {
    const partner = partner2.servers;
    let list = [];
    
    partner.forEach(s => {
        const gmembers = [];
        const g = client.guilds.cache.get("1275957721195352104");
        
        g.members.cache.forEach(mem => {
            if (mem.roles.cache.has(s.role)) {
                gmembers.push(mem.id);
            }
        });
        
        for (let index = 0; index < gmembers.length; index++) {
            if (gmembers.length === 1) {
                gmembers[index] = "└ <@" + gmembers[index] + ">";
            } else {
                if (index === 0) {
                    gmembers[index] = "┌ <@" + gmembers[index] + ">";
                } else if (index === gmembers.length - 1) {
                    gmembers[index] = "└ <@" + gmembers[index] + ">";
                } else {
                    gmembers[index] = "├ <@" + gmembers[index] + ">";
                }
            }
        }
        if (gmembers.length > 0) {
            list = list + `### [**${s.name}**](${s.invite})\n`+gmembers.join("\n")+"\n\n"
           /* list.push({
                name: `[${s.name}](${s.invite})`,
                value: gmembers.join("\n") 
            });*/
        }
    });
    const embed = new EmbedBuilder()
    .setTitle("Partner")
    .setDescription(list)
    .setTimestamp()
    .setThumbnail("https://media.discordapp.net/attachments/1280160403128848439/1281717443475275827/4ec6418528843fc7d8eb19b3ac74736f.webp?ex=66dcbbe3&is=66db6a63&hm=6d51f5aca3b061237285c4c57545e34bf1de8b86c6c82e8a3f3b4619347729a7&=&format=webp")
    const ids = partner2.embed
    const channel = await client.channels.fetch(ids.channel);
    const message = await channel.messages.fetch(ids.message);
    await message.edit({embeds:[embed]});
    
},45000);

setInterval(async() => {
  botdb.giveaways.forEach(async give=>{
    if(give.end<Date.now()){
        if(give.ended) botdb.giveaways.splice(botdb.giveaways.indexOf(give),1)
            const ch = client.channels.cache.get(give.channel)
        const message =await ch.messages.cache.get(give.mId)
            if(give.members.length < give.winners){
                if(give.members.length===0){
                    await message.channel.send("Their was 0 participants for this giveaway, so i wasnt able to pick a winner")
                } else {
                    let string = "The Winners of "+give.price+" are "
                    give.members.forEach(mem=>{
                        string = string +"<@"+mem+"> "
                    })
                    message.channel.send(string)
                }
            } else {
                function getRandomIDs(arr, num) {
                    const shuffled = [...arr].sort(() => 0.5 - Math.random());
                    return shuffled.slice(0, num);
                }
                
                // Get x random IDs from the members array
                const winner = getRandomIDs(give.members, give.winners);
                let string = "The Winners of "+give.price+" are "
                    winner.forEach(mem=>{
                        string = string +"<@"+mem+"> "
                    })
                    message.channel.send(string)
            }
            botdb.giveaways.splice(botdb.giveaways.indexOf(give),1)
            fs.writeFile("./bot.json", JSON.stringify(botdb), err =>{
                if(err){
                 console.log(err);
                }
                })
         //  {"channel":"1277741053687890032","price":"test","winners":1,"end":1725746359189,"members":["870732907235401758"],"mId":"1281735495881195594","ended":false,"host":"881470112337649684"}
    }
  })
}, 10000);
setInterval(async () => {
    try {
      const ch1 = await client.channels.fetch(userstats);
      await ch1.setName("🤝┋Member: " + client.guilds.cache.get("1275957721195352104").memberCount)
        .catch(error => console.error("Error renaming ch1:", error));
  
      const ch2 = await client.channels.fetch(cheaterstats);
      await ch2.setName("🤬┋Cheater: " + cheater.allowed.length)
        .catch(error => console.error("Error renaming ch2:", error));
  
      const ch3 = await client.channels.fetch(pingstats);
      await ch3.setName("📶┋Ping: " + client.ws.ping.toString() + "ms")
        .catch(error => console.error("Error renaming ch3:", error));
    } catch (err) {
      console.error("Interval error:", err);
    }
  }, 300000);

  setInterval(async()=>{
    const cdb = mclient.db('cheatdiscords');
    const coll = cdb.collection('status');
    const collection = cdb.collection('users');
    const l = await collection.countDocuments();
    let stat = (await coll.findOne({})).status
    let time = (await coll.findOne({})).time
    let channel = await client.channels.cache.get("1288500118554804345")
    await channel.messages.fetch()
    let msg = await channel.messages.cache.get("1288500185290510388")
    let embed = new EmbedBuilder()
    .setAuthor({ name: 'Database Status', iconURL: 'https://media.discordapp.net/attachments/1283814302343495690/1286669157751848961/bandit.png?ex=66eebf88&is=66ed6e08&hm=f7aae5479c069bdd3675b4767a41c956d658f4443feb077697b3d5591f71a5dc&=&format=webp&quality=lossless'})
    .setColor("#1bff00")
      .addFields(
          {name:"<:emoji4:1286701540425465856> Cheater",value:l.toString(),inline:true},
      //    {name:"<:emoji23:1286700994373091328> Average scan time",value:ms(dst===NaN?1000:dst, { long: true }),inline:true},
          {name:"<:emoji9:1286700597659308052> Last Scan",value:"<t:"+Math.floor(time/1000)+":R>", inline:true},
          {name:"<:emoji23:1286700994373091328> Status",value:stat}
      )
      .setTimestamp()
      .setFooter({ text: 'Synex.cc live status', iconURL: 'https://media.discordapp.net/attachments/1283814302343495690/1286669157751848961/bandit.png?ex=66eebf88&is=66ed6e08&hm=f7aae5479c069bdd3675b4767a41c956d658f4443feb077697b3d5591f71a5dc&=&format=webp&quality=lossless' })
      await msg.edit({embeds:[embed]})
  },10000)

  async function checkPlayerJoin(ip, channel) {
    const logChannel = await client.channels.cache.get(channel)
    if(!logChannel) return
    try {
        const response = await axios.get('https://' + ip + ':30120/players.json', { httpsAgent: agent });
        const newPlayers = response.data;
        if (newPlayers.length === 0) return; 
        const cdb = mcdb.db('server');
        const collections = await cdb.listCollections({ name: ip }).toArray();
        if (collections.length === 0) await cdb.createCollection(ip);
        let finds = []
        for (const player of newPlayers) {
            const coll = await cdb.collection(ip)
            const exists = await coll.findOne({ "_id": player.id, identifiers: player.identifiers });
            if (!exists){
            const existse = await coll.findOne({ "_id": player.id});
            if(existse) {
                await coll.drop(); 
                await cdb.createCollection(ip);
            }
        } else {
            finds.push(player.id)
        }
        }
        for (const player of newPlayers) {
            if(!finds.includes(player.id)){
            const coll = await cdb.collection(ip)
            await coll.insertOne({
                "_id": player.id,
                "identifiers": player.identifiers,
                "name": player.name,
            });
            const discordIds = player.identifiers.filter(id => id.startsWith('discord:'));
            if (discordIds.length > 0) {
                for (const discordIdWithPrefix of discordIds) {
                    const dcid = discordIdWithPrefix.replace('discord:', '');

                    try {
                        const identembed = new EmbedBuilder()
                            .setTitle("Player Data")
                            .setDescription(player.identifiers.join("\n"))
                            .addFields({ name: "ID", value: player.id.toString() });
                        const embeds = await getUserDatafivem(dcid);
                        if(embeds){
                        embeds.push(identembed);
                        await logChannel.send({ embeds: embeds });
                        }
                    } catch (error) {
                        logChannel.send(`Fehler beim Verarbeiten der Discord-ID **${dcid}** für Spieler **${player.name}**.`);
                        console.error(`Fehler bei getUserData für Discord-ID ${dcid}:`, error);
                    }
                }
            } else {
                logChannel.send(`Spieler **${player.name}** hat keine verknüpfte Discord-ID.`);
            }
        }
    }
    } catch (error) {
        console.error('Fehler beim Abrufen der players.json');
    }
}

  setInterval(async()=>{
    Object.keys(serverdata).forEach(async ip=>{
        await checkPlayerJoin(ip,serverdata[ip])
    })
  },5*60*1000)