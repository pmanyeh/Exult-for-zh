#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func098D 0x98D ();
extern var Func0932 0x932 (var var0000);
extern void Func0976 0x976 (var var0000, var var0001);
extern void Func0936 0x936 (var var0000, var var0001);
extern void Func092E 0x92E (var var0000);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func07D1 object#(0x7D1) ();
extern void Func08F0 0x8F0 ();
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func0955 0x955 ();
extern void Func0849 0x849 ();
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern void Func094E 0x94E (var var0000, var var0001);
extern var Func0956 0x956 (var var0000);
extern void Func0848 0x848 ();
extern var Func0988 0x988 (var var0000, var var0001);

void Func0447 object#(0x447) ()
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

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = UI_get_item_flag(0xFFB9, 0x001C);
	var0003 = Func0953();
	if (!(event == 0x0007)) goto labelFunc0447_00F3;
	if (!gflags[0x0083]) goto labelFunc0447_00E1;
	var0004 = UI_get_oppressor(0xFFB9);
	var0004 = (0x0000 - var0004);
	if (!(!var0004)) goto labelFunc0447_004F;
	var0004 = 0xFE9C;
labelFunc0447_004F:
	if (!((var0004 != 0xFE9C) && (!(var0004 in Func098D())))) goto labelFunc0447_00BA;
	var0000 = Func098D();
	var0000 = (var0000 & 0xFE9C);
	enum();
labelFunc0447_0073:
	for (var0007 in var0000 with var0005 to var0006) attend labelFunc0447_008D;
	if (!Func0932(var0007)) goto labelFunc0447_008A;
	goto labelFunc0447_0093;
labelFunc0447_008A:
	goto labelFunc0447_0073;
labelFunc0447_008D:
	var0007 = 0xFE9C;
labelFunc0447_0093:
	UI_set_opponent(0xFFB9, var0007);
	UI_set_opponent(var0004, var0007);
	Func0976(0xFFB9, 0x0003);
	Func0976(var0004, 0x0003);
	return;
labelFunc0447_00BA:
	if (!(!gflags[0x0007])) goto labelFunc0447_00D7;
	gflags[0x0007] = true;
	Func0936(UI_get_npc_object(var0004), UI_get_npc_object(0xFFB9));
	return;
labelFunc0447_00D7:
	Func092E(var0004);
	return;
	goto labelFunc0447_00F3;
labelFunc0447_00E1:
	var0008 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x01D0]);
labelFunc0447_00F3:
	if (!(event == 0x0000)) goto labelFunc0447_0151;
	if (!gflags[0x0083]) goto labelFunc0447_0151;
	var0009 = UI_die_roll(0x0001, 0x0003);
	UI_clear_item_say(0xFFB9);
	if (!(var0009 == 0x0001)) goto labelFunc0447_0129;
	UI_item_say(0xFFB9, "@Coward!@");
labelFunc0447_0129:
	if (!(var0009 == 0x0002)) goto labelFunc0447_013D;
	UI_item_say(0xFFB9, "@Pitiful excuse...@");
labelFunc0447_013D:
	if (!(var0009 == 0x0003)) goto labelFunc0447_0151;
	UI_item_say(0xFFB9, "@Flay that stranger!@");
labelFunc0447_0151:
	if (!(event == 0x0002)) goto labelFunc0447_019E;
	UI_show_npc_face0(0xFFB9, 0x0000);
	if (!gflags[0x0041]) goto labelFunc0447_0189;
	message("\"I would love to converse with thee, friend Avatar. But this is the hour when Andral sculpts my likeness.\"");
	say();
	Func097F(0xFFB9, "@Go on, Andral!@", 0x0000);
	Func097F(0xFFC2, "@Yes, milord.@", 0x0003);
	abort;
	goto labelFunc0447_019E;
labelFunc0447_0189:
	message("\"What art thou, a moron? Canst thou not see that the artist is at work? Andral is sculpting me.\"");
	say();
	message("\"When my bust is complete, then my fame will be perfect and they shall surely proclaim me Knight Champion!\"");
	say();
	Func097F(0xFFB9, "@Move on!@", 0x0000);
	abort;
