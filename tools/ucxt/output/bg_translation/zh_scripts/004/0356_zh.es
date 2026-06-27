#game "blackgate"
// externs
extern var Func090A 0x90A ();

void Func0356 shape#(0x356) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0001)) goto labelFunc0356_0100;
	if (!gflags[0x0317]) goto labelFunc0356_000F;
	abort;
labelFunc0356_000F:
	var0000 = UI_get_item_frame(item);
	if (!(var0000 == 0x0010)) goto labelFunc0356_007E;
	UI_show_npc_face(0xFEE1, 0x0000);
	if (!gflags[0x030C]) goto labelFunc0356_0036;
	message("「我們感謝你，聖者。你拯救了不列顛尼亞免於陷入可能的第二次黑暗時代。你再次證明了你作為不列顛王意志體現者的價值。」");
	say();
	abort;
labelFunc0356_0036:
	if (!gflags[0x0318]) goto labelFunc0356_0041;
	message("「向你致敬，聖者。我無法再幫助你，但請記住我的話： Psyche 回歸核心……」*");
	say();
	abort;
labelFunc0356_0041:
	if (!(!gflags[0x0316])) goto labelFunc0356_0053;
	message("突然間，你的腦海中充滿了水晶般清澈、具備權威的迴聲。~「向你致意。我是真理守護者。你在尋求真理的智慧與恩賜嗎？」");
	say();
	gflags[0x0316] = true;
	goto labelFunc0356_0057;
labelFunc0356_0053:
	message("真理神殿說話了。「向你致意，追尋者。我再次問你，你在尋求我的啟迪嗎？」");
	say();
labelFunc0356_0057:
	if (!Func090A()) goto labelFunc0356_0079;
	message("「很好。準備好自己。」聲音陷入了沉默。*");
	say();
	var0001 = UI_execute_usecode_array(item, [(byte)0x27, 0x0001, (byte)0x55, 0x06F9]);
	goto labelFunc0356_007E;
labelFunc0356_0079:
	message("「那麼祝你好運。」*");
	say();
	abort;
labelFunc0356_007E:
	if (!(var0000 == 0x000E)) goto labelFunc0356_00BF;
	UI_show_npc_face(0xFEE1, 0x0001);
	if (!gflags[0x030C]) goto labelFunc0356_009D;
	message("「你對生命的愛是無限的。你發自內心的行動是全不列顛尼亞的閃亮典範。」*");
	say();
	abort;
labelFunc0356_009D:
	if (!gflags[0x0327]) goto labelFunc0356_00A8;
	message("「歡迎你，聖者。我無法再幫助你，除了提供我之前給過的建議：一股巨大的邪惡正在不列顛尼亞中蠢蠢欲動……」*");
	say();
	abort;
labelFunc0356_00A8:
	if (!(!gflags[0x031A])) goto labelFunc0356_00BA;
	message("一個極其優美的聲音在你的意識中輕聲嘆息。「向你致意，聖者。我代表了愛的化身。如果你尋求啟迪，你必須接受愛之考驗。它的路徑就在南方發光的藍色傳送門中。」*");
	say();
	gflags[0x031A] = true;
	goto labelFunc0356_00BE;
labelFunc0356_00BA:
	message("「我再次歡迎你，追尋者。在你成功完成愛之考驗之前，我無法幫助你。」*");
	say();
labelFunc0356_00BE:
	abort;
labelFunc0356_00BF:
	if (!(var0000 == 0x000F)) goto labelFunc0356_0100;
	UI_show_npc_face(0xFEE1, 0x0002);
	if (!gflags[0x030C]) goto labelFunc0356_00DE;
	message("「你的重擔已經減輕，不列顛尼亞再次從 Exodus 的魔爪中解脫。你的事蹟將作為這片土地歷史上最勇敢的壯舉而被長久銘記。」*");
	say();
	abort;
labelFunc0356_00DE:
	if (!gflags[0x0341]) goto labelFunc0356_00E9;
	message("「向你致敬，強大的聖者！你尋找無限護符的任務絕不能失敗。記住：解開它秘密的卷軸就在這座城堡內。」*");
	say();
	abort;
