const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "923407897471" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923407897472";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_20_05_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA5NixcbiAgICAgICAgNTMsXG4gICAgICAgIDIxLFxuICAgICAgICA3NixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjksXG4gICAgICAgIDE4NixcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDksXG4gICAgICAgIDkyLFxuICAgICAgICA5NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYxLFxuICAgICAgICA0NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxODEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDMxLFxuICAgICAgICA1NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDkzLFxuICAgICAgICA5LFxuICAgICAgICAxODAsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDkxLFxuICAgICAgICAyMixcbiAgICAgICAgMTU3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI4LFxuICAgICAgICAxODMsXG4gICAgICAgIDMyLFxuICAgICAgICA0NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDkyLFxuICAgICAgICA2MixcbiAgICAgICAgMzksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDQ3LFxuICAgICAgICA1MixcbiAgICAgICAgMTAyLFxuICAgICAgICAwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDc1LFxuICAgICAgICA0OCxcbiAgICAgICAgMjU1LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTQsXG4gICAgICAgIDEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNCxcbiAgICAgICAgMjAxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDgxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgODgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDcyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDcsXG4gICAgICAgIDExNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAzM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQyLFxuICAgICAgICAzMSxcbiAgICAgICAgMjM3LFxuICAgICAgICA5NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDgxLFxuICAgICAgICA4MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzksXG4gICAgICAgIDIzOCxcbiAgICAgICAgNyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzQsXG4gICAgICAgIDk2LFxuICAgICAgICA3MCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDc0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTc0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjksXG4gICAgICAgIDk4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTM2LFxuICAgICAgICA0MixcbiAgICAgICAgMjQ2LFxuICAgICAgICA5MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTczLFxuICAgICAgICAxODksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA3NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTk4LFxuICAgICAgICA3NyxcbiAgICAgICAgODksXG4gICAgICAgIDExNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzksXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDMzLFxuICAgICAgICAxODIsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTksXG4gICAgICAgIDgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxODcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjEyLFxuICAgICAgICAzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDgxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDU4LFxuICAgICAgICA1LFxuICAgICAgICA1NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNTksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODUsXG4gICAgICAgIDQ2LFxuICAgICAgICA1MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTA2LFxuICBcImFkdlNlY3JldEtleVwiOiBcInhrNHVWWGZEclRmS052a2hiY015bDBPajVPTkdsdU45bjRaQVVBU0NzOTg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzNDA3ODk3NDcxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCQjk4NUY4RENERDBBOTY1NzhBNzFERDU0QkM1MDM0RlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTQ1NzMyMTdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjM0MDc4OTc0NzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjEwNUZGRDBFNUQ3MjlFQjVDMUMxRTQ2OTg4N0ZEMjk0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNDU3MzIxOVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJtbHlWbHAwMVJqdW1kUnVlc0s2TXl3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjlkMjFmYjA3LTYzZWEtNDE3ZC05NTViLTk3ZjFjOTFkOWE5OVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOCxcbiAgICAgIDg3LFxuICAgICAgMjA1LFxuICAgICAgMzUsXG4gICAgICAxNDgsXG4gICAgICAxOTEsXG4gICAgICAyNCxcbiAgICAgIDE2MSxcbiAgICAgIDY4LFxuICAgICAgMTQwLFxuICAgICAgMjQxLFxuICAgICAgMTgzLFxuICAgICAgNTcsXG4gICAgICAxNTUsXG4gICAgICA2MixcbiAgICAgIDE1MSxcbiAgICAgIDIxOCxcbiAgICAgIDUwLFxuICAgICAgNjgsXG4gICAgICAyNDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkzLFxuICAgICAgNjYsXG4gICAgICAxODUsXG4gICAgICAwLFxuICAgICAgMTEsXG4gICAgICAxMzEsXG4gICAgICA2NCxcbiAgICAgIDIzMyxcbiAgICAgIDEyOCxcbiAgICAgIDE2MCxcbiAgICAgIDEwNCxcbiAgICAgIDg2LFxuICAgICAgMjU0LFxuICAgICAgMTM0LFxuICAgICAgMTgsXG4gICAgICAyMCxcbiAgICAgIDczLFxuICAgICAgMjcsXG4gICAgICAxMTAsXG4gICAgICA4MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI4SDY1RVdBWVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDA3ODk3NDcxOjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi4bSNyoDclCAgIOGXt0/hl6rhl6kgICDiiIZcIixcbiAgICBcImxpZFwiOiBcIjIzMTgxNjk1MDc0NzI3OToxOUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMRHVsbW9RbXAvSnNRWVlBeUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImphU1F3MjQyWks0U3VKalZucW1yMzRlb1BlRFdZTC9PTTducDNMek1LR1k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwialQzMm1iN3J2T1VCcWUyKzZQeVZ4S2M0a1pjb2NsVkhmMFhCNDRWNldVNzU4blhNOWp1bG9JM3B0alRwTlRrdkRoSE51M1hJbkdNZmQ0NnBidCtXQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiY3lGSytVM0RCNEF0ckZXeFc0QnlmNHZiRXFaTFYyeHpsOFJXL0RCQ3lPaVlvZk5oQlR6c256bUgxVTlkVVE0SFhvOE8yS2puTVN1cG5sY1I2bmpCQmc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNDA3ODk3NDcxOjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEwMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE0NTczMjE0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQlFzXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCUXMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI3TnAyV1FmdEszbHNaWENZMFpwM1FxWXBINXFtMThENXZyUDV0WGpUNE1zPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIyMjY3MjY4NSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTEzNDU0NTU0MTlcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "Mr Boda-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "BODA-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Boda",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "68c9062ff411a04e84f677121692b581";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
