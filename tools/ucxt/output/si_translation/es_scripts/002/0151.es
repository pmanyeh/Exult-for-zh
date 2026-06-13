#game "serpentisle"
// externs
extern var Func0988 0x988 (var var0000, var var0001);
extern void Func07D1 object#(0x7D1) ();
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func0151 shape#(0x151) ()
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
	var var000E;
	var var000F;
	var var0010;
	var var0011;
	var var0012;
	var var0013;
	var var0014;
	var var0015;
	var var0016;

	var0000 = UI_get_npc_id(item);
	if (!(event == 0x0000)) goto labelFunc0151_0214;
	if (!((var0000 < 0x0001) || (var0000 > 0x0004))) goto labelFunc0151_0023;
	abort;
labelFunc0151_0023:
	var0001 = UI_find_nearby(item, 0x0151, 0x0019, 0x0000);
	var0001 = Func0988(item, var0001);
	if (!(var0000 == 0x0001)) goto labelFunc0151_010C;
	var0002 = UI_get_temperature(item);
	if (!(var0002 < 0x001E)) goto labelFunc0151_0067;
	var0002 = (var0002 + 0x0001);
	goto labelFunc0151_0086;
labelFunc0151_0067:
	var0002 = 0x0000;
	enum();
labelFunc0151_006E:
	for (var0005 in var0001 with var0003 to var0004) attend labelFunc0151_0086;
	UI_set_schedule_type(var0005, 0x000C);
	goto labelFunc0151_006E;
labelFunc0151_0086:
	UI_set_temperature(item, var0002);
	if (!((var0002 == 0x0004) || ((var0002 == 0x0008) || (var0002 == 0x000C)))) goto labelFunc0151_00DC;
	var0006 = false;
	enum();
labelFunc0151_00AD:
	for (var0005 in var0001 with var0007 to var0008) attend labelFunc0151_00DC;
	if (!((UI_get_schedule_type(var0005) != 0x001D) && (!var0006))) goto labelFunc0151_00D9;
	UI_set_schedule_type(var0005, 0x001D);
	var0006 = true;
labelFunc0151_00D9:
	goto labelFunc0151_00AD;
labelFunc0151_00DC:
	var0009 = ["@I am not sure...@", "@Death is no reward...@", "@Seek death, friends!@", "@Chaos hath no answers.@", "@Was Order wrong?@", "@I have no faith.@"];
	var000A = ["@None of us are.@", "@The Void is the reward!@", "@But we are Death.@", "@I have no questions.@", "@Imbalance was wrong.@", "@Do not despair, old friend.@"];
labelFunc0151_010C:
	if (!(var0000 == 0x0002)) goto labelFunc0151_0146;
	var0009 = ["@Chaos shall triumph!@", "@The Void is my reward.@", "@I am not a ghost.@", "@Remember the Hierophant's words.@", "@The war is never over.@", "@Still, the Great One slumbers...@"];
	var000A = ["@All is ashes.@", "@The Void is nothing.@", "@Then what are we?@", "@Empty words.@", "@Sad, but true.@", "@Hush, he listens now...@"];
labelFunc0151_0146:
	if (!(var0000 == 0x0003)) goto labelFunc0151_0180;
	var0009 = ["@A Champion shall arise...@", "@We shall be released soon.@", "@Have faith, friends.@", "@Do not doubt.@", "@Someone comes!@", "@Listen to the Void...@"];
	var000A = ["@Promises...@", "@It hath been too long!@", "@We shall try.@", "@'Tis hard to believe.@", "@I do not see...@", "@Yes, it sings to me!@"];
labelFunc0151_0180:
	if (!(var0000 == 0x0004)) goto labelFunc0151_01BA;
	var0009 = ["@Kill the offenders!@", "@Chaos must triumph!@", "@There is no compromise.@", "@The battle is now!@", "@I despise Order...@", "@I am so tired!@"];
	var000A = ["@All are dead, friend.@", "@Chaos remains alone.@", "@We must agree!@", "@There are no enemies.@", "@Order is not evil, friend.@", "@We are ancient souls.@"];
labelFunc0151_01BA:
	var000B = UI_get_random(0x0006);
	UI_clear_item_say(item);
	var000C = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x52, var0009[var000B]]);
	if (!var0001) goto labelFunc0151_0214;
	var000D = var0001[UI_get_random(UI_get_array_size(var0001))];
	UI_clear_item_say(var000D);
	var000C = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x52, var000A[var000B]], 0x0005);
