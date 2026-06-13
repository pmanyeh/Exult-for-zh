#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0955 0x955 ();
extern var Func0942 0x942 (var var0000);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func095B 0x95B (var var0000);
extern var Func0957 0x957 (var var0000);
extern void Func094E 0x94E (var var0000, var var0001);
extern void Func0840 0x840 ();
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func08FF 0x8FF ();

void Func0417 object#(0x417) ()
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

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	var0003 = UI_part_of_day();
	if (!((var0003 > 0x0001) || (var0003 < 0x0006))) goto labelFunc0417_0035;
	var0003 = "day";
	goto labelFunc0417_003B;
labelFunc0417_0035:
	var0003 = "evening";
labelFunc0417_003B:
	if (!(event == 0x0001)) goto labelFunc0417_0071;
	UI_item_say(0xFE9C, (("@Good " + var0003) + ", miss.@"));
	0xFFE9->Func07D1();
	Func097F(0xFFE9, "@So?@", 0x0002);
	UI_set_schedule_type(0xFFE9, 0x0003);
labelFunc0417_0071:
	if (!(event == 0x0000)) goto labelFunc0417_0140;
	var0004 = UI_get_random(0x0006);
	if (!(var0004 == 0x0001)) goto labelFunc0417_0097;
	UI_item_say(0xFFE9, "@Do not go there!@");
labelFunc0417_0097:
	if (!(var0004 == 0x0002)) goto labelFunc0417_00AB;
	UI_item_say(0xFFE9, "@Wine for sale!@");
labelFunc0417_00AB:
	if (!(var0004 == 0x0003)) goto labelFunc0417_00BF;
	UI_item_say(0xFFE9, "@Very suspicious...@");
labelFunc0417_00BF:
	if (!(var0004 == 0x0004)) goto labelFunc0417_00D3;
	UI_item_say(0xFFE9, "@Magical wine!@");
labelFunc0417_00D3:
	if (!(var0004 == 0x0005)) goto labelFunc0417_012C;
	var0005 = UI_find_nearby(0xFFE9, 0x0103, 0x000A, 0xFE99);
	if (!(var0005 != [])) goto labelFunc0417_0122;
	UI_item_say(0xFFE9, "@Clean this!@");
	enum();
labelFunc0417_0105:
	for (var0008 in var0005 with var0006 to var0007) attend labelFunc0417_011F;
	Func097F(var0008, "@Yes, ma'am@", 0x0002);
	goto labelFunc0417_0105;
labelFunc0417_011F:
	goto labelFunc0417_012C;
labelFunc0417_0122:
	UI_item_say(0xFFE9, "@Where is Ernesto?@");
labelFunc0417_012C:
	if (!(var0004 == 0x0006)) goto labelFunc0417_0140;
	UI_item_say(0xFFE9, "@Taste the wine!@");
labelFunc0417_0140:
	if (!(event == 0x0009)) goto labelFunc0417_098F;
	UI_run_schedule(0xFFE9);
	UI_clear_item_say(0xFFE9);
	UI_show_npc_face0(0xFFE9, 0x0000);
	var0009 = UI_get_item_flag(0xFFE9, 0x001C);
	if (!(var0009 == false)) goto labelFunc0417_0186;
	message("\"In what way can I help thee, stranger?\"");
	say();
	UI_set_item_flag(0xFFE9, 0x001C);
	goto labelFunc0417_018A;
labelFunc0417_0186:
	message("\"We meet again.\"");
	say();
labelFunc0417_018A:
	if (!(gflags[0x00ED] && (!gflags[0x00E0]))) goto labelFunc0417_01A9;
	UI_add_answer("Catacombs");
	if (!gflags[0x014B]) goto labelFunc0417_01A9;
	UI_add_answer("key");
labelFunc0417_01A9:
	if (!(gflags[0x0115] && (!gflags[0x0293]))) goto labelFunc0417_01BB;
	UI_add_answer("slippers");
