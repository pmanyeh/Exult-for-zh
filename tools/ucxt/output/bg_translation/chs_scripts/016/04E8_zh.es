#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern var Func090B 0x90B (var var0000);
extern void Func092E 0x92E (var var0000);

void Func04E8 object#(0x4E8) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc04E8_0130;
	UI_show_npc_face(0xFF18, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFF18));
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x02B5])) goto labelFunc04E8_004F;
	message("你看到一个衣着考究，头发涂着油的海盗。");
	say();
	gflags[0x02B5] = true;
	goto labelFunc04E8_0053;
labelFunc04E8_004F:
	message("「我能帮你吗？」 Smithy 问。");
	say();
labelFunc04E8_0053:
	converse attend labelFunc04E8_0125;
	case "姓名" attend labelFunc04E8_0069:
	message("「我是 Smithy 。」");
	say();
	UI_remove_answer("姓名");
labelFunc04E8_0069:
	case "职业" attend labelFunc04E8_0097:
	message("「我在赌坊 (House of Games) 负责游戏营运。");
	say();
	if (!(var0002 == 0x000A)) goto labelFunc04E8_0093;
	message("「我可以为你解释规则和玩法。我也会确保没人作弊。」");
	say();
	UI_add_answer(["游戏", "作弊"]);
	goto labelFunc04E8_0097;
labelFunc04E8_0093:
	message("「请在设施营业时来试试你的身手。」");
	say();
labelFunc04E8_0097:
	case "作弊" attend labelFunc04E8_00AA:
	message("「如果你作弊被抓到，你将被逮捕。而且我们真的会起诉！」");
	say();
	UI_remove_answer("作弊");
labelFunc04E8_00AA:
	case "游戏" attend labelFunc04E8_0117:
	message("「你有三种游戏可以玩。第一种是美德轮盘。第二种是老鼠赛跑。第三种是三倍。你想听听规则吗？」");
	say();
	if (!Func090A()) goto labelFunc04E8_0113;
	message("「你想听哪个游戏的规则？」");
	say();
	var0003 = Func090B(["不用了", "美德轮盘", "老鼠赛跑", "三倍"]);
	if (!(var0003 == "不用了")) goto labelFunc04E8_00E6;
	message("「没关系。」");
	say();
	goto labelFunc04E8_0125;
labelFunc04E8_00E6:
	if (!(var0003 == "美德轮盘")) goto labelFunc04E8_00F4;
	message("「只需将你想要下注的金币数量放在一个或多个颜色上。使用转盘，如果你猜对了，你的钱就会增加。」");
	say();
labelFunc04E8_00F4:
	if (!(var0003 == "老鼠赛跑")) goto labelFunc04E8_0102;
	message("「将你的赌注下在你认为老鼠会跑的那条信道末端的绿色标记上。」");
	say();
labelFunc04E8_0102:
	if (!(var0003 == "三倍")) goto labelFunc04E8_0110;
	message("「你可以押三倍数，也就是三个 1 、三个 2 或三个 3 。这个的回报率最高。押『1、2、3』的回报略少。总和为『4』、『5』、『7』或『8』的回报最少。不要把钱放在数字之间，特别是『4』和『5』之间。如果『6』是由三个 2 以外的任何组合所组成，就会输。下注后，转动轮盘。」");
	say();
labelFunc04E8_0110:
	goto labelFunc04E8_0117;
labelFunc04E8_0113:
	message("「那好吧。你自求多福吧。」");
	say();
labelFunc04E8_0117:
	case "告辞" attend labelFunc04E8_0122:
	goto labelFunc04E8_0125;
labelFunc04E8_0122:
	goto labelFunc04E8_0053;
labelFunc04E8_0125:
	endconv;
	message("「再见了，");
	message(var0000);
	message("。」*");
	say();
labelFunc04E8_0130:
	if (!(event == 0x0000)) goto labelFunc04E8_01B7;
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFF18));
	var0004 = UI_die_roll(0x0001, 0x0004);
	if (!(var0002 == 0x000A)) goto labelFunc04E8_01B1;
	if (!(var0004 == 0x0001)) goto labelFunc04E8_0174;
	var0005 = "@下注。@";
labelFunc04E8_0174:
	if (!(var0004 == 0x0002)) goto labelFunc04E8_0184;
	var0005 = "@停止下注。@";
labelFunc04E8_0184:
	if (!(var0004 == 0x0003)) goto labelFunc04E8_0194;
	var0005 = "@赢家全拿。@";
labelFunc04E8_0194:
	if (!(var0004 == 0x0004)) goto labelFunc04E8_01A4;
	var0005 = "@庄家赢。@";
labelFunc04E8_01A4:
	UI_item_say(0xFF18, var0005);
	goto labelFunc04E8_01B7;
labelFunc04E8_01B1:
	Func092E(0xFF18);
labelFunc04E8_01B7:
	return;
}


