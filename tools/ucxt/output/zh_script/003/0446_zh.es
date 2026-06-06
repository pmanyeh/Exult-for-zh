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
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!gflags[0x00DE]) goto labelFunc0446_003C;
	UI_add_answer("簽署");
labelFunc0446_003C:
	if (!(!gflags[0x00C7])) goto labelFunc0446_0052;
	message("這是一位可愛、樸實，帶著溫暖笑容的女性。");
	say();
	message("「你抵達的消息傳得真快，聖者！歡迎！」");
	say();
	gflags[0x00C7] = true;
	goto labelFunc0446_005C;
labelFunc0446_0052:
	message("「你好，");
	message(var0000);
	message("，」 Miranda 說。「很高興再次見到你。」");
	say();
labelFunc0446_005C:
	converse attend labelFunc0446_0291;
	case "姓名" attend labelFunc0446_0072:
	message("「我是 Miranda 。」");
	say();
	UI_remove_answer("姓名");
labelFunc0446_0072:
	case "職業" attend labelFunc0446_008E:
	message("「我在大議會服務。今天我們正在處理一項法案。當我不在城堡裡時，我都在忙著照顧一個小孩。」");
	say();
	UI_add_answer(["大議會", "法案", "小孩"]);
labelFunc0446_008E:
	case "大議會" attend labelFunc0446_00A8:
	message("「大議會協助 Lord British 制訂 Britannia 的法律。我很榮幸能成為在議會服務的三名女性之一。」");
	say();
	UI_add_answer("女性");
	UI_remove_answer("大議會");
labelFunc0446_00A8:
	case "女性" attend labelFunc0446_00C2:
	message("「我特別關注女性的義務和特權，以及她們在這片土地上可獲得的機會。總體而言，我們的歷史對女性很寬容，但仍有改進的空間。」");
	say();
	UI_add_answer("改進");
	UI_remove_answer("女性");
labelFunc0446_00C2:
	case "改進" attend labelFunc0446_00D5:
	message("「首先，應該要有更多女性能擔任公職。而且我個人希望能擺脫那些英雄奇幻畫作中衣著暴露的女性。」");
	say();
	UI_remove_answer("改進");
labelFunc0446_00D5:
	case "小孩" attend labelFunc0446_0156:
	message("Miranda 微笑著。「是的，我兒子的名字是 Max 。");
	say();
	if (!((var0001 == 0x0002) || ((var0001 == 0x0003) || ((var0001 == 0x0004) || (var0001 == 0x0005))))) goto labelFunc0446_010A;
	message("「他可能在皇家育嬰室。");
	say();
	goto labelFunc0446_0147;
labelFunc0446_010A:
	var0002 = Func08F7(0xFFE0);
	if (!var0002) goto labelFunc0446_0143;
	message("「他就在這裡！Max ，跟聖者打聲招呼。」*");
	say();
	UI_show_npc_face(0xFFE0, 0x0000);
	message("「嗨。我是個有趣的男孩！」*");
	say();
	UI_remove_npc_face(0xFFE0);
	UI_show_npc_face(0xFFBA, 0x0000);
	message("「他相當早熟。");
	say();
	goto labelFunc0446_0147;
labelFunc0446_0143:
	message("「我不知道他可能在哪裡……");
	say();
labelFunc0446_0147:
	message("「他顯然遺傳了他父親。也許你見過他？ Raymundo ——皇家劇院的導演。我們相信 Max 長大後會成為一名相當出色的表演者。」");
	say();
	gflags[0x0069] = true;
	UI_remove_answer("小孩");
labelFunc0446_0156:
	case "法案" attend labelFunc0446_0199:
	if (!((var0001 == 0x0002) || ((var0001 == 0x0003) || ((var0001 == 0x0004) || (var0001 == 0x0005))))) goto labelFunc0446_018E;
	message("「 Inwisloklem 和我正在起草一項法案，將在 Cove 附近的 Lock Lake 排放任何廢棄物視為非法。那座湖已經被嚴重污染了。」");
	say();
	UI_add_answer("Cove");
	goto labelFunc0446_0192;
