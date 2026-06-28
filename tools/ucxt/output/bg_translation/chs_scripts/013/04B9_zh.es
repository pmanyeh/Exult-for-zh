#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func08CE 0x8CE ();
extern void Func092F 0x92F (var var0000);

void Func04B9 object#(0x4B9) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0001)) goto labelFunc04B9_02E3;
	UI_show_npc_face(0xFF47, 0x0000);
	var0000 = Func0908();
	var0001 = UI_part_of_day();
	var0002 = Func0931(0xFE9B, 0x0001, 0x03D5, 0xFE99, 0x0001);
	if (!(var0001 == 0x0007)) goto labelFunc04B9_0045;
	message("这只石像鬼似乎忙着主持友谊会会议，现在没空跟你说话。");
	say();
	Func08CE();
labelFunc04B9_0045:
	UI_add_answer(["姓名", "职业", "友谊会", "告辞"]);
	if (!gflags[0x01EF]) goto labelFunc04B9_0065;
	UI_add_answer("Elizabeth 和 Abraham");
labelFunc04B9_0065:
	if (!(!gflags[0x024A])) goto labelFunc04B9_0077;
	message("你看到一只有翼石像鬼。注意到你之后，他转过身说，「欢迎你，人类。需要协助吗？」");
	say();
	gflags[0x024A] = true;
	goto labelFunc04B9_007B;
labelFunc04B9_0077:
	message("「请问我能如何协助你，人类。」");
	say();
labelFunc04B9_007B:
	converse attend labelFunc04B9_02D4;
	case "姓名" attend labelFunc04B9_0098:
	message("「是那个叫做 Quan 的人。」");
	say();
	UI_remove_answer("姓名");
	UI_add_answer("Quan");
labelFunc04B9_0098:
	case "Quan" attend labelFunc04B9_00AB:
	message("「在石像鬼语中没有意义。这是个特别的名字，专属于我，」他笑着。");
	say();
	UI_remove_answer("Quan");
labelFunc04B9_00AB:
	case "职业" attend labelFunc04B9_00CB:
	message("「领导 Terfin 的友谊会。」");
	say();
	UI_add_answer("Terfin");
	if (!gflags[0x01F5]) goto labelFunc04B9_00CB;
	UI_add_answer("声音");
labelFunc04B9_00CB:
	case "声音" attend labelFunc04B9_00DE:
	message("「是存在于所有生物内心的指引之声。随着友谊会联系的加强，会变得越来越清晰且频繁。」");
	say();
	UI_remove_answer("声音");
labelFunc04B9_00DE:
	case "Terfin" attend labelFunc04B9_00FE:
	message("「是不列颠尼亚唯一的石像鬼城市。这片土地上的石像鬼数量比你上次访问不列颠尼亚时还要少，人类。」他摇了摇头。");
	say();
	UI_add_answer(["更少", "石像鬼"]);
	UI_remove_answer("Terfin");
labelFunc04B9_00FE:
	case "更少" attend labelFunc04B9_0111:
	message("「是因为屈服于最近袭击不列颠尼亚的疾病和饥荒。告诉你，石像鬼繁殖的频率较低，我们没有时间弥补人口的损失。~~然而，要获得新希望，」他咧嘴一笑，「就得加入友谊会。」");
	say();
	UI_remove_answer("更少");
labelFunc04B9_0111:
	case "石像鬼" attend labelFunc04B9_0124:
	message("「建议你跟友谊会的店员 Runeb ，或者是 Quaeven 谈谈。他们的工作需要了解 Terfin 里的其他人。」他歉意地笑了笑。~~ 「太忙了，无法认识 Terfin 的所有人。」");
	say();
	UI_remove_answer("石像鬼");
labelFunc04B9_0124:
	case "友谊会" attend labelFunc04B9_0178:
	var0003 = UI_wearing_fellowship();
	if (!var0003) goto labelFunc04B9_0154;
	if (!gflags[0x0006]) goto labelFunc04B9_0146;
	message("「与其他分会联合，在晚上 9 点举行会议，人类。欢迎参加我们的会议。」");
	say();
	goto labelFunc04B9_0151;
labelFunc04B9_0146:
	message("「是对石像鬼和人类都有益的恩赐。拥有一种帮助所有种族生物达到最高潜能的理念。」");
	say();
	UI_add_answer("理念");
labelFunc04B9_0151:
	goto labelFunc04B9_015F;
labelFunc04B9_0154:
	message("「是对石像鬼和人类都有益的恩赐。拥有一种帮助所有种族生物达到最高潜能的理念。」");
	say();
	UI_add_answer("理念");
labelFunc04B9_015F:
	if (!(gflags[0x023C] && (!gflags[0x0242]))) goto labelFunc04B9_0171;
	UI_add_answer("祭坛冲突");
labelFunc04B9_0171:
	UI_remove_answer("友谊会");
