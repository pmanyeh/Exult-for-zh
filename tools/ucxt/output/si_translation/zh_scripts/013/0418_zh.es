#game "serpentisle"
// externs
extern var Func0953 0x953 ();
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func084B 0x84B ();
extern void Func08FF 0x8FF ();

void Func0418 object#(0x418) ()
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

	var0000 = UI_is_pc_female();
	var0001 = Func0953();
	var0002 = "Mundane";
	var0003 = Func097D(0xFE9B, 0x0001, 0x02A5, 0xFE99, 0x0000);
	if (!Func097D(0xFE9B, 0x0001, 0x0268, 0xFE99, 0x0010)) goto labelFunc0418_0041;
	var0004 = true;
labelFunc0418_0041:
	if (!gflags[0x00DB]) goto labelFunc0418_004D;
	var0002 = "Mage";
labelFunc0418_004D:
	var0005 = Func097D(0xFE9B, 0x0001, 0x034A, 0xFE99, 0x000F);
	var0006 = UI_part_of_day();
	if (!((var0006 > 0x0001) || (var0006 < 0x0006))) goto labelFunc0418_0084;
	var0006 = "day";
	goto labelFunc0418_008A;
labelFunc0418_0084:
	var0006 = "evening";
labelFunc0418_008A:
	if (!((event == 0x0007) && UI_get_item_flag(item, 0x001D))) goto labelFunc0418_00AD;
	var0007 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0329]);
labelFunc0418_00AD:
	if (!(event == 0x0001)) goto labelFunc0418_00E3;
	UI_item_say(0xFE9C, "Hello there.");
	0xFFE8->Func07D1();
	Func097F(0xFFE8, (("@Greetings, " + var0002) + "."), 0x0002);
	UI_set_schedule_type(0xFFE8, 0x0003);
labelFunc0418_00E3:
	if (!(event == 0x0009)) goto labelFunc0418_05F9;
	UI_run_schedule(0xFFE8);
	UI_clear_item_say(0xFFE8);
	UI_show_npc_face0(0xFFE8, 0x0000);
	if (!(!gflags[0x00DB])) goto labelFunc0418_011B;
	message("\"I am sorry, but thou hast mistaken me for someone else. Thou couldst not possibly be speaking to me, as I am a Mage... and thou art merely Mundane.\"");
	say();
	Func097F(0xFFE8, "@Such impudence!@", 0x0000);
	abort;
labelFunc0418_011B:
	if (!(gflags[0x011E] == true)) goto labelFunc0418_0134;
	message("\"I shall never speak to thee again!\"");
	say();
	Func097F(0xFFE8, "@Never!@", 0x0000);
	abort;
labelFunc0418_0134:
	var0008 = UI_get_item_flag(0xFFE8, 0x001C);
	if (!(var0008 == false)) goto labelFunc0418_016B;
	UI_set_item_flag(0xFFE8, 0x001C);
	message("\"I do not believe that we have met. 'Tis so nice to make the acquaintance of a new, young Mage.\"");
	say();
	message("\"I am Melino, husband of the Green Enchantress.\"");
	say();
	UI_add_answer(["new Mage", "Green Enchantress"]);
	goto labelFunc0418_016F;
labelFunc0418_016B:
	message("\"Welcome, Mage. I am pleased to see thee again.\"");
	say();
labelFunc0418_016F:
	if (!(gflags[0x00DF] && (!gflags[0x00EF]))) goto labelFunc0418_0181;
	UI_add_answer("Mosh");
labelFunc0418_0181:
	if (!(var0004 && (!gflags[0x0297]))) goto labelFunc0418_0193;
	UI_add_answer("wine");
labelFunc0418_0193:
	if (!(gflags[0x0110] && (!gflags[0x028F]))) goto labelFunc0418_01A5;
	UI_add_answer("apparatus");
labelFunc0418_01A5:
	if (!var0005) goto labelFunc0418_01B2;
	UI_add_answer("Stoneheart");
labelFunc0418_01B2:
	if (!var0003) goto labelFunc0418_01BF;
	UI_add_answer("Moonsilk stockings");
