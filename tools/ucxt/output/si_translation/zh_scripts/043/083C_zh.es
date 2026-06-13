#game "serpentisle"
// externs
extern var Func0955 0x955 ();
extern var Func09B3 0x9B3 (var var0000);

void Func083C 0x83C ()
{
	var var0000;

	if (!UI_get_cont_items(0xFFFD, 0xFE99, 0xFE99, 0xFE99)) goto labelFunc083C_007B;
	message("\"I am carrying many items, some of which may be of use to thee. Wouldst thou care to have these before I depart?\"");
	say();
	if (!Func0955()) goto labelFunc083C_0073;
	message("\"Here they are.\"");
	say();
	gflags[0x0019] = false;
	var0000 = Func09B3(0xFFFD);
	if (!(var0000[0x0001] != 0x0000)) goto labelFunc083C_003F;
	message("\"Thy friends will have to help carry these things.\"");
	say();
labelFunc083C_003F:
	if (!(var0000[0x0002] > 0x0000)) goto labelFunc083C_0070;
	var0000 = var0000[0x0002];
	if (!(var0000 > 0x0001)) goto labelFunc083C_006C;
	message("\"Since thou canst not carry these remaining ");
	message(var0000);
	message(" items, I will place them at thy feet.\"");
	say();
	goto labelFunc083C_0070;
labelFunc083C_006C:
	message("\"Since thou dost not have enough room for this last item, I will place it at thy feet.\"");
	say();
labelFunc083C_0070:
	goto labelFunc083C_007B;
labelFunc083C_0073:
	gflags[0x0019] = true;
	message("\"If thou changest thy mind, thou hast but to return and ask again.\"");
	say();
labelFunc083C_007B:
	return;
}


