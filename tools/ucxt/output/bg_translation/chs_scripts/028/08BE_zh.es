#game "blackgate"
// externs
extern var Func0920 0x920 ();
extern var Func0922 0x922 (var var0000, var var0001, var var0002, var var0003);
extern var Func0910 0x910 (var var0000, var var0001);
extern void Func0914 0x914 (var var0000, var var0001);
extern var Func0910 0x910 (var var0000, var var0001);
extern void Func0917 0x917 (var var0000, var var0001);

void Func08BE 0x8BE (var var0000, var var0001)
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
	var var000B;

	var0002 = Func0920();
	if (!(var0002 == 0x0000)) goto labelFunc08BE_0013;
	goto labelFunc08BE_0132;
labelFunc08BE_0013:
	var0003 = 0x0003;
	var0004 = Func0922(var0000, var0001, var0002, var0003);
	if (!(var0004 == 0x0000)) goto labelFunc08BE_003C;
	message("「我很抱歉，但你目前在负重方面的实战经验不足，无法进行训练。也许将来等你准备好了，我就可以训练你。」");
	say();
	goto labelFunc08BE_0132;
labelFunc08BE_003C:
	if (!(var0004 == 0x0001)) goto labelFunc08BE_0074;
	var0005 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	message("你聚集并清点了你所拥有的金币，发现你总共有 ");
	message(var0005);
	message(" 个金币。");
	say();
	if (!(var0005 < var0001)) goto labelFunc08BE_0074;
	message("「你的金币不够在这里接受训练。」");
	say();
	goto labelFunc08BE_0132;
labelFunc08BE_0074:
	var0006 = UI_get_npc_name(var0002);
	if (!(var0002 == 0xFE9C)) goto labelFunc08BE_0097;
	var0007 = "你开始";
	var0008 = "你的";
	goto labelFunc08BE_00AB;
labelFunc08BE_0097:
	var0007 = (var0006 + " 开始");
	var0008 = (var0006 + " 的");
labelFunc08BE_00AB:
	if (!(var0004 == 0x0002)) goto labelFunc08BE_00C2;
	message("「你已经和我一样强壮了！」他注意到 ");
	message(var0008);
	message(" 肌肉与体格后惊呼道。「在锻炼强健肌肉这方面，你懂得绝对不比我少。」");
	say();
	goto labelFunc08BE_0132;
labelFunc08BE_00C2:
	var0009 = UI_remove_party_items(var0001, 0x0284, 0xFE99, 0xFE99, true);
	message("你支付了 ");
	message(var0001);
	message(" 个金币，训练课程随即开始。");
	say();
	var0006 = UI_get_npc_name(var0002);
	message("他首先安排了一段简短但密集的重量训练计划，接着进行了一场重型武器的对练。很快地， ");
	message(var0007);
	message(" 感觉变得更强壮，并且在战斗中能更好地运用这股力量。");
	say();
	var000A = Func0910(var0002, 0x0000);
	if (!(var000A < 0x001E)) goto labelFunc08BE_0113;
	Func0914(var0002, 0x0002);
labelFunc08BE_0113:
	var000B = Func0910(var0002, 0x0004);
	if (!(var000B < 0x001E)) goto labelFunc08BE_0132;
	Func0917(var0002, 0x0001);
labelFunc08BE_0132:
	return;
}