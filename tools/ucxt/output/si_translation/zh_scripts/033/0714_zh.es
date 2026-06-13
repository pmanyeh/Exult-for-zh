#game "serpentisle"
// externs
extern void Func01D1 shape#(0x1D1) ();

void Func0714 object#(0x714) ()
{
	var var0000;
	var var0001;

	var0000 = UI_get_item_quality(item);
	if (!(var0000 != 0x00DE)) goto labelFunc0714_002F;
	if (!UI_find_nearby(0xFE9C, 0x01D1, 0xFFFF, 0x00B0)) goto labelFunc0714_002F;
	UI_get_npc_object(0xFFFD)->Func01D1();
labelFunc0714_002F:
	if (!(var0000 == 0x00DE)) goto labelFunc0714_0063;
	if (!(!gflags[0x0004])) goto labelFunc0714_0063;
	var0001 = UI_create_new_object2(0x00E4, UI_get_object_position(item));
	UI_set_npc_id(var0001, 0x001E);
	UI_set_schedule_type(var0001, 0x0001);
labelFunc0714_0063:
	return;
}


