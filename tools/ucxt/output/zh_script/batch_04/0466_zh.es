#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func090A 0x90A ();
extern void Func08C3 0x8C3 ();
extern void Func08C4 0x8C4 ();
extern void Func0911 0x911 (var var0000);

void Func0466 object#(0x466) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;
	var var0009;
	var var000A;
	var var000B;

	if (!(event == 0x0000)) goto labelFunc0466_0009;
	abort;
labelFunc0466_0009:
	UI_show_npc_face(0xFF9A, 0x0000);
	var0000 = Func0908();
	UI_add_answer(["姓名", "職業", "告辭"]);
	var0001 = UI_get_party_list();
	var0002 = UI_count_objects(0xFE9B, 0x0347, 0xFE99, 0x0000);
	if (!gflags[0x01D2]) goto labelFunc0466_0056;
	UI_add_answer(["沙漏", "時間領主"]);
labelFunc0466_0056:
	if (!(var0002 || gflags[0x0211])) goto labelFunc0466_0067;
	UI_add_answer("附魔");
labelFunc0466_0067:
	if (!(!gflags[0x0140])) goto labelFunc0466_0079;
	message("你的老朋友 Nicodemus 的眼神顯得很遙遠。");
	say();
	gflags[0x0140] = true;
	goto labelFunc0466_0091;
labelFunc0466_0079:
	if (!(!gflags[0x0003])) goto labelFunc0466_0087;
	message("「你是誰？」 Nicodemus 問。「噢，我記得了。記得 (Remember) 皮得 (demember) ！哈 哈 哈！」");
	say();
	goto labelFunc0466_0091;
labelFunc0466_0087:
	message("「又見面了， ");
	message(var0000);
	message("，」 Nicodemus 說。");
	say();
labelFunc0466_0091:
	converse attend labelFunc0466_02F9;
	case "姓名" attend labelFunc0466_00B5:
	if (!(!gflags[0x0003])) goto labelFunc0466_00AA;
	message("「這是一個非常好的問題。有些日子我真的能記得。讓我想想……今天……對！我是 Nicodemus ！ Nicodomus ！ Nicodimus ！ Nico-nico-kukodamus ！哈 哈 哈！」");
	say();
	goto labelFunc0466_00AE;
labelFunc0466_00AA:
	message("「你在跟 Nicodemus 說話。」");
	say();
labelFunc0466_00AE:
	UI_remove_answer("姓名");
labelFunc0466_00B5:
	case "職業" attend labelFunc0466_00E9:
	if (!(!gflags[0x0003])) goto labelFunc0466_00D8;
	message("「絕對是瘋了！因為那確實正在發生！我的魔法失效了！每次我試圖把東西變成龍 (drake) ，牠就只會變成蠑螈 (newt) ！喔，蠑螈-蠑螈 蹦蹦-跳跳！ (newty-wewty scooty-booty!) 」他對著身旁一個想像中的生物說話。「誰問你了？走開！」他轉向你。「抱歉。那隻該死的蠑螈一直試圖破壞我的談話。總之……我想我可以賣給你一些秘藥、藥水或法術。我必須『某牛』 (somecow) 維生。我是說『設法』 (somehow) 維生！那是『一些牛』 (Some Cow) ！哈 哈 哈！」");
	say();
	UI_add_answer(["魔法", "藥水"]);
	goto labelFunc0466_00DC;
labelFunc0466_00D8:
	message("「哎呀，為了施展魔法啊！看來以太的干擾已經修復了！我也能賣給你一些秘藥或法術。」");
	say();
labelFunc0466_00DC:
	UI_add_answer(["法術", "秘藥"]);
labelFunc0466_00E9:
	case "魔法" attend labelFunc0466_010A:
	if (!(!gflags[0x0003])) goto labelFunc0466_00FF;
	message("「魔法？什麼魔法！？世界上所有的魔法都已經完全亂套了！喔，糊裡糊塗！哈 哈 哈！這些字很蠢，不是嗎？可惜它們沒有魔力！哈 哈 哈！」");
	say();
	goto labelFunc0466_0103;
labelFunc0466_00FF:
	message("「以太修復了。全世界的法師都欠你一個人情。」");
	say();
labelFunc0466_0103:
	UI_remove_answer("魔法");
labelFunc0466_010A:
	case "法術" attend labelFunc0466_012C:
	message("「你想買些法術嗎？」");
	say();
	var0003 = Func090A();
	if (!var0003) goto labelFunc0466_0128;
	Func08C3();
	goto labelFunc0466_012C;
