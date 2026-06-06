#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func04A8 object#(0x4A8) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0001)) goto labelFunc04A8_0276;
	UI_show_npc_face(0xFF58, 0x0000);
	var0000 = Func0909();
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(gflags[0x0212] && (!gflags[0x0218]))) goto labelFunc04A8_003A;
	UI_add_answer("小偷");
labelFunc04A8_003A:
	if (!gflags[0x0218]) goto labelFunc04A8_0047;
	UI_add_answer("找到毒液");
labelFunc04A8_0047:
	var0001 = Func0931(0xFE9B, 0x0001, 0x0289, 0xFE99, 0x0001);
	if (!var0001) goto labelFunc04A8_0069;
	UI_add_answer("找到毒液");
labelFunc04A8_0069:
	if (!(!gflags[0x0221])) goto labelFunc04A8_007B;
	message("「一個表情嚴厲的女人毫不幽默地盯著你看。」");
	say();
	gflags[0x0221] = true;
	goto labelFunc04A8_0085;
labelFunc04A8_007B:
	message("「向你問好，");
	message(var0000);
	message("。」你聽到 Brita 說。");
	say();
labelFunc04A8_0085:
	converse attend labelFunc04A8_0275;
	case "姓名" attend labelFunc04A8_009B:
	message("「我是 Brita。」");
	say();
	UI_remove_answer("姓名");
labelFunc04A8_009B:
	case "職業" attend labelFunc04A8_00BA:
	message("「我幫我丈夫 Feridwyn 經營友誼會在 Paws 的庇護所。」");
	say();
	UI_add_answer(["Feridwyn", "友誼會", "庇護所", "Paws"]);
labelFunc04A8_00BA:
	case "Feridwyn" attend labelFunc04A8_0109:
	if (!(!gflags[0x0220])) goto labelFunc04A8_00D0;
	message("「我丈夫是個好人，他無私地奉獻自己來幫助鎮上的窮人，而他們卻毫不感激。他是個好人，也是個盡責的友誼會成員。」");
	say();
	goto labelFunc04A8_0102;
labelFunc04A8_00D0:
	message("「我丈夫是我這輩子見過最可敬的人。」");
	say();
	var0002 = Func08F7(0xFF59);
	if (!var0002) goto labelFunc04A8_0102;
	UI_show_npc_face(0xFF59, 0x0000);
	message("「別相信妻子驕傲的自誇，善良的聖者。我只是一個盡己所能的普通人。」*");
	say();
	UI_remove_npc_face(0xFF59);
	UI_show_npc_face(0xFF58, 0x0000);
labelFunc04A8_0102:
	UI_remove_answer("Feridwyn");
labelFunc04A8_0109:
	case "友誼會" attend labelFunc04A8_012A:
	if (!(!gflags[0x0006])) goto labelFunc04A8_011F;
	message("「你應該跟我丈夫談談友誼會的事。我敢肯定你對他要告訴你的事會印象深刻的。」");
	say();
	goto labelFunc04A8_0123;
labelFunc04A8_011F:
	message("「看到你加入了友誼會，只是證實了我早已知道的事。那就是友誼會是我們帶領 Britannia 邁向美好新未來的道路。你加入我們的消息正在四處傳開！」");
	say();
labelFunc04A8_0123:
	UI_remove_answer("友誼會");
labelFunc04A8_012A:
	case "庇護所" attend labelFunc04A8_013D:
	message("「經營庇護所對我丈夫和我來說是項艱苦的工作，但為了減輕那些比我們不幸的人的痛苦，這是值得的。」");
	say();
	UI_remove_answer("庇護所");
labelFunc04A8_013D:
	case "Paws" attend labelFunc04A8_0177:
	message("「我們聽說了 Paws 發生的一切。如果我不知道，那我丈夫也一定知道。有你想特別了解的人嗎？」");
	say();
	var0003 = Func090A();
	if (!var0003) goto labelFunc04A8_016C;
	message("「我知道這些人：」");
	say();
	UI_add_answer(["Alina", "Camille", "Polly"]);
	goto labelFunc04A8_0170;
labelFunc04A8_016C:
	message("「自己決定對他人的印象是件好事。」");
	say();
labelFunc04A8_0170:
	UI_remove_answer("Paws");
