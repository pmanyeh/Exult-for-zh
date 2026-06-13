#game "serpentisle"
// externs
extern var Func0955 0x955 ();
extern var Func09B3 0x9B3 (var var0000);

void Func0861 0x861 ()
{
	var var0000;

	if (!UI_get_cont_items(0xFFD4, 0xFE99, 0xFE99, 0xFE99)) goto labelFunc0861_007F;
	message("\"I have many items in my possession which may aid thee. Wouldst thou like to have them?\"");
	say();
	if (!Func0955()) goto labelFunc0861_0077;
	message("\"Here they are.\"");
	say();
	gflags[0x0011] = false;
	var0000 = Func09B3(0xFFD4);
	if (!(var0000[0x0001] != 0x0000)) goto labelFunc0861_003F;
	message("\"Thy companions will have to help thee carry some of these things.\"");
	say();
labelFunc0861_003F:
	if (!(var0000[0x0002] > 0x0000)) goto labelFunc0861_0074;
	var0000 = var0000[0x0002];
	message("\"Thou art encumbered like a pack mule!\"");
	say();
	if (!(var0000 > 0x0001)) goto labelFunc0861_0070;
	message("\"Since thou canst not carry these remaining ");
	message(var0000);
	message(" items, they shall go at thy feet.\"");
	say();
	goto labelFunc0861_0074;
labelFunc0861_0070:
	message("\"Since thou dost not have enough room for this last item, it shall go at thy feet.\"");
	say();
labelFunc0861_0074:
	goto labelFunc0861_007F;
labelFunc0861_0077:
	gflags[0x0011] = true;
	message("\"If that is what thou dost want, so be it.\"");
	say();
labelFunc0861_007F:
	return;
}


