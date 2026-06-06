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
	message("在得知沒有鎮民願意為了更大的利益犧牲自己後，Forsythe 的眼中閃爍著奇異的光芒。他下巴緊繃，肩膀挺直。~~\"Well, then. It has got to be done! And since no other brave soul will do it, perhaps I shall have to show them all what real courage is.\" He strides forward like a lord and plants his feet. \"Please be kind enough to lead me to the well, ");
	message(var0000);
	message(".\"*");
	say();
	UI_remove_answer("sacrifice");
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


