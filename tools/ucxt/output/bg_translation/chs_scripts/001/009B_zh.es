#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);
extern var Func0908 0x908 ();
extern var Func090A 0x90A ();
extern void Func0882 0x882 (var var0000);

void Func009B shape#(0x9B) ()
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

	if (!(event == 0x0001)) goto labelFunc009B_028C;
	UI_show_npc_face(0xFEE3, 0x0000);
	var0000 = Func08F7(0xFFFE);
	var0001 = Func08F7(0xFFFD);
	var0002 = Func0908();
	if (!(!gflags[0x01B3])) goto labelFunc009B_0036;
	message("船上戴着兜帽的人完全无视了你。*");
	say();
	abort;
labelFunc009B_0036:
	if (!gflags[0x0198]) goto labelFunc009B_0043;
	UI_add_answer("牺牲");
labelFunc009B_0043:
	if (!(!gflags[0x01C3])) goto labelFunc009B_0055;
	message("站在你面前的是一个高大、骨瘦如柴的身影，身处一艘幽灵船中。他向你伸出手，用阴森的声音说：「我是 Skara Brae 的摆渡人……你必须支付两枚硬币……才能渡过迷雾海峡。」");
	say();
	gflags[0x01C3] = true;
	goto labelFunc009B_0078;
labelFunc009B_0055:
	if (!(!gflags[0x0197])) goto labelFunc009B_0063;
	message("Skara Brae 的摆渡人站在他幽灵般的船上，向任何愿意支付代价的人伸出手。");
	say();
	goto labelFunc009B_006E;
labelFunc009B_0063:
	message("Skara Brae 的摆渡人站在他幽灵般的船上，将撑篙横在胸前。他注意到了你的靠近。「要回到大陆……你不需要付费。」");
	say();
	UI_add_answer("返回");
labelFunc009B_006E:
	if (!gflags[0x01A3]) goto labelFunc009B_0078;
	message("他似乎有点不满。「我告诉过你我会在这里……直到永恒的尽头。」");
	say();
labelFunc009B_0078:
	UI_add_answer(["姓名", "职业", "摆渡人", "迷雾海峡", "Skara Brae", "告辞"]);
	if (!(!gflags[0x0197])) goto labelFunc009B_009F;
	UI_add_answer("付费");
labelFunc009B_009F:
	converse attend labelFunc009B_028B;
	case "姓名" attend labelFunc009B_00B5:
	message("「我是……摆渡人。」他的声音像船的摇晃声一样嘎吱作响。");
	say();
	UI_remove_answer("姓名");
labelFunc009B_00B5:
	case "职业" attend labelFunc009B_00C1:
	message("摆渡人一开始没有回应，困惑地摇了摇头。「我是……摆渡人。」");
	say();
labelFunc009B_00C1:
	case "摆渡人" attend labelFunc009B_00D4:
	message("「是的，如果你付钱给我……我可以带你渡过迷雾海峡。」");
	say();
	UI_remove_answer("摆渡人");
labelFunc009B_00D4:
	case "迷雾海峡" attend labelFunc009B_00E7:
	message("他转向一侧，挥动着他骨瘦如柴的手，在船停泊的水面上划过。「这……就是迷雾海峡。」");
	say();
	UI_remove_answer("迷雾海峡");
