#game "blackgate"
// externs
extern void Func01B0 shape#(0x1B0) ();
extern var Func0881 0x881 ();
extern var Func092D 0x92D (var var0000);
extern var Func0908 0x908 ();
extern var Func090A 0x90A ();
extern void Func0696 object#(0x696) ();
extern void Func069A object#(0x69A) ();

void Func009A shape#(0x9A) ()
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

	if (!(event == 0x0000)) goto labelFunc009A_01CB;
	var0000 = UI_find_nearest(item, 0x0150, 0x0001);
	var0001 = UI_find_nearest(item, 0x0152, 0x0001);
	var0002 = UI_find_nearest(item, 0x03E5, 0x0001);
	if (!(var0000 || (var0001 || var0002))) goto labelFunc009A_00F8;
	var0003 = UI_get_random(0x0064);
	if (!(var0003 >= 0x003C)) goto labelFunc009A_005D;
	UI_item_say(item, "@該死的蠟燭！@");
	return;
labelFunc009A_005D:
	if (!(var0003 <= 0x0028)) goto labelFunc009A_00F5;
	var0004 = var0000;
	var0004 = (var0004 & var0001);
	var0004 = (var0004 & var0002);
	enum();
labelFunc009A_0082:
	for (var0007 in var0004 with var0005 to var0006) attend labelFunc009A_00CF;
	var0008 = UI_get_object_position(var0007);
	UI_remove_item(var0007);
	UI_sprite_effect(0x0005, (var0008[0x0001] - 0x0001), (var0008[0x0002] - 0x0001), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0008);
	goto labelFunc009A_0082;
labelFunc009A_00CF:
	var0009 = UI_execute_usecode_array(item, [(byte)0x6F, (byte)0x27, 0x0001, (byte)0x01, (byte)0x52, "@An Ailem！", (byte)0x27, 0x0003, (byte)0x70, (byte)0x27, 0x0006]);
	return;
labelFunc009A_00F5:
	goto labelFunc009A_01CB;
labelFunc009A_00F8:
	if (!UI_find_nearest(item, 0x0369, 0x0001)) goto labelFunc009A_0112;
	UI_item_say(item, "@我餓壞了！@");
	return;
	goto labelFunc009A_01CB;
labelFunc009A_0112:
	var000A = UI_find_nearest(item, 0x01B0, 0x0002);
	var000B = UI_find_nearest(item, 0x01B1, 0x0002);
	if (!(var000A || var000B)) goto labelFunc009A_0163;
	if (!var000A) goto labelFunc009A_0151;
	UI_item_say(item, "@終於，我的門。@");
	event = 0x0001;
	var000A->Func01B0();
	return;
labelFunc009A_0151:
	if (!var000B) goto labelFunc009A_0160;
	UI_item_say(item, "@終於，我的門。@");
	return;
labelFunc009A_0160:
	goto labelFunc009A_01CB;
labelFunc009A_0163:
	var000C = UI_find_nearby(item, 0x025F, 0x0000, 0x0010);
	if (!var000C) goto labelFunc009A_01CB;
	enum();
labelFunc009A_017B:
	for (var000F in var000C with var000D to var000E) attend labelFunc009A_01CB;
	if (!((UI_get_item_frame(var000F) == 0x0004) && (UI_get_item_frame(item) >= 0x0010))) goto labelFunc009A_01BF;
	UI_item_say(item, "@啊，一堵牆。@");
	var0010 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x52, "@我跟著它走。@"], 0x0012);
	return;
	goto labelFunc009A_01C8;
labelFunc009A_01BF:
	UI_item_say(item, "@我在哪裡？@");
	return;
labelFunc009A_01C8:
	goto labelFunc009A_017B;
labelFunc009A_01CB:
	if (!(!UI_get_cont_items(item, 0x031D, 0x00F0, 0x0004))) goto labelFunc009A_01DE;
	return;
labelFunc009A_01DE:
	if (!(event == 0x0001)) goto labelFunc009A_0220;
	if (!(!Func0881())) goto labelFunc009A_021F;
	var0011 = Func092D(item);
	var0012 = ((var0011 + 0x0004) % 0x0008);
	var0009 = UI_execute_usecode_array(item, [(byte)0x61, (byte)0x59, var0012, (byte)0x55, 0x009A, 0x0000]);
	goto labelFunc009A_0220;
labelFunc009A_021F:
	abort;
