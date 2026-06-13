#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func0871 0x871 ();
extern var Func0955 0x955 ();
extern void Func0986 0x986 (var var0000, var var0001);
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern void Func08FF 0x8FF ();

void Func0421 object#(0x421) ()
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

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	var0003 = false;
	var0004 = UI_part_of_day();
	if (!((var0004 > 0x0001) || (var0004 < 0x0006))) goto labelFunc0421_0039;
	var0004 = "day";
	goto labelFunc0421_003F;
labelFunc0421_0039:
	var0004 = "evening";
labelFunc0421_003F:
	var0005 = false;
	if (!((event == 0x0007) && UI_get_item_flag(item, 0x001D))) goto labelFunc0421_0066;
	var0006 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0329]);
labelFunc0421_0066:
	if (!(event == 0x0001)) goto labelFunc0421_0094;
	UI_item_say(0xFE9C, "@Might we speak?@");
	0xFFDF->Func07D1();
	Func097F(0xFFDF, "@Make it brief...@", 0x0002);
	UI_set_schedule_type(0xFFDF, 0x0003);
labelFunc0421_0094:
	if (!(event == 0x0009)) goto labelFunc0421_08DA;
	UI_run_schedule(0xFFDF);
	UI_clear_item_say(0xFFDF);
	UI_show_npc_face0(0xFFDF, 0x0000);
	var0007 = UI_get_item_flag(0xFFDF, 0x001C);
	if (!(var0007 == false)) goto labelFunc0421_00D7;
	UI_set_item_flag(0xFFDF, 0x001C);
	message("\"I am Torrissio, a Mage of Moonshade.\"");
	say();
labelFunc0421_00D7:
	message("\"I am not a sociable man, so this will be brief. What dost thou desire of me, and at what price?\"");
	say();
	if (!(gflags[0x023D] && (!gflags[0x0136]))) goto labelFunc0421_00ED;
	UI_add_answer("magic wand");
labelFunc0421_00ED:
	if (!gflags[0x0147]) goto labelFunc0421_00FA;
	UI_add_answer("magic wand");
labelFunc0421_00FA:
	if (!(gflags[0x012D] && (!gflags[0x00FF]))) goto labelFunc0421_010C;
	UI_add_answer("soul trapping");
labelFunc0421_010C:
	if (!(gflags[0x0110] && (!gflags[0x028F]))) goto labelFunc0421_011E;
	UI_add_answer("apparatus");
labelFunc0421_011E:
	if (!(gflags[0x0114] && (!gflags[0x0293]))) goto labelFunc0421_0130;
	UI_add_answer("slippers");
labelFunc0421_0130:
	if (!gflags[0x00FF]) goto labelFunc0421_013D;
	UI_add_answer("Worm Gems");
labelFunc0421_013D:
	if (!(gflags[0x00EA] && (!UI_get_item_flag(0xFFE1, 0x0004)))) goto labelFunc0421_0156;
	UI_add_answer("kidnap");
labelFunc0421_0156:
	if (!(gflags[0x00E2] && (!UI_get_item_flag(0xFF58, 0x0004)))) goto labelFunc0421_016F;
	UI_add_answer("Stefano");
labelFunc0421_016F:
	if (!(Func097D(0xFE9B, 0x0001, 0x02A5, 0xFE99, 0x0000) && (!gflags[0x013B]))) goto labelFunc0421_0190;
	UI_add_answer("stockings");
labelFunc0421_0190:
	if (!gflags[0x00F5]) goto labelFunc0421_019D;
	UI_add_answer("help Fedabiblio");
labelFunc0421_019D:
	UI_add_answer(["Torrissio"]);
	UI_add_answer("bye");
