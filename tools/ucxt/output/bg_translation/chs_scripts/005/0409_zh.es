#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0908 0x908 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090B 0x90B (var var0000);
extern void Func092E 0x92E (var var0000);

void Func0409 object#(0x409) ()
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
	var talked_book;

	if (!(event == 0x0001)) goto labelFunc0409_043C;
	talked_book = false;
	UI_show_npc_face(0xFFF7, 0x0000);
	var0000 = Func0909();
	var0001 = UI_get_party_list();
	var0002 = UI_get_npc_object(0xFFF7);
	var0003 = Func0908();
	var0004 = Func08F7(0xFFFD);
	var0005 = Func08F7(0xFFFF);
	var0006 = Func08F7(0xFFFC);
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(var0002 in var0001)) goto labelFunc0409_006B;
	UI_add_answer("离队");
labelFunc0409_006B:
	if (!gflags[0x018D]) goto labelFunc0409_0078;
	UI_add_answer("Henry");
labelFunc0409_0078:
	if (!gflags[0x017D]) goto labelFunc0409_0085;
	UI_add_answer("吊饰盒");
labelFunc0409_0085:
	if (!gflags[0x0180]) goto labelFunc0409_0092;
	UI_add_answer("陌生人");
labelFunc0409_0092:
	if (!(!gflags[0x001C])) goto labelFunc0409_00A4;
	message("你看到了你的老同伴 Katrina ，她看起来只比你上次造访时见到她稍微老了一点。");
	say();
	gflags[0x001C] = true;
	goto labelFunc0409_00AE;
labelFunc0409_00A4:
	message("「又见面了，");
	message(var0003);
	message("！」 Katrina 带着微笑向你打招呼。");
	say();
labelFunc0409_00AE:
	if (gflags[0x0345] && (UI_count_objects(0xFE9B, 0x0282, 149, 0) == 0) && !talked_book) {
		UI_add_answer("古文译本");
	}
	converse attend labelFunc0409_0431;
	case "古文译本" attend labelFunc0409_TransBook:
	message("「在 Magincia 放羊时，我偶尔会看到一些古老的遗迹，上面的文本总是让我很好奇。」");
	say();
	message("「有了这本宝典，我们就不用再像迷途的羔羊一样，面对那些古文不知所措了。」");
	say();
	message("「它一定能为我们的旅途带来不少便利！」");
	say();
	talked_book = true;
	UI_remove_answer("古文译本");
labelFunc0409_TransBook:
	case "姓名" attend labelFunc0409_00D5:
	message("「哎呀，」她对你眨眨眼，「我知道已经过很久了，但你肯定没忘记我吧。我是 Katrina 。你以前的同伴之一。」");
	say();
	message("你们在重逢时友善地笑了起来。");
	say();
	UI_add_answer(["老同伴", "时间"]);
	UI_remove_answer("姓名");
labelFunc0409_00D5:
	case "老同伴" attend labelFunc0409_00F8:
	message("「啊，是的， Iolo 、 Shamino 和 Dupre 。」");
	say();
	UI_remove_answer("老同伴");
	UI_add_answer(["Iolo", "Shamino", "Dupre"]);
labelFunc0409_00F8:
	case "时间" attend labelFunc0409_010B:
	message("「虽然我们世界和这个世界时间流逝的方式有很大的差异，但我肯定我至少老了一点，」她愉快地说。");
	say();
	UI_remove_answer("时间");
labelFunc0409_010B:
	case "职业" attend labelFunc0409_0159:
	if (!(!(var0002 in var0001))) goto labelFunc0409_0148;
	message("「哎呀，上次陪你冒险之后，我就在 New Magincia 定居，过着牧羊人平静的生活了。」");
	say();
	UI_add_answer(["牧羊人", "New Magincia"]);
	if (!(!(var0002 in var0001))) goto labelFunc0409_0145;
	message("「如果你需要我的话，我可以再次加入你的队伍。」");
	say();
	UI_add_answer("加入");
labelFunc0409_0145:
	goto labelFunc0409_0159;
