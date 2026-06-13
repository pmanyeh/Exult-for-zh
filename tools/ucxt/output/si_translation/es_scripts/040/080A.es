#game "serpentisle"
// externs
extern var Func0955 0x955 ();
extern var Func09B3 0x9B3 (var var0000);

void Func080A 0x80A ()
{
	var var0000;

	if (!UI_get_cont_items(0xFFDE, 0xFE99, 0xFE99, 0xFE99)) goto labelFunc080A_007B;
	message("\"I have some of thy belongings in my possession. Wouldst thou like them returned?\"");
	say();
	if (!Func0955()) goto labelFunc080A_0073;
	message("\"Here they are.\"");
	say();
	gflags[0x0013] = false;
	var0000 = Func09B3(0xFFDE);
	if (!(var0000[0x0001] != 0x0000)) goto labelFunc080A_003F;
	message("\"Thy companions will have to help thee carry some of these things.\"");
	say();
labelFunc080A_003F:
	if (!(var0000[0x0002] > 0x0000)) goto labelFunc080A_0070;
	var0000 = var0000[0x0002];
	if (!(var0000 > 0x0001)) goto labelFunc080A_006C;
	message("\"Since thou canst not carry these remaining ");
	message(var0000);
	message(" items, they shall go at thy feet.\"");
	say();
	goto labelFunc080A_0070;
labelFunc080A_006C:
	message("\"Since thou dost not have enough room for this last item, it shall go at thy feet.\"");
	say();
labelFunc080A_0070:
	goto labelFunc080A_007B;
labelFunc080A_0073:
	gflags[0x0013] = true;
	message("\"If that is what thou dost want, I will keep them for thee. Return when thou wantest them.\"");
	say();
labelFunc080A_007B:
	return;
}


