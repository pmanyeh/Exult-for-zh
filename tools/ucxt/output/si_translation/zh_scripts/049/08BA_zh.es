#game "serpentisle"
// externs
extern var Func097E 0x97E (var var0000);
extern var Func09A1 0x9A1 (var var0000);

void Func08BA 0x8BA ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc08BA_003E;
	var0000 = UI_get_object_position(0xFF64);
	UI_obj_sprite_effect(0xFF64, 0x000C, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0001 = UI_execute_usecode_array(item, [(byte)0x55, 0x0334]);
labelFunc08BA_003E:
	if (!(event == 0x0002)) goto labelFunc08BA_00EA;
	var0002 = UI_die_roll(0x0001, 0x0005);
	var0003 = [0x0361, 0x0219, 0x012E, 0x0149, 0x036D];
	var0004 = ["Spiders", "Wolves", "Bears", "Boars", "Doom"];
	UI_item_say(0xFF64, (("Morghrim, send me " + var0004[var0002]) + "."));
	var0005 = UI_die_roll(0x0001, Func097E((var0002 - 0x0005)));
labelFunc08BA_00A6:
	if (!(var0005 > 0x0000)) goto labelFunc08BA_00EA;
	var0001 = Func09A1(var0003[var0002]);
	if (!(!(var0001 == 0x0000))) goto labelFunc08BA_00D4;
	var0005 = (var0005 - 0x0001);
	goto labelFunc08BA_00E7;
labelFunc08BA_00D4:
	if (!UI_die_roll(0x0001, 0x000A)) goto labelFunc08BA_00E7;
	var0005 = 0x0000;
labelFunc08BA_00E7:
	goto labelFunc08BA_00A6;
labelFunc08BA_00EA:
	return;
}


