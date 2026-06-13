#game "serpentisle"
void Func0762 object#(0x762) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	var0000 = UI_get_item_quality(item);
	var0001 = UI_get_object_position(item);
	var0002 = 0x0300;
	if (!(var0000 == 0x0002)) goto labelFunc0762_002C;
	var0002 = 0x0231;
	var0003 = 0x0028;
labelFunc0762_002C:
	if (!(var0000 == 0x0003)) goto labelFunc0762_0042;
	var0002 = 0x037F;
	var0003 = 0x0029;
labelFunc0762_0042:
	if (!(var0000 == 0x0004)) goto labelFunc0762_0058;
	var0002 = 0x0384;
	var0003 = 0x0068;
labelFunc0762_0058:
	if (!(var0000 == 0x0005)) goto labelFunc0762_006E;
	var0002 = 0x0386;
	var0003 = 0x0045;
labelFunc0762_006E:
	var0004 = UI_create_new_object(var0002);
	if (!var0004) goto labelFunc0762_0099;
	var0005 = UI_update_last_created(var0001);
	UI_play_sound_effect(var0003);
	UI_clear_item_flag(var0004, 0x0012);
labelFunc0762_0099:
	return;
}


