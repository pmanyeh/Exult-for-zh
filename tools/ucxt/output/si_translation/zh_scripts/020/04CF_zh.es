#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0994 0x994 ();
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002);
extern var Func08B6 0x8B6 ();
extern var Func095C 0x95C (var var0000, var var0001);
extern void Func095E 0x95E (var var0000, var var0001, var var0002);
extern var Func084E 0x84E (var var0000, var var0001);
extern var Func0955 0x955 ();
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func08FC 0x8FC ();
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern void Func08FE 0x8FE ();
extern void Func08FA 0x8FA ();
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern void Func08F5 0x8F5 (var var0000);

void Func04CF object#(0x4CF) ()
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
	var var0017;
	var var0018;
	var var0019;
	var var001A;
	var var001B;
	var var001C;
	var var001D;
	var var001E;
	var var001F;
	var var0020;
	var var0021;
	var var0022;

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = "son";
	var0003 = Func0994();
	var0004 = "his";
	if (!UI_is_pc_female()) goto labelFunc04CF_002C;
	var0004 = "her";
labelFunc04CF_002C:
	if (!var0001) goto labelFunc04CF_0038;
	var0002 = "daughter";
labelFunc04CF_0038:
	var0005 = Func0953();
	if (!(event == 0x0002)) goto labelFunc04CF_011C;
	if (!gflags[0x02FD]) goto labelFunc04CF_00D0;
	UI_item_say(0xFF31, "@What a wonder!@");
	0xFF31->Func07D1();
	UI_show_npc_face0(0xFF31, 0x0000);
	message("\"I am honored to have been present for such a miracle! Even I had not expected anything this momentous.");
	say();
	if (!gflags[0x0004]) goto labelFunc04CF_0085;
	message("\"Now that the Tree of Balance thrives in this hallowed glade, it's strong roots shall begin healing the wrents in our land.");
	say();
	message("\"Once thou hast restored Balance to our world, who knows what miracles may occur? I have even heard it said that the souls of the dead shall be returned to life once Balance is restored.");
	say();
	message("\"Only time shall tell. But now, my ");
	message(var0002);
	message(", it is time that I return thee to thy quest.\"");
	say();
	goto labelFunc04CF_0099;
labelFunc04CF_0085:
	message("\"With the Tree of Balance firmly rooted in this hallowed glade, thy task of restoring Balance to the world will be much easier, my ");
	message(var0002);
	message(".");
	say();
	message("\"Now, my ");
	message(var0002);
	message(", it is time that you return to thy quest.\"");
	say();
