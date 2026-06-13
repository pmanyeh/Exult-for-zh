#game "serpentisle"
// externs
extern var Func08FB 0x8FB ();
extern var Func098D 0x98D ();
extern var Func08FD 0x8FD ();
extern var Func09A8 0x9A8 (var var0000, var var0001);
extern var Func095C 0x95C (var var0000, var var0001);
extern void Func095E 0x95E (var var0000, var var0001, var var0002);

void Func08FE 0x8FE ()
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

	var0000 = Func08FB();
	var0001 = Func098D();
	var0001 = (var0001 & 0xFFC0);
	var0002 = Func08FD();
	var0002 = (var0002 & "Cantra");
	enum();
labelFunc08FE_0027:
	for (var0005 in var0000 with var0003 to var0004) attend labelFunc08FE_0140;
	if (!(var0005 != UI_get_npc_object(0xFE9C))) goto labelFunc08FE_013D;
	var0006 = UI_get_body_npc(var0005);
	var0007 = Func09A8(var0006, var0001);
	var0008 = var0002[var0007];
	var0009 = UI_get_object_position(var0005);
	var000A = UI_resurrect(var0005);
	if (!var000A) goto labelFunc08FE_0133;
	message("\"Now thy friend ");
	message(var0008);
	message(" doth live again.\"");
	say();
	if (!(UI_get_item_flag(var0006, 0x0006) && UI_get_item_flag(var0006, 0x001E))) goto labelFunc08FE_00A2;
	UI_remove_from_party(var0006);
labelFunc08FE_00A2:
	UI_set_new_schedules(var0006, 0x0000, 0x000F, [var0009[0x0001], var0009[0x0002]]);
	UI_run_schedule(var0006);
	UI_set_schedule_type(var0006, 0x000F);
	var000B = Func095C(var0006, 0x0009);
	var000C = (0x001F - var000B);
	Func095E(var0006, 0x0009, var000C);
	if (!(var0006 == 0xFFC0)) goto labelFunc08FE_00FF;
	gflags[0x0047] = true;
labelFunc08FE_00FF:
	if (!(var0006 == 0xFF6B)) goto labelFunc08FE_0130;
	UI_set_schedule_type(0xFF6B, 0x0003);
	gflags[0x026A] = false;
	var000A = UI_delayed_execute_usecode_array(UI_get_npc_object(0xFE9C), [(byte)0x55, 0x0495], 0x0005);
labelFunc08FE_0130:
	goto labelFunc08FE_013D;
labelFunc08FE_0133:
	message("\"Thy friend ");
	message(var0008);
	message(" hath been lost forever.\"");
	say();
labelFunc08FE_013D:
	goto labelFunc08FE_0027;
labelFunc08FE_0140:
	return;
}


