#game "blackgate"
// externs
extern void Func0904 0x904 (var var0000, var var0001);
extern void Func0467 object#(0x467) ();

void Func06A5 object#(0x6A5) ()
{
	if (!(event == 0x0003)) goto labelFunc06A5_0032;
	if (!gflags[0x0006]) goto labelFunc06A5_0028;
	UI_set_schedule_type(UI_get_npc_object(0xFF99), 0x0000);
	Func0904(0xFF99, "@友誼會的渣滓！@");
	goto labelFunc06A5_0032;
labelFunc06A5_0028:
	UI_get_npc_object(0xFF99)->Func0467();
labelFunc06A5_0032:
	return;
}


