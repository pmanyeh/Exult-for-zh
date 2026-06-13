#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func06DB object#(0x6DB) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0003)) goto labelFunc06DB_01D0;
	var0000 = UI_get_item_quality(item);
	if (!(var0000 > 0x0064)) goto labelFunc06DB_0082;
	var0001 = UI_get_object_position(0xFE9C);
	var0002 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x06DB], 0x0010);
	var0002 = UI_set_item_quality(item, (var0000 - 0x0064));
	if (!(var0000 == 0x0065)) goto labelFunc06DB_005C;
	UI_item_say(0xFE9C, "@I have a bad feeling...@");
labelFunc06DB_005C:
	UI_play_sound_effect(0x0082);
	UI_obj_sprite_effect(0xFE9C, 0x0007, 0x0000, 0x0000, 0x0000, 0x0000, 0x0001, 0xFFFF);
	goto labelFunc06DB_01D0;
labelFunc06DB_0082:
	if (!(var0000 == 0x0001)) goto labelFunc06DB_009B;
	var0003 = [0x0027, 0x03E1, 0x0000];
labelFunc06DB_009B:
	if (!(var0000 == 0x0002)) goto labelFunc06DB_00B4;
	var0003 = [0x0037, 0x03B1, 0x0000];
labelFunc06DB_00B4:
	if (!(var0000 == 0x0003)) goto labelFunc06DB_00CD;
	var0003 = [0x0037, 0x031E, 0x0000];
labelFunc06DB_00CD:
	if (!(var0000 == 0x0004)) goto labelFunc06DB_00E6;
	var0003 = [0x0067, 0x02DE, 0x0000];
labelFunc06DB_00E6:
	if (!(var0000 == 0x0005)) goto labelFunc06DB_010B;
	var0003 = [0x00A8, 0x02DD, 0x0000];
	Func097F(0xFE9C, "By the Virtues!", 0x0005);
labelFunc06DB_010B:
	if (!(var0000 == 0x0006)) goto labelFunc06DB_0124;
	var0003 = [0x03A7, 0x00C6, 0x0000];
labelFunc06DB_0124:
	if (!(var0000 == 0x0007)) goto labelFunc06DB_0149;
	var0003 = [0x03C6, 0x0116, 0x0000];
	Func097F(0xFE9C, "I have a bad feeling...", 0x0005);
labelFunc06DB_0149:
	if (!(var0000 == 0x0008)) goto labelFunc06DB_0162;
	var0003 = [0x03A7, 0x00C6, 0x0000];
labelFunc06DB_0162:
	if (!(var0000 == 0x0009)) goto labelFunc06DB_017B;
	var0003 = [0x0346, 0x00F6, 0x0000];
labelFunc06DB_017B:
	if (!(var0000 == 0x000A)) goto labelFunc06DB_0194;
	var0003 = [0x035F, 0x0126, 0x0000];
labelFunc06DB_0194:
	var0002 = UI_set_item_quality(item, (var0000 + 0x0064));
	UI_move_object(0xFE9B, var0003);
	UI_play_sound_effect(0x0077);
	UI_obj_sprite_effect(0xFE9C, 0x002F, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
labelFunc06DB_01D0:
	return;
}


