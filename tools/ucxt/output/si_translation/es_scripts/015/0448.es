#game "serpentisle"
// externs
extern var Func0953 0x953 ();
extern var Func0954 0x954 ();
extern var Func098E 0x98E ();
extern var Func0942 0x942 (var var0000);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern var Func0994 0x994 ();
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern void Func07D1 object#(0x7D1) ();
extern var Func0956 0x956 (var var0000);
extern void Func09AC 0x9AC (var var0000, var var0001, var var0002, var var0003);
extern void Func09AD 0x9AD (var var0000);

void Func0448 object#(0x448) ()
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

	var0000 = Func0953();
	var0001 = Func0954();
	var0002 = UI_is_pc_female();
	var0003 = UI_get_item_flag(0xFFB8, 0x001C);
	var0004 = Func098E();
	var0005 = UI_find_nearby(0xFFB8, 0x0381, 0x0014, 0x0000);
	var0006 = Func0942(0xFFFF);
	if (!((event == 0x0007) && UI_get_item_flag(0xFFB8, 0x001D))) goto labelFunc0448_00A1;
	UI_show_npc_face0(0xFFB8, 0x0000);
	if (!(!gflags[0x00CA])) goto labelFunc0448_0079;
	message("\"So! Thou hast discovered me!\"");
	say();
	message("\"Yes, I poisoned thee, but I will not say who did instruct me to do so!\"");
	say();
	if (!(!gflags[0x005A])) goto labelFunc0448_0079;
	message("\"There is no antidote, so thou canst look forward to a long and painful death!\"");
	say();
labelFunc0448_0079:
	message("\"I spit upon thee, pawn of the Demon British!\"");
	say();
	UI_clear_item_flag(0xFFB8, 0x001D);
	UI_reduce_health(0xFFB8, 0x0032, 0x0000);
	Func097F(0xFE9C, "@Whew!@", 0x0002);
	abort;
labelFunc0448_00A1:
	if (!(event == 0x0002)) goto labelFunc0448_0227;
	if (!(UI_get_item_flag(0xFFB8, 0x001E) && (item == Func09A0(0x0005, 0x0002)))) goto labelFunc0448_0148;
	if (!(UI_get_item_flag(0xFE9C, 0x0010) || (Func0994() == 0x001F))) goto labelFunc0448_00FB;
	var0007 = Func09A0(0x0005, 0x0002);
	var0008 = UI_delayed_execute_usecode_array(var0007, [(byte)0x23, (byte)0x55, 0x0448], 0x0064);
	abort;
labelFunc0448_00FB:
	UI_clear_item_flag(0xFFB8, 0x001E);
	var0009 = Func0992(0xFFFE, 0x0000, 0x0000, false);
	if (!((var0009 != 0xFE9C) && Func0942(var0009))) goto labelFunc0448_0147;
	UI_show_npc_face0(var0009, 0x0000);
	message("\"Thou dost look terrible, ");
	message(var0000);
	message(". I think thou hast been struck by some terrible malady.\"");
	say();
	Func097F(var0009, "@Thou needest a healer!@", 0x0000);
	abort;
labelFunc0448_0147:
	abort;
labelFunc0448_0148:
	if (!(UI_get_item_flag(0xFE9C, 0x0008) && (item == Func09A0(0x0005, 0x0002)))) goto labelFunc0448_01A8;
	var0009 = Func0992(0xFFFE, "@Art thou all right?@", "@Oh...@", true);
	if (!(var0009 != 0xFE9C)) goto labelFunc0448_01A8;
	UI_set_item_flag(0xFFB8, 0x001E);
	var0007 = Func09A0(0x0005, 0x0002);
	var0008 = UI_delayed_execute_usecode_array(var0007, [(byte)0x23, (byte)0x55, 0x0448], 0x0005);
labelFunc0448_01A8:
	if (!((item == Func09A0(0x0005, 0x0001)) && (!gflags[0x005A]))) goto labelFunc0448_0227;
	if (!(!UI_get_item_flag(0xFE9C, 0x0008))) goto labelFunc0448_0204;
	if (!(Func0994() != 0x001F)) goto labelFunc0448_0204;
	gflags[0x00C2] = true;
	UI_set_item_flag(0xFE9C, 0x0008);
	var0007 = Func09A0(0x0005, 0x0002);
	var0008 = UI_delayed_execute_usecode_array(var0007, [(byte)0x23, (byte)0x55, 0x0448], 0x0014);
