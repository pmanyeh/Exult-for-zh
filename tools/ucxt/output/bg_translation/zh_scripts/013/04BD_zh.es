#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);
extern void Func0889 0x889 ();
extern var Func090A 0x90A ();
extern void Func092F 0x92F (var var0000);

void Func04BD object#(0x4BD) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0001)) goto labelFunc04BD_0345;
	UI_show_npc_face(0xFF43, 0x0000);
	var0000 = false;
	var0001 = false;
	var0002 = Func08F7(0xFFFC);
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!var0002) goto labelFunc04BD_00C4;
	message("「向你問候，人類，」石像鬼對 Dupre 說。「請問研究進展如何？」");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「進展得很順利，朋友 Forbrak。」");
	say();
	var0003 = Func08F7(0xFFFD);
	if (!(var0003 && (!gflags[0x024E]))) goto labelFunc04BD_00B3;
	UI_remove_npc_face(0xFF43);
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「『什麼』研究？」");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「哎呀，呃，你肯定聽說過那些為 Brommer 編纂的著名指南！」");
	say();
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「對，我聽過。但如果有哪一本詳細記載了各種酒館，我就把名字倒過來寫！」");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「嗯，是的，呃，這是，啊，一些新東西。現在，來喝一杯如何！」");
	say();
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「新的？那就像我的屁股一樣新……」Shamino 咕噥著。");
	say();
	UI_remove_npc_face(0xFFFD);
labelFunc04BD_00B3:
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFF43, 0x0000);
labelFunc04BD_00C4:
	if (!(!gflags[0x024E])) goto labelFunc04BD_00D6;
	message("在吧檯服務的石像鬼向你舉起酒杯。");
	say();
	gflags[0x024E] = true;
	goto labelFunc04BD_00DA;
labelFunc04BD_00D6:
	message("「請問是什麼風把你們吹來這間優質的酒館？」Forbrak 問。");
	say();
labelFunc04BD_00DA:
	converse attend labelFunc04BD_0340;
	case "姓名" attend labelFunc04BD_00F7:
	message("「我是 Forbrak。」");
	say();
	UI_remove_answer("姓名");
	UI_add_answer("Forbrak");
labelFunc04BD_00F7:
	case "Forbrak" attend labelFunc04BD_0111:
	message("「在石像鬼語中是『強壯手臂』的意思。」");
	say();
	UI_remove_answer("Forbrak");
	UI_add_answer("石像鬼");
labelFunc04BD_0111:
	case "職業" attend labelFunc04BD_0124:
	message("他攤開手向房間四周比劃。~~ 「在恢復大廳 (Hall of Refreshment) 提供食物和飲料。」");
	say();
	UI_add_answer("購買");
labelFunc04BD_0124:
	case "購買" attend labelFunc04BD_014E:
	var0004 = UI_get_schedule_type(UI_get_npc_object(0xFF43));
	if (!(var0004 == 0x0007)) goto labelFunc04BD_014A;
	Func0889();
	goto labelFunc04BD_014E;
labelFunc04BD_014A:
	message("「請你在我店鋪營業時再來。」");
	say();
labelFunc04BD_014E:
	case "石像鬼" attend labelFunc04BD_016E:
	message("「認識鎮上的許多居民，也知道一些麻煩事。」");
	say();
	UI_add_answer(["居民", "麻煩"]);
	UI_remove_answer("石像鬼");
labelFunc04BD_016E:
	case "麻煩" attend labelFunc04BD_018E:
	message("「只知道兩件事。看到神殿和友誼會之間的衝突，也知道無翼者的掙扎。」");
	say();
	UI_add_answer(["神殿與友誼會", "無翼與有翼"]);
	UI_remove_answer("麻煩");
labelFunc04BD_018E:
	case "神殿與友誼會" attend labelFunc04BD_01CC:
	message("「相信新舊理念之間存在分歧。不期望有暴力衝突，但請你去找訓練師和治療師。知道他們觀察敏銳，或許看到了什麼。同時也建議你與友誼會的成員談談。」");
	say();
	gflags[0x023C] = true;
	UI_remove_answer("神殿與友誼會");
	if (!(!var0001)) goto labelFunc04BD_01B3;
	UI_add_answer("訓練師");
labelFunc04BD_01B3:
	if (!(!var0000)) goto labelFunc04BD_01C1;
	UI_add_answer("治療師");
labelFunc04BD_01C1:
	UI_add_answer("成員");
	gflags[0x0244] = true;
