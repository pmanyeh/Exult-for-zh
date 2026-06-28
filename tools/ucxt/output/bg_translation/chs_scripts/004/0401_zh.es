#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern void Func08DD 0x8DD ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();
extern var Func090B 0x90B (var var0000);
extern void Func092E 0x92E (var var0000);

void Func0401 object#(0x401) ()
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
	var var000C;
	var var000D;
	var var000E;
	var var000F;
	var var0010;
	var var0011;
	var var0012;
	var talked_book;

	gflags[0x0014] = true;
	var0000 = Func0908();
	var0001 = UI_get_party_list();
	var0002 = UI_get_npc_object(0xFFFF);
	var0003 = Func0909();
	var0004 = UI_is_pc_female();
	if (!(event == 0x0003)) goto labelFunc0401_0173;
	if (!((!gflags[0x003B]) && ((!gflags[0x005C]) && UI_get_item_flag(0xFE9C, 0x0010)))) goto labelFunc0401_016C;
	UI_play_music(0x0023, 0x0000);
	var0005 = UI_delayed_execute_usecode_array(UI_get_npc_object(0xFE9C), [(byte)0x23, (byte)0x55, 0x06AA], 0x007D);
	var0005 = UI_execute_usecode_array(UI_get_npc_object(0xFFFF), [(byte)0x23, (byte)0x54, 0x0023, 0x0001, (byte)0x52, "@别怕，别怕...@" ]);
	var0005 = UI_delayed_execute_usecode_array(UI_get_npc_object(0xFFF5), [(byte)0x23, (byte)0x52, "@这太可怕了！@"], 0x0010);
	var0005 = UI_delayed_execute_usecode_array(UI_get_npc_object(0xFFFF), [(byte)0x23, (byte)0x52, "@我知道，这太令人震惊了！@"], 0x0021);
	var0005 = UI_delayed_execute_usecode_array(UI_get_npc_object(0xFFF5), [(byte)0x23, (byte)0x52, "@会是谁干的？@"], 0x0031);
	var0005 = UI_delayed_execute_usecode_array(UI_get_npc_object(0xFFFF), [(byte)0x23, (byte)0x52, "@我不知道...@" ], 0x0041);
	var0005 = UI_delayed_execute_usecode_array(UI_get_npc_object(0xFFF5), [(byte)0x23, (byte)0x52, "@他没有仇人啊...@" ], 0x0051);
	var0005 = UI_delayed_execute_usecode_array(UI_get_npc_object(0xFFFF), [(byte)0x23, (byte)0x52, "@可怜的人。@" ], 0x0061);
	var0005 = UI_delayed_execute_usecode_array(UI_get_npc_object(0xFFF5), [(byte)0x23, (byte)0x52, "@该怎么办？@"], 0x0071);
	var0005 = UI_delayed_execute_usecode_array(UI_get_npc_object(0xFFFF), [(byte)0x23, (byte)0x52, "@我不知道...@" ], 0x0081);
	gflags[0x005C] = true;
	abort;
	goto labelFunc0401_0173;
labelFunc0401_016C:
	UI_add_to_party(0xFFFF);
labelFunc0401_0173:
	if (!((gflags[0x003B] == false) && (event == 0x0002))) goto labelFunc0401_0268;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("一个健壮的老头打量着你，他看起来有点面熟。他先是愣住，随即露出惊喜的笑容。他张嘴大笑。「");
	message(var0000);
	message("我有没有看错？刚刚才正心想：『要是圣者那家伙在这就好了！』然后...你看看！谁说魔法完蛋了? 这就是活生生的证明！~~ 喂，你可知道，");
	message(var0000);
	message("。从上次见面到现在，不列颠尼亚已经过两百年了，怎么你都没老？」");
	say();
	message("Iolo 嘴里咕哝着：「看来大概不列颠尼亚的时间结构不同？哎，随便啦。」~~他恢复了正常的音量。「好吧，我确实老了一点。没办法，这段时间我一直在留在不列颠尼亚。」~~ 「不过...圣者！等我告诉其他人！他们一定很高兴见到你！欢迎来到 Trinsic！」");
	say();
	UI_show_npc_face(0xFFF5, 0x0000);
	if (!var0004) goto labelFunc0401_01B8;
	var0006 = "她";
	goto labelFunc0401_01BE;
