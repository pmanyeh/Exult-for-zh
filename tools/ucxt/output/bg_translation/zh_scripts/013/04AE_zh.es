#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();
extern var Func090B 0x90B (var var0000);
extern void Func092E 0x92E (var var0000);

void Func04AE object#(0x4AE) ()
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

	if (!(event == 0x0001)) goto labelFunc04AE_02B1;
	UI_show_npc_face(0xFF52, 0x0000);
	var0000 = Func0909();
	var0001 = Func08F7(0xFF51);
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x0227])) goto labelFunc04AE_0043;
	message("「你看到一個拄著拐杖的乞丐。他的眼睛像鑽石一樣閃爍著純粹的苦澀。」");
	say();
	gflags[0x0227] = true;
	goto labelFunc04AE_004D;
labelFunc04AE_0043:
	message("「您好，");
	message(var0000);
	message("？」Komor 問道。");
	say();
labelFunc04AE_004D:
	converse attend labelFunc04AE_02A6;
	case "姓名" attend labelFunc04AE_0063:
	message("「我的名字是 Komor。」");
	say();
	UI_remove_answer("姓名");
labelFunc04AE_0063:
	case "職業" attend labelFunc04AE_00AA:
	message("「我是個舞者，");
	message(var0000);
	message("。」他無法板著臉，差點從拐杖上摔下來。*");
	say();
	UI_add_answer("乞丐");
	var0001 = Func08F7(0xFF51);
	if (!var0001) goto labelFunc04AE_00AA;
	UI_show_npc_face(0xFF51, 0x0000);
	message("「哈！哈！哈！哈！哈！哈！這真好笑，Komor！」*");
	say();
	UI_remove_npc_face(0xFF51);
	UI_show_npc_face(0xFF52, 0x0000);
labelFunc04AE_00AA:
	case "乞丐" attend labelFunc04AE_00D0:
	message("「我不一直都是乞丐。就像 Fenn 和 Merrick 一樣，我以前也是個農夫。但大環境變壞了，而 Paws 的情況總是更糟。」");
	say();
	UI_add_answer(["Fenn", "Merrick", "Paws", "施捨"]);
	UI_remove_answer("乞丐");
labelFunc04AE_00D0:
	case "Fenn" attend labelFunc04AE_011E:
	message("「Fenn 和我是好哥們，直到我們死的那一天都是。我們分享彼此廣大的財富。」*");
	say();
	UI_remove_answer("Fenn");
	UI_add_answer(["好哥們", "財富"]);
	var0001 = Func08F7(0xFF51);
	if (!var0001) goto labelFunc04AE_011E;
	UI_show_npc_face(0xFF51, 0x0000);
	message("「哈！哈！哈！哈！以你的機智，你應該登台表演！」*");
	say();
	UI_remove_npc_face(0xFF51);
	UI_show_npc_face(0xFF52, 0x0000);
labelFunc04AE_011E:
	case "好哥們" attend labelFunc04AE_0163:
	message("「Fenn 和我從我們還是小嬰兒的時候就是朋友了。」");
	say();
	var0001 = Func08F7(0xFF51);
	if (!var0001) goto labelFunc04AE_015C;
	message("「我敢打賭，你一定沒想到我們會落得這個下場。對吧，Fenn？」*");
	say();
	UI_show_npc_face(0xFF51, 0x0000);
	message("「做夢也想不到，Komor。*」");
	say();
	UI_remove_npc_face(0xFF51);
	UI_show_npc_face(0xFF52, 0x0000);
labelFunc04AE_015C:
	UI_remove_answer("好哥們");
labelFunc04AE_0163:
	case "財富" attend labelFunc04AE_0176:
	message("「是的，Fenn 和我分享我們所擁有的一切。總而言之，就是我們背上的衣服和喉嚨裡的痰！」");
	say();
	UI_remove_answer("財富");
labelFunc04AE_0176:
	case "Merrick" attend labelFunc04AE_0196:
	message("「他真是個超級大壞蛋。Merrick 背棄了我們，現在每天晚上都在溫暖舒適的床上度過。這比我們倆好一陣子所擁有的還要多。」");
	say();
	UI_add_answer(["背棄", "床"]);
	UI_remove_answer("Merrick");
