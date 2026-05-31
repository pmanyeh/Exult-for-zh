#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0908 0x908 ();
extern var Func08FC 0x8FC (var var0000, var var0001);
extern var Func090B 0x90B (var var0000);
extern var Func08F7 0x8F7 (var var0000);
extern void Func0919 0x919 ();
extern void Func091A 0x91A ();
extern void Func0872 0x872 ();
extern void Func0873 0x873 ();
extern void Func0874 0x874 ();
extern void Func092E 0x92E (var var0000);

void Func0412 object#(0x412) ()
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

	if (!(event == 0x0001)) goto labelFunc0412_01EB;
	UI_show_npc_face(0xFFEE, 0x0000);
	var0000 = UI_part_of_day();
	var0001 = Func0909();
	var0002 = Func0908();
	var0003 = UI_get_schedule_type(UI_get_npc_object(0xFFEE));
	var0004 = "Avatar";
	if (!(var0000 == 0x0007)) goto labelFunc0412_0061;
	var0005 = Func08FC(0xFFEE, 0xFFF0);
	if (!var0005) goto labelFunc0412_005C;
	message("Dell frowns at you for distracting him during the Fellowship meeting.*");
	say();
	goto labelFunc0412_0060;
labelFunc0412_005C:
	message("\"I do not have time to talk with thee! I must get to the meeting of The Fellowship! Come to my shop tomorrow!\"*");
	say();
labelFunc0412_0060:
	abort;
labelFunc0412_0061:
	UI_add_answer(["name", "job", "murder", "bye"]);
	if (!(!gflags[0x0053])) goto labelFunc0412_00BC;
	message("You see a stern shopkeeper who might once have been a strong fighter.");
	say();
	if (!(var0003 == 0x0007)) goto labelFunc0412_008D;
	message("\"Thou hast entered my shop, so thou had best buy something.\"");
	say();
labelFunc0412_008D:
	message("\"Who might I be addressing?\"");
	say();
	var0006 = Func090B([var0002, var0004]);
	if (!(var0006 == var0002)) goto labelFunc0412_00B1;
	message("\"Hmph. My name is Dell.\"");
	say();
	goto labelFunc0412_00B5;
labelFunc0412_00B1:
	message("\"Oh, art thou really? I did not know there were so many of thee! Why, only last week did an 'Avatar' come through here! He took me for 20 gold, too! An expert trickster, he was!\"~~Dell looks you up and down. \"Avatar, indeed! I do not like Avatars. But never mind that. I am called Dell. What dost thou want?\"");
	say();
labelFunc0412_00B5:
	gflags[0x0053] = true;
	goto labelFunc0412_00C0;
labelFunc0412_00BC:
	message("\"How may I help thee?\" Dell asks.");
	say();
labelFunc0412_00C0:
	converse attend labelFunc0412_01D8;
	case "name" attend labelFunc0412_00D6:
	message("\"My name is Dell. Did I not say that already?\"");
	say();
	UI_remove_answer("name");
labelFunc0412_00D6:
	case "job" attend labelFunc0412_00FE:
	message("Dell looks disgruntled. \"I sell weapons, armour, and provisions when I am not doing work for The Fellowship.\"");
	say();
	UI_add_answer("buy");
	if (!(var0003 == 0x0007)) goto labelFunc0412_00F7;
	message("\"If thou art not going to buy anything, then get thy face out of my sight!\"");
	say();
labelFunc0412_00F7:
	UI_add_answer("Fellowship");
labelFunc0412_00FE:
	case "murder" attend labelFunc0412_013F:
	message("\"I am afraid I know nothing about it save for what is being said in the street, so do not ask me. If thou art not going to buy anything, then thou art wasting my time. Go away.\"");
	say();
	UI_remove_answer("murder");
	var0007 = Func08F7(0xFFFF);
	if (!var0007) goto labelFunc0412_013F;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("Iolo whispers to you, \"Pleasant chap, is he not?\"");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFEE, 0x0000);
labelFunc0412_013F:
	case "Fellowship" attend labelFunc0412_0151:
	Func0919();
	UI_remove_answer("Fellowship");
labelFunc0412_0151:
	case "philosophy" attend labelFunc0412_0163:
	Func091A();
	UI_remove_answer("philosophy");
labelFunc0412_0163:
	case "buy" attend labelFunc0412_019D:
	if (!(var0003 == 0x0007)) goto labelFunc0412_0199;
	message("\"Certainly, ");
	message(var0001);
	message(". What type of ware wouldst thou wish to see?\"");
	say();
	UI_push_answers();
	UI_add_answer(["nothing", "weapons", "armour", "provisions"]);
	goto labelFunc0412_019D;
labelFunc0412_0199:
	message("\"Come to my shop during business hours.\"");
	say();
labelFunc0412_019D:
	case "weapons" attend labelFunc0412_01A8:
	Func0872();
labelFunc0412_01A8:
	case "armour" attend labelFunc0412_01B3:
	Func0873();
labelFunc0412_01B3:
	case "provisions" attend labelFunc0412_01BE:
	Func0874();
labelFunc0412_01BE:
	case "nothing" attend labelFunc0412_01CA:
	UI_pop_answers();
labelFunc0412_01CA:
	case "bye" attend labelFunc0412_01D5:
	goto labelFunc0412_01D8;
labelFunc0412_01D5:
	goto labelFunc0412_00C0;
labelFunc0412_01D8:
	endconv;
	message("\"Hmpf.\"");
	say();
	if (!(var0003 == 0x0007)) goto labelFunc0412_01EB;
	message("\"Spend more money next time thou dost come in.\"*");
	say();
labelFunc0412_01EB:
	if (!(event == 0x0000)) goto labelFunc0412_0272;
	var0000 = UI_part_of_day();
	var0003 = UI_get_schedule_type(UI_get_npc_object(0xFFEE));
	var0008 = UI_die_roll(0x0001, 0x0004);
	if (!(var0003 == 0x0007)) goto labelFunc0412_026C;
	if (!(var0008 == 0x0001)) goto labelFunc0412_022F;
	var0009 = "@Buy something!@";
labelFunc0412_022F:
	if (!(var0008 == 0x0002)) goto labelFunc0412_023F;
	var0009 = "@Armour! Weapons!@";
labelFunc0412_023F:
	if (!(var0008 == 0x0003)) goto labelFunc0412_024F;
	var0009 = "@Swamp boots? Bedrolls?@";
labelFunc0412_024F:
	if (!(var0008 == 0x0004)) goto labelFunc0412_025F;
	var0009 = "@Finest goods here!@";
labelFunc0412_025F:
	UI_item_say(0xFFEE, var0009);
	goto labelFunc0412_0272;
labelFunc0412_026C:
	Func092E(0xFFEE);
labelFunc0412_0272:
	return;
}


