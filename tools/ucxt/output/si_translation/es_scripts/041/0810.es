#game "serpentisle"
// externs
extern var Func0957 0x957 (var var0000);
extern var Func0955 0x955 ();
extern var Func0943 0x943 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006, var var0007);

void Func0810 0x810 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;
	var var0009;
	var var000A;
	var var000B;

	var0000 = true;
	var0001 = ["nothing", "potion", "bandages"];
	var0002 = [0x0000, 0x0154, 0x033B];
	var0003 = [0xFE99, 0x0001, 0x0001];
	var0004 = [0x0000, 0x0050, 0x001E];
	var0005 = 0x03B8;
	var0006 = [0x0000, 0x0001, 0x0001];
	var0007 = [0x0000, 0x0001, 0x0001];
	message("\"What dost thou care to buy, felon?\"");
	say();
labelFunc0810_0068:
	if (!var0000) goto labelFunc0810_0196;
	var0008 = Func0957(var0001);
	if (!(var0008 == 0x0001)) goto labelFunc0810_008C;
	message("\"Perhaps another time, then.\"");
	say();
	var0000 = false;
	goto labelFunc0810_0193;
labelFunc0810_008C:
	var0009 = var0004[var0008];
	var000A = 0x0000;
	if (!(var0008 == 0x0002)) goto labelFunc0810_00AF;
	message("\"The price is ");
	message(var0009);
	message(" guilders... There is not much to spare for felons. Dost thou accept?\"");
	say();
labelFunc0810_00AF:
	if (!(var0008 == 0x0003)) goto labelFunc0810_00C3;
	message("\"For ");
	message(var0009);
	message(" guilders I can sell thee a bandage. What dost thou say?\"");
	say();
labelFunc0810_00C3:
	if (!(var0009 == var0004[var0008])) goto labelFunc0810_00EA;
	if (!(Func0955() == true)) goto labelFunc0810_00E1;
	var000B = var0009;
	goto labelFunc0810_00E7;
labelFunc0810_00E1:
	var000B = 0x0000;
labelFunc0810_00E7:
	goto labelFunc0810_00EE;
labelFunc0810_00EA:
	message("\"Pay or leave.\"");
	say();
labelFunc0810_00EE:
	if (!(var000B > 0x0000)) goto labelFunc0810_0156;
	if (!(var0007[var0008] == 0x0001)) goto labelFunc0810_0131;
	message("\"How many wouldst thou like?\"");
	say();
	var000A = Func0943(var0002[var0008], var0003[var0008], var0006[var0008], var0005, var000B, 0x0014, 0x0001, false);
	goto labelFunc0810_0156;
labelFunc0810_0131:
	var000A = Func0943(var0002[var0008], var0003[var0008], var0006[var0008], var0005, var000B, 0x0000, 0x0001, false);
labelFunc0810_0156:
	if (!(var000A == 0x0001)) goto labelFunc0810_0167;
	message("\"Enjoy thy purchase, felon.\"");
	say();
	goto labelFunc0810_0189;
labelFunc0810_0167:
	if (!(var000A == 0x0002)) goto labelFunc0810_0178;
	message("\"Thou canst not handle so much, felon.\"");
	say();
	goto labelFunc0810_0189;
labelFunc0810_0178:
	if (!(var000A == 0x0003)) goto labelFunc0810_0189;
	message("\"Since thou dost not have the guilders to pay me, I am afraid thou wilt have to suffer, felon.\"");
	say();
	goto labelFunc0810_0189;
labelFunc0810_0189:
	message("\"Dost thou wish another purchase?\"");
	say();
	var0000 = Func0955();
labelFunc0810_0193:
	goto labelFunc0810_0068;
labelFunc0810_0196:
	return;
}