labelFunc009A_0220:
	if (!(event == 0x0002)) goto labelFunc009A_093E;
	var0013 = Func0908();
	if (!gflags[0x030E]) goto labelFunc009A_0243;
	UI_show_npc_face(0xFEE2, 0x0001);
	message("「我不會再跟你說話了，聖者！」他無視了你。*");
	say();
	abort;
labelFunc009A_0243:
	if (!(!gflags[0x0310])) goto labelFunc009A_0286;
	UI_show_npc_face(0xFEE2, 0x0000);
	message("當你靠近時，老人挺直身子，直視著你說：「很高興見到你，");
	message(var0013);
	message("。我名叫 Erethian 。雖然你不認識我，但我卻對你非常了解。」");
	say();
	message("「我曾見證你摧毀 Mondain 的力量，從而擊敗那誤入歧途的法師；我見證你征服了女巫 Minax ；我也曾以一種非常獨特的方式，看著你如何擊倒地獄魔物 Exodus 。」");
	say();
	message("他在這裡沉默下來，你注意到這老人的雙眼呈現乳白色。");
	say();
	gflags[0x0310] = true;
	UI_add_answer(["姓名", "職業", "Mondain", "Minax", "Exodus", "告辭"]);
	goto labelFunc009A_02C6;
labelFunc009A_0286:
	if (!(!(gflags[0x032A] || gflags[0x032B]))) goto labelFunc009A_02A8;
	UI_show_npc_face(0xFEE2, 0x0000);
	message("「再次向你致意，");
	message(var0013);
	message("。我有什麼能幫你的嗎？」盲眼老法師準確無誤地看向你的方向。");
	say();
	goto labelFunc009A_02B6;
labelFunc009A_02A8:
	UI_show_npc_face(0xFEE2, 0x0001);
	message("「這樣下去我什麼事都做不成！你想從我這裡得到什麼？」 Erethian 此刻顯得有些暴躁。");
	say();
labelFunc009A_02B6:
	UI_add_answer(["姓名", "職業", "告辭"]);
labelFunc009A_02C6:
	if (!gflags[0x0337]) goto labelFunc009A_02E4;
	if (!(!gflags[0x0338])) goto labelFunc009A_02E1;
	if (!(!gflags[0x0330])) goto labelFunc009A_02E1;
	UI_add_answer("黑劍");
labelFunc009A_02E1:
	goto labelFunc009A_02F8;
labelFunc009A_02E4:
	if (!(!gflags[0x0312])) goto labelFunc009A_02F8;
	if (!gflags[0x0311]) goto labelFunc009A_02F8;
	UI_add_answer("強大的神器");
labelFunc009A_02F8:
	if (!gflags[0x0313]) goto labelFunc009A_0338;
	if (!(!gflags[0x032F])) goto labelFunc009A_030F;
	UI_add_answer("惡魔之鏡");
	goto labelFunc009A_0335;
labelFunc009A_030F:
	if (!(!gflags[0x0330])) goto labelFunc009A_0327;
	if (!(!gflags[0x0338])) goto labelFunc009A_0324;
	UI_add_answer("惡魔寶石");
labelFunc009A_0324:
	goto labelFunc009A_0335;
labelFunc009A_0327:
	if (!(!gflags[0x0339])) goto labelFunc009A_0335;
	UI_add_answer("惡魔之刃");
labelFunc009A_0335:
	goto labelFunc009A_0352;
labelFunc009A_0338:
	if (!gflags[0x032F]) goto labelFunc009A_0352;
	if (!gflags[0x0330]) goto labelFunc009A_0352;
	if (!(!gflags[0x0339])) goto labelFunc009A_0352;
	UI_add_answer("惡魔之刃");
labelFunc009A_0352:
	if (!gflags[0x0318]) goto labelFunc009A_035F;
	UI_add_answer("Psyche回來了");
labelFunc009A_035F:
	if (!gflags[0x0327]) goto labelFunc009A_036C;
	UI_add_answer("巨大的邪惡");
labelFunc009A_036C:
	if (!gflags[0x0341]) goto labelFunc009A_0379;
	UI_add_answer("無限護符");
labelFunc009A_0379:
	var0014 = false;
	var0015 = false;
	var0016 = false;
	var0017 = false;
