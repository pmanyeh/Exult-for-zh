#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func0994 0x994 ();
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func0955 0x955 ();
extern void Func087B 0x87B ();
extern void Func08AB 0x8AB ();
extern void Func08AA 0x8AA ();

void Func043D object#(0x43D) ()
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

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	var0003 = false;
	var0004 = false;
	var0005 = false;
	var0006 = false;
	var0007 = Func0994();
	if (!(event == 0x0007)) goto labelFunc043D_0043;
	var0008 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0112]);
labelFunc043D_0043:
	if (!(event == 0x0002)) goto labelFunc043D_00B3;
	if (!gflags[0x018F]) goto labelFunc043D_0052;
	abort;
labelFunc043D_0052:
	if (!(Func0994() == 0x0003)) goto labelFunc043D_0096;
	var0008 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x043D], 0x0032);
	var0008 = UI_approach_avatar(0xFFC3, 0x0078, 0x0028);
	UI_set_schedule_type(0xFFC3, 0x0009);
	goto labelFunc043D_00B3;
labelFunc043D_0096:
	var0008 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x043D], 0x0064);
labelFunc043D_00B3:
	if (!(event == 0x0001)) goto labelFunc043D_00E1;
	UI_item_say(0xFE9C, "@A moment, if thou wilt.@");
	0xFFC3->Func07D1();
	Func097F(0xFFC3, "@At thy service.@", 0x0005);
	UI_set_schedule_type(0xFFC3, 0x0003);
labelFunc043D_00E1:
	if (!((event == 0x0000) && (gflags[0x01B2] && (!gflags[0x018F])))) goto labelFunc043D_017A;
	var0009 = UI_get_random(0x0006);
	if (!(var0009 == 0x0001)) goto labelFunc043D_010C;
	var000A = "@He is following us!@";
labelFunc043D_010C:
	if (!(var0009 == 0x0002)) goto labelFunc043D_011C;
	var000A = "@Look!@";
labelFunc043D_011C:
	if (!(var0009 == 0x0003)) goto labelFunc043D_012C;
	var000A = "@Who is that man?@";
labelFunc043D_012C:
	if (!(var0009 == 0x0004)) goto labelFunc043D_013C;
	var000A = "@Spy!@";
labelFunc043D_013C:
	if (!(var0009 == 0x0005)) goto labelFunc043D_014C;
	var000A = "@Careful!@";
labelFunc043D_014C:
	if (!(var0009 == 0x0006)) goto labelFunc043D_015C;
	var000A = "@Do not look now...@";
labelFunc043D_015C:
	var000B = Func0992(0x0001, var000A, 0x0000, true);
	UI_set_schedule_type(0xFFC3, 0x0009);
	gflags[0x018E] = true;
labelFunc043D_017A:
	if (!(event == 0x0009)) goto labelFunc043D_0659;
	UI_run_schedule(0xFFC3);
	UI_clear_item_say(0xFFC3);
	UI_show_npc_face0(0xFFC3, 0x0000);
	var000C = UI_get_item_flag(0xFFC3, 0x001C);
	if (!(gflags[0x0171] || (gflags[0x0170] && (!gflags[0x0172])))) goto labelFunc043D_01CB;
	message("\"I know thee for what thou art, stranger! And I shall testify at the trial.\"");
	say();
	UI_remove_npc_face0();
	Func097F(0xFFC3, "@Wait and see!@", 0x0000);
	abort;
labelFunc043D_01CB:
	if (!(var000C == false)) goto labelFunc043D_021D;
	if (!(gflags[0x003E] == true)) goto labelFunc043D_01F7;
	if (!(var0001 == true)) goto labelFunc043D_01EA;
	message("\"Ah, one of Monitor's female Pikemen. I am Zulith, Chancellor of Fawn. It is mine honor and duty to serve thee.\"");
	say();
	goto labelFunc043D_01F4;
labelFunc043D_01EA:
	message("\"What a pleasure to meet one of the illustrious Monitorian knights! I am Zulith, Chancellor of Fawn. How might I assist thee, ");
	message(var0000);
	message("?\"");
	say();
labelFunc043D_01F4:
	goto labelFunc043D_0210;
labelFunc043D_01F7:
	if (!(var0001 == true)) goto labelFunc043D_0206;
	message("\"Welcome to Fawn, city of Beauty. My name is Zulith. I am the Chancellor. It is mine honor and duty to serve thee.\"");
	say();
	goto labelFunc043D_0210;
labelFunc043D_0206:
	message("\"Welcome to Fawn, honored traveller. I am Zulith, Chancellor of Fawn. How might I assist thee, ");
	message(var0000);
	message("?\"");
	say();
labelFunc043D_0210:
	UI_set_item_flag(0xFFC3, 0x001C);
	goto labelFunc043D_0227;
