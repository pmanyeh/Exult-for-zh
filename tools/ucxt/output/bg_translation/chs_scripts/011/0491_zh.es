#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();

void Func0491 object#(0x491) ()
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
	var var0009;
	var var000A;
	var var000B;

	if (!(event == 0x0001)) goto labelFunc0491_0347;
	UI_show_npc_face(0xFF6F, 0x0000);
	var0000 = Func0909();
	var0001 = UI_is_pc_female();
	var0002 = UI_part_of_day();
	var0003 = UI_get_schedule_type(0xFF6F);
	var0004 = false;
	var0005 = false;
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!gflags[0x017C]) goto labelFunc0491_0055;
	UI_add_answer("受折磨的人");
labelFunc0491_0055:
	if (!(!gflags[0x01B9])) goto labelFunc0491_0061;
	message("美丽的幻影继续她的工作，没有提供任何回应。*");
	say();
	abort;
labelFunc0491_0061:
	if (!(!gflags[0x01AA])) goto labelFunc0491_009C;
	if (!((var0002 == 0x0000) || (var0002 == 0x0001))) goto labelFunc0491_009C;
	if (!(var0003 == 0x000E)) goto labelFunc0491_008C;
	message("美丽的酒馆女侍凝视着虚无，完全没有意识到她的位置和状态。*");
	say();
	abort;
	goto labelFunc0491_009C;
labelFunc0491_008C:
	if (!(!(var0003 == 0x000B))) goto labelFunc0491_009C;
	message("美丽的酒馆女侍看起来好像快要倒下了一会儿，然后迅速地站稳了。「哦，我觉得有点……头晕。」她转过身，心神不宁。*");
	say();
	abort;
labelFunc0491_009C:
	if (!gflags[0x01A4]) goto labelFunc0491_00A7;
	message("「走开！你残酷又冷酷。」她转过身，但在那之前你看到了她眼中的泪水。*");
	say();
	abort;
labelFunc0491_00A7:
	var0006 = Func08F7(0xFF70);
	if (!var0006) goto labelFunc0491_00E8;
	if (!(!gflags[0x01BE])) goto labelFunc0491_00E8;
	message("Paulette 看到 Rowena 时精神一振。~~「妳好，女士。很高兴再次见到妳。妳好吗？」*");
	say();
	UI_show_npc_face(0xFF70, 0x0000);
	message("「我很好， Paulette 。谢谢妳的关心。」*");
	say();
	UI_remove_npc_face(0xFF70);
	UI_show_npc_face(0xFF6F, 0x0000);
	message("「那真是个好消息，女士。」");
	say();
	gflags[0x01BE] = true;
labelFunc0491_00E8:
	var0007 = Func08F7(0xFF6D);
	if (!var0007) goto labelFunc0491_0129;
	if (!(!gflags[0x01BD])) goto labelFunc0491_0129;
	message("「你好，市长。我们已经有很长一段时间没在酒馆里看到你了。我记得曾经有一段时间，我们根本无法让你离开这里。」*");
	say();
	UI_show_npc_face(0xFF6D, 0x0000);
	message("市长很快变得尴尬，试图让相当友善的 Paulette 安静下来。~~「我，呃，曾经算是个品酒专家，」他对你说。*");
	say();
	UI_remove_npc_face(0xFF6D);
	UI_show_npc_face(0xFF6F, 0x0000);
	message("「你可不只是这方面的专家，」Paulette 补充道，眼睛闪烁着。「我似乎记得你对红发女郎很有品味。」");
	say();
	gflags[0x01BD] = true;
labelFunc0491_0129:
	if (!gflags[0x0198]) goto labelFunc0491_0136;
	UI_add_answer("牺牲");
labelFunc0491_0136:
	if (!(!gflags[0x01CA])) goto labelFunc0491_0161;
	if (!var0001) goto labelFunc0491_0150;
	message("你看到一个留着黑色长发、漂亮的幽灵女孩。「你好，");
	message(var0000);
	message("。我叫做 Paulette 。有什么我可以帮你的吗？」");
	say();
	goto labelFunc0491_015A;
labelFunc0491_0150:
	message("站在你面前，一手插腰的，是一位留着黑色长发的可爱年轻女子。「哦……你真高大，");
	message(var0000);
	message("。」她描摹着你二头肌的线条。~~「我敢打赌你能把我举过头顶。」她迷人地笑着。不过，你怀疑在她这种幽灵状态下，你甚至无法触摸到她。~~「你可以叫我 Paulette ，帅哥。我能为你做什么？」她对你眨了眨眼。");
	say();
labelFunc0491_015A:
	gflags[0x01CA] = true;
	goto labelFunc0491_0178;
labelFunc0491_0161:
	if (!var0001) goto labelFunc0491_0174;
	message("「是的，");
	message(var0000);
	message("？」她甜甜地问。");
	say();
	goto labelFunc0491_0178;
labelFunc0491_0174:
	message("Paulette 转向你，卖弄风情地笑着，「我就知道你可能会回来。」她的眼睛淘气地对着你闪烁。");
	say();
labelFunc0491_0178:
	converse attend labelFunc0491_032F;
	case "姓名" attend labelFunc0491_0194:
	message("「哎呀，");
	message(var0000);
	message("，你已经忘了吗？我是 Paulette 。」");
	say();
	UI_remove_answer("姓名");
labelFunc0491_0194:
	case "职业" attend labelFunc0491_01DC:
	if (!var0001) goto labelFunc0491_01AF;
	message("「嗯，");
	message(var0000);
	message("，在火灾之前，」她发抖着说，「我以前是这里的酒馆女侍。」");
	say();
	goto labelFunc0491_01B9;
