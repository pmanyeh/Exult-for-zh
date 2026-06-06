#game "blackgate"
// externs
extern var Func08FC 0x8FC (var var0000, var var0001);
extern void Func091A 0x91A ();
extern void Func092E 0x92E (var var0000);

void Func04EC object#(0x4EC) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0001)) goto labelFunc04EC_0117;
	UI_show_npc_face(0xFF14, 0x0000);
	var0000 = UI_part_of_day();
	if (!(var0000 == 0x0007)) goto labelFunc04EC_0041;
	var0001 = Func08FC(0xFF14, 0xFFF0);
	if (!var0001) goto labelFunc04EC_003C;
	message("Ellen 將手指放在唇邊。友誼會的會議正在進行中。*");
	say();
	goto labelFunc04EC_0040;
labelFunc04EC_003C:
	message("「你好。很抱歉我這麼不禮貌，但我參加友誼會的會議遲到了。我們可以改天再談嗎？」");
	say();
labelFunc04EC_0040:
	abort;
labelFunc04EC_0041:
	if (!(!gflags[0x0050])) goto labelFunc04EC_0053;
	message("這是一位看起來和藹可親的女人。「我很榮幸能見到聖者。」她笑容滿面地說。");
	say();
	gflags[0x0050] = true;
	goto labelFunc04EC_0057;
labelFunc04EC_0053:
	message("「什麼事，聖者？」 Ellen 問道。");
	say();
labelFunc04EC_0057:
	UI_add_answer(["姓名", "職業", "謀殺", "告辭"]);
labelFunc04EC_006A:
	converse attend labelFunc04EC_0112;
	case "姓名" attend labelFunc04EC_0080:
	message("「我的名字叫 Ellen。」");
	say();
	UI_remove_answer("姓名");
labelFunc04EC_0080:
	case "職業" attend labelFunc04EC_0099:
	message("「我在友誼會分會做簿記工作。我和我丈夫 Klog 一起工作。」");
	say();
	UI_add_answer(["友誼會", "Klog"]);
labelFunc04EC_0099:
	case "謀殺" attend labelFunc04EC_00AC:
	message("「那真是太可怕了，不是嗎？當然，我整晚都和 Klog 待在家裡。」");
	say();
	UI_remove_answer("謀殺");
labelFunc04EC_00AC:
	case "友誼會" attend labelFunc04EC_00CC:
	message("「也許你可以稱之為一種『自信的哲學』。我們每天晚上都在這裡的分會辦公室開會。」");
	say();
	UI_add_answer(["哲學", "分會辦公室"]);
	UI_remove_answer("友誼會");
labelFunc04EC_00CC:
	case "分會辦公室" attend labelFunc04EC_00DF:
	message("「友誼會在整個 Britannia 都有分會。它是一個非常受歡迎的哲學協會。」");
	say();
	UI_remove_answer("分會辦公室");
labelFunc04EC_00DF:
	case "Klog" attend labelFunc04EC_00F2:
	message("「我丈夫 Klog 是一位很棒的分會領袖。他是 Trinsic 所有成員的榜樣。」");
	say();
	UI_remove_answer("Klog");
labelFunc04EC_00F2:
	case "哲學" attend labelFunc04EC_0104:
	Func091A();
	UI_remove_answer("哲學");
labelFunc04EC_0104:
	case "告辭" attend labelFunc04EC_010F:
	goto labelFunc04EC_0112;
labelFunc04EC_010F:
	goto labelFunc04EC_006A;
labelFunc04EC_0112:
	endconv;
	message("「再見。希望很快能再見到你。」");
	say();
labelFunc04EC_0117:
	if (!(event == 0x0000)) goto labelFunc04EC_0125;
	Func092E(0xFF14);
labelFunc04EC_0125:
	return;
}
