#game "serpentisle"
// externs
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func090D 0x90D (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func087C 0x87C ()
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

	var0000 = UI_find_nearby(item, 0x00A0, 0x000F, 0x0000);
	var0001 = false;
	enum();
labelFunc087C_0016:
	for (var0004 in var0000 with var0002 to var0003) attend labelFunc087C_003C;
	var0005 = UI_get_item_frame(var0004);
	if (!(var0005 < 0x0008)) goto labelFunc087C_0039;
	var0001 = true;
labelFunc087C_0039:
	goto labelFunc087C_0016;
labelFunc087C_003C:
	if (!(!var0001)) goto labelFunc087C_0056;
	UI_show_npc_face0(0xFE9C, 0x0000);
	message("\"I must be near a Serpent Gate for the Amulet of Balance to work.\"");
	say();
	UI_remove_npc_face0();
	abort;
labelFunc087C_0056:
	var0006 = UI_get_timer(0x0007);
	if (!((!gflags[0x02EE]) || gflags[0x0313])) goto labelFunc087C_0071;
	var0006 = 0x00A8;
labelFunc087C_0071:
	if (!(var0006 < 0x00A8)) goto labelFunc087C_00FE;
	var0007 = (0x0007 - (var0006 / 0x0018));
	var0008 = (0x0018 - (var0006 % 0x0018));
	if (!((var0006 >= 0x0090) && (var0006 < 0x00A8))) goto labelFunc087C_00AF;
	var0007 = 0x0000;
labelFunc087C_00AF:
	UI_show_npc_face0(0xFE9C, 0x0000);
	message("\"It has not yet been a full week. The Amulet of Balance has not fully recharged.\"");
	say();
	if (!(var0007 > 0x0000)) goto labelFunc087C_00D1;
	message("\"I cannot use it for another ");
	message(var0007);
	message(" days yet.\"");
	say();
labelFunc087C_00D1:
	if (!(var0007 == 0x0000)) goto labelFunc087C_00F6;
	if (!(var0008 > 0x0001)) goto labelFunc087C_00F2;
	message("\"I must wait another ");
	message(var0008);
	message(" hours.\"");
	say();
	goto labelFunc087C_00F6;
labelFunc087C_00F2:
	message("\"I must wait another hour.\"");
	say();
labelFunc087C_00F6:
	UI_remove_npc_face0();
	abort;
	goto labelFunc087C_0105;
labelFunc087C_00FE:
	UI_set_timer(0x0007);
labelFunc087C_0105:
	var0009 = UI_find_nearby(item, 0x0113, 0x0014, 0x0010);
	enum();
labelFunc087C_0117:
	for (var000C in var0009 with var000A to var000B) attend labelFunc087C_01B0;
	if (!(UI_get_item_frame(var000C) == 0x0006)) goto labelFunc087C_01AD;
	UI_close_gumps();
	UI_clear_item_flag(0xFE9C, 0x0025);
	gflags[0x0007] = false;
	gflags[0x0008] = false;
	gflags[0x0009] = false;
	gflags[0x000A] = false;
	var000D = UI_get_npc_prop(0xFE9C, 0x0005);
	var000D = (0x0000 - var000D);
	var000E = UI_set_npc_prop(0xFE9C, 0x0005, var000D);
	var000F = Func09A0(0x0000, 0x0002);
	UI_play_music(0x001D, var000F);
	var0010 = UI_get_object_position(var000C);
	Func090D(var000C, 0xFFFF, 0xFFFF, 0xFFFF, 0x03BB, var000C, 0x000A);
labelFunc087C_01AD:
	goto labelFunc087C_0117;
labelFunc087C_01B0:
	return;
}


