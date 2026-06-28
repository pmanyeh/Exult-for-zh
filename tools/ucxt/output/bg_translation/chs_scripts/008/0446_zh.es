#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func0911 0x911 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func0446 object#(0x446) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	if (!(event == 0x0001)) goto labelFunc0446_0296;
	UI_show_npc_face(0xFFBA, 0x0000);
	var0000 = Func0908();
	var0001 = UI_part_of_day();
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!gflags[0x00DE]) goto labelFunc0446_003C;
	UI_add_answer("签署");
labelFunc0446_003C:
	if (!(!gflags[0x00C7])) goto labelFunc0446_0052;
	message("这是一位可爱、朴实，带着温暖笑容的女性。");
	say();
	message("「你抵达的消息传得真快，圣者！欢迎！」");
	say();
	gflags[0x00C7] = true;
	goto labelFunc0446_005C;
labelFunc0446_0052:
	message("「你好，");
	message(var0000);
	message("，」 Miranda 说。「很高兴再次见到你。」");
	say();
labelFunc0446_005C:
	converse attend labelFunc0446_0291;
	case "姓名" attend labelFunc0446_0072:
	message("「我是 Miranda 。」");
	say();
	UI_remove_answer("姓名");
labelFunc0446_0072:
	case "职业" attend labelFunc0446_008E:
	message("「我在大议会服务。今天我们正在处理一项法案。当我不在城堡里时，我都在忙着照顾一个小孩。」");
	say();
	UI_add_answer(["大议会", "法案", "小孩"]);
labelFunc0446_008E:
	case "大议会" attend labelFunc0446_00A8:
	message("「大议会协助不列颠王制订不列颠尼亚的法律。我很荣幸能成为在议会服务的三名女性之一。」");
	say();
	UI_add_answer("女性");
	UI_remove_answer("大议会");
labelFunc0446_00A8:
	case "女性" attend labelFunc0446_00C2:
	message("「我特别关注女性的义务和特权，以及她们在这片土地上可获得的机会。总体而言，我们的历史对女性很宽容，但仍有改进的空间。」");
	say();
	UI_add_answer("改进");
	UI_remove_answer("女性");
labelFunc0446_00C2:
	case "改进" attend labelFunc0446_00D5:
	message("「首先，应该要有更多女性能担任公职。而且我个人希望能摆脱那些英雄奇幻画作中衣着暴露的女性。」");
	say();
	UI_remove_answer("改进");
labelFunc0446_00D5:
	case "小孩" attend labelFunc0446_0156:
	message("Miranda 微笑着。「是的，我儿子的名字是 Max 。");
	say();
	if (!((var0001 == 0x0002) || ((var0001 == 0x0003) || ((var0001 == 0x0004) || (var0001 == 0x0005))))) goto labelFunc0446_010A;
	message("「他可能在皇家育婴室。");
	say();
	goto labelFunc0446_0147;
labelFunc0446_010A:
	var0002 = Func08F7(0xFFE0);
	if (!var0002) goto labelFunc0446_0143;
	message("「他就在这里！Max ，跟圣者打声招呼。」*");
	say();
	UI_show_npc_face(0xFFE0, 0x0000);
	message("「嗨。我是个有趣的男孩！」*");
	say();
	UI_remove_npc_face(0xFFE0);
	UI_show_npc_face(0xFFBA, 0x0000);
	message("「他相当早熟。");
	say();
	goto labelFunc0446_0147;
labelFunc0446_0143:
	message("「我不知道他可能在哪里……");
	say();
labelFunc0446_0147:
	message("「他显然遗传了他父亲。也许你见过他？ Raymundo ——皇家剧院的导演。我们相信 Max 长大后会成为一名相当出色的表演者。」");
	say();
	gflags[0x0069] = true;
	UI_remove_answer("小孩");
labelFunc0446_0156:
	case "法案" attend labelFunc0446_0199:
	if (!((var0001 == 0x0002) || ((var0001 == 0x0003) || ((var0001 == 0x0004) || (var0001 == 0x0005))))) goto labelFunc0446_018E;
	message("「 Inwisloklem 和我正在起草一项法案，将在 Cove 附近的 Lock Lake 排放任何废弃物视为非法。那座湖已经被严重污染了。」");
	say();
	UI_add_answer("Cove");
	goto labelFunc0446_0192;
