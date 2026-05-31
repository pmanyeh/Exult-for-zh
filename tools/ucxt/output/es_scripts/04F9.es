#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern void Func092E 0x92E (var var0000);

void Func04F9 object#(0x4F9) ()
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

	if (!(event == 0x0001)) goto labelFunc04F9_03C3;
	UI_show_npc_face(0xFF07, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x01F9])) goto labelFunc04F9_0044;
	message("You see a scholarly-looking man with a friendly expression.");
	say();
	gflags[0x01F9] = true;
	gflags[0x01F7] = true;
	goto labelFunc04F9_005B;
labelFunc04F9_0044:
	message("\"Salutations, ");
	message(var0000);
	message(".\"");
	say();
	if (!gflags[0x01F6]) goto labelFunc04F9_005B;
	UI_add_answer("North East sea");
labelFunc04F9_005B:
	if (!gflags[0x01E3]) goto labelFunc04F9_0068;
	UI_add_answer("Zelda's response");
labelFunc04F9_0068:
	converse attend labelFunc04F9_03C2;
	case "name" attend labelFunc04F9_008B:
	message("\"Thou mayest call me Nelson.\"");
	say();
	UI_remove_answer("name");
	if (!gflags[0x01F6]) goto labelFunc04F9_008B;
	UI_add_answer("North East sea");
labelFunc04F9_008B:
	case "job" attend labelFunc04F9_00A4:
	message("\"I am the Lycaeum head here in Moonglow, but,\" he leans close to you, \"mine assistant, Zelda, does most of the work.\"");
	say();
	UI_add_answer(["Moonglow", "Zelda"]);
labelFunc04F9_00A4:
	case "Zelda" attend labelFunc04F9_00C4:
	message("\"She is an excellent assistant. The Lycaeum has never performed better. However, she is a little too stern, I believe, and,\" he leans in again, \"I think she is quite beautiful.\"");
	say();
	UI_add_answer(["stern", "beautiful"]);
	UI_remove_answer("Zelda");
labelFunc04F9_00C4:
	case "North East sea" attend labelFunc04F9_00D7:
	message("\"I have heard the rumors of an island, but I know nothing else about it, I am afraid. Thou mightest wish to speak with Jillian -- she should know a little about the area.\"");
	say();
	UI_remove_answer("North East sea");
labelFunc04F9_00D7:
	case "stern" attend labelFunc04F9_00EA:
	message("\"She has put an extraordinary amount of time and effort into ensuring the activities in this edifice happen smoothly. And,\" he adds, \"she takes it personally when they do not!\"");
	say();
	UI_remove_answer("stern");
labelFunc04F9_00EA:
	case "beautiful" attend labelFunc04F9_010E:
	message("\"Dost thou not agree? I am flushed whenever her fair presence passes by. But!\" he holds up his index finger, \"I fear she does not share a mutual attraction. And she is far too serious for me to feel comfortable with a proposal.\"");
	say();
	gflags[0x01DC] = true;
	if (!gflags[0x01DA]) goto labelFunc04F9_0107;
	UI_add_answer("Zelda's feelings");
labelFunc04F9_0107:
	UI_remove_answer("beautiful");
labelFunc04F9_010E:
	case "Moonglow" attend labelFunc04F9_0128:
	message("\"I love the island and the people. Mostly the people.\"");
	say();
	UI_add_answer("people");
	UI_remove_answer("Moonglow");
labelFunc04F9_0128:
	case "people" attend labelFunc04F9_015D:
	message("\"Hast thou met my twin brother? He heads the Observatory here. And somewhere in the Lycaeum thou canst find Mariah. Sadly, she is not well up here.\" He touches his head.~~\"Jillian, the sage, also studies here in the Lycaeum. A good person to see about other residents of Moonglow would be the bartender at the Friendly Knave. Phearcy knows almost all of us here on the island.~~\"Oh, and thou must not forget the legend of Penumbra. 'Twas two hundred years ago she cast herself into a deep slumber. Now that I think about it, ");
	message(var0000);
	message(", thou art the one she predicted would awaken her.~~\"Better hasten, ");
	message(var0001);
	message(",\" he chuckles.");
	say();
	UI_remove_answer("people");
	UI_add_answer(["twin", "Mariah", "Jillian", "Phearcy", "Penumbra"]);