labelFunc0151_0214:
	if (!((event == 0x0001) && (var0000 != 0x0000))) goto labelFunc0151_02C2;
	UI_item_say(0xFE9C, "@Pardon me...@");
	item->Func07D1();
	if (!(var0000 != 0x0005)) goto labelFunc0151_025C;
	var000C = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x52, "@Yesss?@"], 0x0000);
	UI_set_schedule_type(item, 0x0003);
	goto labelFunc0151_02C2;
labelFunc0151_025C:
	if (!(!Func097D(0xFE9B, 0x0001, 0x02C1, 0x0000, 0x004B))) goto labelFunc0151_02C2;
	var000E = UI_find_nearby(item, 0x02C1, 0x0019, 0x0000);
	var000F = false;
	enum();
labelFunc0151_0288:
	for (var0012 in var000E with var0010 to var0011) attend labelFunc0151_02A8;
	if (!(UI_get_item_quality(var0012) == 0x004B)) goto labelFunc0151_02A5;
	var000F = true;
labelFunc0151_02A5:
	goto labelFunc0151_0288;
labelFunc0151_02A8:
	if (!(!var000F)) goto labelFunc0151_02BA;
	UI_set_schedule_type(item, 0x0003);
	goto labelFunc0151_02C2;
labelFunc0151_02BA:
	UI_set_schedule_type(item, 0x0014);
labelFunc0151_02C2:
	if (!(event == 0x0009)) goto labelFunc0151_0763;
	if (!(var0000 < 0x0005)) goto labelFunc0151_02DF;
	UI_set_schedule_type(item, 0x001D);
	goto labelFunc0151_02E7;
labelFunc0151_02DF:
	UI_set_schedule_type(item, 0x0014);
labelFunc0151_02E7:
	if (!(var0000 == 0x0001)) goto labelFunc0151_030F;
	UI_show_npc_face0(0xFEEB, 0x0000);
	message("\"I can only be disturbed for a moment, as the others will miss me. We must continue our Dirge.\"");
	say();
	UI_add_answer(["name", "others", "Dirge"]);
labelFunc0151_030F:
	if (!(var0000 == 0x0002)) goto labelFunc0151_0337;
	UI_show_npc_face0(0xFEEB, 0x0000);
	message("\"How darest thou interrupt the Ceremony! Dost thou not recognize the influence of Chaos in this place?\"");
	say();
	UI_add_answer(["name", "Ceremony", "Chaos"]);
labelFunc0151_0337:
	if (!(var0000 == 0x0003)) goto labelFunc0151_035F;
	UI_show_npc_face0(0xFEEB, 0x0000);
	message("\"At last, a stranger! Oh, but have we met before? This existence is confusing...\"");
	say();
	UI_add_answer(["name", "met", "existence"]);
labelFunc0151_035F:
	if (!(var0000 == 0x0004)) goto labelFunc0151_0387;
	UI_show_npc_face0(0xFEEB, 0x0000);
	message("\"Art thou a spy? Come, friends, we must kill the spy sent by the Hierophant of Order!\"");
	say();
	UI_add_answer(["spy", "Hierophant", "Order"]);
labelFunc0151_0387:
	if (!(var0000 == 0x0005)) goto labelFunc0151_03F7;
	var0013 = UI_get_object_position(item);
	var0012 = UI_create_new_object(0x02C1);
	if (!var0012) goto labelFunc0151_03D4;
	UI_set_item_frame(var0012, 0x0000);
	var0014 = UI_set_item_quality(var0012, 0x004B);
	UI_clear_item_flag(var0012, 0x0012);
	var000C = UI_update_last_created(var0013);
labelFunc0151_03D4:
	var000C = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x52, "@Oh!@"]);
	var0015 = Func0992(0x0001, "@Look! A book...@", "@A book...@", true);
	abort;
labelFunc0151_03F7:
	if (!(var0000 == 0x0006)) goto labelFunc0151_041F;
	UI_show_npc_face0(0xFEEB, 0x0000);
	message("\"Canst thou not see that we are trying to help thee! Everything that we say hath meaning. Thou must vanquish the foe...\"");
	say();
	UI_add_answer(["help", "we?", "foe"]);
labelFunc0151_041F:
	if (!(var0000 != 0x0000)) goto labelFunc0151_0430;
	UI_add_answer("bye");
labelFunc0151_0430:
	converse attend labelFunc0151_0762;
	case "name" attend labelFunc0151_04C6:
	UI_remove_answer("name");
	if (!(var0000 == 0x0001)) goto labelFunc0151_047C;
	message("\"I am afraid that I have forgotten. Thou must understand, I have been dead a very long time.\"");
	say();
	message("\"Death whispers most sweetly, but my soul is not allowed to respond. I do not desire to persist in this life.\"");
	say();
	if (!(UI_get_random(0x0006) > 0x0003)) goto labelFunc0151_047C;
