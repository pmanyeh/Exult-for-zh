#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern void Func088D 0x88D ();
extern var Func090A 0x90A ();
extern var Func08F7 0x8F7 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func0415 object#(0x415) ()
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

	if (!(event == 0x0001)) goto labelFunc0415_03B4;
	UI_show_npc_face(0xFFEB, 0x0000);
	var0000 = Func0909();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFFEB));
	UI_add_answer(["姓名", "職業", "謀殺", "告辭"]);
	if (!gflags[0x0040]) goto labelFunc0415_0046;
	UI_add_answer("皇冠寶石號 (Crown Jewel)");
labelFunc0415_0046:
	if (!gflags[0x003F]) goto labelFunc0415_0053;
	UI_add_answer("友誼會");
labelFunc0415_0053:
	if (!gflags[0x0043]) goto labelFunc0415_0060;
	UI_add_answer("Hook");
labelFunc0415_0060:
	var0002 = 0x0000;
	if (!(!gflags[0x0055])) goto labelFunc0415_0078;
	message("你看到一位身上散發著菸草味的粗獷老水手。");
	say();
	gflags[0x0055] = true;
	goto labelFunc0415_007C;
labelFunc0415_0078:
	message("「什麼事，夥計？」 Gargan 咳著嗽問道。");
	say();
labelFunc0415_007C:
	converse attend labelFunc0415_03AF;
	case "姓名" attend labelFunc0415_00A9:
	message("「我叫 Gargan。」～他大聲地吸了吸鼻子。");
	say();
	UI_remove_answer("姓名");
	var0002 = (var0002 + 0x0001);
	if (!(var0002 == 0x0006)) goto labelFunc0415_00A9;
	Func088D();
labelFunc0415_00A9:
	case "職業" attend labelFunc0415_00DD:
	message("「我是 Trinsic 的船匠。如果你想知道關於船或六分儀的事，儘管問。」");
	say();
	message("Gargan 咳嗽了幾聲。");
	say();
	UI_add_answer(["船隻", "六分儀"]);
	var0002 = (var0002 + 0x0001);
	if (!(var0002 == 0x0006)) goto labelFunc0415_00DD;
	Func088D();
labelFunc0415_00DD:
	case "船隻" attend labelFunc0415_0118:
	message("「你想買艘船？」 這個老人笑著問。(顯然現在沒多少人買船了。)~「我的船很堅固，建造精良。它們可能不是 Owen 造的，但絕對是好船！不過你必須先買一張船契。」");
	say();
	message("Gargan 用袖子擦了擦流著鼻涕的鼻子。");
	say();
	UI_remove_answer("船隻");
	UI_add_answer(["Owen", "船契"]);
	var0002 = (var0002 + 0x0001);
	if (!(var0002 == 0x0006)) goto labelFunc0415_0118;
	Func088D();
labelFunc0415_0118:
	case "六分儀" attend labelFunc0415_01A8:
	if (!(!(var0001 == 0x001E))) goto labelFunc0415_0132;
	message("「好吧，你得等店鋪營業的時候再來。」");
	say();
	goto labelFunc0415_01A8;
labelFunc0415_0132:
	message("「我賣的六分儀要 80 枚金幣。要一個嗎？」~Gargan 清了清嗓子。");
	say();
	if (!Func090A()) goto labelFunc0415_0186;
	var0003 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var0003 >= 0x0050)) goto labelFunc0415_017F;
	var0004 = UI_add_party_items(0x0001, 0x028A, 0xFE99, 0xFE99, true);
	message("「給你！」");
	say();
	if (!(!var0004)) goto labelFunc0415_017C;
	message("「你雙手拿滿東西了，拿不動六分儀啦！」～Gargan 打了個噴嚏。");
	say();
labelFunc0415_017C:
	goto labelFunc0415_0183;
labelFunc0415_017F:
	message("「你沒有足夠的金幣，水手。」～ Gargan 打了個噴嚏。");
	say();
labelFunc0415_0183:
	goto labelFunc0415_018A;
labelFunc0415_0186:
	message("「隨你便。」～ Gargan 打了個噴嚏。");
	say();
labelFunc0415_018A:
	UI_remove_answer("六分儀");
	var0002 = (var0002 + 0x0001);
	if (!(var0002 == 0x0006)) goto labelFunc0415_01A8;
	Func088D();
labelFunc0415_01A8:
	case "Owen" attend labelFunc0415_01D2:
	message("「你沒聽說過 Owen 嗎？他是這片土地上最好的造船匠。他住在 Minoc。」～ Gargan 咳了嗽。");
	say();
	UI_remove_answer("Owen");
	var0002 = (var0002 + 0x0001);
	if (!(var0002 == 0x0006)) goto labelFunc0415_01D2;
	Func088D();
labelFunc0415_01D2:
	case "船契" attend labelFunc0415_0299:
	if (!(!(var0001 == 0x001E))) goto labelFunc0415_01EC;
	message("「好吧，你得等店鋪營業的時候再來。」");
	say();
	goto labelFunc0415_0299;
labelFunc0415_01EC:
	if (!gflags[0x0058]) goto labelFunc0415_01FD;
	message("「我已經把『鱗鰻號 (The Scaly Eel)』的船契賣給你了！那是我唯一的一艘船！」");
	say();
	message("Gargan 大聲咳嗽。");
	say();
	goto labelFunc0415_027B;
