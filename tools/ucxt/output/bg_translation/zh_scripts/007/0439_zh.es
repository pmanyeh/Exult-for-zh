#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func0439 object#(0x439) ()
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

	if (!(event == 0x0001)) goto labelFunc0439_0260;
	UI_show_npc_face(0xFFC7, 0x0000);
	var0000 = UI_part_of_day();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFFC7));
	var0002 = Func0909();
	var0003 = UI_wearing_fellowship();
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(gflags[0x004A] || gflags[0x0040])) goto labelFunc0439_0055;
	UI_add_answer("皇冠寶石號");
labelFunc0439_0055:
	if (!(!gflags[0x00BA])) goto labelFunc0439_0067;
	message("站在你面前的是一位年邁的航海人，他堅定的臉龐似乎經歷過無數風雨。");
	say();
	gflags[0x00BA] = true;
	goto labelFunc0439_0071;
labelFunc0439_0067:
	message("「這次你找我有什麼事，");
	message(var0002);
	message("？」 Clint 說。");
	say();
labelFunc0439_0071:
	converse attend labelFunc0439_025B;
	case "姓名" attend labelFunc0439_0087:
	message("「我是 Clint 。」");
	say();
	UI_remove_answer("姓名");
labelFunc0439_0087:
	case "職業" attend labelFunc0439_00A0:
	message("「在我年輕的時候，我是個駕著大帆船航行過大海的水手。現在我必須滿足於只賣船隻和六分儀給別人。」");
	say();
	UI_add_answer(["水手", "買東西"]);
labelFunc0439_00A0:
	case "水手" attend labelFunc0439_00BA:
	message("「當然，那是在需要強壯的男人才能當水手的日子。現在出海的那些人根本撐不到一天。但我想，一切事物逐漸變得溫順，就是宇宙的本質。」");
	say();
	UI_remove_answer("水手");
	UI_add_answer("溫順");
labelFunc0439_00BA:
	case "溫順" attend labelFunc0439_00D4:
	message("「很快地，所有的怪物都會死光，整個世界會像友誼會那些人說的那樣，在信任、價值和團結中結合在一起。呸！我說，當每個人都在互相戰鬥的時候，這個世界才更美好。」");
	say();
	UI_remove_answer("溫順");
	UI_add_answer("友誼會");
labelFunc0439_00D4:
	case "友誼會" attend labelFunc0439_00FB:
	if (!var0003) goto labelFunc0439_00F0;
	message("「當然，我沒有冒犯的意思。我沒意識到你是個成員。」 Clint 的反應就好像他剛摸到麻瘋病人一樣。");
	say();
	UI_remove_answer("友誼會");
	goto labelFunc0439_00FB;
labelFunc0439_00F0:
	message("「在世界上開創自己的路，不要聽信別人叫你相信什麼，這永遠是最好的。你最好記住這點！」");
	say();
	UI_remove_answer("友誼會");
labelFunc0439_00FB:
	case "買東西" attend labelFunc0439_0132:
	if (!(var0001 == 0x0007)) goto labelFunc0439_0121;
	message("「如果你需要一艘船，我手裡有一艘好船的契約。你也會需要一個六分儀來幫助她航向正確的方向。」");
	say();
	UI_add_answer(["買船契約", "買六分儀"]);
	goto labelFunc0439_012B;
labelFunc0439_0121:
	message("「我的店現在打烊了。改天再來，我會很樂意為你服務，");
	message(var0002);
	message("。」");
	say();
labelFunc0439_012B:
	UI_remove_answer("買東西");
labelFunc0439_0132:
	case "買船契約" attend labelFunc0439_01B5:
	if (!gflags[0x00D2]) goto labelFunc0439_0147;
	message("「我相信我已經把『野獸號 (The Beast)』的契約賣給你了！它怎麼了？你弄丟那艘船了嗎？如果是這樣，那你必須去找另一個造船匠！」");
	say();
	goto labelFunc0439_01AE;
