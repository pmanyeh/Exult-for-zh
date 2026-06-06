#game "blackgate"
// externs
extern var Func090A 0x90A ();

void Func08AE 0x8AE (var var0000)
{
	var var0001;

	var0001 = Func090A();
	if (!(!var0001)) goto labelFunc08AE_001F;
	message("「");
	message(var0000);
	message("，我相信總會有勇敢的靈魂終究會來到這裡。畢竟，大多數的靈魂若有需要，是可以等待永恆的，即使他們正處於劇烈的痛苦之中。」他在道別時看起來有些失望。然而，他的眼裡依然流露出感激之情。*");
	say();
	gflags[0x01D1] = true;
	abort;
	goto labelFunc08AE_002B;
labelFunc08AE_001F:
	message("Horance 似乎預料到了你的回應。「我就知道像你這樣高尚的人，絕不會在他人受苦時袖手旁觀。你的慷慨似乎是沒有極限的。」");
	say();
	gflags[0x01AC] = true;
	gflags[0x01D1] = false;
labelFunc08AE_002B:
	return;
}