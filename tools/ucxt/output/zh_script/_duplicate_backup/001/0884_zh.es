#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090B 0x90B (var var0000);
extern var Func090A 0x90A ();
extern var Func0886 0x886 ();
extern void Func0911 0x911 (var var0000);

void Func0884 0x884 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	var0000 = Func0909();
	UI_clear_answers();
	if (!(!gflags[0x005E])) goto labelFunc0884_0040;
	message("「很好。Christopher 的職業是什麼？」");
	say();
	var0001 = Func090B(["裁縫", "鐵匠", "雜貨商", "酒保"]);
	if (!(var0001 == "鐵匠")) goto labelFunc0884_003B;
	gflags[0x005E] = true;
	goto labelFunc0884_0040;
labelFunc0884_003B:
	message("「這不對。你應該再多做點功課。」");
	say();
	abort;
labelFunc0884_0040:
	if (!(!gflags[0x005F])) goto labelFunc0884_009F;
	UI_clear_answers();
	message("「你在謀殺現場發現了什麼？」");
	say();
	var0001 = Func090B(["什麼也沒有", "一具屍體", "一把鑰匙", "一個水桶"]);
	if (!(var0001 == "一把鑰匙")) goto labelFunc0884_0072;
	gflags[0x005F] = true;
labelFunc0884_0072:
	if (!(var0001 == "一具屍體")) goto labelFunc0884_0081;
	message("「這我知道！你『還』發現了什麼？你應該再去看一次，聖者！」");
	say();
	abort;
labelFunc0884_0081:
	if (!(var0001 == "一個水桶")) goto labelFunc0884_0090;
	message("「是的，顯然裡面裝滿了可憐的 Christopher 的血。但肯定還有其他東西可以指引我們找到兇手——你應該再去仔細找找，聖者。」");
	say();
	abort;
labelFunc0884_0090:
	if (!(var0001 == "什麼也沒有")) goto labelFunc0884_009F;
	message("「你應該再去看一次，『聖者』！」");
	say();
	abort;
labelFunc0884_009F:
	if (!(!gflags[0x0060])) goto labelFunc0884_00D9;
	UI_clear_answers();
	message("「那把鑰匙可以打開什麼？」");
	say();
	var0001 = Func090B(["一本書", "一扇門", "一扇陷阱門", "一個箱子"]);
	if (!(var0001 == "一個箱子")) goto labelFunc0884_00D4;
	gflags[0x0060] = true;
	goto labelFunc0884_00D9;
labelFunc0884_00D4:
	message("「我不認為那是對的。」");
	say();
	abort;
labelFunc0884_00D9:
	if (!(!gflags[0x0061])) goto labelFunc0884_0152;
	UI_clear_answers();
	message("「你在箱子裡發現了什麼？」");
	say();
	var0001 = Func090B(["金幣", "一枚徽章", "一張卷軸", "以上皆非", "以上皆是"]);
	if (!(var0001 == "以上皆是")) goto labelFunc0884_0124;
	UI_clear_answers();
	message("「你有嫌疑犯了嗎？」");
	say();
	if (!Func090A()) goto labelFunc0884_011F;
	gflags[0x0061] = true;
	goto labelFunc0884_0124;
labelFunc0884_011F:
	message("「那麼，繼續收集情報，直到你找到嫌疑犯為止。」");
	say();
	abort;
labelFunc0884_0124:
	if (!((var0001 == "金幣") || ((var0001 == "一枚徽章") || (var0001 == "一張卷軸")))) goto labelFunc0884_0143;
	message("「嗯。我不相信就只有那些。也許你應該再搜查一次。」");
	say();
	abort;
labelFunc0884_0143:
	if (!(var0001 == "以上皆非")) goto labelFunc0884_0152;
	message("「我相信你根本沒有好好搜查過。」");
	say();
	abort;
labelFunc0884_0152:
	if (!(!gflags[0x0062])) goto labelFunc0884_01A2;
	UI_clear_answers();
	message("「這個惡徒長什麼樣子？」");
	say();
	var0002 = ["我不知道", "疤痕", "木腿", "眼罩"];
	if (!gflags[0x0043]) goto labelFunc0884_0183;
	var0002 = (var0002 & "鐵鉤");
