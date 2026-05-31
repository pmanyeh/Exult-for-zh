#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func04A7 object#(0x4A7) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	if (!(event == 0x0001)) goto labelFunc04A7_0478;
	UI_show_npc_face(0xFF59, 0x0000);
	var0000 = Func0909();
	var0001 = UI_wearing_fellowship();
	var0002 = false;
	var0003 = Func0931(0xFE9B, 0x0001, 0x03D5, 0xFE99, 0x0001);
	if (!(gflags[0x0236] && (!gflags[0x0213]))) goto labelFunc04A7_00B4;
	if (!(!gflags[0x0212])) goto labelFunc04A7_0051;
	message("\"Avatar! Didst thou know that the merchant Morfin had a quantity of silver serpent venom stolen? This theft has caused the community no small amount of distress.\"");
	say();
	goto labelFunc04A7_0055;
labelFunc04A7_0051:
	message("\"Avatar! Oh Avatar! I have news!\"");
	say();
labelFunc04A7_0055:
	message("\"Garritt, my son, told me that Tobias was in possession of some silver snake venom. I went to investigate and found Tobias with it!\"*");
	say();
	var0004 = Func08F7(0xFF56);
	if (!var0004) goto labelFunc04A7_0087;
	UI_show_npc_face(0xFF56, 0x0000);
	message("\"That is correct! I am a witness that what Feridwyn has said is the truth!\"*");
	say();
	UI_remove_npc_face(0xFF56);
	UI_show_npc_face(0xFF59, 0x0000);
labelFunc04A7_0087:
	message("\"I have often said that Tobias was no good. Now here is proof. He is the thief that has been praying upon one of our honest merchants! And to think I let him come into contact with my son! I hope he shall be dealt with in a manner appropriate to one who is leading youth astray from the way of The Fellowship.");
	say();
	message("\"I suggest that thou go and speak with his mother at once! Camille should keep a tighter rein on her offspring!\"*");
	say();
	gflags[0x0213] = true;
	gflags[0x021C] = true;
	UI_set_schedule_type(UI_get_npc_object(0xFF4F), 0x0003);
	UI_set_schedule_type(UI_get_npc_object(0xFF59), 0x000B);
	abort;
labelFunc04A7_00B4:
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x0105]) goto labelFunc04A7_00D1;
	UI_add_answer("Elizabeth and Abraham");
labelFunc04A7_00D1:
	var0005 = Func0931(0xFE9B, 0x0001, 0x0289, 0xFE99, 0x0001);
	if (!var0005) goto labelFunc04A7_00FD;
	var0002 = true;
	UI_add_answer(["found venom", "case solved"]);
labelFunc04A7_00FD:
	if (!gflags[0x0218]) goto labelFunc04A7_0119;
	UI_add_answer(["found venom", "Garritt caught", "take action", "Tobias", "case solved"]);
labelFunc04A7_0119:
	if (!(!gflags[0x0220])) goto labelFunc04A7_012F;
	message("You see a small man with twisted, sloped posture. He looks you up and down before deciding he will speak to you.");
	say();
	message("\"I had gotten word that thou wert coming to our town. I have been expecting thee. I must admit, though, that I find it difficult to believe that thou art truly the Avatar.\"");
	say();
	gflags[0x0220] = true;
	goto labelFunc04A7_0133;
labelFunc04A7_012F:
	message("\"Thou dost wish to speak with me again, Avatar?\" says Feridwyn.");
	say();
labelFunc04A7_0133:
	converse attend labelFunc04A7_046D;
	case "name" attend labelFunc04A7_0149:
	message("\"My name is Feridwyn.\"");
	say();
	UI_remove_answer("name");
labelFunc04A7_0149:
	case "job" attend labelFunc04A7_016B:
	message("\"I run the Fellowship shelter with my wife Brita and my son Garritt here in Paws.\"");
	say();
	UI_add_answer(["Fellowship", "shelter", "Brita", "Garritt", "Paws"]);
labelFunc04A7_016B:
	case "Fellowship" attend labelFunc04A7_01A8:
	if (!(!(var0001 && (!gflags[0x0006])))) goto labelFunc04A7_019D;
	message("\"Wouldst thou like to join?\"");
	say();
	var0006 = Func090A();
	if (!var0006) goto labelFunc04A7_0196;
	message("\"Then thou must see Batlin of Britain. He is the founder of The Fellowship.\"");
	say();
	goto labelFunc04A7_019A;
labelFunc04A7_0196:
	message("\"Thou dost not yet comprehend how much thy life could be improved through the guidance of The Fellowship.\"");
	say();
labelFunc04A7_019A:
	goto labelFunc04A7_01A1;
labelFunc04A7_019D:
	message("\"Gentle Avatar, it is good of thee to come to our humble town. Thou canst well see that The Fellowship has much work to do if it is to alleviate the suffering of the unfortunate of Britannia.\"");
	say();
labelFunc04A7_01A1:
	UI_remove_answer("Fellowship");
