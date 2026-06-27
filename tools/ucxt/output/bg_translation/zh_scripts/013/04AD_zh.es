#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func04AD object#(0x4AD) ()
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
	var var0013;

	if (!(event == 0x0001)) goto labelFunc04AD_0357;
	UI_show_npc_face(0xFF53, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFF53));
	var0003 = UI_find_nearest(0xFE9C, 0x0347, 0xFFFF);
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x0226])) goto labelFunc04AD_005F;
	message("「你看到一位老婦人，她對你露出祖母般甜美的微笑。你可以立刻看出她的視力很差。」");
	say();
	gflags[0x0226] = true;
	goto labelFunc04AD_0069;
labelFunc04AD_005F:
	message("「哎呀，又見面了，");
	message(var0000);
	message("。見到你真好！」Beverlea 說。");
	say();
labelFunc04AD_0069:
	converse attend labelFunc04AD_034C;
	case "姓名" attend labelFunc04AD_007F:
	message("「我的名字是 Beverlea。」");
	say();
	UI_remove_answer("姓名");
labelFunc04AD_007F:
	case "職業" attend labelFunc04AD_0098:
	message("「哎呀，我在 Paws 這裡經營雜貨鋪。」");
	say();
	UI_add_answer(["雜貨鋪", "Paws"]);
labelFunc04AD_0098:
	case "雜貨鋪" attend labelFunc04AD_00B2:
	message("「這是一間賣古董和二手物品的雜貨鋪。經營這家商店讓我保持年輕和活力。能把東西賣給鎮上那些原本買不起的窮人，令人感到欣慰。」");
	say();
	UI_remove_answer("雜貨鋪");
	UI_add_answer("買東西");
labelFunc04AD_00B2:
	case "Paws" attend labelFunc04AD_00C5:
	message("「在 Paws 這裡，人們雖然沒什麼錢，但這不重要，因為他們彼此關心。」");
	say();
	UI_remove_answer("Paws");
labelFunc04AD_00C5:
	case "買東西" attend labelFunc04AD_00F0:
	if (!(var0002 == 0x0007)) goto labelFunc04AD_00E5;
	message("「在我的店裡可以買到許多稀有精美的東西。全不列顛尼亞其他地方都找不到的便宜貨。」");
	say();
	UI_add_answer("許多精美的東西");
	goto labelFunc04AD_00E9;
labelFunc04AD_00E5:
	message("「我的店現在打烊了。我通常在下午營業。」");
	say();
labelFunc04AD_00E9:
	UI_remove_answer("買東西");
labelFunc04AD_00F0:
	case "許多精美的東西" attend labelFunc04AD_011F:
	message("「讓我想想……有一個搖籃要賣。一匹搖馬。一個鈴鐺。一個沙漏。一個痰盂。一把魯特琴。一個六分儀……既然我最近動作慢了點，我就讓客人自己幫忙，拿走他們買的東西。當然，前提是他們先付錢。我信任大家會付給我正確的金額。恐怕我幾乎快瞎了。」");
	say();
	UI_remove_answer("許多精美的東西");
	UI_add_answer(["搖籃", "搖馬", "鈴鐺", "沙漏", "痰盂", "魯特琴", "六分儀"]);
labelFunc04AD_011F:
	case "搖籃" attend labelFunc04AD_016A:
	message("「那個舊搖籃是野蠻人 Gorn 還是個嬰兒時，晚上用來搖他入睡的搖籃。你可以看到它側邊有條裂縫，這證明 Gorn 從小就是個強壯的小傢伙。我可以讓你用十枚金幣買走。你想買這個搖籃嗎？」");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc04AD_015F;
	var0005 = UI_remove_party_items(0x000A, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0005) goto labelFunc04AD_0158;
	message("「那你拿走吧。希望你喜歡。」");
	say();
	goto labelFunc04AD_015C;
labelFunc04AD_0158:
	message("「你沒有足夠的金幣！」");
	say();
labelFunc04AD_015C:
	goto labelFunc04AD_0163;
labelFunc04AD_015F:
	message("「Beverlea 臉上閃過一絲不悅的表情。『很好。或許我能讓你對其他東西感興趣。』」");
	say();
labelFunc04AD_0163:
	UI_remove_answer("搖籃");