labelFunc0448_0204:
	var0007 = Func09A0(0x0005, 0x0001);
	var0008 = UI_delayed_execute_usecode_array(var0007, [(byte)0x23, (byte)0x55, 0x0448], 0x03E8);
labelFunc0448_0227:
	if (!(event == 0x0001)) goto labelFunc0448_025C;
	UI_item_say(0xFE9C, "@Hello, there.@");
	0xFFB8->Func07D1();
	UI_set_schedule_type(0xFFB8, 0x0003);
	Func097F(0xFFB8, "@Hello.@", 0x0002);
	UI_clear_item_say(0xFFB8);
labelFunc0448_025C:
	if (!(event == 0x0009)) goto labelFunc0448_069F;
	UI_run_schedule(0xFFB8);
	var000A = false;
	if (!(UI_get_schedule_type(0xFFB8) == 0x0007)) goto labelFunc0448_0281;
	var000A = true;
labelFunc0448_0281:
	UI_show_npc_face0(0xFFB8, 0x0000);
	if (!(!gflags[0x004A])) goto labelFunc0448_02A6;
	message("\"Begone with thee, stranger. No one who hath not passed the Test of Knighthood is worthy of my time.\"");
	say();
	Func097F(0xFFB8, "@Good day.@", 0x0000);
	abort;
	goto labelFunc0448_02CE;
labelFunc0448_02A6:
	if (!(!var0003)) goto labelFunc0448_02C4;
	message("\"I am Lydia. What can I do for thee, ");
	message(var0001);
	message("?\"");
	say();
	UI_set_item_flag(0xFFB8, 0x001C);
	goto labelFunc0448_02CE;
labelFunc0448_02C4:
	message("\"Hello, ");
	message(var0001);
	message(".\"");
	say();
labelFunc0448_02CE:
	UI_add_answer(["duties"]);
	if (!(gflags[0x004A] && (!gflags[0x003E]))) goto labelFunc0448_02EA;
	UI_add_answer("tattoo");
labelFunc0448_02EA:
	if (!(gflags[0x0048] && (!UI_get_item_flag(0xFFB4, 0x0004)))) goto labelFunc0448_0303;
	UI_add_answer("traitor");
labelFunc0448_0303:
	if (!gflags[0x0035]) goto labelFunc0448_0310;
	UI_add_answer("poison");
labelFunc0448_0310:
	UI_add_answer("bye");
labelFunc0448_0317:
	converse attend labelFunc0448_069E;
	case "traitor" attend labelFunc0448_033E:
	UI_remove_answer("traitor");
	message("\"As loathsome as Luther is, perhaps he doth have a point. Krayg doth indeed take long walks in the woods, most strangely...\"");
	say();
	if (!gflags[0x00C0]) goto labelFunc0448_033A;
	message("\"Yet if he hath told thee of a Goblin rendezvous site, then thou shouldst examine the site. There might be evidence there to convict the traitor, whomever he might be.\"");
	say();
	goto labelFunc0448_033E;
labelFunc0448_033A:
	message("\"But a man cannot be convicted simply for strange habits! We must have evidence...\"");
	say();
labelFunc0448_033E:
	case "duties" attend labelFunc0448_0377:
	UI_remove_answer("duties");
	if (!var000A) goto labelFunc0448_0362;
	message("\"Look around thee! Dost thou see the needles, the vials of ink, and the sketches!\"");
	say();
	message("\"Look closer. Dost thou see the patterns which adorn my body, the swirls of color? Each doth have its meaning...\"");
	say();
	message("\"I am the artist who creates tattoos.\"");
	say();
	goto labelFunc0448_036A;
labelFunc0448_0362:
	message("\"Thou art new to this city, or thou wouldst have heard of me by now. Mine is the art of using needles and ink to create harmonious patterns.\"");
	say();
	message("\"I am Lydia, the tattoo artist.\"");
	say();
labelFunc0448_036A:
	UI_add_answer(["artist", "patterns"]);
labelFunc0448_0377:
	case "artist" attend labelFunc0448_039F:
	UI_remove_answer("artist");
	message("\"I learned the trade from my father. Counting myself, there have been twelve generations of tattooists in our family.\"");
	say();
	message("\"As the tattooist, it is my privilege to grant the first tattoo to any warrior who completes the Test of Knighthood.\"");
	say();
	message("\"Lord Marsten sometimes authorizes me to give additional tattoos, but only when the recipient hath earned them through Courage or Valor.\"");
	say();
	UI_add_answer(["tradition", "special tattoos"]);
