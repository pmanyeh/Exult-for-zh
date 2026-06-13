#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func0924 0x924 (var var0000, var var0001);

void Func0480 object#(0x480) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0008)) goto labelFunc0480_0010;
	UI_set_polymorph(item, 0x01F5);
labelFunc0480_0010:
	if (!((event == 0x000D) || (event == 0x000E))) goto labelFunc0480_0040;
	UI_set_schedule_type(0xFF80, 0x000F);
	var0000 = UI_execute_usecode_array(0xFF80, [(byte)0x23, (byte)0x6C, (byte)0x6D, (byte)0x52, "@Arrr, Master!@"]);
labelFunc0480_0040:
	if (!((event == 0x0002) && ((gflags[0x0007] == false) && (gflags[0x0255] == false)))) goto labelFunc0480_0088;
	gflags[0x0255] = true;
	UI_move_object(0xFF80, [0x0926, 0x0284, 0x0000]);
	UI_si_path_run_usecode(0xFF80, [0x0927, 0x028D, 0x0000], 0x000A, 0xFF80, 0x0480, true);
labelFunc0480_0088:
	if (!((event == 0x0002) && gflags[0x0007])) goto labelFunc0480_00B5;
	gflags[0x0007] = false;
	UI_si_path_run_usecode(0xFF80, [0x092A, 0x0284, 0x0000], 0x000B, 0xFF80, 0x0480, true);
labelFunc0480_00B5:
	if (!(event == 0x000A)) goto labelFunc0480_0101;
	UI_show_npc_face0(0xFF80, 0x0000);
	message("\"The time hath come for thee to feel me steel!\"* \"Face me, Avatar, if thou dost have the courage!\"* \"I shall cut thee for bait, then feed thee to the minnows shouldst thou try to cross me sword!\"");
	say();
	UI_remove_npc_face1();
	gflags[0x0007] = true;
	Func097F(0xFF80, "@Ha,ha,ha!@", 0x0000);
	Func097F(0xFE9C, "@Hold!@", 0x0005);
	var0000 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0480], 0x0002);
	abort;
labelFunc0480_0101:
	if (!((event == 0x000B) || (event == 0x000E))) goto labelFunc0480_0158;
	var0001 = UI_find_nearby(item, 0x0314, 0x0014, 0x0000);
	enum();
labelFunc0480_0121:
	for (var0004 in var0001 with var0002 to var0003) attend labelFunc0480_014C;
	var0005 = UI_get_item_quality(var0004);
	if (!(var0005 == 0x0093)) goto labelFunc0480_0149;
	Func0924(var0004, 0xFE99);
labelFunc0480_0149:
	goto labelFunc0480_0121;
labelFunc0480_014C:
	UI_remove_npc(0xFF80);
	gflags[0x0258] = true;
	abort;
labelFunc0480_0158:
	return;
}


