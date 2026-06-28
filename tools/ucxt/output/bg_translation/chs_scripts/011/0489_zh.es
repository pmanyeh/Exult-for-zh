#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func090B 0x90B (var var0000);
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func0489 object#(0x489) ()
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
	var var000F;

	if (!(event == 0x0001)) goto labelFunc0489_030F;
	UI_show_npc_face(0xFF77, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = UI_part_of_day();
	var0003 = UI_get_schedule_type(UI_get_npc_object(0xFF77));
	var0004 = "Avatar";
	var0002 = UI_part_of_day();
	var0005 = UI_is_pc_female();
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!gflags[0x0180]) goto labelFunc0489_0064;
	UI_add_answer("陌生人");
labelFunc0489_0064:
	if (!gflags[0x017D]) goto labelFunc0489_0071;
	UI_add_answer("吊饰盒");
labelFunc0489_0071:
	if (!gflags[0x018F]) goto labelFunc0489_007E;
	UI_add_answer("Robin");
labelFunc0489_007E:
	if (!gflags[0x0190]) goto labelFunc0489_008B;
	UI_add_answer("Battles");
labelFunc0489_008B:
	if (!gflags[0x0191]) goto labelFunc0489_0098;
	UI_add_answer("Leavell");
labelFunc0489_0098:
	if (!gflags[0x0187]) goto labelFunc0489_00A4;
	var0006 = var0000;
labelFunc0489_00A4:
	if (!gflags[0x0188]) goto labelFunc0489_00B0;
	var0006 = var0004;
labelFunc0489_00B0:
	if (!(!gflags[0x0192])) goto labelFunc0489_00C2;
	message("你看到一位看起来很满足的蓄胡男子，脸上有着深深的笑纹和温柔的双眼。");
	say();
	gflags[0x0192] = true;
	goto labelFunc0489_00C6;
labelFunc0489_00C2:
	message("「嘿，你过得好吗？」Sam 说。");
	say();
labelFunc0489_00C6:
	converse attend labelFunc0489_030A;
	case "姓名" attend labelFunc0489_0110:
	message("「我的名字是 Sam 。我是卖花人。你叫什么名字？」");
	say();
	UI_push_answers();
	var0007 = Func090B([var0000, var0004]);
	if (!(var0007 == var0000)) goto labelFunc0489_00FD;
	message("「很高兴认识你。」");
	say();
	gflags[0x0187] = true;
	goto labelFunc0489_0105;
labelFunc0489_00FD:
	message("「好吧。如果你想当圣者，我不会争辩。如果你想当的话，你就可以当圣者。」");
	say();
	var0008 = true;
labelFunc0489_0105:
	UI_pop_answers();
	UI_remove_answer("姓名");
labelFunc0489_0110:
	case "职业" attend labelFunc0489_0129:
	message("「在我看来，我并没有真正的工作。我卖花给 New Magincia 的人们。虽然我有拿到钱，但这是我非常喜欢做的事。我想知道，这样还能算是工作吗？」他若有所思地抓了抓下巴。");
	say();
	UI_add_answer(["花", "New Magincia"]);
labelFunc0489_0129:
	case "花" attend labelFunc0489_0149:
	message("「我把我卖的所有花都种在一个也是我家的温室里。我卖很多红玫瑰，但我有很多品种。如果你有兴趣买一些，请告诉我！」");
	say();
	UI_add_answer(["温室", "购买"]);
	UI_remove_answer("花");
labelFunc0489_0149:
	case "温室" attend labelFunc0489_0169:
	message("「我亲手建造了我的温室。当我不卖花时，我在那里从事各种植物和自然的研究。我觉得这很迷人。你可能已经注意到了，我喜欢把它们种得很大！」");
	say();
	UI_remove_answer("温室");
	UI_add_answer(["研究", "种得很大"]);
labelFunc0489_0169:
	case "研究" attend labelFunc0489_0183:
	message("「目前我正在研究小麦草可能的用途和应用。很快地，总有一天我会开始整理我的笔记，但这需要漫长的努力，因为我学到了很多。我经营花车主要是为了支持我的工作。」");
	say();
	UI_add_answer("花车");
	UI_remove_answer("研究");
labelFunc0489_0183:
	case "种得很大" attend labelFunc0489_0196:
	message("「正是因为我在研究中学到的东西，我才能把花种得如此巨大和健康。」");
	say();
	UI_remove_answer("种得很大");
labelFunc0489_0196:
	case "花车" attend labelFunc0489_01B0:
	message("「实际上我的生意很好，我也喜欢我的花点亮整个地方的样子。但反正谁在乎生意呢，你为什么要问这个？只要说生活很美好就够了！」");
	say();
	UI_remove_answer("花车");
	UI_add_answer("生活");
labelFunc0489_01B0:
	case "生活" attend labelFunc0489_01C3:
	message("「只要你有地方住、买得起食物，你就有足够的钱，所以我认为自己是个富有的人。我每晚在谦逊少女酒馆享受美酒和歌声。我有着兴隆的生意和刺激的工作。我把岛上的每位居民都当作好朋友。我不对任何人感到愤怒，也不渴望更多。我从来没有理由感到孤独、担忧或无聊。还有什么比这更好的呢？生活很美好！」");
	say();
	UI_remove_answer("生活");
labelFunc0489_01C3:
	case "购买" attend labelFunc0489_0286:
	if (!(var0003 == 0x0007)) goto labelFunc0489_027B;
	if (!(!var0005)) goto labelFunc0489_01E3;
	message("「这岛上有许多漂亮的女士，她们习惯从遇见的绅士那里收到花。如果你没有花，那会造成可怕的尴尬！」");
	say();
	goto labelFunc0489_01E7;
