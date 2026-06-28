#game "blackgate"
void Func08B0 0x8B0 ()
{
	if (!(!gflags[0x01C5])) goto labelFunc08B0_000F;
	message("在你面前是巫妖邪恶的身躯。它一动也不动，眼睛直视前方。*");
	say();
	abort;
	goto labelFunc08B0_0014;
labelFunc08B0_000F:
	message("巫妖一动也不动，似乎没有察觉到你的存在。*");
	say();
	abort;
labelFunc08B0_0014:
	return;
}