labelFunc0421_01AE:
	converse attend labelFunc0421_08D9;
	case "kidnap" attend labelFunc0421_0221:
	UI_remove_answer("kidnap");
	if (!gflags[0x0142]) goto labelFunc0421_0203;
	message("\"So thou dost suspect me of taking thy companion, ");
	message(var0002);
	message("? And thou dost dare to confront me -- a Mage!\"");
	say();
	message("\"I am flattered by the suspicions, but alas... I am innocent in this case.\"");
	say();
	if (!UI_npc_nearby(0xFFF9)) goto labelFunc0421_01E5;
	message("\"As thou canst surely see, thy companion is not being held prisoner in my manor. Look around at thy pleasure.\"");
	say();
	goto labelFunc0421_01E9;
labelFunc0421_01E5:
	message("\"Search my manor! I have no prisoners there...\"");
	say();
labelFunc0421_01E9:
	Func097F(0xFFDF, "@Now leave me alone...@", 0x0000);
	UI_set_schedule_type(0xFFDF, 0x000C);
	abort;
	goto labelFunc0421_0221;
labelFunc0421_0203:
	message("\"Such poor luck, ");
	message(var0002);
	message("... to have angered one of the Mages of Moonshade...\"");
	say();
	message("\"Could it be Mortegro, he for whom the cold sensations of death are more vivid than life?\"");
	say();
	gflags[0x013F] = true;
	message("\"And what of Rotoluncia? She dislikes thee -- everyone knows it.\"");
	say();
	message("\"If I were thee, I would speak to MageLord Filbercio about this matter. Mages are involved, so thy duty is clear.\"");
	say();
	gflags[0x0141] = true;
labelFunc0421_0221:
	case "Torrissio" attend labelFunc0421_0244:
	UI_remove_answer("Torrissio");
	message("\"I am Torrisso of Moonshade, Adept Mage and master of life spells.\"");
	say();
	UI_add_answer(["Moonshade", "Adept Mage", "life spells"]);
labelFunc0421_0244:
	case "Moonshade" attend labelFunc0421_025E:
	UI_remove_answer("Moonshade");
	message("\"Moonshade is in many ways a perfect city, a perfect example of civilization with that highest form of government -- a Magocracy.\"");
	say();
	UI_add_answer("Magocracy");
labelFunc0421_025E:
	case "Adept Mage" attend labelFunc0421_0278:
	UI_remove_answer("Adept Mage");
	message("\"I come from one of the longest family lines of mages in all of the Serpent Isle. That is how one tells a good mage, thou must know -- by his family line. Good mages are a result of good breeding. My father always said that.\"");
	say();
	UI_add_answer("family line");
labelFunc0421_0278:
	case "family line" attend labelFunc0421_0298:
	UI_remove_answer("family line");
	message("\"A thousand years ago, our ancestors performed tricks to amuse peasants. Hundreds of years ago they were the most trusted advisors to Kings and rulers of the land. When it comes to magic the only bloodline more pure than mine is that of the ruling family. Of course, my family was decimated in the old war. If not for that, I might be ruler today.\"");
	say();
	UI_add_answer(["ruling family", "old war"]);
labelFunc0421_0298:
	case "apparatus" attend labelFunc0421_02D1:
	UI_remove_answer("apparatus");
	var0008 = Func097D(0xFE9B, 0x0001, 0x02ED, 0xFE99, 0x0001);
	if (!var0008) goto labelFunc0421_02CD;
	message("\"That looks like the sort of equipment used by Erstam, the Mad Mage! He lives at the place called Mad Mage Island.\"");
	say();
	gflags[0x028F] = true;
	goto labelFunc0421_02D1;
labelFunc0421_02CD:
	message("\"If thou had the item I am certain I could tell thee more about it.\"");
	say();
labelFunc0421_02D1:
	case "slippers" attend labelFunc0421_02E4:
	UI_remove_answer("slippers");
	message("\"I would ask about them at the Inn of Sleeping Bull if I were thee.\"");
	say();
