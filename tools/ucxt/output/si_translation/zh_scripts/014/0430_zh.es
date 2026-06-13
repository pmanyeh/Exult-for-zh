#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0955 0x955 ();
extern void Func081A 0x81A ();
extern void Func081B 0x81B ();
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func08A9 0x8A9 ();
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern void Func08AB 0x8AB ();
extern void Func08AA 0x8AA ();

void Func0430 object#(0x430) ()
{
	var var0000;
	var var0001;
	var var0002;

	var0000 = Func0954();
	if (!(event == 0x0007)) goto labelFunc0430_0020;
	var0001 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0112]);
labelFunc0430_0020:
	if (!(event == 0x0001)) goto labelFunc0430_0056;
	UI_item_say(0xFE9C, "@A moment, if thou wilt.@");
	0xFFD0->Func07D1();
	Func097F(0xFFD0, (("@At thy service, " + var0000) + ".@"), 0x0005);
	UI_set_schedule_type(0xFFD0, 0x0003);
labelFunc0430_0056:
	if (!(event == 0x0009)) goto labelFunc0430_0642;
	UI_run_schedule(0xFFD0);
	UI_clear_item_say(0xFFD0);
	UI_show_npc_face0(0xFFD0, 0x0000);
	var0002 = UI_get_item_flag(0xFFD0, 0x001C);
	if (!(gflags[0x0171] || (gflags[0x0170] && (!gflags[0x0172])))) goto labelFunc0430_00A7;
	message("\"Leave! I have no wish to be seen with thee! Thou dost consort with criminals and blasphemers.\"");
	say();
	UI_remove_npc_face0();
	Func097F(0xFFD0, "@Leave me alone!@", 0x0000);
	abort;
labelFunc0430_00A7:
	if (!(var0002 == false)) goto labelFunc0430_00E3;
	if (!(gflags[0x003E] == true)) goto labelFunc0430_00CC;
	if (!UI_is_pc_female()) goto labelFunc0430_00C5;
	message("\"I am Delphynia, horticulturist and healer. State thy business or be on thy way. I do not traffic with oafs and knaves.\"");
	say();
	goto labelFunc0430_00C9;
labelFunc0430_00C5:
	message("\"I am Delphynia, horticulturist and healer. Welcome, noble Pikeman. Thy presence honors me.\"");
	say();
labelFunc0430_00C9:
	goto labelFunc0430_00D6;
labelFunc0430_00CC:
	message("\"I am Delphynia, horticulturist and healer. How may I be of service, ");
	message(var0000);
	message("?\"");
	say();
labelFunc0430_00D6:
	UI_set_item_flag(0xFFD0, 0x001C);
	goto labelFunc0430_00E7;
labelFunc0430_00E3:
	message("\"'Tis always a pleasure to see thee, Avatar. How may I be of service to thee?\"");
	say();
labelFunc0430_00E7:
	UI_add_answer(["Goblins", "healer", "storms", "buy", "bye"]);
	if (!(gflags[0x0193] && (!gflags[0x028F]))) goto labelFunc0430_010F;
	UI_add_answer("apparatus");
labelFunc0430_010F:
	if (!(gflags[0x0194] && (!gflags[0x0290]))) goto labelFunc0430_0121;
	UI_add_answer("pumice");
labelFunc0430_0121:
	if (!(gflags[0x0197] && (!gflags[0x0295]))) goto labelFunc0430_0133;
	UI_add_answer("blue egg");
labelFunc0430_0133:
	if (!(gflags[0x019D] && (!gflags[0x029D]))) goto labelFunc0430_0145;
	UI_add_answer("glowing rock");
labelFunc0430_0145:
	if (!((gflags[0x0152] == true) && (!gflags[0x01A3]))) goto labelFunc0430_0159;
	UI_add_answer("letter");
labelFunc0430_0159:
	if (!((gflags[0x0076] == true) && ((gflags[0x005A] == false) && (gflags[0x01A5] == false)))) goto labelFunc0430_0174;
	UI_add_answer("Varo Leaves");
labelFunc0430_0174:
	if (!(gflags[0x0004] == true)) goto labelFunc0430_0183;
	UI_add_answer("Iolo the Mad");
