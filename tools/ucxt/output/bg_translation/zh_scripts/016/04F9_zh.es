#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern void Func092E 0x92E (var var0000);

void Func04F9 object#(0x4F9) ()
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
	var var000F;
	var var0010;
	var var0011;
	var var0012;
	var var0013;

	if (!(event == 0x0001)) goto labelFunc04F9_03C3;
	UI_show_npc_face(0xFF07, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x01F9])) goto labelFunc04F9_0044;
	message("你看到一位看起來很博學的男人，帶著友善的表情。");
	say();
	gflags[0x01F9] = true;
	gflags[0x01F7] = true;
	goto labelFunc04F9_005B;
labelFunc04F9_0044:
	message("「向你致敬，");
	message(var0000);
	message("。」");
	say();
	if (!gflags[0x01F6]) goto labelFunc04F9_005B;
	UI_add_answer("東北海域");
labelFunc04F9_005B:
	if (!gflags[0x01E3]) goto labelFunc04F9_0068;
	UI_add_answer("Zelda 的回應");
labelFunc04F9_0068:
	converse attend labelFunc04F9_03C2;
	case "姓名" attend labelFunc04F9_008B:
	message("「你可以叫我 Nelson 。」");
	say();
	UI_remove_answer("姓名");
	if (!gflags[0x01F6]) goto labelFunc04F9_008B;
	UI_add_answer("東北海域");
labelFunc04F9_008B:
	case "職業" attend labelFunc04F9_00A4:
	message("「我是 Moonglow 這裡智者書庫的負責人，但是，」他靠近你說，「我的助手 Zelda 做了大部分的工作。」");
	say();
	UI_add_answer(["Moonglow", "Zelda"]);
labelFunc04F9_00A4:
	case "Zelda" attend labelFunc04F9_00C4:
	message("「她是一位出色的助手。智者書庫從未運作得如此之好。然而，我認為她有點太嚴厲了，而且，」他再次靠近，「我覺得她相當美麗。」");
	say();
	UI_add_answer(["嚴厲", "美麗"]);
	UI_remove_answer("Zelda");
labelFunc04F9_00C4:
	case "東北海域" attend labelFunc04F9_00D7:
	message("「我聽說過關於一座島嶼的傳聞，但恐怕除此之外我一無所知。你可能想和 Jillian 談談——她應該對那片區域略知一二。」");
	say();
	UI_remove_answer("東北海域");
labelFunc04F9_00D7:
	case "嚴厲" attend labelFunc04F9_00EA:
	message("「她投入了非凡的時間和精力，以確保這座建築物內的活動順利進行。而且，」他補充道，「如果沒有，她會認為是衝著她來的！」");
	say();
	UI_remove_answer("嚴厲");
labelFunc04F9_00EA:
	case "美麗" attend labelFunc04F9_010E:
	message("「你不同意嗎？每當她美麗的倩影經過時，我都會臉紅。但是！」他舉起食指，「我怕她對我沒有同樣的吸引力。而且她太嚴肅了，讓我不敢隨意求婚。」");
	say();
	gflags[0x01DC] = true;
	if (!gflags[0x01DA]) goto labelFunc04F9_0107;
	UI_add_answer("Zelda 的感覺");
labelFunc04F9_0107:
	UI_remove_answer("美麗");
labelFunc04F9_010E:
	case "Moonglow" attend labelFunc04F9_0128:
	message("「我喜歡這個島和這裡的人民。主要是人民。」");
	say();
	UI_add_answer("人");
	UI_remove_answer("Moonglow");
labelFunc04F9_0128:
	case "人" attend labelFunc04F9_015D:
	message("「你見過我的雙胞胎兄弟嗎？他是這裡天文台的負責人。在智者書庫的某個地方，你可以找到 Mariah。可悲的是，她這裡不太好。」他指了指自己的頭。~~「賢者 Jillian 也在這裡的智者書庫學習。如果要打聽 Moonglow 的其他居民，最好的對象就是『親切惡棍酒館』的酒保。Phearcy 幾乎認識我們島上所有人。~~「喔，你可別忘了 Penumbra 的傳說。那是兩百年前，她讓自己陷入沉睡。現在我回想起來，");
	message(var0000);
	message("，你就是她預言會喚醒她的人。~~「最好快點，");
	message(var0001);
	message("，」他輕笑著。");
	say();
	UI_remove_answer("人");
	UI_add_answer(["雙胞胎", "Mariah", "Jillian", "Phearcy", "Penumbra"]);
