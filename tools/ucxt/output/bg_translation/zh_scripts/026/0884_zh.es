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
	message("「好。先確認基本資料：Christopher 的職業是什麼？」");
	say();
	var0001 = Func090B(["裁縫", "鐵匠", "雜貨商", "酒保"]);
	if (!(var0001 == "鐵匠")) goto labelFunc0884_003B;
	gflags[0x005E] = true;
	goto labelFunc0884_0040;
labelFunc0884_003B:
	message("「不對。你對案情掌握還不夠，請再去查清楚。」");
	say();
	abort;
labelFunc0884_0040:
	if (!(!gflags[0x005F])) goto labelFunc0884_009F;
	UI_clear_answers();
	message("「你在命案現場發現了什麼？」");
	say();
	var0001 = Func090B(["什麼也沒有", "一具屍體", "一把鑰匙", "一個水桶"]);
	if (!(var0001 == "一把鑰匙")) goto labelFunc0884_0072;
	gflags[0x005F] = true;
labelFunc0884_0072:
	if (!(var0001 == "一具屍體")) goto labelFunc0884_0081;
	message("「屍體我當然知道。我問的是，除此之外，你還發現了什麼？聖者，請你再回現場確認一次。」");
	say();
	abort;
labelFunc0884_0081:
	if (!(var0001 == "一個水桶")) goto labelFunc0884_0090;
	message("「是，水桶裡明顯裝著可憐的 Christopher 的血。但這不是唯一的線索。現場一定還有能指向犯嫌的東西，請你再仔細查一遍。」");
	say();
	abort;
labelFunc0884_0090:
	if (!(var0001 == "什麼也沒有")) goto labelFunc0884_009F;
	message("「什麼也沒有？聖者，這種說法很難令人採信。請你回去重新勘查。」");
	say();
	abort;
labelFunc0884_009F:
	if (!(!gflags[0x0060])) goto labelFunc0884_00D9;
	UI_clear_answers();
	message("「那把鑰匙，可以開啟什麼？」");
	say();
	var0001 = Func090B(["一本書", "一扇門", "一扇陷阱門", "一個箱子"]);
	if (!(var0001 == "一個箱子")) goto labelFunc0884_00D4;
	gflags[0x0060] = true;
	goto labelFunc0884_00D9;
labelFunc0884_00D4:
	message("「我不認為這個答案符合現場狀況。」");
	say();
	abort;
labelFunc0884_00D9:
	if (!(!gflags[0x0061])) goto labelFunc0884_0152;
	UI_clear_answers();
	message("「你在箱子裡查到了什麼？」");
	say();
	var0001 = Func090B(["金幣", "一枚徽章", "一張卷軸", "以上皆非", "以上皆是"]);
	if (!(var0001 == "以上皆是")) goto labelFunc0884_0124;
	UI_clear_answers();
	message("「那麼，你現在是否已經鎖定嫌疑人？」");
	say();
	if (!Func090A()) goto labelFunc0884_011F;
	gflags[0x0061] = true;
	goto labelFunc0884_0124;
labelFunc0884_011F:
	message("「那就繼續蒐集線索。沒有嫌疑人，本案還不能往下辦。」");
	say();
	abort;
labelFunc0884_0124:
	if (!((var0001 == "金幣") || ((var0001 == "一枚徽章") || (var0001 == "一張卷軸")))) goto labelFunc0884_0143;
	message("「嗯。應該不只這些。你可能漏看了東西，請再搜查一次。」");
	say();
	abort;
labelFunc0884_0143:
	if (!(var0001 == "以上皆非")) goto labelFunc0884_0152;
	message("「聽起來你根本沒有確實搜查。」");
	say();
	abort;
labelFunc0884_0152:
	if (!(!gflags[0x0062])) goto labelFunc0884_01A2;
	UI_clear_answers();
	message("「這名犯嫌有什麼明顯特徵？」");
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
	message("「這個說法不足以成立。聖者，請你繼續查證。」");
	say();
	abort;
labelFunc0884_01A2:
	if (!(!gflags[0x0063])) goto labelFunc0884_029B;
	UI_clear_answers();
	message("「嗯。那麼，有沒有掌握這名犯嫌的去向？」");
	say();
	var0002 = ["我不知道", "可能在任何地方", "沒有人看到他"];
	if (!gflags[0x0040]) goto labelFunc0884_01D0;
	var0002 = (var0002 & "皇冠寶石號 (Crown Jewel)");
labelFunc0884_01D0:
	var0004 = Func090B(var0002);
	if (!(var0004 == "皇冠寶石號 (Crown Jewel)")) goto labelFunc0884_0296;
	gflags[0x0063] = true;
	message("鎮長露出滿意的神情。~~「看來你確實有在查。依目前線索判斷，你應該前往不列顛城，追查那名裝著鐵鉤的男子。」");
	say();
	if (!(!gflags[0x0044])) goto labelFunc0884_0228;
	message("「這是賞金的一半。等你證明兇手已經受到應有制裁，剩下的部分再交給你。」");
	say();
	var0005 = UI_add_party_items(0x0064, 0x0284, 0xFE99, 0xFE99, true);
	if (!(!var0005)) goto labelFunc0884_021C;
	message("「你的隊伍人手不足，賞金恐怕帶不走。你晚點再來，我會把金幣交給你。」");
	say();
	gflags[0x0045] = true;
	goto labelFunc0884_0228;
labelFunc0884_021C:
	message("鎮長交給你 100 枚金幣。");
	say();
	gflags[0x0044] = true;
	gflags[0x0045] = false;
labelFunc0884_0228:
	message("「你需要通行口令嗎？」");
	say();
	gflags[0x0042] = true;
	if (!Func090A()) goto labelFunc0884_025A;
	if (!Func0886()) goto labelFunc0884_0252;
	message("「很好。現在我沒有理由再懷疑你就是聖者本人。」");
	say();
	message("「喔，差點漏了。進出城鎮的口令是『Blackbird』。」");
	say();
	gflags[0x003D] = true;
	Func0911(0x0064);
	abort;
	goto labelFunc0884_0257;
labelFunc0884_0252:
	message("「嗯。很遺憾，我仍無法確認你是否真的是聖者。基於職務，我不能把口令交給你。請見諒。」");
	say();
	abort;
labelFunc0884_0257:
	goto labelFunc0884_0293;
labelFunc0884_025A:
	message("「那好。你應該知道，沒有口令就不能自由進出本城。我再問一次：你要知道口令嗎？」");
	say();
	if (!Func090A()) goto labelFunc0884_0288;
	if (!Func0886()) goto labelFunc0884_0280;
	message("「很好。現在我沒有理由再懷疑你就是聖者本人。」");
	say();
	message("「喔，差點漏了。進出城鎮的口令是『Blackbird』。」");
	say();
	gflags[0x003D] = true;
	Func0911(0x0064);
	abort;
	goto labelFunc0884_0285;
labelFunc0884_0280:
	message("「嗯。很遺憾，我仍無法確認你是否真的是聖者。基於職務，我不能把口令交給你。請見諒。」");
	say();
	abort;
labelFunc0884_0285:
	goto labelFunc0884_0293;
labelFunc0884_0288:
	message("「那好，");
	message(var0000);
	message("。感謝你協助本案調查。」");
	say();
	abort;
labelFunc0884_0293:
	goto labelFunc0884_029B;
labelFunc0884_0296:
	message("「嗯。你還需要繼續調查。務必去找 Gilberto 和 Johnson 談談，仔細問清楚。」");
	say();
	abort;
labelFunc0884_029B:
	return;
}
