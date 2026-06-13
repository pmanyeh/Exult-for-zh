#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func0952 0x952 ();
extern void Func0953 0x953 ();
extern void Func0911 0x911 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func0457 object#(0x457) ()
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

	if (!(event == 0x0001)) goto labelFunc0457_02D7;
	UI_show_npc_face(0xFFA9, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFFA9));
	UI_add_answer(["姓名", "職業", "告辭"]);
	var0003 = Func0931(0xFE9B, 0x0001, 0x02D8, 0xFE99, 0xFE99);
	if (!var0003) goto labelFunc0457_005F;
	UI_add_answer("Caddellite");
labelFunc0457_005F:
	if (!(!gflags[0x0112])) goto labelFunc0457_0071;
	message("你看到一個男人，長時間悶熱而艱苦的工作讓他的臉凝固成僵硬的表情，眼睛像熾熱的煤炭。");
	say();
	gflags[0x0112] = true;
	goto labelFunc0457_0075;
labelFunc0457_0071:
	message("「我能為你效勞嗎？」Zorn 說。");
	say();
labelFunc0457_0075:
	converse attend labelFunc0457_02CC;
	case "姓名" attend labelFunc0457_008B:
	message("「我是 Zorn 。」");
	say();
	UI_remove_answer("姓名");
labelFunc0457_008B:
	case "職業" attend labelFunc0457_00BC:
	if (!gflags[0x011F]) goto labelFunc0457_00AD;
	message("「我是 Minoc 的鐵匠。」");
	say();
	UI_add_answer(["鐵匠", "Minoc"]);
	goto labelFunc0457_00BC;
labelFunc0457_00AD:
	message("「你對死者難道沒有一點尊重嗎？竟然在這樣糟糕的時刻來拉客！這時可是有人被發現死在 William 的鋸木廠裡！」");
	say();
	gflags[0x011F] = true;
	UI_add_answer("謀殺案");
labelFunc0457_00BC:
	case "鐵匠" attend labelFunc0457_00D6:
	message("「我製作武器和護甲。」");
	say();
	UI_remove_answer("鐵匠");
	UI_add_answer("武器和護甲");
labelFunc0457_00D6:
	case "Minoc" attend labelFunc0457_00F6:
	message("「 Minoc 是個大城市。金錢在這裡易手。但它並不能讓人們快樂。他們總能找到爭吵的理由。而現在這些可怕的謀殺案讓每個人都感到害怕。」");
	say();
	UI_remove_answer("Minoc");
	UI_add_answer(["爭吵", "謀殺案"]);
labelFunc0457_00F6:
	case "武器和護甲" attend labelFunc0457_0127:
	if (!(var0002 == 0x000D)) goto labelFunc0457_011C;
	message("「我賣的所有武器和護甲都是我親手製作的。它們會很好地為你效勞。」");
	say();
	UI_add_answer(["買武器", "買護甲"]);
	goto labelFunc0457_0120;
labelFunc0457_011C:
	message("「也許我們可以改天再談論這些事情。比如說，也許在我的商店營業時間裡？」");
	say();
labelFunc0457_0120:
	UI_remove_answer("武器和護甲");
labelFunc0457_0127:
	case "買武器" attend labelFunc0457_0148:
	if (!(!(var0002 == 0x000D))) goto labelFunc0457_0141;
	message("「鐵匠鋪目前不對外營業。你得改天再來。」");
	say();
	goto labelFunc0457_0148;
labelFunc0457_0141:
	message("「我有很多非常致命的武器可以給你看。」");
	say();
	Func0952();
labelFunc0457_0148:
	case "買護甲" attend labelFunc0457_0169:
	if (!(!(var0002 == 0x000D))) goto labelFunc0457_0162;
	message("「鐵匠鋪目前不對外營業。你得改天再來。」");
	say();
	goto labelFunc0457_0169;
labelFunc0457_0162:
	message("「你可以向我購買精良的護甲。」");
	say();
	Func0953();
labelFunc0457_0169:
	case "爭吵" attend labelFunc0457_0189:
	message("「例如這個關於 Owen 紀念碑的喧鬧聲。人們應該管好自己的事，讓別人去處理他們自己的事，不管那是否愚蠢。」");
	say();
	UI_add_answer(["Owen", "紀念碑"]);
	UI_remove_answer("爭吵");
labelFunc0457_0189:
	case "Owen" attend labelFunc0457_019C:
	message("「他是我們鎮上的造船匠。他是個極度自負的人。」");
	say();
	UI_remove_answer("Owen");
labelFunc0457_019C:
	case "紀念碑" attend labelFunc0457_01AF:
	message("「 Owen 正在為自己建造一座紀念碑。它有四十英尺高，描繪他拿著一卷設計圖的樣子。永遠都會有鴿子停在上面了。為什麼要為那麼不重要的事情爭吵呢？」");
	say();
	UI_remove_answer("紀念碑");
