#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);
extern var Func0908 0x908 ();

void Func08CE 0x8CE ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	var0000 = Func08F7(0xFF48);
	var0001 = Func08F7(0xFF44);
	var0002 = Func08F7(0xFF46);
	var0003 = Func08F7(0xFFFE);
	var0004 = Func0908();
	message("有翼石像鬼开始了他的布道。");
	say();
	if (!var0000) goto labelFunc08CE_0038;
	message("你看到石像鬼办事员在角落做着记录。");
	say();
labelFunc08CE_0038:
	message("「今晚要谈论为何友谊会对你们的生活至关重要。要明白我们每个人都寻求友谊会以求完整。要曾拥有梦想与渴望。」*");
	say();
	if (!var0002) goto labelFunc08CE_0061;
	UI_show_npc_face(0xFF46, 0x0000);
	message("「要非常真实。」*");
	say();
	UI_remove_npc_face(0xFF46);
	UI_show_npc_face(0xFF47, 0x0000);
labelFunc08CE_0061:
	message("「要明白其他非会员的人已经放弃了他们的梦想。要看到他们屈服于平庸的生活以寻求稳定。」*");
	say();
	if (!var0003) goto labelFunc08CE_008A;
	UI_show_npc_face(0xFFFE, 0x0000);
	message("「这真是无聊。我们去吃点东西吧——我肚子饿了！」*");
	say();
	UI_remove_npc_face(0xFFFE);
	UI_show_npc_face(0xFF47, 0x0000);
labelFunc08CE_008A:
	message("「要看到他们开始产生不切实际的想法并失去协调。要从追求目标的真正道路上走入歧途。要与现实脱节。」他叹了口气。「要在他们所做的事中遭遇失败，而非成功。」*");
	say();
	if (!var0001) goto labelFunc08CE_00B3;
	UI_show_npc_face(0xFF44, 0x0000);
	message("「要非常悲伤。」*");
	say();
	UI_remove_npc_face(0xFF44);
	UI_show_npc_face(0xFF47, 0x0000);
labelFunc08CE_00B3:
	message("「要明白，」他微笑道，「在座的每位会员都经历了如此走向现实世界的觉醒。要在这个组织中找到一条清晰的道路，以达成我们所追求的目标！」~~在座的会员全都站了起来高声欢呼。*");
	say();
	var0005 = Func08F7(0xFFFF);
	if (!var0005) goto labelFunc08CE_00E2;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「我们该离开了，");
	message(var0004);
	message("。」*");
	say();
	UI_remove_npc_face(0xFFFF);
	abort;
labelFunc08CE_00E2:
	return;
}