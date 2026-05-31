#game "blackgate"
// externs
extern var Func0865 0x865 ();
extern var Func0866 0x866 ();
extern var Func086C 0x86C ();
extern var Func086D 0x86D ();
extern var Func0867 0x867 ();
extern var Func0868 0x868 ();
extern var Func0869 0x869 ();
extern var Func086A 0x86A ();
extern var Func086B 0x86B ();
extern var Func086E 0x86E ();

var Func086F 0x86F ()
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
	var var000E;
	var var000F;
	var var0010;
	var var0011;
	var var0012;
	var var0013;

	if (!UI_die_roll(0x0000, 0x0003)) goto labelFunc086F_002C;
	if (!UI_die_roll(0x0000, 0x0001)) goto labelFunc086F_0023;
	var0000 = Func0865();
	goto labelFunc086F_0029;
labelFunc086F_0023:
	var0000 = Func0866();
labelFunc086F_0029:
	goto labelFunc086F_0048;
labelFunc086F_002C:
	if (!UI_die_roll(0x0000, 0x0001)) goto labelFunc086F_0042;
	var0000 = Func086C();
	goto labelFunc086F_0048;
labelFunc086F_0042:
	var0000 = Func086D();
labelFunc086F_0048:
	var0001 = var0000[0x0001];
	var0002 = var0000[0x0002];
	if (!UI_die_roll(0x0000, 0x0001)) goto labelFunc086F_0070;
	var0003 = Func0865();
	goto labelFunc086F_0076;
labelFunc086F_0070:
	var0003 = Func0866();
labelFunc086F_0076:
	if (!UI_die_roll(0x0000, 0x0001)) goto labelFunc086F_008C;
	var0004 = Func0865();
	goto labelFunc086F_0092;
labelFunc086F_008C:
	var0004 = Func0866();
labelFunc086F_0092:
	if (!UI_die_roll(0x0000, 0x0001)) goto labelFunc086F_00A8;
	var0005 = Func0865();
	goto labelFunc086F_00AE;
labelFunc086F_00A8:
	var0005 = Func0866();
labelFunc086F_00AE:
	var0005 = var0005[0x0002];
	var0000 = Func0867();
	var0006 = var0000[0x0001];
	var0007 = var0000[0x0002];
	if (!UI_die_roll(0x0000, 0x0001)) goto labelFunc086F_00E5;
	var0000 = Func0868();
	goto labelFunc086F_00EB;
labelFunc086F_00E5:
	var0000 = Func0869();
labelFunc086F_00EB:
	var0008 = var0000[0x0001];
	var0009 = var0000[0x0002];
	var000A = var0000[0x0003];
	if (!UI_die_roll(0x0000, 0x0001)) goto labelFunc086F_011C;
	var000B = Func086A();
	goto labelFunc086F_0122;
labelFunc086F_011C:
	var000B = Func086B();
labelFunc086F_0122:
	if (!UI_die_roll(0x0000, 0x0001)) goto labelFunc086F_0138;
	var0000 = Func086C();
	goto labelFunc086F_013E;
labelFunc086F_0138:
	var0000 = Func086D();
labelFunc086F_013E:
	var000C = var0000[0x0001];
	var000D = var0000[0x0002];
	var000E = Func086E();
	var0000 = UI_die_roll(0x0000, 0x0024);
	if (!(var0000 == 0x0000)) goto labelFunc086F_0183;
	var000F = (((("I'll show you my " + var0006) + " ") + var0001) + " if you show me yours.");
labelFunc086F_0183:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc086F_01BD;
	var000F = (((((((("All of my " + var0006) + " ") + var0002) + " are ") + var000A) + " ") + var000B) + ".");
labelFunc086F_01BD:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc086F_01EF;
	var000F = (((((("Stop " + var000A) + " my ") + var0006) + " ") + var0001) + ", please.");
labelFunc086F_01EF:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc086F_0221;
	var000F = (((((("Have you seen my " + var0001) + "? It's ") + var000A) + " ") + var000B) + ".");
labelFunc086F_0221:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc086F_024B;
	var000F = (((("There is no " + var0001) + " for you today, little ") + var000C) + ", only death.");
labelFunc086F_024B:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc086F_0287;
	var0010 = UI_a_or_an(var0006);
	var000F = (((((("Am I having " + var0010) + " ") + var0006) + " ") + var0001) + " yet?");
labelFunc086F_0287:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc086F_02C3;
	var0010 = UI_a_or_an(var0006);
	var000F = (((((("Where is my attorney? I need " + var0010) + " ") + var0006) + " ") + var0001) + " right away.");
labelFunc086F_02C3:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc086F_02FD;
	var000F = (((((((("You saved my " + var0006) + " ") + var000C) + " from ") + var0001) + ", ") + var000E) + ". How can I ever repay you?");
labelFunc086F_02FD:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc086F_0351;
	var0010 = UI_a_or_an(var0001);
	var000F = (((((((((((("^" + var0010) + " ") + var0001) + ", ") + var0010) + " ") + var0001) + ", my kingdom for ") + var0010) + " ") + var0001) + "!");
labelFunc086F_0351:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc086F_0385;
	var0010 = UI_a_or_an(var0001);
	var000F = (((("Frankly, my dear, I don't give " + var0010) + " ") + var0001) + ".");
labelFunc086F_0385:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc086F_03AF;
	var000F = (((("As " + var0002) + " are my witness, I'll never go ") + var0006) + " again.");
labelFunc086F_03AF:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc086F_03D1;
	var000F = (("Oh my, " + var000E) + ", I don't think we're in Kansas anymore.");
