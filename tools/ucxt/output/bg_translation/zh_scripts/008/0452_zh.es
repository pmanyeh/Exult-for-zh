#game "blackgate"
// externs
extern var Func08FC 0x8FC (var var0000, var var0001);
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func0452 object#(0x452) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0001)) goto labelFunc0452_0230;
	UI_show_npc_face(0xFFAE, 0x0000);
	var0000 = UI_part_of_day();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFFAE));
	if (!(var0000 == 0x0007)) goto labelFunc0452_005E;
	if (!(!(var0001 == 0x0010))) goto labelFunc0452_003F;
	goto labelFunc0452_005E;
labelFunc0452_003F:
	var0002 = Func08FC(0xFFAE, 0xFFAF);
	if (!var0002) goto labelFunc0452_0059;
	message("Gregor 正專注於友誼會的會議中，現在無法交談。*");
	say();
	abort;
	goto labelFunc0452_005E;
labelFunc0452_0059:
	message("「沒時間閒聊了！我必須去參加友誼會會議！我遲到了！」*");
	say();
	abort;
labelFunc0452_005E:
	var0003 = Func0909();
	UI_add_answer(["姓名", "職業", "告辭"]);
	var0004 = Func08F7(0xFFAF);
	if (!var0004) goto labelFunc0452_009E;
	if (!(var0000 == 0x0000)) goto labelFunc0452_009E;
	if (!(var0001 == 0x0010)) goto labelFunc0452_009E;
	UI_add_answer("Elynor");
labelFunc0452_009E:
	if (!(!gflags[0x010D])) goto labelFunc0452_00B0;
	message("你看到一位老人，他那盛氣凌人的性情與他年邁但硬朗的體格相符。");
	say();
	gflags[0x010D] = true;
	goto labelFunc0452_00B4;
labelFunc0452_00B0:
	message("「你是在跟我說話嗎？」Gregor 皺著眉頭。");
	say();
labelFunc0452_00B4:
	converse attend labelFunc0452_022B;
	case "姓名" attend labelFunc0452_00CA:
	message("「我的名字是 Gregor 。」");
	say();
	UI_remove_answer("姓名");
labelFunc0452_00CA:
	case "職業" attend labelFunc0452_0101:
	if (!gflags[0x011F]) goto labelFunc0452_00EC;
	message("「我是不列顛尼亞礦業公司 Minoc 分部的負責人。」");
	say();
	UI_add_answer(["Minoc", "不列顛尼亞礦業公司"]);
	goto labelFunc0452_0101;
labelFunc0452_00EC:
	message("「你發燒了嗎，");
	message(var0003);
	message("？你沒意識到我們為什麼聚集在這裡嗎？在這樣的悲劇面前，你還能如此無動於衷，真是可恥！」");
	say();
	gflags[0x011F] = true;
	UI_add_answer("謀殺案");
labelFunc0452_0101:
	case "Minoc" attend labelFunc0452_0121:
	message("「我們的城鎮是不列顛尼亞主要的貿易中心，這是一個社會變革的地方。」");
	say();
	UI_remove_answer("Minoc");
	UI_add_answer(["貿易", "社會變革"]);
labelFunc0452_0121:
	case "不列顛尼亞礦業公司" attend labelFunc0452_0134:
	message("「不列顛尼亞礦業公司生產各種各樣的礦物，這些礦物對於不列顛尼亞的持續發展至關重要。」");
	say();
	UI_remove_answer("不列顛尼亞礦業公司");
labelFunc0452_0134:
	case "貿易" attend labelFunc0452_015A:
	message("「在 Minoc 我們有不列顛尼亞最大的採礦場之一，一座鋸木廠，一家旅店，藝術家公會，和一位造船匠。」");
	say();
	UI_add_answer(["鋸木廠", "旅店", "藝術家公會", "造船匠"]);
	UI_remove_answer("貿易");
labelFunc0452_015A:
	case "社會變革" attend labelFunc0452_017A:
	message("「在 Minoc 這裡，我們正在為優秀的造船匠 Owen 建立一座紀念碑，他是一位工藝大師，他的名字很快就會在整個不列顛尼亞聞名。我們還有一個非常活躍的友誼會分會。」");
	say();
	UI_remove_answer("社會變革");
	UI_add_answer(["紀念碑", "友誼會"]);
labelFunc0452_017A:
	case "鋸木廠" attend labelFunc0452_018D:
	message("「一個歷史悠久且利潤豐厚的生意。可惜它將會因為在那裡發生的謀殺案而變得更出名，而不是因為它所做的任何出色工作。」");
	say();
	UI_remove_answer("鋸木廠");
labelFunc0452_018D:
	case "旅店" attend labelFunc0452_01A0:
	message("「 The Checquered Cork 以其質樸的特色和氛圍而聞名。那是個好地方。不要被它表面上的不整潔給嚇跑了。」");
	say();
	UI_remove_answer("旅店");
labelFunc0452_01A0:
	case "藝術家公會" attend labelFunc0452_01B3:
	message("「藝術家公會是一小群工匠聚集在一起販售他們小飾品的地方。他們以作為當地對任何事物都持異議者而自豪。」");
	say();
	UI_remove_answer("藝術家公會");
labelFunc0452_01B3:
	case "造船匠" attend labelFunc0452_01C6:
	message("「我可能已經提到過造船匠 Owen 。他建造了有史以來最棒的船隻。」");
	say();
	UI_remove_answer("造船匠");
labelFunc0452_01C6:
	case "紀念碑" attend labelFunc0452_01E4:
	message("「我協助與鎮長 Burnside 一起籌劃建立這座紀念碑。」");
	say();
	if (!(!gflags[0x00F7])) goto labelFunc0452_01DD;
	message("「它將會非常巨大，並用我們礦坑裡最優質的礦石製成。」");
	say();
labelFunc0452_01DD:
	UI_remove_answer("紀念碑");
labelFunc0452_01E4:
	case "友誼會" attend labelFunc0452_01F7:
	message("「他們為 Minoc 做了無法估量的好事，幫助對抗在我們這樣一個許多人都專注於金錢利益的城鎮中可能發生的分裂。」");
	say();
	UI_remove_answer("友誼會");
labelFunc0452_01F7:
	case "謀殺案" attend labelFunc0452_020A:
	message("「太可怕了！吉普賽人 Frederico 和 Tania 被發現陳屍在 William 的鋸木廠裡！」");
	say();
	UI_remove_answer("謀殺案");
labelFunc0452_020A:
	case "Elynor" attend labelFunc0452_021D:
	message("「別打擾我們，該死！ Elynor 和我相愛著，我們希望能單獨在一起！去別處找你廉價的刺激吧！」");
	say();
	UI_remove_answer("Elynor");
labelFunc0452_021D:
	case "告辭" attend labelFunc0452_0228:
	goto labelFunc0452_022B;
labelFunc0452_0228:
	goto labelFunc0452_00B4;
labelFunc0452_022B:
	endconv;
	message("「那就上路吧。」*");
	say();
labelFunc0452_0230:
	if (!(event == 0x0000)) goto labelFunc0452_023E;
	Func092E(0xFFAE);
labelFunc0452_023E:
	return;
}


