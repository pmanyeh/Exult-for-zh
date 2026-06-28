#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090B 0x90B (var var0000);
extern var Func090A 0x90A ();
extern void Func0911 0x911 (var var0000);
extern void Func0878 0x878 (var var0000, var var0001);
extern void Func092E 0x92E (var var0000);

void Func0477 object#(0x477) ()
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

	if (!(event == 0x0001)) goto labelFunc0477_02E0;
	UI_show_npc_face(0xFF89, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFF89));
	var0003 = UI_get_npc_object(0xFF89);
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x0171])) goto labelFunc0477_0059;
	message("虽然他看起来没有敌意，但这个男人以战斗的姿势迎接你。");
	say();
	gflags[0x0171] = true;
	goto labelFunc0477_005D;
labelFunc0477_0059:
	message("「你需要什么？」 De Snel 问。");
	say();
labelFunc0477_005D:
	var0004 = UI_is_dead(0xFF84);
	if (!var0004) goto labelFunc0477_0074;
	UI_add_answer("Sprellic");
labelFunc0477_0074:
	var0005 = UI_is_dead(0xFF83);
	var0006 = UI_is_dead(0xFF82);
	var0007 = UI_is_dead(0xFF81);
	if (!(var0005 && (var0006 && var0007))) goto labelFunc0477_00A7;
	UI_add_answer("决斗者");
labelFunc0477_00A7:
	if (!gflags[0x016A]) goto labelFunc0477_00B4;
	UI_add_answer("荣誉旗");
labelFunc0477_00B4:
	converse attend labelFunc0477_02BA;
	case "姓名" attend labelFunc0477_00CA:
	message("「我被称为 De Snel 大师。」");
	say();
	UI_remove_answer("姓名");
labelFunc0477_00CA:
	case "职业" attend labelFunc0477_00E6:
	message("「我在 Jhelom 经营著名的格斗学校，伤疤图书馆 (Library of Scars) 。如果战士展现出潜力，我有时也会亲自训练他们。」");
	say();
	UI_add_answer(["Jhelom", "伤疤图书馆", "潜力"]);
labelFunc0477_00E6:
	case "潜力" attend labelFunc0477_0100:
	message("「我教导一种我自己发明的战斗风格。它能让人完全压制对手。我可以为你安排一个小小的示范……」");
	say();
	UI_add_answer("示范");
	UI_remove_answer("潜力");
labelFunc0477_0100:
	case "Jhelom" attend labelFunc0477_0113:
	message("「这座城市致力于战斗的艺术。不只是盲目的军事纪律，而是纯粹的暴力对抗。这是一个合我心意的地方。」");
	say();
	UI_remove_answer("Jhelom");
labelFunc0477_0113:
	case "伤疤图书馆" attend labelFunc0477_0145:
	if (!(var0002 == 0x0007)) goto labelFunc0477_0139;
	message("「一所拥有悠久、自豪历史的菁英战士学校。许多伟大的战士都在它的墙内接受过训练。这个组织甚至拥有自己的特殊武器。」");
	say();
	UI_add_answer(["战士", "武器"]);
	goto labelFunc0477_013E;
labelFunc0477_0139:
	message("「我现在不想谈生意。或许改天吧。」");
	say();
	abort;
labelFunc0477_013E:
	UI_remove_answer("伤疤图书馆");
labelFunc0477_0145:
	case "战士" attend labelFunc0477_0158:
	message("「我训练我的学生们成为凶猛无情的战士！」");
	say();
	UI_remove_answer("战士");
labelFunc0477_0158:
	case "武器" attend labelFunc0477_018D:
	message("他拔出自己的剑给你看。剑上刻有精致的蛇形图案。「你可以通过刻痕认出伤疤图书馆的武器。那是蛇的标志。攻击迅速、无声、致命，就跟我们一样！」");
	say();
	UI_remove_answer("武器");
	var0008 = Func0931(0xFE9B, 0x0001, 0x027C, 0xFE99, 0xFE99);
	if (!var0008) goto labelFunc0477_018D;
	UI_add_answer("匕首");
labelFunc0477_018D:
	case "匕首" attend labelFunc0477_01FD:
	message("你拿出在 Minoc 谋杀现场发现的匕首。蛇形的刻痕与伤疤图书馆的标记完全吻合。 De Snel 看了看它，然后转头看你。他无法掩饰自己的惊讶。~「你从哪里弄来那把匕首的？」");
	say();
	UI_push_answers();
	var0009 = Func090B(["找到了", "谋杀现场"]);
	if (!(var0009 == "找到了")) goto labelFunc0477_01BA;
	message("De Snel 盯着你看，显然知道你在说谎。");
	say();
