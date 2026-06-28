#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();
extern void Func0911 0x911 (var var0000);

void Func04C3 object#(0x4C3) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0001)) goto labelFunc04C3_0385;
	UI_show_npc_face(0xFF3D, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = Func08F7(0xFF3B);
	var0003 = false;
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x026C])) goto labelFunc04C3_0075;
	message("这位非常严肃的男人在向你问候时露出了一丝微笑。");
	say();
	var0004 = UI_get_distance(0xFF3D, 0xFF3B);
	if (!(var0004 < 0x000A)) goto labelFunc04C3_006E;
	if (!gflags[0x026E]) goto labelFunc04C3_006A;
	message("Horffe 正在他身后立正站好。");
	say();
	goto labelFunc04C3_006E;
labelFunc04C3_006A:
	message("在他身后立正站好的是一只有翼的石像鬼。");
	say();
labelFunc04C3_006E:
	gflags[0x026C] = true;
	goto labelFunc04C3_0079;
labelFunc04C3_0075:
	message("「祝你有个美好的一天，」 John-Paul 领主说。");
	say();
labelFunc04C3_0079:
	if (!(gflags[0x025F] && (!gflags[0x0265]))) goto labelFunc04C3_0092;
	if (!(!gflags[0x0261])) goto labelFunc04C3_0092;
	UI_add_answer("Horffe 爵士要负责");
labelFunc04C3_0092:
	if (!(gflags[0x025D] && (!gflags[0x0261]))) goto labelFunc04C3_00AB;
	UI_add_answer("Pendaran 爵士要负责");
	UI_remove_answer("Horffe 爵士要负责");
labelFunc04C3_00AB:
	converse attend labelFunc04C3_037A;
	case "姓名" attend labelFunc04C3_010F:
	message("「我是 Serpent's Hold 的 John-Paul 领主。你是");
	message(var0000);
	message("，是圣者，对吧？」");
	say();
	var0005 = Func090A();
	if (!var0005) goto labelFunc04C3_00F7;
	if (!(gflags[0x025E] && (!gflags[0x0260]))) goto labelFunc04C3_00DE;
	message("「我记得你。」");
	say();
	goto labelFunc04C3_00F4;
labelFunc04C3_00DE:
	message("「太棒了。」");
	say();
	if (!(!gflags[0x0263])) goto labelFunc04C3_00ED;
	message("「我有个你可能会感兴趣的东西。」");
	say();
labelFunc04C3_00ED:
	UI_add_answer("我感兴趣");
labelFunc04C3_00F4:
	goto labelFunc04C3_0101;
labelFunc04C3_00F7:
	message("他看起来很惊讶。「请原谅我，");
	message(var0001);
	message("，我敢发誓……啊，算了，没关系。」");
	say();
labelFunc04C3_0101:
	UI_remove_answer("姓名");
	UI_add_answer("Serpent's Hold");
labelFunc04C3_010F:
	case "职业" attend labelFunc04C3_0122:
	message("「我负责监督这座堡垒。」");
	say();
	UI_add_answer("监督");
labelFunc04C3_0122:
	case "监督" attend labelFunc04C3_0142:
	message("「这不是一份困难的工作。 Richter 爵士和 Horffe 爵士确保事情尽可能顺利进行。」");
	say();
	UI_remove_answer("监督");
	UI_add_answer(["Sir Richter", "Sir Horffe"]);
labelFunc04C3_0142:
	case "Sir Richter" attend labelFunc04C3_015C:
	message("「当我忙于其他事务时，他负责管理这座堡垒。他最近似乎有些改变，但我仍然信任他。」");
	say();
	UI_remove_answer("Sir Richter");
	UI_add_answer("改变");
labelFunc04C3_015C:
	case "改变" attend labelFunc04C3_017C:
	message("「那是从他加入友谊会时开始的。他变得更加……该怎么说呢……有条理。」~~他笑了。「我想友谊会内部有某种严格的结构对他有好处，不是吗？」");
	say();
	UI_remove_answer("改变");
	UI_add_answer(["有条理", "友谊会"]);
labelFunc04C3_017C:
	case "友谊会" attend labelFunc04C3_0193:
	message("「恐怕我对他们了解不多。他们似乎帮助了很多人。然而，我注意到自从 Richter 加入后， Horffe 爵士变得相当忧虑。」");
	say();
	var0003 = true;
	UI_remove_answer("友谊会");
labelFunc04C3_0193:
	case "有条理" attend labelFunc04C3_01A6:
	message("「这很难解释。他似乎更有纪律了，」他短促地笑了一声，「这当然相当适合这座堡垒。」");
	say();
	UI_remove_answer("有条理");
labelFunc04C3_01A6:
	case "Sir Horffe" attend labelFunc04C3_01E8:
	message("「他是卫兵队长。他的职位无人能取代。他是我见过最尊贵的战士。」");
	say();
	if (!var0002) goto labelFunc04C3_01D7;
	UI_show_npc_face(0xFF3B, 0x0000);
	message("「感谢你，爵士！」");
	say();
	UI_remove_npc_face(0xFF3B);
	UI_show_npc_face(0xFF3D, 0x0000);
labelFunc04C3_01D7:
	if (!var0003) goto labelFunc04C3_01E1;
	message("「不过，他似乎对友谊会感到反感。我注意到他在 Richter 爵士身边不愿提起这件事。」他耸了耸肩。");
	say();
labelFunc04C3_01E1:
	UI_remove_answer("Sir Horffe");
labelFunc04C3_01E8:
	case "Serpent's Hold" attend labelFunc04C3_0208:
	message("「自从你上次来访后，这里几乎没什么改变，");
	message(var0000);
	message("。当然，所有的人都是新面孔。」");
	say();
	UI_add_answer("人们");
	UI_remove_answer("Serpent's Hold");
