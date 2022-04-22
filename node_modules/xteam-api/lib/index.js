"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.API = void 0;
const got_1 = __importDefault(require("got"));
const crypto_1 = __importDefault(require("crypto"));
const url_1 = require("url");
const genAPI = (apikey) => got_1.default.extend({
    prefixUrl: 'https://api.xteam.xyz',
    handlers: [
        (options, next) => {
            if (options.searchParams === undefined)
                options.searchParams = new url_1.URLSearchParams;
            options.searchParams.append('APIKEY', apikey);
            return next(options);
        }
    ],
    hooks: {
        afterResponse: [
            response => {
                var _a;
                try {
                    response.body = JSON.parse(response.rawBody.toString());
                }
                catch (e) {
                    if (((_a = response.headers['content-type']) === null || _a === void 0 ? void 0 : _a.startsWith('text/')) || response.statusCode >= 500) {
                        response.body = response.rawBody.toString();
                        if (response.statusCode >= 500)
                            response.body = `(${response.statusCode}) ${response.statusMessage}`;
                    }
                    else {
                        response.body = response.rawBody;
                    }
                }
                return response;
            }
        ]
    }
});
let _apikey = '';
exports.API = Object.defineProperty({
    genAPI,
    api: genAPI(_apikey),
    check_apikey: async (apikey) => {
        if (apikey)
            return (await genAPI(apikey).get('cekey')).body;
        return (await exports.API.api.get('cekey')).body;
    },
    dl: {
        ytmp4: async (url) => (await exports.API.api.get('dl/ytmp4', {
            searchParams: { url: url.toString() }
        })).body,
        ytmp3: async (url) => (await exports.API.api.get('dl/ytmp3', {
            searchParams: { url: url.toString() }
        })).body,
        play: async (lagu) => (await exports.API.api.get('dl/play', {
            searchParams: { lagu }
        })).body,
        tiktok: async (url) => (await exports.API.api.get('dl/tiktok', {
            searchParams: { url: url.toString() }
        })).body,
        facebook: async (url) => (await exports.API.api.get('dl/fb', {
            searchParams: { url: url.toString() }
        })).body,
        instagram: async (url) => (await exports.API.api.get('dl/ig', {
            searchParams: { url: url.toString() }
        })).body,
        twitter: async (url) => (await exports.API.api.get('dl/twitter', {
            searchParams: { url: url.toString() }
        })).body,
        instagram_hashtag: async (nama) => (await exports.API.api.get('dl/ighastag', {
            searchParams: { nama }
        })).body,
        instagram_highlight: async (nama) => (await exports.API.api.get('dl/ighighlight', {
            searchParams: { nama }
        })).body,
        instagram_story: async (nama) => (await exports.API.api.get('dl/igs', {
            searchParams: { nama }
        })).body,
        instagram_stalk: async (nama) => (await exports.API.api.get('dl/igstalk', {
            searchParams: { nama }
        })).body,
        mediafire: async (url) => (await exports.API.api.get('dl/mediafire', {
            searchParams: { url: url.toString() }
        })).body,
        sfile: async (url) => (await exports.API.api.get('dl/sfiledl', {
            searchParams: { url: url.toString() }
        })).body,
        google_drive: async (url) => (await exports.API.api.get('dl/drive', {
            searchParams: { url: url.toString() }
        })).body,
        gif2video: async (url) => (await exports.API.api.get('dl/giftovideo', {
            searchParams: { url: url.toString() }
        })).body,
        smule: async (url) => (await exports.API.api.get('dl/smule', {
            searchParams: { url: url.toString() }
        })).body,
        scribd: async (url) => (await exports.API.api.get('dl/scribd', {
            searchParams: { url: url.toString() }
        })).body,
        soundcloud: async (url) => (await exports.API.api.get('dl/soundcloud', {
            searchParams: { url: url.toString() }
        })).body,
        pinterest: async (url) => (await exports.API.api.get('dl/pinterestdl', {
            searchParams: { url: url.toString() }
        })).body,
        sharechat: async (url) => (await exports.API.api.get('dl/sharechatdl', {
            searchParams: { url: url.toString() }
        })).body,
        linkedin: async (url) => (await exports.API.api.get('dl/linkedin', {
            searchParams: { url: url.toString() }
        })).body,
        snackvideo: async (url) => (await exports.API.api.get('dl/snackvideo', {
            searchParams: { url: url.toString() }
        })).body,
        joox: async (lagu) => (await exports.API.api.get('dl/joox', {
            searchParams: { lagu }
        })).body,
    },
    educational: {
        kbbi: async (kata) => (await exports.API.api.get('kbbi', {
            searchParams: { kata }
        })).body,
        info_loker: async (query) => (await exports.API.api.get('infoloker', {
            searchParams: { q: query }
        })).body,
        brainly: async (soal) => (await exports.API.api.get('brainly', {
            searchParams: { soal }
        })).body,
        cuaca: async (kota) => (await exports.API.api.get('cuaca', {
            searchParams: { kota }
        })).body,
        jadwal_sholat: async (kota) => (await exports.API.api.get('jadwalsholat', {
            searchParams: { kota }
        })).body,
        kodepos: async (query) => (await exports.API.api.get('kodepos', {
            searchParams: { q: query }
        })).body,
        wiki: async (query) => (await exports.API.api.get('wiki', {
            searchParams: { q: query }
        })).body,
        chord: async (lagu) => (await exports.API.api.get('chord', {
            searchParams: { lagu }
        })).body,
        removebg: async (url) => (await exports.API.api.get('removebg', {
            searchParams: { url: url.toString() }
        })).body,
    },
    news: {
        detik: async () => (await exports.API.api.get('news/detik')).body,
        kompas: async () => (await exports.API.api.get('news/kompas')).body,
        liputan6: async () => (await exports.API.api.get('news/liputan6')).body,
        tribunews: async () => (await exports.API.api.get('news/tribunews')).body,
        jalantikus: async () => (await exports.API.api.get('news/jalantikus')).body,
    },
    trendingtwitter: Object.assign(async () => (await exports.API.api.get('trendingtwitter')).body, {
        bekasi: async () => (await exports.API.api.get('trendingtwitter/bekasi')).body,
        depok: async () => (await exports.API.api.get('trendingtwitter/depok')).body,
        pekanbaru: async () => (await exports.API.api.get('trendingtwitter/pekanbaru')).body,
        surabaya: async () => (await exports.API.api.get('trendingtwitter/surabaya')).body,
        makssar: async () => (await exports.API.api.get('trendingtwitter/makassar')).body,
        bandung: async () => (await exports.API.api.get('trendingtwitter/bandung')).body,
        jakarta: async () => (await exports.API.api.get('trendingtwitter/jakarta')).body,
        medan: async () => (await exports.API.api.get('trendingtwitter/medan')).body,
        palembang: async () => (await exports.API.api.get('trendingtwitter/palembang')).body,
        semarang: async () => (await exports.API.api.get('trendingtwitter/semarang')).body,
        tangerang: async () => (await exports.API.api.get('trendingtwitter/tangerang')).body,
    }),
    simsimi: async (kata) => (await exports.API.api.get('simsimi', {
        searchParams: { kata }
    })).body,
    simsimiv2: async (kata) => (await exports.API.api.get('simsimi', {
        searchParams: { kata }
    })).body,
    search: {
        yt: async (query) => (await exports.API.api.get('search/ytsearch', {
            searchParams: { q: query }
        })).body,
        wattpad: Object.assign(async (query) => (await exports.API.api.get('search/ytsearch', {
            searchParams: { q: query }
        })).body, {
            story_info: async (url) => (await exports.API.api.get('search/wattpadstoryinfo', {
                searchParams: { url: url.toString() }
            })).body,
            baca: async (url) => (await exports.API.api.get('search/wattpadbaca', {
                searchParams: { url: url.toString() }
            })).body,
            bulk: async (query) => (await exports.API.api.get('search/wattpadbulk', {
                searchParams: { q: query }
            })).body,
        }),
        joox: {
            find: async (query) => (await exports.API.api.get('search/jooxfind', {
                searchParams: { q: query }
            })).body,
            lyrics: async (query) => (await exports.API.api.get('search/jooxlyrics', {
                searchParams: { q: query }
            })).body,
        },
        shopee: Object.assign(async (query) => (await exports.API.api.get('search/shopeesearch', {
            searchParams: { q: query }
        })).body, {
            flashsale: async () => (await exports.API.api.get('search/flashsale')).body
        }),
        whatsapp_group: async (query) => (await exports.API.api.get('search/grupwa', {
            searchParams: { q: query }
        })).body,
        domainesia: async (query) => (await exports.API.api.get('search/domainesia', {
            searchParams: { q: query }
        })).body,
        mobile_legend: {
            hero: async (query) => (await exports.API.api.get('search/heroml', {
                searchParams: { q: query }
            })).body,
        },
        free_fire: {
            id: async (id) => (await exports.API.api.get('search/freefire', {
                searchParams: { id: id.toString() }
            })).body,
        },
        peribahasa: async (query) => (await exports.API.api.get('search/peribahasa', {
            searchParams: { q: query }
        })).body,
    },
    asupan: {
        shitpost: async () => (await exports.API.api.get('asupan')).body,
        lasegar: async () => (await exports.API.api.get('asupan/lasegar')).body,
        ptl: async () => (await exports.API.api.get('asupan/ptl')).body,
        wibu: async () => (await exports.API.api.get('asupan/wibu')).body,
        dark_joke: async () => (await exports.API.api.get('asupan/darkjoke')).body,
    },
    anime: {
        dewabatch: async (query) => (await exports.API.api.get('anime/dewabatch', {
            searchParams: { q: query }
        })).body,
        kusonime: async (query) => (await exports.API.api.get('anime/kusonime', {
            searchParams: { q: query }
        })).body,
        samehadaku: async (query) => (await exports.API.api.get('anime/samehadaku', {
            searchParams: { q: query }
        })).body,
        nekonime: async () => (await exports.API.api.get('anime/nekonime')).body,
        waifu: async () => (await exports.API.api.get('anime/waifu')).body,
        meganebuk: async (query) => (await exports.API.api.get('anime/meganebuk', {
            searchParams: { q: query }
        })).body,
        webtoon: async (url) => (await exports.API.api.get('anime/webtoon', {
            searchParams: { url: url.toString() }
        })).body,
    },
    encrypt: {
        bs64_enc: (text) => Buffer.from(text).toString('base64'),
        bs64_dec: (text) => Buffer.from(text, 'base64').toString(),
        b32_enc: async (text) => (await exports.API.api.get('encrypt/b32enc', {
            searchParams: { text }
        })).body,
        b32_dec: async (text) => (await exports.API.api.get('encrypt/b32dec', {
            searchParams: { text }
        })).body,
        sha1: (text) => crypto_1.default.createHash('sha1').update(text).digest('hex'),
        sha256: (text) => crypto_1.default.createHash('sha256').update(text).digest('hex'),
        sha512: (text) => crypto_1.default.createHash('sha512').update(text).digest('hex'),
    },
    magernulis: async (text, nama, kelas) => (await exports.API.api.get('magernulis', {
        searchParams: { text, nama, kelas }
    })).body,
    magernulis2: async (text, nama, kelas) => (await exports.API.api.get('magernulis2', {
        searchParams: { text, nama, kelas }
    })).body,
    magernulis3: async (text, nama, kelas) => (await exports.API.api.get('magernulis3', {
        searchParams: { text, nama, kelas }
    })).body,
    magernulis4: async (text, nama, kelas) => (await exports.API.api.get('magernulis4', {
        searchParams: { text, nama, kelas }
    })).body,
    magernulis5: async (text, nama, kelas) => (await exports.API.api.get('magernulis5', {
        searchParams: { text, nama, kelas }
    })).body,
    magernulis6: async (text, nama, kelas) => (await exports.API.api.get('magernulis6', {
        searchParams: { text, nama, kelas }
    })).body,
    aksara: {
        latin_to_java: async (text) => (await exports.API.api.get('aksara/latinkejawa', {
            searchParams: { text }
        })).body,
        java_to_latin: async (text) => (await exports.API.api.get('aksara/jawakelatin', {
            searchParams: { text }
        })).body,
        latin_to_sunda: async (text) => (await exports.API.api.get('aksara/latinkesunda', {
            searchParams: { text }
        })).body,
        sunda_to_latin: async (text) => (await exports.API.api.get('aksara/sundakelatin', {
            searchParams: { text }
        })).body,
    },
    video_maker: {
        shaun_the_sheep: async (url) => (await exports.API.api.get('videomaker/shaunthesheep', {
            searchParams: { url: url.toString() }
        })).body,
        poly: async (text) => (await exports.API.api.get('videomaker/poly', {
            searchParams: { text }
        })).body,
        bold: async (text) => (await exports.API.api.get('videomaker/bold', {
            searchParams: { text }
        })).body,
        glowing: async (text) => (await exports.API.api.get('videomaker/glowing', {
            searchParams: { text }
        })).body,
        colorful: async (text) => (await exports.API.api.get('videomaker/colorful', {
            searchParams: { text }
        })).body,
        army: async (text) => (await exports.API.api.get('videomaker/army', {
            searchParams: { text }
        })).body,
        retro: async (text) => (await exports.API.api.get('videomaker/retro', {
            searchParams: { text }
        })).body,
    },
    textpro: async (effect, text, text2) => {
        if (!effect)
            return (await exports.API.api.get('textpro')).body;
        return (await exports.API.api.get('textpro/' + effect, {
            searchParams: { text, text2 }
        })).body;
    },
    photooxy: async (effect, text, text2) => {
        if (!effect)
            return (await exports.API.api.get('photooxy')).body;
        return (await exports.API.api.get('photooxy/' + effect, {
            searchParams: { text, text2 }
        })).body;
    },
    random_images: {
        blackpink: async () => (await exports.API.api.get('randomimage/blackpink')).body,
        cewek: async () => (await exports.API.api.get('randomimage/cewe')).body,
        cowok: async () => (await exports.API.api.get('randomimage/cowo')).body,
        shota: async () => (await exports.API.api.get('randomimage/shota')).body,
        bts: async () => (await exports.API.api.get('randomimage/bts')).body,
        exo: async () => (await exports.API.api.get('randomimage/exo')).body,
        meme: async () => (await exports.API.api.get('randomimage/meme')).body,
        meme2: async () => (await exports.API.api.get('randomimage/meme2')).body,
        dark: async () => (await exports.API.api.get('randomimage/dark')).body,
        darkjoke: async () => (await exports.API.api.get('randomimage/darkjoke')).body,
        husbu: async () => (await exports.API.api.get('randomimage/husbu')).body,
        husbu2: async () => (await exports.API.api.get('randomimage/husbu2')).body,
        wallpaper: async () => (await exports.API.api.get('randomimage/wallpaper')).body,
        wallpaper2: async () => (await exports.API.api.get('randomimage/wallpaper2')).body,
        wallpaper3: async () => (await exports.API.api.get('randomimage/wallpaper3')).body,
        wallpaper4: async () => (await exports.API.api.get('randomimage/wallpaper4')).body,
        wallpaper5: async () => (await exports.API.api.get('randomimage/wallpaper5')).body,
        ahegao: async () => (await exports.API.api.get('randomimage/ahegao')).body,
        ass: async () => (await exports.API.api.get('randomimage/ass')).body,
        bdsm: async () => (await exports.API.api.get('randomimage/bdsm')).body,
        blowjob: async () => (await exports.API.api.get('randomimage/blowjob')).body,
        cuckoid: async () => (await exports.API.api.get('randomimage/cuckoid')).body,
        ero: async () => (await exports.API.api.get('randomimage/ero')).body,
        gangbang: async () => (await exports.API.api.get('randomimage/gangbang')).body,
        glasses: async () => (await exports.API.api.get('randomimage/glasses')).body,
        hentai: async (isGif = false) => (await exports.API.api.get('randomimage/hentai' + (isGif ? 'gif' : ''))).body,
        jahy: async () => (await exports.API.api.get('randomimage/jahy')).body,
        manga: async () => (await exports.API.api.get('randomimage/manga')).body,
        masturbate: async () => (await exports.API.api.get('randomimage/mstrb')).body,
        nfsw_neko: async () => (await exports.API.api.get('randomimage/nsfwneko')).body,
        orgy: async () => (await exports.API.api.get('randomimage/orgy')).body,
        panties: async () => (await exports.API.api.get('randomimage/panties')).body,
        pussy: async () => (await exports.API.api.get('randomimage/pussy')).body,
        sfw_neko: async () => (await exports.API.api.get('randomimage/sfwneko')).body,
        tentacles: async () => (await exports.API.api.get('randomimage/tentacles')).body,
        thighs: async () => (await exports.API.api.get('randomimage/thighs')).body,
        uniform: async () => (await exports.API.api.get('randomimage/uniform')).body,
        wpmobile: async () => (await exports.API.api.get('randomimage/wpmobile')).body,
        wpmobile_nsfw: async () => (await exports.API.api.get('randomimage/wpnfswmobile')).body,
        zettairyouiki: async () => (await exports.API.api.get('randomimage/zettairyouiki')).body,
    },
    sticker: {
        stickerly: async (query) => (await exports.API.api.get('sticker/stickerly', {
            searchParams: { q: query }
        })).body,
        sticker_line: async (url) => (await exports.API.api.get('sticker/stickerline', {
            searchParams: { url: url.toString() }
        })).body,
        sticker_pack: async (query) => (await exports.API.api.get('sticker/stickpack', {
            searchParams: { q: query }
        })).body,
        emoji_to_png: async (query) => (await exports.API.api.get('sticker/emojitopng', {
            searchParams: { emo: query }
        })).body,
        wm: async (url) => (await exports.API.api.get('sticker/wm', {
            searchParams: { url: url.toString() }
        })).body,
    },
    primbon: {
        arti_nama: async (nama) => (await exports.API.api.get('primbon/artinama', {
            searchParams: { q: nama }
        })).body,
        kecocokan_nama: async (nama, { tanggal, bulan, tahun }) => (await exports.API.api.get('primbon/kecocokannama', {
            searchParams: {
                nama,
                tgl: tanggal.toString(),
                bln: bulan.toString(),
                thn: tahun.toString(),
            }
        })).body,
        nomor_hoki: async (no) => (await exports.API.api.get('primbon/nomorhoki', {
            searchParams: { no }
        })).body,
        ramalan_jodoh: async ({ nama, tanggal, bulan, tahun }, { nama: nama2, tanggal: tanggal2, bulan: bulan2, tahun: tahun2 }, isBali = false) => (await exports.API.api.get('primbon/ramalanjodoh' + (isBali ? 'bali' : ''), {
            searchParams: {
                nama1: nama,
                nama2,
                tgl1: tanggal.toString(),
                bln1: bulan.toString(),
                thn1: tahun.toString(),
                tgl2: tanggal2.toString(),
                bln2: bulan2.toString(),
                thn2: tahun2.toString(),
            }
        })).body,
        ramalan_suami_istri: async ({ nama, tanggal, bulan, tahun }, { nama: nama2, tanggal: tanggal2, bulan: bulan2, tahun: tahun2 }) => (await exports.API.api.get('primbon/ramalansuamiistri', {
            searchParams: {
                nama1: nama,
                nama2,
                tgl1: tanggal.toString(),
                bln1: bulan.toString(),
                thn1: tahun.toString(),
                tgl2: tanggal2.toString(),
                bln2: bulan2.toString(),
                thn2: tahun2.toString(),
            }
        })).body,
        tafsir_mimpi: async (query) => (await exports.API.api.get('primbon/tafsirmimpi', {
            searchParams: { q: query }
        })).body,
    },
    game: {
        suit: async (pilihan) => (await exports.API.api.get('game/suit', {
            searchParams: { q: pilihan }
        })).body,
        tebakangka: async (pilihan) => (await exports.API.api.get('game/tebakangka', {
            searchParams: { q: pilihan.toString() }
        })).body,
        tebakbendera: async () => (await exports.API.api.get('game/tebakbendera')).body,
        amongus: async () => (await exports.API.api.get('game/amongus')).body,
        family100: async () => (await exports.API.api.get('game/family100')).body,
        tebakgambar: async () => (await exports.API.api.get('game/tebakgambar')).body,
        virtual_slot: async () => (await exports.API.api.get('game/virtualslot')).body,
        asah_otak: async () => (await exports.API.api.get('game/asahotak')).body,
        siapakah_aku: async () => (await exports.API.api.get('game/siapakahaku')).body,
        susun_kata: async () => (await exports.API.api.get('game/susunkata')).body,
        tebak_kata: async () => (await exports.API.api.get('game/tebakkata')).body,
        tebak_tebakan: async () => (await exports.API.api.get('game/tebaktebakan')).body,
    },
    short_url: {
        bitly: async (url) => (await exports.API.api.get('shorturl/bitly', {
            searchParams: { url: url.toString() }
        })).body,
        cutly: async (url, nama) => (await exports.API.api.get(`shorturl/${nama ? 'custom' : ''}cutly`, {
            searchParams: { url: url.toString(), nama }
        })).body,
        gg: async (url, nama) => (await exports.API.api.get(`shorturl/${nama ? 'custom' : ''}gg`, {
            searchParams: { url: url.toString(), nama }
        })).body,
        shorturl: async (url) => (await exports.API.api.get('shorturl/shorturlat', {
            searchParams: { url: url.toString() }
        })).body,
        sid: async (url) => (await exports.API.api.get('shorturl/sid', {
            searchParams: { url: url.toString() }
        })).body,
        tinyurl: async (url) => (await exports.API.api.get('shorturl/tinyurl', {
            searchParams: { url: url.toString() }
        })).body,
    },
    spammer: Object.assign(async (no) => (await exports.API.api.get('spammer/allspam', {
        searchParams: { no: no.toString() }
    })).body, {
        pizza_hut: async (no) => (await exports.API.api.get('spammer/pizzahut', {
            searchParams: { no: no.toString() }
        })).body,
        olx: async (no) => (await exports.API.api.get('spammer/olx', {
            searchParams: { no: no.toString() }
        })).body,
        jagereward: async (no) => (await exports.API.api.get('spammer/', {
            searchParams: { no: no.toString() }
        })).body,
        dana_cita: async (no) => (await exports.API.api.get('spammer/danacita', {
            searchParams: { no: no.toString() }
        })).body,
        akademi: async (no) => (await exports.API.api.get('spammer/akademi', {
            searchParams: { no: no.toString() }
        })).body,
        icq: async (no) => (await exports.API.api.get('spammer/icq', {
            searchParams: { no: no.toString() }
        })).body,
    }),
    other: {
        tebakgambar: async (url) => (await exports.API.api.get('tebakgambar')).body,
        quotemaker: async (text, wm) => (await exports.API.api.get('quotemaker', {
            searchParams: { text, wm }
        })).body,
        ssweb: async (url) => (await exports.API.api.get('ss', {
            searchParams: { url: url.toString() }
        })).body,
        harta_tahta: async (text) => (await exports.API.api.get('quotemaker', {
            searchParams: { text }
        })).body,
        shitpost: async (text, wm) => (await exports.API.api.get('shitpost')).body,
        image_to_pdf: async (url) => (await exports.API.api.get('imagetopdf', {
            searchParams: { url: url.toString() }
        })).body,
        meme_maker: async (url, text, text2) => (await exports.API.api.get('imagetopdf', {
            searchParams: { url: url.toString(), text, text2 }
        })).body,
    },
    free: {
        ttp: async (text, responseJson = true) => (await exports.API.api.get('ttp', {
            searchParams: { ...(responseJson ? {} : { file: '' }), text }
        })).body,
        attp: async (text, responseJson = true) => (await exports.API.api.get('attp', {
            searchParams: { ...(responseJson ? {} : { file: '' }), text }
        })).body
    }
}, 'apikey', {
    set: (value) => {
        _apikey = value;
        exports.API.api = genAPI(value);
    },
    get: () => {
        return _apikey;
    }
});