labelFunc04F9_015D:
	case "twin" attend labelFunc04F9_0170:
	message("\"His name is Brion. People often mistake us for each other, but I think we are nothing alike -- he got all the looks -and- the brains!\"");
	say();
	UI_remove_answer("twin");
labelFunc04F9_0170:
	case "Mariah" attend labelFunc04F9_0183:
	message("\"She was once an adept mage, but ever since the wizards began losing their, er, faculties, she followed suit.\"");
	say();
	UI_remove_answer("Mariah");
labelFunc04F9_0183:
	case "Jillian" attend labelFunc04F9_0196:
	message("\"She rarely has time for visitors, but I know she takes on students every now and then.\"");
	say();
	UI_remove_answer("Jillian");
labelFunc04F9_0196:
	case "Phearcy" attend labelFunc04F9_01A9:
	message("\"That one keeps up on his politics, or rather, his gossip,\" he says, grinning. \"If thou dost want to learn about a resident of Moonglow, visit him.\"");
	say();
	UI_remove_answer("Phearcy");
labelFunc04F9_01A9:
	case "Penumbra" attend labelFunc04F9_01BC:
	message("\"Interestingly enough, no one has ever discovered how to enter her house. I believe those mysterious signs on the door require one to have specific items to place next to the plaques.\"");
	say();
	UI_remove_answer("Penumbra");
labelFunc04F9_01BC:
	case "Zelda's response" attend labelFunc04F9_01D5:
	message("He smiles broadly. \"Truly that was her response? I am pleased to no end! I thank thee, ");
	message(var0000);
	message(", for bringing this joyful message.\"");
	say();
	UI_remove_answer("Zelda's response");
labelFunc04F9_01D5:
	case "Zelda's feelings" attend labelFunc04F9_01E8:
	message("\"Oh. Oh well,\" he shrugs in an attempt at indifference. \"She was not truly important anyway.\"");
	say();
	UI_remove_answer("Zelda's feelings");
labelFunc04F9_01E8:
	case "bye" attend labelFunc04F9_022E:
	if (!(gflags[0x01E4] && (gflags[0x01E5] && (gflags[0x01E6] && gflags[0x01E7])))) goto labelFunc04F9_0210;
	message("\"Good day, ");
	message(var0001);
	message(". Thou of course dost have free reign of the Lycaeum.\"*");
	say();
	abort;
	goto labelFunc04F9_022E;
labelFunc04F9_0210:
	message("\"Of course thou mayest have free reign of the building. But first,\" he grins, \"let me show thee my...\"");
	say();
	UI_push_answers();
	UI_add_answer(["bookstand", "bookmark", "quill holder", "book", "nothing"]);
labelFunc04F9_022E:
	case "bookstand" attend labelFunc04F9_0262:
	var0002 = UI_find_nearest(0xFE9C, 0x02B9, 0xFFFF);
	if (!var0002) goto labelFunc04F9_0253;
	message("\"This solid brass bookstand has matching, overhanging candleholder for late-night exploration in literature. I invented it myself.\"");
	say();
	goto labelFunc04F9_0257;
labelFunc04F9_0253:
	message("\"'Twas just here...\" he scratches his chin. \"Oh well, never mind.\"");
	say();
labelFunc04F9_0257:
	UI_remove_answer("bookstand");
	gflags[0x01E4] = true;
labelFunc04F9_0262:
	case "bookmark" attend labelFunc04F9_02BC:
	var0003 = false;
	var0004 = UI_find_nearby(item, 0x02A3, 0x0014, 0x0000);
	enum();
labelFunc04F9_0280:
	for (var0007 in var0004 with var0005 to var0006) attend labelFunc04F9_02A0;
	if (!(UI_get_item_frame(var0007) == 0x0004)) goto labelFunc04F9_029D;
	var0003 = true;
labelFunc04F9_029D:
	goto labelFunc04F9_0280;
labelFunc04F9_02A0:
	if (!var0003) goto labelFunc04F9_02AD;
	message("\"This,\" he says, holding a solid-gold sheet shaped like a maple leaf, \"I purchased at an auction for only half of its value.\"");
	say();
	goto labelFunc04F9_02B1;