labelFunc0466_0128:
	message("「那就算了！」");
	say();
labelFunc0466_012C:
	case "秘藥" attend labelFunc0466_014E:
	message("「你想買些秘藥嗎？」");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc0466_014A;
	Func08C4();
	goto labelFunc0466_014E;
labelFunc0466_014A:
	message("「那就算了！」");
	say();
labelFunc0466_014E:
	case "藥水" attend labelFunc0466_01E3:
	if (!(!gflags[0x0003])) goto labelFunc0466_0164;
	message("「藥水 (Potions) ？你怎麼會覺得我有藥水？你確定你不想要乳液 (Lotions) ？我絕對有乳液！ Otions, slotions, motions, votions ！哈 哈 哈！等等！喔，對了！我確實有藥水！我告訴過你的，不是嗎！讓我們看看……我這裡有這瓶黑色的藥水。我不太確定它具體的作用，但我很確定它能讓人隱形。");
	say();
	goto labelFunc0466_0168;
labelFunc0466_0164:
	message("「是的，我有藥水。嗯，我有這瓶黑色的。這是一瓶隱形藥水。");
	say();
labelFunc0466_0168:
	message("「你想要它嗎，比方說，75 個金幣？」");
	say();
	var0005 = Func090A();
	if (!var0005) goto labelFunc0466_01D8;
	var0006 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var0006 >= 0x004B)) goto labelFunc0466_01D1;
	var0007 = UI_add_party_items(0x0001, 0x0154, 0xFE99, 0x0007, true);
	if (!var0007) goto labelFunc0466_01CA;
	message("「這是藥水。」");
	say();
	var0008 = UI_remove_party_items(0x004B, 0x0284, 0xFE99, 0xFE99, true);
	goto labelFunc0466_01CE;
labelFunc0466_01CA:
	message("「你沒有足夠的空間來攜帶藥水！」");
	say();
labelFunc0466_01CE:
	goto labelFunc0466_01D5;
labelFunc0466_01D1:
	message("「你想騙我嗎？你沒有足夠的金幣！」");
	say();
labelFunc0466_01D5:
	goto labelFunc0466_01DC;
labelFunc0466_01D8:
	message("「那你為什麼要提？別煩我！」");
	say();
labelFunc0466_01DC:
	UI_remove_answer("藥水");
labelFunc0466_01E3:
	case "時間領主" attend labelFunc0466_0226:
	if (!(!gflags[0x0003])) goto labelFunc0466_0214;
	message("「滴答滴答領主 (Timey Limey Lord) ？嗯。我不認識他。等等！對，我認識。他是不是留著黑色大鬍子，還穿著三條褲子？不！我知道他是誰了。他是前幾天來修我日晷的傢伙，對吧？」");
	say();
	var0009 = Func090A();
	if (!var0009) goto labelFunc0466_0209;
	message("「我就知道！告訴他那該死的東西還是壞的！它給了我三個影子！ Dadows badows whoopeee ！哈 哈 哈！」");
	say();
	goto labelFunc0466_020D;
labelFunc0466_0209:
	message("「他不是嗎？嗯。那他一定是我沒想到的那個人！」");
	say();
labelFunc0466_020D:
	message("「等等！我記起來了！他是我的騎士橋 (Knight's Bridge) 對手！我們在我家北邊的騎士橋場地玩。」");
	say();
	goto labelFunc0466_0218;
labelFunc0466_0214:
	message("「我好幾個月沒跟時間領主說過話了！那老傢伙好嗎？代我向他問好。告訴他我很想念我們的騎士橋遊戲！」");
	say();
labelFunc0466_0218:
	UI_remove_answer("時間領主");
	UI_add_answer("騎士橋");
labelFunc0466_0226:
	case "騎士橋" attend labelFunc0466_0239:
	message("「這是一種真人大小的棋盤遊戲。我這附近應該有一本書裡面寫著規則。」");
	say();
	UI_remove_answer("騎士橋");
labelFunc0466_0239:
	case "沙漏" attend labelFunc0466_0287:
	if (!gflags[0x012D]) goto labelFunc0466_024E;
	message("「是的，我剛剛給它附了魔。」");
	say();
	goto labelFunc0466_0280;