labelFunc04A7_01A8:
	case "shelter" attend labelFunc04A7_01BB:
	message("\"This is the only place in all of Britannia designed for the aid and care of the poor. It is hard work, but then one strives to be worthy of that which we wish to receive.\"");
	say();
	UI_remove_answer("shelter");
labelFunc04A7_01BB:
	case "Brita" attend labelFunc04A7_020A:
	if (!(!gflags[0x0221])) goto labelFunc04A7_01FF;
	message("\"A wonderful woman. Thou shouldst meet her.\"");
	say();
	var0007 = Func08F7(0xFF58);
	if (!var0007) goto labelFunc04A7_01FC;
	UI_show_npc_face(0xFF58, 0x0000);
	message("\"Mine husband is such a flatterer. The truth is that our work for The Fellowship has brought us closer together.\"*");
	say();
	UI_remove_npc_face(0xFF58);
	UI_show_npc_face(0xFF59, 0x0000);
labelFunc04A7_01FC:
	goto labelFunc04A7_0203;
labelFunc04A7_01FF:
	message("\"As thou dost already know my wife Brita, I am certain thou wilt agree that thou couldst not find a more dedicated practitioner of The Fellowship's teachings.\"");
	say();
labelFunc04A7_0203:
	UI_remove_answer("Brita");
labelFunc04A7_020A:
	case "Garritt" attend labelFunc04A7_0224:
	message("\"Thankfully, we have been able to raise our son properly by emphasizing the teachings of The Fellowship. Garritt shall not be trapped in the poverty of his surroundings. He shall be intellectually, spiritually, and morally superior. He's talented, too!\"");
	say();
	UI_remove_answer("Garritt");
	UI_add_answer("talented");
labelFunc04A7_0224:
	case "talented" attend labelFunc04A7_0237:
	message("\"He plays the whistle panpipes extremely well for a lad his age! Brita and I are very proud. He could probably attend The Music Hall in Britain when he is older!\"");
	say();
	UI_remove_answer("talented");
labelFunc04A7_0237:
	case "Paws" attend labelFunc04A7_025D:
	message("\"As this is a small town with few privileges and little privacy, our family has come to know everyone in Paws quite well. Is there someone thou dost wish to hear about? I am well acquainted with these people.\"");
	say();
	UI_remove_answer("Paws");
	UI_add_answer(["merchants", "farmers", "shelter residents", "beggars"]);
labelFunc04A7_025D:
	case "merchants" attend labelFunc04A7_0283:
	message("\"They would be Morfin, Andrew, Thurston, and Beverlea.\"");
	say();
	UI_add_answer(["Morfin", "Andrew", "Thurston", "Beverlea"]);
	UI_remove_answer("merchants");
labelFunc04A7_0283:
	case "Beverlea" attend labelFunc04A7_0296:
	message("\"She is a nearly blind elderly woman who runs the antique shoppe on the east side of the river.\"");
	say();
	UI_remove_answer("Beverlea");
labelFunc04A7_0296:
	case "farmers" attend labelFunc04A7_02B6:
	message("\"That would be Camille and her son Tobias.\"");
	say();
	UI_add_answer(["Camille", "Tobias"]);
	UI_remove_answer("farmers");
labelFunc04A7_02B6:
	case "beggars" attend labelFunc04A7_02D6:
	message("\"Oh. Them. Komor and Fenn.\" Feridwyn rolls his eyes.");
	say();
	UI_add_answer(["Komor", "Fenn"]);
	UI_remove_answer("beggars");
labelFunc04A7_02D6:
	case "shelter residents" attend labelFunc04A7_02F6:
	message("\"Our residents include Alina and her child, and Merrick.\"");
	say();
	UI_add_answer(["Alina", "Merrick"]);
	UI_remove_answer("shelter residents");
labelFunc04A7_02F6:
	case "Alina" attend labelFunc04A7_0309:
	message("\"Her husband is currently in Britain somewhere. I do not know the details. She has a small child.\"");
	say();
	UI_remove_answer("Alina");
labelFunc04A7_0309:
	case "Elizabeth and Abraham" attend labelFunc04A7_032E:
	if (!(!gflags[0x016B])) goto labelFunc04A7_0323;
	message("\"I am so sorry! Thou hast just missed them! Elizabeth and Abraham were here delivering funds, but they have gone now to Jhelom. There is currently no Fellowship branch there, so they are taking the Triad of Inner Strength to lands west!\"");
	say();
	gflags[0x0217] = true;
	goto labelFunc04A7_0327;
labelFunc04A7_0323:
	message("\"I have not seen Elizabeth and Abraham for many days now.\"");
	say();
labelFunc04A7_0327:
	UI_remove_answer("Elizabeth and Abraham");
labelFunc04A7_032E:
	case "Thurston" attend labelFunc04A7_0341:
	message("\"Thurston owns the mill. He could do better if he ran his business with more of an eye toward profit.\"");
	say();
	UI_remove_answer("Thurston");
labelFunc04A7_0341:
	case "Camille" attend labelFunc04A7_0354:
	message("\"She's a sad woman -- a widow -- who is living in the past. 'Tis a pity, really. Fortunately her husband left her the farm which does happen to turn a profit.\"");
	say();
	UI_remove_answer("Camille");
