#game "blackgate"
// externs
extern var Func090A 0x90A ();

void Func08AE 0x8AE (var var0000)
{
	var var0001;

	var0001 = Func090A();
	if (!(!var0001)) goto labelFunc08AE_001F;
	message("\"");
	message(var0000);
	message("，我确定最终会有勇敢的灵魂来到这里。毕竟，如有必要，大多数的灵体都能等待永恒，即使他们正处于极度的痛苦之中。」他在道别时看起来有点失望。然而，他眼中依然流露出感激之情。*");
	say();
	gflags[0x01D1] = true;
	abort;
	goto labelFunc08AE_002B;
labelFunc08AE_001F:
	message("Horance 看起来似乎早就料到你的反应。「我就知道像你这般高尚的人，绝不会在他人受难时袖手旁观。你的慷慨似乎是无远弗届的。」");
	say();
	gflags[0x01AC] = true;
	gflags[0x01D1] = false;
labelFunc08AE_002B:
	return;
}


