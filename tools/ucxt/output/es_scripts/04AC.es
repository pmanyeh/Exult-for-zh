#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090B 0x90B (var var0000);
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func04AC object#(0x4AC) ()
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

	if (!(event == 0x0001)) goto labelFunc04AC_0604;
	UI_show_npc_face(0xFF54, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = "Avatar";
	var0003 = "None of thy concern";
	var0004 = UI_part_of_day();
	var0005 = UI_get_schedule_type(UI_get_npc_object(0xFF54));
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x022F]) goto labelFunc04AC_005B;
	var0006 = var0000;
labelFunc04AC_005B:
	if (!gflags[0x0230]) goto labelFunc04AC_0067;
	var0006 = var0001;
labelFunc04AC_0067:
	if (!gflags[0x0214]) goto labelFunc04AC_0081;
	var0006 = var0001;
	if (!(!gflags[0x0235])) goto labelFunc04AC_0081;
	UI_add_answer("apology");
labelFunc04AC_0081:
	if (!(gflags[0x0213] && (!gflags[0x0218]))) goto labelFunc04AC_0093;
	UI_add_answer("Tobias stole venom");
labelFunc04AC_0093:
	if (!gflags[0x0233]) goto labelFunc04AC_00A0;
	UI_add_answer("ledger");
labelFunc04AC_00A0:
	var0007 = Func0931(0xFE9B, 0x0001, 0x0289, 0xFE99, 0x0001);
	if (!var0007) goto labelFunc04AC_00C2;
	UI_add_answer("return venom");
labelFunc04AC_00C2:
	if (!(!gflags[0x0225])) goto labelFunc04AC_0138;
	message("You see a man whose eyes slowly shift back and forth as a crooked smile curls his lips. He walks up to you, looks you up and down. \"Oh, there must be a travelling show in town!\" he says sniggering. \"That is a very nice clown costume! Who art thou?\"*");
	say();
	var0008 = Func090B([var0000, var0002, var0003]);
	if (!(var0008 == var0000)) goto labelFunc04AC_00FD;
	message("\"Very well, ");
	message(var0000);
	message(". What dost thou want?\"");
	say();
	gflags[0x022F] = true;
	var0006 = var0000;
labelFunc04AC_00FD:
	if (!(var0008 == var0003)) goto labelFunc04AC_0114;
	message("\"Rude dog!\"*");
	say();
	gflags[0x0230] = true;
	gflags[0x0225] = true;
	abort;
labelFunc04AC_0114:
	if (!(var0008 == var0002)) goto labelFunc04AC_0131;
	message("\"Thou art a vile fool, desperate for others to like thee. I would pity thee, were it not that I loathe thee even more!\"*");
	say();
	gflags[0x0214] = true;
	var0006 = var0002;
	gflags[0x0225] = true;
	abort;
labelFunc04AC_0131:
	gflags[0x0225] = true;
	goto labelFunc04AC_0142;
labelFunc04AC_0138:
	message("\"Greetings, ");
	message(var0006);
	message(",\" says Morfin.");
	say();
labelFunc04AC_0142:
	converse attend labelFunc04AC_05FF;
	case "name" attend labelFunc04AC_0158:
	message("\"My name is Morfin.\"");
	say();
	UI_remove_answer("name");
labelFunc04AC_0158:
	case "job" attend labelFunc04AC_0174:
	message("\"I am a merchant who operates one of the most thriving businesses in Paws, which includes the slaughterhouse.\"");
	say();
	UI_add_answer(["merchant", "Paws", "slaughterhouse"]);
labelFunc04AC_0174:
	case "merchant" attend labelFunc04AC_0194:
	message("\"Oh, I sell a little of this and that, here and there. Wherever there is a demand, I try to supply it.\"");
	say();
	UI_add_answer(["demand", "supply"]);
	UI_remove_answer("merchant");
labelFunc04AC_0194:
	case "demand" attend labelFunc04AC_01A7:
	message("\"There is quite a demand for the venom of the silver serpent in certain areas, for instance.\"");
	say();
	UI_remove_answer("demand");
labelFunc04AC_01A7:
	case "supply" attend labelFunc04AC_01C7:
	message("\"I keep a small stock of silver serpent venom from time to time which I sell to the apothecary in Britannia for a modest profit. The government is trying to control sales of it until they can determine how dangerous the effects are.\"");
	say();
	UI_remove_answer("supply");
	UI_add_answer(["apothecary", "effects"]);
