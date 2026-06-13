#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func090A 0x90A ();
extern void Func08C3 0x8C3 ();
extern void Func08C4 0x8C4 ();
extern void Func0911 0x911 (var var0000);

void Func0466 object#(0x466) ()
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

	if (!(event == 0x0000)) goto labelFunc0466_0009;
	abort;
labelFunc0466_0009:
	UI_show_npc_face(0xFF9A, 0x0000);
	var0000 = Func0908();
	UI_add_answer(["name", "job", "bye"]);
	var0001 = UI_get_party_list();
	var0002 = UI_count_objects(0xFE9B, 0x0347, 0xFE99, 0x0000);
	if (!gflags[0x01D2]) goto labelFunc0466_0056;
	UI_add_answer(["hourglass", "Time Lord"]);
labelFunc0466_0056:
	if (!(var0002 || gflags[0x0211])) goto labelFunc0466_0067;
	UI_add_answer("enchant");
labelFunc0466_0067:
	if (!(!gflags[0x0140])) goto labelFunc0466_0079;
	message("Your old friend Nicodemus has a far away look in his eyes.");
	say();
	gflags[0x0140] = true;
	goto labelFunc0466_0091;
labelFunc0466_0079:
	if (!(!gflags[0x0003])) goto labelFunc0466_0087;
	message("\"Who art thou?\" Nicodemus asks. \"Oh, I remember. Remember demember! Ha ha ha!\"");
	say();
	goto labelFunc0466_0091;
labelFunc0466_0087:
	message("\"Hello again, ");
	message(var0000);
	message(",\" says Nicodemus.");
	say();
labelFunc0466_0091:
	converse attend labelFunc0466_02F9;
	case "name" attend labelFunc0466_00B5:
	if (!(!gflags[0x0003])) goto labelFunc0466_00AA;
	message("\"That is a very good question. Some days I can actually remember. Let's see... today... Yes! I am Nicodemus! Nicodomus! Nicodimus! Nico-nico-kukodamus! Ha ha ha!\"");
	say();
	goto labelFunc0466_00AE;
labelFunc0466_00AA:
	message("\"Thou art addressing Nicodemus.\"");
	say();
labelFunc0466_00AE:
	UI_remove_answer("name");
labelFunc0466_00B5:
	case "job" attend labelFunc0466_00E9:
	if (!(!gflags[0x0003])) goto labelFunc0466_00D8;
	message("\"To go absolutely mad! For that is indeed what is happening! My magic no longer works! Every time I attempt to change something into a drake, it only becomes a newt! Oh, newty-wewty scooty-booty!\" He speaks to an imaginary creature beside him. \"Who asked thee? Away with thee!\" He turns to you. \"Sorry. That bloody newt keeps trying to undermine my conversation. Anyway... I suppose I can sell thee some reagents, potions, or spells. I must make a living somecow. I mean somehow! That was Some Cow! Ha ha ha!\"");
	say();
	UI_add_answer(["magic", "potions"]);
	goto labelFunc0466_00DC;
labelFunc0466_00D8:
	message("\"Why, to perform magic! It seems that the disturbance in the ether has been repaired! I can also sell thee some reagents or spells.\"");
	say();
labelFunc0466_00DC:
	UI_add_answer(["spells", "reagents"]);
labelFunc0466_00E9:
	case "magic" attend labelFunc0466_010A:
	if (!(!gflags[0x0003])) goto labelFunc0466_00FF;
	message("\"Magic? What magic!? All the magic in the world has gone completely topsy-turvy! Oh, blurpsy-flurpsy! Ha ha ha! Those are silly words, are they not? 'Tis a pity they are not magical! Ha ha ha!\"");
	say();
	goto labelFunc0466_0103;
labelFunc0466_00FF:
	message("\"The ether is repaired. The mages of the world are indebted to thee.\"");
	say();
labelFunc0466_0103:
	UI_remove_answer("magic");
labelFunc0466_010A:
	case "spells" attend labelFunc0466_012C:
	message("\"Dost thou wish to buy some spells?\"");
	say();
	var0003 = Func090A();
	if (!var0003) goto labelFunc0466_0128;
	Func08C3();
	goto labelFunc0466_012C;
