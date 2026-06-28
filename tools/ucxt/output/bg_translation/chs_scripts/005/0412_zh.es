#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0908 0x908 ();
extern var Func08FC 0x8FC (var var0000, var var0001);
extern var Func090B 0x90B (var var0000);
extern var Func08F7 0x8F7 (var var0000);
extern void Func0919 0x919 ();
extern void Func091A 0x91A ();
extern void Func0872 0x872 ();
extern void Func0873 0x873 ();
extern void Func0874 0x874 ();
extern void Func092E 0x92E (var var0000);

void Func0412 object#(0x412) ()
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

	if (!(event == 0x0001)) goto labelFunc0412_01EB;
	UI_show_npc_face(0xFFEE, 0x0000);
	var0000 = UI_part_of_day();
	var0001 = Func0909();
	var0002 = Func0908();
	var0003 = UI_get_schedule_type(UI_get_npc_object(0xFFEE));
	var0004 = "圣者";
	if (!(var0000 == 0x0007)) goto labelFunc0412_0061;
	var0005 = Func08FC(0xFFEE, 0xFFF0);
	if (!var0005) goto labelFunc0412_005C;
	message("Dell 对你在友谊会会议期间打扰他皱起了眉头。*");
	say();
	goto labelFunc0412_0060;
labelFunc0412_005C:
	message("「我没有时间和你说话！我必须赶去参加友谊会的会议！明天再来我的店里吧！」");
	say();
labelFunc0412_0060:
	abort;
labelFunc0412_0061:
	UI_add_answer(["姓名", "职业", "谋杀", "告辞"]);
	if (!(!gflags[0x0053])) goto labelFunc0412_00BC;
	message("你看到一位严厉的店主，他以前可能是一名强壮的战士。");
	say();
	if (!(var0003 == 0x0007)) goto labelFunc0412_008D;
	message("「既然进了我的店，你最好买点什么。」");
	say();
labelFunc0412_008D:
	message("「请问我在和谁说话？」");
	say();
	var0006 = Func090B([var0002, var0004]);
	if (!(var0006 == var0002)) goto labelFunc0412_00B1;
	message("「哼。我的名字是 Dell。」");
	say();
	goto labelFunc0412_00B5;
labelFunc0412_00B1:
	message("「喔，你真的是吗？我不知道有这么多『圣者』！怎么，上周才刚有一个『圣者』从这里经过！他还骗了我 20 金币！他是个骗术大师！」~~Dell 上下打量着你。「圣者，确实！我不喜欢圣者。不过算了。我叫 Dell。你想要什么？」");
	say();
labelFunc0412_00B5:
	gflags[0x0053] = true;
	goto labelFunc0412_00C0;
labelFunc0412_00BC:
	message("「有什么我可以帮忙的吗？」 Dell 问道。");
	say();
labelFunc0412_00C0:
	converse attend labelFunc0412_01D8;
	case "姓名" attend labelFunc0412_00D6:
	message("「我的名字是 Dell。我不是已经说过了吗？」");
	say();
	UI_remove_answer("姓名");
labelFunc0412_00D6:
	case "职业" attend labelFunc0412_00FE:
	message("Dell 看起来很不高兴。「当我不为友谊会工作时，我卖武器、盔甲和补给品。」");
	say();
	UI_add_answer("购买");
	if (!(var0003 == 0x0007)) goto labelFunc0412_00F7;
	message("「如果你不打算买任何东西，那就从我眼前消失！」");
	say();
labelFunc0412_00F7:
	UI_add_answer("友谊会");
labelFunc0412_00FE:
	case "谋杀" attend labelFunc0412_013F:
	message("「除了街上的传闻之外，我对此事一无所知，所以别问我。如果你不打算买任何东西，那你就是在浪费我的时间。走开。」");
	say();
	UI_remove_answer("谋杀");
	var0007 = Func08F7(0xFFFF);
	if (!var0007) goto labelFunc0412_013F;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("Iolo 对你低声说：「真是个讨人喜欢的家伙，不是吗？」");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFEE, 0x0000);
labelFunc0412_013F:
	case "友谊会" attend labelFunc0412_0151:
	Func0919();
	UI_remove_answer("友谊会");
labelFunc0412_0151:
	case "理念" attend labelFunc0412_0163:
	Func091A();
	UI_remove_answer("理念");
labelFunc0412_0163:
	case "购买" attend labelFunc0412_019D:
	if (!(var0003 == 0x0007)) goto labelFunc0412_0199;
	message("「没问题， ");
	message(var0001);
	message("。你想看看什么类型的商品？」");
	say();
	UI_push_answers();
	UI_add_answer(["什么都不买", "武器", "盔甲", "补给品"]);
	goto labelFunc0412_019D;
labelFunc0412_0199:
	message("「请在营业时间来我的店里。」");
	say();
labelFunc0412_019D:
	case "武器" attend labelFunc0412_01A8:
	Func0872();
labelFunc0412_01A8:
	case "盔甲" attend labelFunc0412_01B3:
	Func0873();
labelFunc0412_01B3:
	case "补给品" attend labelFunc0412_01BE:
	Func0874();
labelFunc0412_01BE:
	case "什么都不买" attend labelFunc0412_01CA:
	UI_pop_answers();
labelFunc0412_01CA:
	case "告辞" attend labelFunc0412_01D5:
	goto labelFunc0412_01D8;
labelFunc0412_01D5:
	goto labelFunc0412_00C0;
labelFunc0412_01D8:
	endconv;
	message("「哼。」");
	say();
	if (!(var0003 == 0x0007)) goto labelFunc0412_01EB;
	message("「下次你进来的时候多花点钱。」");
	say();
labelFunc0412_01EB:
	if (!(event == 0x0000)) goto labelFunc0412_0272;
	var0000 = UI_part_of_day();
	var0003 = UI_get_schedule_type(UI_get_npc_object(0xFFEE));
	var0008 = UI_die_roll(0x0001, 0x0004);
	if (!(var0003 == 0x0007)) goto labelFunc0412_026C;
	if (!(var0008 == 0x0001)) goto labelFunc0412_022F;
	var0009 = "@买点东西吧！@";
labelFunc0412_022F:
	if (!(var0008 == 0x0002)) goto labelFunc0412_023F;
	var0009 = "@盔甲！武器！@";
labelFunc0412_023F:
	if (!(var0008 == 0x0003)) goto labelFunc0412_024F;
	var0009 = "@沼泽靴？睡袋？@";
labelFunc0412_024F:
	if (!(var0008 == 0x0004)) goto labelFunc0412_025F;
	var0009 = "@这里有最好的商品！@";
labelFunc0412_025F:
	UI_item_say(0xFFEE, var0009);
	goto labelFunc0412_0272;
labelFunc0412_026C:
	Func092E(0xFFEE);
labelFunc0412_0272:
	return;
}


