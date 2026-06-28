#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern var Func090B 0x90B (var var0000);

void Func0885 0x885 ()
{
	var var0000;
	var var0001;

	if (!Func090A()) goto labelFunc0885_0084;
	message("「你找到了什么？」");
	say();
	UI_clear_answers();
	var0000 = ["没有", "一个水桶", "一具尸体"];
	if (!gflags[0x003C]) goto labelFunc0885_002D;
	var0000 = (var0000 & "一把钥匙");
labelFunc0885_002D:
	var0001 = Func090B(var0000);
	if (!(var0001 == "一把钥匙")) goto labelFunc0885_0048;
	message("「嗯，一把钥匙。也许如果你去问 Christopher 的儿子，他可能会知道这是做什么用的。」");
	say();
	gflags[0x0048] = true;
labelFunc0885_0048:
	if (!(var0001 == "一具尸体")) goto labelFunc0885_005B;
	message("「这我知道！你『还』找到了什么？你应该再去看一次，圣者！」");
	say();
	gflags[0x005A] = true;
	abort;
labelFunc0885_005B:
	if (!(var0001 == "一个水桶")) goto labelFunc0885_006E;
	message("「是的，显然里面装满了可怜的 Christopher 的血。但肯定还有其他东西能为我们指出杀手的方向——你应该再去看一次，圣者。」");
	say();
	gflags[0x005A] = true;
	abort;
labelFunc0885_006E:
	if (!(var0001 == "没有")) goto labelFunc0885_0081;
	message("「你应该再去看一次， 『圣者』 ！」");
	say();
	gflags[0x005A] = true;
	abort;
labelFunc0885_0081:
	goto labelFunc0885_008D;
labelFunc0885_0084:
	message("「那我建议你进去看看，然后再来跟我谈谈。」");
	say();
	gflags[0x005A] = true;
	abort;
labelFunc0885_008D:
	return;
}


