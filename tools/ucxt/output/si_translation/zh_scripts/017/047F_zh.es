#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func0924 0x924 (var var0000, var var0001);

void Func047F object#(0x47F) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	var0000 = UI_get_item_quality(item);
	if (!(event == 0x0008)) goto labelFunc047F_0018;
	UI_set_polymorph(item, 0x01F5);
labelFunc047F_0018:
	if (!((event == 0x000D) || (event == 0x000E))) goto labelFunc047F_0048;
	UI_set_schedule_type(0xFF81, 0x000F);
	var0001 = UI_execute_usecode_array(0xFF81, [(byte)0x23, (byte)0x6C, (byte)0x6D, (byte)0x52, "@Master!@"]);
labelFunc047F_0048:
	if (!((event == 0x0002) && ((gflags[0x0007] == false) && (gflags[0x0253] == false)))) goto labelFunc047F_0090;
	gflags[0x0253] = true;
	UI_move_object(0xFF81, [0x0797, 0x028B, 0x0000]);
	UI_si_path_run_usecode(0xFF81, [0x0799, 0x027F, 0x0000], 0x000A, 0xFF81, 0x047F, true);
labelFunc047F_0090:
	if (!((event == 0x0002) && gflags[0x0007])) goto labelFunc047F_00BD;
	gflags[0x0007] = false;
	UI_si_path_run_usecode(0xFF81, [0x0794, 0x028F, 0x0000], 0x000B, 0xFF81, 0x047F, true);
labelFunc047F_00BD:
	if (!(event == 0x000A)) goto labelFunc047F_0109;
	UI_show_npc_face0(0xFF81, 0x0000);
	message("\"Avatar! That fiend Batlin will destroy us all if he is not stopped!\"* \"'Twill be our destruction! He is attempting to open that cursed Wall of Lights!\"* \"Quickly, follow me! I will lead thee straight to him.\"");
	say();
	UI_remove_npc_face1();
	gflags[0x0007] = true;
	Func097F(0xFF81, "@Follow me!@", 0x0000);
	Func097F(0xFE9C, "@Wait!@", 0x0005);
	var0001 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x047F], 0x0002);
	abort;
labelFunc047F_0109:
	if (!((event == 0x000B) || (event == 0x000E))) goto labelFunc047F_0160;
	var0002 = UI_find_nearby(item, 0x0314, 0x0014, 0x0000);
	enum();
labelFunc047F_0129:
	for (var0005 in var0002 with var0003 to var0004) attend labelFunc047F_0154;
	var0000 = UI_get_item_quality(var0005);
	if (!(var0000 == 0x0092)) goto labelFunc047F_0151;
	Func0924(var0005, 0xFE99);
labelFunc047F_0151:
	goto labelFunc047F_0129;
labelFunc047F_0154:
	UI_remove_npc(0xFF81);
	gflags[0x0256] = true;
	abort;
labelFunc047F_0160:
	return;
}


