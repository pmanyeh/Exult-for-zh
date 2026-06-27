#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern void Func085D 0x85D ();
extern void Func085E 0x85E ();
extern var Func090A 0x90A ();
extern void Func085C 0x85C ();
extern void Func092E 0x92E (var var0000);

void Func0476 object#(0x476) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0001)) goto labelFunc0476_022A;
	UI_show_npc_face(0xFF8A, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = false;
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x0208])) goto labelFunc0476_0045;
	message("當你走近時，這位女性揚起眉毛，表示她注意到你的出現，並對你接下來要說的話感興趣。");
	say();
	gflags[0x0208] = true;
	goto labelFunc0476_004F;
labelFunc0476_0045:
	message("「我能幫你什麼忙嗎， ");
	message(var0000);
	message("？」 Carlyn 問。");
	say();
labelFunc0476_004F:
	converse attend labelFunc0476_0229;
	case "姓名" attend labelFunc0476_0065:
	message("「我是 Carlyn 。」她笑得很燦爛。");
	say();
	UI_remove_answer("姓名");
labelFunc0476_0065:
	case "職業" attend labelFunc0476_00A1:
	message("「我是 Moonglow 的裁縫師。」");
	say();
	if (!(var0001 == 0x0007)) goto labelFunc0476_0094;
	message("「我晚上也替 Phearcy 顧酒吧。」");
	say();
	UI_add_answer("買茶點");
	if (!(!var0002)) goto labelFunc0476_0094;
	UI_add_answer("Phearcy");
labelFunc0476_0094:
	UI_add_answer(["裁縫師", "Moonglow"]);
labelFunc0476_00A1:
	case "買茶點" attend labelFunc0476_00CB:
	message("「你想要食物還是飲料， ");
	message(var0000);
	message("？」");
	say();
	UI_push_answers();
	UI_add_answer(["食物", "飲料"]);
	UI_remove_answer("買茶點");
labelFunc0476_00CB:
	case "食物" attend labelFunc0476_00E1:
	Func085D();
	UI_pop_answers();
	UI_remove_answer("食物");
labelFunc0476_00E1:
	case "飲料" attend labelFunc0476_00F7:
	Func085E();
	UI_pop_answers();
	UI_remove_answer("飲料");
labelFunc0476_00F7:
	case "Phearcy" attend labelFunc0476_0134:
	if (!(var0001 == 0x0007)) goto labelFunc0476_0112;
	var0003 = "這裡";
	goto labelFunc0476_0118;
labelFunc0476_0112:
	var0003 = "『親切惡棍酒館』";
labelFunc0476_0118:
	message("「他是老闆兼酒保。每天晚上 9 點，他都會去參加友誼會的聚會，所以我在");
	message(var0003);
	message("替他代班。」");
	say();
	var0002 = true;
	UI_remove_answer("Phearcy");
	UI_add_answer("友誼會");
labelFunc0476_0134:
	case "Moonglow" attend labelFunc0476_015B:
	message("「這是個非常宜人的城鎮， ");
	message(var0000);
	message("。這裡有這麼多不同類型的人。真希望我能認識更多人。~~如果你對他們有任何問題，我強烈建議你跟 Phearcy 談談。」");
	say();
	if (!(!var0002)) goto labelFunc0476_0154;
	UI_add_answer("Phearcy");
labelFunc0476_0154:
	UI_remove_answer("Moonglow");
labelFunc0476_015B:
	case "友誼會" attend labelFunc0476_017B:
	message("「我對這個組織了解不多。每天晚上 9 點他們都有全體成員的聚會之類的。而且，如果我沒記錯的話，那個分會的領導人會發表演說——我相信那被稱為佈道。~~城裡還有另一個成員，如果你對友誼會有問題的話可以問。」");
	say();
	UI_add_answer(["另一個成員", "領導人"]);
	UI_remove_answer("友誼會");
labelFunc0476_017B:
	case "另一個成員" attend labelFunc0476_0195:
	message("「我相信他的名字是 Tolemac 。據我所知他是個農夫。 Phearcy 知道的會比我多。或者你可以問他們的職員。」");
	say();
	UI_add_answer("職員");
	UI_remove_answer("另一個成員");
labelFunc0476_0195:
	case "職員" attend labelFunc0476_01A8:
	message("「是個女人，這我知道，但我不知道她的名字。」");
	say();
	UI_remove_answer("職員");
labelFunc0476_01A8:
	case "領導人" attend labelFunc0476_01BB:
	message("「他的名字是 Rankin 。我相信他來這裡並沒有很久。」");
	say();
	UI_remove_answer("領導人");
labelFunc0476_01BB:
	case "裁縫師" attend labelFunc0476_0213:
	if (!((var0001 == 0x0003) || ((var0001 == 0x0004) || ((var0001 == 0x0005) || (var0001 == 0x0006))))) goto labelFunc0476_0202;
	message("「是的，我喜歡縫製衣物。你有興趣看看或購買我的一些作品嗎？」");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc0476_01FB;
	Func085C();
	goto labelFunc0476_01FF;
labelFunc0476_01FB:
	message("震驚佈滿了她的臉。~~「好吧，」她氣呼呼地說。");
	say();
labelFunc0476_01FF:
	goto labelFunc0476_020C;
labelFunc0476_0202:
	message("「是的， ");
	message(var0000);
	message("。這是我的工作，也是我的熱情所在。我喜歡縫製衣物。如果你在我的店開門時來，我可以給你看許多精緻的東西。」");
	say();
labelFunc0476_020C:
	UI_remove_answer("裁縫師");
labelFunc0476_0213:
	case "告辭" attend labelFunc0476_0226:
	message("「再會了， ");
	message(var0000);
	message(".\"*");
	say();
	abort;
labelFunc0476_0226:
	goto labelFunc0476_004F;
labelFunc0476_0229:
	endconv;
labelFunc0476_022A:
	if (!(event == 0x0000)) goto labelFunc0476_0238;
	Func092E(0xFF8A);
labelFunc0476_0238:
	return;
}


