#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern void Func0911 0x911 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func047E object#(0x47E) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0001)) goto labelFunc047E_0353;
	UI_show_npc_face(0xFF82, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = UI_get_npc_object(0xFF82);
	var0003 = UI_get_npc_object(0xFF83);
	var0004 = UI_get_npc_object(0xFF81);
	var0005 = Func08F7(0xFF83);
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!gflags[0x0168]) goto labelFunc047E_0075;
	if (!(!(var0001 == 0x0004))) goto labelFunc047E_0075;
	if (!(!gflags[0x016A])) goto labelFunc047E_0075;
	UI_add_answer("归还旗帜");
labelFunc047E_0075:
	if (!(var0001 == 0x0004)) goto labelFunc047E_015F;
	if (!gflags[0x0168]) goto labelFunc047E_010D;
	if (!(!gflags[0x016A])) goto labelFunc047E_010D;
	message("「我看到 Sprellic 那个懦夫把旗帜给了你，好让它能还给我们。你最好交出来。」");
	say();
	var0006 = UI_remove_party_items(0x0001, 0x011E, 0xFE99, 0xFE99, 0xFE99);
	if (!var0006) goto labelFunc047E_00C6;
	message("她从你手中拿走旗帜。");
	say();
	message("「这件事现在解决了。但替我转告 Sprellic 那只可怜虫，他以后最好别碰别人的东西。」*");
	say();
	gflags[0x016A] = true;
	gflags[0x0164] = true;
	Func0911(0x0064);
	abort;
	goto labelFunc047E_010D;
labelFunc047E_00C6:
	message("「我们已经注意到你拿到了我们的荣誉旗帜。显然是 Sprellic 给你让你还给我们的。如果你想留下它，那我们现在的过节就是跟你了。」*");
	say();
	Func0911(0x0064);
	UI_set_alignment(var0002, 0x0003);
	UI_set_alignment(var0004, 0x0003);
	UI_set_alignment(var0003, 0x0003);
	UI_set_schedule_type(var0002, 0x0000);
	UI_set_schedule_type(var0004, 0x0000);
	UI_set_schedule_type(var0003, 0x0000);
	abort;
labelFunc047E_010D:
	if (!(gflags[0x0170] && (!gflags[0x0168]))) goto labelFunc047E_015F;
	message("「你也许是为了 Sprellic 而战，但我可是为了荣誉而战！」*");
	say();
	Func0911(0x0064);
	UI_set_alignment(var0002, 0x0003);
	UI_set_alignment(var0004, 0x0003);
	UI_set_alignment(var0003, 0x0003);
	UI_set_schedule_type(var0002, 0x0000);
	UI_set_schedule_type(var0004, 0x0000);
	UI_set_schedule_type(var0003, 0x0000);
	abort;
labelFunc047E_015F:
	if (!(!gflags[0x0178])) goto labelFunc047E_0171;
	message("站在你面前的是一位身材高挑的强悍女战士，她的双眼散发出对危险司空见惯的光芒。");
	say();
	gflags[0x0178] = true;
	goto labelFunc047E_0175;
labelFunc047E_0171:
	message("「看来我们又见面了，」Syria 说。");
	say();
labelFunc047E_0175:
	converse attend labelFunc047E_034E;
	case "姓名" attend labelFunc047E_018B:
	message("「我是 Syria，来自南方的战士。」");
	say();
	UI_remove_answer("姓名");
labelFunc047E_018B:
	case "职业" attend labelFunc047E_01A7:
	message("「目前我正从最后一次佣兵航行中休息。我在 Jhelom 这里向伤痕图书馆的战斗训练师 De Snel 学习。」");
	say();
	UI_add_answer(["Jhelom", "De Snel", "伤痕图书馆"]);
labelFunc047E_01A7:
	case "Jhelom" attend labelFunc047E_01C1:
	message("「这是一个战士与决斗的城市。如果你不喜欢这里的运作方式，那就离开。在这里决斗有许多原因。我有我自己战斗的理由。」");
	say();
	UI_add_answer("决斗");
	UI_remove_answer("Jhelom");
labelFunc047E_01C1:
	case "决斗" attend labelFunc047E_01F6:
	if (!(!gflags[0x0164])) goto labelFunc047E_01E4;
	message("「毫无疑问是 Sprellic 拿走了我们学校的荣誉旗帜。如果他不想决斗，他只需要把它还回来就行了。」");
	say();
	UI_add_answer(["Sprellic", "归还"]);
	goto labelFunc047E_01EF;