labelFunc0466_0128:
	message("\"Never mind, then!\"");
	say();
labelFunc0466_012C:
	case "reagents" attend labelFunc0466_014E:
	message("\"Dost thou wish to buy some reagents?\"");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc0466_014A;
	Func08C4();
	goto labelFunc0466_014E;
labelFunc0466_014A:
	message("\"Never mind, then!\"");
	say();
labelFunc0466_014E:
	case "potions" attend labelFunc0466_01E3:
	if (!(!gflags[0x0003])) goto labelFunc0466_0164;
	message("\"Potions? What makes thee think I have potions? Art thou sure thou dost not want Lotions? I certainly have lotions! Otions, slotions, motions, votions! Ha ha ha! Wait! Oh, yes! I do have potions! I told thee so, didn't I! Let us see... I have this black potion here. I am not sure what it does exactly, but I am quite sure it turns one invisible.");
	say();
	goto labelFunc0466_0168;
labelFunc0466_0164:
	message("\"Yes, I have potions. Well, I have this black one. It is an invisibility potion.");
	say();
labelFunc0466_0168:
	message("\"Dost thou want it for, say, 75 gold?\"");
	say();
	var0005 = Func090A();
	if (!var0005) goto labelFunc0466_01D8;
	var0006 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var0006 >= 0x004B)) goto labelFunc0466_01D1;
	var0007 = UI_add_party_items(0x0001, 0x0154, 0xFE99, 0x0007, true);
	if (!var0007) goto labelFunc0466_01CA;
	message("\"Here is the potion.\"");
	say();
	var0008 = UI_remove_party_items(0x004B, 0x0284, 0xFE99, 0xFE99, true);
	goto labelFunc0466_01CE;
labelFunc0466_01CA:
	message("\"Thou dost not have enough room to carry the potion!\"");
	say();
labelFunc0466_01CE:
	goto labelFunc0466_01D5;
labelFunc0466_01D1:
	message("\"Art thou trying to cheat me? Thou dost not have enough gold!\"");
	say();
labelFunc0466_01D5:
	goto labelFunc0466_01DC;
labelFunc0466_01D8:
	message("\"Then why didst thou mention it? Leave me alone!\"");
	say();
labelFunc0466_01DC:
	UI_remove_answer("potions");
labelFunc0466_01E3:
	case "Time Lord" attend labelFunc0466_0226:
	if (!(!gflags[0x0003])) goto labelFunc0466_0214;
	message("\"Timey Limey Lord? Hmmm. I don't know him. Wait! Yes I do. Does he have a big black mustache and three pairs of pants? No! I know who he is. He's the fellow who came to fix my sundial the other day, right?\"");
	say();
	var0009 = Func090A();
	if (!var0009) goto labelFunc0466_0209;
	message("\"I thought so! Tell him that bloody thing still doesn't work! It gives me three shadows! Dadows badows whoopeee! Ha ha ha!\"");
	say();
	goto labelFunc0466_020D;
labelFunc0466_0209:
	message("\"He's not? Hmmm. Then he must be the man I am not thinking of!\"");
	say();
labelFunc0466_020D:
	message("\"Wait! I remember! He is my Knight's Bridge opponent! We play on my Knight's Bridge court just north of mine house.\"");
	say();
	goto labelFunc0466_0218;
labelFunc0466_0214:
	message("\"I have not spoken to the Time Lord in months! How is the old codger? Give him my regards. Tell him I miss our Knight's Bridge games!\"");
	say();
labelFunc0466_0218:
	UI_remove_answer("Time Lord");
	UI_add_answer("Knight's Bridge");
labelFunc0466_0226:
	case "Knight's Bridge" attend labelFunc0466_0239:
	message("\"'Tis a life-size board game. I have a book around here somewhere which contains the rules.\"");
	say();
	UI_remove_answer("Knight's Bridge");
labelFunc0466_0239:
	case "hourglass" attend labelFunc0466_0287:
	if (!gflags[0x012D]) goto labelFunc0466_024E;
	message("\"Yes, I just enchanted it.\"");
	say();
	goto labelFunc0466_0280;
