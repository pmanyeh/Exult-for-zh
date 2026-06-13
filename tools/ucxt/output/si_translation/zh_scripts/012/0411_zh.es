#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func0942 0x942 (var var0000);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func098C 0x98C ();
extern var Func099F 0x99F (var var0000, var var0001, var var0002);
extern void Func08FF 0x8FF ();

void Func0411 object#(0x411) ()
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

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	var0003 = UI_part_of_day();
	if (!((var0003 > 0x0001) || (var0003 < 0x0006))) goto labelFunc0411_0035;
	var0003 = "day";
	goto labelFunc0411_003B;
labelFunc0411_0035:
	var0003 = "evening";
labelFunc0411_003B:
	if (!((event == 0x0007) && UI_get_item_flag(item, 0x001D))) goto labelFunc0411_005E;
	var0004 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0329]);
labelFunc0411_005E:
	if (!(event == 0x0001)) goto labelFunc0411_008E;
	UI_item_say(0xFE9C, (("@Good " + var0003) + "!@"));
	Func097F(0xFFEF, "@Hush...@", 0x0002);
	UI_set_schedule_type(0xFFEF, 0x0003);
labelFunc0411_008E:
	if (!(event == 0x0009)) goto labelFunc0411_0B31;
	UI_run_schedule(0xFFEF);
	UI_clear_item_say(0xFFEF);
	UI_show_npc_face0(0xFFEF, 0x0000);
	var0005 = UI_get_item_flag(0xFFEF, 0x001C);
	if (!(gflags[0x00F0] && (!gflags[0x0128]))) goto labelFunc0411_00DD;
	message("\"I cannot give thee what thou dost desire until thou hast gazed into my crystal ball, ");
	message(var0000);
	message(". Come back when thou hast done so.\"");
	say();
	Func097F(0xFFEF, "@The crystal ball!@", 0x0000);
	abort;
labelFunc0411_00DD:
	if (!(gflags[0x00F0] && (gflags[0x0128] && (!gflags[0x011D])))) goto labelFunc0411_011B;
	if (!gflags[0x00F2]) goto labelFunc0411_0106;
	message("\"Did I not tell thee to speak with Gustacio?\"");
	say();
	Func097F(0xFFEF, "@Tell him the news.@", 0x0000);
	abort;
	goto labelFunc0411_011B;
labelFunc0411_0106:
	message("\"At last, all is made clear! Tell good Gustacio that Edrin the missing brother is actually Ale the Bird! He will know what to do from there...\"");
	say();
	gflags[0x00F2] = true;
	Func097F(0xFFEF, "@Speak to Gustacio...@", 0x0000);
	abort;
labelFunc0411_011B:
	if (!gflags[0x0004]) goto labelFunc0411_0150;
	if (!gflags[0x00F6]) goto labelFunc0411_0134;
	message("\"So good to see that the Anarch hath not yet slain thee, ");
	message(var0000);
	message(". How may I be of aid?\"");
	say();
	goto labelFunc0411_0138;
labelFunc0411_0134:
	message("\"A thousand thanks! I had feared that I would remain an adornment of this place forever, thanks to Shamino the Anarch.\"");
	say();
labelFunc0411_0138:
	UI_add_answer("Shamino the Anarch");
	if (!(!gflags[0x00F6])) goto labelFunc0411_014D;
	UI_add_answer("gratitude");
labelFunc0411_014D:
	goto labelFunc0411_017A;
labelFunc0411_0150:
	if (!(var0005 == false)) goto labelFunc0411_0169;
	UI_set_item_flag(0xFFEF, 0x001C);
	message("\"Thou must be a seeker after knowledge. I am the Mage Fedabiblio, and I serve as the Magister of Moonshade.\"");
	say();
	goto labelFunc0411_016D;
labelFunc0411_0169:
	message("\"Thou hast a voracious appetite for knowledge. What dost thou desire to learn?\"");
	say();
labelFunc0411_016D:
	UI_add_answer(["Magister", "Moonshade"]);
labelFunc0411_017A:
	if (!(!gflags[0x00DB])) goto labelFunc0411_0188;
	UI_add_answer("spellbook");
