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
	message("，我確定最終會有勇敢的靈魂來到這裡。畢竟，如有必要，大多數的靈體都能等待永恆，即使他們正處於極度的痛苦之中。」他在道別時看起來有點失望。然而，他眼中依然流露出感激之情。*");
	say();
	gflags[0x01D1] = true;
	abort;
	goto labelFunc08AE_002B;
labelFunc08AE_001F:
	message("Horance 看起來似乎早就料到你的反應。「我就知道像你這般高尚的人，絕不會在他人受難時袖手旁觀。你的慷慨似乎是無遠弗屆的。」");
	say();
	gflags[0x01AC] = true;
	gflags[0x01D1] = false;
labelFunc08AE_002B:
	return;
}


