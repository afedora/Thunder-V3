 "use strict";
 const fs = require('fs')
 const cron = require('node-cron')
 const uptime = process.uptime();
 const { exec, spawn} = require('child_process')
 const axios = require("axios")
 const Exif = require('../sticker/exif.js');
 const util = require('util')
 const exif = new Exif();
 const moment = require("moment-timezone")
 const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
 const speed = require("performance-now");
 const fetch = require('node-fetch')
 const brainly = require('brainly-scraper');
 let google = require('google-it')
 const kotz = require("kotz-api");
 const hx = require('hxz-api')
 const xfar = require('xfarr-api');
 const XTeam = require('xteam-api');
 const ig = require('insta-fetcher');
 const ffmpeg = require('fluent-ffmpeg')
 const bdr = require('rumus-bdr')
 const encodeUrl = require('encodeurl')
 const {
getContentType, downloadContentFromMessage,	generateWAMessage, generateWAMessageFromContent, makeChatsSocket
} = require('@adiwajshing/baileys');
 const { 
  color, 
  runtime,
  fetchJson, 
  getRandom, 
webp2mp4File, 
mediafireDl, 
igstalk, 
  pickRandom, 
  randomInt, 
  genMath
 } = require('../function.js')
 const { 
  yta, 
  ytv, 
  searchResult 
 } = require('../scrape/ytdl')
 const {
   ramalan_jodoh, 
   tafsir_mimpi,
   nomer_hoki,
   ramalan_cinta,
   suami_istri,
   ramalan_jodoh_bali,
   arti_nama,
   kecocokan_nama,
   kecocokan_nama_pasangan,
   tanggal_jadian_pernikahan,
   sifat_usaha_bisnis,
   pekerjaan_weton_lahir,
   rejeki_hoki_weton,
   ramalan_nasib,
   cek_potensi_penyakit,
   perhitungan_feng_shui,
   arti_kartu_tarot,
   petung_hari_baik,
   hari_sangar_taliwangke,
   primbon_hari_naas,
   rahasia_naga_hari,
   primbon_arah_rejeki,
   ramalan_peruntungan,
   weton_jawa,
   sifat_karakter_tanggal_lahir,
   potensi_keberuntungan,
   primbon_memancing_ikan,
   masa_subur,
   zodiak,
   shio
  } = require('../scrape/primbon') 
const getLocationData = require('../scrape/location')
 const { igDownloader } = require('../scrape/igdown.js') 
 const  Searchnabi  = require('../scrape/kisahnabi.js');
 const { detikNews } = require('../scrape/detik') 
 const { textpro } = require('../scrape/textpro') 
const ph = require('../scrape/photooxy.js')
 let { cnn } = require('../scrape/cnn.js') 
 const geayubi = fs.readFileSync("./FunctionMD/scrape/Result/Asupan/geayubi.json");
 const bocil = fs.readFileSync("./FunctionMD/scrape/Result/Asupan/bocil.json");
 const rikagusriani = fs.readFileSync("./FunctionMD/scrape/Result/Asupan/rikagusriani.json");
 const { wikiSearch } = require('../scrape/wiki.js');
 const { wallpaperaccess } = require('../scrape/wallpaperaccess') 
 const { TiktokDownloader } = require('../scrape/tiktokdl') 
 let antilink = JSON.parse(fs.readFileSync('./storage/group/antilink.json'))
 const Options = require('../settings/options.js')
 const afk = require("../../storage/user/afk.js");
 let _afk = JSON.parse(fs.readFileSync('./storage/user/afk.json'));
 let _limit = JSON.parse(fs.readFileSync('./storage/user/limit.json'));
 let _buruan = JSON.parse(fs.readFileSync('./storage/user/hasil_buruan.json'));
 let _darahOrg = JSON.parse(fs.readFileSync('./storage/user/darah.json'))
 let _registered = JSON.parse(fs.readFileSync('./storage/user/registered.json'))
 let textproo = Options.textpro
 let thumb = fs.readFileSync('./storage/image/thumb.jpg') 
 const { pinterest, wallpaper, porno, hentai, quotesAnime } = require('../scrape/ApiOrScrap')
 const { addPlayGame, getJawabanGame, isPlayGame, cekWaktuGame, getGamePosi } = require("../../storage/user/game");
 const tebakkimia = fs.readFileSync('./FunctionMD/scrape/Result/Game/tebakkimia.json');
 const asahotak = fs.readFileSync('./FunctionMD/scrape/Result/Game/asahotak.json');
 const susunkata = fs.readFileSync('./FunctionMD/scrape/Result/Game/susunkata.json');
 const tebakkalimat = fs.readFileSync('./FunctionMD/scrape/Result/Game/tebakkalimat.json');
 const tekateki = fs.readFileSync('./FunctionMD/scrape/Result/Game/tekateki.json');
 const caklontong = fs.readFileSync('./FunctionMD/scrape/Result/Game/caklontong.json');
 const tebakbendera = fs.readFileSync('./FunctionMD/scrape/Result/Game/tebakbendera.json');
 const tebakanime = fs.readFileSync('./FunctionMD/scrape/Result/Game/tebakanime.json');
 const tebakkabupaten = fs.readFileSync('./FunctionMD/scrape/Result/Game/tebakkabupaten.json');
 const tebaklagu = fs.readFileSync('./FunctionMD/scrape/Result/Game/tebaklagu.json');
 const tebaklirik = fs.readFileSync('./FunctionMD/scrape/Result/Game/tebaklirik.json');
 const { Gempa } = require("../scrape/gempa.js");
 let { covid } = require('../scrape/covid.js') 
const { jadwaltv }= require('../scrape/jadwaltv');
const { lirikLagu } = require('../scrape/lirik')

const _math = JSON.parse(fs.readFileSync('./storage/user/math.json'))
const _tbkkimia = JSON.parse(fs.readFileSync('./storage/user/tebakkimia.json'))
const _asahotak = JSON.parse(fs.readFileSync('./storage/user/asahotak.json'))
const _susunkata = JSON.parse(fs.readFileSync('./storage/user/susunkata.json'))
const _tebakkalimat = JSON.parse(fs.readFileSync('./storage/user/tebakkalimat.json'))
const _tekateki = JSON.parse(fs.readFileSync('./storage/user/tekateki.json'))
const _caklontong = JSON.parse(fs.readFileSync('./storage/user/caklontong.json'))
const _tebakbendera = JSON.parse(fs.readFileSync('./storage/user/tebakbendera.json'))
const _tebakanime = JSON.parse(fs.readFileSync('./storage/user/tebakanime.json'))
const _tebakkabupaten = JSON.parse(fs.readFileSync('./storage/user/tebakkabupaten.json'))
const _tebaklirik= JSON.parse(fs.readFileSync('./storage/user/tebaklirik.json'))
const _tebaklagu= JSON.parse(fs.readFileSync('./storage/user/tebaklagu.json'))
let tebakgambar = []
let gamewaktu = 50
 
 let OwnerNumber = Options.info.owner 
module.exports = async (
    sock,
    m,
    store   
    ) => {
   
   try{            
   const from = m.key.remoteJid
   const CMD = (m.xtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.xtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.xtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.xtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
   const prefix = /^[#!.,®©¥€¢£/\∆✓]/.test(CMD) ? CMD.match(/^[#!.,®©¥€¢£/\∆✓]/gi) : '#'	  
   const quoted = m.quoted ? m.quoted : m
   const mime = (quoted.m || quoted).mimetype || ''
   const chatmessage = (m.xtype === 'conversation') ? m.message.conversation : (m.xtype === 'extendedTextMessage') ? m.message.extendedTextMessage.text : ''
   const ordermessage = (m.xtype === 'conversation') ? m.message.conversation : (m.xtype == 'imageMessage') ? m.message.imageMessage.caption : (m.xtype == 'videoMessage') ? m.message.videoMessage.caption : (m.xtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.xtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.xtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.xtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.xtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
   const chats = (m.xtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.xtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.xtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.xtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.xtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.xtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.xtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : ''
   const args = ordermessage.trim().split(/ +/).slice(1)
   const botNumber = sock.user.id.split(':')[0] + '@s.whatsapp.net'

   const order = ordermessage.slice(1).trim().split(/ +/).shift().toLowerCase()
   const sender = m.sender
   const quotedMsg = m.isMedia
   const q = args.join(' ')       
   const isCmd = ordermessage.startsWith(prefix)   
   const isGroup = from.endsWith('@g.us') 
   const itulho = isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid 
   const isOwner = OwnerNumber.includes(itulho)      
   const groupMetdata = isGroup ? await sock.groupMetadata(from) : ''
   const groupName = isGroup ? await groupMetdata.subject : ''   
   const isAntiLink = isGroup ? antilink.includes(m.sender) : false
   const groupMetadata = isGroup ? await sock.groupMetadata(from) : ''
   const groupMembers = isGroup ? groupMetadata.participants : ''
   const groupAdmins = isGroup ? m.getGroupAdmins(groupMembers) : ''
   const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
   const isGroupAdmins = groupAdmins.includes(m.sender)
   const more = String.fromCharCode(8206);
   const readMore = more.repeat(4000);

    function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
   }
function randomNomor(min, max = null) {
		  if (max !== null) {
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min + 1)) + min;
		  } else {
			return Math.floor(Math.random() * min) + 1
		  }
		}
    let examlink = `*Example* : ${prefix + order } link\n*Penjelasan*\nSesuaikan sesuai link command\nMisal fitur ytmp4 jadi\n${prefix}ytmp4 https://youtu.be/hqpeOYBthow\nBegitu juga dengan link lainya`
    let examquery = `Example* : ${prefix + order } query\n\n*Penjelasan*\nquery itu adalah text yg diperlukan setelah command\nmisal fitur #play\ncontoh penggunaanya adalah #play judul / #play happier\nKirim perintah tanpa argument untuk melihat example lebih jelas`
    let examkosong = `Untuk command ini kamu hanya perlu mengetik ${prefix + order}`
    let examtag = `*Example* : ${prefix + order } lalu tag nomor seseorang`
    let examply = `*Example* : gunakan ${prefix + order} sekalian reply pesan bot`
    let examplyme = `Kirim Media lalu reply dengan ${prefix + order}`
    
   let LETT = 1;
   let head = `╭───╼[ ${Options.info.botName} ]╾──➲`
   let left = "│"
   let branch = "├"
   let bracketmenu = "┞─╼「"
   let F = "」"
   let A = "┟"
   let B = "┞"
   let stick = "╿"
   let tayime = "🕒 *Time:*"
   let runtz = "⏱️*Runtime:*"
   let taipye = "💻 *Type:*"
   let borderlist = "╭╾───────────────╼╮"
   let borderlistend = "╰╾───────────────╼╯"
   let opener = "╭─────────────────╮"
   let closing = "╰─────────────────╯"
   let headtqto = "╭╾─「 Thanks To✨ 」╾───╮"
   let endbordertqto = "╰╾───────────────╾╯"
   let end = "╰╾────────────────╼▢"
const MenuList = `
${head}
${left}${opener}
${left}${left}${tayime} ${time}         
${left}${closing} 
${left}${opener}
${left}${left}${m.sayingtime + m.timoji} 
${left}${left}${m.pushName}        
${left}${closing}
${left}${opener}
${left}${left}🪧 *Bot Name:* 
${left}${left}  ${Options.info.botName}
${left}${left}${taipye} Baileys-md
${left}${left}🩸 *Version:* ${Options.info.version} 
${left}${left}${runtz}    
${left}${left}  ${runtime(process.uptime())}          
${left}${closing} 
${left} ${readMore}
${left}${borderlist}
${left}${left} LIST MENU 📄        
${left}${borderlistend}
${bracketmenu} 📁️DEFAULT ${F}
${branch}${LETT++} ${prefix}menu
${branch}${LETT++} ${prefix}test
${branch}${LETT++} ${prefix}temp
${branch}${LETT++} ${prefix}listsection1
${branch}${LETT++} ${prefix}listsection2
${bracketmenu} ️DOWNLOADER ${F}
${branch}${LETT++} ${prefix}play _query_
${branch}${LETT++} ${prefix}lagu _query_
${branch}${LETT++} ${prefix}musik _query_
${branch}${LETT++} ${prefix}twitter _link_
${branch}${LETT++} ${prefix}tiktokvideo _link_
${branch}${LETT++} ${prefix}tiktokaudio _link_
${branch}${LETT++} ${prefix}instagramdownload _link_
${branch}${LETT++} ${prefix}instagramdl _link_
${branch}${LETT++} ${prefix}igdownload _link_
${branch}${LETT++} ${prefix}igdl link
${branch}${LETT++} ${prefix}youtubemp4 _link_
${branch}${LETT++} ${prefix}youtubemp3 _link_
${branch}${LETT++} ${prefix}mediafire _link_
${bracketmenu} 🖨️CONVERTER ${F}
${branch}${LETT++} ${prefix}toimg
${branch}${LETT++} ${prefix}tomp4
${branch}${LETT++} ${prefix}tomp3
${branch}${LETT++} ${prefix}togif
${branch}${LETT++} ${prefix}unduh
${branch}${LETT++} ${prefix}sticker
${bracketmenu} 🖥️BAILEYS DOCS ${F}
${branch}${LETT++} ${prefix}delete
${branch}${LETT++} ${prefix}del
${bracketmenu} 🏢GROUP ${F}
${branch}${LETT++} ${prefix}add
${branch}${LETT++} ${prefix}kick
${branch}${LETT++} ${prefix}promote
${branch}${LETT++} ${prefix}demote
${branch}${LETT++} ${prefix}antilink
${branch}${LETT++} ${prefix}afk
${branch}${LETT++} ${prefix}setnamegroup
${branch}${LETT++} ${prefix}setdesc
${branch}${LETT++} ${prefix}revoke
${branch}${LETT++} ${prefix}group <open/close>
${branch}${LETT++} ${prefix}hidetag
${bracketmenu} 🏞️RPG ${F}
${branch}${LETT++} ${prefix}berburu
${branch}${LETT++} ${prefix}mancing
${branch}${LETT++} ${prefix}menambang
${branch}${LETT++} ${prefix}mining
${branch}${LETT++} ${prefix}heal
${bracketmenu} 🖌️️TEXTPRO ${F}
${branch}${LETT++} ${prefix}sci_fi _text_
${branch}${LETT++} ${prefix}blackpink
${branch}${LETT++} ${prefix}lightglow
${branch}${LETT++} ${prefix}glass
${branch}${LETT++} ${prefix}hoorror_blood
${branch}${LETT++} ${prefix}sand
${branch}${LETT++} ${prefix}sketch
${branch}${LETT++} ${prefix}magma
${branch}${LETT++} ${prefix}batman
${branch}${LETT++} ${prefix}demon
${branch}${LETT++} ${prefix}sci_fi
${branch}${LETT++} ${prefix}ice
${branch}${LETT++} ${prefix}sea_metal
${branch}${LETT++} ${prefix}skeleton
${branch}${LETT++} ${prefix}transformer
${branch}${LETT++} ${prefix}warning
${branch}${LETT++} ${prefix}denim
${bracketmenu} ℹ️INFO ${F}
${branch}${LETT++} ${prefix}owner
${branch}${LETT++} ${prefix}runtime    
${branch}${LETT++} ${prefix}profile
${branch}${LETT++} ${prefix}inventori
${branch}${LETT++} ${prefix}leaderboard
${bracketmenu} 📺Internet ${F}
${branch}${LETT++} ${prefix}detiknews
${branch}${LETT++} ${prefix}wiki
${branch}${LETT++} ${prefix}wallpaperaccess
${branch}${LETT++} ${prefix}google
${branch}${LETT++} ${prefix}gempa
${branch}${LETT++} ${prefix}covidindo
${branch}${LETT++} ${prefix}jadwaltv
${branch}${LETT++} ${prefix}pinterest
${branch}${LETT++} ${prefix}lirik
${branch}${LETT++} ${prefix}brainly
${branch}${LETT++} ${prefix}playstore
${branch}${LETT++} ${prefix}webtoon
${branch}${LETT++} ${prefix}anime
${bracketmenu} Random Pict ${F}
${branch}${LETT++} ${prefix}waifu
${branch}${LETT++} ${prefix}awoo
${branch}${LETT++} ${prefix}shinobu
${branch}${LETT++} ${prefix}neko
${branch}${LETT++} ${prefix}megumin
${branch}${LETT++} ${prefix}couple
${branch}${LETT++} ${prefix}aesthetic
${bracketmenu} Sound 🔊 ${F}
${branch}${LETT++} ${prefix}sound1
${bracketmenu} 🃏Primbon ${F}
${branch}${LETT++} ${prefix}artinama
${bracketmenu} 🛐Islami ${F}
${branch}${LETT++} ${prefix}kisahnabi
${bracketmenu} AniManga ${F}
${branch}${LETT++} ${prefix}manga
${branch}${LETT++} ${prefix}chara
${branch}${LETT++} ${prefix}otakudesu
${bracketmenu} 💽Random Video ${F}
${branch}${LETT++} ${prefix}asupan
${branch}${LETT++} ${prefix}storywa
${bracketmenu} ⚙️ Stalker ${F}
${branch}${LETT++} ${prefix}igstalk
${bracketmenu} 🔌 Tools ${F}
${branch}${LETT++} ${prefix}tinyurl
${branch}${LETT++} ${prefix}cuttly
${branch}${LETT++} ${prefix}ceklokasi
${branch}${LETT++} ${prefix}luas-segitiga
${branch}${LETT++} ${prefix}kel-segitiga
${branch}${LETT++} ${prefix}luas-persegi
${branch}${LETT++} ${prefix}kel-persegi
${branch}${LETT++} ${prefix}kuadrat
${branch}${LETT++} ${prefix}kubik
${branch}${LETT++} ${prefix}perkalian
${bracketmenu} 🏓 Game ${F}
${branch}${LETT++} ${prefix}tebakgambar
${branch}${LETT++} ${prefix}kuismath
${branch}${LETT++} ${prefix}tebakkimia
${branch}${LETT++} ${prefix}asahotak
${branch}${LETT++} ${prefix}tebakkalimat
${branch}${LETT++} ${prefix}susunkata
${branch}${LETT++} ${prefix}caklontong
${branch}${LETT++} ${prefix}tekateki
${branch}${LETT++} ${prefix}tebakkabupaten
${branch}${LETT++} ${prefix}tebakanime
${branch}${LETT++} ${prefix}tebakbendera
${bracketmenu} 💻 Mutual/Cariteman ${F}
${branch}${LETT++} ${prefix}cariteman
${branch}${LETT++} ${prefix}next
${bracketmenu} 🐔 Owner ${F}
${branch}${LETT++} ${prefix}broadcast
${branch}${LETT++} ${prefix}resetlimit
${branch}${LETT++} >
${branch}${LETT++} =>
${branch}${LETT++} $
${left} 
${stick}${headtqto}
${left}${A} Ryananda
${left}${B} =
${left}${A} =
${left}${B} =
${left}${A} =
${stick}${borderlistend}
${end}
`
//Tambahin nama lu, GABISA RAKIT SC KAN?, Jangan claim ya bebih sc by thunder team
    
      
   //Participant Mention
   const mentionByTag = m.xtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
   const mentionByreply = m.xtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || "" : ""
       
   const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
   mention != undefined ? mention.push(mentionByreply) : []
   const mentionUser = mention != undefined ? mention.filter(n => n) : []    
   const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}
   const reply = async (teks) => {

   sock.sendMessage(from, 
        { text: teks, mentions: [m.sender] },
        { quoted : m })  
    }      
   
// Auto Read & Presence Online
sock.sendReadReceipt(from, m.sender, [m.key.id])
sock.sendPresenceUpdate('available', from)
let fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `Thunder-Multi`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;rifza;;;\nFN:rifza\nitem1.TEL;waid=6287708357324:6287708357324\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}               

sock.setStatus = (status) => {
        sock.query({
            tag: 'iq',
            attrs: {
                to: '@s.whatsapp.net',
                type: 'set',
                xmlns: 'status',
            },
            content: [{
                tag: 'status',
                attrs: {},
                content: Buffer.from(status, 'utf-8')
            }]
        })
        return status
    }

/*if (isCmd){
let uptime = await runtime(process.uptime())
await sock.setStatus(`ACTIVE DURING : ${runtime(process.uptime())} TYPE ${prefix}menu`) 
	}*/
	

   //function Afk
   const isAfkOn = afk.checkAfkUser(m.sender, _afk)    
     
   if (isGroup) {	
    for (let x of mentionUser) {
    if (afk.checkAfkUser(x, _afk) && !isCmd) {
    const getId = afk.getAfkId(x, _afk)
    const getReason = afk.getAfkReason(getId, _afk)
    const sejak = afk.getAfkSejak(getId, _afk) 
    const cptl = `*「 AFK MODE 」*\n\n*Sssttt! Orang itu sedang afk, harap jangan ganggu*\n*Alasan*  : ${getReason}\n*Sejak* : ${sejak}`
    if (m.key.fromMe){ return }
    reply(cptl)
    }
   }
   
   if (afk.checkAfkUser(m.sender, _afk) && !isCmd) {
    const pep = `*@${m.sender.split("@")[0]}* telah kembali dari AFK!\n\n*Selama* : ${clockString(new Date - afk.getAfkTime(m.sender, _afk))}`
    reply(pep)
    _afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
    fs.writeFileSync('./storage/user/afk.json', JSON.stringify(_afk))
    } 
   }

      var dates = moment().tz('Asia/Jakarta').format("YYYY-MM-DDTHH:mm:ss");
       var date = new Date(dates);
        var bulan1 = date.getMonth();
let getUserRandomId = () => {
 	return _registered[Math.floor(Math.random() * _registered.length)].id
 }
let addRegisterUser = (userid, sender) => {
	let obj = { id: userid, name: sender }
	_registered.push(obj)
	fs.writeFileSync('./storage/user/registered.json', JSON.stringify(_registered))
	}
let createSerial = (size) => {
	return crypto.randomBytes(size).toString('hex').slice(0, size)
	}
let cekUser = (sender) => {
	let status = false
	Object.keys(_registered).forEach((i) => {
		if (_registered[i].id === sender) {
			status = true
			}
			})
			return status
			}
let isUser = cekUser(sender)
   //function rpg
   const { 
     addInventoriDarah, 
      cekDuluJoinAdaApaKagaDiJson, 
      addDarah, 
      kurangDarah, 
     getDarah 
   }  = require('../../storage/user/darah.js')
   const { 
     cekInventoryAdaAtauGak, 
      addInventori,  
       addBesi, 
       addEmas, 
       addEmerald,
       addUmpan,
       addPotion,
       kurangBesi, 
       kurangEmas, 
       kurangEmerald, 
       kurangUmpan,
       kurangPotion,
       getBesi, 
      getEmas, 
     getEmerald,
     getUmpan,
    getPotion
   } = require('../../storage/user/alat_tukar.js')
   const { 
    addInventoriMonay, 
    cekDuluJoinAdaApaKagaMonaynyaDiJson, 
    addMonay, 
    kurangMonay, 
   getMonay 
   } = require('../../storage/user/monay.js')
   const { 
    addInventoriLimit, 
    cekDuluJoinAdaApaKagaLimitnyaDiJson, 
    addLimit, 
    kurangLimit, 
    getLimit 
   } = require('../../storage/user/limit.js')
   const { 
    cekDuluHasilBuruanNya, 
     addInventoriBuruan, 
     addIkan,
      addAyam, 
      addKelinci, 
      addDomba, 
      addSapi,
      addGajah,
      kurangIkan,
      kurangAyam, 
      kurangKelinci, 
      kurangDomba, 
      kurangSapi,
      kurangGajah,
      getIkan,
      getAyam, 
      getKelinci, 
      getDomba,
     getSapi,
    getGajah
   } = require('../../storage/user/buruan.js')
   let DarahAwal =  Options.rpg.darahawal
   const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)   
   const isCekDarah = getDarah(m.sender)
   const isUmpan = getUmpan(m.sender)
   const isPotion = getPotion(m.sender)
   const isIkan = getIkan(m.sender)
   const isAyam = getAyam(m.sender)
   const isKelinci = getKelinci(m.sender)
   const isDomba = getDomba(m.sender)
   const isSapi = getSapi(m.sender)
   const isGajah = getGajah(m.sender)
   const isMonay = getMonay(m.sender)
   const isLimit = getLimit(m.sender)
   const isBesi = getBesi(m.sender)
   const isEmas = getEmas(m.sender)
   const isEmerald = getEmerald(m.sender)
   const isInventory = cekInventoryAdaAtauGak(m.sender)
   const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
   const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
   const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
   const ikan = ['🐟','🐠','🐡']     
 // Game
