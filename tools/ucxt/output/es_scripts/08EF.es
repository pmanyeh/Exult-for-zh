#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func0617 object#(0x617) ();

void Func08EF 0x8EF ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	var0000 = UI_find_nearest(0xFF72, 0x02EB, 0xFFFF);
	var0001 = Func0909();
	if (!(!gflags[0x01C1])) goto labelFunc08EF_007C;
	if (!gflags[0x01A8]) goto labelFunc08EF_006A;
	message("Trent paces around the burned-out remains of his shop. When he sees you return, he rushes forward, looking for his love, Rowena.");
	say();
	var0002 = UI_get_party_list();
	if (!(UI_get_npc_object(0xFF70) in var0002)) goto labelFunc08EF_005D;
	message("The starcrossed lovers rush into each other's ghostly embrace. For a time it's hard to see where one spirit begins and the other ends. You barely make out the image of Trent replacing Rowena's ring on her finger.~~Then the two slowly turn to face you. \"Thou hast done so much for us, I hope that in helping us, thou hast been assisted in thine own quest.\" Trent bows to you then turns to regard his lovely wife.*");
	say();
	UI_remove_from_party(0xFF70);
	UI_set_schedule_type(UI_get_npc_object(0xFF70), 0x000F);
	gflags[0x01A6] = true;
	abort;
	goto labelFunc08EF_0067;
labelFunc08EF_005D:
	message("\"How can I help thee, ");
	message(var0001);
	message("? Is there something I have forgotten?\" He looks at you, perplexed.");
	say();
labelFunc08EF_0067:
	goto labelFunc08EF_007C;
labelFunc08EF_006A:
	if (!var0000) goto labelFunc08EF_0077;
	message("The large ghost continues to work, but now he whistles a sweet, sad tune as he hammers on the iron bars of the cage.");
	say();
	goto labelFunc08EF_007C;
labelFunc08EF_0077:
	message("\"Why, where has the cage gone to? 'Twas here just a moment ago, I am certain. I cannot progress until I can find the cage!\"*");
	say();
	abort;
labelFunc08EF_007C:
	UI_add_answer(["What next?", "bye"]);
	if (!gflags[0x01C1]) goto labelFunc08EF_009C;
	UI_add_answer(["Soul Cage", "free"]);
labelFunc08EF_009C:
	converse attend labelFunc08EF_0168;
	case "Soul Cage" attend labelFunc08EF_00B2:
	message("\"This is a special cage, made to fit the shape of a man. Mistress Mordra says that it will contain the Liche, Horance, once it has been lowered into his Well of Souls.\" His voice seems much softer than before.");
	say();
	UI_remove_answer("Soul Cage");
labelFunc08EF_00B2:
	case "free" attend labelFunc08EF_00DD:
	message("\"Yes, thou wilt help me free her, wilt thou not?\" A tinge of the edge comes back to his voice.");
	say();
	var0003 = Func090A();
	if (!var0003) goto labelFunc08EF_00D1;
	message("His grip on the haft of his hammer relaxes and he smiles with gratitude.~~\"Thou cannot know how much this means to me. I thank thee.\"");
	say();
	goto labelFunc08EF_00D6;
labelFunc08EF_00D1:
	message("His grip on the haft of his hammer tightens. \"See to it thou\tart quick about thy departure! If thou dost, I will assume thou hast changed thy mind!\"*");
	say();
	abort;
labelFunc08EF_00D6:
	UI_remove_answer("free");
labelFunc08EF_00DD:
	case "What next?" attend labelFunc08EF_0145:
	var0004 = Func0931(0xFE9B, 0x0001, 0x0108, 0xFE99, 0xFE99);
	if (!gflags[0x01A8]) goto labelFunc08EF_0107;
	message("\"Why, I beg thee to please help in the return my lovely Rowena to me,\" he pleads.");
	say();
	goto labelFunc08EF_0145;
labelFunc08EF_0107:
	if (!(!var0004)) goto labelFunc08EF_011C;
	message("\"I will need a bar of iron to complete the cage. Several can be found in the town cemetery.\"");
	say();
	UI_remove_answer("What next?");
	goto labelFunc08EF_0145;
labelFunc08EF_011C:
	message("\"Ah, I'll need the iron bar that thou dost carry.\" He holds out his hand and takes the iron bar from you.");
	say();
	var0005 = UI_remove_party_items(0x0001, 0x0108, 0xFE99, 0xFE99, false);
	message("\"With this, I will finish it shortly. Wait here whilst I tend to the cage.\"");
	say();
	message("\"Take the cage to Mistress Mordra and she will tell thee more about it and its use.\"");
	say();
	gflags[0x01CF] = true;
	item->Func0617();
	abort;
labelFunc08EF_0145:
	case "sacrifice" attend labelFunc08EF_0158:
	message("\"I cannot even consider that until I am reunited with my love.\" He seems very adamant about this.");
	say();
	UI_remove_answer("sacrifice");
labelFunc08EF_0158:
	case "bye" attend labelFunc08EF_0165:
	message("\"Please, hurry. Every second my love must endure Horance's foul presence is like a knife in my side.\" He begins to pace about his shop.*");
	say();
	abort;
labelFunc08EF_0165:
	goto labelFunc08EF_009C;
labelFunc08EF_0168:
	endconv;
	return;
}