labelFunc009A_0389:
	converse attend labelFunc009A_0929;
	case "Psyche回來了" attend labelFunc009A_03B7:
	UI_show_npc_face(0xFEE2, 0x0000);
	message("「這可能是真的嗎？」 Erethian 盲目的雙眼閃爍著毫不掩飾的喜悅。「這對我來說是多麼好的一個機會啊。」");
	say();
	UI_show_npc_face(0xFEE2, 0x0001);
	message("他再次注意到你的存在。「現在，不要讓任何破壞的怪念頭進入你的腦袋，聖者。我絕不會讓你剝奪我體驗這世界真正奇蹟的機會。現在走開吧……難道在其他地方沒有你需要去伸張的正義嗎？」");
	say();
	UI_remove_answer("Psyche回來了");
labelFunc009A_03B7:
	case "巨大的邪惡" attend labelFunc009A_03D4:
	UI_show_npc_face(0xFEE2, 0x0001);
	message("年邁的法師皺起眉頭。「我感覺不到任何巨大的邪惡，但話說回來，我從未完全掌握感知宇宙的訣竅。不過，你別太擔心了。這些事情往往會自己解決的。」你感覺就像是被人摸了摸頭，然後叫去別的地方玩一樣。");
	say();
	UI_remove_answer("巨大的邪惡");
labelFunc009A_03D4:
	case "無限護符" attend labelFunc009A_0485:
	if (!(!gflags[0x030F])) goto labelFunc009A_0434;
	gflags[0x030F] = true;
	message("「啊，是的。我曾經有一卷卷軸，上面記載著一個同名護符的事。要是我能想起把它放哪裡就好了。你剛好有帶著那張名為『無限卷軸』的羊皮紙嗎？」");
	say();
	if (!Func090A()) goto labelFunc009A_042D;
	if (!(!UI_count_objects(0xFE9B, 0x031D, 0x0032, 0x0001))) goto labelFunc009A_040C;
	message("「如果你沒有那卷軸，我這件事就幫不上忙了。」");
	say();
	goto labelFunc009A_042A;
labelFunc009A_040C:
	message("「就在這裡。那麼，它似乎是以一種奇怪的格式寫成的。甚至可以說是一種密碼……我知道了！顯然，這個護符目前存在於大虛空（Great Void）之中。一個有些遠離我們的位面。如果你想進入這個虛空，你需要製作兩片透鏡：一片凹透鏡，另一片凸透鏡。光線透過適當附魔的透鏡聚焦，將會在我們的領域與虛空之間打開一條通道。我相信這篇論述提到了三個原則護符（Talismans of Principle），它們會向無限護符發出呼喚並將其帶到這裡。一旦它到了這裡，看起來它唯一的目的就是將一股強大的力量強行拉入虛空之中。」一個念頭如閃電劈中樹木般擊中這位法師。「噢，不，聖者……你別想再從我這裡得到任何幫助。我或許瞎了，但我看穿了你的把戲。我不會幫你把核心（Core）送進虛空的。」 Erethian 沉默了下來，看來他不會再開口了。");
	say();
	UI_remove_npc_face(0xFEE2);
	UI_show_npc_face(0xFEDC, 0x0000);
	message("Arcadion 的聲音如靜止池塘中的漣漪般向你低語：「別怕，我的主人。我對這些事情略知一二。」*");
	say();
	gflags[0x030E] = true;
	abort;
labelFunc009A_042A:
	goto labelFunc009A_0431;
labelFunc009A_042D:
	message("「很好。我需要那卷卷軸才能給你進一步的資訊。」");
	say();
labelFunc009A_0431:
	goto labelFunc009A_047E;
labelFunc009A_0434:
	message("「你的隨身物品中有無限卷軸嗎？」");
	say();
	if (!Func090A()) goto labelFunc009A_047A;
	if (!(!UI_count_objects(0xFE9B, 0x031D, 0x0032, 0x0001))) goto labelFunc009A_0459;
	message("「我必須親自觸摸那卷軸才能了解它的含義。否則我無法在這件事上幫助你。」");
	say();
	goto labelFunc009A_0477;
