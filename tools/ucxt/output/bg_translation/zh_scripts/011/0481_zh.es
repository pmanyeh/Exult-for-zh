#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func092E 0x92E (var var0000);

void Func0481 object#(0x481) ()
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

	if (!(event == 0x0001)) goto labelFunc0481_0367;
	UI_show_npc_face(0xFF7F, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFF7F));
	var0003 = UI_wearing_fellowship();
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!gflags[0x017D]) goto labelFunc0481_0051;
	UI_add_answer("吊飾盒");
labelFunc0481_0051:
	if (!var0003) goto labelFunc0481_005E;
	UI_add_answer("獎章");
labelFunc0481_005E:
	if (!gflags[0x0127]) goto labelFunc0481_0071;
	UI_add_answer(["Hook", "皇冠寶石號 (Crown Jewel)"]);
labelFunc0481_0071:
	if (!gflags[0x0180]) goto labelFunc0481_007E;
	UI_add_answer("陌生人");
labelFunc0481_007E:
	if (!(!gflags[0x018A])) goto labelFunc0481_0090;
	message("在你面前的是一位看起來很精明的工匠，顯然對平靜的生活充滿滿足感。");
	say();
	gflags[0x018A] = true;
	goto labelFunc0481_0094;
labelFunc0481_0090:
	message("「我能為你做什麼？」Russell 說道。");
	say();
labelFunc0481_0094:
	converse attend labelFunc0481_035C;
	case "姓名" attend labelFunc0481_00AA:
	message("「我是 Russell ，一名造船匠。」");
	say();
	UI_remove_answer("姓名");
labelFunc0481_00AA:
	case "職業" attend labelFunc0481_00C6:
	message("「我在 New Magincia 造船。這是我非常喜歡的職業。我也販售船的契據，以及能在大海中航行的六分儀。」");
	say();
	UI_add_answer(["New Magincia", "契據", "六分儀"]);
labelFunc0481_00C6:
	case "契據" attend labelFunc0481_017D:
	if (!(var0002 == 0x0007)) goto labelFunc0481_0172;
	if (!gflags[0x0193]) goto labelFunc0481_00E5;
	message("「但我已經把『小仙女號 (The Nymphet)』的契據賣給你了！恐怕那是我現在唯一的一艘船。」");
	say();
	goto labelFunc0481_016F;
labelFunc0481_00E5:
	message("「你想買我的船『小仙女號 (The Nymphet)』嗎？契據要價 600 枚金幣。」");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc0481_0165;
	var0005 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var0005 >= 0x0258)) goto labelFunc0481_0158;
	var0006 = UI_add_party_items(0x0001, 0x031D, 0x0011, 0xFE99, false);
	if (!var0006) goto labelFunc0481_0151;
	message("「『小仙女號 (The Nymphet)』是你的了，");
	message(var0000);
	message("。好好享受航海吧。」");
	say();
	var0007 = UI_remove_party_items(0x0258, 0x0284, 0xFE99, 0xFE99, true);
	gflags[0x0193] = true;
	goto labelFunc0481_0155;
labelFunc0481_0151:
	message("「你帶太多東西，拿不動契據了。放下一些東西再來吧。」");
	say();
labelFunc0481_0155:
	goto labelFunc0481_0162;
labelFunc0481_0158:
	message("「我很抱歉，");
	message(var0000);
	message("，你沒有足夠的金幣。」");
	say();
labelFunc0481_0162:
	goto labelFunc0481_016F;
labelFunc0481_0165:
	message("「我了解，");
	message(var0000);
	message("，不是每個人都適合出海。」");
	say();
labelFunc0481_016F:
	goto labelFunc0481_0176;
labelFunc0481_0172:
	message("「等我的店再次營業時，我會很樂意為你服務。」");
	say();
labelFunc0481_0176:
	UI_remove_answer("契據");
labelFunc0481_017D:
	case "六分儀" attend labelFunc0481_021F:
	if (!(var0002 == 0x0007)) goto labelFunc0481_0214;
	message("「你想買我精良的六分儀嗎？要價 40 枚金幣。」");
	say();
	var0008 = Func090A();
	if (!var0008) goto labelFunc0481_0207;
	var0009 = Func0931(0xFE9B, 0x0028, 0x0284, 0xFE99, 0xFE99);
	if (!var0009) goto labelFunc0481_01FA;
	message("「這是你的了，");
	message(var0000);
	message("。好好享受航海吧。」");
	say();
	var000A = UI_remove_party_items(0x0028, 0x0284, 0xFE99, 0xFE99, true);
	var000B = UI_add_party_items(0x0001, 0x028A, 0xFE99, 0xFE99, true);
	if (!(!var000B)) goto labelFunc0481_01F7;
	message("「我很樂意把六分儀交給你，但你必須放下一些東西！你帶太多東西，拿不動了。」");
	say();
labelFunc0481_01F7:
	goto labelFunc0481_0204;
labelFunc0481_01FA:
	message("「我很抱歉，");
	message(var0000);
	message("，你沒有足夠的金幣。」");
	say();
labelFunc0481_0204:
	goto labelFunc0481_0211;