cekWaktuGame(sock, tebakgambar)
if (isPlayGame(from, tebakgambar)) {
if (chats.toLowerCase() == getJawabanGame(from, tebakgambar)) {
if (!isInventoryMonay){ addInventoriMonay(m.sender) }
var htgm = randomNomor(100, 150)
addMonay(m.sender, htgm)
const sections = [ { title: "Game", rows: [ { title: "Kuis Math", rowId: "#math", description: "Kuis Matematika"},{title: "Tebak Gambar", rowId: "#tebakgambar", description: "Game Tebak Gambar"},{title: "Tebak Kimia", rowId: "#tebakkimia", description: "Game Tebak Kimia"},{title: "Asah Otak", rowId: "#asahotak", description: "Game Asahotak"}, {title: "Susun Kata", rowId: "#susunkata", description: "Game Susunkata"},{title: "Tebak Kalimat", rowId: "#tebakkalimat", description: "Game Tebak Kalimat"}, {title: "Teka Teki", rowId: "#tekateki", description: "Teka Teki"},{title: "Cak Lontong", rowId: "#caklontong", description: "Game Cak Lontong"}, { title: "Tebak Anime", rowId: "#tebakanime", description: "Game Tebak Anime"}, {title: "Tebak Kabupaten", rowId: "#tebakkabupaten", description: "Game Tebak Kabupaten"}, {title: "Tebak Bendera", rowId: "#tebakbendera", description: "Game Tebak Bendera"}, {title: "Tebak Lagu", rowId: "#tebaklagu", description: "Game Tebak Lagu"}, {title: "Tebak Lirik", rowId: "#tebaklirik", description: "Game Tebak Lirik"}, ]}    ]
const listMessage = {text: "Deffbotz Game",footer: `Selamat jawaban kamu benar🥳🎉\n\n[🎁]Kamu mendapatkan hadiah sebanyak ${htgm} monay\n\nTotal monay kamu: ${getMonay(m.sender)}`, title: "List Game",buttonText: "Play Again",sections}
const sendm =  sock.sendMessage( from, listMessage, {quoted :m })
tebakgambar.splice(getGamePosi(from, tebakgambar), 1)
}
}
if (_math.hasOwnProperty(m.sender.split('@')[0]) && !isCmd && !m.key.fromMe) {
let jawaban = _math[m.sender.split('@')[0]].jawaban
if (!isInventoryMonay){ addInventoriMonay(m.sender) }
if (chatmessage.toLowerCase() == jawaban) {
addMonay(_math[m.sender.split('@')[0]].user, _math[m.sender.split('@')[0]].monay)
const sections = [ { title: "Game", rows: [ { title: "Kuis Math", rowId: "#math", description: "Kuis Matematika"},{title: "Tebak Gambar", rowId: "#tebakgambar", description: "Game Tebak Gambar"},{title: "Tebak Kimia", rowId: "#tebakkimia", description: "Game Tebak Kimia"},{title: "Asah Otak", rowId: "#asahotak", description: "Game Asahotak"}, {title: "Susun Kata", rowId: "#susunkata", description: "Game Susunkata"},{title: "Tebak Kalimat", rowId: "#tebakkalimat", description: "Game Tebak Kalimat"}, {title: "Teka Teki", rowId: "#tekateki", description: "Teka Teki"},{title: "Cak Lontong", rowId: "#caklontong", description: "Game Cak Lontong"}, { title: "Tebak Anime", rowId: "#tebakanime", description: "Game Tebak Anime"}, {title: "Tebak Kabupaten", rowId: "#tebakkabupaten", description: "Game Tebak Kabupaten"}, {title: "Tebak Bendera", rowId: "#tebakbendera", description: "Game Tebak Bendera"}, {title: "Tebak Lagu", rowId: "#tebaklagu", description: "Game Tebak Lagu"}, {title: "Tebak Lirik", rowId: "#tebaklirik", description: "Game Tebak Lirik"}, ]}    ]
const listMessage = {text: "Deffbotz Game",footer: `Selamat jawaban kamu benar🥳🎉\n\n[🎁]Kamu mendapatkan hadiah sebanyak ${_math[m.sender.split('@')[0]].monay} monay\n\nTotal monay kamu: ${getMonay(m.sender)}`, title: "List Game",buttonText: "Play Again",sections}
const sendm =  sock.sendMessage( from, listMessage, {quoted :m })
delete _math[m.sender.split('@')[0]]
fs.writeFileSync("./storage/user/math.json", JSON.stringify(_math))
} else {
reply("Jawaban Salah!")
}
} 
if (_tbkkimia.hasOwnProperty(m.sender.split('@')[0]) && !isCmd && !m.key.fromMe) {
let jawaban = _tbkkimia[m.sender.split('@')[0]].jawaban
if (!isInventoryMonay){ addInventoriMonay(m.sender) }
if (chatmessage.toLowerCase() == jawaban) {
addMonay(_tbkkimia[m.sender.split('@')[0]].user, _tbkkimia[m.sender.split('@')[0]].monay)
const sections = [ { title: "Game", rows: [ { title: "Kuis Math", rowId: "#math", description: "Kuis Matematika"},{title: "Tebak Gambar", rowId: "#tebakgambar", description: "Game Tebak Gambar"},{title: "Tebak Kimia", rowId: "#tebakkimia", description: "Game Tebak Kimia"},{title: "Asah Otak", rowId: "#asahotak", description: "Game Asahotak"}, {title: "Susun Kata", rowId: "#susunkata", description: "Game Susunkata"},{title: "Tebak Kalimat", rowId: "#tebakkalimat", description: "Game Tebak Kalimat"}, {title: "Teka Teki", rowId: "#tekateki", description: "Teka Teki"},{title: "Cak Lontong", rowId: "#caklontong", description: "Game Cak Lontong"}, { title: "Tebak Anime", rowId: "#tebakanime", description: "Game Tebak Anime"}, {title: "Tebak Kabupaten", rowId: "#tebakkabupaten", description: "Game Tebak Kabupaten"}, {title: "Tebak Bendera", rowId: "#tebakbendera", description: "Game Tebak Bendera"}, {title: "Tebak Lagu", rowId: "#tebaklagu", description: "Game Tebak Lagu"}, {title: "Tebak Lirik", rowId: "#tebaklirik", description: "Game Tebak Lirik"}, ]}    ]
const listMessage = {text: "Deffbotz Game",footer: `Selamat jawaban kamu benar🥳🎉\n\n[🎁]Kamu mendapatkan hadiah sebanyak ${_tbkkimia[m.sender.split('@')[0]].monay} monay\n\nTotal monay kamu: ${getMonay(m.sender)}`, title: "List Game",buttonText: "Play Again",sections}
const sendm =  sock.sendMessage( from, listMessage, {quoted :m })
delete _tbkkimia[m.sender.split('@')[0]]
fs.writeFileSync("./storage/user/tebakkimia.json", JSON.stringify(_tbkkimia))
} else {
reply("Jawaban Salah!")
}
}
if (_asahotak.hasOwnProperty(m.sender.split('@')[0]) && !isCmd && !m.key.fromMe) {
let jawaban = _asahotak[m.sender.split('@')[0]].jawaban
if (!isInventoryMonay){ addInventoriMonay(m.sender) }
if (chatmessage.toLowerCase() == jawaban) {
addMonay(_asahotak[m.sender.split('@')[0]].user, _asahotak[m.sender.split('@')[0]].monay)
const sections = [ { title: "Game", rows: [ { title: "Kuis Math", rowId: "#math", description: "Kuis Matematika"},{title: "Tebak Gambar", rowId: "#tebakgambar", description: "Game Tebak Gambar"},{title: "Tebak Kimia", rowId: "#tebakkimia", description: "Game Tebak Kimia"},{title: "Asah Otak", rowId: "#asahotak", description: "Game Asahotak"}, {title: "Susun Kata", rowId: "#susunkata", description: "Game Susunkata"},{title: "Tebak Kalimat", rowId: "#tebakkalimat", description: "Game Tebak Kalimat"}, {title: "Teka Teki", rowId: "#tekateki", description: "Teka Teki"},{title: "Cak Lontong", rowId: "#caklontong", description: "Game Cak Lontong"}, { title: "Tebak Anime", rowId: "#tebakanime", description: "Game Tebak Anime"}, {title: "Tebak Kabupaten", rowId: "#tebakkabupaten", description: "Game Tebak Kabupaten"}, {title: "Tebak Bendera", rowId: "#tebakbendera", description: "Game Tebak Bendera"}, {title: "Tebak Lagu", rowId: "#tebaklagu", description: "Game Tebak Lagu"}, {title: "Tebak Lirik", rowId: "#tebaklirik", description: "Game Tebak Lirik"}, ]}    ]
const listMessage = {text: "Deffbotz Game",footer: `Selamat jawaban kamu benar🥳🎉\n\n[🎁]Kamu mendapatkan hadiah sebanyak ${_asahotak[m.sender.split('@')[0]].monay} monay\n\nTotal monay kamu: ${getMonay(m.sender)}`, title: "List Game",buttonText: "Play Again",sections}
const sendm =  sock.sendMessage( from, listMessage, {quoted :m })
delete _asahotak[m.sender.split('@')[0]]
fs.writeFileSync("./storage/user/asahotak.json", JSON.stringify(_asahotak))
} else {
reply("Jawaban Salah!")
}
}
if (_susunkata.hasOwnProperty(m.sender.split('@')[0]) && !isCmd && !m.key.fromMe) {
let jawaban = _susunkata[m.sender.split('@')[0]].jawaban
if (!isInventoryMonay){ addInventoriMonay(m.sender) }
if (chatmessage.toLowerCase() == jawaban) {
addMonay(_susunkata[m.sender.split('@')[0]].user, _susunkata[m.sender.split('@')[0]].monay)
const sections = [ { title: "Game", rows: [ { title: "Kuis Math", rowId: "#math", description: "Kuis Matematika"},{title: "Tebak Gambar", rowId: "#tebakgambar", description: "Game Tebak Gambar"},{title: "Tebak Kimia", rowId: "#tebakkimia", description: "Game Tebak Kimia"},{title: "Asah Otak", rowId: "#asahotak", description: "Game Asahotak"}, {title: "Susun Kata", rowId: "#susunkata", description: "Game Susunkata"},{title: "Tebak Kalimat", rowId: "#tebakkalimat", description: "Game Tebak Kalimat"}, {title: "Teka Teki", rowId: "#tekateki", description: "Teka Teki"},{title: "Cak Lontong", rowId: "#caklontong", description: "Game Cak Lontong"}, { title: "Tebak Anime", rowId: "#tebakanime", description: "Game Tebak Anime"}, {title: "Tebak Kabupaten", rowId: "#tebakkabupaten", description: "Game Tebak Kabupaten"}, {title: "Tebak Bendera", rowId: "#tebakbendera", description: "Game Tebak Bendera"}, {title: "Tebak Lagu", rowId: "#tebaklagu", description: "Game Tebak Lagu"}, {title: "Tebak Lirik", rowId: "#tebaklirik", description: "Game Tebak Lirik"}, ]}    ]
const listMessage = {text: "Deffbotz Game",footer: `Selamat jawaban kamu benar🥳🎉\n\n[🎁]Kamu mendapatkan hadiah sebanyak ${_susunkata[m.sender.split('@')[0]].monay} monay\n\nTotal monay kamu: ${getMonay(m.sender)}`, title: "List Game",buttonText: "Play Again",sections}
const sendm =  sock.sendMessage( from, listMessage, {quoted :m })
delete _susunkata[m.sender.split('@')[0]]
fs.writeFileSync("./storage/user/susunkata.json", JSON.stringify(_susunkata))
} else {
reply("Jawaban Salah!")
}
}
if (_tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && !isCmd && !m.key.fromMe) {
let jawaban = _tebakkalimat[m.sender.split('@')[0]].jawaban
if (!isInventoryMonay){ addInventoriMonay(m.sender) }
if (chatmessage.toLowerCase() == jawaban) {
addMonay(_tebakkalimat[m.sender.split('@')[0]].user, _tebakkalimat[m.sender.split('@')[0]].monay)
const sections = [ { title: "Game", rows: [ { title: "Kuis Math", rowId: "#math", description: "Kuis Matematika"},{title: "Tebak Gambar", rowId: "#tebakgambar", description: "Game Tebak Gambar"},{title: "Tebak Kimia", rowId: "#tebakkimia", description: "Game Tebak Kimia"},{title: "Asah Otak", rowId: "#asahotak", description: "Game Asahotak"}, {title: "Susun Kata", rowId: "#susunkata", description: "Game Susunkata"},{title: "Tebak Kalimat", rowId: "#tebakkalimat", description: "Game Tebak Kalimat"}, {title: "Teka Teki", rowId: "#tekateki", description: "Teka Teki"},{title: "Cak Lontong", rowId: "#caklontong", description: "Game Cak Lontong"}, { title: "Tebak Anime", rowId: "#tebakanime", description: "Game Tebak Anime"}, {title: "Tebak Kabupaten", rowId: "#tebakkabupaten", description: "Game Tebak Kabupaten"}, {title: "Tebak Bendera", rowId: "#tebakbendera", description: "Game Tebak Bendera"}, {title: "Tebak Lagu", rowId: "#tebaklagu", description: "Game Tebak Lagu"}, {title: "Tebak Lirik", rowId: "#tebaklirik", description: "Game Tebak Lirik"}, ]}    ]
const listMessage = {text: "Deffbotz Game",footer: `Selamat jawaban kamu benar🥳🎉\n\n[🎁]Kamu mendapatkan hadiah sebanyak ${_tebakkalimat[m.sender.split('@')[0]].monay} monay\n\nTotal monay kamu: ${getMonay(m.sender)}`, title: "List Game",buttonText: "Play Again",sections}
const sendm =  sock.sendMessage( from, listMessage, {quoted :m })
delete _tebakkalimat[m.sender.split('@')[0]]
fs.writeFileSync("./storage/user/tebakkalimat.json", JSON.stringify(_tebakkalimat))
} else {
reply("Jawaban Salah!")
}
}
if (_tekateki.hasOwnProperty(m.sender.split('@')[0]) && !isCmd && !m.key.fromMe) {
let jawaban = _tekateki[m.sender.split('@')[0]].jawaban
if (!isInventoryMonay){ addInventoriMonay(m.sender) }
if (chatmessage.toLowerCase() == jawaban) {
addMonay(_tekateki[m.sender.split('@')[0]].user, _tekateki[m.sender.split('@')[0]].monay)
const sections = [ { title: "Game", rows: [ { title: "Kuis Math", rowId: "#math", description: "Kuis Matematika"},{title: "Tebak Gambar", rowId: "#tebakgambar", description: "Game Tebak Gambar"},{title: "Tebak Kimia", rowId: "#tebakkimia", description: "Game Tebak Kimia"},{title: "Asah Otak", rowId: "#asahotak", description: "Game Asahotak"}, {title: "Susun Kata", rowId: "#susunkata", description: "Game Susunkata"},{title: "Tebak Kalimat", rowId: "#tebakkalimat", description: "Game Tebak Kalimat"}, {title: "Teka Teki", rowId: "#tekateki", description: "Teka Teki"},{title: "Cak Lontong", rowId: "#caklontong", description: "Game Cak Lontong"}, { title: "Tebak Anime", rowId: "#tebakanime", description: "Game Tebak Anime"}, {title: "Tebak Kabupaten", rowId: "#tebakkabupaten", description: "Game Tebak Kabupaten"}, {title: "Tebak Bendera", rowId: "#tebakbendera", description: "Game Tebak Bendera"}, {title: "Tebak Lagu", rowId: "#tebaklagu", description: "Game Tebak Lagu"}, {title: "Tebak Lirik", rowId: "#tebaklirik", description: "Game Tebak Lirik"}, ]}    ]
const listMessage = {text: "Deffbotz Game",footer: `Selamat jawaban kamu benar🥳🎉\n\n[🎁]Kamu mendapatkan hadiah sebanyak ${_tekateki[m.sender.split('@')[0]].monay} monay\n\nTotal monay kamu: ${getMonay(m.sender)}`, title: "List Game",buttonText: "Play Again",sections}
const sendm =  sock.sendMessage( from, listMessage, {quoted :m })
delete _tekateki[m.sender.split('@')[0]]
fs.writeFileSync("./storage/user/tekateki.json", JSON.stringify(_tekateki))
} else {
reply("Jawaban Salah!")
}
}
if (_caklontong.hasOwnProperty(m.sender.split('@')[0]) && !isCmd && !m.key.fromMe) {
let jawaban = _caklontong[m.sender.split('@')[0]].jawaban
if (!isInventoryMonay){ addInventoriMonay(m.sender) }
if (chatmessage.toLowerCase() == jawaban) {
addMonay(_caklontong[m.sender.split('@')[0]].user, _caklontong[m.sender.split('@')[0]].monay)
const sections = [ { title: "Game", rows: [ { title: "Kuis Math", rowId: "#math", description: "Kuis Matematika"},{title: "Tebak Gambar", rowId: "#tebakgambar", description: "Game Tebak Gambar"},{title: "Tebak Kimia", rowId: "#tebakkimia", description: "Game Tebak Kimia"},{title: "Asah Otak", rowId: "#asahotak", description: "Game Asahotak"}, {title: "Susun Kata", rowId: "#susunkata", description: "Game Susunkata"},{title: "Tebak Kalimat", rowId: "#tebakkalimat", description: "Game Tebak Kalimat"}, {title: "Teka Teki", rowId: "#tekateki", description: "Teka Teki"},{title: "Cak Lontong", rowId: "#caklontong", description: "Game Cak Lontong"}, { title: "Tebak Anime", rowId: "#tebakanime", description: "Game Tebak Anime"}, {title: "Tebak Kabupaten", rowId: "#tebakkabupaten", description: "Game Tebak Kabupaten"}, {title: "Tebak Bendera", rowId: "#tebakbendera", description: "Game Tebak Bendera"}, {title: "Tebak Lagu", rowId: "#tebaklagu", description: "Game Tebak Lagu"}, {title: "Tebak Lirik", rowId: "#tebaklirik", description: "Game Tebak Lirik"}, ]}    ]
const listMessage = {text: "Deffbotz Game",footer: `Selamat jawaban kamu benar🥳🎉\n\n[🎁]Kamu mendapatkan hadiah sebanyak ${_caklontong[m.sender.split('@')[0]].monay} monay\n\nTotal monay kamu: ${getMonay(m.sender)}`, title: "List Game",buttonText: "Play Again",sections}
const sendm =  sock.sendMessage( from, listMessage, {quoted :m })
delete _caklontong[m.sender.split('@')[0]]
fs.writeFileSync("./storage/user/caklontong.json", JSON.stringify(_caklontong))
} else {
reply("Jawaban Salah!")
}
}
if (_tebakbendera.hasOwnProperty(m.sender.split('@')[0]) && !isCmd && !m.key.fromMe) {
let jawaban = _tebakbendera[m.sender.split('@')[0]].jawaban
if (!isInventoryMonay){ addInventoriMonay(m.sender) }
if (chatmessage.toLowerCase() == jawaban) {
addMonay(_tebakbendera[m.sender.split('@')[0]].user, _tebakbendera[m.sender.split('@')[0]].monay)
const sections = [ { title: "Game", rows: [ { title: "Kuis Math", rowId: "#math", description: "Kuis Matematika"},{title: "Tebak Gambar", rowId: "#tebakgambar", description: "Game Tebak Gambar"},{title: "Tebak Kimia", rowId: "#tebakkimia", description: "Game Tebak Kimia"},{title: "Asah Otak", rowId: "#asahotak", description: "Game Asahotak"}, {title: "Susun Kata", rowId: "#susunkata", description: "Game Susunkata"},{title: "Tebak Kalimat", rowId: "#tebakkalimat", description: "Game Tebak Kalimat"}, {title: "Teka Teki", rowId: "#tekateki", description: "Teka Teki"},{title: "Cak Lontong", rowId: "#caklontong", description: "Game Cak Lontong"}, { title: "Tebak Anime", rowId: "#tebakanime", description: "Game Tebak Anime"}, {title: "Tebak Kabupaten", rowId: "#tebakkabupaten", description: "Game Tebak Kabupaten"}, {title: "Tebak Bendera", rowId: "#tebakbendera", description: "Game Tebak Bendera"}, {title: "Tebak Lagu", rowId: "#tebaklagu", description: "Game Tebak Lagu"}, {title: "Tebak Lirik", rowId: "#tebaklirik", description: "Game Tebak Lirik"}, ]}    ]
const listMessage = {
text: "Deffbotz Game",
footer: `Selamat jawaban kamu benar🥳🎉\n\n[🎁]Kamu mendapatkan hadiah sebanyak ${_tebakbendera[m.sender.split('@')[0]].monay} monay\n\nTotal monay kamu: ${getMonay(m.sender)}`, 
title: "List Game",
buttonText: "Play Again",
sections
}
const sendm =  sock.sendMessage( from, listMessage, {quoted :m })
delete _tebakbendera[m.sender.split('@')[0]]
fs.writeFileSync("./storage/user/tebakbendera.json", JSON.stringify(_tebakbendera))
} else {
reply("Jawaban Salah!")
}
}
if (_tebakanime.hasOwnProperty(m.sender.split('@')[0]) && !isCmd && !m.key.fromMe) {
let jawaban = _tebakanime[m.sender.split('@')[0]].jawaban
if (!isInventoryMonay){ addInventoriMonay(m.sender) }
if (chatmessage.toLowerCase() == jawaban) {
addMonay(_tebakanime[m.sender.split('@')[0]].user, _tebakanime[m.sender.split('@')[0]].monay)
const sections = [ { title: "Game", rows: [ { title: "Kuis Math", rowId: "#math", description: "Kuis Matematika"},{title: "Tebak Gambar", rowId: "#tebakgambar", description: "Game Tebak Gambar"},{title: "Tebak Kimia", rowId: "#tebakkimia", description: "Game Tebak Kimia"},{title: "Asah Otak", rowId: "#asahotak", description: "Game Asahotak"}, {title: "Susun Kata", rowId: "#susunkata", description: "Game Susunkata"},{title: "Tebak Kalimat", rowId: "#tebakkalimat", description: "Game Tebak Kalimat"}, {title: "Teka Teki", rowId: "#tekateki", description: "Teka Teki"},{title: "Cak Lontong", rowId: "#caklontong", description: "Game Cak Lontong"}, { title: "Tebak Anime", rowId: "#tebakanime", description: "Game Tebak Anime"}, {title: "Tebak Kabupaten", rowId: "#tebakkabupaten", description: "Game Tebak Kabupaten"}, {title: "Tebak Bendera", rowId: "#tebakbendera", description: "Game Tebak Bendera"}, {title: "Tebak Lagu", rowId: "#tebaklagu", description: "Game Tebak Lagu"}, {title: "Tebak Lirik", rowId: "#tebaklirik", description: "Game Tebak Lirik"}, ]}    ]
const listMessage = {text: "Deffbotz Game",footer: `Selamat jawaban kamu benar🥳🎉\n\n[🎁]Kamu mendapatkan hadiah sebanyak ${_tebakanime[m.sender.split('@')[0]].monay} monay\n\nTotal monay kamu: ${getMonay(m.sender)}`, title: "List Game",buttonText: "Play Again",sections
   }
const sendm =  sock.sendMessage( from, listMessage, {quoted :m })
delete _tebakanime[m.sender.split('@')[0]]
fs.writeFileSync("./storage/user/tebakanime.json", JSON.stringify(_tebakanime))
} else {
reply("Jawaban Salah!")
}
}
if (_tebakkabupaten.hasOwnProperty(m.sender.split('@')[0]) && !isCmd && !m.key.fromMe) {
let jawaban = _tebakkabupaten[m.sender.split('@')[0]].jawaban
if (!isInventoryMonay){ addInventoriMonay(m.sender) }
if (chatmessage.toLowerCase() == jawaban) {
addMonay(_tebakkabupaten[m.sender.split('@')[0]].user, _tebakkabupaten[m.sender.split('@')[0]].monay)
const sections = [ { title: "Game", rows: [ { title: "Kuis Math", rowId: "#math", description: "Kuis Matematika"},{title: "Tebak Gambar", rowId: "#tebakgambar", description: "Game Tebak Gambar"},{title: "Tebak Kimia", rowId: "#tebakkimia", description: "Game Tebak Kimia"},{title: "Asah Otak", rowId: "#asahotak", description: "Game Asahotak"}, {title: "Susun Kata", rowId: "#susunkata", description: "Game Susunkata"},{title: "Tebak Kalimat", rowId: "#tebakkalimat", description: "Game Tebak Kalimat"}, {title: "Teka Teki", rowId: "#tekateki", description: "Teka Teki"},{title: "Cak Lontong", rowId: "#caklontong", description: "Game Cak Lontong"}, { title: "Tebak Anime", rowId: "#tebakanime", description: "Game Tebak Anime"}, {title: "Tebak Kabupaten", rowId: "#tebakkabupaten", description: "Game Tebak Kabupaten"}, {title: "Tebak Bendera", rowId: "#tebakbendera", description: "Game Tebak Bendera"}, {title: "Tebak Lagu", rowId: "#tebaklagu", description: "Game Tebak Lagu"}, {title: "Tebak Lirik", rowId: "#tebaklirik", description: "Game Tebak Lirik"}, ]}    ]
const listMessage = {text: "Deffbotz Game",footer: `Selamat jawaban kamu benar🥳🎉\n\n[🎁]Kamu mendapatkan hadiah sebanyak ${_tebakkabupaten[m.sender.split('@')[0]].monay} monay\n\nTotal monay kamu: ${getMonay(m.sender)}`, title: "List Game",buttonText: "Play Again",sections}
const sendm =  sock.sendMessage( from, listMessage, {quoted :m })
delete _tebakkabupaten[m.sender.split('@')[0]]
fs.writeFileSync("./storage/user/tebakkabupaten.json", JSON.stringify(_tebakkabupaten))
} else {
reply("Jawaban Salah!")
}
}
if (_tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && !isCmd && !m.key.fromMe) {
let jawaban = _tebaklirik[m.sender.split('@')[0]].jawaban
if (!isInventoryMonay){ addInventoriMonay(m.sender) }
if (chatmessage.toLowerCase() == jawaban) {
addMonay(_tebaklirik[m.sender.split('@')[0]].user, _tebaklirik[m.sender.split('@')[0]].monay)
const sections = [ { title: "Game", rows: [ { title: "Kuis Math", rowId: "#math", description: "Kuis Matematika"},{title: "Tebak Gambar", rowId: "#tebakgambar", description: "Game Tebak Gambar"},{title: "Tebak Kimia", rowId: "#tebakkimia", description: "Game Tebak Kimia"},{title: "Asah Otak", rowId: "#asahotak", description: "Game Asahotak"}, {title: "Susun Kata", rowId: "#susunkata", description: "Game Susunkata"},{title: "Tebak Kalimat", rowId: "#tebakkalimat", description: "Game Tebak Kalimat"}, {title: "Teka Teki", rowId: "#tekateki", description: "Teka Teki"},{title: "Cak Lontong", rowId: "#caklontong", description: "Game Cak Lontong"}, { title: "Tebak Anime", rowId: "#tebakanime", description: "Game Tebak Anime"}, {title: "Tebak Kabupaten", rowId: "#tebakkabupaten", description: "Game Tebak Kabupaten"}, {title: "Tebak Bendera", rowId: "#tebakbendera", description: "Game Tebak Bendera"}, {title: "Tebak Lagu", rowId: "#tebaklagu", description: "Game Tebak Lagu"}, {title: "Tebak Lirik", rowId: "#tebaklirik", description: "Game Tebak Lirik"}, ]}    ]
const listMessage = {text: "Deffbotz Game",footer: `Selamat jawaban kamu benar🥳🎉\n\n[🎁]Kamu mendapatkan hadiah sebanyak ${_tebaklirik[m.sender.split('@')[0]].monay} monay\n\nTotal monay kamu: ${getMonay(m.sender)}`, title: "List Game",buttonText: "Play Again",sections}
const sendm =  sock.sendMessage( from, listMessage, {quoted :m })
delete _tebaklirik[m.sender.split('@')[0]]
fs.writeFileSync("./storage/user/tebaklirik.json", JSON.stringify(_tebaklirik))
} else {
reply("Jawaban Salah!")
}
}
if (_tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && !isCmd && !m.key.fromMe) {
let jawaban = _tebaklagu[m.sender.split('@')[0]].jawaban
if (!isInventoryMonay){ addInventoriMonay(m.sender) }
if (chatmessage.toLowerCase() == jawaban) {
addMonay(_tebaklagu[m.sender.split('@')[0]].user, _tebaklagu[m.sender.split('@')[0]].monay)
const sections = [ { title: "Game", rows: [ { title: "Kuis Math", rowId: "#math", description: "Kuis Matematika"},{title: "Tebak Gambar", rowId: "#tebakgambar", description: "Game Tebak Gambar"},{title: "Tebak Kimia", rowId: "#tebakkimia", description: "Game Tebak Kimia"},{title: "Asah Otak", rowId: "#asahotak", description: "Game Asahotak"}, {title: "Susun Kata", rowId: "#susunkata", description: "Game Susunkata"},{title: "Tebak Kalimat", rowId: "#tebakkalimat", description: "Game Tebak Kalimat"}, {title: "Teka Teki", rowId: "#tekateki", description: "Teka Teki"},{title: "Cak Lontong", rowId: "#caklontong", description: "Game Cak Lontong"}, { title: "Tebak Anime", rowId: "#tebakanime", description: "Game Tebak Anime"}, {title: "Tebak Kabupaten", rowId: "#tebakkabupaten", description: "Game Tebak Kabupaten"}, {title: "Tebak Bendera", rowId: "#tebakbendera", description: "Game Tebak Bendera"}, {title: "Tebak Lagu", rowId: "#tebaklagu", description: "Game Tebak Lagu"}, {title: "Tebak Lirik", rowId: "#tebaklirik", description: "Game Tebak Lirik"}, ]}    ]
const listMessage = {text: "Deffbotz Game",footer: `Selamat jawaban kamu benar🥳🎉\n\n[🎁]Kamu mendapatkan hadiah sebanyak ${_tebaklagu[m.sender.split('@')[0]].monay} monay\n\nTotal monay kamu: ${getMonay(m.sender)}`, title: "List Game",buttonText: "Play Again",sections}
const sendm =  sock.sendMessage( from, listMessage, {quoted :m })
delete _tebaklagu[m.sender.split('@')[0]]
fs.writeFileSync("./storage/user/tebaklagu.json", JSON.stringify(_tebaklagu))
} else {
reply("Jawaban Salah!")
}
}
  //Auto reset
  //Jika bot on di jam 24.00 maka limit dan darah bakal reset
  //Kalo off yaa kaga, Harus tunggu besok :v
    cron.schedule('0 0 * * *', () => {
     const reset = []
     _darahOrg = reset
     console.log('Darah di reset')
     fs.writeFileSync('./storage/user/darah.json', JSON.stringify(_darahOrg))
     console.log('Success!')
     }, 
     {
      scheduled: true,
      timezone: 'Asia/Jakarta'
     }
   )  
     cron.schedule('0 0 * * *', () => {
     const reset = []
     _limit = reset
     console.log('Limit Di reset')
     fs.writeFileSync('./storage/user/limit.json', JSON.stringify(_limit))
     console.log('Success!')
    }, 
    {
      scheduled: true,
      timezone: 'Asia/Jakarta'
     }
    ) 
      if (chatmessage.includes(`assalamualaikum`) || chatmessage.includes(`Asalamu'alaikum`) || chatmessage.includes(`Assalamualaikum`) || chatmessage.includes(`Asalamualaikum`) || chatmessage.includes(`asalamu'alaikum`) || chatmessage.includes(`assalamu'alaikum`) || chatmessage.includes(`Assalamu'alaikum`) || chatmessage.includes(`Assalamu'alaikum`) || chatmessage.includes(`asalamualaikum`) || chatmessage.includes(`asalamu'alaikum`)) {
       
        sock.sendMessage(from, 
        { text: 'Waalaikumsalam' }, 
        { quoted : m })  

       }    
    if (chatmessage.includes(`kontol`) || chatmessage.includes(`Kontol`)){
       sock.sendMessage(from, 
        { text: '🗿' }, 
        { quoted : m })  

       } 
         if (isAntiLink) 