labelFunc0417_01BB:
	if (!(gflags[0x0285] && (!gflags[0x0297]))) goto labelFunc0417_01CD;
	UI_add_answer("strange wine");
labelFunc0417_01CD:
	if (!(gflags[0x0045] && (UI_get_schedule_type(0xFFB4) != 0x000F))) goto labelFunc0417_01E6;
	UI_add_answer("brown bottle");
labelFunc0417_01E6:
	if (!(gflags[0x0106] && (!gflags[0x011B]))) goto labelFunc0417_01F8;
	UI_add_answer("Celennia's disappearance");
labelFunc0417_01F8:
	if (!(gflags[0x00EA] && (!UI_get_item_flag(0xFFE1, 0x0004)))) goto labelFunc0417_0211;
	UI_add_answer("kidnap");
labelFunc0417_0211:
	UI_add_answer(["name", "wine", "bye"]);
labelFunc0417_0221:
	converse attend labelFunc0417_098E;
	case "kidnap" attend labelFunc0417_02E3:
	UI_remove_answer("kidnap");
	if (!gflags[0x0143]) goto labelFunc0417_024E;
	message("\"I have most excellent news, ");
	message(var0002);
	message("! I have spoken personally with the MageLord, and he hath agreed to see thee.\"");
	say();
	message("\"A crime that involved magic must be handled by the Council of Mages, naturally.\"");
	say();
	message("\"And due to mine intervention, the MageLord shall be glad to speak with thee. Please, go to him soonest!\"");
	say();
	goto labelFunc0417_02E3;
labelFunc0417_024E:
	if (!gflags[0x0144]) goto labelFunc0417_0297;
	message("\"I have no information for thee, ");
	message(var0002);
	message(". The crime remains a mystery.\"");
	say();
	message("\"Perhaps if thou couldst provide the 30 guilders which a proper investigation costs...?\"");
	say();
	if (!Func0955()) goto labelFunc0417_0290;
	if (!UI_remove_party_items(0x001E, 0x03B8, 0xFE99, 0xFE99, 0x0000)) goto labelFunc0417_0289;
	message("\"Most excellent! We shall be to work immediately, and hope to have information very soon. Please return in a few hours.\"");
	say();
	gflags[0x0143] = true;
	goto labelFunc0417_028D;
labelFunc0417_0289:
	message("\"We only accept guilders here, stranger. Perhaps Bucia the Provisioner can aid thee in exchanging thy worthless coins for Moonshadian money.\"");
	say();
labelFunc0417_028D:
	goto labelFunc0417_0294;
labelFunc0417_0290:
	message("\"That is too bad. However, if we learn anything, we shall inform thee.\"");
	say();
labelFunc0417_0294:
	goto labelFunc0417_02E3;
labelFunc0417_0297:
	if (!gflags[0x0140]) goto labelFunc0417_02A5;
	message("\"Thou wert wise to follow the advise of the townsfolk in coming to me -- \"");
	say();
	message("\"the Rangers must always be consulted in criminal matters.\"");
	say();
labelFunc0417_02A5:
	message("\"This crime doth seem clearly to be magical. That is a problem -- 'twill be costly to proceed. A Mage should be consulted, and his fee will be steep.\"");
	say();
	message("\"Canst thou afford the 20 guilders which a Mages' Analysis would cost?\"");
	say();
	if (!Func0955()) goto labelFunc0417_02DB;
	if (!UI_remove_party_items(0x0014, 0x03B8, 0xFE99, 0xFE99, 0x0000)) goto labelFunc0417_02D4;
	message("\"Most excellent! We shall be to work immediately, and hope to have information very soon. Please return to me in a few hours.\"");
	say();
	gflags[0x0143] = true;
	goto labelFunc0417_02D8;
labelFunc0417_02D4:
	message("\"We only accept guilders here, stranger. Perhaps Bucia the Provisioner can aid thee in exchanging thy worthless coins for Moonshadian money.\"");
	say();