labelFunc0415_01FD:
	message("「我能賣給你的船契是『鱗鰻號 (The Scaly Eel)』的。賣 600 枚金幣。有興趣嗎？」");
	say();
	var0005 = Func090A();
	if (!var0005) goto labelFunc0415_0277;
	var0003 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var0003 >= 0x0258)) goto labelFunc0415_0270;
	var0006 = UI_add_party_items(0x0001, 0x031D, 0x000E, 0xFE99, true);
	if (!var0006) goto labelFunc0415_0263;
	message("「那好吧！」這個水手回答。他遞給你船契並收下了你的金幣。～ Gargan 打了個噴嚏。");
	say();
	var0007 = UI_remove_party_items(0x0258, 0x0284, 0xFE99, 0xFE99, true);
	gflags[0x0058] = true;
	goto labelFunc0415_026D;
labelFunc0415_0263:
	message("「你帶的東西已經足夠讓一艘大帆船沉沒了，");
	message(var0000);
	message("！如果你願意放下一些東西，也許你就能航行了，到那時我會非常樂意把船契賣給你。」～ Gargan 打了個噴嚏。");
	say();
labelFunc0415_026D:
	goto labelFunc0415_0274;
labelFunc0415_0270:
	message("「抱歉，夥計，」 Gargan 說：「你的金幣不夠！」～ Gargan 打了個噴嚏。");
	say();
labelFunc0415_0274:
	goto labelFunc0415_027B;
labelFunc0415_0277:
	message("「那下次吧...」 水手失望地聳聳肩。～ Gargan 打了個噴嚏。");
	say();
labelFunc0415_027B:
	UI_remove_answer("船契");
	var0002 = (var0002 + 0x0001);
	if (!(var0002 == 0x0006)) goto labelFunc0415_0299;
	Func088D();
labelFunc0415_0299:
	case "謀殺" attend labelFunc0415_02F1:
	message("「我聽說了。真是件可怕的事。不過我不能說我看到或聽到了什麼。」～ Gargan 咳嗽了幾聲，大聲地清了清嗓子，然後吐了一口痰。");
	say();
	var0008 = Func08F7(0xFFFE);
	if (!var0008) goto labelFunc0415_02D3;
	UI_show_npc_face(0xFFFE, 0x0000);
	message("「噢，好噁心！」");
	say();
	UI_remove_npc_face(0xFFFE);
	UI_show_npc_face(0xFFEB, 0x0000);
labelFunc0415_02D3:
	UI_remove_answer("謀殺");
	var0002 = (var0002 + 0x0001);
	if (!(var0002 == 0x0006)) goto labelFunc0415_02F1;
	Func088D();
labelFunc0415_02F1:
	case "皇冠寶石號 (Crown Jewel)" attend labelFunc0415_031B:
	message("「是的，那艘船昨晚停泊在這裡。」他查看了他的日誌。「她在日出時開往 Britain 。我不記得有看到任何人上船或下船。」～ Gargan 哼了一聲，又咳嗽了幾下。");
	say();
	UI_remove_answer("皇冠寶石號 (Crown Jewel)");
	var0002 = (var0002 + 0x0001);
	if (!(var0002 == 0x0006)) goto labelFunc0415_031B;
	Func088D();
labelFunc0415_031B:
	case "Hook" attend labelFunc0415_0377:
	message("「夥計，我總是看到裝著木腿和鐵鉤的海盜跟水手。如果你看到一個，就跟看到另一個沒兩樣。」 但這個男人突然皺起眉頭。「嗯。既然你提到了，我『確實』在昨晚日落後看到一個裝著鐵鉤的男人。我正要離開商店時在外面看到了他。有一個沒有翅膀的石像鬼跟他在一起。他們正往東走。」");
	say();
	message("Gargan 打了個噴嚏，然後咳嗽了幾下。");
	say();
	var0008 = Func08F7(0xFFFE);
	if (!var0008) goto labelFunc0415_0359;
	UI_show_npc_face(0xFFFE, 0x0000);
	message("「我告訴過你！就是他！」");
	say();
	UI_remove_npc_face(0xFFFE);
	UI_show_npc_face(0xFFEB, 0x0000);
labelFunc0415_0359:
	UI_remove_answer("Hook");
	var0002 = (var0002 + 0x0001);
	if (!(var0002 == 0x0006)) goto labelFunc0415_0377;
	Func088D();
labelFunc0415_0377:
	case "友誼會" attend labelFunc0415_03A1:
	message("「我太老了，懶得去理會他們。」～ Gargan 用袖子擦了擦流鼻涕的鼻子。");
	say();
	UI_remove_answer("友誼會");
	var0002 = (var0002 + 0x0001);
	if (!(var0002 == 0x0006)) goto labelFunc0415_03A1;
	Func088D();
labelFunc0415_03A1:
	case "告辭" attend labelFunc0415_03AC:
	goto labelFunc0415_03AF;
labelFunc0415_03AC:
	goto labelFunc0415_007C;
labelFunc0415_03AF:
	endconv;
	message("「祝你今天一帆風順！」水手剛開口，卻被一陣痙攣般的咳嗽給打斷了。*");
	say();
labelFunc0415_03B4:
	if (!(event == 0x0000)) goto labelFunc0415_03C2;
	Func092E(0xFFEB);
labelFunc0415_03C2:
	return;
}