labelFunc04F9_015D:
	case "雙胞胎" attend labelFunc04F9_0170:
	message("「他的名字是 Brion 。人們常把我們搞混，但我認為我們一點也不像——他獨佔了所有的外表『和』頭腦！」");
	say();
	UI_remove_answer("雙胞胎");
labelFunc04F9_0170:
	case "Mariah" attend labelFunc04F9_0183:
	message("「她曾經是一名熟練的法師，但自從巫師們開始失去他們的，呃，能力後，她也跟著失去了。」");
	say();
	UI_remove_answer("Mariah");
labelFunc04F9_0183:
	case "Jillian" attend labelFunc04F9_0196:
	message("「她很少有時間接待訪客，但我知道她偶爾會收學生。」");
	say();
	UI_remove_answer("Jillian");
labelFunc04F9_0196:
	case "Phearcy" attend labelFunc04F9_01A9:
	message("「那個人總是能跟上他的政治，或者更確切地說，是他的八卦，」他笑著說。「如果你想了解 Moonglow 的某個居民，就去拜訪他吧。」");
	say();
	UI_remove_answer("Phearcy");
labelFunc04F9_01A9:
	case "Penumbra" attend labelFunc04F9_01BC:
	message("「有趣的是，從來沒有人發現如何進入她的房子。我相信門上那些神秘的標誌需要有人將特定的物品放在牌匾旁邊。」");
	say();
	UI_remove_answer("Penumbra");
labelFunc04F9_01BC:
	case "Zelda 的回應" attend labelFunc04F9_01D5:
	message("他笑得很開心。「那真的是她的回應嗎？我真是高興極了！謝謝你，");
	message(var0000);
	message("，帶來這個令人愉快的信息。」");
	say();
	UI_remove_answer("Zelda 的回應");
labelFunc04F9_01D5:
	case "Zelda 的感覺" attend labelFunc04F9_01E8:
	message("「喔。喔，好吧，」他聳聳肩，試圖裝作若無其事的樣子。「反正她也不是真的很重要。」");
	say();
	UI_remove_answer("Zelda 的感覺");
labelFunc04F9_01E8:
	case "告辭" attend labelFunc04F9_022E:
	if (!(gflags[0x01E4] && (gflags[0x01E5] && (gflags[0x01E6] && gflags[0x01E7])))) goto labelFunc04F9_0210;
	message("「祝你有個美好的一天，");
	message(var0001);
	message("。你當然可以在智者書庫隨意行動。」*");
	say();
	abort;
	goto labelFunc04F9_022E;
labelFunc04F9_0210:
	message("「你當然可以在這棟建築物裡隨意行動。但首先，」他笑著說，「讓我給你看看我的……」");
	say();
	UI_push_answers();
	UI_add_answer(["書架", "書籤", "筆筒", "書", "再看看"]);
labelFunc04F9_022E:
	case "書架" attend labelFunc04F9_0262:
	var0002 = UI_find_nearest(0xFE9C, 0x02B9, 0xFFFF);
	if (!var0002) goto labelFunc04F9_0253;
	message("「這個實心黃銅書架配有相配的懸掛式燭台，適合在深夜探索文學。這是我自己發明的。」");
	say();
	goto labelFunc04F9_0257;
labelFunc04F9_0253:
	message("\"'Twas just here...\" he scratches his chin. \"Oh well, never mind.\"");
	say();
labelFunc04F9_0257:
	UI_remove_answer("書架");
	gflags[0x01E4] = true;
labelFunc04F9_0262:
	case "書籤" attend labelFunc04F9_02BC:
	var0003 = false;
	var0004 = UI_find_nearby(item, 0x02A3, 0x0014, 0x0000);
	enum();
labelFunc04F9_0280:
	for (var0007 in var0004 with var0005 to var0006) attend labelFunc04F9_02A0;
	if (!(UI_get_item_frame(var0007) == 0x0004)) goto labelFunc04F9_029D;
	var0003 = true;
labelFunc04F9_029D:
	goto labelFunc04F9_0280;
labelFunc04F9_02A0:
	if (!var0003) goto labelFunc04F9_02AD;
	message("「這個，」他說著，拿著一張楓葉形狀的純金薄片，「是我在拍賣會上以半價買到的。」");
	say();
	goto labelFunc04F9_02B1;
