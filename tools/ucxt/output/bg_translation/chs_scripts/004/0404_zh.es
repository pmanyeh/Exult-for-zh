#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0908 0x908 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090B 0x90B (var var0000);
extern void Func092E 0x92E (var var0000);

void Func0404 object#(0x404) ()
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
	var var0013;
	var talked_book;

	if (!(event == 0x0001)) goto labelFunc0404_0508;
	talked_book = false;
	UI_show_npc_face(0xFFFC, 0x0000);
	if (!gflags[0x02EB]) goto labelFunc0404_003E;
	if (!(UI_get_timer(0x000B) < 0x0001)) goto labelFunc0404_002E;
	message("「抱歉，我不加入小偷的行列。」");
	say();
	abort;
	goto labelFunc0404_003E;
labelFunc0404_002E:
	message("「好吧，我想你已经得到教训了。我会重新加入。」");
	say();
	UI_add_to_party(0xFFFC);
	gflags[0x02EB] = false;
	abort;
labelFunc0404_003E:
	var0000 = Func0909();
	var0001 = UI_get_party_list();
	var0002 = UI_get_npc_object(0xFFFC);
	var0003 = Func0908();
	var0004 = Func08F7(0xFFFF);
	var0005 = Func08F7(0xFFFD);
	var0006 = Func08F7(0xFFFE);
	var0007 = UI_is_dead(UI_get_npc_object(0xFFFF));
	var0008 = UI_is_dead(UI_get_npc_object(0xFFFD));
	var0009 = UI_is_dead(UI_get_npc_object(0xFFFE));
	var000A = UI_is_dead(UI_get_npc_object(0xFF84));
	var000B = UI_is_dead(UI_get_npc_object(0xFF83));
	var000C = UI_is_dead(UI_get_npc_object(0xFF82));
	var000D = UI_is_dead(UI_get_npc_object(0xFF81));
	var000E = UI_wearing_fellowship();
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(var0002 in var0001)) goto labelFunc0404_0100;
	UI_add_answer("离队");
labelFunc0404_0100:
	if (!gflags[0x0006]) goto labelFunc0404_010D;
	UI_add_answer("友谊会");
labelFunc0404_010D:
	if (!var0006) goto labelFunc0404_011A;
	UI_add_answer("Spark");
labelFunc0404_011A:
	if (!(!gflags[0x0017])) goto labelFunc0404_012C;
	message("你看到你的好朋友 Dupre 熟悉的面孔。虽然老了一些，但他似乎仍然充满了他平时那种随性的幽默感。");
	say();
	gflags[0x0017] = true;
	goto labelFunc0404_0136;
labelFunc0404_012C:
	message("「我有什么能帮你的吗，");
	message(var0003);
	message("？」 Dupre 爵士问道。");
	say();
labelFunc0404_0136:
	if (gflags[0x0345] && (UI_count_objects(0xFE9B, 0x0282, 149, 0) == 0) && !talked_book) {
		UI_add_answer("古文译本");
	}
	converse attend labelFunc0404_0503;
	case "古文译本" attend labelFunc0404_TransBook:
	message("「古文译本？听起来是个好东西！只要它能帮我们更快找到哪里有最好的酒馆，或是看懂那些该死的酒单，我就完全赞成。」");
	say();
	message("「干杯！为了不用再盯着那些酒单发愁！」");
	say();
	talked_book = true;
	UI_remove_answer("古文译本");
labelFunc0404_TransBook:
	case "姓名" attend labelFunc0404_01A7:
	message("「哎呀，你不认得我了吗？是我，不列颠王！」他笑着说。「当你看到你的朋友 Dupre 时，你认不出他来了吗，");
	message(var0003);
	message("？」");
	say();
	if (!var0005) goto labelFunc0404_0177;
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「别这么谦虚， Dupre 爵士。你应该告诉圣者，自从你们上次见面以来，你已经被封为骑士了。」*");
	say();
	UI_remove_npc_face(0xFFFD);
	UI_show_npc_face(0xFFFC, 0x0000);
	message("Dupre 爵士看起来相当尴尬。「嗯，是的，我本来打算说的。」");
	say();
	goto labelFunc0404_01A0;
