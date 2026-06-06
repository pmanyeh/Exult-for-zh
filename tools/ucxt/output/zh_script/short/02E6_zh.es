#game "blackgate"
// externs
extern var Func0937 0x937 (var var0000);

void Func02E6 shape#(0x2E6) ()
{
	if (!(event == 0x0001)) goto labelFunc02E6_0023;
	if (!(UI_npc_nearby(0xFFFE) && Func0937(0xFFFE))) goto labelFunc02E6_0023;
	UI_item_say(0xFFFE, "@哇！真俐落！！@");
labelFunc02E6_0023:
	return;
}


