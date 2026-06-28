#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern var Func08F7 0x8F7 (var var0000);
extern void Func08B1 0x8B1 ();
extern void Func08B2 0x8B2 ();

void Func08AF 0x8AF ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	UI_show_npc_face(0xFF73, 0x0001);
	var0000 = UI_get_party_list();
	if (!(!(UI_get_npc_object(0xFF6D) in var0000))) goto labelFunc08AF_0059;
	message("「有什么问题吗？你对你的任务感到困惑吗？」");
	say();
	var0001 = Func090A();
	if (!(!var0001)) goto labelFunc08AF_0039;
	message("「那么，我建议你尽快完成任务，免得井里的灵魂消逝。*」");
	say();
	abort;
	goto labelFunc08AF_0056;
labelFunc08AF_0039:
	message("「你找不到镇上的灵魂吗？」");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc08AF_0051;
	message("「那么，我建议你赶快行动，免得井里的灵魂消逝。」*");
	say();
	abort;
	goto labelFunc08AF_0056;
labelFunc08AF_0051:
	message("「啊，那么你回来真是太好了。镇长认识大多数的镇民，可以告诉你关于他们的事。」*");
	say();
	abort;
labelFunc08AF_0056:
	goto labelFunc08AF_008F;
labelFunc08AF_0059:
	if (!(!gflags[0x01A3])) goto labelFunc08AF_007F;
	message("「非常好，现在你得带镇长去井边，他必须自愿进入。当他这么做时，岛上和井里的灵魂就能自由地走向他们的命运。遗憾的是，Mayor Forsythe 将永远迷失。」");
	say();
	var0003 = Func08F7(0xFF6D);
	if (!var0003) goto labelFunc08AF_0077;
	message("他悲伤地看着那位鬼魂绅士。");
	say();
labelFunc08AF_0077:
	message("*");
	say();
	abort;
	goto labelFunc08AF_008F;
labelFunc08AF_007F:
	if (!(!gflags[0x01AB])) goto labelFunc08AF_008C;
	Func08B1();
	goto labelFunc08AF_008F;
labelFunc08AF_008C:
	Func08B2();
labelFunc08AF_008F:
	return;
}