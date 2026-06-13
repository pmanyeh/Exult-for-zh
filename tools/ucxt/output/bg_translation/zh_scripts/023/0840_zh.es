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
	var0000 = Func090B(["做好事", "沒有答案", "致力合一", "擁有信念", "我不知道"]);
	if (!(var0000 == "沒有答案")) goto labelFunc0840_0099;
	message("賢者笑著說：「你已經開始了你的啟蒙之旅。正如你所聽到的，並非所有事情都如老師所教導的那樣。這真是遺憾。現在我猜你想借那本筆記本了吧？」");
	say();
	var0001 = Func090A();
	if (!var0001) goto labelFunc0840_0091;
	message("「很好。你保證會歸還我的筆記本嗎？」");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc0840_0089;
	if (!UI_count_objects(0xFE9B, 0x0281, 0x00FE, 0xFE99)) goto labelFunc0840_0060;
	message("「那就去找吧！你有鑰匙！」");
	say();
	goto labelFunc0840_0085;
labelFunc0840_0060:
	var0003 = UI_add_party_items(0x0001, 0x0281, 0x00FE, 0xFE99, false);
	if (!var0003) goto labelFunc0840_0081;
	message("「很好。我指望你親自把它還給我。如果你做不到的話，誰知道會有什麼不幸降臨在你身上。為了給你更多的誘因，如果你安全地把它還給我，我也許會給你其他可以幫助你完成任務的東西。~~這是我的儲藏室鑰匙，在南邊的第一棟建築。」他狡黠地笑了笑。「你必須自己找出尋找筆記本的方法！」");
	say();
	goto labelFunc0840_0085;
labelFunc0840_0081:
	message("「你沒有足夠的空間來拿我的鑰匙！卸下你的行李，我們再試一次！」*");
	say();
labelFunc0840_0085:
	abort;
	goto labelFunc0840_008E;
labelFunc0840_0089:
	message("「那我就不能讓你借這本筆記本了！」");
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
	message("賢者皺著眉頭：「那是不正確的。去尋找真正的答案吧。」*");
	say();
	abort;
labelFunc0840_009E:
	UI_pop_answers();
	return;
}


