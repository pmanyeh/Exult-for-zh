#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0994 0x994 ();
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002);
extern void Func086D 0x86D ();
extern var Func08FC 0x8FC ();
extern void Func08FE 0x8FE ();
extern var Func0942 0x942 (var var0000);
extern void Func08F5 0x8F5 (var var0000);

void Func04D3 object#(0x4D3) ()
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
	var var000A;
	var var000B;
	var var000C;
	var var000D;

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0994();
	var0003 = "son";
	var0004 = Func09A0(0x0002, 0x0001);
	var0005 = UI_get_npc_object(0xFF2D);
	var0006 = UI_get_item_flag(0xFF2D, 0x001C);
	if (!var0001) goto labelFunc04D3_0048;
	var0003 = "daughter";
labelFunc04D3_0048:
	var0007 = Func0953();
	if (!(event == 0x0001)) goto labelFunc04D3_009D;
	if (!(UI_get_npc_id(0xFF31) != 0x0000)) goto labelFunc04D3_006F;
	UI_item_say(0xFF2D, "@Not now...@");
	abort;
labelFunc04D3_006F:
	UI_item_say(0xFE9C, "@Excuse me...@");
	0xFF2D->Func07D1();
	Func097F(0xFF2D, (("@Yes, my " + var0003) + "?@"), 0x0002);
	UI_set_schedule_type(0xFF2D, 0x0003);
labelFunc04D3_009D:
	if (!(event == 0x0009)) goto labelFunc04D3_048E;
	UI_run_schedule(0xFF2D);
	UI_clear_item_say(0xFF2D);
	UI_show_npc_face0(0xFF2D, 0x0000);
	if (!((var0002 == 0x000D) && (gflags[0x0060] && (!gflags[0x0061])))) goto labelFunc04D3_0147;
	message("\"It is written that 'The Hero from Another World shall face the end as the beginning'! Thou didst enter our land with thy three companions, they must be present at the final moment to forestall disaster!\"");
	say();
	UI_remove_npc_face0();
	Func097F(0xFF2D, "@I shall pray for thee!@", 0x0000);
	UI_move_object(0xFF2D, [0x05FA, 0x078F, 0x0000]);
	var0008 = [0xFFFD, 0xFFFE, 0xFFFF];
	enum();
labelFunc04D3_0107:
	for (var000B in var0008 with var0009 to var000A) attend labelFunc04D3_0146;
	if (!(!UI_npc_nearby(var000B))) goto labelFunc04D3_0143;
	var000C = UI_approach_avatar(var000B, 0x0050, 0x0028);
	if (!(!(UI_get_schedule_type(var000B) == 0x001F))) goto labelFunc04D3_0143;
	UI_add_to_party(var000B);
labelFunc04D3_0143:
	goto labelFunc04D3_0107;
labelFunc04D3_0146:
	abort;
labelFunc04D3_0147:
	UI_set_conversation_slot(0x0000);
	var000D = UI_get_object_position(0xFF2D);
	if (!Func08F8(var000D, [0x0914, 0x01BB], [0x0939, 0x01D9])) goto labelFunc04D3_0197;
	message("\"Thou must not enter this door without thy three stalwart companions, Hero from Another World!\"");
	say();
	message("\"It matters not if any others venture with thee, but through this portal the four must pass!\"");
	say();
	message("\"I shall act as a channel for the power to restore thy group as it should be.\"");
	say();
	Func086D();
	var000C = UI_execute_usecode_array(var0005, [(byte)0x23, (byte)0x55, 0x0363]);
	abort;
labelFunc04D3_0197:
	message("\"We meet again. Thy destiny draws near quickly... How may I be of service to thee?\"");
	say();
	if (!Func08FC()) goto labelFunc04D3_01AF;
	message("\"Oh! One of thy friends hath met an untimely end. This should not be... [\"If thou art ready to see thy friend again, merely ask and I will return them to thee.\"");
	say();
	UI_add_answer("resurrection");
	goto labelFunc04D3_01E0;
labelFunc04D3_01AF:
	if (!((var0002 == 0x0002) && (!var0006))) goto labelFunc04D3_01E0;
	message("\"Welcome to Monk Isle, my ");
	message(var0003);
	message(".\"");
	say();
	message("\"Thou mayest tarry with us for as long as thou dost wish, but remember... The Sands of Time wait for no one, not even thee.\"");
	say();
	message("\"Whilst thou art here, thou wilt learn that the life of a monk is governed by the bells. Not all of our membership may speak to thee, the novices are bound by a vow of silence to help them better contemplate the mysteries.\"");
	say();
	UI_add_answer(["Sands of Time", "bells", "mysteries"]);
