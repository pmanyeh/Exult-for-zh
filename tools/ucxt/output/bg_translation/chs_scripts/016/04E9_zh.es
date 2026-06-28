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
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x02B8])) goto labelFunc04E9_0042;
	message("你看到一个年轻的表演者向你招手。");
	say();
	gflags[0x02B8] = true;
	goto labelFunc04E9_0046;
labelFunc04E9_0042:
	message("「什么事？」 Paul 问。");
	say();
labelFunc04E9_0046:
	converse attend labelFunc04E9_0166;
	case "姓名" attend labelFunc04E9_005C:
	message("「我是 Paul 。我的同事们名叫 Meryl 和 Dustin 。」");
	say();
	UI_remove_answer("姓名");
labelFunc04E9_005C:
	case "职业" attend labelFunc04E9_0078:
	message("「我们表演一出关于友谊会的受难剧 (Passion Play) 。看戏只要每人 2 金币。如果你想看我们表演，请说出来。」");
	say();
	UI_add_answer(["受难剧", "友谊会", "表演"]);
labelFunc04E9_0078:
	case "受难剧" attend labelFunc04E9_008B:
	message("「受难剧 (Passion Play) 是一种在舞台上表演的道德故事。」");
	say();
	UI_remove_answer("受难剧");
labelFunc04E9_008B:
	case "友谊会" attend labelFunc04E9_009E:
	message("「看剧会简单得多。」");
	say();
	UI_remove_answer("友谊会");
labelFunc04E9_009E:
	case "表演" attend labelFunc04E9_0158:
	if (!(!(var0000 == 0x001D))) goto labelFunc04E9_00B8;
	message("「我很抱歉地说我们正在休息。请在正常时间回到舞台区。」");
	say();
	goto labelFunc04E9_0158;
labelFunc04E9_00B8:
	message("「你想看我们的受难剧 (Passion Play) 吗？」");
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
	message("Paul 收下你的金币。「我们感谢你。如果你觉得准备好了，我们就开始吧。」");
	say();
	Func08C7();
	goto labelFunc04E9_0148;
labelFunc04E9_0143:
	message("「喔天啊。我恐怕你没有足够的金币来支付表演费用。希望下次有机会。」*");
	say();
	abort;
labelFunc04E9_0148:
	goto labelFunc04E9_0150;
labelFunc04E9_014B:
	message("「很抱歉。看来我的演员同伴们没空。受难剧暂时关闭了。」*");
	say();
	abort;
labelFunc04E9_0150:
	goto labelFunc04E9_0158;
labelFunc04E9_0153:
	message("「那就希望下次有机会了。」*");
	say();
	abort;
labelFunc04E9_0158:
	case "告辞" attend labelFunc04E9_0163:
	goto labelFunc04E9_0166;
labelFunc04E9_0163:
	goto labelFunc04E9_0046;
labelFunc04E9_0166:
	endconv;
	message("这位演员向你鞠躬。*");
	say();
labelFunc04E9_016B:
	if (!(event == 0x0000)) goto labelFunc04E9_01F2;
	var000A = UI_part_of_day();
	var0000 = UI_get_schedule_type(UI_get_npc_object(0xFF17));
	var000B = UI_die_roll(0x0001, 0x0004);
	if (!(var0000 == 0x001D)) goto labelFunc04E9_01EC;
	if (!(var000B == 0x0001)) goto labelFunc04E9_01AF;
	var000C = "@来看受难剧！@";
labelFunc04E9_01AF:
	if (!(var000B == 0x0002)) goto labelFunc04E9_01BF;
	var000C = "@友谊会为您呈现……@";
labelFunc04E9_01BF:
	if (!(var000B == 0x0003)) goto labelFunc04E9_01CF;
	var000C = "@快来看受难剧！@";
labelFunc04E9_01CF:
	if (!(var000B == 0x0004)) goto labelFunc04E9_01DF;
	var000C = "@我们将为您带来娱乐！@";
labelFunc04E9_01DF:
	UI_item_say(0xFF17, var000C);
	goto labelFunc04E9_01F2;
labelFunc04E9_01EC:
	Func092E(0xFF17);
labelFunc04E9_01F2:
	return;
}


