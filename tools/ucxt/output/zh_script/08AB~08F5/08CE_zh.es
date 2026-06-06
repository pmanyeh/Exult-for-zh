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
	message("有翼石像鬼開始了他的佈道。");
	say();
	if (!var0000) goto labelFunc08CE_0038;
	message("你看到石像鬼辦事員在角落做著記錄。");
	say();
labelFunc08CE_0038:
	message("「今晚要談論為何友誼會對你們的生活至關重要。要明白我們每個人都尋求友誼會以求完整。要曾擁有夢想與渴望。」*");
	say();
	if (!var0002) goto labelFunc08CE_0061;
	UI_show_npc_face(0xFF46, 0x0000);
	message("「要非常真實。」*");
	say();
	UI_remove_npc_face(0xFF46);
	UI_show_npc_face(0xFF47, 0x0000);
labelFunc08CE_0061:
	message("「要明白其他非會員的人已經放棄了他們的夢想。要看到他們屈服於平庸的生活以尋求穩定。」*");
	say();
	if (!var0003) goto labelFunc08CE_008A;
	UI_show_npc_face(0xFFFE, 0x0000);
	message("「這真是無聊。我們去吃點東西吧——我肚子餓了！」*");
	say();
	UI_remove_npc_face(0xFFFE);
	UI_show_npc_face(0xFF47, 0x0000);
labelFunc08CE_008A:
	message("「要看到他們開始產生不切實際的想法並失去協調。要從追求目標的真正道路上走入歧途。要與現實脫節。」他嘆了口氣。「要在他們所做的事中遭遇失敗，而非成功。」*");
	say();
	if (!var0001) goto labelFunc08CE_00B3;
	UI_show_npc_face(0xFF44, 0x0000);
	message("「要非常悲傷。」*");
	say();
	UI_remove_npc_face(0xFF44);
	UI_show_npc_face(0xFF47, 0x0000);
labelFunc08CE_00B3:
	message("「要明白，」他微笑道，「在座的每位會員都經歷了如此走向現實世界的覺醒。要在這個組織中找到一條清晰的道路，以達成我們所追求的目標！」~~在座的會員全都站了起來高聲歡呼。*");
	say();
	var0005 = Func08F7(0xFFFF);
	if (!var0005) goto labelFunc08CE_00E2;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「我們該離開了，");
	message(var0004);
	message("。」*");
	say();
	UI_remove_npc_face(0xFFFF);
	abort;
labelFunc08CE_00E2:
	return;
}