labelFunc04AC_01C7:
	case "apothecary" attend labelFunc04AC_01DA:
	message("\"His name is Kessler.\"");
	say();
	UI_remove_answer("apothecary");
labelFunc04AC_01DA:
	case "Paws" attend labelFunc04AC_01FB:
	message("\"I do suppose my ventures are profitable enough for me to afford to move to Britain, but things are so much less expensive here. Of course, the theft has me a bit wary.~~\"If thou dost wish to know more about the people here, speak to the couple who run the Fellowship shelter, Feridwyn and Brita.\"");
	say();
	UI_remove_answer("Paws");
	if (!(!gflags[0x0218])) goto labelFunc04AC_01FB;
	UI_add_answer("theft");
labelFunc04AC_01FB:
	case "slaughterhouse" attend labelFunc04AC_0215:
	message("\"I take it thou hast noticed the smell. If so I do apologize.\" He shrugs his shoulders, grinning, and holds his palms upward.~~\"I think of it as the smell of success. Thou mayest purchase some meat if thou so wishest.\"");
	say();
	UI_add_answer("buy meat");
	UI_remove_answer("slaughterhouse");
labelFunc04AC_0215:
	case "buy meat" attend labelFunc04AC_0250:
	if (!(var0005 == 0x0007)) goto labelFunc04AC_0245;
	message("\"I sell mutton, beef, and ham. Which wouldst thou like?\"");
	say();
	UI_push_answers();
	UI_add_answer(["nothing", "mutton", "beef", "ham"]);
	goto labelFunc04AC_0249;
labelFunc04AC_0245:
	message("\"The slaughterhouse is closed. Come around when it is open for business and I shall sell thee meats then.\"");
	say();
labelFunc04AC_0249:
	UI_remove_answer("buy meat");
labelFunc04AC_0250:
	case "nothing" attend labelFunc04AC_0260:
	message("\"Some other time, perhaps.\"");
	say();
	UI_pop_answers();
labelFunc04AC_0260:
	case "mutton" attend labelFunc04AC_0307:
	message("\"'Twill cost thee 3 gold each. Still interested?\"");
	say();
	if (!Func090A()) goto labelFunc04AC_02F6;
	message("\"How many dost thou want?\"");
	say();
	var0009 = UI_input_numeric_value(0x0001, 0x0014, 0x0001, 0x0001);
	var000A = (var0009 * 0x0003);
	var000B = UI_remove_party_items(var000A, 0x0284, 0xFE99, 0xFE99, true);
	if (!var000B) goto labelFunc04AC_02E9;
	var000C = UI_add_party_items(var0009, 0x0179, 0xFE99, 0x0008, true);
	if (!var000C) goto labelFunc04AC_02CE;
	message("\"Here it is.\"");
	say();
	goto labelFunc04AC_02E6;
labelFunc04AC_02CE:
	message("\"Thou hast not the room for this meat.\"");
	say();
	var000D = UI_add_party_items(var000A, 0x0284, 0xFE99, 0xFE99, true);
labelFunc04AC_02E6:
	goto labelFunc04AC_02F3;
labelFunc04AC_02E9:
	message("\"Thou hast not the gold for this, ");
	message(var0006);
	message(". Perhaps something else.\"");
	say();
labelFunc04AC_02F3:
	goto labelFunc04AC_0300;
labelFunc04AC_02F6:
	message("\"Perhaps next time, ");
	message(var0006);
	message(".\"");
	say();
labelFunc04AC_0300:
	UI_remove_answer("mutton");
labelFunc04AC_0307:
	case "beef" attend labelFunc04AC_03AE:
	message("\"'Twill cost thee 2 gold each. Still interested?\"");
	say();
	if (!Func090A()) goto labelFunc04AC_039D;
	message("\"How many dost thou want?\"");
	say();
	var000E = UI_input_numeric_value(0x0001, 0x0014, 0x0001, 0x0001);
	var000F = (var000E * 0x0002);
	var0010 = UI_remove_party_items(var000F, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0010) goto labelFunc04AC_0390;
	var0011 = UI_add_party_items(var000E, 0x0179, 0xFE99, 0x0009, true);
	if (!var0011) goto labelFunc04AC_0375;
	message("\"Here it is.\"");
	say();
	goto labelFunc04AC_038D;
