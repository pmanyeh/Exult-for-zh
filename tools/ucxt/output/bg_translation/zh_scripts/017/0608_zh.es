#game "blackgate"
// externs
extern void Func0941 0x941 (var var0000);
extern void Func0911 0x911 (var var0000);

void Func0608 object#(0x608) ()
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

	if (!(event == 0x0003)) goto labelFunc0608_0130;
	Func0941(0x000D);
	var0000 = UI_is_pc_female();
	UI_show_npc_face(0xFFE6, 0x0000);
	message("「聖者！停在原地！你休想成功摧毀黑門！你瘋了嗎？？！守護者對你來說太強大了！他會像捏死一隻蟲子一樣捏碎你！不列顛尼亞的命運現在屬於他和友誼會！守護者是這片土地真正的統治者！向他屈服吧，聖者，也許他會讓你在他身邊留有一席之地。向他屈服——就是現在——！」*");
	say();
	UI_remove_npc_face(0xFFE6);
	UI_show_npc_face(0xFEEF, 0x0000);
	if (!var0000) goto labelFunc0608_004F;
	var0001 = "她";
	var0002 = "她";
	var0003 = "她";
	goto labelFunc0608_0061;
labelFunc0608_004F:
	var0001 = "他";
	var0002 = "他";
	var0003 = "他";
labelFunc0608_0061:
	message("Hook 指著你。");
	say();
	message("「我說——殺了——聖者！");
	message(var0001);
	message("很危險！割斷");
	message(var0002);
	message("的喉嚨！我說我們——現在——就攻擊！」*");
	say();
	UI_remove_npc_face(0xFEEF);
	UI_show_npc_face(0xFEEE, 0x0000);
	message("Forskis 大喊：「殺！殺！」*");
	say();
	UI_remove_npc_face(0xFEEE);
	UI_show_npc_face(0xFEED, 0x0000);
	message("Abraham 大叫：「讓我們把");
	message(var0003);
	message("做成魚餌！」*");
	say();
	UI_remove_npc_face(0xFEED);
	UI_show_npc_face(0xFEEC, 0x0000);
	message("「聖者死期到了！守護者萬歲！」Elizabeth 尖叫著。*");
	say();
	UI_remove_npc_face(0xFEEC);
	UI_show_npc_face(0xFFE6, 0x0000);
	message("「那就這樣吧！友誼會在此判處聖者立即死刑！現在就殺了");
	message(var0003);
	message("！」*");
	say();
	UI_remove_npc_face(0xFFE6);
	var0004 = [0x0193, 0x01FA, 0x0325, 0x0372, 0x0371];
	enum();
labelFunc0608_00F2:
	for (var0007 in var0004 with var0005 to var0006) attend labelFunc0608_012A;
	var0008 = UI_find_nearby(item, var0007, 0x001E, 0x0000);
	enum();
labelFunc0608_010F:
	for (var000B in var0008 with var0009 to var000A) attend labelFunc0608_0127;
	UI_set_schedule_type(var000B, 0x0000);
	goto labelFunc0608_010F;
labelFunc0608_0127:
	goto labelFunc0608_00F2;
labelFunc0608_012A:
	Func0911(0x2710);
labelFunc0608_0130:
	return;
}


