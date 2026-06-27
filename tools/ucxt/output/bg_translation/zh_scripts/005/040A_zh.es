#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func093C 0x93C (var var0000, var var0001);
extern var Func08F7 0x8F7 (var var0000);
extern void Func08F2 0x8F2 (var var0000, var var0001);
extern void Func08F4 0x8F4 (var var0000, var var0001);
extern var Func08F5 0x8F5 (var var0000, var var0001);
extern var Func090A 0x90A ();
extern var Func090B 0x90B (var var0000);
extern void Func08F3 0x8F3 (var var0000);

void Func040A object#(0x40A) ()
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
	var var0014;
	var var0015;
	var var0016;
	var var0017;
	var var0018;
	var var0019;
	var var001A;
	var var001B;
	var var001C;
	var var001D;
	var var001E;
	var var001F;
	var var0020;
	var var0021;
	var var0022;
	var var0023;
	var var0024;
	var var0025;
	var var0026;
	var var0027;
	var var0028;
	var var0029;
	var var002A;
	var talked_book;

	if (!(event == 0x0001)) goto labelFunc040A_0A8C;
	talked_book = false;
	UI_show_npc_face(0xFFF6, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = UI_get_party_list();
	var0003 = Func093C(UI_get_npc_object(0xFE9C), var0002);
	var0004 = UI_get_npc_object(0xFFF6);
	var0005 = UI_get_npc_object(0xFFFA);
	if (!(UI_is_pc_female() == 0x0000)) goto labelFunc040A_005D;
	var0006 = "Abraham";
	goto labelFunc040A_0063;
labelFunc040A_005D:
	var0006 = "Elizabeth";
labelFunc040A_0063:
	var0007 = UI_get_array_size(var0002);
	var0008 = "";
	if (!(var0007 > 0x0001)) goto labelFunc040A_0083;
	var0008 = "s";
labelFunc040A_0083:
	var0009 = 0x0000;
	var000A = false;
	var000B = false;
	var000C = false;
	var000D = false;
	var000E = false;
	var000F = false;
	var0010 = false;
	var0011 = false;
	var0012 = false;
	var0013 = false;
	var0014 = false;
	var0015 = false;
	var0016 = false;
	var0017 = UI_find_nearby(var0004, 0x0211, 0x000D, 0x0000);
	var0018 = UI_find_nearby(var0004, 0x01FE, 0x000D, 0x0000);
	var0019 = UI_find_nearby(var0004, 0x0214, 0x000D, 0x0000);
	var001A = UI_find_nearby(var0004, 0x01EE, 0x0014, 0x0000);
	var001B = false;
	if (!(Func08F7(0x00E5) || Func08F7(0x00E4))) goto labelFunc040A_0121;
	var001B = true;
labelFunc040A_0121:
	var001C = "英勇的戰士";
	if (!gflags[0x015E]) goto labelFunc040A_0133;
	var001C = "高貴的附魔師";
labelFunc040A_0133:
	if (!((!gflags[0x001D]) && gflags[0x015D])) goto labelFunc040A_0148;
	Func08F2(var0000, var0006);
	abort;
labelFunc040A_0148:
	if (!(var0004 in var0002)) goto labelFunc040A_01AE;
	Func08F4(var0000, var0007);
	if (!var001B) goto labelFunc040A_0168;
	UI_add_answer("隱士");
labelFunc040A_0168:
	if (!var0017) goto labelFunc040A_0175;
	UI_add_answer("黏怪");
labelFunc040A_0175:
	if (!var0018) goto labelFunc040A_0182;
	UI_add_answer("狐狸");
labelFunc040A_0182:
	if (!var0019) goto labelFunc040A_018F;
	UI_add_answer("鳥身女妖");
labelFunc040A_018F:
	if (!var001A) goto labelFunc040A_01A0;
	message("「我們不必擔心這些蜜蜂，只要我們有幾支我可靠的箭。」");
	say();
	UI_add_answer("蜜蜂");
labelFunc040A_01A0:
	UI_add_answer("友誼會");
	var0013 = true;
	goto labelFunc040A_01B8;
labelFunc040A_01AE:
	message("「向你致意，旅行者");
	message(var0008);
	message("。」");
	say();
labelFunc040A_01B8:
	if (!gflags[0x015D]) goto labelFunc040A_01C4;
	var001C = "卑劣的騙子";
labelFunc040A_01C4:
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(gflags[0x001D] && (var0007 == 0x0001))) goto labelFunc040A_01E6;
	gflags[0x015F] = true;
