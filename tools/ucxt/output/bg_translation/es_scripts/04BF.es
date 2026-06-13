#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func090B 0x90B (var var0000);
extern var Func090A 0x90A ();
extern var Func08F7 0x8F7 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func04BF object#(0x4BF) ()
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

	if (!(event == 0x0001)) goto labelFunc04BF_02A4;
	UI_show_npc_face(0xFF41, 0x0000);
	var0000 = UI_is_pc_female();
	var0001 = Func0908();
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x023B]) goto labelFunc04BF_003F;
	UI_add_answer(["Ethereal Ring"]);
labelFunc04BF_003F:
	if (!(!gflags[0x0256])) goto labelFunc04BF_00A4;
	message("You see a nobleman, all alone, with a demented gleam in his eye.~~\"Who in blazes art thou?\" the man asks. His attitude is that of someone who was just interrupted from something terribly important.");
	say();
	var0002 = Func090B([var0001, "I am the Avatar"]);
	if (!(var0002 == var0001)) goto labelFunc04BF_007C;
	message("Martingo shakes your hand but acts thoroughly disinterested. \"I'm thrilled.\"");
	say();
	message("He turns to his right and speaks to no one.");
	say();
	message("\"What? Oh, really! I do not think ");
	message(var0001);
	message(" looks particularly brainless. We shall have to see, shall we not?\"");
	say();
	message("He turns back to you and grins.");
	say();
	goto labelFunc04BF_009D;
labelFunc04BF_007C:
	message("\"Of course thou art! And I am the evil spirit of Mondain, come back to wreak havoc over all Britannia. Funny, thou dost not look like an Avatar -- thou dost look like a fool.");
	say();
	if (!var0000) goto labelFunc04BF_008D;
	message("\"What can I do for thee, Miss Fool?\"");
	say();
	goto labelFunc04BF_0091;
labelFunc04BF_008D:
	message("\"What can I do for thee, Mr. Fool?\"");
	say();
labelFunc04BF_0091:
	message("He turns to his right and speaks to no one.");
	say();
	message("\"What? Oh, really! Thou dost think this Avatar looks like the real thing? I doubt it, Lucinda. I doubt it very much.\"");
	say();
	message("He turns back to you and grins.");
	say();
labelFunc04BF_009D:
	gflags[0x0256] = true;
	goto labelFunc04BF_00A8;
labelFunc04BF_00A4:
	message("\"What'chu want?\" Martingo asks, belligerently.");
	say();
labelFunc04BF_00A8:
	converse attend labelFunc04BF_029F;
	case "name" attend labelFunc04BF_00BE:
	message("The nobleman looks at you with impatience. \"I am Martingo, the Sultan of Spektran. Is that all right with thee?\" He rolls his eyes. He turns to his right side and whispers again to an imaginary person, \"I believe we have an ignoramus on our hands.\"");
	say();
	UI_remove_answer("name");
labelFunc04BF_00BE:
	case "job" attend labelFunc04BF_00EF:
	message("\"I am the Sultan of Spektran! What, is thy brain the size of a pea? Do not answer, 'twas a rhetorical question.\"");
	say();
	if (!var0000) goto labelFunc04BF_00D7;
	message("He turns to his left side and whispers to no one, \"Dost thou not think her brain is the size of a pea? I do!\" He giggles conspiratorially with his invisible friend.");
	say();
	goto labelFunc04BF_00DB;
labelFunc04BF_00D7:
	message("He turns to his left side and whispers again to an imaginary person, \"Dost thou not think his brain is the\tsize of a pea? I do!\" He giggles conspiratorially with his invisible friend.");
	say();
labelFunc04BF_00DB:
	message("Martingo then pulls out a banana and begins to peel it.");
	say();
	UI_add_answer(["Sultan", "Spektran", "banana"]);
labelFunc04BF_00EF:
	case "Sultan" attend labelFunc04BF_0145:
	message("\"Come on, do not insult mine intelligence. Surely thou dost know what a Sultan is! Canst not thou see mine harem?\"");
	say();
	var0003 = Func090A();
	if (!var0003) goto labelFunc04BF_010E;
	message("\"Lovely, are they not?");
	say();
	goto labelFunc04BF_0112;
labelFunc04BF_010E:
	message("Martingo looks bewildered. \"Then thou must have thine eyes examined! I am surrounded by ten...\" He looks around quickly. \"No, -eleven- beautiful women!");
	say();
labelFunc04BF_0112:
	message("\"Each day I enjoy a different one. Thou canst not imagine how much fun being a Sultan really is!\" He leans over and kisses an invisible cheek. \"Today, I am enjoying Lucinda.\" He grins broadly.");
	say();
	UI_add_answer("Lucinda");
	if (!var0000) goto labelFunc04BF_013E;
	message("Martingo looks you up and down lecherously. \"Hmmm. Wouldst thou like to join mine harem?\"");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc04BF_013A;
	message("Your answer takes Martingo by surprise. \"Thou wouldst?\" He looks around nervously. \"Oh, uhm, I had better consult mine astrologer about this matter. I shall get back to thee, all right?\"");
	say();
	goto labelFunc04BF_013E;
labelFunc04BF_013A:
	message("\"Pity.\"");
	say();
labelFunc04BF_013E:
	UI_remove_answer("Sultan");