labelFunc0447_019E:
	if (!(event == 0x0001)) goto labelFunc0447_01FC;
	UI_item_say(0xFE9C, "@Sir Knight!@");
	0xFFB9->Func07D1();
	Func097F(0xFFB9, "@Eh?@", 0x0000);
	if (!((UI_get_schedule_type(0xFFB9) == 0x0010) && UI_npc_nearby(0xFFC2))) goto labelFunc0447_01F2;
	var0008 = UI_delayed_execute_usecode_array(0xFFB9, [(byte)0x23, (byte)0x55, 0x0447], 0x0005);
	goto labelFunc0447_01FC;
labelFunc0447_01F2:
	UI_set_schedule_type(0xFFB9, 0x0003);
labelFunc0447_01FC:
	if (!(event == 0x0009)) goto labelFunc0447_0744;
	UI_halt_scheduled(0xFFB9);
	UI_run_schedule(0xFFB9);
	UI_show_npc_face0(0xFFB9, 0x0000);
	Func08F0();
	if (!(!var0002)) goto labelFunc0447_023F;
	message("\"Hmpf! Art thou a fighter? Thou dost not look like a fighter to me!\"");
	say();
	if (!UI_is_pc_female()) goto labelFunc0447_0238;
	message("\"More like someone to cook Luther's meals! Har!\"");
	say();
	goto labelFunc0447_023C;
labelFunc0447_0238:
	message("\"Thou dost look like someone to carry Luther's water buckets! Har!\"");
	say();
labelFunc0447_023C:
	goto labelFunc0447_0266;
labelFunc0447_023F:
	if (!(!gflags[0x0041])) goto labelFunc0447_025B;
	if (!(!gflags[0x003E])) goto labelFunc0447_0254;
	message("\"Hello, little fighter! Step on any ants today?\"");
	say();
	goto labelFunc0447_0258;
labelFunc0447_0254:
	message("\"Look at the new Knight! Thou dost certainly look fetching with thy tattoo. Hah!\"");
	say();
labelFunc0447_0258:
	goto labelFunc0447_0266;
labelFunc0447_025B:
	message("\"Now that thou hast bested me on the field of battle, I am thy friend. What can I do for thee?\"");
	say();
	UI_add_answer("join");
labelFunc0447_0266:
	UI_add_answer(["name", "duties"]);
	if (!(gflags[0x0042] && (!gflags[0x00B1]))) goto labelFunc0447_0285;
	UI_add_answer("bully");
labelFunc0447_0285:
	if (!(gflags[0x00AD] && (!gflags[0x00AF]))) goto labelFunc0447_0297;
	UI_add_answer("braggart");
labelFunc0447_0297:
	if (!(gflags[0x00AE] && (!gflags[0x00B0]))) goto labelFunc0447_02A9;
	UI_add_answer("repulsive");
labelFunc0447_02A9:
	if (!(gflags[0x00AC] && (!gflags[0x00B2]))) goto labelFunc0447_02BB;
	UI_add_answer("new shield");
labelFunc0447_02BB:
	if (!(gflags[0x0045] && (UI_get_schedule_type(0xFFB4) != 0x000F))) goto labelFunc0447_02D4;
	UI_add_answer("brown bottle");
labelFunc0447_02D4:
	if (!(gflags[0x0048] && (!UI_get_item_flag(0xFFB4, 0x0004)))) goto labelFunc0447_02ED;
	UI_add_answer("traitor");
labelFunc0447_02ED:
	UI_add_answer("bye");
labelFunc0447_02F4:
	converse attend labelFunc0447_0743;
	case "traitor" attend labelFunc0447_0312:
	UI_remove_answer("traitor");
	message("\"The Goblins did not ambush that patrol without help. If Lord Marsten doth not recognize this, then he is blind as well as brainless.\"");
	say();
	message("\"It doth not take a wizard to untangle this skein. Who among us acts strangely, doth do things in secret, and avoids his knightly duties?\"");
	say();
	message("\"Speak to Krayg the Provisioner. Force him to spill his filthy secrets. I would do it myself, but Marsten hath ordered me to stay away from that worm.\"");
	say();
labelFunc0447_0312:
	case "brown bottle" attend labelFunc0447_0346:
	UI_remove_answer("brown bottle");
	message("\"So what do I care if thou didst find garbage in the woods?\"");
	say();
	if (!Func097D(0xFE9B, 0x0001, 0x0268, 0xFE99, 0x0009)) goto labelFunc0447_0342;
	message("\"Place it not in my face! That bottle is filthy...\"");
	say();
	message("\"Besides, I do not drink that brew. 'Tis Fawnish ale. A bitter brew!\"");
	say();
