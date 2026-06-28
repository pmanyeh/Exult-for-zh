#game "blackgate"
// externs
extern void Func08FF 0x8FF (var var0000);

void Func02DF shape#(0x2DF) ()
{
	var var0000;

	if (!(event == 0x0001)) goto labelFunc02DF_001C;
	var0000 = (("@我相信那是给训练师用的。*" + "如果你需要练习，为何不") + "去找个训练师呢？@");
	Func08FF(var0000);
labelFunc02DF_001C:
	return;
}


