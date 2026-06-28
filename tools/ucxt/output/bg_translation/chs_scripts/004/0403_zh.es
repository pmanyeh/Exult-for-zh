#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090B 0x90B (var var0000);
extern void Func092E 0x92E (var var0000);

void Func0403 object#(0x403) ()
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

	if (!(event == 0x0001)) goto labelFunc0403_04B2;
	talked_book = false;
	UI_show_npc_face(0xFFFD, 0x0000);
	var0000 = UI_is_pc_female();
	var0001 = UI_get_party_list();
	var0002 = UI_get_npc_object(0xFFFD);
	var0003 = Func0908();
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!gflags[0x02EC]) goto labelFunc0403_006C;
	if (!(UI_get_timer(0x000B) < 0x0001)) goto labelFunc0403_005C;
	message("「抱歉，我不加入小偷的行列。」");
	say();
	abort;
	goto labelFunc0403_006C;
labelFunc0403_005C:
	message("「好吧，我想你已经得到教训了。我会重新加入。」");
	say();
	UI_add_to_party(0xFFFD);
	gflags[0x02EC] = false;
	abort;
labelFunc0403_006C:
	if (!gflags[0x006D]) goto labelFunc0403_0079;
	UI_add_answer("Amber");
labelFunc0403_0079:
	if (!gflags[0x006E]) goto labelFunc0403_0086;
	UI_add_answer("安定下来");
labelFunc0403_0086:
	if (!(var0002 in var0001)) goto labelFunc0403_0097;
	UI_add_answer("离队");
labelFunc0403_0097:
	if (!(!(var0002 in var0001))) goto labelFunc0403_00A9;
	UI_add_answer("加入");
labelFunc0403_00A9:
	if (!(!gflags[0x0016])) goto labelFunc0403_00BB;
	message("你的老朋友 Shamino 站在你面前，你惊讶地发现他终于步入了所谓的『中年』。");
	say();
	gflags[0x0016] = true;
	goto labelFunc0403_00C5;
labelFunc0403_00BB:
	message("「是的，");
	message(var0003);
	message("？」 Shamino 问道。");
	say();
labelFunc0403_00C5:
	if (gflags[0x0345] && (UI_count_objects(0xFE9B, 0x0282, 149, 0) == 0) && !talked_book) {
		UI_add_answer("古文译本");
	}
	converse attend labelFunc0403_04AD;
	case "古文译本" attend labelFunc0403_TransBook:
	message("「在荒野中生存，解读古老的标记和卢恩文是必备的技能。」");
	say();
	message("「不过，既然你有了古文译本，我想我们在探索那些古老遗迹时能省下不少时间。」");
	say();
	message("「希望它不会在我们最需要的时候失去魔力。」");
	say();
	talked_book = true;
	UI_remove_answer("古文译本");
labelFunc0403_TransBook:
	case "姓名" attend labelFunc0403_00DB:
	message("你的朋友看着你，就像你失去理智一样。「是 Shamino 。『Sha-mi-no』。」");
	say();
	UI_remove_answer("姓名");
labelFunc0403_00DB:
	case "职业" attend labelFunc0403_0106:
	message("「我希望是跟你一起去冒险！我已经厌倦了在不列颠城闲晃。我们还有很多事可以做！话说回来，你到底去哪了？」");
	say();
	if (!(!gflags[0x00D5])) goto labelFunc0403_00F9;
	message("「但请告诉我，是什么风把你吹来的！」");
	say();
	UI_add_answer("Trinsic 的谋杀案");
labelFunc0403_00F9:
	UI_add_answer(["不列颠城", "成就"]);
labelFunc0403_0106:
	case "成就" attend labelFunc0403_0126:
	message("「嗯，我不知道你是否意识到了，但我们在整体魔法以及月之门方面遇到了很多问题。」");
	say();
	UI_remove_answer("成就");
	UI_add_answer(["魔法", "月之门"]);
labelFunc0403_0126:
	case "不列颠城" attend labelFunc0403_0146:
	message("「是的，我最近都在不列颠城，试图找工作。你知道冒险的机会太少了。人总得找些『其他』的消遣。这倒提醒我了……我有你的怀表。」");
	say();
	UI_remove_answer("不列颠城");
	UI_add_answer(["消遣", "怀表"]);
