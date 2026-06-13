#game "blackgate"
// externs
extern void Func0940 0x940 (var var0000);
extern void Func08FE 0x8FE (var var0000);

void Func063A object#(0x63A) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0001)) goto labelFunc063A_006B;
	var0000 = UI_get_array_size(UI_get_party_list());
	var0001 = UI_die_roll(0x0001, 0x0004);
	if (!(var0001 == 0x0001)) goto labelFunc063A_0030;
	Func0940(0x001B);
labelFunc063A_0030:
	if (!(var0000 == 0x0001)) goto labelFunc063A_003B;
	return;
labelFunc063A_003B:
	if (!(var0001 == 0x0002)) goto labelFunc063A_004B;
	Func08FE("@我們必須這麼做嗎？@");
labelFunc063A_004B:
	if (!(var0001 == 0x0003)) goto labelFunc063A_005B;
	Func08FE("@這合乎美德嗎？@");
labelFunc063A_005B:
	if (!(var0001 == 0x0004)) goto labelFunc063A_006B;
	Func08FE("@聖者？！@");
labelFunc063A_006B:
	return;
}


