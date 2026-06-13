#game "serpentisle"
void Func08CF 0x8CF (var var0000)
{
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	var0001 = UI_get_party_list();
	enum();
labelFunc08CF_0008:
	for (var0004 in var0001 with var0002 to var0003) attend labelFunc08CF_0054;
	var0005 = UI_get_object_position(var0004);
	if (!(!var0000)) goto labelFunc08CF_0037;
	var0005[0x0002] = (var0005[0x0002] - 0x0010);
	goto labelFunc08CF_0047;
labelFunc08CF_0037:
	var0005[0x0002] = (var0005[0x0002] + 0x0010);
labelFunc08CF_0047:
	UI_move_object(var0004, var0005);
	goto labelFunc08CF_0008;
labelFunc08CF_0054:
	abort;
	return;
}


