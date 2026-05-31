#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func04A8 object#(0x4A8) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0001)) goto labelFunc04A8_0276;
	UI_show_npc_face(0xFF58, 0x0000);
	var0000 = Func0909();
	UI_add_answer(["name", "job", "bye"]);
	if (!(gflags[0x0212] && (!gflags[0x0218]))) goto labelFunc04A8_003A;
	UI_add_answer("thief");
labelFunc04A8_003A:
	if (!gflags[0x0218]) goto labelFunc04A8_0047;
	UI_add_answer("venom found");
labelFunc04A8_0047:
	var0001 = Func0931(0xFE9B, 0x0001, 0x0289, 0xFE99, 0x0001);
	if (!var0001) goto labelFunc04A8_0069;
	UI_add_answer("venom found");
labelFunc04A8_0069:
	if (!(!gflags[0x0221])) goto labelFunc04A8_007B;
	message("A stern-looking woman stares back at you without humor.");
	say();
	gflags[0x0221] = true;
	goto labelFunc04A8_0085;
labelFunc04A8_007B:
	message("\"Greetings to thee, ");
	message(var0000);
	message(",\" you hear Brita say.");
	say();
labelFunc04A8_0085:
	converse attend labelFunc04A8_0275;
	case "name" attend labelFunc04A8_009B:
	message("\"I am Brita.\"");
	say();
	UI_remove_answer("name");
labelFunc04A8_009B:
	case "job" attend labelFunc04A8_00BA:
	message("\"I help mine husband Feridwyn run The Fellowship's shelter in Paws.\"");
	say();
	UI_add_answer(["Feridwyn", "Fellowship", "shelter", "Paws"]);
labelFunc04A8_00BA:
	case "Feridwyn" attend labelFunc04A8_0109:
	if (!(!gflags[0x0220])) goto labelFunc04A8_00D0;
	message("\"Mine husband is a good man who devotes himself selflessly to helping the poor of this town, something they do not appreciate. He is a good man and a dutiful Fellowship member.\"");
	say();
	goto labelFunc04A8_0102;
labelFunc04A8_00D0:
	message("\"Mine husband is the most honorable man I have ever met in my life.\"");
	say();
	var0002 = Func08F7(0xFF59);
	if (!var0002) goto labelFunc04A8_0102;
	UI_show_npc_face(0xFF59, 0x0000);
	message("\"Do not put stock in the proud boasts of wives, good Avatar. I am a simple man who only does what he can.\"*");
	say();
	UI_remove_npc_face(0xFF59);
	UI_show_npc_face(0xFF58, 0x0000);
labelFunc04A8_0102:
	UI_remove_answer("Feridwyn");
labelFunc04A8_0109:
	case "Fellowship" attend labelFunc04A8_012A:
	if (!(!gflags[0x0006])) goto labelFunc04A8_011F;
	message("\"Thou shouldst speak to mine husband of The Fellowship. I am certain thou wilt be most impressed by what he shall have to tell thee.\"");
	say();
	goto labelFunc04A8_0123;
labelFunc04A8_011F:
	message("\"Seeing that thou hast joined The Fellowship only confirms what I already know. That The Fellowship is the path by which we shall lead Britannia to a wonderful new future. News that thou hast joined us is spreading far and wide!\"");
	say();
labelFunc04A8_0123:
	UI_remove_answer("Fellowship");
labelFunc04A8_012A:
	case "shelter" attend labelFunc04A8_013D:
	message("\"Running the shelter is hard work for mine husband and me, but it is worth the effort to ease the suffering of those less fortunate than we.\"");
	say();
	UI_remove_answer("shelter");
labelFunc04A8_013D:
	case "Paws" attend labelFunc04A8_0177:
	message("\"We hear about everything that goes on in Paws. If I do not know about it then mine husband does. Is there anyone in particular thou dost wish to know about?\"");
	say();
	var0003 = Func090A();
	if (!var0003) goto labelFunc04A8_016C;
	message("\"I know about these people:\"");
	say();
	UI_add_answer(["Alina", "Camille", "Polly"]);
	goto labelFunc04A8_0170;
labelFunc04A8_016C:
	message("\"It is good to determine an impression of others on one's own.\"");
	say();
labelFunc04A8_0170:
	UI_remove_answer("Paws");
