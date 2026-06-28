#game "blackgate"
// externs
extern void Func087D 0x87D ();
extern var Func0881 0x881 ();

void Func0696 object#(0x696) ()
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

	var0000 = false;
	var0001 = false;
	var0002 = false;
	var0003 = false;
	var0004 = false;
	var0005 = false;
	var0006 = UI_get_object_position(item);
	UI_set_schedule_type(item, 0x000F);
	if (!gflags[0x0003]) goto labelFunc0696_00D8;
	if (!(!gflags[0x032B])) goto labelFunc0696_0095;
	var0007 = UI_set_last_created(item);
	if (!(!UI_is_not_blocked(var0006, 0x01F8, 0xFE99))) goto labelFunc0696_005F;
	var0004 = true;
	var0007 = UI_update_last_created(var0006);
	goto labelFunc0696_01A8;
labelFunc0696_005F:
	var0007 = UI_update_last_created(var0006);
	Func087D();
	UI_show_npc_face(0xFEE2, 0x0001);
	message("Erethian 对你的问题感到恼火，「对于一个敏锐到能感觉出墨水在书页上所形成凸起的人来说，这并不是什么障碍。");
	say();
	message("你以为我是个残废吗？你要知道，在我的探索中，我所面临的危险，甚至能让像你这样的人吓得浑身发抖。」");
	say();
	message("这位法师的眼睛开始闪烁着柔和的光芒。「我的魔法强大到足以撕裂现实的结构，并按照我的意愿重建它。");
	say();
	message("为了证明这一点，我将化身为一只有翅膀的石像鬼贵族……」");
	say();
	message("他的双手在半空中挥舞出你认得的魔法手势，然后他轻声念出魔法咒语：");
	say();
	message("「Rel An-Quas Ailem In Garge」。*");
	say();
	var0000 = true;
	goto labelFunc0696_01A8;
labelFunc0696_0095:
	if (!(!gflags[0x032C])) goto labelFunc0696_00B8;
	UI_show_npc_face(0xFEE2, 0x0003);
	message("「即使是巨大巨龙的形态，也没有超出我的能力范围。」Erethian 开始轻声说话，然后声音越来越大：");
	say();
	message("「Rel An-Quas Ailem In BAL-ZEN」！*");
	say();
	var0001 = true;
	goto labelFunc0696_01A8;
	goto labelFunc0696_00D5;
labelFunc0696_00B8:
	UI_show_npc_face(0xFEE2, 0x0002);
	message("巨龙威胁性地低下口鼻，看着你猜测应该是你所在的位置。即使在这种强大的形态下，Erethian 似乎仍然是盲目的，然而，你有一种印象，他非常有能力照顾自己。");
	say();
	message("「够了，这些愚蠢的把戏，我的研究真的很忙。」他吟唱着咒语：");
	say();
	message("「An Ort Rel」！*");
	say();
	var0005 = true;
	goto labelFunc0696_01A8;
labelFunc0696_00D5:
	goto labelFunc0696_01A8;
labelFunc0696_00D8:
	UI_show_npc_face(0xFEE2, 0x0001);
	if (!(!gflags[0x032B])) goto labelFunc0696_013F;
	var0007 = UI_set_last_created(item);
	if (!(!UI_is_not_blocked(var0006, 0x01F4, 0x0000))) goto labelFunc0696_0113;
	var0004 = true;
	var0007 = UI_update_last_created(var0006);
	goto labelFunc0696_01A8;
labelFunc0696_0113:
	var0007 = UI_update_last_created(var0006);
	Func087D();
	message("Erethian 对你的问题感到恼火，「对于一个敏锐到能感觉出墨水在书页上所形成凸起的人来说，这并不是什么障碍。");
	say();
	message("你以为我是个残废吗？你要知道，在我的探索中，我所面临的危险，甚至能让像你这样的人吓得浑身发抖。」");
	say();
	message("这位法师的眼睛开始闪烁着柔和的光芒。「我的魔法强大到足以撕裂现实的结构，并按照我的意愿重建它。」");
	say();
	message("为了证明这一点，我将化身为一只有翅膀的石像鬼贵族……」");
	say();
	message("他的双手在半空中挥舞出你认得的魔法手势，然后他轻声念出魔法咒语：");
	say();
	message("「Rel An-Quas Ailem In Bet-Zen」。*");
	say();
	var0002 = true;
	goto labelFunc0696_01A8;
