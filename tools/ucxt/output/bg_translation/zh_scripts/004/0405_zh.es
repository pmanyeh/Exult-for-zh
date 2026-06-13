#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0908 0x908 ();
extern void Func089E 0x89E (var var0000, var var0001, var var0002);
extern var Func090B 0x90B (var var0000);
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func0405 object#(0x405) ()
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

	if (!(event == 0x0001)) goto labelFunc0405_041C;
	UI_show_npc_face(0xFFFB, 0x0000);
	var0000 = Func0909();
	var0001 = UI_get_npc_object(0xFFFB);
	var0002 = Func0908();
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(var0001 in UI_get_party_list())) goto labelFunc0405_004A;
	UI_add_answer("離隊");
labelFunc0405_004A:
	if (!(!((var0001 in UI_get_party_list()) && gflags[0x0018]))) goto labelFunc0405_0061;
	UI_add_answer("加入");
labelFunc0405_0061:
	if (!gflags[0x00E4]) goto labelFunc0405_0074;
	if (!gflags[0x00EF]) goto labelFunc0405_0074;
	UI_add_answer("Lord Heather");
labelFunc0405_0074:
	if (!gflags[0x0028]) goto labelFunc0405_0081;
	UI_add_answer("治療");
labelFunc0405_0081:
	if (!(!gflags[0x0018])) goto labelFunc0405_0093;
	message("你很驚訝地看到你的老同伴 Jaana ，自從你上次造訪以來，她看起來只有稍微老了一點。");
	say();
	gflags[0x0018] = true;
	goto labelFunc0405_009D;
labelFunc0405_0093:
	message("「是的，");
	message(var0002);
	message("？」 Jaana 問。");
	say();
labelFunc0405_009D:
	converse attend labelFunc0405_0411;
	case "姓名" attend labelFunc0405_00C4:
	message("「哎呀，我是 Jaana 啊。你應該記得我！」");
	say();
	UI_remove_answer("姓名");
	if (!gflags[0x00E4]) goto labelFunc0405_00C0;
	UI_add_answer("Lord Heather");
labelFunc0405_00C0:
	gflags[0x00EF] = true;
labelFunc0405_00C4:
	case "職業" attend labelFunc0405_00F7:
	message("「我擔任 Cove 的治療師已經有一段時間了，可以為你提供我的治療服務。既然魔法不再可靠，我一直渴望加入冒險者的隊伍，就像我的老朋友們一樣。我懷念過去的生活！」");
	say();
	UI_add_answer(["治療", "朋友們", "魔法"]);
	gflags[0x0028] = true;
	if (!(!(var0001 in UI_get_party_list()))) goto labelFunc0405_00F7;
	UI_add_answer("加入");
labelFunc0405_00F7:
	case "治療" attend labelFunc0405_014F:
	if (!(var0001 in UI_get_party_list())) goto labelFunc0405_0143;
	if (!gflags[0x0029]) goto labelFunc0405_011D;
	var0003 = UI_get_timer(0x000A);
	goto labelFunc0405_0123;
labelFunc0405_011D:
	var0003 = 0x0005;
labelFunc0405_0123:
	if (!(var0003 < 0x0004)) goto labelFunc0405_0134;
	message("「抱歉，我必須等一會兒才能再次施展治療。」");
	say();
	goto labelFunc0405_0140;
labelFunc0405_0134:
	Func089E(0x0000, 0x0000, 0x0000);
labelFunc0405_0140:
	goto labelFunc0405_014F;
labelFunc0405_0143:
	Func089E(0x001E, 0x000F, 0x0190);
labelFunc0405_014F:
	case "朋友們" attend labelFunc0405_0175:
	message("「我們的老朋友—— Iolo 、 Shamino 和 Dupre 。那些以 Lord British 之名征服邪惡的男人們！」");
	say();
	UI_remove_answer("朋友們");
	UI_add_answer(["Iolo", "Shamino", "Dupre", "Lord British"]);
labelFunc0405_0175:
	case "加入" attend labelFunc0405_01D3:
	var0004 = 0x0000;
	var0005 = UI_get_party_list();
	enum();
labelFunc0405_018B:
	for (var0008 in var0005 with var0006 to var0007) attend labelFunc0405_01A3;
	var0004 = (var0004 + 0x0001);
	goto labelFunc0405_018B;
labelFunc0405_01A3:
	if (!(var0004 < 0x0008)) goto labelFunc0405_01CF;
	message("「我很榮幸能加入你，");
	message(var0000);
	message("！」");
	say();
	UI_add_to_party(0xFFFB);
	UI_add_answer("離隊");
	UI_remove_answer("加入");
	goto labelFunc0405_01D3;
labelFunc0405_01CF:
	message("「我相信你的隊伍中旅行的成員已經夠多了。我會等到有人離開，你再次邀請我時加入。」");
	say();
labelFunc0405_01D3:
	case "離隊" attend labelFunc0405_0233:
	message("「你是想讓我在這裡等，還是想讓我回家？」");
	say();
	UI_clear_answers();
	var0009 = Func090B(["在這裡等", "回家"]);
	if (!(var0009 == "在這裡等")) goto labelFunc0405_0219;
	message("「很好。我會等到你回來。」*");
	say();
	UI_remove_from_party(0xFFFB);
	UI_set_schedule_type(UI_get_npc_object(0xFFFB), 0x000F);
	abort;
	goto labelFunc0405_0233;
labelFunc0405_0219:
	message("「我遵從你的願望。如果你邀請我，我很樂意重新加入。再見。」*");
	say();
	UI_remove_from_party(0xFFFB);
	UI_set_schedule_type(UI_get_npc_object(0xFFFB), 0x000B);
	abort;
