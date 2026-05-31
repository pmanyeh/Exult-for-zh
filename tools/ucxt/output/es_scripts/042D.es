#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08FC 0x8FC (var var0000, var var0001);
extern var Func090A 0x90A ();
extern void Func0919 0x919 ();
extern void Func091A 0x91A ();
extern void Func092E 0x92E (var var0000);

void Func042D object#(0x42D) ()
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

	if (!(event == 0x0001)) goto labelFunc042D_02E6;
	UI_show_npc_face(0xFFD3, 0x0000);
	var0000 = UI_part_of_day();
	var0001 = Func0909();
	var0002 = UI_wearing_fellowship();
	var0003 = Func08FC(0xFFD3, 0xFFE6);
	if (!(var0000 == 0x0007)) goto labelFunc042D_005F;
	if (!var0003) goto labelFunc042D_004A;
	message("Figg is too intent on listening to the Fellowship meeting to acknowledge your attempts to converse with him.*");
	say();
	abort;
	goto labelFunc042D_005F;
labelFunc042D_004A:
	if (!gflags[0x00DA]) goto labelFunc042D_005A;
	message("\"Hast thou seen Batlin? Where is he? He needs to lead our meeting!\"");
	say();
	goto labelFunc042D_005F;
	goto labelFunc042D_005F;
labelFunc042D_005A:
	message("\"My goodness! It is nine o'clock! Excuse me, I must get to tonight's Fellowship meeting.\"*");
	say();
	abort;
labelFunc042D_005F:
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x00C6]) goto labelFunc042D_007C;
	UI_add_answer("Weston");
labelFunc042D_007C:
	if (!gflags[0x0094]) goto labelFunc042D_0089;
	UI_add_answer("Fellowship");
labelFunc042D_0089:
	if (!(!gflags[0x00AE])) goto labelFunc042D_009B;
	message("You see a man whose wrinkled face forms a caricature of grumpiness.");
	say();
	gflags[0x00AE] = true;
	goto labelFunc042D_00A5;
labelFunc042D_009B:
	message("\"Thou dost wish words with me, ");
	message(var0001);
	message("?\" asks Figg.");
	say();
labelFunc042D_00A5:
	converse attend labelFunc042D_02E1;
	case "name" attend labelFunc042D_00BB:
	message("\"I am Figg.\"");
	say();
	UI_remove_answer("name");
labelFunc042D_00BB:
	case "job" attend labelFunc042D_00D4:
	message("\"I am the caretaker of the Royal Orchards here in Britain.\"");
	say();
	UI_add_answer(["caretaker", "Royal Orchards"]);
labelFunc042D_00D4:
	case "caretaker" attend labelFunc042D_00F7:
	message("\"My responsibilities include caring for the trees, watching over the pickers at harvest time and protecting the Royal Orchard from thieves.\"");
	say();
	UI_add_answer(["trees", "pickers", "thieves"]);
	UI_remove_answer("caretaker");
labelFunc042D_00F7:
	case "trees" attend labelFunc042D_010A:
	message("\"Apple trees require constant care. I must make sure the trees all have enough water but not too much. I must keep all trees properly trimmed and be watchful so that the crop does not get infested by bugs or worms. I am also required to pick up all of the fallen apples, which is a job in itself.\"");
	say();
	UI_remove_answer("trees");
labelFunc042D_010A:
	case "pickers" attend labelFunc042D_011D:
	message("\"Most of them are migrant farmers from Paws. Because they were once farmers, they are convinced they know more about the upkeep of the orchard than I! Of course that is preposterous. Also the pickers do not take orders very well.\"");
	say();
	UI_remove_answer("pickers");
labelFunc042D_011D:
	case "thieves" attend labelFunc042D_0137:
	message("\"They would rob us down to the last twig if I gave them the chance! I should be awarded a medal from Lord British himself the way I risk my very life and limb protecting this orchard. Why, I just caught another thief recently. His name was Weston.\"");
	say();
	UI_remove_answer("thieves");
	UI_add_answer("Weston");
labelFunc042D_0137:
	case "Royal Orchards" attend labelFunc042D_014A:
	message("\"Here are grown the finest apples in all of Britannia. I would let thee sample one but it would be against the law as thou art obviously not of noble stock.\"");
	say();
	UI_remove_answer("Royal Orchards");
labelFunc042D_014A:
	case "Weston" attend labelFunc042D_0177:
	message("\"He now resides in the prison, thanks to me! I knew what he was up to from the moment I saw him! He had the look of a hardened apple thief so I had him nicked by the town guard.\"");
	say();
	UI_add_answer(["prison", "apple thief"]);
	if (!gflags[0x0094]) goto labelFunc042D_0170;
	UI_add_answer("Fellowship");
labelFunc042D_0170:
	UI_remove_answer("Weston");
labelFunc042D_0177:
	case "prison" attend labelFunc042D_018A:
	message("\"Yes, Weston is now living in our local prison. If thou dost not believe me, thou canst go there and see for thyself!\"");
	say();
	UI_remove_answer("prison");