labelFunc0466_024E:
	if (!(!(gflags[0x0211] || var0002))) goto labelFunc0466_026E;
	if (!(!gflags[0x0003])) goto labelFunc0466_0267;
	message("\"This Time Lord told thee what? An hourglass! I have no blinking hourglass! Glassy wassy hoursplassy! Ha ha ha! Wait! An enchanted hourglass? That does ring a bell. Clang Clang Clang! Ha ha ha! Wait! I remember. I had an hourglass. I sold it. To a gypsy. Or was it an antique dealer? I think I might have sold it to a gypsy antique dealer in Britain. Or Paws. Somewhere on that side of the land. But if my memory serves me correctly, that hourglass used up its enchantment, which is why I sold it. I suppose if the ether is repaired, I could possibly re-enchant it. Bring it to me and we'll see what we can do. I know! We can play a rousing game of chess! But only if I can deal at all times. I do not trust thee.\"");
	say();
	goto labelFunc0466_026B;
labelFunc0466_0267:
	message("\"Mine old hourglass! Of course I remember it! I believe I sold it to an antique dealer in Paws. I might be able to re-enchant it if thou wouldst bring it to me.\"");
	say();
labelFunc0466_026B:
	goto labelFunc0466_0280;
labelFunc0466_026E:
	if (!(!gflags[0x0003])) goto labelFunc0466_027C;
	message("\"What's this? An hourglass of some kind? Wait! It looks vaguely familiar! Thief!! This is mine hourglass! I have been looking for it for years! Where didst thou get it, scoundrel? I shall turn thee into a duck!\"~~Nicodemus intones some spell and points at you, but nothing happens.~~\"Zounds! Thou art no more a quacker than I am. Nothing works anymore. Quacker slacker wacker flacker! Ha ha ha!\"");
	say();
	goto labelFunc0466_0280;
labelFunc0466_027C:
	message("\"Mine old hourglass! I suppose I could revitalize the enchantment upon it.\"");
	say();
labelFunc0466_0280:
	UI_remove_answer("hourglass");
labelFunc0466_0287:
	case "enchant" attend labelFunc0466_02EB:
	if (!(!gflags[0x0003])) goto labelFunc0466_029D;
	message("\"Enchant? Thou dost want me to enchant this wretched thing? Thou must have the brain of a toad! Toady woady bloady coady! Ha ha ha!~~\"Do me a favor, Mister Avatar. Repair the blinking ether, wilt thou? Do that and I can enchant thy glourblass. I mean floursass. I mean hourglass. Tell that to thy 'Time Lord'. Thou canst also tell him he needs a bath.\"");
	say();
	goto labelFunc0466_02E4;
labelFunc0466_029D:
	message("\"I would be most happy to enchant the hourglass. After freeing the ether, I am most indebted to thee. Let me see it...\"");
	say();
	if (!var0002) goto labelFunc0466_02E0;
	message("Nicodemus takes the hourglass and studies it a moment. He sets it on a table and closes his eyes, concentrating. He intones a few words, throws some reagents into the air, and passes his hand over the artifact.~~\"That should do it.\" He hands the hourglass back to you.");
	say();
	var000A = UI_remove_party_items(0x0001, 0x0347, 0xFE99, 0x0000, false);
	var000B = UI_add_party_items(0x0001, 0x0347, 0xFE99, 0x0001, false);
	gflags[0x012D] = true;
	Func0911(0x0064);
	goto labelFunc0466_02E4;
labelFunc0466_02E0:
	message("\"Where is it? Thou dost not have the hourglass!\"");
	say();
labelFunc0466_02E4:
	UI_remove_answer("enchant");
labelFunc0466_02EB:
	case "bye" attend labelFunc0466_02F6:
	goto labelFunc0466_02F9;
labelFunc0466_02F6:
	goto labelFunc0466_0091;
labelFunc0466_02F9:
	endconv;
	if (!(!gflags[0x0003])) goto labelFunc0466_0308;
	message("\"Bye bye booby booby bye bye! Ha ha ha!\"*");
	say();
	goto labelFunc0466_0312;
labelFunc0466_0308:
	message("\"Goodbye, ");
	message(var0000);
	message(".\"*");
	say();
labelFunc0466_0312:
	return;
}


