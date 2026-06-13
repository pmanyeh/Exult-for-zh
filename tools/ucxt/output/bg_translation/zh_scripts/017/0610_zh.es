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
	message("「我的好朋友，我很高興看到你還活著。你看似死亡時，我感到非常悲痛。~~「在我們戰鬥的過程中，我確實與你走散了。能發現你安然無恙真是太好了。~~「如果你覺得好些了，那我們就繼續我們的任務吧。」*");
	say();
	UI_remove_npc_face(0xFFFF);
labelFunc0610_010C:
	if (!var0009) goto labelFunc0610_0127;
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「你的康復真是一個奇蹟！失去聖者對這個世界將是個嚴重的打擊。~~「當我們終於找到你時，你的身體正被兩個戴著兜帽的友誼會成員用馬車運到這個地方。~~「你經歷了可怕的磨難且長途跋涉。或許你應該休息一下...」*");
	say();
	UI_remove_npc_face(0xFFFD);
labelFunc0610_0127:
	if (!var000A) goto labelFunc0610_0142;
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「把你帶到這裡的友誼會成員，在整個旅程中一句話也沒說。~~「但他們把你帶到這裡是做對了，因為你被救活了！~~「讓我們大家喝一杯慶祝一下！只要你願意，我們隨時準備出發。」*");
	say();
	UI_remove_npc_face(0xFFFC);
labelFunc0610_0142:
	gflags[0x0026] = true;
	gflags[0x003A] = false;
	UI_clear_item_flag(0xFE9C, 0x0001);
	UI_set_schedule_type(0xFE9C, 0x001F);
	return;
}


