#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func0842 0x842 ();
extern void Func092E 0x92E (var var0000);

void Func0413 object#(0x413) ()
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
	var var000B;
	var var000C;
	var var000D;
	var var000E;

	if (!(event == 0x0001)) goto labelFunc0413_024E;
	var0000 = UI_part_of_day();
	var0001 = Func0908();
	var0002 = Func0909();
	var0003 = UI_get_schedule_type(UI_get_npc_object(0xFFED));
	var0004 = UI_is_pc_female();
	UI_show_npc_face(0xFFED, 0x0000);
	UI_add_answer(["姓名", "职业", "谋杀", "告辞"]);
	if (!(var0003 == 0x0017)) goto labelFunc0413_006A;
	UI_add_answer(["食物", "饮料", "住宿", "购买"]);
labelFunc0413_006A:
	if (!(!gflags[0x0051])) goto labelFunc0413_007C;
	message("你看到一位三十多岁、性感迷人的女性。");
	say();
	gflags[0x0051] = true;
	goto labelFunc0413_0080;
labelFunc0413_007C:
	message("「又见面了！」 Apollonia 眼中闪烁着光芒说道。");
	say();
labelFunc0413_0080:
	converse attend labelFunc0413_023B;
	case "姓名" attend labelFunc0413_00B2:
	if (!(!var0004)) goto labelFunc0413_009B;
	var0005 = "，并用舌头舔了舔上唇。";
	goto labelFunc0413_00A1;
labelFunc0413_009B:
	var0005 = "，并上下打量着你。";
labelFunc0413_00A1:
	message("「我的名字是 Apollonia，」 她说道");
	message(var0005);
	message("");
	say();
	UI_remove_answer("姓名");
labelFunc0413_00B2:
	case "职业" attend labelFunc0413_00EF:
	message("「哎呀，我经营着谦逊猎犬客栈，」 她娇声说道。");
	say();
	if (!(var0003 == 0x0017)) goto labelFunc0413_00E1;
	message("「你想要一间客房吗？还是你想吃点或喝点什么？尽管说，我会尽量用我的美味佳肴来满足你。」");
	say();
	if (!(!var0004)) goto labelFunc0413_00DE;
	message("~~你意识到她在跟你调情。");
	say();
	UI_add_answer("调情");
labelFunc0413_00DE:
	goto labelFunc0413_00E5;
labelFunc0413_00E1:
	message("「我很乐意在营业时间为你服务！」");
	say();
labelFunc0413_00E5:
	UI_add_answer(["谦逊猎犬客栈"]);
labelFunc0413_00EF:
	case "谦逊猎犬客栈" attend labelFunc0413_0102:
	message("「在整个 Trinsic，我想不出有更好的地方能让你安顿休息，或者品尝美食来满足你的胃口了。」");
	say();
	UI_remove_answer("谦逊猎犬客栈");
labelFunc0413_0102:
	case "谋杀" attend labelFunc0413_0115:
	message("Apollonia 闭上眼睛摇了摇头，好像刚咬了一口非常酸的柠檬。「喔。那真是太……可怕了！怎么会有人做出这么骇人听闻的事？你在寻找线索吗？我真心希望你能找到那个该负责的人。」");
	say();
	UI_remove_answer("谋杀");
labelFunc0413_0115:
	case "食物" attend labelFunc0413_012F:
	message("「我们供应最好的肉、鱼和蛋糕。我们的招牌是『银叶餐』。如果你想点些什么，请告诉我！」");
	say();
	UI_add_answer("银叶餐");
	UI_remove_answer("食物");
labelFunc0413_012F:
	case "饮料" attend labelFunc0413_0142:
	message("「我可以为你提供蜂蜜酒、葡萄酒和麦酒。」");
	say();
	UI_remove_answer("饮料");
labelFunc0413_0142:
	case "住宿" attend labelFunc0413_01F6:
	message("「我们的客房很便宜。每人每晚只要 6 枚金币。需要一间客房吗？」");
	say();
	if (!Func090A()) goto labelFunc0413_01EB;
	var0006 = UI_get_party_list();
	var0007 = 0x0000;
	enum();
labelFunc0413_0162:
	for (var000A in var0006 with var0008 to var0009) attend labelFunc0413_017A;
	var0007 = (var0007 + 0x0001);
	goto labelFunc0413_0162;
labelFunc0413_017A:
	var000B = (var0007 * 0x0006);
	var000C = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var000C >= var000B)) goto labelFunc0413_01DE;
	var000D = UI_add_party_items(0x0001, 0x0281, 0x00FF, 0xFE99, true);
	if (!(!var000D)) goto labelFunc0413_01C3;
	message("「噢，亲爱的。你带了太多东西，拿不下房间钥匙了。」");
	say();
	goto labelFunc0413_01DB;
labelFunc0413_01C3:
	message("「这是你的房间钥匙。它只在你离开前有效。」");
	say();
	var000E = UI_remove_party_items(var000B, 0x0284, 0xFE99, 0xFE99, true);
labelFunc0413_01DB:
	goto labelFunc0413_01E8;
labelFunc0413_01DE:
	message("「你没有足够的金币， ");
	message(var0002);
	message("。」");
	say();
labelFunc0413_01E8:
	goto labelFunc0413_01EF;
labelFunc0413_01EB:
	message("「那就～改天吧。」");
	say();
labelFunc0413_01EF:
	UI_remove_answer("住宿");
labelFunc0413_01F6:
	case "银叶餐" attend labelFunc0413_0209:
	message("「嗯。真是美味！这是你吃过最棒的美食！绝对物超所值。」");
	say();
	UI_remove_answer("银叶餐");
labelFunc0413_0209:
	case "调情" attend labelFunc0413_0222:
	message("Apollonia 脸红着眨了眨眼。」噢， ");
	message(var0001);
	message("! 我敢打赌你对所有酒吧女侍都是这么说的！」");
	say();
	UI_remove_answer("调情");
labelFunc0413_0222:
	case "购买" attend labelFunc0413_022D:
	Func0842();
labelFunc0413_022D:
	case "告辞" attend labelFunc0413_0238:
	goto labelFunc0413_023B;
labelFunc0413_0238:
	goto labelFunc0413_0080;
labelFunc0413_023B:
	endconv;
	if (!(!var0004)) goto labelFunc0413_024A;
	message("Apollonia 对你飞吻。「欢迎下次光临！」");
	say();
	goto labelFunc0413_024E;
labelFunc0413_024A:
	message("Apollonia 向你挥手。「欢迎下次光临！」");
	say();
labelFunc0413_024E:
	if (!(event == 0x0000)) goto labelFunc0413_025C;
	Func092E(0xFFED);
labelFunc0413_025C:
	return;
}


