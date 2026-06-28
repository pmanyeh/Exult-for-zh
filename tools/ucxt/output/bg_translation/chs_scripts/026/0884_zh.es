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
	message("「好。先确认基本数据：Christopher 的职业是什么？」");
	say();
	var0001 = Func090B(["裁缝", "铁匠", "杂货商", "酒保"]);
	if (!(var0001 == "铁匠")) goto labelFunc0884_003B;
	gflags[0x005E] = true;
	goto labelFunc0884_0040;
labelFunc0884_003B:
	message("「不对。你对案情掌握还不够，请再去查清楚。」");
	say();
	abort;
labelFunc0884_0040:
	if (!(!gflags[0x005F])) goto labelFunc0884_009F;
	UI_clear_answers();
	message("「你在命案现场发现了什么？」");
	say();
	var0001 = Func090B(["什么也没有", "一具尸体", "一把钥匙", "一个水桶"]);
	if (!(var0001 == "一把钥匙")) goto labelFunc0884_0072;
	gflags[0x005F] = true;
labelFunc0884_0072:
	if (!(var0001 == "一具尸体")) goto labelFunc0884_0081;
	message("「尸体我当然知道。我问的是，除此之外，你还发现了什么？圣者，请你再回现场确认一次。」");
	say();
	abort;
labelFunc0884_0081:
	if (!(var0001 == "一个水桶")) goto labelFunc0884_0090;
	message("「是，水桶里明显装着可怜的 Christopher 的血。但这不是唯一的线索。现场一定还有能指向犯嫌的东西，请你再仔细查一遍。」");
	say();
	abort;
labelFunc0884_0090:
	if (!(var0001 == "什么也没有")) goto labelFunc0884_009F;
	message("「什么也没有？圣者，这种说法很难令人采信。请你回去重新勘查。」");
	say();
	abort;
labelFunc0884_009F:
	if (!(!gflags[0x0060])) goto labelFunc0884_00D9;
	UI_clear_answers();
	message("「那把钥匙，可以打开什么？」");
	say();
	var0001 = Func090B(["一本书", "一扇门", "一扇陷阱门", "一个箱子"]);
	if (!(var0001 == "一个箱子")) goto labelFunc0884_00D4;
	gflags[0x0060] = true;
	goto labelFunc0884_00D9;
labelFunc0884_00D4:
	message("「我不认为这个答案符合现场状况。」");
	say();
	abort;
labelFunc0884_00D9:
	if (!(!gflags[0x0061])) goto labelFunc0884_0152;
	UI_clear_answers();
	message("「你在箱子里查到了什么？」");
	say();
	var0001 = Func090B(["金币", "一枚徽章", "一张卷轴", "以上皆非", "以上皆是"]);
	if (!(var0001 == "以上皆是")) goto labelFunc0884_0124;
	UI_clear_answers();
	message("「那么，你现在是否已经锁定嫌疑人？」");
	say();
	if (!Func090A()) goto labelFunc0884_011F;
	gflags[0x0061] = true;
	goto labelFunc0884_0124;
labelFunc0884_011F:
	message("「那就继续搜集线索。没有嫌疑人，本案还不能往下办。」");
	say();
	abort;
labelFunc0884_0124:
	if (!((var0001 == "金币") || ((var0001 == "一枚徽章") || (var0001 == "一张卷轴")))) goto labelFunc0884_0143;
	message("「嗯。应该不只这些。你可能漏看了东西，请再搜查一次。」");
	say();
	abort;
labelFunc0884_0143:
	if (!(var0001 == "以上皆非")) goto labelFunc0884_0152;
	message("「听起来你根本没有确实搜查。」");
	say();
	abort;
labelFunc0884_0152:
	if (!(!gflags[0x0062])) goto labelFunc0884_01A2;
	UI_clear_answers();
	message("「这名犯嫌有什么明显特征？」");
	say();
	var0002 = ["我不知道", "疤痕", "木腿", "眼罩"];
	if (!gflags[0x0043]) goto labelFunc0884_0183;
	var0002 = (var0002 & "铁钩");