labelFunc043D_021D:
	message("\"Well met, ");
	message(var0000);
	message(". 'Tis a pleasure to see thee again.\"");
	say();
labelFunc043D_0227:
	if (!(gflags[0x018E] && (!gflags[0x018F]))) goto labelFunc043D_0239;
	UI_add_answer("Art thou following me?");
labelFunc043D_0239:
	UI_add_answer(["storms", "goblins", "Chancellor", "bye"]);
labelFunc043D_024C:
	converse attend labelFunc043D_0658;
	case "Art thou following me?" attend labelFunc043D_02A0:
	UI_remove_answer("Art thou following me?");
	message("\"I am a busy man, ");
	message(var0000);
	message(". If thy business lies along the route that mine doth, what fault of mine is that?\"");
	say();
	message("\"Besides, what hast thou done to warrant thy worries that I might be following thee?\"");
	say();
	var000B = Func0992(0x0001, "@Cheeky fellow!@", 0x0000, false);
	Func097F(0xFFC3, "@Arrogant strangers!@", 0x0000);
	gflags[0x018F] = true;
	UI_revert_schedule(0xFFC3);
	UI_set_schedule_type(0xFFC3, 0x0014);
	goto labelFunc043D_0658;
labelFunc043D_02A0:
	case "storms" attend labelFunc043D_02E8:
	UI_remove_answer("storms");
	message("\"Quite disruptive... They have totally depleted our fishing fleet.\"");
	say();
	if (!(gflags[0x0170] && (gflags[0x0172] && (!gflags[0x016E])))) goto labelFunc043D_02C9;
	message("\"If only these terrible storms would end!\"");
	say();
	goto labelFunc043D_02E8;
labelFunc043D_02C9:
	message("\"Great Captain Garth doth have plans laid for rebuilding the ships. But 'twould not be safe until these storms subside.\"");
	say();
	message("\"Great Captain Joth is in charge of finding the means to sustain the city until this unusual weather clears.\"");
	say();
	UI_push_answers();
	UI_add_answer(["Great Captains", "Great Captain Garth", "Great Captain Joth", "change subject"]);
labelFunc043D_02E8:
	case "change subject" attend labelFunc043D_02F8:
	message("\"Of course. What dost thou desire to know?\"");
	say();
	UI_pop_answers();
labelFunc043D_02F8:
	case "Great Captains" attend labelFunc043D_0318:
	UI_remove_answer("Great Captains");
	message("\"The Great Captains are the counsellors to Lady Yelinda, ruler of Fawn. There are three of them: Garth, Joth and Voldin.\"");
	say();
	UI_add_answer(["duties", "Voldin"]);
labelFunc043D_0318:
	case "duties" attend labelFunc043D_032F:
	message("\"'Tis their honor to oversee the fleets and all trade matters.\"");
	say();
	message("\"They are all seamen who have been appointed to their post in recognition of their expertise.\"");
	say();
	UI_remove_answer("duties");
labelFunc043D_032F:
	case "Voldin" attend labelFunc043D_034D:
	UI_remove_answer("Voldin");
	message("\"Voldin doth have a history of service to Fawn. He was unanimously nominated for the council position by his fellow captains.\"");
	say();
	message("\"Voldin works in conjunction with the Captain of the Guard to assure Fawn's safety. He is senior on the council.\"");
	say();
	UI_add_answer("history");
labelFunc043D_034D:
	case "history" attend labelFunc043D_0360:
	UI_remove_answer("history");
	message("\"Voldin served Fawn as a member of the city guard in his younger days. Before he became a council member, he was a fishing captain.\"");
	say();
labelFunc043D_0360:
	case "Great Captain Garth" attend labelFunc043D_037E:
	UI_remove_answer("Great Captain Garth");
	message("\"Garth comes from a fine family. He is the youngest member of the council, but wisely tempers his views to those of the senior council members.\"");
	say();
	message("\"Garth is also something of a ladies' man, I fear.\"");
	say();
	UI_add_answer("Garth's family");
labelFunc043D_037E:
	case "Garth's family" attend labelFunc043D_0395:
	message("\"His family doth own a shipping business. They have been merchant seamen for generations.\"");
	say();
	message("\"As his mother's youngest son, he took the council seat when his cousin resigned. His elder brother is now in charge of the family's shipping business.\"");
	say();
	UI_remove_answer("Garth's family");
labelFunc043D_0395:
	case "Great Captain Joth" attend labelFunc043D_03B9:
	UI_remove_answer("Great Captain Joth");
	message("\"Joth was the finest sea captain before he was injured.\"");
	say();
	message("\"He favors beginning to rebuild the fleet now, but hath deferred to Voldin's opinion that it would not be safe to do so at this time.\"");
	say();
	UI_add_answer(["injured", "not safe"]);
