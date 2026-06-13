#game "serpentisle"
// externs
extern void Func092D 0x92D (var var0000, var var0001, var var0002);
extern var Func090C 0x90C (var var0000, var var0001);
extern void Func0950 0x950 (var var0000);

void Func02BD shape#(0x2BD) ()
{
	var var0000;
	var var0001;

	if (!((event == 0x0001) || (event == 0x0002))) goto labelFunc02BD_0016;
	Func092D(item, 0x0253, event);
labelFunc02BD_0016:
	if (!(event == 0x000A)) goto labelFunc02BD_0048;
	var0000 = Func090C(0xFE9C, item);
	var0001 = UI_execute_usecode_array(0xFE9C, [(byte)0x59, var0000, (byte)0x01, (byte)0x6A, (byte)0x61]);
	Func092D(item, 0x0253, event);
labelFunc02BD_0048:
	if (!(event == 0x0005)) goto labelFunc02BD_0054;
	Func0950(item);
labelFunc02BD_0054:
	return;
}


