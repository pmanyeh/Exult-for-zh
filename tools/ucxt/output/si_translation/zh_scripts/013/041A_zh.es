#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func0994 0x994 ();
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func07D1 object#(0x7D1) ();
extern void Func07D2 object#(0x7D2) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0955 0x955 ();
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func094F 0x94F (var var0000, var var0001);
extern void Func084F 0x84F ();
extern void Func08FF 0x8FF ();

void Func041A object#(0x41A) ()
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

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	var0003 = Func0994();
	var0004 = Func097D(0xFE9B, 0x0001, 0x024B, 0x0000, 0x0005);
	var0005 = Func097D(0xFE9B, 0x0001, 0x031A, 0x0000, 0x0000);
	if (!((event == 0x0007) && UI_get_item_flag(item, 0x001D))) goto labelFunc041A_0066;
	var0006 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0329]);
labelFunc041A_0066:
	if (!((event == 0x0002) && ((var0003 == 0x0016) && (!gflags[0x0215])))) goto labelFunc041A_007F;
	event = 0x0009;
labelFunc041A_007F:
	if (!(event == 0x0001)) goto labelFunc041A_0118;
	UI_item_say(0xFE9C, "@Ho, mage!@");
	0xFFE6->Func07D1();
	var0006 = UI_find_nearby(item, 0x0366, 0x0014, 0x0000);
	enum();
labelFunc041A_00A9:
	for (var0009 in var0006 with var0007 to var0008) attend labelFunc041A_00C9;
	if (!(UI_get_item_quality(var0009) == 0x00B5)) goto labelFunc041A_00C6;
	gflags[0x0215] = true;
labelFunc041A_00C6:
	goto labelFunc041A_00A9;
labelFunc041A_00C9:
	if (!((var0003 == 0x0016) && (!gflags[0x0215]))) goto labelFunc041A_0102;
	item->Func07D2();
	Func097F(0xFFE6, "@Help!", 0x0002);
	var0006 = UI_delayed_execute_usecode_array(0xFFE6, [(byte)0x23, (byte)0x55, 0x041A], 0x0007);
	goto labelFunc041A_0118;
labelFunc041A_0102:
	Func097F(0xFFE6, "@What dost thou wish?@", 0x0005);
	UI_set_schedule_type(0xFFE6, 0x0003);
labelFunc041A_0118:
	if (!(event == 0x0000)) goto labelFunc041A_024A;
	if (!((var0003 == 0x0016) && (!gflags[0x0215]))) goto labelFunc041A_01B4;
	var000A = UI_get_random(0x0006);
	if (!(var000A == 0x0001)) goto labelFunc041A_014D;
	UI_item_say(0xFFE6, "@Another spell failed!@");
labelFunc041A_014D:
	if (!(var000A == 0x0002)) goto labelFunc041A_0161;
	UI_item_say(0xFFE6, "@Help! Someone help me!@");
labelFunc041A_0161:
	if (!(var000A == 0x0003)) goto labelFunc041A_0175;
	UI_item_say(0xFFE6, "@Lower the drawbridge!@");
labelFunc041A_0175:
	if (!(var000A == 0x0004)) goto labelFunc041A_0189;
	UI_item_say(0xFFE6, "@Release me, please!@");
labelFunc041A_0189:
	if (!(var000A == 0x0005)) goto labelFunc041A_019D;
	UI_item_say(0xFFE6, "@Why will my spells not work?@");
labelFunc041A_019D:
	if (!(var000A == 0x0006)) goto labelFunc041A_01B1;
	UI_item_say(0xFFE6, "@How did I arrive here?@");
labelFunc041A_01B1:
	goto labelFunc041A_024A;
labelFunc041A_01B4:
	var000A = UI_get_random(0x0006);
	if (!(var000A == 0x0001)) goto labelFunc041A_01D2;
	UI_item_say(0xFFE6, "@How shall I return home?@");
labelFunc041A_01D2:
	if (!(var000A == 0x0002)) goto labelFunc041A_01E6;
	UI_item_say(0xFFE6, "@I am so lost...@");
labelFunc041A_01E6:
	if (!(var000A == 0x0003)) goto labelFunc041A_01FA;
	UI_item_say(0xFFE6, "@Where am I?@");
labelFunc041A_01FA:
	if (!(var000A == 0x0004)) goto labelFunc041A_020E;
	UI_item_say(0xFFE6, "@How did I arrive here?@");
