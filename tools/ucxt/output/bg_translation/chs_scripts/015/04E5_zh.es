#game "blackgate"
// externs
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func08F7 0x8F7 (var var0000);
extern void Func0859 0x859 ();
extern void Func0858 0x858 ();
extern void Func085A 0x85A ();
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func04E5 object#(0x4E5) ()
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

	if (!(event == 0x0001)) goto labelFunc04E5_02D7;
	UI_show_npc_face(0xFF1B, 0x0000);
	var0000 = UI_part_of_day();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFF1B));
	var0002 = Func0931(0xFE9B, 0x0001, 0x03D5, 0xFE99, 0x0001);
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(gflags[0x0135] || gflags[0x0104])) goto labelFunc04E5_005D;
	UI_add_answer("皇冠宝石号 (Crown Jewel)");
labelFunc04E5_005D:
	if (!(!gflags[0x02B2])) goto labelFunc04E5_00D6;
	message("你看到一个肥胖、看起来很快乐的商人。");
	say();
	if (!(var0001 == 0x0007)) goto labelFunc04E5_00CB;
	message("「哈啰，哈啰我的朋友！你看起来像需要花钱的样子！」*");
	say();
	var0003 = Func08F7(0xFFFD);
	if (!var0003) goto labelFunc04E5_00BE;
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「这地方看起来相当富裕。」*");
	say();
	UI_remove_npc_face(0xFFFD);
	var0004 = Func08F7(0xFFFF);
	if (!var0004) goto labelFunc04E5_00BE;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「整座岛都非常富裕。这已经不是我们曾经认识的那座岛了。」*");
	say();
	UI_remove_npc_face(0xFFFF);
labelFunc04E5_00BE:
	UI_show_npc_face(0xFF1B, 0x0000);
	goto labelFunc04E5_00CF;
labelFunc04E5_00CB:
	message("「哈啰！你好吗，我的朋友？」");
	say();
labelFunc04E5_00CF:
	gflags[0x02B2] = true;
	goto labelFunc04E5_00DA;
labelFunc04E5_00D6:
	message("「我能怎么帮助你？」 Budo 问。");
	say();
labelFunc04E5_00DA:
	converse attend labelFunc04E5_02D2;
	case "姓名" attend labelFunc04E5_00F0:
	message("「为您服务的是第四代 Budo ！今天天气真好，不是吗？」");
	say();
	UI_remove_answer("姓名");
labelFunc04E5_00F0:
	case "职业" attend labelFunc04E5_0159:
	if (!(var0001 == 0x0007)) goto labelFunc04E5_012A;
	var0005 = "你就来对地方了！@";
	var0006 = "";
	var0007 = "";
	UI_add_answer(["武器", "护甲", "物资", "船只地契"]);
	goto labelFunc04E5_013C;
labelFunc04E5_012A:
	var0005 = "请你在";
	var0006 = "我们营业时再来！我将";
	var0007 = "非常乐意在那时帮助你。@";
labelFunc04E5_013C:
	message("「我是个物资商人，就像我父亲一样，就像他的父亲一样，就像他的父亲的父亲一样。 Budo 商行是岛上的传统！就像友谊会有一天也会成为传统一样！~~如果你对武器、护甲、物资或船只地契感兴趣，");
	message(var0005);
	message("");
	message(var0006);
	message("");
	message(var0007);
	message("");
	say();
	UI_add_answer("友谊会");
labelFunc04E5_0159:
	case "护甲" attend labelFunc04E5_0168:
	message("「 Budo 商行只提供全不列颠尼亚品质最好的护甲。我有所有最好的装备可供选择。」");
	say();
	Func0859();
labelFunc04E5_0168:
	case "武器" attend labelFunc04E5_0177:
	message("「 Budo 商行为您提供工艺精湛的优良武器。你在其他任何地方都找不到更物超所值的选择了！」");
	say();
	Func0858();
labelFunc04E5_0177:
	case "物资" attend labelFunc04E5_0186:
	message("「 Budo 商行也为您的方便准备了各式各样有用的东西。」");
	say();
	Func085A();
labelFunc04E5_0186:
	case "船只地契" attend labelFunc04E5_0214:
	if (!gflags[0x02B6]) goto labelFunc04E5_019B;
	message("「但我已经把『 The Lusty Wench 』的地契卖给你了！她是我目前唯一的一艘船！我很抱歉！」");
	say();
	goto labelFunc04E5_020D;
labelFunc04E5_019B:
	message("「我可以把我的船『 The Lusty Wench 』的地契卖给你。她很美，我的朋友。保证耐用，而且是海上最流线型的船只！卖 800 金币。想要她吗？」");
	say();
	if (!Func090A()) goto labelFunc04E5_0209;
	var0008 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var0008 >= 0x0320)) goto labelFunc04E5_0202;
	var0009 = UI_add_party_items(0x0001, 0x031D, 0x0012, 0x0002, false);
	if (!var0009) goto labelFunc04E5_01FB;
	message("「明智之举。为你准备的一艘宏伟的船！」他收下你的金币。");
	say();
	var000A = UI_remove_party_items(0x0320, 0x0284, 0xFE99, 0xFE99, true);
	gflags[0x02B6] = true;
	goto labelFunc04E5_01FF;