labelFunc0447_0342:
	message("\"No doubt the bottle belongs to that traitor, Krayg.\"");
	say();
labelFunc0447_0346:
	case "name" attend labelFunc0447_0370:
	UI_remove_answer("name");
	message("\"I am Luther! I am a Bear and a trainer of unequalled strength. It is my destiny to become the next Knight Champion of Monitor!\"");
	say();
	UI_set_item_flag(0xFFB9, 0x001C);
	UI_add_answer(["Knight Champion", "destiny"]);
labelFunc0447_0370:
	case "Knight Champion" attend labelFunc0447_0387:
	UI_remove_answer("Knight Champion");
	message("\"The Knight Champion is the bravest and toughest fighter in all the land. Now that Astrid hath met an untimely doom, the post is open for the taking!\"");
	say();
	message("\"Actually, she must have been fairly addlepated to let the Goblins ambush her like that. When I am Champion, the Goblins shall quake in fear!\"");
	say();
labelFunc0447_0387:
	case "destiny" attend labelFunc0447_03AF:
	UI_remove_answer("destiny");
	message("\"I am the greatest fighter in Monitor! But I sense that thou art uncertain. Dost thou disagree?\"");
	say();
	if (!Func0955()) goto labelFunc0447_03AB;
	message("\"I shall gladly prove it to thee -- on the List Field! Meet me there in the morning,...\"");
	say();
	message("\"...but not too early. I like my sleep. The ninth hour should be sufficient.\"");
	say();
	goto labelFunc0447_03AF;
labelFunc0447_03AB:
	message("\"Good for thee.\"");
	say();
labelFunc0447_03AF:
	case "duties" attend labelFunc0447_03D6:
	UI_remove_answer("duties");
	message("\"As a Knight of the Order of the Bear, I am charged with defending Monitor at all times.\"");
	say();
	message("\"Often I am called upon by Caladin to lead patrols outside the\tcity walls, or to single-handedly scout the wilderness. I am very brave.\"");
	say();
	UI_add_answer(["Bears", "brave", "Caladin"]);
labelFunc0447_03D6:
	case "Bears" attend labelFunc0447_03FF:
	UI_remove_answer("Bears");
	message("\"We are the hope of Monitor, the only defense against the Goblins. The Leopards are hopeless, and the Wolves too smart for their own good.\"");
	say();
	if (!(!gflags[0x004A])) goto labelFunc0447_03FF;
	message("\"If thou dost become a Knight of Monitor -- which is highly unlikely by the looks of thee -- thou shalt not be a Bear.\"");
	say();
	message("\"The Ashes of Gurnordir do not select puny weaklings for our Command.\"");
	say();
	UI_add_answer("Ashes of Gurnordir");
labelFunc0447_03FF:
	case "Ashes of Gurnordir" attend labelFunc0447_0421:
	UI_remove_answer("Ashes of Gurnordir");
	message("\"Ignorant oaf! The Ashes are consecrated to the ideal of Prowess -- to the biggest, strongest, bravest warriors!\"");
	say();
	if (!(!gflags[0x004A])) goto labelFunc0447_0421;
	message("\"In the Test of Knighthood, it is the Ashes which shall show thee thy totem animal. By the blood.\"");
	say();
	message("\"But why am I speaking of this to thee? If thou didst attempt the Test, it would surely kill thee.\"");
	say();
labelFunc0447_0421:
	case "brave" attend labelFunc0447_0456:
	UI_remove_answer("brave");
	message("\"Many of the Knights tell stories about mine accomplishments. Thou shouldst especially speak with Lucilla -- she is very impressed with me...\"");
	say();
	if (!(!UI_is_pc_female())) goto labelFunc0447_0440;
	message("\"...if thou knowest what I mean, aye?\"");
	say();
labelFunc0447_0440:
	if (!(!gflags[0x0038])) goto labelFunc0447_0452;
	message("\"One day I shall be Lord of the Bears, when Caladin is at last seen for the pathetic coward that he truly is.\"");
	say();
	message("\"Then I shall challenge the Goblins to a final battle, and use their pathetic skulls for the sharpening of my blade!\"");
	say();
	goto labelFunc0447_0456;
labelFunc0447_0452:
	message("\"Now that I am Lord of the Bears, Monitor is at last safe from invasion.\"");
	say();
