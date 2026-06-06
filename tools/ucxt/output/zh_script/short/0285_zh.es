#game "blackgate"
// externs
extern void Func08FF 0x8FF (var var0000);

void Func0285 shape#(0x285) ()
{
	var var0000;

	if (!(event == 0x0001)) goto labelFunc0285_0018;
	var0000 = ("@我相信目前的匯率是" + "在不列顛尼亞造幣廠，一塊金塊可換十枚克朗。@");
	Func08FF(var0000);
labelFunc0285_0018:
	return;
}


