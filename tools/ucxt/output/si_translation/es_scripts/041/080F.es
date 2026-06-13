#game "serpentisle"
// externs
extern var Func0957 0x957 (var var0000);
extern var Func0955 0x955 ();
extern var Func0943 0x943 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006, var var0007);

void Func080F 0x80F ()
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
	var0001 = ["nothing", "bread", "water"];
	var0002 = [0x0000, 0x0179, 0x0268];
	var0003 = [0xFE99, 0x0000, 0x0006];
	var0004 = [0x0000, 0x0014, 0x000A];
	var0005 = 0x03B8;
	var0006 = [0x0000, 0x0001, 0x0001];
	var0007 = [0x0000, 0x0001, 0x0001];
	message("\"What dost thou wish, felon?\"");
	say();
labelFunc080F_0068:
	if (!var0000) goto labelFunc080F_0196;
	var0008 = Func0957(var0001);
	if (!(var0008 == 0x0001)) goto labelFunc080F_008C;
	message("\"Perhaps another time, then.\"");
	say();
	var0000 = false;
	goto labelFunc080F_0193;
labelFunc080F_008C:
	var0009 = var0004[var0008];
	var000A = 0x0000;
	if (!(var0008 == 0x0002)) goto labelFunc080F_00AF;
	message("\"The price is ");
	message(var0009);
	message(" guilders... I have a very limited supply. Dost thou accept?\"");
	say();
labelFunc080F_00AF:
	if (!(var0008 == 0x0003)) goto labelFunc080F_00C3;
	message("\"For a jug of water, my price is ");
	message(var0009);
	message(" guilders. Dost thou find this acceptable?\"");
	say();
labelFunc080F_00C3:
	if (!(var0009 == var0004[var0008])) goto labelFunc080F_00EA;
	if (!(Func0955() == true)) goto labelFunc080F_00E1;
	var000B = var0009;
	goto labelFunc080F_00E7;
labelFunc080F_00E1:
	var000B = 0x0000;
labelFunc080F_00E7:
	goto labelFunc080F_00EE;
labelFunc080F_00EA:
	message("\"This is not Moonshade, felon. My prices are fixed... Take them or leave.\"");
	say();
labelFunc080F_00EE:
	if (!(var000B > 0x0000)) goto labelFunc080F_0156;
	if (!(var0007[var0008] == 0x0001)) goto labelFunc080F_0131;
	message("\"How many wouldst thou like?\"");
	say();
	var000A = Func0943(var0002[var0008], var0003[var0008], var0006[var0008], var0005, var000B, 0x0014, 0x0001, false);
	goto labelFunc080F_0156;
labelFunc080F_0131:
	var000A = Func0943(var0002[var0008], var0003[var0008], var0006[var0008], var0005, var000B, 0x0000, 0x0001, false);
labelFunc080F_0156:
	if (!(var000A == 0x0001)) goto labelFunc080F_0167;
	message("\"May it nourish thee, felon.\"");
	say();
	goto labelFunc080F_0189;
labelFunc080F_0167:
	if (!(var000A == 0x0002)) goto labelFunc080F_0178;
	message("\"Thou canst not handle so much, felon.\"");
	say();
	goto labelFunc080F_0189;
labelFunc080F_0178:
	if (!(var000A == 0x0003)) goto labelFunc080F_0189;
	message("\"As thou dost not have the guilders to pay me, I am afraid thou shalt go hungry, felon.\"");
	say();
	goto labelFunc080F_0189;
labelFunc080F_0189:
	message("\"Wouldst thou care for more?\"");
	say();
	var0000 = Func0955();
labelFunc080F_0193:
	goto labelFunc080F_0068;
labelFunc080F_0196:
	return;
}