labelFunc0446_018E:
	message("「我想跟你谈谈我们正在起草的新法案。请在正常工作时间来议会厅，我们再谈。」");
	say();
labelFunc0446_0192:
	UI_remove_answer("法案");
labelFunc0446_0199:
	case "Cove" attend labelFunc0446_01FF:
	message("「你要前往 Cove 吗？」");
	say();
	var0003 = Func090A();
	if (!var0003) goto labelFunc0446_01F4;
	message("「那真是个好消息！也许你可以帮我们一个大忙。我们需要将这项法案送到 Cove 的 Lord Heather 那里。他必须阅读它并签署以表示他的批准。我知道你有远比跑腿更重要的事情要做，但如果你能帮忙，我们将不胜感激。你愿意做吗？」");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc0446_01ED;
	message("「太棒了！这是法案。请在签署后把它带回来给我。我们感谢你。」");
	say();
	var0005 = UI_add_party_items(0x0001, 0x031D, 0x0004, 0xFE99, true);
	if (!var0005) goto labelFunc0446_01E6;
	gflags[0x006A] = true;
	goto labelFunc0446_01EA;
labelFunc0446_01E6:
	message("「你的双手太满了，拿不下法案！」");
	say();
labelFunc0446_01EA:
	goto labelFunc0446_01F1;
labelFunc0446_01ED:
	message("「喔。好吧。我们知道你很忙。我们会找其他方法来递送法案。无论如何还是谢谢你。」");
	say();
labelFunc0446_01F1:
	goto labelFunc0446_01F8;
labelFunc0446_01F4:
	message("「你不打算去 Cove 吗？嗯，好吧。别在意。」");
	say();
labelFunc0446_01F8:
	UI_remove_answer("Cove");
labelFunc0446_01FF:
	case "签署" attend labelFunc0446_0283:
	message("「你有让 Lord Heather 签署这份法案吗？」");
	say();
	var0006 = Func090A();
	if (!var0006) goto labelFunc0446_0278;
	message("「太棒了！让我看看。」");
	say();
	if (!gflags[0x00DE]) goto labelFunc0446_0271;
	var0007 = Func0931(0xFE9B, 0x0001, 0x031D, 0x0004, 0xFE99);
	if (!var0007) goto labelFunc0446_026A;
	var0005 = UI_remove_party_items(0x0001, 0x031D, 0x0004, 0xFE99, true);
	if (!var0005) goto labelFunc0446_0263;
	message("「看起来没问题！我们感谢你，圣者！」");
	say();
	Func0911(0x0014);
	goto labelFunc0446_0267;
labelFunc0446_0263:
	message("「等等，它在哪里？你没有带在身上。希望你没有把它弄丢了。你应该去找找看。这是一份重要的文档！」");
	say();
labelFunc0446_0267:
	goto labelFunc0446_026E;
labelFunc0446_026A:
	message("「等等！它在哪里？你没有带在身上。希望你没有把它弄丢了。你应该去找找看。这是一份重要的文档！」");
	say();
labelFunc0446_026E:
	goto labelFunc0446_0275;
labelFunc0446_0271:
	message("「但你还没让这份法案被签署！如果可以的话，请尽快这么做。」");
	say();
labelFunc0446_0275:
	goto labelFunc0446_027C;
labelFunc0446_0278:
	message("「喔。嗯，下次你去 Cove 的时候，也许你可以找时间去见他。」");
	say();
labelFunc0446_027C:
	UI_remove_answer("签署");
labelFunc0446_0283:
	case "告辞" attend labelFunc0446_028E:
	goto labelFunc0446_0291;
labelFunc0446_028E:
	goto labelFunc0446_005C;
labelFunc0446_0291:
	endconv;
	message("「希望我们很快能再见面，圣者。」*");
	say();
labelFunc0446_0296:
	if (!(event == 0x0000)) goto labelFunc0446_02A4;
	Func092E(0xFFBA);
labelFunc0446_02A4:
	return;
}


