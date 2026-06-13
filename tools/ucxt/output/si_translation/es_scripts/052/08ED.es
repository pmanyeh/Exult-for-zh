#game "serpentisle"
// externs
extern var Func0953 0x953 ();

var Func08ED 0x8ED (var var0000)
{
	var var0001;

	var0001 = Func0953();
	var0000 = (var0000 + 0x0001);
	if (!(var0000 == 0x0001)) goto labelFunc08ED_002C;
	message("\"");
	message(var0001);
	message(", we are all warriors here. It is not necessary for thee to attempt to impress us with exaggerated tales...\"");
	say();
	message("\"What else didst thou see in the Knight's Test?\"");
	say();
	return var0000;
labelFunc08ED_002C:
	if (!(var0000 == 0x0002)) goto labelFunc08ED_0069;
	message("\"Art thou certain of thy facts?\"");
	say();
	UI_show_npc_face1(0xFFB9, 0x0000);
	if (!UI_is_pc_female()) goto labelFunc08ED_0052;
	message("\"Didst thou fight a dragon as well? She is full of jests.\"");
	say();
	goto labelFunc08ED_0056;
labelFunc08ED_0052:
	message("\"Listen to his tales -- I think that he is attracted to thee, Shazzana.\"");
	say();
labelFunc08ED_0056:
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"Be still, Luther -- I think something strange is happening. Tell me more of what thou didst see...\"");
	say();
	return var0000;
labelFunc08ED_0069:
	if (!(var0000 == 0x0003)) goto labelFunc08ED_0098;
	message("\"Knights, have you been listening? Our new warrior hath had a terrible experience...\"");
	say();
	UI_show_npc_face1(0xFFB3, 0x0000);
	message("\"I'm sure there is an explanation for everything.\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"This time, I think thou art wrong, Spektor! What else didst thou see in the dungeon?\"");
	say();
	return var0000;
labelFunc08ED_0098:
	if (!(var0000 == 0x0004)) goto labelFunc08ED_00CD;
	message("\"There must be something wrong...\"");
	say();
	UI_show_npc_face1(0xFFBB, 0x0000);
	message("\"I shall have a talk with Shmed tomorrow. If half of what this Knight says is true, then the dungeonkeeper hath been seriously delinquent in his duties.\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"");
	message(var0001);
	message(", I apologize for what hath been done to thee in the Knight's Test. 'Tis an outrage!\"");
	say();
	return var0000;
labelFunc08ED_00CD:
	return 0;
}


