#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);
extern void Func0911 0x911 (var var0000);

void Func08D1 0x8D1 ()
{
	var var0000;
	var var0001;

	UI_clear_answers();
	var0000 = UI_is_pc_female();
	UI_show_npc_face(0xFFE5, 0x0000);
	message("Raymundo hands you a script and you take center stage. The lights feel hot on your face. Although you are a little nervous, you clear your throat and begin to read the lines on the page.");
	say();
	UI_add_answer(["-I- am the Avatar!", "I -am- the Avatar!", "I am -the- Avatar!", "I am the -Avatar-!"]);
labelFunc08D1_002C:
	converse attend labelFunc08D1_00C5;
	default(0x0001) attend labelFunc08D1_0038:
	message("\"No, no, no! That is all wrong! Thou art the 'Avatar'! Thou must feel like the Avatar! Thou must sound like the Avatar! Thou must -be- the Avatar! Try it again.\"");
	say();
labelFunc08D1_0038:
	UI_clear_answers();
	UI_add_answer(["-I- am the Avatar!", "I -am- the Avatar!", "I am -the- Avatar!", "I am the -Avatar-!"]);
	default(0x0001) attend labelFunc08D1_0058:
	message("\"Better... better... but I think perhaps thou dost need a prop.\"");
	say();
labelFunc08D1_0058:
	UI_clear_answers();
	var0001 = Func08F7(0xFFE4);
	if (!var0001) goto labelFunc08D1_00A5;
	message("\"Jesse, hand our friend thy staff.\"*");
	say();
	if (!var0000) goto labelFunc08D1_008D;
	UI_show_npc_face(0xFFE4, 0x0001);
	message("\"Here it is, milady.\"*");
	say();
	UI_remove_npc_face(0xFFE4);
	goto labelFunc08D1_00A2;
labelFunc08D1_008D:
	UI_show_npc_face(0xFFE4, 0x0000);
	message("\"Here it is, milord.\"*");
	say();
	UI_remove_npc_face(0xFFE4);
labelFunc08D1_00A2:
	goto labelFunc08D1_00A9;
labelFunc08D1_00A5:
	message("Raymundo hands you a staff.");
	say();
labelFunc08D1_00A9:
	UI_show_npc_face(0xFFE5, 0x0000);
	message("With the staff in hand, you try the lines once more. This time you feel like a true actor. The lines flow from your lips as if the Avatar were really saying them. You feel an excitement you have never before felt. You like this 'acting' thing. You crave more! You anxiously await Raymundo's critique...");
	say();
	message("Raymundo takes the staff and says, \"Hmmmm. Yes, that's fine. I thank thee. Fine. We shall be in touch, yes? Thank thee for coming in. If thou hast a resume, just leave it by the door, yes? Thank thee.\"*");
	say();
	Func0911(0x0014);
	abort;
	goto labelFunc08D1_002C;
labelFunc08D1_00C5:
	endconv;
	return;
}