labelFunc009A_0459:
	message("「就在這裡。那麼，它似乎是以一種奇怪的格式寫成的。甚至可以說是一種密碼……我知道了！顯然，這個護符目前存在於大虛空（Great Void）之中。一個有些遠離我們的位面。如果你想進入這個虛空，你需要製作兩片透鏡：一片凹透鏡，另一片凸透鏡。光線透過適當附魔的透鏡聚焦，將會在我們的領域與虛空之間打開一條通道。我相信這篇論述提到了三個原則護符（Talismans of Principle），它們會向無限護符發出呼喚並將其帶到這裡。一旦它到了這裡，看起來它唯一的目的就是將一股強大的力量強行拉入虛空之中。」一個念頭如閃電劈中樹木般擊中這位法師。「噢，不，聖者……你別想再從我這裡得到任何幫助。我或許瞎了，但我看穿了你的把戲。我不會幫你把核心（Core）送進虛空的。」 Erethian 沉默了下來，看來他不會再開口了。");
	say();
	UI_remove_npc_face(0xFEE2);
	UI_show_npc_face(0xFEDC, 0x0000);
	message("Arcadion 的聲音如靜止池塘中的漣漪般向你低語：「別怕，我的主人。我對這些事情略知一二。」*");
	say();
	gflags[0x030E] = true;
	abort;
labelFunc009A_0477:
	goto labelFunc009A_047E;
labelFunc009A_047A:
	message("「如果你把卷軸帶來給我，我可以協助你找出那古老文本的含意。」");
	say();
labelFunc009A_047E:
	UI_remove_answer("無限護符");
labelFunc009A_0485:
	case "強大的神器" attend labelFunc009A_0498:
	message("「我曾試圖創造一把威力強大的劍。」 Erethian 專注地皺起眉頭，接著說：「如果你想接續我的工作，你需要一些鍛造設備……還有一個可以放置它們的地方……我知道一個絕佳地點。跟我來，我看看能幫你什麼忙。」*");
	say();
	var0015 = true;
	goto labelFunc009A_0929;
labelFunc009A_0498:
	case "黑劍" attend labelFunc009A_050D:
	UI_show_npc_face(0xFEE2, 0x0001);
	message("當你告訴 Erethian 你對那把黑劍的困擾時，他點了點頭。「是的，我可以理解這把劍在戰鬥中揮舞起來會有多笨重。不過，如果你能將一個魔法力量源綁定在劍柄上，你或許就能抵銷這把劍難以駕馭的特性。」");
	say();
	if (!UI_get_cont_items(UI_get_npc_object(0xFE9C), 0x02F8, 0xFE99, 0x000D)) goto labelFunc009A_04F2;
	UI_show_npc_face(0xFEDD, 0x0000);
	message("話題一轉，那顆小寶石閃爍了起來。「我相信以我目前的型態，我可以完美地勝任這把劍的穩定力量。事實上，這將能讓我為你提供一些我更具戲劇性的力量。」這隻惡魔對這個前景聽起來很興奮，也許興奮過頭了。");
	say();
	UI_remove_npc_face(0xFEDD);
	UI_show_npc_face(0xFEE2, 0x0001);
	message("Erethian 輕聲說道：「在你將 Arcadion 綁定到劍上之前請三思。因為他確實能解決劍的平衡問題，但他能解決他自己的問題嗎？」");
	say();
	UI_add_answer("問題");
	goto labelFunc009A_04FC;
labelFunc009A_04F2:
	if (!gflags[0x032F]) goto labelFunc009A_04FC;
	message("你想知道也許 Arcadion 能夠釐清這個問題，彷彿讀懂了你的心思般， Erethian 說：「小心那隻惡魔。他的目標與你或我不同。如果他主動提出要幫忙，那是為了幫他自己。這點你可以肯定。」");
	say();
labelFunc009A_04FC:
	gflags[0x0338] = true;
	UI_remove_answer(["黑劍", "惡魔寶石"]);
labelFunc009A_050D:
	case "問題" attend labelFunc009A_0520:
	message("「這是你的選擇。顯然你需要讓這把劍發揮作用，但如果這惡魔是你唯一的依靠，我同情你。因為就像 Arcadion 會被綁定在劍裡一樣肯定，你也會被綁定去持有它。我不能再多說什麼了。」");
	say();
	UI_remove_answer("問題");
labelFunc009A_0520:
	case "姓名" attend labelFunc009A_0539:
	message("法師對你微微一笑，「看來你的記憶力衰退了，");
	message(var0013);
	message("。正如我所說，我的名字是 Erethian 。」");
	say();
	UI_remove_answer("姓名");