labelFunc041A_020E:
	if (!(var000A == 0x0005)) goto labelFunc041A_022C;
	UI_item_say(0xFFE6, "@I am so cold...@");
	UI_set_schedule_type(0xFFE6, 0x0004);
labelFunc041A_022C:
	if (!(var000A == 0x0006)) goto labelFunc041A_024A;
	UI_item_say(0xFFE6, "@Perhaps this direction...@");
	UI_set_schedule_type(0xFFE6, 0x0001);
labelFunc041A_024A:
	if (!(event == 0x0009)) goto labelFunc041A_0912;
	UI_clear_item_say(0xFFE6);
	if (!UI_get_item_flag(0xFFE6, 0x0006)) goto labelFunc041A_027A;
	UI_set_schedule_type(0xFFE6, 0x001F);
	UI_add_answer("leave");
	goto labelFunc041A_0281;
labelFunc041A_027A:
	UI_run_schedule(0xFFE6);
labelFunc041A_0281:
	UI_show_npc_face0(0xFFE6, 0x0000);
	var000B = UI_get_item_flag(0xFFE6, 0x001C);
	if (!((gflags[0x0215] == true) && (!gflags[0x0216]))) goto labelFunc041A_02D7;
	gflags[0x0216] = true;
	message("\"Many thanks, ");
	message(var0002);
	message(". Now I shall reward thee, as promised!\"");
	say();
	message("\"I shall give thee a scroll, which contains the spell of Shade Summoning. Thou wouldst be wise to copy it to thy spellbook at the first opportunity.\"");
	say();
	message("\"Here it is.\"");
	say();
	var0006 = Func099B(0xFE9C, 0x0001, 0x02CB, 0x0026, 0x0000, 0x0000, true);
	goto labelFunc041A_0385;