labelFunc04BF_0145:
	case "Spektran" attend labelFunc04BF_0186:
	message("\"'Tis the island thou dost stand upon!\" He turns to the invisible person on his left and whispers, \"Thou art correct -- this person really is a fool!\" ~~Martingo turns back to you. \"As I said, I am the Sultan here. I am the master of all of these subjects.\" He gestures\taround the room.");
	say();
	var0005 = Func08F7(0xFFFF);
	if (!var0005) goto labelFunc04BF_017F;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("Iolo whispers to you. \"This fellow is quite daft. Be careful.\"");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFF41, 0x0000);
labelFunc04BF_017F:
	UI_remove_answer("Spektran");
labelFunc04BF_0186:
	case "Lucinda" attend labelFunc04BF_0199:
	message("\"She is beautiful, is she not?\" Martingo leans over and sticks his tongue in an ear that isn't there.");
	say();
	UI_remove_answer("Lucinda");
labelFunc04BF_0199:
	case "banana" attend labelFunc04BF_0231:
	if (!(!gflags[0x0258])) goto labelFunc04BF_0226;
	message("\"Oh, forgive my manners! Wouldst thou like a banana?\"");
	say();
	var0006 = Func090A();
	if (!var0006) goto labelFunc04BF_021F;
	message("\"Well, it shall cost thee 3 gold coins. Still want one?\"");
	say();
	var0007 = Func090A();
	if (!var0007) goto labelFunc04BF_0218;
	var0008 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var0008 >= 0x0003)) goto labelFunc04BF_0211;
	var0009 = UI_add_party_items(0x0001, 0x0179, 0xFE99, 0x0011, true);
	if (!var0009) goto labelFunc04BF_020A;
	message("\"Here thou art.\" Martingo hands you a banana and takes your gold. He turns to 'Lucinda' and whispers, \"That rotter took my last banana!\"");
	say();
	gflags[0x0258] = true;
	goto labelFunc04BF_020E;
labelFunc04BF_020A:
	message("\"Thou dost have wheat for brains! Thou hast not room for a single banana!\"");
	say();
labelFunc04BF_020E:
	goto labelFunc04BF_0215;
labelFunc04BF_0211:
	message("\"Broke, art thou? Too bad.\" Martingo sniffs. \"Well, I am very rich, I must say.\"");
	say();
labelFunc04BF_0215:
	goto labelFunc04BF_021C;
labelFunc04BF_0218:
	message("\"That's a relief. I only had one left.\"");
	say();
labelFunc04BF_021C:
	goto labelFunc04BF_0223;
labelFunc04BF_021F:
	message("\"That's a relief. I only had one left.\"");
	say();
labelFunc04BF_0223:
	goto labelFunc04BF_022A;
labelFunc04BF_0226:
	message("\"I already sold thee my last banana!\"");
	say();
labelFunc04BF_022A:
	UI_remove_answer("banana");
labelFunc04BF_0231:
	case "Ethereal Ring" attend labelFunc04BF_024B:
	message("Martingo looks suspicious. \"Art thou wanting to steal mine Ethereal Ring?\" He turns to his imaginary friend and whispers, \"Thou wert right. Our guest looks like a thief.\" He turns back to you and smiles. \"Yes, I do have an Ethereal Ring. I purchased it from the King of the Gargoyles. What was his name?\" He leans toward the invisible companion on his right. \"What? Oh yes, Draxinusom. I knew it all the time.\" He turns back to you. \"It is in my vault.\"");
	say();
	UI_remove_answer("Ethereal Ring");
	UI_add_answer("vault");
labelFunc04BF_024B:
	case "vault" attend labelFunc04BF_026B:
	message("Martingo's eyes light up. \"My vault is the most protected vault in all Britannia. No one, and I repeat, -no one- can steal anything from my vault. I have many fine treasures there.\" He turns to 'Lucinda' and bites an nonexistent ear lobe.");
	say();
	UI_remove_answer("vault");
	UI_add_answer(["treasures", "protected"]);
labelFunc04BF_026B:
	case "treasures" attend labelFunc04BF_027E:
	message("\"I collect magical items. The vault is full of them. Including this ring thou dost mention.\"");
	say();
	UI_remove_answer("treasures");
labelFunc04BF_027E:
	case "protected" attend labelFunc04BF_0291:
	message("\"The vault's security is my secret. Feel free to try and enter it. In fact, I dare thee! If thou canst succeed in getting inside, thou art welcome to take anything!\" Martingo laughs. \"All thou dost need is the key!\" He laughs with his imaginary harem, as if they were all laughing with him. \"I'm sure thou wilt find it!\" He breaks up, laughing so hard that tears begin to fall down his cheeks.");
	say();
	UI_remove_answer("protected");
labelFunc04BF_0291:
	case "bye" attend labelFunc04BF_029C:
	goto labelFunc04BF_029F;
labelFunc04BF_029C:
	goto labelFunc04BF_00A8;
labelFunc04BF_029F:
	endconv;
	message("\"Fine. Go away. It shall do thee good!\"*");
	say();
labelFunc04BF_02A4:
	if (!(event == 0x0000)) goto labelFunc04BF_02B2;
	Func092E(0xFF41);
labelFunc04BF_02B2:
	return;
}


