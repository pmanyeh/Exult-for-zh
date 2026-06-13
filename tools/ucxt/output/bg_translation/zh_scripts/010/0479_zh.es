#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern void Func08AA 0x8AA ();
extern void Func08A9 0x8A9 ();
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func0479 object#(0x479) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	if (!(event == 0x0001)) goto labelFunc0479_02E8;
	UI_show_npc_face(0xFF87, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFF87));
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!gflags[0x0186]) goto labelFunc0479_004A;
	UI_add_answer("Sprellic");
labelFunc0479_004A:
	if (!gflags[0x0167]) goto labelFunc0479_005E;
	if (!(!gflags[0x0168])) goto labelFunc0479_005E;
	UI_add_answer("假旗子");
labelFunc0479_005E:
	if (!(!gflags[0x0173])) goto labelFunc0479_0070;
	message("你看到一個身經百戰、滿佈傷痕的老兵。");
	say();
	gflags[0x0173] = true;
	goto labelFunc0479_0074;
labelFunc0479_0070:
	message("「你好！」 Kliftin 說。「你最近有遇到什麼麻煩嗎？」");
	say();
labelFunc0479_0074:
	converse attend labelFunc0479_02E3;
	case "姓名" attend labelFunc0479_008A:
	message("「我是 Kliftin 。」");
	say();
	UI_remove_answer("姓名");
labelFunc0479_008A:
	case "職業" attend labelFunc0479_00A9:
	message("「在我的年代，我是個非常出色的士兵。現在我是 Jhelom 這裡軍械庫的主人。」");
	say();
	UI_add_answer(["老兵", "軍械庫", "Jhelom", "買"]);
labelFunc0479_00A9:
	case "買" attend labelFunc0479_00EC:
	if (!((var0002 == 0x0007) || (var0002 == 0x0013))) goto labelFunc0479_00DB;
	message("「我在這裡販售防具和武器。我有東西能滿足你的各種需求。你想看防具還是武器？」");
	say();
	UI_push_answers();
	UI_add_answer(["防具", "武器"]);
	goto labelFunc0479_00E5;
labelFunc0479_00DB:
	message("「我的店目前休息中，但請再回來， ");
	message(var0000);
	message("。」");
	say();
labelFunc0479_00E5:
	UI_remove_answer("買");
labelFunc0479_00EC:
	case "防具" attend labelFunc0479_00F7:
	Func08AA();
labelFunc0479_00F7:
	case "武器" attend labelFunc0479_0102:
	Func08A9();
labelFunc0479_0102:
	case "老兵" attend labelFunc0479_0115:
	message("「你肯定不想聽那些古老的戰爭故事吧？！我看過太多死亡和毀滅了。就說到這吧。」");
	say();
	UI_remove_answer("老兵");
labelFunc0479_0115:
	case "軍械庫" attend labelFunc0479_0135:
	message("「我販售並收藏各種類型的武器。生意一直都很好，雖然我最好的顧客總是死在決鬥中！」");
	say();
	UI_remove_answer("軍械庫");
	UI_add_answer(["決鬥", "買"]);
labelFunc0479_0135:
	case "Jhelom" attend labelFunc0479_0148:
	message("「Jhelom 是個粗獷的地方。如果你不喜歡惹麻煩，那麼我可以想到許多比這裡更好的地方讓你待著。」");
	say();
	UI_remove_answer("Jhelom");
labelFunc0479_0148:
	case "決鬥" attend labelFunc0479_0162:
	message("「每天中午在城鎮廣場，人們都會來解決他們的分歧。他們戰鬥到見血或分出死活。這簡直是瘋了！就像那個 Sprellic 一樣。」");
	say();
	UI_remove_answer("決鬥");
	UI_add_answer("Sprellic");
labelFunc0479_0162:
	case "Sprellic" attend labelFunc0479_019F:
	if (!(!gflags[0x0186])) goto labelFunc0479_017F;
	message("「Sprellic ，我們這位脾氣相當溫和的旅館老闆，從傷疤圖書館的牆上偷走了榮譽旗，而且拒絕歸還。現在他必須和我們當地最優秀的三名戰士進行生死決鬥。」");
	say();
	UI_add_answer("戰士們");
	goto labelFunc0479_0198;
labelFunc0479_017F:
	if (!(!gflags[0x0167])) goto labelFunc0479_0194;
	message("你向這位全神貫注聽著的老人講述 Sprellic 的故事。「聽起來像是騙子 Sullivan 的傑作。他是一個從未被抓到過的傳奇小偷和騙子！甚至很少有人相信他真的存在。你不可能用那樣的故事來勸阻決鬥者。」");
	say();
	UI_add_answer("勸阻");
	goto labelFunc0479_0198;
labelFunc0479_0194:
	message("「你在那個可憐的 Sprellic 需要時幫助他，真是太好了。」");
	say();
labelFunc0479_0198:
	UI_remove_answer("Sprellic");
labelFunc0479_019F:
	case "戰士們" attend labelFunc0479_01B2:
	message("「如果你想了解更多關於這整件事的詳情，你可以去酒館問問。」");
	say();
	UI_remove_answer("戰士們");
labelFunc0479_01B2:
	case "勸阻" attend labelFunc0479_01CC:
	message("「唯一能勸阻他們不殺可憐的 Sprellic 的方法就是歸還榮譽旗！它一定是被 Sullivan 拿走了，但決鬥者們不知道！如果我們有一個榮譽旗的複製品，我們就可以把它給他們！」");
	say();
	UI_remove_answer("勸阻");
	UI_add_answer("複製品");