labelFunc041A_02D7:
	if (!((var0003 == 0x0016) && (!gflags[0x0215]))) goto labelFunc041A_0362;
	if (!(gflags[0x0214] == true)) goto labelFunc041A_032B;
	message("\"Thou hast returned! Wilt thou release me from this forsaken island?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc041A_0305;
	message("\"Wonderful!\"");
	say();
	message("\"Perhaps if thou dost search the building, thou wilt find a way to lower the drawbridge...\"");
	say();
	goto labelFunc041A_0328;
labelFunc041A_0305:
	message("\"Suit thyself...\"");
	say();
	message("\"Perhaps I can find another way to escape before I starve to death.\"");
	say();
	gflags[0x0214] = true;
	UI_set_schedule_type(0xFFE6, 0x0014);
	Func097F(0xFFE6, "@So cold...@", 0x0000);
	abort;
labelFunc041A_0328:
	goto labelFunc041A_0352;
labelFunc041A_032B:
	if (!(var000B == false)) goto labelFunc041A_034A;
	message("\"Excuse me, ");
	message(var0000);
	message("! My name is Mortegro, mage of Moonshade.\"");
	say();
	UI_set_item_flag(0xFFE6, 0x001C);
	goto labelFunc041A_034E;
labelFunc041A_034A:
	message("\"Avatar! I am glad to see thee!\"");
	say();
labelFunc041A_034E:
	message("\"I was caught in one of those bizarre storms, and seem to be trapped here on this island. If thou wouldst be so kind as to help me free of this place I would be willing to teach thee a spell or two... Or provide thee with a suitable spell scroll if thou art unable to handle spells of such a level.\"");
	say();
labelFunc041A_0352:
	UI_add_answer(["trapped", "spell"]);
	goto labelFunc041A_0385;
labelFunc041A_0362:
	if (!(var000B == false)) goto labelFunc041A_037B;
	message("\"Hello, there! I am Mortegro, the Necromage of Moonshade.\"");
	say();
	UI_set_item_flag(0xFFE6, 0x001C);
	goto labelFunc041A_0385;
labelFunc041A_037B:
	message("\"Hello once again, ");
	message(var0002);
	message(".\"");
	say();
labelFunc041A_0385:
	if (!(gflags[0x0110] && (!gflags[0x028F]))) goto labelFunc041A_0397;
	UI_add_answer("apparatus");
labelFunc041A_0397:
	if (!(gflags[0x0114] && (!gflags[0x0293]))) goto labelFunc041A_03A9;
	UI_add_answer("slippers");
labelFunc041A_03A9:
	if (!(gflags[0x0117] && (!gflags[0x029B]))) goto labelFunc041A_03BB;
	UI_add_answer("the bloody hand");
labelFunc041A_03BB:
	if (!(var0003 == 0x000E)) goto labelFunc041A_03CC;
	UI_add_answer("Moonshade");
labelFunc041A_03CC:
	if (!gflags[0x0132]) goto labelFunc041A_03D9;
	UI_add_answer("seance");
labelFunc041A_03D9:
	if (!(gflags[0x013F] && (!UI_get_item_flag(0xFFE1, 0x0004)))) goto labelFunc041A_03F2;
	UI_add_answer("accuse");
labelFunc041A_03F2:
	UI_add_answer(["Necromage", "learn spells"]);
	UI_add_answer("bye");
labelFunc041A_0406:
	converse attend labelFunc041A_0911;
	case "apparatus" attend labelFunc041A_0444:
	UI_remove_answer("apparatus");
	if (!Func097D(0xFE9B, 0x0001, 0x02ED, 0xFE99, 0x0001)) goto labelFunc041A_043A;
	message("\"It is some Mage's lab apparatus, ");
	message(var0000);
	message(". I regret that I cannot be of help to thee. It is not a design I recognize. Thou shalt have to ask another Mage.\"");
	say();
	goto labelFunc041A_0444;
labelFunc041A_043A:
	message("\"It sounds like it is some Mage's lab apparatus, ");
	message(var0000);
	message(". I regret that I cannot be of help to thee. It is not a design I recognize. Thou shalt have to ask another Mage.\"");
	say();
labelFunc041A_0444:
	case "slippers" attend labelFunc041A_0464:
	UI_remove_answer("slippers");
	if (!var0004) goto labelFunc041A_0460;
	message("\"Those slippers look most comfortable. They must belong in a place of comfort. The most comfortable place I know is the Inn of the Sleeping Bull. Perhaps that is where they are from.\"");
	say();
	goto labelFunc041A_0464;
labelFunc041A_0460:
	message("\"Perhaps if I could see the slippers I could tell thee more about them...\"");
	say();
labelFunc041A_0464:
	case "the bloody hand" attend labelFunc041A_0484:
	UI_remove_answer("the bloody hand");
	if (!var0005) goto labelFunc041A_0480;
	message("\"This is obviously the handiwork of a powerful mage. And there is only one who would produce something as vile as this. The Mad Mage! I can say no more of this.\"");
	say();
	goto labelFunc041A_0484;
labelFunc041A_0480:
	message("\"Art thou absolutely certain that this thing was a living severed hand? I doubt it is so. Perhaps if thou didst have it to show to me...\"");
	say();
labelFunc041A_0484:
	case "accuse" attend labelFunc041A_04F3:
	UI_remove_answer("accuse");
	message("\"So! Thou dost suspect me of kidnapping thy friend!\"");
	say();
	message("\"Mine interest lies with dead beings, not with living persons. I do not have thy friend, nor do I know who doth have him.\"");
	say();
	message("\"Thine impudence is beyond belief! Always, 'tis the superstitious and the jealous who persecute the Necromancer...\"");
	say();
	var000C = UI_get_object_position(0xFFE6);
	UI_sprite_effect(0x001A, var000C[0x0001], var000C[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0082);
	UI_move_object(0xFFE6, [0x046E, 0x0985, 0x0000]);
	var0006 = Func0992(0x0001, "@Where did he go?@", "@Shazzam!@", true);
	abort;
labelFunc041A_04F3:
	case "leave" attend labelFunc041A_050C:
	UI_remove_answer("leave");
	message("\"But thou didst promise to bring me home to Moonshade! A promise is a promise, ");
	message(var0000);
	message(".\"");
	say();
labelFunc041A_050C:
	case "Necromage" attend labelFunc041A_052C:
	UI_remove_answer("Necromage");
	message("\"Yes, that is a special sort of mage who specializes in magics that deal with dead things, as well as with the spirits of the dead themselves.\"");
	say();
	UI_add_answer(["dead things", "spirits of dead"]);
labelFunc041A_052C:
	case "dead things" attend labelFunc041A_053F:
	UI_remove_answer("dead things");
	message("\"Actually, that is rather unpleasant work. A bit discourteous to talk about it in mixed company, if thou dost know what I mean.\"");
	say();
labelFunc041A_053F:
	case "spirits of dead" attend labelFunc041A_0564:
	UI_remove_answer("spirits of dead");
	message("\"Yes, as a Necromage I can commune with the spirits of the dead. I learn the secrets of the dead as well as the occasional portent of the future. But these seances are unpredictable in their results.\"");
	say();
	if (!(!gflags[0x0132])) goto labelFunc041A_0564;
	gflags[0x0132] = true;
	UI_add_answer("seance");
labelFunc041A_0564:
	case "Moonshade" attend labelFunc041A_0587:
	UI_remove_answer("Moonshade");
	message("\"It is a city of Mages, run by Mages and that is the way we mages like it. We are even governed by our own Council of Mages, chaired by Filbercio, Gustacio and Rotoluncia.\"");
	say();
	UI_add_answer(["Filbercio", "Gustacio", "Rotoluncia"]);
labelFunc041A_0587:
	case "Filbercio" attend labelFunc041A_059A:
	UI_remove_answer("Filbercio");
	message("\"He is the supreme MageLord of the city of Moonshade.\"");
	say();
labelFunc041A_059A:
	case "Gustacio" attend labelFunc041A_05AD:
	UI_remove_answer("Gustacio");
	message("\"Gustacio and I are engaged in studies of the strange teleport storms that have been afflicting our land.\"");
	say();
labelFunc041A_05AD:
	case "Rotoluncia" attend labelFunc041A_05C0:
	UI_remove_answer("Rotoluncia");
	message("\"She is a powerful mage. Her only real weakness is that she is most unpleasant when she is thwarted in her desires.\"");
	say();
labelFunc041A_05C0:
	case "seance" attend labelFunc041A_06E2:
	UI_remove_answer("seance");
	if (!(UI_get_schedule_type(0xFFE6) == 0x0015)) goto labelFunc041A_06D1;
	if (!((UI_get_timer(0x0006) < 0x000C) && gflags[0x0129])) goto labelFunc041A_05F6;
	message("\"Speaking with the spirits of the dead doth fatigue me. We must wait another day before I can muster the energies required.\"");
	say();
	goto labelFunc041A_06CE;
labelFunc041A_05F6:
	UI_set_timer(0x0006);
	UI_play_music(0x0038, Func09A0(0x0005, 0x0001));
	message("\"It is time for the seance to begin. I have already prepared all of the elaborate reagents and incantations necessary to open my mind, as a portal through which the spirits of the dead may speak. What thou shalt see are not dreams or hallucinations, but actual ghosts who will join with us in communion. Do not be afraid.\"");
	say();
	message("\"I summon you, ghosts! Come join us here and speak with us. Share with us thy visions of this world and the next.\"");
	say();
	if (!(!gflags[0x0129])) goto labelFunc041A_0644;
	UI_show_npc_face1(0xFEEB, 0x0000);
	message("\"I have heard thy call, Mortegro! In life I was Christopher, blacksmith of Trinsic. My time here is short and I wish to have words with the one who is called the Avatar.\"");
	say();
	message("\"Avatar, I thank thee for protecting my son and for breaking The Fellowship's evil grip over Britannia. But I also bring thee a warning. Many are the spirits in this realm who await thee, and there is but one thing on their mind -- to have their revenge against thee! There is one thing... that thou must... always... remember...\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"Oh! I have lost contact with the spirit! Forgive me, but with a contact that intense, the length of time that I can maintain is always shorter.\"");
	say();
	gflags[0x0129] = true;
	goto labelFunc041A_06CE;
labelFunc041A_0644:
	if (!(UI_npc_nearby(0xFFFD) && (!gflags[0x0131]))) goto labelFunc041A_06A5;
	UI_show_npc_face1(0xFEEB, 0x0001);
	message("\"My darling husband, Iolo, although I am dead I must tell thee that my love for thee shall never die. Always remember me. Farewell.\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"I have lost the contact -- there are strange forces connected with this spirit!\"");
	say();
	UI_show_npc_face1(0xFFFD, 0x0000);
	message("\"No! It cannot be true! She cannot be dead! I refuse to believe it!\"");
	say();
	var0006 = ("@Gwenno!@" & "@Come back to me!@");
	Func094F(0xFFFD, var0006);
	Func097F(0xFFE6, "@Spirits do not lie.@", 0x0005);
	gflags[0x0131] = true;
	abort;
	goto labelFunc041A_06CE;
labelFunc041A_06A5:
	UI_show_npc_face0(0xFFE6, 0x0000);
	message("\"Once again I call out to the spirit of Edrin, brother of Kane. If thou canst hear me, Edrin, please contact us. Thy brother Kane dost need to know if thou hast perished. Thou hast been missing for so long that even thy brother dost think that he shall never see thee again. If thou canst hear my words, please contact us.\"");
	say();
	var000D = Func0992(0x0001, "@There seems to be no reply.@", "@There is no reply.@", false);
	UI_set_conversation_slot(0x0000);
	message("\"This is a favorable sign for Kane. It may well mean that his brother is not in the realm of ghosts.\"");
	say();
labelFunc041A_06CE:
	goto labelFunc041A_06E2;
labelFunc041A_06D1:
	if (!gflags[0x00E2]) goto labelFunc041A_06DE;
	message("\"Ahem, once I have gotten back to Moonshade I will be glad to oblige thee.\"");
	say();
	goto labelFunc041A_06E2;
labelFunc041A_06DE:
	message("\"I must first prepare the proper materials. Thou shouldst come to my manor after midnight, and we shall then conjure spectres.\"");
	say();
labelFunc041A_06E2:
	case "trapped" attend labelFunc041A_06FC:
	UI_remove_answer("trapped");
	message("\"Well, I hesitate to admit that an Adept such as myself could be caught in such a manner... But none of my magics have worked to free me from this island.\"");
	say();
	UI_add_answer("magics");
labelFunc041A_06FC:
	case "magics" attend labelFunc041A_0716:
	UI_remove_answer("magics");
	message("\"Although I am not an expert in it, I can do simple teleports and fetches. But nothing I have tried has worked. I think, perhaps, that this is a null magic area.\"");
	say();
	UI_add_answer("null magic area");
labelFunc041A_0716:
	case "null magic area" attend labelFunc041A_0729:
	UI_remove_answer("null magic area");
	message("\"There are such areas where magic cannot be used. I think that this... place... may be one of them.\" *\"Or, perhaps, common magic --  if thou wilt -- cannot function here. Whatever the case, I cannot escape by magical means.\"");
	say();
labelFunc041A_0729:
	case "learn spells" attend labelFunc041A_0778:
	UI_remove_answer("learn spells");
	if (!(gflags[0x00E2] && (!gflags[0x0215]))) goto labelFunc041A_074A;
	message("\"How can I concentrate on teaching thee spells when I am freezing to death by the moment?\"");
	say();
	goto labelFunc041A_0778;
labelFunc041A_074A:
	if (!(gflags[0x0215] == true)) goto labelFunc041A_075C;
	message("\"As thou didst free me, I can offer my spells to thee at a discount. Say, perhaps half the normal price? Yes, that is what I will sell my spells for -- half cost!\"");
	say();
	Func084F();
	goto labelFunc041A_0778;
labelFunc041A_075C:
	if (!gflags[0x00DB]) goto labelFunc041A_076C;
	message("\"I can teach thee spells... for a fee.\"");
	say();
	Func084F();
	goto labelFunc041A_0778;
labelFunc041A_076C:
	message("\"Thou art not a Mage, so teaching thee spells would be a waste of both our times.\"");
	say();
	message("\"If thou art serious about mastering magic, perhaps thou shouldst speak with Master Fedabiblio at the Seminarium.\"");
	say();
	message("\"But I think thou art too old to learn spell-casting...\"");
	say();
labelFunc041A_0778:
	case "spell" attend labelFunc041A_0798:
	UI_remove_answer("spell");
	message("\"Thou canst consider me a Necromancer, although I do not reanimate the dead. Specifically, I seek information from the dead. Thou wouldst no doubt find the Summon Shade spell useful.\"");
	say();
	UI_add_answer(["information", "Summon Shade"]);
labelFunc041A_0798:
	case "information" attend labelFunc041A_07B2:
	UI_remove_answer("information");
	message("\"I am usually commissioned by one of the other mages when they are seeking lost information. I, myself, am not conducting any research at the moment. I was working with Gustacio on an experiment when I suddenly found myself here.\"");
	say();
	UI_add_answer("experiment");
labelFunc041A_07B2:
	case "experiment" attend labelFunc041A_07D4:
	UI_remove_answer("experiment");
	message("\"I allowed Gustacio to convince me to help him with his plan to divert the teleportation storms.\"");
	say();
	message("\"Perhaps it was not the wisest of things to have done... As I am trapped here and have no idea how to return to Moonshade.\"");
	say();
	message("\"I believe I exchanged places with an altar of some sort. I am sure it rather surprised old Gustacio when I disappeared. He is no doubt wondering about whatever is now in his work area.\"");
	say();
	UI_add_answer("altar");
labelFunc041A_07D4:
	case "altar" attend labelFunc041A_07EB:
	UI_remove_answer("altar");
	message("\"Yes, there are marks here on the island that suggest that something was here until recently.\"");
	say();
	message("\"Given the architecture, this must be one of the old Serpent temples. So I assume that this may have been where the altar once stood.\"");
	say();
labelFunc041A_07EB:
	case "Summon Shade" attend labelFunc041A_0805:
	UI_remove_answer("Summon Shade");
	message("\"It is quite a handy spell, actually. It allows thee to question the shade of a dead person... As long as thou dost possess some item that the person had valued in life. Of course, it doth have its drawbacks...\"");
	say();
	UI_add_answer("drawbacks");
labelFunc041A_0805:
	case "drawbacks" attend labelFunc041A_081F:
	UI_remove_answer("drawbacks");
	message("\"If thou dost summon a shade from its resting place without the appropriate item, the shade may well attack thee. And the spell doth use an inordinate amount of reagents... But thou dost learn such interesting things!\"");
	say();
	UI_add_answer("reagents");
labelFunc041A_081F:
	case "reagents" attend labelFunc041A_0832:
	message("\"It doth require Sulphurous Ash, Blood Moss, Mandrake Root, Nightshade and Spider's Silk. Quite costly, so thou shouldst use this spell sparingly. And remember that thou must have an item belonging to that person to call them forth.\"");
	say();
	UI_remove_answer("reagents");
labelFunc041A_0832:
	case "bye" attend labelFunc041A_090E:
	if (!(gflags[0x0216] && (!UI_get_item_flag(0xFFE6, 0x0006)))) goto labelFunc041A_08B0;
	message("\"Wouldst thou allow me to accompany thee back to Moonshade? I am afraid that I do not know where I am.\"");
	say();
	if (!(UI_get_array_size(UI_get_party_list2()) > 0x0004)) goto labelFunc041A_0872;
	var000D = Func0992(0x0001, "@We do not have room for another to travel with us, Avatar.@", 0x0000, false);
	goto labelFunc041A_0895;
labelFunc041A_0872:
	if (!(Func0955() == true)) goto labelFunc041A_0895;
	message("\"I do not believe I could return home without thy guidance... For all that I am an Adept.\"");
	say();
	UI_add_to_party(0xFFE6);
	Func097F(0xFFE6, "@Thank thee!@", 0x0000);
	abort;
	goto labelFunc041A_08B0;
labelFunc041A_0895:
	message("\"Well, perhaps I can find my way home on mine own... I am an Adept, after all.\"");
	say();
	Func097F(0xFFE6, "@What lies this way?@", 0x0000);
	UI_set_schedule_type(0xFFE6, 0x000C);
	abort;
labelFunc041A_08B0:
	UI_remove_npc_face0();
	if (!((var0003 == 0x0016) && (!gflags[0x0215]))) goto labelFunc041A_08DE;
	Func097F(0xFE9C, "@Stay calm.@", 0x0000);
	Func097F(0xFFE6, "@Please help me!@", 0x0005);
	goto labelFunc041A_08FE;
labelFunc041A_08DE:
	Func097F(0xFE9C, "@Thanks for thine help.@", 0x0000);
	Func097F(0xFFE6, (("@Fare thee well, " + var0000) + ".@"), 0x0005);
labelFunc041A_08FE:
	if (!(Func0994() == 0x000E)) goto labelFunc041A_090B;
	Func08FF();
labelFunc041A_090B:
	goto labelFunc041A_0911;
labelFunc041A_090E:
	goto labelFunc041A_0406;
labelFunc041A_0911:
	endconv;
labelFunc041A_0912:
	return;
}


