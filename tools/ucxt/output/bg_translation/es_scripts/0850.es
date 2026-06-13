#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);

void Func0850 0x850 ()
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

	UI_show_npc_face(0xFFE6, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	message("The ceremony begins as Batlin stands before the gathered Fellowship members. The hall fills with thunderous cheers. They look at him with a mixture of awe and sheer adoration. Batlin stands and basks in the warm reception for a moment, a triumphant smile on his face. With a slight gesture of his hand the crowd becomes quiet.");
	say();
	message("\"It is good to see you here this evening!\" Batlin says. \"Surely you make me feel proud to be part of what we lovingly call The Fellowship.\" There is another eruption of applause.");
	say();
	message("\"In thine heart be glad for thou dost walk with The Fellowship! The people of Britannia live in a fevered state of illusory thoughts and emotions. But those whom I look upon here tonight are seekers of what is good and true in the world! They walk the path which leads to becoming truly cognizant. But how dost thou find thy way? Ask any Fellowship member and they will tell thee! The path to complete awareness is easy to find. One must apply to one's life the Triad of Inner Strength.");
	say();
	message("\"The Triad of Inner Strength is a series of three values that can bring the mind to a perfect state of sanguine cognition. The first value is Strive For Unity. When the totality of the people of the world want to accomplish something, then it becomes done. Thus once the people of the world all strive towards the same ends there is nothing that is impossible. Just think of it! A world where any dream can be fulfilled, any good can be achieved. But as thou canst see plainly by looking at our own sad society, when the people of the world are disunited, it is a miracle that anything gets accomplished!");
	say();
	message("\"The second value is Trust Thy Brother. Thou must surrender thy fear, prejudice and suspicion. Look to thine own self! Before thou dost question anything, question thyself! The world is a place where the balances of nature are at work to protect thee every second without thee even realizing it! What canst thou accomplish in this world if thou dost spend all thy time questioning thy brother?! Is he working as hard as I? What are his true motivations? As thou dost waste thine energies wondering, he sees thee and starts wondering these same things about thee. Thus is the world diminished!");
	say();
	message("\"The third value is Worthiness Precedes Reward. There is not one among us who is without desire. Much of the misery in the world can be traced to unfulfilled desires. But one moment! Why dost thou deserve what thou dost desire? Most people get what they are worthy of in this life. If thou art not worthy of thy desire then thou shouldst not be surprised if thy desires are unfulfilled. If thou dost become worthy only then hast thou become open to fulfilling thy desires. Desire is a strange thing. Many long for things they do not really want. What they really desire is worthiness itself!");
	say();
	message("\"I have just told thee all that thou dost need to follow the Triad Of Inner Strength. The lessons are simple. The true measure of thine understanding comes in how absolutely thou wilt apply them to thy life. Thou now knowest all thou wilt ever need. Thou dost not need the arcane knowledge of the dying art of magic. Thou dost not need the unsure hand of the healer and his limited knowledge. All that thou wilt ever need is to continuously seek out the best in thyself and to live amongst those that would do the same. Only then art thou truly walking with The Fellowship.");
	say();
	message("\"Now I think would be a good time to hear the words of our fellow members. To hear them share with us how The Fellowship has been bringing positive change to their lives.\"");
	say();
	var0002 = Func08F7(0xFFD7);
	if (!var0002) goto labelFunc0850_005A;
	UI_show_npc_face(0xFFD7, 0x0000);
	message("\"The Fellowship has shown me that I was afraid of myself and that I had to open myself up to life's experiences,\" says Candice.*");
	say();
	UI_remove_npc_face(0xFFD7);
labelFunc0850_005A:
	var0003 = Func08F7(0xFFD5);
	if (!var0003) goto labelFunc0850_008C;
	UI_show_npc_face(0xFFD5, 0x0000);
	message("\"The Fellowship helps me be more honest with people,\" says Patterson.*");
	say();
	UI_show_npc_face(0xFFE6, 0x0000);
	message("\"Thank thee for sharing, Patterson.\"*");
	say();
	UI_remove_npc_face(0xFFD5);
labelFunc0850_008C:
	var0004 = Func08F7(0xFFD3);
	if (!var0004) goto labelFunc0850_00B0;
	UI_show_npc_face(0xFFD3, 0x0000);
	message("\"The Fellowship has taught me how to better perform my duties as the Caretaker of the Royal Orchards,\" says Figg.*");
	say();
	UI_remove_npc_face(0xFFD3);
labelFunc0850_00B0:
	var0005 = Func08F7(0xFFCB);
	if (!var0005) goto labelFunc0850_00D4;
	UI_show_npc_face(0xFFCB, 0x0000);
	message("\"The Fellowship has taught me to, first and foremost, treat people with respect,\" says Gaye.*");
	say();
	UI_remove_npc_face(0xFFCB);
labelFunc0850_00D4:
	var0006 = Func08F7(0xFFC9);
	if (!var0006) goto labelFunc0850_00F8;
	UI_show_npc_face(0xFFC9, 0x0000);
	message("\"After joining The Fellowship I learned how to be a man's man,\" says Grayson.*");
	say();
	UI_remove_npc_face(0xFFC9);
labelFunc0850_00F8:
	var0007 = Func08F7(0xFFC6);
	if (!var0007) goto labelFunc0850_012A;
	UI_show_npc_face(0xFFC6, 0x0000);
	message("\"The Fellowship is helping me back from the brink of personal and financial oblivion,\" says Gordon.*");
	say();
	UI_show_npc_face(0xFFE6, 0x0000);
	message("\"Right thou art, brother!\"*");
	say();
	UI_remove_npc_face(0xFFC6);
labelFunc0850_012A:
	var0008 = Func08F7(0xFFC5);
	if (!var0008) goto labelFunc0850_014E;
	UI_show_npc_face(0xFFC5, 0x0000);
	message("\"The Fellowship has freed me from the illusory appeals of mediocrity,\" says Sean.*");
	say();
	UI_remove_npc_face(0xFFC5);
labelFunc0850_014E:
	var0009 = Func08F7(0xFFC1);
	if (!var0009) goto labelFunc0850_0172;
	UI_show_npc_face(0xFFC1, 0x0000);
	message("\"In The Fellowship I am learning that I need to devote my life to a special purpose,\" says Millie.*");
	say();
	UI_remove_npc_face(0xFFC1);
labelFunc0850_0172:
	var000A = Func08F7(0xFFFE);
	if (!var000A) goto labelFunc0850_0196;
	UI_show_npc_face(0xFFFE, 0x0000);
	message("\"This whole ceremony and everyone in it doth give me the willies!\"*");
	say();
	UI_remove_npc_face(0xFFFE);
labelFunc0850_0196:
	var000B = Func08F7(0xFFFF);
	if (!var000B) goto labelFunc0850_01BA;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("\"'Tis a sad thing to see so many people who have nothing else better in their lives than blindly following this dubious spiritual leader.\"*");
	say();
	UI_remove_npc_face(0xFFFF);
labelFunc0850_01BA:
	var000C = Func08F7(0xFFFD);
	if (!var000C) goto labelFunc0850_01DE;
	UI_show_npc_face(0xFFFD, 0x0000);
	message("\"'Tis a sad thing that Britannia has fallen so far as to leave itself open to a group like this Fellowship.\"*");
	say();
	UI_remove_npc_face(0xFFFD);
labelFunc0850_01DE:
	var000D = Func08F7(0xFFFC);
	if (!var000D) goto labelFunc0850_0202;
	UI_show_npc_face(0xFFFC, 0x0000);
	message("\"'Tis a sad thing when I cannot even keep my eyes open from the boredom of this Fellowship ceremony!\"*");
	say();
	UI_remove_npc_face(0xFFFC);
labelFunc0850_0202:
	UI_show_npc_face(0xFFE6, 0x0000);
	message("From watching Batlin and the others you get the feeling that the Fellowship ceremony is going to last long into the night. Now would be a good moment to slip away without drawing much attention to yourself...*");
	say();
	abort;
	return;
}


