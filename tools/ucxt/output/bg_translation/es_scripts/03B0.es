#game "blackgate"
// externs
extern var Func0937 0x937 (var var0000);

void Func03B0 shape#(0x3B0) ()
{
	var var0000;

	if (!(event == 0x0001)) goto labelFunc03B0_003E;
	if (!UI_get_item_frame(item)) goto labelFunc03B0_003E;
	if (!Func0937(0xFE9C)) goto labelFunc03B0_003E;
	UI_item_say(0xFE9C, "ptui!");
	if (!(!UI_in_gump_mode())) goto labelFunc03B0_003E;
	var0000 = UI_delayed_execute_usecode_array(item, [(byte)0x58, 0x0018], 0x0003);
labelFunc03B0_003E:
	return;
}


