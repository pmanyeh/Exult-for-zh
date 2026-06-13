#game "serpentisle"
// externs
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func09AB 0x9AB (var var0000, var var0001, var var0002, var var0003, var var0004);

void Func02E4 shape#(0x2E4) ()
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

	if (!(event == 0x0001)) goto labelFunc02E4_00CF;
	var0000 = UI_get_item_frame(item);
	var0001 = false;
	var0002 = UI_find_nearby(item, 0x032A, 0x0014, 0x0000);
	enum();
labelFunc02E4_0026:
	for (var0005 in var0002 with var0003 to var0004) attend labelFunc02E4_00AD;
	var0006 = UI_get_object_position(var0005);
	var0007 = UI_get_item_frame(var0005);
	if (!((var0006[0x0001] == 0x0882) && ((var0006[0x0002] == 0x0754) && ((var0007 == 0x0000) && (var0000 == 0x0000))))) goto labelFunc02E4_00AA;
	UI_play_sound_effect(0x004A);
	UI_play_sound_effect(0x0082);
	UI_set_item_frame(item, 0x0001);
	var0008 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x46, 0x0002, (byte)0x46, 0x0003, (byte)0x46, 0x0004, (byte)0x46, 0x0005, (byte)0x55, 0x02E4]);
	abort;
labelFunc02E4_00AA:
	goto labelFunc02E4_0026;
labelFunc02E4_00AD:
	var0009 = ["@Methinks thou shouldst place an empty bucket at its base, Avatar.@"];
	var000A = ["@Hummmm. I'll wager I could fill an empty bucket if I placed one at its base...@"];
	var0008 = Func0992(0xFFFE, var0009, var000A, false);
labelFunc02E4_00CF:
	if (!(event == 0x0002)) goto labelFunc02E4_01AB;
	var0002 = UI_find_nearby(item, 0x032A, 0x000A, 0x0000);
	enum();
labelFunc02E4_00E9:
	for (var0005 in var0002 with var000B to var000C) attend labelFunc02E4_01AB;
	var0007 = UI_get_item_frame(var0005);
	var0006 = UI_get_object_position(var0005);
	if (!((var0006[0x0001] == 0x0882) && ((var0006[0x0002] == 0x0754) && (var0007 == 0x0000)))) goto labelFunc02E4_017D;
	UI_set_item_frame(var0005, 0x0003);
	UI_play_sound_effect(0x004A);
	UI_play_sound_effect(0x0007);
	var0008 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x46, 0x0006, (byte)0x46, 0x0007, (byte)0x46, 0x0008, (byte)0x46, 0x0009, (byte)0x46, 0x000A, (byte)0x46, 0x000B, (byte)0x46, 0x000C, (byte)0x46, 0x000D, (byte)0x46, 0x0000]);
	goto labelFunc02E4_01A8;
labelFunc02E4_017D:
	var000D = Func09AB(0x0390, UI_die_roll(0x0014, 0x0017), 0x0000, false, [0x0882, 0x0754, 0x0000]);
	UI_set_item_frame(item, 0x0000);
labelFunc02E4_01A8:
	goto labelFunc02E4_00E9;
labelFunc02E4_01AB:
	return;
}