labelFunc04AE_0196:
	case "Paws" attend labelFunc04AE_01A9:
	message("「真是個名副其實的仙境，不是嗎？」");
	say();
	UI_remove_answer("Paws");
labelFunc04AE_01A9:
	case "背棄" attend labelFunc04AE_01BC:
	message("「唯一比這種悲慘生活更糟糕的，就是讓 Merrick 到處嗅探並試圖招募我們！這個該死的寄生蟲！」");
	say();
	UI_remove_answer("背棄");
labelFunc04AE_01BC:
	case "床" attend labelFunc04AE_01DC:
	message("「Merrick 睡在友誼會經營的庇護所裡。他們也給他東西吃。他必須加入他們才會幫助他。」");
	say();
	UI_add_answer(["庇護所", "友誼會"]);
	UI_remove_answer("床");
labelFunc04AE_01DC:
	case "庇護所" attend labelFunc04AE_01EF:
	message("「庇護所？就是那棟充滿了阿諛奉承偽君子的大建築。你應該很容易就能找到！」");
	say();
	UI_remove_answer("庇護所");
labelFunc04AE_01EF:
	case "友誼會" attend labelFunc04AE_0202:
	message("「我們本來可以加入的，但他們是一群令人厭惡的傢伙。任何人表現得這麼該死的好，肯定不懷好意。為了生存，我們也有不願妥協的地方。」");
	say();
	UI_remove_answer("友誼會");
labelFunc04AE_0202:
	case "施捨" attend labelFunc04AE_0298:
	message("「你願意給我一點錢嗎？」");
	say();
	if (!Func090A()) goto labelFunc04AE_028D;
	message("多少？");
	say();
	UI_push_answers();
	var0002 = Func090B(["0", "1", "2", "3", "4", "5"]);
	var0003 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var0003 >= var0002)) goto labelFunc04AE_0282;
	var0004 = UI_remove_party_items(var0002, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0004) goto labelFunc04AE_027B;
	message("「謝謝你，");
	message(var0000);
	message("。」");
	say();
	goto labelFunc04AE_027F;
labelFunc04AE_027B:
	message("「出於某種奇怪的原因，我無法拿走你的錢。」");
	say();
labelFunc04AE_027F:
	goto labelFunc04AE_0286;
labelFunc04AE_0282:
	message("「哼！你沒有那麼多金幣！你幾乎和我一樣窮！」");
	say();
labelFunc04AE_0286:
	UI_pop_answers();
	goto labelFunc04AE_0291;
labelFunc04AE_028D:
	message("「好吧。去過你平靜快樂的生活吧。」");
	say();
labelFunc04AE_0291:
	UI_remove_answer("施捨");
labelFunc04AE_0298:
	case "告辭" attend labelFunc04AE_02A3:
	goto labelFunc04AE_02A6;
labelFunc04AE_02A3:
	goto labelFunc04AE_004D;
labelFunc04AE_02A6:
	endconv;
	message("「挺起您的胸膛吧！");
	message(var0000);
	message("。」*");
	say();
labelFunc04AE_02B1:
	if (!(event == 0x0000)) goto labelFunc04AE_0338;
	var0005 = UI_part_of_day();
	var0006 = UI_get_schedule_type(UI_get_npc_object(0xFF52));
	var0007 = UI_die_roll(0x0001, 0x0004);
	if (!(var0006 == 0x000B)) goto labelFunc04AE_0332;
	if (!(var0007 == 0x0001)) goto labelFunc04AE_02F5;
	var0008 = "@給可憐人一點零錢吧？@";
labelFunc04AE_02F5:
	if (!(var0007 == 0x0002)) goto labelFunc04AE_0305;
	var0008 = "@好心人，施捨一點吧？@";
labelFunc04AE_0305:
	if (!(var0007 == 0x0003)) goto labelFunc04AE_0315;
	var0008 = "@仁慈可能會改變你的運氣！@";
labelFunc04AE_0315:
	if (!(var0007 == 0x0004)) goto labelFunc04AE_0325;
	var0008 = "@朋友，有錢給我嗎？@";
labelFunc04AE_0325:
	UI_item_say(0xFF52, var0008);
	goto labelFunc04AE_0338;
labelFunc04AE_0332:
	Func092E(0xFF52);
labelFunc04AE_0338:
	return;
}


