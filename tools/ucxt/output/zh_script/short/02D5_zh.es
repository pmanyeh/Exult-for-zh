#game "blackgate"
// externs
extern var Func0937 0x937 (var var0000);
extern void Func0904 0x904 (var var0000, var var0001);

void Func02D5 shape#(0x2D5) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!((event == 0x0001) && (!UI_in_usecode(item)))) goto labelFunc02D5_0107;
	var0000 = UI_die_roll(0x0001, 0x0010);
	UI_halt_scheduled(item);
	var0001 = UI_execute_usecode_array(item, [(byte)0x58, 0x001D, (byte)0x4E, (byte)0x01, (byte)0x4E, (byte)0x01, (byte)0x4E, (byte)0x01, (byte)0x0B, 0xFFF8, var0000, (byte)0x4E, (byte)0x01, (byte)0x4E, (byte)0x58, 0x001D, (byte)0x0B, 0xFFFB, var0000, (byte)0x4E, (byte)0x27, 0x0001, (byte)0x4E, (byte)0x27, 0x0001, (byte)0x4E, (byte)0x27, 0x0001, (byte)0x4E, (byte)0x27, 0x0001, (byte)0x58, 0x001D, (byte)0x0B, 0xFFF2, 0x0003, (byte)0x4E, (byte)0x27, 0x0003, (byte)0x4E, (byte)0x58, 0x001D, (byte)0x55, 0x060A]);
	if (!((UI_game_hour() >= 0x000F) || (UI_game_hour() <= 0x0003))) goto labelFunc02D5_0107;
	if (!Func0937(0xFF18)) goto labelFunc02D5_00C0;
	Func0904(0xFF18, ["@請下注。@", "@轉起來了！@"]);
labelFunc02D5_00C0:
	UI_set_schedule_type(0xFF18, 0x0009);
	var0002 = UI_find_nearby(item, 0x0208, 0x0007, 0x0000);
	var0003 = UI_find_nearby(var0002, 0x0284, 0x0005, 0x0000);
	enum();
labelFunc02D5_00EF:
	for (var0006 in var0003 with var0004 to var0005) attend labelFunc02D5_0107;
	UI_clear_item_flag(var0006, 0x000B);
	goto labelFunc02D5_00EF;
labelFunc02D5_0107:
	return;
}


