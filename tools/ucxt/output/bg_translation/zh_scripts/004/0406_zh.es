#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func08EE 0x8EE ();
extern var Func090B 0x90B (var var0000);
extern var Func090A 0x90A ();
extern void Func0911 0x911 (var var0000);

void Func0406 object#(0x406) ()
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

	if (!(event == 0x0001)) goto labelFunc0406_03C6;
	var0000 = Func0908();
	var0001 = "聖者";
	var0002 = UI_get_party_list();
	var0003 = false;
	var0004 = UI_get_npc_object(0xFFFA);
	var0005 = UI_get_npc_object(0xFFF6);
	var0006 = Func0931(0xFE9B, 0x0001, 0x0304, 0xFE99, 0xFE99);
	UI_show_npc_face(0xFFFA, 0x0000);
	if (!(!gflags[0x0154])) goto labelFunc0406_006B;
	if (!(!var0006)) goto labelFunc0406_0068;
	message("這生物不理你。*");
	say();
	abort;
	goto labelFunc0406_006B;
labelFunc0406_0068:
	Func08EE();
labelFunc0406_006B:
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!gflags[0x0136]) goto labelFunc0406_0087;
	var0007 = var0000;
labelFunc0406_0087:
	if (!gflags[0x0137]) goto labelFunc0406_0093;
	var0007 = var0001;
labelFunc0406_0093:
	if (!(!gflags[0x0019])) goto labelFunc0406_0121;
	if (!(!gflags[0x013C])) goto labelFunc0406_00DB;
	message("這個像猿猴一樣的生物專注地盯著你看了幾分鐘。然後，他聳了聳肩，小心翼翼地走向你。「我是 Trellek 。你的名字是？」");
	say();
	var0008 = Func090B([var0000, var0001]);
	if (!(var0008 == var0000)) goto labelFunc0406_00C2;
	gflags[0x0136] = true;
labelFunc0406_00C2:
	if (!(var0008 == var0001)) goto labelFunc0406_00D0;
	gflags[0x0137] = true;
labelFunc0406_00D0:
	gflags[0x013C] = true;
	gflags[0x0019] = true;
	goto labelFunc0406_011A;
labelFunc0406_00DB:
	message("這隻森靈專注地盯著你看了幾分鐘。然後，他聳了聳肩，小心翼翼地走向你。「我是 Trellek 。你的名字是？」");
	say();
	var0008 = Func090B([var0000, var0001]);
	if (!(var0008 == var0000)) goto labelFunc0406_0102;
	gflags[0x0136] = true;
	var0007 = var0000;
labelFunc0406_0102:
	if (!(var0008 == var0001)) goto labelFunc0406_0116;
	gflags[0x0137] = true;
	var0007 = var0001;
labelFunc0406_0116:
	gflags[0x0019] = true;
labelFunc0406_011A:
	message("「向你致意。」");
	say();
	goto labelFunc0406_012B;
labelFunc0406_0121:
	message("「向你致意，");
	message(var0007);
	message("。」");
	say();
labelFunc0406_012B:
	if (!(gflags[0x0138] && (!gflags[0x0156]))) goto labelFunc0406_016B;
	if (!gflags[0x0158]) goto labelFunc0406_015D;
	if (!gflags[0x0155]) goto labelFunc0406_0153;
	if (!(!gflags[0x0156])) goto labelFunc0406_0150;
	UI_add_answer("Saralek 的主意");
labelFunc0406_0150:
	goto labelFunc0406_015A;
labelFunc0406_0153:
	UI_add_answer("沒有許可");
labelFunc0406_015A:
	goto labelFunc0406_016B;
labelFunc0406_015D:
	if (!(!gflags[0x0132])) goto labelFunc0406_016B;
	UI_add_answer("鬼火");
labelFunc0406_016B:
	if (!gflags[0x00E2]) goto labelFunc0406_0178;
	UI_add_answer("Julius");
labelFunc0406_0178:
	if (!(gflags[0x0151] && (!gflags[0x0132]))) goto labelFunc0406_018A;
	UI_add_answer("加入");