labelFunc0409_0148:
	message("「跟着你到处跑，");
	message(var0000);
	message("！我绝对不会想念 New Magincia 的！」");
	say();
	UI_add_answer("New Magincia");
labelFunc0409_0159:
	case "牧羊人" attend labelFunc0409_016C:
	message("「我看顾着我的羊群，当镇民需要我时，我也会看顾他们。」");
	say();
	UI_remove_answer("牧羊人");
labelFunc0409_016C:
	case "加入" attend labelFunc0409_01D1:
	var0007 = 0x0000;
	var0001 = UI_get_party_list();
	enum();
labelFunc0409_0182:
	for (var000A in var0001 with var0008 to var0009) attend labelFunc0409_019A;
	var0007 = (var0007 + 0x0001);
	goto labelFunc0409_0182;
labelFunc0409_019A:
	if (!(var0007 < 0x0006)) goto labelFunc0409_01C6;
	message("「这是我的荣幸，");
	message(var0000);
	message("!」");
	say();
	UI_add_to_party(0xFFF7);
	UI_add_answer("离队");
	UI_remove_answer("加入");
	goto labelFunc0409_01CA;
labelFunc0409_01C6:
	message("「我比较喜欢人少一点，圣者。或许晚点吧。」");
	say();
labelFunc0409_01CA:
	UI_remove_answer("加入");
labelFunc0409_01D1:
	case "离队" attend labelFunc0409_0231:
	message("「你是想让我在这里等，还是我该回家了？」");
	say();
	UI_clear_answers();
	var000B = Func090B(["在这里等", "回家"]);
	if (!(var000B == "在这里等")) goto labelFunc0409_0217;
	message("「我很乐意在这里等你回来。」*");
	say();
	UI_remove_from_party(0xFFF7);
	UI_set_schedule_type(UI_get_npc_object(0xFFF7), 0x000F);
	abort;
	goto labelFunc0409_0231;
labelFunc0409_0217:
	message("「如果你觉得这样最好，我会的。如果你再需要我，只需开口。」*");
	say();
	UI_remove_from_party(0xFFF7);
	UI_set_schedule_type(UI_get_npc_object(0xFFF7), 0x000B);
	abort;
labelFunc0409_0231:
	case "New Magincia" attend labelFunc0409_024B:
	message("「我们这里与世隔绝。我们得不到外面世界的任何消息。生活跟两百年前你上次造访不列颠尼亚时差不多。我在这里有很多朋友。」");
	say();
	UI_add_answer("与世隔绝");
	UI_remove_answer("New Magincia");
labelFunc0409_024B:
	case "与世隔绝" attend labelFunc0409_0271:
	message("「这就是我们这里喜欢的方式。现在岛上还有另外三个陌生人——除了你之外。当然，你很难被称为陌生人。这是我们这几年来访客最多的一次。~~「但是，别担心，");
	message(var0003);
	message("，我很少感到孤单。」");
	say();
	UI_remove_answer("与世隔绝");
	UI_add_answer(["孤单", "访客"]);
labelFunc0409_0271:
	case "孤单" attend labelFunc0409_0294:
	message("「我在这里有很多朋友。当我感到孤单时，我会跟智者 Alagner 、造船匠 Russell 或小贩 Henry 聊天。」");
	say();
	UI_remove_answer("孤单");
	UI_add_answer(["Alagner", "Russell", "Henry"]);
labelFunc0409_0294:
	case "Alagner" attend labelFunc0409_02A7:
	message("「他是个智者，知道很多事情，还会讲精彩的故事。 Alagner 来到这里是为了逃避外面的世界。我不知道为什么。」");
	say();
	UI_remove_answer("Alagner");
labelFunc0409_02A7:
	case "Russell" attend labelFunc0409_02BA:
	message("「他有着水手的心、艺术家的灵魂和工匠的手。他从未实现他航海环游世界的梦想。他的船只替他实现了。」");
	say();
	UI_remove_answer("Russell");
labelFunc0409_02BA:
	case "Henry" attend labelFunc0409_02D4:
	message("「Henry 多年来一直是我非常亲爱的朋友。他是个单纯的好人，心里对任何人都不曾有一丝怨恨。我非常喜欢他，所以给了他一件珍贵的传家宝。」");
	say();
	UI_remove_answer("Henry");
	UI_add_answer("传家宝");
