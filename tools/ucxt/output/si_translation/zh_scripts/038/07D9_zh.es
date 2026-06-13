#game "serpentisle"
// externs
extern var Func09A0 0x9A0 (var var0000, var var0001);

void Func07D9 object#(0x7D9) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	if (!(!gflags[0x021C])) goto labelFunc07D9_00CC;
	var0000 = UI_find_nearby(0xFE9C, 0x0331, 0x0014, 0x0000);
	if (!var0000) goto labelFunc07D9_007C;
	var0001 = UI_get_object_position(var0000);
	var0002 = UI_create_new_object(0x0121);
	if (!var0002) goto labelFunc07D9_006B;
	UI_set_item_flag(var0002, 0x0012);
	var0003 = UI_update_last_created(var0001);
	if (!var0003) goto labelFunc07D9_006B;
	var0003 = UI_delayed_execute_usecode_array(var0002, [(byte)0x23, (byte)0x52, "@Aaahhh!@"], 0x0001);
labelFunc07D9_006B:
	UI_set_npc_id(0xFF69, 0x0005);
	UI_remove_npc(0xFF69);
labelFunc07D9_007C:
	var0004 = Func09A0(0x0000, 0x0001);
	var0003 = UI_delayed_execute_usecode_array(var0004, [(byte)0x55, 0x07DA], 0x000F);
	var0005 = UI_find_nearby(0xFE9C, 0x037F, 0x0014, 0x0000);
	enum();
labelFunc07D9_00B1:
	for (var0002 in var0005 with var0006 to var0007) attend labelFunc07D9_00C9;
	UI_set_item_flag(var0002, 0x0012);
	goto labelFunc07D9_00B1;
labelFunc07D9_00C9:
	goto labelFunc07D9_00EF;
labelFunc07D9_00CC:
	var0004 = Func09A0(0x0000, 0x0001);
	var0003 = UI_delayed_execute_usecode_array(var0004, [(byte)0x23, (byte)0x55, 0x07DA], 0x0007);
labelFunc07D9_00EF:
	return;
}


