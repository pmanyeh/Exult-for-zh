#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0908 0x908 ();
extern void Func089E 0x89E (var var0000, var var0001, var var0002);
extern var Func090B 0x90B (var var0000);
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func0405 object#(0x405) ()
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
	var talked_book;

	if (!(event == 0x0001)) goto labelFunc0405_041C;
	talked_book = false;
	UI_show_npc_face(0xFFFB, 0x0000);
	var0000 = Func0909();
	var0001 = UI_get_npc_object(0xFFFB);
	var0002 = Func0908();
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(var0001 in UI_get_party_list())) goto labelFunc0405_004A;
	UI_add_answer("离队");
labelFunc0405_004A:
	if (!(!((var0001 in UI_get_party_list()) && gflags[0x0018]))) goto labelFunc0405_0061;
	UI_add_answer("加入");
labelFunc0405_0061:
	if (!gflags[0x00E4]) goto labelFunc0405_0074;
	if (!gflags[0x00EF]) goto labelFunc0405_0074;
	UI_add_answer("Lord Heather");
labelFunc0405_0074:
	if (!gflags[0x0028]) goto labelFunc0405_0081;
	UI_add_answer("治疗");
labelFunc0405_0081:
	if (!(!gflags[0x0018])) goto labelFunc0405_0093;
	message("你很惊讶地看到你的老同伴 Jaana ，自从你上次造访以来，她看起来只有稍微老了一点。");
	say();
	gflags[0x0018] = true;
	goto labelFunc0405_009D;
labelFunc0405_0093:
	message("「是的，");
	message(var0002);
	message("？」 Jaana 问。");
	say();
labelFunc0405_009D:
	if (gflags[0x0345] && (UI_count_objects(0xFE9B, 0x0282, 149, 0) == 0) && !talked_book) {
		UI_add_answer("古文译本");
	}
	converse attend labelFunc0405_0411;
	case "古文译本" attend labelFunc0405_TransBook:
	message("「这些符文，原本是德鲁依在使用的文本，所以每个符文都蕴藏自然的力量。」");
	say();
	message("「前人通过魔法阵，将为符文转化为用户能理解的方式，能帮助你看穿语言的迷雾，是个很好用的工具。」");
	say();
	message("「但现在大多遗失了！听说不列颠王还有藏本，可跟他询问看看。」");
	say();
	talked_book = true;
	UI_remove_answer("古文译本");
labelFunc0405_TransBook:
	case "姓名" attend labelFunc0405_00C4:
	message("「哎呀，我是 Jaana 啊。你应该记得我！」");
	say();
	UI_remove_answer("姓名");
	if (!gflags[0x00E4]) goto labelFunc0405_00C0;
	UI_add_answer("Lord Heather");
labelFunc0405_00C0:
	gflags[0x00EF] = true;
labelFunc0405_00C4:
	case "职业" attend labelFunc0405_00F7:
	message("「我担任 Cove 的治疗师已经有一段时间了，可以为你提供我的治疗服务。既然魔法不再可靠，我一直渴望加入冒险者的队伍，就像我的老朋友们一样。我怀念过去的生活！」");
	say();
	UI_add_answer(["治疗", "朋友们", "魔法"]);
	gflags[0x0028] = true;
	if (!(!(var0001 in UI_get_party_list()))) goto labelFunc0405_00F7;
	UI_add_answer("加入");
labelFunc0405_00F7:
	case "治疗" attend labelFunc0405_014F:
	if (!(var0001 in UI_get_party_list())) goto labelFunc0405_0143;
	if (!gflags[0x0029]) goto labelFunc0405_011D;
	var0003 = UI_get_timer(0x000A);
	goto labelFunc0405_0123;
labelFunc0405_011D:
	var0003 = 0x0005;
labelFunc0405_0123:
	if (!(var0003 < 0x0004)) goto labelFunc0405_0134;
	message("「抱歉，我必须等一会儿才能再次施展治疗。」");
	say();
	goto labelFunc0405_0140;
