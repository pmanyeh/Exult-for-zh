#game "serpentisle"
// externs
extern void Func08BB 0x8BB ();
extern void Func08BC 0x8BC ();
extern void Func08BD 0x8BD ();
extern void Func08BF 0x8BF ();

void Func07E7 object#(0x7E7) ()
{
	var var0000;

	if (!(event == 0x0003)) goto labelFunc07E7_00AD;
	var0000 = UI_get_item_quality(item);
	if (!(!var0000)) goto labelFunc07E7_001E;
	UI_error_message("Invalid Egg!");
labelFunc07E7_001E:
	if (!(var0000 == 0x0001)) goto labelFunc07E7_002B;
	Func08BB();
labelFunc07E7_002B:
	if (!(var0000 == 0x0002)) goto labelFunc07E7_0038;
	Func08BB();
labelFunc07E7_0038:
	if (!(var0000 == 0x0003)) goto labelFunc07E7_0045;
	Func08BC();
labelFunc07E7_0045:
	if (!(var0000 == 0x0004)) goto labelFunc07E7_0052;
	Func08BD();
labelFunc07E7_0052:
	if (!(var0000 == 0x0005)) goto labelFunc07E7_005F;
	Func08BC();
labelFunc07E7_005F:
	if (!(var0000 == 0x0006)) goto labelFunc07E7_006C;
	Func08BC();
labelFunc07E7_006C:
	if (!(var0000 == 0x0007)) goto labelFunc07E7_0079;
	Func08BF();
labelFunc07E7_0079:
	if (!(var0000 == 0x0008)) goto labelFunc07E7_0086;
	Func08BF();
labelFunc07E7_0086:
	if (!(var0000 == 0x0009)) goto labelFunc07E7_0093;
	Func08BF();
labelFunc07E7_0093:
	if (!(var0000 == 0x000A)) goto labelFunc07E7_00A0;
	Func08BF();
labelFunc07E7_00A0:
	if (!(var0000 == 0x000B)) goto labelFunc07E7_00AD;
	Func08BF();
labelFunc07E7_00AD:
	if (!(event == 0x0002)) goto labelFunc07E7_00F1;
	if (!(UI_get_item_shape(item) == 0x0210)) goto labelFunc07E7_00C4;
	Func08BB();
labelFunc07E7_00C4:
	if (!(UI_get_item_shape(item) == 0x00F3)) goto labelFunc07E7_00D3;
	Func08BC();
labelFunc07E7_00D3:
	if (!(UI_get_item_shape(item) == 0x0106)) goto labelFunc07E7_00E2;
	Func08BF();
labelFunc07E7_00E2:
	if (!(UI_get_item_shape(item) == 0x017C)) goto labelFunc07E7_00F1;
	Func08BF();
labelFunc07E7_00F1:
	return;
}


