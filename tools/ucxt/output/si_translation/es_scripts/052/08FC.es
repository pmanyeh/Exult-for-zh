#game "serpentisle"
// externs
extern var Func08FB 0x8FB ();
extern var Func0994 0x994 ();

var Func08FC 0x8FC ()
{
	var var0000;

	var0000 = Func08FB();
	if (!((UI_get_array_size(var0000) > 0x0000) && (Func0994() != 0x0020))) goto labelFunc08FC_001E;
	return true;
labelFunc08FC_001E:
	return false;
	return 0;
}


