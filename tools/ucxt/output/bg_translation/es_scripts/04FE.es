#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern var Func08F7 0x8F7 (var var0000);

void Func04FE object#(0x4FE) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0000)) goto labelFunc04FE_0009;
	abort;
labelFunc04FE_0009:
	UI_show_npc_face(0xFF02, 0x0000);
	var0000 = Func0909();
	if (!(!gflags[0x02CD])) goto labelFunc04FE_002B;
	message("You see a creature the size and shape of a horse. From its head protrudes a single straight horn. It looks at you with eyes that shine with intelligence.");
	say();
	gflags[0x02CD] = true;
	goto labelFunc04FE_002F;
labelFunc04FE_002B:
	message("\"I greet thee once again, Avatar,\" says Lasher, the unicorn.");
	say();
labelFunc04FE_002F:
	UI_add_answer(["name", "job", "bye"]);
labelFunc04FE_003F:
	converse attend labelFunc04FE_0414;
	case "name" attend labelFunc04FE_0055:
	message("The creature speaks. \"My name is Lasher.\"");
	say();
	UI_remove_answer("name");
labelFunc04FE_0055:
	case "job" attend labelFunc04FE_006E:
	message("Lasher looks at you and blinks. \"Come now, Avatar! I do not live by the rules that govern the society of Mankind. There is what I am, which is a unicorn. Then there is my purpose, which is another thing altogether.\"");
	say();
	UI_add_answer(["unicorn", "purpose"]);
labelFunc04FE_006E:
	case "unicorn" attend labelFunc04FE_00A4:
	message("Lasher stares at you, stupefied. \"Tell me, dost thou know what a unicorn is?\"");
	say();
	var0001 = Func090A();
	if (!(!var0001)) goto labelFunc04FE_008E;
	message("Lasher stares blankly at you. His mouth hangs open. \"Very well. Then I shall tell thee what a unicorn is.");
	say();
	goto labelFunc04FE_0092;
labelFunc04FE_008E:
	message("Lasher shakes his head sadly. \"No, thou merely thinks thou dost know what a unicorn is, but I shall tell thee the truth.");
	say();
labelFunc04FE_0092:
	message("\"A unicorn is one of a family of nature spirits that were once called upon to aid a very powerful wizard many, many years ago.\"");
	say();
	UI_remove_answer("unicorn");
	UI_add_answer("wizard");
labelFunc04FE_00A4:
	case "purpose" attend labelFunc04FE_00BE:
	message("\"Oh, do not be coy with me, Avatar. Thou dost know very well the purpose of a unicorn. ~~We are foolproof virgin detectors!\"");
	say();
	UI_remove_answer("purpose");
	UI_add_answer("virgin detector");
labelFunc04FE_00BE:
	case "wizard" attend labelFunc04FE_00D8:
	message("\"I do not remember the wizard's name, for much time has passed since then, but suffice it to say that he was a royal bastard. Anyway, for one reason or another, the chieftain of our clan, who at that time was a horse's ass named Sharp-Hoof, decided that rather than heed this wizard's rightful and properly performed ritual of calling, he was going to take the herd and chase after this bevy of really fine fillies.\"");
	say();
	UI_remove_answer("wizard");
	UI_add_answer("Sharp-Hoof");
labelFunc04FE_00D8:
	case "Sharp-Hoof" attend labelFunc04FE_00F2:
	message("\"Where was I? Oh, yes, Sharp-Hoof! The next morning, after we had had our way with these fillies, this wizard called us again. This time Sharp-Hoof realized that we had best answer, and were we sorry that we did! The wizard was horribly angry! And, well, I will just say that our agreements with such people are very, very binding.\"");
	say();
	UI_remove_answer("Sharp-Hoof");
	UI_add_answer("binding");
labelFunc04FE_00F2:
	case "binding" attend labelFunc04FE_0112:
	message("\"Not only were we bound in service to this wizard for a thousand years, but he also placed a dreadful curse upon us.\"");
	say();
	UI_remove_answer("binding");
	UI_add_answer(["service", "curse"]);
labelFunc04FE_0112:
	case "service" attend labelFunc04FE_0125:
	message("\"As it fell out, we did not actually have to serve the wizard for a thousand years. He reduced the time by a few weeks after placing that curse on us.\" Lasher snorts sarcastically, \"I was heartbroken.\"");
	say();
	UI_remove_answer("service");
labelFunc04FE_0125:
	case "curse" attend labelFunc04FE_013F:
	message("\"We nature spirits used to be renowned for our randiness, and this wizard had called upon us to assist him in the seduction of some maiden. When we stood him up... Well, let us just say that he was one magician who was having a problem convincing his magic wand to work. Anyway, in a pathetic attempt to bolster his diminished feelings of manhood, he ruined us with an awesomely powerful Curse of Chastity.\"");
	say();
	UI_remove_answer("curse");
	UI_add_answer("Chastity");
