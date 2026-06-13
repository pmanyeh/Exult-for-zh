#game "serpentisle"
// externs
extern void Func0971 0x971 (var var0000);
extern var Func0906 0x906 (var var0000);
extern void Func0907 0x907 (var var0000, var var0001);
extern void Func0949 0x949 (var var0000);
extern void Func094A 0x94A (var var0000);

void Func0273 shape#(0x273) ()
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

	if (!(event == 0x0001)) goto labelFunc0273_0165;
	var0000 = UI_click_on_item();
	UI_play_sound_effect2(0x0044, item);
	var0001 = UI_get_item_shape(var0000);
	var0002 = UI_get_item_quality(var0000);
	if (!(UI_die_roll(0x0001, 0x001E) < UI_get_npc_prop(0xFE9C, 0x0001))) goto labelFunc0273_004A;
	var0003 = true;
	goto labelFunc0273_004E;
labelFunc0273_004A:
	var0003 = false;
labelFunc0273_004E:
	if (!(var0001 == 0x020A)) goto labelFunc0273_00E8;
	if (!((var0002 == 0x0000) && var0003)) goto labelFunc0273_007B;
	UI_set_item_shape(var0000, 0x0320);
	UI_item_say(var0000, "Unlocked");
	return;
labelFunc0273_007B:
	if (!((var0002 == 0x00FF) && var0003)) goto labelFunc0273_00D9;
	var0004 = UI_create_new_object(0x02C0);
	if (!var0004) goto labelFunc0273_00D5;
	UI_close_gumps();
	var0005 = UI_update_last_created(UI_get_object_position(var0000));
	var0005 = UI_attack_object(var0004, var0004, 0x02C0);
	if (!var0003) goto labelFunc0273_00D5;
	UI_item_say(var0000, "Unlocked");
	UI_set_item_shape(var0000, 0x0320);
labelFunc0273_00D5:
	return;
	goto labelFunc0273_00E7;
labelFunc0273_00D9:
	UI_item_say(var0000, "Pick broke");
	Func0971(item);
labelFunc0273_00E7:
	return;
labelFunc0273_00E8:
	var0006 = [0x0178, 0x010E, 0x01B0, 0x01B1];
	enum();
labelFunc0273_00FB:
	for (var0009 in var0006 with var0007 to var0008) attend labelFunc0273_015F;
	if (!(var0001 == var0009)) goto labelFunc0273_015C;
	if (!(var0002 == 0x0000)) goto labelFunc0273_0155;
	if (!(Func0906(var0000) == 0x0002)) goto labelFunc0273_0152;
	if (!var0003) goto labelFunc0273_0143;
	Func0907(var0000, 0x0000);
	UI_item_say(var0000, "Unlocked");
	goto labelFunc0273_0151;
labelFunc0273_0143:
	UI_item_say(var0000, "Pick broke");
	Func0971(item);
labelFunc0273_0151:
	return;
labelFunc0273_0152:
	goto labelFunc0273_015C;
labelFunc0273_0155:
	Func0949("@'Tis strange that did not work.@");
	return;
labelFunc0273_015C:
	goto labelFunc0273_00FB;
labelFunc0273_015F:
	Func094A("@Mayhaps thou shouldst try those on a locked chest or door.@");
labelFunc0273_0165:
	return;
}