labelFunc0403_0146:
	case "怀表" attend labelFunc0403_0196:
	if (!(!gflags[0x00D9])) goto labelFunc0403_0185;
	message("「你上次造访不列颠尼亚时把它留下了。拿去吧。」");
	say();
	var0004 = UI_add_party_items(0x0001, 0x009F, 0xFE99, 0xFE99, false);
	if (!var0004) goto labelFunc0403_017E;
	message("Shamino 把怀表交给你。");
	say();
	gflags[0x00D9] = true;
	goto labelFunc0403_0182;
labelFunc0403_017E:
	message("「哎呀。你的手太满了，拿不了。晚点再问我吧。」");
	say();
labelFunc0403_0182:
	goto labelFunc0403_018F;
labelFunc0403_0185:
	message("「我已经把怀表给你了，");
	message(var0003);
	message("。希望你别再把它弄丢了！」");
	say();
labelFunc0403_018F:
	UI_remove_answer("怀表");
labelFunc0403_0196:
	case "消遣" attend labelFunc0403_0214:
	message("「老样子。我不常看到我们的老朋友，而不列颠王也很少找我做事。我当然没时间去寻欢作乐或喝酒——我长大了一点。」*");
	say();
	UI_remove_answer("消遣");
	var0005 = Func08F7(0xFFFF);
	if (!var0005) goto labelFunc0403_0214;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「咳咳，我听说了些关于某个女演员的事，不是吗？」*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「你对这事知道多少？」*");
	say();
	UI_show_npc_face(0xFFFF, 0x0000);
	message("\"");
	message(var0003);
	message("，问他关于『Amber』的事。」*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「你这头猪， Iolo 。」");
	say();
	UI_add_answer(["Amber", "朋友们", "不列颠王"]);
labelFunc0403_0214:
	case "不列颠王" attend labelFunc0403_0236:
	if (!(!gflags[0x0098])) goto labelFunc0403_022B;
	message("「我建议你立刻去见他！」*");
	say();
	abort;
	goto labelFunc0403_022F;
labelFunc0403_022B:
	message("「我很高兴我看起来没有『他』那么老！」");
	say();
labelFunc0403_022F:
	UI_remove_answer("不列颠王");
labelFunc0403_0236:
	case "朋友们" attend labelFunc0403_0256:
	message("「我想你是指 Iolo 和 Dupre 吧？」");
	say();
	UI_remove_answer("朋友们");
	UI_add_answer(["Iolo", "Dupre"]);
labelFunc0403_0256:
	case "Iolo" attend labelFunc0403_02A2:
	var0005 = Func08F7(0xFFFF);
	if (!var0005) goto labelFunc0403_0297;
	message("「你是说那个可悲的、假装是弓箭手的家伙吗？」*");
	say();
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「注意你的言辞，无赖！」*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「是的，那就是 Iolo ！」");
	say();
	goto labelFunc0403_029B;
labelFunc0403_0297:
	message("「他肯定在附近某处。你上次把他留在哪里了？」");
	say();
labelFunc0403_029B:
	UI_remove_answer("Iolo");
labelFunc0403_02A2:
	case "Dupre" attend labelFunc0403_034C:
	var0006 = Func08F7(0xFFFC);
	if (!var0006) goto labelFunc0403_0333;
	message("「你是说那个无可救药的酒色之徒吗？」*");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「别忘了，我只要用拇指就能把你的脸捏得像棉花糖一样碎。」*");
	say();
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「是的，那就是 Dupre ！」*");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「是 Dupre 『爵士』！」*");
	say();
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「Dupuke 爵士？你是说 Dupuke 爵士吗？」*");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("\"Du-pre-!\"*");
	say();
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「『请原谅』我， Dupuke 爵士！」*");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「我不听了。」*");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFFFD, 0x0000);
	goto labelFunc0403_0345;
labelFunc0403_0333:
	if (!(!gflags[0x0017])) goto labelFunc0403_0341;
	message("「我相信他在 Jhelom 。」");
	say();
	goto labelFunc0403_0345;
labelFunc0403_0341:
	message("「他肯定在附近某处！」");
	say();
labelFunc0403_0345:
	UI_remove_answer("Dupre");
labelFunc0403_034C:
	case "加入" attend labelFunc0403_03A4:
	var0007 = 0x0000;
	var0001 = UI_get_party_list();
	enum();