labelFunc0417_02D8:
	goto labelFunc0417_02DF;
labelFunc0417_02DB:
	message("\"That is too bad. However, the Rangers shall investigate thy mystery. If we learn anything, we shall inform thee.\"");
	say();
labelFunc0417_02DF:
	gflags[0x0144] = true;
labelFunc0417_02E3:
	case "name" attend labelFunc0417_030A:
	UI_remove_answer("name");
	message("\"What business is it of thine? Who art thou, coming into my city and asking questions?\"");
	say();
	message("\"If thou must know, I am Julia, chief of rangers. If thou dost make trouble in Moonshade, I will see that thou art sent to the dungeons!\"");
	say();
	UI_add_answer(["Rangers", "Moonshade", "dungeons"]);
labelFunc0417_030A:
	case "Rangers" attend labelFunc0417_032E:
	UI_remove_answer("Rangers");
	message("\"We are the guardians of Moonshade. The City of Mages hath always been guarded by Rangers.\"");
	say();
	message("\"The tradition doth date to the ancient city of Moon, from whence our ancestors came.\"");
	say();
	UI_add_answer(["guardians", "Moon"]);
labelFunc0417_032E:
	case "guardians" attend labelFunc0417_0345:
	UI_remove_answer("guardians");
	message("\"Dost thou think that the mighty Mages deal with every thief or common brawler? Certainly not!\"");
	say();
	message("\"That is what the Rangers are for. To stop common annoyances from bothering the Mages in their work. And if thou art not a Mage, thou dost qualify as a common annoyance.\"");
	say();
labelFunc0417_0345:
	case "Moon" attend labelFunc0417_044D:
	UI_remove_answer("Moon");
	message("\"Thou art dredging up ancient history!\"");
	say();
	message("\"In days long gone, there was a peaceful land called Sosaria. It was a land of many kingdoms and cultures, a paradise of individuality.\"");
	say();
	message("\"But times changed. A tyrant named British overthrew the kingdoms and declared himself king.\"");
	say();
	var000A = false;
	var000B = [];
	if (!Func0942(0xFFFF)) goto labelFunc0417_0386;
	var000A = Func0992(0xFFFF, "@She doth refer to Lord\r\n\t\t\t\t\t\t\t\t\t\tBritish!@", 0x0000, false);
	goto labelFunc0417_03BB;
labelFunc0417_0386:
	if (!Func0942(0xFFFE)) goto labelFunc0417_03A2;
	var000A = Func0992(0xFFFE, "@She doth refer to Lord\r\n\t\t\t\t\t\t\t\t\t\t\tBritish!@", 0x0000, false);
	goto labelFunc0417_03BB;
labelFunc0417_03A2:
	if (!Func0942(0xFFFD)) goto labelFunc0417_03BB;
	var000A = Func0992(0xFFFD, "@She doth refer to\r\n\t\t\t\t\t\t\t\t\t\t\t\tLord British!@", 0x0000, false);
labelFunc0417_03BB:
	var000B = (var000B & ["@I serve Lord British!@", "say nothing"]);
	if (!(var000A != 0x0000)) goto labelFunc0417_03F1;
	var000B = (var000B & (("@Hush, " + Func095B(var000A)) + "@"));
	UI_set_conversation_slot(0x0000);
labelFunc0417_03F1:
	var000C = Func0957(var000B);
	if (!(var000C == 0x0003)) goto labelFunc0417_0414;
	Func094E(var000A, "@But she doth slander our liege!@");
	UI_set_conversation_slot(0x0000);
labelFunc0417_0414:
	if (!(var000C == 0x0001)) goto labelFunc0417_0422;
	message("\"There is no need to be vulgar. The Daemon King hath been dead for many centuries. No one doth serve him now.\"");
	say();