if (chatmessage.includes('https://chat.whatsapp.com')) {
               if (!m.key.fromMe) {
   if (isGroupAdmins) return reply('Untung Admin') 
               reply('Antilink\nKamu akan di kick')
             let number = m.sender
               await sock.groupParticipantsUpdate(from, [number], 'remove')
               }
	  }	
	  
    if (chatmessage.startsWith("> ") && isOwner) {
	   console.log('\x1b[1;34m~\x1b[1;37m>', '[\x1b[1;33mEVAL\x1b[1;37m]', time, color(`Action from the owner`, 'cyan'))
		const ev = (val) => {
        var pekok = JSON.stringify(val, null, 2)
        var nyir = util.format(pekok)
        if (pekok === undefined) {
        nyir = util.format(val)
}
        return reply(nyir)
}
        try {
        reply(util.format(eval(`;(async () => { ${chatmessage.slice(2)} })()`)))
        } catch (e) {
        reply(util.format(e))
        }
	    } 
	   else 
	    if (chatmessage.startsWith("$ ") && isOwner) {
        console.log('\x1b[1;34m~\x1b[1;37m>', '[\x1b[1;33mEXEC\x1b[1;37m]', time, color(`Action from the owner`, 'cyan'))
        exec(chatmessage.slice(2), (err, stdout) => {
	    if (err) return reply(`${err}`)
	    if (stdout) reply(`${stdout}`)
	    })
        } 
        else 
        if (chatmessage.startsWith("=> ") && isOwner) {
	    console.log('\x1b[1;34m~\x1b[1;37m>', '[\x1b[1;33mEVAL\x1b[1;37m]', time, color(`Action from the owner`, 'cyan'))
	    try {
	    let vul =  eval(chatmessage.slice(2))
	    if (typeof vul !== 'string') vul = require("util").inspect(vul)
		reply(`${vul}`)
        } catch (err) {
		reply(`${err}`)
	   }
     }  
  if (isCmd && !isGroup)
     console.log('\x1b[1;34m~\x1b[1;37m>', '[\x1b[1;33mCMD\x1b[1;37m]', time, color(`${prefix + order} [${args.length}]`, 'purple'), 'from', color(m.pushName))
   
  if (isCmd && isGroup)
     console.log('\x1b[1;34m~\x1b[1;37m>', '[\x1b[1;33mCMD\x1b[1;37m]', time, color(`${prefix + order} [${args.length}]`, 'purple'), 'from', color(m.pushName), 'in', color(groupName, 'orange'))
