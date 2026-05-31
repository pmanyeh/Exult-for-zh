#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090C 0x90C (var var0000);
extern var Func091B 0x91B (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func085D 0x85D ()
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
	var var000C;
	var var000D;

	var0000 = Func0909();
	UI_push_answers();
	var0001 = true;
	var0002 = ["nothing", "mutton rations", "trout", "Silverleaf", "cake", "ham"];
	var0003 = [0x0000, 0x0179, 0x0179, 0x0179, 0x0179, 0x0179];
	var0004 = [0xFE99, 0x000F, 0x000C, 0x001F, 0x0005, 0x000B];
	var0005 = [0x0000, 0x000C, 0x0002, 0x0019, 0x0002, 0x000A];
	var0006 = "";
	var0007 = [0x0000, 0x0001, 0x0000, 0x0000, 0x0000, 0x0000];
	var0008 = ["", " for ten portions", " for one portion", " for one portion", " per piece", " for a slice"];
	var0009 = [0x0000, 0x000A, 0x0001, 0x0001, 0x0001, 0x0001];
	message("\"What wouldst thou like to buy?\"");
	say();
labelFunc085D_00C0:
	if (!var0001) goto labelFunc085D_01D4;
	var000A = Func090C(var0002);
	if (!(var000A == 0x0001)) goto labelFunc085D_00EA;
	message("\"Very well, ");
	message(var0000);
	message(".\"");
	say();
	var0001 = false;
	goto labelFunc085D_01D1;
labelFunc085D_00EA:
	if (!(var000A == 0x0004)) goto labelFunc085D_0101;
	if (!gflags[0x012B]) goto labelFunc085D_0101;
	message("\"Phearcy has said that we can no longer sell Silverleaf because we have no more and cannot again acquire the meal. I am truly sorry. Perhaps thou wouldst be interested in something else.\"");
	say();
	goto labelFunc085D_01C7;
labelFunc085D_0101:
	var000B = Func091B(var0006, var0002[var000A], var0007[var000A], var0005[var000A], var0008[var000A]);
	var000C = 0x0000;
	message("\"^");
	message(var000B);
	message(" Dost thou accept my price?\"");
	say();
	var000D = Func090A();
	if (!var000D) goto labelFunc085D_0194;
	var000B = "How many ";
	if (!(var0004[var000A] == 0x000F)) goto labelFunc085D_015B;
	var000B = (var000B + "sets ");
labelFunc085D_015B:
	var000B = (var000B + "dost thou want?");
	message("\"");
	message(var000B);
	message("\"");
	say();
	var000C = Func08F8(var0003[var000A], var0004[var000A], var0009[var000A], var0005[var000A], 0x0014, 0x0001, true);
labelFunc085D_0194:
	if (!(var000C == 0x0001)) goto labelFunc085D_01A5;
	message("\"Agreed.\"");
	say();
	goto labelFunc085D_01C7;
labelFunc085D_01A5:
	if (!(var000C == 0x0002)) goto labelFunc085D_01B6;
	message("\"Thou cannot carry that much!\"");
	say();
	goto labelFunc085D_01C7;
labelFunc085D_01B6:
	if (!(var000C == 0x0003)) goto labelFunc085D_01C7;
	message("\"Thou hast not the gold for that!\"");
	say();
	goto labelFunc085D_01C7;
labelFunc085D_01C7:
	message("\"Wouldst thou like something else?\"");
	say();
	var0001 = Func090A();
labelFunc085D_01D1:
	goto labelFunc085D_00C0;
labelFunc085D_01D4:
	UI_pop_answers();
	return;
}


