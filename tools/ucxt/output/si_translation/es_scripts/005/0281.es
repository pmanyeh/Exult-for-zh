#game "serpentisle"
// externs
extern void Func0971 0x971 (var var0000);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func08D9 0x8D9 (var var0000);
extern void Func020A shape#(0x20A) ();

void Func0281 shape#(0x281) ()
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

	if (!(event == 0x0002)) goto labelFunc0281_000F;
	var0000 = item;
	goto labelFunc0281_001E;
labelFunc0281_000F:
	if (!(event == 0x0001)) goto labelFunc0281_0244;
	var0000 = UI_click_on_item();
labelFunc0281_001E:
	UI_play_sound_effect2(0x0044, item);
	var0001 = UI_get_item_shape(var0000);
	var0002 = UI_get_item_quality(item);
	var0003 = UI_get_item_quality(var0000);
	if (!((var0001 == 0x01E5) && (UI_get_item_shape(item) == 0x0281))) goto labelFunc0281_0095;
	if (!(((UI_get_item_frame(item) == 0x0015) || (UI_get_item_frame(item) == 0x0016)) && (UI_get_item_quality(item) == 0x0000))) goto labelFunc0281_0089;
	var0004 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x068B]);
	abort;
labelFunc0281_0089:
	UI_add_to_keyring(var0002);
	Func0971(item);
	abort;
labelFunc0281_0095:
	if (!(UI_get_item_quality(item) == 0x00BA)) goto labelFunc0281_0112;
	if (!((!UI_get_item_flag(0xFFE1, 0x0004)) && ((UI_get_item_quality(var0000) == 0x00BA) && ((var0001 == 0x0178) && (!gflags[0x0148]))))) goto labelFunc0281_0112;
	UI_set_schedule_type(0xFFE1, 0x0003);
	UI_set_item_flag(0xFFE1, 0x001D);
	Func097F(0xFFE1, "@Aha!@", 0x0000);
	var0005 = UI_find_nearby(item, 0x016B, 0x001E, 0x0000);
	enum();
labelFunc0281_00FA:
	for (var0008 in var0005 with var0006 to var0007) attend labelFunc0281_0112;
	UI_set_schedule_type(var0008, 0x0009);
	goto labelFunc0281_00FA;
labelFunc0281_0112:
	if (!(UI_get_item_quality(item) == 0x0075)) goto labelFunc0281_0162;
	if (!(UI_get_item_quality(var0000) == 0x0075)) goto labelFunc0281_0130;
	gflags[0x01E8] = true;
labelFunc0281_0130:
	if (!((!gflags[0x01E6]) && ((UI_get_item_quality(var0000) == 0x0075) && (!UI_get_item_flag(0xFFD4, 0x0006))))) goto labelFunc0281_0162;
	UI_add_to_party(0xFFD4);
	Func097F(0xFFD4, "@Wait for me!@", 0x0002);
labelFunc0281_0162:
	if (!(UI_get_item_shape(var0000[0x0001]) in [0x0178, 0x010E, 0x01B0, 0x01B1])) goto labelFunc0281_018F;
	if (!(var0002 == var0003)) goto labelFunc0281_018F;
	Func08D9(var0000);
labelFunc0281_018F:
	if (!(var0001 == 0x020A)) goto labelFunc0281_01C7;
	if (!(var0002 == var0003)) goto labelFunc0281_01C7;
	UI_item_say(var0000, "Unlocked");
	UI_set_item_shape(var0000, 0x0320);
	if (!(var0003 == 0x00FF)) goto labelFunc0281_01C7;
	var0000->Func020A();
labelFunc0281_01C7:
	if (!(var0001 == 0x0320)) goto labelFunc0281_0244;
	if (!(var0002 == var0003)) goto labelFunc0281_0244;
	var0009 = UI_get_cont_items(var0000, 0x0281, var0002, 0xFE99);
	var000A = false;
labelFunc0281_01F2:
	if (!var0009) goto labelFunc0281_0216;
	if (!(var0009 == var0000)) goto labelFunc0281_0209;
	var000A = true;
	goto labelFunc0281_0216;
labelFunc0281_0209:
	var0009 = UI_get_container(var0009);
	goto labelFunc0281_01F2;
labelFunc0281_0216:
	if (!var000A) goto labelFunc0281_0229;
	UI_item_say(0xFE9C, "Key inside");
	goto labelFunc0281_0244;
labelFunc0281_0229:
	UI_close_gump(var0000);
	UI_set_item_shape(var0000, 0x020A);
	UI_item_say(var0000, "Locked");
labelFunc0281_0244:
	return;
}