labelFunc04B9_0178:
	case "Elizabeth 和 Abraham" attend labelFunc04B9_019D:
	if (!(!gflags[0x0264])) goto labelFunc04B9_0192;
	message("「刚好错过了来这里收集资金的人类友谊会官员。他们已经前往 Serpent's Hold 附近的冥想静修处。很遗憾。」");
	say();
	gflags[0x0243] = true;
	goto labelFunc04B9_0196;
labelFunc04B9_0192:
	message("「已经好几天没见到人类友谊会官员了。」");
	say();
labelFunc04B9_0196:
	UI_remove_answer("Elizabeth 和 Abraham");
labelFunc04B9_019D:
	case "理念" attend labelFunc04B9_01B0:
	message("他的脸上充满了几乎是高兴的表情。~~ 「非常类似於单一性祭坛。有三个被称为内在力量的三位一体 (Triad of Inner Strength) 的原则。和谐地应用这三个原则会变得更有创造力且更快乐。~~ 看见其中的相似处了吗？控制、热情与勤勉交织成一体——单一性 (singularity) 。这三位一体 (Triad) ——努力团结、信任你的兄弟、善有善报——和谐地应用在一起！」");
	say();
	UI_remove_answer("理念");
labelFunc04B9_01B0:
	case "祭坛冲突" attend labelFunc04B9_01D0:
	message("「不明白，」他困惑地说。");
	say();
	if (!gflags[0x0253]) goto labelFunc04B9_01C9;
	UI_add_answer("破坏祭坛");
labelFunc04B9_01C9:
	UI_remove_answer("祭坛冲突");
labelFunc04B9_01D0:
	case "破坏祭坛" attend labelFunc04B9_020A:
	message("「对此一无所知！不相信！这不可能。~~ 要知道所有成员对他们的生活都很满意，而且绝不可能做出这种事，即使祭坛已经过时了。~~ 告诉你亲自去和成员们谈谈，亲眼见证并相信。」");
	say();
	UI_add_answer(["过时", "成员"]);
	UI_remove_answer("破坏祭坛");
	if (!gflags[0x023F]) goto labelFunc04B9_01FD;
	UI_add_answer("Sarpling 的纸条");
labelFunc04B9_01FD:
	if (!gflags[0x0240]) goto labelFunc04B9_020A;
	UI_add_answer("Runeb 暗杀");
labelFunc04B9_020A:
	case "过时" attend labelFunc04B9_021D:
	message("「需要三位一体 (Triad) 来正确应用于每个石像鬼——或人类！」");
	say();
	UI_remove_answer("过时");
labelFunc04B9_021D:
	case "成员" attend labelFunc04B9_0240:
	message("「去和 Runeb 、 Sarpling 和 Quaeven 谈谈。」");
	say();
	UI_add_answer(["Runeb", "Sarpling", "Quaeven"]);
	UI_remove_answer("成员");
labelFunc04B9_0240:
	case "Runeb" attend labelFunc04B9_026E:
	var0004 = UI_is_dead(UI_get_npc_object(0xFF48));
	if (!var0004) goto labelFunc04B9_0263;
	message("「曾经是这里友谊会的店员。」");
	say();
	goto labelFunc04B9_0267;
labelFunc04B9_0263:
	message("「是这里友谊会的店员。」");
	say();
labelFunc04B9_0267:
	UI_remove_answer("Runeb");
labelFunc04B9_026E:
	case "Sarpling" attend labelFunc04B9_0285:
	message("「在他的店里贩卖魔法和相关物品。」");
	say();
	UI_remove_answer("Sarpling");
	gflags[0x0241] = true;
labelFunc04B9_0285:
	case "Quaeven" attend labelFunc04B9_0298:
	message("「负责管理学习中心。」");
	say();
	UI_remove_answer("Quaeven");
labelFunc04B9_0298:
	case "Sarpling 的纸条" attend labelFunc04B9_02AF:
	message("「Runeb 不可能要为此负责。」他亲切地微笑着。「这一定是个恶作剧。」");
	say();
	UI_remove_answer("Sarpling 的纸条");
	gflags[0x0242] = true;
labelFunc04B9_02AF:
	case "Runeb 暗杀" attend labelFunc04B9_02C6:
	message("「对 Runeb 来说这阴谋太可恶了。」他皱起眉头。「这一定是某种恶作剧。」");
	say();
	UI_remove_answer("Runeb 暗杀");
	gflags[0x0242] = true;
labelFunc04B9_02C6:
	case "告辞" attend labelFunc04B9_02D1:
	goto labelFunc04B9_02D4;
labelFunc04B9_02D1:
	goto labelFunc04B9_007B;
labelFunc04B9_02D4:
	endconv;
	message("「希望你找到团结。」*");
	say();
	if (!var0002) goto labelFunc04B9_02E3;
	message("在与 Quan 交谈时，立方体没有震动过一次。你意识到他对上层那些危险的力量完全不知情。*");
	say();
labelFunc04B9_02E3:
	if (!(event == 0x0000)) goto labelFunc04B9_02F1;
	Func092F(0xFF47);
labelFunc04B9_02F1:
	return;
}


