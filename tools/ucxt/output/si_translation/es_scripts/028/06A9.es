#game "serpentisle"
// externs
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func099C 0x99C (var var0000);

void Func06A9 object#(0x6A9) ()
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

	if (!(event == 0x0003)) goto labelFunc06A9_017A;
	var0000 = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x27, 0x000A]);
	UI_obj_sprite_effect(0xFE9C, 0x000C, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0039);
	var0001 = Func097D(0xFE9C, 0x0001, 0x02B0, 0xFE99, 0x0004);
	if (!var0001) goto labelFunc06A9_00CF;
	var0002 = UI_find_nearby(item, 0x0320, 0x0014, 0x0000);
	enum();
labelFunc06A9_006C:
	for (var0005 in var0002 with var0003 to var0004) attend labelFunc06A9_00B4;
	if (!(!Func097D(var0005, 0x0001, 0x02B0, 0xFE99, 0x0004))) goto labelFunc06A9_00B1;
	var0006 = UI_create_new_object(0x02B0);
	if (!var0006) goto labelFunc06A9_00B1;
	UI_set_item_frame(var0006, 0x0004);
	var0000 = UI_give_last_created(var0005);
labelFunc06A9_00B1:
	goto labelFunc06A9_006C;
labelFunc06A9_00B4:
	Func099C(0x02B0);
	var0000 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x55, 0x07DA], 0x000A);
labelFunc06A9_00CF:
	var0007 = false;
	var0008 = [0x03B4, 0x03B8, 0x03B7, 0x0284, 0x0285, 0x0286, 0x02F8];
	enum();
labelFunc06A9_00EF:
	for (var000B in var0008 with var0009 to var000A) attend labelFunc06A9_0116;
	if (!Func097D(0xFE9C, 0x0001, var000B, 0xFE99, 0xFE99)) goto labelFunc06A9_0113;
	var0007 = true;
labelFunc06A9_0113:
	goto labelFunc06A9_00EF;
labelFunc06A9_0116:
	var000C = UI_find_nearby(item, 0x00C8, 0x00A0, 0x0010);
	if (!var0007) goto labelFunc06A9_0154;
	enum();
labelFunc06A9_012E:
	for (var000F in var000C with var000D to var000E) attend labelFunc06A9_0151;
	var0000 = UI_execute_usecode_array(var000F, [(byte)0x49, 0x0002, 0x0005]);
	goto labelFunc06A9_012E;
labelFunc06A9_0151:
	goto labelFunc06A9_017A;
labelFunc06A9_0154:
	enum();
labelFunc06A9_0155:
	for (var000F in var000C with var0010 to var0011) attend labelFunc06A9_017A;
	var0000 = UI_execute_usecode_array(var000F, [(byte)0x23, (byte)0x49, 0x0007, 0x0005]);
	goto labelFunc06A9_0155;
labelFunc06A9_017A:
	return;
}


