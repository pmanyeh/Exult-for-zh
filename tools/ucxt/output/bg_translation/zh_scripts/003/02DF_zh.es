#game "blackgate"
// externs
extern void Func08FF 0x8FF (var var0000);

void Func02DF shape#(0x2DF) ()
{
	var var0000;

	if (!(event == 0x0001)) goto labelFunc02DF_001C;
	var0000 = (("@我相信那是給訓練師用的。*" + "如果你需要練習，為何不") + "去找個訓練師呢？@");
	Func08FF(var0000);
labelFunc02DF_001C:
	return;
}


