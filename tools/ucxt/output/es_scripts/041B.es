#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func08D1 0x8D1 ();
extern void Func092E 0x92E (var var0000);

void Func041B object#(0x41B) ()
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

	if (!(event == 0x0001)) goto labelFunc041B_024E;
	UI_show_npc_face(0xFFE5, 0x0000);
	var0000 = UI_part_of_day();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFFE5));
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x0068]) goto labelFunc041B_0044;
	UI_add_answer("audition");
labelFunc041B_0044:
	if (!gflags[0x0069]) goto labelFunc041B_0057;
	UI_add_answer(["Miranda", "Max"]);
labelFunc041B_0057:
	if (!(!gflags[0x009C])) goto labelFunc041B_0069;
	message("You can see the creativity literally flowing in abundance from this fellow. He looks at you with interest.");
	say();
	gflags[0x009C] = true;
	goto labelFunc041B_006D;
labelFunc041B_0069:
	message("\"Yes, yes?\" Raymundo snaps. \"What dost thou want? I'm busy!\"");
	say();
labelFunc041B_006D:
	converse attend labelFunc041B_0249;
	case "name" attend labelFunc041B_0083:
	message("\"I am Raymundo.\"");
	say();
	UI_remove_answer("name");
labelFunc041B_0083:
	case "job" attend labelFunc041B_00CC:
	message("\"Why, I am famous throughout the land! Hast thou not heard of me?\"");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc041B_00A2;
	message("\"I told thee so!");
	say();
	goto labelFunc041B_00A6;
labelFunc041B_00A2:
	message("\"-Really-!? I am surprised! But never mind...");
	say();
labelFunc041B_00A6:
	message("\"I am the Director of the Royal Theatre here in Britain. I am also Playwright-in-Residence. I compose a tune now and then as well. I sometimes act, but it is not wise to act in something that one directs.~");
	say();
	if (!(var0001 == 0x0007)) goto labelFunc041B_00BB;
	message("\"We are working on a play at the moment.\"");
	say();
	goto labelFunc041B_00BF;
labelFunc041B_00BB:
	message("\"Come by the theatre during the day and watch the rehearsals for our play.\"");
	say();
labelFunc041B_00BF:
	UI_add_answer(["Royal Theatre", "play"]);
labelFunc041B_00CC:
	case "play" attend labelFunc041B_0114:
	message("\"It's a little something I wrote entitled 'The Trials of the Avatar'. It's about a legendary figure in Britannian history.\" The artist looks you up and down.");
	say();
	message("\"Hmmm. Thou dost have a certain quality... hast thou ever acted on stage?\"");
	say();
	var0003 = Func090A();
	if (!var0003) goto labelFunc041B_00EF;
	message("\"I thought so!");
	say();
	goto labelFunc041B_00F3;
labelFunc041B_00EF:
	message("\"Well, it does not matter. I am sure thou couldst quickly adapt.");
	say();
labelFunc041B_00F3:
	message("\"Officially, auditions have closed and the play is already cast. However, we need someone to understudy the role of the Avatar. Wouldst thou like to audition?\"");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc041B_010F;
	message("\"Excellent! What thou needest to do is to visit Gaye's Clothier Shoppe and purchase an Avatar costume. I can audition thee once I see thee in -proper- attire. Run along and do that, quickly now, I'm a busy man.\"*");
	say();
	gflags[0x0067] = true;
	abort;
	goto labelFunc041B_0114;
labelFunc041B_010F:
	message("\"No? Thou hast never dreamed of performing on the stage? Seeing thy name in torches? Donning the olde grease paint and wig? Bowing to thunderous applause? Well, begone then, I have not the time for chatting with the public.\"*");
	say();
	abort;
labelFunc041B_0114:
	case "Royal Theatre" attend labelFunc041B_0134:
	message("\"'Tis a wonderful space, dost thou not think? 'Twas opened only last year, thanks to the sponsorship of a few wealthy citizens of our great city.\"");
	say();
	UI_remove_answer("Royal Theatre");
	UI_add_answer(["sponsorship", "citizens"]);
labelFunc041B_0134:
	case "sponsorship" attend labelFunc041B_017F:
	message("\"The construction of the actual theatre building was paid for by the Royal Mint, but the theatre company relies solely on the support of individuals such as thyself. Wouldst thou like to make a modest contribution of, say, ten gold pieces to our theatre company?\"");
	say();
	var0005 = Func090A();
	if (!var0005) goto labelFunc041B_0174;
	var0006 = UI_remove_party_items(0x000A, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0006) goto labelFunc041B_016D;
	message("\"I thank thee. Thou hast shown thyself to be a true patron of the arts and a person of culture and refinement.\"");
	say();
	goto labelFunc041B_0171;
