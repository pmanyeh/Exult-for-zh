#game "blackgate"
// externs
extern void Func08FF 0x8FF (var var0000);

void Func0286 shape#(0x286) ()
{
	var var0000;

	if (!(event == 0x0001)) goto labelFunc0286_0018;
	var0000 = ("@我相信目前的匯率是" + "在不列顛尼亞造幣廠，一根金條可換一百枚克朗。@");
	Func08FF(var0000);
labelFunc0286_0018:
	return;
}