labelFunc04D3_01E0:
	if (!(gflags[0x0279] && (!gflags[0x022B]))) goto labelFunc04D3_0213;
	message("\"I see... Thou hast made great progress in thy quest, my ");
	message(var0003);
	message(". But before thou canst continue, thou must seek the wisdom of the last child of Chaos. He alone holds the key to the location of the Chaos Hierophant.\"");
	say();
	if (!UI_get_item_flag(0xFF68, 0x001C)) goto labelFunc04D3_020F;
	message("\"Thou didst meet him in his imprisonment, my ");
	message(var0003);
	message(". Yet he remains a prisoner out of time. Seek him within the Shrine that is his home.\"");
	say();
	goto labelFunc04D3_0213;
labelFunc04D3_020F:
	message("\"He remains a prisoner out of time, imprisoned within the Shrine that is his home.\"");
	say();
labelFunc04D3_0213:
	UI_add_answer("bye");
labelFunc04D3_021A:
	converse attend labelFunc04D3_048D;
	case "return" attend labelFunc04D3_0234:
	UI_remove_answer("return");
	message("\"Xenka disappeared several centuries ago. No one knows where she went.\"");
	say();
	message("\"However, in her writings, Xenka hath promised to return to us when the end is near. She will then guide us once more.\"");
	say();
labelFunc04D3_0234:
	case "resurrection" attend labelFunc04D3_0246:
	UI_remove_answer("resurrection");
	Func08FE();
labelFunc04D3_0246:
	case "Sands of Time" attend labelFunc04D3_0260:
	UI_remove_answer("Sands of Time");
	message("\"Within the Hourglass of Fate lie the Sands of Time. As each grain doth fall, so doth another moment hasten us to our doom.\"");
	say();
	UI_add_answer("doom");
labelFunc04D3_0260:
	case "doom" attend labelFunc04D3_0280:
	UI_remove_answer("doom");
	if (!gflags[0x0004]) goto labelFunc04D3_027C;
	message("\"If thou dost fail in thy quest, our world will end... ripped apart by the storms and earthquakes that doth now plague it.\"");
	say();
	goto labelFunc04D3_0280;
labelFunc04D3_027C:
	message("\"If thou dost fail in thy quest, our world will end... ripped apart by the earthquakes that will soon plague it.\"");
	say();
labelFunc04D3_0280:
	case "bells" attend labelFunc04D3_02A6:
	UI_remove_answer("bells");
	message("\"They toll, though no one rings them. And it is said that when all the bells toll it will signal Xenka's return. Until then, they signal the order of our daily life. From Chapel to field, from field to the library, and so on.\"");
	say();
	UI_add_answer(["return", "Chapel", "field", "library"]);
labelFunc04D3_02A6:
	case "Chapel" attend labelFunc04D3_02B9:
	UI_remove_answer("Chapel");
	message("\"The Chapel is where we go to meditate. It is also where all the monks gather to perform resurrections. The book of Xenka's prophecies rests on the altar for all to see.\"");
	say();
labelFunc04D3_02B9:
	case "field" attend labelFunc04D3_02D3:
	UI_remove_answer("field");
	message("\"Since we are so secluded from the rest of the land, we grow our own food. And as food concerns us all, we all share the tasks of tending to the garden and orchard.\"");
	say();
	UI_add_answer("garden and orchard");
labelFunc04D3_02D3:
	case "garden and orchard" attend labelFunc04D3_02E6:
	UI_remove_answer("garden and orchard");
	message("\"Thou art welcome to take what thou dost need from our fields. We would gladly share with thee the bounty of the land that thou art striving to save.\"");
	say();
labelFunc04D3_02E6:
	case "library" attend labelFunc04D3_0309:
	UI_remove_answer("library");
	message("\"Over the years we have gathered many books and scrolls that we thought would help us give light to the meaning within Xenka's prophecies. Only recently hath Miggim undertaken the task of trying to set the library to rights. It is he that helps any visitors that come to us seeking information.\"");
	say();
	UI_add_answer(["books and scrolls", "visitors", "information"]);
labelFunc04D3_0309:
	case "books and scrolls" attend labelFunc04D3_031C:
	UI_remove_answer("books and scrolls");
	message("\"I fear that I do not know all we possess. Thou art free to look, of course. But if thou hast specific questions, thou shouldst direct them to Miggim.\"");
	say();