labelFunc04C3_0208:
	case "人们" attend labelFunc04C3_021B:
	message("「恐怕我等一下必须处理其他事务，无法带你四处看看。但我建议你去参观神圣码头 (Hallowed Dock) 。许多堡垒的骑士晚上会在那里出没。」");
	say();
	UI_remove_answer("人们");
labelFunc04C3_021B:
	case "我感兴趣" attend labelFunc04C3_026C:
	if (!(!gflags[0x0260])) goto labelFunc04C3_0254;
	message("他感激地对你微笑，并开始踱步。~~「最近发生了一起可怕的罪行。看起来在堡垒公共广场的不列颠王雕像，被一个不知名的破坏者给损毁了。~~或许，」他满怀希望地看着你，「你可以帮忙追查这个恶徒？」");
	say();
	gflags[0x0263] = true;
	var0006 = Func090A();
	if (!var0006) goto labelFunc04C3_0245;
	message("「非常好。最好的开始方式是跟神圣码头的酒馆老板 Denton 爵士谈谈。他解决谜题和问题的能力非常卓越。当你解开这个小谜团后，请将你的发现告诉我。」");
	say();
	goto labelFunc04C3_024D;
labelFunc04C3_0245:
	message("「当然。我明白。你确实有更重要的事情要解决。我会请 Yew 的官员来处理这件事。」");
	say();
	gflags[0x0260] = true;
labelFunc04C3_024D:
	gflags[0x025E] = true;
	goto labelFunc04C3_0265;
labelFunc04C3_0254:
	message("「哦，对了，我忘了。非常抱歉就这件事两次打扰你。请原谅我的健忘，");
	message(var0000);
	message("。这件事正在处理中。」");
	say();
	UI_add_answer("处理好了？");
labelFunc04C3_0265:
	UI_remove_answer("我感兴趣");
labelFunc04C3_026C:
	case "处理好了？" attend labelFunc04C3_0286:
	message("「我已经派人去请 Yew 高等法院的法官了。我明白你没有时间处理这些琐事。」");
	say();
	UI_add_answer("我有时间");
	UI_remove_answer("处理好了？");
labelFunc04C3_0286:
	case "我有时间" attend labelFunc04C3_02A0:
	message("「是的，是的，你太好了，但我相信你肯定有更重要的事情要处理。我还是要谢谢你。」");
	say();
	UI_remove_answer("我有时间");
	UI_add_answer("我—想—要—做—！");
labelFunc04C3_02A0:
	case "我—想—要—做—！" attend labelFunc04C3_02B3:
	message("「哦，我明白了。好吧，既然如此。最好的开始方式是去跟神圣码头的酒馆老板 Denton 爵士谈谈。他解决谜题和问题的能力非常卓越。解开这个小谜团后，请带着你的发现来找我。」");
	say();
	UI_remove_answer("我—想—要—做—！");
labelFunc04C3_02B3:
	case "Pendaran 爵士要负责" attend labelFunc04C3_02CD:
	message("他显得很困惑。~~「我明白了。那你是怎么得出这个结论的？」");
	say();
	UI_add_answer("Jehanne 女士");
	UI_remove_answer("Pendaran 爵士要负责");
labelFunc04C3_02CD:
	case "Jehanne 女士" attend labelFunc04C3_0329:
	Func0911(0x0064);
	message("他笑着伸出手。~~「干得好，");
	message(var0000);
	message("。我无法充分表达我的感激。我会确保 Pendaran 爵士受到适当的惩戒。感谢你，");
	message(var0000);
	message("。」");
	say();
	if (!gflags[0x0262]) goto labelFunc04C3_031E;
	message("「现在我必须向 Horffe 爵士道歉！」");
	say();
	if (!var0002) goto labelFunc04C3_031E;
	message("*");
	say();
	UI_show_npc_face(0xFF3B, 0x0000);
	message("「不需要！很高兴找到了真正的破坏者。」*");
	say();
	UI_remove_npc_face(0xFF3B);
	UI_show_npc_face(0xFF3D, 0x0000);
labelFunc04C3_031E:
	gflags[0x0261] = true;
	UI_remove_answer("Jehanne 女士");
labelFunc04C3_0329:
	case "Horffe 爵士要负责" attend labelFunc04C3_0343:
	message("他显得很惊讶。~~「我明白了。那你是怎么得出这个结论的？」");
	say();
	UI_add_answer("碎片上的石像鬼血迹");
	UI_remove_answer("Horffe 爵士要负责");
labelFunc04C3_0343:
	case "碎片上的石像鬼血迹" attend labelFunc04C3_036C:
	message("「那好吧。」他显然很苦恼。");
	say();
	if (!var0002) goto labelFunc04C3_035D;
	message("他转身训斥身旁的石像鬼。*");
	say();
	abort;
	goto labelFunc04C3_0361;
labelFunc04C3_035D:
	message("「我会立刻处理这件事！」");
	say();
labelFunc04C3_0361:
	gflags[0x0262] = true;
	UI_remove_answer("碎片上的石像鬼血迹");
labelFunc04C3_036C:
	case "告辞" attend labelFunc04C3_0377:
	goto labelFunc04C3_037A;
labelFunc04C3_0377:
	goto labelFunc04C3_00AB;
labelFunc04C3_037A:
	endconv;
	message("「继续，");
	message(var0000);
	message("。」*");
	say();
labelFunc04C3_0385:
	if (!(event == 0x0000)) goto labelFunc04C3_038E;
	abort;
labelFunc04C3_038E:
	return;
}


