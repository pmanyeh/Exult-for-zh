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
	message("Ellen 將手指放在嘴唇上。有一場友誼會 的會議正在進行。*");
	say();
	goto labelFunc04EC_0040;
labelFunc04EC_003C:
	message("「哈囉～很抱歉我這麼失禮，但我參加友誼會會議要遲到了。我們能下次再談嗎？」*");
	say();
labelFunc04EC_0040:
	abort;
labelFunc04EC_0041:
	if (!(!gflags[0x0050])) goto labelFunc04EC_0053;
	message("這位看起來很和藹且熱情的女人，笑容滿面地說：「我很榮幸能見到聖者。」");
	say();
	gflags[0x0050] = true;
	goto labelFunc04EC_0057;
labelFunc04EC_0053:
	message("「是的，聖者？」Ellen 問。");
	say();
labelFunc04EC_0057:
	UI_add_answer(["姓名", "職業", "謀殺", "告辭"]);
labelFunc04EC_006A:
	converse attend labelFunc04EC_0112;
	case "姓名" attend labelFunc04EC_0080:
	message("「我的名字是 Ellen。」");
	say();
	UI_remove_answer("姓名");
labelFunc04EC_0080:
	case "職業" attend labelFunc04EC_0099:
	message("「我在友誼會分會做簿記工作。我和我的丈夫 Klog 一起工作。」");
	say();
	UI_add_answer(["友誼會", "Klog"]);
labelFunc04EC_0099:
	case "謀殺" attend labelFunc04EC_00AC:
	message("「這很可怕，不是嗎？當然，我整晚都和 Klog 在家裡。」");
	say();
	UI_remove_answer("謀殺");
labelFunc04EC_00AC:
	case "友誼會" attend labelFunc04EC_00CC:
	message("「也許你可以稱之為『自信認知』的理念。我們每晚都在這個分會辦公室見面。」");
	say();
	UI_add_answer(["理念", "分會辦公室"]);
	UI_remove_answer("友誼會");
labelFunc04EC_00CC:
	case "分會辦公室" attend labelFunc04EC_00DF:
	message("「友誼會在全 Britannia 都有分會。這是一個非常受歡迎的理念社團。」");
	say();
	UI_remove_answer("分會辦公室");
labelFunc04EC_00DF:
	case "Klog" attend labelFunc04EC_00F2:
	message("「我的丈夫 Klog 是位出色的分會領袖。他是所有 Trinsic 成員的靈感來源。」");
	say();
	UI_remove_answer("Klog");
labelFunc04EC_00F2:
	case "理念" attend labelFunc04EC_0104:
	Func091A();
	UI_remove_answer("理念");
labelFunc04EC_0104:
	case "告辭" attend labelFunc04EC_010F:
	goto labelFunc04EC_0112;
labelFunc04EC_010F:
	goto labelFunc04EC_006A;
labelFunc04EC_0112:
	endconv;
	message("「再見。我希望很快能再見到你。」*");
	say();
labelFunc04EC_0117:
	if (!(event == 0x0000)) goto labelFunc04EC_0125;
	Func092E(0xFF14);
labelFunc04EC_0125:
	return;
}