labelFunc0356_00E9:
	if (!(!gflags[0x0329])) goto labelFunc0356_00FB;
	message("一個強壯而充滿活力的聲音在你的腦海中響起。「向你致意，追尋者！我是勇氣守護者。如果你有意志尋求我的獎賞，你必須進入南方的傳送門。」*");
	say();
	gflags[0x0329] = true;
	goto labelFunc0356_00FF;
labelFunc0356_00FB:
	message("「我再告訴你一次，我的路徑就在南方的傳送門中。如果你有勇氣就進來吧，追尋者……」*");
	say();
labelFunc0356_00FF:
	abort;
labelFunc0356_0100:
	if (!(event == 0x0004)) goto labelFunc0356_01A1;
	var0000 = UI_get_item_frame(item);
	if (!(var0000 == 0x0010)) goto labelFunc0356_0128;
	UI_show_npc_face(0xFEE1, 0x0000);
	message("「你已經掌握了真理考驗，因此將賜予你極大智慧與魔法能力的恩賜。好好使用——並尊重——你的力量，聖者。」");
	say();
labelFunc0356_0128:
	if (!(var0000 == 0x000E)) goto labelFunc0356_0140;
	UI_show_npc_face(0xFEE1, 0x0001);
	message("「得知愛是你珍視的原則，我感到很高興，你成功完成愛之考驗就證明了這一點。那麼現在，將賜予你敏捷與技能的祝福。」");
	say();
labelFunc0356_0140:
	if (!(var0000 == 0x000F)) goto labelFunc0356_0158;
	UI_show_npc_face(0xFEE1, 0x0002);
	message("「做得好，強大的戰士！流淌在你血管中那無與倫比的勇氣，只能是聖者所擁有的。你已經證明了自己配得上勇氣的獎賞，並展現了英勇、犧牲、榮譽和靈性……現在，以謙卑之心接受它吧。」*");
	say();
labelFunc0356_0158:
	UI_remove_npc_face(0xFEE1);
	var0002 = UI_execute_usecode_array(UI_get_npc_object(0xFE9C), [(byte)0x27, 0x0002, (byte)0x6C, (byte)0x27, 0x0002, (byte)0x6D, (byte)0x27, 0x000A, (byte)0x6C, (byte)0x27, 0x0002, (byte)0x61]);
	var0001 = UI_execute_usecode_array(item, [(byte)0x27, 0x0008, (byte)0x55, 0x0356]);
labelFunc0356_01A1:
	if (!(event == 0x0002)) goto labelFunc0356_04C5;
	var0000 = UI_get_item_frame(item);
	if (!(var0000 == 0x0010)) goto labelFunc0356_02D9;
	if (!(!gflags[0x0318])) goto labelFunc0356_02C2;
	var0003 = UI_get_object_position(UI_get_npc_object(0xFE9C));
	UI_sprite_effect(0x0007, (var0003[0x0001] - 0x0001), (var0003[0x0002] - 0x0001), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0043);
	var0004 = UI_get_npc_prop(UI_get_npc_object(0xFE9C), 0x0002);
	var0004 = (var0004 & UI_get_npc_prop(UI_get_npc_object(0xFE9C), 0x0006));
	var0004 = (var0004 & UI_get_npc_prop(UI_get_npc_object(0xFE9C), 0x0005));
	if (!(!(var0004[0x0001] >= 0x001E))) goto labelFunc0356_0262;
	var0005 = UI_set_npc_prop(UI_get_npc_object(0xFE9C), 0x0002, (0x001E - var0004[0x0001]));
labelFunc0356_0262:
	if (!(!(var0004[0x0002] >= 0x001E))) goto labelFunc0356_02A6;
	var0005 = UI_set_npc_prop(UI_get_npc_object(0xFE9C), 0x0006, (0x001E - var0004[0x0002]));
	var0005 = UI_set_npc_prop(UI_get_npc_object(0xFE9C), 0x0005, (0x001E - var0004[0x0003]));
labelFunc0356_02A6:
	gflags[0x0318] = true;
	var0006 = UI_execute_usecode_array(item, [(byte)0x27, 0x000F, (byte)0x55, 0x0356]);
	goto labelFunc0356_02D9;