labelFunc0404_0177:
	if (!var0004) goto labelFunc0404_01A0;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「别这么谦虚， Dupre 爵士。你应该告诉圣者，自从你们上次见面以来，你已经被封为骑士了。」*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFFC, 0x0000);
	message("Dupre 爵士看起来相当尴尬。「嗯，是的，我本来打算说的。」");
	say();
labelFunc0404_01A0:
	UI_remove_answer("姓名");
labelFunc0404_01A7:
	case "职业" attend labelFunc0404_01DE:
	if (!(!gflags[0x016D])) goto labelFunc0404_01D3;
	message("「我有段时间没见到我们的老朋友了。目前我正在对不列颠尼亚各式各样的饮酒场所进行研究。目前我大约完成了一半。但这并不能阻止我跟你一起冒险，");
	message(var0003);
	message("。」");
	say();
	UI_add_answer(["朋友们", "Jhelom", "加入"]);
	goto labelFunc0404_01DE;
labelFunc0404_01D3:
	message("「我目前的工作是尽可能让你和你的朋友们远离麻烦！」他眨眨眼，给了你一个和善的笑容。");
	say();
	UI_add_answer("朋友们");
labelFunc0404_01DE:
	case "朋友们" attend labelFunc0404_01FE:
	message("「我们的老朋友—— Iolo 和 Shamino 。」");
	say();
	UI_remove_answer("朋友们");
	UI_add_answer(["Iolo", "Shamino"]);
labelFunc0404_01FE:
	case "加入" attend labelFunc0404_025A:
	var000F = 0x0000;
	var0001 = UI_get_party_list();
	enum();
labelFunc0404_0214:
	for (var0012 in var0001 with var0010 to var0011) attend labelFunc0404_022C;
	var000F = (var000F + 0x0001);
	goto labelFunc0404_0214;
labelFunc0404_022C:
	if (!(var000F < 0x0008)) goto labelFunc0404_024F;
	message("「能再次加入你的冒险，对我来说既是荣幸也是乐事。」");
	say();
	gflags[0x016D] = true;
	UI_add_to_party(0xFFFC);
	UI_add_answer("离队");
	goto labelFunc0404_0253;
labelFunc0404_024F:
	message("「嗯。对我来说太拥挤了。如果你的队伍减少了一两名成员，再回来找我吧。」");
	say();
labelFunc0404_0253:
	UI_remove_answer("加入");
labelFunc0404_025A:
	case "离队" attend labelFunc0404_02D0:
	message("「你是想让我在这里等，还是真的想让我离开回家？」");
	say();
	UI_clear_answers();
	var0013 = Func090B(["在这里等", "回家"]);
	if (!(var0013 == "在这里等")) goto labelFunc0404_02A4;
	message("「很好。我会等待你的归来。」*");
	say();
	UI_remove_from_party(0xFFFC);
	UI_set_schedule_type(UI_get_npc_object(0xFFFC), 0x000F);
	gflags[0x016D] = false;
	abort;
	goto labelFunc0404_02D0;
labelFunc0404_02A4:
	message("「如果那真的是你的愿望，我将离开你的队伍。如果你再需要我，只需开口。」他转身离开你，显然很失望。*");
	say();
	UI_remove_from_party(0xFFFC);
	gflags[0x016D] = false;
	UI_set_schedule_type(UI_get_npc_object(0xFFFC), 0x000B);
	abort;
	UI_add_answer("加入");
	UI_remove_answer("离队");
labelFunc0404_02D0:
	case "Jhelom" attend labelFunc0404_02F0:
	message("「这有点像不列颠尼亚的旧时代，在你上次造访的那段日子，只是更加嗜血。 Jhelom 当地的运动是决斗。」");
	say();
	UI_remove_answer("Jhelom");
	UI_add_answer(["旧时代", "决斗"]);
