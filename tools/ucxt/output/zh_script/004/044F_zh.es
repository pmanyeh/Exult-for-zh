#game "blackgate"
// externs
extern void Func0951 0x951 ();
extern void Func092E 0x92E (var var0000);

void Func044F object#(0x44F) ()
{
	var var0000;

	if (!(event == 0x0001)) goto labelFunc044F_012E;
	UI_show_npc_face(0xFFB1, 0x0000);
	UI_add_answer(["姓名", "職業", "告辭"]);
	var0000 = UI_get_schedule_type(UI_get_npc_object(0xFFB1));
	if (!gflags[0x00E4]) goto labelFunc044F_0043;
	if (!gflags[0x00F1]) goto labelFunc044F_0043;
	UI_add_answer("De Maria");
labelFunc044F_0043:
	if (!(!gflags[0x00EC])) goto labelFunc044F_0055;
	message("這位年約四十多歲、美麗而質樸的女性給了你一個友善的微笑。");
	say();
	gflags[0x00EC] = true;
	goto labelFunc044F_0059;
labelFunc044F_0055:
	message("「你好，」 Zinaida 說。");
	say();
labelFunc044F_0059:
	converse attend labelFunc044F_0129;
	case "姓名" attend labelFunc044F_0080:
	message("「我是 Zinaida，」她屈膝行禮說道。");
	say();
	UI_remove_answer("姓名");
	if (!gflags[0x00E4]) goto labelFunc044F_007C;
	UI_add_answer("De Maria");
labelFunc044F_007C:
	gflags[0x00F1] = true;
labelFunc044F_0080:
	case "職業" attend labelFunc044F_00B1:
	message("「我是翡翠酒館的老闆兼經理。」");
	say();
	if (!(var0000 == 0x0017)) goto labelFunc044F_00AD;
	message("「如果需要餐點或飲料，請告訴我。我從未有過不滿意的客人。」");
	say();
	UI_add_answer(["飲料", "餐點", "購買"]);
	goto labelFunc044F_00B1;
labelFunc044F_00AD:
	message("「請在酒館營業時過來，我很樂意為你服務！」");
	say();
labelFunc044F_00B1:
	case "餐點" attend labelFunc044F_00C4:
	message("「翡翠酒館很高興能為你提供 Britain 這一帶最美味的佳餚。你也許會想嚐嚐我們的特餐——銀葉。」");
	say();
	UI_add_answer("銀葉");
labelFunc044F_00C4:
	case "銀葉" attend labelFunc044F_00D7:
	message("她對你眨了眨眼。「有人說它是一種強效的催情劑……不管怎樣，它非常美味。它來自生長在 Britannia 某處一種奇特樹木的根部。」");
	say();
	UI_remove_answer("銀葉");
labelFunc044F_00D7:
	case "飲料" attend labelFunc044F_00EA:
	message("「翡翠酒館只提供最好的葡萄酒和麥酒。不過，我不推薦這裡的水。這都拜洛克湖所賜。」");
	say();
	UI_add_answer("洛克湖");
labelFunc044F_00EA:
	case "購買" attend labelFunc044F_00F5:
	Func0951();
labelFunc044F_00F5:
	case "De Maria" attend labelFunc044F_0108:
	message("「他是我生命中的光。再也沒有比他更好的男人了。」她笑得合不攏嘴。");
	say();
	UI_remove_answer("De Maria");
labelFunc044F_0108:
	case "洛克湖" attend labelFunc044F_011B:
	message("「那股惡臭讓我們的水變得很難喝。那家礦業公司必須停止把他們的污水倒進這個曾經美麗的湖泊裡！」");
	say();
	UI_remove_answer("洛克湖");
labelFunc044F_011B:
	case "告辭" attend labelFunc044F_0126:
	goto labelFunc044F_0129;
labelFunc044F_0126:
	goto labelFunc044F_0059;
labelFunc044F_0129:
	endconv;
	message("「歡迎下次再來！」*");
	say();
labelFunc044F_012E:
	if (!(event == 0x0000)) goto labelFunc044F_013C;
	Func092E(0xFFB1);
labelFunc044F_013C:
	return;
}