labelFunc04AD_016A:
	case "搖馬" attend labelFunc04AD_01B5:
	message("「這匹搖馬曾經屬於一位名叫 Diane 的不列顛城小女孩。她長大後成為了騎術最精湛的馬術家之一。我可以讓你用十二枚金幣買下這件稀有而不尋常的物品。你想買嗎？」");
	say();
	var0006 = Func090A();
	if (!var0006) goto labelFunc04AD_01AA;
	var0007 = UI_remove_party_items(0x000C, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0007) goto labelFunc04AD_01A3;
	message("「那你可以隨意帶走這匹搖馬了。它是你的了！」");
	say();
	goto labelFunc04AD_01A7;
labelFunc04AD_01A3:
	message("「你沒有足夠的錢買它！」");
	say();
labelFunc04AD_01A7:
	goto labelFunc04AD_01AE;
labelFunc04AD_01AA:
	message("「Beverlea 翻了翻白眼。『我們只是想隨便看看，是嗎？慢慢看吧。』」");
	say();
labelFunc04AD_01AE:
	UI_remove_answer("搖馬");
labelFunc04AD_01B5:
	case "鈴鐺" attend labelFunc04AD_0200:
	message("「那個鈴鐺來自 Yew 的高等法院。它是用來宣布開庭的。我可以用六枚金幣把這個有趣的話題性物品賣給你。你想買嗎？」");
	say();
	var0008 = Func090A();
	if (!var0008) goto labelFunc04AD_01F5;
	var0009 = UI_remove_party_items(0x0006, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0009) goto labelFunc04AD_01EE;
	message("「你可以拿走你的鈴鐺。祝你健康地使用它！」");
	say();
	goto labelFunc04AD_01F2;
labelFunc04AD_01EE:
	message("「你沒有足夠的錢買它！」");
	say();
labelFunc04AD_01F2:
	goto labelFunc04AD_01F9;
labelFunc04AD_01F5:
	message("「今天不想買鈴鐺？』她皺起嘴唇，努力擠出一個微笑。『或許別的東西會合你的心意。』」");
	say();
labelFunc04AD_01F9:
	UI_remove_answer("鈴鐺");
labelFunc04AD_0200:
	case "沙漏" attend labelFunc04AD_025C:
	if (!var0003) goto labelFunc04AD_0251;
	message("「我還有一個古董沙漏。這是一個老頭賣給我的，他老糊塗了，連怎麼用都想不起來！我用 5 枚金幣賣給你。你想買嗎？」");
	say();
	var000A = Func090A();
	if (!var000A) goto labelFunc04AD_024A;
	var000B = UI_remove_party_items(0x0005, 0x0284, 0xFE99, 0xFE99, true);
	if (!var000B) goto labelFunc04AD_0243;
	message("「謝謝你。你可以拿走你的沙漏了。」");
	say();
	gflags[0x0211] = true;
	goto labelFunc04AD_0247;
labelFunc04AD_0243:
	message("「你沒有足夠的錢。」");
	say();
labelFunc04AD_0247:
	goto labelFunc04AD_024E;
labelFunc04AD_024A:
	message("「你對沙漏沒興趣？』她嘆了口氣，『很好。隨便看看。我有的是時間。』你聽出她語氣中帶著一絲諷刺。」");
	say();
labelFunc04AD_024E:
	goto labelFunc04AD_0255;
labelFunc04AD_0251:
	message("「詛咒我這顆老腦袋和衰退的記憶力！沙漏已經賣掉了嗎？！不！一定是被偷了！這鎮上少數不誠實的人一定把它拿走了！」");
	say();
labelFunc04AD_0255:
	UI_remove_answer("沙漏");
labelFunc04AD_025C:
	case "痰盂" attend labelFunc04AD_02A8:
	message("「我還有一個舊痰盂。它曾經被……很多人使用過。只要一枚金幣你就可以帶走它。拿走吧！拜託！」");
	say();
	var000C = Func090A();
	if (!var000C) goto labelFunc04AD_029D;
	var000D = UI_remove_party_items(0x0001, 0x0284, 0xFE99, 0xFE99, true);
	if (!var000D) goto labelFunc04AD_0295;
	message("「謝謝你！現在你可以走了，請別忘了離開時把它帶走！」");
	say();
	goto labelFunc04AD_029A;
