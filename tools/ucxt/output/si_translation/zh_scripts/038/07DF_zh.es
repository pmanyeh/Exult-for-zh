#game "serpentisle"
// externs
extern void Func09AA 0x9AA ();
extern void Func08C9 0x8C9 ();
extern void Func08CA 0x8CA ();
extern void Func08CB 0x8CB ();
extern void Func08CC 0x8CC ();
extern void Func08CD 0x8CD ();
extern void Func08CE 0x8CE ();
extern void Func08CF 0x8CF (var var0000);
extern void Func08D0 0x8D0 ();
extern void Func08D1 0x8D1 ();
extern void Func08D2 0x8D2 ();
extern void Func08D3 0x8D3 ();
extern void Func08D4 0x8D4 ();
extern var Func08D5 0x8D5 ();
extern var Func08D6 0x8D6 ();
extern void Func08D7 0x8D7 ();
extern void Func08D8 0x8D8 ();

void Func07DF object#(0x7DF) ()
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

	if (!(event == 0x000E)) goto labelFunc07DF_0032;
	Func09AA();
	event = 0x000A;
	if (!(UI_get_item_shape(item) == 0x0103)) goto labelFunc07DF_0032;
	var0000 = [0x0A09, 0x055A, 0x0000];
	UI_move_object(item, var0000);
labelFunc07DF_0032:
	if (!(event == 0x0003)) goto labelFunc07DF_053D;
	if (!(!UI_get_item_quality(item))) goto labelFunc07DF_0049;
	Func08C9();
	goto labelFunc07DF_053D;
labelFunc07DF_0049:
	var0001 = UI_get_object_position(0xFE9C);
	if (!(var0001[0x0003] >= 0x0006)) goto labelFunc07DF_0061;
	abort;
labelFunc07DF_0061:
	if (!(UI_get_item_quality(item) == 0x0001)) goto labelFunc07DF_0070;
	Func08CA();
labelFunc07DF_0070:
	if (!(UI_get_item_quality(item) == 0x0002)) goto labelFunc07DF_007F;
	Func08CB();
labelFunc07DF_007F:
	if (!(UI_get_item_quality(item) == 0x0003)) goto labelFunc07DF_008E;
	Func08CC();
labelFunc07DF_008E:
	if (!(UI_get_item_quality(item) == 0x0004)) goto labelFunc07DF_009D;
	Func08CD();
labelFunc07DF_009D:
	if (!(UI_get_item_quality(item) == 0x0005)) goto labelFunc07DF_00AC;
	Func08CE();
labelFunc07DF_00AC:
	if (!(UI_get_item_quality(item) == 0x0006)) goto labelFunc07DF_00BE;
	Func08CF(0x0000);
labelFunc07DF_00BE:
	if (!(UI_get_item_quality(item) == 0x0007)) goto labelFunc07DF_00D0;
	Func08CF(0x0001);
labelFunc07DF_00D0:
	if (!(UI_get_item_quality(item) == 0x0008)) goto labelFunc07DF_00DF;
	Func08D0();
labelFunc07DF_00DF:
	if (!(UI_get_item_quality(item) == 0x0009)) goto labelFunc07DF_0100;
	Func08D1();
	var0000 = [0x0A18, 0x0546, 0x0000];
	goto labelFunc07DF_0638;
labelFunc07DF_0100:
	if (!(UI_get_item_quality(item) == 0x000A)) goto labelFunc07DF_010F;
	Func08D2();
labelFunc07DF_010F:
	if (!(UI_get_item_quality(item) == 0x000B)) goto labelFunc07DF_011E;
	Func08D3();
labelFunc07DF_011E:
	if (!(UI_get_item_quality(item) == 0x000C)) goto labelFunc07DF_012D;
	Func08D4();
labelFunc07DF_012D:
	if (!(UI_get_item_quality(item) == 0x000D)) goto labelFunc07DF_013C;
	Func08CA();
labelFunc07DF_013C:
	if (!(UI_get_item_quality(item) == 0x000E)) goto labelFunc07DF_0160;
	if (!Func08D5()) goto labelFunc07DF_0160;
	var0000 = [0x09F6, 0x0569, 0x0000];
	goto labelFunc07DF_0638;
labelFunc07DF_0160:
	if (!(UI_get_item_quality(item) == 0x000F)) goto labelFunc07DF_0184;
	if (!Func08D6()) goto labelFunc07DF_0184;
	var0000 = [0x0A08, 0x053E, 0x0000];
	goto labelFunc07DF_0638;
labelFunc07DF_0184:
	if (!(UI_get_item_quality(item) == 0x0010)) goto labelFunc07DF_0193;
	Func08D7();
