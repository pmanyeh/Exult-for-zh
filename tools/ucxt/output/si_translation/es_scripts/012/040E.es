#game "serpentisle"
// externs
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func0816 0x816 ();
extern var Func0955 0x955 ();
extern void Func08FF 0x8FF ();

void Func040E object#(0x40E) ()
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

	var0000 = "Mundane";
	if (!gflags[0x00DB]) goto labelFunc040E_0012;
	var0000 = "Mage";
labelFunc040E_0012:
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	var0003 = UI_part_of_day();
	if (!((var0003 > 0x0001) || (var0003 < 0x0006))) goto labelFunc040E_0041;
	var0003 = "day";
	goto labelFunc040E_0047;
labelFunc040E_0041:
	var0003 = "evening";
labelFunc040E_0047:
	if (!(event == 0x0001)) goto labelFunc040E_007D;
	UI_item_say(0xFE9C, "Hello, there.");
	0xFFF2->Func07D1();
	Func097F(0xFFF2, (("@Greetings, " + var0000) + "."), 0x0002);
	UI_set_schedule_type(0xFFF2, 0x0003);
labelFunc040E_007D:
	if (!((event == 0x0007) && UI_get_item_flag(item, 0x001D))) goto labelFunc040E_00A0;
	var0004 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0329]);
labelFunc040E_00A0:
	if (!(event == 0x0000)) goto labelFunc040E_00B0;
	UI_set_schedule_type(item, 0x0015);
labelFunc040E_00B0:
	if (!(event == 0x0009)) goto labelFunc040E_0450;
	UI_run_schedule(0xFFF2);
	UI_clear_item_say(0xFFF2);
	UI_halt_scheduled(0xFFF2);
	UI_halt_scheduled(0xFE9C);
	var0005 = UI_get_item_flag(0xFF58, 0x0004);
	if (!gflags[0x00E2]) goto labelFunc040E_00F5;
	if (!(!var0005)) goto labelFunc040E_00F5;
	UI_add_answer("Stefano");
labelFunc040E_00F5:
	var0006 = Func097D(0xFE9B, 0x0001, 0x02A5, 0xFE99, 0x0000);
	if (!var0006) goto labelFunc040E_0117;
	UI_add_answer("stockings");
labelFunc040E_0117:
	if (!gflags[0x00FD]) goto labelFunc040E_012A;
	UI_show_npc_face0(0xFFF2, 0x0001);
	goto labelFunc040E_0134;
labelFunc040E_012A:
	UI_show_npc_face0(0xFFF2, 0x0000);
labelFunc040E_0134:
	if (!(!gflags[0x00DB])) goto labelFunc040E_014C;
	message("\"I am sorry, but thou hast mistaken me for someone else. Thou couldst not possibly be speaking to me, as I am a Mage... and thou art merely Mundane.\"");
	say();
	Func097F(0xFFF2, "@Honestly!@", 0x0000);
	abort;
labelFunc040E_014C:
	var0007 = UI_get_item_flag(0xFFF2, 0x001C);
	if (!(var0007 == false)) goto labelFunc040E_0176;
	UI_set_item_flag(0xFFF2, 0x001C);
	message("\"I do not believe that we've met. It is so nice to make the acquaintance of a new, young Mage.\"");
	say();
	message("\"I am Columna, the Green Enchantress.\"");
	say();
	goto labelFunc040E_017A;
labelFunc040E_0176:
	message("\"Welcome, Mage. I am pleased to see thee again.\"");
	say();
labelFunc040E_017A:
	if (!(gflags[0x00DF] && (!gflags[0x00EF]))) goto labelFunc040E_018F;
	UI_add_answer(["Mosh"]);
labelFunc040E_018F:
	if (!(gflags[0x0110] && (!gflags[0x028F]))) goto labelFunc040E_01A1;
	UI_add_answer("apparatus");
labelFunc040E_01A1:
	UI_add_answer(["Green Enchantress", "bye"]);
labelFunc040E_01AE:
	converse attend labelFunc040E_044F;
	case "Green Enchantress" attend labelFunc040E_01DE:
	UI_remove_answer("Green Enchantress");
	message("\"My name is Columna. Sorceress, wife of Melino, and I am also the most desired beauty in Moonshade.\"");
	say();
	if (!gflags[0x00FD]) goto labelFunc040E_01CE;
	message("\"Is that not a funny joke?! Me, a decrepit hag?! The most desired beauty in all of Moonshade?! Once, in my time... In my time...\"");
	say();
