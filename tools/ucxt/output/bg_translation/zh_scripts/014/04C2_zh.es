#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func08A1 0x8A1 ();

void Func04C2 object#(0x4C2) ()
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

	if (!(event == 0x0001)) goto labelFunc04C2_02B0;
	UI_show_npc_face(0xFF3E, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = false;
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x026B])) goto labelFunc04C2_0044;
	message("這名女子向你屈膝行禮。");
	say();
	gflags[0x026B] = true;
	goto labelFunc04C2_004E;
labelFunc04C2_0044:
	message("「日安，");
	message(var0001);
	message("，」Jehanne 女士說。");
	say();
labelFunc04C2_004E:
	if (!gflags[0x027C]) goto labelFunc04C2_006A;
	if (!(gflags[0x025C] && (!gflags[0x025D]))) goto labelFunc04C2_006A;
	UI_add_answer("公地");
	var0002 = true;
labelFunc04C2_006A:
	converse attend labelFunc04C2_02AF;
	case "姓名" attend labelFunc04C2_00A3:
	message("「我是 Jehanne 女士，");
	message(var0001);
	message("。」");
	say();
	gflags[0x027C] = true;
	UI_remove_answer("姓名");
	if (!(gflags[0x025C] && (!gflags[0x025D]))) goto labelFunc04C2_00A3;
	if (!(!var0002)) goto labelFunc04C2_00A3;
	UI_add_answer("公地");
labelFunc04C2_00A3:
	case "職業" attend labelFunc04C2_00CE:
	message("「我是巨蛇堡的補給品商人。」");
	say();
	if (!(!gflags[0x0274])) goto labelFunc04C2_00C1;
	message("「而且，」她補充道，「我還有一艘船要賣，如果～你有興趣的話。」");
	say();
	UI_add_answer("船隻");
labelFunc04C2_00C1:
	UI_add_answer(["巨蛇堡", "補給品"]);
labelFunc04C2_00CE:
	case "船隻" attend labelFunc04C2_0167:
	message("「嗯，它曾經是宏偉的『星座號（Constellation）』。然而，它被船長親手摧毀了，以防止它落入襲擊的海盜手中。剩下的一點殘骸被改建成了一艘更精美的船，『龍息號（The Dragon's Breath）』？你有興趣用 600 金幣購買它嗎？」");
	say();
	var0003 = Func090A();
	if (!var0003) goto labelFunc04C2_0156;
	var0004 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var0004 >= 0x0258)) goto labelFunc04C2_0149;
	var0005 = UI_add_party_items(0x0001, 0x031D, 0x0013, 0xFE99, false);
	if (!var0005) goto labelFunc04C2_013C;
	message("「這是你的地契。」");
	say();
	var0006 = UI_remove_party_items(0x0258, 0x0284, 0xFE99, 0xFE99, true);
	gflags[0x0274] = true;
	goto labelFunc04C2_0146;
labelFunc04C2_013C:
	message("「令人遺憾，");
	message(var0001);
	message("，你沒有空間放這張地契了。」");
	say();
labelFunc04C2_0146:
	goto labelFunc04C2_0153;
labelFunc04C2_0149:
	message("「我明白，");
	message(var0001);
	message("，你現在沒有足夠的資金。」");
	say();
labelFunc04C2_0153:
	goto labelFunc04C2_0160;
labelFunc04C2_0156:
	message("「也許在未來的某個時候，");
	message(var0001);
	message("。」");
	say();
labelFunc04C2_0160:
	UI_remove_answer("船隻");
labelFunc04C2_0167:
	case "巨蛇堡" attend labelFunc04C2_0187:
	message("「我們這裡大多數人都是騎士，發誓要保護不列顛尼亞和不列顛王的高貴戰士。我自己的領主，」她滿懷驕傲地笑著，「就是這樣一位騎士—— Pendaran 爵士。」");
	say();
	UI_remove_answer("巨蛇堡");
	UI_add_answer(["Sir Pendaran", "騎士"]);
labelFunc04C2_0187:
	case "Sir Pendaran" attend labelFunc04C2_01A7:
	message("「我們三年前認識的。他非常勇敢強壯。我就是喜歡看他戰鬥。」她笑了。~~「不過，我不太確定他是否能和友誼會的其他成員相處融洽。」");
	say();
	UI_remove_answer("Sir Pendaran");
	UI_add_answer(["戰鬥", "友誼會"]);
labelFunc04C2_01A7:
	case "戰鬥" attend labelFunc04C2_01C7:
	message("「他和 Menion 以前經常在練習後一起切磋。那真是一幅美麗的……景象，");
	message(var0001);
	message("，」她紅著臉說。");
	say();
	UI_remove_answer("戰鬥");
	UI_add_answer("過去");
labelFunc04C2_01C7:
	case "過去" attend labelFunc04C2_01DA:
	message("「當時， Pendaran 是唯一能跟上 Menion 的人。現在 Menion 已經開始指導別人了，他不再有時間和我的領主練習了。」");
	say();
	UI_remove_answer("過去");
