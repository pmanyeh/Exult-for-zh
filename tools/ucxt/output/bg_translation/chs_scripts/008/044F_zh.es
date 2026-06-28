#game "blackgate"
// externs
extern void Func0951 0x951 ();
extern void Func092E 0x92E (var var0000);

void Func044F object#(0x44F) ()
{
	var var0000;

	if (!(event == 0x0001)) goto labelFunc044F_012E;
	UI_show_npc_face(0xFFB1, 0x0000);
	UI_add_answer(["姓名", "职业", "告辞"]);
	var0000 = UI_get_schedule_type(UI_get_npc_object(0xFFB1));
	if (!gflags[0x00E4]) goto labelFunc044F_0043;
	if (!gflags[0x00F1]) goto labelFunc044F_0043;
	UI_add_answer("De Maria");
labelFunc044F_0043:
	if (!(!gflags[0x00EC])) goto labelFunc044F_0055;
	message("这位年约四十多岁、美丽而质朴的女性给了你一个友善的微笑。");
	say();
	gflags[0x00EC] = true;
	goto labelFunc044F_0059;
labelFunc044F_0055:
	message("「你好，」 Zinaida 说。");
	say();
labelFunc044F_0059:
	converse attend labelFunc044F_0129;
	case "姓名" attend labelFunc044F_0080:
	message("「我是 Zinaida，」她屈膝行礼说道。");
	say();
	UI_remove_answer("姓名");
	if (!gflags[0x00E4]) goto labelFunc044F_007C;
	UI_add_answer("De Maria");
labelFunc044F_007C:
	gflags[0x00F1] = true;
labelFunc044F_0080:
	case "职业" attend labelFunc044F_00B1:
	message("「我是翡翠酒馆的老板兼经理。」");
	say();
	if (!(var0000 == 0x0017)) goto labelFunc044F_00AD;
	message("「如果需要餐点或饮料，请告诉我。我从未有过不满意的客人。」");
	say();
	UI_add_answer(["饮料", "餐点", "购买"]);
	goto labelFunc044F_00B1;
labelFunc044F_00AD:
	message("「请在酒馆营业时过来，我很乐意为你服务！」");
	say();
labelFunc044F_00B1:
	case "餐点" attend labelFunc044F_00C4:
	message("「翡翠酒馆很高兴能为你提供不列颠城这一带最美味的佳肴。你也许会想尝尝我们的特餐——银叶。」");
	say();
	UI_add_answer("银叶");
labelFunc044F_00C4:
	case "银叶" attend labelFunc044F_00D7:
	message("她对你眨了眨眼。「有人说它是一种强效的催情剂……不管怎样，它非常美味。它来自生长在不列颠尼亚某处一种奇特树木的根部。」");
	say();
	UI_remove_answer("银叶");
labelFunc044F_00D7:
	case "饮料" attend labelFunc044F_00EA:
	message("「翡翠酒馆只提供最好的葡萄酒和麦酒。不过，我不推荐这里的水。这都拜洛克湖所赐。」");
	say();
	UI_add_answer("洛克湖");
labelFunc044F_00EA:
	case "购买" attend labelFunc044F_00F5:
	Func0951();
labelFunc044F_00F5:
	case "De Maria" attend labelFunc044F_0108:
	message("「他是我生命中的光。再也没有比他更好的男人了。」她笑得合不拢嘴。");
	say();
	UI_remove_answer("De Maria");
labelFunc044F_0108:
	case "洛克湖" attend labelFunc044F_011B:
	message("「那股恶臭让我们的水变得很难喝。那家矿业公司必须停止把他们的污水倒进这个曾经美丽的湖泊里！」");
	say();
	UI_remove_answer("洛克湖");
labelFunc044F_011B:
	case "告辞" attend labelFunc044F_0126:
	goto labelFunc044F_0129;
labelFunc044F_0126:
	goto labelFunc044F_0059;
labelFunc044F_0129:
	endconv;
	message("「欢迎下次再来！」*");
	say();
labelFunc044F_012E:
	if (!(event == 0x0000)) goto labelFunc044F_013C;
	Func092E(0xFFB1);
labelFunc044F_013C:
	return;
}