labelFunc040A_01E6:
	if (!(gflags[0x0162] && (!(var0004 in var0002)))) goto labelFunc040A_01FC;
	UI_add_answer(var0006);
labelFunc040A_01FC:
	if (!((!gflags[0x015F]) && ((var0007 > 0x0001) && gflags[0x001D]))) goto labelFunc040A_0216;
	UI_add_answer("介紹");
labelFunc040A_0216:
	if (gflags[0x0345] && (UI_count_objects(0xFE9B, 0x0282, 149, 0) == 0) && !talked_book) {
		UI_add_answer("古文譯本");
	}
	converse attend labelFunc040A_0A8B;
	var0002 = UI_get_party_list();
	var001D = "";
	case "古文譯本" attend labelFunc040A_TransBook:
	message("「哼，友誼會的傢伙們總是滿口謊言，但那些刻在石頭上的古老盧恩文卻不會騙人。」");
	say();
	message("「如果這本寶典能幫我們更快找到被隱藏的真相，或者揭露那些偽君子的陰謀，那它就是我們最好的武器。」");
	say();
	message("「讓我看看這玩意兒怎麼用。」");
	say();
	talked_book = true;
	UI_remove_answer("古文譯本");
labelFunc040A_TransBook:
	case "姓名" attend labelFunc040A_0277:
	UI_remove_answer("姓名");
	if (!(gflags[0x001D] == true)) goto labelFunc040A_024A;
	message("「我是 Tseramed。一名『遊俠』，而你是");
	message(var001C);
	message("。」");
	say();
	goto labelFunc040A_0277;
labelFunc040A_024A:
	message("「我叫 Tseramed 。你們是友誼會成員嗎？你們叫什麼名字？」");
	say();
	UI_push_answers();
	var0009 = (var0009 + 0x0001);
	UI_add_answer([var0000, "友誼會"]);
	if (!(!gflags[0x0161])) goto labelFunc040A_0277;
	UI_add_answer("聖者");
labelFunc040A_0277:
	case "聖者" attend labelFunc040A_028E:
	UI_remove_answer("聖者");
	gflags[0x0161] = true;
	message("「聖者！這真是個奇妙的機緣。告訴我，聖者，你的名字是什麼？」");
	say();
labelFunc040A_028E:
	case var0000 attend labelFunc040A_02D9:
	UI_remove_answer(var0000);
	gflags[0x001D] = true;
	message("「幸會了，");
	message(var0000);
	message("」");
	say();
	if (!gflags[0x0161]) goto labelFunc040A_02B5;
	message("你的舉止很高貴。");
	say();
labelFunc040A_02B5:
	if (!(var0007 == 0x0001)) goto labelFunc040A_02C3;
	gflags[0x015F] = true;
labelFunc040A_02C3:
	UI_pop_answers();
	if (!(!gflags[0x015F])) goto labelFunc040A_02D9;
	message("也許你可以向我介紹你的同伴們？」");
	say();
	UI_add_answer("介紹");
labelFunc040A_02D9:
	case "友誼會" attend labelFunc040A_0328:
	UI_remove_answer("友誼會");
	if (!gflags[0x001D]) goto labelFunc040A_0317;
	if (!((var0004 in var0002) || gflags[0x0162])) goto labelFunc040A_0310;
	message("「我不信任友誼會，尤其是");
	message(var0006);
	message("。」");
	say();
	UI_add_answer(var0006);
	goto labelFunc040A_0314;
labelFunc040A_0310:
	message("「我對友誼會沒有好感。等我對你了解多一點時，我們再來談這個。」");
	say();
labelFunc040A_0314:
	goto labelFunc040A_0328;
labelFunc040A_0317:
	message("「是的。也許我正在對傑出的");
	message(var0006);
	message("？」");
	say();
	UI_add_answer(var0006);
