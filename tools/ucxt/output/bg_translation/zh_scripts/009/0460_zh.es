#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);

void Func0460 object#(0x460) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0000)) goto labelFunc0460_0009;
	abort;
labelFunc0460_0009:
	UI_show_npc_face(0xFFA0, 0x0000);
	var0000 = Func0909();
	UI_add_answer(["姓名", "職業", "告辭"]);
	var0001 = Func08F7(0xFFAD);
	if (!var0001) goto labelFunc0460_003F;
	UI_add_answer("Margareta");
labelFunc0460_003F:
	if (!gflags[0x01D2]) goto labelFunc0460_004C;
	UI_add_answer("沙漏");
labelFunc0460_004C:
	if (!(!gflags[0x011B])) goto labelFunc0460_005E;
	message("你看到一個有著深情雙眼、膚色黝黑的吉普賽人，穿著色彩鮮豔的衣服。他看起來彷彿把整個世界的重擔都扛在肩上。");
	say();
	gflags[0x011B] = true;
	goto labelFunc0460_0062;
labelFunc0460_005E:
	message("「再次問候你，」Jergi 說著鞠了個躬，用手做了一個旋轉的姿勢。");
	say();
labelFunc0460_0062:
	converse attend labelFunc0460_01B4;
	case "姓名" attend labelFunc0460_0078:
	message("「我是 Jergi。很高興認識你。」");
	say();
	UI_remove_answer("姓名");
labelFunc0460_0078:
	case "職業" attend labelFunc0460_008B:
	message("「我是吉普賽之王。」");
	say();
	UI_add_answer("吉普賽人");
labelFunc0460_008B:
	case "吉普賽人" attend labelFunc0460_00AB:
	message("「我的人民在這個世界上，幾乎已經完全滅絕了。既然…我是他們的領袖，我必將他們的福祉，視為我唯一的責任。很快，將決定我們是否要離開 Minoc。」");
	say();
	UI_remove_answer("吉普賽人");
	UI_add_answer(["滅絕", "Minoc"]);
labelFunc0460_00AB:
	case "滅絕" attend labelFunc0460_00BE:
	message("「我們吉普賽人是為了流浪而生的民族。但…歡迎我們的地方越來越少了。我們是自古 Sosaria 時代以來，一直困擾我們族群的古老仇恨的受害者。」");
	say();
	UI_remove_answer("滅絕");
labelFunc0460_00BE:
	case "Minoc" attend labelFunc0460_00DE:
	message("「我們以為會被接受，所以來到這裡。而且，很長一段時間以來，似乎的確如此。但…這起野蠻的謀殺案發生之後，看起來…是我們再次流浪的時候了。」");
	say();
	UI_remove_answer("Minoc");
	UI_add_answer(["接受", "謀殺案"]);
labelFunc0460_00DE:
	case "接受" attend labelFunc0460_00F1:
	message("「我們總是受到他人的偏見！我們被稱為小偷或更糟的稱呼！但我們是一個只希望演奏音樂、跳舞、並和平生活的民族。我以為這裡的人理解這一點。」");
	say();
	UI_remove_answer("接受");
labelFunc0460_00F1:
	case "謀殺案" attend labelFunc0460_0114:
	message("「Frederico 是我唯一的兄弟，除了 Frederico 本人之外，沒有人比我更愛 Tania。發生在他們身上的事令人難以啟齒。我希望我能告訴你更多。如果你願意，你可以和 Sasha 談談，但只能簡短地談。現在是他哀悼的時候。」");
	say();
	UI_remove_answer("謀殺案");
	UI_add_answer(["Frederico", "Tania", "Sasha"]);
labelFunc0460_0114:
	case "Frederico" attend labelFunc0460_0127:
	message("「有些人覺得…我的兄弟 Frederico 是個嚴苛無情的人，但咱們這幫懂他的人都瞧得明白——他呀，不過就是被那股支配著全天下吉普賽人的驕傲與激情給推著走罷了。」");
	say();
	UI_remove_answer("Frederico");
labelFunc0460_0127:
	case "Tania" attend labelFunc0460_013A:
	message("「她是我見過最美麗的女人。我兄弟和我兩人都愛上了她。我們都試圖贏得她的芳心。我失敗了，並以為我會在孤獨中度過餘生。直到去年，我的妻子 Margareta 和我結婚，我暗自破碎的心才得以修復。」");
	say();
	UI_remove_answer("Tania");
labelFunc0460_013A:
	case "Sasha" attend labelFunc0460_015A:
	message("「他是 Frederico 和 Tania 的兒子。他為了解更多關於友誼會的事，離開我們了。當然，他對發生的事情感到自責……」");
	say();
	UI_remove_answer("Sasha");
	UI_add_answer(["自責", "友誼會"]);
labelFunc0460_015A:
	case "自責" attend labelFunc0460_016D:
	message("「我們不怪 Sasha 發生了什麼事。我們不會懲罰他。」");
	say();
	UI_remove_answer("自責");
labelFunc0460_016D:
	case "友誼會" attend labelFunc0460_0180:
	message("「Sasha 必須決定他是想留在他的族人身邊，還是回到友誼會。我相信他會做出正確的選擇。」");
	say();
	UI_remove_answer("友誼會");
labelFunc0460_0180:
	case "Margareta" attend labelFunc0460_0193:
	message("「我的妻子是個有智慧的女人，她有一些預見未來的天賦。你應該跟她談談。」");
	say();
	UI_remove_answer("Margareta");
labelFunc0460_0193:
	case "沙漏" attend labelFunc0460_01A6:
	message("「我不知道你在說什麼。我對一位名叫 Nicodemus 的法師，或是他的沙漏一無所知。要小心——這些天法師們都相當瘋狂！」");
	say();
	UI_remove_answer("沙漏");
labelFunc0460_01A6:
	case "告辭" attend labelFunc0460_01B1:
	goto labelFunc0460_01B4;
labelFunc0460_01B1:
	goto labelFunc0460_0062;
labelFunc0460_01B4:
	endconv;
	message("「願你的努力獲得許多好運。」*");
	say();
	return;
}