labelFunc0430_0183:
	converse attend labelFunc0430_0641;
	case "Goblins" attend labelFunc0430_01A0:
	message("\"Would that I never hear of those horrible creatures again! They are why I am now Fawn's healer, though I am not properly trained.\" *\"Pomdirgun's shadow hath cast a blight on all the land!\"");
	say();
	UI_remove_answer("Goblins");
	UI_add_answer("Pomdirgun");
labelFunc0430_01A0:
	case "healer" attend labelFunc0430_01CE:
	message("\"I am a horticulturist by trade. What little I know of herbs hath given me a responsibility I did not want. I curse the day that Seth refused a guard escort to do his herb gathering!\"");
	say();
	message("\"Dost thou wish healing?\"");
	say();
	if (!Func0955()) goto labelFunc0430_01BC;
	Func081A();
	goto labelFunc0430_01C0;
labelFunc0430_01BC:
	message("\"I hate to say this, but I am relieved to hear that!\"");
	say();
labelFunc0430_01C0:
	UI_remove_answer("healer");
	UI_add_answer("Seth");
labelFunc0430_01CE:
	case "Seth" attend labelFunc0430_01EC:
	message("\"Seth was two years older than the heavens, and set in his ways, to be sure. But he was a fine healer. He refused a guard escort to gather his herbs. He told Jorvin it was because the guards stepped on the plants he wanted to gather.\"");
	say();
	message("\"But I think he simply wanted to be able to escape alone for a while. Thou hast no idea how little time one has when thou must be at the beck and call of everyone with some imagined ill!\"");
	say();
	UI_remove_answer("Seth");
	UI_add_answer("Jorvin");
labelFunc0430_01EC:
	case "Jorvin" attend labelFunc0430_01FF:
	message("\"Jorvin is the Captain of the Guards. 'Twas he that went looking for Seth near twilight when the old man had not returned to the city.\" *\"Jorvin found signs that the Goblins had taken Seth, and led pursuit. But it was too late. By the time the guards caught the foul monsters, Seth was already the makings for their next meal!\"");
	say();
	UI_remove_answer("Jorvin");
labelFunc0430_01FF:
	case "Pomdirgun" attend labelFunc0430_0212:
	message("\"Iiieeee! That very name sends ice down my spine! Pomdirgun hath welded all the Goblins into his weapon. He will never stop until he hath driven us all from the land... Or feasted on us to the last child.\" *\"He is a fiend drawn to destroy our Beauty!\"");
	say();
	UI_remove_answer("Pomdirgun");
labelFunc0430_0212:
	case "storms" attend labelFunc0430_024C:
	UI_remove_answer("storms");
	if (!(gflags[0x0170] && (gflags[0x0172] && (!gflags[0x016E])))) goto labelFunc0430_023B;
	message("\"My sole hope is now that the conspiracy of Kylista and Voldin hath been exposed the curse which lies upon this land might be raised.\"");
	say();
	message("\"Can a City built upon the concept of Pure Beauty remain cursed? I hope not...\"");
	say();
	goto labelFunc0430_024C;
labelFunc0430_023B:
	message("\"What foulness is about in the land! That I received one of the harbingers of Fawn's doom stains my Beauty! Even the heavens lash out to burn away the vile truth that I harbor within mine heart!\"");
	say();
	UI_add_answer(["harbingers", "vile truth"]);
labelFunc0430_024C:
	case "harbingers" attend labelFunc0430_028D:
	message("\"When those sailors -- those false prophets -- first landed on our shores, two of their number came to seek me. One was a mage of some sort who came seeking what reagents I grow.\"");
	say();
	if (!gflags[0x01A3]) goto labelFunc0430_0272;
	message("\"The other... as thou knowest, was Ruggs.\"");
	say();
	UI_add_answer(["false prophets", "mage"]);
	goto labelFunc0430_0286;
labelFunc0430_0272:
	message("\"The other... He was a thief who wore a face none could love. He stole mine heart away!\"");
	say();
	UI_add_answer(["false prophets", "mage", "thief"]);
labelFunc0430_0286:
	UI_remove_answer("harbingers");
labelFunc0430_028D:
	case "false prophets" attend labelFunc0430_02C5:
	UI_remove_answer("false prophets");
	if (!(gflags[0x0170] && (gflags[0x0172] && (!gflags[0x016E])))) goto labelFunc0430_02B6;
	message("\"But now I am so confused... 'Twas Kylista who told us that The Fellowship was false, but now she doth stand accused of heresy...\"");
	say();
	message("\"And The Fellowship is again openly admitted within the city! I know not what to think.\"");
	say();
	goto labelFunc0430_02C5;