labelFunc0411_0188:
	if (!(gflags[0x00E4] && (!gflags[0x0128]))) goto labelFunc0411_019A;
	UI_add_answer("Gustacio's experiment");
labelFunc0411_019A:
	if (!(gflags[0x00EA] && (!UI_get_item_flag(0xFFE1, 0x0004)))) goto labelFunc0411_01B3;
	UI_add_answer("kidnap");
labelFunc0411_01B3:
	if (!((gflags[0x010B] && (!gflags[0x028C])) || ((gflags[0x010C] && (!gflags[0x0295])) || ((gflags[0x010E] && (!gflags[0x029A])) || ((gflags[0x0110] && (!gflags[0x028F])) || ((gflags[0x0112] && (!gflags[0x0290])) || (gflags[0x0114] && (!gflags[0x0293])))))))) goto labelFunc0411_01F2;
	UI_add_answer("information");
labelFunc0411_01F2:
	UI_add_answer(["bye"]);
labelFunc0411_01FC:
	converse attend labelFunc0411_0B30;
	case "kidnap" attend labelFunc0411_0238:
	UI_remove_answer("kidnap");
	if (!gflags[0x00EB]) goto labelFunc0411_021B;
	message("\"Most ominous... Again, I would direct thee to the MageLord. He is a man of low intellect and great cunning. No doubt he can aid thee.\"");
	say();
	goto labelFunc0411_0238;
labelFunc0411_021B:
	if (!gflags[0x0141]) goto labelFunc0411_022C;
	message("\"Do not waste thy time with the Rangers -- this is a case for Mages, most obviously!\"");
	say();
	message("\"I direct thee to go immediately to MageLord Filbercio with this matter.\"");
	say();
	goto labelFunc0411_0238;
labelFunc0411_022C:
	message("\"Thy friend hath been taken! By means magical! 'Tis an offense to the Council...\"");
	say();
	message("\"Take thy case directly to the MageLord -- he shall aid thee!\"");
	say();
	gflags[0x0141] = true;
labelFunc0411_0238:
	case "Shamino the Anarch" attend labelFunc0411_0274:
	UI_remove_answer("Shamino the Anarch");
	message("\"The first thing that thy monstrous companion did when he came into town was oust the MageLord and the Council of Mages. When they resisted his edicts, Shamino killed them!\"");
	say();
	message("\"Thou wouldst not believe it, ");
	message(var0000);
	message("! The Anarch simply deflected all their spells... They had no effect at all.\"");
	say();
	message("\"The Rangers became his instruments of chaos... Anything was allowed, as long as one held a 'permit' from the Anarch.\"");
	say();
	message("\"I do not know how many of us are left now. It seems that most of the manors are abandoned...\"");
	say();
	UI_push_answers();
	UI_add_answer(["anything", "left", "abandoned", "change subject"]);
labelFunc0411_0274:
	case "change subject" attend labelFunc0411_0284:
	UI_pop_answers();
	message("\"Ah, thy mind is questing again! What shall we speak of now?\"");
	say();
labelFunc0411_0284:
	case "anything" attend labelFunc0411_02C7:
	UI_remove_answer("anything");
	message("\"Many of the Mages fell to the Anarch's wild justice. Others fell to the unorthodox magic of their fellow Mages. And I found myself in the lamentable position thou didst find me in for NOT using Death spells!\"");
	say();
	if (!(!gflags[0x0100])) goto labelFunc0411_02C7;
	message("\"I tried to save Captain Hawk from the Anarch, but my powers were not sufficient.\"");
	say();
	message("\"As he lay dying, Hawk gave me this key. He said that it unlocked his sea chest at the Blue Boar Inn, and that the contents might be helpful someday.\"");
	say();
	message("\"As I think the key might be useful to thee, I am giving it to thee.\"");
	say();
	var0004 = Func099B(0xFE9C, 0x0001, 0x0281, 0x00BC, 0x0006, 0x0000, true);
	gflags[0x0100] = true;
