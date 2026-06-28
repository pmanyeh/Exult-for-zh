#game "blackgate"
// externs
extern void Func08FF 0x8FF (var var0000);

void Func0285 shape#(0x285) ()
{
	var var0000;

	if (!(event == 0x0001)) goto labelFunc0285_0018;
	var0000 = ("@我相信目前的汇率是" + "在不列颠尼亚造币厂，一块金块可换十枚克朗。@");
	Func08FF(var0000);
labelFunc0285_0018:
	return;
}


