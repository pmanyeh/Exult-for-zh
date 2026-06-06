#game "blackgate"
// externs
extern var Func0814 0x814 ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func08FF 0x8FF (var var0000);
extern void Func0904 0x904 (var var0000, var var0001);
extern var Func092D 0x92D (var var0000);

void Func0714 object#(0x714) ()
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
	var var000D;
	var var000E;
	var var000F;
	var var0010;
	var var0011;
	var var0012;

	var0000 = UI_find_nearby(item, 0x03F7, 0x0028, 0x0008);
	var0001 = false;
	var0002 = false;
	enum();
labelFunc0714_001A:
	for (var0005 in var0000 with var0003 to var0004) attend labelFunc0714_0066;
	if (!UI_get_cont_items(var0005, 0x031D, 0x00F3, 0x0004)) goto labelFunc0714_0044;
	var0001 = var0005;
	var0006 = var0001;
labelFunc0714_0044:
	if (!UI_get_cont_items(var0005, 0x031D, 0x00F4, 0x0004)) goto labelFunc0714_0063;
	var0002 = var0005;
	var0006 = var0002;
labelFunc0714_0063:
	goto labelFunc0714_001A;
labelFunc0714_0066:
	if (!(event == 0x0002)) goto labelFunc0714_0266;
	var0007 = false;
	var0008 = Func0814();
	enum();
labelFunc0714_0079:
	for (var000B in var0008 with var0009 to var000A) attend labelFunc0714_00A3;
	var0007 = UI_get_cont_items(var000B, 0x00CB, 0xFE99, 0x000A);
	if (!var0007) goto labelFunc0714_00A0;
	goto labelFunc0714_00A3;
labelFunc0714_00A0:
	goto labelFunc0714_0079;
labelFunc0714_00A3:
	if (!(!var0007)) goto labelFunc0714_01C0;
	var000C = (UI_get_object_position(0xFE9C) & (0xFE99 & 0x000A));
	var0000 = UI_find_nearby(var000C, 0x00CB, 0x001E, 0x0000);
	if (!(var0000 || Func0931(0xFE9B, 0x0001, 0x00CB, 0xFE99, 0x000A))) goto labelFunc0714_00EF;
	Func08FF("@心臟必須放在身體裡。@");
	abort;
labelFunc0714_00EF:
	Func08FF("@根據古籍，執行這個儀式需要一顆『心臟』。@");
	if (!(!gflags[0x031C])) goto labelFunc0714_01BF;
	UI_show_npc_face(0xFEDF, 0x0000);
	message("「我把我的給他！」");
	say();
	UI_remove_npc_face(0xFEDF);
	var000D = UI_execute_usecode_array(0xFE9C, [(byte)0x27, 0x01F4]);
	var0000 = UI_find_nearby(item, 0x019E, 0x0050, 0x0000);
	enum();
labelFunc0714_0135:
	for (var0005 in var0000 with var000E to var000F) attend labelFunc0714_01BF;
	if (!UI_get_cont_items(var0005, 0x031D, 0x00F3, 0x0004)) goto labelFunc0714_01BC;
	UI_show_npc_face(0xFEDF, 0x0000);
	message("你驚恐地看著 Bollux 用手指刺穿自己的胸膛。");
	say();
	UI_remove_npc_face(0xFEDF);
	var0010 = UI_direction_from(var0002, var0005);
	UI_show_npc_face(0xFEDF, 0x0000);
	message("他拿出一塊心形的石頭，在一陣最後的慌亂動作中，將石頭扔在 Adjhar 的胸膛上，然後倒地而死。");
	say();
	UI_remove_npc_face(0xFEDF);
	var0011 = UI_execute_usecode_array(var0002, [(byte)0x59, var0010, (byte)0x27, 0x0002, (byte)0x6D, (byte)0x27, 0x0002, (byte)0x6F, (byte)0x27, 0x0002, (byte)0x6E, (byte)0x27, 0x0001, (byte)0x55, 0x0710]);
	return;
labelFunc0714_01BC:
	goto labelFunc0714_0135;
labelFunc0714_01BF:
	abort;
labelFunc0714_01C0:
	Func0904(0xFE9C, ["@In Ylem...@", "@In Grav...@", "@In Mani...@", "@Kal Por...@", "@Vas Flam Uus...@"]);
	var0010 = Func092D(var0007);
	var0012 = UI_execute_usecode_array(0xFE9C, [(byte)0x59, var0010, (byte)0x27, 0x0001, (byte)0x6D, (byte)0x27, 0x0003, (byte)0x61, (byte)0x27, 0x0003, (byte)0x70, (byte)0x27, 0x0003, (byte)0x61, (byte)0x27, 0x0002, (byte)0x6D, (byte)0x27, 0x0003, (byte)0x61, (byte)0x27, 0x0003, (byte)0x6F, (byte)0x27, 0x0003, (byte)0x61, (byte)0x27, 0x0002, (byte)0x0B, 0xFFE8, 0x0001, (byte)0x6F, (byte)0x27, 0x0002, (byte)0x67, (byte)0x27, 0x0001, (byte)0x6C, (byte)0x27, 0x0001, (byte)0x61]);
	var0012 = UI_delayed_execute_usecode_array(var0007, [(byte)0x55, 0x062C, (byte)0x02], 0x004C);
labelFunc0714_0266:
	return;
}