labelFunc009A_0539:
	case "職業" attend labelFunc009A_056E:
	message("「我是真理原則的追隨者。但與 Lyceaum 的那些人不同，我寧願主動去尋求知識，而不是等它自己找上門。");
	say();
	message("正是這種好奇心把我帶到了這座島嶼， Mondain 和 Minax 的子嗣 Exodus 曾經試圖從這裡統治世界。");
	say();
	message("這裡的書籍和卷軸教會了我許多關於不列顛尼亞的歷史與其他……有趣的主題。」");
	say();
	message("他混濁的雙眼閃爍著智慧。但你忍不住好奇，書籍和卷軸對一個受失明之苦的人能有什麼用。");
	say();
	UI_remove_answer("職業");
	UI_add_answer(["Mondain", "Minax", "Exodus", "主題", "失明"]);
labelFunc009A_056E:
	case "主題" attend labelFunc009A_0581:
	message("「如果你有興趣，請隨意查閱。這裡可不是圖書館。」彷彿對自己友善的舉動感到後悔，他補充道：「不過，我相信你會非常小心對待那些古老的書籍。」他停頓下來，似乎還想再說些什麼。");
	say();
	UI_remove_answer("主題");
labelFunc009A_0581:
	case "失明" attend labelFunc009A_059F:
	if (!(!gflags[0x032B])) goto labelFunc009A_059A;
	var0014 = true;
	goto labelFunc009A_0929;
	goto labelFunc009A_059F;
labelFunc009A_059A:
	message("「你真是個煩人的小孩。別管我！」他無視你的存在。*");
	say();
	abort;
labelFunc009A_059F:
	case "Mondain" attend labelFunc009A_05C7:
	message("Erethian 皺著眉頭，「那可是個強大的巫師。有點扭曲，但誰知道當人類的心智屈服於他所掌握的力量時會發生什麼事。");
	say();
	message("甚至有傳言說光是他的頭骨就有摧毀敵人的力量……他一定在上面鎖定了一個魔法矩陣，我得好好研究一下。」他點點頭，似乎在心裡記下了一筆，然後帶著一絲渴望的神情繼續說道，");
	say();
	message("「我本來會很想研究那顆迷人的不朽寶石，但可惜啊，我出生的時代太晚了。」");
	say();
	UI_add_answer(["不朽寶石", "頭骨"]);
	UI_remove_answer("Mondain");
labelFunc009A_05C7:
	case "Minax" attend labelFunc009A_063A:
	message("巫師臉上露出一抹帶著感傷的甜美微笑，「她曾經是個相當清秀的少女，有著一顆永遠在探索的心。」他的表情暗了下來，「但是後來 Mondain 把她所有良知都給奪走了。");
	say();
	message("隨著時間過去，她自己成為了一股勢力。我認為她並未能完全匹敵她的前導師 Mondain ，但無論如何，她仍是一股不容小覷的力量。");
	say();
	message("而你做到了，用那把快劍 Enilno 。這項壯舉很可能在下一個紀元裡都會被傳唱。」他低聲補充道：「即使 Iolo 是唯一一個在唱的人。」");
	say();
	if (!UI_find_nearest(item, 0x01D1, 0x0028)) goto labelFunc009A_062C;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("Iolo 帶著憤慨的神情說道：「請原諒，先生。但我必須讓你知道，關於聖者的民謠仍然為不列顛尼亞所有最高級的酒館增添光彩。」");
	say();
	UI_show_npc_face(0xFEE2, 0x0000);
	message("「那真是種可疑的榮耀啊。」法師的嘴角泛起一絲微妙的微笑。");
	say();
	UI_show_npc_face(0xFFFF, 0x0000);
	message("當老法師舉起雙手做出和平的手勢時， Iolo 嘴邊憤怒的反駁便嚥了回去。");
	say();
	UI_show_npc_face(0xFEE2, 0x0000);
	message("「拜託，請原諒我的冒犯。你應該知道，我幾乎是親眼見證了聖者在逆境中展現的勇氣。");
	say();
	message("我對這位黑暗時代的終結者及啟蒙時代的先驅，只有最高的敬意。");
	say();
	UI_remove_npc_face(0xFFFF);
labelFunc009A_062C:
	UI_add_answer("快劍 Enilno");
	UI_remove_answer("Minax");
labelFunc009A_063A:
	case "Exodus" attend labelFunc009A_065E:
	message("「那傢伙最近成了我的狂熱所在。」他幾乎興奮得發光。「的確，這正是把我帶到這裡的原因。當我在 Lyceaum 的時候，我偶然在手稿中看到一段描述烈火島的文字。");
	say();
	message("在進一步的研究後，我發現這個被稱為 Exodus 的實體並未真正被摧毀。牠的兩個部分與世界之間的介面只是被切斷了而已。」");
	say();
	UI_add_answer(["兩個部分", "介面"]);
	UI_remove_answer("Exodus");