labelFunc0356_02C2:
	UI_show_npc_face(0xFEE1, 0x0000);
	message("「你現在已經體驗了真理原則的全部含義。它的價值是無法估量的，因為真理將在你一生的努力中指引你。」");
	say();
	message("雕像的聲音轉為警告的語氣。「了解這個真理： Psyche 回歸核心……」說完，雕像再次安靜下來。*");
	say();
	gflags[0x0317] = false;
	abort;
labelFunc0356_02D9:
	if (!(var0000 == 0x000E)) goto labelFunc0356_03D1;
	if (!(!gflags[0x0327])) goto labelFunc0356_03BA;
	var0003 = UI_get_object_position(UI_get_npc_object(0xFE9C));
	UI_sprite_effect(0x0007, (var0003[0x0001] - 0x0001), (var0003[0x0002] - 0x0001), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0043);
	var0004 = UI_get_npc_prop(UI_get_npc_object(0xFE9C), 0x0001);
	var0004 = (var0004 & UI_get_npc_prop(UI_get_npc_object(0xFE9C), 0x0004));
	if (!(!(var0004[0x0001] >= 0x001E))) goto labelFunc0356_0375;
	var0005 = UI_set_npc_prop(UI_get_npc_object(0xFE9C), 0x0001, (0x001E - var0004[0x0001]));
labelFunc0356_0375:
	if (!(!(var0004[0x0002] >= 0x001E))) goto labelFunc0356_039E;
	var0005 = UI_set_npc_prop(UI_get_npc_object(0xFE9C), 0x0004, (0x001E - var0004[0x0002]));
labelFunc0356_039E:
	gflags[0x0327] = true;
	var0006 = UI_execute_usecode_array(item, [(byte)0x27, 0x000F, (byte)0x55, 0x0356]);
	goto labelFunc0356_03D1;
labelFunc0356_03BA:
	UI_show_npc_face(0xFEE1, 0x0001);
	message("「現在你已經認真地體驗了愛的一切。這是一種永遠不能輕視的益處，因為愛是強大的動力。永遠記住你所掌握的關於同情、犧牲和正義的教訓。」");
	say();
	message("愛之守護者的聲音充滿了同情。「請多保重，聖者。因為一股巨大的邪惡正在不列顛尼亞中蠢蠢欲動，我不知道它的來源。」*");
	say();
	gflags[0x0317] = false;
	abort;
labelFunc0356_03D1:
	if (!(var0000 == 0x000F)) goto labelFunc0356_04C5;
	if (!(!gflags[0x0341])) goto labelFunc0356_04B2;
	var0003 = UI_get_object_position(UI_get_npc_object(0xFE9C));
	UI_sprite_effect(0x0007, (var0003[0x0001] - 0x0001), (var0003[0x0002] - 0x0001), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0043);
	var0004 = UI_get_npc_prop(UI_get_npc_object(0xFE9C), 0x0000);
	var0004 = (var0004 & UI_get_npc_prop(UI_get_npc_object(0xFE9C), 0x0003));
	if (!(!(var0004[0x0001] >= 0x001E))) goto labelFunc0356_046D;
	var0005 = UI_set_npc_prop(UI_get_npc_object(0xFE9C), 0x0000, (0x001E - var0004[0x0001]));
labelFunc0356_046D:
	if (!(!(var0004[0x0002] >= 0x001E))) goto labelFunc0356_0496;
	var0005 = UI_set_npc_prop(UI_get_npc_object(0xFE9C), 0x0003, (0x001E - var0004[0x0002]));
labelFunc0356_0496:
	gflags[0x0341] = true;
	var0006 = UI_execute_usecode_array(item, [(byte)0x27, 0x000F, (byte)0x55, 0x0356]);
	goto labelFunc0356_04C5;
labelFunc0356_04B2:
	UI_show_npc_face(0xFEE1, 0x0002);
	message("雕像的聲音中透露出急迫感。「我對你施加了一個誓約，既然你是聖者，你就必須回應。你的任務是尋找無限護符。這座城堡內有一卷卷軸能告訴你它的用法。現在快去，時間不多了。*");
	say();
	gflags[0x0317] = false;
	abort;
labelFunc0356_04C5:
	return;
}