labelFunc04CF_0099:
	UI_remove_npc_face0();
	var0006 = UI_get_object_position(0xFF31);
	UI_sprite_effect(0x001A, var0006[0x0001], var0006[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_remove_npc(0xFF31);
	goto labelFunc04CF_011C;
labelFunc04CF_00D0:
	UI_item_say(0xFF31, (("@Well done, my " + var0002) + "!@"));
	0xFF31->Func07D1();
	UI_show_npc_face0(0xFF31, 0x0000);
	message("\"Thou hast found the Silver Seed! Now all that remains is for thee to plant it here in this hallowed glade.");
	say();
	message("\"Xenka's prophecies spoke of the Hero restoring the Tree of Balance. But even Xenka herself could not say where the seed of such a tree could be found.");
	say();
	message("\"When the Forest Master first entered our world we thought that perhaps he was to be the Hero from Another World. But we learned that the seed he possessed had been warped by his passage through the Void. It will never grow...\"");
	say();
	message("\"Until Miggim found the Amulet of Balance, we had not even considered that the Ophidians knew anything of the Tree of Balance.");
	say();
	message("\"Plant it here in this dark patch of rich ground in front of the waterfall, my ");
	message(var0002);
	message(". It looks just large enough for the seed, as if it were the seed's very own cradle. The water here will nourish it well.\"");
	say();
	UI_remove_npc_face0();
	Func097F(0xFF31, "@Plant it now.@", 0x0002);
labelFunc04CF_011C:
	if (!(event == 0x0001)) goto labelFunc04CF_0161;
	if (!(UI_get_npc_id(0xFF31) != 0x0000)) goto labelFunc04CF_0133;
	abort;
labelFunc04CF_0133:
	UI_item_say(0xFE9C, "@Pardon me...@");
	0xFF31->Func07D1();
	Func097F(0xFF31, (("@Yes, my " + var0002) + "?@"), 0x0002);
	UI_set_schedule_type(0xFF31, 0x0003);
labelFunc04CF_0161:
	if (!(event == 0x0000)) goto labelFunc04CF_01AD;
	if (!((UI_get_item_quality(Func09A0(0x0005, 0x0001)) == 0x000A) && (!UI_get_item_flag(0xFF29, 0x001C)))) goto labelFunc04CF_01AD;
	UI_set_schedule_type(0xFF31, 0x000F);
	var0007 = UI_execute_usecode_array(Func09A0(0x0005, 0x0003), [(byte)0x23, (byte)0x55, 0x0109]);
labelFunc04CF_01AD:
	if (!(event == 0x0009)) goto labelFunc04CF_0B92;
	UI_run_schedule(0xFF31);
	UI_clear_item_say(0xFF31);
	UI_show_npc_face0(0xFF31, 0x0000);
	var0008 = UI_get_item_flag(0xFF31, 0x001C);
	var0009 = false;
	if (!(UI_get_npc_id(0xFF31) == 0x001F)) goto labelFunc04CF_04A2;
	UI_set_npc_id(0xFF31, 0x0000);
	message("\"The bells are signaling the return of Xenka!\"");
	say();
	message("\"Thou art the Hero from Another World. It is for thee that she doth return. We must hurry!\"");
	say();
	var000A = UI_get_object_position(0xFE9C);
	if (!Func08F8(var000A, [0x0950, 0x0470], [0x097E, 0x0486])) goto labelFunc04CF_0227;
	message("\"Prepare yourselves for the coming of Xenka!\"");
	say();
labelFunc04CF_0227:
	UI_remove_npc_face0();
	UI_clear_item_flag(0xFE9C, 0x0025);
	var000B = Func08B6();
	var000B = [0xFE9C, var000B];
	var000C = [0x0967, 0x047C, 0x0000];
	var000D = [0x0000, 0xFFFF, 0x0001, 0x0000, 0xFFFF, 0x0001, 0x0000, 0xFFFF, 0x0001];
	var000E = [0xFFFF, 0xFFFF, 0xFFFF, 0x0000, 0x0001, 0x0001, 0x0001, 0x0000, 0x0000];
	var000F = 0x0001;
	UI_sprite_effect(0x0007, var000C[0x0001], var000C[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0051);
	enum();
labelFunc04CF_02C5:
	for (var0012 in var000B with var0010 to var0011) attend labelFunc04CF_03EF;
	if (!(!UI_get_item_flag(var0012, 0x001E))) goto labelFunc04CF_02E8;
	UI_set_schedule_type(var0012, 0x001F);
labelFunc04CF_02E8:
	UI_set_temperature(var0012, 0x0000);
	UI_clear_item_flag(var0012, 0x0001);
	UI_clear_item_flag(var0012, 0x0002);
	UI_clear_item_flag(var0012, 0x0003);
	UI_clear_item_flag(var0012, 0x0004);
	UI_clear_item_flag(var0012, 0x0007);
	UI_clear_item_flag(var0012, 0x0008);
	UI_clear_item_flag(var0012, 0x0010);
	var0013 = Func095C(var0012, 0x0000);
	var0014 = Func095C(var0012, 0x0003);
	if (!(var0013 > var0014)) goto labelFunc04CF_0370;
	var0015 = (var0013 - var0014);
	Func095E(var0012, 0x0003, var0015);
labelFunc04CF_0370:
	var0016 = Func095C(var0012, 0x0009);
	var0017 = (0x001F - var0016);
	Func095E(var0012, 0x0009, var0017);
	var0018 = [(var000C[0x0001] + var000D[var000F]), (var000C[0x0002] + var000E[var000F]), var000C[0x0003]];
	UI_move_object(var0012, var0018);
	UI_halt_scheduled(var0012);
	UI_clear_item_say(var0012);
	var0007 = UI_execute_usecode_array(var0012, [(byte)0x59, 0x0000]);
	var000F = (var000F + 0x0001);
	goto labelFunc04CF_02C5;
labelFunc04CF_03EF:
	var000C = [];
	var0018 = [];
	var000D = [];
	var000E = [];
	var0019 = [0xFF31, 0xFF2D, 0xFF2F, 0xFF2C, 0xFF2B, 0xFF2A, 0xFF30, 0xFF2E];
	var001A = 0x000A;
	enum();
labelFunc04CF_042C:
	for (var0012 in var0019 with var001B to var001C) attend labelFunc04CF_0489;
	var001D = Func084E(var0012, var001A);
	UI_move_object(var0012, var001D);
	UI_set_new_schedules(var0012, 0x0000, 0x000F, var001D);
	UI_run_schedule(var0012);
	UI_set_schedule_type(var0012, 0x000F);
	var0007 = UI_execute_usecode_array(var0012, [(byte)0x59, 0x0000, (byte)0x61, (byte)0x6F, (byte)0x6B]);
	goto labelFunc04CF_042C;
labelFunc04CF_0489:
	var0007 = UI_execute_usecode_array(Func09A0(0x0002, 0x0001), [(byte)0x55, 0x0109]);
	abort;
labelFunc04CF_04A2:
	if (!(!UI_get_item_flag(0xFF31, 0x001C))) goto labelFunc04CF_04DB;
	message("\"I am Karnax, a Xenkan monk. Please forgive our previous meeting, my ");
	message(var0002);
	message(".\"");
	say();
	message("\"I have nothing against thee, but I fear that Thoxa's willful interference shall be the undoing of all for which we have prepared.\"");
	say();
	UI_set_item_flag(0xFF31, 0x001C);
	UI_add_answer(["previous meeting", "Thoxa", "interference"]);
	goto labelFunc04CF_0575;
labelFunc04CF_04DB:
	if (!((gflags[0x0267] == true) && (!gflags[0x0274]))) goto labelFunc04CF_054F;
	message("\"Hast thou returned with the scroll?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc04CF_0544;
	message("\"Very good! Now, if I may see it, I may be able to unlock the secret to restoring thy lady friend.\"");
	say();
	var001E = Func097D(0xFE9B, 0x0001, 0x02C3, 0x0050, 0xFE99);
	if (!(var001E == true)) goto labelFunc04CF_053D;
	var0007 = UI_remove_party_items(0x0001, 0x02C3, 0x0050, 0x0000, 0x0000);
	gflags[0x0274] = true;
	message("\"I have it now.\"");
	say();
	UI_add_answer("the secret");
	goto labelFunc04CF_0541;
labelFunc04CF_053D:
	message("\"Thou dost not have the serpent scroll!\"");
	say();
labelFunc04CF_0541:
	goto labelFunc04CF_054C;
labelFunc04CF_0544:
	message("\"Without access to that scroll I can be of no further use to thee. Dost thou not remember what I told thee?\"");
	say();
	message("\"Fedabiblio had something he referred to as the Scroll of the Serpent. I believe that it may have the information I need to help restore thy lady friend. Bring it to me, and I will aid thee as I can.\"");
	say();
labelFunc04CF_054C:
	goto labelFunc04CF_0559;
labelFunc04CF_054F:
	message("\"Time grows short, my ");
	message(var0002);
	message(". I shall aid thee as I can.\"");
	say();
labelFunc04CF_0559:
	if (!(gflags[0x0274] == true)) goto labelFunc04CF_0568;
	UI_add_answer("the secret");
labelFunc04CF_0568:
	UI_add_answer(["prophecies", "Thoxa"]);
labelFunc04CF_0575:
	var000B = Func08B6();
	var000B = [0xFE9C, var000B];
	enum();
labelFunc04CF_0588:
	for (var0012 in var000B with var001F to var0020) attend labelFunc04CF_05A0;
	UI_clear_item_flag(var0012, 0x0001);
	goto labelFunc04CF_0588;
labelFunc04CF_05A0:
	UI_clear_item_flag(0xFE9C, 0x0010);
	if (!(gflags[0x0274] && (!gflags[0x0220]))) goto labelFunc04CF_05BC;
	UI_add_answer("the secret");
labelFunc04CF_05BC:
	if (!gflags[0x0262]) goto labelFunc04CF_05C9;
	UI_add_answer("Gwenno");
labelFunc04CF_05C9:
	if (!gflags[0x026F]) goto labelFunc04CF_05D9;
	UI_add_answer("leave Monk Isle");
	goto labelFunc04CF_05E3;
labelFunc04CF_05D9:
	UI_add_answer(["bye"]);
labelFunc04CF_05E3:
	if (!Func08FC()) goto labelFunc04CF_05F8;
	message("\"Oh! One of thy friends hath met an untimely end. This should not be...\"");
	say();
	message("\"If thou art ready to see thy friend again, ask and I will return them to thee.\"");
	say();
	UI_add_answer("resurrection");
labelFunc04CF_05F8:
	if (!(gflags[0x02DD] && (!gflags[0x0267]))) goto labelFunc04CF_060A;
	UI_add_answer("Bane of Chaos");
labelFunc04CF_060A:
	if (!(!gflags[0x02FB])) goto labelFunc04CF_0625;
	message("\"Lest I forget... We have recently made a discovery which I believe shall aid thee, my ");
	message(var0002);
	message(".\"");
	say();
	UI_add_answer("discovery");
	goto labelFunc04CF_062C;
labelFunc04CF_0625:
	UI_add_answer("Amulet of Balance");
labelFunc04CF_062C:
	converse attend labelFunc04CF_0B7E;
	case "discovery" attend labelFunc04CF_0691:
	UI_remove_answer("discovery");
	message("\"While searching for more materials for the library, Miggim discovered an ancient chest in the passages beneath our abbey, near the Serpent gate.");
	say();
	message("\"Within this chest was a strange amulet and a scrap of decaying scroll. The scroll indicated that this is the Amulet of Balance. It is our thought that this amulet was meant for thee, my ");
	message(var0002);
	message(".");
	say();
	message("\"I shall caution thee that we do not know what powers it has, for the scroll disintegrated before Miggim could fully translate it.");
	say();
	message("\"But I am certain it is connected to the Serpent ruins in some manner. Perhaps if thou dost use it near the Serpent gate thou wilt trigger its power.\"");
	say();
	var0007 = Func099B(0xFE9C, 0x0001, 0x03BB, 0x0000, 0x0009, 0x0000, true);
	var0021 = Func09A0(0x0000, 0x0001);
	var0007 = UI_execute_usecode_array(var0021, [(byte)0x23, (byte)0x55, 0x0612]);
	gflags[0x02FB] = true;
labelFunc04CF_0691:
	case "Amulet of Balance" attend labelFunc04CF_06DA:
	UI_remove_answer("Amulet of Balance");
	var0007 = Func097D(0xFE9B, 0x0001, 0x03BB, 0x0000, 0x0009);
	if (!var0007) goto labelFunc04CF_06CC;
	message("\"We are searching all of our references for further information on thy Amulet, my ");
	message(var0002);
	message(". But, as of yet, we have discovered nothing more than what I have already told thee...");
	say();
	message("\"It was used at the Serpent gates, but we know not what it does.\"");
	say();
	goto labelFunc04CF_06DA;
labelFunc04CF_06CC:
	message("\"If thou hast lost the Amulet, my ");
	message(var0002);
	message(", I know not how to aid thee. As far as any of us know, there was but one... The one I gave thee.");
	say();
	message("\"I am sorry. Thou must needs search for it thyself. I fear I cannot aid thee in this.\"");
	say();
labelFunc04CF_06DA:
	case "resurrection" attend labelFunc04CF_06EC:
	UI_remove_answer("resurrection");
	Func08FE();
labelFunc04CF_06EC:
	case "leave Monk Isle" attend labelFunc04CF_06F7:
	Func08FA();
labelFunc04CF_06F7:
	case "previous meeting" attend labelFunc04CF_071E:
	UI_remove_answer("previous meeting");
	message("\"When I came to try to dissuade Thoxa from aiding thee directly it was not an attack against thee.\"");
	say();
	message("\"The prophecies state that those seeking to be thy friends shall bring about the downfall of thy quest. That is not why we have dedicated our lives.\"");
	say();
	UI_add_answer(["dissuade", "prophecies", "dedicated"]);
labelFunc04CF_071E:
	case "dissuade" attend labelFunc04CF_0742:
	UI_remove_answer("dissuade");
	message("\"I sought to win her away from her foolishness by rational argument. Regrettably, it became a test of magics.\"");
	say();
	message("\"As thou canst see, Thoxa and I are both skilled enough that we both yet live.\"");
	say();
	UI_add_answer(["magics", "skilled"]);
labelFunc04CF_0742:
	case "magics" attend labelFunc04CF_0766:
	UI_remove_answer("magics");
	message("\"Unlike the unenlightened Mages of Moonshade, our powers come not from moldering reagents.\"");
	say();
	message("\"The power of a Xenkan monk comes from a connection to the limitless Void that surrounds the universe.\"");
	say();
	UI_add_answer(["Mages", "Void"]);
labelFunc04CF_0766:
	case "Mages" attend labelFunc04CF_077D:
	UI_remove_answer("Mages");
	message("\"The Mages of Moonshade are but mere children playing at the arts they have not the patience to learn.\"");
	say();
	message("\"True magic comes after long years of meditation and self-sacrifice.\"");
	say();
labelFunc04CF_077D:
	case "Void" attend labelFunc04CF_0794:
	UI_remove_answer("Void");
	message("\"Consider the Void to be the frame within which our Cosmos is bound. It is the source of unimagined power...\"");
	say();
	message("\"Power that thou mayest draw upon freely, if thou hast forged a gateway into it through long meditation.\"");
	say();
labelFunc04CF_0794:
	case "skilled" attend labelFunc04CF_07B2:
	UI_remove_answer("skilled");
	message("\"Unlike the silent novices that thou dost see among us, Thoxa and I have both forged gateways into the power of the Void.\"");
	say();
	message("\"By tapping into this stream, any confirmed Xenkan monk can surmount his or her own death. But there are still some things that remain beyond any one monk's power and require the concerted effort of us all.\"");
	say();
	UI_add_answer("some things");
labelFunc04CF_07B2:
	case "some things" attend labelFunc04CF_07C9:
	UI_remove_answer("some things");
	message("\"Manipulation of time and space requires more power than one monk can channel.\"");
	say();
	message("\"So teleportation and resurrection require that all the monks conjoin their power.\"");
	say();
labelFunc04CF_07C9:
	case "prophecies" attend labelFunc04CF_07ED:
	UI_remove_answer("prophecies");
	message("\"Xenka was given visions of the ending of our world.\"");
	say();
	message("\"However, she was barely literate, and needed others to act as scribes for her convoluted visions.\"");
	say();
	UI_add_answer(["ending of the world", "Xenka"]);
labelFunc04CF_07ED:
	case "ending of the world" attend labelFunc04CF_0828:
	UI_remove_answer("ending of the world");
	message("\"Xenka foresaw that people would turn from their basic goodness until the very land itself would rise up in revolt against their twisted ways.\"");
	say();
	var0022 = Func0992(0x0001, "@Grim tidings, indeed.@", 0x0000, false);
	UI_set_conversation_slot(0x0000);
	message("\"Even now the storms flay the land. Soon the earthquakes will unleash the fire that will engulf the world.\"");
	say();
	UI_add_answer(["storms", "earthquakes"]);
labelFunc04CF_0828:
	case "storms" attend labelFunc04CF_0849:
	UI_remove_answer("storms");
	message("\"The storms are what conveyed thee here, my ");
	message(var0002);
	message(".\"");
	say();
	message("\"Doth natural lightning do aught but kill? Doth normal lightning transport an item thousands of leagues from where once it stood?\"");
	say();
	message("\"And the storms are growing more frequent and fierce with each passing day.\"");
	say();
labelFunc04CF_0849:
	case "earthquakes" attend labelFunc04CF_086A:
	UI_remove_answer("earthquakes");
	message("\"The land is a living entity, my ");
	message(var0002);
	message(".\"");
	say();
	message("\"Have no doubt that it will convulse as death draws near, even as a man.\"");
	say();
	message("\"And where will we insignificant mortals be once the land which nurtures us heaves its last, explosive breath?\"");
	say();
labelFunc04CF_086A:
	case "Xenka" attend labelFunc04CF_0888:
	UI_remove_answer("Xenka");
	message("\"Xenka was a cross farm-wife who saw her visions as a means to have others do her work for her.\"");
	say();
	message("\"Yet despite her human failings, her visions are true... Thou art here, even if she is not.\"");
	say();
	UI_add_answer("she is not");
labelFunc04CF_0888:
	case "she is not" attend labelFunc04CF_08A3:
	UI_remove_answer("she is not");
	message("\"Xenka disappeared quite some time ago. Many think that she will return to deliver the final key to saving our doomed world.\"");
	say();
	message("\"I think that her visions had left her and she slunk quietly away to die in obscurity.\"");
	say();
	gflags[0x026B] = true;
labelFunc04CF_08A3:
	case "dedicated" attend labelFunc04CF_08C1:
	UI_remove_answer("dedicated");
	message("\"Those that live within this abbey believe that Xenka's prophecies hold the key to diverting the fiery end that awaits the world.\"");
	say();
	message("\"Our numbers have decreased with time, for even Xenkan monks die from age. And few of the youths are willing to serve such a nihilistic prophecy.\"");
	say();
	UI_add_answer("the key");
labelFunc04CF_08C1:
	case "the key" attend labelFunc04CF_08D8:
	UI_remove_answer("the key");
	message("\"I do not know if Xenka's visions were full of diverse images or if she couched them in such terms out of peevishness.\"");
	say();
	message("\"Whatever the case may be, her prophecies run round the edge of what must be known and it can take years to decipher the meaning of a single vision.\"");
	say();
labelFunc04CF_08D8:
	case "Thoxa" attend labelFunc04CF_08F6:
	UI_remove_answer("Thoxa");
	message("\"Thoxa is a very bright young woman, who would like to feel that she hath single-handedly saved the world.\"");
	say();
	message("\"It doth go against the grain of her youth to sit and wait for each event to come to pass. What is worse though, is that she hath pulled Miggim into her rashness as well.\"");
	say();
	UI_add_answer("Miggim");
labelFunc04CF_08F6:
	case "Miggim" attend labelFunc04CF_0914:
	UI_remove_answer("Miggim");
	message("\"Miggim is by nature a quiet young man, not given to impetuousness. He is ideally suited to be our librarian.\"");
	say();
	message("\"His greatest desire is to be helpful, as well as ordered. In fact, it was he who divined the passage that foretold of thy coming.\"");
	say();
	UI_add_answer("librarian");
labelFunc04CF_0914:
	case "librarian" attend labelFunc04CF_093C:
	UI_remove_answer("librarian");
	message("\"He hath taken the chaos of our library and turned it into a vastly more organized area.\"");
	say();
	message("\"In fact, I believe that we have the most concise collection of Ophidian books and scrolls that still exists.\"");
	say();
	message("\"Of course, it helps that we have the Lens of Translating.\"");
	say();
	UI_add_answer(["Ophidian", "Lens"]);
labelFunc04CF_093C:
	case "Ophidian" attend labelFunc04CF_0960:
	UI_remove_answer("Ophidian");
	message("\"The Ophidians are commonly referred to as the Serpent people because of the embossed serpents found within the ruins of their cities.\"");
	say();
	message("\"They had a fully-developed civilization here long before our forefathers fled from the invader British. I believe that they destroyed themselves in a bloody civil war.\"");
	say();
	UI_add_answer(["invader British", "civil war"]);
labelFunc04CF_0960:
	case "invader British" attend labelFunc04CF_097E:
	UI_remove_answer("invader British");
	message("\"Our records are incomplete concerning the time of the resettlement. For that, thou shouldst see Fedabiblio in Moonshade.\"");
	say();
	message("\"Thou shouldst bear in mind that their accounts are likely to be highly biased in their own favor.\"");
	say();
	UI_add_answer("Fedabiblio");
labelFunc04CF_097E:
	case "Fedabiblio" attend labelFunc04CF_0991:
	UI_remove_answer("Fedabiblio");
	message("\"Fedabiblio is the master archivist in the city of Mages. He is also a teacher, and will be able to help thee.\"");
	say();
labelFunc04CF_0991:
	case "civil war" attend labelFunc04CF_09A8:
	UI_remove_answer("civil war");
	message("\"I believe that the Ophidian government disintegrated and their society split into two opposing groups.\"");
	say();
	message("\"In the end, one faction apparently slaughtered the other. But all traces of the victors disappear soon after the final battle took place. It is a mystery where they went.\"");
	say();
labelFunc04CF_09A8:
	case "interference" attend labelFunc04CF_09D0:
	UI_remove_answer("interference");
	message("\"It was determined by all monks that the time for the Hero from Another World was at hand.\"");
	say();
	message("\"It was also decided that we would take no direct action to influence the Hero in any way...\"");
	say();
	message("\"Thoxa overstepped her bounds by giving thee the Hourglass of Fate.\"");
	say();
	UI_add_answer(["Hero", "Hourglass"]);
labelFunc04CF_09D0:
	case "Hero" attend labelFunc04CF_09FE:
	UI_remove_answer("Hero");
	message("\"All references to the one who can alter the course of destiny allude to the Hero from Another World.\"");
	say();
	message("\"Art thou from this land, from New Sosaria?\"");
	say();
	if (!(Func0955() == false)) goto labelFunc04CF_09F6;
	message("\"Dost thou see? When taken with the other signs, it points to thee as the one who alone can save our land.\"");
	say();
	goto labelFunc04CF_09FE;
labelFunc04CF_09F6:
	message("\"Hmmm. Perhaps we have misinterpreted the passage.\"");
	say();
	message("\"I shall meditate further on this matter.\"");
	say();
labelFunc04CF_09FE:
	case "Hourglass" attend labelFunc04CF_0A15:
	UI_remove_answer("Hourglass");
	message("\"The damage hath been done. It is now thine to keep.\"");
	say();
	message("\"It was designed so that we might be able to gauge when certain events were nigh. Perhaps it will serve thee better. I do not know.\"");
	say();
labelFunc04CF_0A15:
	case "Lens" attend labelFunc04CF_0A28:
	UI_remove_answer("Lens");
	message("\"It is the large device that stands in the center of the library. Anyone using it is able to decipher the cryptic Ophidian writing for a short period of time.\"");
	say();
labelFunc04CF_0A28:
	case "Gwenno" attend labelFunc04CF_0A7A:
	UI_remove_answer("Gwenno");
	if (!gflags[0x025F]) goto labelFunc04CF_0A70;
	if (!gflags[0x026A]) goto labelFunc04CF_0A4A;
	message("\"I share thy grief over the loss of Goodwife Gwenno. I am sure that we can resurrect her, if thou dost wish.\"");
	say();
	goto labelFunc04CF_0A6D;
labelFunc04CF_0A4A:
	if (!(!UI_get_item_flag(0xFF6B, 0x001E))) goto labelFunc04CF_0A65;
	message("\"It hath been quite a pleasure having Gwenno here, ");
	message(var0000);
	message(". She is quite knowledgeable, and shares her wisdom willingly.\"");
	say();
	goto labelFunc04CF_0A6D;
labelFunc04CF_0A65:
	message("\"Thy concern for this young woman is well warranted, I fear.\"");
	say();
	message("\"Something hath sorely affected her, for I do not believe that she could be so disturbed otherwise.\"");
	say();
labelFunc04CF_0A6D:
	goto labelFunc04CF_0A7A;
labelFunc04CF_0A70:
	message("\"Gwenno was our last visitor here, ");
	message(var0000);
	message(". After she departed, the storms made travel to our island impossible. I was not able to speak with her as much as I wished. She spent quite a bit of time within our library.\"");
	say();
labelFunc04CF_0A7A:
	case "Bane of Chaos" attend labelFunc04CF_0A95:
	UI_remove_answer("Bane of Chaos");
	message("\"Curious, the Bane of Chaos is an Ophidian term.\"");
	say();
	message("\"Fedabiblio had something he referred to as the Scroll of the Serpent. I believe that it may have the information I need to help restore thy lady friend. Bring it to me, and I will aid thee as I can.\"");
	say();
	gflags[0x0267] = true;
labelFunc04CF_0A95:
	case "the secret" attend labelFunc04CF_0ABD:
	UI_remove_answer("the secret");
	message("\"It all becomes clear!\"");
	say();
	message("\"The Ophidians based all their beliefs on six virtues. And the consequences of an imbalance of these virtues are very dire...\"");
	say();
	message("\"In fact, it sounds as if they could destroy the world!\"");
	say();
	UI_add_answer(["six virtues", "consequences"]);
labelFunc04CF_0ABD:
	case "six virtues" attend labelFunc04CF_0B19:
	UI_remove_answer("six virtues");
	message("\"The virtues are: Tolerance, Ethicality, Enthusiasm, Discipline, Emotion and Logic.\"");
	say();
	message("\"The anti-virtues -- when there is no balance -- are: Amorality, Wantonness, Insanity, Prejudice, Apathy, and Ruthlessness.\"");
	say();
	var0009 = Func097D(0xFE9B, 0x0001, 0x031D, 0x0082, 0xFE99);
	if (!(var0009 == false)) goto labelFunc04CF_0B15;
	message("\"I will draw thee a chart, so that it might be more clear.\"");
	say();
	var0007 = Func099B(0xFE9C, 0x0001, 0x031D, 0x0082, 0x0000, 0x0000, true);
	var0009 = true;
	goto labelFunc04CF_0B19;
labelFunc04CF_0B15:
	message("\"Thou dost have the chart in thy possession that will explain this further.\"");
	say();
labelFunc04CF_0B19:
	case "consequences" attend labelFunc04CF_0B3B:
	UI_remove_answer("consequences");
	message("\"Eventually the world will destroy itself... Much like what is happening now.\"");
	say();
	message("\"Within a person, like thy friend Gwenno, the lack of Discipline would produce Wantonness... Much like the behavior she is exhibiting now.\"");
	say();
	message("\"There does seem to be a cure, however.\"");
	say();
	UI_add_answer("cure");
labelFunc04CF_0B3B:
	case "cure" attend labelFunc04CF_0B56:
	UI_remove_answer("cure");
	message("\"According to this, thou shouldst have the victim drink the water from the temple dedicated to that virtue which the person lacks.\"");
	say();
	message("\"It sounds as though thou shouldst bring water from one of the temples... I think that Miggim doth have a book with maps of those ancient temples.\"");
	say();
	gflags[0x0269] = true;
labelFunc04CF_0B56:
	case "bye" attend labelFunc04CF_0B7B:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@Many thanks!@", 0x0000);
	Func097F(item, "@Good luck!@", 0x0002);
	goto labelFunc04CF_0B7E;
labelFunc04CF_0B7B:
	goto labelFunc04CF_062C;
labelFunc04CF_0B7E:
	endconv;
	if (!gflags[0x026F]) goto labelFunc04CF_0B92;
	UI_show_npc_face0(0xFF31, 0x0000);
	Func08FA();
labelFunc04CF_0B92:
	if (!(event == 0x0007)) goto labelFunc04CF_0BA0;
	Func08F5(0xFF31);
labelFunc04CF_0BA0:
	return;
}