labelFunc009A_065E:
	case "兩個部分" attend labelFunc009A_069C:
	message("「其中一個部分，我們稱之為牠的 Psyche (心靈)，被居住在我們下方、世界另一端領域的石像鬼帶走了。他們有著極其迷人的文化，但我離題了……」你開始納悶這個老人究竟已經與世隔絕多久了。");
	say();
	message("他繼續說道：「另一個部分，我放在這裡。我稱它為黑暗核心，因為沒有了 Psyche ，它幾乎了無生氣。」他的臉龐看起來變年輕了，你感覺自己彷彿在和一個描述著新玩具……或者可能是新寵物的孩子說話。");
	say();
	message("「我相信正是從核心中移除了 Psyche ，才導致這座島沉沒在海浪之下。」");
	say();
	UI_add_answer("石像鬼");
	if (!(!var0016)) goto labelFunc009A_0687;
	UI_add_answer("Psyche");
labelFunc009A_0687:
	if (!(!var0017)) goto labelFunc009A_0695;
	UI_add_answer("黑暗核心");
labelFunc009A_0695:
	UI_remove_answer("兩個部分");
labelFunc009A_069C:
	case "介面" attend labelFunc009A_06D7:
	message("他面無表情，「你摧毀的那台機器是 Exodus 與世界溝通及控制世界的手段。");
	say();
	message("當它被摧毀時，牠的 Psyche 再也無法保持對黑暗核心的控制。");
	say();
	message("我經常在想，如果建立了另一個介面， Psyche 會不會回歸，或者是可能會重生……」");
	say();
	message("當他的閒散推論開始朝向可能危險的結論發展時，他清晰地閉上了嘴。");
	say();
	if (!(!var0016)) goto labelFunc009A_06C2;
	UI_add_answer("Psyche");
labelFunc009A_06C2:
	if (!(!var0017)) goto labelFunc009A_06D0;
	UI_add_answer("黑暗核心");
labelFunc009A_06D0:
	UI_remove_answer("介面");
labelFunc009A_06D7:
	case "石像鬼" attend labelFunc009A_06F2:
	message("「有趣的生物，你可能會叫牠們炎魔，但牠們並不是歷史上所描繪的野獸。");
	say();
	message("那些體型較大、有翅膀的種類天生充滿智慧且具有魔力，而體型較小、無翅的種類似乎是該物種的勞動力。」");
	say();
	message("他將頭轉向你，眼神中帶著困惑的表情。「我有一種最古怪的感覺，彷彿你已經聽過這一切了……」 Erethian 陷入了沉默。");
	say();
	UI_remove_answer("石像鬼");
labelFunc009A_06F2:
	case "Psyche" attend labelFunc009A_0709:
	message("「最終，我會將我的研究轉向那個存在。石像鬼將它安置在一座雕像內，放在他們致力於『勤勉』原則的神殿中。");
	say();
	var0016 = true;
	UI_remove_answer("Psyche");
labelFunc009A_0709:
	case "黑暗核心" attend labelFunc009A_0748:
	if (!UI_find_nearest(UI_get_npc_object(0xFE9C), 0x03DE, 0x0007)) goto labelFunc009A_0729;
	message("「是的，在這裡。它就是放置在那邊基座上的圓柱體。」他朝著黑暗核心的方向指了指。");
	say();
labelFunc009A_0729:
	message("「我發現它簡直是個充滿實用事實的寶庫。它唯一的目的似乎就是儲存資訊。");
	say();
	message("大部分資訊都很瑣碎，像是詳細描述了億萬年前某一天天空的顏色，");
	say();
	message("而其他部分則提供了操控這個世界的指示。");
	say();
	message("在裡面我甚至找到了升起並維持我們所站立的這座島嶼的知識。它真是一件非凡的神器。」");
	say();
	message("他思考了片刻，然後緊張地看向你的方向。「拜託，在它附近千萬要小心。神器似乎有一種……該怎麼說呢，在你周圍就會消失的傾向。」");
	say();
	var0017 = true;
	UI_remove_answer("黑暗核心");
