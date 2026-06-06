#game "blackgate"
// externs
extern var Func0906 0x906 ();

void Func067F object#(0x67F) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0001)) goto labelFunc067F_00BE;
	UI_halt_scheduled(item);
	UI_item_say(item, "@Vas Mani@");
	if (!Func0906()) goto labelFunc067F_00A8;
	var0000 = UI_execute_usecode_array(item, [(byte)0x65, (byte)0x70, (byte)0x6A, (byte)0x58, 0x0040]);
	var0001 = UI_get_party_list();
	enum();
labelFunc067F_0039:
	for (var0004 in var0001 with var0002 to var0003) attend labelFunc067F_00A5;
	UI_clear_item_flag(var0004, 0x0007);
	UI_clear_item_flag(var0004, 0x0008);
	var0005 = UI_get_npc_prop(var0004, 0x0000);
	var0006 = UI_get_npc_prop(var0004, 0x0003);
	var0000 = UI_set_npc_prop(var0004, 0x0003, (var0005 - var0006));
	UI_obj_sprite_effect(0xFE9C, 0x000D, 0xFFFF, 0xFFFF, 0x0000, 0x0000, 0x0000, 0xFFFF);
	goto labelFunc067F_0039;
labelFunc067F_00A5:
	goto labelFunc067F_00BE;
labelFunc067F_00A8:
	var0000 = UI_execute_usecode_array(item, [(byte)0x65, (byte)0x70, (byte)0x6A, (byte)0x55, 0x0606]);
labelFunc067F_00BE:
	return;
}