labelFunc0447_0456:
	case "Caladin" attend labelFunc0447_0469:
	UI_remove_answer("Caladin");
	message("\"Oftimes I am sent on the most dangerous types of patrols. Caladin, head of the Bear Command, likes to joke that he sends me on these patrols in the hopes that I do not return. But I know the truth. He sends me because he knows I am the only one who is tough enough.\"");
	say();
labelFunc0447_0469:
	case "bully" attend labelFunc0447_04B1:
	UI_remove_answer("bully");
	message("\"How darest thou call me a bully! That little whore Lydia must have put thee up to this...\"");
	say();
	if (!UI_get_item_flag(0xFFB8, 0x0004)) goto labelFunc0447_0490;
	message("\"I am glad that she is dead, the bitch!\"");
	say();
	goto labelFunc0447_0494;
labelFunc0447_0490:
	message("\"So, thou and she are teaming against me, aye? Spreading lies and rumors? Poisoning my reputation?\"");
	say();
labelFunc0447_0494:
	gflags[0x00B1] = true;
	Func0849();
	Func097F(0xFFB9, "@Damn thee!@", 0x0000);
	UI_set_schedule_type(0xFFB9, 0x0014);
labelFunc0447_04B1:
	case "braggart" attend labelFunc0447_04F4:
	UI_remove_answer("braggart");
	message("\"Braggart! Who art thou calling a braggart? Thou art a snivelling worm!\"");
	say();
	if (!(!gflags[0x0092])) goto labelFunc0447_04D3;
	message("\"That cold fish Spektor must have coaxed thee to this. He hath been jealous of my manliness for many moons...\"");
	say();
	message("\"He knows that the women prefer me to him, and he schemes against me!\"");
	say();
labelFunc0447_04D3:
	message("\"Why, I should rip thine head off and feed it to the pigs!\"");
	say();
	gflags[0x00AF] = true;
	Func0849();
	Func097F(0xFFB9, "@Curse thee!@", 0x0000);
	UI_set_schedule_type(0xFFB9, 0x0014);
labelFunc0447_04F4:
	case "repulsive" attend labelFunc0447_0528:
	UI_remove_answer("repulsive");
	message("\"Lucilla said what?! She finds me repulsive? Thou dost lie, it is a filthy lie...\"");
	say();
	message("\"I will have thine head on a pike for spreading such tales!\"");
	say();
	gflags[0x00B0] = true;
	Func0849();
	Func097F(0xFFB9, "@Blast thee!@", 0x0000);
	UI_set_schedule_type(0xFFB9, 0x0014);
labelFunc0447_0528:
	case "found shield" attend labelFunc0447_056E:
	UI_remove_answer("found shield");
	var000A = Func097D(0xFE9B, 0x0001, 0x02D9, 0xFE99, 0x0000);
	if (!gflags[0x00B2]) goto labelFunc0447_0559;
	message("\"Many thanks for returning my shield to me, friend.\"");
	say();
	goto labelFunc0447_056E;
labelFunc0447_0559:
	if (!var000A) goto labelFunc0447_0566;
	message("\"No, that doth not look like my shield. I do not believe I have ever seen that shield before in my life.\"");
	say();
	goto labelFunc0447_056A;
labelFunc0447_0566:
	message("\"I have not lost my shield. Thou art mistaken.\"");
	say();
labelFunc0447_056A:
	message("\"Besides, I have this new shield -- which, by the way, is a family heirloom. Thank thee very much.\"");
	say();
labelFunc0447_056E:
	case "new shield" attend labelFunc0447_064A:
	UI_remove_answer("new shield");
	message("\"So, thou hast heard of my new shield! No one hath ever seen the like of it before. It is so light, yet blows seem to bounce off of it...\"");
	say();
	if (!UI_npc_nearby(0xFFFF)) goto labelFunc0447_05A5;
	var000B = Func0992(0xFFFF, "@Look! He doth have my missing shield!@", 0x0000, false);
	UI_set_conversation_slot(0x0000);
	goto labelFunc0447_05BC;
labelFunc0447_05A5:
	var000B = Func0992(0x0001, "@Look! He doth have Dupre's missing shield!@", "@Why I think that is Dupre's missing shield!@", false);
	UI_set_conversation_slot(0x0000);