labelFunc0430_02B6:
	message("\"That is what the Priestess of Beauty calls them. They speak of something called The Fellowship, and claim that it will make our lives complete.\"");
	say();
	message("\"Everyone knows that the true way lies along Beauty's path. By seeking Beauty, we draw all good things to us.\" *\"I rue the day I ever saw him!\"");
	say();
	UI_add_answer("Fellowship");
labelFunc0430_02C5:
	case "Fellowship" attend labelFunc0430_02D8:
	message("\"I can tell thee nothing. Nothing! I would not listen to such blasphemy. 'Tis enough that one of them hath bewitched me and stolen mine heart...\"");
	say();
	UI_remove_answer("Fellowship");
labelFunc0430_02D8:
	case "mage" attend labelFunc0430_02F6:
	message("\"I think his companion called him by the name Batlin.\" *\"He was disappointed in what little I had to offer in the way of reagents. I told him to seek out Pothos in Moonshade for a better selection.\"");
	say();
	message("\"He also inquired about blackrock carvings or sculpture, I do not remember exactly. I told him to ask Delin, who doth know artisans in Monitor and Moonshade.\"");
	say();
	UI_remove_answer("mage");
	UI_add_answer("Delin");
labelFunc0430_02F6:
	case "buy" attend labelFunc0430_0327:
	if (!(UI_get_schedule_type(0xFFD0) == 0x0007)) goto labelFunc0430_0316;
	message("\"What dost thou wish to purchase?\"");
	say();
	Func081B();
	goto labelFunc0430_0327;
labelFunc0430_0316:
	message("\"I will gladly sell thee vegetables or reagents when I am open, ");
	message(var0000);
	message(". Come to Healers Hall or the greenhouse during the daytime.\"");
	say();
	UI_remove_answer("buy");
labelFunc0430_0327:
	case "Delin" attend labelFunc0430_0345:
	message("\"Delin is Fawn's dry goods dealer, poor man. I wished Batlin luck in discussing anything with him.\"");
	say();
	message("\"Delin hath not been right since his wife died in childbirth. His daughter, Alyssand, hath always looked after him, though she hath problems of her own now.\"");
	say();
	UI_remove_answer("Delin");
	UI_add_answer("Alyssand");
labelFunc0430_0345:
	case "Alyssand" attend labelFunc0430_0383:
	UI_remove_answer("Alyssand");
	if (!(gflags[0x0170] && (gflags[0x0172] && (!gflags[0x016E])))) goto labelFunc0430_036E;
	message("\"Hast thou not heard? Lady Yelinda doth look to the young woman as her chief advisor!\"");
	say();
	message("\"Alyssand hath never been so busy, nor so burdened with cares. She doth work to exhaustion, yet I think she is happy.\"");
	say();
	goto labelFunc0430_0383;
labelFunc0430_036E:
	message("\"Alyssand hath always been a headstrong girl. Thou wouldst expect it of someone with her responsibilities. We all thought Keth would take care of her, keep her under control. But then Keth was lost in one of those terrible storms.\"");
	say();
	message("\"Alyssand swore that as long as she had his ring there was still hope that he would return. When that disappeared not long ago, she seemed to go mad! She seems to have fallen in with those blasphemers and claims that the Oracle is a sham.\"");
	say();
	UI_add_answer(["ring", "Oracle"]);
labelFunc0430_0383:
	case "ring" attend labelFunc0430_03B2:
	message("\"I cannot tell thee very much about it. I fear that I only glanced at it... I would know it if I saw it again, though.\"");
	say();
	if (!Func097D(0xFE9B, 0x0001, 0x0377, 0xFE99, 0x0000)) goto labelFunc0430_03A8;
	message("\"I could not swear before the Oracle that this is truly Alyssand's ring. But it certainly doth look like it...\" *\"Thou shouldst find Alyssand and ask her, to be sure.\"");
	say();
labelFunc0430_03A8:
	Func08A9();
	UI_remove_answer("ring");
labelFunc0430_03B2:
	case "Oracle" attend labelFunc0430_03CC:
	message("\"Thou dost not know of the Oracle of Fawn? The Oracle is the instrument of Beauty here on Serpent Isle. It receives messages from the heavens, which Kylista makes plain for everyone to understand.\"");
	say();
	UI_remove_answer("Oracle");
	UI_add_answer("Kylista");
