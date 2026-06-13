#game "blackgate"
// externs
extern var Func0906 0x906 ();

void Func0665 object#(0x665) ()
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

	if (!(event == 0x0001)) goto labelFunc0665_01AF;
	UI_halt_scheduled(item);
	var0000 = UI_get_object_position(0xFE9C);
	var0001 = [];
	UI_item_say(item, "@Wis Quas@");
	if (!Func0906()) goto labelFunc0665_0199;
	var0002 = UI_execute_usecode_array(item, [(byte)0x58, 0x0043, (byte)0x65, (byte)0x66, (byte)0x67]);
	var0003 = UI_get_object_position(item);
	var0004 = [0xFFF1, 0xFFF1, 0xFFF1, 0xFFFB, 0xFFFB, 0xFFFB, 0x0005, 0x0005, 0x0005, 0x000F, 0x000F, 0x000F];
	var0005 = [0xFFF9, 0x0002, 0x000B, 0xFFF9, 0x0002, 0x000B, 0xFFF9, 0x0002, 0x000B, 0xFFF9, 0x0002, 0x000B];
	var0006 = 0x0007;
	var0007 = 0x0000;
labelFunc0665_00A9:
	if (!(var0007 != 0x000C)) goto labelFunc0665_0131;
	var0007 = (var0007 + 0x0001);
	var0008 = (var0000[0x0001] + var0004[var0007]);
	var0009 = (var0000[0x0002] + var0005[var0007]);
	var0003 = [var0008, var0009, 0x0000];
	var000A = UI_find_nearby(var0003, 0xFE99, var0006, 0x0020);
	enum();
labelFunc0665_0100:
	for (var000D in var000A with var000B to var000C) attend labelFunc0665_012E;
	if (!(UI_get_item_flag(var000D, 0x0000) && (!(var000D in var0001)))) goto labelFunc0665_012B;
	var0001 = (var0001 & var000D);
labelFunc0665_012B:
	goto labelFunc0665_0100;
labelFunc0665_012E:
	goto labelFunc0665_00A9;
labelFunc0665_0131:
	if (!var0001) goto labelFunc0665_017C;
	enum();
labelFunc0665_0138:
	for (var000D in var0001 with var000E to var000F) attend labelFunc0665_0179;
	var0002 = UI_delayed_execute_usecode_array(var000D, [(byte)0x23, (byte)0x55, 0x0665], 0x0005);
	UI_obj_sprite_effect(var000D, 0x000D, 0xFFFF, 0xFFFF, 0x0000, 0x0000, 0x0000, 0xFFFF);
	goto labelFunc0665_0138;
labelFunc0665_0179:
	goto labelFunc0665_0196;
labelFunc0665_017C:
	UI_obj_sprite_effect(item, 0x000D, 0xFFFF, 0xFFFF, 0x0000, 0x0000, 0x0000, 0xFFFF);
labelFunc0665_0196:
	goto labelFunc0665_01AF;
labelFunc0665_0199:
	var0002 = UI_execute_usecode_array(item, [(byte)0x65, (byte)0x66, (byte)0x67, (byte)0x55, 0x0606]);
labelFunc0665_01AF:
	if (!(event == 0x0002)) goto labelFunc0665_01BF;
	UI_clear_item_flag(item, 0x0000);
labelFunc0665_01BF:
	return;
}