labelFunc040E_01CE:
	UI_add_answer(["sorceress", "Melino", "beauty"]);
labelFunc040E_01DE:
	case "sorceress" attend labelFunc040E_0201:
	UI_remove_answer("sorceress");
	message("\"Perhaps I could interest thee in a spell. Many strange travellers have come from across the Serpent Isle to learn spells from me. But that, of course, was before the Teleport Storms.\"");
	say();
	UI_add_answer(["buy spells", "strange travellers", "teleport storms"]);
labelFunc040E_0201:
	case "apparatus" attend labelFunc040E_023A:
	UI_remove_answer("apparatus");
	var0008 = Func097D(0xFE9B, 0x0001, 0x02ED, 0xFE99, 0x0001);
	if (!var0008) goto labelFunc040E_0236;
	message("\"This laboratory equipment must surely belong to Erstam, the Mad Mage! It bears the unmistakably foul stench of one of his experiments.\"");
	say();
	gflags[0x028F] = true;
	goto labelFunc040E_023A;
labelFunc040E_0236:
	message("\"Without being able to actually look at the item thou hast mentioned, I can tell thee nothing.\"");
	say();
labelFunc040E_023A:
	case "teleport storms" attend labelFunc040E_024D:
	UI_remove_answer("teleport storms");
	message("\"Since these vile telport storms began all sea travel has virtually stopped. Even long range travel over land is considered to be extremely dangerous!\"");
	say();
labelFunc040E_024D:
	case "buy spells" attend labelFunc040E_0258:
	Func0816();
labelFunc040E_0258:
	case "strange travellers" attend labelFunc040E_0278:
	UI_remove_answer("strange travellers");
	message("\"Many weeks ago a woman named Gwenno passed through Moonshade, and more recently a sage named Batlin.\"");
	say();
	UI_add_answer(["Gwenno", "Batlin"]);
labelFunc040E_0278:
	case "Gwenno" attend labelFunc040E_028B:
	UI_remove_answer("Gwenno");
	message("\"The one and only time I saw her she was singing a love song about her husband, Iolo. But she made quite an impression on some people while she was here. If thou dost wish to know more of her, then ask around.\"");
	say();
labelFunc040E_028B:
	case "Batlin" attend labelFunc040E_02AB:
	UI_remove_answer("Batlin");
	message("\"He came through town with a strange daemon creature as his companion and servant, and he had some sort of artifact in his possession.\"");
	say();
	UI_add_answer(["daemon", "artifact"]);
labelFunc040E_02AB:
	case "daemon" attend labelFunc040E_02BE:
	UI_remove_answer("daemon");
	message("\"'Twas male, and had bright red skin. But there were no horns on its head -- I swear. I believe its name was Palos.\"");
	say();
labelFunc040E_02BE:
	case "artifact" attend labelFunc040E_02D1:
	UI_remove_answer("artifact");
	message("\"I personally did not see it, but I know that Gustacio did.\"");
	say();
labelFunc040E_02D1:
	case "Melino" attend labelFunc040E_02F1:
	UI_remove_answer("Melino");
	message("\"I shall have thee know that mine husband is most influential with the Council of Mages. And is perfectly capable of satisfying my needs in nearly all other ways.\"");
	say();
	UI_add_answer(["influential", "satisfying needs"]);
labelFunc040E_02F1:
	case "influential" attend labelFunc040E_0304:
	UI_remove_answer("influential");
	message("\"He is a close and trusted advisor to Filbercio, the MageLord of Moonshade and senior member of the Council.\"");
	say();
labelFunc040E_0304:
	case "satisfying needs" attend labelFunc040E_0317:
	UI_remove_answer("satisfying needs");
	message("\"Oh, worry thyself not. I am not one to allow my needs to go unsatisfied.\"");
	say();
labelFunc040E_0317:
	case "beauty" attend labelFunc040E_0337:
	UI_remove_answer("beauty");
	if (!gflags[0x00FD]) goto labelFunc040E_0333;
	message("\"Without my precious comb, all of my beauty hath long faded.\"");
	say();
	goto labelFunc040E_0337;
