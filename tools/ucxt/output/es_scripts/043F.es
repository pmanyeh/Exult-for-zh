#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08FC 0x8FC (var var0000, var var0001);
extern var Func090A 0x90A ();
extern void Func0919 0x919 ();
extern void Func091A 0x91A ();
extern void Func092E 0x92E (var var0000);

void Func043F object#(0x43F) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	if (!(event == 0x0001)) goto labelFunc043F_019A;
	UI_show_npc_face(0xFFC1, 0x0000);
	var0000 = Func0909();
	var0001 = UI_wearing_fellowship();
	var0002 = UI_part_of_day();
	if (!(var0002 == 0x0007)) goto labelFunc043F_005F;
	var0003 = Func08FC(0xFFC1, 0xFFE6);
	if (!var0003) goto labelFunc043F_004A;
	message("Millie ignores your attempts to get her attention and goes back to intently watching the Fellowship ceremony.*");
	say();
	abort;
	goto labelFunc043F_005F;
labelFunc043F_004A:
	if (!gflags[0x00DA]) goto labelFunc043F_005A;
	message("Millie looks perturbed. \"Batlin has never missed a meeting before. What does he expect? Does he want -me- to run the meeting?\"");
	say();
	goto labelFunc043F_005F;
	goto labelFunc043F_005F;
labelFunc043F_005A:
	message("\"Sorry, I cannot speak with thee now! I am late for the Fellowship meeting!\"*");
	say();
	abort;
labelFunc043F_005F:
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x0141]) goto labelFunc043F_007C;
	UI_add_answer("Thad");
labelFunc043F_007C:
	if (!(!gflags[0x00C0])) goto labelFunc043F_008E;
	message("You see a cute-looking woman who beams with a huge smile when she notices you looking at her.");
	say();
	gflags[0x00C0] = true;
	goto labelFunc043F_0092;
labelFunc043F_008E:
	message("\"It is good to speak with thee, again,\" says Millie.");
	say();
labelFunc043F_0092:
	converse attend labelFunc043F_0195;
	case "name" attend labelFunc043F_00A8:
	message("\"My name is Millie,\" she giggles coyly.");
	say();
	UI_remove_answer("name");
labelFunc043F_00A8:
	case "job" attend labelFunc043F_00C1:
	message("\"I suppose I have no job, but is that really so bad? I am a member of The Fellowship and I talk to people about them all day long.\"");
	say();
	UI_add_answer(["Fellowship", "talk"]);
labelFunc043F_00C1:
	case "Fellowship" attend labelFunc043F_010F:
	if (!var0001) goto labelFunc043F_00D6;
	message("\"I see we have the same job!\" She laughs at her own joke. \"Dost thou spend all thy time talking to people about The Fellowship? For if that is what thou dost do, thou must get thyself another corner!\" Millie's face wrinkles in displeasure.");
	say();
	goto labelFunc043F_010F;
labelFunc043F_00D6:
	message("\"Dost thou know what The Fellowship is?\"");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc043F_00FE;
	message("\"Oh, I think thou dost not really know!\"");
	say();
	Func0919();
	UI_remove_answer("Fellowship");
	UI_add_answer("philosophy");
	goto labelFunc043F_010F;
labelFunc043F_00FE:
	Func0919();
	UI_remove_answer("Fellowship");
	UI_add_answer("philosophy");
labelFunc043F_010F:
	case "philosophy" attend labelFunc043F_0125:
	Func091A();
	message("\"If thou dost wish, thou mayest attend tonight's meeting at the Fellowship Hall. It begins at nine o'clock sharp. Just tell them that thou art my guest. I shall see thee there, I hope.\" Millie giggles and looks away shyly.");
	say();
	UI_remove_answer("philosophy");
labelFunc043F_0125:
	case "talk" attend labelFunc043F_013F:
	message("\"I spend all my time trying to recruit, er... spread the word of The Fellowship. It is better than having a job! I learned how to do this at the Meditation Retreat.\"");
	say();
	UI_remove_answer("talk");
	UI_add_answer("Meditation Retreat");
labelFunc043F_013F:
	case "Meditation Retreat" attend labelFunc043F_015D:
	message("\"'Tis located on an island in south Britannia near Serpent's Hold. Most new Fellowship members spend some time down there learning the tenets of the group. One can also learn to hear 'the voice' at the retreat.\"");
	say();
	UI_add_answer("the voice");
	UI_remove_answer("Meditation Retreat");
	gflags[0x008B] = true;
labelFunc043F_015D:
	case "the voice" attend labelFunc043F_0174:
	message("\"Fellowship members have an inner voice which speaks to them. I have not heard it yet, but I am working toward it. I may need to spend another few days at the Meditation Retreat in order to do so. Batlin tells me not to be discouraged, though. He says I will hear it when I have made myself worthy.\"");
	say();
	UI_remove_answer("the voice");
	gflags[0x008A] = true;
labelFunc043F_0174:
	case "Thad" attend labelFunc043F_0187:
	message("Millie rolls her eyes. \"Thou hast met my brother? Thou poor thing! He is really a candidate for the asylum, I wouldst say! He believes The Fellowship kidnapped me and charmed me into following them. Well, I joined of mine own free will, without a second thought, and it was a pure lark! No one coerced me! Thad can go hang! Mama always said he was the impulsive one in the family!\"");
	say();
	UI_remove_answer("Thad");
labelFunc043F_0187:
	case "bye" attend labelFunc043F_0192:
	goto labelFunc043F_0195;
labelFunc043F_0192:
	goto labelFunc043F_0092;
labelFunc043F_0195:
	endconv;
	message("\"I shall see thee later! Maybe even at tonight's Fellowship meeting!\"*");
	say();
labelFunc043F_019A:
	if (!(event == 0x0000)) goto labelFunc043F_0221;
	var0002 = UI_part_of_day();
	var0005 = UI_get_schedule_type(UI_get_npc_object(0xFFC1));
	var0006 = UI_die_roll(0x0001, 0x0004);
	if (!(var0005 == 0x000C)) goto labelFunc043F_021B;
	if (!(var0006 == 0x0001)) goto labelFunc043F_01DE;
	var0007 = "Fellowship meeting tonight!@";
labelFunc043F_01DE:
	if (!(var0006 == 0x0002)) goto labelFunc043F_01EE;
	var0007 = "@Strive For Unity!@";
labelFunc043F_01EE:
	if (!(var0006 == 0x0003)) goto labelFunc043F_01FE;
	var0007 = "@Trust Thy Brother!@";
labelFunc043F_01FE:
	if (!(var0006 == 0x0004)) goto labelFunc043F_020E;
	var0007 = "@Worthiness Precedes Reward!@";
labelFunc043F_020E:
	UI_item_say(0xFFC1, var0007);
	goto labelFunc043F_0221;
labelFunc043F_021B:
	Func092E(0xFFC1);
labelFunc043F_0221:
	return;
}