labelFunc040A_0328:
	case var0006 attend labelFunc040A_03AC:
	UI_remove_answer(var0006);
	if (!gflags[0x001D]) goto labelFunc040A_037A;
	message("「不久前，友誼會開始在整個不列顛尼亞擴展其影響力。");
	say();
	message("「在他們早期，他們吸引了許多聰明熱情的年輕人，其中就包括我的愛人， M 女士。");
	say();
	message("像她這麼聰明的女人，難免會在他們的隊伍中晉升。她的直屬上司是");
	message(var0006);
	message(".");
	say();
	message("一個黑暗的夜晚，她病得很重。根據我的朋友們所說，");
	message(var0006);
	message(" 禁止她去看當地的治療師。等我得知此事時，她已經過世了。");
	say();
	message("她現在長眠在 Yew 的墓地裡，願她安息。我在這片土地上到處尋找");
	message(var0006);
	message("，但從未找到我的獵物。事實上，似乎每次我接近我的獵物時，他們就已經消失了！我的搜尋將永遠不會真正結束。」");
	say();
	UI_remove_answer(var0006);
	UI_add_answer(["Yew", "M 女士"]);
	goto labelFunc040A_03AC;
labelFunc040A_037A:
	UI_pop_answers();
	gflags[0x015D] = true;
	var001E = "";
	if (!gflags[0x0161]) goto labelFunc040A_0394;
	var001E = "你玷污了聖者的頭銜！";
labelFunc040A_0394:
	message("「無賴，");
	message(var001E);
	message("我還沒忘記你的惡行，以及隨之而來的邪惡罪行。");
	say();
	message("噢，黑如瀝青的靈魂！」");
	say();
	Func08F2(var0000, var0006);
	abort;
labelFunc040A_03AC:
	case "M 女士" attend labelFunc040A_03BF:
	UI_remove_answer("M 女士");
	message("「青春永遠屬於她。」");
	say();
labelFunc040A_03BF:
	case "職業" attend labelFunc040A_041B:
	if (!(!var000A)) goto labelFunc040A_0409;
	var000A = true;
	if (!(var0004 in var0002)) goto labelFunc040A_03F0;
	message("「我與你同行，");
	message(var001C);
	message("，用我在森林裡習得的技能來幫助你。」");
	say();
	UI_add_answer("森林");
	goto labelFunc040A_0406;
labelFunc040A_03F0:
	message("「在 Yew，我只是個卑微的樵夫。我靠森林維生，並在它的深處尋找知識。");
	say();
	message("我已經探索了這整個區域。」");
	say();
	UI_add_answer("知識");
	UI_add_answer("森林");
labelFunc040A_0406:
	goto labelFunc040A_041B;
labelFunc040A_0409:
	message("「正如我所說，我的叢林技能涵蓋了這整片森林，甚至包括山裡的洞穴。」");
	say();
	UI_add_answer("森林");
	UI_add_answer("洞穴");
labelFunc040A_041B:
	case "介紹" attend labelFunc040A_0436:
	var0003 = Func08F5(var0002, var0003);
	UI_remove_answer("介紹");
labelFunc040A_0436:
	if (!(gflags[0x001D] && (!var0013))) goto labelFunc040A_0462;
	if (!((var0004 in var0002) || (UI_get_array_size(var0003) == 0x0000))) goto labelFunc040A_0462;
	UI_add_answer("友誼會");
	var0013 = true;
labelFunc040A_0462:
	var001F = 0x0000;
	case "森林" attend labelFunc040A_0476:
	var001F = 0x0001;
labelFunc040A_0476:
	case "洞穴", "秘密地點" attend labelFunc040A_0487:
	var001F = 0x0002;
labelFunc040A_0487:
	case "知識" attend labelFunc040A_0495:
	var001F = 0x0003;
labelFunc040A_0495:
	if (!(var001F > 0x0000)) goto labelFunc040A_04E2;
	if (!((!gflags[0x015F]) || (!gflags[0x001D]))) goto labelFunc040A_04E2;
	var0020 = ["我們可能要在介紹完之後再多聊...", "也許先自我介紹一下比較好。"];
	var0021 = var0020[UI_die_roll(0x0001, UI_get_array_size(var0020))];
	message("「");
	message(var0021);
	message("」");
	say();
	var001F = 0x0000;
	UI_add_answer("介紹");
labelFunc040A_04E2:
	if (!(var001F == 0x0001)) goto labelFunc040A_0501;
	var000D = true;
	message("「森林是個狂野的地方，但近年來稍微被馴服了些。在裡面，");
	message(var001C);
	message("，你可能仍然會發現只在傳說中被提及的生物。」");
	say();
	UI_add_answer("生物");