labelFunc04FE_013F:
	case "Chastity" attend labelFunc04FE_0152:
	message("\"It was a terrible curse. First, it drove us to kill all of the female members of our clan. Then it afflicted us with the particular sensitivity for which we have become known.\"");
	say();
	UI_remove_answer("Chastity");
labelFunc04FE_0152:
	case "virgin detector" attend labelFunc04FE_016C:
	message("\"That is correct. So sensitive are members of my race to all forms of sexual energy that we can only tolerate physical contact with one who has not yet had any experience in that form of procreation - or recreation, if thou dost prefer.\"");
	say();
	UI_remove_answer("virgin detector");
	UI_add_answer("sensitive");
labelFunc04FE_016C:
	case "sensitive" attend labelFunc04FE_018C:
	message("\"Yes, I find it most unpleasant to actually come into physical contact with anyone who is not a virgin, and I will avoid doing so whenever possible.\"");
	say();
	UI_remove_answer("sensitive");
	UI_add_answer(["avoid", "unpleasant"]);
labelFunc04FE_018C:
	case "avoid" attend labelFunc04FE_028D:
	message("\"Yes, well, I did not wish to get this personal with thee, but if thou does not mind, art thou a virgin?\"");
	say();
	var0002 = Func090A();
	if (!(!var0002)) goto labelFunc04FE_0260;
	if (!(gflags[0x029D] || (gflags[0x029C] || gflags[0x029E]))) goto labelFunc04FE_01BA;
	message("\"I thought as much!\" Lasher starts to pace nervously. \"If thou wouldst not mind standing back a bit, I would be most appreciative.\"");
	say();
	goto labelFunc04FE_025D;
labelFunc04FE_01BA:
	message("Lasher slowly shakes his head. \"Thou dost not have to brag in order to impress me, or fear any sort of verbal chastisements, honestly. By the way, I have an itch right betwixt my shoulder blades. Wouldst thou mind scratching it for me?\" Lasher stretches out toward you. \"Thank thee so much.\"");
	say();
	var0003 = UI_is_pc_female();
	var0004 = Func08F7(0xFFFF);
	var0005 = Func08F7(0xFFFD);
	var0006 = Func08F7(0xFFFC);
	if (!(!var0003)) goto labelFunc04FE_025D;
	if (!var0004) goto labelFunc04FE_020C;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("\"There's no shame in it, milord,\" says Iolo, looking very serious.*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFF02, 0x0000);
labelFunc04FE_020C:
	if (!var0005) goto labelFunc04FE_0231;
	UI_show_npc_face(0xFFFD, 0x0000);
	message("\"No, it is perfectly understandable. Thou hast been so busy lately,\" says Shamino. You sense he is struggling to maintain a straight face.*");
	say();
	UI_remove_npc_face(0xFFFD);
	UI_show_npc_face(0xFF02, 0x0000);
labelFunc04FE_0231:
	if (!var0006) goto labelFunc04FE_0256;
	UI_show_npc_face(0xFFFC, 0x0000);
	message("\"Why dost thou not go and pet the nice horsey. We would do it, but I think he prefers thee.\" With that, you hear an explosion of snorts and giggles.*");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFF02, 0x0000);
labelFunc04FE_0256:
	UI_add_answer("virginity");
labelFunc04FE_025D:
	goto labelFunc04FE_0286;
labelFunc04FE_0260:
	if (!(gflags[0x029D] || (gflags[0x029C] || gflags[0x029E]))) goto labelFunc04FE_0275;
	message("\"I beg thy pardon, but perhaps thou shouldst go to the Lycaeum and have someone look up the definition of the word 'virginity' for thee. Wouldst thou mind stepping back, please?! Thou dost make me nervous.\"");
	say();
	goto labelFunc04FE_0286;
labelFunc04FE_0275:
	message("\"Yes, I could tell the answer to my question before thou didst even speak it. Art thou a virgin by choice or by circumstance?\"");
	say();
	UI_add_answer(["choice", "circumstance"]);
labelFunc04FE_0286:
	UI_remove_answer("avoid");
labelFunc04FE_028D:
	case "virginity" attend labelFunc04FE_02AD:
	message("\"Surely, Avatar, thou knowest that thou dost magically regain thy virginity each time upon returning to Britannia! Hast thou remained a virgin since then by choice or by circumstance?\"");
	say();
	UI_remove_answer("virginity");
	UI_add_answer(["choice", "circumstance"]);
