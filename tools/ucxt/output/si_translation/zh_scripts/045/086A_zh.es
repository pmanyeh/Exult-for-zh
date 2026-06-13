#game "serpentisle"
// externs
extern var Func0955 0x955 ();
extern var Func09B3 0x9B3 (var var0000);

void Func086A 0x86A ()
{
	var var0000;

	if (!UI_get_cont_items(0xFF58, 0xFE99, 0xFE99, 0xFE99)) goto labelFunc086A_007B;
	message("\"I have many of thy belongings in my possession. Dost thou want them returned?\"");
	say();
	if (!Func0955()) goto labelFunc086A_0073;
	message("\"Here they are.\"");
	say();
	gflags[0x000F] = false;
	var0000 = Func09B3(0xFF58);
	if (!(var0000[0x0001] != 0x0000)) goto labelFunc086A_003F;
	message("\"Thy companions will have to help thee with this burden.\"");
	say();
labelFunc086A_003F:
	if (!(var0000[0x0002] > 0x0000)) goto labelFunc086A_0070;
	var0000 = var0000[0x0002];
	if (!(var0000 > 0x0001)) goto labelFunc086A_006C;
	message("\"Since thou canst not carry these remaining ");
	message(var0000);
	message(" items, I will place them on the ground.\"");
	say();
	goto labelFunc086A_0070;
labelFunc086A_006C:
	message("\"Since thou dost not have enough room for this last item, I will place it on the ground.\"");
	say();
labelFunc086A_0070:
	goto labelFunc086A_007B;
labelFunc086A_0073:
	gflags[0x000F] = true;
	message("\"Then I will continue to keep thy belongings for thee. Thou hast but to return and ask for them again.\"");
	say();
labelFunc086A_007B:
	return;
}


