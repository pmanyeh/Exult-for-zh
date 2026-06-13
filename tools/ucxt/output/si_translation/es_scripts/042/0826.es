#game "serpentisle"
// externs
extern var Func090C 0x90C (var var0000, var var0001);
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func0826 0x826 (var var0000)
{
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	var0001 = UI_find_nearby(0xFFF1, 0x02E3, 0x0032, 0x0000);
	var0002 = UI_get_object_position(var0001);
	if (!(var0000 == 0x0009)) goto labelFunc0826_0053;
	if (!var0001) goto labelFunc0826_0053;
	UI_si_path_run_usecode(0xFFF1, var0002, 0x000A, UI_get_npc_object(0xFFF1), 0x040F, true);
	UI_set_path_failure([0x040F], item, 0x000E);
labelFunc0826_0053:
	if (!(var0000 == 0x000A)) goto labelFunc0826_010A;
	var0003 = Func090C(0xFFF1, var0002);
	var0004 = UI_execute_usecode_array(0xFFF1, [(byte)0x23, (byte)0x59, var0003, (byte)0x01, (byte)0x6C, (byte)0x27, 0x0002, (byte)0x65, (byte)0x27, 0x0001, (byte)0x66, (byte)0x27, 0x0001, (byte)0x0B, 0xFFFA, 0x0002]);
	UI_obj_sprite_effect(0xFFF1, 0x0015, 0xFFFC, 0xFFFC, 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0005 = UI_get_object_position(0xFE9C);
	UI_show_npc_face0(0xFFF1, 0x0000);
	message("\"Take thy gem!\"");
	say();
	var0004 = UI_remove_party_items(0x0003, 0x034A, 0xFE99, 0x000A, 0x0000);
	var0006 = Func099B(0xFE9C, 0x0001, 0x01BD, 0xFE99, 0x0000, 0x0000, true);
	UI_remove_npc_face0();
	UI_run_schedule(0xFFF1);
labelFunc0826_010A:
	return;
}


