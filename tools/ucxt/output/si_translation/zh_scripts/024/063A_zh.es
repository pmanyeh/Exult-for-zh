#game "serpentisle"
// externs
extern var Func0953 0x953 ();
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func063A object#(0x63A) ()
{
	var var0000;
	var var0001;
	var var0002;

	return;
	var0000 = UI_die_roll(0x0001, 0x0004);
	if (!(var0000 == 0x0001)) goto labelFunc063A_001E;
	var0001 = "@Art thou sure of thine actions, Avatar?@";
labelFunc063A_001E:
	if (!(var0000 == 0x0002)) goto labelFunc063A_002E;
	var0001 = "@Must we do this?@";
labelFunc063A_002E:
	if (!(var0000 == 0x0003)) goto labelFunc063A_003E;
	var0001 = "@Is that virtuous?@";
labelFunc063A_003E:
	if (!(var0000 > 0x0003)) goto labelFunc063A_0056;
	var0001 = (("@" + Func0953()) + "?!@");
labelFunc063A_0056:
	var0002 = Func0992(0x0001, var0001, 0x0000, false);
	return;
	return;
}


