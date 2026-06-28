#game "blackgate"
void Func08D9 0x8D9 ()
{
	if (!(!gflags[0x01C9])) goto labelFunc08D9_000F;
	message("这个美丽的鬼魂目前似乎无法回应你，甚至也无法回应任何其他人。*");
	say();
	abort;
	goto labelFunc08D9_0014;
labelFunc08D9_000F:
	message("Rowena 目前似乎无法回应你，甚至也无法回应任何其他人。*");
	say();
	abort;
labelFunc08D9_0014:
	return;
}