labelFunc009A_0748:
	case "快劍 Enilno" attend labelFunc009A_0776:
	message("「啊，這是個好問題。自從黑暗時代結束後，我就再也沒聽過它的下落。但願我知道它在哪裡。");
	say();
	message("據說它是一件強大的魔法物品。你覺得呢？」他在問這個問題時，將頭偏向了一側。");
	say();
	var0018 = Func090A();
	if (!var0018) goto labelFunc009A_076B;
	message("「是的，失去這樣一件古物真是個遺憾。也許隨著時間流逝它會出現。這些東西總是有辦法在最奇怪的時候浮現。」");
	say();
	goto labelFunc009A_076F;
labelFunc009A_076B:
	message("「沒有嗎？它似乎為你發揮了足夠的效用來除掉女巫 Minax 。不過話說回來，我想只有蹩腳的吟遊詩人才會怪罪自己的樂器。」他調皮地朝你的方向眨了眨眼。");
	say();
labelFunc009A_076F:
	UI_remove_answer("快劍 Enilno");
labelFunc009A_0776:
	case "不朽寶石" attend labelFunc009A_0791:
	message("那雙如兩顆彈珠般的乳白眼珠閃閃發光地看著你，「啊，是的。但你對那個小玩意兒可太清楚了。");
	say();
	message("畢竟，就是你把它打成了碎片，在 Lord Blackthorn 攝政期間給你惹了那麼多麻煩。");
	say();
	message("如此強大的力量，即使處於粉碎狀態，它的魔法仍然流動著。失去這樣一件神器真令人悲傷。」彷彿突然想起他是在和誰說話，他改口道：「總比讓 Mondain 到處亂搞要好得多，我想。」");
	say();
	UI_remove_answer("不朽寶石");
labelFunc009A_0791:
	case "頭骨" attend labelFunc009A_07A4:
	message("「看起來有人，」他戲劇性地停頓了一下，「讓那東西掉進了火山……」他苦澀的笑容與他漫不經心的語氣自相矛盾。");
	say();
	UI_remove_answer("頭骨");
labelFunc009A_07A4:
	case "惡魔之鏡" attend labelFunc009A_07C4:
	message("「啊，原來你見過那個老愛吹牛的傢伙了。老實說，我覺得我最好能擺脫那隻累人的野獸，但他有時候還是挺有用的。要不是他老愛抱怨，或許我和他能相處得更好。」");
	say();
	UI_add_answer(["抱怨", "釋放"]);
	UI_remove_answer("惡魔之鏡");
labelFunc009A_07C4:
	case "抱怨" attend labelFunc009A_07D7:
	message("「這是他最喜歡的消遣。他乞求、懇求、甚至威脅我，要我把他從那面愚蠢的鏡子裡放出來。相信我，如果我能做到，我早就做了。」 Erethian 滿佈皺紋的臉上露出懊惱的神情。");
	say();
	UI_remove_answer("抱怨");
labelFunc009A_07D7:
	case "釋放" attend labelFunc009A_07F1:
	message("「他想要這個特別的小玩意。我曾經擁有他尋找的這顆寶石，而且我認為一旦他得到它，他也不會高興到哪去。我試著告訴過他，這只會把他囚禁在一個更具機動性的監獄裡，但可惜，他的腦袋是石頭做的。」");
	say();
	UI_add_answer("監獄");
	UI_remove_answer("釋放");
labelFunc009A_07F1:
	case "監獄" attend labelFunc009A_080B:
	message("「確實如此。 Arcadion 試圖統治不列顛尼亞，並相信這顆寶石能讓他在此施展他的力量。事實上，以太寶石的作用恰恰相反，擁有這顆寶石的人將能夠使用他的力量。」");
	say();
	UI_add_answer("以太寶石");
	UI_remove_answer("監獄");
labelFunc009A_080B:
	case "以太寶石" attend labelFunc009A_082E:
	message("「這顆寶石被一條脾氣暴躁的龍從我這裡偷走了。她硬闖進這座城堡，伏擊了保護原則神殿的魔像，然後在前往勇氣考驗的路上毀掉了一扇完好的密門。我倒真想看看她是如何擠過她弄出來的那個洞，那個洞對她那種體型的生物來說根本不夠大。」法師乳白的眼珠閃爍著壓抑不住的笑意。");
	say();
	UI_add_answer(["魔像", "原則神殿", "勇氣考驗"]);
	UI_remove_answer("以太寶石");