labelFunc0448_039F:
	case "tradition" attend labelFunc0448_03C7:
	UI_remove_answer("tradition");
	message("\"Artistry is something that one is born with -- it cannot be learned or imitated. As I was born with the talent, I could not deny my duty.\"");
	say();
	message("\"As thou canst see, I have had much practice on myself. As the tattooist, I can have as many tattoos as I desire...\"");
	say();
	message("\"My body is covered with tattoos! My mother tattooed my back and other spots I could not reach comfortably.\"");
	say();
	UI_add_answer(["mother", "spots?"]);
labelFunc0448_03C7:
	case "mother" attend labelFunc0448_03F2:
	UI_remove_answer("mother");
	message("\"She was a courageous Knight! I miss her very much...\"");
	say();
	message("\"Others will tell thee that my mother died in a battle with road bandits, but I know better. She had lost the will to live!\"");
	say();
	message("\"Her heart was broken, ever since that Warlock from Moonshade stole her oldest daughter!\"");
	say();
	UI_add_answer(["Moonshade", "Warlock", "daughter"]);
labelFunc0448_03F2:
	case "Moonshade" attend labelFunc0448_0409:
	UI_remove_answer("Moonshade");
	message("\"That is the City of Mages, to the east on the Isle of Beyond. It is a depraved, indulgent, undisciplined place.\"");
	say();
	message("\"No warrior could ever feel comfortable in such a setting. They care nothing for Duty and Courage -- only pleasure!\"");
	say();
labelFunc0448_0409:
	case "Warlock" attend labelFunc0448_0420:
	UI_remove_answer("Warlock");
	message("\"I do not know his name. The evil wizard travels throughout the Serpent Isle, in search of children to steal for the mage school.\"");
	say();
	message("\"Any infant with potential is taken in the dead of night, and a white stone is left in its place.\"");
	say();
labelFunc0448_0420:
	case "daughter" attend labelFunc0448_043F:
	UI_remove_answer("daughter");
	message("\"My sister Selene was a very beautiful girl. She was four years older than I, and I thought she was so mature!\"");
	say();
	message("\"She was only twelve when she was taken, so she never had the chance to pass the Test of Knighthood... Selene doth have no tattoos.\"");
	say();
	message("\"I have often wondered about her life among the Mages, learning spells and bewitching her enemies. I would give anything to see her again!\"");
	say();
	var000B = true;
labelFunc0448_043F:
	case "spots?" attend labelFunc0448_0492:
	UI_remove_answer("spots?");
	message("\"Well, thou knowest... private places!\"");
	say();
	if (!var0006) goto labelFunc0448_0492;
	UI_show_npc_face1(0xFFFF, 0x0000);
	message("\"Milady, I would be very interested in seeing all of thy tattoos. Perhaps we could step into...\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"I am not on display, sir! Thou shouldst not think that any lout can see the entire gallery.\"");
	say();
	UI_show_npc_face1(0xFFFF, 0x0000);
	message("\"Sorry, milady.\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"Later, perhaps... handsome stranger.\"");
	say();
labelFunc0448_0492:
	case "special tattoos" attend labelFunc0448_04AD:
	UI_remove_answer("special tattoos");
	message("\"Only Lord Marsten can approve one for a Tattoo of Valor. They are won for great deeds done on the field of battle.\"");
	say();
	message("\"Our bravest warriors have many tattoos. Caladin and Brendann, rivals in all things, have more tattoos than anyone else in Monitor!\"");
	say();
	message("\"Caladin wears his on those brawny arms of his, while Brendann's are kept in more discreet locations...\"");
	say();
labelFunc0448_04AD:
	case "patterns" attend labelFunc0448_04C4:
	UI_remove_answer("patterns");
	message("\"These swirls and dots may seem random, but each has its meaning. A trained artist can read thy past by thy tattoos.\"");
	say();
	message("\"Do not stare so closely at my tattoos! I wish my secrets to be mine own.\"");
	say();
