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
	message("「有什麼問題嗎？你對你的任務感到困惑嗎？」");
	say();
	var0001 = Func090A();
	if (!(!var0001)) goto labelFunc08AF_0039;
	message("「那麼，我建議你儘快完成任務，免得井裡的靈魂消逝。*」");
	say();
	abort;
	goto labelFunc08AF_0056;
labelFunc08AF_0039:
	message("「你找不到鎮上的靈魂嗎？」");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc08AF_0051;
	message("「那麼，我建議你趕快行動，免得井裡的靈魂消逝。」*");
	say();
	abort;
	goto labelFunc08AF_0056;
labelFunc08AF_0051:
	message("「啊，那麼你回來真是太好了。鎮長認識大多數的鎮民，可以告訴你關於他們的事。」*");
	say();
	abort;
labelFunc08AF_0056:
	goto labelFunc08AF_008F;
labelFunc08AF_0059:
	if (!(!gflags[0x01A3])) goto labelFunc08AF_007F;
	message("「非常好，現在你得帶鎮長去井邊，他必須自願進入。當他這麼做時，島上和井裡的靈魂就能自由地走向他們的命運。遺憾的是，Mayor Forsythe 將永遠迷失。」");
	say();
	var0003 = Func08F7(0xFF6D);
	if (!var0003) goto labelFunc08AF_0077;
	message("他悲傷地看著那位鬼魂紳士。");
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