#game "serpentisle"
void Func025F shape#(0x25F) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x000B)) goto labelFunc025F_0093;
	var0000 = UI_find_nearest(0xFE9C, 0x025F, 0x0003);
	var0001 = UI_get_item_frame(var0000);
	var0002 = 0x0000;
	if (!(var0001 == 0x0000)) goto labelFunc025F_0038;
	var0002 = 0x0003;
labelFunc025F_0038:
	if (!(var0001 == 0x0001)) goto labelFunc025F_0048;
	var0002 = 0x0005;
labelFunc025F_0048:
	if (!(var0001 == 0x0002)) goto labelFunc025F_0058;
	var0002 = 0x0007;
labelFunc025F_0058:
	if (!(var0001 == 0x0003)) goto labelFunc025F_0068;
	var0002 = 0x0001;
labelFunc025F_0068:
	var0003 = UI_execute_usecode_array(0xFE9C, [(byte)0x59, var0002, (byte)0x01, (byte)0x6C]);
	var0003 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x025F], 0x0002);
labelFunc025F_0093:
	if (!(event == 0x0002)) goto labelFunc025F_01D3;
	var0004 = UI_get_object_position(0xFE9C);
	var0000 = UI_find_nearest(0xFE9C, 0x025F, 0x0003);
	var0001 = UI_get_item_frame(var0000);
	if (!(var0001 == 0x0000)) goto labelFunc025F_00E9;
	var0004[0x0001] = (var0004[0x0001] - 0x0001);
	var0004[0x0002] = (var0004[0x0002] + 0x0001);
labelFunc025F_00E9:
	if (!(var0001 == 0x0001)) goto labelFunc025F_0113;
	var0004[0x0001] = (var0004[0x0001] - 0x0001);
	var0004[0x0002] = (var0004[0x0002] - 0x0001);
labelFunc025F_0113:
	if (!(var0001 == 0x0002)) goto labelFunc025F_013D;
	var0004[0x0001] = (var0004[0x0001] - 0x0000);
	var0004[0x0002] = (var0004[0x0002] - 0x0001);
labelFunc025F_013D:
	if (!(var0001 == 0x0003)) goto labelFunc025F_0167;
	var0004[0x0001] = (var0004[0x0001] - 0x0002);
	var0004[0x0002] = (var0004[0x0002] - 0x0000);
labelFunc025F_0167:
	var0003 = UI_set_last_created(item);
	if (!var0003) goto labelFunc025F_01D3;
	if (!(UI_get_item_frame(item) == 0x0000)) goto labelFunc025F_01B5;
	UI_set_item_frame(item, 0x0001);
	if (!(gflags[0x02CD] && (gflags[0x02CE] && (gflags[0x02CF] && gflags[0x02D0])))) goto labelFunc025F_01B2;
	var0003 = UI_set_item_quality(item, 0x000A);
	gflags[0x0223] = true;
	UI_clear_item_flag(item, 0x0012);
labelFunc025F_01B2:
	goto labelFunc025F_01C9;
labelFunc025F_01B5:
	if (!(UI_get_item_frame(item) < 0x0006)) goto labelFunc025F_01C9;
	UI_set_item_frame(item, 0x0000);
labelFunc025F_01C9:
	var0003 = UI_update_last_created(var0004);
labelFunc025F_01D3:
	return;
}


