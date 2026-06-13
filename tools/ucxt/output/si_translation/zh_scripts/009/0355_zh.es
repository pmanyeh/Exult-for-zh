#game "serpentisle"
// externs
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern var Func0955 0x955 ();
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func0355 shape#(0x355) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0002)) goto labelFunc0355_0096;
	var0000 = UI_get_object_position(item);
	if (!(UI_get_npc_id(item) == 0x000F)) goto labelFunc0355_004A;
	var0001 = UI_create_new_object(0x037F);
	if (!var0001) goto labelFunc0355_0036;
	var0002 = UI_update_last_created(var0000);
labelFunc0355_0036:
	UI_remove_item(item);
	UI_clear_item_flag(0xFE9C, 0x0010);
	UI_init_conversation();
	abort;
labelFunc0355_004A:
	UI_sprite_effect(0x0008, (var0000[0x0001] + UI_get_npc_id(item)), (var0000[0x0002] - UI_get_npc_id(item)), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_set_npc_id(item, (UI_get_npc_id(item) + 0x0001));
	var0002 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0355]);
	abort;
labelFunc0355_0096:
	UI_play_music(0x0035, Func09A0(0x0005, 0x0001));
	UI_show_npc_face0(0xFEE4, 0x0000);
	message("\"Who dares to disturb the restless repose of the Hierophant of Chaos!\"");
	say();
	message("\"Wait -- I know thee! The Void hath whispered to me of thy coming, Hero from a Distant Land. But dost thou dare to hear the answers to thy questions?\"");
	say();
	gflags[0x022B] = true;
	UI_add_answer(["restless repose", "whispers from the Void", "questions", "bye"]);
labelFunc0355_00CF:
	converse attend labelFunc0355_02F7;
	case "restless repose" attend labelFunc0355_00ED:
	UI_remove_answer("restless repose");
	message("\"Did not faithful Sethys tell thee of my fate? I was slain on this very spot centuries ago, at the hands of the Soldiers of Order.\"");
	say();
	message("\"My spirit hath lingered here, for my final duties remain unfinished...\"");
	say();
	message("\"Once I have passed my knowledge to thee, I shall be free to ascend to the Void. However, my soul shall not have rest until the Chaos Serpent is restored.\"");
	say();
labelFunc0355_00ED:
	case "whispers from the Void" attend labelFunc0355_0108:
	UI_remove_answer("whispers from the Void");
	message("\"Do not toy with me, Hero! Though our purposes may be the same, our philosophies are not -- I know thee to be no friend of Chaos!\"");
	say();
	message("\"Yet we both can sense the messages from the Void Between the Worlds. The wisdom of the Great Earth Serpent...\"");
	say();
	message("\"We thought him dead, or deposed, yet he again speaks to Men -- though his power is a pale imitation of his former glory.\"");
	say();
labelFunc0355_0108:
	case "change subject" attend labelFunc0355_0118:
	UI_pop_answers();
	message("\"Must we? Very well...\"");
	say();
labelFunc0355_0118:
	case "nothing more" attend labelFunc0355_0128:
	UI_pop_answers();
	message("\"If thou art certain...\"");
	say();
labelFunc0355_0128:
	case "questions" attend labelFunc0355_0157:
	UI_remove_answer("questions");
	message("\"I know what thou dost seek, Hero, and I am opposed to it. Chaos must reign supreme, and not be unequally yoked to Order in the prison known as Balance!\"");
	say();
	message("\"Yet even servitude would be better than the damnation that Chaos now endures, with its Forces driven apart and broken.\"");
	say();
	message("\"Listen carefully -- I shall give thee mine aid this one time, but we must be enemies ever afterward!\"");
	say();
	UI_push_answers();
	UI_add_answer(["aid", "damnation", "change subject"]);
labelFunc0355_0157:
	case "damnation" attend labelFunc0355_017F:
	UI_remove_answer("damnation");
	message("\"Behold the mystery of Balance! When Order struck down the Serpent of Chaos, the act undid the tapestry of Balance.\"");
	say();
	message("\"Thus, both Chaos and Order were doomed!\"");
	say();
	message("\"When the Serpent was broken, the three Forces of Chaos were driven to insanity -- but so was the Order Serpent...\"");
	say();
	UI_add_answer(["Forces of Chaos", "Order Serpent"]);
labelFunc0355_017F:
	case "Forces of Chaos" attend labelFunc0355_019A:
	UI_remove_answer("Forces of Chaos");
	message("\"The Forces of Chaos -- the sacred embodiment of the philosophies of Chaos -- were corrupted, and became the Banes which thou hast fought against!\"");
	say();
	message("\"Didst thou suppose the Banes to be innately evil? False supposition!\"");
	say();
	message("\"The Banes are only insane because of the Imbalance. Restore Balance, and they shall be healed!\"");
	say();
