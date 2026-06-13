#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func07D1 object#(0x7D1) ();
extern var Func0955 0x955 ();
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);

void Func03BD shape#(0x3BD) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	var0000 = UI_get_npc_id(item);
	if (!(event == 0x0000)) goto labelFunc03BD_0049;
	if (!(UI_get_schedule_type(item) == 0x001D)) goto labelFunc03BD_0049;
	var0001 = ["@Leave Yurel alone!@", "@Stay away from Yurel!@", "@Yurel wants to go home!@", "@Oh, woe!@", "@Yurel hungry!@", "@Help me!@"];
	Func097F(item, var0001[UI_get_random(UI_get_array_size(var0001))], 0x0000);
labelFunc03BD_0049:
	if (!(event == 0x0001)) goto labelFunc03BD_009B;
	if (!(!var0000)) goto labelFunc03BD_0065;
	UI_item_say(0xFE9C, "@Stop, monster!@");
	goto labelFunc03BD_006F;
labelFunc03BD_0065:
	UI_item_say(0xFE9C, "@Ho, Yurel!@");
labelFunc03BD_006F:
	0xFEF5->Func07D1();
	if (!(!var0000)) goto labelFunc03BD_0089;
	Func097F(item, "@I am no monster!@", 0x0002);
	goto labelFunc03BD_0093;
labelFunc03BD_0089:
	Func097F(item, "@Good to see thee.@", 0x0002);
labelFunc03BD_0093:
	UI_set_schedule_type(item, 0x0003);
labelFunc03BD_009B:
	if (!(event == 0x0009)) goto labelFunc03BD_0375;
	UI_set_schedule_type(item, 0x000A);
	UI_clear_item_say(item);
	UI_show_npc_face0(0xFEC9, 0x0000);
	var0000 = UI_get_npc_id(item);
	if (!(!var0000)) goto labelFunc03BD_00DC;
	message("\"I am Yurel. Yurel is no monster. Yurel means no one harm.");
	say();
	message("\"Yurel wishes only to be left in peace... and to go home.\"");
	say();
	UI_set_npc_id(item, 0x0001);
	goto labelFunc03BD_00E0;
labelFunc03BD_00DC:
	message("\"Have they stopped looking for monsters yet? Can Yurel go home in peace now?\"");
	say();
labelFunc03BD_00E0:
	if (!(gflags[0x02FA] == true)) goto labelFunc03BD_00EF;
	UI_add_answer("food");
labelFunc03BD_00EF:
	UI_add_answer(["monster", "peace", "home", "bye"]);
labelFunc03BD_0102:
	converse attend labelFunc03BD_0374;
	case "monster" attend labelFunc03BD_0123:
	UI_remove_answer("monster");
	message("\"Yurel knows not how he came to be this way... so unlike others. Yurel has been told that he was an... experiment long ago gone wrong.");
	say();
	message("\"Yurel does not care. Yurel breaths. Yurel fears. Yurel loves. That makes Yurel the same as others, though Yurel wears fur or not.\"");
	say();
	UI_add_answer("experiment");
labelFunc03BD_0123:
	case "experiment" attend labelFunc03BD_0147:
	UI_remove_answer("experiment");
	message("\"Yurel knows not who did such a thing, or why. The Master of Tolerance said that Chaos did not do such a thing. He said that it was those of Order.");
	say();
	message("\"Yurel does not care. Yurel here now, and must find a way home. Yurel only wants to live... Do not others feel the same way?\"");
	say();
	UI_add_answer(["Chaos", "Order"]);
labelFunc03BD_0147:
	case "Chaos" attend labelFunc03BD_015E:
	UI_remove_answer("Chaos");
	message("\"The Master of Tolerance told Yurel that his home was a place dedicated to Chaos. Yurel was not sure what this meant. Yurel was only happy that Yurel could stay there and be useful.");
	say();
	message("\"Yurel does not understand why the others hate one another. Are they not the same? They have no fur, as Yurel does. Yurel is confused... and hungry.\"");
	say();
labelFunc03BD_015E:
	case "Order" attend labelFunc03BD_0175:
	UI_remove_answer("Order");
	message("\"Yurel often saw warriors of Order as Yurel went about hunting. Yurel learned quickly to avoid them, for they would beat Yurel up if they could catch Yurel.");
	say();
	message("\"Now they have killed Yurel's friends. Killed the Master of Tolerance who took Yurel in. Yurel wishes they would go away. It was better before they took over.\"");
	say();
labelFunc03BD_0175:
	case "peace" attend labelFunc03BD_0199:
	UI_remove_answer("peace");
	message("\"Yurel remembers peace. Yurel wishes to the end of his days without pain and fear. Yurel wishes what others wish, to see this fighting end.");
	say();
	message("\"And food... Food would be good. Yurel is very hungry.\"");
	say();
	UI_add_answer(["fighting", "food"]);
labelFunc03BD_0199:
	case "fighting" attend labelFunc03BD_01B7:
	UI_remove_answer("fighting");
	message("\"There has been fighting for a long, long time now. Something happened when Yurel was away hunting. Yurel knows not what.");
	say();
	message("\"Those of Order who captured Yurel called Yurel a murderer. But Yurel has never harmed others. Yurel has hunted to bring others food. Yurel knows not why they say such things.\"");
	say();
	UI_add_answer("captured");