labelFunc040A_0501:
	if (!(var001F == 0x0002)) goto labelFunc040A_0527;
	var000C = true;
	message("「在我的小屋北邊，有一個通往山中的深孔。裡面住著體型堪比綿羊或獵犬的蜜蜂。牠們飛翔時翅膀會捲起樹葉，發出的嗡嗡聲會讓人恐懼地逃跑。」");
	say();
	message("「有些人進去後就再也沒有回來過。也許他們還在那裡……死亡是貪婪的，並為那些有同樣意圖的人準備了命運。」");
	say();
	UI_add_answer(["群山", "蜜蜂", "死亡"]);
labelFunc040A_0527:
	if (!(var001F == 0x0003)) goto labelFunc040A_054C;
	UI_remove_answer("知識");
	message("「我在群山旁住了許多年。我的足跡踏過了無數的地方。我曾深入黑暗的沼澤，也曾攀上群山的高處。我了解森林裡的樹木，也知道地底下的秘密地點。」");
	say();
	UI_add_answer(["群山", "沼澤", "秘密地點"]);
labelFunc040A_054C:
	case "沼澤" attend labelFunc040A_057A:
	UI_remove_answer("沼澤");
	message("「在山嘴的北邊是一片茂密的沼澤。致命的史萊姆潛伏在裡面，守護著一口清澈的泉水。周圍的水都又臭又令人作嘔。");
	say();
	message("這種惡臭的混合物會滲入你的靴子，帶來噁心和頭暈。明智的旅行者在這種地方會穿著沼澤靴。");
	say();
	message("這片泥沼向東、北和西排乾。向西流的河水穿過 Yew ，經過修道院。其他的都向北彎入海中。」");
	say();
	UI_add_answer(["史萊姆", "Yew", "修道院", "海"]);
labelFunc040A_057A:
	case "修道院" attend labelFunc040A_059A:
	UI_remove_answer("修道院");
	message("「人神修道院(Empath Abbey) 是它的全名，");
	message(var0001);
	message("。他們在那裡實踐古老的技藝，最古老的是烈酒的發酵和蒸餾。在 Yew ，人們對他們產品的需求量很大。」");
	say();
	UI_add_answer("Yew");
labelFunc040A_059A:
	case "Yew" attend labelFunc040A_05B1:
	UI_remove_answer("Yew");
	message("「隱居性格的居民在那裡感到平靜。它的建築位於森林之中，許多都被植物覆蓋，看起來就像是森林的一部分。」");
	say();
	message("「在我的住處東邊，樹林很茂密，但擅長叢林技能的旅行者可能會在那裡找到房子。」");
	say();
labelFunc040A_05B1:
	case "海" attend labelFunc040A_05E0:
	UI_remove_answer("海");
	message("「海！它的波浪能撫平煩躁的心情，但它的狂怒也是無與倫比的。問問那些靠海維生的人就知道了！能住在海邊並收穫它的大自然餽贈，是一份禮物。可以的話我也會去釣釣魚。");
	say();
	message("你會不會好奇海裡藏著什麼謎團？」");
	say();
	if (!Func090A()) goto labelFunc040A_05DC;
	message("「我也很好奇。但我對那些在海上航行的人的所作所為比較熟悉。我見過海盜在北海岸登陸。」");
	say();
	UI_add_answer("海盜");
	goto labelFunc040A_05E0;
labelFunc040A_05DC:
	message("「或許你不想我一樣喜歡海……」");
	say();
labelFunc040A_05E0:
	case "海盜" attend labelFunc040A_05F3:
	UI_remove_answer("海盜");
	message("「或許他們登陸是為了把戰利品藏在森林裡。我從來沒有跟蹤過他們。」");
	say();
labelFunc040A_05F3:
	case "群山" attend labelFunc040A_0610:
	var000B = true;
	message("「從海岸延伸過來，隱約可見一條狹窄的山脊。那些群山的峭壁危險而陡峭。那裡的洞穴充滿了危險，對於不小心的人來說就是死亡。」");
	say();
	UI_add_answer(["洞穴", "死亡"]);
