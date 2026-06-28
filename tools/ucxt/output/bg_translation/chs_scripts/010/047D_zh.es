#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern void Func0911 0x911 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func047D object#(0x47D) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0001)) goto labelFunc047D_0246;
	UI_show_npc_face(0xFF83, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = UI_get_npc_object(0xFF83);
	var0003 = UI_get_npc_object(0xFF81);
	var0004 = UI_get_npc_object(0xFF82);
	var0005 = Func08F7(0xFF82);
	var0006 = Func08F7(0xFF81);
	if (!(!gflags[0x0177])) goto labelFunc047D_0067;
	message("你看到一名战士。当他向你打招呼时，他的声音如雷鸣般宏亮。「向你致敬，");
	message(var0000);
	message("！」");
	say();
	gflags[0x0177] = true;
	goto labelFunc047D_006B;
labelFunc047D_0067:
	message("「那么，我再次为你效劳，」Vokes 大声说道。");
	say();
labelFunc047D_006B:
	if (!gflags[0x0168]) goto labelFunc047D_0080;
	if (!(!gflags[0x0164])) goto labelFunc047D_007D;
	message("「如果你想归还伤痕图书馆的荣誉旗帜，那么理应把它还给它被偷时正在守卫的 Syria。请这么做。」*");
	say();
	abort;
labelFunc047D_007D:
	goto labelFunc047D_00E1;
labelFunc047D_0080:
	if (!gflags[0x0170]) goto labelFunc047D_00E1;
	if (!(var0001 == 0x0004)) goto labelFunc047D_00DA;
	message("「所以，你想为懦弱的 Sprellic 而战！那我就别无选择，只能亲手解决你了！」*");
	say();
	Func0911(0x0064);
	UI_set_alignment(var0002, 0x0003);
	UI_set_alignment(var0004, 0x0003);
	UI_set_alignment(var0003, 0x0003);
	UI_set_schedule_type(var0002, 0x0000);
	UI_set_schedule_type(var0003, 0x0000);
	UI_set_schedule_type(var0004, 0x0000);
	abort;
	goto labelFunc047D_00E1;
labelFunc047D_00DA:
	message("「所以，你想为懦弱的 Sprellic 而战！明天中午在决斗区见！」");
	say();
	goto labelFunc047D_00E1;
labelFunc047D_00E1:
	UI_add_answer(["姓名", "职业", "告辞"]);
labelFunc047D_00F1:
	converse attend labelFunc047D_0241;
	case "姓名" attend labelFunc047D_010D:
	message("「我的名字是 Vokes，");
	message(var0000);
	message("。像山一样巨大，像牛一样强壮，像……嗯，比你交手过的任何东西都还要凶猛！」");
	say();
	UI_remove_answer("姓名");
labelFunc047D_010D:
	case "职业" attend labelFunc047D_0126:
	message("「职业！我可没有犁田或卖菜的习惯，");
	message(var0000);
	message("！我用这条挥剑的手臂赚取金币，」他一边说着，一边展示强壮的二头肌。「现在我正在 Jhelom 跟随 De Snel 继续精进我的技艺，等我学成后，我的身价就会上涨！」");
	say();
	UI_add_answer("Jhelom");
labelFunc047D_0126:
	case "Jhelom" attend labelFunc047D_0140:
	message("「我是在这里出生的！这不是很壮观吗？！在这里，一天中的任何时间，你都可以毫无理由地跟任何人决斗！这才叫文明的好处！」");
	say();
	UI_add_answer("决斗");
	UI_remove_answer("Jhelom");
labelFunc047D_0140:
	case "决斗" attend labelFunc047D_017F:
	message("「一种责任，是的，甚至是一种必然。拥有荣誉的代价，就是必须捍卫自己的荣誉。谁也说不准下一个荣誉上的污点何时何地会出现。比如说这个叫 Sprellic 的傻瓜。就是个完美的例子！」*");
	say();
	if (!var0005) goto labelFunc047D_0171;
	UI_show_npc_face(0xFF82, 0x0000);
	message("「我肯定会在他的荣誉上留下一个污点。一个血红色的污点！」*");
	say();
	UI_remove_npc_face(0xFF82);
	UI_show_npc_face(0xFF83, 0x0000);
labelFunc047D_0171:
	UI_add_answer("Sprellic");
	UI_remove_answer("决斗");
labelFunc047D_017F:
	case "Sprellic" attend labelFunc047D_01D9:
	if (!(!gflags[0x0164])) goto labelFunc047D_01CE;
	message("「这个该死的白痴根本不知道他拿走我们的荣誉旗帜时会被看见。因此，他从未想过他必须为我们被玷污的荣誉进行一场决斗。但现在全镇都在谈论这件事，我们不可能不挺身而出。特别是既然他拒绝归还从我们这里拿走的东西。」*");
	say();
	if (!var0006) goto labelFunc047D_01B7;
	UI_show_npc_face(0xFF81, 0x0000);
	message("「要不是他是个无赖，他就会看出自己行为的愚蠢。现在该轮到我们给他点颜色看看了！」*");
	say();
	UI_remove_npc_face(0xFF81);
	UI_show_npc_face(0xFF83, 0x0000);
labelFunc047D_01B7:
	UI_add_answer("荣誉旗帜");
	if (!gflags[0x0186]) goto labelFunc047D_01CB;
	UI_add_answer("误会");
labelFunc047D_01CB:
	goto labelFunc047D_01D2;
labelFunc047D_01CE:
	message("「如果他没有把荣誉旗帜还给我们，我们一定会像我站在这里一样确定地杀了他。」");
	say();
labelFunc047D_01D2:
	UI_remove_answer("Sprellic");
labelFunc047D_01D9:
	case "荣誉旗帜" attend labelFunc047D_01F3:
	message("「关于伤痕图书馆的荣誉旗帜，有一个广为人知且由来已久的传统。据说从墙上拿下旗帜是一个信号，意味着拿下旗帜的人可以在战斗中击败任何在该学校学习的人。这也是一种极具侮辱性的方式，表示你认为该学校教授的战斗方法很低劣，而伤痕图书馆绝对不是这样的！」");
	say();
	UI_add_answer("伤痕图书馆");
	UI_remove_answer("荣誉旗帜");
labelFunc047D_01F3:
	case "误会" attend labelFunc047D_0206:
	message("「我听过那种说这一切都是误会的废话。唯一会被误会的，就是当我们解决 Sprellic 时，他会有多难看！」");
	say();
	UI_remove_answer("误会");
labelFunc047D_0206:
	case "伤痕图书馆" attend labelFunc047D_0220:
	message("「伤痕图书馆教授的是最顶尖的战斗风格！通过 De Snel 大师构思精妙的战术，这种风格能让你对抗对手时取得优势，并将他们彻底击败！」");
	say();
	UI_add_answer("De Snel");
	UI_remove_answer("伤痕图书馆");
labelFunc047D_0220:
	case "De Snel" attend labelFunc047D_0233:
	message("「他是个天才。也许是有史以来最伟大的军事家。他是这么告诉我们的！」");
	say();
	UI_remove_answer("De Snel");
labelFunc047D_0233:
	case "告辞" attend labelFunc047D_023E:
	goto labelFunc047D_0241;
labelFunc047D_023E:
	goto labelFunc047D_00F1;
labelFunc047D_0241:
	endconv;
	message("「如果我没被杀，你没被杀，也许有一天我们可以一起喝一杯！」*");
	say();
labelFunc047D_0246:
	if (!(event == 0x0000)) goto labelFunc047D_0254;
	Func092E(0xFF83);
labelFunc047D_0254:
	return;
}