labelFunc0401_01B8:
	var0006 = "他";
labelFunc0401_01BE:
	message("着急的农夫打断 Iolo：「先生，你要不要带");
	message(var0006);
	message(" 马厩去看看，这太可怕了！」");
	say();
	UI_remove_npc_face(0xFFF5);
	UI_show_npc_face(0xFFFF, 0x0000);
	message("Iolo 终于想起为他什么来 Trinsic，脸上的笑容没了。他点了点头~~ 「啊对，这位朋友 Petre 今天早上看到不太好的东西。马厩里面看看吧，我陪你一起。」");
	say();
	if (!(!UI_mouse_exists())) goto labelFunc0401_01E9;
	message("Iolo 把你拉到一旁低声说：「圣者，为了我们共同的理智着想，我强烈建议你该去买只鼠标。」");
	say();
labelFunc0401_01E9:
	var0007 = UI_delayed_execute_usecode_array(UI_get_npc_object(0xFE9C), [(byte)0x23, (byte)0x2C, (byte)0x27, 0x0014, (byte)0x55, 0x06FA], 0x0005);
	Func08DD();
	UI_add_to_party(0xFFFF);
	UI_set_schedule_type(UI_get_npc_object(0xFFF5), 0x0007);
	UI_set_schedule_type(UI_get_npc_object(0xFFF4), 0x0003);
	UI_halt_scheduled(UI_get_npc_object(0xFFFF));
	UI_halt_scheduled(UI_get_npc_object(0xFFF5));
	if (!(!gflags[0x003B])) goto labelFunc0401_0267;
	var0005 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x54, 0x0000, 0x0000]);
	gflags[0x003B] = true;
labelFunc0401_0267:
	abort;
labelFunc0401_0268:
	if (!(event == 0x0001)) goto labelFunc0401_0733;
	talked_book = false;
	var0000 = Func0908();
	var0001 = UI_get_party_list();
	var0002 = UI_get_npc_object(0xFFFF);
	var0003 = Func0909();
	UI_show_npc_face(0xFFFF, 0x0000);
	var0008 = Func08F7(0xFFF5);
	var0009 = Func08F7(0xFFFD);
	var000A = false;
	var000B = false;
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!gflags[0x02EA]) goto labelFunc0401_02ED;
	if (!(UI_get_timer(0x000B) < 0x0001)) goto labelFunc0401_02DD;
	message("「抱歉，我不跟小偷为伍。」");
	say();
	abort;
	goto labelFunc0401_02ED;
labelFunc0401_02DD:
	message("「好吧，我想你已经学到教训了。我会重新加入队伍。」");
	say();
	UI_add_to_party(0xFFFF);
	gflags[0x02EA] = false;
	abort;
labelFunc0401_02ED:
	if (!(!gflags[0x0057])) goto labelFunc0401_02FB;
	UI_add_answer("Trinsic");
labelFunc0401_02FB:
	if (!(var0002 in var0001)) goto labelFunc0401_030C;
	UI_add_answer("离队");
labelFunc0401_030C:
	if (!(!(var0002 in var0001))) goto labelFunc0401_031E;
	UI_add_answer("加入");
labelFunc0401_031E:
	if (!gflags[0x003F]) goto labelFunc0401_032B;
	UI_add_answer("友谊会");
labelFunc0401_032B:
	if (!var0008) goto labelFunc0401_0338;
	UI_add_answer("Petre");
labelFunc0401_0338:
	if (!(gflags[0x003C] && (!gflags[0x0057]))) goto labelFunc0401_034D;
	UI_add_answer("谋杀");
	goto labelFunc0401_0354;
labelFunc0401_034D:
	UI_add_answer("马厩");
labelFunc0401_0354:
	if (!gflags[0x003C]) goto labelFunc0401_0361;
	UI_remove_answer("马厩");