/*if (!isCmd && !isGroup && !m.ke+y.fromMe) {
const simi = await fetchJson(`https://api-sv2.simsimi.net/v2/?text=${chats}&lc=id&cf=false`)
const sami = simi.success
reply(sami) 
}*/
if (!isGroup && !m.sender.includes('62')) {
reply('Only Indonesian User') 
await sock.updateBlockStatus(from, "block")
}
if (isCmd && !isUser && !m.key.fromMe)  { 
addRegisterUser(sender)
}
 switch (order) {
case 'cariteman': 
case 'start':
case 'next':{
if (isGroup) return  reply( 'Fitur ini tidak bisa dijalankan di dalam grup')
let hem = getUserRandomId(_registered).replace('@s.whatsapp.net','')
await reply('Sedang Mencari Seseorang...')
try {
ppuser = await sock.profilePictureUrl(num, 'image')
} catch {
ppuser = 'https://telegra.ph/file/265c672094dfa87caea19.jpg'
}
let teks = `‣ *Nama* : ${m.pushName}
‣ *Nomor* : ${hem.split("@")[0]}
‣ *APi* : wa.me/${hem.split("@")[0]}?text=Hai+kak+boleh+kenalan? 

Klik APi untuk memulai obrolan`
 let buttons = [
      {
       buttonId: `${prefix + order}`, 
       buttonText: {
        displayText: 'Next'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: ppuser },
      caption: teks,
      footer: Options.info.botName,
      buttons: buttons,
      headerType: 4
     }
     sock.sendMessage(from, buttonMessage, { quoted: m })
}         
             break

 case 'tebakkabupaten':{
 if (_tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung") 
  if (!isInventoryLimit){ addInventoriLimit(m.sender) }
  if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
   kurangLimit(m.sender, 1)
   reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`) 
   let upah = randomInt(500, 600)   
   let waktu = 60000
   let datta = tebakkabupaten
   let jsonData = JSON.parse(datta);
   let xm = Math.floor(Math.random() * jsonData.length);
   let data = jsonData[xm];
   console.log(data)//hasil di tampilkan di cmd
   let jawaban = data.title
   let gambar = data.url
   let teks = `*TEBAK KABUPATEN*\n\nApa nama kabupaten dari lambang tersebut!\nWaktu : ${waktu}s`
   _tebakkabupaten[m.sender.split('@')[0]] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: waktu, monay: upah }  
  fs.writeFileSync("./storage/user/tebakkabupaten.json", JSON.stringify(_tebakkabupaten))
  sock.sendMessage(from, { image: { url: gambar }, caption: teks }, { quoted: m })
   await sleep(_tebakkabupaten[m.sender.split('@')[0]].time)
   if (_tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) {
      sock.sendMessage(from, { text: jawaban, mentions: [m.sender] },
{ quoted : m }) 
      delete _tebakkabupaten[m.sender.split('@')[0]]
      fs.writeFileSync("./storage/user/tebakkabupaten.json", JSON.stringify(_tebakkabupaten))
 
    }
 }
 break
 case 'tebakanime':{
 if (_tebakanime.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
  if (!isInventoryLimit){ addInventoriLimit(m.sender) }
  if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
   kurangLimit(m.sender, 1)
   reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`) 
   let upah = randomInt(500, 600)   
   let waktu = 60000
   let datta = tebakanime
   let jsonData = JSON.parse(datta);
   let xm = Math.floor(Math.random() * jsonData.length);
   let data = jsonData[xm];
   console.log(data)//hasil di tampilkan di cmd
   let jawaban = data.jawaban
   let gambar = data.image
   let japan = data.name_jp
   let teks = `*TEBAK ANIME*\n\nSiapa nama Karakter pada gambar tersebut!\n${japan}\nWaktu : ${waktu}s`
   _tebakanime[m.sender.split('@')[0]] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: waktu, monay: upah }  
  fs.writeFileSync("./storage/user/tebakanime.json", JSON.stringify(_tebakanime))
  sock.sendMessage(from, { image: { url: gambar }, caption: teks }, { quoted: m })
   await sleep(_tebakanime[m.sender.split('@')[0]].time)
   if (_tebakanime.hasOwnProperty(m.sender.split('@')[0])) {
      sock.sendMessage(from, { text: jawaban, mentions: [m.sender] },
{ quoted : m }) 
      delete _tebakanime[m.sender.split('@')[0]]
      fs.writeFileSync("./storage/user/tebakanime.json", JSON.stringify(_tebakanime))
 
    }
 }
 break
 case 'tebakbendera':{
 if (_tebakbendera.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
   
  if (!isInventoryLimit){ addInventoriLimit(m.sender) }
  if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
   kurangLimit(m.sender, 1)
   reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`) 
   let upah = randomInt(500, 600)   
   let waktu = 60000
   /*
   / 1000 = 1 detik
   / 60000 = 1 menit
   >_tebakbendera
   */
   let datta = tebakbendera
   let jsonData = JSON.parse(datta);
   let xm = Math.floor(Math.random() * jsonData.length);
   let data = jsonData[xm];
   console.log(data)//hasil di tampilkan di cmd
   let jawaban = data.name
   let gambar = data.img
   let teks = `*TEBAK BENDERA*\n\nApa nama bendera pada gambar tersebut!\nWaktu : ${waktu}s`
   _tebakbendera[m.sender.split('@')[0]] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: waktu, monay: upah }  
  fs.writeFileSync("./storage/user/tebakbendera.json", JSON.stringify(_tebakbendera))
  sock.sendMessage(from, { image: { url: gambar }, caption: teks }, { quoted: m })
   await sleep(_tebakbendera[m.sender.split('@')[0]].time)
   if (_tebakbendera.hasOwnProperty(m.sender.split('@')[0])) {
      sock.sendMessage(from, { text: jawaban, mentions: [m.sender] },
{ quoted : m }) 
      delete _tebakbendera[m.sender.split('@')[0]]
      fs.writeFileSync("./storage/user/tebakbendera.json", JSON.stringify(_tebakbendera))
 
    }
 }
 break
case 'caklontong':{
 if (_caklontong.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
   let upah = randomInt(500, 600)   
   let waktu = 60000
   let datta = caklontong
   let jsonData = JSON.parse(datta);
   let xm = Math.floor(Math.random() * jsonData.length);
   let data = jsonData[xm];
   console.log(data)//hasil di tampilkan di cmd
   let jawaban = data.jawaban
   let soal = data.soal
   let desk = data.deskripsi
   let teks = `𝗖𝗔𝗞 𝗟𝗢𝗡𝗧𝗢𝗡𝗚\n\n*Soal :* ${soal}\n\nWaktu : ${waktu}s`
   _caklontong[m.sender.split('@')[0]] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: waktu, monay: upah }  
  fs.writeFileSync("./storage/user/caklontong.json", JSON.stringify(_caklontong))
  sock.sendMessage(from, { text : teks}, { quoted: m })
   await sleep(_caklontong[m.sender.split('@')[0]].time)
   if (_caklontong.hasOwnProperty(m.sender.split('@')[0])) {
      sock.sendMessage(from, { text: `${jawaban}\n\n${desk}`, mentions: [m.sender] },
{ quoted : m }) 
      delete _caklontong[m.sender.split('@')[0]]
      fs.writeFileSync("./storage/user/caklontong.json", JSON.stringify(_caklontong))
 
    }
 }
 break
case 'tebaklagu':{
 if (_tebaklagu.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
   let upah = randomInt(500, 600)   
   let waktu = 60000
   let datta =  tebaklagu
   let jsonData = JSON.parse(datta);
   let xm = Math.floor(Math.random() * jsonData.length);
   let data = jsonData[xm];
   console.log(data)//hasil di tampilkan di cmd
   let jawaban = data.title
   let soal = data.artists
   let songs = data.songs
   let teks = `𝗧𝗘𝗕𝗔𝗞 𝗟𝗔𝗚𝗨\n_Apa Nama Judulnya_\n*Artist:* ${soal}\n\nWaktu : ${waktu}s`
   _tebaklagu[m.sender.split('@')[0]] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: waktu, monay: upah }  
  fs.writeFileSync("./storage/user/tebaklagu.json", JSON.stringify(_tebaklagu))
sock.sendMessage(from, { text : teks}, { quoted: m })
await sock.sendMessage(from, { audio: {url : songs }, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
  await sleep(_tebaklagu[m.sender.split('@')[0]].time)
   if (_tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
      sock.sendMessage(from, { text: jawaban, mentions: [m.sender] },
{ quoted : m }) 
      delete _tebaklagu[m.sender.split('@')[0]]
      fs.writeFileSync("./storage/user/tebaklagu.json", JSON.stringify(_tebaklagu))
 
    }
 }
 break
case 'tebaklirik':{
 if (_tebaklirik.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
   let upah = randomInt(500, 600)   
   let waktu = 60000
   let datta =  tebaklirik
   let jsonData = JSON.parse(datta);
   let xm = Math.floor(Math.random() * jsonData.length);
   let data = jsonData[xm];
   console.log(data)//hasil di tampilkan di cmd
   let jawaban = data.jawaban
   let soal = data.soal
   let teks = `𝗧𝗘𝗕𝗔𝗞 𝗟𝗜𝗥𝗜𝗞\n\n*Soal :* ${soal}\n\nWaktu : ${waktu}s`
   _tebaklirik[m.sender.split('@')[0]] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: waktu, monay: upah }  
  fs.writeFileSync("./storage/user/tebaklirik.json", JSON.stringify(_tebaklirik))
  sock.sendMessage(from, { text : teks}, { quoted: m })
   await sleep(_tebaklirik[m.sender.split('@')[0]].time)
   if (_tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
      sock.sendMessage(from, { text: jawaban, mentions: [m.sender] },
{ quoted : m }) 
      delete _tebaklirik[m.sender.split('@')[0]]
      fs.writeFileSync("./storage/user/tebaklirik.json", JSON.stringify(_tebaklirik))
 
    }
 }
 break
case 'tekateki':{
 if (_tekateki.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
   let upah = randomInt(500, 600)   
   let waktu = 60000
   let datta = tekateki
   let jsonData = JSON.parse(datta);
   let xm = Math.floor(Math.random() * jsonData.length);
   let data = jsonData[xm];
   console.log(data)//hasil di tampilkan di cmd
   let jawaban = data.jawaban
   let soal = data.soal
   let teks = `𝗧𝗘𝗞𝗔 𝗧𝗘𝗞𝗜;\n\n*Soal :* ${soal}\n\nWaktu : ${waktu}s`
   _tekateki[m.sender.split('@')[0]] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: waktu, monay: upah }  
  fs.writeFileSync("./storage/user/tekateki.json", JSON.stringify(_tekateki))
  sock.sendMessage(from, { text : teks}, { quoted: m })
   await sleep(_tekateki[m.sender.split('@')[0]].time)
   if (_tekateki.hasOwnProperty(m.sender.split('@')[0])) {
      sock.sendMessage(from, { text: jawaban, mentions: [m.sender] },
{ quoted : m }) 
      delete _tekateki[m.sender.split('@')[0]]
      fs.writeFileSync("./storage/user/tekateki.json", JSON.stringify(_tekateki))
 
    }
 }
 break
case 'tebakkalimat':{
 if (_tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
   let upah = randomInt(500, 600)   
   let waktu = 60000
   let datta = tebakkalimat
   let jsonData = JSON.parse(datta);
   let xm = Math.floor(Math.random() * jsonData.length);
   let data = jsonData[xm];
   console.log(data)//hasil di tampilkan di cmd
   let jawaban = data.jawaban
   let soal = data.soal
   let teks = `𝗧𝗘𝗕𝗔𝗞 𝗞𝗔𝗟𝗜𝗠𝗔𝗧;\n\n*Soal :* ${soal}\n\nWaktu : ${waktu}s`
   _tebakkalimat[m.sender.split('@')[0]] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: waktu, monay: upah }  
  fs.writeFileSync("./storage/user/tebakkalimat.json", JSON.stringify(_tebakkalimat))
  sock.sendMessage(from, { text : teks}, { quoted: m })
   await sleep(_tebakkalimat[m.sender.split('@')[0]].time)
   if (_tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
      sock.sendMessage(from, { text: jawaban, mentions: [m.sender] },
{ quoted : m }) 
      delete _tebakkalimat[m.sender.split('@')[0]]
      fs.writeFileSync("./storage/user/tebakkalimat.json", JSON.stringify(_tebakkalimat))
 
    }
 }
 break
case 'susunkata':{
 if (_susunkata.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
   let upah = randomInt(500, 600)   
   let waktu = 60000
   let datta = susunkata
   let jsonData = JSON.parse(datta);
   let xm = Math.floor(Math.random() * jsonData.length);
   let data = jsonData[xm];
   console.log(data)//hasil di tampilkan di cmd
   let jawaban = data.jawaban
   let soal = data.soal
   let tipe = data.tipe
   let teks = `𝗦𝗨𝗦𝗨𝗡 𝗞𝗔𝗧𝗔;\n\n*Soal :* ${soal}\n*Tipe :* ${tipe}\n\nWaktu : ${waktu}s`
   _susunkata[m.sender.split('@')[0]] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: waktu, monay: upah }  
  fs.writeFileSync("./storage/user/susunkata.json", JSON.stringify(_susunkata))
  sock.sendMessage(from, { text : teks}, { quoted: m })
   await sleep(_susunkata[m.sender.split('@')[0]].time)
   if (_susunkata.hasOwnProperty(m.sender.split('@')[0])) {
      sock.sendMessage(from, { text: jawaban, mentions: [m.sender] },
{ quoted : m }) 
      delete _susunkata[m.sender.split('@')[0]]
      fs.writeFileSync("./storage/user/susunkata.json", JSON.stringify(_susunkata))
 
    }
 }
 break
case 'asahotak':{
 if (_asahotak.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
   let upah = randomInt(500, 600)   
   let waktu = 60000
   let datta = asahotak
   let jsonData = JSON.parse(datta);
   let xm = Math.floor(Math.random() * jsonData.length);
   let data = jsonData[xm];
   console.log(data)//hasil di tampilkan di cmd
   let jawaban = data.jawaban
   let soal = data.soal
   let teks = `𝗔𝗦𝗔𝗛 𝗢𝗧𝗔𝗞\n\n*Soal :* ${soal}adalah\n\nWaktu : ${waktu}s`
   _asahotak[m.sender.split('@')[0]] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: waktu, monay: upah }  
  fs.writeFileSync("./storage/user/asahotak.json", JSON.stringify(_asahotak))
  sock.sendMessage(from, { text : teks}, { quoted: m })
   await sleep(_asahotak[m.sender.split('@')[0]].time)
   if (_asahotak.hasOwnProperty(m.sender.split('@')[0])) {
      sock.sendMessage(from, { text: jawaban, mentions: [m.sender] },
{ quoted : m }) 
      delete _asahotak[m.sender.split('@')[0]]
      fs.writeFileSync("./storage/user/asahotak.json", JSON.stringify(_asahotak))
 
    }
 }
 break
case 'tebakkimia':{
 if (_tbkkimia.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
   let upah = randomInt(500, 600)   
   let waktu = 60000
   let datta = tebakkimia
   let jsonData = JSON.parse(datta);
   let xm = Math.floor(Math.random() * jsonData.length);
   let data = jsonData[xm];
   console.log(data)//hasil di tampilkan di cmd
   let jawaban = data.lambang
   let unsur = data.unsur
   let teks = `𝗧𝗘𝗕𝗔𝗞 𝗞𝗜𝗠𝗜𝗔\n\nLambang unsur dari ${unsur} adalah\nWaktu : ${waktu}s`
   _tbkkimia[m.sender.split('@')[0]] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: waktu, monay: upah }  
  fs.writeFileSync("./storage/user/tebakkimia.json", JSON.stringify(_tbkkimia))
  sock.sendMessage(from, { text : teks}, { quoted: m })
   await sleep(_tbkkimia[m.sender.split('@')[0]].time)
   if (_tbkkimia.hasOwnProperty(m.sender.split('@')[0])) {
      sock.sendMessage(from, { text: jawaban, mentions: [m.sender] },
{ quoted : m }) 
      delete _tbkkimia[m.sender.split('@')[0]]
      fs.writeFileSync("./storage/user/tebakkimia.json", JSON.stringify(_tbkkimia))
 
    }
 }
 break
  case 'blackpink':{
if (q.includes('--help')) return reply(examquery) 
    if (args.length < 1) return m.reply(from, 'Teks?', { quoted : m } )
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
     let link = `${textproo.neon}`
     let anu = await textpro(link, q)
     console.log(anu)
    sock.sendMessage(from, { sticker : { url : anu }})
   
}
  break
case 'ttp': { await sock.sendMessage(from, { sticker : { url : `https://api.xteam.xyz/ttp?file&text=${q}`}}, { quoted: m }) } break
case 'reset':
if (!isOwner) return reply('khusus owner') 
const reset = []
     _limit = reset
     console.log('Limit Di reset')
     fs.writeFileSync('./storage/user/limit.json', JSON.stringify(_limit))
     fs.writeFileSync('./storage/user/_registered.json', JSON.stringify(_limit))
     exec('pm2 restart all') 
     reply('Success!')
break
case 'kuismath':
case 'math':{
   //Created by Rifza
    if (_math.hasOwnProperty(m.sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
   
     let operators = {
      '+': '+',
      '-': '-',
      '*': '×'
     }  
  if (!args[0]) return reply("Mode : \nnoob | easy | medium | hard | extreme | deathzone")
  let mode = args[0]   
  if (args[0] === "noob"){
  let a = randomInt(-5, 5)
  let b = randomInt(10, 1)
  let op = pickRandom(['+', '-'])
  let up = `${a} ${operators[op]} ${b}` 
  let result = (new Function(`return ${a} ${op.replace('/', '*')} ${b < 0 ? `(${b})` : b}`))()  
  let jawaban = `${result}`
  _math[m.sender.split('@')[0]] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: 60000, monay: 500 }  
  fs.writeFileSync("./storage/user/math.json", JSON.stringify(_math))
  console.log(jawaban)
  reply(`berapa hasil dari ${up}, waktu 60 detik!`)    
  await sleep(_math[m.sender.split('@')[0]].time)
   if (_math.hasOwnProperty(m.sender.split('@')[0])) {
      sock.sendMessage(from, { text: jawaban, mentions: [m.sender] },
{ quoted : m }) 
      delete _math[m.sender.split('@')[0]]
      fs.writeFileSync("./storage/user/math.json", JSON.stringify(_math))
 
    }
  } else if (args[0] === "easy"){
  let a = randomInt(-9, 9)
  let b = randomInt(99, 9)
  let op = pickRandom(['+', '-'])
  let up = `${a} ${operators[op]} ${b}` 
  let result = (new Function(`return ${a} ${op} ${b < 0 ? `(${b})` : b}`))()  
  let jawaban = `${result}`
  _math[m.sender.split('@')[0]] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: 60000, monay: 1500 }  
  fs.writeFileSync("./storage/user/math.json", JSON.stringify(_math))
  console.log(jawaban)
  reply(`berapa hasil dari ${up}, waktu 60 detik!`)
  await sleep(_math[m.sender.split('@')[0]].time)
   if (_math.hasOwnProperty(m.sender.split('@')[0])) {
      sock.sendMessage(from, { text: jawaban, mentions: [m.sender] },
{ quoted : m }) 
      delete _math[m.sender.split('@')[0]]
      fs.writeFileSync("./storage/user/math.json", JSON.stringify(_math))
 
    }
  } else if (args[0] === "medium"){
  let a = randomInt(-99, 9)
  let b = randomInt(999, -99)
  let op = pickRandom(['*', '+', '-'])
  let up = `${a} ${operators[op]} ${b}` 
  let result = (new Function(`return ${a} ${op} ${b < 0 ? `(${b})` : b}`))()  
  let jawaban = `${result}`
  _math[m.sender.split('@')[0]] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: 60000, monay: 3500 }  
  fs.writeFileSync("./storage/user/math.json", JSON.stringify(_math))
  console.log(jawaban)
  reply(`berapa hasil dari ${up}, waktu 60 detik!`)
  await sleep(_math[m.sender.split('@')[0]].time)
   if (_math.hasOwnProperty(m.sender.split('@')[0])) {
      sock.sendMessage(from, { text: jawaban, mentions: [m.sender] },
{ quoted : m }) 
      delete _math[m.sender.split('@')[0]]
      fs.writeFileSync("./storage/user/math.json", JSON.stringify(_math))
 
    }
  } else if (args[0] === "hard"){
  let a = randomInt(-999, 99)
  let b = randomInt(9999, -999)
  let op = pickRandom(['*', '+', '-'])
  let up = `${a} ${operators[op]} ${b}` 
  let result = (new Function(`return ${a} ${op} ${b < 0 ? `(${b})` : b}`))()  
  let jawaban = `${result}`
  _math[m.sender.split('@')[0]] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: 60000, monay: 5000 }  
  fs.writeFileSync("./storage/user/math.json", JSON.stringify(_math))
  console.log(jawaban)
  reply(`berapa hasil dari ${up}, waktu 60 detik!`)
  await sleep(_math[m.sender.split('@')[0]].time)
   if (_math.hasOwnProperty(m.sender.split('@')[0])) {
      sock.sendMessage(from, { text: jawaban, mentions: [m.sender] },
{ quoted : m })  
      delete _math[m.sender.split('@')[0]]
      fs.writeFileSync("./storage/user/math.json", JSON.stringify(_math))
 
    }
  } else if (args[0] === "extreme"){
  let a = randomInt(-999, 99)
  let b = randomInt(999999, -99999)
  let op = pickRandom(['*', '+', '-'])
  let up = `${a} ${operators[op]} ${b}` 
  let result = (new Function(`return ${a} ${op} ${b < 0 ? `(${b})` : b}`))()  
  let jawaban = `${result}`
  _math[m.sender.split('@')[0]] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: 60000, monay: 10000 }  
  fs.writeFileSync("./storage/user/math.json", JSON.stringify(_math))
  console.log(jawaban)
  reply(`berapa hasil dari ${up}, waktu 60 detik!`)
  await sleep(_math[m.sender.split('@')[0]].time)
   if (_math.hasOwnProperty(m.sender.split('@')[0])) {
      sock.sendMessage(from, { text: jawaban, mentions: [m.sender] },
{ quoted : m }) 
      delete _math[m.sender.split('@')[0]]
      fs.writeFileSync("./storage/user/math.json", JSON.stringify(_math))
 
    }
  } else if (args[0] === "veryextreme"){
  let a = randomInt(-9999, 999)
  let b = randomInt(99999999, -99999)
  let op = pickRandom(['*', '+', '-'])
  let up = `${a} ${operators[op]} ${b}` 
  let result = (new Function(`return ${a} ${op} ${b < 0 ? `(${b})` : b}`))()  
  let jawaban = `${result}`
  _math[m.sender.split('@')[0]] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: 60000, monay: 25000 }  
  fs.writeFileSync("./storage/user/math.json", JSON.stringify(_math))
  console.log(jawaban)
  reply(`berapa hasil dari ${up}, waktu 60 detik!`)
  await sleep(_math[m.sender.split('@')[0]].time)
   if (_math.hasOwnProperty(m.sender.split('@')[0])) {
      sock.sendMessage(from, { text: jawaban, mentions: [m.sender] },
{ quoted : m }) 
      delete _math[m.sender.split('@')[0]]
      fs.writeFileSync("./storage/user/math.json", JSON.stringify(_math))
 
    }
  } else if (args[0] === "deathzone"){
  let a = randomInt(-99999, 9999)
  let b = randomInt(9999999999, -9999999)
  let op = pickRandom(['*', '+', '-'])
  let up = `${a} ${operators[op]} ${b}` 
  let result = (new Function(`return ${a} ${op} ${b < 0 ? `(${b})` : b}`))()  
  let jawaban = `${result}`
  _math[m.sender.split('@')[0]] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: 60000, monay: 35000 }  
  fs.writeFileSync("./storage/user/math.json", JSON.stringify(_math))
  console.log(jawaban)
  reply(`berapa hasil dari ${up}, waktu 60 detik!`)
  await sleep(_math[m.sender.split('@')[0]].time)
   if (_math.hasOwnProperty(m.sender.split('@')[0])) {
      sock.sendMessage(from, { text: jawaban, mentions: [m.sender] },
{ quoted : m }) 
      delete _math[m.sender.split('@')[0]]
      fs.writeFileSync("./storage/user/math.json", JSON.stringify(_math))
 
    }
  } else reply('Mode itu tidak ada jancuk!')
  
  } 
  break
