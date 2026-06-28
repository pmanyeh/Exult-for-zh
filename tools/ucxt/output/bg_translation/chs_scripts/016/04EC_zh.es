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
	message("Ellen 将手指放在嘴唇上。有一场友谊会 的会议正在进行。*");
	say();
	goto labelFunc04EC_0040;
labelFunc04EC_003C:
	message("「哈啰～很抱歉我这么失礼，但我参加友谊会会议要迟到了。我们能下次再谈吗？」*");
	say();
labelFunc04EC_0040:
	abort;
labelFunc04EC_0041:
	if (!(!gflags[0x0050])) goto labelFunc04EC_0053;
	message("这位看起来很和蔼且热情的女人，笑容满面地说：「我很荣幸能见到圣者。」");
	say();
	gflags[0x0050] = true;
	goto labelFunc04EC_0057;
labelFunc04EC_0053:
	message("「是的，圣者？」Ellen 问。");
	say();
labelFunc04EC_0057:
	UI_add_answer(["姓名", "职业", "谋杀", "告辞"]);
labelFunc04EC_006A:
	converse attend labelFunc04EC_0112;
	case "姓名" attend labelFunc04EC_0080:
	message("「我的名字是 Ellen。」");
	say();
	UI_remove_answer("姓名");
labelFunc04EC_0080:
	case "职业" attend labelFunc04EC_0099:
	message("「我在友谊会分会做簿记工作。我和我的丈夫 Klog 一起工作。」");
	say();
	UI_add_answer(["友谊会", "Klog"]);
labelFunc04EC_0099:
	case "谋杀" attend labelFunc04EC_00AC:
	message("「这很可怕，不是吗？当然，我整晚都和 Klog 在家里。」");
	say();
	UI_remove_answer("谋杀");
labelFunc04EC_00AC:
	case "友谊会" attend labelFunc04EC_00CC:
	message("「也许你可以称之为『自信认知』的理念。我们每晚都在这个分会办公室见面。」");
	say();
	UI_add_answer(["理念", "分会办公室"]);
	UI_remove_answer("友谊会");
labelFunc04EC_00CC:
	case "分会办公室" attend labelFunc04EC_00DF:
	message("「友谊会在全不列颠尼亚都有分会。这是一个非常受欢迎的理念社团。」");
	say();
	UI_remove_answer("分会办公室");
labelFunc04EC_00DF:
	case "Klog" attend labelFunc04EC_00F2:
	message("「我的丈夫 Klog 是位出色的分会领袖。他是所有 Trinsic 成员的灵感来源。」");
	say();
	UI_remove_answer("Klog");
labelFunc04EC_00F2:
	case "理念" attend labelFunc04EC_0104:
	Func091A();
	UI_remove_answer("理念");
labelFunc04EC_0104:
	case "告辞" attend labelFunc04EC_010F:
	goto labelFunc04EC_0112;
labelFunc04EC_010F:
	goto labelFunc04EC_006A;
labelFunc04EC_0112:
	endconv;
	message("「再见。我希望很快能再见到你。」*");
	say();
labelFunc04EC_0117:
	if (!(event == 0x0000)) goto labelFunc04EC_0125;
	Func092E(0xFF14);
labelFunc04EC_0125:
	return;
}


