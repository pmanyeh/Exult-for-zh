#game "blackgate"
// externs
extern var Func080D 0x80D ();
extern void Func0812 0x812 (var var0000);
extern var Func08B3 0x8B3 (var var0000);
extern void Func08FF 0x8FF (var var0000);

void Func0348 shape#(0x348) ()
{
	var var0000;
	var var0001;

	var0000 = UI_get_barge(item);
	if (!((event == 0x0001) && (!(var0000 == 0x0000)))) goto labelFunc0348_008B;
	if (!(!UI_get_item_flag(item, 0x000A))) goto labelFunc0348_0042;
	if (!Func080D()) goto labelFunc0348_0034;
	Func0812(var0000);
	goto labelFunc0348_003F;
labelFunc0348_0034:
	if (!Func08B3(item)) goto labelFunc0348_003F;
	UI_close_gumps();
labelFunc0348_003F:
	goto labelFunc0348_008B;
labelFunc0348_0042:
	if (!UI_get_item_flag(var0000, 0x0015)) goto labelFunc0348_0085;
	UI_clear_item_flag(item, 0x000A);
	UI_clear_item_flag(item, 0x001A);
	var0001 = UI_execute_usecode_array(var0000, [(byte)0x38, (byte)0x21, (byte)0x0B, 0xFFFE, 0x000A]);
	UI_play_music(0x00FF, 0x0000);
	goto labelFunc0348_008B;
labelFunc0348_0085:
	Func08FF("@I do not believe that we can land here safely.@");
labelFunc0348_008B:
	return;
}


