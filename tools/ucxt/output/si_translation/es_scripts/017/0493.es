#game "serpentisle"
// externs
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0955 0x955 ();

void Func0493 object#(0x493) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0001)) goto labelFunc0493_0059;
	var0000 = UI_get_item_flag(0xFF6D, 0x001E);
	if (!var0000) goto labelFunc0493_0039;
	UI_item_say(0xFE9C, "@Wake up, little one!@");
	var0001 = Func0992(0x0001, "@She cannot wake, Avatar. She is very sick.@", "@Poor little one! She is very sick.@", false);
	abort;
	goto labelFunc0493_0059;
labelFunc0493_0039:
	UI_item_say(0xFE9C, "@Good morning, little one!@");
	Func097F(0xFF6D, "@Tee hee hee hee!@", 0x0003);
	UI_set_schedule_type(0xFF6D, 0x0003);
labelFunc0493_0059:
	if (!(event == 0x0009)) goto labelFunc0493_0177;
	UI_run_schedule(0xFF6D);
	UI_clear_item_say(0xFF6D);
	UI_show_npc_face0(0xFF6D, 0x0000);
	message("\"Thou be Avatar! Thou nice!\"");
	say();
	UI_add_answer(["name", "What art thou doing?", "bye"]);
labelFunc0493_008D:
	converse attend labelFunc0493_0176;
	case "name" attend labelFunc0493_00BA:
	UI_remove_answer("name");
	message("\"Mother say thou found medicine make me better. Thank thou! My name Neyobi! Thou know what that mean?\"");
	say();
	var0002 = Func0955();
	if (!var0002) goto labelFunc0493_00B6;
	message("\"Then thou very smart!\"");
	say();
	goto labelFunc0493_00BA;
labelFunc0493_00B6:
	message("\"It mean 'little dew drops' and also mean my name. Neyobi! Me!\"");
	say();
labelFunc0493_00BA:
	case "What art thou doing?" attend labelFunc0493_00DD:
	UI_remove_answer("What art thou doing?");
	message("\"Early today I play! I like look at clouds! Other day I saw one that look like penguin! Later, mother and Baiyanda teach lessons.\"");
	say();
	UI_add_answer(["mother", "Baiyanda", "lessons"]);
labelFunc0493_00DD:
	case "mother" attend labelFunc0493_00F0:
	UI_remove_answer("mother");
	message("\"Yenani, silly! She chieftain of our tribe. She tell me one day, after I grow, that what I be.\"");
	say();
labelFunc0493_00F0:
	case "Baiyanda" attend labelFunc0493_011D:
	UI_remove_answer("Baiyanda");
	var0003 = UI_get_item_flag(0xFF71, 0x0004);
	if (!var0003) goto labelFunc0493_0119;
	message("\"I not see her in long time! I miss her lot.\"");
	say();
	goto labelFunc0493_011D;
labelFunc0493_0119:
	message("\"She healer, and smartest person in whole world!\"");
	say();
labelFunc0493_011D:
	case "lessons" attend labelFunc0493_0148:
	UI_remove_answer("lessons");
	message("\"Mother tells me the stories of the old days. She also teach me language of Men. She say Gwani very good at learn languages. Especially young ones.\"");
	say();
	var0003 = UI_get_item_flag(0xFF71, 0x0004);
	if (!(!var0003)) goto labelFunc0493_0148;
	message("\"Baiyanda teach me about plants and things.\"");
	say();
labelFunc0493_0148:
	case "bye" attend labelFunc0493_0173:
	UI_remove_npc_face0();
	UI_remove_npc_face1();
	Func097F(0xFE9C, "@Have fun, little one.@", 0x0000);
	Func097F(0xFF6D, "@Bye!@", 0x0003);
	goto labelFunc0493_0176;
labelFunc0493_0173:
	goto labelFunc0493_008D;
labelFunc0493_0176:
	endconv;
labelFunc0493_0177:
	return;
}