labelFunc0405_0134:
	Func089E(0x0000, 0x0000, 0x0000);
labelFunc0405_0140:
	goto labelFunc0405_014F;
labelFunc0405_0143:
	Func089E(0x001E, 0x000F, 0x0190);
labelFunc0405_014F:
	case "朋友们" attend labelFunc0405_0175:
	message("「我们的老朋友—— Iolo 、 Shamino 和 Dupre 。那些以不列颠王之名征服邪恶的男人们！」");
	say();
	UI_remove_answer("朋友们");
	UI_add_answer(["Iolo", "Shamino", "Dupre", "不列颠王"]);
labelFunc0405_0175:
	case "加入" attend labelFunc0405_01D3:
	var0004 = 0x0000;
	var0005 = UI_get_party_list();
	enum();
labelFunc0405_018B:
	for (var0008 in var0005 with var0006 to var0007) attend labelFunc0405_01A3;
	var0004 = (var0004 + 0x0001);
	goto labelFunc0405_018B;
labelFunc0405_01A3:
	if (!(var0004 < 0x0008)) goto labelFunc0405_01CF;
	message("「我很荣幸能加入你，");
	message(var0000);
	message("！」");
	say();
	UI_add_to_party(0xFFFB);
	UI_add_answer("离队");
	UI_remove_answer("加入");
	goto labelFunc0405_01D3;
labelFunc0405_01CF:
	message("「我相信你的队伍中旅行的成员已经够多了。我会等到有人离开，你再次邀请我时加入。」");
	say();
labelFunc0405_01D3:
	case "离队" attend labelFunc0405_0233:
	message("「你是想让我在这里等，还是想让我回家？」");
	say();
	UI_clear_answers();
	var0009 = Func090B(["在这里等", "回家"]);
	if (!(var0009 == "在这里等")) goto labelFunc0405_0219;
	message("「很好。我会等到你回来。」*");
	say();
	UI_remove_from_party(0xFFFB);
	UI_set_schedule_type(UI_get_npc_object(0xFFFB), 0x000F);
	abort;
	goto labelFunc0405_0233;
labelFunc0405_0219:
	message("「我遵从你的愿望。如果你邀请我，我很乐意重新加入。再见。」*");
	say();
	UI_remove_from_party(0xFFFB);
	UI_set_schedule_type(UI_get_npc_object(0xFFFB), 0x000B);
	abort;
labelFunc0405_0233:
	case "魔法" attend labelFunc0405_0254:
	if (!(!gflags[0x0003])) goto labelFunc0405_0249;
	message("「我的魔法受到了空气中某些东西的影响，但我发现我的感官还算正常。你有没有注意到这片土地上的法师们脑袋都出了问题？这非常令人不安。尽管如此，我大多数时候还是能施展一两个法术的。」");
	say();
	goto labelFunc0405_024D;
labelFunc0405_0249:
	message("「我感觉以太现在流动得很顺畅。魔法又复活了！」");
	say();
labelFunc0405_024D:
	UI_remove_answer("魔法");
labelFunc0405_0254:
	case "Lord Heather" attend labelFunc0405_02CD:
	message("Jaana 脸红了。「是的，我跟我们的镇长已经交往一段时间了。」");
	say();
	UI_remove_answer("Lord Heather");
	var000A = Func08F7(0xFFB3);
	if (!var000A) goto labelFunc0405_02CD;
	UI_show_npc_face(0xFFB3, 0x0000);
	message("「看来妳要离开 Cove 一段时间了，亲爱的？」*");
	say();
	UI_show_npc_face(0xFFFB, 0x0000);
	message("「是的，大人。但我会回来的。我向你保证。」*");
	say();
	UI_show_npc_face(0xFFB3, 0x0000);
	message("「我会尽量不为妳担心，但这很难。」*");
	say();
	UI_show_npc_face(0xFFFB, 0x0000);
	message("「别担心。跟圣者在一起我会很安全的。」*");
	say();
	UI_show_npc_face(0xFFB3, 0x0000);
	message("「我真的希望如此。」镇长拥抱了 Jaana 。*");
	say();
	UI_remove_npc_face(0xFFB3);
	UI_show_npc_face(0xFFFB, 0x0000);
