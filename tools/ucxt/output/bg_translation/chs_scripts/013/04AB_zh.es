#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern void Func0919 0x919 ();
extern void Func0911 0x911 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func04AB object#(0x4AB) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;

	if (!(event == 0x0001)) goto labelFunc04AB_0340;
	UI_show_npc_face(0xFF55, 0x0000);
	var0000 = Func0909();
	var0001 = UI_wearing_fellowship();
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!gflags[0x021C]) goto labelFunc04AB_003C;
	UI_add_answer("Tobias");
labelFunc04AB_003C:
	var0002 = Func0931(0xFE9B, 0x0001, 0x0289, 0xFE99, 0x0001);
	if (!var0002) goto labelFunc04AB_005E;
	UI_add_answer("找到毒液");
labelFunc04AB_005E:
	if (!(!gflags[0x0224])) goto labelFunc04AB_0070;
	message("你看到一个开朗的年轻人向你友善地打招呼。");
	say();
	gflags[0x0224] = true;
	goto labelFunc04AB_007A;
labelFunc04AB_0070:
	message("「祝你有愉快的一天，");
	message(var0000);
	message("。」Garritt 说道。");
	say();
labelFunc04AB_007A:
	converse attend labelFunc04AB_0327;
	case "姓名" attend labelFunc04AB_009D:
	message("「我是 Garritt，Feridwyn 和 Brita 的儿子。」");
	say();
	UI_add_answer(["Feridwyn", "Brita"]);
	UI_remove_answer("姓名");
labelFunc04AB_009D:
	case "职业" attend labelFunc04AB_00B9:
	message("「我还太小，无法学习自己的手艺，但我确实协助我的父母经营庇护所。我希望有一天能成为友谊会的顾问。或者是专业的排笛手。」");
	say();
	UI_add_answer(["庇护所", "友谊会", "排笛"]);
labelFunc04AB_00B9:
	case "Feridwyn" attend labelFunc04AB_00DC:
	message("「我父亲为友谊会工作，帮助 Paws 这里的穷人。他试图招募他们，但大多数人都拒绝了。」");
	say();
	UI_remove_answer("Feridwyn");
	UI_add_answer(["Paws", "招募", "穷人"]);
labelFunc04AB_00DC:
	case "Paws" attend labelFunc04AB_010F:
	message("「其实，我不太喜欢这个城镇。这里的人都很穷，和我同年纪的只有 Tobias。」");
	say();
	if (!(!gflags[0x0218])) goto labelFunc04AB_00F3;
	message("「而且，」他补充道，「这里有个小偷。」");
	say();
labelFunc04AB_00F3:
	UI_remove_answer("Paws");
	UI_add_answer("Tobias");
	if (!(!gflags[0x0218])) goto labelFunc04AB_010F;
	UI_add_answer("小偷");
labelFunc04AB_010F:
	case "排笛" attend labelFunc04AB_0122:
	message("「我从小就开始吹排笛了。如果我自己说的话，我现在吹得满好的！我把笛子放在床边，每天睡前都会练习！」");
	say();
	UI_remove_answer("排笛");
labelFunc04AB_0122:
	case "Tobias" attend labelFunc04AB_0150:
	if (!gflags[0x0218]) goto labelFunc04AB_0137;
	message("「我可能没有说出关于 Tobias 偷毒液的真相，但我知道他不怀好意。他会有坏下场的，你等着看吧！」");
	say();
	goto labelFunc04AB_0149;
labelFunc04AB_0137:
	if (!(!gflags[0x021C])) goto labelFunc04AB_0145;
	message("「他和他的母亲拒绝友谊会。他们既无知又愚蠢，我不喜欢他们。」");
	say();
	goto labelFunc04AB_0149;
labelFunc04AB_0145:
	message("「我已经说过一千次了。Tobias 性格软弱！他和他的母亲很穷是因为他们很懒惰。现在证明我是对的，因为 Tobias 是个小偷。一个被抓住的小偷！」");
	say();