labelFunc0406_018A:
	converse attend labelFunc0406_03C1;
	case "姓名" attend labelFunc0406_01A0:
	message("「我的名字還是 Trellek 。」");
	say();
	UI_remove_answer("姓名");
labelFunc0406_01A0:
	case "職業" attend labelFunc0406_01CA:
	message("他給了你一個困惑的眼神。~~「我不明白『職業』的意思。你指的是『工作』嗎？」");
	say();
	var0009 = Func090A();
	if (!var0009) goto labelFunc0406_01C6;
	message("「我是個食物採集者。」");
	say();
	UI_add_answer("採集者");
	goto labelFunc0406_01CA;
labelFunc0406_01C6:
	message("「我沒有職業。」");
	say();
labelFunc0406_01CA:
	case "採集者" attend labelFunc0406_01EA:
	message("「所有的森靈都是食物採集者。我們主要尋找水果。」");
	say();
	UI_remove_answer("採集者");
	UI_add_answer(["水果", "森靈"]);
labelFunc0406_01EA:
	case "水果" attend labelFunc0406_01FD:
	message("「水果的味道很好，就像你給我們的蜂蜜一樣！」");
	say();
	UI_remove_answer("水果");
labelFunc0406_01FD:
	case "森靈" attend labelFunc0406_021D:
	message("「我是森靈。 Saralek 是森靈。 Salamon 是森靈。你，」他笑著說，「是人類。」");
	say();
	UI_remove_answer("森靈");
	UI_add_answer(["Saralek", "Salamon"]);
labelFunc0406_021D:
	case "Saralek" attend labelFunc0406_0237:
	message("「Saralek 是我的伴侶。你們會稱她為『妻子』。我的家就是她的家。」");
	say();
	UI_add_answer("家");
	UI_remove_answer("Saralek");
labelFunc0406_0237:
	case "家" attend labelFunc0406_0251:
	message("「銀葉樹是我們的家，」他點點頭。");
	say();
	UI_remove_answer("家");
	UI_add_answer("銀葉樹");
labelFunc0406_0251:
	case "銀葉樹" attend labelFunc0406_0264:
	message("「我無法用人類的語言來解釋銀葉樹。很抱歉。你應該去問另一個人類？」他聳了聳肩，把人類的手勢模仿得很好。");
	say();
	UI_remove_answer("銀葉樹");
labelFunc0406_0264:
	case "Salamon" attend labelFunc0406_0277:
	message("「Salamon 是最聰明的森靈。她見過人類。她見過『許多』事物。她非常有經驗且知識淵博。」");
	say();
	UI_remove_answer("Salamon");
labelFunc0406_0277:
	case "鬼火" attend labelFunc0406_0297:
	message("「我知道鬼火，」他點點頭。「在樹林裡可以找到鬼火。你有什麼事嗎？」");
	say();
	UI_add_answer(["樹林", "與鬼火交談"]);
	UI_remove_answer("鬼火");
labelFunc0406_0297:
	case "沒有許可" attend labelFunc0406_02B1:
	message("「你還是希望能和鬼火交談嗎？那麼幫助你就是我的目標。我可以做一個哨子。」");
	say();
	UI_remove_answer("沒有許可");
	UI_add_answer("哨子");
labelFunc0406_02B1:
	case "Saralek 的主意" attend labelFunc0406_02CB:
	message("「我的伴侶說得對。我可以做一個哨子。」");
	say();
	UI_add_answer("哨子");
	UI_remove_answer("Saralek 的主意");
labelFunc0406_02CB:
	case "樹林" attend labelFunc0406_02DE:
	message("「鬼火的住所是森林中央山裡的一棟石頭建築。」");
	say();
	UI_remove_answer("樹林");
labelFunc0406_02DE:
	case "哨子" attend labelFunc0406_0320:
	message("「當我們交談時，森靈會發出吹哨般的聲音。一種特殊的哨子可以模仿那種聲音，」他熱情地說。~~他開始迅速地在周圍尋找一根枯死、中空的掉落樹枝。不久他找到了一根令他滿意的。他顯然有些尷尬，轉過身背對著你，做出的動作類似於從酒壺上拔出軟木塞。~~這樣過了好幾分鐘後，他轉過身來，把哨子交給你。");
	say();
	var000A = UI_add_party_items(0x0001, 0x02B5, 0xFE99, 0x0001, false);
	if (!var000A) goto labelFunc0406_0315;
	message("「這是你的哨子。」");
	say();
	Func0911(0x0032);
	gflags[0x0156] = true;
	goto labelFunc0406_0319;
