#game "serpentisle"
// externs
extern var Func0942 0x942 (var var0000);

void Func06BF object#(0x6BF) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0003)) goto labelFunc06BF_003C;
	var0000 = UI_is_pc_female();
	var0001 = Func0942(0xFFC3);
	if (!(var0000 && (gflags[0x003E] && (!var0001)))) goto labelFunc06BF_003C;
	var0002 = UI_summon(0x017D, false);
	UI_set_schedule_type(var0002, 0x0009);
labelFunc06BF_003C:
	return;
}