labelFunc0421_02E4:
	case "ruling family" attend labelFunc0421_02F7:
	UI_remove_answer("ruling family");
	message("\"That would be the bloodline of the MageLord of Moonshade, Filbercio.\"");
	say();
labelFunc0421_02F7:
	case "old war" attend labelFunc0421_030A:
	UI_remove_answer("old war");
	message("\"According to family records, most of my family members were killed fighting the Daemons. This is the war which brought an end to the Age of the Two Kings.\"");
	say();
labelFunc0421_030A:
	case "life spells" attend labelFunc0421_0324:
	UI_remove_answer("life spells");
	message("\"My personal specialty is spells involving healing and the sustenance of life energies.\"");
	say();
	UI_add_answer("buy spells");
labelFunc0421_0324:
	case "Magocracy" attend labelFunc0421_0347:
	UI_remove_answer("Magocracy");
	message("\"A government totally controlled by Mages is the only sensible form of government. Mages have a holistic understanding of the world that makes them far more suited to the responsibilities of government than any mundane could ever be. With Filbercio at the head of the Council of Mages, things are accomplished quickly with a minimum of politics.\"");
	say();
	UI_add_answer(["Council of Mages", "Filbercio", "politics"]);
labelFunc0421_0347:
	case "buy spells" attend labelFunc0421_0384:
	if (!gflags[0x0127]) goto labelFunc0421_0364;
	UI_remove_answer("buy spells");
	message("\"Thou hast betrayed me and betrayed my lover by giving her stolen property to Filbercio for a mere pittance of profit! Now thou dost expect me to help thee?! Begone from my sight!\"");
	say();
	abort;
	goto labelFunc0421_0384;
labelFunc0421_0364:
	if (!(var0003 == false)) goto labelFunc0421_0374;
	message("\"Of course I can sell thee a spell! I have recently sold a spell to another person passing through Moonshade. It is just such a business upon which the city of Moonshade was built. With all of the experiments and developments we produce here in the magical arts, we are practically the center of the world.\"");
	say();
	var0003 = true;
labelFunc0421_0374:
	Func0871();
	UI_add_answer(["Sold to whom?", "experiments"]);
labelFunc0421_0384:
	case "Sold to whom?" attend labelFunc0421_0397:
	UI_remove_answer("Sold to whom?");
	message("\"Why, that fat sage that passed through town a while ago. Batlin. I remember not the specifics of the transaction.\"");
	say();
labelFunc0421_0397:
	case "experiments" attend labelFunc0421_03AA:
	UI_remove_answer("experiments");
	message("\"I do not wish to violate the privacy of a fellow mage, but there is at least one mage in town working on solving the mystery of these distressing teleport storms.\"");
	say();
labelFunc0421_03AA:
	case "Council of Mages" attend labelFunc0421_03BD:
	UI_remove_answer("Council of Mages");
	message("\"Do not even raise this topic -- I have no stomach for the political games which one must play in order to win a seat on the Council.\"");
	say();
labelFunc0421_03BD:
	case "Filbercio" attend labelFunc0421_03D0:
	UI_remove_answer("Filbercio");
	message("\"He is a shrewd and stern ruler. A highly skilled mage. He is not someone thou wouldst want to cross.\"");
	say();
labelFunc0421_03D0:
	case "politics" attend labelFunc0421_0408:
	UI_remove_answer("politics");
	message("\"Of course, nothing ever gets done without a little politics.");
	say();
	if (!UI_get_item_flag(0xFFE1, 0x0004)) goto labelFunc0421_03F7;
	message("\"I was allied with Rotoluncia, but her death makes our partnership void.\"");
	say();
	goto labelFunc0421_0408;
labelFunc0421_03F7:
	message("\"One's enemies and allies are constantly shifting. That is why Rotoluncia and I have formed a sort of coalition, wherein we both work to protect each other's best interests.\"");
	say();
	UI_add_answer(["Rotoluncia", "allies and enemies"]);