labelFunc040A_0610:
	case "死亡" attend labelFunc040A_062A:
	UI_remove_answer("死亡");
	message("「貪婪者的死亡。任何偷竊洞穴居民的人的死亡。」");
	say();
	UI_add_answer("洞穴");
labelFunc040A_062A:
	case "生物" attend labelFunc040A_0654:
	UI_remove_answer("生物");
	message("「是的。比如那些會吞噬不小心的人，把骨頭啃得一乾二淨的生物。森林裡有鳥身女妖，沼澤邊緣有史萊姆，洞穴裡有蜜蜂。");
	say();
	message("「森林裡也有很好的獵物：狐狸之類的。」");
	say();
	UI_add_answer(["史萊姆", "狐狸", "鳥身女妖 (harpies)", "蜜蜂"]);
labelFunc040A_0654:
	case "鳥身女妖 (harpies)" attend labelFunc040A_0674:
	UI_remove_answer("鳥身女妖 (harpies)");
	if (!var0019) goto labelFunc040A_0670;
	message("「鳥身女妖！準備戰鬥！我們立刻殺了牠們！」");
	say();
	goto labelFunc040A_0674;
labelFunc040A_0670:
	message("「一種畸形的飛行怪物。你不會想遇到牠們的。」");
	say();
labelFunc040A_0674:
	case "史萊姆" attend labelFunc040A_0692:
	var000E = true;
	message("「一種危險的生物，呈現綠色的史萊姆。觸摸起來有酸性，牠會從三步之外向獵物投擲偽足。");
	say();
	message("「牠從不睡覺，沒有思想，主要由有毒物質組成。牠會貪婪地吞噬不幸的動物。」");
	say();
	if (!var0017) goto labelFunc040A_0692;
	message("「用火攻擊它！史萊姆對火毫無防禦能力。」");
	say();
labelFunc040A_0692:
	case "狐狸" attend labelFunc040A_06C1:
	var000F = true;
	if (!UI_find_nearby(var0004, 0x01FE, 0x000A, 0x0000)) goto labelFunc040A_06B7;
	var001D = "  看看那隻狐狸的毛皮多麼有光澤。";
labelFunc040A_06B7:
	message("「狐狸很狡猾，而且怕人。我們永遠無法像牠們那樣屬於這片森林。");
	message(var001D);
	message("\"");
	say();
labelFunc040A_06C1:
	case "蜜蜂" attend labelFunc040A_0705:
	var0011 = true;
	if (!var001A) goto labelFunc040A_06E1;
	message("「像這種蜜蜂可以用我特殊的箭來馴服！」");
	say();
	UI_add_answer("箭");
	goto labelFunc040A_0705;
labelFunc040A_06E1:
	message("「你從未見過這種蜜蜂！牠們大得像狼，翅膀展開超過一跨長。");
	say();
	message("被牠們螫到的生物會陷入一種深沉、死亡般的睡眠中。」");
	say();
	if (!(!(var0004 in var0002))) goto labelFunc040A_0705;
	message("「我已經獵殺過牠們很多次了，因為我把牠們的毒液用在我的箭上。而且我喜歡牠們的蜂蜜。也許我們可以一起去洞穴裡弄點？」");
	say();
	UI_add_answer(["加入", "箭"]);
labelFunc040A_0705:
	case "箭" attend labelFunc040A_0818:
	UI_remove_answer("箭");
	message("「我用巨蜂的毒刺製作箭。用它們可以讓敵人入睡。」");
	say();
	var0022 = "";
	var0023 = 0x0000;
	if (!gflags[0x0153]) goto labelFunc040A_0783;
	var0023 = UI_count_objects(0xFE9B, 0x03B3, 0xFE99, 0xFE99);
	if (!(var0023 > 0x0006)) goto labelFunc040A_074D;
	var0023 = 0x0006;
labelFunc040A_074D:
	var0024 = UI_count_objects(0xFE9B, 0x0238, 0xFE99, 0xFE99);
	if (!((var0004 in var0002) && ((var0024 < 0x0006) && (var0023 > 0x0000)))) goto labelFunc040A_0780;
	var0022 = "需要我把這些毒刺做成箭嗎？";
labelFunc040A_0780:
	goto labelFunc040A_078F;
labelFunc040A_0783:
	var0022 = "如果你想要，我很樂意給你一打我特製的箭。你有興趣嗎？";
	var0023 = 0x000C;
