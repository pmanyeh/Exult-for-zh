#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern void Func0911 0x911 (var var0000);

void Func0851 0x851 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(!gflags[0x00D6])) goto labelFunc0851_000E;
	message("「我需要你將這個未開封的包裹，原封不動地送給我們在 Minoc 友誼會分部的負責人 Elynor。Elynor 收到後會獎賞你，我保證。我可以信任你去做這件事嗎？」");
	say();
	goto labelFunc0851_0012;
labelFunc0851_000E:
	message("「你重新考慮過你的任務了嗎？你願意把包裹送到 Minoc 的 Elynor 那裡嗎？」");
	say();
labelFunc0851_0012:
	var0000 = Func090A();
	if (!var0000) goto labelFunc0851_0070;
	var0001 = UI_find_object(0xFFE6, 0x031E, 0xFE99, 0xFE99);
	var0002 = UI_set_last_created(var0001);
	var0003 = UI_give_last_created(0xFE9C);
	if (!var0003) goto labelFunc0851_005A;
	message("「太好了！這就交給你。你現在必須上路了！」*");
	say();
	gflags[0x008F] = true;
	Func0911(0x00C8);
	abort;
labelFunc0851_005A:
	var0003 = UI_give_last_created(0xFFE6);
	message("「天啊！你身上帶太多東西，拿不下這個盒子了。請先清理一下你的物品。」*");
	say();
	gflags[0x00D7] = true;
	abort;
	goto labelFunc0851_0079;
labelFunc0851_0070:
	message("「聖者，我知道你已經完成了許多任務。正如我們所知，對心靈的追求往往是最令人恐懼和難以捉摸的。不要害怕你自己，聖者，因為這會阻礙我們去做必須做的事情。等你重新考慮後我們再談。明天再來問我關於包裹的事吧。」*");
	say();
	gflags[0x00D6] = true;
	abort;
labelFunc0851_0079:
	return;
}