labelFunc04C2_01DA:
	case "友誼會" attend labelFunc04C2_0201:
	var0007 = UI_wearing_fellowship();
	if (!var0007) goto labelFunc04C2_01F6;
	message("「嗯，呃，我的意思是，他在加入『之前』不會相處得很好，就是這樣，」她結結巴巴地說。");
	say();
	goto labelFunc04C2_01FA;
labelFunc04C2_01F6:
	message("「其實也沒什麼。他在加入之前只是稍微更……個人主義一些。我並不認為友誼會一定有什麼問題；但我沒想到它會是能引起 Pendaran 興趣的東西。」");
	say();
labelFunc04C2_01FA:
	UI_remove_answer("友誼會");
labelFunc04C2_0201:
	case "騎士" attend labelFunc04C2_0214:
	message("除了一些例外（包括我在內），堡裡所有的戰士都是騎士。你可能想和 John-Paul 領主談談。他負責管理巨蛇堡，也許能更好地帶你到處看看。");
	say();
	UI_remove_answer("騎士");
labelFunc04C2_0214:
	case "補給品" attend labelFunc04C2_0262:
	var0008 = UI_get_schedule_type(UI_get_npc_object(0xFF3E));
	if (!(var0008 == 0x0007)) goto labelFunc04C2_0257;
	message("「你想買點什麼嗎？」");
	say();
	var0009 = Func090A();
	if (!var0009) goto labelFunc04C2_024A;
	Func08A1();
	goto labelFunc04C2_0254;
labelFunc04C2_024A:
	message("「嗯，也許下次吧，");
	message(var0001);
	message("。」");
	say();
labelFunc04C2_0254:
	goto labelFunc04C2_025B;
labelFunc04C2_0257:
	message("「一個更好的購買時機是當我的店鋪營業時。」");
	say();
labelFunc04C2_025B:
	UI_remove_answer("補給品");
labelFunc04C2_0262:
	case "公地" attend labelFunc04C2_0280:
	message("有那麼一瞬間，你看到她表情猶豫不決，然後她突然妥協了，話語如洪水般傾瀉而出。~~「我不敢說，但知道你會看穿任何偽裝，我再也無法隱瞞真相了。我的領主， Pendaran 爵士，自從加入友誼會後就不再是那個溫柔的靈魂了。~~「不久前，我的 Pendaran 還是一位高貴的騎士，一位女士可以為之驕傲的騎士。但現在，」她搖搖頭，「為了抗議他認為不列顛尼亞官府的錯誤，他毀壞了我們敬愛的不列顛王的雕像。」她開始啜泣。~~「而且，他還與一位在他作惡時偶然遇見他的同袍騎士戰鬥，並刺傷了他。他來找我，」她試圖忍住淚水，「劍上沾著另一個人的血！」~~在你安慰了一會兒後，她恢復了平靜。~~「請不要對他太嚴苛，」她懇求道。");
	say();
	gflags[0x025D] = true;
	UI_remove_answer("公地");
	UI_add_answer("另一個");
labelFunc04C2_0280:
	case "另一個" attend labelFunc04C2_0299:
	message("「我不知道是誰，");
	message(var0001);
	message("，而 Pendaran 不肯說！」");
	say();
	UI_remove_answer("另一個");
labelFunc04C2_0299:
	case "告辭" attend labelFunc04C2_02AC:
	message("「願好運伴隨著你，");
	message(var0001);
	message("。」*");
	say();
	abort;
labelFunc04C2_02AC:
	goto labelFunc04C2_006A;
labelFunc04C2_02AF:
	endconv;
labelFunc04C2_02B0:
	if (!(event == 0x0000)) goto labelFunc04C2_0378;
	var000A = UI_part_of_day();
	var0008 = UI_get_schedule_type(UI_get_npc_object(0xFF3E));
	var000B = UI_die_roll(0x0001, 0x0004);
	if (!(var0008 == 0x0007)) goto labelFunc04C2_0324;
	if (!(var000B == 0x0001)) goto labelFunc04C2_02F4;
	var000C = "@補給品！@";
labelFunc04C2_02F4:
	if (!(var000B == 0x0002)) goto labelFunc04C2_0304;
	var000C = "@提前購買！@";
labelFunc04C2_0304:
	if (!(var000B == 0x0003)) goto labelFunc04C2_0314;
	var000C = "@鎮上最好的補給品！@";
labelFunc04C2_0314:
	if (!(var000B == 0x0004)) goto labelFunc04C2_0324;
	var000C = "@裝備齊全！@";
labelFunc04C2_0324:
	if (!(var0008 == 0x001A)) goto labelFunc04C2_036E;
	if (!(var000B == 0x0001)) goto labelFunc04C2_033E;
	var000C = "@美味佳餚！@";
labelFunc04C2_033E:
	if (!(var000B == 0x0002)) goto labelFunc04C2_034E;
	var000C = "@美酒！@";
labelFunc04C2_034E:
	if (!(var000B == 0x0003)) goto labelFunc04C2_035E;
	var000C = "@嗯……@";
labelFunc04C2_035E:
	if (!(var000B == 0x0004)) goto labelFunc04C2_036E;
	var000C = "@我飽了。@";
labelFunc04C2_036E:
	UI_item_say(0xFF3E, var000C);
labelFunc04C2_0378:
	return;
}