labelFunc04FE_02AD:
	case "choice" attend labelFunc04FE_02C6:
	message("\"Well, I am sure thou wilt find the right person one day.\"");
	say();
	UI_remove_answer(["choice", "circumstance"]);
labelFunc04FE_02C6:
	case "circumstance" attend labelFunc04FE_02E6:
	message("\"That is too bad, I am very sorry. I would love to be able to help thee, but that is no longer my purpose.\"");
	say();
	UI_remove_answer(["circumstance", "choice"]);
	UI_add_answer("help");
labelFunc04FE_02E6:
	case "help" attend labelFunc04FE_0306:
	message("\"Oh, I do not know. It has been so long since I was personally involved in such matters. Art thou seeking love or art thou seeking lust?\"");
	say();
	UI_add_answer(["love", "lust"]);
	UI_remove_answer("help");
labelFunc04FE_0306:
	case "love" attend labelFunc04FE_031F:
	message("\"Hmmm, love is usually a very elusive quarry. I suppose that thou canst try thy luck in the city of Cove. It is a city of lovers, or so I have heard.\"");
	say();
	UI_remove_answer(["love", "lust"]);
labelFunc04FE_031F:
	case "lust" attend labelFunc04FE_0338:
	message("\"If quenching thy lust is thine only concern, then thou shouldst find satisfaction at the Baths, in Buccaneer's Den. But be sure to take a full purse.\"");
	say();
	UI_remove_answer(["love", "lust"]);
labelFunc04FE_0338:
	case "unpleasant" attend labelFunc04FE_0352:
	message("\"Actually, the part of being a virgin detector that I find the most intolerable is having to perform upon demand for some clever mage or bard or hero who wants a potential wife to try to touch me.\"");
	say();
	UI_remove_answer("unpleasant");
	UI_add_answer("wife");
labelFunc04FE_0352:
	case "wife" attend labelFunc04FE_0373:
	message("\"It is a tragedy. The man always gets nervous, then places a condition on the marriage that his bride must be a virgin. They call me to put her to the test, and the man's bachelorhood is granted a reprieve. I have destroyed more engagements than the Bubonic Plague.\"");
	say();
	UI_remove_answer("wife");
	if (!(!gflags[0x02D1])) goto labelFunc04FE_0373;
	UI_add_answer("bachelorhood");
labelFunc04FE_0373:
	case "bachelorhood" attend labelFunc04FE_03A4:
	message("\"Just like those fools who are wandering around down here looking for me for the same reason, I would wager. Well, they can lose that notion. I like women, I truly do, and frankly, I am sick and tired of being used as the instrument of their humiliation.\"");
	say();
	UI_remove_answer("marriages");
	if (!gflags[0x02E0]) goto labelFunc04FE_0396;
	UI_add_answer("male virginity test");
	goto labelFunc04FE_039D;
labelFunc04FE_0396:
	UI_add_answer("fools");
labelFunc04FE_039D:
	UI_remove_answer("bachelorhood");
labelFunc04FE_03A4:
	case "fools" attend labelFunc04FE_03BB:
	message("\"I am a magical creature. I can avoid them down here as long as I want. They will die of old age before they catch me. I refuse to assist them in weaseling out of some breach of promise. Thou canst tell them that if thou dost see them.\"");
	say();
	gflags[0x02D0] = true;
	UI_remove_answer("fools");
labelFunc04FE_03BB:
	case "male virginity test" attend labelFunc04FE_03D5:
	message("\"They want the virginity test for a man who is getting married?!\" Lasher lets out a long surprised laugh. \"In all mine existence, I have never heard of such a thing!\"");
	say();
	UI_remove_answer("male virginity test");
	UI_add_answer("getting married");
labelFunc04FE_03D5:
	case "getting married" attend labelFunc04FE_03EF:
	message("\"Oh, she must be quite a ravishing maiden if he is willing to risk life and limb to come down here and prove his virtue.\"");
	say();
	UI_remove_answer("getting married");
	UI_add_answer("ravishing maiden");
labelFunc04FE_03EF:
	case "ravishing maiden" attend labelFunc04FE_0406:
	message("\"This boy must be smitten something fierce by this maid. I suppose that I should go and investigate this further. If he is as sincere about this as thou dost say, then perhaps I will help the poor lad.\"");
	say();
	UI_remove_answer("ravishing maiden");
	gflags[0x02D1] = true;
labelFunc04FE_0406:
	case "bye" attend labelFunc04FE_0411:
	goto labelFunc04FE_0414;
labelFunc04FE_0411:
	goto labelFunc04FE_003F;
labelFunc04FE_0414:
	endconv;
	message("\"Fare thee well, Avatar.\"*");
	say();
	return;
}


