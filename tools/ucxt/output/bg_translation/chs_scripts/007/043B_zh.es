#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08FC 0x8FC (var var0000, var var0001);
extern var Func090A 0x90A ();
extern void Func0919 0x919 ();
extern void Func091A 0x91A ();
extern void Func08E3 0x8E3 ();
extern void Func092E 0x92E (var var0000);

void Func043B object#(0x43B) ()
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
	var var0010;
	var var0011;
	var var0012;

	if (!(event == 0x0001)) goto labelFunc043B_030F;
	UI_show_npc_face(0xFFC5, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFFC5));
	var0003 = UI_wearing_fellowship();
	var0001 = UI_part_of_day();
	if (!(var0001 == 0x0007)) goto labelFunc043B_0074;
	var0004 = Func08FC(0xFFC5, 0xFFE6);
	if (!var0004) goto labelFunc043B_005F;
	message("Sean 全神贯注地听着友谊会的集会。*");
	say();
	abort;
	goto labelFunc043B_0074;
labelFunc043B_005F:
	if (!gflags[0x00DA]) goto labelFunc043B_006F;
	message("「我无法想像巴特林在哪里。他从不错过友谊会集会！」");
	say();
	goto labelFunc043B_0074;
	goto labelFunc043B_0074;
labelFunc043B_006F:
	message("「我现在不能停下来说话！我参加友谊会集会要迟到了！」*");
	say();
	abort;
labelFunc043B_0074:
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x00BC])) goto labelFunc043B_0096;
	message("你看见一个男人，他那张充满孩子气的脸庞上，镶嵌着仿佛看透世事、充满审视意味的双眼。");
	say();
	gflags[0x00BC] = true;
	goto labelFunc043B_00A0;
labelFunc043B_0096:
	message("「我能为你做什么，");
	message(var0000);
	message("？」 Sean 问。");
	say();
labelFunc043B_00A0:
	converse attend labelFunc043B_030A;
	case "姓名" attend labelFunc043B_00B6:
	message("「我的名字是 Sean 。」");
	say();
	UI_remove_answer("姓名");
labelFunc043B_00B6:
	case "职业" attend labelFunc043B_00D5:
	message("「当我不在处理友谊会事务时，我是不列颠城这里的珠宝商。如果你想买些什么，请说！」");
	say();
	UI_add_answer(["友谊会", "珠宝商", "不列颠城", "买东西"]);
labelFunc043B_00D5:
	case "珠宝商" attend labelFunc043B_00F5:
	message("「这是一项非常精细的工作。它需要只有少数人拥有的特殊手感。你必须确切地知道如何处理珍贵的材料。只有最优秀的工匠才能成为珠宝商，而且他们能获得最高的报酬。」");
	say();
	UI_remove_answer("珠宝商");
	UI_add_answer(["珍贵材料", "最优秀的工匠"]);
labelFunc043B_00F5:
	case "珍贵材料" attend labelFunc043B_010F:
	message("「我经常需要新材料来制作我非常特别的珠宝。我总是在市场上收购宝石。如果你有偶然发现任何宝石，而你想卖掉它们赚钱的话，我就是你要找的人。」");
	say();
	UI_remove_answer("珍贵材料");
	UI_add_answer("宝石");
labelFunc043B_010F:
	case "最优秀的工匠" attend labelFunc043B_0122:
	message("「就像我告诉你的，只有最优秀的工匠才能成为珠宝商，而我是最优秀的珠宝商。这难道还不够明显吗？」 Sean 哼了一声。「我的生意赚的钱比造币厂还多！」他勉强地笑了笑。");
	say();
	UI_remove_answer("最优秀的工匠");
labelFunc043B_0122:
	case "宝石" attend labelFunc043B_0257:
	if (!(!(var0002 == 0x0007))) goto labelFunc043B_013C;
	message("「珠宝店目前打烊了。晚点再来！」");
	say();
	goto labelFunc043B_0250;
labelFunc043B_013C:
	message("「你有宝石要卖吗？」");
	say();
	var0005 = Func090A();
	if (!var0005) goto labelFunc043B_024C;
	message("「我愿意以每颗宝石 30 枚金币的价格向你收购。这个价格你同意吗？」");
	say();
	var0006 = Func090A();
	if (!var0006) goto labelFunc043B_0245;
	var0007 = [0x000C, 0x000D];
	enum();
labelFunc043B_0169:
	for (var000A in var0007 with var0008 to var0009) attend labelFunc043B_01A7;
	if (!UI_count_objects(0xFE9B, 0x02F8, 0xFE99, var000A)) goto labelFunc043B_01A4;
	if (!(var000A == 0x000C)) goto labelFunc043B_0195;
	message("「你以为我是傻瓜吗？！这个蓝色小玩意儿一文不值！」");
	say();
labelFunc043B_0195:
	if (!(var000A == 0x000D)) goto labelFunc043B_01A3;
	message("Sean 的脸色紧绷。「这颗宝石又小又暗，就像邪恶巫妖的心脏一样。拿走！」");
	say();
labelFunc043B_01A3:
	abort;
labelFunc043B_01A4:
	goto labelFunc043B_0169;