labelFunc040A_078F:
	if (!(var0022 != "")) goto labelFunc040A_0818;
	message(var0022);
	message("");
	say();
	if (!Func090A()) goto labelFunc040A_080E;
	var0025 = UI_add_party_items(var0023, 0x0238, 0xFE99, 0xFE99, false);
	if (!var0025) goto labelFunc040A_0807;
	var0026 = "";
	if (!(var0023 > 0x0001)) goto labelFunc040A_07D6;
	var0026 = "s";
labelFunc040A_07D6:
	message("「小心使用，因為即使是擦傷也可能讓人入睡！」他說著，遞給你");
	message(var0023);
	message(" 支箭");
	message(var0026);
	message(".");
	say();
	if (!gflags[0x0153]) goto labelFunc040A_0800;
	var001F = UI_remove_party_items(var0023, 0x03B3, 0xFE99, 0xFE99, true);
labelFunc040A_0800:
	gflags[0x0153] = true;
	goto labelFunc040A_080B;
labelFunc040A_0807:
	message("「或許等你身上東西少一點的時候我再給你。」");
	say();
labelFunc040A_080B:
	goto labelFunc040A_0818;
labelFunc040A_080E:
	message("「很好，");
	message(var0001);
	message("。」");
	say();
labelFunc040A_0818:
	case "加入" attend labelFunc040A_0856:
	UI_remove_answer("加入");
	if (!(var0007 < 0x0008)) goto labelFunc040A_084C;
	UI_add_to_party(0xFFF6);
	message("「我很榮幸，");
	message(var0001);
	message("。」");
	say();
	UI_add_answer("友誼會");
	goto labelFunc040A_0856;
labelFunc040A_084C:
	message("「看來，");
	message(var0001);
	message("，你已經有足夠多的旅行同伴了。」");
	say();
labelFunc040A_0856:
	case "離隊" attend labelFunc040A_08C0:
	var0027 = true;
	message("「你是想讓我在這裡等，還是想讓我回家？」");
	say();
	UI_clear_answers();
	var0028 = Func090B(["在這裡等", "回家"]);
	if (!(var0028 == "在這裡等")) goto labelFunc040A_08A0;
	message("「很好！我會等你的！」*");
	say();
	UI_remove_from_party(0xFFF6);
	UI_set_schedule_type(UI_get_npc_object(0xFFF6), 0x000F);
	abort;
	goto labelFunc040A_08C0;
labelFunc040A_08A0:
	message("「很好，");
	message(var0001);
	message("。祝你好運。」*");
	say();
	UI_remove_from_party(0xFFF6);
	UI_set_schedule_type(UI_get_npc_object(0xFFF6), 0x000B);
	abort;
labelFunc040A_08C0:
	var0029 = false;
	case "隱士" attend labelFunc040A_08D0:
	var0029 = true;
labelFunc040A_08D0:
	if (!((var000C && var000B) && (!var0012))) goto labelFunc040A_08F2;
	message("「說到洞穴和群山，有些人住在蜜蜂洞穴附近，或者可能就在裡面。他們是隱士。」");
	say();
	var0029 = true;
	var0012 = true;
	UI_add_answer("蜜蜂");
labelFunc040A_08F2:
	if (!var0029) goto labelFunc040A_0937;
	UI_remove_answer("隱士");
	if (!(!gflags[0x0152])) goto labelFunc040A_0922;
	message("「有一天我在打獵時，瞥見一男一女在洞穴深處。從那之後我又見過他們兩次。我相信他們是 Yew 的前居民，雖然我不知道他們是如何與蜜蜂和平相處的。」");
	say();
	if (!var001B) goto labelFunc040A_0914;
	message("「這就是我看到的人！」");
	say();
labelFunc040A_0914:
	gflags[0x0152] = true;
	UI_add_answer("蜜蜂");
	goto labelFunc040A_0933;
labelFunc040A_0922:
	if (!var001B) goto labelFunc040A_092F;
	message("「這些人就是我之前說過的隱士。」");
	say();
	goto labelFunc040A_0933;
labelFunc040A_092F:
	message("「或許那些隱士還住在洞穴裡。」");
	say();
labelFunc040A_0933:
	var0012 = true;
