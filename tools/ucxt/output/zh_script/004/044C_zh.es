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
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!gflags[0x00E4]) goto labelFunc044C_004A;
	if (!gflags[0x00EE]) goto labelFunc044C_004A;
	UI_add_answer("Pamela");
labelFunc044C_004A:
	if (!(!gflags[0x00E9])) goto labelFunc044C_006A;
	message("你驚動了一位似乎正陷入沉思的戰士。");
	say();
	if (!(var0001 == 0x001B)) goto labelFunc044C_0063;
	message("他的狗似乎也在冥想。");
	say();
labelFunc044C_0063:
	gflags[0x00E9] = true;
	goto labelFunc044C_006E;
labelFunc044C_006A:
	message("「再次問候，」Rayburt 說。");
	say();
labelFunc044C_006E:
	converse attend labelFunc044C_014D;
	case "姓名" attend labelFunc044C_00AA:
	message("「我是 Rayburt。」");
	say();
	if (!(var0001 == 0x001B)) goto labelFunc044C_0092;
	message("他轉向那隻狗。「這是 Regal。」");
	say();
	UI_add_answer("Regal");
labelFunc044C_0092:
	UI_remove_answer("姓名");
	if (!gflags[0x00E4]) goto labelFunc044C_00A6;
	UI_add_answer("Pamela");
labelFunc044C_00A6:
	gflags[0x00EE] = true;
labelFunc044C_00AA:
	case "職業" attend labelFunc044C_00C3:
	message("「我是一名訓練師。我專精於一種依賴專注和冥想的戰鬥風格。它能提升你的敏捷和智力，以及你的戰鬥技巧。」");
	say();
	UI_add_answer(["meditation", "train"]);
labelFunc044C_00C3:
	case "Regal" attend labelFunc044C_00D6:
	message("「牠是非常聰明的動物。牠了解冥想的生活方式。」~~Rayburt 丟給狗一塊餅乾，狗眨眼間就把它吞了。「牠也很可愛，」Rayburt 一臉嚴肅地說。");
	say();
	UI_remove_answer("Regal");
labelFunc044C_00D6:
	case "Pamela" attend labelFunc044C_00E9:
	message("你看到 Rayburt 臉上閃過一絲微笑。「她和我是一體的。」");
	say();
	UI_remove_answer("Pamela");
labelFunc044C_00E9:
	case "meditation" attend labelFunc044C_00FC:
	message("「在揮出第一擊之前，大部分的戰鬥都發生在心智中。勝利的關鍵是首先在心中贏得內在的戰鬥。贏得那場內在的戰鬥就是我幫助學生學習的。」");
	say();
	UI_remove_answer("meditation");
labelFunc044C_00FC:
	case "train" attend labelFunc044C_013F:
	if (!(var0001 == 0x001B)) goto labelFunc044C_0134;
	message("「我每堂課收費 60 枚金幣，但你會獲益良多。你能接受嗎？」");
	say();
	if (!Func090A()) goto labelFunc044C_012D;
	Func08D0([0x0001, 0x0002, 0x0004], 0x003C);
	goto labelFunc044C_0131;
labelFunc044C_012D:
	message("「這不是我第一次被指控收費太貴了。」");
	say();
labelFunc044C_0131:
	goto labelFunc044C_013F;
labelFunc044C_0134:
	message("「如果你想訓練，請在營業時間來我的工作室。」");
	say();
	UI_remove_answer("train");
labelFunc044C_013F:
	case "告辭" attend labelFunc044C_014A:
	goto labelFunc044C_014D;
labelFunc044C_014A:
	goto labelFunc044C_006E;
labelFunc044C_014D:
	endconv;
	message("Rayburt 鞠了個躬。*");
	say();
	gflags[0x00EE] = true;
labelFunc044C_0156:
	if (!(event == 0x0000)) goto labelFunc044C_0164;
	Func092E(0xFFB4);
labelFunc044C_0164:
	return;
}