labelFunc043B_01A7:
	var000B = UI_count_objects(0xFE9B, 0x02F8, 0xFE99, 0xFE99);
	var000C = (var000B * 0x001E);
	var000D = UI_remove_party_items(var000B, 0x02F8, 0xFE99, 0xFE99, true);
	if (!(var000B == 0x0000)) goto labelFunc043B_01E7;
	message("「你根本没有宝石！你这个骗子！我不跟你做生意了！」");
	say();
	abort;
labelFunc043B_01E7:
	if (!(var000B == 0x0001)) goto labelFunc043B_01F5;
	message("「我看到你有一颗宝石。」");
	say();
labelFunc043B_01F5:
	if (!(var000B > 0x0001)) goto labelFunc043B_0209;
	message("「我看到你有 ");
	message(var000B);
	message(" 颗宝石。」");
	say();
labelFunc043B_0209:
	var000E = UI_add_party_items(var000C, 0x0284, 0xFE99, 0xFE99, true);
	if (!var000E) goto labelFunc043B_022A;
	message("「这是你的报酬。」");
	say();
	goto labelFunc043B_0242;
labelFunc043B_022A:
	message("「你身上的东西太多，拿不下你的报酬了！」");
	say();
	var000F = UI_add_party_items(var000B, 0x02F8, 0xFE99, 0xFE99, true);
labelFunc043B_0242:
	goto labelFunc043B_0249;
labelFunc043B_0245:
	message("「看来我们没什么好谈的了。」");
	say();
labelFunc043B_0249:
	goto labelFunc043B_0250;
labelFunc043B_024C:
	message("「如果你没有宝石要卖，那就连提都别提，别浪费我的时间！」");
	say();
labelFunc043B_0250:
	UI_remove_answer("宝石");
labelFunc043B_0257:
	case "友谊会" attend labelFunc043B_0285:
	if (!var0003) goto labelFunc043B_026C;
	message("「我看你也是成员！」 Sean 突然用较为尊敬的眼神看着你。「我相信友谊会未来会为你带来无穷的好处。」他带着高傲的笑容说道。");
	say();
	goto labelFunc043B_0277;
labelFunc043B_026C:
	message("「甚至连你也可以加入友谊会，我可以告诉你更多关于它的事。」");
	say();
	Func0919();
	message("「如果你想听，我可以告诉你友谊会的理念。」");
	say();
labelFunc043B_0277:
	UI_remove_answer("友谊会");
	UI_add_answer("理念");
labelFunc043B_0285:
	case "理念" attend labelFunc043B_02AE:
	message("「你真的有兴趣听更多吗？」");
	say();
	var0010 = Func090A();
	if (!var0010) goto labelFunc043B_02A3;
	Func091A();
	goto labelFunc043B_02A7;
labelFunc043B_02A3:
	message("「我就知道我在白费唇舌。」");
	say();
labelFunc043B_02A7:
	UI_remove_answer("理念");
labelFunc043B_02AE:
	case "不列颠城" attend labelFunc043B_02C8:
	message("「我把整个生意搬到不列颠城，就是为了靠近友谊会的总部。你根本无法想像我加入友谊会之后，我的生意改善了多少。」");
	say();
	UI_remove_answer("不列颠城");
	UI_add_answer("友谊会");
labelFunc043B_02C8:
	case "买东西" attend labelFunc043B_02FC:
	if (!(var0002 == 0x0007)) goto labelFunc043B_02F1;
	message("「你想买些什么吗？」");
	say();
	if (!Func090A()) goto labelFunc043B_02EA;
	Func08E3();
	goto labelFunc043B_02EE;
labelFunc043B_02EA:
	message("「那么请随意逛逛。」");
	say();
labelFunc043B_02EE:
	goto labelFunc043B_02F5;
labelFunc043B_02F1:
	message("「请在正常营业时间来店里。」");
	say();
labelFunc043B_02F5:
	UI_remove_answer("买东西");
labelFunc043B_02FC:
	case "告辞" attend labelFunc043B_0307:
	goto labelFunc043B_030A;
labelFunc043B_0307:
	goto labelFunc043B_00A0;
labelFunc043B_030A:
	endconv;
	message("「我相信你一定得赶路了。」 Sean 微笑着。*");
	say();
labelFunc043B_030F:
	if (!(event == 0x0000)) goto labelFunc043B_0396;
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFFC5));
	var0011 = UI_die_roll(0x0001, 0x0004);
	if (!(var0002 == 0x0007)) goto labelFunc043B_0390;
	if (!(var0011 == 0x0001)) goto labelFunc043B_0353;
	var0012 = "@精美珠宝！@";
labelFunc043B_0353:
	if (!(var0011 == 0x0002)) goto labelFunc043B_0363;
	var0012 = "@需要黄金饰品吗？@";
labelFunc043B_0363:
	if (!(var0011 == 0x0003)) goto labelFunc043B_0373;
	var0012 = "@上等宝石！@";
labelFunc043B_0373:
	if (!(var0011 == 0x0004)) goto labelFunc043B_0383;
	var0012 = "@精工打造的珠宝！@";
labelFunc043B_0383:
	UI_item_say(0xFFC5, var0012);
	goto labelFunc043B_0396;
labelFunc043B_0390:
	Func092E(0xFFC5);
labelFunc043B_0396:
	return;
}


