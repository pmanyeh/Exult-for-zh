#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func08A2 0x8A2 (var var0000, var var0001);
extern void Func092E 0x92E (var var0000);

void Func049F object#(0x49F) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc049F_0120;
	UI_show_npc_face(0xFF61, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = UI_part_of_day();
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x0201])) goto labelFunc049F_0047;
	message("你看到一位举止知性的年轻女子。");
	say();
	gflags[0x0201] = true;
	goto labelFunc049F_0051;
labelFunc049F_0047:
	message("「你好，");
	message(var0000);
	message("。像往常一样，我有很多事要做。不过，如果有必要的话，我可以为你腾出一点时间。」");
	say();
labelFunc049F_0051:
	converse attend labelFunc049F_0115;
	case "姓名" attend labelFunc049F_006D:
	message("「我是 Jillian，");
	message(var0001);
	message("。」");
	say();
	UI_remove_answer("姓名");
labelFunc049F_006D:
	case "职业" attend labelFunc049F_0099:
	message("「我是一名学者，");
	message(var0001);
	message("。我也在这里辅导并训练那些在 Moonglow 寻求知识的人。」");
	say();
	UI_add_answer(["Moonglow", "辅导"]);
	if (!gflags[0x01F6]) goto labelFunc049F_0099;
	UI_add_answer("东北海域");
labelFunc049F_0099:
	case "Moonglow" attend labelFunc049F_00AC:
	message("「这座城镇几乎占据了同名的整座岛屿。这座岛位于不列颠城城的正东方，稍微偏南几度。」");
	say();
	UI_remove_answer("Moonglow");
labelFunc049F_00AC:
	case "东北海域" attend labelFunc049F_00BF:
	message("「很久以前，有一块小大陆——其实是一座岛——叫做 Ambrosia。然而，陨石击中了它，摧毁了它的主要城市。这座岛就位于东北海域。我想，它的遗迹应该还深埋在废墟之下。」");
	say();
	UI_remove_answer("东北海域");
labelFunc049F_00BF:
	case "辅导" attend labelFunc049F_0107:
	var0002 = UI_part_of_day();
	if (!((var0002 >= 0x0003) || (var0002 <= 0x0006))) goto labelFunc049F_0103;
	message("「我的收费是每次训练 35 枚金币。你愿意支付吗？」");
	say();
	if (!Func090A()) goto labelFunc049F_00FC;
	Func08A2([0x0006, 0x0002], 0x0023);
	goto labelFunc049F_0100;
labelFunc049F_00FC:
	message("「那么我真的该回去继续我的研究了。」");
	say();
labelFunc049F_0100:
	goto labelFunc049F_0107;
labelFunc049F_0103:
	message("「比较好的训练时间是我在书房里的时候。」");
	say();
labelFunc049F_0107:
	case "告辞" attend labelFunc049F_0112:
	goto labelFunc049F_0115;
labelFunc049F_0112:
	goto labelFunc049F_0051;
labelFunc049F_0115:
	endconv;
	message("「保重，");
	message(var0000);
	message("，」她说着，回到了之前的活动中。*");
	say();
labelFunc049F_0120:
	if (!(event == 0x0000)) goto labelFunc049F_012E;
	Func092E(0xFF61);
labelFunc049F_012E:
	return;
}