labelFunc047E_01E4:
	message("「真遗憾我们不能给那个小傻瓜一个教训。不过，我们已经赢回了我们的荣誉，这就足够了。目前为止。」");
	say();
	UI_add_answer("Sprellic");
labelFunc047E_01EF:
	UI_remove_answer("决斗");
labelFunc047E_01F6:
	case "归还" attend labelFunc047E_022E:
	message("「既然 Sprellic 没有这么做，这就证明了他对我们的严重侮辱是故意的。」*");
	say();
	if (!var0005) goto labelFunc047E_0227;
	UI_show_npc_face(0xFF83, 0x0000);
	message("「而我也将严重地侮辱他——穿过他的心脏！」*");
	say();
	UI_remove_npc_face(0xFF83);
	UI_show_npc_face(0xFF82, 0x0000);
labelFunc047E_0227:
	UI_remove_answer("归还");
labelFunc047E_022E:
	case "Sprellic" attend labelFunc047E_024F:
	if (!(!gflags[0x0164])) goto labelFunc047E_0244;
	message("「Sprellic 拿走我们俱乐部荣誉旗帜的时候是我在守卫。我看见他拿走了，但他在夜色中溜走了。我因为让小偷逃跑而被鞭打十下。我打算好好回报他。」");
	say();
	goto labelFunc047E_0248;
labelFunc047E_0244:
	message("「真遗憾我们不能给那个小傻瓜一个教训。也许我们已经给过他教训了。为了他自己好，他最好已经学乖了。」");
	say();
labelFunc047E_0248:
	UI_remove_answer("Sprellic");
labelFunc047E_024F:
	case "伤痕图书馆" attend labelFunc047E_0287:
	message("「伤痕图书馆是不列颠尼亚最伟大的战士公会。」*");
	say();
	if (!var0005) goto labelFunc047E_0280;
	UI_show_npc_face(0xFF83, 0x0000);
	message("「没错！没错！」*");
	say();
	UI_remove_npc_face(0xFF83);
	UI_show_npc_face(0xFF82, 0x0000);
labelFunc047E_0280:
	UI_remove_answer("伤痕图书馆");
labelFunc047E_0287:
	case "De Snel" attend labelFunc047E_029A:
	message("「De Snel 大师教授一种纯粹的战斗风格，超越了你之前可能学过的所有纪律。他是一位伟人。」");
	say();
	UI_remove_answer("De Snel");
labelFunc047E_029A:
	case "归还旗帜" attend labelFunc047E_0340:
	message("「我明白 Sprellic 那个懦夫把旗帜给了你，好让它能还给我们。你最好交出来。」");
	say();
	var0006 = UI_remove_party_items(0x0001, 0x011E, 0xFE99, 0xFE99, 0xFE99);
	if (!var0006) goto labelFunc047E_02DC;
	message("她从你手中拿走旗帜。");
	say();
	message("「这件事现在解决了。但替我转告 Sprellic 那只可怜虫，他以后最好别碰别人的东西。」");
	say();
	gflags[0x016A] = true;
	gflags[0x0164] = true;
	Func0911(0x0064);
	abort;
	goto labelFunc047E_0339;
labelFunc047E_02DC:
	message("「我们已经注意到你拿到了我们的荣誉旗帜。显然是 Sprellic 给你让你还给我们的。如果你想留下它，那我们现在的过节就是跟你了。」");
	say();
	if (!(!(var0001 == 0x0004))) goto labelFunc047E_02F2;
	message("「明天中午在决斗区见！」*");
	say();
	goto labelFunc047E_0338;
labelFunc047E_02F2:
	message("「准备受死吧！」*");
	say();
	Func0911(0x0064);
	UI_set_alignment(var0002, 0x0003);
	UI_set_alignment(var0004, 0x0003);
	UI_set_alignment(var0003, 0x0003);
	UI_set_schedule_type(var0002, 0x0000);
	UI_set_schedule_type(var0004, 0x0000);
	UI_set_schedule_type(var0003, 0x0000);
labelFunc047E_0338:
	abort;
labelFunc047E_0339:
	UI_remove_answer("归还旗帜");
labelFunc047E_0340:
	case "告辞" attend labelFunc047E_034B:
	goto labelFunc047E_034E;
labelFunc047E_034B:
	goto labelFunc047E_0175;
labelFunc047E_034E:
	endconv;
	message("「我们不喜欢干涉我们私事的人。我们会盯着你的。」*");
	say();
labelFunc047E_0353:
	if (!(event == 0x0000)) goto labelFunc047E_0361;
	Func092E(0xFF82);
labelFunc047E_0361:
	return;
}