labelFunc0466_024E:
	if (!(!(gflags[0x0211] || var0002))) goto labelFunc0466_026E;
	if (!(!gflags[0x0003])) goto labelFunc0466_0267;
	message("「這個時間領主告訴你什麼？一個沙漏！我沒有什麼見鬼的沙漏！玻璃-玻璃 沙漏-沙漏！ (Glassy wassy hoursplassy!) 哈 哈 哈！等等！一個附魔的沙漏？這聽起來很耳熟。叮叮噹噹！哈 哈 哈！等等！我記得了。我以前有一個沙漏。我把它賣了。賣給了一個吉普賽人。還是一個古董商？我想我可能把它賣給了 Britain 的一個吉普賽古董商。或是 Paws 。在那片土地上的某個地方。但如果我沒記錯的話，那個沙漏的魔力已經用光了，這就是我賣掉它的原因。我想如果以太修復了，我或許可以重新給它附魔。把它帶來給我，我們看看能做些什麼。我知道了！我們可以來一場激烈的西洋棋！但前提是必須總是由我發牌。我不信任你。」");
	say();
	goto labelFunc0466_026B;
labelFunc0466_0267:
	message("「我的舊沙漏！我當然記得它！我相信我把它賣給了 Paws 的一個古董商。如果你能把它帶來給我，我或許可以重新給它附魔。」");
	say();
labelFunc0466_026B:
	goto labelFunc0466_0280;
labelFunc0466_026E:
	if (!(!gflags[0x0003])) goto labelFunc0466_027C;
	message("「這是什麼？某種沙漏？等等！它看起來有點眼熟！小偷！！這是我的沙漏！我找它找了好幾年了！你從哪裡弄來的，無賴？我要把你變成一隻鴨子！」~~Nicodemus 念了個法術並指著你，但什麼事也沒發生。~~「天啊！你跟我一樣不是隻會嘎嘎叫的鴨子。什麼都沒用了。嘎嘎 懶鬼 哇哇 飛飛！ (Quacker slacker wacker flacker!) 哈 哈 哈！」");
	say();
	goto labelFunc0466_0280;
labelFunc0466_027C:
	message("「我的舊沙漏！我想我可以重新恢復它的魔力。」");
	say();
labelFunc0466_0280:
	UI_remove_answer("沙漏");
labelFunc0466_0287:
	case "附魔" attend labelFunc0466_02EB:
	if (!(!gflags[0x0003])) goto labelFunc0466_029D;
	message("「附魔？你想要我給這件破東西附魔？你一定是有個蟾蜍腦袋！蟾蜍 蟾蜍 蟾蜍！ (Toady woady bloady coady!) 哈 哈 哈！~~幫我個忙，聖者先生。修好那該死的以太，好嗎？做到了我就能給你的玻璃沙漏 (glourblass) 附魔。我是說麵粉沙漏 (floursass) 。我是說沙漏 (hourglass) 。把這告訴你的『時間領主』。你還可以告訴他，他需要洗個澡了。」");
	say();
	goto labelFunc0466_02E4;
labelFunc0466_029D:
	message("「我很樂意為沙漏附魔。在解放以太之後，我欠你一個天大的人情。讓我看看它……」");
	say();
	if (!var0002) goto labelFunc0466_02E0;
	message("Nicodemus 拿過沙漏，研究了一會兒。他把它放在桌上，閉上眼睛集中精神。他念了幾個字，向空中撒了一些秘藥，然後把手拂過這件神器。~~「這樣應該就行了。」他把沙漏交還給你。");
	say();
	var000A = UI_remove_party_items(0x0001, 0x0347, 0xFE99, 0x0000, false);
	var000B = UI_add_party_items(0x0001, 0x0347, 0xFE99, 0x0001, false);
	gflags[0x012D] = true;
	Func0911(0x0064);
	goto labelFunc0466_02E4;
labelFunc0466_02E0:
	message("「它在哪裡？你沒有沙漏！」");
	say();
labelFunc0466_02E4:
	UI_remove_answer("附魔");
labelFunc0466_02EB:
	case "告辭" attend labelFunc0466_02F6:
	goto labelFunc0466_02F9;
labelFunc0466_02F6:
	goto labelFunc0466_0091;
labelFunc0466_02F9:
	endconv;
	if (!(!gflags[0x0003])) goto labelFunc0466_0308;
	message("「再見，再見，再見，再見，再見！哈 哈 哈！」*");
	say();
	goto labelFunc0466_0312;
labelFunc0466_0308:
	message("「再見， ");
	message(var0000);
	message("。」*");
	say();
labelFunc0466_0312:
	return;
}


