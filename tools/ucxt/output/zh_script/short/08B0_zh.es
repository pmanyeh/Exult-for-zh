#game "blackgate"
void Func08B0 0x8B0 ()
{
	if (!(!gflags[0x01C5])) goto labelFunc08B0_000F;
	message("在你面前是巫妖邪惡的身軀。它一動也不動，眼睛直視前方。*");
	say();
	abort;
	goto labelFunc08B0_0014;
labelFunc08B0_000F:
	message("巫妖一動也不動，似乎沒有察覺到你的存在。*");
	say();
	abort;
labelFunc08B0_0014:
	return;
}