labelFunc04AB_0149:
	UI_remove_answer("Tobias");
labelFunc04AB_0150:
	case "招募" attend labelFunc04AB_0163:
	message("「我父亲曾经是不列颠城的首席招募员，直到他们把他调来这里。我曾听他对母亲说，友谊会在这里是浪费时间。」");
	say();
	UI_remove_answer("招募");
labelFunc04AB_0163:
	case "穷人" attend labelFunc04AB_017D:
	message("「我父亲说穷人拒绝友谊会，是因为内在力量的三位一体需要坚强的品格。」");
	say();
	UI_remove_answer("穷人");
	UI_add_answer("品格");
labelFunc04AB_017D:
	case "品格" attend labelFunc04AB_01B4:
	message("「我父亲说穷人品格软弱，这就是他们贫穷的原因。他们不必这样。他们只是太懒得工作了。你同意吗？」");
	say();
	var0003 = Func090A();
	if (!var0003) goto labelFunc04AB_019C;
	message("「我本来不太确定，但既然我父亲这么说，那一定是真的。」");
	say();
	goto labelFunc04AB_01AD;
labelFunc04AB_019C:
	if (!var0001) goto labelFunc04AB_01A9;
	message("「哼。作为一个友谊会成员，你缺乏认知。你不了解友谊会的教义。」");
	say();
	goto labelFunc04AB_01AD;
labelFunc04AB_01A9:
	message("「那么你也必定是个品格软弱的人。」");
	say();
labelFunc04AB_01AD:
	UI_remove_answer("品格");
labelFunc04AB_01B4:
	case "Brita" attend labelFunc04AB_01C7:
	message("「喔，她只是我的母亲。我父亲叫她做什么，她就做什么。」");
	say();
	UI_remove_answer("Brita");
labelFunc04AB_01C7:
	case "庇护所" attend labelFunc04AB_01DA:
	message("「如果你想住在庇护所里，有足够的床位可供使用，」他用居高临下的语气说道。");
	say();
	UI_remove_answer("庇护所");
labelFunc04AB_01DA:
	case "友谊会" attend labelFunc04AB_0204:
	if (!var0001) goto labelFunc04AB_01EF;
	message("「我是一名成员，我很自豪地说我也为他们招募。」");
	say();
	goto labelFunc04AB_01FD;
labelFunc04AB_01EF:
	message("「哦，我可以告诉你关于我们所有你需要知道的事！」");
	say();
	Func0919();
	UI_add_answer("理念");
labelFunc04AB_01FD:
	UI_remove_answer("友谊会");
labelFunc04AB_0204:
	case "理念" attend labelFunc04AB_0232:
	message("「谈到我们的理念，我也相当了解。我们遵循内在力量的三位一体，不让个人的失败阻碍我们或拖累我们。」");
	say();
	message("「你想加入吗？」");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc04AB_0227;
	message("「我又招到一个了！」他兴高采烈地说。「你必须立刻和我父亲谈谈！」");
	say();
	goto labelFunc04AB_022B;
labelFunc04AB_0227:
	message("「那就先考虑一下吧。」");
	say();
labelFunc04AB_022B:
	UI_remove_answer("理念");
labelFunc04AB_0232:
	case "找到毒液" attend labelFunc04AB_025C:
	Func0911(0x0096);
	message("「你发现我了！是的，是我把毒液栽赃给 Tobias 的。他是罪有应得！我求求你，请不要告诉我父母！」");
	say();
	gflags[0x0218] = true;
	UI_add_answer(["栽赃", "父母"]);
	UI_remove_answer("找到毒液");
labelFunc04AB_025C:
	case "栽赃" attend labelFunc04AB_0276:
	message("「我从 Morfin 那里偷了毒液，这样我就可以把责任推给 Tobias。」");
	say();
	UI_add_answer("Morfin");
	UI_remove_answer("栽赃");
