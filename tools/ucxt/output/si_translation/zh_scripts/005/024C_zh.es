#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func024C shape#(0x24C) ()
{
	var var0000;

	if (!(UI_get_npc_number(item) == 0xFEDA)) goto labelFunc024C_003A;
	UI_set_item_flag(0xFE9C, 0x0010);
	Func097F(0xFEDA, "@Ahhh, a victim...@", 0x0000);
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x27, 0x000A, (byte)0x55, 0x0526]);
	abort;
labelFunc024C_003A:
	return;
}


