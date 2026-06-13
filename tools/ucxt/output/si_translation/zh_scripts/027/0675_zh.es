#game "serpentisle"
// externs
extern var Func0951 0x951 ();

void Func0675 object#(0x675) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0001)) goto labelFunc0675_0103;
	UI_halt_scheduled(item);
	UI_item_say(item, "@Vas Mani@");
	if (!Func0951()) goto labelFunc0675_00EB;
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x65, (byte)0x70, (byte)0x6A, (byte)0x58, 0x0040]);
	var0001 = UI_get_party_list2();
	enum();
labelFunc0675_003B:
	for (var0004 in var0001 with var0002 to var0003) attend labelFunc0675_00E8;
	UI_obj_sprite_effect(var0004, 0x000D, 0xFFFF, 0xFFFF, 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_clear_item_flag(var0004, 0x0007);
	UI_clear_item_flag(var0004, 0x0008);
	UI_clear_item_flag(var0004, 0x0001);
	var0005 = UI_get_npc_prop(var0004, 0x0000);
	var0006 = UI_get_npc_prop(var0004, 0x0003);
	if (!(var0006 < 0x0001)) goto labelFunc0675_00B4;
	var0000 = UI_set_npc_prop(var0004, 0x0003, var0005);
labelFunc0675_00B4:
	var0006 = UI_get_npc_prop(var0004, 0x0003);
	if (!(var0006 < 0x0000)) goto labelFunc0675_00D1;
	var0006 = 0x0001;
labelFunc0675_00D1:
	var0000 = UI_set_npc_prop(var0004, 0x0003, (var0005 - var0006));
	goto labelFunc0675_003B;
labelFunc0675_00E8:
	goto labelFunc0675_0103;
labelFunc0675_00EB:
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x65, (byte)0x70, (byte)0x6A, (byte)0x55, 0x0606]);
labelFunc0675_0103:
	return;
}