labelFunc0411_02C7:
	case "abandoned" attend labelFunc0411_02EA:
	UI_remove_answer("abandoned");
	message("\"It might not seem virtuous, but I would suggest that thou shouldst explore the empty manors for magical scrolls and other items which might be of use in thy quest.\"");
	say();
	message("\"For instance, thou couldst perchance assemble a near- complete set of the fabled Serpent Teeth -- \"");
	say();
	message("\"It was a coup to steal such an artifact from old Erstam, but now the trophies lie abandoned in the mansions...\"");
	say();
	message("\"I know not what the powers of the Teeth might be, but they might reveal their secret to thee.\"");
	say();
	message("\"But beware of the automatons!\"");
	say();
labelFunc0411_02EA:
	case "left" attend labelFunc0411_0301:
	UI_remove_answer("left");
	message("\"The last I knew, before I earned the Anarch's ire, Stefano was alive... though he was being pursued by some fell creature.\"");
	say();
	message("\"Ducio yet lived. As did Torrissio. And I can only pray that Andrio and Freli escaped the notice of that monster!\"");
	say();
labelFunc0411_0301:
	case "Magister" attend labelFunc0411_0330:
	UI_remove_answer("Magister");
	message("\"Thou dost not know what a Magister does? The Magister is the director of the Seminarium -- 'tis the only School for Mages in the entire land.\"");
	say();
	message("\"One of my functions is to find gifted children for this school. When they are located, I bring them to the school.\"");
	say();
	message("\"I was appointed as Magister for life.\"");
	say();
	UI_push_answers();
	UI_add_answer(["Seminarium", "children", "change subject"]);
labelFunc0411_0330:
	case "children" attend labelFunc0411_0358:
	UI_remove_answer("children");
	message("\"A young, untrained Mage can be quite dangerous! Therefore, these children must be brought to the Seminarium -- for their own safety!\"");
	say();
	message("\"For instance, take young Freli. His father was a shopkeeper. What could a merchant teach his son about magical powers!\"");
	say();
	message("\"Taking care of my students is a tiring but fulfilling duty. Young Freli shows much promise, and Andrio is almost ready to graduate.\"");
	say();
	UI_add_answer(["Andrio", "Freli"]);
labelFunc0411_0358:
	case "Seminarium" attend labelFunc0411_037D:
	UI_remove_answer("Seminarium");
	message("\"The Seminarium is unique in all the land, for all Mages are welcome to come here and study our records concerning spell research and magical activity.\"");
	say();
	message("\"Any Mage can study here in safety, knowing that this place is a sanctuary from violence.\"");
	say();
	message("\"Passing travellers also stop here to access our library.\"");
	say();
	UI_add_answer(["travellers"]);
labelFunc0411_037D:
	case "Andrio" attend labelFunc0411_0390:
	UI_remove_answer("Andrio");
	message("\"Andrio hath quite a bit of youthful enthusiasm, and I find that most refreshing, but I do wish that he would use a bit more caution in his experiments!\"");
	say();
labelFunc0411_0390:
	case "Freli" attend labelFunc0411_03A3:
	UI_remove_answer("Freli");
	message("\"I must confess that Freli is my favorite student. He is most brilliant, but the unfortunate thing is that he knows this. Sometimes I feel that he is simply too smart for his own good.\"");
	say();
labelFunc0411_03A3:
	case "travellers" attend labelFunc0411_03BE:
	UI_remove_answer("travellers");
	message("\"Thou art not the first to be attracted to our facilities! In recent days, two visitors are memorable.\"");
	say();
	message("\"First, there was the scholar Gwenno. We could not help her much, as her interest was in historical matters. I suggested that she consult the library on Monk Isle.\"");
	say();
	message("\"Less agreeable was the visit of the Mage Batlin. He appeared to be most interested in the ancient inhabitants of this land, the Ophidians. Indeed, one might say that he was obsessed.\"");
	say();
labelFunc0411_03BE:
	case "Moonshade" attend labelFunc0411_03EB:
	UI_remove_answer("Moonshade");
	message("\"Since thou art a visitor, I will explain a few things to thee. Moonshade is a city of Mages and for Mages. It is ruled by the Adepts, and served by the lesser Mages. There is a lower class -- the Mundanes. But some of them are skilled as artisans.\"");
	say();
	UI_push_answers();
	UI_add_answer(["Adepts", "lesser Mages", "artisans", "Mundanes", "change subject"]);