labelFunc0401_0361:
	message("「我的老朋友，你需要什么？」 Iolo 这么问道。");
	say();
labelFunc0401_0365:
	if (gflags[0x0345] && (UI_count_objects(0xFE9B, 0x0282, 149, 0) == 0) && !talked_book) {
		UI_add_answer("古文译本");
	}
	converse attend labelFunc0401_072E;
	case "姓名" attend labelFunc0401_0381:
	message("你朋友哼了一声。「你在开玩笑吗，");
	message(var0003);
	message("？认不出你的老朋友 Iolo 了吗？」");
	say();
	UI_remove_answer("姓名");
labelFunc0401_0381:
	case "古文译本" attend labelFunc0401_TransBook:
	message("「古文译本？我听说不列颠王有一本，这是能让人轻松阅读卢恩文的魔法工具。」");
	say();
	message("「说实话，我平时几乎没有在使用这些古文了。现在只有在一些路标、建筑铭版上会看到。」");
	say();
	message("「靠自己慢慢解读其实有点累…，有了它，在不列颠尼亚的旅途肯定会方便许多。」");
	say();
	talked_book = true;
	UI_remove_answer("古文译本");
labelFunc0401_TransBook:
	case "马厩" attend labelFunc0401_0394:
	message("「我觉得你最好亲自去看看，");
	message(var0000);
	message("然后─要有点心理准备，那景象蛮可怕的。」");
	say();
	abort;
labelFunc0401_0394:
	case "职业" attend labelFunc0401_03AE:
	message("「喔，当然是和传说中的英雄 —— 圣者一起冒险啊！」");
	say();
	UI_add_answer("圣者");
	UI_remove_answer("职业");
labelFunc0401_03AE:
	case "圣者" attend labelFunc0401_03D4:
	message("「毫无疑问，-你- 就是圣者，");
	message(var0000);
	message("！不过，你可能很难说服那些不认识你长相的人。~~「当然，和朋友们在一起，你-绝对是-安全的！」");
	say();
	UI_remove_answer("圣者");
	UI_add_answer(["麻烦事", "朋友们"]);
labelFunc0401_03D4:
	case "麻烦事" attend labelFunc0401_03E7:
	message("「嗯，毕竟你已经离开两百年了！大多数认得你的人早就不在了！很抱歉我说话这么直白，不过事实就是如此。」");
	say();
	UI_remove_answer("麻烦事");
labelFunc0401_03E7:
	case "谋杀" attend labelFunc0401_0415:
	if (!(!gflags[0x003D])) goto labelFunc0401_040A;
	message("「真的很凄惨，对吧？我个人是觉得 Christopher 和 Inamo 都不应该死这么惨。你最好跟镇上的每个人都打听一下。」");
	say();
	UI_add_answer(["Christopher", "Inamo"]);
	goto labelFunc0401_040E;
labelFunc0401_040A:
	message("「这还得靠你才有办法，我是没啥头绪。」 Iolo 咧着嘴笑，拍了拍你的背。");
	say();
labelFunc0401_040E:
	UI_remove_answer("谋杀");
labelFunc0401_0415:
	case "不列颠王" attend labelFunc0401_0452:
	var000A = true;
	if (!gflags[0x0065]) goto labelFunc0401_0432;
	message("「嗯，这我们私下讲，他看起来比我老多了！」");
	say();
	message("「那家伙知道很多事情。但他现在很少、几乎不出城了。」");
	say();
	goto labelFunc0401_0436;
labelFunc0401_0432:
	message("「不列颠王看到你一定乐坏了。我们得赶快去不列颠城一趟。他知道的事一向不少，应该能告诉你，这两百年到底发生了什么。」");
	say();
labelFunc0401_0436:
	if (!(!var000B)) goto labelFunc0401_0444;
	UI_add_answer("不列颠城");
labelFunc0401_0444:
	UI_add_answer("情报");
	UI_remove_answer("不列颠王");
labelFunc0401_0452:
	case "情报" attend labelFunc0401_0473:
	message("「当然。不列颠王总是有许多惊人的情报，对吧？他话可能不多，但是个好听众。应该是这原因，积了不少消息。」");
	say();
	if (!var0009) goto labelFunc0401_0468;
	message("「你说对吧，Shamino？」~~Shamino 一脸疑问转过头去，Iolo 在一旁偷笑。");
	say();