labelFunc07DF_0193:
	if (!(UI_get_item_quality(item) == 0x0011)) goto labelFunc07DF_01A2;
	Func08CA();
labelFunc07DF_01A2:
	if (!(UI_get_item_quality(item) == 0x0012)) goto labelFunc07DF_01B1;
	Func08D8();
labelFunc07DF_01B1:
	var0000 = false;
	if (!(UI_get_item_quality(item) == 0x00C8)) goto labelFunc07DF_0221;
	var0002 = UI_find_nearest(item, 0x00E9, 0x0003);
	if (!(UI_get_item_frame(var0002) == 0x0001)) goto labelFunc07DF_0221;
	var0000 = UI_get_object_position(0xFE9C);
	var0003 = UI_create_new_object2(0x017D, var0000);
	var0004 = UI_set_last_created(var0003);
	UI_set_polymorph(var0003, 0x017D);
	UI_clear_item_flag(var0003, 0x001D);
	var0000 = [0x0976, 0x0567, 0x0000];
labelFunc07DF_0221:
	if (!(UI_get_item_quality(item) == 0x00C9)) goto labelFunc07DF_023C;
	var0000 = [0x08DE, 0x05CF, 0x0000];
labelFunc07DF_023C:
	if (!(UI_get_item_quality(item) == 0x00CA)) goto labelFunc07DF_0273;
	var0002 = UI_find_nearest(item, 0x00E9, 0x0003);
	if (!(UI_get_item_frame(var0002) == 0x0001)) goto labelFunc07DF_0273;
	var0000 = [0x088E, 0x057F, 0x0000];
labelFunc07DF_0273:
	if (!(UI_get_item_quality(item) == 0x00CB)) goto labelFunc07DF_0283;
	Func08CC();
	abort;
labelFunc07DF_0283:
	if (!(UI_get_item_quality(item) == 0x00CC)) goto labelFunc07DF_029E;
	var0000 = [0x0926, 0x0564, 0x0001];
labelFunc07DF_029E:
	if (!(UI_get_item_quality(item) == 0x00CD)) goto labelFunc07DF_02B9;
	var0000 = [0x0988, 0x05F7, 0x0001];
labelFunc07DF_02B9:
	if (!(UI_get_item_quality(item) == 0x00CE)) goto labelFunc07DF_02D4;
	var0000 = [0x0A18, 0x0606, 0x0000];
labelFunc07DF_02D4:
	if (!(UI_get_item_quality(item) == 0x00CF)) goto labelFunc07DF_02EF;
	var0000 = [0x0937, 0x0732, 0x0001];
labelFunc07DF_02EF:
	if (!(UI_get_item_quality(item) == 0x00D0)) goto labelFunc07DF_030A;
	var0000 = [0x086B, 0x05FE, 0x0001];
labelFunc07DF_030A:
	if (!(UI_get_item_quality(item) == 0x00D1)) goto labelFunc07DF_0332;
	if (!(var0001[0x0003] > 0x0001)) goto labelFunc07DF_0332;
	var0000 = [0x0A2F, 0x0698, 0x0000];
labelFunc07DF_0332:
	if (!(UI_get_item_quality(item) == 0x00D2)) goto labelFunc07DF_034D;
	var0000 = [0x0A36, 0x0647, 0x0000];
labelFunc07DF_034D:
	if (!(UI_get_item_quality(item) == 0x00D3)) goto labelFunc07DF_0368;
	var0000 = [0x0A28, 0x06C7, 0x0001];
labelFunc07DF_0368:
	if (!(UI_get_item_quality(item) == 0x00D4)) goto labelFunc07DF_0462;
	var0005 = UI_get_party_list();
	enum();
labelFunc07DF_037C:
	for (var0008 in var0005 with var0006 to var0007) attend labelFunc07DF_0461;
	var0004 = UI_execute_usecode_array(var0008, [(byte)0x27, 0x0003]);
	var0000 = [0x0BB8, 0x02CA, 0x0001];
	var0009 = UI_get_object_position(var0008);
	var000A = UI_get_object_position(item);
	if (!(var0009[0x0001] > var000A[0x0001])) goto labelFunc07DF_03E7;
	var0000[0x0001] = (var0000[0x0001] + (var0009[0x0001] - var000A[0x0001]));
	goto labelFunc07DF_0401;
labelFunc07DF_03E7:
	var0000[0x0001] = (var0000[0x0001] - (var000A[0x0001] - var0009[0x0001]));
labelFunc07DF_0401:
	if (!(var0009[0x0002] > var000A[0x0002])) goto labelFunc07DF_042E;
	var0000[0x0002] = (var0000[0x0002] + (var0009[0x0002] - var000A[0x0002]));
	goto labelFunc07DF_0448;