labelFunc040A_0937:
	if (!((var000E && var000F) && (!var0010))) goto labelFunc040A_0967;
	message("「這讓我想起了一個故事。你想聽嗎？」");
	say();
	if (!Func090A()) goto labelFunc040A_095F;
	message("「有一天，當我沿著沼澤邊緣散步時，我偶然看到了一個奇怪的景象。一隻狐狸被困在沼澤中央的一個小土丘上，土丘周圍都是蠕動的綠色史萊姆。");
	say();
	message("史萊姆慢慢地向狐狸爬去，突然狐狸直接從軟泥表面跑了過去！");
	say();
	message("狐狸毫髮無傷地衝進了樹林，把蠕動的史萊姆拋在後頭。由此我猜測，史萊姆的受害者是那些在睡夢中，或是毫無防備的人。」");
	say();
	goto labelFunc040A_0963;
labelFunc040A_095F:
	message("「也許下次吧。」");
	say();
labelFunc040A_0963:
	var0010 = true;
labelFunc040A_0967:
	if (!var000E) goto labelFunc040A_0974;
	UI_remove_answer("史萊姆");
labelFunc040A_0974:
	if (!var000F) goto labelFunc040A_0981;
	UI_remove_answer("狐狸");
labelFunc040A_0981:
	if (!var0011) goto labelFunc040A_098E;
	UI_remove_answer("蜜蜂");
labelFunc040A_098E:
	if (!var000C) goto labelFunc040A_09A9;
	UI_remove_answer("洞穴");
	UI_remove_answer("秘密地點");
	UI_remove_answer("死亡");
labelFunc040A_09A9:
	if (!var000B) goto labelFunc040A_09B6;
	UI_remove_answer("群山");
labelFunc040A_09B6:
	if (!var000D) goto labelFunc040A_09C3;
	UI_remove_answer("森林");
labelFunc040A_09C3:
	if (!(gflags[0x0161] && ((var0004 in var0002) && (!gflags[0x0162])))) goto labelFunc040A_09E0;
	Func08F3(var0002);
	gflags[0x0162] = true;
labelFunc040A_09E0:
	if (!(var0004 in var0002)) goto labelFunc040A_09F1;
	UI_remove_answer("加入");
labelFunc040A_09F1:
	case "告辭" attend labelFunc040A_0A88:
	if (!((var0004 in var0002) || var0027)) goto labelFunc040A_0A0B;
	var0016 = true;
labelFunc040A_0A0B:
	if (!(gflags[0x001D] && (!var0016))) goto labelFunc040A_0A7B;
	if (!(!gflags[0x0161])) goto labelFunc040A_0A63;
	message("「請原諒，");
	message(var0001);
	message("，但你的容貌讓我想起我曾經看過的一座雕像。那是被稱為聖者的古代英雄的雕像。");
	say();
	message("你難道不就是那位高尚的靈魂嗎？」");
	say();
	if (!Func090A()) goto labelFunc040A_0A59;
	var002A = "那位雕刻家把你刻得很好。";
	if (!(UI_is_pc_female() == 0x0001)) goto labelFunc040A_0A48;
	var002A = "你遠比任何石頭雕像所能描繪的還要好看得多。";
labelFunc040A_0A48:
	message("「高貴的英雄，很榮幸能認識你。");
	message(var002A);
	message("\"");
	say();
	gflags[0x0161] = true;
	goto labelFunc040A_0A60;
labelFunc040A_0A59:
	message("「我一定是認錯人了。再會。」");
	say();
	goto labelFunc040A_0A8B;
labelFunc040A_0A60:
	goto labelFunc040A_0A78;
labelFunc040A_0A63:
	message("\"^");
	message(var0001);
	message("，如果你願意，我很榮幸能與你同行。我精通武器，也能為你提供我的知識和叢林技能……」");
	say();
	UI_add_answer("加入");
	var0016 = true;
labelFunc040A_0A78:
	goto labelFunc040A_0A88;
labelFunc040A_0A7B:
	message("「下次見，");
	message(var0001);
	message(".\"*");
	say();
	goto labelFunc040A_0A8B;
labelFunc040A_0A88:
	goto labelFunc040A_0216;
labelFunc040A_0A8B:
	endconv;
labelFunc040A_0A8C:
	if (!(event == 0x0000)) goto labelFunc040A_0A95;
	abort;
labelFunc040A_0A95:
	return;
}


