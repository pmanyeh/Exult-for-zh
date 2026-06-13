#game "serpentisle"
// externs
extern void Func0815 0x815 (var var0000);

void Func072A object#(0x72A) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0002)) goto labelFunc072A_0031;
	var0000 = UI_find_nearby(0xFF4D, 0x0314, 0x0004, 0x0000);
	if (!var0000) goto labelFunc072A_0031;
	var0001 = UI_get_item_quality(var0000);
	Func0815(var0001);
labelFunc072A_0031:
	return;
}


