#game "serpentisle"
// externs
extern var Func0955 0x955 ();
extern var Func09B3 0x9B3 (var var0000);

void Func0829 0x829 ()
{
	var var0000;

	if (!UI_get_cont_items(0xFFFF, 0xFE99, 0xFE99, 0xFE99)) goto labelFunc0829_007B;
	message("\"I am carrying many items, some of which may be of use to thee. Wouldst thou care to have these back?\"");
	say();
	if (!Func0955()) goto labelFunc0829_0073;
	message("\"Here they are.\"");
	say();
	gflags[0x0017] = false;
	var0000 = Func09B3(0xFFFF);
	if (!(var0000[0x0001] != 0x0000)) goto labelFunc0829_003F;
	message("\"Thy friends will have to help carry these things.\"");
	say();
labelFunc0829_003F:
	if (!(var0000[0x0002] > 0x0000)) goto labelFunc0829_0070;
	var0000 = var0000[0x0002];
	if (!(var0000 > 0x0001)) goto labelFunc0829_006C;
	message("\"Since thou canst not carry these remaining ");
	message(var0000);
	message(" items, I will place them at thy feet.\"");
	say();
	goto labelFunc0829_0070;
labelFunc0829_006C:
	message("\"Since thou dost not have enough room for this last item, I will place it at thy feet.\"");
	say();
labelFunc0829_0070:
	goto labelFunc0829_007B;
labelFunc0829_0073:
	gflags[0x0017] = true;
	message("\"If thou changest thy mind, thou hast but to return and ask again.\"");
	say();
labelFunc0829_007B:
	return;
}