labelFunc0448_04C4:
	case "tattoo" attend labelFunc0448_05D6:
	UI_remove_answer("tattoo");
	if (!var0005) goto labelFunc0448_05D2;
	message("\"Thou hast earned the right to wear the Knight's Tattoo. Without it, one cannot be inducted into one's Knighthood.\"");
	say();
	message("\"Since thou didst slay the Wolf in the Test, thou art slated to receive the Mark of the Wolf.\"");
	say();
	message("\"Art thou ready to obtain thy tattoo?\"");
	say();
	var000C = Func0956(["Yes", "No", "Will it hurt?"]);
	if (!(var000C == "Yes")) goto labelFunc0448_059C;
	message("\"We shall now begin the process. This will hurt, but as a warrior, thou art accustomed to suffering.\"");
	say();
	Func097F(0xFFB8, "@Be seated.@", 0x0000);
	enum();
labelFunc0448_0512:
	for (var000F in var0004 with var000D to var000E) attend labelFunc0448_052F;
	Func09AC(var000F, 0xFFFF, 0x0000, 0x0010);
	goto labelFunc0448_0512;
labelFunc0448_052F:
	UI_set_item_flag(0xFE9C, 0x0010);
	UI_end_conversation();
	var0010 = UI_get_object_position(var0005);
	var0010[0x0001] = (var0010[0x0001] + 0x0001);
	UI_set_npc_id(0xFFB8, 0x0000);
	UI_si_path_run_usecode(0xFE9C, var0010, 0x0002, item, 0x028C, false);
	UI_set_path_failure(0x028C, item, 0x000E);
	UI_play_music(0x001D, Func09A0(0x0005, 0x0001));
	UI_set_schedule_type(0xFFB8, 0x000F);
	abort;
	goto labelFunc0448_05CF;
labelFunc0448_059C:
	if (!(var000C == "Will it hurt?")) goto labelFunc0448_05CB;
	message("\"Will it hurt! Thou art not fit to be a Knight of Monitor.\"");
	say();
	if (!var0002) goto labelFunc0448_05B7;
	message("\"Thou dost shame all womankind by thy cowardice.\"");
	say();
	goto labelFunc0448_05BB;
labelFunc0448_05B7:
	message("\"Come back when thou art ready to be a man!\"");
	say();
labelFunc0448_05BB:
	Func097F(0xFFB8, "@Away!@", 0x0000);
	abort;
	goto labelFunc0448_05CF;
labelFunc0448_05CB:
	message("\"Then perhaps later.\"");
	say();
labelFunc0448_05CF:
	goto labelFunc0448_05D6;
labelFunc0448_05D2:
	message("\"If thou wilt come to my shop when I am at work, I shall be happy to grant thee thy Mark of Knighthood.\"");
	say();
labelFunc0448_05D6:
	case "poison" attend labelFunc0448_0674:
	message("\"So! Thou hast discovered me!\"");
	say();
	message("\"Yes, I poisoned thee, but I will not say at whose insistence it was done!\"");
	say();
	if (!(!gflags[0x005A])) goto labelFunc0448_05F1;
	message("\"There is no antidote, so thou canst look forward to a long and painful death!\"");
	say();
labelFunc0448_05F1:
	message("\"I spit upon thee, pawn of the Demon British!\"");
	say();
	var0009 = Func0992(0xFFFE, (("@Thou hast poisoned " + var0000) + " for the sake of Lord British?@"), 0x0000, false);
	if (!(var0009 != 0xFE9C)) goto labelFunc0448_0626;
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"Yes, Fiend British!\"");
	say();
labelFunc0448_0626:
	message("\"I hate that monster! He represents all that is evil!\"");
	say();
	if (!gflags[0x005A]) goto labelFunc0448_0637;
	message("\"Since the poison hath not killed thee, I see that I must do the job myself!\"");
	say();
	goto labelFunc0448_063B;
labelFunc0448_0637:
	message("\"Thou canst not take me to the dungeons without a fight!\"");
	say();
labelFunc0448_063B:
	gflags[0x00CA] = true;
	UI_clear_item_say(0xFFB8);
	Func097F(0xFFB8, "@En garde!@", 0x0000);
	Func097F(0xFFFD, "@Stop her!@", 0x0002);
	Func09AC(0xFFB8, 0xFFFF, 0x0000, 0x0000);
	Func09AD(0xFFB8);
	abort;
labelFunc0448_0674:
	case "bye" attend labelFunc0448_069B:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@So long...@", 0x0000);
	Func097F(0xFFB8, "@Good day!@", 0x0002);
	goto labelFunc0448_069E;
labelFunc0448_069B:
	goto labelFunc0448_0317;
labelFunc0448_069E:
	endconv;
labelFunc0448_069F:
	return;
}