labelFunc04AD_0295:
	message("「你甚至連一枚金幣都沒有！也沒有體面地告訴我，我和你說話是在浪費時間。」");
	say();
	abort;
labelFunc04AD_029A:
	goto labelFunc04AD_02A1;
labelFunc04AD_029D:
	message("「我店裡還有很多東西。很多高品質且有價值的東西。請繼續看。」");
	say();
labelFunc04AD_02A1:
	UI_remove_answer("痰盂");
labelFunc04AD_02A8:
	case "魯特琴" attend labelFunc04AD_02F3:
	message("「我有一把魯特琴要賣，它曾經屬於一位吟遊詩人，他在擲骰子遊戲中輸掉了它。我開價二十枚金幣。一首歌的價值！你想買嗎？」");
	say();
	var000E = Func090A();
	if (!var000E) goto labelFunc04AD_02E8;
	var000F = UI_remove_party_items(0x0014, 0x0284, 0xFE99, 0xFE99, true);
	if (!var000F) goto labelFunc04AD_02E1;
	message("「謝謝你，親愛的顧客。你可以拿走你的魯特琴了。我看得出你是個懂得欣賞品質的真正藝術家。」");
	say();
	goto labelFunc04AD_02E5;
labelFunc04AD_02E1:
	message("「你買不起這把魯特琴！」");
	say();
labelFunc04AD_02E5:
	goto labelFunc04AD_02EC;
labelFunc04AD_02E8:
	message("「那好吧。請繼續看。畢竟，這就是我開店的目的。」你彷彿聽到 Beverlea 還自言自語了一會兒......");
	say();
labelFunc04AD_02EC:
	UI_remove_answer("魯特琴");
labelFunc04AD_02F3:
	case "六分儀" attend labelFunc04AD_033E:
	message("「我有一個 Minoc 世界知名造船匠 Owen 賣的六分儀。我聽說他們打算為他建一座紀念碑。總之，賣給我的水手剛在海上經歷了一些可怕的經驗。他賣給我的時候說他打算退休了。他顯然沒有意識到這件物品的價值。但我可以讓你用 20 枚金幣買下它。你想買嗎？」");
	say();
	var0010 = Func090A();
	if (!var0010) goto labelFunc04AD_0333;
	var0011 = UI_remove_party_items(0x0014, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0011) goto labelFunc04AD_032C;
	message("「你可以拿走你的六分儀了！願你永遠一帆風順！」");
	say();
	goto labelFunc04AD_0330;
labelFunc04AD_032C:
	message("\"Thou dost not have enough money!\"");
	say();
labelFunc04AD_0330:
	goto labelFunc04AD_0337;
labelFunc04AD_0333:
	message("「我肯定我有一些你會感興趣的東西。盡情地看吧。」");
	say();
labelFunc04AD_0337:
	UI_remove_answer("六分儀");
labelFunc04AD_033E:
	case "告辭" attend labelFunc04AD_0349:
	goto labelFunc04AD_034C;
labelFunc04AD_0349:
	goto labelFunc04AD_0069;
labelFunc04AD_034C:
	endconv;
	message("「祝你有美好的一天，");
	message(var0000);
	message(".\" *");
	say();
labelFunc04AD_0357:
	if (!(event == 0x0000)) goto labelFunc04AD_03D7;
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFF53));
	if (!(var0002 == 0x0007)) goto labelFunc04AD_03D1;
	var0012 = UI_die_roll(0x0001, 0x0004);
	if (!(var0012 == 0x0001)) goto labelFunc04AD_0394;
	var0013 = "@古董？@";
labelFunc04AD_0394:
	if (!(var0012 == 0x0002)) goto labelFunc04AD_03A4;
	var0013 = "@古玩？小擺飾？@";
labelFunc04AD_03A4:
	if (!(var0012 == 0x0003)) goto labelFunc04AD_03B4;
	var0013 = "@小玩意兒？古董？@";
labelFunc04AD_03B4:
	if (!(var0012 == 0x0004)) goto labelFunc04AD_03C4;
	var0013 = "@收藏品？古董？@";
labelFunc04AD_03C4:
	UI_item_say(0xFF53, var0013);
	goto labelFunc04AD_03D7;
labelFunc04AD_03D1:
	Func092E(0xFF53);
labelFunc04AD_03D7:
	return;
}