labelFunc0696_013F:
	if (!(!gflags[0x032C])) goto labelFunc0696_0159;
	message("这位年迈的法师在经历了变成囓齿动物的经验后，显得有些困惑。「那个法术以前总是很有效，但是有了这些该死的以太波，我记不起正确的咒语了？");
	say();
	message("没关系，我将化身为一条巨龙来证明我的力量……」他开始轻声说话，然后声音越来越大：");
	say();
	message("「Rel An-Quas Ailem In MOO」！*");
	say();
	var0003 = true;
	goto labelFunc0696_01A8;
labelFunc0696_0159:
	message("这位年迈的法师看起来相当尴尬，「够了，这些愚蠢的把戏，我的研究真的很忙。」他转过身去，脸涨得通红。*");
	say();
	UI_set_schedule_type(item, 0x001D);
	UI_clear_item_flag(UI_get_npc_object(0xFE9C), 0x0010);
	var0008 = Func0881();
	var0009 = UI_delayed_execute_usecode_array(var0008, [(byte)0x2C, (byte)0x2D], 0x000E);
	var000A = UI_execute_usecode_array(UI_get_npc_object(0xFE9C), [(byte)0x27, 0x000C, (byte)0x55, 0x069D]);
labelFunc0696_01A8:
	if (!var0000) goto labelFunc0696_01EB;
	var000B = UI_execute_usecode_array(item, [(byte)0x59, 0x0004, (byte)0x27, 0x0001, (byte)0x70, (byte)0x27, 0x0001, (byte)0x6F, (byte)0x27, 0x0001, (byte)0x61, (byte)0x27, 0x0001, (byte)0x6C, (byte)0x27, 0x0001, (byte)0x6D, (byte)0x27, 0x0003, (byte)0x55, 0x0697]);
labelFunc0696_01EB:
	if (!var0001) goto labelFunc0696_0224;
	var0000 = UI_find_nearest(item, 0x0112, 0x0001);
	var000C = UI_execute_usecode_array(var0000, [(byte)0x27, 0x0006, (byte)0x6C, (byte)0x27, 0x0003, (byte)0x6D, (byte)0x27, 0x0002, (byte)0x55, 0x0697]);
labelFunc0696_0224:
	if (!var0002) goto labelFunc0696_0260;
	var000B = UI_execute_usecode_array(item, [(byte)0x59, 0x0004, (byte)0x27, 0x0001, (byte)0x6F, (byte)0x27, 0x0001, (byte)0x70, (byte)0x27, 0x0001, (byte)0x6C, (byte)0x27, 0x0001, (byte)0x6D, (byte)0x27, 0x0003, (byte)0x55, 0x0697]);
labelFunc0696_0260:
	if (!var0003) goto labelFunc0696_02A3;
	var000B = UI_execute_usecode_array(item, [(byte)0x59, 0x0004, (byte)0x27, 0x0001, (byte)0x6C, (byte)0x27, 0x0001, (byte)0x6D, (byte)0x27, 0x0003, (byte)0x6C, (byte)0x27, 0x0001, (byte)0x70, (byte)0x27, 0x0001, (byte)0x6F, (byte)0x27, 0x0001, (byte)0x55, 0x0697]);
labelFunc0696_02A3:
	if (!var0005) goto labelFunc0696_02F1;
	var0001 = UI_find_nearest(item, 0x01F8, 0x0001);
	var000D = UI_execute_usecode_array(var0001, [(byte)0x27, 0x0003, (byte)0x68, (byte)0x27, 0x0002, (byte)0x6A, (byte)0x27, 0x0001, (byte)0x68, (byte)0x27, 0x0001, (byte)0x69, (byte)0x27, 0x0002, (byte)0x6A, (byte)0x27, 0x0001, (byte)0x55, 0x0697]);
labelFunc0696_02F1:
	if (!var0004) goto labelFunc0696_0322;
	UI_show_npc_face(0xFEE2, 0x0001);
	if (!(!gflags[0x032A])) goto labelFunc0696_030F;
	message("这位老法师似乎想说些什么，停了下来，然后说：「如果这里的空间没有那么狭小，我就会让你看看我的失明丝毫没有妨碍我的能力。」他的缺陷似乎是这位法师的一个敏感话题。*");
	say();
	goto labelFunc0696_0313;
labelFunc0696_030F:
	message("「除了打扰一个老人，你没有更好的事可做吗？！」他似乎对这种对话感到相当不满。*");
	say();
labelFunc0696_0313:
	UI_set_schedule_type(var0005, 0x001D);
	gflags[0x032A] = true;
	return;
labelFunc0696_0322:
	return;
}


