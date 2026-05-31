#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func090B 0x90B (var var0000);
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();

void Func0480 object#(0x480) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0000)) goto labelFunc0480_0009;
	abort;
labelFunc0480_0009:
	UI_show_npc_face(0xFF80, 0x0000);
	var0000 = Func0908();
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x02BB]) goto labelFunc0480_0036;
	UI_add_answer("Gorn");
labelFunc0480_0036:
	if (!(!gflags[0x02CC])) goto labelFunc0480_004C;
	message("You see a striking woman in fighter's gear. She looks at you fiercely.");
	say();
	message("\"Halt!\"");
	say();
	gflags[0x02CC] = true;
	goto labelFunc0480_0050;
labelFunc0480_004C:
	message("\"What dost thou want?\" Iriale demands.");
	say();
labelFunc0480_0050:
	converse attend labelFunc0480_0151;
	case "name" attend labelFunc0480_0091:
	message("\"I am called Iriale Silvermist. Who art thou?\"");
	say();
	var0001 = Func090B([var0000, "The Avatar"]);
	if (!(var0001 == var0000)) goto labelFunc0480_007C;
	message("\"I do not know thee!\"");
	say();
labelFunc0480_007C:
	if (!(var0001 == "The Avatar")) goto labelFunc0480_008A;
	message("\"I do not approve of jokes.\"");
	say();
labelFunc0480_008A:
	UI_remove_answer("name");
labelFunc0480_0091:
	case "job" attend labelFunc0480_00AA:
	message("Iriale smiles devilishly.~~\"I bar people from entering. Thou hast disobeyed the rule of the Meditation Retreat. Ian will be most displeased. Thou had best leave now.\"");
	say();
	UI_add_answer(["rule", "Meditation Retreat"]);
labelFunc0480_00AA:
	case "rule" attend labelFunc0480_00F1:
	message("\"Thou dost know it. Attendees of the Retreat must stay out of this cave.\"");
	say();
	UI_remove_answer("rule");
	var0002 = Func08F7(0xFFFF);
	if (!var0002) goto labelFunc0480_00F1;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("\"Come, ");
	message(var0000);
	message(", we had better leave. I believe this woman is serious.\"");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFF80, 0x0000);
labelFunc0480_00F1:
	case "Gorn" attend labelFunc0480_0104:
	message("\"Is that the name of that smelly barbarian who was here? If thou dost see him on the -way out-, tell him that if he approaches me again, I shall cut off his head!\"");
	say();
	UI_remove_answer("Gorn");
labelFunc0480_0104:
	case "Meditation Retreat" attend labelFunc0480_0143:
	message("\"Yes, I work for the Meditation Retreat.~~\"And I work for -him-. -He- does not want thee here. I give thee only one chance to turn around and leave.");
	say();
	message("\"Wilt thou leave?\"");
	say();
	if (!Func090A()) goto labelFunc0480_0130;
	message("\"Do so and I shall spare thee!\" She watches as you turn away.*");
	say();
	UI_set_schedule_type(UI_get_npc_object(0xFF80), 0x0007);
	abort;
	goto labelFunc0480_0143;
labelFunc0480_0130:
	message("She sees your jaw set with determination and nods her head. \"Then die, foolish one!\"*");
	say();
	UI_set_schedule_type(UI_get_npc_object(0xFF80), 0x0000);
	abort;
labelFunc0480_0143:
	case "bye" attend labelFunc0480_014E:
	goto labelFunc0480_0151;
labelFunc0480_014E:
	goto labelFunc0480_0050;
labelFunc0480_0151:
	endconv;
	message("\"Away with thee!\"*");
	say();
	UI_set_schedule_type(UI_get_npc_object(0xFF80), 0x0007);
	return;
}