labelFunc0421_0408:
	case "Rotoluncia" attend labelFunc0421_0428:
	UI_remove_answer("Rotoluncia");
	message("\"Of course, our working together hath led to a few rumors -- such is the way of politics. But even partners disagree. For instance, she is convinced that there is some sort of connection between thee and this other stranger who visited us -- Batlin.\"");
	say();
	UI_add_answer(["partners", "Batlin"]);
labelFunc0421_0428:
	case "allies and enemies" attend labelFunc0421_043B:
	UI_remove_answer("allies and enemies");
	message("\"Of course, in the realm of politics as well as the realm of magic what is one today may very well be the other tomorrow!\"");
	say();
labelFunc0421_043B:
	case "partners" attend labelFunc0421_0455:
	UI_remove_answer("partners");
	message("\"Partners with Rotoluncia in politics. But partners with Columna in love.\"");
	say();
	UI_add_answer("Columna");
labelFunc0421_0455:
	case "Batlin" attend labelFunc0421_0475:
	UI_remove_answer("Batlin");
	message("\"Rotoluncia was quite repulsed yet fascinated with Batlin and his secrets. To think of it makes me wish to offer thee a word of advice.\"");
	say();
	UI_add_answer(["secrets", "advice"]);
labelFunc0421_0475:
	case "secrets" attend labelFunc0421_0488:
	UI_remove_answer("secrets");
	message("\"While Batlin was here, he exhibited some sort of power or talent or knowledge. Rotoluncia is now obsessed with it although she will not speak much about this with me.\"");
	say();
labelFunc0421_0488:
	case "advice" attend labelFunc0421_049B:
	UI_remove_answer("advice");
	message("\"Rotoluncia is not the sort of woman that thou dost want angry at thee. Mine advice to thee is that whatever she wants, thou shouldst give it to her.\"");
	say();
labelFunc0421_049B:
	case "Columna" attend labelFunc0421_04BB:
	UI_remove_answer("Columna");
	message("\"Our love must remain a secret. This saddens her, and myself as well. There are those who would come between us, who plan against us. Her heart was touched by a song sung by the lady Gwenno.\"");
	say();
	UI_add_answer(["plan against thee", "Gwenno"]);
labelFunc0421_04BB:
	case "plan against thee" attend labelFunc0421_04CE:
	UI_remove_answer("plan against thee");
	message("\"I do not wish to burden thee with my personal problems. The less said of these things, the better.\"");
	say();
labelFunc0421_04CE:
	case "Gwenno" attend labelFunc0421_04E1:
	UI_remove_answer("Gwenno");
	message("\"She came passing through our city several weeks ago. From what I hear, she is a most unusual and interesting woman.\"");
	say();
labelFunc0421_04E1:
	case "Stefano" attend labelFunc0421_0509:
	UI_remove_answer("Stefano");
	message("\"Columna and I have received information that it was Stefano who attempted to destroy our love by stealing her stockings from my manor house.\"");
	say();
	if (!gflags[0x0239]) goto labelFunc0421_0501;
	message("\"Now that he hath dared to show his face again, it shall be him who is destroyed. Columna and I have already seen to that!\"");
	say();
	goto labelFunc0421_0509;
labelFunc0421_0501:
	message("\"When Filbercio sentenced him to death in the Mountains of Freedom, I laughed until blood ran from mine eyes!\"");
	say();
	message("\"It will serve that cretin good, to be entombed with the rats and maggots in that prison.\"");
	say();
labelFunc0421_0509:
	case "stockings" attend labelFunc0421_06B3:
	UI_remove_answer("stockings");
	if (!var0001) goto labelFunc0421_061E;
	if (!(!gflags[0x013C])) goto labelFunc0421_0614;
	message("\"I beseech thee to turn over to me that which is the instrument of humiliation against a woman who hath done thee no harm. They belong to my lover Columna and they were stolen by the bandit Stefano. Columna's stockings can be used as evidence of our affair. I neither know nor care how thou hast come into possession of them. But know this: I shall have them!\"");
	say();
	message("\"Those stockings are of no use to thee. I know thou wilt do the proper thing. Within thy chest beats a human heart. Thou art a woman of feelings.\"");
	say();
	message("\"So too am I a man stirred by strong emotions. Give unto me this thing, and together we shall share a night of passion the likes of which have never before been told in story or song.\"");
	say();
	message("\"Surrender those stockings to me.\"");
	say();
