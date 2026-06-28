#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern void Func092E 0x92E (var var0000);

void Func04C1 object#(0x4C1) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0001)) goto labelFunc04C1_01CF;
	UI_show_npc_face(0xFF3F, 0x0000);
	var0000 = Func0909();
	var0001 = false;
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x026A])) goto labelFunc04C1_003E;
	message("你迎接的是这个男人脸上严厉的表情。");
	say();
	gflags[0x026A] = true;
	goto labelFunc04C1_0048;
labelFunc04C1_003E:
	message("「^");
	message(var0000);
	message("。」他对你点点头。");
	say();
labelFunc04C1_0048:
	if (!(gflags[0x025E] && (!gflags[0x0276]))) goto labelFunc04C1_005A;
	UI_add_answer("雕像");
labelFunc04C1_005A:
	converse attend labelFunc04C1_01C4;
	case "姓名" attend labelFunc04C1_0070:
	message("「你可以叫我 Pendaran 爵士。」");
	say();
	UI_remove_answer("姓名");
labelFunc04C1_0070:
	case "职业" attend labelFunc04C1_0089:
	message("「我是 Serpent's Hold 这里的骑士。保护不列颠尼亚的公民是我的职责。」");
	say();
	UI_add_answer(["保护", "Serpent's Hold"]);
labelFunc04C1_0089:
	case "保护" attend labelFunc04C1_00AF:
	message("「是的，");
	message(var0000);
	message("。出了城镇，不列颠尼亚其实是个危险的地方。尤其现在统治派系已经变得软弱了！」");
	say();
	UI_remove_answer("保护");
	UI_add_answer(["统治派系", "软弱"]);
labelFunc04C1_00AF:
	case "统治派系" attend labelFunc04C1_00C2:
	message("「嗯，我指的是不列颠王和他的顾问。」");
	say();
	UI_remove_answer("统治派系");
labelFunc04C1_00C2:
	case "软弱", "无能" attend labelFunc04C1_00E9:
	message("「虽然我愿意追随这片土地的理想直到天涯海角，但我很难接受不列颠尼亚的情况如此糟糕。强盗横行，疾病肆虐城镇，议会充满了腐败。要不是有友谊会，我恐怕很难避免拔剑自刎，尽管这种行为看起来有多么不光彩。」");
	say();
	var0001 = true;
	UI_remove_answer(["软弱", "无能"]);
	UI_add_answer("友谊会");
labelFunc04C1_00E9:
	case "友谊会" attend labelFunc04C1_0102:
	message("「一群高贵的人，努力在整个不列颠尼亚灌输更多的精神知识。这只是时间问题，");
	message(var0000);
	message("，在所有人都能在眼前看见智能之光。」");
	say();
	UI_remove_answer("友谊会");
labelFunc04C1_0102:
	case "Serpent's Hold" attend labelFunc04C1_011C:
	message("「我和我的女主人住在这里的堡垒中。」");
	say();
	UI_add_answer("女主人");
	UI_remove_answer("Serpent's Hold");
labelFunc04C1_011C:
	case "女主人" attend labelFunc04C1_0135:
	message("「她的名字是 Jehanne ，");
	message(var0000);
	message("，」他怀疑地说。「她是物资商人。」");
	say();
	UI_remove_answer("女主人");
labelFunc04C1_0135:
	case "雕像" attend labelFunc04C1_015B:
	message("「真是个可怕的遗憾，");
	message(var0000);
	message("。」他冷冷地看着你。");
	say();
	if (!gflags[0x025D]) goto labelFunc04C1_0154;
	UI_add_answer("是你做的！");
labelFunc04C1_0154:
	UI_remove_answer("雕像");
labelFunc04C1_015B:
	case "是你做的！" attend labelFunc04C1_0175:
	message("「什么！你居然指控我！荒谬。我跟这件事一点关系也没有！」");
	say();
	UI_remove_answer("是你做的！");
	UI_add_answer("Jehanne 女士");
labelFunc04C1_0175:
	case "Jehanne 女士" attend labelFunc04C1_0196:
	gflags[0x0276] = true;
	message("他摇摇头。~~「你宁愿相信一个女人的话，也不愿相信堡垒骑士的话？你连虫子都不如！」他瞪了你一会儿，然后表情变了。~~「好吧，」他说，「毁坏雕像的人就是我，但那是因为官府变得太无能、太软弱了！」他羞愧地转过身去。~~「如果你认为这样最好，」他叹了口气，「明天我会向我的骑士同僚们乞求原谅。」");
	say();
	UI_push_answers();
	UI_add_answer(["这样最妥当", "不需要"]);
labelFunc04C1_0196:
	case "这样最妥当" attend labelFunc04C1_01A3:
	message("他点头同意，再次叹息，然后转身离开。*");
	say();
	abort;
labelFunc04C1_01A3:
	case "不需要" attend labelFunc04C1_01B6:
	message("「不，不，");
	message(var0000);
	message("。你为我指明了道路。我必须忏悔。」他转过身去反省他的决定。*");
	say();
	abort;
labelFunc04C1_01B6:
	case "告辞" attend labelFunc04C1_01C1:
	goto labelFunc04C1_01C4;
labelFunc04C1_01C1:
	goto labelFunc04C1_005A;
labelFunc04C1_01C4:
	endconv;
	message("「祝你有个美好的一天，");
	message(var0000);
	message(".\"*");
	say();
labelFunc04C1_01CF:
	if (!(event == 0x0000)) goto labelFunc04C1_01DD;
	Func092E(0xFF3F);
labelFunc04C1_01DD:
	return;
}