labelFunc0404_02F0:
	case "旧时代" attend labelFunc0404_0303:
	message("「这些人仍然相信任何问题都可以通过打人或刺伤人来解决。他们让我想起了一个更原始但没那么复杂的时代。也许这就是人们住在这里的原因——为了逃避他们的现代问题。」");
	say();
	UI_remove_answer("旧时代");
labelFunc0404_0303:
	case "决斗" attend labelFunc0404_0347:
	if (!(!gflags[0x016A])) goto labelFunc0404_033C;
	if (!(!(var000B && (var000C && var000D)))) goto labelFunc0404_0335;
	message("「现在镇上正为了三名当地斗士而议论纷纷，他们全都向另一个男人发起了决斗挑战。被挑战的人名叫 Sprellic 。」");
	say();
	UI_add_answer(["斗士", "Sprellic"]);
	goto labelFunc0404_0339;
labelFunc0404_0335:
	message("「也许现在 Jhelom 的几个当地流氓被好好教训了一顿之后，镇上的事情会平静下来。虽然我怀疑这能维持多久。」");
	say();
labelFunc0404_0339:
	goto labelFunc0404_0340;
labelFunc0404_033C:
	message("「也许自从你向镇上的人展示了分歧可以在不流血的情况下解决之后， Jhelom 的事情会平静一段时间。但我表示怀疑。」");
	say();
labelFunc0404_0340:
	UI_remove_answer("决斗");
labelFunc0404_0347:
	case "Sprellic" attend labelFunc0404_0391:
	if (!var000A) goto labelFunc0404_035C;
	message("「我有点遗憾，我们没有为那个叫 Sprellic 的旅馆老板说情。他确实非常需要我们的帮助。」 Dupre 的眼神看起来有点悲伤。");
	say();
	goto labelFunc0404_038A;
labelFunc0404_035C:
	if (!(!gflags[0x016A])) goto labelFunc0404_038A;
	if (!(!(var000B && (var000C && var000D)))) goto labelFunc0404_0386;
	message("「我怀疑他这辈子有没有拿过剑。当我下注时，我通常会押在弱势一方，但就连我也不会鲁莽到把钱押在他身上。那家伙根本不是斗士，他是旅馆老板！」");
	say();
	UI_add_answer(["鲁莽", "旅馆老板"]);
	goto labelFunc0404_038A;
labelFunc0404_0386:
	message("「你救了那个可怜小个子 Sprellic 的命。他确实给自己惹了不少麻烦。」 Dupre 忍不住咧嘴笑了起来。「不过，结果好就好。」");
	say();
labelFunc0404_038A:
	UI_remove_answer("Sprellic");
labelFunc0404_0391:
	case "鲁莽" attend labelFunc0404_03B1:
	message("「对这个叫 Sprellic 的家伙来说，说他鲁莽已经是称赞了！他看起来就像这辈子从来没打过架一样。我不知道他为什么要挑起别人决斗。这真是个谜。」");
	say();
	UI_remove_answer("鲁莽");
	if (!gflags[0x0186]) goto labelFunc0404_03B1;
	UI_add_answer("误会");
labelFunc0404_03B1:
	case "误会" attend labelFunc0404_03C4:
	message("你把 Sprellic 告诉你的事告诉了 Dupre 。「嗯。我想我对这个人的评价太严苛了。我想你，呃，我们应该为这件事做点什么！」");
	say();
	UI_remove_answer("误会");
labelFunc0404_03C4:
	case "旅馆老板" attend labelFunc0404_03E5:
	if (!(!gflags[0x0186])) goto labelFunc0404_03DA;
	message("「我不知道他故事的具体细节，但你可以自己去问他。他大约一小时前回到他的房子里，就没有出来过。他一定是花了很多时间在找什么东西。」");
	say();
	goto labelFunc0404_03DE;
labelFunc0404_03DA:
	message("「这可怜的人一直躲在他的房子里不肯出来。」");
	say();
labelFunc0404_03DE:
	UI_remove_answer("旅馆老板");
