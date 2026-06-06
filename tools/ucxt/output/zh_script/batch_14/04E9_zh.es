#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern var Func08F7 0x8F7 (var var0000);
extern void Func08C7 0x8C7 ();
extern void Func092E 0x92E (var var0000);

void Func04E9 object#(0x4E9) ()
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

	if (!(event == 0x0001)) goto labelFunc04E9_016B;
	UI_show_npc_face(0xFF17, 0x0000);
	var0000 = UI_get_schedule_type(UI_get_npc_object(0xFF17));
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x02B8])) goto labelFunc04E9_0042;
	message("你看到一個年輕的表演者向你招手。");
	say();
	gflags[0x02B8] = true;
	goto labelFunc04E9_0046;
labelFunc04E9_0042:
	message("「什麼事？」 Paul 問。");
	say();
labelFunc04E9_0046:
	converse attend labelFunc04E9_0166;
	case "姓名" attend labelFunc04E9_005C:
	message("「我是 Paul 。我的同事們名叫 Meryl 和 Dustin 。」");
	say();
	UI_remove_answer("姓名");
labelFunc04E9_005C:
	case "職業" attend labelFunc04E9_0078:
	message("「我們表演一齣關於友誼會的受難劇 (Passion Play) 。看戲只要每人 2 金幣。如果你想看我們表演，請說出來。」");
	say();
	UI_add_answer(["受難劇", "友誼會", "表演"]);
labelFunc04E9_0078:
	case "受難劇" attend labelFunc04E9_008B:
	message("「受難劇 (Passion Play) 是一種在舞台上表演的道德故事。」");
	say();
	UI_remove_answer("受難劇");
labelFunc04E9_008B:
	case "友誼會" attend labelFunc04E9_009E:
	message("「看劇會簡單得多。」");
	say();
	UI_remove_answer("友誼會");
labelFunc04E9_009E:
	case "表演" attend labelFunc04E9_0158:
	if (!(!(var0000 == 0x001D))) goto labelFunc04E9_00B8;
	message("「我很抱歉地說我們正在休息。請在正常時間回到舞台區。」");
	say();
	goto labelFunc04E9_0158;
labelFunc04E9_00B8:
	message("「你想看我們的受難劇 (Passion Play) 嗎？」");
	say();
	if (!Func090A()) goto labelFunc04E9_0153;
	var0001 = Func08F7(0xFF16);
	var0002 = Func08F7(0xFF15);
	if (!(var0001 && var0002)) goto labelFunc04E9_014B;
	var0003 = UI_get_party_list();
	var0004 = 0x0000;
	var0005 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	enum();
labelFunc04E9_00FF:
	for (var0008 in var0003 with var0006 to var0007) attend labelFunc04E9_0117;
	var0004 = (var0004 + 0x0001);
	goto labelFunc04E9_00FF;
labelFunc04E9_0117:
	if (!(var0005 >= (var0004 * 0x0002))) goto labelFunc04E9_0143;
	var0009 = UI_remove_party_items(var0004, 0x0284, 0xFE99, 0xFE99, true);
	message("Paul 收下你的金幣。「我們感謝你。如果你覺得準備好了，我們就開始吧。」");
	say();
	Func08C7();
	goto labelFunc04E9_0148;
labelFunc04E9_0143:
	message("「喔天啊。我恐怕你沒有足夠的金幣來支付表演費用。希望下次有機會。」*");
	say();
	abort;
labelFunc04E9_0148:
	goto labelFunc04E9_0150;
labelFunc04E9_014B:
	message("「很抱歉。看來我的演員同伴們沒空。受難劇暫時關閉了。」*");
	say();
	abort;
labelFunc04E9_0150:
	goto labelFunc04E9_0158;
labelFunc04E9_0153:
	message("「那就希望下次有機會了。」*");
	say();
	abort;
labelFunc04E9_0158:
	case "告辭" attend labelFunc04E9_0163:
	goto labelFunc04E9_0166;
labelFunc04E9_0163:
	goto labelFunc04E9_0046;
labelFunc04E9_0166:
	endconv;
	message("這位演員向你鞠躬。*");
	say();
labelFunc04E9_016B:
	if (!(event == 0x0000)) goto labelFunc04E9_01F2;
	var000A = UI_part_of_day();
	var0000 = UI_get_schedule_type(UI_get_npc_object(0xFF17));
	var000B = UI_die_roll(0x0001, 0x0004);
	if (!(var0000 == 0x001D)) goto labelFunc04E9_01EC;
	if (!(var000B == 0x0001)) goto labelFunc04E9_01AF;
	var000C = "@來看受難劇！@";
labelFunc04E9_01AF:
	if (!(var000B == 0x0002)) goto labelFunc04E9_01BF;
	var000C = "@友誼會為您呈現……@";
labelFunc04E9_01BF:
	if (!(var000B == 0x0003)) goto labelFunc04E9_01CF;
	var000C = "@快來看受難劇！@";
labelFunc04E9_01CF:
	if (!(var000B == 0x0004)) goto labelFunc04E9_01DF;
	var000C = "@我們將為您帶來娛樂！@";
labelFunc04E9_01DF:
	UI_item_say(0xFF17, var000C);
	goto labelFunc04E9_01F2;
labelFunc04E9_01EC:
	Func092E(0xFF17);
labelFunc04E9_01F2:
	return;
}


