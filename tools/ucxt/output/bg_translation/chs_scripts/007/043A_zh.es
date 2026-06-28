#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08FC 0x8FC (var var0000, var var0001);
extern var Func090A 0x90A ();
extern void Func0919 0x919 ();
extern void Func091A 0x91A ();
extern void Func092E 0x92E (var var0000);

void Func043A object#(0x43A) ()
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

	if (!(event == 0x0001)) goto labelFunc043A_0258;
	UI_show_npc_face(0xFFC6, 0x0000);
	var0000 = Func0909();
	var0001 = UI_wearing_fellowship();
	var0002 = UI_part_of_day();
	var0003 = UI_get_schedule_type(UI_get_npc_object(0xFFC6));
	if (!(var0002 == 0x0007)) goto labelFunc043A_006D;
	var0004 = Func08FC(0xFFC6, 0xFFE6);
	if (!var0004) goto labelFunc043A_0058;
	message("Gordon 太专心聆听友谊会集会，以至于没听到你的声音。*");
	say();
	abort;
	goto labelFunc043A_006D;
labelFunc043A_0058:
	if (!gflags[0x00DA]) goto labelFunc043A_0068;
	message("「巴特林究竟在哪里？他开会迟到了！」");
	say();
	goto labelFunc043A_006D;
	goto labelFunc043A_006D;
labelFunc043A_0068:
	message("「哎呀！我必须立刻离开！我参加友谊会集会要迟到了！」*");
	say();
	abort;
labelFunc043A_006D:
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x00BB])) goto labelFunc043A_008F;
	message("你看见一张友善的面孔看着你。");
	say();
	gflags[0x00BB] = true;
	goto labelFunc043A_0099;
labelFunc043A_008F:
	message("「在这美好的一天你过得如何，");
	message(var0000);
	message("？」 Gordon 问。");
	say();
labelFunc043A_0099:
	converse attend labelFunc043A_024D;
	case "姓名" attend labelFunc043A_00AF:
	message("「我的名字是 Gordon 。」");
	say();
	UI_remove_answer("姓名");
labelFunc043A_00AF:
	case "职业" attend labelFunc043A_00C8:
	message("「我从我的餐车卖炸鱼薯条。」");
	say();
	UI_add_answer(["炸鱼薯条", "餐车"]);
labelFunc043A_00C8:
	case "炸鱼薯条" attend labelFunc043A_014B:
	if (!(!(var0003 == 0x0007))) goto labelFunc043A_00E3;
	message("「请在我营业时间再来。」*");
	say();
	abort;
	goto labelFunc043A_0144;
labelFunc043A_00E3:
	message("「我有你在全不列颠尼亚能尝到最棒的炸鱼薯条。我的价格只要每份 8 枚金币。你想来点吗？」");
	say();
	var0005 = Func090A();
	if (!var0005) goto labelFunc043A_0140;
	var0006 = UI_remove_party_items(0x0008, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0006) goto labelFunc043A_0139;
	var0007 = UI_add_party_items(0x0001, 0x0179, 0xFE99, 0x001E, true);
	if (!var0007) goto labelFunc043A_0132;
	message("他递给你一个盘子。");
	say();
	message("「这真的是全不列颠尼亚最棒的炸鱼薯条。」");
	say();
	goto labelFunc043A_0136;
labelFunc043A_0132:
	message("「你身上的东西太多，拿不下你的炸鱼薯条了！」");
	say();
labelFunc043A_0136:
	goto labelFunc043A_013D;
labelFunc043A_0139:
	message("「你没有足够的金币来买炸鱼薯条。抱歉啦！」");
	say();
labelFunc043A_013D:
	goto labelFunc043A_0144;
labelFunc043A_0140:
	message("「当你饿了的时候再来，我相信你会改变主意的。」");
	say();
labelFunc043A_0144:
	UI_remove_answer("炸鱼薯条");
labelFunc043A_014B:
	case "餐车" attend labelFunc043A_016B:
	message("「我最近刚漆了我的餐车。它获得了更多关注。现在生意好多了。我正在存钱要去海盗巢穴 (Buccaneer's Den) 旅行。」");
	say();
	UI_remove_answer("餐车");
	UI_add_answer(["生意", "海盗巢穴"]);
