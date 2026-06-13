#game "serpentisle"
// externs
extern var Func0951 0x951 ();

void Func065D object#(0x65D) ()
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

	if (!(event == 0x0001)) goto labelFunc065D_01B3;
	UI_halt_scheduled(item);
	var0000 = UI_get_object_position(0xFE9C);
	var0001 = [];
	UI_item_say(item, "@Wis Quas@");
	if (!Func0951()) goto labelFunc065D_019B;
	var0002 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x58, 0x0082, (byte)0x65, (byte)0x66, (byte)0x67]);
	var0003 = UI_get_object_position(item);
	var0004 = [0xFFF1, 0xFFF1, 0xFFF1, 0xFFFB, 0xFFFB, 0xFFFB, 0x0005, 0x0005, 0x0005, 0x000F, 0x000F, 0x000F];
	var0005 = [0xFFF9, 0x0002, 0x000B, 0xFFF9, 0x0002, 0x000B, 0xFFF9, 0x0002, 0x000B, 0xFFF9, 0x0002, 0x000B];
	var0006 = 0x0007;
	var0007 = 0x0000;
labelFunc065D_00AB:
	if (!(var0007 != 0x000C)) goto labelFunc065D_0133;
	var0007 = (var0007 + 0x0001);
	var0008 = (var0000[0x0001] + var0004[var0007]);
	var0009 = (var0000[0x0002] + var0005[var0007]);
	var0003 = [var0008, var0009, 0x0000];
	var000A = UI_find_nearby(var0003, 0xFE99, var0006, 0x0020);
	enum();
labelFunc065D_0102:
	for (var000D in var000A with var000B to var000C) attend labelFunc065D_0130;
	if (!(UI_get_item_flag(var000D, 0x0000) && (!(var000D in var0001)))) goto labelFunc065D_012D;
	var0001 = (var0001 & var000D);
labelFunc065D_012D:
	goto labelFunc065D_0102;
labelFunc065D_0130:
	goto labelFunc065D_00AB;
labelFunc065D_0133:
	if (!var0001) goto labelFunc065D_017E;
	enum();
labelFunc065D_013A:
	for (var000D in var0001 with var000E to var000F) attend labelFunc065D_017B;
	var0002 = UI_delayed_execute_usecode_array(var000D, [(byte)0x23, (byte)0x55, 0x065D], 0x0005);
	UI_obj_sprite_effect(var000D, 0x000D, 0xFFFF, 0xFFFF, 0x0000, 0x0000, 0x0000, 0xFFFF);
	goto labelFunc065D_013A;
labelFunc065D_017B:
	goto labelFunc065D_0198;
labelFunc065D_017E:
	UI_obj_sprite_effect(item, 0x000D, 0xFFFF, 0xFFFF, 0x0000, 0x0000, 0x0000, 0xFFFF);
labelFunc065D_0198:
	goto labelFunc065D_01B3;
labelFunc065D_019B:
	var0002 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x65, (byte)0x66, (byte)0x67, (byte)0x55, 0x0606]);
labelFunc065D_01B3:
	if (!(event == 0x0002)) goto labelFunc065D_01C3;
	UI_clear_item_flag(item, 0x0000);
labelFunc065D_01C3:
	return;
}