labelFunc04E5_01FB:
	message("「你拿太多东西了，我的朋友！卸下你的一些物品，我就把这艘美丽船只的地契卖给你。」");
	say();
labelFunc04E5_01FF:
	goto labelFunc04E5_0206;
labelFunc04E5_0202:
	message("「但你没有足够的金币！或许你应该去赌坊 (House of Games) 增加你口袋里的重量！」");
	say();
labelFunc04E5_0206:
	goto labelFunc04E5_020D;
labelFunc04E5_0209:
	message("「但你绝对无法在世界上任何地方看到像这样的一艘船！太可惜了！」");
	say();
labelFunc04E5_020D:
	UI_remove_answer("船只地契");
labelFunc04E5_0214:
	case "友谊会" attend labelFunc04E5_0237:
	message("「友谊会帮助我成为了一个非常富有的人！虽然事业是继承来的企业，但我将一切归功于友谊会！」");
	say();
	UI_remove_answer("友谊会");
	UI_add_answer(["富有的人", "继承的事业", "一切"]);
labelFunc04E5_0237:
	case "富有的人" attend labelFunc04E5_0251:
	message("「我的曾祖父在很多很多年前创立了这份事业。多亏了盗贼公会，他算是小有成就。但那个时代已经过去了。」");
	say();
	UI_add_answer("盗贼公会 (Thieves' Guild)");
	UI_remove_answer("富有的人");
labelFunc04E5_0251:
	case "继承的事业" attend labelFunc04E5_0264:
	message("「我的曾祖父将店传给他的儿子，就这样一路传到我。我们天生就是商人！这就是为什么我知道你为什么来 Budo 商行！你想成为伟大的 Budo 传奇的一部分！你需要买点东西！」");
	say();
	UI_remove_answer("继承的事业");
labelFunc04E5_0264:
	case "一切" attend labelFunc04E5_027E:
	message("「在我父亲去世后不久，也就是我刚继承这家店的时候，生意很差。店铺有开不下去的危险。但友谊会说服了我加入他们。我证明了我的价值，而友谊会在财务上帮助了我。」");
	say();
	UI_remove_answer("一切");
	UI_add_answer("价值");
labelFunc04E5_027E:
	case "价值" attend labelFunc04E5_0291:
	message("「我不介意告诉你。友谊会分享我一半的利润。」");
	say();
	UI_remove_answer("价值");
labelFunc04E5_0291:
	case "盗贼公会 (Thieves' Guild)" attend labelFunc04E5_02A4:
	message("「它已经不存在了。它们在我祖父那一代就逐渐衰落了。当我还是个孩子，友谊会到来时，除了家庭的纪念品之外，它们已经没有任何踪迹了。就连海盗也变了。」");
	say();
	UI_remove_answer("盗贼公会 (Thieves' Guild)");
labelFunc04E5_02A4:
	case "皇冠宝石号 (Crown Jewel)" attend labelFunc04E5_02C4:
	if (!var0002) goto labelFunc04E5_02B9;
	message("方块震动了一会儿。~~「那艘船经常航行到这里。我知道它定期前往大陆，在这里停靠，隔天早上再前往圣者之岛 (Isle of the Avatar) 。然后它会反向重复这趟旅程。」");
	say();
	goto labelFunc04E5_02BD;
labelFunc04E5_02B9:
	message("「它定期停靠在这里。不知道更多的事了。船员非常神秘。」 Budo 转过头，显然不想谈论这艘船。");
	say();
labelFunc04E5_02BD:
	UI_remove_answer("皇冠宝石号 (Crown Jewel)");
labelFunc04E5_02C4:
	case "告辞" attend labelFunc04E5_02CF:
	goto labelFunc04E5_02D2;
labelFunc04E5_02CF:
	goto labelFunc04E5_00DA;
labelFunc04E5_02D2:
	endconv;
	message("「我希望有机会能再次帮助你，我的朋友！」*");
	say();
labelFunc04E5_02D7:
	if (!(event == 0x0000)) goto labelFunc04E5_035E;
	var0000 = UI_part_of_day();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFF1B));
	var000B = UI_die_roll(0x0001, 0x0004);
	if (!(var0001 == 0x0007)) goto labelFunc04E5_0358;
	if (!(var000B == 0x0001)) goto labelFunc04E5_031B;
	var000C = "@武器？护甲？@";
labelFunc04E5_031B:
	if (!(var000B == 0x0002)) goto labelFunc04E5_032B;
	var000C = "@物资在这里！@";
labelFunc04E5_032B:
	if (!(var000B == 0x0003)) goto labelFunc04E5_033B;
	var000C = "@Budo 商行开门做生意了！@";
labelFunc04E5_033B:
	if (!(var000B == 0x0004)) goto labelFunc04E5_034B;
	var000C = "@欢迎进来！我们开门了！@";
labelFunc04E5_034B:
	UI_item_say(0xFF1B, var000C);
	goto labelFunc04E5_035E;
labelFunc04E5_0358:
	Func092E(0xFF1B);
labelFunc04E5_035E:
	return;
}