labelFunc04A7_0354:
	case "Merrick" attend labelFunc04A7_0367:
	message("\"A splendid example of The Fellowship turning someone's life around. Presently he resides in our shelter.\"");
	say();
	UI_remove_answer("Merrick");
labelFunc04A7_0367:
	case "Morfin" attend labelFunc04A7_0381:
	message("\"Morfin is a clever and industrious member of The Fellowship. He runs the local slaughterhouse and is also a snake venom merchant.\"");
	say();
	UI_add_answer("snake venom");
	UI_remove_answer("Morfin");
labelFunc04A7_0381:
	case "Andrew" attend labelFunc04A7_0394:
	message("\"Andrew is such a happy young man. He doth not notice the myriad of personal problems that he is afflicted with.\"");
	say();
	UI_remove_answer("Andrew");
labelFunc04A7_0394:
	case "Tobias" attend labelFunc04A7_03B5:
	if (!(!gflags[0x0218])) goto labelFunc04A7_03AA;
	message("\"A local rascal. I normally would not allow Garritt to associate with such a troublemaker, but The Fellowship has taught me to be a tolerant parent. Besides, associating with my son might do the lad some good. Who knows?\"");
	say();
	goto labelFunc04A7_03AE;
labelFunc04A7_03AA:
	message("\"No matter that Tobias did not personally steal the venom himself. He caused the theft by means of his corrupting influence on my son. While his actions are just short of criminal, I still blame Tobias.\"");
	say();
labelFunc04A7_03AE:
	UI_remove_answer("Tobias");
labelFunc04A7_03B5:
	case "Fenn" attend labelFunc04A7_03C8:
	message("\"Fenn is a beggar who refuses all aid from The Fellowship. A pathetic case. Not even his former friend Merrick can reach him any more.\"");
	say();
	UI_remove_answer("Fenn");
labelFunc04A7_03C8:
	case "Komor" attend labelFunc04A7_03DB:
	message("\"Komor is the most hateful man I have ever met. He is a bundle of bitterness. In all the time I have known him, Komor has never spoken a word to me that was not at best a thinly veiled insult.\"");
	say();
	UI_remove_answer("Komor");
labelFunc04A7_03DB:
	case "case solved" attend labelFunc04A7_03FF:
	if (!(gflags[0x0218] || var0002)) goto labelFunc04A7_03F4;
	message("\"Thankfully we can now put this business of snake venom thefts behind us, thanks to thy thorough efforts. I shall deal with my son. Let us speak of this no more.\"");
	say();
	goto labelFunc04A7_03F8;
labelFunc04A7_03F4:
	message("\"Thank goodness Garritt, my sharp eyed boy, got to the bottom of this business of the snake venom thefts. Frankly, I had my suspicions about Tobias myself.\"");
	say();
labelFunc04A7_03F8:
	UI_remove_answer("case solved");
labelFunc04A7_03FF:
	case "snake venom" attend labelFunc04A7_0416:
	message("\"Morfin, the local merchant, informs me that a quantity of silver serpent venom was stolen from him. The thief is still at large, so be wary! Of course, I do not know why anyone would want the vile substance. It is surely not good for one's health.\"");
	say();
	gflags[0x0212] = true;
	UI_remove_answer("snake venom");
labelFunc04A7_0416:
	case "take action" attend labelFunc04A7_0429:
	message("\"I promise thee, I shall apply the necessary discipline to my son to insure that this bad habit he has picked up from the local riffraff will not trouble this community again.\"");
	say();
	UI_remove_answer("take action");
labelFunc04A7_0429:
	case "found venom" attend labelFunc04A7_044A:
	if (!(!gflags[0x0218])) goto labelFunc04A7_043F;
	message("\"Thou didst find the venom vial in Garritt's belongings? I am amazed! I am astonished! I am-- sorry.\"");
	say();
	goto labelFunc04A7_0443;
labelFunc04A7_043F:
	message("\"Thou art a resourceful person. Unfortunately, thy discovery has upset me a great deal.\"");
	say();
labelFunc04A7_0443:
	UI_remove_answer("found venom");
labelFunc04A7_044A:
	case "Garritt caught" attend labelFunc04A7_045D:
	message("\"Thou dost say my son has admitted to stealing the venom?! I do not know what to say. My thanks, Avatar, for uncovering the truth.\"");
	say();
	UI_remove_answer("Garritt caught");
labelFunc04A7_045D:
	case "bye" attend labelFunc04A7_046A:
	message("\"Mayest thou walk with the Fellowship.\"*");
	say();
	abort;
labelFunc04A7_046A:
	goto labelFunc04A7_0133;
labelFunc04A7_046D:
	endconv;
	if (!var0003) goto labelFunc04A7_0478;
	message("You realize that the Cube did not bring out anything that Feridwyn did not actually believe himself. He is one of the innocent followers of The Guardian.");
	say();
labelFunc04A7_0478:
	if (!(event == 0x0000)) goto labelFunc04A7_0486;
	Func092E(0xFF59);
labelFunc04A7_0486:
	return;
}


