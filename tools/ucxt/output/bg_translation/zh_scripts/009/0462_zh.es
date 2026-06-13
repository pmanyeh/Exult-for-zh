#game "blackgate"
// externs
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func08E0 0x8E0 ();
extern var Func090A 0x90A ();

void Func0462 object#(0x462) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0001)) goto labelFunc0462_0243;
	var0000 = Func0931(0xFE9B, 0x0001, 0x0304, 0xFE99, 0xFE99);
	UI_show_npc_face(0xFF9E, 0x0000);
	if (!(!gflags[0x0154])) goto labelFunc0462_0040;
	if (!(!var0000)) goto labelFunc0462_003D;
	message("這個生物無視了你。*");
	say();
	abort;
	goto labelFunc0462_0040;
labelFunc0462_003D:
	Func08E0();
labelFunc0462_0040:
	if (!(!gflags[0x013D])) goto labelFunc0462_0068;
	if (!(!gflags[0x013C])) goto labelFunc0462_005D;
	message("這個像猿猴般的雌性顯得很緊張。");
	say();
	gflags[0x013C] = true;
	gflags[0x013D] = true;
	goto labelFunc0462_0065;
labelFunc0462_005D:
	message("這個雌性森靈顯得很緊張。");
	say();
	gflags[0x013D] = true;
labelFunc0462_0065:
	goto labelFunc0462_007D;
labelFunc0462_0068:
	var0001 = false;
	message("Saralek 向你打招呼。「向你說聲哈囉，人類。」");
	say();
	if (!gflags[0x0132]) goto labelFunc0462_007D;
	UI_add_answer("Trellek");
labelFunc0462_007D:
	if (!(gflags[0x0131] && (!gflags[0x0158]))) goto labelFunc0462_008F;
	UI_add_answer("Salamon 的允許");
labelFunc0462_008F:
	UI_add_answer(["姓名", "職業", "告辭"]);
labelFunc0462_009F:
	converse attend labelFunc0462_023E;
	case "姓名" attend labelFunc0462_00C7:
	message("她退縮了一會兒，然後小心翼翼地走上前。「我被稱為 Saralek 。」");
	say();
	UI_remove_answer("姓名");
	if (!(gflags[0x0132] && (!var0001))) goto labelFunc0462_00C7;
	UI_add_answer("Trellek");
labelFunc0462_00C7:
	case "職業" attend labelFunc0462_00DA:
	message("「『職業』不被理解。你是指家人嗎？」");
	say();
	UI_add_answer("家人");
labelFunc0462_00DA:
	case "家人" attend labelFunc0462_00FA:
	message("「是的，我是一個家庭的一份子。銀葉樹是我的家。我與 Trellek 結為伴侶。」");
	say();
	UI_remove_answer("家人");
	UI_add_answer(["銀葉樹", "Trellek"]);
labelFunc0462_00FA:
	case "Trellek" attend labelFunc0462_0129:
	message("「 Trellek 是我的丈夫。」");
	say();
	var0001 = true;
	if (!gflags[0x0132]) goto labelFunc0462_0122;
	if (!(!gflags[0x0130])) goto labelFunc0462_0122;
	message("「你見過 Trellek 了？」她驕傲地微笑著，又往前邁進了一步。「他說了什麼？」");
	say();
	UI_add_answer("加入隊伍");
labelFunc0462_0122:
	UI_remove_answer("Trellek");
labelFunc0462_0129:
	case "銀葉樹" attend labelFunc0462_0143:
	message("「銀葉樹越來越少了。很多樹經常被砍伐。很快地，我們的家園就不會再有銀葉樹了。」");
	say();
	UI_add_answer("砍伐");
	UI_remove_answer("銀葉樹");
labelFunc0462_0143:
	case "砍伐" attend labelFunc0462_0156:
	message("「這些樹被一個拿著閃亮、鋒利物品的人類砍倒了。」");
	say();
	UI_remove_answer("砍伐");
labelFunc0462_0156:
	case "加入隊伍" attend labelFunc0462_018F:
	message("「加入你們是他的願望嗎？」");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc0462_0184;
	message("她想了一會兒。「我並不希望他離開。」她轉頭直視著你。「但是，加入你們或許是明智之舉。」她嘆了一口氣。");
	say();
	message("「必須先獲得 Salamon 的允許。然後我才會給予許可。為此你需要再回到我這裡。」");
	say();
	gflags[0x0130] = true;
	UI_add_answer("Salamon");
	goto labelFunc0462_0188;
labelFunc0462_0184:
	message("「太好了！」她看起來非常高興且鬆了一口氣。");
	say();
labelFunc0462_0188:
	UI_remove_answer("加入隊伍");
labelFunc0462_018F:
	case "Salamon" attend labelFunc0462_01A2:
	message("「她是一位非常充滿智慧的森靈。她見過很多人類。知識和經驗是她的天賦。」");
	say();
	UI_remove_answer("Salamon");
labelFunc0462_01A2:
	case "Salamon 的允許" attend labelFunc0462_01D3:
	message("她的雙眼開始泛起淚光。~~「對不起。我撒了個謊。我並不希望 Trellek 離開。我不會給予許可。」~~她的表情變了。~~「你要求他的原因是什麼？」");
	say();
	UI_add_answer(["冒險", "再看看"]);
	if (!gflags[0x0138]) goto labelFunc0462_01C8;
	UI_add_answer("鬼火");
labelFunc0462_01C8:
	gflags[0x0158] = true;
	UI_remove_answer("Salamon 的允許");
labelFunc0462_01D3:
	case "冒險" attend labelFunc0462_01E6:
	message("「冒險不是 Trellek 的願望。」");
	say();
	UI_remove_answer("冒險");
labelFunc0462_01E6:
	case "再看看" attend labelFunc0462_01F9:
	message("她聳了聳肩。");
	say();
	UI_remove_answer("再看看");
labelFunc0462_01F9:
	case "鬼火" attend labelFunc0462_0230:
	message("她興奮地微笑了。~~「你的願望是見到鬼火？」");
	say();
	var0003 = Func090A();
	if (!var0003) goto labelFunc0462_021C;
	message("「我有個關於 Trellek 能如何幫助你的主意。 Trellek 的口哨聲可以和鬼火聯繫。或許他可以為你做一個哨子。你接下來應該再去和他談談。」");
	say();
	gflags[0x0155] = true;
	goto labelFunc0462_0220;
labelFunc0462_021C:
	message("「哦。」她似乎又變得沮喪了。");
	say();
labelFunc0462_0220:
	UI_remove_answer(["冒險", "再看看", "鬼火"]);
labelFunc0462_0230:
	case "告辭" attend labelFunc0462_023B:
	goto labelFunc0462_023E;
labelFunc0462_023B:
	goto labelFunc0462_009F;
labelFunc0462_023E:
	endconv;
	message("「向你說聲再見，人類。」*");
	say();
labelFunc0462_0243:
	if (!(event == 0x0000)) goto labelFunc0462_024C;
	abort;
labelFunc0462_024C:
	return;
}