labelFunc0884_0183:
	var0003 = Func090B(var0002);
	if (!(var0003 == "鐵鉤")) goto labelFunc0884_019D;
	gflags[0x0062] = true;
	goto labelFunc0884_01A2;
labelFunc0884_019D:
	message("「這個答案令人不滿意。你必須繼續你的搜查，聖者。」");
	say();
	abort;
labelFunc0884_01A2:
	if (!(!gflags[0x0063])) goto labelFunc0884_029B;
	UI_clear_answers();
	message("「嗯。有任何關於這個惡徒下落的線索嗎？」");
	say();
	var0002 = ["我不知道", "可能在任何地方", "沒有人看到他"];
	if (!gflags[0x0040]) goto labelFunc0884_01D0;
	var0002 = (var0002 & "皇冠寶石號 (Crown Jewel)");
labelFunc0884_01D0:
	var0004 = Func090B(var0002);
	if (!(var0004 == "皇冠寶石號 (Crown Jewel)")) goto labelFunc0884_0296;
	gflags[0x0063] = true;
	message("鎮長顯得很高興。~~「看來你是以真正的熱情在進行調查。我認為你應該去 Britain 看看能不能找到這個裝著鐵鉤的男人。」");
	say();
	if (!(!gflags[0x0044])) goto labelFunc0884_0228;
	message("「這是你一半的賞金。當你證明兇手已經被繩之以法時，你將會得到剩下的部分！」");
	say();
	var0005 = UI_add_party_items(0x0064, 0x0284, 0xFE99, 0xFE99, true);
	if (!(!var0005)) goto labelFunc0884_021C;
	message("「你的同伴不夠多，拿不動你的賞金！你必須稍後再來找我，我會把金幣給你的。」");
	say();
	gflags[0x0045] = true;
	goto labelFunc0884_0228;
labelFunc0884_021C:
	message("鎮長交給你 100 枚金幣。");
	say();
	gflags[0x0044] = true;
	gflags[0x0045] = false;
labelFunc0884_0228:
	message("「你需要通行密碼嗎？」");
	say();
	gflags[0x0042] = true;
	if (!Func090A()) goto labelFunc0884_025A;
	if (!Func0886()) goto labelFunc0884_0252;
	message("「太棒了！我現在毫不懷疑你就是真正的聖者！」");
	say();
	message("「喔——我差點忘了！進出城鎮的密碼是『Blackbird』！」");
	say();
	gflags[0x003D] = true;
	Func0911(0x0064);
	abort;
	goto labelFunc0884_0257;
labelFunc0884_0252:
	message("「嗯。恐怕我仍然對你是否是聖者抱持懷疑。我的公職不允許我把密碼給你。我很抱歉。」");
	say();
	abort;
labelFunc0884_0257:
	goto labelFunc0884_0293;
labelFunc0884_025A:
	message("「那好吧。你知道你必須有密碼才能進出我們的城鎮嗎？我再問一次——你想知道密碼嗎？」");
	say();
	if (!Func090A()) goto labelFunc0884_0288;
	if (!Func0886()) goto labelFunc0884_0280;
	message("「太棒了！我現在毫不懷疑你就是真正的聖者！」");
	say();
	message("「喔——我差點忘了！進出城鎮的密碼是『Blackbird』！」");
	say();
	gflags[0x003D] = true;
	Func0911(0x0064);
	abort;
	goto labelFunc0884_0285;
labelFunc0884_0280:
	message("「嗯。恐怕我仍然對你是否是聖者抱持懷疑。我的公職不允許我把密碼給你。我很抱歉。」");
	say();
	abort;
labelFunc0884_0285:
	goto labelFunc0884_0293;
labelFunc0884_0288:
	message("「那好吧，");
	message(var0000);
	message("。謝謝你的所有幫助。」");
	say();
	abort;
labelFunc0884_0293:
	goto labelFunc0884_029B;
labelFunc0884_0296:
	message("「嗯。我認為你應該繼續調查。一定要和 Gilberto 跟 Johnson 談談。仔細盤問他們。」");
	say();
	abort;
labelFunc0884_029B:
	return;
}