labelFunc0430_03CC:
	case "Kylista" attend labelFunc0430_03E6:
	message("\"Kylista is the Priestess of Beauty, all honor to her. 'Tis she that instructs us all in Beauty's truth, which she receives in revelations from the Oracle.\" *\"Even Lady Yelinda honors Kylista's wisdom.\"");
	say();
	UI_remove_answer("Kylista");
	UI_add_answer("Lady Yelinda");
labelFunc0430_03E6:
	case "Lady Yelinda" attend labelFunc0430_03F9:
	message("\"Lady Yelinda, honor to her, is the ruler of Fawn. She is the most beautiful woman in the city, the very embodiment of Beauty.\"");
	say();
	UI_remove_answer("Lady Yelinda");
labelFunc0430_03F9:
	case "thief" attend labelFunc0430_040C:
	message("\"Thief, yes, that's what he is! His name is Ruggs, and he hath bewitched me. Perhaps he is some sort of mage, like his companion.\" *\"He hath stolen mine heart and I do not know what to do.\"");
	say();
	UI_remove_answer("thief");
labelFunc0430_040C:
	case "vile truth" attend labelFunc0430_041F:
	message("\"I must confess, I am the cause of these storms. I know I am. I must live with the vile truth that I hold in mine heart of hearts.\" *\"I am in love with one of those who brought this ruin upon my city! Although I did not embrace his beliefs, mine heart embraced him.\" *\"I am as guilty as Alyssand! I cannot see how she bears such shame...\"");
	say();
	UI_remove_answer("vile truth");
labelFunc0430_041F:
	case "apparatus" attend labelFunc0430_0466:
	UI_remove_answer("apparatus");
	if (!Func097D(0xFE9B, 0x0001, 0x02ED, 0xFE99, 0x0001)) goto labelFunc0430_0458;
	message("\"That is a piece of Mage's equipment, ");
	message(var0000);
	message(".\"");
	say();
	message("\"Thou sayest it is not thine? Hmmm... Then thou wilt have to enquire in Moonshade to find who it belongs to.\"");
	say();
	message("\"Each Mage's equipment is different from every other Mage's... As much for pride as anything else. I am sorry I cannot be of any more help to thee.\"");
	say();
	goto labelFunc0430_0466;
labelFunc0430_0458:
	message("\"It sounds like a piece of Mage's equipment, ");
	message(var0000);
	message(". But I could not be certain without seeing it. It could be a simple piece of brewing equipment for all I know.\"");
	say();
	message("\"Thou couldst enquire in Moonshade, to see if any of the Mages are missing any equipment. I am sorry I cannot be of any more help to thee.\"");
	say();
labelFunc0430_0466:
	case "pumice" attend labelFunc0430_04A7:
	UI_remove_answer("pumice");
	gflags[0x0290] = true;
	if (!Func097D(0xFE9B, 0x0001, 0x010B, 0xFE99, 0xFE99)) goto labelFunc0430_049F;
	message("\"Why, that is pumice, ");
	message(var0000);
	message(". 'Tis very unusual to see any here in Fawn... There is no volcanic activity anywhere near.\"");
	say();
	message("\"The only place that such a rock could have come from, that I know of, is somewhere beyond Moonshade.\"");
	say();
	goto labelFunc0430_04A7;
labelFunc0430_049F:
	message("\"A grayish rock? Light in weight for its mass?\"");
	say();
	message("\"This sounds like pumice, to me. The only place that such a rock could have come from, that I know of, is somewhere beyond Moonshade... Where there is volcanic activity.\"");
	say();
labelFunc0430_04A7:
	case "blue egg" attend labelFunc0430_04EF:
	UI_remove_answer("blue egg");
	if (!Func097D(0xFE9B, 0x0001, 0x0241, 0xFE99, 0x0003)) goto labelFunc0430_04E7;
	message("\"What a putrid smell!\"");
	say();
	message("\"Remove that immediately!\"");
	say();
	UI_remove_npc_face0();
	Func097F(0xFFD0, "@Take it away!@", 0x0000);
	abort;
	goto labelFunc0430_04EF;
labelFunc0430_04E7:
	message("\"A blue egg? I have never heard of a blue egg.\"");
	say();
	message("\"Perhaps thou couldst try asking someone in Moonshade. I am told that the Mages have a great library on their island, full of unusual things.\"");
	say();
