#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern void Func08FF 0x8FF (var var0000);

void Func011C shape#(0x11C) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0001)) goto labelFunc011C_0082;
	var0000 = UI_game_hour();
	if (!((var0000 >= 0x0006) && (var0000 <= 0x000B))) goto labelFunc011C_0033;
	UI_item_say(item, ((" " + UI_game_hour()) + " 點鐘"));
	return;
labelFunc011C_0033:
	if (!(var0000 == 0x000C)) goto labelFunc011C_0046;
	UI_item_say(item, "正午");
	return;
labelFunc011C_0046:
	if (!((var0000 >= 0x000D) && (var0000 <= 0x0014))) goto labelFunc011C_0076;
	var0000 = (var0000 - 0x000C);
	UI_item_say(item, ((" " + var0000) + " 點鐘"));
	return;
	goto labelFunc011C_0082;
labelFunc011C_0076:
	var0001 = Func0908();
	Func08FF("「聖者, 我確信...『日晷』需要...『日頭』才能使用！」");
labelFunc011C_0082:
	return;
}