labelFunc0884_0183:
	var0003 = Func090B(var0002);
	if (!(var0003 == "铁钩")) goto labelFunc0884_019D;
	gflags[0x0062] = true;
	goto labelFunc0884_01A2;
labelFunc0884_019D:
	message("「这个说法不足以成立。圣者，请你继续查证。」");
	say();
	abort;
labelFunc0884_01A2:
	if (!(!gflags[0x0063])) goto labelFunc0884_029B;
	UI_clear_answers();
	message("「嗯。那么，有没有掌握这名犯嫌的去向？」");
	say();
	var0002 = ["我不知道", "可能在任何地方", "没有人看到他"];
	if (!gflags[0x0040]) goto labelFunc0884_01D0;
	var0002 = (var0002 & "皇冠宝石号 (Crown Jewel)");
labelFunc0884_01D0:
	var0004 = Func090B(var0002);
	if (!(var0004 == "皇冠宝石号 (Crown Jewel)")) goto labelFunc0884_0296;
	gflags[0x0063] = true;
	message("镇长露出满意的神情。~~「看来你确实有在查。依目前线索判断，你应该前往不列颠城，追查那名装着铁钩的男子。」");
	say();
	if (!(!gflags[0x0044])) goto labelFunc0884_0228;
	message("「这是赏金的一半。等你证明凶手已经受到应有制裁，剩下的部分再交给你。」");
	say();
	var0005 = UI_add_party_items(0x0064, 0x0284, 0xFE99, 0xFE99, true);
	if (!(!var0005)) goto labelFunc0884_021C;
	message("「你的队伍人手不足，赏金恐怕带不走。你晚点再来，我会把金币交给你。」");
	say();
	gflags[0x0045] = true;
	goto labelFunc0884_0228;
labelFunc0884_021C:
	message("镇长交给你 100 枚金币。");
	say();
	gflags[0x0044] = true;
	gflags[0x0045] = false;
labelFunc0884_0228:
	message("「你需要通行口令吗？」");
	say();
	gflags[0x0042] = true;
	if (!Func090A()) goto labelFunc0884_025A;
	if (!Func0886()) goto labelFunc0884_0252;
	message("「很好。现在我没有理由再怀疑你就是圣者本人。」");
	say();
	message("「喔，差点漏了。进出城镇的口令是『Blackbird』。」");
	say();
	gflags[0x003D] = true;
	Func0911(0x0064);
	abort;
	goto labelFunc0884_0257;
labelFunc0884_0252:
	message("「嗯。很遗憾，我仍无法确认你是否真的是圣者。基于职务，我不能把口令交给你。请见谅。」");
	say();
	abort;
labelFunc0884_0257:
	goto labelFunc0884_0293;
labelFunc0884_025A:
	message("「那好。你应该知道，没有口令就不能自由进出本城。我再问一次：你要知道口令吗？」");
	say();
	if (!Func090A()) goto labelFunc0884_0288;
	if (!Func0886()) goto labelFunc0884_0280;
	message("「很好。现在我没有理由再怀疑你就是圣者本人。」");
	say();
	message("「喔，差点漏了。进出城镇的口令是『Blackbird』。」");
	say();
	gflags[0x003D] = true;
	Func0911(0x0064);
	abort;
	goto labelFunc0884_0285;
labelFunc0884_0280:
	message("「嗯。很遗憾，我仍无法确认你是否真的是圣者。基于职务，我不能把口令交给你。请见谅。」");
	say();
	abort;
labelFunc0884_0285:
	goto labelFunc0884_0293;
labelFunc0884_0288:
	message("「那好，");
	message(var0000);
	message("。感谢你协助本案调查。」");
	say();
	abort;
labelFunc0884_0293:
	goto labelFunc0884_029B;
labelFunc0884_0296:
	message("「嗯。你还需要继续调查。务必去找 Gilberto 和 Johnson 谈谈，仔细问清楚。」");
	say();
	abort;
labelFunc0884_029B:
	return;
}