labelFunc0430_04EF:
	case "glowing rock" attend labelFunc0430_053A:
	UI_remove_answer("glowing rock");
	if (!Func097D(0xFE9B, 0x0001, 0x034A, 0xFE99, 0x000F)) goto labelFunc0430_0528;
	message("\"That is no reagent that I know of, ");
	message(var0000);
	message(". But it is fascinating...\"");
	say();
	message("\"I am sure that it is magical, but I do not know how. And for some reason I feel I should ask thee to take it away from here and forget that I saw it...\"");
	say();
	message("\"I am sorry I cannot be of more help.\"");
	say();
	goto labelFunc0430_053A;
labelFunc0430_0528:
	message("\"It is no reagent that I know of, ");
	message(var0000);
	message(". But it sounds fascinating...\"");
	say();
	message("\"I am sure that it is magical, if it glows and is cool enough to hold. But I have never heard of it before.\"");
	say();
	message("\"I am sorry I cannot be of more help.\"");
	say();
labelFunc0430_053A:
	case "letter" attend labelFunc0430_05D4:
	if (!Func097D(0xFE9B, 0x0001, 0x031D, 0x0004, 0xFE99)) goto labelFunc0430_05B2;
	message("\"A letter from Ruggs? Oh, I must see it!\"");
	say();
	var0001 = UI_remove_party_items(0x0001, 0x031D, 0x0004, 0x0005, false);
	gflags[0x01A3] = true;
	message("\"I am adrift! I am torn to my very soul and I know not what to do. Thou must help me.\"");
	say();
	message("\"Ruggs hath told me often of his love for me. In truth 'twould be a lie if I were to say that I did not care for him. But he is so... deformed... so ugly, that I know not what to think.\"");
	say();
	message("\"All I have been taught tells me that Ruggs' features are the outward sign of the evil within. Yet I can find no trace of it... If that is wrong, what else might also be false?\" *\"I am shaken to my very core, but I cannot deny mine heart.\"");
	say();
	message("\"Wilt thou carry a letter back to Ruggs for me?\"");
	say();
	if (!Func0955()) goto labelFunc0430_05AB;
	message("\"There is no one else that I can trust such a secret to.\" *\"If there be a way, some day I will go to him.\"");
	say();
	var0001 = Func099B(0xFE9C, 0x0001, 0x031D, 0x001B, 0x0000, false, true);
	gflags[0x0150] = true;
	goto labelFunc0430_05AF;
labelFunc0430_05AB:
	message("\"Perhaps it is best this way... I know not how to look upon his face and not wonder if there is some evil lurking there.\"");
	say();
labelFunc0430_05AF:
	goto labelFunc0430_05CD;
labelFunc0430_05B2:
	message("\"Thou dost lie! I see no letter!\"");
	say();
	Func097F(0xFFD0, "@Liar!@", 0x0000);
	UI_set_schedule_type(0xFFD0, 0x0014);
	abort;
labelFunc0430_05CD:
	UI_remove_answer("letter");
labelFunc0430_05D4:
	case "Varo Leaves" attend labelFunc0430_0611:
	UI_remove_answer("Varo Leaves");
	if (!(gflags[0x0076] == true)) goto labelFunc0430_05F2;
	message("\"Harnna would not have sent thee if thou didst not have great need of the Varo leaves. I would help thee if I could. But my skills as a healer are limited. Take these leaves back to Harnna quickly, before thou dost worsen.\"");
	say();
	goto labelFunc0430_05F6;
labelFunc0430_05F2:
	message("\"Thou canst only be permanently cured of thine infection by a special ointment made from Varo leaves. I do not know how to make the ointment myself, however. Take these leaves back to Harnna in Monitor quickly, before thou dost worsen. She is a true healer and will be able to help thee.\"");
	say();
labelFunc0430_05F6:
	gflags[0x01A5] = true;
	var0001 = Func099B(0xFE9C, 0x0005, 0x01D3, 0xFE99, 0x0003, false, true);
labelFunc0430_0611:
	case "bye" attend labelFunc0430_063E:
	Func08AB();
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@Many thanks.@", 0x0000);
	Func097F(0xFFD0, "@Walk in Beauty.@", 0x0005);
	Func08AA();
	goto labelFunc0430_0641;
labelFunc0430_063E:
	goto labelFunc0430_0183;
labelFunc0430_0641:
	endconv;
labelFunc0430_0642:
	return;
}


