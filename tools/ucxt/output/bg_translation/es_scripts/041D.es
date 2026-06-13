#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func041D object#(0x41D) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0001)) goto labelFunc041D_0154;
	UI_show_npc_face(0xFFE3, 0x0000);
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x009E])) goto labelFunc041D_0034;
	message("This actor has much stage presence and a booming voice.");
	say();
	gflags[0x009E] = true;
	goto labelFunc041D_0038;
labelFunc041D_0034:
	message("Stuart looks down his nose at you. \"Yes?\"");
	say();
labelFunc041D_0038:
	converse attend labelFunc041D_014F;
	case "name" attend labelFunc041D_0055:
	message("\"My real name is Stuart. My stage name is Laurence.\"");
	say();
	UI_remove_answer("name");
	UI_add_answer("Laurence");
labelFunc041D_0055:
	case "job" attend labelFunc041D_0068:
	message("\"I am the greatest actor who ever lived,\" he proclaims with absolutely no modesty. \"I am playing the character 'Iolo' in the new play.\"");
	say();
	UI_add_answer("Iolo");
labelFunc041D_0068:
	case "Laurence" attend labelFunc041D_007B:
	message("\"'Tis the name of a particular hero of mine.\"");
	say();
	UI_remove_answer("Laurence");
labelFunc041D_007B:
	case "Iolo" attend labelFunc041D_0101:
	message("Stuart's feathers are obviously ruffled. \"Yes. I have been cast as second banana yet again! I am much more suited to play the Avatar, but did Raymundo cast me? Noooo!\"");
	say();
	var0000 = Func08F7(0xFFFF);
	if (!var0000) goto labelFunc041D_00ED;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("\"But thou art nothing like me!\"*");
	say();
	UI_show_npc_face(0xFFE3, 0x0000);
	message("\"And who art thou, pray tell?\"*");
	say();
	UI_show_npc_face(0xFFFF, 0x0000);
	message("\"Why, I am the -real- Iolo!\"*");
	say();
	UI_show_npc_face(0xFFE3, 0x0000);
	message("\"Of course thou art. And I am really Lord British. Thou must take me for an ass to think I would believe that.\"*");
	say();
	UI_show_npc_face(0xFFFF, 0x0000);
	message("Your friend whispers to you. \"These actor types. A touchy bunch, eh?\"*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFE3, 0x0000);
labelFunc041D_00ED:
	UI_add_answer(["Raymundo", "Avatar"]);
	UI_remove_answer("Iolo");
labelFunc041D_0101:
	case "Raymundo" attend labelFunc041D_0114:
	message("\"I suppose he's a good director. He never casts me in the right roles, though. And to think I went to school with him! We were on our first stage crew together!\"");
	say();
	UI_remove_answer("Raymundo");
labelFunc041D_0114:
	case "Avatar" attend labelFunc041D_012E:
	message("Stuart whispers to you, \"Jesse is all wrong! Why, -thou- wouldst make a better Avatar than he! And -thou- probably couldst not act thy way out of a reagent bag! That is not a reflection on thee, but on Jesse.\"");
	say();
	UI_add_answer("act");
	UI_remove_answer("Avatar");
labelFunc041D_012E:
	case "act" attend labelFunc041D_0141:
	message("\"Acting is the highest form of art. It allows one to step outside oneself and become another person. 'Tis like a game!\"");
	say();
	UI_remove_answer("act");
labelFunc041D_0141:
	case "bye" attend labelFunc041D_014C:
	goto labelFunc041D_014F;
labelFunc041D_014C:
	goto labelFunc041D_0038;
labelFunc041D_014F:
	endconv;
	message("\"Goodbye. Be sure to come to the show when it opens!\"*");
	say();
labelFunc041D_0154:
	if (!(event == 0x0000)) goto labelFunc041D_01DB;
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFFE3));
	var0003 = UI_die_roll(0x0001, 0x0004);
	if (!(var0002 == 0x001D)) goto labelFunc041D_01D5;
	if (!(var0003 == 0x0001)) goto labelFunc041D_0198;
	var0004 = "@I am Iolo, my liege!@";
labelFunc041D_0198:
	if (!(var0003 == 0x0002)) goto labelFunc041D_01A8;
	var0004 = "@I hear something to the east!@";
labelFunc041D_01A8:
	if (!(var0003 == 0x0003)) goto labelFunc041D_01B8;
	var0004 = "@This is Dungeon Despise!@";
labelFunc041D_01B8:
	if (!(var0003 == 0x0004)) goto labelFunc041D_01C8;
	var0004 = "@Ready the bow to use it!@";
labelFunc041D_01C8:
	UI_item_say(0xFFE3, var0004);
	goto labelFunc041D_01DB;
labelFunc041D_01D5:
	Func092E(0xFFE3);
labelFunc041D_01DB:
	return;
}


