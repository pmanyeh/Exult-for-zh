#game "serpentisle"
// externs
extern var Func0831 0x831 (var var0000, var var0001);

void Func07EA object#(0x7EA) ()
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

	if (!(event == 0x0002)) goto labelFunc07EA_0185;
	var0000 = false;
	var0001 = false;
	var0002 = (UI_get_object_position(0xFE9C) & (0x0096 & 0x001F));
	var0003 = UI_find_nearby(var0002, 0x025F, 0x0050, 0x0010);
	enum();
labelFunc07EA_0036:
	for (var0006 in var0003 with var0004 to var0005) attend labelFunc07EA_006E;
	if (!((UI_get_item_quality(var0006) == 0x0096) && (UI_get_item_frame(var0006) == 0x001F))) goto labelFunc07EA_006B;
	var0000 = var0006;
	var0001 = UI_get_object_position(var0006);
labelFunc07EA_006B:
	goto labelFunc07EA_0036;
labelFunc07EA_006E:
	if (!(!var0000)) goto labelFunc07EA_0076;
	return;
labelFunc07EA_0076:
	var0007 = UI_get_object_position(item);
	var0008 = Func0831(var0007, var0001);
	if (!(!var0008)) goto labelFunc07EA_00A6;
	var0009 = UI_execute_usecode_array(var0000, [(byte)0x55, 0x07EB, (byte)0x2D]);
	return;
labelFunc07EA_00A6:
	var0008 = Func0831(var0007, var0001);
	if (!(!UI_is_not_blocked(var0008, 0x02D1, 0x0000))) goto labelFunc07EA_00CF;
	var0008 = Func0831(var0007, var0001);
labelFunc07EA_00CF:
	if (!(!UI_is_not_blocked(var0008, 0x02D1, 0x0000))) goto labelFunc07EA_00EC;
	var0008 = Func0831(var0007, var0001);
labelFunc07EA_00EC:
	if (!(!UI_is_not_blocked(var0008, 0x02D1, 0x0000))) goto labelFunc07EA_0109;
	var0008 = Func0831(var0007, var0001);
labelFunc07EA_0109:
	if (!(!UI_is_not_blocked(var0008, 0x02D1, 0x0000))) goto labelFunc07EA_012F;
	var0009 = UI_execute_usecode_array(var0000, [(byte)0x55, 0x07EB, (byte)0x2D]);
	return;
labelFunc07EA_012F:
	var000A = UI_create_new_object(0x037F);
	if (!var000A) goto labelFunc07EA_0185;
	UI_set_item_frame(var000A, 0x0000);
	UI_set_item_flag(var000A, 0x0012);
	if (!UI_update_last_created(var0008)) goto labelFunc07EA_0185;
	var0009 = UI_delayed_execute_usecode_array(var000A, [(byte)0x23, (byte)0x2D], 0x0009);
	var0009 = UI_execute_usecode_array(var000A, [(byte)0x23, (byte)0x55, 0x07EA]);
labelFunc07EA_0185:
	return;
}


