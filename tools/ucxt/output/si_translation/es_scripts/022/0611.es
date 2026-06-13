#game "serpentisle"
void Func0611 object#(0x611) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	var0000 = UI_get_item_shape(item);
	if (!(var0000 == 0x0203)) goto labelFunc0611_0021;
	var0001 = 0x0366;
	var0002 = 0x0007;
	goto labelFunc0611_002D;
labelFunc0611_0021:
	var0001 = 0x0203;
	var0002 = 0xFFF9;
labelFunc0611_002D:
	var0003 = UI_get_object_position(item);
	var0003[0x0002] = (var0003[0x0002] + var0002);
	UI_set_item_shape(item, var0001);
	if (!UI_set_last_created(item)) goto labelFunc0611_005F;
	var0004 = UI_update_last_created(var0003);
labelFunc0611_005F:
	return;
}