labelFunc0421_0535:
	var0009 = Func0955();
	if (!var0009) goto labelFunc0421_05F6;
	var000A = UI_remove_party_items(0x0001, 0x02A5, 0xFE99, 0x0000, 0x0000);
	message("\"Excellent! First let us enjoy some wine! Wilt thou accept this glass of fine wine?\"");
	say();
	if (!var000A) goto labelFunc0421_0565;
	gflags[0x013B] = true;
labelFunc0421_0565:
	if (!Func0955()) goto labelFunc0421_05EF;
	UI_set_item_flag(0xFE9C, 0x0001);
	var000B = (0x0006 + UI_die_roll(0x0000, 0x0009));
	UI_fade_palette(0x000C, 0x0001, 0x0000);
	UI_move_object(0xFFDF, [0x0610, 0x078F, 0x0000]);
	var000C = (var000B * 0x05DC);
	Func0986(var000B, item);
	var0006 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x0636], 0x0021);
	var0006 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x52, "@Oh, my head...@"], 0x0023);
	abort;
	goto labelFunc0421_05F3;
labelFunc0421_05EF:
	message("\"Thou dost not trust me, eh? So be it...\" *\"Ha! The stockings are now mine!\"");
	say();
labelFunc0421_05F3:
	goto labelFunc0421_0611;
labelFunc0421_05F6:
	if (!(!gflags[0x013C])) goto labelFunc0421_060C;
	message("\"Thou dost not trust me? Then be on thy way! All I wanted were the stockings...\"");
	say();
	message("\"After all, Columna is more of a woman than thou canst ever hope to be.\"");
	say();
	gflags[0x013C] = true;
	goto labelFunc0421_0611;
labelFunc0421_060C:
	message("\"Bah! Thou art only trying to taunt me! Leave me at once!\"");
	say();
	abort;
labelFunc0421_0611:
	goto labelFunc0421_061B;
labelFunc0421_0614:
	message("\"I ask thee again -- surrender those stockings to me!\"");
	say();
	goto labelFunc0421_0535;
labelFunc0421_061B:
	goto labelFunc0421_06B3;
labelFunc0421_061E:
	if (!(!gflags[0x013C])) goto labelFunc0421_06AC;
	message("\"I shall be frank with thee. I want the stockings to protect the honor of the woman I love. The stockings rightfully belong to my lover Columna, but they were stolen by the bandit Stefano. I neither know nor care how thou hast come into possession of them, but I must have them from thee.\"");
	say();
	message("\"As thou dost have something I want, then I am obliged to provide something to thee that thou couldst want.\"");
	say();
	message("\"I offer thee one of my spells in exchange for the stockings. If thou dost accept, then give them to me.\"");
	say();
labelFunc0421_0631:
	var000D = Func0955();
	if (!var000D) goto labelFunc0421_067B;
	var000E = UI_remove_party_items(0x0001, 0x02A5, 0xFE99, 0x0000, 0x0000);
	message("\"Ha! Now I have what I want and I did not have to give thee a thing! Thou art not dealing with a child here!\"");
	say();
	Func097F(0xFFDF, "@I have them!@", 0x0000);
	UI_set_schedule_type(0xFFDF, 0x0014);
	if (!var000E) goto labelFunc0421_0677;
	gflags[0x013B] = true;
labelFunc0421_0677:
	abort;
	goto labelFunc0421_06A9;
