#game "serpentisle"
void Func0801 0x801 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	var0000 = false;
	var0001 = [0xFFC3, 0xFFCB, 0xFFCF, 0xFFCD, 0xFFCE];
	enum();
labelFunc0801_001A:
	for (var0004 in var0001 with var0002 to var0003) attend labelFunc0801_0036;
	if (!UI_npc_nearby(var0004)) goto labelFunc0801_0033;
	var0000 = true;
labelFunc0801_0033:
	goto labelFunc0801_001A;
labelFunc0801_0036:
	if (!(var0000 && (!(gflags[0x016F] && gflags[0x0172])))) goto labelFunc0801_006F;
	var0005 = ("@Lower thy voice, lest our enemies hear...@" & ("@We must whisper, or they shall hear us.@" & ("@Come closer, so none can hear what we say.@" & "@Our enemies are near -- keep thy voice down.@")));
	var0005 = var0005[UI_get_random(UI_get_array_size(var0005))];
	message(var0005);
	message("");
	say();
labelFunc0801_006F:
	return;
}


