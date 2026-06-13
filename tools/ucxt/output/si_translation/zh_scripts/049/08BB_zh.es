#game "serpentisle"
void Func08BB 0x8BB ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0003)) goto labelFunc08BB_0079;
	if (!(UI_get_item_quality(item) == 0x0001)) goto labelFunc08BB_0067;
	var0000 = UI_get_object_position(item);
	var0001 = UI_find_nearest(item, 0x0210, 0x0000);
	if (!(!var0001)) goto labelFunc08BB_003E;
	var0001 = UI_create_new_object2(0x0210, var0000);
labelFunc08BB_003E:
	if (!var0001) goto labelFunc08BB_0067;
	UI_set_schedule_type(var0001, 0x000F);
	var0002 = UI_execute_usecode_array(var0001, [(byte)0x23, (byte)0x59, 0x0004, (byte)0x55, 0x07E7]);
labelFunc08BB_0067:
	if (!(UI_get_item_quality(item) == 0x0002)) goto labelFunc08BB_0079;
	var0001 = 0x0000;
labelFunc08BB_0079:
	if (!(event == 0x0002)) goto labelFunc08BB_0153;
	var0001 = false;
	if (!(UI_get_item_shape(item) == 0x0210)) goto labelFunc08BB_0095;
	var0001 = item;
labelFunc08BB_0095:
	if (!var0001) goto labelFunc08BB_0153;
	if (!(UI_get_distance(var0001, 0xFE9C) <= 0x0008)) goto labelFunc08BB_013C;
	var0003 = UI_die_roll(0x0001, 0x0005);
	if (!(var0003 == 0x0001)) goto labelFunc08BB_00C9;
	var0004 = "@Avatar, please assist me.@";
labelFunc08BB_00C9:
	if (!(var0003 == 0x0002)) goto labelFunc08BB_00D9;
	var0004 = "@Will no one help me?@";
labelFunc08BB_00D9:
	if (!(var0003 == 0x0003)) goto labelFunc08BB_00E9;
	var0004 = "@Please... help me.@";
labelFunc08BB_00E9:
	if (!(var0003 == 0x0004)) goto labelFunc08BB_00F9;
	var0004 = "@I beg of thee, aid me.@";
labelFunc08BB_00F9:
	if (!(var0003 == 0x0005)) goto labelFunc08BB_0109;
	var0004 = "@Will I never be free?@";
labelFunc08BB_0109:
	var0003 = UI_die_roll(0x0000, 0x000F);
	var0002 = UI_delayed_execute_usecode_array(var0001, [(byte)0x52, var0004, (byte)0x27, 0x000F, (byte)0x55, 0x07E7], (0x0014 + var0003));
	goto labelFunc08BB_0153;
labelFunc08BB_013C:
	var0002 = UI_execute_usecode_array(var0001, [(byte)0x27, 0x0003, (byte)0x55, 0x07E7]);
labelFunc08BB_0153:
	return;
}