labelFunc086F_03D1:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc086F_0403;
	var000F = (((((("May I borrow your " + var0001) + "? Mine seems to be ") + var0006) + " ") + var000B) + ".");
labelFunc086F_0403:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc086F_0435;
	var000F = (((((("My " + var000D) + " are ") + var000A) + " ") + var000B) + ".");
labelFunc086F_0435:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc086F_0467;
	var000F = (((((("You shall know the " + var0001) + " and the ") + var0001) + " shall make you ") + var0006) + ".");
labelFunc086F_0467:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc086F_04AB;
	var0010 = UI_a_or_an(var000C);
	var000F = (((((((("Thou shalt not " + var0008) + " to ") + var0010) + " ") + var000C) + ", ") + var000E) + ".");
labelFunc086F_04AB:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc086F_04D5;
	var000F = (((("Honor thy father and thy " + var0001) + ", ") + var000E) + ".");
labelFunc086F_04D5:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc086F_04FF;
	var000F = (((("Thou shalt not covet thy neighbor's " + var0001) + ", ") + var000E) + ".");
labelFunc086F_04FF:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc086F_0533;
	var0010 = UI_a_or_an(var0001);
	var000F = (((("Neither a borrower nor " + var0010) + " ") + var0001) + " be.");
labelFunc086F_0533:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc086F_0565;
	var000F = (((((("Never " + var0008) + " a gift ") + var000C) + " in the ") + var0001) + ".");
labelFunc086F_0565:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc086F_058F;
	var000F = (((("A fool and his " + var0001) + " are soon ") + var0006) + ".");
labelFunc086F_058F:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc086F_05B9;
	var000F = (((("Workers of the world, " + var0008) + "! You have nothing to lose but your ") + var0002) + "!");
labelFunc086F_05B9:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc086F_05DB;
	var000F = (("Ich bin ein " + var0001) + "er.");
labelFunc086F_05DB:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc086F_0605;
	var000F = (((("Damn the " + var0002) + "! ^") + var0006) + " speed ahead!");
labelFunc086F_0605:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc086F_063F;
	var000F = (((((((("Ask not what your " + var0006) + " ") + var0001) + " can do for you, but what you can do for your ") + var0006) + " ") + var0001) + ".");
labelFunc086F_063F:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc086F_0671;
	var000F = (((((("^" + var000E) + "! ") + var000E) + "! You damn ") + var000C) + ".");
labelFunc086F_0671:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc086F_06A3;
	var000F = (((((("Let me just remind you that the " + var0002) + " of ") + var0003) + " may be more ") + var0006) + " than they appear.");
labelFunc086F_06A3:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc086F_06D5;
	var000F = (((((("Destroy your " + var0006) + " and ") + var0007) + " life before it is too late, ") + var000E) + ".");
labelFunc086F_06D5:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc086F_0723;
	var0010 = UI_a_or_an(var0006);
	var0011 = UI_a_or_an(var0001);
	var000F = (((((((("My head feels like " + var0010) + " ") + var0006) + " with ") + var0011) + " ") + var0001) + " pointed at it.");
labelFunc086F_0723:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc086F_0755;
	var000F = (((((("Beautiful, " + var000E) + ", I'll have my ") + var0001) + " call your ") + var0001) + ".");
labelFunc086F_0755:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc086F_0777;
	var000F = (("No thank you, I'm watching my " + var0001) + " intake.");
labelFunc086F_0777:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 >= 0x0000)) goto labelFunc086F_0977;
	var0010 = UI_a_or_an(var0006);
	var0012 = (((((("Ode to " + var0010) + " ") + var0006) + " ") + var0001) + ". ");
	if (!(var0000 == 0x0000)) goto labelFunc086F_07F3;
	var000F = (((((((((((("O how the " + var000D) + " of ") + var0001) + " ") + var0008) + " ") + var000B) + " amidst the ") + var0006) + " ") + var0003) + ".");
labelFunc086F_07F3:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc086F_0837;
	var0010 = UI_a_or_an(var0006);
	var000F = (((((((("Shall I compare thee to " + var0010) + " ") + var0006) + " ") + var0001) + "? Thou art far more ") + var0007) + ".");
labelFunc086F_0837:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc086F_08A3;
	var0013 = UI_a_or_an(var0001);
	var000F = (((((((((((((((((("To be " + var0013) + " ") + var0001) + " or not to be. That is the ") + var0003) + ". Whether tis nobler in the ") + var0004) + " to ") + var0008) + " the ") + var0002) + " and ") + var0005) + " of ") + var0006) + " ") + var0003) + " or...");
labelFunc086F_08A3:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc086F_08E9;
	var000F = ((((((((((("This morning I saw a small " + var0001) + " ") + var000A) + " ") + var000B) + ". How the seasons of ") + var0006) + " ") + var0003) + " come and go.") + " Death falls upon us all.");
labelFunc086F_08E9:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc086F_0913;
	var000F = (((("Rage, rage against the " + var000A) + " of the ") + var0001) + ".");
labelFunc086F_0913:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc086F_096D;
	var000F = (((((((((((((((("Love in the turning " + var0001) + ". The small ") + var000D) + " ") + var0008) + " ") + var000B) + ".  The ") + var0006) + " ") + var0005) + " whisper their ") + var0007) + " muses. Oh, the turning ") + var0001) + ".");
labelFunc086F_096D:
	var0000 = (var0000 - 0x0001);
labelFunc086F_0977:
	return (var0012 + var000F);
	return 0;
}


