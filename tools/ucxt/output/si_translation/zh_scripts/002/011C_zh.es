#game "serpentisle"
// externs
extern var Func0953 0x953 ();
extern void Func094A 0x94A (var var0000);

void Func011C shape#(0x11C) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0001)) goto labelFunc011C_0082;
	var0000 = UI_game_hour();
	if (!((var0000 >= 0x0006) && (var0000 <= 0x000B))) goto labelFunc011C_0033;
	UI_item_say(item, ((" " + UI_game_hour()) + " o'clock"));
	return;
labelFunc011C_0033:
	if (!(var0000 == 0x000C)) goto labelFunc011C_0046;
	UI_item_say(item, "Noon");
	return;
labelFunc011C_0046:
	if (!((var0000 >= 0x000D) && (var0000 <= 0x0014))) goto labelFunc011C_0076;
	var0000 = (var0000 - 0x000C);
	UI_item_say(item, ((" " + var0000) + " o'clock"));
	return;
	goto labelFunc011C_0082;
labelFunc011C_0076:
	var0001 = Func0953();
	Func094A("@^<Avatar>, I believe the important part of the word sundial is `sun'.@");
labelFunc011C_0082:
	return;
}