labelFunc04D3_031C:
	case "visitors" attend labelFunc04D3_035B:
	UI_remove_answer("visitors");
	if (!Func0942(0xFF6B)) goto labelFunc04D3_0350;
	if (!(!UI_get_item_flag(0xFF6B, 0x001E))) goto labelFunc04D3_0349;
	message("\"Such visitors are rare, for the journey here is not an easy one. As I remember it, Gwenno was our last visitor.\"");
	say();
	goto labelFunc04D3_034D;
labelFunc04D3_0349:
	message("\"Such visitors are rare, for the journey here is not an easy one. As I remember it, our last visitor was poor Gwenno.\"");
	say();
labelFunc04D3_034D:
	goto labelFunc04D3_0354;
labelFunc04D3_0350:
	message("\"Such visitors are rare, for the journey here is not an easy one. As I remember it, our last visitor was that woman, Gwenno.\"");
	say();
labelFunc04D3_0354:
	UI_add_answer("Gwenno");
labelFunc04D3_035B:
	case "Gwenno" attend labelFunc04D3_03A8:
	UI_remove_answer("Gwenno");
	if (!Func0942(0xFF6B)) goto labelFunc04D3_039D;
	if (!(!UI_get_item_flag(0xFF6B, 0x001E))) goto labelFunc04D3_0392;
	message("\"It is a pleasure having her here, my ");
	message(var0003);
	message(", now that her proper state of mind hath been restored.\"");
	say();
	message("\"I hope to speak with Gwenno about her time with the Ice People. It would be most instructive, I am sure.\"");
	say();
	goto labelFunc04D3_039A;
labelFunc04D3_0392:
	message("\"'Tis a pity to see her so undone. I hope that thou canst find a way to restore her to her proper state of mind soon.\"");
	say();
	message("\"I had hoped to be able to speak with her about her time with the Ice People. It would be most instructive, I am sure.\"");
	say();
labelFunc04D3_039A:
	goto labelFunc04D3_03A1;
labelFunc04D3_039D:
	message("\"She stayed with us for a short period of time. I think that she was seeking information concerning the Ice People of the north. But thou shouldst speak with Miggim... Gwenno spent most of her time within the library.\"");
	say();
labelFunc04D3_03A1:
	UI_add_answer("Ice People");
labelFunc04D3_03A8:
	case "Ice People" attend labelFunc04D3_03C1:
	UI_remove_answer("Ice People");
	message("\"I know very little about the Ice People, my ");
	message(var0003);
	message(". I know only that they are not like me and thee, but are covered in a thick hide -- like that of a bear, only white.\"");
	say();
labelFunc04D3_03C1:
	case "information" attend labelFunc04D3_03D4:
	UI_remove_answer("information");
	message("\"They used to come to us for everything from healing arts to weather predictions. Of course, that was before the storms began.\"");
	say();
labelFunc04D3_03D4:
	case "mysteries" attend labelFunc04D3_03ED:
	UI_remove_answer("mysteries");
	message("\"Xenka's prophecies are very unclear, my ");
	message(var0003);
	message(". Lacking Xenka's heavenly insight, we must struggle to wrest the meaning from each passage. Some devote their entire lives to finding the meaning of only a handful of passages.\"");
	say();
labelFunc04D3_03ED:
	case "bye" attend labelFunc04D3_048A:
	if (!(var0002 == 0x0002)) goto labelFunc04D3_041C;
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@Goodbye!@", 0x0000);
	Func097F(item, "@Fortune!@", 0x0002);
	goto labelFunc04D3_048D;
labelFunc04D3_041C:
	message("\"I must return to Monk Isle.\"");
	say();
	UI_remove_npc_face0();
	var000D = UI_get_object_position(0xFF2D);
	var000D[0x0001] = (var000D[0x0001] - (var000D[0x0003] / 0x0002));
	var000D[0x0002] = (var000D[0x0002] - (var000D[0x0003] / 0x0002));
	UI_sprite_effect(0x0007, var000D[0x0001], var000D[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0051);
	UI_remove_npc(0xFF2D);
	abort;
labelFunc04D3_048A:
	goto labelFunc04D3_021A;
labelFunc04D3_048D:
	endconv;
labelFunc04D3_048E:
	if (!(event == 0x0007)) goto labelFunc04D3_049C;
	Func08F5(0xFF2D);
labelFunc04D3_049C:
	return;
}


