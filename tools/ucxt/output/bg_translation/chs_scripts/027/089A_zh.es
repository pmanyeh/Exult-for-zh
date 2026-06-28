#game "blackgate"
// externs
extern var Func0920 0x920 ();
extern var Func0922 0x922 (var var0000, var var0001, var var0002, var var0003);
extern var Func0910 0x910 (var var0000, var var0001);
extern void Func0916 0x916 (var var0000, var var0001);
extern void Func0918 0x918 (var var0000, var var0001);

void Func089A 0x89A (var var0000, var var0001)
{
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;
	var var0009;
	var var000A;

	var0002 = Func0920();
	var0003 = UI_get_npc_name(var0002);
	if (!(var0002 == 0x0000)) goto labelFunc089A_001D;
	goto labelFunc089A_0112;
labelFunc089A_001D:
	var0004 = 0x0003;
	var0005 = Func0922(var0000, var0001, var0002, var0004);
	if (!(var0005 == 0x0000)) goto labelFunc089A_0046;
	message("「看来你目前需要更多的经验才能训练。」");
	say();
	goto labelFunc089A_0112;
labelFunc089A_0046:
	if (!(var0005 == 0x0001)) goto labelFunc089A_007E;
	var0006 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	message("你收集并清点了你的金币，发现你总共有 ");
	message(var0006);
	message(" 枚金币。");
	say();
	if (!(var0006 < var0001)) goto labelFunc089A_007E;
	message("「你没有足够的金币在这里训练。」");
	say();
	goto labelFunc089A_0112;
labelFunc089A_007E:
	if (!(var0005 == 0x0002)) goto labelFunc089A_008F;
	message("问了几个问题后，他惊呼道：「看来你已经和我一样博学了。对于无法增加你的知识我感到抱歉，但我无能为力。」");
	say();
	goto labelFunc089A_0112;
labelFunc089A_008F:
	var0007 = UI_remove_party_items(var0001, 0x0284, 0xFE99, 0xFE99, true);
	message("你支付了 ");
	message(var0001);
	message(" 枚金币，然后训练课程开始了。");
	say();
	if (!(var0002 == 0xFE9C)) goto labelFunc089A_00C0;
	var0008 = "你开始";
	goto labelFunc089A_00CA;
labelFunc089A_00C0:
	var0008 = (var0003 + "开始");
labelFunc089A_00CA:
	message("石像鬼从一些密集的记忆练习开始，最终引导到法术理论的概念。在结束时，");
	message(var0008);
	message("注意到心智能力和思维反应速度有了改变。");
	say();
	var0009 = Func0910(var0002, 0x0002);
	if (!(var0009 < 0x001E)) goto labelFunc089A_00F3;
	Func0916(var0002, 0x0002);
labelFunc089A_00F3:
	var000A = Func0910(var0002, 0x0006);
	if (!(var000A < 0x001E)) goto labelFunc089A_0112;
	Func0918(var0002, 0x0001);
labelFunc089A_0112:
	return;
}


