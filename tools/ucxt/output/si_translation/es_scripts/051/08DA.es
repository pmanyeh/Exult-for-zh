#game "serpentisle"
// externs
extern void Func08DB 0x8DB (var var0000);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func0924 0x924 (var var0000, var var0001);
extern void Func094F 0x94F (var var0000, var var0001);
extern var Func08E2 0x8E2 (var var0000);
extern void Func08E4 0x8E4 (var var0000);
extern var Func090B 0x90B (var var0000);
extern var Func090A 0x90A (var var0000);

void Func08DA 0x8DA (var var0000)
{
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
	var var0012;
	var var0013;
	var var0014;
	var var0015;
	var var0016;
	var var0017;
	var var0018;
	var var0019;
	var var001A;
	var var001B;
	var var001C;

	var0001 = false;
	var0002 = UI_get_item_quality(var0000);
	if (!(var0002 == 0x0000)) goto labelFunc08DA_011D;
	var0003 = UI_find_nearby_avatar(0x020E);
	enum();
labelFunc08DA_0023:
	for (var0006 in var0003 with var0004 to var0005) attend labelFunc08DA_00B8;
	UI_set_item_shape(var0006, 0x0379);
	var0007 = UI_find_nearby(var0006, 0x01B8, 0x000A, 0x0080);
	var0008 = UI_get_object_position(var0006);
	var0008 = [(var0008[0x0001] + 0x0003), (var0008[0x0002] + 0x0003), var0008[0x0003]];
	enum();
labelFunc08DA_0076:
	for (var000B in var0007 with var0009 to var000A) attend labelFunc08DA_00B5;
	var000C = UI_get_object_position(var000B);
	if (!(var0008[0x0001] == var000C[0x0001])) goto labelFunc08DA_00B2;
	if (!(var0008[0x0002] == var000C[0x0002])) goto labelFunc08DA_00B2;
	UI_remove_item(var000B);
labelFunc08DA_00B2:
	goto labelFunc08DA_0076;
labelFunc08DA_00B5:
	goto labelFunc08DA_0023;
labelFunc08DA_00B8:
	var0003 = UI_find_nearby_avatar(0x0379);
	enum();
labelFunc08DA_00C3:
	for (var0006 in var0003 with var000D to var000E) attend labelFunc08DA_0119;
	UI_set_item_shape(var0006, 0x020E);
	var000B = UI_create_new_object(0x01B8);
	if (!var000B) goto labelFunc08DA_0116;
	var0008 = UI_get_object_position(var0006);
	var0001 = UI_update_last_created([(var0008[0x0001] + 0x0003), (var0008[0x0002] + 0x0003), var0008[0x0003]]);
labelFunc08DA_0116:
	goto labelFunc08DA_00C3;
labelFunc08DA_0119:
	var0001 = true;
labelFunc08DA_011D:
	if (!(var0002 == 0x000A)) goto labelFunc08DA_0140;
	var0001 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0601], 0x0001);
	var0001 = true;
labelFunc08DA_0140:
	if (!(var0002 == 0x0046)) goto labelFunc08DA_0152;
	Func08DB(item);
	var0001 = true;
labelFunc08DA_0152:
	if (!((var0002 == 0x0094) || (var0002 == 0x0095))) goto labelFunc08DA_0168;
	var0001 = true;
labelFunc08DA_0168:
	if (!((var0002 >= 0x0096) && (var0002 <= 0x00A3))) goto labelFunc08DA_029D;
	var0001 = true;
	if (!(var0002 == 0x00A0)) goto labelFunc08DA_0192;
	if (!(!gflags[0x0238])) goto labelFunc08DA_0192;
	goto labelFunc08DA_04A7;
labelFunc08DA_0192:
	if (!(var0002 == 0x00A1)) goto labelFunc08DA_0270;
	Func097F(0xFE9C, "@That did something.@", 0x0002);
	Func097F(0xFF58, "@I hope nothing bad...@", 0x0012);
	UI_play_sound_effect(0x0058);
	if (!(UI_get_item_frame(item) == 0x0000)) goto labelFunc08DA_01D2;
	UI_set_item_frame(item, 0x0001);
	goto labelFunc08DA_01DA;
labelFunc08DA_01D2:
	UI_set_item_frame(item, 0x0000);
labelFunc08DA_01DA:
	var000F = UI_find_nearby(item, 0x0313, 0x0014, 0x0000);
	enum();
labelFunc08DA_01EC:
	for (var0012 in var000F with var0010 to var0011) attend labelFunc08DA_026F;
	var0002 = UI_get_item_quality(var0012);
	if (!(var0002 == 0x009F)) goto labelFunc08DA_0236;
	var0008 = UI_get_object_position(var0012);
	var0001 = UI_execute_usecode_array(var0012, [(byte)0x23, (byte)0x52, "@click@"]);
	var0013 = UI_set_item_quality(var0012, 0x00A0);
labelFunc08DA_0236:
	if (!(var0002 == 0x00A0)) goto labelFunc08DA_026B;
	var0008 = UI_get_object_position(var0012);
	var0001 = UI_execute_usecode_array(var0012, [(byte)0x23, (byte)0x52, "@click@"]);
	var0013 = UI_set_item_quality(var0012, 0x009F);
