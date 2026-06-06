#game "blackgate"
void Func068D object#(0x68D) ()
{
	var var0000;
	var var0001;
	var var0002;

	var0000 = UI_get_item_frame(item);
	var0001 = UI_get_cont_items(UI_get_npc_object(0xFE9C), 0x029C, 0xFE99, 0xFE99);
	if (!((var0000 == 0x0003) || (var0000 == 0x0007))) goto labelFunc068D_0063;
	var0002 = UI_execute_usecode_array(UI_get_npc_object(0xFE9C), [(byte)0x27, 0x000A, (byte)0x61]);
	var0002 = UI_execute_usecode_array(var0001, [(byte)0x27, 0x0002, (byte)0x55, 0x068E]);
	goto labelFunc068D_0071;
labelFunc068D_0063:
	UI_item_say(UI_get_npc_object(0xFE9C), "@水不夠了。@");
labelFunc068D_0071:
	return;
}