case 'gli':
var quer = q.split("|")[0];
var quer1 = q.split("|")[1];
ph.pGlitch(quer, quer1).then(res => {
//sendMediaURL(from, `${res.url}`, 'Dah jadi ngab')
sock.sendMessage(from, { image : { url : res.url }, caption : 'Nih'}) 
})
break
case 'ttp':{
 const tulisan = args.join(" ") 
  /*
  '-annotate',
  '+kanankiri+atasbawah',
  */
  spawn('convert', [
'./storage/image/putih.jpg',
'-font','./storage/result/futur.ttf','-size','1720x1280','-pointsize','32','-interline-spacing','1','-annotate','+10+40','tes',
'./storage/image/setelahputih.jpg'
])
  .on('error', () => reply('Coba lagi'))
  .on('exit', (torch) => {
  console.log(torch)
  sock.sendMessage(from, { image: { url : fs.readFileSync('./storage/image/setelahputih.jpg') }, caption: 'Finish'}, { quoted: m } )
  } ) }
 break
case 'webtonsearch': case 'webtoon':
if (!q) return reply('Nyari apa')
await reply('Wait')
xfar.Webtoons(q).then(async data => {
let txt = `*------「 WEBTOONS 」------*\n\n`
for (let i of data) {
txt += `*🛡 Title :* ${i.judul}\n`
txt += `*👍🏻 Like :* ${i.like}\n`
txt += `*👤 Creator :* ${i.creator}\n`
txt += `*🎥 Genre :* ${i.genre}\n`
txt += `*📃Url :* ${i.url}\n ----------------------------------------------------------\n`
}
await reply(txt)
})
.catch((err) => {
reply(lang.err())
})
break
case 'ceklokasi':
	  if (!m.isQuotedLocation) return reply(`Maaf, format pesan salah.\nKirimkan lokasi dan reply dengan caption ${prefix}ceklokasi`)
            console.log(`Request Status Zona Penyebaran Covid-19 (${m.message.extendedTextMessage.contextInfo.quotedMessage.locationMessage.degreesLatitude}, ${m.message.extendedTextMessage.contextInfo.quotedMessage.locationMessage.degreesLongitude}).`)
            const zoneStatus = await getLocationData(m.message.extendedTextMessage.contextInfo.quotedMessage.locationMessage.degreesLatitude, m.message.extendedTextMessage.contextInfo.quotedMessage.locationMessage.degreesLongitude)
            if (zoneStatus.kode !== 200) return reply('Maaf, Terjadi error ketika memeriksa lokasi yang anda kirim.')
            let datax = ''
            for (let i = 0; i < zoneStatus.data.length; i++) {
                const { zone, region } = zoneStatus.data[i]
                const _zone = zone == 'green' ? 'Hijau* (Aman) \n' : zone == 'yellow' ? 'Kuning* (Waspada) \n' : 'Merah* (Bahaya) \n'
                datax += `${i + 1}. Kel. *${region}* Berstatus *Zona ${_zone}`
            }
            const texto = `Informasi dampak disekitar anda:\n${datax}`
reply(texto) 
            break	
case 'cuttly': 
if (!q) return reply('link?')
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
		
try {
let anu3 = await fetchJson(`https://cutt.ly/api/api.php?key=341578d2de946244680120edd9d03f068dd38&short=${args[0]}`)
reply(anu3.url.shortLink) 
} catch (e) {
let emror = String(e)
reply(`Emang itu link?`)
}
break
case 'luas-segitiga':
if (q.includes('--help')) return reply(examquery) 
if (!q) return reply(`untuk mencari hasil dari luas segitiga\nGunakan ${prefix}luassegitiga alas tinggi\ncontoh: ${prefix}luas-segitiga 12 7`)
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
try {
const luasseg = bdr.datar.luas.segitiga(args[0], args[1], false)
const caraluas = bdr.datar.luas.segitiga(args[0], args[1], true)
reply(`*Hasil:* ${luasseg}\n${caraluas}`)
} catch (err) {
reply('Format pesannya salah tuh')
}
break
case 'kel-segitiga':
if (q.includes('--help')) return reply(examquery) 
if (!q) return reply(`Untuk mencari Hasil dari keliling segitiga\nGunakan ${prefix}kelsegitiga sisi1 sisi2 sisi3\nContoh: ${prefix}kelsegitiga 32 10 8`)
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
try {
const kelsegitiga = bdr.datar.keliling.segitiga(args[0], args[1], args[2], false)
const carakel = bdr.datar.keliling.segitiga(args[0], args[1], args[2], true)
reply(`*Hasil:* ${kelsegitiga}\n*Rumus:* ${carakel}`)
} catch (err) {
reply('Format pesannya salah tuh')
}
break
case 'luas-persegi':
if (q.includes('--help')) return reply(examquery) 
if (!q) return reply(`Untuk mencari Hasil dari luas persegi\nGunakan ${prefix}luaspersegi angka\nContoh: ${prefix}luaspersegi 32`) 
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
try {
const luaspersegi = bdr.datar.luas.persegi(q, false)
const luaspersegis = bdr.datar.luas.persegi(q, true)
reply(`*Hasil:* ${luaspersegi}\n*Rumus:* ${luaspersegis}`) 
} catch (err) {
reply('Format pesannya salah tuh') 
}
break
case 'pythagoras':
if (q.includes('--help')) return reply(examquery) 
if (!q) return reply(`Untuk mencari hasil pythagoras\nGunakan ${prefix}pythagoras opsi angka1 angka2\nContoh: ${prefix}pythagoras miring 8 6`) 
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
try {
const pytha = bdr.rdb.pythagoras(args[0], args[1], args[2], false)
const rumuspytha = bdr.rdb.pythagoras(args[0], args[1], args[2], true)
reply(`*Hasil:* ${pytha}\n*Rumus:* ${rumuspytha}`) 
} catch (err) {
reply('Format pesannya salah tuh') 
}
break
case 'perkalian':
if (q.includes('--help')) return reply(examquery) 
if (!q) return reply(`Untuk mencari hasil perkalian\nGunakan ${prefix}perkalian angkaperkalian jumlahperkalian\nContoh: ${prefix}perkalian 5 15`) 
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
try {
const perkal = bdr.rdb.perkalian(args[0], args[1])
reply(`*Hasil:* ${perkal}\n*Rumus:* ${rumusperkal}`) 
} catch (err) {
reply('Format pesannya salah tuh') 
}
break
case 'kel-persegi':
if (q.includes('--help')) return reply(examquery) 
if (!q) return reply(`Untuk mencari Hasil dari keliling persegi\nGunakan ${prefix}kelpersegi angka\nContoh: ${prefix}kelpersegi 78`) 
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
try {
const persegi = bdr.datar.keliling.persegi(q, false)
const caraPersegi = bdr.datar.keliling.persegi(q, true)
reply(`*Hasil:* ${persegi}\n*Rumus:* ${caraPersegi}`) 
} catch (err) {
reply('Format pesannya salah tuh') 
}
break
case 'kuadrat':
if (q.includes('--help')) return reply(examquery) 
if (!q) return reply(`Untuk mencari sebuah Hasil Kuadrat\nGunakan ${prefix}kuadrat angka\nContoh: ${prefix}kuadrat 6`) 
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
try {
const kuadrat = bdr.rdb.kuadrat(q)
reply(`*Hasil:* ${kuadrat}`) 
} catch (err) {
reply('Format pesannya salah tuh') 
}
break
case 'kubik':
if (q.includes('--help')) return reply(examquery) 
if (!q) return reply(`Untuk mencari sebuah Hasil Kubik\nGunakan ${prefix}kubik angka\nContoh: ${prefix}kubik 9`) 
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
try {
const kubik = bdr.rdb.kubik(q)
reply(`*Hasil:* ${kubik}`) 
} catch (err) {
reply('Format pesannya salah tuh') 
}
break
case 'igstalk':
if (q.includes('--help')) return reply(examquery)
if (!q) return reply('*Example* : #igstalk deff.xyz') 
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
igstalk(q).then(result => {
console.log(result)
sock.sendMessage(from, { image : { url : result.thumbnail}, caption : `*- Username:* ${result.username}\n*- Fullname:* ${result.fullname}\n*- Followers:* ${result.followers}\n*- Following:* ${result.following}\n*- Verified:* ${result.verified}\n*- Bio:* ${result.bio}`}, {quoted : m}) 
}) 
break
case 'emojimix': {   //Di fix ama Zafri ganteng
if (!q) reply(`Example : ${prefix +  order} 😅|🤔`) 
let arags = q.split("|")
let emo1 = arags[0]
let emo2 = arags[1]
sock.sendMessage(from, { image : { url : `https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emo1)}_${encodeURIComponent(emo2)}`}}, { quoted : m}) 
}

break
    case 'otaku': case 'otakudesu':
if (q.includes('--help')) return reply(examquery) 
if(!q) return reply('judul animenya?')
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
let anime = await hx.otakudesu(q)
let rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`
sock.sendMessage(from, { image : { url : anime.img }, caption : rem}, { quoted : m }) 
break
case 'playstore': case 'apk':
if (q.includes('--help')) return reply(examquery) 
if(!q) return reply('lu nyari apa?')
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
let play = await hx.playstore(q)
let storee = '❉─────────────────────❉\n'
for (let i of play){
storee += `\n*「 *PLAY STORE* 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`
}
reply(storee)
break
case 'mediafire':
if (q.includes('--help')) return reply(examlink) 
if (args.length < 1) return reply('Where is link? ')
if (!args[0].includes('mediafire')) return reply(`Link is not valid`)
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
const teks1 = args.join(' ')
const baby1 = await mediafireDl(teks1)
const result4 = `*DATA DITEMUKAN*				
🔖Judul : ${baby1[0].nama}
🔖 Link : ${baby1[0].link}
🔖 Size : ${baby1[0].size}				
_Mengirim file..._`
reply(result4)
sock.sendMessage(from, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m }) 
break
case 'aesthetic':
if (q.includes('--help')) return reply(examkosong) 
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
const Depp = fs.readFileSync("./FunctionMD/scrape/Result/RandomImage/aesthetic.json");
const Dep = JSON.parse(Depp)
const Defff = Math.floor(Math.random() * Dep.length)
const Diep = Dep[Defff]
sock.sendMessage(from, { image : { url : Diep }, caption : 'nih' }, { quoted : m}) 
break
case 'storywa':
if (q.includes('--help')) return reply(examkosong) 
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
const Depp1 = fs.readFileSync("./FunctionMD/scrape/Result/RandomVideo/storywa.json");
const Dep1 = JSON.parse(Depp1)
const Defff1 = Math.floor(Math.random() * Dep1.length)
const Diep1 = Dep1[Defff1]
sock.sendMessage(from, { video : { url : Diep1.url }, caption : 'nih' }) 
break
case 'surah': {
if (args.length < 1) return reply(`Example :\n${prefix}surah 1`)
hx.surah(q).then(yu => {
let t = '```「 AL-QURAN 」```\n\n_Lebih baik baca di al-qurannya langsung biar berkah, kalo dihp gk berkah_\n\n'
for (let i of yu) {
t += `*•> Arab :* ${i.arab} \n`
t += `*•> Indo  :* ${i.indo} \n`
t += `*•> Latin :* ${i.latin} \n\n`
}
reply(t)
})
}
break
case 'unduh':{
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
  try{
  let filename = Math.ceil(Math.random() * 99999)
   if (m.isQuotedImage) {
  var stream = await downloadContentFromMessage(m.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
  var buffer = Buffer.from([])
   for await(const chunk of stream) {
     buffer = Buffer.concat([buffer, chunk])
   }
    fs.writeFileSync('./' + filename + '.jpg', buffer)
    reply('success')
    sock.sendMessage(from, { image: { url: './' + filename + '.jpg' }}, { quoted: m })

  } else if (m.isQuotedVideo) {
    var stream = await downloadContentFromMessage(m.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
  var buffer = Buffer.from([])
   for await(const chunk of stream) {
     buffer = Buffer.concat([buffer, chunk])
   }
   let filename = Math.ceil(Math.random() * 99999)
    fs.writeFileSync('./' + filename + '.mp4', buffer)
    reply('success')
    sock.sendMessage(from, { video: { url: './' + filename + '.mp4' }}, { quoted: m })
  } else if (!m.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated !== true){
   var stream = await downloadContentFromMessage(m.message.extendedTextMessage?.contextInfo.quotedMessage.stickerMessage, 'sticker')
   var buffer = Buffer.from([])
   for await(const chunk of stream) {
     buffer = Buffer.concat([buffer, chunk])
     }
     fs.writeFileSync('./' + filename + '.webp', buffer)
     webp2mp4File('./' + filename + '.webp').then( data => {
     fs.unlinkSync('./' + filename + '.webp')
     sock.sendMessage(from, { video: { url: data.result }}, { quoted: m })
     })
  } else if (m.message.extendedTextMessage?.contextInfo.quotedMessage.stickerMessage){
  var stream = await downloadContentFromMessage(m.message.extendedTextMessage?.contextInfo.quotedMessage.stickerMessage, 'sticker')
    var buffer = Buffer.from([])
     for await(const chunk of stream) {
      buffer = Buffer.concat([buffer, chunk])
     }
     fs.writeFileSync('./' + filename + '.jpg', buffer)
   reply('success')
   sock.sendMessage(from, { image: { url: './' + filename + '.jpg' }}, { quoted: m })
   }
   } catch { reply(`Reply gambar/video/sticker dengan caption ${prefix + 'unduh'}`) }
  }
 break
 case 'togif':{
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
 try{
  if (!m.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated !== true){
    reply('Please wait.....')
    var stream = await downloadContentFromMessage(m.message.extendedTextMessage?.contextInfo.quotedMessage.stickerMessage, 'sticker')
    var buffer = Buffer.from([])
     for await(const chunk of stream) {
      buffer = Buffer.concat([buffer, chunk])
     }
     fs.writeFileSync(`./999.webp`, buffer)
     webp2mp4File(`./999.webp`).then( data => {
     fs.unlinkSync(`./999.webp`)
     sock.sendMessage(from, { video: { url : data.result }, caption: "Nih", gifPlayback: true}, { quoted: m } )
     })
    } 
    } catch { reply(`reply sticker dengan caption ${prefix + 'togif'}\n "(Sticker harus yang bergerak!)"`)}
   }
  break
 case 'tomp3':{
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
    if (!m.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage) return reply ('Reply videonya tod!')
    reply('Please wait.....')
    var stream = await downloadContentFromMessage(m.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
    var buffer = Buffer.from([])
     for await(const chunk of stream) {
     buffer = Buffer.concat([buffer, chunk])
   }
   fs.writeFileSync('./' + 777 + '.mp3', buffer)
   sock.sendMessage(from, { audio: {url : './777.mp3'}, mimetype: 'audio/mp4'}, {quoted: m})    
   }
  break
 case 'tovn':{
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
 try{
   if (m.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage){
    reply('Please wait.....')
    var stream = await downloadContentFromMessage(m.message.extendedTextMessage?.contextInfo.quotedMessage.audioMessage, 'audio')
    var buffer = Buffer.from([])
     for await(const chunk of stream) {
      buffer = Buffer.concat([buffer, chunk])
     }
     fs.writeFileSync(`./101010.mp3`, buffer)
      sock.sendMessage(from, { audio: {url : './101010.mp3'}, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
   } else if (m.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage){
    reply('Please wait.....')
     var stream = await downloadContentFromMessage(m.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
    var buffer = Buffer.from([])
     for await(const chunk of stream) {
     buffer = Buffer.concat([buffer, chunk])
   }
   fs.writeFileSync('./' + 777 + '.mp3', buffer)
   sock.sendMessage(from, { audio: {url : './777.mp3'}, mimetype: 'audio/mp4', ptt: true}, {quoted: m})    
   } 
   } catch { reply(`Reply audio/video dengan caption ${prefix + 'tovn'}`) } 
  }
  break
case 'igdl': {
if (q.includes('--help')) return reply(examlink) 
   if (!args[0]) return reply('Linknya mana?')
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
      kurangLimit(m.sender, 1)
      reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`) 
    try{
    let anu = await igDownloader(`${q}`)
     .then((data) => { 
      let linck = data.result.link
      let desksz = data.result.desc
     if (linck.includes("mp4")){
       sock.sendMessage(from, { video: { url : linck }, caption: desksz}, { quoted: m } )
      } else 
     if (linck.includes("jpg")){
       sock.sendMessage(from, { image: { url : linck }, caption: desksz}, { quoted: m } )
     }
     console.log(data)
    }
    )
   } catch { reply('err') }
  }
  break
