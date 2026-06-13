#game "serpentisle"
// externs
extern var Func0891 0x891 ();
extern var Func0892 0x892 ();
extern var Func0898 0x898 ();
extern var Func0899 0x899 ();
extern var Func0893 0x893 ();
extern var Func0894 0x894 ();
extern var Func0895 0x895 ();
extern var Func0896 0x896 ();
extern var Func0897 0x897 ();
extern var Func089A 0x89A ();

var Func089B 0x89B ()
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

	if (!UI_die_roll(0x0000, 0x0003)) goto labelFunc089B_002C;
	if (!UI_die_roll(0x0000, 0x0001)) goto labelFunc089B_0023;
	var0000 = Func0891();
	goto labelFunc089B_0029;
labelFunc089B_0023:
	var0000 = Func0892();
labelFunc089B_0029:
	goto labelFunc089B_0048;
labelFunc089B_002C:
	if (!UI_die_roll(0x0000, 0x0001)) goto labelFunc089B_0042;
	var0000 = Func0898();
	goto labelFunc089B_0048;
labelFunc089B_0042:
	var0000 = Func0899();
labelFunc089B_0048:
	var0001 = var0000[0x0001];
	var0002 = var0000[0x0002];
	if (!UI_die_roll(0x0000, 0x0001)) goto labelFunc089B_0070;
	var0003 = Func0891();
	goto labelFunc089B_0076;
labelFunc089B_0070:
	var0003 = Func0892();
labelFunc089B_0076:
	if (!UI_die_roll(0x0000, 0x0001)) goto labelFunc089B_008C;
	var0004 = Func0891();
	goto labelFunc089B_0092;
labelFunc089B_008C:
	var0004 = Func0892();
labelFunc089B_0092:
	if (!UI_die_roll(0x0000, 0x0001)) goto labelFunc089B_00A8;
	var0005 = Func0891();
	goto labelFunc089B_00AE;
labelFunc089B_00A8:
	var0005 = Func0892();
labelFunc089B_00AE:
	var0005 = var0005[0x0002];
	var0000 = Func0893();
	var0006 = var0000[0x0001];
	var0007 = var0000[0x0002];
	if (!UI_die_roll(0x0000, 0x0001)) goto labelFunc089B_00E5;
	var0000 = Func0894();
	goto labelFunc089B_00EB;
labelFunc089B_00E5:
	var0000 = Func0895();
labelFunc089B_00EB:
	var0008 = var0000[0x0001];
	var0009 = var0000[0x0002];
	var000A = var0000[0x0003];
	if (!UI_die_roll(0x0000, 0x0001)) goto labelFunc089B_011C;
	var000B = Func0896();
	goto labelFunc089B_0122;
labelFunc089B_011C:
	var000B = Func0897();
labelFunc089B_0122:
	if (!UI_die_roll(0x0000, 0x0001)) goto labelFunc089B_0138;
	var0000 = Func0898();
	goto labelFunc089B_013E;
labelFunc089B_0138:
	var0000 = Func0899();
labelFunc089B_013E:
	var000C = var0000[0x0001];
	var000D = var0000[0x0002];
	var000E = Func089A();
	var0000 = UI_die_roll(0x0000, 0x0024);
	if (!(var0000 == 0x0000)) goto labelFunc089B_0183;
	var000F = (((("I will show thee my " + var0006) + " ") + var0001) + " if thou wilt show me thine.");
labelFunc089B_0183:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc089B_01BD;
	var000F = (((((((("All of my " + var0006) + " ") + var0002) + " are ") + var000A) + " ") + var000B) + ".");
labelFunc089B_01BD:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc089B_01EF;
	var000F = (((((("Stop " + var000A) + " my ") + var0006) + " ") + var0001) + ", please.");
labelFunc089B_01EF:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc089B_0221;
	var000F = (((((("Hast thou seen my " + var0001) + "? 'Tis ") + var000A) + " ") + var000B) + ".");
labelFunc089B_0221:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc089B_024B;
	var000F = (((("There is no " + var0001) + " for thee today, little ") + var000C) + ", only death.");
labelFunc089B_024B:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc089B_0287;
	var0010 = UI_a_or_an(var0006);
	var000F = (((((("Am I having " + var0010) + " ") + var0006) + " ") + var0001) + " yet?");
labelFunc089B_0287:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc089B_02C3;
	var0010 = UI_a_or_an(var0006);
	var000F = (((((("Where is mine advisor? I need " + var0010) + " ") + var0006) + " ") + var0001) + " immediately.");
labelFunc089B_02C3:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc089B_02FD;
	var000F = (((((((("Thou hast saved my " + var0006) + " ") + var000C) + " from ") + var0001) + ", ") + var000E) + ". How can I ever repay thee?");
labelFunc089B_02FD:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc089B_0351;
	var0010 = UI_a_or_an(var0001);
	var000F = (((((((((((("^" + var0010) + " ") + var0001) + ", ") + var0010) + " ") + var0001) + ", my kingdom for ") + var0010) + " ") + var0001) + "!");
labelFunc089B_0351:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc089B_0385;
	var0010 = UI_a_or_an(var0001);
	var000F = (((("Frankly, my dear, I don't give " + var0010) + " ") + var0001) + ".");
labelFunc089B_0385:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc089B_03AF;
	var000F = (((("As " + var0002) + " are my witness, I'll never go ") + var0006) + " again.");
labelFunc089B_03AF:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc089B_03D1;
	var000F = (("Oh, my, " + var000E) + ", I don't think we're in Britannia anymore.");
