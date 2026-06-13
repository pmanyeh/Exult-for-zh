#game "serpentisle"
void Func07B2 object#(0x7B2) ()
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

	if (!(event == 0x0003)) goto labelFunc07B2_015D;
	var0000 = UI_get_item_quality(item);
	var0001 = UI_get_object_position(item);
	var0002 = 0x0300;
	if (!((var0000 == 0x0000) || (var0000 > 0x0006))) goto labelFunc07B2_0037;
	UI_error_message("Quality 0 for egg 270");
labelFunc07B2_0037:
	if (!(var0000 == 0x0006)) goto labelFunc07B2_0054;
	var0000 = UI_die_roll(0x0001, 0x0005);
	var0003 = 0x0082;
labelFunc07B2_0054:
	if (!(var0000 == 0x0001)) goto labelFunc07B2_00B5;
	var0002 = 0x0300;
	var0004 = false;
	var0005 = UI_find_nearby(item, var0002, 0x0003, 0x0000);
	enum();
labelFunc07B2_007A:
	for (var0008 in var0005 with var0006 to var0007) attend labelFunc07B2_008C;
	var0004 = true;
	goto labelFunc07B2_007A;
labelFunc07B2_008C:
	if (!(!var0004)) goto labelFunc07B2_00B4;
	var0009 = UI_create_new_object(var0002);
	if (!var0009) goto labelFunc07B2_00B4;
	var0009 = UI_update_last_created(var0001);
	UI_play_sound_effect(0x0077);
labelFunc07B2_00B4:
	abort;
labelFunc07B2_00B5:
	if (!(var0000 == 0x0002)) goto labelFunc07B2_00CB;
	var0002 = 0x0231;
	var0003 = 0x0028;
labelFunc07B2_00CB:
	if (!(var0000 == 0x0003)) goto labelFunc07B2_00E1;
	var0002 = 0x037F;
	var0003 = 0x0029;
labelFunc07B2_00E1:
	if (!(var0000 == 0x0004)) goto labelFunc07B2_00F7;
	var0002 = 0x0384;
	var0003 = 0x0068;
labelFunc07B2_00F7:
	if (!(var0000 == 0x0005)) goto labelFunc07B2_010D;
	var0002 = 0x0386;
	var0003 = 0x0045;
labelFunc07B2_010D:
	var0004 = false;
	var0005 = UI_find_nearby(item, var0002, 0x0003, 0x0010);
	enum();
labelFunc07B2_0123:
	for (var0008 in var0005 with var000A to var000B) attend labelFunc07B2_0135;
	var0004 = true;
	goto labelFunc07B2_0123;
labelFunc07B2_0135:
	if (!(!var0004)) goto labelFunc07B2_015D;
	var0009 = UI_create_new_object(var0002);
	if (!var0009) goto labelFunc07B2_015D;
	var0009 = UI_update_last_created(var0001);
	UI_play_sound_effect(var0003);
labelFunc07B2_015D:
	return;
}