labelFunc0417_0422:
	message("\"The Daemon British enforced a radical\tscheme of philosophy upon his subjects, forcing them into exile if they would not submit.\"");
	say();
	message("\"The Mages and Rangers were bound by the travesty known as the Oath of Honesty!\"");
	say();
	var000A = Func0992(0xFFFE, "@But what is improper about\r\n\t\t\t\t\t\t\t\t\thonesty?@", 0x0000, false);
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"Nothing is more cruel than unflinching Honesty. It doth shatter hearts, instill insecurity, and promote civil strife.\"");
	say();
	message("\"Therefore, our ancestors fled the City of Moon in the\tland British conquered, and sailed until they found this land.\"");
	say();
labelFunc0417_044D:
	case "Moonshade" attend labelFunc0417_0475:
	UI_remove_answer("Moonshade");
	message("\"Aye, the City of Mages. There is much magic here, and more than a little sorcery.\"");
	say();
	message("\"The name is symbolic. Moon represents the powers beyond those of mere mortals, just as the moon is suspended over the world.\"");
	say();
	message("\"As for Shade, it stands for shelter against the cruel light of Honesty. We believe in Truth here, but only within reason.\"");
	say();
	UI_add_answer(["magic", "sorcery"]);
labelFunc0417_0475:
	case "magic" attend labelFunc0417_0493:
	UI_remove_answer("magic");
	message("\"Mages use reagents and such like to cast magic. The good or ill of it comes from the caster's intent.\"");
	say();
	message("\"Magic, in and of itself, is neither good nor evil. But sorcery is another matter altogether.\"");
	say();
	UI_add_answer("reagents");
labelFunc0417_0493:
	case "reagents" attend labelFunc0417_04B7:
	UI_remove_answer("reagents");
	message("\"Why ask me about them? I am a Ranger, not a Mage!\"");
	say();
	message("\"If thou dost wish such information, seek out Pothos. Do not trouble me to teach thee the rudiments of magic! I am no teacher. Thou shouldst seek Fedabiblio with thine annoying questions!\"");
	say();
	UI_add_answer(["Pothos", "Fedabiblio"]);
labelFunc0417_04B7:
	case "Pothos" attend labelFunc0417_04CE:
	UI_remove_answer("Pothos");
	message("\"Pothos is the Apothecary here in Moonshade. He will be able to tell thee all about anything that thou wouldst need to cast magic.\"");
	say();
	message("\"I hear the storms have cut badly into his supplies, but he should be able to help thee. Or at least he may have more time to deal with thee... I am a very busy woman!\"");
	say();
labelFunc0417_04CE:
	case "Fedabiblio" attend labelFunc0417_04E5:
	UI_remove_answer("Fedabiblio");
	message("\"Fedabiblio is the master of novices here in Moonshade. It is his lamentable duty to try and make those miscreants into Mages!\"");
	say();
	message("\"If he doth not have time for thee, perhaps he could allow thee to satisfy thy curiosity in the library of magics.\"");
	say();
labelFunc0417_04E5:
	case "sorcery" attend labelFunc0417_0509:
	UI_remove_answer("sorcery");
	message("\"Sorcery is outlawed here in Moonshade, but that doth not mean that some Mages do not still practice its dark arts.\"");
	say();
	message("\"Whereas magic is neither good nor evil, sorcery -- with its use of Bloodspawn -- hath no good intent at all. And the very possession of Stoneheart would have thee thrown into the deepest corners of the dungeons.\"");
	say();
	UI_add_answer(["Bloodspawn", "Stoneheart"]);
labelFunc0417_0509:
	case "Bloodspawn" attend labelFunc0417_0524:
	UI_remove_answer("Bloodspawn");
	message("\"Thou dost not know of Bloodspawn? Good!\"");
	say();
	message("\"The less that thou knowest, the less trouble that thou canst cause!\"");
	say();
	message("\"I will say only that spells of great destruction require that vile compound. I will tell thee no more...\"");
	say();