labelFunc0418_01BF:
	if (!(UI_get_schedule_type(0xFFE8) == 0x000C)) goto labelFunc0418_01D4;
	UI_add_answer("spells");
labelFunc0418_01D4:
	UI_add_answer(["bye"]);
labelFunc0418_01DE:
	converse attend labelFunc0418_05F8;
	case "new Mage" attend labelFunc0418_0210:
	UI_remove_answer("new Mage");
	message("\"Of course thou art new here! I know all other Mages in Moonshade... And I have never seen thee before.\"");
	say();
	message("\"And thou hast thy spellbook, so thou art not a Mundane. Therefore, thou art a Mage.\"");
	say();
	message("\"By careful reasoning then, thou art a new Mage!\"");
	say();
	message("\"But I cannot recall having seen thee in Fedabiblio's training... But then I do not usually take much note of the novices.\"");
	say();
	UI_add_answer(["other Mages", "Mundane", "Fedabiblio"]);
labelFunc0418_0210:
	case "other Mages" attend labelFunc0418_023E:
	UI_remove_answer("other Mages");
	if (!(!gflags[0x00E2])) goto labelFunc0418_022D;
	message("\"While I am far too busy to sit on the Council, I am well-connected, nonetheless. Many Mages come to consult me during their research.\"");
	say();
	goto labelFunc0418_0231;
labelFunc0418_022D:
	message("\"I have always been well-connected -- even before I took a seat on the Council. Many Mages come to consult me during their research.\"");
	say();
labelFunc0418_0231:
	UI_add_answer(["Council", "research"]);
labelFunc0418_023E:
	case "Council" attend labelFunc0418_028F:
	UI_remove_answer("Council");
	UI_push_answers();
	UI_add_answer("change subject");
	if (!(!gflags[0x00E2])) goto labelFunc0418_027A;
	message("\"The Council of Mages is the ruling body of Moonshade. To be asked to take a seat on the Council is a great honor, but I had to turn it down...\"");
	say();
	message("\"The current members are Mortegro, Gustacio, and Filbercio... of course.\"");
	say();
	UI_add_answer(["Mortegro", "Gustacio", "Filbercio"]);
	goto labelFunc0418_028F;
labelFunc0418_027A:
	message("\"The Council of Mages is the ruling body of Moonshade. I did not wish to accept a seat on the Council, but Columna persuaded me...\"");
	say();
	message("\"The other members are Gustacio and Filbercio, of course...\"");
	say();
	UI_add_answer(["Gustacio", "Filbercio"]);
labelFunc0418_028F:
	case "Mortegro" attend labelFunc0418_02CC:
	UI_remove_answer("Mortegro");
	if (!(!gflags[0x00E2])) goto labelFunc0418_02B7;
	message("\"Mortegro is the local necromancer. He specializes in speaking with the dead, not raising them. Which is just as well, as the Council frowns on such exercises.\"");
	say();
	message("\"Why raise the dead for servants when thou hast Mundanes for servants, after all? And we have no need of another Vasculio, that is clear.\"");
	say();
	UI_add_answer("Vasculio");
	goto labelFunc0418_02CC;
labelFunc0418_02B7:
	message("\"Mortegro was the local necromancer. He specialized in speaking with the dead, not raising them...\"");
	say();
	message("\"Or at least that is what we all thought until he disappeared. Perhaps we have been harboring another Vasculio all this time.\"");
	say();
	UI_add_answer(["disappeared", "Vasculio"]);
labelFunc0418_02CC:
	case "Vasculio" attend labelFunc0418_02E7:
	UI_remove_answer("Vasculio");
	message("\"Do not speak his name aloud again! I am not superstitious, mind thee... But there are those that say that calling a spirit three times by name will summon it. I would rather not find out, if thou dost not mind.\"");
	say();
	message("\"The unnamed one was an Adept who hungered for power at any cost. When he could not gain enough to suit him by normal means... he resorted to foul deeds to obtain more.\"");
	say();
	message("\"Though he was put to death for his crimes, he broke free from the grave... vowing vengeance upon us all. That is why the Council carefully monitors all research to this day.\"");
	say();
