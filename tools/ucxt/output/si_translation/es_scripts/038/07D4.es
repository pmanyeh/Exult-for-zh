#game "serpentisle"
// externs
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func08B9 0x8B9 (var var0000, var var0001);

void Func07D4 object#(0x7D4) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!((event == 0x0002) && (gflags[0x000A] == false))) goto labelFunc07D4_01F8;
	UI_play_sound_effect(0x005B);
	var0000 = Func09A0(0x0000, 0x0001);
	UI_play_music(0x0040, var0000);
	var0001 = Func09A0(0x0000, 0x0002);
	var0002 = UI_set_item_quality(var0001, 0x0000);
	var0002 = UI_set_item_quality(var0000, 0x0001);
	var0002 = UI_delayed_execute_usecode_array(var0000, [(byte)0x23, (byte)0x55, 0x07D4], 0x0002);
	var0002 = UI_delayed_execute_usecode_array(var0000, [(byte)0x23, (byte)0x55, 0x07D4], 0x0014);
	var0002 = UI_delayed_execute_usecode_array(var0000, [(byte)0x23, (byte)0x55, 0x07D4], 0x0028);
	var0002 = UI_delayed_execute_usecode_array(var0000, [(byte)0x23, (byte)0x55, 0x07D4], 0x003C);
	var0002 = UI_delayed_execute_usecode_array(var0000, [(byte)0x23, (byte)0x55, 0x07D4], 0x0050);
	var0002 = UI_delayed_execute_usecode_array(var0000, [(byte)0x23, (byte)0x55, 0x07D4], 0x005F);
	var0002 = UI_delayed_execute_usecode_array(var0000, [(byte)0x23, (byte)0x55, 0x07D4], 0x006E);
	var0002 = UI_delayed_execute_usecode_array(var0000, [(byte)0x23, (byte)0x55, 0x07D4], 0x007D);
	var0002 = UI_delayed_execute_usecode_array(var0000, [(byte)0x23, (byte)0x55, 0x07D4], 0x008C);
	var0002 = UI_delayed_execute_usecode_array(var0000, [(byte)0x23, (byte)0x55, 0x07D4], 0x0096);
	var0002 = UI_delayed_execute_usecode_array(var0000, [(byte)0x23, (byte)0x55, 0x07D4], 0x009E);
	var0002 = UI_delayed_execute_usecode_array(var0000, [(byte)0x23, (byte)0x55, 0x07D4], 0x00A4);
	var0002 = UI_delayed_execute_usecode_array(var0000, [(byte)0x23, (byte)0x55, 0x07D4], 0x00AA);
	var0002 = UI_delayed_execute_usecode_array(var0000, [(byte)0x23, (byte)0x55, 0x07D4], 0x00B0);
	var0002 = UI_delayed_execute_usecode_array(var0000, [(byte)0x23, (byte)0x55, 0x07D4], 0x00B4);
	var0002 = UI_delayed_execute_usecode_array(var0000, [(byte)0x23, (byte)0x55, 0x07D4], 0x00BA);
	var0002 = UI_delayed_execute_usecode_array(var0000, [(byte)0x23, (byte)0x55, 0x07D4], 0x00C0);
	gflags[0x000A] = true;
	gflags[0x0007] = false;
	var0002 = UI_delayed_execute_usecode_array(var0000, [(byte)0x23, (byte)0x55, 0x07D5], 0x00D2);
	abort;
labelFunc07D4_01F8:
	if (!((event == 0x0002) && (gflags[0x000A] == true))) goto labelFunc07D4_027C;
	var0003 = false;
	var0001 = Func09A0(0x0000, 0x0002);
	var0004 = UI_get_item_quality(var0001);
	if (!(var0004 >= 0x0004)) goto labelFunc07D4_022E;
	var0003 = true;
labelFunc07D4_022E:
	var0002 = UI_set_item_quality(var0001, (var0004 + 0x0001));
	var0004 = UI_get_item_quality(item);
	if (!(var0004 == 0x0001)) goto labelFunc07D4_0268;
	Func08B9(0x0001, var0003);
	var0002 = UI_set_item_quality(item, 0x0000);
	goto labelFunc07D4_027C;
labelFunc07D4_0268:
	Func08B9(0x0000, var0003);
	var0002 = UI_set_item_quality(item, 0x0001);
labelFunc07D4_027C:
	return;
}


