#game "serpentisle"
// externs
extern var Func0955 0x955 ();
extern var Func09B3 0x9B3 (var var0000);

void Func0835 0x835 ()
{
	var var0000;

	if (!UI_get_cont_items(0xFF6B, 0xFE99, 0xFE99, 0xFE99)) goto labelFunc0835_007B;
	message("\"I have many items in my possession which may aid thee in thy journeys. Wouldst thou like them?\"");
	say();
	if (!Func0955()) goto labelFunc0835_0073;
	message("\"Here they are.\"");
	say();
	gflags[0x0010] = false;
	var0000 = Func09B3(0xFF6B);
	if (!(var0000[0x0001] != 0x0000)) goto labelFunc0835_003F;
	message("\"Thy companions will have to help thee with this burden.\"");
	say();
labelFunc0835_003F:
	if (!(var0000[0x0002] > 0x0000)) goto labelFunc0835_0070;
	var0000 = var0000[0x0002];
	if (!(var0000 > 0x0001)) goto labelFunc0835_006C;
	message("\"Since thou canst not carry these remaining ");
	message(var0000);
	message(" items, I will place them at thy feet.\"");
	say();
	goto labelFunc0835_0070;
labelFunc0835_006C:
	message("\"Since thou dost not have enough room for this last item, I will place it at thy feet.\"");
	say();
labelFunc0835_0070:
	goto labelFunc0835_007B;
labelFunc0835_0073:
	gflags[0x0010] = true;
	message("\"If thou changest thy mind, thou hast but to return and ask.\"");
	say();
labelFunc0835_007B:
	return;
}