labelFunc0417_0524:
	case "Stoneheart" attend labelFunc0417_0564:
	UI_remove_answer("Stoneheart");
	message("\"Thou art certainly ignorant!\"");
	say();
	var000A = Func0992(0x0001, "@Thou art rude!@", 0x0000, false);
	if (!(var000A != 0xFE9C)) goto labelFunc0417_055C;
	UI_set_conversation_slot(0x0000);
	message("\"My, thou art touchy! I meant no offense... Only that thou didst not know things that are common knowledge here.\"");
	say();
labelFunc0417_055C:
	message("\"Stoneheart is the ore that produces Bloodspawn. I know not how this is done. I am not a Mage.\"");
	say();
	message("\"And I would advise thee to use great caution about who thou dost ask... lest thou dost find thyself thrown in the dungeons.\"");
	say();
labelFunc0417_0564:
	case "dungeons" attend labelFunc0417_058B:
	UI_remove_answer("dungeons");
	message("\"Beware how thou dost step! The MageLord is apt to send any transgressor into the pits beneath the Mountains of Freedom.\"");
	say();
	message("\"None have returned from that dank, dark abyss.\"");
	say();
	UI_add_answer(["MageLord", "transgressor", "Freedom"]);
labelFunc0417_058B:
	case "MageLord" attend labelFunc0417_05C6:
	UI_remove_answer("MageLord");
	if (!(gflags[0x0004] && (UI_get_schedule_type(0xFEF9) != 0x000F))) goto labelFunc0417_05B7;
	message("\"Our city is ruled by Shamino the Anarch, a most powerful wizard.\"");
	say();
	message("\"He is a great improvement over our previous MageLord, who was indolent and deceitful. I am glad that Shamino rules.\"");
	say();
	goto labelFunc0417_05C6;
labelFunc0417_05B7:
	message("\"Our city is ruled by the MageLord Filbercio. He is benevolent and wise, and rules well.\"");
	say();
	if (!(!gflags[0x00D9])) goto labelFunc0417_05C6;
	message("\"However, he doth not receive visitors, so do not dream of entering his palace.\"");
	say();
labelFunc0417_05C6:
	case "transgressor" attend labelFunc0417_0601:
	UI_remove_answer("transgressor");
	if (!(gflags[0x0004] && (UI_get_schedule_type(0xFEF9) != 0x000F))) goto labelFunc0417_05F2;
	message("\"'Tis best not to try and second guess Shamino the Anarch. His definition of a transgression changes from moment to moment...\"");
	say();
	message("\"And the fine could be as insignificant as a verbal upbraiding, or as serious as thy life.\"");
	say();
	goto labelFunc0417_0601;
labelFunc0417_05F2:
	message("\"If thou art a Mage, thou must follow the Strictures. If thou art a Mundane, thou must not overly annoy a Mage. That much is simple logic.\"");
	say();
	message("\"But, as long as Filbercio is the MageLord, thou wouldst do well to remember that it is unhealthy to cross any of Filbercio's whims.\"");
	say();
	UI_add_answer("Strictures");
labelFunc0417_0601:
	case "Strictures" attend labelFunc0417_0625:
	UI_remove_answer("Strictures");
	message("\"'Tis not my job to know them. 'Tis for the Council of Mages to enforce.\"");
	say();
	message("\"In short, thou canst not possess Bloodspawn unless the Council approves of it. And thou shouldst report any research that thou dost wish to do to the Council, as well.\"");
	say();
	UI_add_answer(["approves", "Council"]);
labelFunc0417_0625:
	case "approves" attend labelFunc0417_063C:
	UI_remove_answer("approves");
	message("\"Thou art as full of questions as a novice!\"");
	say();
	message("\"No spell is ever purposefully forgotten. But if it is dangerous, the Council tries to regulate who doth have access to such reagents and spells.\"");
	say();
