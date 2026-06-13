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
	var0004 = "聖者";
	if (!(var0000 == 0x0007)) goto labelFunc0412_0061;
	var0005 = Func08FC(0xFFEE, 0xFFF0);
	if (!var0005) goto labelFunc0412_005C;
	message("Dell 對你在友誼會會議期間打擾他皺起了眉頭。*");
	say();
	goto labelFunc0412_0060;
labelFunc0412_005C:
	message("「我沒有時間和你說話！我必須趕去參加友誼會的會議！明天再來我的店裡吧！」");
	say();
labelFunc0412_0060:
	abort;
labelFunc0412_0061:
	UI_add_answer(["姓名", "職業", "謀殺", "告辭"]);
	if (!(!gflags[0x0053])) goto labelFunc0412_00BC;
	message("你看到一位嚴厲的店主，他以前可能是一名強壯的戰士。");
	say();
	if (!(var0003 == 0x0007)) goto labelFunc0412_008D;
	message("「既然進了我的店，你最好買點什麼。」");
	say();
labelFunc0412_008D:
	message("「請問我在和誰說話？」");
	say();
	var0006 = Func090B([var0002, var0004]);
	if (!(var0006 == var0002)) goto labelFunc0412_00B1;
	message("「哼。我的名字是 Dell。」");
	say();
	goto labelFunc0412_00B5;
labelFunc0412_00B1:
	message("「喔，你真的是嗎？我不知道有這麼多『聖者』！怎麼，上週才剛有一個『聖者』從這裡經過！他還騙了我 20 金幣！他是個騙術大師！」~~Dell 上下打量著你。「聖者，確實！我不喜歡聖者。不過算了。我叫 Dell。你想要什麼？」");
	say();
labelFunc0412_00B5:
	gflags[0x0053] = true;
	goto labelFunc0412_00C0;
labelFunc0412_00BC:
	message("「有什麼我可以幫忙的嗎？」 Dell 問道。");
	say();
labelFunc0412_00C0:
	converse attend labelFunc0412_01D8;
	case "姓名" attend labelFunc0412_00D6:
	message("「我的名字是 Dell。我不是已經說過了嗎？」");
	say();
	UI_remove_answer("姓名");
labelFunc0412_00D6:
	case "職業" attend labelFunc0412_00FE:
	message("Dell 看起來很不高興。「當我不為友誼會工作時，我賣武器、盔甲和補給品。」");
	say();
	UI_add_answer("購買");
	if (!(var0003 == 0x0007)) goto labelFunc0412_00F7;
	message("「如果你不打算買任何東西，那就從我眼前消失！」");
	say();
labelFunc0412_00F7:
	UI_add_answer("友誼會");
labelFunc0412_00FE:
	case "謀殺" attend labelFunc0412_013F:
	message("「除了街上的傳聞之外，我對此事一無所知，所以別問我。如果你不打算買任何東西，那你就是在浪費我的時間。走開。」");
	say();
	UI_remove_answer("謀殺");
	var0007 = Func08F7(0xFFFF);
	if (!var0007) goto labelFunc0412_013F;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("Iolo 對你低聲說：「真是個討人喜歡的傢伙，不是嗎？」");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFEE, 0x0000);
labelFunc0412_013F:
	case "友誼會" attend labelFunc0412_0151:
	Func0919();
	UI_remove_answer("友誼會");
labelFunc0412_0151:
	case "理念" attend labelFunc0412_0163:
	Func091A();
	UI_remove_answer("理念");
labelFunc0412_0163:
	case "購買" attend labelFunc0412_019D:
	if (!(var0003 == 0x0007)) goto labelFunc0412_0199;
	message("「沒問題， ");
	message(var0001);
	message("。你想看看什麼類型的商品？」");
	say();
	UI_push_answers();
	UI_add_answer(["什麼都不買", "武器", "盔甲", "補給品"]);
	goto labelFunc0412_019D;
labelFunc0412_0199:
	message("「請在營業時間來我的店裡。」");
	say();
labelFunc0412_019D:
	case "武器" attend labelFunc0412_01A8:
	Func0872();
labelFunc0412_01A8:
	case "盔甲" attend labelFunc0412_01B3:
	Func0873();
labelFunc0412_01B3:
	case "補給品" attend labelFunc0412_01BE:
	Func0874();
labelFunc0412_01BE:
	case "什麼都不買" attend labelFunc0412_01CA:
	UI_pop_answers();
labelFunc0412_01CA:
	case "告辭" attend labelFunc0412_01D5:
	goto labelFunc0412_01D8;
labelFunc0412_01D5:
	goto labelFunc0412_00C0;
labelFunc0412_01D8:
	endconv;
	message("「哼。」");
	say();
	if (!(var0003 == 0x0007)) goto labelFunc0412_01EB;
	message("「下次你進來的時候多花點錢。」");
	say();
labelFunc0412_01EB:
	if (!(event == 0x0000)) goto labelFunc0412_0272;
	var0000 = UI_part_of_day();
	var0003 = UI_get_schedule_type(UI_get_npc_object(0xFFEE));
	var0008 = UI_die_roll(0x0001, 0x0004);
	if (!(var0003 == 0x0007)) goto labelFunc0412_026C;
	if (!(var0008 == 0x0001)) goto labelFunc0412_022F;
	var0009 = "@買點東西吧！@";
labelFunc0412_022F:
	if (!(var0008 == 0x0002)) goto labelFunc0412_023F;
	var0009 = "@盔甲！武器！@";
labelFunc0412_023F:
	if (!(var0008 == 0x0003)) goto labelFunc0412_024F;
	var0009 = "@沼澤靴？睡袋？@";
labelFunc0412_024F:
	if (!(var0008 == 0x0004)) goto labelFunc0412_025F;
	var0009 = "@這裡有最好的商品！@";
labelFunc0412_025F:
	UI_item_say(0xFFEE, var0009);
	goto labelFunc0412_0272;
labelFunc0412_026C:
	Func092E(0xFFEE);
labelFunc0412_0272:
	return;
}