labelFunc0421_067B:
	if (!(!gflags[0x013C])) goto labelFunc0421_068E;
	message("\"Thou art as cold-hearted as any man I have ever met! I can no longer tolerate thy company.\"");
	say();
	gflags[0x013C] = true;
	abort;
	goto labelFunc0421_0693;
labelFunc0421_068E:
	message("\"Bah! Thou art only trying to taunt me! Leave me at once!\"");
	say();
	abort;
labelFunc0421_0693:
	Func097F(0xFFDF, "@Begone, foul knave.@", 0x0000);
	UI_set_schedule_type(0xFFDF, 0x000C);
labelFunc0421_06A9:
	goto labelFunc0421_06B3;
labelFunc0421_06AC:
	message("\"I ask thee again -- surrender those stockings to me!\"");
	say();
	goto labelFunc0421_0631;
labelFunc0421_06B3:
	case "help Fedabiblio" attend labelFunc0421_06D3:
	UI_remove_answer("help Fedabiblio");
	message("\"If thou dost think I will help thee, then the madness that hath seemingly infected the entire world hath also infected thy brain. I suggest thou dost have it removed.\"");
	say();
	Func097F(0xFFEF, "@Be gone!@", 0x0000);
	abort;
labelFunc0421_06D3:
	case "soul trapping" attend labelFunc0421_06F6:
	UI_remove_answer("soul trapping");
	message("\"So thou dost seek to learn the ancient art of imprisoning souls within gems? I can give this to thee, for a price -- but I warn thee, the outcome may not be what thou dost expect.\"");
	say();
	UI_add_answer(["ancient art", "price", "outcome"]);
labelFunc0421_06F6:
	case "ancient art", "ask" attend labelFunc0421_074F:
	UI_remove_answer(["ancient art", "ask"]);
	if (!gflags[0x0136]) goto labelFunc0421_0747;
	message("\"Knowledge shall be thine, Avatar. The secret is that souls can be imprisoned within gems. Only Worm Gems will do, and even these must first be enchanted with the spell which I give thee now.\"");
	say();
	gflags[0x0268] = true;
	message("\"On this scroll, thou shalt find the spell for creating Soul Prisms. Transcribe this to thy spellbook at the first opportunity, for I shall not give thee another!\"");
	say();
	gflags[0x00FF] = true;
	var000F = Func099B(0xFE9C, 0x0001, 0x02CB, 0x001B, 0x0000, 0x0000, true);
	UI_add_answer("Worm Gems");
	goto labelFunc0421_074F;
labelFunc0421_0747:
	message("\"Pay the price, the Philanderer's Friend, and I shall reward thee!\"");
	say();
	message("\"For now, I shall merely say that this spell was used by the ancient inhabitants of this land. They would remove their souls from their bodies, and place them within inanimate objects.\"");
	say();
labelFunc0421_074F:
	case "price" attend labelFunc0421_07AB:
	UI_remove_answer("price");
	if (!gflags[0x023D]) goto labelFunc0421_079B;
	if (!gflags[0x0136]) goto labelFunc0421_0790;
	if (!gflags[0x00FF]) goto labelFunc0421_0777;
	message("\"Why, I already gave thee my prize! What more dost thou expect?\"");
	say();
	goto labelFunc0421_078D;
labelFunc0421_0777:
	message("\"Then again, thou didst restore the wand to me -- and the Philanderer's Friend is a great prize...\"");
	say();
	message("\"Thou hast paid the price, I shall grant thee thy desires. Thou hast but to ask.\"");
	say();
	UI_remove_answer("ancient art");
	UI_add_answer("ask");
labelFunc0421_078D:
	goto labelFunc0421_0798;
labelFunc0421_0790:
	message("\"Thou hast something which I want very much, Avatar! I detect that thou hast come into contact with a magical artifact which was taken from me -- the Philanderer's Friend, a wand of mysterious powers.\"");
	say();
	message("\"Deliver the wand to me, and thou shalt have thy desires!\"");
	say();