labelFunc0405_0233:
	case "魔法" attend labelFunc0405_0254:
	if (!(!gflags[0x0003])) goto labelFunc0405_0249;
	message("「我的魔法受到了空氣中某些東西的影響，但我發現我的感官還算正常。你有沒有注意到這片土地上的法師們腦袋都出了問題？這非常令人不安。儘管如此，我大多數時候還是能施展一兩個法術的。」");
	say();
	goto labelFunc0405_024D;
labelFunc0405_0249:
	message("「我感覺以太現在流動得很順暢。魔法又復活了！」");
	say();
labelFunc0405_024D:
	UI_remove_answer("魔法");
labelFunc0405_0254:
	case "Lord Heather" attend labelFunc0405_02CD:
	message("Jaana 臉紅了。「是的，我跟我們的鎮長已經交往一段時間了。」");
	say();
	UI_remove_answer("Lord Heather");
	var000A = Func08F7(0xFFB3);
	if (!var000A) goto labelFunc0405_02CD;
	UI_show_npc_face(0xFFB3, 0x0000);
	message("「看來妳要離開 Cove 一段時間了，親愛的？」*");
	say();
	UI_show_npc_face(0xFFFB, 0x0000);
	message("「是的，大人。但我會回來的。我向你保證。」*");
	say();
	UI_show_npc_face(0xFFB3, 0x0000);
	message("「我會盡量不為妳擔心，但這很難。」*");
	say();
	UI_show_npc_face(0xFFFB, 0x0000);
	message("「別擔心。跟聖者在一起我會很安全的。」*");
	say();
	UI_show_npc_face(0xFFB3, 0x0000);
	message("「我真的希望如此。」鎮長擁抱了 Jaana 。*");
	say();
	UI_remove_npc_face(0xFFB3);
	UI_show_npc_face(0xFFFB, 0x0000);
labelFunc0405_02CD:
	case "Iolo" attend labelFunc0405_031A:
	var000B = Func08F7(0xFFFF);
	if (!(!var000B)) goto labelFunc0405_02EC;
	message("「他在哪裡？能見到他真是太好了！」");
	say();
	goto labelFunc0405_0313;
labelFunc0405_02EC:
	message("「我看他跟以前一樣啊！也許他的腰圍比以前粗了一點……但如果太久沒有去冒險，這也是意料之中的事！」*");
	say();
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「妳什麼意思？『腰圍粗了一點』才怪！」*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFFB, 0x0000);
	message("「我沒有惡意， Iolo ！」");
	say();
labelFunc0405_0313:
	UI_remove_answer("Iolo");
labelFunc0405_031A:
	case "Shamino" attend labelFunc0405_0367:
	var000C = Func08F7(0xFFFD);
	if (!(!var000C)) goto labelFunc0405_0339;
	message("「噢，我很想見見他。不知道他會在哪裡。」");
	say();
	goto labelFunc0405_0360;
labelFunc0405_0339:
	message("「Shamino ，你看起來不再像個『小孩子』了！發生了什麼事？你到了三十歲這個令人尊敬的年紀了嗎？」*");
	say();
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「哼。我內心還是個孩子。」*");
	say();
	UI_remove_npc_face(0xFFFD);
	UI_show_npc_face(0xFFFB, 0x0000);
	message("「那我就放心了。」她調皮地笑著。");
	say();
labelFunc0405_0360:
	UI_remove_answer("Shamino");
labelFunc0405_0367:
	case "Dupre" attend labelFunc0405_03F0:
	var000D = Func08F7(0xFFFC);
	if (!(!var000D)) goto labelFunc0405_0386;
	message("「我懷念和那個無賴喝上一兩杯的時光！我們去找那個騎士吧！」");
	say();
	goto labelFunc0405_03DF;
labelFunc0405_0386:
	message("「對於一個剛被封為騎士的人來說，他還保留著他好看的外貌和男孩般的魅力，不是嗎？」*");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「妳是指『男人味』的魅力吧，不是嗎？」*");
	say();
	UI_show_npc_face(0xFFFB, 0x0000);
	message("「噢，『原諒』我，先生。你的不成熟讓我一時糊塗了。」*");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「你要讓她這樣蒙混過關嗎，");
	message(var0002);
	message("？」");
	say();
	var000E = Func090A();
	if (!var000E) goto labelFunc0405_03D4;
	message("Dupre 無言以對，氣呼呼地轉身離開。*");
	say();
	UI_remove_npc_face(0xFFFC);
	goto labelFunc0405_03DF;
labelFunc0405_03D4:
	message("「很好！」 Jaana 在他背後對你眨了眨眼。*");
	say();
	UI_remove_npc_face(0xFFFC);
labelFunc0405_03DF:
	UI_remove_answer("Dupre");
	UI_show_npc_face(0xFFFB, 0x0000);
labelFunc0405_03F0:
	case "Lord British" attend labelFunc0405_0403:
	message("「我已經很多年沒見到我們的君主了。」");
	say();
	UI_remove_answer("Lord British");
labelFunc0405_0403:
	case "告辭" attend labelFunc0405_040E:
	goto labelFunc0405_0411;
labelFunc0405_040E:
	goto labelFunc0405_009D;
labelFunc0405_0411:
	endconv;
	message("「再見，");
	message(var0000);
	message(".\"*");
	say();
labelFunc0405_041C:
	if (!(event == 0x0000)) goto labelFunc0405_042A;
	Func092E(0xFFFB);
labelFunc0405_042A:
	return;
}


