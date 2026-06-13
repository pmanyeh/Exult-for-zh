#game "serpentisle"
// externs
extern var Func0994 0x994 ();

void Func08EE 0x8EE (var var0000)
{
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	var0001 = Func0994();
	if (!(var0001 == 0x000E)) goto labelFunc08EE_0026;
	var0002 = 0x0190;
	var0003 = UI_die_roll(0x0012, 0x0013);
	goto labelFunc08EE_0092;
labelFunc08EE_0026:
	if (!(var0001 == 0x000D)) goto labelFunc08EE_005F;
	if (!(UI_die_roll(0x0001, 0x0004) == 0x0001)) goto labelFunc08EE_0050;
	var0002 = 0x019E;
	var0003 = 0x0004;
	goto labelFunc08EE_005C;
labelFunc08EE_0050:
	var0002 = 0x0192;
	var0003 = 0x000B;
labelFunc08EE_005C:
	goto labelFunc08EE_0092;
labelFunc08EE_005F:
	if (!(var0001 == 0x0003)) goto labelFunc08EE_0078;
	var0002 = 0x019E;
	var0003 = 0x0011;
	goto labelFunc08EE_0092;
labelFunc08EE_0078:
	if (!(var0001 == 0x0009)) goto labelFunc08EE_0091;
	var0002 = 0x0190;
	var0003 = 0x0006;
	goto labelFunc08EE_0092;
labelFunc08EE_0091:
	return;
labelFunc08EE_0092:
	var0004 = UI_create_new_object(var0002);
	if (!var0004) goto labelFunc08EE_00B6;
	UI_set_item_frame(var0004, var0003);
	var0005 = UI_update_last_created(var0000);
labelFunc08EE_00B6:
	return;
}


