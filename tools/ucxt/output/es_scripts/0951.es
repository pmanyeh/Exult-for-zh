#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090C 0x90C (var var0000);
extern var Func091B 0x91B (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func0951 0x951 ()
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
	var0002 = ["nothing", "mutton", "bread", "mead", "trout", "Silverleaf", "cake", "wine", "ale"];
	var0003 = [0x0000, 0x0179, 0x0179, 0x0268, 0x0179, 0x0179, 0x0179, 0x0268, 0x0268];
	var0004 = [0xFE99, 0x0008, 0x0001, 0x0000, 0x000C, 0x001F, 0x0005, 0x0005, 0x0003];
	var0005 = [0x0000, 0x0003, 0x0002, 0x0007, 0x0003, 0x001E, 0x0002, 0x0003, 0x0002];
	var0006 = "";
	var0007 = 0x0000;
	var0008 = ["", " for one portion", " for one loaf", " for one bottle", " for one portion", " for one portion", " for one slice", " for one bottle", " for one bottle"];
	var0009 = 0x0001;
	message("\"What wouldst thou like?\"");
	say();
labelFunc0951_00C9:
	if (!var0001) goto labelFunc0951_01DC;
	var000A = Func090C(var0002);
	if (!(var000A == 0x0001)) goto labelFunc0951_00ED;
	message("\"Fine.\"");
	say();
	var0001 = false;
	goto labelFunc0951_01D9;
labelFunc0951_00ED:
	if (!(var000A == 0x0006)) goto labelFunc0951_010A;
	if (!gflags[0x012B]) goto labelFunc0951_010A;
	message("\"I regret to tell thee that this fine establishment will no longer be able to provide our fine customers with Silverleaf. The person who provides me with the delicate meal is no longer able to procure it. I am dreadfully sorry, ");
	message(var0000);
	message(".\"");
	say();
	goto labelFunc0951_01CF;
labelFunc0951_010A:
	var000B = Func091B(var0006, var0002[var000A], var0007, var0005[var000A], var0008[var000A]);
	var000C = 0x0000;
	message("\"^");
	message(var000B);
	message(" That is a fair price, is it not?\"");
	say();
	var000D = Func090A();
	if (!var000D) goto labelFunc0951_019C;
	if (!(var0003[var000A] == 0x0179)) goto labelFunc0951_017A;
	message("\"How many wouldst thou like?\"");
	say();
	var000C = Func08F8(var0003[var000A], var0004[var000A], var0009, var0005[var000A], 0x0014, 0x0001, true);
	goto labelFunc0951_019C;
labelFunc0951_017A:
	var000C = Func08F8(var0003[var000A], var0004[var000A], var0009, var0005[var000A], 0x0000, 0x0001, true);
labelFunc0951_019C:
	if (!(var000C == 0x0001)) goto labelFunc0951_01AD;
	message("\"Done!\"");
	say();
	goto labelFunc0951_01CF;
labelFunc0951_01AD:
	if (!(var000C == 0x0002)) goto labelFunc0951_01BE;
	message("\"Thou cannot possibly carry that much!\"");
	say();
	goto labelFunc0951_01CF;
labelFunc0951_01BE:
	if (!(var000C == 0x0003)) goto labelFunc0951_01CF;
	message("\"Thou dost not have enough gold for that!\"");
	say();
	goto labelFunc0951_01CF;
labelFunc0951_01CF:
	message("\"Wouldst thou like something else?\"");
	say();
	var0001 = Func090A();
labelFunc0951_01D9:
	goto labelFunc0951_00C9;
labelFunc0951_01DC:
	UI_pop_answers();
	return;
}


