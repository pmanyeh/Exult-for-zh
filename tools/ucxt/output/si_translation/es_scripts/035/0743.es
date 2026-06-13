#game "serpentisle"
// externs
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func095D 0x95D (var var0000);

void Func0743 object#(0x743) ()
{
	var var0000;

	if (!(event == 0x0003)) goto labelFunc0743_0032;
	var0000 = Func097D(0xFE9B, 0x0001, 0x017F, 0xFE99, 0x0001);
	if (!var0000) goto labelFunc0743_0032;
	gflags[0x002C] = true;
	Func095D(0x0258);
	UI_remove_item(item);
labelFunc0743_0032:
	return;
}