labelFunc03BD_01B7:
	case "captured" attend labelFunc03BD_01D5:
	UI_remove_answer("captured");
	message("\"Warriors of Order found Yurel out hunting. They beat Yurel and dragged Yurel to the cruel place beyond these walls. They wanted to cut Yurel up... So Yurel ran away. Yurel not dumb.");
	say();
	message("\"Yearl hoped that if Yurel took their ball they would be too busy looking for it to hunt for Yurel. Yurel must have been right... They have not come for Yurel yet, and Yurel still has the ball.\"");
	say();
	UI_add_answer("ball");
labelFunc03BD_01D5:
	case "ball" attend labelFunc03BD_01E8:
	UI_remove_answer("ball");
	message("\"Yurel knows not what is so special about it. It is pretty. It sat upon a pedestal. So it must have been important.\"");
	say();
labelFunc03BD_01E8:
	case "food" attend labelFunc03BD_0313:
	UI_remove_answer("food");
	if (!gflags[0x030E]) goto labelFunc03BD_0208;
	message("\"Yurel thanks thee for the cheese.");
	say();
	message("\" Yurel loves cheese.\"");
	say();
	goto labelFunc03BD_0313;
labelFunc03BD_0208:
	message("\"Yurel is so hungry. Yurel has not had food in many days. Yurel would be willing to trade thee Yurel's ball for cheese.");
	say();
	message("\"Yurel loves cheese...\"");
	say();
	message("\"Dost thou have cheese thou wouldst give Yurel?\"");
	say();
	if (!Func0955()) goto labelFunc03BD_030B;
	var0002 = Func097D(0xFE9C, 0x0001, 0x0179, 0xFE99, 0x001A);
	var0003 = Func097D(0xFE9C, 0x0001, 0x0179, 0xFE99, 0x001B);
	var0004 = Func097D(0xFE9C, 0x0001, 0x0179, 0xFE99, 0x001C);
	if (!(var0002 || (var0003 || var0004))) goto labelFunc03BD_02FC;
	if (!var0002) goto labelFunc03BD_02A3;
	var0005 = UI_remove_party_items(0x0001, 0x0179, 0xFE99, 0x001A, 0x0012);
	message("\"Oh, Yurel is so happy! Thou art kind, kind, kind! The ball is yours... But be careful of the warriors, they are looking for it.\"");
	say();
	var0005 = UI_add_cont_items(0xFE9C, 0x0001, 0x01C2, 0xFE99, 0x0009, 0x0000);
	goto labelFunc03BD_02F9;
labelFunc03BD_02A3:
	if (!var0003) goto labelFunc03BD_02C2;
	var0005 = UI_remove_party_items(0x0001, 0x0179, 0xFE99, 0x001B, 0x0012);
	goto labelFunc03BD_02D8;
labelFunc03BD_02C2:
	var0005 = UI_remove_party_items(0x0001, 0x0179, 0xFE99, 0x001C, 0x0012);
labelFunc03BD_02D8:
	message("\"Oh, Yurel is so happy! Thou art kind, kind, kind! The ball is yours... But be careful of the warriors, they are looking for it.\"");
	say();
	var0005 = UI_add_cont_items(0xFE9C, 0x0001, 0x01C2, 0xFE99, 0x0009, 0x0000);
	gflags[0x030E] = true;
labelFunc03BD_02F9:
	goto labelFunc03BD_0308;
labelFunc03BD_02FC:
	message("\"Thou dost tease Yurel! Thou dost not have cheese!");
	say();
	message("\"But if thou dost find some, Yurel will still trade.\"");
	say();
	gflags[0x02FA] = true;
labelFunc03BD_0308:
	goto labelFunc03BD_0313;
labelFunc03BD_030B:
	message("\"If thou dost change thy mind, Yurel will still trade.\"");
	say();
	gflags[0x02FA] = true;
labelFunc03BD_0313:
	case "home" attend labelFunc03BD_0331:
	UI_remove_answer("home");
	message("\"Yurel's home was the Temple of Tolerance. They accepted Yurel there. Did not throw stones at Yurel. Let Yurel help, catch food for the others. Teach Yurel how to eat so as not to frighten others.");
	say();
	message("\"Yurel had friends. Yurel had a safe place to sleep. Yurel worked hard and had fun. Yurel wants to go home...\"");
	say();
	UI_add_answer("Temple of Tolerance");
labelFunc03BD_0331:
	case "Temple of Tolerance" attend labelFunc03BD_034C:
	UI_remove_answer("Temple of Tolerance");
	message("\"The Temple of Tolerance was the home of those the others did not want. Yurel was friends with many there.");
	say();
	message("\"Yurel does not care if they were not smart, or if they looked different... Yurel looks different from all others. Yurel does not understand why others turn out their own children for looking different. They look enough alike to Yurel.");
	say();
	message("\"Perhaps Yurel will never know. Perhaps Yurel will never live to see home again. Yurel is lonely... and hungry.\"");
	say();
labelFunc03BD_034C:
	case "bye" attend labelFunc03BD_0371:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@Goodbye.@", 0x0000);
	Func097F(item, "@Take care.@", 0x0002);
	goto labelFunc03BD_0374;
labelFunc03BD_0371:
	goto labelFunc03BD_0102;
labelFunc03BD_0374:
	endconv;
labelFunc03BD_0375:
	return;
}


