#game "serpentisle"
// externs
extern var Func0955 0x955 ();
extern var Func09B3 0x9B3 (var var0000);

void Func0874 0x874 ()
{
	var var0000;

	if (!UI_get_cont_items(0xFFD3, 0xFE99, 0xFE99, 0xFE99)) goto labelFunc0874_007F;
	message("\"I still have some of thy worthless belongings. If thou wantest them, thou hadst best take them now.\"");
	say();
	message("\"Dost thou want such items returned?\"");
	say();
	if (!Func0955()) goto labelFunc0874_0077;
	message("\"Here they are.\"");
	say();
	gflags[0x0016] = false;
	var0000 = Func09B3(0xFFD3);
	if (!(var0000[0x0001] != 0x0000)) goto labelFunc0874_0043;
	message("\"Thy companions will have to carry some of these useless things.\"");
	say();
labelFunc0874_0043:
	if (!(var0000[0x0002] > 0x0000)) goto labelFunc0874_0074;
	var0000 = var0000[0x0002];
	if (!(var0000 > 0x0001)) goto labelFunc0874_0070;
	message("\"Since thou canst not carry these remaining ");
	message(var0000);
	message(" items, they will go on the floor.\"");
	say();
	goto labelFunc0874_0074;
labelFunc0874_0070:
	message("\"Since thou dost not have enough room for this last item, it will go on the floor.\"");
	say();
labelFunc0874_0074:
	goto labelFunc0874_007F;
labelFunc0874_0077:
	gflags[0x0016] = true;
	message("\"If that is what thou wantest, so be it.\"");
	say();
labelFunc0874_007F:
	return;
}


