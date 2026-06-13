#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();

void Func08CF 0x8CF ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	var0000 = Func08F7(0xFF64);
	var0001 = Func08F7(0xFF63);
	var0002 = Func08F7(0xFFFF);
	var0003 = Func08F7(0xFFFC);
	message("「各位會員，你們每個人都曾面對——且毫無疑問地將再次面對——那種感受到狂熱高溫的時刻。一個你的心智被幻覺與幻象所蒙蔽的時刻。一個你的理智毫無理由便徹底消失的時刻。一個甚至連你自己或許都曾質疑過友誼會箴言的時刻！」*");
	say();
	if (!var0000) goto labelFunc08CF_004D;
	UI_show_npc_face(0xFF64, 0x0000);
	message("你看到那名辦事員倒吸了一口氣，雙眼因不敢置信而睜大。*");
	say();
	UI_remove_npc_face(0xFF64);
	UI_show_npc_face(0xFF06, 0x0000);
labelFunc08CF_004D:
	message("「三位一體 (Triad) 的第二項原則是『信任你的兄弟』。當你了解自己的兄弟時，這只是一個簡單的實踐。但友誼會並非向來為你所知。在過去，要將你的信任託付給像友誼會這樣龐大的組織，或許並非易事。~~然而，為了充分了解你內在的力量，人必須有勇氣踏上信任的烈火！」*");
	say();
	if (!var0001) goto labelFunc08CF_0076;
	UI_show_npc_face(0xFF63, 0x0000);
	message("「這是真的！信任就是我獲得自由的關鍵！」*");
	say();
	UI_remove_npc_face(0xFF63);
	UI_show_npc_face(0xFF06, 0x0000);
labelFunc08CF_0076:
	message("「信任需要極大的勇氣，而那份勇氣就存在於你自身之中。」*");
	say();
	if (!var0002) goto labelFunc08CF_00B7;
	UI_show_npc_face(0xFFFF, 0x0000);
	message(" Iolo 向你靠了過來。~~「我相信我們聽得夠多了，不是嗎？」*");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc08CF_00A2;
	message("「很好。我們走吧。」*");
	say();
	abort;
	goto labelFunc08CF_00B7;
labelFunc08CF_00A2:
	message(" Iolo 深深地嘆了一口氣。*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFF06, 0x0000);
labelFunc08CF_00B7:
	message("「但只要人能保持清醒，這個問題就不會困擾你。」*");
	say();
	if (!var0003) goto labelFunc08CF_00D0;
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「來吧，朋友。這已經聽得夠多了。這頓我請客。」~~當你走出大廳時，領袖的聲音依然在耳邊喋喋不休地迴盪著。*");
	say();
	abort;
labelFunc08CF_00D0:
	return;
}