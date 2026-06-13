#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);

void Func040F object#(0x40F) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0000)) goto labelFunc040F_0009;
	abort;
labelFunc040F_0009:
	UI_show_npc_face(0xFFF1, 0x0000);
	var0000 = Func0909();
	var0001 = Func08F7(0xFFD0);
	if (!(!gflags[0x02C4])) goto labelFunc040F_0034;
	message("你看到一位非常有魅力的東方女子。她全副武裝。");
	say();
	gflags[0x02C4] = true;
	goto labelFunc040F_0038;
labelFunc040F_0034:
	message("「你想再跟我說話嗎？」 Eiko 問道。");
	say();
labelFunc040F_0038:
	if (!(gflags[0x02DC] && (!gflags[0x02DD]))) goto labelFunc040F_004A;
	UI_add_answer("住手！");
labelFunc040F_004A:
	UI_add_answer(["姓名", "職業", "告辭"]);
labelFunc040F_005A:
	converse attend labelFunc040F_019F;
	case "姓名" attend labelFunc040F_0070:
	message("「我的名字是 Eiko 。」");
	say();
	UI_remove_answer("姓名");
labelFunc040F_0070:
	case "職業" attend labelFunc040F_0098:
	if (!(!gflags[0x02DD])) goto labelFunc040F_008D;
	message("「我沒有職業。我有一個任務。我的任務是和我的同父異母妹妹 Amanda 一起進行的。」");
	say();
	UI_add_answer("任務");
	goto labelFunc040F_0091;
labelFunc040F_008D:
	message("「既然我們的任務結束了，我們現在要離開這個地城了。」");
	say();
labelFunc040F_0091:
	UI_add_answer("Amanda");
labelFunc040F_0098:
	case "任務" attend labelFunc040F_00BC:
	message("「十八年前，我的父親被一個名叫 Iskander Ironheart 的獨眼巨人謀殺了。我的同父異母妹妹 Amanda 和我是他僅存的親人，我們發誓要為他報仇。」");
	say();
	gflags[0x02DB] = true;
	UI_remove_answer("任務");
	UI_add_answer(["父親", "Iskander"]);
labelFunc040F_00BC:
	case "父親" attend labelFunc040F_00FF:
	message("「我們的父親是一位名叫 Kalideth 的法師。他致力於尋找引起以太波動的原因，這些波動在過去二十多年裡一直阻礙著魔法的運作，以及自那時起折磨著所有法師的瘋狂。」");
	say();
	if (!var0001) goto labelFunc040F_00F8;
	UI_show_npc_face(0xFFD0, 0x0000);
	message("「我們的父親是個明智又善良的人。他的死對整個 Britannia 來說都是損失。」她抽泣著。");
	say();
	if (!(!gflags[0x02DD])) goto labelFunc040F_00E7;
	message("「殺他的兇手該死。」");
	say();
labelFunc040F_00E7:
	UI_remove_npc_face(0xFFD0);
	UI_show_npc_face(0xFFF1, 0x0000);
labelFunc040F_00F8:
	UI_remove_answer("父親");
labelFunc040F_00FF:
	case "Amanda" attend labelFunc040F_0137:
	message("「在我們父親去世之前，我們兩人都不知道對方的存在。」");
	say();
	if (!var0001) goto labelFunc040F_0130;
	UI_show_npc_face(0xFFD0, 0x0000);
	message("「我總覺得我在某個地方有個妹妹。但我把這種感覺歸咎於一個孩子失去父親後感到的自然孤獨。自從父親死後，了解彼此是發生在我身上唯一的好事。」");
	say();
	UI_remove_npc_face(0xFFD0);
	UI_show_npc_face(0xFFF1, 0x0000);
labelFunc040F_0130:
	UI_remove_answer("Amanda");
labelFunc040F_0137:
	case "Iskander" attend labelFunc040F_014A:
	message("「是的，我知道我發音不正確。我了解他有一個更像人類的綽號，那實際上是從古代獨眼巨人語言翻譯過來的。但我不知道那是什麼。」");
	say();
	UI_remove_answer("Iskander");
labelFunc040F_014A:
	case "住手！" attend labelFunc040F_0191:
	message("你向 Eiko 解釋了你所了解到的事。 Kalideth 在和 Iskander 戰鬥時已經瘋了，而造成魔法和法師心智問題的根源才是真正殺死 Kalideth 的東西！");
	say();
	message("「那麼，如果你已經發現了殺死我父親的真正力量，我對 Kalideth 的復仇就是不公正的了。」");
	say();
	if (!var0001) goto labelFunc040F_018A;
	UI_show_npc_face(0xFFD0, 0x0000);
	if (!(!gflags[0x02DE])) goto labelFunc040F_018A;
	message("「你怎麼能這麼說？我以為你是我妹妹？你是個叛徒！」");
	say();
	UI_remove_npc_face(0xFFD0);
	UI_show_npc_face(0xFFF1, 0x0000);
	gflags[0x02DD] = true;
labelFunc040F_018A:
	UI_remove_answer("住手！");
labelFunc040F_0191:
	case "告辭" attend labelFunc040F_019C:
	goto labelFunc040F_019F;
labelFunc040F_019C:
	goto labelFunc040F_005A;
labelFunc040F_019F:
	endconv;
	message("「再會。」");
	say();
	return;
}