labelFunc0401_0468:
	message("「说到情报，倒是提醒了我一件事！有个东西可能对你有用─算盘。用它来算我们的钱吧。」");
	say();
	UI_remove_answer("情报");
labelFunc0401_0473:
	case "朋友们" attend labelFunc0401_0493:
	message("「你是说 Shamino 和 Dupre对吧，一定是。」");
	say();
	UI_remove_answer("朋友们");
	UI_add_answer(["Shamino", "Dupre"]);
labelFunc0401_0493:
	case "Dupre" attend labelFunc0401_050A:
	var000C = Func08F7(0xFFFC);
	if (!var000C) goto labelFunc0401_04E0;
	message("「哎呀，他在啊，");
	message(var0003);
	message(".」");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「对啊，我人在这啦，");
	message(var0003);
	message("。」");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「看吧？我就说！」");
	say();
	goto labelFunc0401_0503;
labelFunc0401_04E0:
	message("「他一定在某个地方，最后一次听说是在 Jhelom。话说，你知道他现在有骑士头衔吗？」");
	say();
	if (!Func090A()) goto labelFunc0401_04F1;
	message("「是不是难以置信？」");
	say();
	goto labelFunc0401_0503;
labelFunc0401_04F1:
	message("「这是真的！不列颠王最近真的封他当骑士了。不知道吾王倒底...在想啥！」");
	say();
	if (!(!var000A)) goto labelFunc0401_0503;
	UI_add_answer("不列颠王");
labelFunc0401_0503:
	UI_remove_answer("Dupre");
labelFunc0401_050A:
	case "Shamino" attend labelFunc0401_0567:
	if (!var0009) goto labelFunc0401_054E;
	message("「哎呀，他人就在这，");
	message(var0003);
	message(".」");
	say();
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「对啊我在这，");
	message(var0003);
	message("。」");
	say();
	UI_remove_npc_face(0xFFFD);
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「看吧？我就跟你讲！」");
	say();
	goto labelFunc0401_0560;
labelFunc0401_054E:
	message("「你要找那个家伙的话...去不列颠城看看。他女朋友在皇家剧院当演员。」");
	say();
	if (!(!var000B)) goto labelFunc0401_0560;
	UI_add_answer("不列颠城");
labelFunc0401_0560:
	UI_remove_answer("Shamino");
labelFunc0401_0567:
	case "Trinsic" attend labelFunc0401_0587:
	message("「这里变化不大，不过这紧张时刻...大家防备心比较重。你从红门出现那时候，我只是刚好路过来找朋友 Finnigan。」");
	say();
	UI_remove_answer("Trinsic");
	UI_add_answer(["防备心", "Finnigan"]);
labelFunc0401_0587:
	case "防备心" attend labelFunc0401_059A:
	message("「我想最好还是你自己去和村民聊聊。你上次来到现在已经发生了很多变化，圣者。我想有时你会觉得自己有点... 嗯，过时了。」");
	say();
	UI_remove_answer("防备心");
labelFunc0401_059A:
	case "不列颠城" attend labelFunc0401_05C6:
	var000B = true;
	message("「从你上次来到现在，它又变大了。Paws 现在已经是不列颠城实质上的附属城镇了！它主宰了不列颠尼亚的东海岸。」~~「不过不列颠王的城堡仍然是最引人注目的地标。」");
	say();
	UI_remove_answer("不列颠城");
	if (!(!var000A)) goto labelFunc0401_05BF;
	UI_add_answer("不列颠王");
labelFunc0401_05BF:
	UI_add_answer("Paws");
labelFunc0401_05C6:
	case "Paws" attend labelFunc0401_05D9:
	message("「它基本上还是在不列颠城和 Trinsic 之间，但土地范围已经扩到不列颠城内部。」");
	say();
	UI_remove_answer("Paws");
