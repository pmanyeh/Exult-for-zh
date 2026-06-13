#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern void Func0911 0x911 (var var0000);
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func04F5 object#(0x4F5) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	if (!(event == 0x0001)) goto labelFunc04F5_024A;
	UI_show_npc_face(0xFF0B, 0x0000);
	var0000 = Func0909();
	var0001 = UI_get_npc_object(0xFF0B);
	UI_add_answer(["姓名", "職業", "告辭"]);
	var0002 = UI_get_alignment(var0001);
	if (!(var0002 == 0x0002)) goto labelFunc04F5_0050;
	UI_set_schedule_type(var0001, 0x0000);
labelFunc04F5_0050:
	if (!(gflags[0x0159] && gflags[0x0148])) goto labelFunc04F5_0061;
	UI_add_answer("小偷！");
labelFunc04F5_0061:
	if (!(!gflags[0x0148])) goto labelFunc04F5_0073;
	message("這位看起來很友善的修道士示意你過去。");
	say();
	gflags[0x0148] = true;
	goto labelFunc04F5_008A;
labelFunc04F5_0073:
	message("「你好，");
	message(var0000);
	message("。」");
	say();
	if (!gflags[0x012F]) goto labelFunc04F5_008A;
	UI_add_answer("給予藥水");
labelFunc04F5_008A:
	converse attend labelFunc04F5_0245;
	case "姓名" attend labelFunc04F5_00B3:
	message("他笑了。「我的名字是 Kreg，");
	message(var0000);
	message("。」");
	say();
	if (!gflags[0x0159]) goto labelFunc04F5_00AC;
	UI_add_answer("小偷！");
labelFunc04F5_00AC:
	UI_remove_answer("姓名");
labelFunc04F5_00B3:
	case "職業" attend labelFunc04F5_00CC:
	message("「我是這座修道院的修道士。我正在研究一種煉金術混合物。」");
	say();
	UI_add_answer(["混合物", "修道院"]);
labelFunc04F5_00CC:
	case "小偷！" attend labelFunc04F5_0124:
	message("「啊！發現我了，是嗎？這太糟糕了……對你來說！」*");
	say();
	Func0911(0x0064);
	var0003 = UI_count_objects(0xFF0B, 0x0231, 0xFE99, 0xFE99);
	if (!(var0003 < 0x0001)) goto labelFunc04F5_010F;
	var0004 = UI_create_new_object(0x0231);
	var0005 = UI_give_last_created(0xFF0B);
labelFunc04F5_010F:
	UI_set_alignment(var0001, 0x0002);
	UI_set_schedule_type(var0001, 0x0000);
	abort;
labelFunc04F5_0124:
	case "修道院" attend labelFunc04F5_0137:
	message("「可悲的是，我如此沉迷於我的研究，以至於我沒有時間去參觀周圍的地區或認識任何新面孔。」");
	say();
	UI_remove_answer("修道院");
labelFunc04F5_0137:
	case "混合物" attend labelFunc04F5_015D:
	message("「嗯，");
	message(var0000);
	message("，我們修道院很快就會發下靜默的誓言。然而，我們所有人都需要一些時間來適應沉默的聲音。因此，我正在研發一種藥水，能讓飲用者暫時變得沉默。這個概念與隱形藥水非常相似。」");
	say();
	UI_add_answer(["誓言", "隱形藥水"]);
	UI_remove_answer("混合物");
labelFunc04F5_015D:
	case "誓言" attend labelFunc04F5_017D:
	message("「嗯，」他看起來很尷尬，「在讀了一本關於我們如何與前輩比較的書後，我們得知大多數人都期望我們發下靜默的誓言。~~「所以，」他聳聳肩，「我們選擇這樣做，只要我能做出那種藥水。我知道這聽起來很愚蠢，但我真的相信這會幫助我們生產更多的葡萄酒。」");
	say();
	UI_remove_answer("誓言");
	UI_add_answer(["前輩", "葡萄酒"]);
labelFunc04F5_017D:
	case "前輩" attend labelFunc04F5_0190:
	message("「你肯定知道我在說什麼吧？冥想、沉默、美學、苦行僧等等。」");
	say();
	UI_remove_answer("前輩");
labelFunc04F5_0190:
	case "葡萄酒" attend labelFunc04F5_01A3:
	message("「修道士的葡萄酒在整個不列顛尼亞都很有名，或者至少我是這麼認為的。」他臉上露出困惑的表情。~~「啊，好吧，那沒關係。無論如何，我真誠地推薦你嚐嚐我們精緻的飲品。」");
	say();
	UI_remove_answer("葡萄酒");
labelFunc04F5_01A3:
	case "隱形藥水" attend labelFunc04F5_01DE:
	message("「事實上，我的研究陷入了僵局，因為我無法確定某些關鍵材料的性質。我需要的是一瓶隱形藥水來進行分析。然後我就可以從那裡取得進展。」他滿懷希望地看著你。「你願意為了我的研究去弄一瓶藥水嗎？你很可能可以在法師 Nicodemus 那裡輕鬆找到一瓶。」");
	say();
	var0006 = Func090A();
	if (!var0006) goto labelFunc04F5_01CC;
	message("他嘆了口氣，明顯鬆了一口氣。「謝謝你，");
	message(var0000);
	message("。」");
	say();
	gflags[0x012F] = true;
	goto labelFunc04F5_01D7;
labelFunc04F5_01CC:
	message("「你確定嗎？我會給你情報作為回報。」");
	say();
	UI_add_answer("情報");
labelFunc04F5_01D7:
	UI_remove_answer("隱形藥水");
labelFunc04F5_01DE:
	case "情報" attend labelFunc04F5_01F5:
	message("「如果你帶給我隱形藥水，我會告訴你關於 Lord British 、友誼會，或是海盜巢穴 (Buccaneer's Den)的情報。」");
	say();
	gflags[0x012F] = true;
	UI_remove_answer("情報");
labelFunc04F5_01F5:
	case "給予藥水" attend labelFunc04F5_0237:
	var0007 = UI_remove_party_items(0x0001, 0x0154, 0xFE99, 0x0007, true);
	if (!var0007) goto labelFunc04F5_022C;
	message("他從你手中接過藥水，並迅速喝下。「謝謝你，");
	message(var0000);
	message("，幫助我逃跑！」當他從視線中消失時，他的笑聲充滿了你的耳朵。*");
	say();
	UI_remove_npc(0xFF0B);
	abort;
	goto labelFunc04F5_0230;
labelFunc04F5_022C:
	message("「你並沒有藥水可以給，」他傷心地說。「我的研究又得等了。」");
	say();
labelFunc04F5_0230:
	UI_remove_answer("給予藥水");
labelFunc04F5_0237:
	case "告辭" attend labelFunc04F5_0242:
	goto labelFunc04F5_0245;
labelFunc04F5_0242:
	goto labelFunc04F5_008A;
labelFunc04F5_0245:
	endconv;
	message("他向你點頭道別。*");
	say();
labelFunc04F5_024A:
	if (!(event == 0x0000)) goto labelFunc04F5_0258;
	Func092E(0xFF0B);
labelFunc04F5_0258:
	return;
}


