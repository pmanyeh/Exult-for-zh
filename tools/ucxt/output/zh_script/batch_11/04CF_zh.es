#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090B 0x90B (var var0000);
extern void Func094D 0x94D ();
extern void Func094E 0x94E ();

void Func04CF object#(0x4CF) ()
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

	if (!(event == 0x0001)) goto labelFunc04CF_027F;
	UI_show_npc_face(0xFF31, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = "聖者";
	var0003 = Func08F7(0xFFFC);
	var0004 = false;
	var0005 = false;
	var0006 = false;
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!var0003) goto labelFunc04CF_0072;
	message("「啊，我的好朋友， Dupre 。今天這麼好的天氣，我能為你做什麼？」");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「啊， Yongi 大師，總是準備好提供你最好的一杯。」");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFF31, 0x0000);
labelFunc04CF_0072:
	if (!(!gflags[0x028C])) goto labelFunc04CF_0088;
	message("在吧台服務的是一個看起來很愉快的人。「歡迎來到鍍金蜥蜴 (Gilded Lizard) 。」");
	say();
	var0006 = true;
	gflags[0x028C] = true;
	goto labelFunc04CF_008C;
labelFunc04CF_0088:
	message("「歡迎回到鍍金蜥蜴 (Gilded Lizard) 。我能為你做什麼？」 Yongi 問。");
	say();
labelFunc04CF_008C:
	converse attend labelFunc04CF_027A;
	case "姓名" attend labelFunc04CF_0100:
	message("「我的名字是 Yongi ，");
	message(var0001);
	message("。」");
	say();
	UI_remove_answer("姓名");
	if (!var0006) goto labelFunc04CF_0100;
	message("「而你是？」");
	say();
	var0007 = Func090B([var0000, var0002, var0001]);
	if (!(var0007 == var0002)) goto labelFunc04CF_00D8;
	message("「是的，");
	message(var0001);
	message("。你說得對。如果你不想告訴我，我一點也不介意。」他眨了眨眼。");
	say();
labelFunc04CF_00D8:
	if (!(var0007 == var0000)) goto labelFunc04CF_00EC;
	message("「歡迎來到我的酒館，");
	message(var0000);
	message("。」");
	say();
labelFunc04CF_00EC:
	if (!(var0007 == var0001)) goto labelFunc04CF_0100;
	message("「你說得對，");
	message(var0001);
	message("。沒有必要告訴任何人你的名字。」");
	say();
labelFunc04CF_0100:
	case "職業" attend labelFunc04CF_0119:
	message("「為什麼，我管理我的酒吧。而且借我的耳朵給客人，」他補充道，摸了摸他的右耳以示強調。");
	say();
	UI_add_answer(["顧客", "購買"]);
labelFunc04CF_0119:
	case "Vesper" attend labelFunc04CF_013A:
	message("「哎呀，我不想住在其他地方。當然，如果我們能擺脫那些豺狼，石像鬼，這個鎮會更好。」");
	say();
	if (!(!var0005)) goto labelFunc04CF_0133;
	UI_add_answer("石像鬼");
labelFunc04CF_0133:
	UI_remove_answer("Vesper");
labelFunc04CF_013A:
	case "石像鬼" attend labelFunc04CF_016B:
	message("「石像鬼！他們怎麼了？他們是這片偉大土地上爬行過的最卑鄙、最邪惡、最殘酷、最可鄙的東西。我強烈建議你遠離他們。我只能想像如果沒有石像鬼，這會是個多麼美好的城鎮。當然，我知道那些狗可能也在這麼說我們。每個人都知道他們總有一天晚上會來在我們睡夢中殺光我們。」");
	say();
	if (!(!var0004)) goto labelFunc04CF_015C;
	message("「為什麼，就在前幾天，其中一個攻擊了 Blorn 。去吧，問問他這件事。」");
	say();
	var0004 = true;
	UI_add_answer("Blorn");
labelFunc04CF_015C:
	var0005 = true;
	UI_remove_answer("石像鬼");
	gflags[0x0283] = true;
labelFunc04CF_016B:
	case "顧客" attend labelFunc04CF_0191:
	message("「嗯，我在 Vesper 真正認識的只有我的常客： Cador 、 Mara 和 Blorn 。你可能會想和鎮長 Auston ，或他的書記員 Liana 談談。啊，現在那裡有一位年輕漂亮的女孩。」他對你眨了眨眼。");
	say();
	UI_add_answer(["Cador", "Mara", "Blorn", "Vesper"]);
	UI_remove_answer("顧客");