labelFunc040E_0333:
	message("\"Yes, in truth it hath always been so, and shall always be. My natural good looks must be the result of my good breeding.\"");
	say();
labelFunc040E_0337:
	case "Stefano" attend labelFunc040E_035B:
	UI_remove_answer("Stefano");
	message("\"'Twas Stefano who stole my stockings from Torrissio's house in an attempt to blackmail us over our affair.\"");
	say();
	if (!gflags[0x0239]) goto labelFunc040E_0357;
	message("\"Now that he is returned to Moonshade, we have already seen to it that he shall die for what he tried to do to us.\"");
	say();
	goto labelFunc040E_035B;
labelFunc040E_0357:
	message("\"My sincerest wish is that he rot slowly in Filbercio's mountain prison.\"");
	say();
labelFunc040E_035B:
	case "stockings" attend labelFunc040E_03F9:
	UI_remove_answer("stockings");
	if (!var0001) goto labelFunc040E_03B9;
	message("\"Those stockings thou dost have in thy possession are rightfully my property. They can be used by people to humiliate me and destroy my marriage. As one woman to another, I appeal to thee for understanding. If thou dost return them to me I will give to thee a spell from my personal spellbook. Wilt thou please return them to me?\"");
	say();
	var0009 = Func0955();
	if (!var0009) goto labelFunc040E_03B2;
	var000A = UI_remove_party_items(0x0001, 0x02A5, 0xFE99, 0x0000, true);
	message("\"Ha! There was thy spell, foolish woman! Now the stockings are destroyed and they shall trouble me no more!\"");
	say();
	Func097F(0xFFF2, "@Fool!@", 0x0000);
	UI_set_schedule_type(0xFFF2, 0x000C);
	abort;
	goto labelFunc040E_03B6;
labelFunc040E_03B2:
	message("\"Please, I beg of thee to reconsider.\"");
	say();
labelFunc040E_03B6:
	goto labelFunc040E_03F9;
labelFunc040E_03B9:
	message("\"Thou hast my stockings in thy possession. They are my intimate apparel and they do not belong in thy backpack. They belong on my creamy thighs. I am a woman and thou art a man and thou dost have me at an advantage. If thou wouldst but return them, I shall be happy to wear them for thee, in a night of passion that thou shalt remember all of thy days. May I have them now?\"");
	say();
	var000B = Func0955();
	if (!var000B) goto labelFunc040E_03F5;
	var000C = UI_remove_party_items(0x0001, 0x02A5, 0xFE99, 0x0000, true);
	if (!gflags[0x00DB]) goto labelFunc040E_03EA;
	message("\"Ha! Dost thou think that because thou art now a Mage, that thou art equal to me? I reject thine advances, mage.\"");
	say();
	goto labelFunc040E_03EE;
labelFunc040E_03EA:
	message("\"Ha! Thou dost think I would squander my lust on the likes of thee?! A Mundane!!! I laugh at thee.\"");
	say();
labelFunc040E_03EE:
	message("\"The stockings have now been destroyed by my magics. Thou dost have no hold over me, nor shall anyone else!\"");
	say();
	goto labelFunc040E_03F9;
labelFunc040E_03F5:
	message("\"Please, I beg of thee to reconsider.\"");
	say();
labelFunc040E_03F9:
	case "Mosh" attend labelFunc040E_0422:
	UI_remove_answer("Mosh");
	message("\"So thou hast been spending thy time with beggars and thieves? This does not speak well of thy character, ");
	message(var0002);
	message(".\"");
	say();
	message("\"No doubt she hath defamed me. What tales she tells! Of course, she is merely jealous of my position in society, and of my powers.\"");
	say();
	message("\"Let me say this plainly. Mosh lies. She hath ruined herself with cruel indulgences, and now she is half mad.\"");
	say();
	message("\"Why, she sleeps with her rats! I ask thee, is this the action of a respectable mage?\"");
	say();
	gflags[0x00EE] = true;
labelFunc040E_0422:
	case "bye" attend labelFunc040E_044C:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@I must be going...@", 0x0000);
	Func097F(0xFFF2, "@Farewell!@", 0x0002);
	Func08FF();
	goto labelFunc040E_044F;
labelFunc040E_044C:
	goto labelFunc040E_01AE;
labelFunc040E_044F:
	endconv;
labelFunc040E_0450:
	return;
}


