#game "serpentisle"
void Func0744 object#(0x744) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0003)) goto labelFunc0744_002F;
	var0000 = UI_find_nearby(item, 0x00C6, 0x000F, 0x0080);
	enum();
labelFunc0744_001A:
	for (var0003 in var0000 with var0001 to var0002) attend labelFunc0744_002F;
	UI_remove_item(var0003);
	goto labelFunc0744_001A;
labelFunc0744_002F:
	return;
}


