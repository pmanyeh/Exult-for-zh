#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern void Func0871 0x871 ();
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func047B object#(0x47B) ()
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

	if (!(event == 0x0001)) goto labelFunc047B_03DB;
	UI_show_npc_face(0xFF85, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFF85));
	var0003 = Func08F7(0xFF86);
	var0004 = false;
	var0005 = UI_is_dead(UI_get_npc_object(0xFF84));
	var0006 = UI_is_dead(UI_get_npc_object(0xFF83));
	var0007 = UI_is_dead(UI_get_npc_object(0xFF82));
	var0008 = UI_is_dead(UI_get_npc_object(0xFF81));
	if (!(var0005 || (var0006 || (var0007 || var0008)))) goto labelFunc047B_0088;
	var0004 = true;
labelFunc047B_0088:
	UI_add_answer(["name", "job", "bye"]);
	if (!(var0005 && (!gflags[0x017A]))) goto labelFunc047B_00AA;
	UI_add_answer("winnings");
labelFunc047B_00AA:
	if (!(!gflags[0x0175])) goto labelFunc047B_010A;
	message("You see a disgruntled, obviously overworked barmaid. She gives you a perfunctory grunt of a hello.");
	say();
	gflags[0x0175] = true;
	var0009 = Func08F7(0xFFFC);
	if (!var0009) goto labelFunc047B_0107;
	message("\"Art thou still here?\" she asks Dupre.");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("\"I have not finished making mine assessment of thy fine drinking establishment!\"*");
	say();
	UI_show_npc_face(0xFF85, 0x0000);
	message("\"What? Art thou working for Brommer's Britannia travel guides?\"*");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("\"No, my dear. This research is strictly for mine own digestion!\"*");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFF85, 0x0000);
labelFunc047B_0107:
	goto labelFunc047B_0114;
labelFunc047B_010A:
	message("\"Good day to thee, ");
	message(var0000);
	message(". Rest and take a load off.\"");
	say();
labelFunc047B_0114:
	converse attend labelFunc047B_03D6;
	case "name" attend labelFunc047B_012A:
	message("\"I am Daphne.\"");
	say();
	UI_remove_answer("name");
labelFunc047B_012A:
	case "job" attend labelFunc047B_014C:
	message("\"That is an easy one. I am the workhorse in residence of the Bunk and Stool. While our resident princess flirts with the customers I do all the cooking, cleaning and serving.\"");
	say();
	UI_add_answer(["workhorse", "princess", "buy", "Bunk and Stool", "room"]);
labelFunc047B_014C:
	case "buy" attend labelFunc047B_0175:
	if (!(var0002 == 0x0017)) goto labelFunc047B_0164;
	Func0871();
	goto labelFunc047B_016E;
labelFunc047B_0164:
	message("\"Sorry, ");
	message(var0000);
	message(", I do not sell food and drink at this time.\"");
	say();
labelFunc047B_016E:
	UI_remove_answer("buy");
labelFunc047B_0175:
	case "workhorse" attend labelFunc047B_0195:
	message("\"Ever since the owner, Sprellic, got himself into trouble with the Library of Scars, there hath been no one else to run the place. Ohh, mine aching back!\"");
	say();
	UI_remove_answer("workhorse");
	UI_add_answer(["Sprellic", "Library of Scars"]);
labelFunc047B_0195:
	case "princess" attend labelFunc047B_01AF:
	message("\"Hmmph! That would be Ophelia.\"");
	say();
	UI_remove_answer("princess");
	UI_add_answer("Ophelia");
labelFunc047B_01AF:
	case "room" attend labelFunc047B_01C2:
	message("\"Thou shalt have to ask Ophelia about that. My domain is the kitchen!\"");
	say();
	UI_remove_answer("room");
labelFunc047B_01C2:
	case "Ophelia" attend labelFunc047B_022A:
	message("\"Ophelia this! Ophelia that! That is all I ever hear all bloody day! If all thou dost want to talk about is her, talk to someone else!\"");
	say();
	if (!var0003) goto labelFunc047B_0223;
	UI_show_npc_face(0xFF86, 0x0000);
	message("\"Do not hate me just because I am beautiful, Daphne.\"*");
	say();
	UI_show_npc_face(0xFF85, 0x0000);
	message("\"That is not the reason I hate thee, Ophelia!\"*");
	say();
	UI_show_npc_face(0xFF86, 0x0000);
	message("\"Oh, yes, I remember now. Thou dost hate me because I am beautiful, and thou art not!\"*");
	say();
	UI_show_npc_face(0xFF85, 0x0000);
	message("\"Thank thee so much, ");
	message(var0000);
	message(", for bringing up my favorite subject.\"*");
	say();
	UI_remove_npc_face(0xFF86);
	UI_show_npc_face(0xFF85, 0x0000);
labelFunc047B_0223:
	UI_remove_answer("Ophelia");
labelFunc047B_022A:
	case "Bunk and Stool" attend labelFunc047B_0244:
	message("\"The Bunk and Stool is where the fighters and ruffians come to drink in Jhelom. 'Tis not an easy job keeping such a lot happy with all their drinking and duelling and gambling.\"");
	say();
	UI_remove_answer("Bunk and Stool");
	UI_add_answer("gambling");