labelFunc04CF_0191:
	case "Cador" attend labelFunc04CF_01BF:
	var0008 = UI_is_dead(UI_get_npc_object(0xFF35));
	if (!var0008) goto labelFunc04CF_01B4;
	message("「他以前每晚都會來這裡，直到他在一場鬥毆中被殺。」酒保說話時瞇起了眼睛。");
	say();
	goto labelFunc04CF_01B8;
labelFunc04CF_01B4:
	message("「他每天下班後都在這裡。好人，工作努力。」");
	say();
labelFunc04CF_01B8:
	UI_remove_answer("Cador");
labelFunc04CF_01BF:
	case "Mara" attend labelFunc04CF_01ED:
	var0009 = UI_is_dead(UI_get_npc_object(0xFF34));
	if (!var0009) goto labelFunc04CF_01E2;
	message("「她和 Cador 在礦區工作。她比大多數男人更有男子氣概，那個人就是。而且她也死得像個男人——在酒館的鬥毆中！」他懷疑地看著你說。");
	say();
	goto labelFunc04CF_01E6;
labelFunc04CF_01E2:
	message("「她和 Cador 在礦區工作。那個人堅如磐石。她比鎮上大多數男人都更有男子氣概。」");
	say();
labelFunc04CF_01E6:
	UI_remove_answer("Mara");
labelFunc04CF_01ED:
	case "Blorn" attend labelFunc04CF_0228:
	message("「有一個人明白事理。他知道這個城鎮出了什麼問題！石像鬼！這就是問題所在。他恨他們，他真的很恨。」");
	say();
	if (!(!var0004)) goto labelFunc04CF_0208;
	message("「不久前他甚至被那些豺狼之一給搭訕了。去問問他這件事吧，你怎麼不去問問呢。」");
	say();
	var0004 = true;
labelFunc04CF_0208:
	if (!(!gflags[0x0283])) goto labelFunc04CF_021D;
	if (!(!var0005)) goto labelFunc04CF_021D;
	UI_add_answer("石像鬼");
labelFunc04CF_021D:
	UI_remove_answer("Blorn");
	gflags[0x0283] = true;
labelFunc04CF_0228:
	case "購買" attend labelFunc04CF_0248:
	message("「你想要食物還是飲料？」");
	say();
	UI_add_answer(["食物", "飲料"]);
	UI_remove_answer("購買");
labelFunc04CF_0248:
	case "食物" attend labelFunc04CF_025A:
	Func094D();
	UI_remove_answer("食物");
labelFunc04CF_025A:
	case "飲料" attend labelFunc04CF_026C:
	Func094E();
	UI_remove_answer("飲料");
labelFunc04CF_026C:
	case "告辭" attend labelFunc04CF_0277:
	goto labelFunc04CF_027A;
labelFunc04CF_0277:
	goto labelFunc04CF_008C;
labelFunc04CF_027A:
	endconv;
	message("「願道路平坦迎接你！」*");
	say();
labelFunc04CF_027F:
	if (!(event == 0x0000)) goto labelFunc04CF_0349;
	var000A = UI_part_of_day();
	var000B = UI_get_schedule_type(UI_get_npc_object(0xFF31));
	var000C = UI_die_roll(0x0001, 0x0004);
	if (!((var000A >= 0x0001) && (var000A <= 0x0003))) goto labelFunc04CF_02CB;
	if (!(var000B == 0x000E)) goto labelFunc04CF_02CB;
	var000D = "@Zzzzz . . .@";
labelFunc04CF_02CB:
	if (!((var000A == 0x0004) || ((var000A == 0x0005) || ((var000A == 0x0006) || ((var000A == 0x0007) || (var000A == 0x0000)))))) goto labelFunc04CF_033F;
	if (!(var000B == 0x000B)) goto labelFunc04CF_033F;
	if (!(var000C == 0x0001)) goto labelFunc04CF_030F;
	var000D = "@這裡有茶水點心！@";
labelFunc04CF_030F:
	if (!(var000C == 0x0002)) goto labelFunc04CF_031F;
	var000D = "@來杯上好的葡萄酒吧！@";
labelFunc04CF_031F:
	if (!(var000C == 0x0003)) goto labelFunc04CF_032F;
	var000D = "@這裡有最好的烈酒！@";
labelFunc04CF_032F:
	if (!(var000C == 0x0004)) goto labelFunc04CF_033F;
	var000D = "@石像鬼不得入內！@";
labelFunc04CF_033F:
	UI_item_say(0xFF31, var000D);
labelFunc04CF_0349:
	return;
}


