#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern void Func0875 0x875 (var var0000, var var0001);
extern void Func092E 0x92E (var var0000);

void Func0431 object#(0x431) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0001)) goto labelFunc0431_0106;
	UI_show_npc_face(0xFFCF, 0x0000);
	UI_add_answer(["姓名", "职业", "告辞"]);
	var0000 = UI_part_of_day();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFFCF));
	if (!(!gflags[0x00B2])) goto labelFunc0431_0049;
	message("你看见一位眼神锐利、性格严肃的战士。");
	say();
	gflags[0x00B2] = true;
	goto labelFunc0431_004D;
labelFunc0431_0049:
	message("「有事吗，圣者？」 Denby 问。");
	say();
labelFunc0431_004D:
	converse attend labelFunc0431_0101;
	case "姓名" attend labelFunc0431_0063:
	message("「我是 Denby 。」");
	say();
	UI_remove_answer("姓名");
labelFunc0431_0063:
	case "职业" attend labelFunc0431_007F:
	message("「我是个训练员。我专精于一种依赖个人能力、运用智力和体力来启动微小魔法效果的战斗形式。但我不是法师。我是一名战士。」");
	say();
	UI_add_answer(["魔法效果", "战士", "训练"]);
labelFunc0431_007F:
	case "魔法效果" attend labelFunc0431_009D:
	message("「举例来说，我只教导一种能增进智力的身心结合练习。如果一个人渴望练习魔法，这反过来会带给他优势。」");
	say();
	if (!(!gflags[0x0003])) goto labelFunc0431_0096;
	message("「然而，你应该意识到，这些日子不列颠尼亚的魔法并不管用。这是一种正在消亡的现象。没有人了解为什么。尽管如此，我的训练应该能增加任何魔法用户的施法基础几率，以及他们的战斗技巧。」");
	say();
labelFunc0431_0096:
	UI_remove_answer("魔法效果");
labelFunc0431_009D:
	case "战士" attend labelFunc0431_00B0:
	message("「虽然我是一名战士，但我将我的生命奉献给和平。这个世界已经有太多争斗了。让历史来处理存在于人类身上的敌对特质吧。我相信将我的技能当作一种威慑手段。」");
	say();
	UI_remove_answer("战士");
labelFunc0431_00B0:
	case "训练" attend labelFunc0431_00F3:
	if (!(var0001 == 0x0007)) goto labelFunc0431_00E8;
	message("「我的训练费用是 75 金币。这有获得你钱包的同意吗？」");
	say();
	if (!Func090A()) goto labelFunc0431_00E1;
	Func0875([0x0001, 0x0002, 0x0006], 0x004B);
	goto labelFunc0431_00E5;
labelFunc0431_00E1:
	message("Denby 鞠躬。「很抱歉我的费用对你来说太高了。也许下次你会明白我服务的价值。」");
	say();
labelFunc0431_00E5:
	goto labelFunc0431_00F3;
labelFunc0431_00E8:
	message("「如果你希望训练，请在白天回来。」");
	say();
	UI_remove_answer("训练");
labelFunc0431_00F3:
	case "告辞" attend labelFunc0431_00FE:
	goto labelFunc0431_0101;
labelFunc0431_00FE:
	goto labelFunc0431_004D;
labelFunc0431_0101:
	endconv;
	message("Denby 双手合十并鞠躬。*");
	say();
labelFunc0431_0106:
	if (!(event == 0x0000)) goto labelFunc0431_0114;
	Func092E(0xFFCF);
labelFunc0431_0114:
	return;
}