labelFunc0477_01BA:
	if (!(var0009 == "谋杀现场")) goto labelFunc0477_01C8;
	message("你看着 De Snel 的眼睛，告诉他你是在 Minoc 的谋杀现场找到的。他给了你一个好奇的眼神。");
	say();
labelFunc0477_01C8:
	message("「那把匕首几周前从伤疤图书馆被偷了。我对此一无所知。」");
	say();
	message("「顺带一提，你看过我训练技巧的示范吗？」");
	say();
	if (!Func090A()) goto labelFunc0477_01DD;
	message("「那或许你应该再来一场。」");
	say();
	goto labelFunc0477_01E1;
labelFunc0477_01DD:
	message("「那或许你应该试试看。」");
	say();
labelFunc0477_01E1:
	UI_pop_answers();
	UI_remove_answer("匕首");
	UI_add_answer("示范");
	gflags[0x016C] = true;
	Func0911(0x0032);
labelFunc0477_01FD:
	case "示范" attend labelFunc0477_0248:
	if (!gflags[0x016C]) goto labelFunc0477_0227;
	message("「很好。让我们开始吧！」*");
	say();
	UI_set_alignment(var0003, 0x0002);
	UI_set_schedule_type(var0003, 0x0000);
	abort;
	goto labelFunc0477_0248;
labelFunc0477_0227:
	message("「我必须为我的失礼道歉，但我无与伦比的才华要求我为训练示范收取 40 个金币。你接受吗？」");
	say();
	if (!Func090A()) goto labelFunc0477_023D;
	Func0878(0x0004, 0x0028);
	goto labelFunc0477_0248;
labelFunc0477_023D:
	message("「那很好！」他的怒容显示了他的不悦。「如果你不喜欢，或许伤疤图书馆不是适合你的地方。」");
	say();
	UI_remove_answer("示范");
labelFunc0477_0248:
	case "Sprellic" attend labelFunc0477_025B:
	message("「正如你可能看到的，我们几名成员因为荣誉旗和一个当地的麻烦制造者发生了争执。我们伤疤图书馆对我们的组织有着强烈的奉献精神。我不知道这个暴发户具体发生了什么事，但我知道他现在已经死了。当然，我不是在暗示伤疤图书馆与此有关。只是想说，最好别惹我们。」");
	say();
	UI_remove_answer("Sprellic");
labelFunc0477_025B:
	case "决斗者" attend labelFunc0477_0299:
	message("「我听说你在为那个偷我们荣誉旗的小偷辩护的决斗中，杀了我们几名成员。」他瞇起眼睛紧盯着你。「太出色了！我这个人最看重的就是技巧的运用。我为你的胜利向你致敬。或许你想加入我们的组织？」");
	say();
	var000A = Func090A();
	if (!var000A) goto labelFunc0477_0292;
	if (!gflags[0x016C]) goto labelFunc0477_0287;
	message("「你的同伴和你看起来够强壮，适合进行一场非正式的练习。就把它当作我战斗风格的示范吧。」");
	say();
	UI_add_answer("示范");
	goto labelFunc0477_0292;
labelFunc0477_0287:
	message("「因为我的战斗风格是优越的风格，我只对训练最优秀的人有兴趣。或许你的同伴和你够资格。我们可以测试看看，前提是，如果你够勇敢的话。」");
	say();
	UI_add_answer("示范");
labelFunc0477_0292:
	UI_remove_answer("决斗者");
labelFunc0477_0299:
	case "荣誉旗" attend labelFunc0477_02AC:
	message("「对 Sprellic 来说幸运的是，我们的荣誉旗被归还了。如果没有，我们别无选择，只能用他的血来挽回我们的荣誉。」");
	say();
	UI_remove_answer("荣誉旗");
labelFunc0477_02AC:
	case "告辞" attend labelFunc0477_02B7:
	goto labelFunc0477_02BA;
labelFunc0477_02B7:
	goto labelFunc0477_00B4;
labelFunc0477_02BA:
	endconv;
	if (!gflags[0x016C]) goto labelFunc0477_02DC;
	message("「你休想没有进行示范就这么轻易走掉！无论如何你都得来一场！」*");
	say();
	UI_set_alignment(var0003, 0x0002);
	UI_set_schedule_type(var0003, 0x0000);
	goto labelFunc0477_02E0;
labelFunc0477_02DC:
	message("「愿你在 Jhelom 有个难忘的时光，」 De Snel 大笑着转身离开。*");
	say();
labelFunc0477_02E0:
	if (!(event == 0x0000)) goto labelFunc0477_02EE;
	Func092E(0xFF89);
labelFunc0477_02EE:
	return;
}


