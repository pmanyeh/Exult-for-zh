#game "serpentisle"
// externs
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0955 0x955 ();
extern void Func0856 0x856 ();

void Func0162 shape#(0x162) ()
{
	var var0000;

	if (!(event == 0x0001)) goto labelFunc0162_0028;
	UI_item_say(0xFE9C, "@Ho! Goblin King!@");
	item->Func07D1();
	Func097F(item, "@What doing here?@", 0x0003);
	UI_set_schedule_type(item, 0x0003);
labelFunc0162_0028:
	if (!(((event == 0x0009) || (event == 0x0007)) && (!UI_get_item_flag(item, 0x001E)))) goto labelFunc0162_0142;
	var0000 = UI_set_npc_prop(item, 0x0003, 0x001E);
	UI_set_item_flag(item, 0x001E);
	UI_clear_item_say(item);
	UI_set_schedule_type(item, 0x0000);
	UI_show_npc_face0(0xFEF2, 0x0000);
	message("\"So, brave warrior come to kill King Goblin? Ha! We speak first...\"");
	say();
	UI_add_answer(["name", "goblins", "Helm of Monitor", "Simon", "bye"]);
labelFunc0162_0087:
	converse attend labelFunc0162_0141;
	case "name" attend labelFunc0162_009D:
	UI_remove_answer("name");
	message("\"Me Pomdirgun, Warlord and King of all Goblins. Mine shall be last name thou wilt ever hear.\"");
	say();
labelFunc0162_009D:
	case "goblins" attend labelFunc0162_00B7:
	UI_remove_answer("goblins");
	message("\"Once land where Monitor built was Goblin land. Then Men come and take it. So now we kill them.\"");
	say();
	UI_add_answer("Men");
labelFunc0162_00B7:
	case "Men" attend labelFunc0162_00CA:
	UI_remove_answer("Men");
	message("\"One day we kill all Men. Today we kill thee. Ha! Then eat thee for supper! Mmm... Tasty!\"");
	say();
labelFunc0162_00CA:
	case "Helm of Monitor" attend labelFunc0162_00DD:
	UI_remove_answer("Helm of Monitor");
	message("\"So! Simon told thee I had it. It is mine and I will keep it!\"");
	say();
labelFunc0162_00DD:
	case "Simon" attend labelFunc0162_012B:
	UI_remove_answer("Simon");
	message("\"Thou knowest Simon's secret? Doth all of Monitor know?\"");
	say();
	if (!Func0955()) goto labelFunc0162_0114;
	message("\"Then Simon dead. Was good spy. Didst thou eat him?\"");
	say();
	if (!Func0955()) goto labelFunc0162_010A;
	message("\"Eagh! Thou dost disgust me.\"");
	say();
	Func0856();
	goto labelFunc0162_0111;
labelFunc0162_010A:
	message("\"Simon would not taste very good anyway. I will kill thee now.\"");
	say();
	Func0856();
labelFunc0162_0111:
	goto labelFunc0162_012B;
labelFunc0162_0114:
	if (!gflags[0x003E]) goto labelFunc0162_0124;
	message("\"Then thou must die to keep his secret!\"");
	say();
	Func0856();
	goto labelFunc0162_012B;
labelFunc0162_0124:
	message("\"Why thou knowest that?\"");
	say();
	Func0856();
labelFunc0162_012B:
	case "bye" attend labelFunc0162_013E:
	UI_item_say(item, "@I will kill thee now!@");
	Func0856();
labelFunc0162_013E:
	goto labelFunc0162_0087;
labelFunc0162_0141:
	endconv;
labelFunc0162_0142:
	if (!((event == 0x0007) && UI_get_item_flag(item, 0x001E))) goto labelFunc0162_0170;
	UI_clear_item_flag(item, 0x001D);
	Func097F(item, "@Thou hast slain me...@", 0x0000);
	UI_reduce_health(item, 0x0037, 0x0000);
labelFunc0162_0170:
	return;
}


