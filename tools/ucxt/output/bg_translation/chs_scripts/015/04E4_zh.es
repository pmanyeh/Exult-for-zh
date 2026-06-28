#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern void Func08B6 0x8B6 (var var0000, var var0001);
extern void Func092E 0x92E (var var0000);

void Func04E4 object#(0x4E4) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0001)) goto labelFunc04E4_0116;
	UI_show_npc_face(0xFF1C, 0x0000);
	var0000 = UI_part_of_day();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFF1C));
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x02B1])) goto labelFunc04E4_0049;
	message("你看到一个肌肉如钢铁般结实的男人。他眼中的闪光告诉你他绝不是傻瓜。");
	say();
	gflags[0x02B1] = true;
	goto labelFunc04E4_004D;
labelFunc04E4_0049:
	message("「你找 Lucky 有什么事？」海盗问。");
	say();
labelFunc04E4_004D:
	converse attend labelFunc04E4_0111;
	case "姓名" attend labelFunc04E4_0063:
	message("「我是 Lucky (幸运) ……在所有事情上。」");
	say();
	UI_remove_answer("姓名");
labelFunc04E4_0063:
	case "职业" attend labelFunc04E4_007C:
	message("「我靠这世界过活！世界给予……而我拿取！」海盗喧闹地大笑。「我是个见多识广的绅士，朋友们——这就是我的『职业』！喔，我也训练新手赚点零用钱。」");
	say();
	UI_add_answer(["世界的运作", "训练"]);
labelFunc04E4_007C:
	case "世界的运作" attend labelFunc04E4_009C:
	message("「我指的是世界运作的方式。我是个在路上讨生活的人；我是个经验丰富的旅行者。我以一百种不同男人的身分在世界上旅行。」");
	say();
	UI_add_answer(["旅行者", "不同的人生"]);
	UI_remove_answer("世界的运作");
labelFunc04E4_009C:
	case "旅行者" attend labelFunc04E4_00AF:
	message("「事实上，我没去过的地方很少，我没做过的事情也很少。」");
	say();
	UI_remove_answer("旅行者");
labelFunc04E4_00AF:
	case "不同的人生" attend labelFunc04E4_00C2:
	message("「只要凭借假设，你就能成为另一个人。这是一种态度。我是为了欺骗而进行充满魅力的沟通艺术的专家。它赋予人许多技能。举例来说，我可以走进任何一家店买东西。但我离开时带走的东西会比我买的多得多，因为我知道如何欺骗店主。就像那样的小事。」");
	say();
	UI_remove_answer("不同的人生");
labelFunc04E4_00C2:
	case "训练" attend labelFunc04E4_0103:
	if (!(var0001 == 0x0007)) goto labelFunc04E4_00F8;
	message("「一次训练费用是 35 金币。你同意吗？」");
	say();
	if (!Func090A()) goto labelFunc04E4_00EA;
	Func08B6(0x0002, 0x0023);
	goto labelFunc04E4_00F5;
labelFunc04E4_00EA:
	message("Lucky 耸耸肩。「你在岛上找不到第二个训练师了！」");
	say();
	UI_remove_answer("训练");
labelFunc04E4_00F5:
	goto labelFunc04E4_0103;
labelFunc04E4_00F8:
	message("「我会很乐意在我的住处的正常营业时间——下午和晚上——向你展示我在这世界上的方法。」");
	say();
	UI_remove_answer("训练");
labelFunc04E4_0103:
	case "告辞" attend labelFunc04E4_010E:
	goto labelFunc04E4_0111;
labelFunc04E4_010E:
	goto labelFunc04E4_004D;
labelFunc04E4_0111:
	endconv;
	message("「小心点，我的朋友。」*");
	say();
labelFunc04E4_0116:
	if (!(event == 0x0000)) goto labelFunc04E4_0196;
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFF1C));
	if (!(var0001 == 0x000B)) goto labelFunc04E4_0190;
	var0002 = UI_die_roll(0x0001, 0x0004);
	if (!(var0002 == 0x0001)) goto labelFunc04E4_0153;
	var0003 = "@哈！@";
labelFunc04E4_0153:
	if (!(var0002 == 0x0002)) goto labelFunc04E4_0163;
	var0003 = "@快停下！@";
labelFunc04E4_0163:
	if (!(var0002 == 0x0003)) goto labelFunc04E4_0173;
	var0003 = "@该死！@";
labelFunc04E4_0173:
	if (!(var0002 == 0x0004)) goto labelFunc04E4_0183;
	var0003 = "@该死的鹦鹉屎……@";
labelFunc04E4_0183:
	UI_item_say(0xFF1C, var0003);
	goto labelFunc04E4_0196;
labelFunc04E4_0190:
	Func092E(0xFF1C);
labelFunc04E4_0196:
	return;
}