labelFunc0479_01CC:
	case "複製品" attend labelFunc0479_01EC:
	message("「在我的年代，我縫合傷口的技術相當不錯……嗯，或許我可以製作一面榮譽旗的複製品。這個欺騙的把戲只需要撐到他們正式取消決鬥就行了。」");
	say();
	UI_remove_answer("複製品");
	UI_add_answer(["欺騙", "縫紉"]);
labelFunc0479_01EC:
	case "縫紉" attend labelFunc0479_01FF:
	message("「在我經歷過的所有戰鬥之後，我縫合了太多同志的傷口。現在我退休了，縫紉反而成了我的嗜好。」他有些尷尬地看著你。「這沒什麼不對吧！」");
	say();
	UI_remove_answer("縫紉");
labelFunc0479_01FF:
	case "欺騙" attend labelFunc0479_0219:
	message("「即使他們發現那不是真正的榮譽旗，他們也絕對不會承認。那樣做會讓他們看起來很愚蠢。他們寧願直接向任何說那不是他們榮譽旗的人挑戰另一場決鬥！但我們還是一次解決一場決鬥吧。」");
	say();
	UI_remove_answer("欺騙");
	UI_add_answer("榮譽旗");
labelFunc0479_0219:
	case "榮譽旗" attend labelFunc0479_027D:
	message("「你要我製作一面可以交給傷疤圖書館的榮譽旗，好讓決鬥停止嗎？」");
	say();
	var0003 = Func090A();
	if (!var0003) goto labelFunc0479_0265;
	if (!gflags[0x0170]) goto labelFunc0479_024E;
	message("「那你必須確保在你去決鬥區之前來跟我拿。決鬥區就在我店外靠近傷疤圖書館的地方。如果要及時完成，我最好現在就開始忙！請幾小時後再回我的店裡。」*");
	say();
	gflags[0x0167] = true;
	gflags[0x017B] = true;
	UI_set_timer(0x0000);
	abort;
	goto labelFunc0479_0262;
labelFunc0479_024E:
	message("「那你必須確保在 Sprellic 去決鬥區之前來跟我拿。如果要及時完成，我最好現在就開始忙。請幾小時後再回我的店裡。」*");
	say();
	gflags[0x017B] = true;
	gflags[0x0167] = true;
	UI_set_timer(0x0000);
	abort;
labelFunc0479_0262:
	goto labelFunc0479_0276;
labelFunc0479_0265:
	if (!gflags[0x0170]) goto labelFunc0479_0272;
	message("「你想親自對付傷疤圖書館？那很好，但要警告你——他們唯一相信的榮譽就是勝利。」");
	say();
	goto labelFunc0479_0276;
labelFunc0479_0272:
	message("「你手裡明明握著拯救 Sprellic 生命的鑰匙，怎麼能在面對必死結局時袖手旁觀呢？！」");
	say();
labelFunc0479_0276:
	UI_remove_answer("榮譽旗");
labelFunc0479_027D:
	case "假旗子" attend labelFunc0479_02D5:
	var0004 = UI_get_timer(0x0000);
	if (!(!(var0004 > 0x0002))) goto labelFunc0479_02A1;
	message("「別打擾我！旗子還沒完成！晚點再來我的店裡。」");
	say();
	goto labelFunc0479_02CE;
labelFunc0479_02A1:
	message("「這是我製作的傷疤圖書館榮譽旗的仿製品。」");
	say();
	var0005 = UI_add_party_items(0x0001, 0x011E, 0xFE99, 0xFE99, false);
	if (!var0005) goto labelFunc0479_02CA;
	message("「決鬥的時間一定快到了。祝 Sprellic 好運，也祝你好運！」");
	say();
	gflags[0x0168] = true;
	goto labelFunc0479_02CE;
labelFunc0479_02CA:
	message("「如果你要拿旗子，你必須先放下一些東西！」");
	say();
labelFunc0479_02CE:
	UI_remove_answer("假旗子");
labelFunc0479_02D5:
	case "告辭" attend labelFunc0479_02E0:
	goto labelFunc0479_02E3;
labelFunc0479_02E0:
	goto labelFunc0479_0074;
labelFunc0479_02E3:
	endconv;
	message("「日安。」*");
	say();
labelFunc0479_02E8:
	if (!(event == 0x0000)) goto labelFunc0479_0377;
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFF87));
	var0006 = UI_die_roll(0x0001, 0x0004);
	if (!((var0002 == 0x0007) || (var0002 == 0x0013))) goto labelFunc0479_0371;
	if (!(var0006 == 0x0001)) goto labelFunc0479_0334;
	var0007 = "@Fine arms and armour for sale!@";
labelFunc0479_0334:
	if (!(var0006 == 0x0002)) goto labelFunc0479_0344;
	var0007 = "@Just look at this fine armoury!@";
labelFunc0479_0344:
	if (!(var0006 == 0x0003)) goto labelFunc0479_0354;
	var0007 = "@I have the fiercest weapons!@";
labelFunc0479_0354:
	if (!(var0006 == 0x0004)) goto labelFunc0479_0364;
	var0007 = "@I have the strongest armour!@";
labelFunc0479_0364:
	UI_item_say(0xFF87, var0007);
	goto labelFunc0479_0377;
labelFunc0479_0371:
	Func092E(0xFF87);
labelFunc0479_0377:
	return;
}


