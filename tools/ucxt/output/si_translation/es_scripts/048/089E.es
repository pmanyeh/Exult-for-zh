#game "serpentisle"
// externs
extern void Func094A 0x94A (var var0000);

void Func089E 0x89E ()
{
	var var0000;
	var var0001;

	var0000 = UI_get_barge(0xFE9C);
	if (!UI_on_barge()) goto labelFunc089E_0044;
	var0001 = UI_get_object_position(var0000);
	var0001 = var0001[0x0003];
	var0001 = UI_execute_usecode_array(var0000, [(byte)0x39, (byte)0x21, (byte)0x0B, 0xFFFE, (0x0004 - var0001)]);
	goto labelFunc089E_004A;
labelFunc089E_0044:
	Func094A("@I think that the floor is trying to rise. I suggest that everyone board.@");
labelFunc089E_004A:
	return;
}