labelFunc043D_03B9:
	case "injured" attend labelFunc043D_03CC:
	UI_remove_answer("injured");
	message("\"Joth's ship ran aground during a storm... When his injuries would not allow him to return to sea, Lady Yelinda most graciously offered him a seat on the council.\"");
	say();
labelFunc043D_03CC:
	case "not safe" attend labelFunc043D_03EA:
	UI_remove_answer("not safe");
	message("\"Who would cut the wood to build the ships for fear of more goblins? And no sane person would venture into the open with these storms arriving without warning.\"");
	say();
	message("\"No, we must wait until this weather clears before we can hope to begin rebuilding our fleet.\"");
	say();
	UI_add_answer("Fear of more goblins?");
labelFunc043D_03EA:
	case "Fear of more goblins?" attend labelFunc043D_040A:
	UI_remove_answer("Fear of more goblins?");
	if (!gflags[0x014E]) goto labelFunc043D_0406;
	message("\"Everyone knows that goblins breed like flies upon carrion! Even though the tower hath been retaken, it will not be long before they are back!\"");
	say();
	goto labelFunc043D_040A;
labelFunc043D_0406:
	message("\"Everyone knows that goblins breed like flies upon carrion! It will not be long before they engulf the entire city with their filthy numbers!\"");
	say();
labelFunc043D_040A:
	case "goblins" attend labelFunc043D_04A6:
	UI_remove_answer("goblins");
	if (!(gflags[0x003E] == true)) goto labelFunc043D_048B;
	if (!(gflags[0x014E] == true)) goto labelFunc043D_0463;
	message("\"Most horrible creatures!\"");
	say();
	message("\"Dost thou know that, without the possibility of escape by ship because of the storms, I had actually feared that the city might be lost?\"");
	say();
	message("\"Knowest thou the brave Pikemen that restored our safety? I am sure that Lady Yelinda would like to thank them personally, if possible.\"");
	say();
	if (!(Func0955() == true)) goto labelFunc043D_0458;
	message("\"Pray tell me their names that I might relay them to her Ladyship at once.\"");
	say();
	UI_push_answers();
	UI_add_answer(["I do not know their names.", "I and my companions.", "I led the attack."]);
	goto labelFunc043D_0460;
labelFunc043D_0458:
	message("\"Thou canst not be faulted for not knowing their names. No doubt there are quite a number of Pikemen.\"");
	say();
	message("\"Lady Yelinda will have to send her thanks back to Monitor.\"");
	say();
labelFunc043D_0460:
	goto labelFunc043D_0488;
labelFunc043D_0463:
	if (!(var0001 == true)) goto labelFunc043D_0480;
	message("\"The goblins are most likely preparing for an assault on our city.\"");
	say();
	message("\"Thou shouldst stay here in Fawn, ");
	message(var0000);
	message(". There is great danger now that those horrible creatures hold the tower.\"");
	say();
	message("\"I would be most distraught to know that thou wert going to endanger thyself.\"");
	say();
	goto labelFunc043D_0488;
labelFunc043D_0480:
	message("\"The goblins are most likely preparing for an assault on our city.\"");
	say();
	message("\"Shouldst thou not lend thy bravery to the cause of restoring our city's safety, noble Pikeman?\"");
	say();
labelFunc043D_0488:
	goto labelFunc043D_04A6;
labelFunc043D_048B:
	if (!(var0001 == true)) goto labelFunc043D_049E;
	message("\"Most horrible creatures!\"");
	say();
	message("\"They have a most unfortunate taste for human flesh. For thy safety, thou shouldst remain within the confines of the city. I fear that they are preparing to assault the city.\"");
	say();
	goto labelFunc043D_04A6;
labelFunc043D_049E:
	message("\"Most horrible creatures!\"");
	say();
	message("\"Thou shouldst speak with the Captain of the Guard. We have need of able-bodied fighters, such as thyself. I fear that they are preparing to assault the city.\"");
	say();
labelFunc043D_04A6:
	case "I do not know their names." attend labelFunc043D_04CA:
	UI_remove_answer(["I do not know their names.", "I and my companions.", "I led the attack."]);
	message("\"Thou canst not be faulted for not knowing their names. No doubt there are quite a number of Pikemen.\"");
	say();
	message("\"Lady Yelinda will have to send her thanks back to Monitor.\"");
	say();
	UI_pop_answers();
labelFunc043D_04CA:
	case "I and my companions." attend labelFunc043D_0501:
	UI_remove_answer(["I do not know their names.", "I and my companions.", "I led the attack."]);
	if (!(var0001 == true)) goto labelFunc043D_04F5;
	message("\"Then thou hast companions beyond compare!\"");
	say();
	message("\"Lady Yelinda will surely wish to meet thee, a shining example of Beauty!\"");
	say();
	goto labelFunc043D_04FD;