labelFunc0409_02D4:
	case "吊饰盒", "传家宝" attend labelFunc0409_02F8:
	message("「因为他没什么钱，所以我把我的金属吊饰盒给了 Henry ，好让他能送给他的心上人 Constance 。我最近没跟他说话，但我必须承认我很担心他。」");
	say();
	UI_remove_answer("吊饰盒");
	UI_remove_answer("传家宝");
	UI_add_answer("担心");
labelFunc0409_02F8:
	case "担心" attend labelFunc0409_030B:
	message("「Henry 带着吊饰盒离开后不久，我看到岛上的那三个陌生人朝着同一个方向游荡过去了。」");
	say();
	UI_remove_answer("担心");
labelFunc0409_030B:
	case "访客", "陌生人" attend labelFunc0409_032B:
	message("「这三位访客来自海盗巢穴 (Buccaneer's Den)。在他们到达后不久，我见到了他们，我们简短地交谈了几句。 Robin 是那个打扮得像赌徒的人，另外两个， Battles 和 Leavell ，看起来像恶霸。」");
	say();
	UI_remove_answer(["陌生人", "访客"]);
	gflags[0x0180] = true;
labelFunc0409_032B:
	case "Iolo" attend labelFunc0409_0379:
	if (!(!var0005)) goto labelFunc0409_0341;
	message("「Iolo 应该在我们的队伍里，和我们一起冒险。」");
	say();
	goto labelFunc0409_0372;
labelFunc0409_0341:
	message("「这些年来你过得怎么样， Iolo？」*");
	say();
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「岁月对我显然没有对妳那么宽容，女士。」*");
	say();
	UI_show_npc_face(0xFFF7, 0x0000);
	message("「哈！看来你还是个无赖， Iolo。」*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFF7, 0x0000);
labelFunc0409_0372:
	UI_remove_answer("Iolo");
labelFunc0409_0379:
	case "Shamino" attend labelFunc0409_03C7:
	if (!(!var0004)) goto labelFunc0409_038F;
	message("「Shamino 应该和我们在这里。」");
	say();
	goto labelFunc0409_03C0;
labelFunc0409_038F:
	message("「我看到你头发里有白头发吗， Shamino？」*");
	say();
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「才不是！哪里？」*");
	say();
	UI_show_npc_face(0xFFF7, 0x0000);
	message("「也许只是光线的把戏吧。」*");
	say();
	UI_remove_npc_face(0xFFFD);
	UI_show_npc_face(0xFFF7, 0x0000);
labelFunc0409_03C0:
	UI_remove_answer("Shamino");
labelFunc0409_03C7:
	case "Dupre" attend labelFunc0409_0423:
	if (!(!var0006)) goto labelFunc0409_03DD;
	message("「我忍不住有点想念 Dupre 。自从他被封为骑士后，我就没见过他了。」");
	say();
	goto labelFunc0409_041C;
labelFunc0409_03DD:
	message("「Dupre 爵士，你完成你的学业了吗？」*");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("Dupre 看起来很困惑。「我的学业，女士？」*");
	say();
	UI_show_npc_face(0xFFF7, 0x0000);
	message("「对于不列颠尼亚各式各样的饮酒场所的研究！」*");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「噢，是的，当然，我的学业！继续我的教育对我来说一直是最重要的。」*");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFFF7, 0x0000);
labelFunc0409_041C:
	UI_remove_answer("Dupre");
labelFunc0409_0423:
	case "告辞" attend labelFunc0409_042E:
	goto labelFunc0409_0431;
labelFunc0409_042E:
	goto labelFunc0409_00AE;
labelFunc0409_0431:
	endconv;
	message("「祝你有个愉快的一天，");
	message(var0003);
	message("。」*");
	say();
labelFunc0409_043C:
	if (!(event == 0x0000)) goto labelFunc0409_044A;
	Func092E(0xFFF7);
labelFunc0409_044A:
	return;
}


