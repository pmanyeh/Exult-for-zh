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
	message("「我们感谢你，圣者。你拯救了不列颠尼亚免于陷入可能的第二次黑暗时代。你再次证明了你作为不列颠王意志体现者的价值。」");
	say();
	abort;
labelFunc0356_0036:
	if (!gflags[0x0318]) goto labelFunc0356_0041;
	message("「向你致敬，圣者。我无法再帮助你，但请记住我的话： Psyche 回归内核……」*");
	say();
	abort;
labelFunc0356_0041:
	if (!(!gflags[0x0316])) goto labelFunc0356_0053;
	message("突然间，你的脑海中充满了水晶般清澈、具备权威的回声。~「向你致意。我是真理守护者。你在寻求真理的智能与恩赐吗？」");
	say();
	gflags[0x0316] = true;
	goto labelFunc0356_0057;
labelFunc0356_0053:
	message("真理神殿说话了。「向你致意，追寻者。我再次问你，你在寻求我的启迪吗？」");
	say();
labelFunc0356_0057:
	if (!Func090A()) goto labelFunc0356_0079;
	message("「很好。准备好自己。」声音陷入了沉默。*");
	say();
	var0001 = UI_execute_usecode_array(item, [(byte)0x27, 0x0001, (byte)0x55, 0x06F9]);
	goto labelFunc0356_007E;
labelFunc0356_0079:
	message("「那么祝你好运。」*");
	say();
	abort;
labelFunc0356_007E:
	if (!(var0000 == 0x000E)) goto labelFunc0356_00BF;
	UI_show_npc_face(0xFEE1, 0x0001);
	if (!gflags[0x030C]) goto labelFunc0356_009D;
	message("「你对生命的爱是无限的。你发自内心的行动是全不列颠尼亚的闪亮典范。」*");
	say();
	abort;
labelFunc0356_009D:
	if (!gflags[0x0327]) goto labelFunc0356_00A8;
	message("「欢迎你，圣者。我无法再帮助你，除了提供我之前给过的建议：一股巨大的邪恶正在不列颠尼亚中蠢蠢欲动……」*");
	say();
	abort;
labelFunc0356_00A8:
	if (!(!gflags[0x031A])) goto labelFunc0356_00BA;
	message("一个极其优美的声音在你的意识中轻声叹息。「向你致意，圣者。我代表了爱的化身。如果你寻求启迪，你必须接受爱之考验。它的路径就在南方发光的蓝色发送门中。」*");
	say();
	gflags[0x031A] = true;
	goto labelFunc0356_00BE;
labelFunc0356_00BA:
	message("「我再次欢迎你，追寻者。在你成功完成爱之考验之前，我无法帮助你。」*");
	say();
labelFunc0356_00BE:
	abort;
labelFunc0356_00BF:
	if (!(var0000 == 0x000F)) goto labelFunc0356_0100;
	UI_show_npc_face(0xFEE1, 0x0002);
	if (!gflags[0x030C]) goto labelFunc0356_00DE;
	message("「你的重担已经减轻，不列颠尼亚再次从 Exodus 的魔爪中解脱。你的事迹将作为这片土地历史上最勇敢的壮举而被长久铭记。」*");
	say();
	abort;
labelFunc0356_00DE:
	if (!gflags[0x0341]) goto labelFunc0356_00E9;
	message("「向你致敬，强大的圣者！你寻找无限护符的任务绝不能失败。记住：解开它秘密的卷轴就在这座城堡内。」*");
	say();
	abort;
labelFunc0356_00E9:
	if (!(!gflags[0x0329])) goto labelFunc0356_00FB;
	message("一个强壮而充满活力的声音在你的脑海中响起。「向你致意，追寻者！我是勇气守护者。如果你有意志寻求我的奖赏，你必须进入南方的发送门。」*");
	say();
	gflags[0x0329] = true;
	goto labelFunc0356_00FF;
labelFunc0356_00FB:
	message("「我再告诉你一次，我的路径就在南方的发送门中。如果你有勇气就进来吧，追寻者……」*");
	say();
labelFunc0356_00FF:
	abort;
labelFunc0356_0100:
	if (!(event == 0x0004)) goto labelFunc0356_01A1;
	var0000 = UI_get_item_frame(item);
	if (!(var0000 == 0x0010)) goto labelFunc0356_0128;
	UI_show_npc_face(0xFEE1, 0x0000);
	message("「你已经掌握了真理考验，因此将赐予你极大智能与魔法能力的恩赐。好好使用——并尊重——你的力量，圣者。」");
	say();
labelFunc0356_0128:
	if (!(var0000 == 0x000E)) goto labelFunc0356_0140;
	UI_show_npc_face(0xFEE1, 0x0001);
	message("「得知爱是你珍视的原则，我感到很高兴，你成功完成爱之考验就证明了这一点。那么现在，将赐予你敏捷与技能的祝福。」");
	say();
labelFunc0356_0140:
	if (!(var0000 == 0x000F)) goto labelFunc0356_0158;
	UI_show_npc_face(0xFEE1, 0x0002);
	message("「做得好，强大的战士！流淌在你血管中那无与伦比的勇气，只能是圣者所拥有的。你已经证明了自己配得上勇气的奖赏，并展现了英勇、牺牲、荣誉和灵性……现在，以谦卑之心接受它吧。」*");
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
	message("「你现在已经体验了真理原则的全部含义。它的价值是无法估量的，因为真理将在你一生的努力中指引你。」");
	say();
	message("雕像的声音转为警告的语气。「了解这个真理： Psyche 回归内核……」说完，雕像再次安静下来。*");
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
	message("「现在你已经认真地体验了爱的一切。这是一种永远不能轻视的益处，因为爱是强大的动力。永远记住你所掌握的关于同情、牺牲和正义的教训。」");
	say();
	message("爱之守护者的声音充满了同情。「请多保重，圣者。因为一股巨大的邪恶正在不列颠尼亚中蠢蠢欲动，我不知道它的来源。」*");
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
	message("雕像的声音中透露出急迫感。「我对你施加了一个誓约，既然你是圣者，你就必须回应。你的任务是寻找无限护符。这座城堡内有一卷卷轴能告诉你它的用法。现在快去，时间不多了。*");
	say();
	gflags[0x0317] = false;
	abort;
labelFunc0356_04C5:
	return;
}