labelFunc043D_04F5:
	message("\"Truly thou art the bravest Monitorian alive!\"");
	say();
	message("\"Lady Yelinda will surely wish to thank thee herself.\"");
	say();
labelFunc043D_04FD:
	UI_pop_answers();
labelFunc043D_0501:
	case "I led the attack." attend labelFunc043D_0538:
	UI_remove_answer(["I do not know their names.", "I and my companions.", "I led the attack."]);
	if (!(var0001 == true)) goto labelFunc043D_052C;
	message("\"Surely thou dost jest!\"");
	say();
	message("\"They could not have allowed someone as beautiful as thyself to be endangered!\"");
	say();
	goto labelFunc043D_0534;
labelFunc043D_052C:
	message("\"Truly thou art the bravest Monitorian alive!\"");
	say();
	message("\"Lady Yelinda will surely wish to thank thee herself.\"");
	say();
labelFunc043D_0534:
	UI_pop_answers();
labelFunc043D_0538:
	case "Chancellor" attend labelFunc043D_057C:
	UI_remove_answer("Chancellor");
	if (!(gflags[0x0170] && (gflags[0x0172] && (!gflags[0x016E])))) goto labelFunc043D_0564;
	message("\"I serve the Lady, handling those details which she doth choose to delegate to me. I also exchange various forms of money.\"");
	say();
	UI_add_answer("exchange money");
	goto labelFunc043D_057C;
labelFunc043D_0564:
	message("\"I serve as an envoy from Lady Yelinda to the Great Captains. I oversee all the minor details that should not worry her Ladyship. I also exchange various forms of money.\"");
	say();
	message("\"If thou dost wish an audience with her, I can examine her schedule.\"");
	say();
	UI_add_answer(["Lady Yelinda", "exchange money", "audience"]);
labelFunc043D_057C:
	case "Lady Yelinda" attend labelFunc043D_059A:
	UI_remove_answer("Lady Yelinda");
	message("\"She is the ruler of Fawn and all its environs. All who honor Beauty honor Yelinda.\"");
	say();
	message("\"She is a wise and compassionate leader. Everyone doth love her. Her beauty is only rivaled by that of Kylista.\"");
	say();
	UI_add_answer("Kylista");
labelFunc043D_059A:
	case "Kylista" attend labelFunc043D_05B8:
	UI_remove_answer("Kylista");
	message("\"Kylista is the priestess of Beauty.\"");
	say();
	message("\"Yelinda is the embodiment of all of Fawn itself. Because Kylista presides over the Oracle, she is the personification of Beauty.\"");
	say();
	UI_add_answer("Oracle");
labelFunc043D_05B8:
	case "Oracle" attend labelFunc043D_05DD:
	UI_remove_answer("Oracle");
	message("\"Many people believe that the Mages of Old Sosaria created the Oracle. I do not believe such.\"");
	say();
	message("\"I have stood alone in the temple gazing at it, and I will tell thee that it is a living being trapped there in that statue.\"");
	say();
	message("\"Those Mages did not create a magical item! They summoned some beautiful spirit and trapped it there!\"");
	say();
	UI_add_answer(["temple"]);
labelFunc043D_05DD:
	case "temple" attend labelFunc043D_05F7:
	UI_remove_answer("temple");
	message("\"I often go there when the day hath been difficult. 'Tis directly behind the palace. 'Tis so quiet and peaceful, except before a revelation.\"");
	say();
	UI_add_answer("revelation");
labelFunc043D_05F7:
	case "revelation" attend labelFunc043D_060A:
	UI_remove_answer("revelation");
	message("\"Yes, revelations are quite exciting. A message from the heavens, or at least that poor trapped spirit.\" *\"Often, 'tis the only thing many people have to give them hope in these troubled times.\"");
	say();
labelFunc043D_060A:
	case "audience" attend labelFunc043D_061D:
	UI_remove_answer("audience");
	message("\"Lady Yelinda doth receive visitors and petitions every morning. Let us see... She could receive thee some time next week.\" *\"Perhaps if I intercede for thee, thou mightest be received earlier. I shall see what I can arrange.\"");
	say();
labelFunc043D_061D:
	case "exchange money" attend labelFunc043D_0628:
	Func087B();
labelFunc043D_0628:
	case "bye" attend labelFunc043D_0655:
	Func08AB();
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@Goodbye.@", 0x0000);
	Func097F(0xFFC3, "@Walk in Beauty!@", 0x0005);
	Func08AA();
	goto labelFunc043D_0658;
labelFunc043D_0655:
	goto labelFunc043D_024C;
labelFunc043D_0658:
	endconv;
labelFunc043D_0659:
	return;
}


