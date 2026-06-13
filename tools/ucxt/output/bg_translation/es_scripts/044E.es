#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func044E object#(0x44E) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;
	var var0009;

	if (!(event == 0x0001)) goto labelFunc044E_01BE;
	UI_show_npc_face(0xFFB2, 0x0000);
	UI_add_answer(["name", "job", "bye"]);
	var0000 = UI_get_schedule_type(UI_get_npc_object(0xFFB2));
	if (!gflags[0x00E4]) goto labelFunc044E_0043;
	if (!gflags[0x00F0]) goto labelFunc044E_0043;
	UI_add_answer("Rayburt");
labelFunc044E_0043:
	if (!(!gflags[0x00EB])) goto labelFunc044E_0055;
	message("You see a friendly woman in her thirties.");
	say();
	gflags[0x00EB] = true;
	goto labelFunc044E_0059;
labelFunc044E_0055:
	message("\"Greetings, again!\" Pamela says.");
	say();
labelFunc044E_0059:
	converse attend labelFunc044E_01B9;
	case "name" attend labelFunc044E_0080:
	message("\"I am Pamela!\"");
	say();
	UI_remove_answer("name");
	if (!gflags[0x00E4]) goto labelFunc044E_007C;
	UI_add_answer("Rayburt");
labelFunc044E_007C:
	gflags[0x00F0] = true;
labelFunc044E_0080:
	case "job" attend labelFunc044E_00BD:
	message("\"I am the Innkeeper at the Out'n'Inn.\"");
	say();
	if (!((var0000 == 0x0010) || (var0000 == 0x000B))) goto labelFunc044E_00AC;
	message("\"If thou wouldst like a room, just say so!\"");
	say();
	UI_add_answer("room");
	goto labelFunc044E_00B6;
labelFunc044E_00AC:
	if (!0x001A) goto labelFunc044E_00B6;
	message("\"Please come by if thou wouldst like to rest thy weary feet for the night!\"");
	say();
labelFunc044E_00B6:
	UI_add_answer("Out'n Inn");
labelFunc044E_00BD:
	case "room" attend labelFunc044E_016B:
	message("\"The room is quite inexpensive. Only 8 gold per person. Want one?\"");
	say();
	if (!Func090A()) goto labelFunc044E_0160;
	var0001 = UI_get_party_list();
	var0002 = 0x0000;
	enum();
labelFunc044E_00DD:
	for (var0005 in var0001 with var0003 to var0004) attend labelFunc044E_00F5;
	var0002 = (var0002 + 0x0001);
	goto labelFunc044E_00DD;
labelFunc044E_00F5:
	var0006 = (var0002 * 0x0008);
	var0007 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var0007 >= var0006)) goto labelFunc044E_0159;
	var0008 = UI_add_party_items(0x0001, 0x0281, 0x00FF, 0xFE99, true);
	if (!(!var0008)) goto labelFunc044E_013E;
	message("\"Thou art carrying too much to take the room key!\"");
	say();
	goto labelFunc044E_0156;
labelFunc044E_013E:
	message("\"Here is thy room key. It is good only until thou leavest.\"");
	say();
	var0009 = UI_remove_party_items(var0006, 0x0284, 0xFE99, 0xFE99, true);
labelFunc044E_0156:
	goto labelFunc044E_015D;
labelFunc044E_0159:
	message("\"Thou dost not have enough gold, eh? Too bad.\"");
	say();
labelFunc044E_015D:
	goto labelFunc044E_0164;
labelFunc044E_0160:
	message("\"Another night, then.\"");
	say();
labelFunc044E_0164:
	UI_remove_answer("room");
labelFunc044E_016B:
	case "Out'n Inn" attend labelFunc044E_017E:
	message("\"Well... Cove is the city of Love and Passion, didst thou not know? Thou must be careful. If thou dost stay too long in Cove, thou wilt fall in love with someone! Mark my words!\"");
	say();
	UI_remove_answer("Out'n Inn");
labelFunc044E_017E:
	case "Rayburt" attend labelFunc044E_0198:
	message("\"Oooh, he is such a wonderful man, dost thou not think? He is so intense and serious. Handsome, too! Oh, and\tI like Regal as well.\"");
	say();
	UI_remove_answer("Rayburt");
	UI_add_answer("Regal");
labelFunc044E_0198:
	case "Regal" attend labelFunc044E_01AB:
	message("\"As far as dogs go, he is handsome, too!\"");
	say();
	UI_remove_answer("Regal");
labelFunc044E_01AB:
	case "bye" attend labelFunc044E_01B6:
	goto labelFunc044E_01B9;
labelFunc044E_01B6:
	goto labelFunc044E_0059;
labelFunc044E_01B9:
	endconv;
	message("\"See thee soon!\"*");
	say();
labelFunc044E_01BE:
	if (!(event == 0x0000)) goto labelFunc044E_01CC;
	Func092E(0xFFB2);
labelFunc044E_01CC:
	return;
}