labelFunc0411_03EB:
	case "Adepts" attend labelFunc0411_045D:
	UI_remove_answer("Adepts");
	message("\"The three Adepts are the most powerful wizards in the city. They compose the Council of Mages, which governs the city.\"");
	say();
	message("\"One of the Adepts serves as MageLord. Currently, Filbercio rules as Lord of Moonshade.\"");
	say();
	UI_add_answer("Filbercio");
	if (!UI_get_item_flag(0xFFE1, 0x0004)) goto labelFunc0411_044C;
	if (!gflags[0x00E2]) goto labelFunc0411_0434;
	message("\"All is in an uproar, with Rotoluncia dead and her replacement -- the Necromancer Mortegro -- missing.\"");
	say();
	message("\"Gustacio hath asked that I join the Council in this troubled time, and I have done so.\"");
	say();
	UI_add_answer(["Gustacio", "missing?"]);
	goto labelFunc0411_0449;
labelFunc0411_0434:
	message("\"Rotoluncia was on the Council, but her recent death hath made a change necessary. Therefore, Mortegro the Necromancer now holds her former position.\"");
	say();
	message("\"Gustacio remains on the Council, as he is second in power only to Filbercio.\"");
	say();
	UI_add_answer(["Gustacio", "Mortegro"]);
labelFunc0411_0449:
	goto labelFunc0411_045D;
labelFunc0411_044C:
	message("\"The other two Adepts are Gustacio the Green Mage, and the Red Sorceress, Rotoluncia.\"");
	say();
	UI_add_answer(["Gustacio", "Rotoluncia"]);
labelFunc0411_045D:
	case "Filbercio" attend labelFunc0411_0484:
	UI_remove_answer("Filbercio");
	message("\"He comes from a long line of Mages. Filbercio is well-respected and is known as a shrewd administrator of city affairs. In private, though, it is said that he is something of a womanizer.\"");
	say();
	UI_push_answers();
	UI_add_answer(["politics", "womanizer", "nothing more"]);
labelFunc0411_0484:
	case "politics" attend labelFunc0411_0497:
	UI_remove_answer("politics");
	message("\"When dealing with magic in this city, everything in this city is political. And when dealing with politics, Filbercio is the master of the game. I dare say, he would be a force to be reckoned with, even if his actual magical skills alone were not good enough to make him the MageLord of Moonshade.\"");
	say();
labelFunc0411_0497:
	case "womanizer" attend labelFunc0411_04AA:
	UI_remove_answer("womanizer");
	message("\"If Filbercio doth have a flaw, it is that he can be distracted by a pretty face. It doth not hurt if that face belongs to a woman who is also a powerful Mage. The trouble is that it doth not deter him if that woman is already betrothed to another! Oh, perhaps I have said too much...\"");
	say();
labelFunc0411_04AA:
	case "Gustacio" attend labelFunc0411_04C1:
	UI_remove_answer("Gustacio");
	message("\"He is Filbercio's chief rival for the position of MageLord. Gustacio is extremely hard-working and devout in his studies and practices of the magical arts. He is a respected citizen, although there are those who do not like him -- he tends to have a rather severe personality.\"");
	say();
	message("\"Now, Gustacio hath thrown himself into his studies of the phenomenon of the teleport storms. It hath become his obsession.\"");
	say();
labelFunc0411_04C1:
	case "Rotoluncia" attend labelFunc0411_04D4:
	UI_remove_answer("Rotoluncia");
	message("\"Trust me, she is someone thou dost not wish to cross.\"");
	say();
labelFunc0411_04D4:
	case "Mortegro" attend labelFunc0411_04EB:
	UI_remove_answer("Mortegro");
	message("\"Mortegro, master of death magic. Quite often he is dismissed as having the least political influence, but it is a mistake to underestimate him. He is a highly-skilled diplomat. After all, he hath remained on close personal speaking terms with the dead for all these years.\"");
	say();
	message("\"He holds seances regularly. I am certain he will invite thee to one, sooner or later.\"");
	say();
labelFunc0411_04EB:
	case "missing?" attend labelFunc0411_0506:
	UI_remove_answer("missing?");
	message("\"Indeed, Mortegro hath gone missing! It is said that he chose to take a stroll during one of the magical storms...\"");
	say();
	message("\"Whilst making his observations of the storm, the Necromancer was struck by lightning -- and disappeared.\"");
	say();
	message("\"It would be a shame if he were dead, for only he knows the secrets of speaking with the souls of the dead.\"");
	say();