labelFunc0355_019A:
	case "Order Serpent" attend labelFunc0355_01B5:
	UI_remove_answer("Order Serpent");
	message("\"The Serpent of Order thought itself victorious in the War of Imbalance, but the act of destroying the Chaos Serpent brought despair!\"");
	say();
	message("\"With the Great Earth Serpent lost, and the Chaos Serpent struck down, only the Order Serpent remains to rule in the Void.\"");
	say();
	message("\"Yet due to the Imbalance, the Serpent of Order hath lost its mind! It floats mindlessly in the Void, able to coalesce a thought with only the most supreme effort!\"");
	say();
labelFunc0355_01B5:
	case "aid" attend labelFunc0355_01E7:
	UI_remove_answer("aid");
	message("\"I shall now tell thee the way to restore the Serpent of Chaos. Until thou dost do this, Balance cannot be restored.\"");
	say();
	message("\"I have no love for Balance, but I also know that Chaos cannot reign in Imbalance...\"");
	say();
	message("\"Ask me these things: where thou must go, what thou must bring, and the rite thou must perform.\"");
	say();
	UI_push_answers();
	UI_add_answer(["where I must go", "what I must bring", "the rite", "nothing more"]);
labelFunc0355_01E7:
	case "where I must go" attend labelFunc0355_0202:
	UI_remove_answer("where I must go");
	message("\"The Shrine of Chaos doth lie within the heart of the Skullcrusher Mountains. I know that thou hast been in this dungeon, but hast thou found the secret passageways?\"");
	say();
	message("\"I see a shadow of a vision -- a mighty detonation, shattering the great bronze doors. Is this of the future, or hast thou done this in the past?\"");
	say();
	message("\"The rite is to be performed in the most sacred precincts of the Shrine, before the Wall of Lights.\"");
	say();
labelFunc0355_0202:
	case "what I must bring" attend labelFunc0355_021D:
	UI_remove_answer("what I must bring");
	message("\"The rite cannot succeed unless thou dost bring the Serpent of Blackrock, to open the Wall of Lights and admit the energy from the Void.\"");
	say();
	message("\"Any of the three Serpents shall do, though the Serpent of Chaos would be most appropriate.\"");
	say();
	message("\"Thou must also bring the Banes, imprisoned within the Prisms which thou hast fashioned.\"");
	say();
labelFunc0355_021D:
	case "the rite" attend labelFunc0355_0240:
	UI_remove_answer("the rite");
	message("\"Thou must begin by opening the Wall of Lights, for this provides the energy source which the Rite requires. This is done by placing the Serpent of Blackrock in the stone slot on the floor.\"");
	say();
	message("\"Next, thou must place the Banes upon the altars of Chaos. Thou must place each Bane upon the altar which is dedicated to its native Force!\"");
	say();
	message("\"When thou hast placed each correctly, a flame of Chaos shall appear as thy sign.\"");
	say();
	message("\"The time is now right to restore the Serpent of Chaos to completeness. Recite this mantra...\"");
	say();
	message("\"In pri kli ort ailem, Priin ort inten mani!\"");
	say();
labelFunc0355_0240:
	case "bye" attend labelFunc0355_02F4:
	message("\"Wait, Hero -- I can only speak with thee this once! Dost thou understand all that I have said?\"");
	say();
	if (!(!Func0955())) goto labelFunc0355_0271;
	message("\"Then ask of me again, and I shall explain once more.\"");
	say();
	UI_clear_answers();
	UI_add_answer(["restless repose", "whispers from the Void", "questions", "bye"]);
	goto labelFunc0355_02F4;
labelFunc0355_0271:
	message("\"I disbelieve thee, mortal. Take this scroll. It shall bring our conversation to thy remembrance, in thine hour of need.\"");
	say();
	var0002 = Func099B(0xFE9C, 0x0001, 0x02C3, 0x0063, 0x0000, 0x0000, true);
	message("\"I must confess, Avatar, that there is a mystery which even I cannot explain.\"");
	say();
	message("\"The Rite cannot succeed without an allied force strong enough to weld the Banes together into the Serpent. It is a greater task to restore than to destroy.\"");
	say();
	message("\"Seek the answer to this mystery, or thou shalt not succeed! Now, I must go...\"");
	say();
	UI_remove_npc_face0();
	UI_play_music(0x0035, Func09A0(0x0005, 0x0001));
	UI_set_schedule_type(item, 0x000F);
	Func097F(0xFE9C, "@Many thanks!@", 0x0000);
	UI_set_item_flag(0xFE9C, 0x0010);
	UI_end_conversation();
	UI_set_schedule_type(item, 0x000F);
	var0002 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x6F, (byte)0x70, (byte)0x52, "@Into the Void!@", (byte)0x55, 0x0355]);
	abort;
labelFunc0355_02F4:
	goto labelFunc0355_00CF;
labelFunc0355_02F7:
	endconv;
	return;
}


