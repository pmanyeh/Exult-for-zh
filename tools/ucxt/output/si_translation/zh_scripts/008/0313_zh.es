#game "serpentisle"
// externs
extern void Func090D 0x90D (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern void Func08DA 0x8DA (var var0000);

void Func0313 shape#(0x313) ()
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
	var var000D;
	var var000E;
	var var000F;
	var var0010;
	var var0011;

	if (!(event == 0x0001)) goto labelFunc0313_009E;
	UI_close_gumps();
	if (!(UI_get_distance(0xFE9C, item) > 0x0001)) goto labelFunc0313_0044;
	var0000 = 0xFFFF;
	var0001 = 0xFFFF;
	var0002 = 0xFFFD;
	Func090D(item, var0000, var0001, var0002, 0x0313, item, 0x0001);
	goto labelFunc0313_009E;
labelFunc0313_0044:
	if (!((UI_get_item_quality(item) == 0x0094) || (UI_get_item_quality(item) == 0x0095))) goto labelFunc0313_0072;
	var0003 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x55, 0x0313], 0x0001);
	goto labelFunc0313_009E;
labelFunc0313_0072:
	var0004 = UI_direction_from(0xFE9C, item);
	var0005 = UI_execute_usecode_array(0xFE9C, [(byte)0x59, var0004, (byte)0x01, (byte)0x6C, (byte)0x27, 0x0002, (byte)0x61]);
	Func08DA(item);
labelFunc0313_009E:
	if (!(event == 0x0002)) goto labelFunc0313_0204;
	if (!((UI_get_item_shape(item) == 0x02D1) || (UI_get_item_shape(item) == 0x03DD))) goto labelFunc0313_0200;
	var0006 = UI_find_nearest(0xFE9C, 0x0313, 0x0001);
	var0007 = UI_find_nearby(item, 0x0113, 0x0028, 0x0010);
	enum();
labelFunc0313_00DE:
	for (var000A in var0007 with var0008 to var0009) attend labelFunc0313_01FD;
	if (!((UI_get_item_quality(var000A) == 0x00C8) && (UI_get_item_frame(var000A) == 0x0007))) goto labelFunc0313_01FA;
	var000B = UI_find_nearest(var000A, 0x00E9, 0x0008);
	if (!(UI_get_item_frame(var000B) == 0x0001)) goto labelFunc0313_0154;
	var0004 = UI_direction_from(0xFE9C, var0006);
	var0005 = UI_execute_usecode_array(0xFE9C, [(byte)0x59, var0004, (byte)0x01, (byte)0x6C, (byte)0x27, 0x0002, (byte)0x61]);
	Func08DA(var0006);
	goto labelFunc0313_01FA;
labelFunc0313_0154:
	if (!(UI_get_schedule_type(0xFF58) == 0x001F)) goto labelFunc0313_01EF;
	UI_item_say(0xFF58, "@I shall set the other lever...@");
	UI_set_schedule_type(0xFF58, 0x000F);
	var000C = UI_find_nearby(0xFE9C, 0x0313, 0x0028, 0x0000);
	var000D = false;
	enum();
labelFunc0313_018E:
	for (var0010 in var000C with var000E to var000F) attend labelFunc0313_01AD;
	if (!(!(var0010 == var0006))) goto labelFunc0313_01AA;
	var000D = var0010;
labelFunc0313_01AA:
	goto labelFunc0313_018E;
labelFunc0313_01AD:
	var0011 = UI_get_object_position(var000D);
	var0011[0x0002] = (var0011[0x0002] + 0x0001);
	UI_si_path_run_usecode(0xFF58, var0011, 0x000A, 0xFF58, 0x04A8, true);
	UI_set_path_failure([0x04A8], 0xFF58, 0x000E);
	abort;
	goto labelFunc0313_01FA;
labelFunc0313_01EF:
	UI_item_say(0xFE9C, "@The lever will not move.@");
	abort;
labelFunc0313_01FA:
	goto labelFunc0313_00DE;
labelFunc0313_01FD:
	goto labelFunc0313_0204;
labelFunc0313_0200:
	Func08DA(item);
labelFunc0313_0204:
	return;
}


