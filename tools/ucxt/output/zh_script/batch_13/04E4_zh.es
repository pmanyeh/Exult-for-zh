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
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x02B1])) goto labelFunc04E4_0049;
	message("你看到一個肌肉如鋼鐵般結實的男人。他眼中的閃光告訴你他絕不是傻瓜。");
	say();
	gflags[0x02B1] = true;
	goto labelFunc04E4_004D;
labelFunc04E4_0049:
	message("「你找 Lucky 有什麼事？」海盜問。");
	say();
labelFunc04E4_004D:
	converse attend labelFunc04E4_0111;
	case "姓名" attend labelFunc04E4_0063:
	message("「我是 Lucky (幸運) ……在所有事情上。」");
	say();
	UI_remove_answer("姓名");
labelFunc04E4_0063:
	case "職業" attend labelFunc04E4_007C:
	message("「我靠這世界過活！世界給予……而我拿取！」海盜喧鬧地大笑。「我是個見多識廣的紳士，朋友們——這就是我的『職業』！喔，我也訓練新手賺點零用錢。」");
	say();
	UI_add_answer(["世界的運作", "訓練"]);
labelFunc04E4_007C:
	case "世界的運作" attend labelFunc04E4_009C:
	message("「我指的是世界運作的方式。我是個在路上討生活的人；我是個經驗豐富的旅行者。我以一百種不同男人的身分在世界上旅行。」");
	say();
	UI_add_answer(["旅行者", "不同的人生"]);
	UI_remove_answer("世界的運作");
labelFunc04E4_009C:
	case "旅行者" attend labelFunc04E4_00AF:
	message("「事實上，我沒去過的地方很少，我沒做過的事情也很少。」");
	say();
	UI_remove_answer("旅行者");
labelFunc04E4_00AF:
	case "不同的人生" attend labelFunc04E4_00C2:
	message("「只要憑藉假設，你就能成為另一個人。這是一種態度。我是為了欺騙而進行充滿魅力的溝通藝術的專家。它賦予人許多技能。舉例來說，我可以走進任何一家店買東西。但我離開時帶走的東西會比我買的多得多，因為我知道如何欺騙店主。就像那樣的小事。」");
	say();
	UI_remove_answer("不同的人生");
labelFunc04E4_00C2:
	case "訓練" attend labelFunc04E4_0103:
	if (!(var0001 == 0x0007)) goto labelFunc04E4_00F8;
	message("「一次訓練費用是 35 金幣。你同意嗎？」");
	say();
	if (!Func090A()) goto labelFunc04E4_00EA;
	Func08B6(0x0002, 0x0023);
	goto labelFunc04E4_00F5;
labelFunc04E4_00EA:
	message("Lucky 聳聳肩。「你在島上找不到第二個訓練師了！」");
	say();
	UI_remove_answer("訓練");
labelFunc04E4_00F5:
	goto labelFunc04E4_0103;
labelFunc04E4_00F8:
	message("「我會很樂意在我的住處的正常營業時間——下午和晚上——向你展示我在這世界上的方法。」");
	say();
	UI_remove_answer("訓練");
labelFunc04E4_0103:
	case "告辭" attend labelFunc04E4_010E:
	goto labelFunc04E4_0111;
labelFunc04E4_010E:
	goto labelFunc04E4_004D;
labelFunc04E4_0111:
	endconv;
	message("「小心點，我的朋友。」*");
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
	var0003 = "@該死！@";
labelFunc04E4_0173:
	if (!(var0002 == 0x0004)) goto labelFunc04E4_0183;
	var0003 = "@該死的鸚鵡屎……@";
labelFunc04E4_0183:
	UI_item_say(0xFF1C, var0003);
	goto labelFunc04E4_0196;
labelFunc04E4_0190:
	Func092E(0xFF1C);
labelFunc04E4_0196:
	return;
}


