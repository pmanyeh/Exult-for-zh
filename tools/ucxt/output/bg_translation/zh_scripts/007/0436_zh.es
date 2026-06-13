#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern void Func0863 0x863 ();
extern void Func092E 0x92E (var var0000);

void Func0436 object#(0x436) ()
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

	if (!(event == 0x0001)) goto labelFunc0436_0289;
	UI_show_npc_face(0xFFCA, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = UI_part_of_day();
	var0003 = UI_get_schedule_type(UI_get_npc_object(0xFFCA));
	if (!(var0002 == 0x0007)) goto labelFunc0436_00C2;
	var0004 = Func08F7(0xFFD9);
	var0005 = Func08F7(0xFFD8);
	if (!(var0004 && var0005)) goto labelFunc0436_00BD;
	message("Coop 正與『聖者旅團』在舞台上。他看見你，並說：「嗯，今晚有位特別的聽眾，這下一首曲子是要獻給他們的。」");
	say();
	message("他向夥伴們示意，他們開始演奏。他唱出以下歌詞：");
	say();
	message("「我們飛躍全國，所向披靡——~最好留意我們的戰鬥怒吼！");
	say();
	message("「我們為美德而戰，名揚四海，~並讓少女們為之傾心。」");
	say();
	message("接著 Neno 和 Judith 加入了合唱：");
	say();
	message("「喔，我們是『聖者旅團』~而且我們品德高尚！");
	say();
	message("「當心點，食人魔與野獸~以免成為我們下一次盛宴的佳餚！");
	say();
	message("「我們拯救少女，如此美麗，~並大膽地與海盜搏鬥！");
	say();
	message("「沒有邪惡的巫妖能讓我們畏縮或動搖！~我們將戰勝他們所有人，贏得勝利！");
	say();
	message("「我們是聖——者！~我們是聖——者！~我們是聖——者——樂——團！」");
	say();
	message("掌聲如雷動。*");
	say();
	var0006 = Func08F7(0xFFFF);
	if (!var0006) goto labelFunc0436_00BA;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「嗯。他們一定是看到你來了，");
	message(var0001);
	message("。」*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFCA, 0x0000);
	abort;
labelFunc0436_00BA:
	goto labelFunc0436_00C2;
labelFunc0436_00BD:
	message("「現在不能停下來說話！我參加『聖者旅團』的表演要遲到了！來藍野豬酒館聽我們演奏吧！」*");
	say();
	abort;
labelFunc0436_00C2:
	UI_add_answer(["姓名", "職業", "告辭"]);
	var0006 = Func08F7(0xFFFF);
	if (!var0006) goto labelFunc0436_00E8;
	UI_add_answer("Iolo");
labelFunc0436_00E8:
	if (!(!gflags[0x00B7])) goto labelFunc0436_0141;
	message("你看見一個年輕、精瘦的青少年。");
	say();
	if (!var0006) goto labelFunc0436_013A;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「你好啊，小夥子！這是");
	message(var0000);
	message("，聖者！這是我的年輕學徒， Coop 。最近好嗎， Coop ？」*");
	say();
	UI_show_npc_face(0xFFCA, 0x0000);
	message("「還不錯，大人。我今天早上賣出了一把三連弩。」*");
	say();
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「太好了！太好了！讓金幣繼續滾滾而來，我總是這麼說！」*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFCA, 0x0000);
labelFunc0436_013A:
	gflags[0x00B7] = true;
	goto labelFunc0436_0145;
labelFunc0436_0141:
	message("「你好！」 Coop 說。");
	say();
labelFunc0436_0145:
	converse attend labelFunc0436_0284;
	case "姓名" attend labelFunc0436_015B:
	message("「我的名字是 Coop 。」");
	say();
	UI_remove_answer("姓名");
labelFunc0436_015B:
	case "職業" attend labelFunc0436_0196:
	message("「我是 Iolo 弓箭店的經理！ Iolo 大師把這個重任交託給我！");
	say();
	if (!(var0003 == 0x0007)) goto labelFunc0436_0185;
	message("「如果你在弓箭方面需要任何東西，請告訴我！」");
	say();
	UI_add_answer(["弓箭", "買東西"]);
	goto labelFunc0436_0189;
labelFunc0436_0185:
	message("「你必須在店裡營業時來！」");
	say();
labelFunc0436_0189:
	UI_add_answer(["Iolo 弓箭店", "重任"]);
labelFunc0436_0196:
	case "Iolo 弓箭店" attend labelFunc0436_01A9:
	message("「Iolo 在很多、很多年前開了這間店。他最近在 Serpent's Hold 開了 Iolo 南部分店。他變得相當有企業家精神了！」");
	say();
	UI_remove_answer("Iolo 弓箭店");
labelFunc0436_01A9:
	case "重任" attend labelFunc0436_01F5:
	message("「我賣很多商品，但我也打算成為一名弓箭大師來延續 Iolo 的好名聲！ Iolo 教導得很好！」*");
	say();
	var0006 = Func08F7(0xFFFF);
	if (!var0006) goto labelFunc0436_01E3;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「是的，這小夥子很棒！在我教他第一堂課之前就很棒了。」*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFCA, 0x0000);