labelFunc0418_02E7:
	case "disappeared" attend labelFunc0418_0305:
	UI_remove_answer("disappeared");
	message("\"Gone! In a trice! No word to anyone...\"");
	say();
	message("\"Gustacio is mightily peeved, I can tell thee. Mortegro was helping him with an experiment, and Gustacio cannot complete his work alone.\"");
	say();
	UI_add_answer("experiment");
labelFunc0418_0305:
	case "experiment" attend labelFunc0418_0318:
	UI_remove_answer("experiment");
	message("\"I believe that the experiment had something to do with the teleport storms. Thou wouldst have to speak to Gustacio for more information, though.\"");
	say();
labelFunc0418_0318:
	case "Gustacio" attend labelFunc0418_032B:
	UI_remove_answer("Gustacio");
	message("\"Gustacio's specialty lies in manipulating the weather. He spends most of his days sitting and staring at the sky... I can never tell if he is collecting data or catching a few winks!\"");
	say();
labelFunc0418_032B:
	case "Filbercio" attend labelFunc0418_034B:
	UI_remove_answer("Filbercio");
	message("\"Filbercio is the MageLord, which is probably the safest place to keep him. Thou mayest think that doth sound ridiculous, but 'tis one of the only ways we Mages can be assured of what he is doing. As long as Filbercio thinks he doth have power, he is too busy using it to satisfy his hungers to be causing too much trouble. On the other hand, if Filbercio did not think he had power, he would devote all his being to ruining everyone else to procure power.\"");
	say();
	UI_add_answer(["hungers", "trouble"]);
labelFunc0418_034B:
	case "hungers" attend labelFunc0418_035E:
	UI_remove_answer("hungers");
	message("\"The only polite thing I can think of to say is that Filbercio enjoys the company of women... And that he tires of his pursuits soon after he hath won them.\"");
	say();
labelFunc0418_035E:
	case "trouble" attend labelFunc0418_0371:
	UI_remove_answer("trouble");
	message("\"Filbercio's true forte lies in playing all sides against each other. He is very subtle in creating the right illusion in which to trap his prey... It always looks enticing, until it flares in thy face. And usually very publicly, too.\"");
	say();
labelFunc0418_0371:
	case "research" attend labelFunc0418_039E:
	UI_remove_answer("research");
	UI_push_answers();
	UI_add_answer("change subject");
	message("\"I seem to have a talent for discovering forgotten references within the archives. Such information can prove to be the key to a new spell or new aspect of an existing spell.\"");
	say();
	message("\"For instance, Torrissio hath been paying me outrageous sums to deliver a list of reagents for a certain set of spells. I will not rest until I can justify his faith in me...\"");
	say();
	message("\"Luckily, Columna hath been very understanding of the time I devote to my work.\"");
	say();
	UI_add_answer("Torrissio");
labelFunc0418_039E:
	case "Torrissio" attend labelFunc0418_03C5:
	UI_remove_answer("Torrissio");
	message("\"Torrissio is a very talented young Mage. His specialty is the creation of the automatons that serve as servants and guards for our mansions.\"");
	say();
	message("\"He hath a fine eye for detail, even for such menial creatures as servants. Thou mayest see his best work at the Blue Boar -- where he lets Rocco display Petra for him.\"");
	say();
	UI_add_answer(["Blue Boar", "Rocco", "Petra"]);
labelFunc0418_03C5:
	case "Blue Boar" attend labelFunc0418_03D8:
	UI_remove_answer("Blue Boar");
	message("\"The Blue Boar is the only eating establishment in Moonshade. Therefore, it caters to both Mage and Mundane, unfortunately. Thou mayest meet many other Mages there, if thou art patient enough.\"");
	say();
labelFunc0418_03D8:
	case "Rocco" attend labelFunc0418_03EF:
	UI_remove_answer("Rocco");
	message("\"Rocco is the Mundane innkeeper of the Blue Boar. He is a bit of a surly lout. But then I do not go there for his conversation... only his food.\"");
	say();
	message("\"His business hath certainly benefitted from Petra's skills. Petra is one of the finest cooks in the city.\"");
	say();
