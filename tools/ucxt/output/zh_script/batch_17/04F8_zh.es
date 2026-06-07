#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func092E 0x92E (var var0000);

void Func04F8 object#(0x4F8) ()
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
	var var000C;
	var var000D;
	var var000E;
	var var000F;
	var var0010;
	var var0011;

	if (!(event == 0x0001)) goto labelFunc04F8_0424;
	UI_show_npc_face(0xFF08, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = false;
	var0003 = false;
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x01F7])) goto labelFunc04F8_004C;
	message("你看到一位看起來很博學的男人，帶著友善的表情。");
	say();
	gflags[0x01F7] = true;
	gflags[0x01F9] = true;
	goto labelFunc04F8_0056;
labelFunc04F8_004C:
	message("「向你致敬，");
	message(var0001);
	message("。」Brion 微笑著。");
	say();
labelFunc04F8_0056:
	if (!gflags[0x0008]) goto labelFunc04F8_0063;
	UI_add_answer("Caddellite");
labelFunc04F8_0063:
	if (!gflags[0x01EE]) goto labelFunc04F8_0070;
	UI_add_answer("水晶");
labelFunc04F8_0070:
	if (!(gflags[0x01ED] && (!gflags[0x01F0]))) goto labelFunc04F8_0082;
	UI_add_answer("有水晶");
labelFunc04F8_0082:
	if (!gflags[0x0209]) goto labelFunc04F8_009A;
	if (!(gflags[0x01DA] && (!var0002))) goto labelFunc04F8_009A;
	UI_add_answer("Zelda 的感覺");
labelFunc04F8_009A:
	converse attend labelFunc04F8_0423;
	case "姓名" attend labelFunc04F8_00C2:
	message("「你可以叫我 Brion。」");
	say();
	if (!(gflags[0x01DA] && (!var0002))) goto labelFunc04F8_00BB;
	UI_add_answer("Zelda 的感覺");
labelFunc04F8_00BB:
	UI_remove_answer("姓名");
labelFunc04F8_00C2:
	case "職業" attend labelFunc04F8_00E8:
	message("「我是 Moonglow 這裡天文台的負責人，」他自豪地說。「這就是存放望遠鏡的地方。」");
	say();
	UI_add_answer(["望遠鏡", "Moonglow"]);
	if (!gflags[0x0100]) goto labelFunc04F8_00E8;
	UI_add_answer("事件");
labelFunc04F8_00E8:
	case "Moonglow" attend labelFunc04F8_0102:
	message("「我很喜歡住在 Moonglow。我非常喜歡這裡的人。」");
	say();
	UI_add_answer("人");
	UI_remove_answer("Moonglow");
labelFunc04F8_0102:
	case "人" attend labelFunc04F8_0125:
	message("「你和我的雙胞胎兄弟 Nelson 談過嗎？他負責智者書庫。或者是 Elad ？你肯定知道法師 Penumbra 。」");
	say();
	UI_add_answer(["Nelson", "Elad", "Penumbra"]);
	UI_remove_answer("人");
labelFunc04F8_0125:
	case "Zelda 的感覺" attend labelFunc04F8_0140:
	var0002 = true;
	gflags[0x01DB] = true;
	message("「喔，我明白了，」他聳了聳肩。「我從來沒有這樣想過我兄弟的助手。這太糟糕了，因為我的時間只允許我進行觀察。啊，好吧，我還有什麼可以幫你的嗎？」");
	say();
	UI_remove_answer("Zelda 的感覺");
labelFunc04F8_0140:
	case "Nelson" attend labelFunc04F8_0153:
	message("「我見他的次數沒有我希望的那麼多，因為我們都太忙於工作了。如果你看到他，會很容易認出他來，因為人們說我們長得一模一樣。我當然不這麼認為，因為他不僅生來就有頭腦，還有一張英俊的臉。」");
	say();
	UI_remove_answer("Nelson");
labelFunc04F8_0153:
	case "Elad" attend labelFunc04F8_0166:
	message("「可憐的 Elad 。他有時會在晚上加入我一起觀賞星空。他很多年來一直想離開 Moonglow 。他喜歡這個島，但充滿了對漫遊的渴望。」他微笑著。");
	say();
	UI_remove_answer("Elad");
labelFunc04F8_0166:
	case "Penumbra" attend labelFunc04F8_0179:
	message("「你沒聽說過嗎？兩百年前她讓自己沉睡了。」");
	say();
	UI_remove_answer("Penumbra");
labelFunc04F8_0179:
	case "望遠鏡" attend labelFunc04F8_0193:
	message("「我當然把它放在樓上了。歡迎你隨時使用它。事實上，我也有一個太陽系儀（orrery），如果你也想看看的話。」");
	say();
	UI_add_answer("太陽系儀");
	UI_remove_answer("望遠鏡");
