#game "blackgate"
// externs
extern void Func08FF 0x8FF (var var0000);

void Func0285 shape#(0x285) ()
{
	var var0000;

	if (!(event == 0x0001)) goto labelFunc0285_0018;
	var0000 = ("@I believe that the current exchange rate is " + "ten crowns per nugget at the mint in Britian.@");
	Func08FF(var0000);
labelFunc0285_0018:
	return;
}