labelFunc0491_01AF:
	message("「嗯，");
	message(var0000);
	message("。我以前在这里清理桌子……」她说着，弯下腰假装在擦桌子。你注意到她的马甲领口开得有多低。~~「……并为像你这样的人服务。当然，没有像你这么帅的。」她幽灵般的脸庞泛起美丽的红晕。~~「但那是在……」她发抖着说，「火灾之前。」");
	say();
labelFunc0491_01B9:
	UI_add_answer("买");
	if (!(!var0005)) goto labelFunc0491_01CE;
	UI_add_answer("这里");
labelFunc0491_01CE:
	if (!(!var0004)) goto labelFunc0491_01DC;
	UI_add_answer("大火");
labelFunc0491_01DC:
	case "买" attend labelFunc0491_0244:
	message("「你想买点什么吗？」");
	say();
	var0008 = Func090A();
	if (!var0008) goto labelFunc0491_0233;
	message("「很抱歉，");
	message(var0000);
	message("，」她咯咯笑着，「但我们这里只供应……灵魂！」*");
	say();
	var0009 = Func08F7(0xFF74);
	if (!(var0009 && gflags[0x01B4])) goto labelFunc0491_0230;
	UI_show_npc_face(0xFF74, 0x0000);
	message("「这笑话不错，丫头，」胖幽灵笑着说。*");
	say();
	UI_remove_npc_face(0xFF74);
	UI_show_npc_face(0xFF6F, 0x0000);
labelFunc0491_0230:
	goto labelFunc0491_023D;
labelFunc0491_0233:
	message("「很好，");
	message(var0000);
	message("。」");
	say();
labelFunc0491_023D:
	UI_remove_answer("买");
labelFunc0491_0244:
	case "受折磨的人" attend labelFunc0491_0265:
	message("她困惑了一瞬间，但随后点了点头。~~「哦，你一定是指 Caine 。他是对这场火灾负有责任的炼金术士。」");
	say();
	UI_remove_answer("受折磨的人");
	if (!(!var0004)) goto labelFunc0491_0265;
	UI_add_answer("大火");
labelFunc0491_0265:
	case "大火" attend labelFunc0491_0291:
	message("「哦，是的。太可怕了！酒馆起火了。我跑到我的房间，希望能逃离火焰。但后来我开始咳嗽。我无法呼吸。」她的胸口快速起伏，仿佛正在重温那段经历。~~「最后，我再也受不了了。」她戏剧性地将手背放在额头上。「我晕倒了。然后我又在这里了，就像你现在看到我这样。」她的笑容像个孩子一样。");
	say();
	var0004 = true;
	UI_remove_answer("大火");
	UI_add_answer("又在这里");
	if (!(!var0005)) goto labelFunc0491_0291;
	UI_add_answer("酒馆");
labelFunc0491_0291:
	case "又在这里" attend labelFunc0491_02A4:
	message("「是的，这很奇怪。当我醒来时，就好像火灾开始时我从未离开过一样。事实上，如果不是到处都有烧焦的痕迹，我会怀疑火灾是否真的发生过。」");
	say();
	UI_remove_answer("又在这里");
labelFunc0491_02A4:
	case "酒馆", "这里" attend labelFunc0491_02DF:
	if (!var0001) goto labelFunc0491_02BE;
	var000A = "害羞地";
	goto labelFunc0491_02C4;
labelFunc0491_02BE:
	var000A = "";
labelFunc0491_02C4:
	message("「哎呀，这里叫做『魂灵烈酒桶』 。对一家酒馆来说，这名字很不错吧？」她");
	message(var000A);
	message("笑着说。");
	say();
	UI_remove_answer(["这里", "酒馆"]);
	var0005 = true;
labelFunc0491_02DF:
	case "牺牲" attend labelFunc0491_0321:
	if (!(!gflags[0x019B])) goto labelFunc0491_0311;
	message("「你要我……跳进井里？」她惊讶地瞪大了眼睛。");
	say();
	var000B = Func090A();
	if (!var000B) goto labelFunc0491_030A;
	message("「哼，你怎么不自己去跳湖！」她将双臂交叉在丰满的胸前，生气地转过身去。*");
	say();
	gflags[0x019B] = true;
	abort;
	goto labelFunc0491_030E;
labelFunc0491_030A:
	message("她恢复了镇定，「哦。有一瞬间，我以为你要我成为你的……祭品。」");
	say();
labelFunc0491_030E:
	goto labelFunc0491_031A;
labelFunc0491_0311:
	message("「拜托，别管我！」她看起来好像快哭了。*");
	say();
	gflags[0x01A4] = true;
	abort;
labelFunc0491_031A:
	UI_remove_answer("牺牲");
labelFunc0491_0321:
	case "告辞" attend labelFunc0491_032C:
	goto labelFunc0491_032F;
labelFunc0491_032C:
	goto labelFunc0491_0178;
labelFunc0491_032F:
	endconv;
	if (!var0001) goto labelFunc0491_0343;
	message("「再见，");
	message(var0000);
	message("。」美丽的幽灵转过身去。*");
	say();
	goto labelFunc0491_0347;
labelFunc0491_0343:
	message("当你说再见时， Paulette 冲上前来，在你的脸颊上轻轻吻了一下。她慢慢退后，「再见，帅哥。」*");
	say();
labelFunc0491_0347:
	if (!(event == 0x0000)) goto labelFunc0491_0350;
	abort;
labelFunc0491_0350:
	return;
}


