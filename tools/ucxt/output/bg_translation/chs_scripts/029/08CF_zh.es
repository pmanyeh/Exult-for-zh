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
	message("「各位会员，你们每个人都曾面对——且毫无疑问地将再次面对——那种感受到狂热高温的时刻。一个你的心智被幻觉与幻象所蒙蔽的时刻。一个你的理智毫无理由便彻底消失的时刻。一个甚至连你自己或许都曾质疑过友谊会箴言的时刻！」*");
	say();
	if (!var0000) goto labelFunc08CF_004D;
	UI_show_npc_face(0xFF64, 0x0000);
	message("你看到那名办事员倒吸了一口气，双眼因不敢置信而睁大。*");
	say();
	UI_remove_npc_face(0xFF64);
	UI_show_npc_face(0xFF06, 0x0000);
labelFunc08CF_004D:
	message("「三位一体 (Triad) 的第二项原则是『信任你的兄弟』。当你了解自己的兄弟时，这只是一个简单的实践。但友谊会并非向来为你所知。在过去，要将你的信任托付给像友谊会这样庞大的组织，或许并非易事。~~然而，为了充分了解你内在的力量，人必须有勇气踏上信任的烈火！」*");
	say();
	if (!var0001) goto labelFunc08CF_0076;
	UI_show_npc_face(0xFF63, 0x0000);
	message("「这是真的！信任就是我获得自由的关键！」*");
	say();
	UI_remove_npc_face(0xFF63);
	UI_show_npc_face(0xFF06, 0x0000);
labelFunc08CF_0076:
	message("「信任需要极大的勇气，而那份勇气就存在于你自身之中。」*");
	say();
	if (!var0002) goto labelFunc08CF_00B7;
	UI_show_npc_face(0xFFFF, 0x0000);
	message(" Iolo 向你靠了过来。~~「我相信我们听得够多了，不是吗？」*");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc08CF_00A2;
	message("「很好。我们走吧。」*");
	say();
	abort;
	goto labelFunc08CF_00B7;
labelFunc08CF_00A2:
	message(" Iolo 深深地叹了一口气。*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFF06, 0x0000);
labelFunc08CF_00B7:
	message("「但只要人能保持清醒，这个问题就不会困扰你。」*");
	say();
	if (!var0003) goto labelFunc08CF_00D0;
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「来吧，朋友。这已经听得够多了。这顿我请客。」~~当你走出大厅时，领袖的声音依然在耳边喋喋不休地回荡着。*");
	say();
	abort;
labelFunc08CF_00D0:
	return;
}