labelFunc0439_0147:
	message("「『野獸號』的船舶契約要八百枚金幣。你希望購買她嗎？」");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc0439_01AA;
	var0005 = UI_remove_party_items(0x0320, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0005) goto labelFunc0439_01A3;
	var0006 = UI_add_party_items(0x0001, 0x031D, 0x000F, 0xFE99, false);
	if (!var0006) goto labelFunc0439_019C;
	message("「這是你的契約，");
	message(var0002);
	message("。」");
	say();
	gflags[0x00D2] = true;
	goto labelFunc0439_01A0;
labelFunc0439_019C:
	message("「我會把契約給你，但你身上的東西太多，拿不下了！」");
	say();
labelFunc0439_01A0:
	goto labelFunc0439_01A7;
labelFunc0439_01A3:
	message("「你沒有足夠的金幣來買船！」");
	say();
labelFunc0439_01A7:
	goto labelFunc0439_01AE;
labelFunc0439_01AA:
	message("「如果你需要船，一定要回來這裡。」");
	say();
labelFunc0439_01AE:
	UI_remove_answer("買船契約");
labelFunc0439_01B5:
	case "買六分儀" attend labelFunc0439_0221:
	message("「一個六分儀要一百枚金幣。你希望買一個嗎？」");
	say();
	var0007 = Func090A();
	if (!var0007) goto labelFunc0439_0216;
	var0008 = UI_remove_party_items(0x0064, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0008) goto labelFunc0439_020F;
	var0009 = UI_add_party_items(0x0001, 0x028A, 0xFE99, 0xFE99, false);
	if (!var0009) goto labelFunc0439_0208;
	message("「這是你的六分儀。有了它，航向絕對不會偏。」");
	say();
	goto labelFunc0439_020C;
labelFunc0439_0208:
	message("「我會把六分儀給你，但你身上的東西太多，拿不下了。」");
	say();
labelFunc0439_020C:
	goto labelFunc0439_0213;
labelFunc0439_020F:
	message("「你沒有足夠的錢來買六分儀！」");
	say();
labelFunc0439_0213:
	goto labelFunc0439_021A;
labelFunc0439_0216:
	message("「如果你有需要六分儀，一定要回來。」");
	say();
labelFunc0439_021A:
	UI_remove_answer("買六分儀");
labelFunc0439_0221:
	case "皇冠寶石號" attend labelFunc0439_024D:
	if (!(!gflags[0x0086])) goto labelFunc0439_023B;
	message("「皇冠寶石號 (Crown Jewel) 來過不列顛城？最近絕對沒有。肯定沒有。我記得皇冠寶石號，它已經很久沒來不列顛城了。」");
	say();
	gflags[0x0086] = true;
	goto labelFunc0439_0246;
labelFunc0439_023B:
	message("「我之前告訴過你，皇冠寶石號很久沒來這裡了。」");
	say();
	UI_remove_answer("皇冠寶石號");
labelFunc0439_0246:
	UI_remove_answer("皇冠寶石號");
labelFunc0439_024D:
	case "告辭" attend labelFunc0439_0258:
	goto labelFunc0439_025B;
labelFunc0439_0258:
	goto labelFunc0439_0071;
labelFunc0439_025B:
	endconv;
	message("「祝你旅途順利。」*");
	say();
labelFunc0439_0260:
	if (!(event == 0x0000)) goto labelFunc0439_02E0;
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFFC7));
	var000A = UI_die_roll(0x0001, 0x0004);
	if (!(var0001 == 0x0007)) goto labelFunc0439_02DA;
	if (!(var000A == 0x0001)) goto labelFunc0439_029D;
	var000B = "@扳手在哪裡？@";
labelFunc0439_029D:
	if (!(var000A == 0x0002)) goto labelFunc0439_02AD;
	var000B = "@我的錘子在哪裡？@";
labelFunc0439_02AD:
	if (!(var000A == 0x0003)) goto labelFunc0439_02BD;
	var000B = "@啊，聞到海風的味道…@";
labelFunc0439_02BD:
	if (!(var000A == 0x0004)) goto labelFunc0439_02CD;
	var000B = "@需要船或六分儀？@";
labelFunc0439_02CD:
	UI_item_say(0xFFC7, var000B);
	goto labelFunc0439_02E0;
labelFunc0439_02DA:
	Func092E(0xFFC7);
labelFunc0439_02E0:
	return;
}


