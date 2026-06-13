#game "blackgate"
// externs
extern var Func0909 0x909 ();

void Func088A 0x88A ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	var0000 = Func0909();
	message("在得知沒有鎮民願意為了更大的利益犧牲自己後，Forsythe 的眼中閃爍著奇異的光芒。他下巴緊繃，肩膀挺直。~~「既然如此，這件事總得有人去做！既然沒有其他勇敢的靈魂願意挺身而出，或許就該由我來讓所有人看看，什麼才是真正的勇氣。」他像個領主般大步邁向前，站穩了腳步。「請行個好，帶我前往那口井吧。");
	message(var0000);
	message("。」*");
	say();
	UI_remove_answer("犧牲");
	var0001 = 0x0000;
	var0002 = UI_get_party_list();
	var0003 = UI_get_npc_object(0xFFF8);
	var0004 = UI_get_npc_object(0xFFF7);
	enum();
labelFunc088A_0039:
	for (var0007 in var0002 with var0005 to var0006) attend labelFunc088A_0051;
	var0001 = (var0001 + 0x0001);
	goto labelFunc088A_0039;
labelFunc088A_0051:
	if (!(var0001 < 0x0008)) goto labelFunc088A_006E;
	message("他排進隊伍，示意你帶路。*");
	say();
	UI_add_to_party(0xFF6D);
	gflags[0x0198] = false;
	abort;
	goto labelFunc088A_0073;
labelFunc088A_006E:
	message("「你的同伴太多了，我現在不能跟隨你。」");
	say();
	abort;
labelFunc088A_0073:
	return;
}