labelFunc0151_0462:
	message("\"I must be going. The others are waiting...\"");
	say();
	var000C = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x52, "@Begin again!@"], 0x0000);
	abort;
labelFunc0151_047C:
	if (!(var0000 == 0x0002)) goto labelFunc0151_049F;
	message("\"Quake at my words, for I am Sesyntho, Scribe to the Hierophant of Chaos! The others say that I am dead, but I am no ghost.\"");
	say();
	message("\"Canst thou not see that this is merely a time of waiting, before our ascension into the Void? So it cannot be called Death.\"");
	say();
	if (!(UI_get_random(0x0006) > 0x0003)) goto labelFunc0151_049F;
	goto labelFunc0151_0462;
labelFunc0151_049F:
	if (!(var0000 == 0x0003)) goto labelFunc0151_04C6;
	message("\"In life, I was Sansalys, the keeper of the Library of Chaos. Alas, the books are taken, except for a few.\"");
	say();
	message("\"There is another who awaits thee there. She would aid thee, but of necessity her aid will be strange to thee.\"");
	say();
	message("\"There is a law which forbids us from directly helping thee. I know that thou art our hope, yet my tongue is ensnared! I cannot speak the truth clearly.\"");
	say();
	if (!(UI_get_random(0x0006) > 0x0003)) goto labelFunc0151_04C6;
	goto labelFunc0151_0462;
labelFunc0151_04C6:
	case "others" attend labelFunc0151_04EE:
	UI_remove_answer("others");
	message("\"There are four of us here, doomed to perform the same lines over and over 'til eternity dawns.\"");
	say();
	message("\"One was a priest, another a librarian, and the last was a soldier. I was something once, but I do not recall.\"");
	say();
	if (!(UI_get_random(0x0006) > 0x0003)) goto labelFunc0151_04EE;
	goto labelFunc0151_0462;
labelFunc0151_04EE:
	case "Dirge" attend labelFunc0151_051A:
	UI_remove_answer("Dirge");
	message("\"We must mourn the fate of Chaos, for surely it hath been destroyed in this land. Order hath won.\"");
	say();
	message("\"Yet, I doubt if there can be any victory. How can Imbalance be victory? We are opposites, not enemies.\"");
	say();
	message("\"Oh, I speak blasphemy! But I cannot take back my words...\"");
	say();
	if (!(UI_get_random(0x0006) > 0x0003)) goto labelFunc0151_051A;
	goto labelFunc0151_0462;
labelFunc0151_051A:
	case "Ceremony" attend labelFunc0151_0542:
	UI_remove_answer("Ceremony");
	message("\"Stay and listen to our words, for we are performing a great Ode in honor of the Serpent of Chaos. He shall hear and reward us.\"");
	say();
	message("\"While the Great One yet slumbers, the Chaos Serpent hath the power to prevail over Order. I will have faith, unlike these others.\"");
	say();
	if (!(UI_get_random(0x0006) > 0x0003)) goto labelFunc0151_0542;
	goto labelFunc0151_0462;
labelFunc0151_0542:
	case "Chaos" attend labelFunc0151_056A:
	UI_remove_answer("Chaos");
	message("\"Oh, the beauty of pure Chaos! 'Tis the unity of all the discordant elements of Nature, without pattern or order.\"");
	say();
	message("\"We are Chaos -- it is our belief, and we are its adherents. We are followers of the Red Serpent.\"");
	say();
	if (!(UI_get_random(0x0006) > 0x0003)) goto labelFunc0151_056A;
	goto labelFunc0151_0462;
labelFunc0151_056A:
	case "met" attend labelFunc0151_0596:
	UI_remove_answer("met");
	message("\"I am sorry, but if we have met before, I cannot recall. It seems that we live the same moments repeatedly, and the interruptions fade so quickly away.\"");
	say();
	message("\"Life as a spectral being is so tedious. Once, I was a woman in the prime of my life. Now I merely exist...\"");
	say();
	message("\"I miss the flesh! There were pains and sorrow, but it was far better than this joyless life.\"");
	say();
	if (!(UI_get_random(0x0006) > 0x0003)) goto labelFunc0151_0596;
	goto labelFunc0151_0462;