labelFunc04F9_02AD:
	message("他看起來很難過。「我就知道總有一天會被偷，」他生氣地說。~~「我早該知道不該把它拿給每個來訪的人看。」");
	say();
labelFunc04F9_02B1:
	UI_remove_answer("書籤");
	gflags[0x01E5] = true;
labelFunc04F9_02BC:
	case "筆筒" attend labelFunc04F9_0359:
	var0008 = false;
	var0009 = UI_find_nearby(item, 0x02A3, 0x0014, 0x0000);
	enum();
labelFunc04F9_02DA:
	for (var0007 in var0009 with var000A to var000B) attend labelFunc04F9_02FA;
	if (!(UI_get_item_frame(var0007) == 0x0003)) goto labelFunc04F9_02F7;
	var0008 = true;
labelFunc04F9_02F7:
	goto labelFunc04F9_02DA;
labelFunc04F9_02FA:
	var000C = false;
	var000D = UI_find_nearby(item, 0x02A3, 0x0014, 0x0000);
	enum();
labelFunc04F9_0310:
	for (var0007 in var000D with var000E to var000F) attend labelFunc04F9_0330;
	if (!(UI_get_item_frame(var0007) == 0x0005)) goto labelFunc04F9_032D;
	var000C = true;
labelFunc04F9_032D:
	goto labelFunc04F9_0310;
labelFunc04F9_0330:
	if (!var0008) goto labelFunc04F9_034A;
	if (!var000C) goto labelFunc04F9_0343;
	message("他給你展示了一個蛇形的橡木筆筒和它相配的卷軸開啟器。「這是我在旅行經過——你能猜到的——巨蛇堡（Serpent's Hold）時買的。」");
	say();
	goto labelFunc04F9_0347;
labelFunc04F9_0343:
	message("他給你展示了一個蛇形的橡木筆筒。「這是我在旅行經過——你能猜到的——巨蛇堡時買的。但是，」他顯得很困惑，「我敢發誓相配的拆信刀剛才也在這裡。真奇怪。」");
	say();
labelFunc04F9_0347:
	goto labelFunc04F9_034E;
labelFunc04F9_034A:
	message("「筆筒不見了？」他驚呼。「那……」他似乎在找什麼東西。~~「相配的卷軸開啟器也不見了！」");
	say();
labelFunc04F9_034E:
	UI_remove_answer("筆筒");
	gflags[0x01E6] = true;
labelFunc04F9_0359:
	case "書" attend labelFunc04F9_03B3:
	var0010 = false;
	var0011 = UI_find_nearby(item, 0x02A3, 0x0014, 0x0000);
	enum();
labelFunc04F9_0377:
	for (var0010 in var0009 with var0012 to var0013) attend labelFunc04F9_0397;
	if (!(UI_get_item_quality(var0010) == 0x0004)) goto labelFunc04F9_0394;
	var0010 = true;
labelFunc04F9_0394:
	goto labelFunc04F9_0377;
labelFunc04F9_0397:
	if (!var0010) goto labelFunc04F9_03A4;
	message("他小心翼翼地拿出一本皮裝的厚書。他從長袍中掏出手帕，一絲不苟地擦去灰塵。~~「這是不列顛王親自送給我的。看，這是初版。」~~他小心翼翼地放在你手掌上的那本書非常古老，書名的金箔幾乎已經被完全磨掉。將書本翻正，你可以讀到書名：《異鄉異客（Stranger in a Strange Land）》。");
	say();
	goto labelFunc04F9_03A8;
labelFunc04F9_03A4:
	message("「不在這裡……喔好吧，Zelda 一定把它放回書架上了。」他嘆了口氣。");
	say();
labelFunc04F9_03A8:
	UI_remove_answer("書");
	gflags[0x01E7] = true;
labelFunc04F9_03B3:
	case "再看看" attend labelFunc04F9_03BF:
	UI_pop_answers();
labelFunc04F9_03BF:
	goto labelFunc04F9_0068;
labelFunc04F9_03C2:
	endconv;
labelFunc04F9_03C3:
	if (!(event == 0x0000)) goto labelFunc04F9_03D1;
	Func092E(0xFF07);
labelFunc04F9_03D1:
	return;
}


