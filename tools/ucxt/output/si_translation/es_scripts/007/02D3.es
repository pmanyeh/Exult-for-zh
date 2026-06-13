#game "serpentisle"
// externs
extern var Func0953 0x953 ();

void Func02D3 shape#(0x2D3) ()
{
	var var0000;

	if (!(event == 0x0001)) goto labelFunc02D3_0033;
	var0000 = Func0953();
	if (!UI_npc_nearby(0xFFFD)) goto labelFunc02D3_0033;
	UI_show_npc_face(0xFFFD, 0x0000);
	message("\"");
	message(var0000);
	message(" dost thou notice the unique Iolo trademark on these bolts?  They are designed for maximum performance with genuine IOLO crossbows, available at a location near Yew.\"");
	say();
	UI_remove_npc_face(0xFFFD);
labelFunc02D3_0033:
	return;
}