labelFunc04AC_0375:
	message("\"Thou hast not the room for this meat.\"");
	say();
	var0012 = UI_add_party_items(var000F, 0x0284, 0xFE99, 0xFE99, true);
labelFunc04AC_038D:
	goto labelFunc04AC_039A;
labelFunc04AC_0390:
	message("\"Thou hast not the gold for this, ");
	message(var0006);
	message(". Perhaps something else.\"");
	say();
labelFunc04AC_039A:
	goto labelFunc04AC_03A7;
labelFunc04AC_039D:
	message("\"Perhaps next time, ");
	message(var0006);
	message(".\"");
	say();
labelFunc04AC_03A7:
	UI_remove_answer("beef");
labelFunc04AC_03AE:
	case "ham" attend labelFunc04AC_0455:
	message("\"'Twill cost thee 4 gold each. Still interested?\"");
	say();
	if (!Func090A()) goto labelFunc04AC_0444;
	message("\"How many dost thou want?\"");
	say();
	var0013 = UI_input_numeric_value(0x0001, 0x0014, 0x0001, 0x0001);
	var0014 = (var0013 * 0x0004);
	var0015 = UI_remove_party_items(var0014, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0015) goto labelFunc04AC_0437;
	var0016 = UI_add_party_items(var0013, 0x0179, 0xFE99, 0x000B, true);
	if (!var0016) goto labelFunc04AC_041C;
	message("\"Here it is.\"");
	say();
	goto labelFunc04AC_0434;
labelFunc04AC_041C:
	message("\"Thou hast not the room for this meat.\"");
	say();
	var0017 = UI_add_party_items(var0014, 0x0284, 0xFE99, 0xFE99, true);
labelFunc04AC_0434:
	goto labelFunc04AC_0441;
labelFunc04AC_0437:
	message("\"Thou hast not the gold for this, ");
	message(var0006);
	message(". Perhaps something else.\"");
	say();
labelFunc04AC_0441:
	goto labelFunc04AC_044E;
labelFunc04AC_0444:
	message("\"Perhaps next time, ");
	message(var0006);
	message(".\"");
	say();
labelFunc04AC_044E:
	UI_remove_answer("ham");
labelFunc04AC_0455:
	case "venom" attend labelFunc04AC_0497:
	message("\"A terrible crime, causing me no small amount of monetary distress. It has caused the surrounding community to worry about their possessions as well.\"");
	say();
	if (!(!gflags[0x0218])) goto labelFunc04AC_048C;
	message("\"I would be thine humble servant shouldst thou help investigate the matter. Wilt thou?\"");
	say();
	var0018 = Func090A();
	if (!var0018) goto labelFunc04AC_0485;
	message("\"Then I shall cooperate fully, ");
	message(var0001);
	message(".\" He bows.");
	say();
	goto labelFunc04AC_0489;
labelFunc04AC_0485:
	message("\"I do hope the culprit will be revealed through other methods then.\"");
	say();
labelFunc04AC_0489:
	goto labelFunc04AC_0490;
labelFunc04AC_048C:
	message("\"I thank thee for solving the mystery of who was behind it.\"");
	say();
labelFunc04AC_0490:
	UI_remove_answer("venom");
labelFunc04AC_0497:
	case "theft" attend labelFunc04AC_04B5:
	message("\"Thou art a stranger in Paws. Beware the thief who roams this town! The culprit has stolen a quantity of my valuable silver serpent venom!\"");
	say();
	gflags[0x0212] = true;
	UI_remove_answer("theft");
	UI_add_answer("venom");
labelFunc04AC_04B5:
	case "apology" attend labelFunc04AC_04D2:
	message("\"I do apologize for my rudeness earlier, ");
	message(var0006);
	message(". I have since realized that thou art an honest person. Please forgive mine insults.\" He bows, dripping insincerity.");
	say();
	UI_remove_answer("apology");
	gflags[0x0235] = true;
labelFunc04AC_04D2:
	case "ledger" attend labelFunc04AC_04F8:
	message("You tell Morfin that you have seen his ledger. \"Wait, ");
	message(var0006);
	message("! I admit I do sell Silver Serpent Venom to other places besides the Apothecary. But what I am doing is not -precisely- against the law!\"");
	say();
	UI_add_answer(["sell", "law"]);
	UI_remove_answer("ledger");
labelFunc04AC_04F8:
	case "sell" attend labelFunc04AC_050B:
	message("\"My supply comes from some old friends in Buccaneer's Den. Where they get it, who can say?\"");
	say();
	UI_remove_answer("sell");
