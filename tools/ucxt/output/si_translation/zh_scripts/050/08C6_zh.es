#game "serpentisle"
void Func08C6 0x8C6 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	var0000 = UI_get_party_list();
	enum();
labelFunc08C6_0008:
	for (var0003 in var0000 with var0001 to var0002) attend labelFunc08C6_0062;
	var0004 = UI_die_roll(0x0001, 0x0005);
	var0005 = 0x0000;
	var0006 = UI_die_roll(0x0000, 0x0001);
	if (!var0006) goto labelFunc08C6_0042;
	var0005 = 0x0000;
	goto labelFunc08C6_0048;
labelFunc08C6_0042:
	var0005 = 0x0002;
labelFunc08C6_0048:
	var0007 = UI_execute_usecode_array(var0003, [(byte)0x27, var0004, (byte)0x59, var0005]);
	goto labelFunc08C6_0008;
labelFunc08C6_0062:
	return;
}


