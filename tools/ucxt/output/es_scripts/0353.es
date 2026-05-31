#game "blackgate"
// externs
extern void Func08FF 0x8FF (var var0000);

void Func0353 shape#(0x353) ()
{
	var var0000;

	if (!(event == 0x0001)) goto labelFunc0353_001C;
	var0000 = (("@That appears to be fine cloth, no doubt it would fetch " + "a fair price in Minoc. Or, perhapse, thou couldst cut ") + "it into bandages with shears.@");
	Func08FF(var0000);
labelFunc0353_001C:
	return;
}