labelFunc04F9_02AD:
	message("He appears upset. \"I knew someday that would be stolen,\" he says angrily.~~\"I should have known better than to show it to every person who comes to visit.\"");
	say();
labelFunc04F9_02B1:
	UI_remove_answer("bookmark");
	gflags[0x01E5] = true;
labelFunc04F9_02BC:
	case "quill holder" attend labelFunc04F9_0359:
	var0008 = false;
	var0009 = UI_find_nearby(item, 0x02A3, 0x0014, 0x0000);
	enum();
labelFunc04F9_02DA:
	for (var0007 in var0009 with var000A to var000B) attend labelFunc04F9_02FA;
	if (!(UI_get_item_frame(var0007) == 0x0003)) goto labelFunc04F9_02F7;
	var0008 = true;
labelFunc04F9_02F7:
	goto labelFunc04F9_02DA;
labelFunc04F9_02FA:
	var000C = false;
	var000D = UI_find_nearby(item, 0x02A3, 0x0014, 0x0000);
	enum();
labelFunc04F9_0310:
	for (var0007 in var000D with var000E to var000F) attend labelFunc04F9_0330;
	if (!(UI_get_item_frame(var0007) == 0x0005)) goto labelFunc04F9_032D;
	var000C = true;
labelFunc04F9_032D:
	goto labelFunc04F9_0310;
labelFunc04F9_0330:
	if (!var0008) goto labelFunc04F9_034A;
	if (!var000C) goto labelFunc04F9_0343;
	message("He shows you a serpent-shaped, oaken quill holder and its matching scroll opener. \"This I picked up\twhile travelling through -- thou canst guess it -- Serpent's Hold.\"");
	say();
	goto labelFunc04F9_0347;
labelFunc04F9_0343:
	message("He shows you a serpent-shaped, oaken quill holder.\t\"This I picked up while travelling through -- thou\tcanst guess it -- Serpent's Hold. But,\" he appears puzzled, \"I could have sworn the matching letter opener was here as well. How odd.\"");
	say();
labelFunc04F9_0347:
	goto labelFunc04F9_034E;
labelFunc04F9_034A:
	message("\"The quill holder is gone?\" he exclaims. \"And what about the...\" he seems to be searching for something.~~\"The matching scroll opener is also missing!\"");
	say();
labelFunc04F9_034E:
	UI_remove_answer("quill holder");
	gflags[0x01E6] = true;
labelFunc04F9_0359:
	case "book" attend labelFunc04F9_03B3:
	var0010 = false;
	var0011 = UI_find_nearby(item, 0x02A3, 0x0014, 0x0000);
	enum();
labelFunc04F9_0377:
	for (var0010 in var0009 with var0012 to var0013) attend labelFunc04F9_0397;
	if (!(UI_get_item_quality(var0010) == 0x0004)) goto labelFunc04F9_0394;
	var0010 = true;
labelFunc04F9_0394:
	goto labelFunc04F9_0377;
labelFunc04F9_0397:
	if (!var0010) goto labelFunc04F9_03A4;
	message("He gingerly pulls out a leatherbound tome. From his robe, he removes a handkerchief and meticulously wipes away the dust.~~\"This was given to me by Lord British himself. See, 'tis the first edition.\"~~The book he carefully places in your palms is very old, and the gold leaf plating of the title has been almost entirely rubbed off. Turning the book right side up, you can read the title: \"Stranger in a Strange Land.\"");
	say();
	goto labelFunc04F9_03A8;
labelFunc04F9_03A4:
	message("\"'Tis not here... Oh well, Zelda must have put it back on the shelf.\" He sighs.");
	say();
labelFunc04F9_03A8:
	UI_remove_answer("book");
	gflags[0x01E7] = true;
labelFunc04F9_03B3:
	case "nothing" attend labelFunc04F9_03BF:
	UI_pop_answers();
labelFunc04F9_03BF:
	goto labelFunc04F9_0068;
labelFunc04F9_03C2:
	endconv;
labelFunc04F9_03C3:
	if (!(event == 0x0000)) goto labelFunc04F9_03D1;
	Func092E(0xFF07);
labelFunc04F9_03D1:
	return;
}


