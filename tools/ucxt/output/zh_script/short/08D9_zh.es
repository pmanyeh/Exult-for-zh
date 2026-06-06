#game "blackgate"
void Func08D9 0x8D9 ()
{
	if (!(!gflags[0x01C9])) goto labelFunc08D9_000F;
	message("這個美麗的鬼魂目前似乎無法回應你，甚至也無法回應任何其他人。*");
	say();
	abort;
	goto labelFunc08D9_0014;
labelFunc08D9_000F:
	message("Rowena 目前似乎無法回應你，甚至也無法回應任何其他人。*");
	say();
	abort;
labelFunc08D9_0014:
	return;
}


