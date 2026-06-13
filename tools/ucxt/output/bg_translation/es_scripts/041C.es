#game "blackgate"
// externs
extern void Func092E 0x92E (var var0000);

void Func041C object#(0x41C) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc041C_0159;
	var0000 = UI_is_pc_female();
	if (!var0000) goto labelFunc041C_0022;
	UI_show_npc_face(0xFFE4, 0x0001);
	goto labelFunc041C_002C;
labelFunc041C_0022:
	UI_show_npc_face(0xFFE4, 0x0000);
labelFunc041C_002C:
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x009D])) goto labelFunc041C_0058;
	message("This is a tall, skinny actor with knobby knees.");
	say();
	if (!var0000) goto labelFunc041C_0051;
	message("He wears a woman's wig and is dressed in drag.");
	say();
labelFunc041C_0051:
	gflags[0x009D] = true;
	goto labelFunc041C_0077;
labelFunc041C_0058:
	if (!var0000) goto labelFunc041C_0067;
	var0001 = " he says in falsetto.";
	goto labelFunc041C_006D;
labelFunc041C_0067:
	var0001 = "";
labelFunc041C_006D:
	message("Jesse clears his throat. \"Hello again!\"");
	message(var0001);
	message("");
	say();
labelFunc041C_0077:
	converse attend labelFunc041C_0154;
	case "name" attend labelFunc041C_00A1:
	if (!var0000) goto labelFunc041C_008C;
	message("The actor speaks in falsetto.");
	say();
labelFunc041C_008C:
	message("\"I am Jesse and I am a star.\"");
	say();
	UI_remove_answer("name");
	if (!var0000) goto labelFunc041C_00A1;
	message("He slaps his own face and speaks in a normal register, \"Oops, sorry! I am so entrenched in the role that I sometimes forget that I am not a woman!\"");
	say();
labelFunc041C_00A1:
	case "job" attend labelFunc041C_00BA:
	message("\"I work at the Royal Theatre as an actor. I have played -all- the great roles in my career. I now have the chance to play the part of a lifetime -- the Avatar!\"");
	say();
	UI_add_answer(["Royal Theatre", "Avatar"]);
labelFunc041C_00BA:
	case "Royal Theatre" attend labelFunc041C_00DA:
	message("\"Because it must cater to the masses, we never have the opportunity to do experimental works -- only the traditional gruel of mediocrity. But 'tis a wonderful space and it has marvelous acoustics.\"");
	say();
	UI_add_answer(["masses", "experimental works"]);
	UI_remove_answer("Royal Theatre");
labelFunc041C_00DA:
	case "masses" attend labelFunc041C_00ED:
	message("\"People like to see tales of heroic adventures, knights in armour, beautiful princesses, wise kings, wizards, evil monsters. All that rot.\"");
	say();
	UI_remove_answer("masses");
labelFunc041C_00ED:
	case "Avatar" attend labelFunc041C_010D:
	message("\"The role is very challenging. I have a plethora of lines and I had to work with a trainer for weeks to prepare for the enormous amount of activity required. This role will make 'Jesse' a household name!\"");
	say();
	UI_add_answer(["challenging", "lines"]);
	UI_remove_answer("Avatar");
labelFunc041C_010D:
	case "challenging" attend labelFunc041C_0120:
	message("\"It is easily the most ambitious theatrical production ever conceived. There is over a hundred hours of play time. That is a long time for an audience.\"");
	say();
	UI_remove_answer("challenging");
labelFunc041C_0120:
	case "lines" attend labelFunc041C_0133:
	message("\"My biggest lines are:~~\"Name!\"~~\"Job!\"~~\"Bye!\"");
	say();
	UI_remove_answer("lines");
labelFunc041C_0133:
	case "experimental works" attend labelFunc041C_0146:
	message("\"My favorite piece is something Raymundo wrote for me entitled 'Three on a Codpiece'. I stand on stage and invite the audience to join me in tearing an undergarment into tiny pieces, after which they are placed in funeral urns and mixed with wheat paste. The pieces of cloth, not the audience members. Then the audience may glue the pieces anywhere on my body that they wish.\"");
	say();
	UI_remove_answer("experimental works");
labelFunc041C_0146:
	case "bye" attend labelFunc041C_0151:
	goto labelFunc041C_0154;
labelFunc041C_0151:
	goto labelFunc041C_0077;
labelFunc041C_0154:
	endconv;
	message("\"Goodbye. Be sure to come to the show when it opens!\"*");
	say();
labelFunc041C_0159:
	if (!(event == 0x0000)) goto labelFunc041C_01E0;
	var0002 = UI_part_of_day();
	var0003 = UI_get_schedule_type(UI_get_npc_object(0xFFE4));
	var0004 = UI_die_roll(0x0001, 0x0004);
	if (!(var0003 == 0x001D)) goto labelFunc041C_01DA;
	if (!(var0004 == 0x0001)) goto labelFunc041C_019D;
	var0005 = "@Name!@";
labelFunc041C_019D:
	if (!(var0004 == 0x0002)) goto labelFunc041C_01AD;
	var0005 = "@Job!@";
labelFunc041C_01AD:
	if (!(var0004 == 0x0003)) goto labelFunc041C_01BD;
	var0005 = "@Yes! Er, I mean No!@";
labelFunc041C_01BD:
	if (!(var0004 == 0x0004)) goto labelFunc041C_01CD;
	var0005 = "@Bye!@";
labelFunc041C_01CD:
	UI_item_say(0xFFE4, var0005);
	goto labelFunc041C_01E0;
labelFunc041C_01DA:
	Func092E(0xFFE4);
labelFunc041C_01E0:
	return;
}