labelFunc0489_01E3:
	message("「这岛上的绅士对女人的品味有个怪癖。他们无法拒绝任何戴着花的女人。如果你没有戴花，他们只会忽略你！」");
	say();
labelFunc0489_01E7:
	message("「你肯定想买一些吧？」");
	say();
	var0009 = Func090A();
	if (!var0009) goto labelFunc0489_0274;
	message("「一束花要 12 枚金币。你还有兴趣吗？」");
	say();
	var000A = Func090A();
	if (!var000A) goto labelFunc0489_0267;
	var000B = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var000B >= 0x000C)) goto labelFunc0489_0260;
	var000C = UI_add_party_items(0x0001, 0x03E7, 0xFE99, 0x0004, true);
	if (!var000C) goto labelFunc0489_0259;
	message("「这束花是你的了！」");
	say();
	var000D = UI_remove_party_items(0x000C, 0x0284, 0xFE99, 0xFE99, true);
	goto labelFunc0489_025D;
labelFunc0489_0259:
	message("「你的手太满了，拿不下这束花！」");
	say();
labelFunc0489_025D:
	goto labelFunc0489_0264;
labelFunc0489_0260:
	message("「你没有钱买花。但别灰心，只要你买得起，我还是会卖的。」");
	say();
labelFunc0489_0264:
	goto labelFunc0489_0271;
labelFunc0489_0267:
	message("「也许下次吧，");
	message(var0001);
	message("，」他笑着回答。");
	say();
labelFunc0489_0271:
	goto labelFunc0489_0278;
labelFunc0489_0274:
	message("「那也许下次吧。」");
	say();
labelFunc0489_0278:
	goto labelFunc0489_027F;
labelFunc0489_027B:
	message("「恐怕我的店现在关门了，但如果你在营业时间回来，我会为你明显的花卉紧急情况提供解决方案。」");
	say();
labelFunc0489_027F:
	UI_remove_answer("购买");
labelFunc0489_0286:
	case "陌生人" attend labelFunc0489_029D:
	message("「这岛上有三个陌生人是在船难中被冲上岸的。也许你会遇见他们。」");
	say();
	UI_remove_answer("陌生人");
	gflags[0x0180] = true;
labelFunc0489_029D:
	case "吊饰盒" attend labelFunc0489_02B0:
	message("「是的，我看到 Henry 拿着那个吊饰盒走过我的店，在找 Constance 。那一定是在他从 Katrina 那里收到它后没多久。我记得这件事，因为我给了他一朵花让他送给 Constance 。可怜的家伙，等他找到她时，那是他唯一能给她的东西了。」");
	say();
	UI_remove_answer("吊饰盒");
labelFunc0489_02B0:
	case "Robin" attend labelFunc0489_02C3:
	message("「唉呀，他听起来像是那三个陌生人之一！我见过他。他说话的样子好像想买些花，但他却直接走开了。后来我发现我的花车上少了一束花。那个无赖肯定把它们偷走了！」");
	say();
	UI_remove_answer("Robin");
labelFunc0489_02C3:
	case "Battles" attend labelFunc0489_02D6:
	message("「他一定是我们岛上那些遇船难的访客之一。是的，当他们三个走到我的花车前时，他瞪了我一眼，让我背脊发凉。我尽力忽略他。我绝对痛恨暴力。」");
	say();
	UI_remove_answer("Battles");
labelFunc0489_02D6:
	case "Leavell" attend labelFunc0489_02E9:
	message("「原来那就是我们不速之客其中之一的名字！稍早他们三个来到我的花车时，他跟我说话时非常友善，但我看穿了他。他提到注意到了 Constance ，但其他人示意他安静。」");
	say();
	UI_remove_answer("Leavell");
labelFunc0489_02E9:
	case "New Magincia" attend labelFunc0489_02FC:
	message("「我不是在这里出生的。我年轻时来到这里。我的父亲是个贵族，他更感兴趣的是我数金币，而不是致力于学习。有一段时间我在世界各地旅行，直到我落脚在这里。这是一个与不列颠尼亚其他地方都不同的特别之地。所以当你在这里时，请帮我们好好照顾它。」");
	say();
	UI_remove_answer("New Magincia");
labelFunc0489_02FC:
	case "告辞" attend labelFunc0489_0307:
	goto labelFunc0489_030A;
labelFunc0489_0307:
	goto labelFunc0489_00C6;
labelFunc0489_030A:
	endconv;
	message("「享受你的生活吧，朋友。」*");
	say();
labelFunc0489_030F:
	if (!(event == 0x0000)) goto labelFunc0489_0396;
	var0002 = UI_part_of_day();
	var0003 = UI_get_schedule_type(UI_get_npc_object(0xFF77));
	var000E = UI_die_roll(0x0001, 0x0004);
	if (!(var0003 == 0x0007)) goto labelFunc0489_0390;
	if (!(var000E == 0x0001)) goto labelFunc0489_0353;
	var000F = "@美丽的花朵！@";
labelFunc0489_0353:
	if (!(var000E == 0x0002)) goto labelFunc0489_0363;
	var000F = "@我有漂亮的花！@";
labelFunc0489_0363:
	if (!(var000E == 0x0003)) goto labelFunc0489_0373;
	var000F = "@谁来买这些可爱的花？@";
labelFunc0489_0373:
	if (!(var000E == 0x0004)) goto labelFunc0489_0383;
	var000F = "@你需要美丽的花朵！@";
labelFunc0489_0383:
	UI_item_say(0xFF77, var000F);
	goto labelFunc0489_0396;
labelFunc0489_0390:
	Func092E(0xFF77);
labelFunc0489_0396:
	return;
}


