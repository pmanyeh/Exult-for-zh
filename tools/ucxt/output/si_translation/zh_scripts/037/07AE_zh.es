#game "serpentisle"
// externs
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern var Func0953 0x953 ();
extern var Func0954 0x954 ();
extern var Func0942 0x942 (var var0000);
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);

void Func07AE object#(0x7AE) ()
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

	var0000 = UI_get_item_quality(item);
	if (!(event == 0x0003)) goto labelFunc07AE_0109;
	if (!(var0000 == 0x0007)) goto labelFunc07AE_0021;
	gflags[0x02A3] = true;
	goto labelFunc07AE_0104;
labelFunc07AE_0021:
	if (!(var0000 == 0x0005)) goto labelFunc07AE_0050;
	var0001 = UI_delayed_execute_usecode_array(Func09A0(0x0000, 0x0001), [(byte)0x55, 0x07AE], UI_die_roll(0x0064, 0x00C8));
	goto labelFunc07AE_0104;
labelFunc07AE_0050:
	var0002 = (("@" + Func0953()) + "...@");
	var0003 = (("@" + Func0954()) + "...@");
	var0004 = ["@Avatar...@", var0002, var0003, "@Pardon thou me...@", "@If I may...@", "@See!@"];
	UI_item_say(0xFFFE, var0004[UI_get_random(UI_get_array_size(var0004))]);
	var0005 = 0x0004;
	var0006 = false;
labelFunc07AE_00A3:
	if (!(var0005 > 0x0000)) goto labelFunc07AE_00DA;
	if (!(UI_get_item_quality(Func09A0(0x0005, var0005)) == 0x0000)) goto labelFunc07AE_00CD;
	var0006 = Func09A0(0x0005, var0005);
labelFunc07AE_00CD:
	var0005 = (var0005 - 0x0001);
	goto labelFunc07AE_00A3;
labelFunc07AE_00DA:
	if (!var0006) goto labelFunc07AE_0104;
	var0001 = UI_set_item_quality(var0006, var0000);
	var0001 = UI_delayed_execute_usecode_array(var0006, [(byte)0x23, (byte)0x55, 0x07AE], 0x0004);
labelFunc07AE_0104:
	UI_remove_item(item);
labelFunc07AE_0109:
	if (!(event == 0x0002)) goto labelFunc07AE_02E4;
	if (!(item == Func09A0(0x0000, 0x0001))) goto labelFunc07AE_017D;
	if (!(Func0942(0xFFFE) && (!gflags[0x02A3]))) goto labelFunc07AE_017A;
	UI_show_npc_face0(0xFFFE, 0x0000);
	var0007 = UI_get_object_position(0xFE9C);
	if (!((var0007[0x0001] > 0x0291) && ((var0007[0x0001] < 0x02AB) && ((var0007[0x0002] > 0x0A51) && (var0007[0x0002] < 0x0A5E))))) goto labelFunc07AE_0176;
	message("\"We did pass through an illusionary wall to enter. Might there be another leading from this place to somewhere else?\"");
	say();
	goto labelFunc07AE_017A;
labelFunc07AE_0176:
	message("\"We did pass through an illusionary wall to enter that cave. Might there be another leading deeper inside the mountain?\"");
	say();
labelFunc07AE_017A:
	goto labelFunc07AE_02E4;
labelFunc07AE_017D:
	var0001 = UI_set_item_quality(item, 0x0000);
	if (!Func0942(0xFFFE)) goto labelFunc07AE_02E4;
	UI_clear_item_say(0xFFFE);
	UI_show_npc_face0(0xFFFE, 0x0000);
	if (!((var0000 < 0x0000) || ((var0000 > 0x0006) || (var0000 == 0x0005)))) goto labelFunc07AE_01C7;
	UI_error_message(("Tell Bill Qual is " + var0000));
labelFunc07AE_01C7:
	if (!(var0000 == 0x0001)) goto labelFunc07AE_01F1;
	if (!Func097D(0xFE9B, 0x0001, 0x0247, 0xFE99, 0xFE99)) goto labelFunc07AE_01ED;
	message("\"Thou wert wise to pick up that bedroll. Now we can sleep well anywhere.\"");
	say();
	goto labelFunc07AE_01F1;
labelFunc07AE_01ED:
	message("\"A bedroll! With this, thou wilt sleep well anywhere.\"");
	say();
labelFunc07AE_01F1:
	if (!(var0000 == 0x0002)) goto labelFunc07AE_0243;
	var0001 = UI_find_nearby(0xFE9C, 0x020A, 0x0014, 0x0000);
	if (!var0001) goto labelFunc07AE_023F;
	if (!Func097D(0xFE9B, 0x0001, 0x0273, 0xFE99, 0xFE99)) goto labelFunc07AE_0234;
	message("\"I'll wager that chest is locked. Thou shouldst try thy lockpicks on it.\"");
	say();
	message("\"Lockpicks work on locked doors, too. Of course, we only use them for virtuous reasons -- the Avatar is no common thief!\"");
	say();
	goto labelFunc07AE_023C;
labelFunc07AE_0234:
	message("\"I'll wager that chest is locked. If we had lockpicks, however, we could open it!\"");
	say();
	message("\"They work on locked doors, too. Of course, we only use them for virtuous reasons -- the Avatar is no common thief!\"");
	say();
labelFunc07AE_023C:
	goto labelFunc07AE_0243;
labelFunc07AE_023F:
	message("\"Nice day we're having, isn't it.\"");
	say();
labelFunc07AE_0243:
	if (!(var0000 == 0x0003)) goto labelFunc07AE_0271;
	var0001 = UI_find_nearby(0xFE9C, 0x031D, 0x0014, 0x0000);
	if (!var0001) goto labelFunc07AE_026D;
	message("\"I see a scroll. Perhaps it contains clues about this place, or counsel for our future adventurings.\"");
	say();
	goto labelFunc07AE_0271;
labelFunc07AE_026D:
	message("\"Thou wert wise to collect that scroll, Avatar. It probably contains clues which will be useful to us later.\"");
	say();
labelFunc07AE_0271:
	if (!(var0000 == 0x0004)) goto labelFunc07AE_02A2;
	if (!(!UI_find_nearby(0xFE9C, 0x0253, 0x000A, 0x0000))) goto labelFunc07AE_029A;
	message("\"Thou wert wise to pick up that torch! We need all that we can find, for they do not burn for long.\"");
	say();
	message("\"No doubt we shall be in many strange dungeons before our adventure is over...\"");
	say();
	goto labelFunc07AE_02A2;
labelFunc07AE_029A:
	message("\"Let us take that torch! We need all that we can find, for they do not burn for long.\"");
	say();
	message("\"No doubt we shall be in many strange dungeons before our adventure is over...\"");
	say();
labelFunc07AE_02A2:
	if (!(var0000 == 0x0006)) goto labelFunc07AE_02E4;
	var0001 = UI_find_nearby(0xFE9C, 0x025E, 0x001E, 0x0000);
	if (!var0001) goto labelFunc07AE_02E0;
	var0008 = Func0953();
	message("\"That seems alike to the bow I did lose to the magical storm!\"");
	say();
	message("\"And we are carrying an animal's skull, given to us by the strange storm -- it must have changed places with my bow!\"");
	say();
	message("\"");
	message(var0008);
	message(", it is a clue! If we find where the other strange items came from, we shall find our lost possessions!\"");
	say();
	goto labelFunc07AE_02E4;
labelFunc07AE_02E0:
	message("\"Look at the size of that skeleton! Perhaps that skull thou hast doth match to these bones.\"");
	say();
labelFunc07AE_02E4:
	return;
}