labelFunc08DA_026B:
	abort;
	goto labelFunc08DA_01EC;
labelFunc08DA_026F:
	abort;
labelFunc08DA_0270:
	if (!(var0002 == 0x00A2)) goto labelFunc08DA_0281;
	gflags[0x0238] = true;
	goto labelFunc08DA_04A7;
labelFunc08DA_0281:
	if (!(var0002 == 0x00A3)) goto labelFunc08DA_0296;
	UI_item_say(0xFE9C, "@'Tis jammed.@");
	abort;
labelFunc08DA_0296:
	Func0924(item, 0xFE99);
labelFunc08DA_029D:
	if (!((var0002 == 0x0047) || ((var0002 == 0x0048) || (var0002 == 0x0049)))) goto labelFunc08DA_02CF;
	var0001 = ("@It's stuck...@" & "@I cannot budge it!@");
	Func094F(0xFE9C, var0001);
	var0001 = false;
	abort;
labelFunc08DA_02CF:
	if (!(var0002 == 0x00CC)) goto labelFunc08DA_0311;
	if (!gflags[0x01B8]) goto labelFunc08DA_0311;
	var0008 = UI_get_object_position(0xFE9C);
	var0014 = true;
	UI_move_object(0xFFDE, [(var0008[0x0001] + 0x0003), (var0008[0x0002] - 0x0002), var0008[0x0003]]);
labelFunc08DA_0311:
	if (!((var0002 > 0x00DC) && (var0002 < 0x00EC))) goto labelFunc08DA_0327;
	var0001 = true;
labelFunc08DA_0327:
	if (!(var0002 == 0x00ED)) goto labelFunc08DA_0346;
	var0001 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x060E], 0x0001);
labelFunc08DA_0346:
	if (!((var0002 > 0x000A) && (var0002 < 0x0010))) goto labelFunc08DA_036B;
	var0001 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0357]);
	abort;
labelFunc08DA_036B:
	if (!(var0002 == 0x0014)) goto labelFunc08DA_037C;
	var0001 = Func08E2(item);
labelFunc08DA_037C:
	if (!(var0002 == 0x0015)) goto labelFunc08DA_0397;
	var0015 = UI_set_item_quality(var0000, 0x0014);
	var0001 = true;
labelFunc08DA_0397:
	if (!((var0002 > 0x005A) && (var0002 < 0x0065))) goto labelFunc08DA_03B3;
	Func08E4(var0002);
	var0001 = true;
labelFunc08DA_03B3:
	if (!(((var0002 >= 0x0001) && (var0002 <= 0x0005)) || (var0002 == 0x0012))) goto labelFunc08DA_0431;
	var0016 = (UI_find_nearby(var0000, 0x034D, 0x0050, 0x0000) & UI_find_nearby(var0000, 0x033C, 0x0050, 0x0000));
	enum();
labelFunc08DA_03F2:
	for (var0019 in var0016 with var0017 to var0018) attend labelFunc08DA_0431;
	if (!(var0002 == UI_get_item_quality(var0019))) goto labelFunc08DA_042E;
	if (!(UI_get_item_shape(var0019) == 0x034D)) goto labelFunc08DA_0425;
	var0001 = Func090B(var0019);
	goto labelFunc08DA_042E;
labelFunc08DA_0425:
	var0001 = Func090A(var0019);
labelFunc08DA_042E:
	goto labelFunc08DA_03F2;
labelFunc08DA_0431:
	if (!((var0002 >= 0x00F0) && (var0002 <= 0x00FA))) goto labelFunc08DA_04A7;
	var0016 = (UI_find_nearby(var0000, 0x034D, 0x0064, 0x0000) & UI_find_nearby(var0000, 0x033C, 0x0064, 0x0000));
	enum();
labelFunc08DA_0468:
	for (var0019 in var0016 with var001A to var001B) attend labelFunc08DA_04A7;
	if (!(var0002 == UI_get_item_quality(var0019))) goto labelFunc08DA_04A4;
	if (!(UI_get_item_shape(var0019) == 0x034D)) goto labelFunc08DA_049B;
	var0001 = Func090B(var0019);
	goto labelFunc08DA_04A4;
labelFunc08DA_049B:
	var0001 = Func090A(var0019);
labelFunc08DA_04A4:
	goto labelFunc08DA_0468;
labelFunc08DA_04A7:
	if (!var0001) goto labelFunc08DA_04EF;
	var001C = UI_get_item_frame(var0000);
	if (!((var001C % 0x0002) == 0x0000)) goto labelFunc08DA_04D6;
	UI_set_item_frame(var0000, (var001C + 0x0001));
	goto labelFunc08DA_04E4;
labelFunc08DA_04D6:
	UI_set_item_frame(var0000, (var001C - 0x0001));
labelFunc08DA_04E4:
	UI_play_sound_effect2(0x0046, item);
	goto labelFunc08DA_04F6;
labelFunc08DA_04EF:
	UI_flash_mouse(0x0000);
labelFunc08DA_04F6:
	return;
}


