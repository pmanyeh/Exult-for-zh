#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func090A 0x90A ();
extern var Func090B 0x90B (var var0000);

void Func04E0 object#(0x4E0) ()
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

	if (!(event == 0x0000)) goto labelFunc04E0_0009;
	abort;
labelFunc04E0_0009:
	UI_show_npc_face(0xFF20, 0x0000);
	var0000 = UI_part_of_day();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFF20));
	var0002 = Func0908();
	var0003 = "Avatar";
	var0004 = UI_is_pc_female();
	if (!gflags[0x02A1]) goto labelFunc04E0_0047;
	var0005 = var0002;
labelFunc04E0_0047:
	if (!gflags[0x02A2]) goto labelFunc04E0_0053;
	var0005 = var0003;
labelFunc04E0_0053:
	if (!(!(var0001 == 0x0007))) goto labelFunc04E0_0063;
	message("這個男人驚訝地抬頭說：「我現在沒在工作，我請求你尊重我的隱私。如果你想和我說話，請在深夜時分到澡堂來。」*");
	say();
	abort;
labelFunc04E0_0063:
	UI_add_answer(["姓名", "職業", "告辭"]);
	var0006 = UI_get_timer(0x0004);
	var0007 = UI_get_timer(0x0002);
	var0008 = UI_get_timer(0x0003);
	if (!((gflags[0x029C] && (var0007 < 0x0002)) || ((gflags[0x029D] && (var0006 < 0x0002)) || (gflags[0x029E] && (var0008 < 0x0002))))) goto labelFunc04E0_00C5;
	message("這個男人驚訝地看著你，說：「等一下，");
	message(var0004);
	message("！你剛才已經享受過了，不是嗎？請等你休息好了再來。」*");
	say();
	abort;
	goto labelFunc04E0_0160;
labelFunc04E0_00C5:
	if (!(!gflags[0x02AD])) goto labelFunc04E0_0156;
	message("你看到一位極其英俊，雙眼能看穿你靈魂的男人。");
	say();
	if (!var0004) goto labelFunc04E0_00DD;
	message("「哈囉，美女！");
	say();
	goto labelFunc04E0_00F3;
labelFunc04E0_00DD:
	message("「哈囉。嗯，你確定你不是真的想和 Wench 或 Martine 談談嗎？」");
	say();
	if (!Func090A()) goto labelFunc04E0_00EE;
	message("「好吧，水手，只要能讓你熱血沸騰……");
	say();
	goto labelFunc04E0_00F3;
labelFunc04E0_00EE:
	message("「那你最好去和他們其中一個說話。他們可能更合你的胃口！」*");
	say();
	abort;
labelFunc04E0_00F3:
	message("「你的名字是什麼？」");
	say();
	var0009 = Func090B([var0002, var0003]);
	if (!(var0009 == var0002)) goto labelFunc04E0_0137;
	if (!var0004) goto labelFunc04E0_0123;
	message("「嗯，我很高興認識你，");
	message(var0002);
	message("。」");
	say();
	goto labelFunc04E0_012D;
labelFunc04E0_0123:
	message("「哈囉，");
	message(var0002);
	message("。」");
	say();
labelFunc04E0_012D:
	var0005 = var0002;
	gflags[0x02A1] = true;
labelFunc04E0_0137:
	if (!(var0009 == var0003)) goto labelFunc04E0_014F;
	message("Roberto 愣了一下，又看了一眼。「聖者 ，是嗎？我還以為我什麼都聽過了……」");
	say();
	gflags[0x02A2] = true;
	var0005 = var0003;
labelFunc04E0_014F:
	gflags[0x02AD] = true;
	goto labelFunc04E0_0160;
labelFunc04E0_0156:
	message("「又見面了，");
	message(var0005);
	message("，」 Roberto 說。");
	say();
labelFunc04E0_0160:
	converse attend labelFunc04E0_027D;
	case "姓名" attend labelFunc04E0_0180:
	message("「在這一帶，人們叫我 Roberto 。」");
	say();
	if (!var0004) goto labelFunc04E0_0179;
	message("Roberto 握住你的手說：「而妳是我見過最美麗的女人！」");
	say();