labelFunc0403_0362:
	for (var000A in var0001 with var0008 to var0009) attend labelFunc0403_037A;
	var0007 = (var0007 + 0x0001);
	goto labelFunc0403_0362;
labelFunc0403_037A:
	if (!(var0007 < 0x0008)) goto labelFunc0403_0392;
	message("Shamino 看起来松了一口气。「我『太』高兴你这么问我了。」他收拾好装备准备跟随你。");
	say();
	UI_add_to_party(0xFFFD);
	goto labelFunc0403_0396;
labelFunc0403_0392:
	message("「嗯。我不喜欢人多。我会等到你的队伍人数减少后再加入。」");
	say();
labelFunc0403_0396:
	UI_add_answer("离队");
	UI_remove_answer("加入");
labelFunc0403_03A4:
	case "离队" attend labelFunc0403_0404:
	message("「嗯。你只是想让我在这里等，还是想让我回家？」");
	say();
	UI_clear_answers();
	var000B = Func090B(["在这里等", "回家"]);
	if (!(var000B == "在这里等")) goto labelFunc0403_03EA;
	message("「很好。我会等待你的归来。」*");
	say();
	UI_remove_from_party(0xFFFD);
	UI_set_schedule_type(UI_get_npc_object(0xFFFD), 0x000F);
	abort;
	goto labelFunc0403_0404;
labelFunc0403_03EA:
	message("「我真的很不愿意，但既然你坚持的话。」 Shamino 勉强地收拾好他的物品。*");
	say();
	UI_remove_from_party(0xFFFD);
	UI_set_schedule_type(UI_get_npc_object(0xFFFD), 0x000B);
	abort;
labelFunc0403_0404:
	case "Trinsic 的谋杀案" attend labelFunc0403_041B:
	message("Shamino 倾听你讲述这个故事。「我很荣幸能加入并帮助你调查这件事。」");
	say();
	gflags[0x00D5] = true;
	UI_remove_answer("Trinsic 的谋杀案");
labelFunc0403_041B:
	case "月之门" attend labelFunc0403_043C:
	if (!(!gflags[0x0004])) goto labelFunc0403_0431;
	message("「我对它们无法正常运作感到困惑。」");
	say();
	goto labelFunc0403_0435;
labelFunc0403_0431:
	message("「真遗憾你被困在这里。」");
	say();
labelFunc0403_0435:
	UI_remove_answer("月之门");
labelFunc0403_043C:
	case "魔法" attend labelFunc0403_0475:
	if (!(!gflags[0x0003])) goto labelFunc0403_0464;
	if (!(!gflags[0x006C])) goto labelFunc0403_045D;
	message("「全不列颠尼亚的魔法似乎都受到了干扰。说，你还记得大森林里的 Nicodemus 吗？他疯了，而且变得非常愚蠢。也许我们该去拜访他。」");
	say();
	gflags[0x006C] = true;
	goto labelFunc0403_0461;
labelFunc0403_045D:
	message("「它运作得不好。我不明白为什么。」");
	say();
labelFunc0403_0461:
	goto labelFunc0403_046E;
labelFunc0403_0464:
	message("「它现在应该运作得非常好了，");
	message(var0003);
	message("。」");
	say();
labelFunc0403_046E:
	UI_remove_answer("魔法");
labelFunc0403_0475:
	case "Amber" attend labelFunc0403_048C:
	message("当你提到她的名字时，你看到 Shamino 的眼中闪烁着光芒。他显然是被迷住了。~~「她是我认识的一位女演员。」");
	say();
	UI_remove_answer("Amber");
	gflags[0x006B] = true;
labelFunc0403_048C:
	case "安定下来" attend labelFunc0403_049F:
	message("「那个女人！她就是不明白我必须要有我的冒险！我还不能安定下来。『还』不行！或许快了吧。」~~ Shamino 看起来很忧虑。「我已经长大了。一点点。」");
	say();
	UI_remove_answer("安定下来");
labelFunc0403_049F:
	case "告辞" attend labelFunc0403_04AA:
	goto labelFunc0403_04AD;
labelFunc0403_04AA:
	goto labelFunc0403_00C5;
labelFunc0403_04AD:
	endconv;
	message("Shamino 微微鞠躬。*");
	say();
labelFunc0403_04B2:
	if (!(event == 0x0000)) goto labelFunc0403_04C0;
	Func092E(0xFFFD);
labelFunc0403_04C0:
	return;
}


