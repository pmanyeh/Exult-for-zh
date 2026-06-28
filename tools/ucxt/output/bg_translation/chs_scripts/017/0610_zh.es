#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0908 0x908 ();
extern var Func08F7 0x8F7 (var var0000);
extern void Func08D5 0x8D5 ();

void Func0610 object#(0x610) ()
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

	UI_fade_palette(0x0024, 0x0001, 0x0001);
	var0000 = UI_find_nearby(item, 0xFE99, 0x0023, 0x0004);
	enum();
labelFunc0610_001F:
	for (var0003 in var0000 with var0001 to var0002) attend labelFunc0610_0048;
	if (!((UI_get_alignment(var0003) == 0x0000) && (UI_get_schedule_type(var0003) == 0x0000))) goto labelFunc0610_0045;
	return;
labelFunc0610_0045:
	goto labelFunc0610_001F;
labelFunc0610_0048:
	var0004 = Func0909();
	var0005 = Func0908();
	var0006 = Func08F7(0xFF59);
	var0007 = Func08F7(0xFF58);
	var0008 = Func08F7(0xFFFF);
	if (!UI_get_item_flag(0xFFFF, 0x0001)) goto labelFunc0610_0082;
	var0008 = 0x0000;
labelFunc0610_0082:
	var0009 = Func08F7(0xFFFD);
	if (!UI_get_item_flag(0xFFFD, 0x0001)) goto labelFunc0610_009E;
	var0009 = 0x0000;
labelFunc0610_009E:
	var000A = Func08F7(0xFFFC);
	if (!UI_get_item_flag(0xFFFC, 0x0001)) goto labelFunc0610_00BA;
	var000A = 0x0000;
labelFunc0610_00BA:
	if (!var0006) goto labelFunc0610_00D7;
	UI_show_npc_face(0xFF59, 0x0000);
	Func08D5();
	UI_remove_npc_face(0xFF59);
	goto labelFunc0610_00F1;
labelFunc0610_00D7:
	if (!var0007) goto labelFunc0610_00F1;
	UI_show_npc_face(0xFF58, 0x0000);
	Func08D5();
	UI_remove_npc_face(0xFF58);
labelFunc0610_00F1:
	if (!var0008) goto labelFunc0610_010C;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「我的好朋友，我很高兴看到你还活着。你看似死亡时，我感到非常悲痛。~~「在我们战斗的过程中，我确实与你走散了。能发现你安然无恙真是太好了。~~「如果你觉得好些了，那我们就继续我们的任务吧。」*");
	say();
	UI_remove_npc_face(0xFFFF);
labelFunc0610_010C:
	if (!var0009) goto labelFunc0610_0127;
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「你的康复真是一个奇迹！失去圣者对这个世界将是个严重的打击。~~「当我们终于找到你时，你的身体正被两个戴着兜帽的友谊会成员用马车运到这个地方。~~「你经历了可怕的磨难且长途跋涉。或许你应该休息一下...」*");
	say();
	UI_remove_npc_face(0xFFFD);
labelFunc0610_0127:
	if (!var000A) goto labelFunc0610_0142;
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「把你带到这里的友谊会成员，在整个旅程中一句话也没说。~~「但他们把你带到这里是做对了，因为你被救活了！~~「让我们大家喝一杯庆祝一下！只要你愿意，我们随时准备出发。」*");
	say();
	UI_remove_npc_face(0xFFFC);
labelFunc0610_0142:
	gflags[0x0026] = true;
	gflags[0x003A] = false;
	UI_clear_item_flag(0xFE9C, 0x0001);
	UI_set_schedule_type(0xFE9C, 0x001F);
	return;
}