labelFunc0411_0506:
	case "lesser Mages" attend labelFunc0411_0519:
	UI_remove_answer("lesser Mages");
	message("\"These are citizens who have pursued some sort of magical education. Although they know a few spells, they were not able to become Adepts. Most become Rangers or Apothecaries.\"");
	say();
labelFunc0411_0519:
	case "artisans" attend labelFunc0411_052C:
	UI_remove_answer("artisans");
	message("\"These are basically Mundanes who possess some skill that is valued in the society of Mages. Artists, writers, musicians, metalsmiths... That sort.\"");
	say();
labelFunc0411_052C:
	case "Mundanes" attend labelFunc0411_0543:
	UI_remove_answer("Mundanes");
	message("\"These poor souls live in a dark little world where magic is merely another powerful natural force that affects them, which they desperately try to adjust to or withstand.\"");
	say();
	message("\"Most of the Mundanes born here eventually leave. They settle in Fawn or Monitor, and this is better for them.\"");
	say();
labelFunc0411_0543:
	case "information" attend labelFunc0411_0573:
	UI_remove_answer("information");
	message("\"In what art thou interested?\"");
	say();
	UI_push_answers();
	var0006 = 0x0001;
	UI_add_answer(["people", "places", "strange objects", "nothing more"]);
labelFunc0411_0573:
	case "people" attend labelFunc0411_0593:
	UI_remove_answer("people");
	message("\"Thou hast mistaken me for a common gossip.\"");
	say();
	Func097F(0xFFEF, "@Be gone with thee!@", 0x0000);
	abort;
labelFunc0411_0593:
	case "places" attend labelFunc0411_05B3:
	UI_remove_answer("places");
	message("\"There are many strange places that one may explore in Moonshade. To the south of the city are ancient catacombs. Somewhere within those tunnels is a way leading to a dungeon known only as Furnace.\"");
	say();
	UI_add_answer(["catacombs", "Furnace"]);
labelFunc0411_05B3:
	case "catacombs" attend labelFunc0411_05C6:
	UI_remove_answer("catacombs");
	message("\"The catacombs were once occupied by the Rangers, until the water level began to rise. The Rangers built pumps to drain the water, but then a strange breed of rodent began to infest the catacombs. The creatures are said to be large vicious rats that have fangs as big as daggers. Needless to say, the catacombs were shortly abandoned.\"");
	say();
labelFunc0411_05C6:
	case "Furnace" attend labelFunc0411_05D9:
	UI_remove_answer("Furnace");
	message("\"I myself would not go there. It is said that the heat there is so intense that it is lethal.\"");
	say();
labelFunc0411_05D9:
	case "strange objects" attend labelFunc0411_0654:
	message("\"Bucia the Shopkeeper hath sent thee to me! And what did she tell thee to ask of me?\"");
	say();
	UI_push_answers();
	var0006 = (var0006 + 0x0001);
	if (!(gflags[0x0112] && (!gflags[0x0290]))) goto labelFunc0411_0605;
	UI_add_answer("pumice");
labelFunc0411_0605:
	if (!(gflags[0x0110] && (!gflags[0x028F]))) goto labelFunc0411_0617;
	UI_add_answer("apparatus");
labelFunc0411_0617:
	if (!(gflags[0x010B] && (!gflags[0x028C]))) goto labelFunc0411_0629;
	UI_add_answer("pinecone");
labelFunc0411_0629:
	if (!(gflags[0x010C] && (!gflags[0x0295]))) goto labelFunc0411_063B;
	UI_add_answer("blue egg");
labelFunc0411_063B:
	if (!(gflags[0x010E] && (!gflags[0x029A]))) goto labelFunc0411_064D;
	UI_add_answer("skull");
labelFunc0411_064D:
	UI_add_answer("nothing more");