labelFunc0436_01E3:
	message("「我多麼想加入你們的隊伍去冒險啊！但是，那就沒人來顧店了。所以我不能去。但總有一天……總之，我晚上會跟一個樂團一起唱歌來取悅自己。」");
	say();
	UI_remove_answer("重任");
	UI_add_answer("唱歌");
labelFunc0436_01F5:
	case "Iolo" attend labelFunc0436_022B:
	message("「你好，老闆！」*");
	say();
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「你好，小夥子。你看起來不錯。」*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFCA, 0x0000);
	message("「你也是，大人！」*");
	say();
	UI_remove_answer("Iolo");
labelFunc0436_022B:
	case "唱歌" attend labelFunc0436_0245:
	message("「我的樂團叫做……嗯，叫做『聖者旅團』。希望那沒有冒犯到你。」");
	say();
	UI_remove_answer("唱歌");
	UI_add_answer("聖者旅團");
labelFunc0436_0245:
	case "聖者旅團" attend labelFunc0436_0258:
	message("「樂團就只有我和音樂廳的兩位音樂家。我們每晚在藍野豬酒館表演。我負責唱歌和寫歌詞。其他兩位演奏樂器。請來聽我們演奏！」");
	say();
	UI_remove_answer("聖者旅團");
labelFunc0436_0258:
	case "弓箭" attend labelFunc0436_026B:
	message("「我們賣各種弓，還有箭和弩箭。如果你想買些什麼，請說！」");
	say();
	UI_remove_answer("弓箭");
labelFunc0436_026B:
	case "買東西" attend labelFunc0436_0276:
	Func0863();
labelFunc0436_0276:
	case "告辭" attend labelFunc0436_0281:
	goto labelFunc0436_0284;
labelFunc0436_0281:
	goto labelFunc0436_0145;
labelFunc0436_0284:
	endconv;
	message("「再見！」*");
	say();
labelFunc0436_0289:
	if (!(event == 0x0000)) goto labelFunc0436_0310;
	var0002 = UI_part_of_day();
	var0003 = UI_get_schedule_type(UI_get_npc_object(0xFFCA));
	var0007 = UI_die_roll(0x0001, 0x0004);
	if (!(var0003 == 0x0007)) goto labelFunc0436_030A;
	if (!(var0007 == 0x0001)) goto labelFunc0436_02CD;
	var0008 = "@需要弓或箭嗎？@";
labelFunc0436_02CD:
	if (!(var0007 == 0x0002)) goto labelFunc0436_02DD;
	var0008 = "@Iolo 弓箭店營業中！@";
labelFunc0436_02DD:
	if (!(var0007 == 0x0003)) goto labelFunc0436_02ED;
	var0008 = "@需要弩箭？還是箭？@";
labelFunc0436_02ED:
	if (!(var0007 == 0x0004)) goto labelFunc0436_02FD;
	var0008 = "@弓箭裝備！@";
labelFunc0436_02FD:
	UI_item_say(0xFFCA, var0008);
	goto labelFunc0436_0310;
labelFunc0436_030A:
	Func092E(0xFFCA);
labelFunc0436_0310:
	return;
}


