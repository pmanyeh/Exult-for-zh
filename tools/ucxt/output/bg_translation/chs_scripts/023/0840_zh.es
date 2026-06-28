#game "blackgate"
// externs
extern var Func090B 0x90B (var var0000);
extern var Func090A 0x90A ();

void Func0840 0x840 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	UI_push_answers();
	var0000 = Func090B(["做好事", "没有答案", "致力合一", "拥有信念", "我不知道"]);
	if (!(var0000 == "没有答案")) goto labelFunc0840_0099;
	message("贤者笑着说：「你已经开始了你的启蒙之旅。正如你所听到的，并非所有事情都如老师所教导的那样。这真是遗憾。现在我猜你想借那本笔记本了吧？」");
	say();
	var0001 = Func090A();
	if (!var0001) goto labelFunc0840_0091;
	message("「很好。你保证会归还我的笔记本吗？」");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc0840_0089;
	if (!UI_count_objects(0xFE9B, 0x0281, 0x00FE, 0xFE99)) goto labelFunc0840_0060;
	message("「那就去找吧！你有钥匙！」");
	say();
	goto labelFunc0840_0085;
labelFunc0840_0060:
	var0003 = UI_add_party_items(0x0001, 0x0281, 0x00FE, 0xFE99, false);
	if (!var0003) goto labelFunc0840_0081;
	message("「很好。我指望你亲自把它还给我。如果你做不到的话，谁知道会有什么不幸降临在你身上。为了给你更多的诱因，如果你安全地把它还给我，我也许会给你其他可以帮助你完成任务的东西。~~这是我的储藏室钥匙，在南边的第一栋建筑。」他狡黠地笑了笑。「你必须自己找出寻找笔记本的方法！」");
	say();
	goto labelFunc0840_0085;
labelFunc0840_0081:
	message("「你没有足够的空间来拿我的钥匙！卸下你的行李，我们再试一次！」*");
	say();
labelFunc0840_0085:
	abort;
	goto labelFunc0840_008E;
labelFunc0840_0089:
	message("「那我就不能让你借这本笔记本了！」");
	say();
	abort;
labelFunc0840_008E:
	goto labelFunc0840_0096;
labelFunc0840_0091:
	message("「喔。那好吧。」*");
	say();
	abort;
labelFunc0840_0096:
	goto labelFunc0840_009E;
labelFunc0840_0099:
	message("贤者皱着眉头：「那是不正确的。去寻找真正的答案吧。」*");
	say();
	abort;
labelFunc0840_009E:
	UI_pop_answers();
	return;
}


