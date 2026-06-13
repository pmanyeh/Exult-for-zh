#game "blackgate"
void Func08D9 0x8D9 ()
{
	if (!(!gflags[0x01C9])) goto labelFunc08D9_000F;
	message("The beautiful ghost appears to be incapable of responding to you at the current time, or in fact anyone else for that matter.*");
	say();
	abort;
	goto labelFunc08D9_0014;
labelFunc08D9_000F:
	message("Rowena appears to be incapable of responding to you at the current time, or in fact anyone else for that matter.*");
	say();
	abort;
labelFunc08D9_0014:
	return;
}