labelFunc0421_0798:
	goto labelFunc0421_07AB;
labelFunc0421_079B:
	message("\"Sadly, thou hast nothing that I desire. I have no need for gold, and thou dost not know any spells which I crave...\"");
	say();
	message("\"Ah, but thou art a strong warrior! I have an idea.\"");
	say();
	message("\"An item was stolen from me, a wand which is great in the magic which it controls. Bring it to me, and I shall aid thee.\"");
	say();
	message("\"The wand is known as the Philanderer's Friend. I know not where it lies. Good luck, adventurer!\"");
	say();
labelFunc0421_07AB:
	case "outcome" attend labelFunc0421_07C2:
	UI_remove_answer("outcome");
	message("\"Thou art not the first to seek this secret from me, adventurer! That fat fool Batlin purchased it from me, too.\"");
	say();
	message("\"And I gave him this warning: The gems are not powerful enough to contain any soul of great power. Should they fail, the soul released shall be very angry...\"");
	say();
labelFunc0421_07C2:
	case "Worm Gems" attend labelFunc0421_07F9:
	UI_remove_answer("Worm Gems");
	message("\"Such gems are made, not found in nature. Seek out Ducio the Artisan, if he yet lives -- he fashions the gems for me, when I have need of them.\"");
	say();
	var0010 = Func097D(0xFE9B, 0x0001, 0x0326, 0xFE99, 0x0000);
	if (!((!gflags[0x00CE]) && var0010)) goto labelFunc0421_07F9;
	message("\"It is a pity that the gem upon thy sword is broken. It looks remarkably like the Worm Gems that Ducio fashions. Perhaps he can repair it for thee...\"");
	say();
labelFunc0421_07F9:
	case "magic wand" attend labelFunc0421_08AC:
	UI_remove_answer("magic wand");
	var0011 = UI_get_schedule_type(0xFFEF);
	if (!(!gflags[0x023D])) goto labelFunc0421_082A;
	if (!(var0011 == 0x000F)) goto labelFunc0421_0827;
	message("\"I no longer have the Philanderer's Friend, else I would certainly aid thee in helping the good Fedabiblio. It was stolen from me. I do not know for sure, but I suspect mine old enemy Vasculio of the crime.\"");
	say();
labelFunc0421_0827:
	goto labelFunc0421_08AC;
labelFunc0421_082A:
	if (!(!gflags[0x0136])) goto labelFunc0421_08AC;
	message("\"I perceive that thou hast the device stolen from me years ago. It is called the Philanderer's Friend -- I'm not sure why, but someday I shall understand its secrets.\"");
	say();
	if (!UI_remove_party_items(0x0001, 0x03A1, 0xFE99, 0xFE99, false)) goto labelFunc0421_08A8;
	message("\"Good! Thou hast brought it with thee -- and now I shall take it!\"");
	say();
	var0012 = UI_get_object_position(0xFE9C);
	UI_obj_sprite_effect(0xFE9C, 0x000D, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0013 = UI_add_cont_items(0xFFDF, 0x0001, 0x03A1, 0xFE99, 0xFE99, false);
	UI_set_schedule_type(0xFFDF, 0x0014);
	Func097F(0xFFDF, "@I have it!@", 0x0000);
	gflags[0x0136] = true;
	abort;
	goto labelFunc0421_08AC;
labelFunc0421_08A8:
	message("\"It is my rightful property and I shall have it back!\"");
	say();
labelFunc0421_08AC:
	case "bye" attend labelFunc0421_08D6:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@So long!@", 0x0000);
	Func097F(0xFFDF, "@Don't steal anything...@", 0x0002);
	Func08FF();
	goto labelFunc0421_08D9;
labelFunc0421_08D6:
	goto labelFunc0421_01AE;
labelFunc0421_08D9:
	endconv;
labelFunc0421_08DA:
	return;
}


