#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern void Func08D0 0x8D0 (var var0000, var var0001);
extern void Func092E 0x92E (var var0000);

void Func044C object#(0x44C) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0001)) goto labelFunc044C_0156;
	UI_show_npc_face(0xFFB4, 0x0000);
	var0000 = UI_part_of_day();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFFB4));
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!gflags[0x00E4]) goto labelFunc044C_004A;
	if (!gflags[0x00EE]) goto labelFunc044C_004A;
	UI_add_answer("Pamela");
labelFunc044C_004A:
	if (!(!gflags[0x00E9])) goto labelFunc044C_006A;
	message("你惊动了一位似乎正陷入沉思的战士。");
	say();
	if (!(var0001 == 0x001B)) goto labelFunc044C_0063;
	message("他的狗似乎也在冥想。");
	say();
labelFunc044C_0063:
	gflags[0x00E9] = true;
	goto labelFunc044C_006E;
labelFunc044C_006A:
	message("「再次问候，」Rayburt 说。");
	say();
labelFunc044C_006E:
	converse attend labelFunc044C_014D;
	case "姓名" attend labelFunc044C_00AA:
	message("「我是 Rayburt。」");
	say();
	if (!(var0001 == 0x001B)) goto labelFunc044C_0092;
	message("他转向那只狗。「这是 Regal。」");
	say();
	UI_add_answer("Regal");
labelFunc044C_0092:
	UI_remove_answer("姓名");
	if (!gflags[0x00E4]) goto labelFunc044C_00A6;
	UI_add_answer("Pamela");
labelFunc044C_00A6:
	gflags[0x00EE] = true;
labelFunc044C_00AA:
	case "职业" attend labelFunc044C_00C3:
	message("「我是一名训练师。我专精于一种依赖专注和冥想的战斗风格。它能提升你的敏捷和智力，以及你的战斗技巧。」");
	say();
	UI_add_answer(["冥想", "训练"]);
labelFunc044C_00C3:
	case "Regal" attend labelFunc044C_00D6:
	message("「牠是非常聪明的动物。牠了解冥想的生活方式。」~~Rayburt 丢给狗一块饼干，狗眨眼间就把它吞了。「牠也很可爱，」Rayburt 一脸严肃地说。");
	say();
	UI_remove_answer("Regal");
labelFunc044C_00D6:
	case "Pamela" attend labelFunc044C_00E9:
	message("你看到 Rayburt 脸上闪过一丝微笑。「她和我是一体的。」");
	say();
	UI_remove_answer("Pamela");
labelFunc044C_00E9:
	case "冥想" attend labelFunc044C_00FC:
	message("「在挥出第一击之前，大部分的战斗都发生在心智中。胜利的关键是首先在心中赢得内在的战斗。赢得那场内在的战斗就是我帮助学生学习的。」");
	say();
	UI_remove_answer("冥想");
labelFunc044C_00FC:
	case "训练" attend labelFunc044C_013F:
	if (!(var0001 == 0x001B)) goto labelFunc044C_0134;
	message("「我每堂课收费 60 枚金币，但你会获益良多。你能接受吗？」");
	say();
	if (!Func090A()) goto labelFunc044C_012D;
	Func08D0([0x0001, 0x0002, 0x0004], 0x003C);
	goto labelFunc044C_0131;
labelFunc044C_012D:
	message("「这不是我第一次被指控收费太贵了。」");
	say();
labelFunc044C_0131:
	goto labelFunc044C_013F;
labelFunc044C_0134:
	message("「如果你想训练，请在营业时间来我的工作室。」");
	say();
	UI_remove_answer("训练");
labelFunc044C_013F:
	case "告辞" attend labelFunc044C_014A:
	goto labelFunc044C_014D;
labelFunc044C_014A:
	goto labelFunc044C_006E;
labelFunc044C_014D:
	endconv;
	message("Rayburt 鞠了个躬。*");
	say();
	gflags[0x00EE] = true;
labelFunc044C_0156:
	if (!(event == 0x0000)) goto labelFunc044C_0164;
	Func092E(0xFFB4);
labelFunc044C_0164:
	return;
}


