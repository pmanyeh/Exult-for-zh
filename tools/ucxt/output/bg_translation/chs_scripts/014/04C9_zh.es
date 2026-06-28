#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern void Func08AC 0x8AC (var var0000, var var0001, var var0002);
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func092E 0x92E (var var0000);

void Func04C9 object#(0x4C9) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc04C9_01D8;
	UI_show_npc_face(0xFF37, 0x0000);
	var0000 = Func0909();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFF37));
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!gflags[0x0259]) goto labelFunc04C9_0049;
	if (!gflags[0x027A]) goto labelFunc04C9_0049;
	UI_add_answer("检查石片");
labelFunc04C9_0049:
	if (!(!gflags[0x0272])) goto labelFunc04C9_005B;
	message("这位迷人的女士对你投以赞许的目光。");
	say();
	gflags[0x0272] = true;
	goto labelFunc04C9_0065;
labelFunc04C9_005B:
	message("「你好，");
	message(var0000);
	message("。」Leigh 对你微笑。");
	say();
labelFunc04C9_0065:
	converse attend labelFunc04C9_01CD;
	case "姓名" attend labelFunc04C9_007B:
	message("她红着脸说。「我是 Leigh 女士。」");
	say();
	UI_remove_answer("姓名");
labelFunc04C9_007B:
	case "职业" attend labelFunc04C9_00A5:
	message("「我是 Serpent's Hold 的治疗师。」");
	say();
	UI_add_answer(["Serpent's Hold", "治疗"]);
	gflags[0x027A] = true;
	if (!gflags[0x0259]) goto labelFunc04C9_00A5;
	UI_add_answer("检查石片");
labelFunc04C9_00A5:
	case "治疗" attend labelFunc04C9_00D1:
	if (!(var0001 == 0x0007)) goto labelFunc04C9_00C6;
	Func08AC(0x0019, 0x0008, 0x0181);
	goto labelFunc04C9_00CA;
labelFunc04C9_00C6:
	message("「对不起，但我现在有太多其他病人要帮忙。或许等我下次开店的时候。」");
	say();
labelFunc04C9_00CA:
	UI_remove_answer("治疗");
labelFunc04C9_00D1:
	case "Serpent's Hold" attend labelFunc04C9_00F1:
	message("「Jean-Paul 领主负责维持这里的秩序，但 Denton 爵士会是了解 Serpent's Hold 的更好消息来源。」");
	say();
	UI_add_answer(["John-Paul", "Denton"]);
	UI_remove_answer("Serpent's Hold");
labelFunc04C9_00F1:
	case "John-Paul" attend labelFunc04C9_0120:
	message("「他很容易找到，因为 Horffe 爵士几乎从未离开过他身边。留意那个高大、肌肉发达的石像鬼。」");
	say();
	if (!(!gflags[0x025E])) goto labelFunc04C9_0108;
	message("「事实上，」她望着远方说，「我相信他可能有话想对你说。或许你真的该去找他谈谈。」");
	say();
labelFunc04C9_0108:
	message("「如果你有堡垒事务要处理，却找不到 John-Paul，你或许可以去跟 Richter 爵士谈谈。」");
	say();
	UI_remove_answer("John-Paul");
	UI_add_answer(["Horffe", "Richter"]);
labelFunc04C9_0120:
	case "Horffe" attend labelFunc04C9_0133:
	message("「他在很小的时候被发现，显然被他的父亲遗弃了。两个人带走并把他当作自己的孩子抚养。正如你见到他所能看出的那样，他是一个非常高尚的人，也是一名坚定的战士。」");
	say();
	UI_remove_answer("Horffe");
labelFunc04C9_0133:
	case "Richter" attend labelFunc04C9_0146:
	message("「他是军械士。他的店在堡垒的后方。」");
	say();
	UI_remove_answer("Richter");
labelFunc04C9_0146:
	case "Denton" attend labelFunc04C9_0159:
	message("「他是神圣码头的酒保，就在堡垒大门内。他非常擅长记住和讨论重要的事实。」");
	say();
	UI_remove_answer("Denton");
labelFunc04C9_0159:
	case "检查石片" attend labelFunc04C9_01A6:
	var0002 = Func0931(0xFE9B, 0x0001, 0x032F, 0xFE99, 0x0004);
	if (!var0002) goto labelFunc04C9_019B;
	if (!gflags[0x0268]) goto labelFunc04C9_0189;
	message("她困惑地看着你。「我不是已经做过了吗？」");
	say();
	goto labelFunc04C9_0198;
labelFunc04C9_0189:
	message("她接过你的石片并仔细检查。使用几瓶奇怪且不寻常的混合物，她分析了血液。最后，在几分钟的沉默后，她擡起头，咧嘴笑着。~~「我已经确认了血液的性质。这绝对不是人类的。事实上，」她低头看着样本并挑起一边眉毛，「这是石像鬼的血。」");
	say();
	UI_add_answer("石像鬼的血");
	gflags[0x025F] = true;
labelFunc04C9_0198:
	goto labelFunc04C9_019F;
labelFunc04C9_019B:
	message("「恐怕我必须能够看到它们才能进行检查。」");
	say();
labelFunc04C9_019F:
	UI_remove_answer("检查石片");
labelFunc04C9_01A6:
	case "石像鬼的血" attend labelFunc04C9_01BF:
	message("她若有所思。~~「奇怪的是，");
	message(var0000);
	message("，在 Serpent's Hold 里只有一只石像鬼。但我无法想像 Horffe 爵士会跟这种恶意破坏有任何关系。」");
	say();
	UI_remove_answer("石像鬼的血");
labelFunc04C9_01BF:
	case "告辞" attend labelFunc04C9_01CA:
	goto labelFunc04C9_01CD;
labelFunc04C9_01CA:
	goto labelFunc04C9_0065;
labelFunc04C9_01CD:
	endconv;
	message("「再会，");
	message(var0000);
	message("。」*");
	say();
labelFunc04C9_01D8:
	if (!(event == 0x0000)) goto labelFunc04C9_01E6;
	Func092E(0xFF37);
labelFunc04C9_01E6:
	return;
}