labelFunc0401_05D9:
	case "Finnigan" attend labelFunc0401_05EC:
	message("「他是个好人。身为 Trinsic 的镇长，我认识他好几年了。」");
	say();
	UI_remove_answer("Finnigan");
labelFunc0401_05EC:
	case "Christopher" attend labelFunc0401_0605:
	message("「我不认识他，");
	message(var0003);
	message("。」");
	say();
	UI_remove_answer("Christopher");
labelFunc0401_0605:
	case "Inamo" attend labelFunc0401_061F:
	message("「我没跟他讲过话。这真是太遗憾了。跟人类生活的石像鬼本来就不多，这下又更少了。」");
	say();
	UI_remove_answer("Inamo");
	UI_add_answer("石像鬼");
labelFunc0401_061F:
	case "离队" attend labelFunc0401_0696:
	message("Iolo 看起来很受伤。「你真的要我离开吗？」");
	say();
	var000D = Func090A();
	if (!var000D) goto labelFunc0401_0692;
	message("「你是要我留在这里等你，还是要我回 Yew 的家？」");
	say();
	UI_clear_answers();
	var000E = Func090B(["在这里等", "回家"]);
	if (!(var000E == "在这里等")) goto labelFunc0401_0675;
	message("「很好。我会在这里等你回来，并邀请我重新加入。」");
	say();
	UI_remove_from_party(0xFFFF);
	UI_set_schedule_type(UI_get_npc_object(0xFFFF), 0x000F);
	abort;
	goto labelFunc0401_068F;
labelFunc0401_0675:
	message("「那么，再会了。只要你希望，我随时都愿意重新加入。」 Iolo 转过身去。*");
	say();
	UI_remove_from_party(0xFFFF);
	UI_set_schedule_type(UI_get_npc_object(0xFFFF), 0x000B);
	abort;
labelFunc0401_068F:
	goto labelFunc0401_0696;
labelFunc0401_0692:
	message("「呼，你可吓死我了！」");
	say();
labelFunc0401_0696:
	case "加入" attend labelFunc0401_06E7:
	message("「我一直在等你开口呢！」");
	say();
	var000F = 0x0000;
	enum();
labelFunc0401_06A9:
	for (var0012 in var0001 with var0010 to var0011) attend labelFunc0401_06C1;
	var000F = (var000F + 0x0001);
	goto labelFunc0401_06A9;
labelFunc0401_06C1:
	if (!(var000F < 0x0008)) goto labelFunc0401_06E3;
	UI_add_to_party(0xFFFF);
	UI_remove_answer("加入");
	UI_add_answer("离队");
	goto labelFunc0401_06E7;
labelFunc0401_06E3:
	message("「看来与你同行的成员已经够多了！我会等到有人离开队伍时再加入。」");
	say();
labelFunc0401_06E7:
	case "石像鬼" attend labelFunc0401_06FA:
	message("「你上次离开不列颠尼亚后，石像鬼 已经开始与人类生活在一起。他们大多住在 Sutek 的旧岛上，现在改名为 『Terfin』。不过，你偶尔还是会在各地看到一两个。」");
	say();
	UI_remove_answer("石像鬼");
labelFunc0401_06FA:
	case "友谊会" attend labelFunc0401_070D:
	message("「我跟他们不熟。我知道应该是慈善团体，成立大概二十几年吧？大家蛮喜欢他们，在不列颠尼亚到处都有分会。不过我个人没有和他们打过交道。」");
	say();
	UI_remove_answer("友谊会");
labelFunc0401_070D:
	case "Petre" attend labelFunc0401_0720:
	message("「认识，没到非常熟。」");
	say();
	UI_remove_answer("Petre");
labelFunc0401_0720:
	case "告辞" attend labelFunc0401_072B:
	goto labelFunc0401_072E;
labelFunc0401_072B:
	goto labelFunc0401_0365;
labelFunc0401_072E:
	endconv;
	message("「跟你聊天真是我的荣幸，我的朋友。」");
	say();
labelFunc0401_0733:
	if (!(event == 0x0000)) goto labelFunc0401_0741;
	Func092E(0xFFFF);
labelFunc0401_0741:
	return;
}