labelFunc07DF_042E:
	var0000[0x0002] = (var0000[0x0002] - (var000A[0x0002] - var0009[0x0002]));
labelFunc07DF_0448:
	var0000[0x0003] = var0009[0x0003];
	UI_move_object(var0008, var0000);
	goto labelFunc07DF_037C;
labelFunc07DF_0461:
	abort;
labelFunc07DF_0462:
	if (!(UI_get_item_quality(item) == 0x00D5)) goto labelFunc07DF_047D;
	var0000 = [0x0A15, 0x0557, 0x0000];
labelFunc07DF_047D:
	if (!var0000) goto labelFunc07DF_053D;
	if (!((UI_get_item_quality(item) == 0x00CF) && ((gflags[0x0239] == false) && UI_get_item_flag(0xFF58, 0x0006)))) goto labelFunc07DF_0504;
	UI_move_object(0xFE9B, var0000);
	UI_sprite_effect(0x0007, (var0000[0x0001] - 0x0001), (var0000[0x0002] - 0x0001), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0053);
	gflags[0x0239] = true;
	UI_clear_item_flag(0xFF58, 0x001D);
	gflags[0x0007] = true;
	var000B = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x04A8], 0x000F);
	goto labelFunc07DF_053D;
labelFunc07DF_0504:
	UI_move_object(0xFE9B, var0000);
	UI_sprite_effect(0x0007, (var0000[0x0001] - 0x0001), (var0000[0x0002] - 0x0001), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0082);
	abort;
labelFunc07DF_053D:
	if (!(event == 0x0002)) goto labelFunc07DF_05FE;
	if (!((UI_get_item_shape(item) == 0x037F) || (UI_get_item_shape(item) == 0x00E0))) goto labelFunc07DF_055E;
	Func08CC();
labelFunc07DF_055E:
	if (!(UI_get_item_shape(item) == 0x0331)) goto labelFunc07DF_056D;
	Func08CD();
labelFunc07DF_056D:
	if (!(UI_get_item_shape(item) == 0x017D)) goto labelFunc07DF_057C;
	Func08CD();
labelFunc07DF_057C:
	if (!((UI_get_item_shape(item) == 0x02D1) || (UI_get_item_shape(item) == 0x03DD))) goto labelFunc07DF_0595;
	Func08CD();
labelFunc07DF_0595:
	if (!(UI_get_item_shape(item) == 0x0103)) goto labelFunc07DF_05A4;
	Func08CA();
labelFunc07DF_05A4:
	if (!(UI_get_item_shape(item) == 0x0190)) goto labelFunc07DF_05B3;
	Func08CA();
labelFunc07DF_05B3:
	if (!(UI_get_item_shape(item) == 0x0313)) goto labelFunc07DF_05C2;
	Func08CA();
labelFunc07DF_05C2:
	if (!(UI_get_item_shape(item) == 0x0210)) goto labelFunc07DF_05D1;
	Func08CA();
labelFunc07DF_05D1:
	if (!(UI_get_item_shape(item) == 0x0375)) goto labelFunc07DF_05E0;
	Func08D4();
labelFunc07DF_05E0:
	if (!(UI_get_item_shape(item) == 0x0179)) goto labelFunc07DF_05EF;
	Func08D4();
labelFunc07DF_05EF:
	if (!(UI_get_item_shape(item) == 0x032B)) goto labelFunc07DF_05FE;
	Func08D7();
labelFunc07DF_05FE:
	if (!(event == 0x000A)) goto labelFunc07DF_0637;
	if (!(UI_get_item_shape(item) == UI_get_item_shape(0xFF27))) goto labelFunc07DF_0619;
	Func08D4();
labelFunc07DF_0619:
	if (!(UI_get_item_shape(item) == 0x0103)) goto labelFunc07DF_0628;
	Func08CA();
labelFunc07DF_0628:
	if (!(UI_get_item_shape(item) == 0x0190)) goto labelFunc07DF_0637;
	Func08CA();
labelFunc07DF_0637:
	abort;
labelFunc07DF_0638:
	if (!var0000) goto labelFunc07DF_067C;
	var000C = (var0000 & [0xFE99, 0x0000]);
	var000D = UI_find_nearby(var000C, 0x0113, 0x0005, 0x0010);
	enum();
labelFunc07DF_0662:
	for (var0010 in var000D with var000E to var000F) attend labelFunc07DF_0677;
	UI_remove_item(var0010);
	goto labelFunc07DF_0662;
labelFunc07DF_0677:
	UI_remove_item(item);
labelFunc07DF_067C:
	return;
}