labelFunc0446_018E:
	message("「我想跟你談談我們正在起草的新法案。請在正常工作時間來議會廳，我們再談。」");
	say();
labelFunc0446_0192:
	UI_remove_answer("法案");
labelFunc0446_0199:
	case "Cove" attend labelFunc0446_01FF:
	message("「你要前往 Cove 嗎？」");
	say();
	var0003 = Func090A();
	if (!var0003) goto labelFunc0446_01F4;
	message("「那真是個好消息！也許你可以幫我們一個大忙。我們需要將這項法案送到 Cove 的 Lord Heather 那裡。他必須閱讀它並簽署以表示他的批准。我知道你有遠比跑腿更重要的事情要做，但如果你能幫忙，我們將不勝感激。你願意做嗎？」");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc0446_01ED;
	message("「太棒了！這是法案。請在簽署後把它帶回來給我。我們感謝你。」");
	say();
	var0005 = UI_add_party_items(0x0001, 0x031D, 0x0004, 0xFE99, true);
	if (!var0005) goto labelFunc0446_01E6;
	gflags[0x006A] = true;
	goto labelFunc0446_01EA;
labelFunc0446_01E6:
	message("「你的雙手太滿了，拿不下法案！」");
	say();
labelFunc0446_01EA:
	goto labelFunc0446_01F1;
labelFunc0446_01ED:
	message("「喔。好吧。我們知道你很忙。我們會找其他方法來遞送法案。無論如何還是謝謝你。」");
	say();
labelFunc0446_01F1:
	goto labelFunc0446_01F8;
labelFunc0446_01F4:
	message("「你不打算去 Cove 嗎？嗯，好吧。別在意。」");
	say();
labelFunc0446_01F8:
	UI_remove_answer("Cove");
labelFunc0446_01FF:
	case "簽署" attend labelFunc0446_0283:
	message("「你有讓 Lord Heather 簽署這份法案嗎？」");
	say();
	var0006 = Func090A();
	if (!var0006) goto labelFunc0446_0278;
	message("「太棒了！讓我看看。」");
	say();
	if (!gflags[0x00DE]) goto labelFunc0446_0271;
	var0007 = Func0931(0xFE9B, 0x0001, 0x031D, 0x0004, 0xFE99);
	if (!var0007) goto labelFunc0446_026A;
	var0005 = UI_remove_party_items(0x0001, 0x031D, 0x0004, 0xFE99, true);
	if (!var0005) goto labelFunc0446_0263;
	message("「看起來沒問題！我們感謝你，聖者！」");
	say();
	Func0911(0x0014);
	goto labelFunc0446_0267;
labelFunc0446_0263:
	message("「等等，它在哪裡？你沒有帶在身上。希望你沒有把它弄丟了。你應該去找找看。這是一份重要的文件！」");
	say();
labelFunc0446_0267:
	goto labelFunc0446_026E;
labelFunc0446_026A:
	message("「等等！它在哪裡？你沒有帶在身上。希望你沒有把它弄丟了。你應該去找找看。這是一份重要的文件！」");
	say();
labelFunc0446_026E:
	goto labelFunc0446_0275;
labelFunc0446_0271:
	message("「但你還沒讓這份法案被簽署！如果可以的話，請盡快這麼做。」");
	say();
labelFunc0446_0275:
	goto labelFunc0446_027C;
labelFunc0446_0278:
	message("「喔。嗯，下次你去 Cove 的時候，也許你可以找時間去見他。」");
	say();
labelFunc0446_027C:
	UI_remove_answer("簽署");
labelFunc0446_0283:
	case "告辭" attend labelFunc0446_028E:
	goto labelFunc0446_0291;
labelFunc0446_028E:
	goto labelFunc0446_005C;
labelFunc0446_0291:
	endconv;
	message("「希望我們很快能再見面，聖者。」*");
	say();
labelFunc0446_0296:
	if (!(event == 0x0000)) goto labelFunc0446_02A4;
	Func092E(0xFFBA);
labelFunc0446_02A4:
	return;
}


