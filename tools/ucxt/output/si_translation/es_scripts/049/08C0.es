#game "serpentisle"
// externs
extern var Func09A0 0x9A0 (var var0000, var var0001);

void Func08C0 0x8C0 (var var0000)
{
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;

	var0001 = UI_find_nearby(0xFE9C, 0x0267, 0x0028, 0x0000);
	var0001 = (var0001 & UI_find_nearby(0xFE9C, 0x017C, 0x0028, 0x0000));
	var0001 = (var0001 & UI_find_nearby(0xFE9C, 0x01D9, 0x0028, 0x0000));
	if (!var0000) goto labelFunc08C0_0095;
	var0002 = Func09A0(0x0007, 0x0001);
	if (!var0002) goto labelFunc08C0_0063;
	UI_play_music(0x0041, var0002);
labelFunc08C0_0063:
	enum();
labelFunc08C0_0064:
	for (var0005 in var0001 with var0003 to var0004) attend labelFunc08C0_0092;
	var0006 = UI_execute_usecode_array(var0005, [(byte)0x2C, (byte)0x23, (byte)0x4D, (byte)0x27, 0x0001, (byte)0x0B, 0xFFFD, 0x0008]);
	goto labelFunc08C0_0064;
labelFunc08C0_0092:
	goto labelFunc08C0_00C4;
labelFunc08C0_0095:
	enum();
labelFunc08C0_0096:
	for (var0005 in var0001 with var0007 to var0008) attend labelFunc08C0_00C4;
	var0006 = UI_execute_usecode_array(var0005, [(byte)0x2C, (byte)0x23, (byte)0x4F, (byte)0x27, 0x0001, (byte)0x0B, 0xFFFD, 0x0008]);
	goto labelFunc08C0_0096;
labelFunc08C0_00C4:
	return;
}


