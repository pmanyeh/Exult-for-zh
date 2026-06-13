#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern var Func090B 0x90B (var var0000);

void Func0885 0x885 ()
{
	var var0000;
	var var0001;

	if (!Func090A()) goto labelFunc0885_0084;
	message("「你找到了什麼？」");
	say();
	UI_clear_answers();
	var0000 = ["沒有", "一個水桶", "一具屍體"];
	if (!gflags[0x003C]) goto labelFunc0885_002D;
	var0000 = (var0000 & "一把鑰匙");
labelFunc0885_002D:
	var0001 = Func090B(var0000);
	if (!(var0001 == "一把鑰匙")) goto labelFunc0885_0048;
	message("「嗯，一把鑰匙。也許如果你去問 Christopher 的兒子，他可能會知道這是做什麼用的。」");
	say();
	gflags[0x0048] = true;
labelFunc0885_0048:
	if (!(var0001 == "一具屍體")) goto labelFunc0885_005B;
	message("「這我知道！你『還』找到了什麼？你應該再去看一次，聖者！」");
	say();
	gflags[0x005A] = true;
	abort;
labelFunc0885_005B:
	if (!(var0001 == "一個水桶")) goto labelFunc0885_006E;
	message("「是的，顯然裡面裝滿了可憐的 Christopher 的血。但肯定還有其他東西能為我們指出殺手的方向——你應該再去看一次，聖者。」");
	say();
	gflags[0x005A] = true;
	abort;
labelFunc0885_006E:
	if (!(var0001 == "沒有")) goto labelFunc0885_0081;
	message("「你應該再去看一次， 『聖者』 ！」");
	say();
	gflags[0x005A] = true;
	abort;
labelFunc0885_0081:
	goto labelFunc0885_008D;
labelFunc0885_0084:
	message("「那我建議你進去看看，然後再來跟我談談。」");
	say();
	gflags[0x005A] = true;
	abort;
labelFunc0885_008D:
	return;
}


