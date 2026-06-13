#game "serpentisle"
// externs
extern var Func0983 0x983 (var var0000);

void Func097F 0x97F (var var0000, var var0001, var var0002)
{
	var var0003;

	if (!(UI_get_array_size(var0001) > 0x0001)) goto labelFunc097F_0017;
	var0001 = var0001[0x0001];
labelFunc097F_0017:
	if (!Func0983(var0000)) goto labelFunc097F_003B;
	var0003 = UI_delayed_execute_usecode_array(UI_get_npc_object(var0000), [(byte)0x23, (byte)0x52, var0001], var0002);
labelFunc097F_003B:
	return;
}