labelFunc009A_082E:
	case "魔像" attend labelFunc009A_0848:
	message("「嗯……是的。這對人形魔法構造體曾經守護著原則神殿，但可惜的是，當龍襲擊城堡時，其中一個被落石擊中了。另一個撿起了他的，呃……兄弟，可以這麼說，並帶著他穿過傳送門前往了愛之考驗。」");
	say();
	UI_add_answer("愛之考驗");
	UI_remove_answer("魔像");
labelFunc009A_0848:
	case "原則神殿" attend labelFunc009A_085B:
	message("「神殿就在大廳後方的門外。在那裡你可以找到三尊雕像，每一尊都獻給不列顛王在啟蒙時代初期所設立的某項原則。」他神祕兮兮地補充道：「是有點古板，不過當衣架倒是挺不錯的。」");
	say();
	UI_remove_answer("原則神殿");
labelFunc009A_085B:
	case "愛之考驗" attend labelFunc009A_086E:
	message("「我還沒機會去檢查那個奇特的地方，不過，歡迎你在閒暇時去仔細看看。」他像個爺爺給孩子禮物般微笑著。");
	say();
	UI_remove_answer("愛之考驗");
labelFunc009A_086E:
	case "勇氣考驗" attend labelFunc009A_089D:
	if (!UI_is_pc_female()) goto labelFunc009A_0886;
	var0019 = "女英雄的";
	goto labelFunc009A_088C;
labelFunc009A_0886:
	var0019 = "英雄的";
labelFunc009A_088C:
	message("「我相信這是由不列顛王發起的，為了考驗……」他朝著你的方向比劃了一下，「一位具備美德的");
	message(var0019);
	message("戰鬥能力和勇氣。不過，城堡後方的那些雕像可以告訴你更多關於考驗的事。」 Erethian 神秘地咧嘴笑了。");
	say();
	UI_remove_answer("勇氣考驗");
labelFunc009A_089D:
	case "惡魔寶石" attend labelFunc009A_08F4:
	message("「所以……你已經讓 Arcadion 成為你的僕人了。能擺脫他無休止的抱怨真是太好了。希望你覺得他跟我一樣覺得有用。」你不確定，但他的話可能被解讀為一種詛咒。");
	say();
	if (!UI_get_cont_items(UI_get_npc_object(0xFE9C), 0x02F8, 0xFE99, 0x000D)) goto labelFunc009A_08ED;
	UI_show_npc_face(0xFEDD, 0x0000);
	message("寶石發出更亮的光芒，「終於不用再看到你了真好，老頭。也許在來生，我會是你的主人，而你是奴隸。」惡魔發出一聲令人毛骨悚然的輕笑。");
	say();
	UI_remove_npc_face(0xFEDD);
	UI_show_npc_face(0xFEE2, 0x0001);
	message("聽到惡魔的聲音， Erethian 看起來有些動搖，但很快恢復了平靜。「我不這麼認為，惡魔。我根本不確定你是否有辦法從那個小寶石裡逃出來。」這位年邁法師的表情難以捉摸。*");
	say();
	UI_show_npc_face(0xFEE2, 0x0000);
labelFunc009A_08ED:
	UI_remove_answer("惡魔寶石");
labelFunc009A_08F4:
	case "惡魔之刃" attend labelFunc009A_090B:
	message("「看來你沒有聽從我的警告。唉，我將永遠為你感到惋惜。那麼，暗影之刃的主人與奴隸，你想從我這裡得到什麼？」");
	say();
	gflags[0x0339] = true;
	UI_remove_answer("惡魔之刃");
labelFunc009A_090B:
	case "告辭" attend labelFunc009A_0926:
	if (!(!gflags[0x0338])) goto labelFunc009A_0921;
	message("「再見，祝你好運……你會需要它的。」老法師低聲竊笑著，彷彿在享受著一個私人的笑話，而且很可能是拿你開玩笑。*");
	say();
	goto labelFunc009A_0925;
labelFunc009A_0921:
	message("「再見，祝你好運……」 Erethian 的聲音聽起來真的充滿同情。");
	say();
labelFunc009A_0925:
	abort;
labelFunc009A_0926:
	goto labelFunc009A_0389;
labelFunc009A_0929:
	endconv;
	if (!var0014) goto labelFunc009A_0934;
	item->Func0696();
labelFunc009A_0934:
	if (!var0015) goto labelFunc009A_093E;
	item->Func069A();
labelFunc009A_093E:
	return;
}


