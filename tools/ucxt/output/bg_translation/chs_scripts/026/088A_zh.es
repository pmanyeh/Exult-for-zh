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
	message("在得知没有镇民愿意为了更大的利益牺牲自己后，Forsythe 的眼中闪烁着奇异的光芒。他下巴紧绷，肩膀挺直。~~「既然如此，这件事总得有人去做！既然没有其他勇敢的灵魂愿意挺身而出，或许就该由我来让所有人看看，什么才是真正的勇气。」他像个领主般大步迈向前，站稳了脚步。「请行个好，带我前往那口井吧。");
	message(var0000);
	message("。」*");
	say();
	UI_remove_answer("牺牲");
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
	message("他排进队伍，示意你带路。*");
	say();
	UI_add_to_party(0xFF6D);
	gflags[0x0198] = false;
	abort;
	goto labelFunc088A_0073;
labelFunc088A_006E:
	message("「你的同伴太多了，我现在不能跟随你。」");
	say();
	abort;
labelFunc088A_0073:
	return;
}