labelFunc042D_018A:
	case "apple thief" attend labelFunc042D_01AA:
	message("\"Oh, he came here with some sob story. But when one is as astute an observer of human behavior as I am, one can tell the true intent of people, which is often contrary to what they will say to thee!\"");
	say();
	UI_remove_answer("apple thief");
	UI_add_answer(["sob story", "observer"]);
labelFunc042D_01AA:
	case "sob story" attend labelFunc042D_01BD:
	message("\"I do not recall, exactly. Something about his impoverished wife and family starving to death in Paws or some load of rubbish.\"");
	say();
	UI_remove_answer("sob story");
labelFunc042D_01BD:
	case "observer" attend labelFunc042D_01EA:
	message("\"Yes, I do consider myself to be a more than passable judge of character. And dost thou know how I became so?\"");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc042D_01DC;
	message("\"Oh, then art thou not the clever one!\"");
	say();
	goto labelFunc042D_01E3;
labelFunc042D_01DC:
	message("\"Then I shall tell thee! I am a member of The Fellowship!\"");
	say();
	Func0919();
labelFunc042D_01E3:
	UI_remove_answer("observer");
labelFunc042D_01EA:
	case "philosophy" attend labelFunc042D_01FC:
	Func091A();
	UI_remove_answer("philosophy");
labelFunc042D_01FC:
	case "Fellowship" attend labelFunc042D_024C:
	message("\"I am a member of the Fellowship, yes. But it would be a crime for me to give apples from the Royal Orchard to The Fellowship, and it would be a violation of my sacred duty. While selling apples is also a violation, I was only trying to do this man Weston a favor. And I suppose these accusations are the thanks I get? Hmph!\"");
	say();
	if (!var0002) goto labelFunc042D_023A;
	message("He leans in close to you and speaks lower. \"Thou art also a member of The Fellowship, after all. Am I not thy brother? Shouldst thou not trust me?\" He gives you a crooked wink.");
	say();
	var0005 = UI_add_party_items(0x0001, 0x0179, 0xFE99, 0x0010, true);
	if (!var0005) goto labelFunc042D_0233;
	message("\"Thou seest? I am thy brother!\" He hands you an apple.");
	say();
	goto labelFunc042D_0237;
labelFunc042D_0233:
	message("\"I would give thee an apple to show thee my sincerity, but it seems thou art too encumbered.\"");
	say();
labelFunc042D_0237:
	goto labelFunc042D_0245;
labelFunc042D_023A:
	message("\"But enough of these desperate accusations from a known criminal.\"");
	say();
	UI_add_answer("buy");
labelFunc042D_0245:
	UI_remove_answer("Fellowship");
labelFunc042D_024C:
	case "buy" attend labelFunc042D_02D3:
	message("\"I can do thee a favor as well. Wouldst thou like to buy one of these beautiful apples for the merest pittance of five gold coins?\"");
	say();
	var0006 = Func090A();
	if (!var0006) goto labelFunc042D_02B0;
	var0007 = UI_remove_party_items(0x0005, 0x0284, 0xFE99, 0xFE99, 0xFE99);
	if (!var0007) goto labelFunc042D_02A8;
	var0008 = UI_add_party_items(0x0001, 0x0179, 0xFE99, 0x0010, true);
	if (!var0008) goto labelFunc042D_02A1;
	message("Figg takes an apple from a nearby basket. After polishing it slightly on his shirt, he hands it to you.");
	say();
	goto labelFunc042D_02A5;
labelFunc042D_02A1:
	message("\"Thou cannot take thine apple! Thou art carrying too much!\"");
	say();
labelFunc042D_02A5:
	goto labelFunc042D_02AD;
labelFunc042D_02A8:
	message("\"Thou dost not even have enough gold to buy one apple! Thou hast wasted the time of the King's Caretaker of the Royal Orchard. Away, peasant! Away before I call the guard!\"");
	say();
	abort;
labelFunc042D_02AD:
	goto labelFunc042D_02CC;
labelFunc042D_02B0:
	message("\"Very well. But thou art passing up an opportunity that few are offered. In fact, eh, I would appreciate it if thou wouldst not mention our little chat to anyone. Agreed?\"");
	say();
	var0009 = Func090A();
	if (!var0009) goto labelFunc042D_02C7;
	message("\"Ah, I knew thou wert a good 'un.\"");
	say();
	goto labelFunc042D_02CC;
labelFunc042D_02C7:
	message("\"No! Well, fine, then.\"*");
	say();
	abort;
labelFunc042D_02CC:
	UI_remove_answer("buy");
labelFunc042D_02D3:
	case "bye" attend labelFunc042D_02DE:
	goto labelFunc042D_02E1;
labelFunc042D_02DE:
	goto labelFunc042D_00A5;
labelFunc042D_02E1:
	endconv;
	message("\"I can see that thou shouldst be on thy way.\"*");
	say();
labelFunc042D_02E6:
	if (!(event == 0x0000)) goto labelFunc042D_02F4;
	Func092E(0xFFD3);
labelFunc042D_02F4:
	return;
}


