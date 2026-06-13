#game "serpentisle"
// externs
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func099C 0x99C (var var0000);
extern var Func0906 0x906 (var var0000);
extern void Func0907 0x907 (var var0000, var var0001);
extern void Func0925 0x925 ();
extern void Func0926 0x926 (var var0000);
extern void Func0928 0x928 (var var0000);
extern void Func07FA object#(0x7FA) ();

void Func02E8 shape#(0x2E8) ()
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
	var var0012;
	var var0013;
	var var0014;
	var var0015;
	var var0016;
	var var0017;
	var var0018;
	var var0019;
	var var001A;

	var0000 = UI_get_item_quality(item);
	if (!(var0000 == 0x0001)) goto labelFunc02E8_00C5;
	var0001 = UI_find_nearby(item, 0x0331, 0x0014, 0x0000);
	if (!var0001) goto labelFunc02E8_0037;
	UI_halt_scheduled(var0001);
	UI_clear_item_say(var0001);
labelFunc02E8_0037:
	var0002 = UI_find_nearby(item, 0x037F, 0x001E, 0x0000);
	enum();
labelFunc02E8_0049:
	for (var0005 in var0002 with var0003 to var0004) attend labelFunc02E8_0068;
	var0006 = UI_execute_usecode_array(var0005, [(byte)0x23, (byte)0x2D]);
	goto labelFunc02E8_0049;
labelFunc02E8_0068:
	gflags[0x021C] = true;
	if (!var0001) goto labelFunc02E8_00C4;
	var0007 = UI_get_object_position(item);
	UI_si_path_run_usecode(0xFF69, var0007, 0x0007, item, 0x0314, false);
	var0006 = UI_delayed_execute_usecode_array(var0001, [(byte)0x23, (byte)0x52, "@Thou didst risk thy life...@"], 0x000A);
	var0006 = UI_delayed_execute_usecode_array(var0001, [(byte)0x23, (byte)0x52, "@Thou art truly ethical!@"], 0x001A);
	UI_set_npc_id(0xFF69, 0x0005);
labelFunc02E8_00C4:
	abort;
labelFunc02E8_00C5:
	if (!(var0000 == 0x0002)) goto labelFunc02E8_01ED;
	var0008 = false;
	var0009 = [0x03B4, 0x03B8, 0x03B7, 0x0284, 0x0285, 0x0286, 0x02F8];
	enum();
labelFunc02E8_00EF:
	for (var000C in var0009 with var000A to var000B) attend labelFunc02E8_0116;
	if (!Func097D(0xFE9C, 0x0001, var000C, 0xFE99, 0xFE99)) goto labelFunc02E8_0113;
	var0008 = true;
labelFunc02E8_0113:
	goto labelFunc02E8_00EF;
labelFunc02E8_0116:
	var000D = Func097D(0xFE9C, 0x0001, 0x02B0, 0xFE99, 0x0004);
	if (!var000D) goto labelFunc02E8_0195;
	var000E = UI_find_nearby(item, 0x0320, 0x00A0, 0x0000);
	enum();
labelFunc02E8_0143:
	for (var0011 in var000E with var000F to var0010) attend labelFunc02E8_018B;
	if (!(!Func097D(var0011, 0x0001, 0x02B0, 0xFE99, 0x0004))) goto labelFunc02E8_0188;
	var0012 = UI_create_new_object(0x02B0);
	if (!var0012) goto labelFunc02E8_0188;
	UI_set_item_frame(var0012, 0x0004);
	var0006 = UI_give_last_created(var0011);
labelFunc02E8_0188:
	goto labelFunc02E8_0143;
labelFunc02E8_018B:
	Func099C(0x02B0);
	var0008 = true;
labelFunc02E8_0195:
	if (!(var0008 == false)) goto labelFunc02E8_01A1;
	gflags[0x021D] = true;
labelFunc02E8_01A1:
	var0006 = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x07DA]);
	var0013 = UI_find_nearby(item, 0x00C8, 0x00A0, 0x0010);
	enum();
labelFunc02E8_01C7:
	for (var0016 in var0013 with var0014 to var0015) attend labelFunc02E8_01EC;
	var0006 = UI_execute_usecode_array(var0016, [(byte)0x23, (byte)0x49, 0x0007, 0x0005]);
	goto labelFunc02E8_01C7;
labelFunc02E8_01EC:
	abort;
labelFunc02E8_01ED:
	if (!(var0000 == 0x0074)) goto labelFunc02E8_0283;
	var0017 = UI_find_nearby(0xFE9C, 0x010E, 0x0014, 0x00B0);
	var0017 = (var0017 & UI_find_nearby(0xFE9C, 0x0178, 0x0014, 0x00B0));
	var0017 = (var0017 & UI_find_nearby(0xFE9C, 0x01B1, 0x0014, 0x00B0));
	var0017 = (var0017 & UI_find_nearby(0xFE9C, 0x01B0, 0x0014, 0x00B0));
	enum();
labelFunc02E8_0250:
	for (var001A in var0017 with var0018 to var0019) attend labelFunc02E8_0282;
	if (!(UI_get_item_quality(var001A) == 0x0074)) goto labelFunc02E8_027F;
	if (!(Func0906(var001A) == 0x0002)) goto labelFunc02E8_027F;
	Func0907(var001A, 0x0000);
labelFunc02E8_027F:
	goto labelFunc02E8_0250;
labelFunc02E8_0282:
	abort;
labelFunc02E8_0283:
	if (!((var0000 == 0x0091) && (gflags[0x0254] == false))) goto labelFunc02E8_02A9;
	var0006 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0510], 0x0001);
	abort;
labelFunc02E8_02A9:
	if (!((var0000 == 0x0091) && (gflags[0x0257] == false))) goto labelFunc02E8_02BA;
	abort;
labelFunc02E8_02BA:
	if (!((var0000 == 0x0092) && (gflags[0x0253] == false))) goto labelFunc02E8_02E0;
	var0006 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x047F], 0x0001);
	abort;
labelFunc02E8_02E0:
	if (!((var0000 == 0x0092) && (gflags[0x0256] == false))) goto labelFunc02E8_02F1;
	abort;
labelFunc02E8_02F1:
	if (!((var0000 == 0x0093) && (gflags[0x0255] == false))) goto labelFunc02E8_0317;
	var0006 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0480], 0x0001);
	abort;
labelFunc02E8_0317:
	if (!((var0000 == 0x0093) && (gflags[0x0258] == false))) goto labelFunc02E8_0328;
	abort;
labelFunc02E8_0328:
	if (!(var0000 == 0x000A)) goto labelFunc02E8_0335;
	Func0925();
labelFunc02E8_0335:
	if (!((var0000 > 0x0014) && (var0000 <= 0x0064))) goto labelFunc02E8_034D;
	Func0926(var0000);
labelFunc02E8_034D:
	if (!((var0000 > 0x0064) && (var0000 < 0x00C8))) goto labelFunc02E8_0365;
	Func0928(var0000);
labelFunc02E8_0365:
	if (!(var0000 == 0x00C8)) goto labelFunc02E8_0373;
	item->Func07FA();
labelFunc02E8_0373:
	if (!((var0000 >= 0x00C9) && (var0000 <= 0x00CB))) goto labelFunc02E8_0397;
	var0006 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0602]);
labelFunc02E8_0397:
	if (!(var0000 == 0x00D2)) goto labelFunc02E8_03B3;
	var0006 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0605]);
labelFunc02E8_03B3:
	return;
}