labelFunc0418_03EF:
	case "Petra" attend labelFunc0418_0406:
	UI_remove_answer("Petra");
	message("\"Petra is one of Torrissio's creations. She is very pretty, for an automaton, and cooks very well. Sometimes I think that Torrissio is as much an artisan as a Mage.\"");
	say();
	message("\"I think that Petra's presence at the Blue Boar doth do much for Torrissio's reputation...\"");
	say();
labelFunc0418_0406:
	case "Mundane" attend labelFunc0418_0428:
	UI_remove_answer("Mundane");
	message("\"One who doth not possess magic -- that is a Mundane. Without magic, man is little more than a slightly evolved animal. Suited only to be a beast of burden for those whose powers are clearly superior.\"");
	say();
	message("\"I know nothing about them, nor do I care to. What use is it to note such furtive little lives that pass so quickly and with so little note?\"");
	say();
	message("\"Only from time to time hath one caught mine eye... Like that striking young woman that came through here a while ago.\"");
	say();
	UI_add_answer("young woman");
labelFunc0418_0428:
	case "young woman" attend labelFunc0418_0443:
	UI_remove_answer("young woman");
	message("\"To be fair, Columna noticed her first... But then my wife always hath had a fancy for music. And this young woman was singing some sort of ballad about her beloved husband.\"");
	say();
	message("\"I found it a bit tedious, but Columna was enchanted... so to speak. However, when we spoke to her, she seemed intelligent enough for a Mundane.\"");
	say();
	message("\"She was asking all sorts of questions about history and such like. -- Her name? Let me see... I believe it was Gwenno. -- Columna directed her to Fedabiblio.\"");
	say();
labelFunc0418_0443:
	case "Fedabiblio" attend labelFunc0418_046B:
	UI_remove_answer("Fedabiblio");
	message("\"Fedabiblio is the instructor of all novice Mages. He provides a solid foundation for the principles of magic. And then he passes the students on to the Adepts for more specialized training.\"");
	say();
	message("\"Of course, at one time all Mages were taught by the Mad Mage. But not any more... Though the tradition of stealing something from him to prove that thou art indeed worthy of a title above novice remains.\"");
	say();
	message("\"I doubt that he doth have any Serpent Teeth left to steal, so thou wilt have to make do with something else I suspect.\"");
	say();
	UI_add_answer(["Mad Mage", "Serpent Teeth"]);
labelFunc0418_046B:
	case "Mad Mage" attend labelFunc0418_0482:
	UI_remove_answer("Mad Mage");
	message("\"I suppose that it would be polite to refer to him by his name... Erstam. But I am an Adept, and have long since outstripped anything he had to teach me.\"");
	say();
	message("\"He dreams of becoming a god, and refuses to see his students as his equal. In truth, the Mad Mage is a doddering old man squatting on his island... Afraid of the students that surpassed him and the long march of time that his spells have cheated.\"");
	say();
labelFunc0418_0482:
	case "Serpent Teeth" attend labelFunc0418_049D:
	UI_remove_answer("Serpent Teeth");
	message("\"The Mad Mage had a peculiar collection of Serpent's Teeth. Nearly every Adept in the city doth have one that they stole from the old man. It was a juvenile prank I suppose, like tweaking a dragon's beard. But it hath become a tradition, nonetheless.\"");
	say();
	message("\"I would show thee one, so that thou wouldst know what to take, but I am afraid that I seem to have lost mine. I cannot recall when I last saw it...\"");
	say();
	message("\"Perhaps Columna would show thee her Serpent Tooth. I know that she possesses it.\"");
	say();
labelFunc0418_049D:
	case "Green Enchantress" attend labelFunc0418_04BD:
	UI_remove_answer("Green Enchantress");
	message("\"Thou dost not know the Green Enchantress? Ah, perhaps thou wouldst recognize her by the spell she is famous for... Columna's Intuition.\"");
	say();
	UI_add_answer(["famous", "Columna's Intuition"]);