labelFunc047B_0244:
	case "Sprellic" attend labelFunc047B_025B:
	message("\"The fool was caught stealing the honor flag from the wall of the Library of Scars! Now the three students who challenged him will kill him on the duelling field. 'Tis a tragedy.\"");
	say();
	gflags[0x016E] = true;
	UI_remove_answer("Sprellic");
labelFunc047B_025B:
	case "Library of Scars" attend labelFunc047B_026E:
	message("\"That is the fighting club in Jhelom which produces perhaps the toughest fighters in all Britannia. Sprellic has never fought before in his entire life.\"");
	say();
	UI_remove_answer("Library of Scars");
labelFunc047B_026E:
	case "gambling" attend labelFunc047B_0359:
	if (!var0004) goto labelFunc047B_0283;
	message("\"I am sorry. All bets are off since the matter has been resolved.\"");
	say();
	goto labelFunc047B_0352;
labelFunc047B_0283:
	message("\"In fact, I am taking bets on the upcoming duels. Dost thou wish to bet that Sprellic will lose to any of the three other duellists?\"");
	say();
	var000A = Func090A();
	if (!var000A) goto labelFunc047B_034E;
	message("\"How much wouldst thou like to bet?\"");
	say();
labelFunc047B_0297:
	var000B = UI_input_numeric_value(0x0000, 0x00C8, 0x000A, 0x0000);
	if (!(var000B == 0x0000)) goto labelFunc047B_02BB;
	message("\"Perhaps thou art not truly serious about thy convictions. Mayhaps the princess will take thy line of bets.\"");
	say();
	goto labelFunc047B_034B;
labelFunc047B_02BB:
	message("\"Thou wouldst bet ");
	message(var000B);
	message(" gold that Sprellic will lose?\"");
	say();
	var000C = Func090A();
	if (!(!var000C)) goto labelFunc047B_02DC;
	message("\"Very well. How much wouldst thou like to bet?\"");
	say();
	goto labelFunc047B_0297;
	goto labelFunc047B_034B;
labelFunc047B_02DC:
	var000D = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var000D >= var000B)) goto labelFunc047B_0347;
	var000E = UI_add_party_items((var000B / 0x000A), 0x0399, 0xFE99, 0x0001, false);
	if (!var000E) goto labelFunc047B_0340;
	var000F = UI_remove_party_items(var000B, 0x0284, 0xFE99, 0xFE99, true);
	var0010 = true;
	message("\"Very well. Let me give thee markers for thy gold. Each one is worth 10 gold coins. If Sprellic loses, thou mayest come collect twice that amount of gold from me.~~\"Should he win, ");
	message(var0000);
	message(", thy markers are, of course, worthless.\"");
	say();
	message("\"Thou mayest come see me after the duels and exchange this marker for thy winnings if thou hast won.\"");
	say();
	goto labelFunc047B_0344;
labelFunc047B_0340:
	message("\"Oh! Thou must return later when thou hast enough room in thy pack for these markers.\"");
	say();
labelFunc047B_0344:
	goto labelFunc047B_034B;
labelFunc047B_0347:
	message("\"Thou hast not the amount of gold thou dost want to bet! Art thou trying to swindle me?\"");
	say();
labelFunc047B_034B:
	goto labelFunc047B_0352;
labelFunc047B_034E:
	message("\"Then if thou wouldst like to bet in favor of Sprellic, thou mayest see Ophelia, but I warn thee thou wilt be throwing thy money away!\"");
	say();
labelFunc047B_0352:
	UI_remove_answer("gambling");
labelFunc047B_0359:
	case "winnings" attend labelFunc047B_03C8:
	var0011 = UI_count_objects(0xFE9B, 0x0399, 0xFE99, 0x0001);
	var0012 = (var0011 * 0x0014);
	var0013 = UI_add_party_items(var0012, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0013) goto labelFunc047B_03BD;
	message("\"Here are thy winnings, ");
	message(var0000);
	message(". But I have reason to believe that thou wert the one who killed poor Sprellic! If this is the way that thou makest thy money, then thou shouldst be ashamed!\"");
	say();
	var0014 = UI_remove_party_items(var0011, 0x0399, 0xFE99, 0x0001, false);
	gflags[0x017A] = true;
	goto labelFunc047B_03C1;
labelFunc047B_03BD:
	message("\"Thou cannot possibly carry all that gold. Thou must come back when I can give thee the proper amount of gold!\"");
	say();
labelFunc047B_03C1:
	UI_remove_answer("winnings");
labelFunc047B_03C8:
	case "bye" attend labelFunc047B_03D3:
	goto labelFunc047B_03D6;
labelFunc047B_03D3:
	goto labelFunc047B_0114;
labelFunc047B_03D6:
	endconv;
	message("\"Enjoy thyself.\"*");
	say();
labelFunc047B_03DB:
	if (!(event == 0x0000)) goto labelFunc047B_03E9;
	Func092E(0xFF85);
labelFunc047B_03E9:
	return;
}