labelFunc041B_016D:
	message("\"Thine unconvincing performance gave thy game away! Thou dost not have ten gold pieces!\"");
	say();
labelFunc041B_0171:
	goto labelFunc041B_0178;
labelFunc041B_0174:
	message("\"Give a man a loaf of bread and thou hast fed him for a day, give a man a play and perhaps thou hast fed his soul for a lifetime! Once thou hast seen one of our productions I am certain thou shalt reconsider.\"");
	say();
labelFunc041B_0178:
	UI_remove_answer("sponsorship");
labelFunc041B_017F:
	case "audition" attend labelFunc041B_01C3:
	if (!(var0001 == 0x0007)) goto labelFunc041B_01BE;
	var0007 = Func0931(0xFE9C, 0x0001, 0x0346, 0xFE99, 0xFE99);
	if (!var0007) goto labelFunc041B_01B6;
	message("\"I see thou art ready? Very well. Take center stage, wouldst thou?\"");
	say();
	Func08D1();
	goto labelFunc041B_01BB;
labelFunc041B_01B6:
	message("\"Where is thy costume? Thou cannot audition without a costume!\"*");
	say();
	abort;
labelFunc041B_01BB:
	goto labelFunc041B_01C3;
labelFunc041B_01BE:
	message("\"Come to the theatre during rehearsal hours, wouldst thou?\"*");
	say();
	abort;
labelFunc041B_01C3:
	case "Miranda" attend labelFunc041B_01DA:
	message("Raymundo takes a deep breath and smiles.");
	say();
	message("\"Ah, lovely woman. 'Tis a pity she is more interested in politics than the stage. But I must say that we get along famously!\"");
	say();
	UI_remove_answer("Miranda");
labelFunc041B_01DA:
	case "Max" attend labelFunc041B_01F1:
	message("\"He is quite a character, is he not?\" Raymundo's face fills with pride.");
	say();
	message("\"Takes after his old man, I must say. He is sure to be a great actor. Or writer. Or director. Or producer.\"");
	say();
	UI_remove_answer("Max");
labelFunc041B_01F1:
	case "citizens" attend labelFunc041B_0211:
	message("\"Well, I am really not at liberty to divulge the names of our patrons. But most of them belong to The Fellowship.\"");
	say();
	UI_remove_answer("citizens");
	UI_add_answer(["patrons", "Fellowship"]);
labelFunc041B_0211:
	case "patrons" attend labelFunc041B_0224:
	message("\"These are people who contribute to our theatre. They come from all walks of life and have little in common besides a love of fine theatre.\"");
	say();
	UI_remove_answer("patrons");
labelFunc041B_0224:
	case "Fellowship" attend labelFunc041B_023B:
	message("\"For non-artists, they have given generous contributions to the theatre. They are -fine- people in my book!\" He rubs his hands with glee.");
	say();
	message("\"I am not a member, though.\"");
	say();
	UI_remove_answer("Fellowship");
labelFunc041B_023B:
	case "bye" attend labelFunc041B_0246:
	goto labelFunc041B_0249;
labelFunc041B_0246:
	goto labelFunc041B_006D;
labelFunc041B_0249:
	endconv;
	message("\"Leaving? Sorry, I do not give autographs.\"*");
	say();
labelFunc041B_024E:
	if (!(event == 0x0000)) goto labelFunc041B_02D5;
	var0000 = UI_part_of_day();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFFE5));
	var0008 = UI_die_roll(0x0001, 0x0004);
	if (!(var0001 == 0x0007)) goto labelFunc041B_02CF;
	if (!(var0008 == 0x0001)) goto labelFunc041B_0292;
	var0009 = "@Louder! I can't hear thee!@";
labelFunc041B_0292:
	if (!(var0008 == 0x0002)) goto labelFunc041B_02A2;
	var0009 = "@Move stage right, please.@";
labelFunc041B_02A2:
	if (!(var0008 == 0x0003)) goto labelFunc041B_02B2;
	var0009 = "@Try that scene again.@";
labelFunc041B_02B2:
	if (!(var0008 == 0x0004)) goto labelFunc041B_02C2;
	var0009 = "@From the top, please.@";
labelFunc041B_02C2:
	UI_item_say(0xFFE5, var0009);
	goto labelFunc041B_02D5;
labelFunc041B_02CF:
	Func092E(0xFFE5);
labelFunc041B_02D5:
	return;
}


