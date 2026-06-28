#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);
extern void Func08A0 0x8A0 ();
extern void Func0911 0x911 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func042F object#(0x42F) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0001)) goto labelFunc042F_01D0;
	UI_show_npc_face(0xFFD1, 0x0000);
	var0000 = UI_part_of_day();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFFD1));
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!gflags[0x007B]) goto labelFunc042F_0044;
	UI_add_answer("Charles");
labelFunc042F_0044:
	if (!(!gflags[0x00B0])) goto labelFunc042F_0056;
	message("这位年轻可爱的酒馆女侍既性感又甜美。");
	say();
	gflags[0x00B0] = true;
	goto labelFunc042F_005A;
labelFunc042F_0056:
	message("「又见面了！」活泼的 Jeanette 说。");
	say();
labelFunc042F_005A:
	converse attend labelFunc042F_01CB;
	case "姓名" attend labelFunc042F_0070:
	message("「 Jeanette ，为您服务！」");
	say();
	UI_remove_answer("姓名");
labelFunc042F_0070:
	case "职业" attend labelFunc042F_00E1:
	message("「我在蓝野猪酒馆为 Lucy 工作。我提供食物和饮料。");
	say();
	if (!(var0001 == 0x0017)) goto labelFunc042F_00DD;
	message("「如果有任何你想要的，请说！而且，呃，如果你跟我买，我会给你折扣！」");
	say();
	var0002 = Func08F7(0xFFFC);
	if (!var0002) goto labelFunc042F_00CA;
	message("「哎呀， Dupre 爵士！很高兴再次见到你！」*");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「妳好，女士！我想我可能会再来品尝蓝野猪的优质饮料！」*");
	say();
	UI_show_npc_face(0xFFD1, 0x0000);
	message("「随时欢迎，大人！随时欢迎！」*");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFFD1, 0x0000);
labelFunc042F_00CA:
	UI_add_answer(["食物", "饮料", "购买"]);
	goto labelFunc042F_00E1;
labelFunc042F_00DD:
	message("「我在白天和晚上工作。你到时候应该来酒馆，我们再多聊聊！」");
	say();
labelFunc042F_00E1:
	case "食物" attend labelFunc042F_00FB:
	message("「Lucy 是个好厨师。我推荐所有的东西。特别是银树叶。」");
	say();
	UI_add_answer("银树叶");
	UI_remove_answer("食物");
labelFunc042F_00FB:
	case "银树叶" attend labelFunc042F_010E:
	message("「很棒的一道菜。尝尝看吧！」");
	say();
	UI_remove_answer("银树叶");
labelFunc042F_010E:
	case "饮料" attend labelFunc042F_0121:
	message("「你看起来像是需要好好喝一杯！」");
	say();
	UI_remove_answer("饮料");
labelFunc042F_0121:
	case "购买" attend labelFunc042F_012C:
	Func08A0();
labelFunc042F_012C:
	case "Charles" attend labelFunc042F_0150:
	message("「他提到我了是吗？嗯，他可以再想想！我没办法强迫自己和上流阶级交往。那些资产阶级的有钱男人既讨厌又自负。此外，我已经爱上别人了。」");
	say();
	gflags[0x007D] = true;
	UI_remove_answer("Charles");
	UI_add_answer(["上流阶级", "别人"]);
labelFunc042F_0150:
	case "上流阶级" attend labelFunc042F_0163:
	message("「他们都一样。他们在城堡里工作，有成堆的黄金，可以拥有任何他们想要的女人！另一方面，一个谦卑的商人才是完美的男人。」");
	say();
	UI_remove_answer("上流阶级");
labelFunc042F_0163:
	case "别人" attend labelFunc042F_01BD:
	message("「是烘焙师 Willy ！但他还不知道！」她咯咯地笑。");
	say();
	gflags[0x0085] = true;
	var0003 = Func08F7(0xFFDB);
	if (!var0003) goto labelFunc042F_01A4;
	UI_show_npc_face(0xFFDB, 0x0000);
	message("「等等， Jeanette ！妳完全搞错了！ Charles 是个 -仆人- ！妳真是个无知的人！ Charles 不是『上流阶级』！他和妳一样是工人阶级！那个富有的商人是 Willy ！如果你问我，那个讨厌又自负的人是 Willy 。 Charles 简直就是个梦幻天菜！」");
	say();
	UI_remove_npc_face(0xFFDB);
	UI_show_npc_face(0xFFD1, 0x0000);
	goto labelFunc042F_01A8;
labelFunc042F_01A4:
	message("你向 Jeanette 指出 Charles 是一名仆人。");
	say();
labelFunc042F_01A8:
	message("Jeanette 想了想刚才的话。「你是对的！我真不敢相信我这么瞎！喔， Charles ！我竟然真的可以考虑 Charles ！而且他……好帅！」 Jeanette 高兴地尖叫。「下次他在酒馆时，我一定要认真地跟他调情！」");
	say();
	gflags[0x007E] = true;
	Func0911(0x0014);
	UI_remove_answer("别人");
labelFunc042F_01BD:
	case "告辞" attend labelFunc042F_01C8:
	goto labelFunc042F_01CB;
labelFunc042F_01C8:
	goto labelFunc042F_005A;
labelFunc042F_01CB:
	endconv;
	message("「再会！」*");
	say();
labelFunc042F_01D0:
	if (!(event == 0x0000)) goto labelFunc042F_01DE;
	Func092E(0xFFD1);
labelFunc042F_01DE:
	return;
}


