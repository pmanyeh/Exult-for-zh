#game "serpentisle"
// externs
extern void Func09AD 0x9AD (var var0000);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func0702 object#(0x702) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(UI_get_item_flag(0xFFE1, 0x0004) && (event == 0x0003))) goto labelFunc0702_0019;
	UI_remove_item(item);
	abort;
labelFunc0702_0019:
	if (!(event == 0x0003)) goto labelFunc0702_009E;
	var0000 = UI_find_nearby(item, 0x016B, 0x001E, 0x0000);
	var0001 = (0x0006 - UI_get_array_size(var0000));
labelFunc0702_0040:
	if (!(var0001 > 0x0000)) goto labelFunc0702_009E;
	var0002 = UI_create_new_object2(0x016B, [(0x0865 + UI_get_random(0x0013)), 0x083B, 0x0000]);
	if (!var0002) goto labelFunc0702_009B;
	if (!gflags[0x0148]) goto labelFunc0702_007D;
	Func09AD(var0002);
	goto labelFunc0702_0091;
labelFunc0702_007D:
	UI_set_schedule_type(var0002, 0x0007);
	UI_set_alignment(var0002, 0x0000);
labelFunc0702_0091:
	var0001 = (var0001 - 0x0001);
labelFunc0702_009B:
	goto labelFunc0702_0040;
labelFunc0702_009E:
	if (!gflags[0x0148]) goto labelFunc0702_00BA;
	Func097F(0xFFE1, "@Aha!@", 0x0000);
	UI_set_schedule_type(0xFFE1, 0x0000);
labelFunc0702_00BA:
	if (!((UI_get_schedule_type(0xFFE1) == 0x0000) || (UI_get_schedule_type(0xFFE1) == 0x0003))) goto labelFunc0702_00D5;
	abort;
labelFunc0702_00D5:
	UI_clear_item_say(0xFFE1);
	var0003 = UI_get_random(0x0006);
	if (!(var0003 == 0x0001)) goto labelFunc0702_00FC;
	Func097F(0xFFE1, "@Tell me!@", 0x0000);
labelFunc0702_00FC:
	if (!(var0003 == 0x0002)) goto labelFunc0702_0112;
	Func097F(0xFFE1, "@Bring tongs!@", 0x0000);
labelFunc0702_0112:
	if (!(var0003 == 0x0003)) goto labelFunc0702_0128;
	Func097F(0xFFE1, "@Tell me the secret!@", 0x0003);
labelFunc0702_0128:
	if (!(var0003 == 0x0004)) goto labelFunc0702_013E;
	Func097F(0xFFE1, "@Bring the prisoner!@", 0x0000);
labelFunc0702_013E:
	if (!(var0003 == 0x0005)) goto labelFunc0702_0154;
	Func097F(0xFFE1, "@Make him bleed.@", 0x0000);
labelFunc0702_0154:
	if (!(var0003 == 0x0006)) goto labelFunc0702_016A;
	Func097F(0xFFE1, "@Torture him...@", 0x0000);
labelFunc0702_016A:
	var0000 = UI_find_nearby(item, 0x016B, 0x001E, 0x0000);
	var0004 = false;
	if (!var0000) goto labelFunc0702_0263;
	var0004 = var0000[UI_get_random(UI_get_array_size(var0000))];
	UI_clear_item_say(var0004);
	if (!(var0003 == 0x0001)) goto labelFunc0702_01BE;
	var0002 = UI_delayed_execute_usecode_array(var0004, [(byte)0x23, (byte)0x52, "@Or die!@"], 0x0005);
labelFunc0702_01BE:
	if (!(var0003 == 0x0002)) goto labelFunc0702_01DF;
	var0002 = UI_delayed_execute_usecode_array(var0004, [(byte)0x23, (byte)0x52, "@Yes, Rotoluncia!@"], 0x0005);
labelFunc0702_01DF:
	if (!(var0003 == 0x0003)) goto labelFunc0702_0200;
	var0002 = UI_delayed_execute_usecode_array(var0004, [(byte)0x23, (byte)0x52, "@Tell about Daemons!@"], 0x0005);
labelFunc0702_0200:
	if (!(var0003 == 0x0004)) goto labelFunc0702_0221;
	var0002 = UI_delayed_execute_usecode_array(var0004, [(byte)0x23, (byte)0x52, "@Let me do it!@"], 0x0002);
labelFunc0702_0221:
	if (!(var0003 == 0x0005)) goto labelFunc0702_0242;
	var0002 = UI_delayed_execute_usecode_array(var0004, [(byte)0x23, (byte)0x52, "@I'm thirsty...@"], 0x0007);
labelFunc0702_0242:
	if (!(var0003 == 0x0006)) goto labelFunc0702_0263;
	var0002 = UI_delayed_execute_usecode_array(var0004, [(byte)0x23, (byte)0x52, "@Then kill him!@"], 0x0004);
labelFunc0702_0263:
	var0002 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0702], (UI_get_random(0x000F) + 0x000A));
	return;
}


