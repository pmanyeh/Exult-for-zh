#game "serpentisle"
void Func0745 object#(0x745) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	if (!(event == 0x0003)) goto labelFunc0745_008C;
	var0000 = UI_find_nearby_avatar(0x017D);
	var0001 = true;
	enum();
labelFunc0745_0017:
	for (var0004 in var0000 with var0002 to var0003) attend labelFunc0745_0047;
	var0005 = UI_get_npc_id(var0004);
	if (!(var0005 == 0x0001)) goto labelFunc0745_0044;
	var0001 = false;
	UI_set_schedule_type(var0004, 0x0003);
labelFunc0745_0044:
	goto labelFunc0745_0017;
labelFunc0745_0047:
	var0000 = [];
	if (!var0001) goto labelFunc0745_008C;
	var0006 = UI_get_object_position(item);
	var0007 = UI_create_new_object2(0x017D, var0006);
	if (!var0007) goto labelFunc0745_008C;
	UI_set_npc_id(var0007, 0x0001);
	UI_set_schedule_type(var0007, 0x0003);
	UI_clear_item_flag(var0007, 0x0001);
labelFunc0745_008C:
	return;
}