labelFunc04F8_0193:
	case "Caddellite" attend labelFunc04F8_01AD:
	message("他奇怪地看著你，聳了聳肩說：「Caddellite 是一種非不列顛尼亞原產的礦物。事實上，它只來自隕石。~~「而已知最後一顆撞擊地球的隕石降落在東北海域的某個地方。你為什麼想知道？」");
	say();
	UI_add_answer("頭盔");
	UI_remove_answer("Caddellite");
labelFunc04F8_01AD:
	case "頭盔" attend labelFunc04F8_01C4:
	message("「你想要一頂用 Caddellite 做的頭盔？」他仔細想了想。「也許 Minoc 的 Zorn 有技術能打造出你想要的那種頭盔。如果你找到 Caddellite ，就把它帶給他。~~「我聽過關於東北海域曾經存在過一座島嶼的傳聞。也許我在智者書庫的兄弟能幫上忙。」");
	say();
	UI_remove_answer("頭盔");
	gflags[0x01F6] = true;
labelFunc04F8_01C4:
	case "太陽系儀" attend labelFunc04F8_01E9:
	message("太陽系儀？那是我們太陽系所有行星的模型，包含不列顛尼亞的兩顆衛星。太陽系儀的移動與我們真實系統的實際、當前軌道相匹配。");
	say();
	if (!(!var0003)) goto labelFunc04F8_01E2;
	message("「我非常興奮，因為很快就會發生一件非常罕見的事件！」");
	say();
	UI_add_answer("事件");
labelFunc04F8_01E2:
	UI_remove_answer("太陽系儀");
labelFunc04F8_01E9:
	case "事件" attend labelFunc04F8_0200:
	message("「你指的是我們這行所說的天文排列（Astronomical Alignment）。行星和衛星將會完美地排成一直線，這可是 800 年才發生一次的事！」");
	say();
	var0003 = true;
	UI_remove_answer("事件");
labelFunc04F8_0200:
	case "告辭" attend labelFunc04F8_0246:
	if (!(gflags[0x01E8] && (gflags[0x01E9] && (gflags[0x01EA] && gflags[0x01DD])))) goto labelFunc04F8_0228;
	message("「祝你有個美好的一天，");
	message(var0001);
	message("。你可以隨時使用我的天文台。」*");
	say();
	abort;
	goto labelFunc04F8_0246;
labelFunc04F8_0228:
	message("「在你離開之前，讓我給你看看我的一些小玩意。這是我的……」");
	say();
	UI_push_answers();
	UI_add_answer(["月亮", "六分儀", "風箏", "水晶", "再看看"]);
labelFunc04F8_0246:
	case "再看看" attend labelFunc04F8_0252:
	UI_pop_answers();
labelFunc04F8_0252:
	case "月亮" attend labelFunc04F8_02AC:
	var0004 = false;
	var0005 = UI_find_nearby(item, 0x0179, 0x0014, 0x0000);
	enum();
labelFunc04F8_0270:
	for (var0008 in var0005 with var0006 to var0007) attend labelFunc04F8_0290;
	if (!(UI_get_item_frame(var0008) == 0x001C)) goto labelFunc04F8_028D;
	var0004 = true;
labelFunc04F8_028D:
	goto labelFunc04F8_0270;
labelFunc04F8_0290:
	if (!var0004) goto labelFunc04F8_029D;
	message("「這代表著繞行不列顛尼亞的其中一顆衛星。」他把模型遞給你。你接過來，很快就意識到它完全是用綠色起司做的。~~「我自己雕刻的，」當你把它還給他時他說道。");
	say();
	goto labelFunc04F8_02A1;
labelFunc04F8_029D:
	message("「現在那東西跑哪去了？」他抓抓頭說。「嗯，它一定就在這附近。我以後再給你看。」他似乎比他願意表現出來的還要心煩意亂。");
	say();
labelFunc04F8_02A1:
	UI_remove_answer("月亮");
	gflags[0x01E8] = true;
labelFunc04F8_02AC:
	case "六分儀" attend labelFunc04F8_0308:
	var0009 = false;
	var000A = UI_find_nearby(0xFE9C, 0x028A, 0x0028, 0x0000);
	enum();
labelFunc04F8_02CC:
	for (var0008 in var000A with var000B to var000C) attend labelFunc04F8_02EC;
	if (!(UI_get_item_frame(var0008) == 0x0001)) goto labelFunc04F8_02E9;
	var0009 = true;