labelFunc0418_04BD:
	case "famous" attend labelFunc0418_04D0:
	UI_remove_answer("famous");
	message("\"No other Mage doth have a spell named after them... Of course she is famous! Why everyone agrees how remarkably useful it is!\"");
	say();
labelFunc0418_04D0:
	case "Columna's Intuition" attend labelFunc0418_04E7:
	UI_remove_answer("Columna's Intuition");
	message("\"Columna is the Green Enchantress' name. And thou wouldst be amazed by her spell...\"");
	say();
	message("\"It tells thee of anything hidden and potentially dangerous in the area. It doth not guarantee that what it finds is dangerous, but it doth warn thee.\"");
	say();
labelFunc0418_04E7:
	case "Mosh" attend labelFunc0418_04FE:
	UI_remove_answer("Mosh");
	message("\"She said terrible things about my wife! Terrible! All lies! Lies!\"");
	say();
	var0009 = true;
labelFunc0418_04FE:
	case "wine" attend labelFunc0418_0515:
	UI_remove_answer("wine");
	message("\"Why, that is wine from the Rangers' winery! Their magical winepress always leaves a distinctive flavor... Quite a tingle!\"");
	say();
	gflags[0x0297] = true;
labelFunc0418_0515:
	case "apparatus" attend labelFunc0418_052C:
	UI_remove_answer("apparatus");
	message("\"Any Mage could tell thee that this is a piece of lab equipment!\"");
	say();
	message("\"I am missing nothing... 'tis not mine. Thou wilt have to ask others about it.\"");
	say();
labelFunc0418_052C:
	case "slippers" attend labelFunc0418_0547:
	UI_remove_answer("slippers");
	message("\"What dost thou take me for, a Mundane?!\"");
	say();
	message("\"One merely has to glance at these pitiful things to know that they would belong to no self-respecting Mage! Ask a Mundane or a shopkeeper, indeed!\"");
	say();
	gflags[0x0115] = true;
labelFunc0418_0547:
	case "Stoneheart" attend labelFunc0418_056B:
	UI_remove_answer("Stoneheart");
	message("\"I will tell thee that possession of Stoneheart is forbidden in Moonshade. I have no idea where thou didst come by it, nor do I want to know.\"");
	say();
	message("\"Thou canst find other spells without resorting to those that are restricted.\"");
	say();
	UI_add_answer(["spells", "restricted"]);
labelFunc0418_056B:
	case "spells" attend labelFunc0418_057A:
	message("\"I could sell thee several spells, Mage...\"");
	say();
	Func084B();
labelFunc0418_057A:
	case "restricted" attend labelFunc0418_058D:
	UI_remove_answer("restricted");
	message("\"'Tis true that there are spells that require Stoneheart for a reagent, but they are very dangerous. Only a select few Mages are allowed such knowledge... So that it will not be lost.\"");
	say();
labelFunc0418_058D:
	case "Moonsilk stockings" attend labelFunc0418_05BB:
	UI_remove_answer("Moonsilk stockings");
	message("\"Those are my wife's stockings! Oh, vile fiend! To think that thou wouldst flaunt Columna's indiscretion in my face! After I trusted thee!\"");
	say();
	message("\"Out! OUT! Take thyself from my sight and never return!\"");
	say();
	gflags[0x011E] = true;
	UI_remove_npc_face0();
	Func097F(0xFFE8, "@Never return!@", 0x0002);
	goto labelFunc0418_05F8;
labelFunc0418_05BB:
	case "change subject" attend labelFunc0418_05CB:
	message("\"Certainly...\"");
	say();
	UI_pop_answers();
labelFunc0418_05CB:
	case "bye" attend labelFunc0418_05F5:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@I must be leaving...@", 0x0000);
	Func097F(0xFFE8, "@Farewell!@", 0x0002);
	Func08FF();
	goto labelFunc0418_05F8;
labelFunc0418_05F5:
	goto labelFunc0418_01DE;
labelFunc0418_05F8:
	endconv;
labelFunc0418_05F9:
	return;
}