labelFunc0404_03E5:
	case "Iolo" attend labelFunc0404_0445:
	if (!var0007) goto labelFunc0404_03FA;
	message("「发生在我们可怜朋友 Iolo 身上的事太可怕了。我们必须想办法把他的尸体送到治疗师那里，也许还有时间让他复活。我好想念他。」");
	say();
	goto labelFunc0404_043E;
labelFunc0404_03FA:
	if (!var0004) goto labelFunc0404_043A;
	message("\"");
	message(var0003);
	message("，有个奇怪的老人跟着你，而且他长得有点像 Iolo ！这太奇怪了。」*");
	say();
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「你一定是喝醉了，视线模糊了， Dupre 爵士。」*");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「那你最好晚点也来陪我喝一杯。这样你才有机会赶上我。」");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFFC, 0x0000);
	goto labelFunc0404_043E;
labelFunc0404_043A:
	message("「我们应该找到那个无赖 Iolo ，让他跟我们一起走。」");
	say();
labelFunc0404_043E:
	UI_remove_answer("Iolo");
labelFunc0404_0445:
	case "斗士" attend labelFunc0404_0458:
	message("「两男一女。他们的名字分别是 Timmons 、 Vokes 和 Syria 。」");
	say();
	UI_remove_answer("斗士");
labelFunc0404_0458:
	case "Shamino" attend labelFunc0404_04B2:
	if (!var0008) goto labelFunc0404_046D;
	message("「我们优秀的同志 Shamino 遭遇了悲惨的命运。我们会非常想念他的。我们必须设法将他的遗体送到治疗师那里。也许他还能被复活。」");
	say();
	goto labelFunc0404_04AB;
labelFunc0404_046D:
	if (!var0005) goto labelFunc0404_04A7;
	message("Dupre 爵士哼了一声，「据我所知， Shamino 几乎已经安定下来，从冒险生活中退休了。」*");
	say();
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「我还有一些未竟的狂野梦想，非常感谢你。」*");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「那么很高兴能再次见到我们老播种圈的另一位成员！」");
	say();
	UI_remove_npc_face(0xFFFD);
	UI_show_npc_face(0xFFFC, 0x0000);
	goto labelFunc0404_04AB;
labelFunc0404_04A7:
	message("「我们去找 Shamino ，来一场真正的重聚吧！」");
	say();
labelFunc0404_04AB:
	UI_remove_answer("Shamino");
labelFunc0404_04B2:
	case "友谊会" attend labelFunc0404_04CF:
	if (!var000E) goto labelFunc0404_04C4;
	message("Dupre 爵士盯着你脖子上的友谊会徽章看了好一会儿。「你一定是在开玩笑吧，」他哼了一声。");
	say();
labelFunc0404_04C4:
	message("「我还是不敢相信你居然加入了友谊会。如果你想证明为了完成任务，你什么荒谬的事都做得出来，那么你成功了。」");
	say();
	UI_remove_answer("友谊会");
labelFunc0404_04CF:
	case "Spark" attend labelFunc0404_04F5:
	if (!var0009) goto labelFunc0404_04E4;
	message("「 Spark ，那个可怜勇敢的小伙子，已经不在我们身边了。我们应该尽力将他的遗体送到治疗师那里，好让他复活。」");
	say();
	goto labelFunc0404_04EE;
labelFunc0404_04E4:
	message("Dupre 用大拇指指着 Spark 。「他也要加入我们吗？」他对你嘀咕着，「你是想让我服老吗，");
	message(var0003);
	message("？」");
	say();
labelFunc0404_04EE:
	UI_remove_answer("Spark");
labelFunc0404_04F5:
	case "告辞" attend labelFunc0404_0500:
	goto labelFunc0404_0503;
labelFunc0404_0500:
	goto labelFunc0404_0136;
labelFunc0404_0503:
	endconv;
	message("「那么我晚点再跟你说话。」*");
	say();
labelFunc0404_0508:
	if (!(event == 0x0000)) goto labelFunc0404_0516;
	Func092E(0xFFFC);
labelFunc0404_0516:
	return;
}