labelFunc04BD_01CC:
	case "成員" attend labelFunc04BD_01EC:
	message("「建議你和他們的領袖與店員談談。」");
	say();
	UI_add_answer(["領袖", "店員"]);
	UI_remove_answer("成員");
labelFunc04BD_01EC:
	case "無翼與有翼" attend labelFunc04BD_021F:
	message("「看著沒有翅膀的朋友對自己的命運感到不滿。想知道為什麼，但從來沒問過。去跟治療師和訓練師談談吧。如果真有證據的話，預計他們會看到過。」");
	say();
	UI_remove_answer("無翼與有翼");
	if (!(!var0000)) goto labelFunc04BD_020D;
	UI_add_answer("治療師");
labelFunc04BD_020D:
	if (!(!var0001)) goto labelFunc04BD_021B;
	UI_add_answer("訓練師");
labelFunc04BD_021B:
	gflags[0x0244] = true;
labelFunc04BD_021F:
	case "居民" attend labelFunc04BD_0259:
	message("「認識很多石像鬼。想了解他們之中的誰嗎？」");
	say();
	var0005 = Func090A();
	if (!var0005) goto labelFunc04BD_024E;
	message("「確定你已經認識我們的領袖了。想知道你是否見過 Teregus ，或者是學習中心的主管。~~說點實際的，你可能會需要物資商人，」他點點頭。");
	say();
	UI_add_answer(["學習中心", "Teregus", "物資商人"]);
	goto labelFunc04BD_0252;
labelFunc04BD_024E:
	message("「如果你想知道，晚點再告訴你關於他們的事。」");
	say();
labelFunc04BD_0252:
	UI_remove_answer("居民");
labelFunc04BD_0259:
	case "訓練師" attend labelFunc04BD_0270:
	message("「叫做 Inforlem。非常強壯。」");
	say();
	var0001 = true;
	UI_remove_answer("訓練師");
labelFunc04BD_0270:
	case "治療師" attend labelFunc04BD_0287:
	message("「叫做 Inmanilem。」");
	say();
	var0000 = true;
	UI_remove_answer("治療師");
labelFunc04BD_0287:
	case "領袖" attend labelFunc04BD_029A:
	message("「非常友善。叫做 Quan。」");
	say();
	UI_remove_answer("領袖");
labelFunc04BD_029A:
	case "店員" attend labelFunc04BD_02C5:
	message("「極度暴力。」他搖了搖頭。「名字叫 Runeb，意思是『紅色迷霧』。因為這是他在戰鬥後留給敵人的唯一東西。」");
	say();
	UI_remove_answer("店員");
	var0006 = UI_is_dead(UI_get_npc_object(0xFF48));
	if (!var0006) goto labelFunc04BD_02C5;
	message("「不過現在已經死了。」");
	say();
labelFunc04BD_02C5:
	case "學習中心" attend labelFunc04BD_02DF:
	message("「是個獲取知識和鍛鍊的絕佳地點。由名叫 Quaeven 的石像鬼管理。這個 Quaeven 非常有學問。而且，像 Silamo 一樣，也是無翼的。」");
	say();
	UI_remove_answer("學習中心");
	UI_add_answer("Silamo");
labelFunc04BD_02DF:
	case "物資商人" attend labelFunc04BD_02F9:
	message("「叫做 Betra。是兩位店主之一。另外一位是 Sarpling。」");
	say();
	UI_remove_answer("物資商人");
	UI_add_answer("Sarpling");
labelFunc04BD_02F9:
	case "Teregus" attend labelFunc04BD_030C:
	message("「是一位賢者。像 Quaeven 一樣受過良好教育。在這裡住了很長一段時間。」");
	say();
	UI_remove_answer("Teregus");
labelFunc04BD_030C:
	case "Silamo" attend labelFunc04BD_031F:
	message("「是住在山脈東邊的園丁。」");
	say();
	UI_remove_answer("Silamo");
labelFunc04BD_031F:
	case "Sarpling" attend labelFunc04BD_0332:
	message("「對他了解不多，也從沒去過他的店，因此無法告訴你他賣什麼。知道他的名字是『蛇信』的意思。」");
	say();
	UI_remove_answer("Sarpling");
labelFunc04BD_0332:
	case "告辭" attend labelFunc04BD_033D:
	goto labelFunc04BD_0340;
labelFunc04BD_033D:
	goto labelFunc04BD_00DA;
labelFunc04BD_0340:
	endconv;
	message("「祝你好運，人類。」*");
	say();
labelFunc04BD_0345:
	if (!(event == 0x0000)) goto labelFunc04BD_0353;
	Func092F(0xFF43);
labelFunc04BD_0353:
	return;
}