labelFunc04A8_0177:
	case "Alina" attend labelFunc04A8_018A:
	message("\"Alina lives in the shelter with her baby, poor thing. Her husband is a common thief who even now sits in prison. But we shall help her get her life straightened out once we persuade her to join The Fellowship. She is not smart enough, thou knowest, to see the advantages for herself. She must be carefully instructed.\"");
	say();
	UI_remove_answer("Alina");
labelFunc04A8_018A:
	case "Camille" attend labelFunc04A8_01AA:
	message("\"Camille is a farm widow. She tends to live in the past, following the old virtues and questioning the ways of The Fellowship. These country folk are so superstitious, thou knowest. It is a fault of their low intellect. She does not even notice what a hooligan her boy, Tobias, is growing up to be! Not at all like our son, Garritt.\"");
	say();
	UI_add_answer(["Tobias", "Garritt"]);
	UI_remove_answer("Camille");
labelFunc04A8_01AA:
	case "Tobias" attend labelFunc04A8_01BD:
	message("\"A simply wretched little urchin. Always sulking. But then, one must realize that he has no father to discipline him properly.\"");
	say();
	UI_remove_answer("Tobias");
labelFunc04A8_01BD:
	case "venom found" attend labelFunc04A8_01E6:
	if (!(!gflags[0x0218])) goto labelFunc04A8_01D4;
	message("\"Thou dost say that vial of venom was found in Garritt's belongings? I do not believe it! Art thou saying my son is a liar and a thief? I wilt not believe it! Good day to thee!\"*");
	say();
	abort;
	goto labelFunc04A8_01DF;
labelFunc04A8_01D4:
	message("\"So Garritt admits he stole the venom vial. I cannot believe it! I do not know what to say.\"");
	say();
	UI_add_answer("Garritt");
labelFunc04A8_01DF:
	UI_remove_answer("venom found");
labelFunc04A8_01E6:
	case "Garritt" attend labelFunc04A8_020E:
	if (!(!gflags[0x0218])) goto labelFunc04A8_0203;
	message("Brita beams. \"Garritt is a wonderful son. He is being raised to follow the values of The Fellowship. His worthiness has been rewarded.\"");
	say();
	UI_add_answer("rewarded");
	goto labelFunc04A8_0207;
labelFunc04A8_0203:
	message("Brita frowns even more than before. \"If thou dost ask me, 'twas all a plot to get my little boy in trouble. If thou had not come to town, this entire incident would not have happened!\"");
	say();
labelFunc04A8_0207:
	UI_remove_answer("Garritt");
labelFunc04A8_020E:
	case "rewarded" attend labelFunc04A8_0221:
	message("\"Garritt is so talented at the whistle panpipes! It is truly a gift!\"");
	say();
	UI_remove_answer("rewarded");
labelFunc04A8_0221:
	case "Polly" attend labelFunc04A8_0234:
	message("\"Polly runs the local tavern to be near people. She is a lonely soul and feels that there is simply no one who wishes for her heart. It makes me so sad to think of her. She could find all the companionship she could want if she would join The Fellowship.\"");
	say();
	UI_remove_answer("Polly");
labelFunc04A8_0234:
	case "thief" attend labelFunc04A8_0252:
	message("\"One of our members, a local merchant named Morfin, had a shipment of silver serpent venom stolen from him. Not that I care about the venom itself, but is it not shocking?\"");
	say();
	gflags[0x0212] = true;
	UI_remove_answer("thief");
	UI_add_answer("serpent venom");
labelFunc04A8_0252:
	case "serpent venom" attend labelFunc04A8_0265:
	message("\"I have never seen any myself. I have no idea what it does to someone, but it cannot possibly be good!\"");
	say();
	UI_remove_answer("serpent venom");
labelFunc04A8_0265:
	case "bye" attend labelFunc04A8_0272:
	message("\"Mayest thou walk with The Fellowship, Avatar.\"*");
	say();
	abort;
labelFunc04A8_0272:
	goto labelFunc04A8_0085;
labelFunc04A8_0275:
	endconv;
labelFunc04A8_0276:
	if (!(event == 0x0000)) goto labelFunc04A8_0284;
	Func092E(0xFF58);
labelFunc04A8_0284:
	return;
}