labelFunc0457_01AF:
	case "謀殺案" attend labelFunc0457_01C2:
	message("「這個鎮上從來沒有人真正討厭過吉普賽人，至少我從來沒意識到有。誰會做這種事？」");
	say();
	UI_remove_answer("謀殺案");
labelFunc0457_01C2:
	case "Caddellite" attend labelFunc0457_01DC:
	message("你將 Caddellite 交給 Zorn 。「這太驚人了！我還以為唯一能找到 Caddellite 的地方是失落的 Ambrosia 島呢。我該用這個做什麼？」");
	say();
	UI_remove_answer("Caddellite");
	UI_add_answer("頭盔");
labelFunc0457_01DC:
	case "頭盔" attend labelFunc0457_02BE:
	message("你描述了你需要的頭盔種類，一種可以阻擋來自方塊產生器危險聲音的頭盔。 Zorn 點點頭。「是的，我可以為你做一些。我會立刻開始工作。」");
	say();
	var0004 = UI_get_array_size(UI_get_party_list());
	var0005 = UI_count_objects(0xFE9B, 0x02D8, 0xFE99, 0xFE99);
	if (!(var0005 == 0x0000)) goto labelFunc0457_0214;
	message("「但是你沒有任何可以用來製作頭盔的 Caddellite 礦塊！」");
	say();
labelFunc0457_0214:
	if (!(var0004 > var0005)) goto labelFunc0457_022B;
	message("「你的隊伍裡有 ");
	message(var0004);
	message(" 個人。恐怕你沒有足夠的 Caddellite 讓我製作那麼多頭盔。」");
	say();
	goto labelFunc0457_02B7;
labelFunc0457_022B:
	var0006 = UI_remove_party_items(var0005, 0x02D8, 0xFE99, 0xFE99, false);
	if (!(var0005 == 0x0001)) goto labelFunc0457_0250;
	message("Zorn 從你手中接過 Caddellite 並開始他的工作。");
	say();
	goto labelFunc0457_025A;
labelFunc0457_0250:
	message("「你有 ");
	message(var0005);
	message(" 塊 Caddellite 。這就是我能為你製作的頭盔數量。」");
	say();
labelFunc0457_025A:
	message("Zorn 從你手中接過 Caddellite 並開始工作。你著迷地看著這位鐵匠大師在火中軟化礦石，然後將其塑形。 Zorn 迅速地進行了必要的測量，然後用熱材料進行了一些調整。最後，完成了。");
	say();
	if (!(var0005 == 0x0001)) goto labelFunc0457_026F;
	message("Zorn 將頭盔浸入水中冷卻。");
	say();
	goto labelFunc0457_0273;
labelFunc0457_026F:
	message("Zorn 將頭盔浸入水中冷卻。");
	say();
labelFunc0457_0273:
	var0007 = UI_add_party_items(var0005, 0x027E, 0xFE99, 0xFE99, false);
	if (!var0007) goto labelFunc0457_02B3;
	gflags[0x0106] = true;
	Func0911(0x00C8);
	message("「給，我已經按照你精確的要求完成了委託。」");
	say();
	if (!(var0005 == 0x0001)) goto labelFunc0457_02AC;
	message("他把頭盔交給你。");
	say();
	goto labelFunc0457_02B0;
labelFunc0457_02AC:
	message("他把頭盔交給你。");
	say();
labelFunc0457_02B0:
	goto labelFunc0457_02B7;
labelFunc0457_02B3:
	message("「你負重太重了！」");
	say();
labelFunc0457_02B7:
	UI_remove_answer("頭盔");
labelFunc0457_02BE:
	case "告辭" attend labelFunc0457_02C9:
	goto labelFunc0457_02CC;
labelFunc0457_02C9:
	goto labelFunc0457_0075;
labelFunc0457_02CC:
	endconv;
	message("「再見，");
	message(var0000);
	message("。」*");
	say();
labelFunc0457_02D7:
	if (!(event == 0x0000)) goto labelFunc0457_0357;
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFFA9));
	if (!(var0002 == 0x000D)) goto labelFunc0457_0351;
	var0008 = UI_die_roll(0x0001, 0x0004);
	if (!(var0008 == 0x0001)) goto labelFunc0457_0314;
	var0009 = "@武器？@";
labelFunc0457_0314:
	if (!(var0008 == 0x0002)) goto labelFunc0457_0324;
	var0009 = "@護甲？@";
labelFunc0457_0324:
	if (!(var0008 == 0x0003)) goto labelFunc0457_0334;
	var0009 = "@頭盔？盾牌？@";
labelFunc0457_0334:
	if (!(var0008 == 0x0004)) goto labelFunc0457_0344;
	var0009 = "@需要護甲或武器嗎？@";
labelFunc0457_0344:
	UI_item_say(0xFFA9, var0009);
	goto labelFunc0457_0357;
labelFunc0457_0351:
	Func092E(0xFFA9);
labelFunc0457_0357:
	return;
}