labelFunc009B_00E7:
	case "Skara Brae" attend labelFunc009B_019A:
	if (!(!gflags[0x0197])) goto labelFunc009B_018F;
	message("他完全转过身，指着西边的水面。「那里……」");
	say();
	if (!(var0001 && var0000)) goto labelFunc009B_018C;
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「呃……");
	message(var0002);
	message("，你确定我们需要去那边吗？」*");
	say();
	UI_remove_npc_face(0xFFFD);
	UI_show_npc_face(0xFFFE, 0x0000);
	message("「怎么了， Shamino ？你『害怕』了吗？」*");
	say();
	UI_remove_npc_face(0xFFFE);
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「当然没有！我只是……好吧，我……噢，算了！我们走吧！」*");
	say();
	UI_remove_npc_face(0xFFFD);
	var0003 = Func08F7(0xFFFF);
	if (!var0003) goto labelFunc009B_0182;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("Iolo 瞇起眼睛，脸上带着一种居高临下的神情。~~「我想你应该一点都不怕吧？」他对 Spark 说。*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFFE, 0x0000);
	message("「不，先生。我不怕骷髅，」他说。然而，当他看着摆渡人时，却咽了一口口水。*");
	say();
	UI_remove_npc_face(0xFFFE);
labelFunc009B_0182:
	UI_show_npc_face(0xFEE3, 0x0000);
labelFunc009B_018C:
	goto labelFunc009B_0193;
labelFunc009B_018F:
	message("这憔悴的身影环顾四周，仿佛感到困惑。「这里……就是 Skara Brae 。」");
	say();
labelFunc009B_0193:
	UI_remove_answer("Skara Brae");
labelFunc009B_019A:
	case "付费", "返回" attend labelFunc009B_024F:
	if (!(!gflags[0x0197])) goto labelFunc009B_01EF;
	message("「你愿意支付我的代价……以获得前往 Skara Brae 的通行权吗？」");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc009B_01E8;
	var0005 = UI_remove_party_items(0x0002, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0005) goto labelFunc009B_01E1;
	message("你将硬币放在这幽灵的手掌中，他骨瘦如柴的手指将它们握住。「上船吧……如果你想去……死者之岛的话。」");
	say();
	Func0882(item);
	goto labelFunc009B_01E5;
labelFunc009B_01E1:
	message("「没有适当的报酬……我不会渡河。」");
	say();
labelFunc009B_01E5:
	goto labelFunc009B_01EC;
labelFunc009B_01E8:
	message("「那好吧。」他似乎有点失望。");
	say();
labelFunc009B_01EC:
	goto labelFunc009B_0242;
labelFunc009B_01EF:
	message("「你希望……返回大陆吗？」");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc009B_023E;
	var0006 = UI_get_npc_object(0xFF70);
	var0007 = UI_get_party_list();
	var0008 = UI_get_npc_object(0xFF6D);
	if (!((var0006 in var0007) || (var0008 in var0007))) goto labelFunc009B_0233;
	message("「我不能载运灵魂前往大陆。」他将撑篙挡在身前，阻挡了你上船的路。");
	say();
	goto labelFunc009B_023B;
labelFunc009B_0233:
	message("摆渡人在兜帽下似乎笑了笑，示意你再次登上他那幽灵般的船。");
	say();
	Func0882(item);
labelFunc009B_023B:
	goto labelFunc009B_0242;
labelFunc009B_023E:
	message("你觉得你看到在他兜帽深处，眼睛本该在的位置有苍白的火焰闪烁。当他叹息时，火焰消退了，「无妨……」");
	say();
labelFunc009B_0242:
	UI_remove_answer(["付费", "返回"]);
labelFunc009B_024F:
	case "牺牲" attend labelFunc009B_027B:
	if (!(!gflags[0x0199])) goto labelFunc009B_0270;
	message("就在那一瞬间，你觉得你看到摆渡人骷髅般的脸庞上闪过一丝短暂的希望神情，然后就消失了。「我必须履行我的职责……直到永恒的尽头。」");
	say();
	UI_remove_answer("牺牲");
	gflags[0x0199] = true;
	goto labelFunc009B_027B;
labelFunc009B_0270:
	message("「不要用解脱的希望……来嘲弄我。我必须履行我的职责……直到永恒的尽头。」");
	say();
	UI_remove_answer("牺牲");
labelFunc009B_027B:
	case "告辞" attend labelFunc009B_0288:
	message("摆渡人没有回应你的告别，低下了头，将撑篙横在胸前。*");
	say();
	abort;
labelFunc009B_0288:
	goto labelFunc009B_009F;
labelFunc009B_028B:
	endconv;
labelFunc009B_028C:
	if (!(event == 0x0000)) goto labelFunc009B_0295;
	abort;
labelFunc009B_0295:
	return;
}


