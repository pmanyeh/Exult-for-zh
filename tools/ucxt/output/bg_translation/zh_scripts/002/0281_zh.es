#game "blackgate"
// externs
extern void Func0815 0x815 (var var0000);

void Func0281 shape#(0x281) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc0281_0113;
	var0000 = UI_click_on_item();
	UI_play_sound_effect2(0x001B, item);
	var0001 = UI_get_item_shape(var0000);
	var0002 = UI_get_item_quality(item);
	var0003 = UI_get_item_quality(var0000);
	if (!(UI_get_item_shape(var0000[0x0001]) in [0x0178, 0x010E, 0x01B0, 0x01B1])) goto labelFunc0281_0060;
	if (!(var0002 == var0003)) goto labelFunc0281_0060;
	Func0815(var0000);
labelFunc0281_0060:
	if (!(var0001 == 0x020A)) goto labelFunc0281_0096;
	if (!(var0002 == var0003)) goto labelFunc0281_0096;
	UI_item_say(var0000, "鎖打開了！");
	UI_set_item_shape(var0000, 0x0320);
	if (!(var0003 == 0x00FD)) goto labelFunc0281_0096;
	gflags[0x003E] = true;
labelFunc0281_0096:
	if (!(var0001 == 0x0320)) goto labelFunc0281_0113;
	if (!(var0002 == var0003)) goto labelFunc0281_0113;
	var0004 = UI_get_cont_items(var0000, 0x0281, var0002, 0xFE99);
	var0005 = false;
labelFunc0281_00C1:
	if (!var0004) goto labelFunc0281_00E5;
	if (!(var0004 == var0000)) goto labelFunc0281_00D8;
	var0005 = true;
	goto labelFunc0281_00E5;
labelFunc0281_00D8:
	var0004 = UI_get_container(var0004);
	goto labelFunc0281_00C1;
labelFunc0281_00E5:
	if (!var0005) goto labelFunc0281_00F8;
	UI_item_say(0xFE9C, "鑰匙在裡面");
	goto labelFunc0281_0113;
labelFunc0281_00F8:
	UI_close_gump(var0000);
	UI_set_item_shape(var0000, 0x020A);
	UI_item_say(var0000, "上鎖了！");
labelFunc0281_0113:
	return;
}


