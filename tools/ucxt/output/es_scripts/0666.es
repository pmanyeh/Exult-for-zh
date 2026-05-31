#game "blackgate"
// externs
extern var Func0906 0x906 ();

void Func0666 object#(0x666) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0001)) goto labelFunc0666_0148;
	UI_halt_scheduled(item);
	UI_item_say(item, "@Kal Wis Corp@");
	if (!Func0906()) goto labelFunc0666_0132;
	var0000 = UI_execute_usecode_array(item, [(byte)0x58, 0x0043, (byte)0x66, (byte)0x65, (byte)0x67]);
	var0001 = UI_get_object_position(item);
	var0002 = (var0001[0x0001] - 0x0002);
	var0003 = (var0001[0x0002] - 0x0002);
	UI_sprite_effect(0x000D, var0002, var0003, 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_sprite_effect(0x0007, var0002, var0003, 0x0000, 0x0000, 0x0000, 0xFFFF);
	gflags[0x01B2] = true;
	gflags[0x01B3] = true;
	gflags[0x01B4] = true;
	gflags[0x01B5] = true;
	gflags[0x01B6] = true;
	gflags[0x01B7] = true;
	gflags[0x01B8] = true;
	gflags[0x01B9] = true;
	gflags[0x01BA] = true;
	gflags[0x01BB] = true;
	gflags[0x01B7] = true;
	var0004 = UI_game_hour();
	var0005 = UI_game_minute();
	if (!(var0004 < 0x0006)) goto labelFunc0666_00F2;
	var0006 = ((0x0006 - var0004) * 0x003C);
	var0006 = (var0006 + (0x003C - var0005));
	var0006 = (var0006 * 0x0019);
	goto labelFunc0666_0118;
labelFunc0666_00F2:
	var0006 = ((0x0017 - var0004) * 0x003C);
	var0006 = (var0006 + (0x003C - var0005));
	var0006 = (var0006 * 0x0019);
labelFunc0666_0118:
	var0000 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x2C, (byte)0x55, 0x0666], var0006);
	goto labelFunc0666_0148;
labelFunc0666_0132:
	var0000 = UI_execute_usecode_array(item, [(byte)0x66, (byte)0x65, (byte)0x67, (byte)0x55, 0x0606]);
labelFunc0666_0148:
	if (!(event == 0x0002)) goto labelFunc0666_017C;
	gflags[0x01B2] = false;
	gflags[0x01B3] = false;
	gflags[0x01B4] = false;
	gflags[0x01B5] = false;
	gflags[0x01B6] = false;
	gflags[0x01B7] = false;
	gflags[0x01B8] = false;
	gflags[0x01B9] = false;
	gflags[0x01BA] = false;
	gflags[0x01BB] = false;
	gflags[0x01B7] = false;
labelFunc0666_017C:
	return;
}