labelFunc0481_0207:
	message("「我了解，");
	message(var0000);
	message("，我們之中有些人光靠肉眼看星星就能航行了！」");
	say();
labelFunc0481_0211:
	goto labelFunc0481_0218;
labelFunc0481_0214:
	message("「目前我的店打烊了。如果你在營業時間回來，我會很樂意為你服務。」");
	say();
labelFunc0481_0218:
	UI_remove_answer("六分儀");
labelFunc0481_021F:
	case "New Magincia" attend labelFunc0481_0239:
	message("「New Magincia 一直很平靜。最近很少有外地人惹麻煩。」");
	say();
	UI_add_answer("外地人");
	UI_remove_answer("New Magincia");
labelFunc0481_0239:
	case "外地人" attend labelFunc0481_0253:
	message("「在你抵達之前，除了船難的倖存者，New Magincia 已經好幾年沒有陌生人來過了。」");
	say();
	UI_add_answer("船難");
	UI_remove_answer("外地人");
labelFunc0481_0253:
	case "船難" attend labelFunc0481_0273:
	message("「我找到了殘骸。有三個人正緊抓著它保命。」");
	say();
	UI_add_answer(["殘骸", "三個人"]);
	UI_remove_answer("船難");
labelFunc0481_0273:
	case "殘骸" attend labelFunc0481_0286:
	message("「我以前從沒見過那樣的船。標記顯示它是由一位名叫 Owen 的 Minoc 造船匠建造的。它的結構不是很好。」");
	say();
	UI_remove_answer("殘骸");
labelFunc0481_0286:
	case "三個人", "陌生人" attend labelFunc0481_02AD:
	message("「他們來自海盜巢穴 (Buccaneer's Den)。大多數來這裡的人，都是因為在前往或離開海盜巢穴 (Buccaneer's Den)的途中迷路了。」");
	say();
	gflags[0x0180] = true;
	UI_add_answer("海盜巢穴");
	UI_remove_answer(["陌生人", "三個人"]);
labelFunc0481_02AD:
	case "海盜巢穴" attend labelFunc0481_02C4:
	message("「那三個人想回去。他們說海盜巢穴 (Buccaneer's Den)有一間賭場。」Russell 聳聳肩。「好像這能成為去那裡的理由似的。」");
	say();
	message("「我提議賣給他們一艘船，但他們沒有錢。當我不願免費給他們時，他們看起來竟然覺得被冒犯了！」");
	say();
	UI_remove_answer("海盜巢穴");
labelFunc0481_02C4:
	case "吊飾盒" attend labelFunc0481_02DE:
	message("「那三個陌生人試圖拿某種小飾品來跟我換，要我建造或賣給他們一艘船。聽起來就像你描述的吊飾盒。」");
	say();
	UI_add_answer("小飾品");
	UI_remove_answer("吊飾盒");
labelFunc0481_02DE:
	case "小飾品" attend labelFunc0481_02F1:
	message("「我本來就不會接受他們的提議，但我很好奇。後來當我想再看那件小飾品時，他們就什麼也沒說了。我懷疑他們是否真的有那個東西。」");
	say();
	UI_remove_answer("小飾品");
labelFunc0481_02F1:
	case "獎章" attend labelFunc0481_0304:
	message("「我忍不住注意到你的獎章。它看起來有點邪惡。我不記得以前見過類似的東西。」");
	say();
	UI_remove_answer("獎章");
labelFunc0481_0304:
	case "皇冠寶石號 (Crown Jewel)" attend labelFunc0481_0329:
	if (!(!gflags[0x0181])) goto labelFunc0481_031E;
	message("「皇冠寶石號不久前才剛離開這裡。我不知道它要去哪裡。」");
	say();
	gflags[0x0181] = true;
	goto labelFunc0481_0322;
labelFunc0481_031E:
	message("「自從我們上次談到皇冠寶石號之後，我就再也沒聽到關於它的消息了。」");
	say();
labelFunc0481_0322:
	UI_remove_answer("皇冠寶石號 (Crown Jewel)");
labelFunc0481_0329:
	case "Hook" attend labelFunc0481_034E:
	if (!(!gflags[0x0182])) goto labelFunc0481_0343;
	message("「就在皇冠寶石號離開時，我看到一個帶著鐵鉤的男人跳上了船。有一隻石像鬼和他同行。」");
	say();
	gflags[0x0182] = true;
	goto labelFunc0481_0347;
labelFunc0481_0343:
	message("「自從我們上次談到這個叫 Hook 的男人之後，我就再也沒聽到關於他的消息了。」");
	say();
labelFunc0481_0347:
	UI_remove_answer("Hook");
labelFunc0481_034E:
	case "告辭" attend labelFunc0481_0359:
	goto labelFunc0481_035C;
labelFunc0481_0359:
	goto labelFunc0481_0094;
labelFunc0481_035C:
	endconv;
	message("「一路平安，");
	message(var0000);
	message("。」*");
	say();
labelFunc0481_0367:
	if (!(event == 0x0000)) goto labelFunc0481_0375;
	Func092E(0xFF7F);
labelFunc0481_0375:
	return;
}