labelFunc0411_0654:
	case "pumice" attend labelFunc0411_06A1:
	UI_remove_answer("pumice");
	if (!Func097D(0xFE9B, 0x0001, 0x010B, 0xFE99, 0xFE99)) goto labelFunc0411_0683;
	message("\"Might I take that...\"");
	say();
	message("\"Yes, this is pumice -- black in color, rough in texture, light in weight.\"");
	say();
	goto labelFunc0411_0687;
labelFunc0411_0683:
	message("\"Pumice is a light, rough rock of a black or light brown hue.\"");
	say();
labelFunc0411_0687:
	message("\"These rocks are formed when the Primal Forces of Fire and Earth collide -- during certain conjurations, for instance.\"");
	say();
	message("\"Pumice is also found deep in the bowels of the world, where fire runs liquid.\"");
	say();
	gflags[0x029E] = true;
	if (!(gflags[0x029E] && gflags[0x029F])) goto labelFunc0411_06A1;
	gflags[0x0290] = true;
labelFunc0411_06A1:
	case "apparatus" attend labelFunc0411_072B:
	UI_remove_answer("apparatus");
	if (!Func097D(0xFE9B, 0x0001, 0x02ED, 0xFE99, 0x0001)) goto labelFunc0411_071C;
	message("\"That item is used for researching the properties of magic, and to create new spells.\"");
	say();
	if (!(!gflags[0x00DB])) goto labelFunc0411_0711;
	message("\"It is not safe for thee to have such an item. As the Magister, it is my duty to take that from thee.\"");
	say();
	var0004 = UI_remove_party_items(0x0001, 0x02ED, 0xFE99, 0x0001, 0x0012);
	var0007 = UI_get_object_position(0xFE9C);
	UI_obj_sprite_effect(0xFE9C, 0x0015, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
	abort;
labelFunc0411_0711:
	message("\"It is not mine, but I cannot tell thee to whom it belongs. Only Master Ducio would know.\"");
	say();
	gflags[0x0111] = true;
	goto labelFunc0411_072B;
labelFunc0411_071C:
	message("\"The item sounds as if it might be a piece of magical apparatus. Master Ducio would know for certain.\"");
	say();
	if (!(!gflags[0x00DB])) goto labelFunc0411_072B;
	message("\"But thou shouldst not handle such equipment -- for Mundanes, it could be very dangerous.\"");
	say();
labelFunc0411_072B:
	case "pinecone" attend labelFunc0411_076E:
	UI_remove_answer("pinecone");
	message("\"Ah, yes. We sometimes find these on the beach after a storm.\"");
	say();
	message("\"The northern trees produce tough cones which are filled with seeds. Later, the cones open and release their seeds.\"");
	say();
	if (!Func097D(0xFE9B, 0x0001, 0x0108, 0xFE99, 0xFE99)) goto labelFunc0411_0762;
	message("\"As thou canst see, this cone still doth have its seeds. It hath been newly released from its tree.\"");
	say();
	message("\"It must have come directly from the northern forests, on the mainland north of the Swamp of Gorlab.\"");
	say();
	goto labelFunc0411_076A;
labelFunc0411_0762:
	message("\"Once the pinecone releases its seeds, it becomes a dried husk. Being light, it is transported by wind and wave.\"");
	say();
	message("\"Thy pinecone could have come from any northern forest or any beach.\"");
	say();
labelFunc0411_076A:
	gflags[0x028C] = true;
labelFunc0411_076E:
	case "blue egg" attend labelFunc0411_07DB:
	UI_remove_answer("blue egg");
	if (!Func097D(0xFE9B, 0x0001, 0x0241, 0xFE99, 0x0003)) goto labelFunc0411_079D;
	message("\"What a stench! This egg hath gone putrid!\"");
	say();
	message("\"A blue egg... doth not seem to be magical or in any way arcane...\"");
	say();
	goto labelFunc0411_07A1;
labelFunc0411_079D:
	message("\"A blue egg... have I ever read of such a thing? Blue hens, blue frogs -- but eggs?\"");
	say();
labelFunc0411_07A1:
	message("\"I do not know what it is! And if I do not know, then no one shall.\"");
	say();
	if (!(!(UI_get_item_flag(0xFFD8, 0x0004) && Func0942(0xFFED)))) goto labelFunc0411_07DB;
	UI_show_npc_face1(0xFFED, 0x0000);
	message("\"Cap'n Hawk might know! He hath been everywhere in the world!\"");
	say();
	gflags[0x010A] = true;
	UI_set_conversation_slot(0x0000);
	message("\"The lad doth have a point. Also...\"");
	say();
	message("\"Erstam the Mad Mage would almost certainly know, but he doth not share his information with anyone.\"");
	say();
labelFunc0411_07DB:
	case "skull" attend labelFunc0411_0812:
	UI_remove_answer("skull");
	if (!Func097D(0xFE9B, 0x0001, 0x00F4, 0xFE99, 0xFE99)) goto labelFunc0411_080E;
	message("\"Allow me to handle it...\"");
	say();
	message("\"But this is merely the skull of a common bear, such as are found on the mainland, most often along the westerly coast.\"");
	say();
	gflags[0x029A] = true;
	goto labelFunc0411_0812;
labelFunc0411_080E:
	message("\"If thou wilt bring me the item, I shall examine it for thee. I can tell thee nothing now.\"");
	say();
labelFunc0411_0812:
	case "nothing more" attend labelFunc0411_0822:
	UI_pop_answers();
	message("\"Remember always -- knowledge is power.\"");
	say();
labelFunc0411_0822:
	case "gratitude" attend labelFunc0411_0875:
	UI_remove_answer("gratitude");
	message("\"Thank thee for saving me. Now that I am no longer imprisoned within stone, I can continue my researches. There must be some way to stop Shamino the Anarch!\"");
	say();
	var0008 = Func0992(0x0001, "@We seek the Scroll of the Serpent, sir.@", "@I seek the Scroll of the Serpent, sir.@", false);
	UI_set_conversation_slot(0x0000);
	message("\"The ancient scroll? Be warned -- it is written entirely in the ancient runes of the Daemons who once dwelt in this land. I can understand none of it.\"");
	say();
	message("\"It is said that Erstam translated portions of it, but the translation was lost many years ago.\"");
	say();
	message("\"As a token of my gratitude, please accept this, the Scroll of the Serpent.\"");
	say();
	var0004 = Func099B(0xFE9C, 0x0001, 0x02C3, 0x0050, 0x0000, 0x0000, true);
	gflags[0x00F6] = true;
labelFunc0411_0875:
	case "Gustacio's experiment" attend labelFunc0411_089D:
	UI_remove_answer("Gustacio's experiment");
	message("\"Hmmm... I think that thou shouldst consult my crystal ball. Perhaps it can provide a clue into the matter of the missing brother.\"");
	say();
	message("\"Once thou hast looked, come back and I shall divine what thou hast seen.\"");
	say();
	gflags[0x00F0] = true;
	Func097F(0xFFEF, "@The crystal ball!@", 0x0000);
	abort;
labelFunc0411_089D:
	case "spellbook" attend labelFunc0411_0B03:
	UI_remove_answer("spellbook");
	if (!(!gflags[0x00DE])) goto labelFunc0411_08BB;
	message("\"Bring me three fresh Mandrake Roots, and I shall let thee have a spellbook. The Roots are found on Monk Isle.\"");
	say();
	gflags[0x00DE] = true;
labelFunc0411_08BB:
	if (!Func097D(0xFE9B, 0x0001, 0x034A, 0xFE99, 0x0003)) goto labelFunc0411_0AF5;
	if (!(!Func097D(0xFE9B, 0x0003, 0x034A, 0xFE99, 0x0003))) goto labelFunc0411_08F7;
	message("\"This is not a sufficient number of roots with which to make a spellbook. Return to Monk Isle, and when thou again comest, bring three roots of the Mandrake.\"");
	say();
	Func097F(0xFFEF, "@Go back!@", 0x0000);
	abort;
labelFunc0411_08F7:
	if (!gflags[0x026D]) goto labelFunc0411_0ADD;
	message("\"I see that thou hast brought the Mandrake Roots. But I am still hesitant... If thou art truly a Mage, thou wilt be able to answer my four questions.\"");
	say();
	if (!Func098C()) goto labelFunc0411_0ABC;
	message("\"Forgive me for my suspicions. But thou wilt understand that I take my responsibility seriously. I will now conjure a spellbook for thee.\"");
	say();
	UI_obj_sprite_effect(0xFE9C, 0x0015, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0004 = UI_remove_party_items(0x0003, 0x034A, 0xFE99, 0x0003, 0x0000);
	var0004 = Func099B(0xFE9C, 0x0001, 0x02F9, 0x0001, 0x0005, 0x0000, true);
	if (!(var0004[0x0002] != 0x0000)) goto labelFunc0411_0976;
	var0009 = UI_find_nearest(0xFE9C, 0x02F9, 0x000A);
	goto labelFunc0411_09A0;
labelFunc0411_0976:
	var0004 = Func099F(0x02F9, 0xFE99, 0x0005);
	if (!(var0004 == 0x0000)) goto labelFunc0411_0997;
	message("\"Ummm.... For some reason, I cannot locate the spellbook that I was going to give thee. Thou wilt have to return at a later time.\"");
	say();
	abort;
	goto labelFunc0411_09A0;
labelFunc0411_0997:
	var0009 = var0004[0x0001];
labelFunc0411_09A0:
	UI_remove_all_spells(var0009);
	var000A = [0x0001, 0x0008, 0x000D, 0x0017, 0x001E];
	enum();
labelFunc0411_09BD:
	for (var000D in var000A with var000B to var000C) attend labelFunc0411_09DB;
	var0004 = UI_add_spell(var000D, 0x0000, var0009);
	goto labelFunc0411_09BD;
labelFunc0411_09DB:
	message("\"Thou wilt notice that the Transcribe spell is within thy spellbook. Use it to copy spell scrolls into thy spellbook, for they will disappear once thou hast used them.\"");
	say();
	message("\"Remember this well. It may mean the difference between thy life and thy death.\"");
	say();
	gflags[0x00DB] = true;
	var000E = [0x0975, 0x0748];
	var000F = [0x0968, 0x0767];
	var0010 = [0x096F, 0x075E];
	UI_set_new_schedules(0xFFEC, [0x0000, 0x0003, 0x0004], [0x000E, 0x001A, 0x0015], [var000E, var000F, var0010]);
	UI_move_object(0xFFEC, [0x0978, 0x0764, 0x0000]);
	UI_run_schedule(0xFFEC);
	var000E = [0x0988, 0x0742];
	var000F = [0x0969, 0x0768];
	var0010 = [0x0961, 0x0764];
	UI_set_new_schedules(0xFFEB, [0x0000, 0x0003, 0x0004], [0x000E, 0x0017, 0x000C], [var000E, var000F, var0010]);
	UI_move_object(0xFFEB, [0x096F, 0x075E, 0x0000]);
	UI_run_schedule(0xFFEB);
	goto labelFunc0411_0ADA;
labelFunc0411_0ABC:
	UI_set_schedule_type(0xFFEF, 0x0014);
	UI_clear_item_say(0xFFEF);
	Func097F(0xFFEF, "@Be gone, rogue!@", 0x0000);
	abort;
labelFunc0411_0ADA:
	goto labelFunc0411_0AF2;
labelFunc0411_0ADD:
	message("\"Thou didst not understand me. The Roots must be fresh, taken from the swamp precisely as the tides are receding. These roots are stale, and unsuitable for our purposes.\"");
	say();
	message("\"Return to Monk Isle, and return with fresh roots of the Mandrake!\"");
	say();
	Func097F(0xFFEF, "@Return!@", 0x0000);
	abort;
labelFunc0411_0AF2:
	goto labelFunc0411_0B03;
labelFunc0411_0AF5:
	if (!gflags[0x00DE]) goto labelFunc0411_0B03;
	message("\"Without the Mandrake Roots, I can do nothing for thee.\"");
	say();
	message("\"Return to Monk Isle, and return with fresh roots of the Mandrake!\"");
	say();
labelFunc0411_0B03:
	case "bye" attend labelFunc0411_0B2D:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@Thank thee!@", 0x0000);
	Func097F(0xFFEF, "@Seek truth always.@", 0x0002);
	Func08FF();
	goto labelFunc0411_0B30;
labelFunc0411_0B2D:
	goto labelFunc0411_01FC;
labelFunc0411_0B30:
	endconv;
labelFunc0411_0B31:
	return;
}