labelFunc04F8_02E9:
	goto labelFunc04F8_02CC;
labelFunc04F8_02EC:
	if (!var0009) goto labelFunc04F8_02F9;
	message("他遞給你一個純金的六分儀。「這是傳給 Moonglow 天文台歷任負責人的。這東西有 200 多年的歷史了。」當你把它還給他時，他滿面笑容。");
	say();
	goto labelFunc04F8_02FD;
labelFunc04F8_02F9:
	message("「該死！不見了！那東西在這裡已經有 200 多年了。」他似乎很不高興。");
	say();
labelFunc04F8_02FD:
	UI_remove_answer("六分儀");
	gflags[0x01E9] = true;
labelFunc04F8_0308:
	case "風箏" attend labelFunc04F8_033C:
	var000D = UI_find_nearest(0xFE9C, 0x0149, 0xFFFF);
	if (!var000D) goto labelFunc04F8_032D;
	message("他給你看一個風箏。「這是我讀了我兄弟圖書館裡的一本書後自己做的。」");
	say();
	goto labelFunc04F8_0331;
labelFunc04F8_032D:
	message("「那東西去哪了？」他抓抓下巴，顯然很困惑。「我真希望它沒不見。那是我根據我兄弟圖書館裡的一本書製作的。」");
	say();
labelFunc04F8_0331:
	UI_remove_answer("風箏");
	gflags[0x01EA] = true;
labelFunc04F8_033C:
	case "水晶" attend labelFunc04F8_037F:
	if (!(!gflags[0x01EE])) goto labelFunc04F8_034F;
	message("「這個，」他說著，展示了一堆以某種無法確定的方式連接在一起的水晶，「這是一個太陽系儀檢視器（orrery viewer）。它能讓人從不列顛尼亞的任何地方看到我這裡的太陽系儀。」~~他似乎若有所思。~~「我知道你無法留在這裡觀看行星排列。");
	say();
labelFunc04F8_034F:
	message("你想要這個來檢視我的太陽系儀，並更好地預測行星的位置嗎？」");
	say();
	gflags[0x01DD] = true;
	var000E = Func090A();
	if (!var000E) goto labelFunc04F8_036A;
	message("他自豪地笑了。「我想你會想要的。但是，有一個問題。我還需要一顆水晶才能完全完成檢視器。如果你去酒館，你可能會在那裡找到一位有時會提供給我水晶的商人或旅行者。如果你能找到另一顆水晶，我就能把完成的檢視器交給你。」");
	say();
	goto labelFunc04F8_0378;
labelFunc04F8_036A:
	message("「很好，");
	message(var0001);
	message("。我希望你以後不會為此後悔。」");
	say();
	gflags[0x01EE] = true;
labelFunc04F8_0378:
	UI_remove_answer("水晶");
labelFunc04F8_037F:
	case "有水晶" attend labelFunc04F8_03E0:
	var000F = Func0931(0xFE9B, 0x0001, 0x02EA, 0xFE99, 0xFE99);
	if (!var000F) goto labelFunc04F8_03D6;
	message("「你有水晶了？太好了。」他接過你從冒險者那裡得到的水晶，開始把它連接到他的太陽系儀檢視器上。他很快就完成了。");
	say();
	gflags[0x01ED] = false;
	UI_remove_npc(0xFF5C);
	UI_remove_answer("有水晶");
	UI_add_answer("要水晶");
	var0010 = UI_remove_party_items(0x0001, 0x02EA, 0xFE99, 0xFE99, false);
	goto labelFunc04F8_03E0;
labelFunc04F8_03D6:
	message("「我很抱歉，");
	message(var0001);
	message("，但我必須要有水晶才能完成檢視器。」");
	say();
labelFunc04F8_03E0:
	case "要水晶" attend labelFunc04F8_0420:
	var0011 = UI_add_party_items(0x0001, 0x0302, 0xFE99, 0x0001, 0x0000);
	if (!var0011) goto labelFunc04F8_0415;
	message("「好好使用它，");
	message(var0001);
	message("。」他把這個裝置交給了你。");
	say();
	gflags[0x01F0] = true;
	goto labelFunc04F8_0419;
labelFunc04F8_0415:
	message("他搖了搖頭。「你沒有足夠的空間來放它。也許等你以後再回來時再說吧。」");
	say();
labelFunc04F8_0419:
	UI_remove_answer("要水晶");
labelFunc04F8_0420:
	goto labelFunc04F8_009A;
labelFunc04F8_0423:
	endconv;
labelFunc04F8_0424:
	if (!(event == 0x0000)) goto labelFunc04F8_0432;
	Func092E(0xFF08);
labelFunc04F8_0432:
	return;
}


