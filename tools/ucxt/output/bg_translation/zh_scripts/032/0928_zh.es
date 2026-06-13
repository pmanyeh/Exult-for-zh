#game "blackgate"
// externs
extern void Func08FA 0x8FA (var var0000);
extern void Func08FF 0x8FF (var var0000);
extern void Func0903 0x903 (var var0000, var var0001);
extern var Func0908 0x908 ();

void Func0928 0x928 (var var0000)
{
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

	Func08FA(var0000);
	var0001 = (UI_get_item_frame(var0000) % 0x0002);
	if (!(var0001 == 0x0000)) goto labelFunc0928_003C;
	Func08FF(["我敢打賭，如果你在裡面放點液體，效果會好得多……"]);
	Func0903(0xFFFC, "例如來點啤酒。");
	Func0903(0xFFFD, "或者也許是一些葡萄酒>>>");
	goto labelFunc0928_010B;
labelFunc0928_003C:
	var0002 = ["水", "血", "葡萄酒", "啤酒", "麥酒", "東西", "東西", "東西", "東西", "東西", "最後的東西"];
	var0003 = 0x0000;
	var0004 = UI_get_item_quality(item);
	enum();
labelFunc0928_0072:
	for (var0007 in var0002 with var0005 to var0006) attend labelFunc0928_00A2;
	var0003 = (var0003 + 0x0001);
	if (!(var0004 == var0003)) goto labelFunc0928_009F;
	var0008 = (("天啊，我敢說那" + var0007) + "一定很不錯……");
labelFunc0928_009F:
	goto labelFunc0928_0072;
labelFunc0928_00A2:
	UI_play_sound_effect(0x005A);
	var0009 = UI_die_roll(0x0001, 0x000A);
	if (!(var0009 == 0x0001)) goto labelFunc0928_00C6;
	Func08FF("嗯……我敢打賭那肯定能讓人解渴。");
labelFunc0928_00C6:
	if (!(var0009 == 0x0002)) goto labelFunc0928_00FB;
	var000A = var0002[var0001];
	var000B = Func0908();
	var0008 = (((var000B + "，你怎麼不等晚餐時再喝那") + var000A) + "呢。");
	Func08FF(var0008);
labelFunc0928_00FB:
	if (!(var0009 > 0x0002)) goto labelFunc0928_010B;
	Func08FF(var0008);
labelFunc0928_010B:
	return;
}


