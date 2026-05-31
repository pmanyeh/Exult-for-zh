#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func04CA object#(0x4CA) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc04CA_01FF;
	UI_show_npc_face(0xFF36, 0x0000);
	var0000 = UI_wearing_fellowship();
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x0243]) goto labelFunc04CA_0036;
	UI_add_answer("Elizabeth and Abraham");
labelFunc04CA_0036:
	if (!(!gflags[0x0273])) goto labelFunc04CA_0048;
	message("You see a young, tan, muscular, handsome man who exudes much verve and geniality.");
	say();
	gflags[0x0273] = true;
	goto labelFunc04CA_004C;
labelFunc04CA_0048:
	message("\"Yes?\" Ian asks.");
	say();
labelFunc04CA_004C:
	converse attend labelFunc04CA_01FA;
	case "name" attend labelFunc04CA_0062:
	message("\"I am Ian.\"");
	say();
	UI_remove_answer("name");
labelFunc04CA_0062:
	case "job" attend labelFunc04CA_007B:
	message("\"I am the director of this Meditation Retreat for Fellowship members.\"");
	say();
	UI_add_answer(["director", "Meditation Retreat"]);
labelFunc04CA_007B:
	case "director" attend labelFunc04CA_009B:
	message("\"I manage the various activities and lead the initiates in their exercises in meditation.\"");
	say();
	UI_remove_answer("director");
	UI_add_answer(["activities", "exercises"]);
labelFunc04CA_009B:
	case "activities" attend labelFunc04CA_00AE:
	message("\"The activities of the retreat consist of philosophical training and studies.\"");
	say();
	UI_remove_answer("activities");
labelFunc04CA_00AE:
	case "exercises" attend labelFunc04CA_00C8:
	message("\"The members must all grow to hear and understand the voice which guides them down the path of Inner Strength. The exercises in meditation accelerate this process.\"");
	say();
	UI_remove_answer("exercises");
	UI_add_answer("voice");
labelFunc04CA_00C8:
	case "voice" attend labelFunc04CA_00DB:
	message("\"It is that voice which one hears inside. We all have the capability of hearing it. Some are able to hear it quite easily and do not have to attend sessions here at the Meditation Retreat. Others, however, find it more difficult to hear the voice. Then they require study at the Retreat.\"");
	say();
	UI_remove_answer("voice");
labelFunc04CA_00DB:
	case "Meditation Retreat" attend labelFunc04CA_00FB:
	message("\"It was set up by The Fellowship so that new members can attend and learn more about our group, get in touch with themselves, and help them to become better brothers in The Fellowship. Most of the work is done inside the barrier.\"");
	say();
	UI_remove_answer("Meditation Retreat");
	UI_add_answer(["in touch", "barrier"]);
labelFunc04CA_00FB:
	case "in touch" attend labelFunc04CA_010E:
	message("\"Most of the people who come to The Fellowship are wrestling with the failures in their lives. They are essentially\tafraid of themselves. Here at the Meditation Retreat people learn to believe in themselves. And they build up that belief by learning how to best apply the philosophy of The\tFellowship to their lives.\"");
	say();
	UI_remove_answer("in touch");
labelFunc04CA_010E:
	case "barrier" attend labelFunc04CA_0128:
	message("\"It was set up to keep out those who are not members. Inside the barrier, Fellowship members find it much easier to hear their inner voice. Each member is given a key which they may use at any time.\"");
	say();
	UI_remove_answer("barrier");
	UI_add_answer("key");
labelFunc04CA_0128:
	case "key" attend labelFunc04CA_01B4:
	if (!(var0000 && (!gflags[0x0006]))) goto labelFunc04CA_0140;
	message("\"Ah, but thou art not a true Fellowship member! Thou art wearing a medallion falsely. I cannot let thee inside. Goodbye.\"*");
	say();
	abort;
labelFunc04CA_0140:
	if (!gflags[0x0006]) goto labelFunc04CA_018D;
	message("\"Oh, wouldst thou like to meditate with us, fellow brother?\"");
	say();
	if (!Func090A()) goto labelFunc04CA_0186;
	var0001 = UI_add_party_items(0x0001, 0x0281, 0x00F9, 0x0007, false);
	if (!var0001) goto labelFunc04CA_0183;
	message("\"Then here is thy key. Be happy! Oh, one more thing. There is a rule which must be followed.\"");
	say();
	UI_set_schedule_type(UI_get_npc_object(0xFF36), 0x000B);
	UI_add_answer("rule");
labelFunc04CA_0183:
	goto labelFunc04CA_018A;
labelFunc04CA_0186:
	message("\"Oh. Then I cannot give thee a key.\"");
	say();
labelFunc04CA_018A:
	goto labelFunc04CA_01AD;
labelFunc04CA_018D:
	message("\"Art thou a Fellowship member?\"");
	say();
	if (!Func090A()) goto labelFunc04CA_01A0;
	var0002 = "@I do not believe thee. Thou ";
	goto labelFunc04CA_01A6;
labelFunc04CA_01A0:
	var0002 = "@Then thou ";
labelFunc04CA_01A6:
	message(var0002);
	message("must go to Britain and speak with Batlin at our headquarters there. Only he can properly initiate thee into The Fellowship.\"");
	say();
labelFunc04CA_01AD:
	UI_remove_answer("key");
labelFunc04CA_01B4:
	case "rule" attend labelFunc04CA_01C7:
	message("\"Do not venture into the cave which thou wilt find inside the barrier. The cave is off-limits to attendees.\"");
	say();
	UI_remove_answer("rule");
labelFunc04CA_01C7:
	case "Elizabeth and Abraham" attend labelFunc04CA_01EC:
	if (!(!gflags[0x02A8])) goto labelFunc04CA_01E1;
	message("\"Alas, thou hast just missed them. My good friends Elizabeth and Abraham were here delivering funds. I believe they have gone from here to Buccaneer's Den.\"");
	say();
	gflags[0x0264] = true;
	goto labelFunc04CA_01E5;
labelFunc04CA_01E1:
	message("\"I have not seen them in quite some time.\"");
	say();
labelFunc04CA_01E5:
	UI_remove_answer("Elizabeth and Abraham");
labelFunc04CA_01EC:
	case "bye" attend labelFunc04CA_01F7:
	goto labelFunc04CA_01FA;
labelFunc04CA_01F7:
	goto labelFunc04CA_004C;
labelFunc04CA_01FA:
	endconv;
	message("\"Goodbye.\"*");
	say();
labelFunc04CA_01FF:
	if (!(event == 0x0000)) goto labelFunc04CA_020D;
	Func092E(0xFF36);
labelFunc04CA_020D:
	return;
}


