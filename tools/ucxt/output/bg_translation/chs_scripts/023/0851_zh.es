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
	message("「我需要你将这个未开封的包裹，原封不动地送给我们在 Minoc 友谊会分部的负责人 Elynor。Elynor 收到后会奖赏你，我保证。我可以信任你去做这件事吗？」");
	say();
	goto labelFunc0851_0012;
labelFunc0851_000E:
	message("「你重新考虑过你的任务了吗？你愿意把包裹送到 Minoc 的 Elynor 那里吗？」");
	say();
labelFunc0851_0012:
	var0000 = Func090A();
	if (!var0000) goto labelFunc0851_0070;
	var0001 = UI_find_object(0xFFE6, 0x031E, 0xFE99, 0xFE99);
	var0002 = UI_set_last_created(var0001);
	var0003 = UI_give_last_created(0xFE9C);
	if (!var0003) goto labelFunc0851_005A;
	message("「太好了！这就交给你。你现在必须上路了！」*");
	say();
	gflags[0x008F] = true;
	Func0911(0x00C8);
	abort;
labelFunc0851_005A:
	var0003 = UI_give_last_created(0xFFE6);
	message("「天啊！你身上带太多东西，拿不下这个盒子了。请先清理一下你的物品。」*");
	say();
	gflags[0x00D7] = true;
	abort;
	goto labelFunc0851_0079;
labelFunc0851_0070:
	message("「圣者，我知道你已经完成了许多任务。正如我们所知，对心灵的追求往往是最令人恐惧和难以捉摸的。不要害怕你自己，圣者，因为这会阻碍我们去做必须做的事情。等你重新考虑后我们再谈。明天再来问我关于包裹的事吧。」*");
	say();
	gflags[0x00D6] = true;
	abort;
labelFunc0851_0079:
	return;
}