labelFunc0417_063C:
	case "Council" attend labelFunc0417_0653:
	UI_remove_answer("Council");
	message("\"The Council is comprised of the MageLord and two other Adepts. They act as the voice of all the Mages in Moonshade, except when a quorum vote is called of all Adepts...\"");
	say();
	message("\"Usually on the election of a new Council member, or a new MageLord.\"");
	say();
labelFunc0417_0653:
	case "Freedom" attend labelFunc0417_066E:
	UI_remove_answer("Freedom");
	message("\"Ha! Now there is a fine jest, if ever I heard one!\"");
	say();
	message("\"All that was ever retrieved out of those mountains was the ore that was taken out while it was still a mine!\"");
	say();
	message("\"Ever since Filbercio made it a prison, no one hath come out of there again!\"");
	say();
labelFunc0417_066E:
	case "wine" attend labelFunc0417_06AC:
	UI_remove_answer("wine");
	if (!(UI_get_schedule_type(0xFFE9) == 0x0007)) goto labelFunc0417_06A8;
	message("\"We make the finest wine that thou wilt find anywhere. Wouldst thou care to try some?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc0417_06A1;
	message("\"Good...\"");
	say();
	Func0840();
	goto labelFunc0417_06A5;
labelFunc0417_06A1:
	message("\"Thy loss...\"");
	say();
labelFunc0417_06A5:
	goto labelFunc0417_06AC;
labelFunc0417_06A8:
	message("\"Come to the winery when we are open and thou canst sample our wares then!\"");
	say();
labelFunc0417_06AC:
	case "Catacombs" attend labelFunc0417_06D4:
	UI_remove_answer("Catacombs");
	message("\"So, thou hast learned of the catacombs, hast thou? I hope thou hast not ventured to those ruins south of town, they are dangerous!");
	say();
	message("\"I do not care what thou art after, but I'll tell thee that thou wilt throw thy life away down there.");
	say();
	message("The depths belong to the Rat-Men, not to mention the burning heat. That is why the gate must always be locked.\"");
	say();
	UI_add_answer(["Rat-Men", "burning heat"]);
labelFunc0417_06D4:
	case "Rat-Men" attend labelFunc0417_06F3:
	UI_remove_answer("Rat-Men");
	message("\"There are too many Rat-Men to eliminate, so it is my duty to see that the gate remains closed. All that I and the other Rangers can do to keep them pacified is to toss scraps of food through the gate.\"");
	say();
	message("\"Of course, my job is to keep any of those creatures from getting into the city,");
	say();
	message("but I might be able to forget that I saw anyone going down there, if the price was good enough...\"");
	say();
	message("\"But I doubt even thou would survive the heat down there. Though the Rat-Men thrive on it, the temperatures down there would most certianly boil thee in thine own flesh.");
	say();
labelFunc0417_06F3:
	case "burning heat" attend labelFunc0417_071A:
	UI_remove_answer("burning heat");
	message("\"Only once did I ever venture into the catacombs, with twenty strong Rangers at my back. And before we had gone far, half of our party had fallen to the heat alone...\"");
	say();
	message("\"It felt like we were walking into a smith's forge! We had to turn back, and no one hath gone in there since.\"");
	say();
	message("I might be tempted to 'loan' thee the key at a price...");
	say();
	message("...but not until thou has found a way to protect thyself from the fervid temperatures. Giving thou the key now would mean certian death should thou be foolhearty enough to venture there.");
	say();
	message("A sword may protect thee from the Rat-Men, but only magic can save thee from the fearsome heat.");
	say();
	message("Return to me for the key when thou hast found the means to survive the heat.");
	say();
labelFunc0417_071A:
	case "key" attend labelFunc0417_07B5:
	message("I heard thou hast magic to protect thyself from the heat in the catacombs. I hope thou hast thought to take enough reagents, not that thou will survive the Rat-Men...");
	say();
	message("\"I will 'loan' thou this key for say... 40 guilders? Is it worth that much to adventure in the catacombs?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc0417_07B1;
	var000D = UI_count_objects(0xFE9B, 0x03B8, 0xFE99, 0xFE99);
	if (!(var000D >= 0x0028)) goto labelFunc0417_0795;
	message("\"Well enough! Take this blue key. It will open the gate to the catacombs for thee.\"");
	say();
	var000E = UI_remove_party_items(0x0028, 0x03B8, 0xFE99, 0xFE99, true);
	var000F = Func099B(0xFE9C, 0x0001, 0x0281, 0x00CB, 0x0004, 0x0000, true);
	gflags[0x00E0] = true;
	UI_remove_answer("Catacombs");
	UI_remove_answer("key");
	goto labelFunc0417_07AE;
labelFunc0417_0795:
	message("\"Art thou trying to jest with me? Thou dost not have 40 guilders!\"");
	say();
	message("\"Return when thou hast learned how to count!\"");
	say();
	UI_remove_npc_face0();
	Func097F(0xFFE9, "@Oaf!@", 0x0000);
	abort;
labelFunc0417_07AE:
	goto labelFunc0417_07B5;
labelFunc0417_07B1:
	message("\"Let me know if thou dost change thy mind.\"");
	say();
labelFunc0417_07B5:
	case "slippers" attend labelFunc0417_07C8:
	UI_remove_answer("slippers");
	message("\"They are not mine, if that is what thou art asking. I would not wear anything that frilly. And a Mage would never wear anything that plain.\"");
	say();
labelFunc0417_07C8:
	case "strange wine" attend labelFunc0417_0802:
	UI_remove_answer("strange wine");
	if (!Func097D(0xFE9B, 0x0001, 0x0268, 0xFE99, 0x0010)) goto labelFunc0417_07F7;
	message("\"Thou hast wine from our winery! I hope thou didst enjoy it... Hmm. It is the same vintage as the wine that disappeared.\"");
	say();
	message("\"Hast thou seen our wine press? We are very proud of it.\"");
	say();
	goto labelFunc0417_07FB;
labelFunc0417_07F7:
	message("\"I am no Mage to divine what it was that thou didst have! Bring to me the bottle or trouble me no more about it. I have enough to do taking care of our wine press.\"");
	say();
labelFunc0417_07FB:
	UI_add_answer("wine press");
labelFunc0417_0802:
	case "wine press" attend labelFunc0417_082C:
	UI_remove_answer("wine press");
	message("\"The finest wine press in all the land! For it operates by no human hand!\"");
	say();
	message("\"'Tis a magic wine press, ");
	message(var0000);
	message(". Made by the one and only Mad Mage... before he began his weird experiments, that is.\"");
	say();
	UI_add_answer(["Mad Mage", "experiments"]);
labelFunc0417_082C:
	case "Mad Mage" attend labelFunc0417_0843:
	UI_remove_answer("Mad Mage");
	message("\"Thou hast not heard of the Mad Mage?!\"");
	say();
	message("\"His true name is Erstam. He lives on a small island away from Moonshade. He was once the Adepts' mentor... before he went mad.\"");
	say();
labelFunc0417_0843:
	case "experiments" attend labelFunc0417_085E:
	UI_remove_answer("experiments");
	message("\"Makes me ill to think about them!\"");
	say();
	message("\"The Mad Mage thinks that he can learn to create life. Or life from death, I should say.\"");
	say();
	message("\"They say that he hacks his assistants to use in his experiments, and that he doth have all sorts of hideous things wandering around the island -- failed experiments that he turns out his door!\"");
	say();
labelFunc0417_085E:
	case "brown bottle" attend labelFunc0417_087E:
	UI_remove_answer("brown bottle");
	message("\"I would recognize that mud-brown bottle any day! 'Tis what those brine-drunk Fawn sailors swill! Bad enough to choke a goat, I will tell thee! Thou wilt not find any in this city!\"");
	say();
	UI_add_answer(["brine-drunk sailors", "Fawn"]);
labelFunc0417_087E:
	case "brine-drunk sailors" attend labelFunc0417_0891:
	UI_remove_answer("brine-drunk sailors");
	message("\"Nearly all who live in Fawn are sailors. I suppose after all those hours at sea, anything would taste good... Mayhaps it kills thy sense of taste. Or mayhaps the smell of fish kills thy sense of smell. I do not know how anyone could drink that bilge water any other way!\"");
	say();
labelFunc0417_0891:
	case "Fawn" attend labelFunc0417_08AF:
	UI_remove_answer("Fawn");
	message("\"Fawn is a pretty city, built on the water. 'Tis on the west side of the mainland.\"");
	say();
	message("\"I have met Fawn's guard captain. He is a handsome man, quite capable... though how he stomachs that swill they call ale, I shall never know.\"");
	say();
	UI_add_answer("guard captain");
labelFunc0417_08AF:
	case "guard captain" attend labelFunc0417_08CA:
	UI_remove_answer("guard captain");
	message("\"Fawn's guard captain is a fellow named Jorvin.\"");
	say();
	message("\"I would have liked to have become better acquainted with him, but I think that he was already -- friendly -- with the Lady of Fawn herself...\"");
	say();
	message("\"A girl cannot compete with that.\"");
	say();
labelFunc0417_08CA:
	case "Celennia's disappearance" attend labelFunc0417_08F2:
	UI_remove_answer("Celennia's disappearance");
	message("\"I do not know the whole of it, in truth.\"");
	say();
	message("\"All I know is that Celennia and Frigidazzi had some sort of noisy falling out, over the Mage that came here, I did hear.\"");
	say();
	message("\"And then Celennia disappears, just like that! Left Frigidazzi in quite a snit, I'll tell thee!\"");
	say();
	UI_add_answer(["Frigidazzi", "Mage"]);
labelFunc0417_08F2:
	case "Frigidazzi" attend labelFunc0417_0909:
	UI_remove_answer("Frigidazzi");
	message("\"Frigidazzi is the Adept that specializes in cold spells. I have heard her referred to as the 'ice maiden'!\"");
	say();
	message("\"She and Celennia were good friends until Celennia became involved with that Mage.\"");
	say();
labelFunc0417_0909:
	case "Mage" attend labelFunc0417_0924:
	UI_remove_answer("Mage");
	message("\"Batlin, I think his name was. Poked around Moonshade for quite a while, asking questions and buying spells.\"");
	say();
	message("\"I hear that he had something that interested Celennia -- though I will never know what, he was not her type. And whatever it was made Frigidazzi buzzing mad!\"");
	say();
	message("\"Only Frigidazzi knows what happened for certain. And I would not care to ask her about it, either!\"");
	say();
labelFunc0417_0924:
	case "certificate" attend labelFunc0417_0961:
	UI_remove_answer("certificate");
	if (!(gflags[0x00FC] == false)) goto labelFunc0417_095D;
	message("\"With this Crime Certificate, thou canst commit one unlawful act without fear of punishment. If thou dost commit more than one, without another Certificate, Shamino the Anarch's justice will be swift!\"");
	say();
	var000F = Func099B(0xFE9C, 0x0001, 0x031D, 0x00BB, 0xFE99, true, true);
	gflags[0x00FC] = true;
	goto labelFunc0417_0961;
labelFunc0417_095D:
	message("\"I did give thee the Crime Certificate already!\"");
	say();
labelFunc0417_0961:
	case "bye" attend labelFunc0417_098B:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@Goodbye!@", 0x0000);
	Func097F(0xFFE9, "@Do not make trouble!@", 0x0002);
	Func08FF();
	goto labelFunc0417_098E;
labelFunc0417_098B:
	goto labelFunc0417_0221;
labelFunc0417_098E:
	endconv;
labelFunc0417_098F:
	return;
}