labelFunc04E0_0179:
	UI_remove_answer("姓名");
labelFunc04E0_0180:
	case "職業" attend labelFunc04E0_0199:
	message("Roberto 燦爛地笑了。「你不是真的想知道那個，對吧？」他搖搖頭，忍住笑。「很好——我的工作是確保你在澡堂期間能感到真正的舒適。」");
	say();
	UI_add_answer(["澡堂", "舒適的服務"]);
labelFunc04E0_0199:
	case "澡堂" attend labelFunc04E0_01C7:
	if (!var0004) goto labelFunc04E0_01B0;
	var000A = "美女";
	goto labelFunc04E0_01B6;
labelFunc04E0_01B0:
	var000A = "帥哥";
labelFunc04E0_01B6:
	message("「不錯的地方，不是嗎？我當然很享受在這裡工作！它為我帶來許多財富，而且我有很多機會遇見");
	message(var000A);
	message("，例如～像是你呀～！」");
	say();
	UI_remove_answer("澡堂");
labelFunc04E0_01C7:
	case "舒適的服務" attend labelFunc04E0_01ED:
	message("「什麼最適合你？我們可以去溫泉池裡游個泳，或者我可以為你按摩。如果你比較喜歡交談，我們也可以只是聊聊天。或者如果你願意，我們可以漫步進入交誼廳，然後……交流！」");
	say();
	UI_remove_answer("舒適的服務");
	UI_add_answer(["游泳", "按摩", "聊天", "交誼廳"]);
labelFunc04E0_01ED:
	case "交誼廳" attend labelFunc04E0_0236:
	message("「你想在交誼廳裡和我作伴嗎？」");
	say();
	if (!Func090A()) goto labelFunc04E0_0225;
	message("Roberto 帶你進入一個私人房間。~~「這根本不是交誼廳。我們將會獨處！」~~過了一會兒，在得到這個男人全心全意的服侍後，你走出交誼廳，成為了一個更快樂的聖者 。");
	say();
	gflags[0x029E] = true;
	UI_set_timer(0x0003);
	var000B = UI_remove_party_items(0x0032, 0x0284, 0xFE99, 0xFE99, true);
	goto labelFunc04E0_022F;
labelFunc04E0_0225:
	message("「別擔心，");
	message(var0005);
	message("。我們可以做些別的事。」");
	say();
labelFunc04E0_022F:
	UI_remove_answer("交誼廳");
labelFunc04E0_0236:
	case "游泳" attend labelFunc04E0_0249:
	message("Roberto 幫你脫下衣物，引導你進入溫暖的泉水中。感覺極好，你很想睡一覺；但你知道你還有任務要完成。過了一會兒， Roberto 扶你出水，你穿上衣服。");
	say();
	UI_remove_answer("游泳");
labelFunc04E0_0249:
	case "按摩" attend labelFunc04E0_025C:
	message("Roberto 幫你脫下衣物，引導你到一張舒適的按摩床上。你臉朝下趴著，這個男人熟練地揉捏和摩擦你痠痛的肌肉，慢慢地讓你進入完全放鬆的狀態。過了一會兒， Roberto 扶你起來，你穿上衣服。");
	say();
	UI_remove_answer("按摩");
labelFunc04E0_025C:
	case "聊天" attend labelFunc04E0_026F:
	message("Roberto 笑了。「沒關係。我們來聊點什麼？冒險？秘密通道和地城？」~~ Roberto 靠近並低聲說：「你知道有秘密通道連接海盜巢穴 (Buccaneer's Den)的建築物嗎？這是真的！我相當確定入口是透過賭坊 (House of Games) ，我也很確定有一條路可以進入澡堂。」~~你和 Roberto 聊了許多其他話題，直到你意識到你在溫泉裡待了太久。還有任務要完成！");
	say();
	UI_remove_answer("聊天");
labelFunc04E0_026F:
	case "告辭" attend labelFunc04E0_027A:
	goto labelFunc04E0_027D;
labelFunc04E0_027A:
	goto labelFunc04E0_0160;
labelFunc04E0_027D:
	endconv;
	message("「我希望能再見到你，");
	message(var0005);
	message("。」*");
	say();
	return;
}


