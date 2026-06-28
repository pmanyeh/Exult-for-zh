#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func04CA object#(0x4CA) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc04CA_01FF;
	UI_show_npc_face(0xFF36, 0x0000);
	var0000 = UI_wearing_fellowship();
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!gflags[0x0243]) goto labelFunc04CA_0036;
	UI_add_answer("Elizabeth 与 Abraham");
labelFunc04CA_0036:
	if (!(!gflags[0x0273])) goto labelFunc04CA_0048;
	message("你看到一个年轻、晒黑、肌肉发达、英俊的男人，散发出活力与和蔼。");
	say();
	gflags[0x0273] = true;
	goto labelFunc04CA_004C;
labelFunc04CA_0048:
	message("「是吗？」Ian 问道。");
	say();
labelFunc04CA_004C:
	converse attend labelFunc04CA_01FA;
	case "姓名" attend labelFunc04CA_0062:
	message("「我是 Ian 。」");
	say();
	UI_remove_answer("姓名");
labelFunc04CA_0062:
	case "职业" attend labelFunc04CA_007B:
	message("「我是这个友谊会成员冥想静修处的主任。」");
	say();
	UI_add_answer(["管理人", "静修处"]);
labelFunc04CA_007B:
	case "管理人" attend labelFunc04CA_009B:
	message("「我管理各项活动，并带领新进成员进行冥想练习。」");
	say();
	UI_remove_answer("管理人");
	UI_add_answer(["活动", "练习"]);
labelFunc04CA_009B:
	case "活动" attend labelFunc04CA_00AE:
	message("「静修处的活动包含理念训练和研究。」");
	say();
	UI_remove_answer("活动");
labelFunc04CA_00AE:
	case "练习" attend labelFunc04CA_00C8:
	message("「成员们必须成长，去聆听并理解那引导他们走上内在力量道路的声音。冥想练习加速了这个过程。」");
	say();
	UI_remove_answer("练习");
	UI_add_answer("声音");
labelFunc04CA_00C8:
	case "声音" attend labelFunc04CA_00DB:
	message("「那是人在内心听到的声音。我们都有能力听到它。有些人能轻易地听到，不需要来参加冥想静修处的课程。然而，其他人发现要听到这个声音比较困难。那他们就需要在静修处学习。」");
	say();
	UI_remove_answer("声音");
labelFunc04CA_00DB:
	case "静修处" attend labelFunc04CA_00FB:
	message("「这是由友谊会设立的，让新成员可以参加并了解更多关于我们组织的信息，与自己联系，并帮助他们成为友谊会中更好的兄弟。大部分的活动都在屏障内部进行。」");
	say();
	UI_remove_answer("静修处");
	UI_add_answer(["联系", "屏障"]);
labelFunc04CA_00FB:
	case "联系" attend labelFunc04CA_010E:
	message("「大多数来到友谊会的人，都在与生命中的失败搏斗。他们本质上是在害怕自己。在冥想静修处这里，人们学习去相信自己。他们借由学习如何将友谊会的理念最好地应用在生活上，来创建那份信念。」");
	say();
	UI_remove_answer("联系");
labelFunc04CA_010E:
	case "屏障" attend labelFunc04CA_0128:
	message("「这是为了将非成员挡在外面而设置的。在屏障内部，友谊会成员发现更容易听到他们的内在声音。每位成员都会拿到一把随时可以使用的钥匙。」");
	say();
	UI_remove_answer("屏障");
	UI_add_answer("钥匙");
labelFunc04CA_0128:
	case "钥匙" attend labelFunc04CA_01B4:
	if (!(var0000 && (!gflags[0x0006]))) goto labelFunc04CA_0140;
	message("「啊，但你不是真正的友谊会成员！你假冒佩戴着奖章。我不能让你进去。再见。」*");
	say();
	abort;
labelFunc04CA_0140:
	if (!gflags[0x0006]) goto labelFunc04CA_018D;
	message("「哦，你想和我们一起冥想吗，兄弟？」");
	say();
	if (!Func090A()) goto labelFunc04CA_0186;
	var0001 = UI_add_party_items(0x0001, 0x0281, 0x00F9, 0x0007, false);
	if (!var0001) goto labelFunc04CA_0183;
	message("「那这是你的钥匙。保持快乐！哦，还有一件事。有一个规则必须遵守。」");
	say();
	UI_set_schedule_type(UI_get_npc_object(0xFF36), 0x000B);
	UI_add_answer("规则");
labelFunc04CA_0183:
	goto labelFunc04CA_018A;
labelFunc04CA_0186:
	message("「哦。那我不能给你钥匙。」");
	say();
labelFunc04CA_018A:
	goto labelFunc04CA_01AD;
labelFunc04CA_018D:
	message("「你是友谊会成员吗？」");
	say();
	if (!Func090A()) goto labelFunc04CA_01A0;
	var0002 = "「我不相信你。你";
	goto labelFunc04CA_01A6;
labelFunc04CA_01A0:
	var0002 = "「然后你";
labelFunc04CA_01A6:
	message(var0002);
	message("必须去不列颠城和我们总部的巴特林谈谈。只有他能正式引导你加入友谊会。」");
	say();
labelFunc04CA_01AD:
	UI_remove_answer("钥匙");
labelFunc04CA_01B4:
	case "规则" attend labelFunc04CA_01C7:
	message("「不要进入你在屏障内会发现的洞穴。这个洞穴对参加者是禁止进入的。」");
	say();
	UI_remove_answer("规则");
labelFunc04CA_01C7:
	case "Elizabeth 与 Abraham" attend labelFunc04CA_01EC:
	if (!(!gflags[0x02A8])) goto labelFunc04CA_01E1;
	message("「唉，你刚好错过他们了。我的好朋友 Elizabeth 和 Abraham 刚在这里运送资金。我相信他们已经离开这里去海盗巢穴 (Buccaneer's Den)了。」");
	say();
	gflags[0x0264] = true;
	goto labelFunc04CA_01E5;
labelFunc04CA_01E1:
	message("「我已经有一段时间没见过他们了。」");
	say();
labelFunc04CA_01E5:
	UI_remove_answer("Elizabeth 与 Abraham");
labelFunc04CA_01EC:
	case "告辞" attend labelFunc04CA_01F7:
	goto labelFunc04CA_01FA;
labelFunc04CA_01F7:
	goto labelFunc04CA_004C;
labelFunc04CA_01FA:
	endconv;
	message("「再见。」*");
	say();
labelFunc04CA_01FF:
	if (!(event == 0x0000)) goto labelFunc04CA_020D;
	Func092E(0xFF36);
labelFunc04CA_020D:
	return;
}