labelFunc04AB_0276:
	case "Morfin" attend labelFunc04AB_029A:
	message("「我不知道 Morfin 为什么有那东西，也不知道他用来做什么。我只知道它很有价值，如果被偷了会让每个人都担心。」");
	say();
	message("Garritt 避开了你的目光。你本能地知道他没有说实话，而且很可能正在使用毒液。");
	say();
	UI_remove_answer("Morfin");
	UI_add_answer(["担心", "使用毒液？"]);
labelFunc04AB_029A:
	case "使用毒液？" attend labelFunc04AB_02AD:
	message("Garritt 拖着脚步并皱起了眉头。「好吧……我只试过一次。对不起。我再也不会用了。」");
	say();
	UI_remove_answer("使用毒液？");
labelFunc04AB_02AD:
	case "担心" attend labelFunc04AB_02C0:
	message("「我认为如果 Tobias 被指控偷了大家都会注意到的东西，他的母亲就会加入友谊会并强迫他也加入。这将改善他们的生活，并迫使他们看清自己的真相。」");
	say();
	UI_remove_answer("担心");
labelFunc04AB_02C0:
	case "父母" attend labelFunc04AB_0302:
	message("「你会告诉我父母吗？」");
	say();
	var0005 = Func090A();
	if (!var0005) goto labelFunc04AB_02F3;
	if (!var0001) goto labelFunc04AB_02EC;
	message("「但我，像你一样，是友谊会的成员。对于我试图做的事，你必须与我团结一致！」");
	say();
	UI_remove_answer("父母");
	goto labelFunc04AB_02F0;
labelFunc04AB_02EC:
	message("「你品格软弱！否则你会明白我试图做的事！」");
	say();
labelFunc04AB_02F0:
	goto labelFunc04AB_02FB;
labelFunc04AB_02F3:
	message("「我非常热情地感谢你！那这就是我们的小秘密了。」");
	say();
	gflags[0x0219] = true;
labelFunc04AB_02FB:
	UI_remove_answer("父母");
labelFunc04AB_0302:
	case "小偷" attend labelFunc04AB_0319:
	message("「这个镇上有个小偷！我们的商人 Morfin 被偷了一些珍贵的银蛇毒液。罪犯还在逃。所以要小心！」");
	say();
	gflags[0x0212] = true;
	UI_remove_answer("小偷");
labelFunc04AB_0319:
	case "告辞" attend labelFunc04AB_0324:
	goto labelFunc04AB_0327;
labelFunc04AB_0324:
	goto labelFunc04AB_007A;
labelFunc04AB_0327:
	endconv;
	message("「那么，再见。」*");
	say();
	if (!gflags[0x0218]) goto labelFunc04AB_0340;
	UI_set_schedule_type(UI_get_npc_object(0xFF55), 0x000B);
labelFunc04AB_0340:
	if (!(event == 0x0000)) goto labelFunc04AB_03C0;
	var0006 = UI_get_schedule_type(UI_get_npc_object(0xFF55));
	var0007 = UI_die_roll(0x0001, 0x0004);
	if (!(var0006 == 0x0019)) goto labelFunc04AB_03BA;
	if (!(var0007 == 0x0001)) goto labelFunc04AB_037D;
	var0008 = "@略略略！@";
labelFunc04AB_037D:
	if (!(var0007 == 0x0002)) goto labelFunc04AB_038D;
	var0008 = "@抓不到我！@";
labelFunc04AB_038D:
	if (!(var0007 == 0x0003)) goto labelFunc04AB_039D;
	var0008 = "@有本事就来抓我啊！@";
labelFunc04AB_039D:
	if (!(var0007 == 0x0004)) goto labelFunc04AB_03AD;
	var0008 = "@抓到了！换当鬼！@";
labelFunc04AB_03AD:
	UI_item_say(0xFF55, var0008);
	goto labelFunc04AB_03C0;
labelFunc04AB_03BA:
	Func092E(0xFF55);
labelFunc04AB_03C0:
	return;
}