labelFunc043A_016B:
	case "生意" attend labelFunc043A_018B:
	message("「自从我成为友谊会成员后，生意就稳定成长。我改良并提升了炸鱼面糊的食谱，从那以后它就成了几乎所有不列颠城人最喜欢的一餐。我甚至还把炸鱼薯条供应给不列颠王本人。」");
	say();
	UI_add_answer(["友谊会", "不列颠王"]);
	UI_remove_answer("生意");
labelFunc043A_018B:
	case "不列颠王" attend labelFunc043A_019E:
	message("「你知道的——就是那个戴着王冠、举止像国王的家伙。」");
	say();
	UI_remove_answer("不列颠王");
labelFunc043A_019E:
	case "友谊会" attend labelFunc043A_01D4:
	if (!var0001) goto labelFunc043A_01CA;
	message("「很高兴看到你也是成员。我们下次集会见？」");
	say();
	var0008 = Func090A();
	if (!var0008) goto labelFunc043A_01C3;
	message("「那么我们九点整见！」");
	say();
	goto labelFunc043A_01C7;
labelFunc043A_01C3:
	message("「你应该更严格地实践友谊会的教义！我们的集会是九点。我看你真的很需要参加。」");
	say();
labelFunc043A_01C7:
	goto labelFunc043A_01CD;
labelFunc043A_01CA:
	Func0919();
labelFunc043A_01CD:
	UI_remove_answer("友谊会");
labelFunc043A_01D4:
	case "理念" attend labelFunc043A_01E6:
	Func091A();
	UI_remove_answer("理念");
labelFunc043A_01E6:
	case "海盗巢穴" attend labelFunc043A_0206:
	message("「我希望能去海盗巢穴赢点钱。那是个海盗胜地，他们那里有间超棒的赌坊 (House of Games)。」");
	say();
	UI_add_answer(["海盗胜地", "赌坊"]);
	UI_remove_answer("海盗巢穴");
labelFunc043A_0206:
	case "海盗胜地" attend labelFunc043A_0219:
	message("「我相信你也知道，海盗巢穴曾是小偷和恶棍的巢穴。因此，对于那些渴望体验这种冒险生活的人来说，它有一种浪漫的吸引力。我承认，我就是其中之一。当你一生都在餐车卖鱼时，你会需要一些刺激。海盗们最终意识到他们在暗地里是多么受人羡慕，所以他们把他们的岛屿变成了一个充满刺激娱乐的地方。」");
	say();
	UI_remove_answer("海盗胜地");
labelFunc043A_0219:
	case "赌坊" attend labelFunc043A_022C:
	message("「据说他们那里有几种赌博游戏！可以通过下注赛马的结果来赢得金币。」");
	say();
	UI_remove_answer("赌坊");
labelFunc043A_022C:
	case "友谊会" attend labelFunc043A_023F:
	message("「我看到你领取了徽章。我敢肯定地说，友谊会为我的生活带来了奇迹，我知道对你也会是一样的。」他给了你一个会心的微笑。");
	say();
	UI_remove_answer("友谊会");
labelFunc043A_023F:
	case "告辞" attend labelFunc043A_024A:
	goto labelFunc043A_024D;
labelFunc043A_024A:
	goto labelFunc043A_0099;
labelFunc043A_024D:
	endconv;
	message("「祝你有愉快的一天，");
	message(var0000);
	message("。」*");
	say();
labelFunc043A_0258:
	if (!(event == 0x0000)) goto labelFunc043A_02DF;
	var0002 = UI_part_of_day();
	var0003 = UI_get_schedule_type(UI_get_npc_object(0xFFC6));
	var0009 = UI_die_roll(0x0001, 0x0004);
	if (!(var0003 == 0x0007)) goto labelFunc043A_02D9;
	if (!(var0009 == 0x0001)) goto labelFunc043A_029C;
	var000A = "「炸鱼薯条！」";
labelFunc043A_029C:
	if (!(var0009 == 0x0002)) goto labelFunc043A_02AC;
	var000A = "「热腾腾的炸鱼薯条！」";
labelFunc043A_02AC:
	if (!(var0009 == 0x0003)) goto labelFunc043A_02BC;
	var000A = "「好吃的炸鱼薯条！」";
labelFunc043A_02BC:
	if (!(var0009 == 0x0004)) goto labelFunc043A_02CC;
	var000A = "「卖炸鱼薯条喔！」";
labelFunc043A_02CC:
	UI_item_say(0xFFC6, var000A);
	goto labelFunc043A_02DF;
labelFunc043A_02D9:
	Func092E(0xFFC6);
labelFunc043A_02DF:
	return;
}