labelFunc0151_0596:
	case "existence" attend labelFunc0151_05C2:
	UI_remove_answer("existence");
	message("\"We are locked into this existence, ghosts endlessly reciting the same arguments, as if our doom is somehow tied to the greater cycle.\"");
	say();
	message("\"If the War of Imbalance doth finally end, if Chaos is victorious or Order doth take the win, then we shall be freed to enter the Void.\"");
	say();
	message("\"I cannot help but think that thou art connected with our fate. How, I cannot say.\"");
	say();
	if (!(UI_get_random(0x0006) > 0x0003)) goto labelFunc0151_05C2;
	goto labelFunc0151_0462;
labelFunc0151_05C2:
	case "spy" attend labelFunc0151_0619:
	UI_remove_answer("spy");
	message("\"One sent by the Soldiers of Order, to break our wills and stop the Ode to Chaos. Why else dost thou listen so attentively?\"");
	say();
	if (!(!UI_get_item_flag(0xFEDA, 0x0004))) goto labelFunc0151_0604;
	message("\"I predict this: I see thee lying dead at the feet of one who prowls this labyrinth.\"");
	say();
	if (!(!Func097D(0xFE9B, 0x0001, 0x00E7, 0xFE99, 0xFE99))) goto labelFunc0151_0601;
	message("\"Thou hast not the weapon to defeat him! His powers overwhelm thee, and thou dost die!\"");
	say();
labelFunc0151_0601:
	goto labelFunc0151_0608;
labelFunc0151_0604:
	message("\"Thou hast slain the lurker of these depths, but others await thee! Thou shalt not prevail, stranger.\"");
	say();
labelFunc0151_0608:
	if (!(UI_get_random(0x0006) > 0x0003)) goto labelFunc0151_0619;
	goto labelFunc0151_0462;
labelFunc0151_0619:
	case "Hierophant" attend labelFunc0151_0641:
	UI_remove_answer("Hierophant");
	message("\"His words were the Words of Chaos. He communed with the Serpent, and wore his armour upon his breast. He was our Serpent Father.\"");
	say();
	message("\"They have slain him, and there is none to replace him. I do not know his burial spot. I weep for him.\"");
	say();
	if (!(UI_get_random(0x0006) > 0x0003)) goto labelFunc0151_0641;
	goto labelFunc0151_0462;
labelFunc0151_0641:
	case "Order" attend labelFunc0151_0669:
	UI_remove_answer("Order");
	message("\"To speak of Order is to defile my lips! They are opposite to rightfulness, they are wrongfulness, they are anathema.\"");
	say();
	message("\"I despise pattern, and disrespect all laws, and I prize mine individuality above all else!\"");
	say();
	if (!(UI_get_random(0x0006) > 0x0003)) goto labelFunc0151_0669;
	goto labelFunc0151_0462;
labelFunc0151_0669:
	case "help" attend labelFunc0151_0680:
	UI_remove_answer("help");
	message("\"I cannot... it is not permitted... words cannot be spoken...\"");
	say();
	message("\"'Tis forbidden to help thee directly, stranger. Thou must discern things for thyself.\"");
	say();
labelFunc0151_0680:
	case "we?" attend labelFunc0151_0697:
	UI_remove_answer("we?");
	message("\"We are the Souls of Chaos, the spirits condemned to prowl these corridors until Chaos is restored.\"");
	say();
	message("\"In life, we were victims of the Soldiers of Order. I was burned alive.\"");
	say();
labelFunc0151_0697:
	case "foe" attend labelFunc0151_06AA:
	UI_remove_answer("foe");
	message("\"The intruder is thine enemy, and is not one with us. He doth not comprehend Chaos. If thou wilt listen to the others, they can aid thee.\"");
	say();
labelFunc0151_06AA:
	case "bye" attend labelFunc0151_075F:
	Func097F(0xFE9C, "@Thanks!@", 0x0000);
	if (!(var0000 < 0x0005)) goto labelFunc0151_06DD;
	var000C = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x52, "@Begin again!@"], 0x0005);
labelFunc0151_06DD:
	if (!(var0000 == 0x0006)) goto labelFunc0151_075C;
	var000C = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x52, "@Goodbye...@"], 0x0000);
	UI_reduce_health(item, 0x0037, 0x0000);
	var0016 = UI_get_object_position(item);
	var0016[0x0001] = (var0016[0x0001] - (var0016[0x0003] / 0x0002));
	var0016[0x0002] = (var0016[0x0002] - (var0016[0x0003] / 0x0002));
	UI_sprite_effect(0x0015, var0016[0x0001], var0016[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
labelFunc0151_075C:
	goto labelFunc0151_0762;
labelFunc0151_075F:
	goto labelFunc0151_0430;
labelFunc0151_0762:
	endconv;
labelFunc0151_0763:
	return;
}