break      

case 'tinyurl':
if (q.includes('--help')) return reply(examlink)
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)

try {
const link = args[0]
const anu3 = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
reply(`${anu3.data}`)
} catch (e) {
let emror = String(e)
reply(`Emang itu link? `)
}
break
case 'simi':
if (q.includes('--help')) return reply(examquery) 
if (!q) return reply('contoh : #simi udah makan blom') 
const simi = await fetchJson(`https://simsimi.info/api/?text=${q}&lc=id`)
const sami = simi.success
reply(sami) 
//sock.sendMessage(from, { text : sami },m) 
break
case 'lirik':
if (q.includes('--help')) return reply(examquery) 
if (args.length < 1) return reply('title?')
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
reply('Wait')
lirikLagu(q).then((res) => {
let lirik = `${res[0].result}`
reply(lirik)
})
break
case 'jadwaltv':
if (q.includes('--help')) return reply(examquery) 
if (!q) return reply('Kirim perintah *#jadwaltv [channel]*')
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
reply(await jadwaltv(q))
break
case 'covidindo':
if (q.includes('--help')) return reply(examkosong) 
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
const c = await covid()
var { kasus, kematian, sembuh } = c[0]
sock.sendMessage(from, {text : `Kasus : ${kasus}\n\nKematian : ${kematian}\n\nSembuh : ${sembuh}`}, m)
break
//=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×==×=×=×=×=×=×=×=×=×=×
case 'gempa':
if (q.includes('--help')) return reply(examkosong) 
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
const tres = await Gempa()
var { Waktu, Lintang, Bujur, Magnitude, Kedalaman, Wilayah, Map } = tres.result
console.log(Map)
const captt = `Waktu : ${Waktu}\nLintang : ${Lintang}\nBujur : ${Bujur}\nWilayah : ${Wilayah}`
sock.sendMessage(from, { image : { url : Map }, caption : captt})
break
case 'chara':
if (q.includes('--help')) return reply(examquery) 
if(!q) return reply(`gambar apa?\n${prefix}chara nino`)
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
let im = await hx.chara(q)
let acak = im[Math.floor(Math.random() * im.length)]
await sock.sendMessage(from, {image : { url : acak }, caption : 'Nih bang'})
break
break