labelFunc089B_03D1:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc089B_0403;
	var000F = (((((("May I borrow thy " + var0001) + "? Mine seems to be ") + var0006) + " ") + var000B) + ".");
labelFunc089B_0403:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc089B_0435;
	var000F = (((((("My " + var000D) + " are ") + var000A) + " ") + var000B) + ".");
labelFunc089B_0435:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc089B_0467;
	var000F = (((((("Thou shalt know the " + var0001) + " and the ") + var0001) + " shall make thee ") + var0006) + ".");
labelFunc089B_0467:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc089B_04AB;
	var0010 = UI_a_or_an(var000C);
	var000F = (((((((("Thou shalt not " + var0008) + " to ") + var0010) + " ") + var000C) + ", ") + var000E) + ".");
labelFunc089B_04AB:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc089B_04D5;
	var000F = (((("Honor thy father and thy " + var0001) + ", ") + var000E) + ".");
labelFunc089B_04D5:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc089B_04FF;
	var000F = (((("Thou shalt not covet thy neighbor's " + var0001) + ", ") + var000E) + ".");
labelFunc089B_04FF:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc089B_0533;
	var0010 = UI_a_or_an(var0001);
	var000F = (((("Neither a borrower nor " + var0010) + " ") + var0001) + " be.");
labelFunc089B_0533:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc089B_0565;
	var000F = (((((("Never " + var0008) + " a gift ") + var000C) + " in the ") + var0001) + ".");
labelFunc089B_0565:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc089B_058F;
	var000F = (((("A fool and his " + var0001) + " are soon ") + var0006) + ".");
labelFunc089B_058F:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc089B_05B9;
	var000F = (((("Workers of the world, " + var0008) + "! You have nothing to lose but your ") + var0002) + "!");
labelFunc089B_05B9:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc089B_05DB;
	var000F = (("Ich bin ein " + var0001) + "er.");
labelFunc089B_05DB:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc089B_0605;
	var000F = (((("Damn the " + var0002) + "! ^") + var0006) + " speed ahead!");
labelFunc089B_0605:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc089B_063F;
	var000F = (((((((("Ask not what thy " + var0006) + " ") + var0001) + " can do for thee, but what thou canst do for thy ") + var0006) + " ") + var0001) + ".");
labelFunc089B_063F:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc089B_0671;
	var000F = (((((("^" + var000E) + "! ") + var000E) + "! Thou damned ") + var000C) + ".");
labelFunc089B_0671:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc089B_06A3;
	var000F = (((((("Let me remind thee that the " + var0002) + " of ") + var0003) + " may be more ") + var0006) + " than they appear.");
labelFunc089B_06A3:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc089B_06D5;
	var000F = (((((("Destroy thy " + var0006) + " and ") + var0007) + " life before it is too late, ") + var000E) + ".");
labelFunc089B_06D5:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc089B_0723;
	var0010 = UI_a_or_an(var0006);
	var0011 = UI_a_or_an(var0001);
	var000F = (((((((("Mine head feels like " + var0010) + " ") + var0006) + " with ") + var0011) + " ") + var0001) + " pointed at it.");
labelFunc089B_0723:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc089B_0755;
	var000F = (((((("Beautiful, " + var000E) + ", I shall have my ") + var0001) + " call thy ") + var0001) + ".");
labelFunc089B_0755:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc089B_0777;
	var000F = (("No, thank thee, I'm watching my " + var0001) + " intake.");
labelFunc089B_0777:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 >= 0x0000)) goto labelFunc089B_0977;
	var0010 = UI_a_or_an(var0006);
	var0012 = (((((("Ode to " + var0010) + " ") + var0006) + " ") + var0001) + ". ");
	if (!(var0000 == 0x0000)) goto labelFunc089B_07F3;
	var000F = (((((((((((("O how the " + var000D) + " of ") + var0001) + " ") + var0008) + " ") + var000B) + " amidst the ") + var0006) + " ") + var0003) + ".");
labelFunc089B_07F3:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc089B_0837;
	var0010 = UI_a_or_an(var0006);
	var000F = (((((((("Shall I compare thee to " + var0010) + " ") + var0006) + " ") + var0001) + "? Thou art far more ") + var0007) + ".");
labelFunc089B_0837:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc089B_08A3;
	var0013 = UI_a_or_an(var0001);
	var000F = (((((((((((((((((("To be " + var0010) + " ") + var0001) + " or not to be. That is the ") + var0003) + ". Whether 'tis nobler in the ") + var0004) + " to ") + var0008) + " the ") + var0002) + " and ") + var0005) + " of ") + var0006) + " ") + var0003) + " or...");
labelFunc089B_08A3:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc089B_08E9;
	var000F = ((((((((((("This morning I saw a small " + var0001) + " ") + var000A) + " ") + var000B) + ". How the seasons of ") + var0006) + " ") + var0003) + " come and go.") + " Death falls upon us all.");
labelFunc089B_08E9:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc089B_0913;
	var000F = (((("Rage, rage against the " + var000A) + " of the ") + var0001) + ".");
labelFunc089B_0913:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc089B_096D;
	var000F = (((((((((((((((("Love in the turning " + var0001) + ". The small ") + var000D) + " ") + var0008) + " ") + var000B) + ".  The ") + var0006) + " ") + var0005) + " whisper their ") + var0007) + " muses. Oh, the turning ") + var0001) + ".");
labelFunc089B_096D:
	var0000 = (var0000 - 0x0001);
labelFunc089B_0977:
	return (var0012 + var000F);
	return 0;
}


