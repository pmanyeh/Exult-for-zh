#game "serpentisle"
// externs
extern void Func08BA 0x8BA ();

void Func07E8 object#(0x7E8) ()
{
	var var0000;
	var var0001;

	var0000 = UI_get_container(item);
	if (!(!(var0000 == 0x0000))) goto labelFunc07E8_002A;
	var0001 = UI_get_npc_number(var0000);
	if (!(var0001 == 0xFF64)) goto labelFunc07E8_002A;
	Func08BA();
labelFunc07E8_002A:
	return;
}