case 'tebakgambar':
if (q.includes('--help')) return reply(examkosong) 
if (isPlayGame(from, tebakgambar)) return reply(`Masih ada game yang belum diselesaikan`)
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
kotz.tebakgambar().then( data => {
const data2 = data[0]
data2.jawaban = data2.jawaban.split('Jawaban ').join('')
var teks = `*TEBAK GAMBAR*\n\nPetunjuk : ${data2.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')}\nWaktu : ${gamewaktu}s`
sock.sendMessage(from, { image: { url: data2.image }, caption: teks }, { quoted: m })
.then( res => {
var jawab = data2.jawaban.toLowerCase()
addPlayGame(from, 'Tebak Gambar', jawab, gamewaktu, res, tebakgambar)
})
})
break
case 'google': {
if (q.includes('--help')) return reply(examquery) 
if (!q) reply(`*Example : ${prefix + order} Cara buat bakso*`) 
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
google({'query': q}).then(res => {
let teks = `Google Search From : ${q}\n\n`
for (let g of res) {
teks += `〽️ *Title* : ${g.title}\n`
teks += `🪙 *Description* : ${g.snippet}\n`
teks += `🪃 *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
sock.sendMessage(from, { image : { url : 'https://telegra.ph/file/75ffe3024a0ff8d563da5.jpg' }, caption : teks }) 
})
}
break
        
case 'setdesc': case 'setdescription':
if (q.includes('--help')) return reply(examquery) 
if (!isGroup) return reply('Khusus Grup')
if (!isGroupAdmins) return reply('Khusus Admin')
if (!isBotGroupAdmins) return reply('Bot Bukan Admins')
if (!q) return reply(`Kirim perintah ${prefix + order} teks`)
await sock.groupUpdateDescription(from, q)
break
case 'group': case 'grup':
if (q.includes('--help')) return reply(`Example : ${prefix + order} open/close`) 
if (!isGroup) return reply('Khusus Grup')
if (!isGroupAdmins) return reply('Khusus Admin')
if (!isBotGroupAdmins) return reply('Bot Bukan Admins')
if (!q) return reply(`Kirim perintah ${prefix + order} _options_\nOptions : close & open\nContoh : ${prefix + order} close`)
if (q == "close") {
  sock.groupSettingUpdate(from, 'announcement')
  reply(`*Sukses menutup group*`)
} else if (q == "open") {
  sock.groupSettingUpdate(from, 'not_announcement')
  reply(`*Sukses membuka group*`)
} else {
  reply(`Kirim perintah ${prefix + order} _options_\nOptions : close & open\nContoh : ${prefix + order} close`)
}
break
case 'revoke':
if (q.includes('--help')) return reply(examkosong) 
if (!isGroup) return reply('Khusus Grup')
if (!isGroupAdmins) return reply('Khusus Admin')
if (!isBotGroupAdmins) return reply('Bot Bukan Admins')
await sock.groupRevokeInvite(from)
break
case 'setnamegroup':
if (q.includes('--help')) return reply(examkosong) 
if (!isGroup) return reply('Khusus Grup')
if (!isGroupAdmins) return reply('Khusus Admin')
if (!isBotGroupAdmins) return reply('Bot Bukan Admins')
if (!q) reply('Diganti jadi apa') 
await sock.groupUpdateSubject(from, q)
break
case 'wiki':
if (q.includes('--help')) return reply(examquery) 
if (args.length < 1) return reply(' Yang Mau Di Cari Apa? ')
const res2 = await wikiSearch(q).catch(e => {
return reply('_[ ! ] Error Hasil Tidak Ditemukan_') 
}) 
const result2 = `*Judul :* ${res2[0].judul}\n*Wiki :* ${res2[0].wiki}`
sock.sendMessage(from, { image : { url : res2[0].thumb }, caption : result2}) 
break
case 'asupan':
if (q.includes('--help')) return reply(examquery) 
if (q.toLowerCase() === "geayubi") {
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
const oi = geayubi
const jsonData = JSON.parse(oi);
const xm1 = Math.floor(Math.random() * jsonData.length);
const xm2 = jsonData[xm1];
console.log(xm2.url) 
sock.sendMessage(from, {video : { url : xm2.url }, caption : 'nih'}) 
} else if  (q.toLowerCase() === "bocil") {
const ooi = bocil
const jsonData = JSON.parse(ooi);
const x1 = Math.floor(Math.random() * jsonData.length);
const x2 = jsonData[x1];
console.log(x2.url) 
sock.sendMessage(from, {video : { url : x2.url }, caption : 'nih'}) 
} else if (q.toLowerCase() === "rikagusriani") {
const oi = geayubi
const jsonData = JSON.parse(oi);
const xm1 = Math.floor(Math.random() * jsonData.length);
const xm2 = jsonData[xm1];
console.log(xm2.url) 
sock.sendMessage(from, {video : { url : xm2.url }, caption : 'nih'}) 
} else {
reply(`𝗔𝘀𝘂𝗽𝗮𝗻 𝗮𝗽𝗮\n${prefix + order} bocil\n${prefix + order} geayub\n${prefix + order} rikagusrianii`) 
}
break
case 'tourl': {
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('../scrape/uploader')
let media = await downloadContentFromMessage(m.message.imageMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
if (m.isQuotedImage) {
let anu = await TelegraPh(media)
reply(util.format(anu))
} else if (!m.isQuotedImage) {
let anu = await UploadFileUgu(media)
reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
case 'jadigambar': case 'toimg': case 'toimage':{
if (q.includes('--help')) return reply(examplyme) 
   if (!m.isQuotedSticker) return reply('Reply stikernya!')
   if (!m.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated !== true) return reply ('Kalo toimg stikernya jangan yang bergerak tod!')
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
    reply('Please wait.....')
    var stream = await downloadContentFromMessage(m.message.extendedTextMessage?.contextInfo.quotedMessage.stickerMessage, 'sticker')
    var buffer = Buffer.from([])
     for await(const chunk of stream) {
      buffer = Buffer.concat([buffer, chunk])
     }
     fs.writeFileSync(`./666.jpg`, buffer)
     
     sock.sendMessage(from, { image: { url: `./666.jpg` }}, { quoted: m })
   }
  break
 case 'tomp4':{
if (q.includes('--help')) return reply(examplyme) 
   if (!m.isQuotedSticker) return reply('Reply stikernya!')
   if (m.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated !== true) return reply ('Kalo yang ini stikernya wajib yang bergerak tod!')
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
    reply('Please wait.....')
    var stream = await downloadContentFromMessage(m.message.extendedTextMessage?.contextInfo.quotedMessage.stickerMessage, 'sticker')
    var buffer = Buffer.from([])
     for await(const chunk of stream) {
      buffer = Buffer.concat([buffer, chunk])
     }
     fs.writeFileSync(`./999.webp`, buffer)
     webp2mp4File(`./999.webp`).then( data => {
     fs.unlinkSync(`./999.webp`)
     sock.sendMessage(from, { video: { url: data.result }}, { quoted: m })
     })
   }
  break
case'cnn':
if (q.includes('--help')) return reply(examquery) 
var server = await cnn()
//console.log(server)
let cn = 'CNN NEWS'
for (let i = 0; i < server.length; i++) {
cn += `\n\nTitle : ${server[i].judul}\nLink : ${server[i].link}\nImage: ${server[i].thumb}`
}
sock.sendMessage(from, {image : { url : server[10].thumb }, caption : cn}) 
break
case 'manga':{
if (q.includes('--help')) return reply(examquery) 
if (!q) return reply(`Masukkan query!`)
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
let res = await fetch(`https://api.jikan.moe/v3/search/manga?q=${q}`)
let json = await res.json()
let { title, synopsis, chapters, url, volumes, score, image_url } = json.results[0]
let mangaingfo = `*Title:* ${title}
*Chapters:* ${chapters}
*Volumes:* ${volumes}
*Score:* ${score}
*Synopsis:* ${synopsis}
*Link*: ${url}`
sock.sendMessage(from, {image : { url : image_url }, caption: mangaingfo})
} 
  break
case 'broadcast':
if (q.includes('--help')) return reply(examquery) 
if (!isOwner) return reply('khusus owner')
if (args.length < 1) return reply(`Masukkan isi pesannya`)
const bc = store.chats.all()
for (let i of bc) {
sock.sendMessage(i.id, { text: `*[ DEFFBOTZ BROADCAST ]*\n\n${q}` })
}
break
case 'couple': {
if (q.includes('--help')) return reply(examkosong) 
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
reply('Tunggu sebentar')
let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
sock.sendMessage(from, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
sock.sendMessage(from, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break
 case 'speed':
if (q.includes('--help')) return reply(examkosong) 
let timestamp = speed();
let latensi = speed() - timestamp
reply(`${latensi.toFixed(4)} Second`)
break
case 'hoorror_blood':{
if (q.includes('--help')) return reply(examquery) 
    if (args.length < 1) return m.reply(from, 'Teks?', { quoted : m } )
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
     let link = `${textproo.hoorror_blood}`
     let anu = await textpro(link, q)
     console.log(anu)
    sock.sendMessage(from, { image: { url : anu }, caption: `Nih kak, jangan lupa follow ig owner\n${Options.info.igowner}`}, { quoted: m } )
   
}
   break 
   case 'sand':{
if (q.includes('--help')) return reply(examquery) 
    if (args.length < 1) return m.reply(from, 'Teks?', { quoted : m } )
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
     let link = `${textproo.sand}`
     let anu = await textpro(link, q)
     console.log(anu)
    sock.sendMessage(from, { image: { url : anu }, caption: `Nih kak, jangan lupa follow ig owner\n${Options.info.igowner}`}, { quoted: m } )
   
}
   break
   case 'magma':{
if (q.includes('--help')) return reply(examquery) 
    if (args.length < 1) return m.reply(from, 'Teks?', { quoted : m } )
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
     let link = `${textproo.magma}`
     let anu = await textpro(link, q)
     console.log(anu)
    sock.sendMessage(from, { image: { url : anu }, caption: `Nih kak, jangan lupa follow ig owner\n${Options.info.igowner}`}, { quoted: m } )
   
}
  break
  case 'blackpink':{
if (q.includes('--help')) return reply(examquery) 
    if (args.length < 1) return m.reply(from, 'Teks?', { quoted : m } )
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
     let link = `${textproo.blackpink}`
     let anu = await textpro(link, q)
     console.log(anu)
    sock.sendMessage(from, { image: { url : anu }, caption: `Nih kak, jangan lupa follow ig owner\n${Options.info.igowner}`}, { quoted: m } )
   
}
  break
  case 'sketch':{
if (q.includes('--help')) return reply(examquery) 
    if (args.length < 1) return m.reply(from, 'Teks?', { quoted : m } )
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
     let link = `${textproo.sketch}`
     let anu = await textpro(link, q)
     console.log(anu)
    sock.sendMessage(from, { image: { url : anu }, caption: `Nih kak, jangan lupa follow ig owner\n${Options.info.igowner}`}, { quoted: m } )
   
}
  break
  case 'glass':{
if (q.includes('--help')) return reply(examquery) 
    if (args.length < 1) return m.reply(from, 'Teks?', { quoted : m } )
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
     let link = `${textproo.glass}`
     let anu = await textpro(link, q)
     console.log(anu)
    sock.sendMessage(from, { image: { url : anu }, caption: `Nih kak, jangan lupa follow ig owner\n${Options.info.igowner}`}, { quoted: m } )
   
}
   break
   case 'lightglow':{
if (q.includes('--help')) return reply(examquery) 
    if (args.length < 1) return m.reply(from, 'Teks?', { quoted : m } )
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
     let link = `${textproo.lightglow}`
     let anu = await textpro(link, q)
     console.log(anu)
    sock.sendMessage(from, { image: { url : anu }, caption: `Nih kak, jangan lupa follow ig owner\n${Options.info.igowner}`}, { quoted: m } )
   
}
  break
  case 'sci_fi':{
if (q.includes('--help')) return reply(examquery) 
    if (args.length < 1) return m.reply(from, 'Teks?', { quoted : m } )
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
      if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
      kurangLimit(m.sender, 1)
      reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
      let link = `${textproo.sci_fi}`
      let anu = await textpro(link, q)
     console.log(anu)
    sock.sendMessage(from, { image: { url : anu }, caption: `Nih kak, jangan lupa follow ig owner\n${Options.info.igowner}`}, { quoted: m } )
  
}
  break
  case 'ice':{
if (q.includes('--help')) return reply(examquery) 
    if (args.length < 1) return m.reply(from, 'Teks?', { quoted : m } )
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
     let link = `${textproo.ice}`
     let anu = await textpro(link, q)
     console.log(anu)
    sock.sendMessage(from, { image: { url : anu }, caption: `Nih kak, jangan lupa follow ig owner\n${Options.info.igowner}`}, { quoted: m } )
   
}
  break
  case 'demon':{
if (q.includes('--help')) return reply(examquery) 
    if (args.length < 1) return m.reply(from, 'Teks?', { quoted : m } )
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
     let link = `${textproo.gdemon}`
     let anu = await textpro(link, q)
     console.log(anu)
    sock.sendMessage(from, { image: { url : anu }, caption: `Nih kak, jangan lupa follow ig owner\n${Options.info.igowner}`}, { quoted: m } )
   
}
  break
  case 'batman':{
if (q.includes('--help')) return reply(examquery) 
    if (args.length < 1) return m.reply(from, 'Teks?', { quoted : m } )
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
     let link = `${textproo.batman}`
     let anu = await textpro(link, q)
     console.log(anu)
    sock.sendMessage(from, { image: { url : anu }, caption: `Nih kak, jangan lupa follow ig owner\n${Options.info.igowner}`}, { quoted: m } )
   
}
  break
  case 'sea_metal':{
if (q.includes('--help')) return reply(examquery) 
    if (args.length < 1) return m.reply(from, 'Teks?', { quoted : m } )
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
     let link = `${textproo.sea_metal}`
     let anu = await textpro(link, q)
     console.log(anu)
    sock.sendMessage(from, { image: { url : anu }, caption: `Nih kak, jangan lupa follow ig owner\n${Options.info.igowner}`}, { quoted: m } )
   
}
  break
  case 'skeleton':{
if (q.includes('--help')) return reply(examquery) 
    if (args.length < 1) return m.reply(from, 'Teks?', { quoted : m } )
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
     let link = `${textproo.skeleton}`
     let anu = await textpro(link, q)
     console.log(anu)
    sock.sendMessage(from, { image: { url : anu }, caption: `Nih kak, jangan lupa follow ig owner\n${Options.info.igowner}`}, { quoted: m } )
   
}
  break
  case 'warning':{
if (q.includes('--help')) return reply(examquery) 
    if (args.length < 1) return m.reply(from, 'Teks?', { quoted : m } )
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
     let link = `${textproo.warning}`
     let anu = await textpro(link, q)
     console.log(anu)
    sock.sendMessage(from, { image: { url : anu }, caption: `Nih kak, jangan lupa follow ig owner\n${Options.info.igowner}`}, { quoted: m } )
   
}
  break
  case 'transformer':{
if (q.includes('--help')) return reply(examquery) 
    if (args.length < 1) return m.reply(from, 'Teks?', { quoted : m } )
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
     let link = `${textproo.transformer}`
     let anu = await textpro(link, q)
     console.log(anu)
    sock.sendMessage(from, { image: { url : anu }, caption: `Nih kak, jangan lupa follow ig owner\n${Options.info.igowner}`}, { quoted: m } )
   
}
  break
  case 'denim':{
if (q.includes('--help')) return reply(examquery) 
    if (args.length < 1) return m.reply(from, 'Teks?', { quoted : m } )
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
     let link = `${textproo.denim}`
     let anu = await textpro(link, q)
     console.log(anu)
    sock.sendMessage(from, { image: { url : anu }, caption: `Nih kak, jangan lupa follow ig owner\n${Options.info.igowner}`}, { quoted: m } )
   
}
  break
case 'kisahnabi':
if (q.includes('--help')) return reply(examquery) 
const res = await Searchnabi(q) 
const result = `*Nama* : ${res.name}\n*Wafat* : ${res.wafat_usia}\n*Kelahiran* : ${res.kelahiran}\n*Singgah* : ${res.singgah}\n*Kisah* : ${res.kisah}`
sock.sendMessage(from, {image : { url : 'https://i.ibb.co/Kw282gw/b54b1faadf3b.jpg' }, caption : result}) 
break	
case 'hidetag':
if (q.includes('--help')) return reply(examquery) 
if (!isGroupAdmins && !isOwner) return reply('Khusus Admin')
let mem = [];
groupMembers.map( i => mem.push(i.id) )
sock.sendMessage(from, { text: q ? q : '', mentions: mem })
break
case 'pinterest': {
if (q.includes('--help')) return reply(examquery) 
reply('Tunggu Sebentar')
const anu = await pinterest(q)
const result = anu[Math.floor(Math.random(), anu.length)]
sock.sendMessage(from, { image: { url: result }, caption: '▹ Media Url : '+result }, { quoted: m })
            }
            break
  case 'antilink':
if (q.includes('--help')) return reply(`*Example* : ${prefix+order}off/on`) 
if (!isGroup) return reply('Khusus Grup')
if (!isGroupAdmins) return reply('Khusus Admin') 
if (!isBotGroupAdmins) return reply('Bot bukan admin') 
if (q === 'on') {
if (isAntiLink) return reply('Sudah Aktif Kak')
antilink.push(m.sender)
fs.writeFileSync('./storage/user/antilink.json', JSON.stringify(antilink))
reply('Sukses mengaktifkan fitur antilink')
sock.sendMessage(from,  {text: `ALLERT!!! Group ini sudah di pasang anti link\nJika Kamu Melanggar Maka Akan Saya Tendang`})
} else if (q === 'off') {
if (!isAntiLink) return reply('Sudah Mati Kak')
var ini = antilink.indexOf(m.sender)
antilink.splice(ini, 1)
fs.writeFileSync('./storage/user/antilink.json', JSON.stringify(antilink))
reply('Sukses menonaktifkan fitur antilink')
} else if (!q){
 reply(`Pilih Antilink On / Off `)
}
break 		
  case 'add':{
if (q.includes('--help')) return reply(examtag) 
   if (!isGroup) return reply('Khusus Grup')
   if (!isGroupAdmins) return reply('Khusus Admin')
   if (!isBotGroupAdmins) return reply('Bot Bukan Admin')
   if (args[1]){
    let number = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
    sock.groupParticipantsUpdate(from, [number], "add")
   } 
  else 
   {
    sock.groupParticipantsUpdate(from, mentionUser, "add")
   }
   }
  break
  case 'kick':{
if (q.includes('--help')) return reply(examtag) 
   if (!isGroup) return reply('Khusus Grup')
   if (!isGroupAdmins) return reply('Khusus Admin')
   if (!isBotGroupAdmins) return reply('Bot Bukan Admin')
   console.log(mentionUser)
   sock.groupParticipantsUpdate(from, mentionUser, "remove")
   }
  break
  case 'limituser':
{      
   let txt = `「 *ALL LIMIT USER* 」\n\n`
     for (let i of _limit){
     txt += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Limit* : ${i.limit}\n`
     }
    reply(txt)       
  }
 break
 case 'leaderboard':
{      
   let txt = `「 *LEADERBOARD* 」\n\n`
     for (let i of _buruan){
     txt += `➸ *ID :* ${i.id}\n`
     txt += `*🐟Ikan* : ${i.ikan}\n`
     txt += `*🐔Ayam* : ${i.ayam}\n`
     txt += `*🐇Kelinci* : ${i.kelinci}\n`
     txt += `*🐑Domba* : ${i.domba}\n`
     txt += `*🐄Sapi* : ${i.sapi}\n`
     txt += `*🐘Gajah* : ${i.gajah}\n\n`
     }
    reply(txt)       
  }
 break
case 'mining': case 'menambang':{
if (q.includes('--help')) return reply(examkosong) 
  if (!isInventory){ addInventori(m.sender) }
  if (isCekDarah < 1) return reply('Kamu kelelahan!, cobalah heal menggunakan potion') 
  let besi = [1,2,5,0,3,0,1,1,4,1,5,0,0]
  let emas = [0,1,2,3,0,0,0,1,1,0,0,2]
  let emerald = [0,0,1,0,0,1,0,2,1,0,0,1]
  var besinya = besi[Math.floor(Math.random() * besi.length)]  
  var emasnya = emas[Math.floor(Math.random() * emas.length)]  
  var emeraldnya = emerald[Math.floor(Math.random() * emerald.length)]  
  setTimeout( () => {
  let caption = `[ HASIL MENAMBANG ]\n*Besi* : ${besinya}\n*Emas* : ${emasnya}\n*Emerald* : ${emeraldnya}`
  let buttons = [
      {
       buttonId: `${prefix + order}`, 
       buttonText: {
        displayText: 'Menambang lagi⛏️'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: './storage/image/tambang.jpg' },
      caption: caption,
      footer: Options.info.botName,
      buttons: buttons,
      headerType: 4
     }
     sock.sendMessage(from, buttonMessage, { quoted: m })
   
   }, 7000)  
  setTimeout( () => {
  reply(`@${m.sender.split("@")[0]} Mulai menambang🎣`)     
  }, 1500)
  kurangDarah(m.sender, 10)
  addBesi(m.sender, besinya)
  addEmas(m.sended, emasnya)
  addEmerald(m.sender, emeraldnya)	     
  }   
  break  
  //transaksi
 case 'beli': case 'buy':{
if (q.includes('--help')) return reply(examkosong) 
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 if (!q) return reply('Mau beli apa?')
 var anu = args[1]
  if (args[0] === 'potion'){
  let noh = 100000 * anu
 if (!args[1]) return reply(`Example : ${prefix + order} potion 2\n 1 potion = 100000 monay`)
 if (isMonay < noh) return reply('Sisa monay kamu tidak mencukupi untuk pembelian ini')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addPotion(m.sender, apalu)
  setTimeout( () => {
  reply(`Transaksi berhasil ✔️\n*Sisa monay kamu* : ${getMonay(m.sender)}\n*Potion kamu* : ${getPotion(m.sender)}`)
  }, 2000) 
 } else 
 if (args[0] === 'umpan'){
  let noh = 5000 * anu
 if (!args[1]) return reply(`Example : ${prefix + order} umpan 2\n 1 umpan = 2500 monay`)
 if (isMonay < noh) return reply('Sisa monay kamu tidak mencukupi untuk pembelian ini')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addUmpan(m.sender, apalu)
  setTimeout( () => {
  reply(`Transaksi berhasil ✔️\n*Sisa monay kamu* : ${getMonay(m.sender)}\n*Umpan kamu* : ${getUmpan(m.sender)}`)
  }, 2000) 
  } else 
  if (args[0] === 'limit'){
  let noh = 35000 * anu
 if (!args[1]) return reply(`Example : ${prefix + order} limit 2\n 1 limit = 35000 monay`)
 if (isMonay < noh) return reply('Sisa monay kamu tidak mencukupi untuk pembelian ini')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addLimit(m.sender, apalu)
  setTimeout( () => {
  reply(`Transaksi berhasil ✔️\n*Sisa monay kamu* : ${getMonay(m.sender)}\n*Limit kamu* : ${getLimit(m.sender)}`)
  }, 2000) 
  } else { reply("Format salah!") }
 }
 break
 case 'sel': case 'jual':{//BY LORD RIFZA
 if (!q) return  reply(`Mau jual apa?\nExample : ${prefix + order} ikan 2`)
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 var anu = args[1]
 if (args[0] === 'ikan'){
 if (isIkan < anu) return reply('Ikan kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return reply(`Example : ${prefix + order} ikan 2\n 1 ikan = 1500 monay`)
 kurangIkan(m.sender, anu)
 let monaynya = 1500 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Ikan kamu* : ${getIkan(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'ayam'){
 if (isAyam < anu) return reply('Ayam kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return reply(`Example : ${prefix + order} ayam 2\n 1 ayam = 2500 monay`)
 kurangAyam(m.sender, anu)
 let monaynya = 2500 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Ayam kamu* : ${getAyam(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'kelinci'){
 if (isKelinci < anu) return reply('Kelinci kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return reply(`Example : ${prefix + order} kelinci 2\n 1 kelinci = 3000 monay`)
 kurangKelinci(m.sender, anu)
 let monaynya = 3000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Kelinci kamu* : ${getKelinci(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'domba'){
 if (isDomba < anu) return reply('Domba kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return reply(`Example : ${prefix + order} domba 2\n 1 domba = 5000 monay`)
 kurangDomba(m.sender, anu)
 let monaynya = 5000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Domba kamu* : ${getDomba(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'sapi'){
 if (isSapi < anu) return reply('Sapi kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return reply(`Example : ${prefix + order} sapi 2\n 1 sapi = 10000 monay`)
 kurangSapi(m.sender, anu)
 let monaynya = 10000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Sapi kamu* : ${getSapi(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'gajah'){
 if (isGajah < anu) return reply('Gajah kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return reply(`Example : ${prefix + order} gajah 2\n 1 gajah = 15000 monay`)
 kurangGajah(m.sender, anu)
 let monaynya = 15000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Gajah kamu* : ${getGajah(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'besi'){
 if (isBesi < anu) return reply('Besi kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return reply(`Example : ${prefix + order} besi 2\n 1 besi = 15000 monay`)
 kurangBesi(m.sender, anu)
 let monaynya = 16000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Besi kamu* : ${getBesi(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'emas'){
 if (isEmas < anu) return reply('Besi kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return reply(`Example : ${prefix + order} emas 2\n 1 emas = 50000 monay`)
 kurangEmas(m.sender, anu)
 let monaynya = 50000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa emas kamu* : ${getEmas(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'emerald'){
 if (isEmerald < anu) return reply('Besi kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return reply(`Example : ${prefix + order} emerald 2\n 1 emerald = 100000 monay`)
 kurangEmerald(m.sender, anu)
 let monaynya = 100000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa emerald kamu* : ${getEmerald(m.sender)}`)
  }, 2000) 
 } else { reply("Format salah!") }

 }
 break

 case 'heal':{
if (q.includes('--help')) return reply(examkosong) 
 if (!isCekDarah < 1) return reply('Kamu hanya bisa heal ketika darah kamu 0')
 if (isCekDarah > 100) return reply('Darah kamu sudah penuh')
 if (isPotion < 1) return reply('Kamu tidak punya potion, cobalah beli dengan cara #buypotion _jumlah_') 
 addDarah(m.sender, 100)
 kurangPotion(m.sender, 1)
 reply('Berhasil, darah kamu sudah full')
 }
 break
 case 'berburu':{
if (q.includes('--help')) return reply(examkosong) 
 //Peringatan!!!!, ini buatan rifza. jangan claim punya lu:)
 if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
 if (isCekDarah < 1) return reply('Darah kamu habis, cobalah heal menggunakan potion') 
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
  let luka = ["Tertusuk duri saat berburu","Terpeleset ke jurang saat berburu","Tercakar hewan buas","Tidak berhati-hati","Terjerat akar","Terjatuh saat berburu"]
  let location = ["Hutan rimba","Hutan Amazon","Hutan tropis","Padang rumput","Hutan afrika","Pegunungan"]
   var ikanmu = Math.ceil(Math.random() * 10)
   var ayam = Math.ceil(Math.random() * 8)
   var kelinci = Math.ceil(Math.random() * 7)
   var dombanya = [3,0,4,0,5,4,6,0,1,0,2,3,0,3,0,1]
   var sapinya = [2,0,3,0,4,0,5,0,1,0,2,0,3,0,1]
   var gajahnya = [1,0,4,0,2,0,1,0,2,1,3,0,1]
   var domba = dombanya[Math.floor(Math.random() * dombanya.length)] 
   var sapi = sapinya[Math.floor(Math.random() * sapinya.length)] 
   var gajah = gajahnya[Math.floor(Math.random() * gajahnya.length)]    
   var lukanya = luka[Math.floor(Math.random() * luka.length)]
   var lokasinya = location[Math.floor(Math.random() * location.length)]
 if (lokasinya === 'Hutan rimba') {
    var image = './storage/image/rimba.jpg'
   } else
 if (lokasinya === 'Hutan Amazon') {
    var image =  './storage/image/amazon.jpg'
   } else
 if (lokasinya === 'Hutan tropis') {
    var image = './storage/image/tropis.jpg'
   } else
 if (lokasinya === 'Padang rumput') {
    var image = './storage/image/padang_rumput.jpg'
   } else
 if (lokasinya === 'Hutan afrika') {
    var image = './storage/image/afrika.jpg'
   } else
 if (lokasinya === 'Pegunungan') {
   var image = './storage/image/pegunungan.jpg'
   }
 setTimeout( () => {
  let teksehmazeh = `_[ HASIL BURUAN ]_\n`
     teksehmazeh += `*🐟Ikan* : ${ikanmu}\n`
     teksehmazeh += `*🐔Ayam* : ${ayam}\n`
     teksehmazeh += `*🐇Kelinci* : ${kelinci}\n`
     teksehmazeh += `*🐑Domba* : ${domba}\n`
     teksehmazeh += `*🐄Sapi* : ${sapi}\n`
     teksehmazeh += `*🐘Gajah* : ${gajah}\n\n`
     teksehmazeh += `_[ INFO ]_\n`
     teksehmazeh += `*Lokasi* : ${lokasinya}\n`
     teksehmazeh += `*Terluka* : ${lukanya}, darah - 10\n`
     teksehmazeh += `*Sisa darah* : ${getDarah(m.sender)}\n`
    let buttons = [
      {
       buttonId: `${prefix + order}`, 
       buttonText: {
        displayText: 'Berburu lagi️🏹'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: image },
      caption: teksehmazeh,
      footer: Options.info.botName,
      buttons: buttons,
      headerType: 4
     }
     sock.sendMessage(from, buttonMessage, { quoted: m })      
  }, 5000)  
 setTimeout( () => {
  reply(`@${m.sender.split("@")[0]} Mulai berburu di ${lokasinya}`)     
  }, 1000) 
 addIkan(m.sender, ikanmu) 
   addAyam(m.sender, ayam) 
   addKelinci(m.sender, kelinci)
   addDomba(m.sender, domba)
   addSapi(m.sender, sapi)
  addGajah(m.sender, gajah)
 kurangDarah(m.sender, 10)
 }
 break
 case 'owner': case 'creator': {
   for (let x of Options.info.owner) {
   sock.sendContact(from, x.split('@s.whatsapp.net')[0], Options.info.ownerName, m)
	}			    
   }
  break
  case 'artinama':{
if (q.includes('--help')) return reply(examquery) 
  if (!q) return reply('Namanya siapa?')
  let namalu = await arti_nama(q)
  let teksnya = `[ *NAMA* : ${namalu.message.nama} ]\n*Arti* : ${namalu.message.arti}`
  reply(teksnya)
  console.log(namalu)
  }
  break
  
  case 'inventori': case 'profile':{
if (q.includes('--help')) return reply(examkosong) 
  if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
  if (!isInventory){ addInventori(m.sender) }
  if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }
  
  let teksehmazeh = `_[ 👩🏻‍💼INFO USER👨🏻‍💼 ]_\n\n`
     teksehmazeh += `*❤️Darah kamu* : ${getDarah(m.sender)}\n`
     teksehmazeh += `*◻️️Besi kamu* : ${getBesi(m.sender)}\n`
     teksehmazeh += `*🌟Emas Kamu* : ${getEmas(m.sender)}\n`
     teksehmazeh += `*💎Emerald Kamu* : ${getEmerald(m.sender)}\n`
     teksehmazeh += `*⏺️Limit kamu* : ${getLimit(m.sender)}\n`
     teksehmazeh += `*🧪Potion Kamu* : ${getPotion(m.sender)}\n\n`
     teksehmazeh += `_[ 🐺HASIL BURUAN🐺 ]_\n`
     teksehmazeh += `*🐟Ikan* : ${getIkan(m.sender)}\n`
     teksehmazeh += `*🐔Ayam* : ${getAyam(m.sender)}\n`
     teksehmazeh += `*🐇Kelinci* : ${getKelinci(m.sender)}\n`
     teksehmazeh += `*🐑Domba* : ${getDomba(m.sender)}\n`
     teksehmazeh += `*🐄Sapi* : ${getSapi(m.sender)}\n`
     teksehmazeh += `*🐘Gajah* : ${getGajah(m.sender)}\n\n`
     teksehmazeh += `_*${Options.info.botName}*_`
  
  reply(teksehmazeh)
  }
  break
  case 'mancing':{
if (q.includes('--help')) return reply(examkosong) 
  if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
  if (isUmpan < 1) return reply('Umpan kamu habis!, cobalah berburu dan ubah dagingnya menjadi umpan')
  reply("1 umpan terpakai")
  var ikannya = ikan[Math.floor(Math.random() * ikan.length)]
  var ditangkap = Math.ceil(Math.random() * 20)
  setTimeout( () => {
  let caption = `Hasil tangkapan : ${ikannya}\n> Jumlah tangkapan : ${ditangkap}`
  let buttons = [
      {
       buttonId: `${prefix + order}`, 
       buttonText: {
        displayText: 'Mancing lagi🎣'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: './storage/image/mancing.jpg' },
      caption: caption,
      footer: Options.info.botName,
      buttons: buttons,
      headerType: 4
     }
     sock.sendMessage(from, buttonMessage, { quoted: m })
   
   }, 7000)  
  setTimeout( () => {
  reply(`@${m.sender.split("@")[0]} Mulai memancing🎣`)     
  }, 1500)
  kurangUmpan(m.sender, 1)
  addIkan(m.sender, ditangkap)	     
  }   
  break  
  case 'darah':{
  if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
  let dapat =  getDarah(m.sender)
  reply(`${dapat}`)
  }
  break
  case 'bacok':{
  if (isCekDarah < 1) return reply('Darah kamu habis')
   kurangDarah(m.sender, 10)
  reply('success✔️')
  }
  break
  case 'menu2':{  
   let button = [{
     index: 1, 
      urlButton: {
       displayText: 'My Github', 
       url: 'https://github.com/',
       } 
     },     
     {
     index: 2, 
      quickReplyButton: {
       displayText: 'Click', 
       id: 'tes'
      } 
    },
    { 
     index: 3, 
      quickReplyButton: {
       displayText: 'Click2', 
       id: '#tes'
        } 
     },
     {
     index: 4, 
      quickReplyButton: {
       displayText: 'Click', 
       id: '#tes'
        } 
      },]
      m.templateButon5IMG(from, MenuList, Options.info.botName, thumb, button, m)
   }
   break
   case 'menu':
   let buttonss = [{
     index: 1, 
      urlButton: {
       displayText: 'GAMETORA UMAMUSUME', 
       url: 'https://gametora.com/umamusume',
       } 
     },     
     {
      index: 1, 
       urlButton: {
       displayText: 'OWNERBOT', 
       url: 'https://www.facebook.com/ryanxmaster',
       }
       }, 
       {
       index: 1, 
       urlButton: {
       displayText: 'GAMEWITH UMAMUSUME', 
       url: 'https://gamewith.jp/uma-musume/',
       }
       }, 
       {
     index: 2, 
      quickReplyButton: {
       displayText: '🌀sᴘᴇᴇᴅ', 
       id: '#speed'
      } 
    },
    { 
     index: 3, 
      quickReplyButton: {
       displayText: '⚜️ʀᴜɴᴛɪᴍᴇ', 
       id: '#runtime'
        } 
     }
      ]
    await m.sendButton(
    from, 
    MenuList,
    `Jika Kamu bingung dengan command berikut\nbisa tambahkan --help untuk melihat bantuan\n𝗘𝘅𝗮𝗺𝗽𝗹𝗲 : #sticker --help`, 
    buttonss, 
    thumb, 
    await m.createMsg(
     from, 
     {
     video: {
      url: './storage/video/menu1.mp4', 
      thumbnail : thumb, 
      }, 
      gifPlayback: true
     }, 
     )
    )
   break
   case 'tes':{
     m.reply(from, 'hallo', { quoted : m } )
   }
   break
   case 'temp':{
   const templateMessage = {
    text: "Hi it's a template message",
    footer: 'Hello World',
    templateButtons: [
     {
     index: 1, 
      urlButton: {
       displayText: 'MyAccount', 
       url: 'https://fb.me/ryanxmaster',
      } },
     {
     index: 2, 
     callButton: {
      displayText: 'Owner', 
       phoneNumber: '6281903885916',
      } },
     {
     index: 3, 
      quickReplyButton: {
       displayText: 'Click', 
       id: '#tes'
       } },
    { 
     index: 4, 
      quickReplyButton: {
       displayText: 'Click2', 
       id: '#tes'
       } },
     {
     index: 5, 
      quickReplyButton: {
       displayText: 'Click', 
       id: '#tes'
       } },
     ],
    }
   const sendm =  sock.sendMessage(
    from, 
    templateMessage
    )
   }
  break  
  case 'runtime':{
    const templateMessage = {
    text: "ACTIVE FOR",
    footer: `${runtime(process.uptime())}`,
    templateButtons: [
     {
     index: 1, 
      urlButton: {
       displayText: 'My Acc', 
       url: 'https://fb.me/ryanxmaster',
       } }
      ]
     }
     const sendm =  sock.sendMessage(
       from, 
       templateMessage
      )
    }
  break  
  case 'listsection1':{
  // send a list message!
   const sections = [
    {
	title: "Section",
	rows: [
	   {
	    title: "List1", 
	    rowId: "option"
	   },	    
     ]
    }    
    ]

  const listMessage = {
   text: "This is a list",
   footer: "This is footer text",
   title: "List message",
   buttonText: "Required, text on the button to view the list",
   sections
   }

  const sendm =  sock.sendMessage(
     from, 
     listMessage
  )

  }
  break
  case 'listsection2':{
  // send a list message!
   const sections = [
    {
	title: "Section 1",
	rows: [
	    {
	     title: "Option 1", 
    	 rowId: "option1"
	    },
	    {
	     title: "Option 2", 
	     rowId: "option2", 
	     description: "This is a description"
	    }
     ]
    },
    {
	title: "Section 2",
	rows: [
	    {
	     title: "Option 3", 
	     rowId: "option3"
	     },
	    {
	     title: "Option 4", 
	     rowId: "option4", 
	     description: "This is a description V2"
	    }
       ]
     },
    ]

  const listMessage = {
   text: "This is a list",
   footer: "This is footer text",
   title: "List message",
   buttonText: "Required, text on the button to view the list",
   sections
   }

  const sendm =  sock.sendMessage(
      from, 
      listMessage
    )

  }
  break
  
  case 'detiknews': case 'detik':{
if (q.includes('--help')) return reply(examquery) 
  if (args.length < 1) return m.reply(from, 'Cari berita apa?', { quoted : m } )
  const aku_biji = await detikNews(args.join(' ')).catch(e => console.log("Undefined"))
  console.log(aku_biji)   
  let sections = []   
  for (let i = 0; i < aku_biji.length; i++) {
  const list = {title: `${aku_biji[i].Title}`,
  rows: [
	    {
	     title: `Result detik news ${i + 1}`, 
	     rowId: `#reply ${aku_biji[i].Link}`,
	     description: ``
	    }, 
	    ]
     }
     sections.push(list)   
     }
  const sendm =  sock.sendMessage(
      from, 
      {
       text: "Cari berita di detik.com",
       footer: Options.info.botName,
       title: "[ DETIK NEWS SEARCH 🔎 ]",
       buttonText: "Click and see search results➡️",
       sections
      }, { quoted : m }
    )  
   }
  break
  case 'anime': {
if (q.includes('--help')) return reply(examquery) 
if (args.length < 1) return m.reply(from, 'Nama anime?', { quoted : m } )
await fetchJson(`https://api.jikan.moe/v4/anime?q=${q}`)
.then((res) =>{
console.log(res)   
let sections = []   
  for (let i of res.data) {
  const list = {title: `${i.title}`,
  rows: [
	    {
	     title: `${i.title}\n\n`, 
	     rowId: `${prefix}animee ${i.mal_id}`,
	     description: `${i.synopsis}`
	    }, 
	    ]
     }
     sections.push(list)   
     }
  const sendm =  sock.sendMessage(
      from, 
      {
       text: "𝗔𝗻𝗶𝗺𝗲 𝗦𝗲𝗮𝗿𝗰𝗵",
       footer: Options.info.botName,
       title: "[ Wibu² Bau Bawang ]",
       buttonText: "Click and see search results➡️",
       sections
      }, { quoted : m }
    )  
})
}
  break
case 'animee':{
await fetchJson(`https://api.jikan.moe/v4/anime/${q}`)
.then((res) => {
let txt = `𝗔𝗻𝗶𝗺𝗲 𝗜𝗻𝗳𝗼\n\n*Judul:* *${res.data.title}*\n*English:* *${res.data.title_english}*\n*Japanese:* *${res.data.title_japanese}*\n*Type Anime:* *${res.data.type}*\n*Adaptasi:* *${res.data.source}*\n*Total Episode:* *${res.data.episodes}*\n*Status:* *${res.data.status}*\n*Ongoing:* *${res.data.airing ? 'Ya' : 'Tidak'}*\n*Aired:* *${res.data.aired.string}*\n*Durasi:* *${res.data.duration}*\n*Rating:* *${res.data.rating}*\n*Score:* *${res.data.score}*\n*Rank:* *${res.data.rank}*\n*Produser Utama:* *${res.data.producers.name}*\n*Studio:* *${res.data.studios[0].name}* `
sock.sendMessage(from, { image : { url : res.data.images.jpg.image_url}, caption : txt}, {quoted :m }) 
})
}
break
case 'brainly':
if (q.includes('--help')) return reply(examquery) 
const anj = await brainly(q)
  var hmm2 = '────────────────💟\n'
  for (let Y of anj.data) {
  hmm2 += `*Pertanyaan:* ${Y.pertanyaan}\n\n*Jawaban:* ${Y.jawaban[0].text}\n──────────────────💖\n`
  }
  sock.sendMessage(from, {image : { url : 'https://telegra.ph/file/ba004c72b2222f4913e99.jpg' }, caption : hmm2}) 
  
break		
  
  case 'reply':{
  let textz = q || 'undefined'
  m.reply(from, textz, { quoted : m } )
  }
  break

  case 'play': case 'lagu': case 'musik': case 'yts': case 'ytsearch': 
function _0x40d5(_0x445370,_0x3f8e5f){const _0x68ebb7=_0x68eb();return _0x40d5=function(_0x40d5eb,_0x5bca3a){_0x40d5eb=_0x40d5eb-0x9e;let _0x17bdbe=_0x68ebb7[_0x40d5eb];return _0x17bdbe;},_0x40d5(_0x445370,_0x3f8e5f);}function _0x68eb(){const _0x109d2a=['1395522BogHDp','2891hgNGbx','url','#youtubemp3\x20','[\x20🎵\x20]\x20MP3','👤Artist\x20:\x20','lagu\x20apa?','6966756qRhbno','log','\x0a\x0aℹ️Id\x20:\x20','\x0a\x0a💽Album\x20:\x20','#youtubemp4\x20','duration','Click\x20and\x20see\x20search\x20results➡️','[\x20🏓\x20]\x20LINK','--help','YouTube\x20Music','info','sendMessage','push','isYtMusic','title','\x0a\x0a🔎Source\x20:\x20','YouTube','label','album','length','31GKDeOC','reply','includes','4616rWWNZo','1077363oTWjLq','[\x20YouTube\x20Music\x20Search🔎\x20]','1076272WyisJq','\x0a\x0a📊Duration\x20:\x20','483855wvzNxF','14502AXDrHH','artist','join','#reply\x20'];_0x68eb=function(){return _0x109d2a;};return _0x68eb();}const _0xe392fe=_0x40d5;(function(_0x24ceb8,_0x17ff33){const _0x1fea26=_0x40d5,_0x472ac8=_0x24ceb8();while(!![]){try{const _0x397b7d=-parseInt(_0x1fea26(0xbc))/0x1*(-parseInt(_0x1fea26(0xc5))/0x2)+-parseInt(_0x1fea26(0xc0))/0x3+-parseInt(_0x1fea26(0xc2))/0x4+-parseInt(_0x1fea26(0xc4))/0x5+parseInt(_0x1fea26(0xa1))/0x6+parseInt(_0x1fea26(0xa2))/0x7*(-parseInt(_0x1fea26(0xbf))/0x8)+parseInt(_0x1fea26(0xa8))/0x9;if(_0x397b7d===_0x17ff33)break;else _0x472ac8['push'](_0x472ac8['shift']());}catch(_0x3ccc13){_0x472ac8['push'](_0x472ac8['shift']());}}}(_0x68eb,0x4179f));{if(q[_0xe392fe(0xbe)](_0xe392fe(0xb0)))return reply(examquery);if(args[_0xe392fe(0xbb)]<0x1)return m[_0xe392fe(0xbd)](from,_0xe392fe(0xa7),{'quoted':m});const fresh=await searchResult(args[_0xe392fe(0x9f)]('\x20'));console[_0xe392fe(0xa9)](fresh);let sections=[];for(let i=0x0;i<fresh[_0xe392fe(0xbb)];i++){const list={'title':i+0x1+'.\x20'+fresh[i][_0xe392fe(0xb6)],'rows':[{'title':_0xe392fe(0xa5),'rowId':_0xe392fe(0xa4)+fresh[i]['url'],'description':_0xe392fe(0xa6)+fresh[i]['artist']+_0xe392fe(0xab)+fresh[i][_0xe392fe(0xba)]+_0xe392fe(0xc3)+fresh[i][_0xe392fe(0xad)][_0xe392fe(0xb9)]+'\x0a\x0a🔎Source\x20:\x20'+(fresh[i][_0xe392fe(0xb5)]?_0xe392fe(0xb1):'YouTube')+_0xe392fe(0xaa)+fresh[i]['id']},{'title':'[\x20▶️\x20]\x20MP4','rowId':_0xe392fe(0xac)+fresh[i][_0xe392fe(0xa3)],'description':_0xe392fe(0xa6)+fresh[i][_0xe392fe(0x9e)]+_0xe392fe(0xab)+fresh[i]['album']+_0xe392fe(0xc3)+fresh[i]['duration'][_0xe392fe(0xb9)]+_0xe392fe(0xb7)+(fresh[i][_0xe392fe(0xb5)]?_0xe392fe(0xb1):_0xe392fe(0xb8))+_0xe392fe(0xaa)+fresh[i]['id']},{'title':_0xe392fe(0xaf),'rowId':_0xe392fe(0xa0)+fresh[i]['url'],'description':_0xe392fe(0xa6)+fresh[i][_0xe392fe(0x9e)]+_0xe392fe(0xab)+fresh[i][_0xe392fe(0xba)]+_0xe392fe(0xc3)+fresh[i][_0xe392fe(0xad)][_0xe392fe(0xb9)]+_0xe392fe(0xb7)+(fresh[i][_0xe392fe(0xb5)]?_0xe392fe(0xb1):_0xe392fe(0xb8))+_0xe392fe(0xaa)+fresh[i]['id']}]};sections[_0xe392fe(0xb4)](list);}const sendm=sock[_0xe392fe(0xb3)](from,{'text':'The\x20most\x20complete\x20collection\x20of\x20songs\x20mp3/mp4✔️','footer':Options[_0xe392fe(0xb2)]['botName'],'title':_0xe392fe(0xc1),'buttonText':_0xe392fe(0xae),'sections':sections},{'quoted':m});}
  break
  case 'ytmp3':
  case 'youtubemp3':{
if (q.includes('--help')) return reply(examlink) 
  if (args.length < 1) return reply('linknya?')
  if (!isInventoryLimit){ addInventoriLimit(m.sender) }
  if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
  kurangLimit(m.sender, 1)
  reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)  
   try{
    await yta(args[0])
.then((res) => {
     const { dl_link } = res
      axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then((a) => {
   
      sock.sendMessage(from, { audio: { url: dl_link }, mimetype: 'audio/mp4' }, { quoted: m })
      })
     
})
     } catch (e){
    m.reply(from, `Akses ditolak, tidak dapat mengunduh!. Cobalah menggunakan link yang lain`, { quoted : m })
   }
  }
  break
  case 'ytmp4':
  case 'youtubemp4':{
if (q.includes('--help')) return reply(examlink) 
  if (args.length < 1) return reply('linknya?')
  if (!isInventoryLimit){ addInventoriLimit(m.sender) }
  if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
  kurangLimit(m.sender, 1)
  reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
   try{
    await ytv(args[0])
.then((res) => {
     const { dl_link } = res
      axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then((a) => {
   
      sock.sendMessage(from, { video: { url: dl_link }, caption: "This is the result\nHope you are happy with our service😊" }, { quoted: m })
      })
     
})
     } catch (e){
    m.reply(from, `Akses ditolak, tidak dapat mengunduh!. Cobalah menggunakan link yang lain`, { quoted : m })
   }
  }
  break
  
  
  case 'p':
   sock.sendMessage(
     from, 
     { 
      sticker: { 
       url: "https://f.top4top.io/p_2252t7a7n1.jpg" 
       } 
      }, 
     { quoted: m }
    )
  break 
  

  case 'sticker': case 'stiker': case 's': case 'stickergif': case 'sgif': case 'stikergif': case 'stikgif':{			   			   
if (q.includes('--help')) return reply(examplyme) 
   try{
   if (m.isQuotedImage) {
    var stream = await downloadContentFromMessage(m.message.imageMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
    var buffer = Buffer.from([])
    for await(const chunk of stream) {
     buffer = Buffer.concat([buffer, chunk])
    }
   
    let ran = '666.webp'
    fs.writeFileSync(`./${ran}`, buffer)
     ffmpeg(`./${ran}`)
     .on("error", console.error)
     .on("end", () => {
      exec(`webpmux -set exif ./FunctionMD/sticker/data.exif ./${ran} -o ./${ran}`, async (error) => {
      sock.sendMessage(
          from, 
          { 
         sticker: fs.readFileSync(`./${ran}`) 
         })
				
        fs.unlinkSync(`./${ran}`)
			       
       })
      })
	 .addOutputOptions([
       "-vcodec", 
 	   "libwebp", 
 	   "-vf", 
	   "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"
	  ])
	 .toFormat('webp')
	 .save(`${ran}`)
	 
    } 
    
   else 
   
  if (m.isQuotedVideo) {
   var stream = await downloadContentFromMessage(m.message.imageMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
   var buffer = Buffer.from([])
   for await(const chunk of stream) {
	  buffer = Buffer.concat([buffer, chunk])
	 }
   var rand2 = '777.webp'
	fs.writeFileSync(`./${rand2}`, buffer)
     ffmpeg(`./${rand2}`)
	 .on("error", console.error)
	 .on("end", () => {
	 exec(`webpmux -set exif ./FunctionMD/sticker/data.exif ./${rand2} -o ./${rand2}`, async (error) => {
	 sock.sendMessage(
	  from, 
	    { 
	     sticker: fs.readFileSync(`./${rand2}`) 
	     }, 
	    { 
	     quoted: m 
        })
    	fs.unlinkSync(`./${rand2}`)
	  })
	})
   .addOutputOptions([
     "-vcodec", 
     "libwebp", 
     "-vf", 
     "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"
    ])
   .toFormat('webp')
   .save(`${rand2}`)
   
    } 
    
   else 
   
    {
    
      m.reply(
        from, 
        `Reply gambar/video\n  [ *BATAS MAKSIMUM 10 DETIK*❗ ]\nDengan caption : ${prefix + order}`, 
        { 
         quoted : m 
         } 
       )
      }
     } catch (e){ 
     sock.sendMessage(
     from, 
     { 
      sticker: { 
       url: "https://f.top4top.io/p_2252t7a7n1.jpg" 
       } 
      }, 
     { quoted: m }
    )
    }
   }
  break
  
  case 'promote':{
  // title & participant
  console.log(mentionUser)
		await sock.groupParticipantsUpdate(
		 from, 
		 mentionUser, 
		 "promote"
		 )
	   .catch((err) => m.reply(from, err, {quoted : m }))
	  }
  break
  case 'demote':{
if (q.includes('--help')) return reply(examtag) 
  // title & participant
  console.log(mentionUser)
   sock.groupParticipantsUpdate(
	 	  from, 
		  mentionUser, 
		  "demote"
		 )
		 .catch((err) => m.reply(from, err, {quoted : m })
	  )
	}
  break
  case 'sound1':{
if (q.includes('--help')) return reply(examkosong) 
   sock.sendMessage(from, { audio: {url : `https://k.top4top.io/m_2279djqoy1.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: m}
   )
  }
  break
  case 'waifu': case 'megumin':
case 'shinobu':
case 'awoo': case 'neko':{
if (q.includes('--help')) return reply(examkosong) 
  if (!isInventoryLimit){ addInventoriLimit(m.sender) }
  if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
  kurangLimit(m.sender, 1)
  reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
   let za = await fetchJson(`https:/\/\waifu.pics/api/sfw/${order}`)
            
  
    let buttons = [
      {
       buttonId: `${prefix + order}`, 
       buttonText: {
        displayText: 'Next'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: za.url },
      caption: "Result",
      footer: Options.info.botName,
      buttons: buttons,
      headerType: 4
     }
     sock.sendMessage(from, buttonMessage, { quoted: m })
  }
 break

  case 'hapus': case 'delete': case 'del': case 'd':{
if (q.includes('--help')) return reply(examply) 
      if (!m.quoted) return  m.reply(from, 'Reply pesanya!', { quoted : m })
       if (!m.quoted.isBaileys) return  m.reply(from, 'Fitur ini hanya berlaku menghapus pesan bot yang di kirim oleh saya!', { quoted : m })
          sock.sendMessage(from, { delete: { remoteJid: from, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
         }
      break
  case 'wall':
  case 'wallpaperaccess':{
if (q.includes('--help')) return reply(examquery) 
  if (args.length < 1) return m.reply(from, 'Cari gambar apa?', { quoted : m } )
  if (!isInventoryLimit){ addInventoriLimit(m.sender) }
  if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
  kurangLimit(m.sender, 1)
  reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
  try{
  const aku_biji = await wallpaperaccess(q)
  let jsonData = aku_biji
  let kamu_telor = Math.floor(Math.random() * jsonData.length);
  let anunya = jsonData[kamu_telor];
 
  console.log(anunya.link)
  let buttons = [
      {
       buttonId: `#wallpaperaccess ${q}`, 
       buttonText: {
        displayText: 'Next'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: anunya.link },
      caption: "Result",
      footer: Options.info.botName,
      buttons: buttons,
      headerType: 4
     }
     sock.sendMessage(from, buttonMessage, { quoted: m })
    } catch (e) { e = String(e)
      m.reply(from, 'Tidak ditemukan!', { quoted : m } )
   }
  }
  break  
  case 'sci_fi':{
if (q.includes('--help')) return reply(examquery) 
  if (args.length < 1) return m.reply(from, 'Teks?', { quoted : m } )
  if (!isInventoryLimit){ addInventoriLimit(m.sender) }
  if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
  kurangLimit(m.sender, 1)
  reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
  let link = `${textproo.sci_fi}`
  let anu = await textpro(link, q)
  console.log(anu)
   sock.sendMessage(
   from, 
   { 
    image: {
     url : anu
    }, 
    caption: `Nih kak, jangan lupa follow ig owner\n https://www.instagram.com/rifza.p.p`   
    }, 
    {
    quoted: m
   }
   )
  }
  break

  case 'tiktokaudio':{
if (q.includes('--help')) return reply(examlink) 
  if (!q) return reply('Linknya?')
  if (!q.includes('tiktok')) return reply('Itu bukan link tiktok!')
  if (!isInventoryLimit){ addInventoriLimit(m.sender) }
  if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
  kurangLimit(m.sender, 1)
  reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`) 
   const musim_rambutan = await TiktokDownloader(`${q}`).catch(e => {
 reply(pesan.eror) 
} )
   console.log(musim_rambutan)
   const musim_duren_a = musim_rambutan.result.nowatermark
    sock.sendMessage(from, { audio: { url: musim_duren_a }, mimetype: 'audio/mp4' }, { quoted: m })
   }
 break

  case 'tiktokvideo':{
if (q.includes('--help')) return reply(examlink) 
  if (!q) return reply('Linknya?')
  if (!q.includes('tiktok')) return reply('Itu bukan link tiktok!')
  if (!isInventoryLimit){ addInventoriLimit(m.sender) }
  if (isLimit < 1) return reply("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
  kurangLimit(m.sender, 1)
  reply(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
   const musim_rambutan = await TiktokDownloader(`${q}`).catch(e => {
 reply(pesan.eror) 
} )
   console.log(musim_rambutan)
   const musim_duren_v = musim_rambutan.result.nowatermark
    sock.sendMessage(from, { video: { url: musim_duren_v }, caption: "This is the result\nHope you are happy with our service😊" }, { quoted: m })
   }
  break
  case 'afk':{
if (q.includes('--help')) return reply(examquery) 
  let date = + new Date
  const alasan = q ? q : 'Gatau ngapain.'
  afk.addAfkUser(m.sender, date, alasan, time, _afk)
  reply(`*@${m.sender.split("@")[0]}* sekarang sedang afk\n*Dengan alasan* : ${alasan}`)
  }
  break
  default:
  
  if (isCmd) {
   
m.reply(
    from, 
    '_Command Notfound_', 
    { 
     quoted : m 
    }
   )
  } 
   
  } } catch(e) { e = String(e) 
  if (e.includes("rate-overlimit")) {return}
  if (e.includes('Connection Closed')){ return }
  if (e.includes('Timed Out')){ return }
   console.log(color(e, 'cyan')) 
  } }
  
  const LordThunder = require.resolve(__filename)
  fs.watchFile(LordThunder, () => {
  fs.unwatchFile(LordThunder)
  console.log(color(`New! >`, 'cyan'), color(`${__filename}`, 'gray'))
  delete require.cache[LordThunder]
  require(LordThunder)
  } )