labelFunc04AC_050B:
	case "law" attend labelFunc04AC_0525:
	message("\"I have a notarized contract with the Britannian Mining Company. They use it to keep their gargoyles working longer hours. It seems gargoyles have a greater resistance to the effects of Silver Serpent Venom. Poor devils.\" He grins maliciously at his own joke.");
	say();
	UI_remove_answer("law");
	UI_add_answer("effects");
labelFunc04AC_0525:
	case "effects" attend labelFunc04AC_053F:
	message("\"They are widely known. Silver serpent venom is a reagent that, when ingested in small doses, temporarily enhances one's physical strength, stamina and quickness along with bringing a feeling of euphoria.~~\"After the effects\twear off, the subject feels quite drained. This tends to make them want to take it again.~~\"Prolonged use in such a fashion will bring about a condition that deteriorates the skin, eventually causing it to rot away.~~\"Finally, too great a dose, or too great an accumulation of doses, is fatal, as the venom is a deadly poison.~~\"It may very well have some healing properties when used in other ways we have yet to discover, but any user of the venom should not do so without caution.\"");
	say();
	UI_remove_answer("effects");
	UI_add_answer("user");
labelFunc04AC_053F:
	case "user", "Tobias stole venom" attend labelFunc04AC_0577:
	if (!gflags[0x0213]) goto labelFunc04AC_056C;
	message("\"I am not so sure Tobias was the one who stole the venom. I have not seen any of the signs of venom use in Tobias and I am quite familiar with its symptoms. But, now that I think about it, I have noticed that Garritt has appeared very tired lately. He seems hyperactive one moment and unhealthy the next.\"");
	say();
	if (!(!gflags[0x0237])) goto labelFunc04AC_0562;
	UI_add_answer("Garritt");
labelFunc04AC_0562:
	UI_remove_answer("Tobias stole venom");
	goto labelFunc04AC_0570;
labelFunc04AC_056C:
	message("\"I do not believe I have noticed anyone in town who is showing the symptoms of venom use. From now on I shall keep watch, so thou shouldst ask again later.\"");
	say();
labelFunc04AC_0570:
	UI_remove_answer("user");
labelFunc04AC_0577:
	case "Garritt" attend labelFunc04AC_05B3:
	message("\"Perhaps thou shouldst make a search of Garritt's belongings! Which reminds me-- I saw him earlier playing near the slaughterhouse. He dropped this key. Perhaps it opens something... significant.\"");
	say();
	var0019 = UI_add_party_items(0x0001, 0x0281, 0x00E0, 0x0006, false);
	if (!var0019) goto labelFunc04AC_05A8;
	message("\"Here it is.\"");
	say();
	gflags[0x0237] = true;
	goto labelFunc04AC_05AC;
labelFunc04AC_05A8:
	message("\"I shall give it to thee when thine hands are not so full.\"");
	say();
labelFunc04AC_05AC:
	UI_remove_answer("Garritt");
labelFunc04AC_05B3:
	case "return venom" attend labelFunc04AC_05F1:
	var001A = UI_remove_party_items(0x0001, 0x0289, 0xFE99, 0xFE99, true);
	if (!var001A) goto labelFunc04AC_05E6;
	message("\"I thank thee for ferreting out the thief and returning my snake venom.\"");
	say();
	if (!gflags[0x0218]) goto labelFunc04AC_05E3;
	message("\"So Garritt was the culprit, eh? I am not surprised now that I think about it. I must keep closer tabs on my venom from now on.\"");
	say();
labelFunc04AC_05E3:
	goto labelFunc04AC_05EA;
labelFunc04AC_05E6:
	message("\"Of course, I do wish for thee to return my venom to me if thou hast recovered it.\"");
	say();
labelFunc04AC_05EA:
	UI_remove_answer("return venom");
labelFunc04AC_05F1:
	case "bye" attend labelFunc04AC_05FC:
	goto labelFunc04AC_05FF;
labelFunc04AC_05FC:
	goto labelFunc04AC_0142;
labelFunc04AC_05FF:
	endconv;
	message("\"Good day to thee.\"*");
	say();
labelFunc04AC_0604:
	if (!(event == 0x0000)) goto labelFunc04AC_0612;
	Func092E(0xFF54);
labelFunc04AC_0612:
	return;
}


