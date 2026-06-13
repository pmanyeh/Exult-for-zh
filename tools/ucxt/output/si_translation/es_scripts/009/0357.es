#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func0357 shape#(0x357) ()
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

	var0000 = UI_get_item_quality(item);
	var0001 = UI_get_item_frame(item);
	var0002 = false;
	if (!(!gflags[0x016C])) goto labelFunc0357_009E;
	var0003 = UI_get_object_position(0xFE9C);
	UI_sprite_effect(0x0005, (var0003[0x0001] - 0x0001), (var0003[0x0002] - 0x0003), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_lightning();
	var0004 = UI_get_random(0x0002);
	UI_reduce_health(0xFE9C, var0004, 0x0005);
	var0005 = ("@Yow!@" & ("@Ouch!@" & ("@That hurt!@" & ("@Ugh...@" & ("@Damn!@" & "@Yikes!@")))));
	var0002 = var0005[UI_get_random(UI_get_array_size(var0005))];
	Func097F(0xFE9C, var0002, 0x0001);
labelFunc0357_009E:
	if (!(var0000 == 0x000B)) goto labelFunc0357_00D4;
	if (!gflags[0x016D]) goto labelFunc0357_00C6;
	if (!gflags[0x016C]) goto labelFunc0357_00BB;
	gflags[0x016C] = false;
	goto labelFunc0357_00BF;
labelFunc0357_00BB:
	gflags[0x016C] = true;
labelFunc0357_00BF:
	var0002 = true;
	goto labelFunc0357_00D4;
labelFunc0357_00C6:
	UI_item_say(0xFE9C, "@'Tis jammed.@");
	var0002 = false;
labelFunc0357_00D4:
	if (!(var0000 == 0x000F)) goto labelFunc0357_0182;
	if (!gflags[0x016D]) goto labelFunc0357_0174;
	if (!gflags[0x016B]) goto labelFunc0357_00F1;
	gflags[0x016B] = false;
	goto labelFunc0357_016D;
labelFunc0357_00F1:
	gflags[0x016B] = true;
	var0006 = UI_find_nearby(item, 0x00F9, 0x001E, 0x0000);
	enum();
labelFunc0357_0107:
	for (var0009 in var0006 with var0007 to var0008) attend labelFunc0357_016D;
	if (!(UI_get_item_frame(var0009) == 0x0001)) goto labelFunc0357_016A;
	var0002 = UI_execute_usecode_array(var0009, [(byte)0x23, (byte)0x52, "@Yes, Master?@"]);
	var000A = Func0992(0x0001, 0x0000, 0x0000, true);
	Func097F(var000A, "@The Oracle speaks!@", 0x0003);
	var0002 = UI_delayed_execute_usecode_array(var0009, [(byte)0x23, (byte)0x55, 0x00F9, 0x0000], 0x000A);
labelFunc0357_016A:
	goto labelFunc0357_0107;
labelFunc0357_016D:
	var0002 = true;
	goto labelFunc0357_0182;
labelFunc0357_0174:
	var0002 = false;
	UI_item_say(0xFE9C, "@'Tis jammed.@");
labelFunc0357_0182:
	if (!(var0000 == 0x000D)) goto labelFunc0357_01A1;
	if (!gflags[0x016D]) goto labelFunc0357_0199;
	gflags[0x016D] = false;
	goto labelFunc0357_019D;
labelFunc0357_0199:
	gflags[0x016D] = true;
labelFunc0357_019D:
	var0002 = true;
labelFunc0357_01A1:
	if (!(var0000 == 0x000C)) goto labelFunc0357_0225;
	if (!gflags[0x016D]) goto labelFunc0357_0217;
	var000B = UI_find_nearby(item, 0x00C8, 0x000F, 0x0010);
	if (!var000B) goto labelFunc0357_0206;
	var0002 = true;
	if (!var0001) goto labelFunc0357_01DC;
	UI_remove_item(var000B);
	goto labelFunc0357_0203;
labelFunc0357_01DC:
	var0002 = UI_execute_usecode_array(var000B, [(byte)0x23, (byte)0x49, 0x0002, 0x0005]);
	var000A = Func0992(0x0001, "@Watch out!@", "@Whoops...@", true);
labelFunc0357_0203:
	goto labelFunc0357_0214;
labelFunc0357_0206:
	var0002 = false;
	UI_item_say(0xFE9C, "@'Tis jammed.@");
labelFunc0357_0214:
	goto labelFunc0357_0225;
labelFunc0357_0217:
	var0002 = false;
	UI_item_say(0xFE9C, "@'Tis jammed.@");
labelFunc0357_0225:
	if (!(var0000 == 0x000E)) goto labelFunc0357_02C2;
	if (!gflags[0x016D]) goto labelFunc0357_02B4;
	var0002 = true;
	if (!(!var0001)) goto labelFunc0357_02B1;
	gflags[0x0166] = true;
	UI_earthquake(0x0002);
	var0006 = UI_find_nearby(item, 0x00F9, 0x001E, 0x0000);
	enum();
labelFunc0357_025D:
	for (var0009 in var0006 with var000C to var000D) attend labelFunc0357_02A1;
	if (!(UI_get_item_frame(var0009) == 0x0001)) goto labelFunc0357_029E;
	var0002 = UI_execute_usecode_array(var0009, [(byte)0x23, (byte)0x52, "@Oh!@", (byte)0x27, 0x000F, (byte)0x52, "@Please, Master...@", (byte)0x27, 0x000F, (byte)0x52, "@Stop!@"]);
labelFunc0357_029E:
	goto labelFunc0357_025D;
labelFunc0357_02A1:
	var000A = Func0992(0x0001, "@I hear something...@", "@What was that?@", true);
labelFunc0357_02B1:
	goto labelFunc0357_02C2;
labelFunc0357_02B4:
	var0002 = false;
	UI_item_say(0xFE9C, "@'Tis jammed.@");
labelFunc0357_02C2:
	if (!var0002) goto labelFunc0357_02FC;
	if (!((var0001 % 0x0002) == 0x0000)) goto labelFunc0357_02E5;
	UI_set_item_frame(item, (var0001 + 0x0001));
	goto labelFunc0357_02F1;
labelFunc0357_02E5:
	UI_set_item_frame(item, (var0001 - 0x0001));
labelFunc0357_02F1:
	UI_play_sound_effect2(0x0046, item);
	goto labelFunc0357_0303;
labelFunc0357_02FC:
	UI_flash_mouse(0x0000);
labelFunc0357_0303:
	return;
}