labelFunc0406_0315:
	message("「你必須減少攜帶的物品才能拿這個哨子。」");
	say();
labelFunc0406_0319:
	UI_remove_answer("哨子");
labelFunc0406_0320:
	case "與鬼火交談" attend labelFunc0406_0351:
	message("「你的話是個謎。你是想讓我去跟鬼火交談嗎？」");
	say();
	var000B = Func090A();
	if (!var000B) goto labelFunc0406_0346;
	message("他環顧四周，顯然在觀察這個區域。~~「這裡沒有鬼火可以交談。」");
	say();
	UI_add_answer("去那裡");
	goto labelFunc0406_034A;
labelFunc0406_0346:
	message("「我不明白你的意思。」他聳了聳肩。");
	say();
labelFunc0406_034A:
	UI_remove_answer("與鬼火交談");
labelFunc0406_0351:
	case "Julius" attend labelFunc0406_0372:
	UI_play_music(0x001A, 0x0000);
	message("「Julius 是個好人類。他的偉大功績是多年前從大火中拯救了森靈家族。」他直視著你。~~「但是，他的故事很悲傷，因為他吸入了太多煙霧而死。他的屍體在修道院附近的墓地裡。他是我們森靈稱之為『英雄』的一個人類。」");
	say();
	gflags[0x0129] = true;
	UI_remove_answer("Julius");
labelFunc0406_0372:
	case "加入", "去那裡" attend labelFunc0406_03B3:
	message("「你的願望是讓我跟你們一起旅行嗎？」");
	say();
	var0003 = Func090A();
	if (!var0003) goto labelFunc0406_0398;
	message("「這也是我的願望。但這不是 Saralek ，我妻子的願望。必須先得到她的許可。」");
	say();
	gflags[0x0132] = true;
	goto labelFunc0406_03A2;
labelFunc0406_0398:
	message("「你很奇怪，");
	message(var0007);
	message("。」");
	say();
labelFunc0406_03A2:
	var0003 = true;
	UI_remove_answer(["去那裡", "加入"]);
labelFunc0406_03B3:
	case "告辭" attend labelFunc0406_03BE:
	goto labelFunc0406_03C1;
labelFunc0406_03BE:
	goto labelFunc0406_018A;
labelFunc0406_03C1:
	endconv;
	message("「祝你好運。」*");
	say();
labelFunc0406_03C6:
	if (!(event == 0x0000)) goto labelFunc0406_046F;
	var000C = UI_part_of_day();
	var000D = UI_get_schedule_type(UI_get_npc_object(0xFFFA));
	var000E = UI_die_roll(0x0001, 0x0004);
	var0006 = Func0931(0xFE9B, 0x0001, 0x0304, 0xFE99, 0xFE99);
	if (!(var000D == 0x000B)) goto labelFunc0406_0455;
	if (!var0006) goto labelFunc0406_0455;
	if (!(var000E == 0x0001)) goto labelFunc0406_0425;
	var000F = "@向你致意。@";
labelFunc0406_0425:
	if (!(var000E == 0x0002)) goto labelFunc0406_0435;
	var000F = "@向你問好。@";
labelFunc0406_0435:
	if (!(var000E == 0x0003)) goto labelFunc0406_0445;
	var000F = "@祝你有美好的一天。@";
labelFunc0406_0445:
	if (!(var000E == 0x0004)) goto labelFunc0406_0455;
	var000F = "@天氣真好。@";
labelFunc0406_0455:
	if (!(var000D == 0x000E)) goto labelFunc0406_0465;
	var000F = "@呼嚕嚕……@";
labelFunc0406_0465:
	UI_item_say(0xFFFA, var000F);
labelFunc0406_046F:
	return;
}