labelFunc0447_05BC:
	if (!((gflags[0x00B2] == false) && gflags[0x028A])) goto labelFunc0447_05DF;
	Func094E(var000B, "@And that mystery shield we have must be his!@");
	UI_add_answer("found shield");
	UI_set_conversation_slot(0x0000);
labelFunc0447_05DF:
	if (!(var000B != 0xFE9C)) goto labelFunc0447_05F0;
	message("\"What did he say?!\"");
	say();
	goto labelFunc0447_05F4;
labelFunc0447_05F0:
	message("\"What didst thou say?!\"");
	say();
labelFunc0447_05F4:
	var000C = Func0956(["return our shield", "I will pay for that shield", "say nothing"]);
	if (!(var000C == "return our shield")) goto labelFunc0447_0628;
	if (!gflags[0x0041]) goto labelFunc0447_061C;
	Func0848();
	goto labelFunc0447_0628;
labelFunc0447_061C:
	message("\"No, I will not! This is my shield, and it hath been mine since my father -- a great Knight of Monitor -- passed it on to me!\"");
	say();
	message("\"If thou dost call me a thief again, then thou art calling me a liar -- and dishonoring the name of my father!\"");
	say();
	message("\"If thou didst that, I would have to challenge thee to combat on the List Field! So if I were thee, I would think twice about speaking to me with such an insolent tone!\"");
	say();
labelFunc0447_0628:
	if (!(var000C == "I will pay for that shield")) goto labelFunc0447_064A;
	if (!gflags[0x0041]) goto labelFunc0447_0642;
	message("\"I could not accept money from a friend!\"");
	say();
	Func0848();
	goto labelFunc0447_064A;
labelFunc0447_0642:
	message("\"Hah! A fine shield like this is not for sale. It is a family heirloom, after all.\"");
	say();
	message("\"The other Knights might grovel after money, but not I! I am no Spektor!\"");
	say();
labelFunc0447_064A:
	case "join" attend labelFunc0447_0708:
	UI_remove_answer("join");
	var000D = Func0988(UI_get_npc_object(0xFE9C), UI_get_party_list());
	var000E = 0x0001;
	enum();
labelFunc0447_0671:
	for (var0011 in var000D with var000F to var0010) attend labelFunc0447_06E5;
	if (!(var000E == 0x0001)) goto labelFunc0447_0693;
	Func094E(UI_get_npc_number(var0011), "@Avatar!@");
labelFunc0447_0693:
	if (!(var000E == 0x0002)) goto labelFunc0447_06AA;
	Func094E(UI_get_npc_number(var0011), "@Luther! Travelling with us?!@");
labelFunc0447_06AA:
	if (!(var000E == 0x0003)) goto labelFunc0447_06C1;
	Func094E(UI_get_npc_number(var0011), "@I do not think this is a good idea...@");
labelFunc0447_06C1:
	if (!(var000E == 0x0004)) goto labelFunc0447_06D8;
	Func094E(UI_get_npc_number(var0011), "@If he is coming, I am going!@");
labelFunc0447_06D8:
	var000E = (var000E + 0x0001);
	goto labelFunc0447_0671;
labelFunc0447_06E5:
	UI_set_conversation_slot(0x0000);
	message("\"Thou couldst use a warrior like myself, to guard thee against thine enemies. With me on hand, nothing could harm thee!\"");
	say();
	if (!UI_get_item_flag(0xFEF7, 0x0004)) goto labelFunc0447_0704;
	message("\"But alas, my duty as a Knight keeps me here in Monitor. The Goblins are a constant threat, even though thou hast slain their king.\"");
	say();
	goto labelFunc0447_0708;
labelFunc0447_0704:
	message("\"But alas, my duty as a Knight keeps me here in Monitor. The Goblins are a constant threat.\"");
	say();
labelFunc0447_0708:
	case "bye" attend labelFunc0447_0740:
	if (!gflags[0x0041]) goto labelFunc0447_0725;
	Func097F(0xFFB9, "@Courage!@", 0x0002);
	goto labelFunc0447_0731;
labelFunc0447_0725:
	Func097F(0xFFB9, "@Slug!@", 0x0002);
labelFunc0447_0731:
	Func097F(0xFE9C, "@Bye!@", 0x0000);
	goto labelFunc0447_0743;
labelFunc0447_0740:
	goto labelFunc0447_02F4;
labelFunc0447_0743:
	endconv;
labelFunc0447_0744:
	return;
}


