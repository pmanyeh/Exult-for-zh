#game "blackgate"
void Func08B0 0x8B0 ()
{
	if (!(!gflags[0x01C5])) goto labelFunc08B0_000F;
	message("Before you is the vile form of a liche. It remains motionless and its eyes stare straight ahead.*");
	say();
	abort;
	goto labelFunc08B0_0014;
labelFunc08B0_000F:
	message("The Liche remains motionless and seemingly unaware of your presence.*");
	say();
	abort;
labelFunc08B0_0014:
	return;
}