labelFunc04A8_0177:
	case "Alina" attend labelFunc04A8_018A:
	message("「Alina 和她的孩子住在庇護所裡，可憐的東西。她的丈夫是個普通的小偷，現在還在監獄裡。但一旦我們說服她加入友誼會，我們就會幫助她把生活整頓好。你知道的，她不夠聰明，看不出這對她有什麼好處。必須仔細指導她。」");
	say();
	UI_remove_answer("Alina");
labelFunc04A8_018A:
	case "Camille" attend labelFunc04A8_01AA:
	message("「Camille 是一個農場寡婦。她傾向於活在過去，遵循舊有的美德並質疑友誼會的做法。你知道的，這些鄉下人很迷信。這是他們智力低下造成的。她甚至沒有注意到她的兒子 Tobias 長大後變成了什麼樣的流氓！完全不像我們的兒子 Garritt。」");
	say();
	UI_add_answer(["Tobias", "Garritt"]);
	UI_remove_answer("Camille");
labelFunc04A8_01AA:
	case "Tobias" attend labelFunc04A8_01BD:
	message("「一個非常可憐的小鬼。總是悶悶不樂。但是，必須了解到他沒有父親來好好管教他。」");
	say();
	UI_remove_answer("Tobias");
labelFunc04A8_01BD:
	case "找到毒液" attend labelFunc04A8_01E6:
	if (!(!gflags[0x0218])) goto labelFunc04A8_01D4;
	message("「你說在 Garritt 的物品中發現了那瓶毒液？我不相信！你是說我兒子是個說謊者和小偷嗎？我不會相信的！祝你有個美好的一天！」*");
	say();
	abort;
	goto labelFunc04A8_01DF;
labelFunc04A8_01D4:
	message("「所以 Garritt 承認他偷了毒液瓶。我簡直不敢相信！我不知道該說什麼。」");
	say();
	UI_add_answer("Garritt");
labelFunc04A8_01DF:
	UI_remove_answer("找到毒液");
labelFunc04A8_01E6:
	case "Garritt" attend labelFunc04A8_020E:
	if (!(!gflags[0x0218])) goto labelFunc04A8_0203;
	message("「Brita 喜笑顏開。『Garritt 是一個很棒的兒子。他正在被撫養長大以遵循友誼會的價值觀。他的價值得到了回報。』」");
	say();
	UI_add_answer("回報");
	goto labelFunc04A8_0207;
labelFunc04A8_0203:
	message("「Brita 皺眉皺得比以前更厲害了。『如果你問我，這全是一個讓我小男孩惹上麻煩的陰謀。如果你沒有來鎮上，這整個事件就不會發生！』」");
	say();
labelFunc04A8_0207:
	UI_remove_answer("Garritt");
labelFunc04A8_020E:
	case "回報" attend labelFunc04A8_0221:
	message("「Garritt 在吹排笛方面太有天賦了！這真是一份禮物！」");
	say();
	UI_remove_answer("回報");
labelFunc04A8_0221:
	case "Polly" attend labelFunc04A8_0234:
	message("「Polly 經營當地酒館是為了靠近人群。她是一個孤獨的靈魂，覺得根本沒有人渴望她的心。想到她就讓我好難過。如果她加入友誼會，她就能找到所有她想要的陪伴。」");
	say();
	UI_remove_answer("Polly");
labelFunc04A8_0234:
	case "小偷" attend labelFunc04A8_0252:
	message("「我們的一名成員，當地商人 Morfin，被偷了一批銀蛇毒液。雖然我不在乎毒液本身，但這難道不令人震驚嗎？」");
	say();
	gflags[0x0212] = true;
	UI_remove_answer("小偷");
	UI_add_answer("蛇毒");
labelFunc04A8_0252:
	case "蛇毒" attend labelFunc04A8_0265:
	message("「我自己從沒見過。我不知道它對人有什麼作用，但它絕對不可能是好東西！」");
	say();
	UI_remove_answer("蛇毒");
labelFunc04A8_0265:
	case "告辭" attend labelFunc04A8_0272:
	message("「願你與友誼會同行，聖者。」*");
	say();
	abort;
labelFunc04A8_0272:
	goto labelFunc04A8_0085;
labelFunc04A8_0275:
	endconv;
labelFunc04A8_0276:
	if (!(event == 0x0000)) goto labelFunc04A8_0284;
	Func092E(0xFF58);
labelFunc04A8_0284:
	return;
}