labelFunc0405_02CD:
	case "Iolo" attend labelFunc0405_031A:
	var000B = Func08F7(0xFFFF);
	if (!(!var000B)) goto labelFunc0405_02EC;
	message("「他在哪里？能见到他真是太好了！」");
	say();
	goto labelFunc0405_0313;
labelFunc0405_02EC:
	message("「我看他跟以前一样啊！也许他的腰围比以前粗了一点……但如果太久没有去冒险，这也是意料之中的事！」*");
	say();
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「妳什么意思？『腰围粗了一点』才怪！」*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFFB, 0x0000);
	message("「我没有恶意， Iolo ！」");
	say();
labelFunc0405_0313:
	UI_remove_answer("Iolo");
labelFunc0405_031A:
	case "Shamino" attend labelFunc0405_0367:
	var000C = Func08F7(0xFFFD);
	if (!(!var000C)) goto labelFunc0405_0339;
	message("「噢，我很想见见他。不知道他会在哪里。」");
	say();
	goto labelFunc0405_0360;
labelFunc0405_0339:
	message("「Shamino ，你看起来不再像个『小孩子』了！发生了什么事？你到了三十岁这个令人尊敬的年纪了吗？」*");
	say();
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「哼。我内心还是个孩子。」*");
	say();
	UI_remove_npc_face(0xFFFD);
	UI_show_npc_face(0xFFFB, 0x0000);
	message("「那我就放心了。」她调皮地笑着。");
	say();
labelFunc0405_0360:
	UI_remove_answer("Shamino");
labelFunc0405_0367:
	case "Dupre" attend labelFunc0405_03F0:
	var000D = Func08F7(0xFFFC);
	if (!(!var000D)) goto labelFunc0405_0386;
	message("「我怀念和那个无赖喝上一两杯的时光！我们去找那个骑士吧！」");
	say();
	goto labelFunc0405_03DF;
labelFunc0405_0386:
	message("「对于一个刚被封为骑士的人来说，他还保留着他好看的外貌和男孩般的魅力，不是吗？」*");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「妳是指『男人味』的魅力吧，不是吗？」*");
	say();
	UI_show_npc_face(0xFFFB, 0x0000);
	message("「噢，『原谅』我，先生。你的不成熟让我一时糊涂了。」*");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「你要让她这样蒙混过关吗，");
	message(var0002);
	message("？」");
	say();
	var000E = Func090A();
	if (!var000E) goto labelFunc0405_03D4;
	message("Dupre 无言以对，气呼呼地转身离开。*");
	say();
	UI_remove_npc_face(0xFFFC);
	goto labelFunc0405_03DF;
labelFunc0405_03D4:
	message("「很好！」 Jaana 在他背后对你眨了眨眼。*");
	say();
	UI_remove_npc_face(0xFFFC);
labelFunc0405_03DF:
	UI_remove_answer("Dupre");
	UI_show_npc_face(0xFFFB, 0x0000);
labelFunc0405_03F0:
	case "不列颠王" attend labelFunc0405_0403:
	message("「我已经很多年没见到我们的君主了。」");
	say();
	UI_remove_answer("不列颠王");
labelFunc0405_0403:
	case "告辞" attend labelFunc0405_040E:
	goto labelFunc0405_0411;
labelFunc0405_040E:
	goto labelFunc0405_009D;
labelFunc0405_0411:
	endconv;
	message("「再见，");
	message(var0000);
	message(".\"*");
	say();
labelFunc0405_041C:
	if (!(event == 0x0000)) goto labelFunc0405_042A;
	Func092E(0xFFFB);
labelFunc0405_042A:
	return;
}


