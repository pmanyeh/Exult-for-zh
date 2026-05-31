#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func08B8 0x8B8 ();
extern void Func092E 0x92E (var var0000);

void Func043D object#(0x43D) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc043D_02E9;
	UI_show_npc_face(0xFFC3, 0x0000);
	var0000 = Func0909();
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x0093]) goto labelFunc043D_0035;
	UI_add_answer("proof");
labelFunc043D_0035:
	if (!gflags[0x00CF]) goto labelFunc043D_0042;
	UI_add_answer("picked eggs");
labelFunc043D_0042:
	if (!(!gflags[0x00BE])) goto labelFunc043D_0054;
	message("You see a farmer with wild eyes widened in excitement.");
	say();
	gflags[0x00BE] = true;
	goto labelFunc043D_0058;
labelFunc043D_0054:
	message("\"Avatar! Thou hast returned!\" exclaims Mack.");
	say();
labelFunc043D_0058:
	converse attend labelFunc043D_02E4;
	case "name" attend labelFunc043D_006E:
	message("\"I am Mack.\"");
	say();
	UI_remove_answer("name");
labelFunc043D_006E:
	case "job" attend labelFunc043D_0087:
	message("\"I am a farmer, though most folks just call me a lunatic.\"");
	say();
	UI_add_answer(["farmer", "lunatic"]);
labelFunc043D_0087:
	case "farmer" attend labelFunc043D_00A1:
	message("\"On my farm I raise chickens and grow vegetables. If thou dost need work, talk to me!\"");
	say();
	UI_remove_answer("farmer");
	UI_add_answer("work");
labelFunc043D_00A1:
	case "lunatic" attend labelFunc043D_00C4:
	message("\"Thou dost also think so, eh? But I tell thee what I say is true! There are creatures visiting us from another place in the stars! I have seen them!\"");
	say();
	UI_remove_answer("lunatic");
	UI_add_answer(["creatures", "another place", "seen them"]);
labelFunc043D_00C4:
	case "creatures" attend labelFunc043D_00D7:
	message("\"They are big mean ugly liontigers! Or is that tigerlions? They are ferocious and they want to eat us!\"");
	say();
	UI_remove_answer("creatures");
labelFunc043D_00D7:
	case "another place" attend labelFunc043D_00EA:
	message("\"All I can say is that there are certainly no such creatures in this world! Nor is their ship like any that has ever been seen anywhere in Britannia.\"");
	say();
	UI_remove_answer("another place");
labelFunc043D_00EA:
	case "seen them" attend labelFunc043D_0104:
	message("\"With mine own eyes I have seen a star creature and the inexplicable conveyance which enabled it to travel to Britannia! I swear to thee! I am completely sane! I have proof!\"");
	say();
	UI_remove_answer("seen them");
	UI_add_answer("proof");
labelFunc043D_0104:
	case "proof" attend labelFunc043D_0150:
	if (!(!gflags[0x0093])) goto labelFunc043D_011F;
	message("\"Go and look behind my farm in the middle of the field. Take a look for thyself and thou shalt see my proof.\"");
	say();
	gflags[0x0093] = true;
	abort;
	goto labelFunc043D_0150;
labelFunc043D_011F:
	message("\"I told thee I was not a looney! Didst thou see the proof?\"");
	say();
	var0001 = Func090A();
	if (!(!var0001)) goto labelFunc043D_013E;
	message("\"Thou must go and look at what is in my field! Then come back here, for I must talk about this with someone who knows that I am not a looney!\"");
	say();
	UI_remove_answer("proof");
	goto labelFunc043D_0150;
labelFunc043D_013E:
	message("\"Did I not tell thee that I am no loonie? Still, my story of how I did come across this thing is beyond belief.\"");
	say();
	UI_remove_answer("proof");
	UI_add_answer("story");
labelFunc043D_0150:
	case "story" attend labelFunc043D_0185:
	if (!(!gflags[0x0095])) goto labelFunc043D_017A;
	message("\"I like to stay up late. Sometimes I see bright lights flash across the sky. No one else ever pays them any mind. But one night I see this bright light come crashing down and it lands in my field.\"");
	say();
	UI_remove_answer("story");
	UI_add_answer(["bright lights", "lands"]);
	goto labelFunc043D_0185;
labelFunc043D_017A:
	message("\"I have been looking every night for another sign of those things but I have not seen any since that last time I told thee about it.\"");
	say();
	UI_remove_answer("story");
labelFunc043D_0185:
	case "bright lights" attend labelFunc043D_0198:
	message("\"I always watch for moving bright lights in the night sky. That is part of why people in the town say I am a loonie. But is what I do so different from what they do in the orrery?\"");
	say();
	UI_remove_answer("bright lights");
labelFunc043D_0198:
	case "lands" attend labelFunc043D_01B8:
	message("\"After the explosion and crash I ran out to my field. There I saw the strange machine that thou hast seen, only it was glowing hot. I was terrified. But then the top of the machine started to open.\"");
	say();
	UI_remove_answer("lands");
	UI_add_answer(["machine", "open"]);
labelFunc043D_01B8:
	case "machine" attend labelFunc043D_01CB:
	message("\"It resembled a bird, but it was not a bird!\"");
	say();
	UI_remove_answer("machine");
labelFunc043D_01CB:
	case "open" attend labelFunc043D_01EB:
	message("\"I could not move from the spot as I saw the strange ship open. From out of the top came the vicious tigerlion. There was a savage hunger in its eyes.\"");
	say();
	UI_remove_answer("open");
	UI_add_answer(["tigerlion", "hunger"]);
labelFunc043D_01EB:
	case "hunger" attend labelFunc043D_01FE:
	message("\"In other words, it looked like it might eat me!\"");
	say();
	UI_remove_answer("hunger");
labelFunc043D_01FE:
	case "tigerlion" attend labelFunc043D_0218:
	message("\"It came at me like a predator comes after prey. It was so fast that I could not even move. I thought I was going to be killed for certain. It reached me in a second. It looked into mine eyes, and then it died.\"");
	say();
	UI_remove_answer("tigerlion");
	UI_add_answer("died");
labelFunc043D_0218:
	case "died" attend labelFunc043D_0238:
	message("\"What it and I had failed to notice was that I was holding mine hoe. It had once been accidentally enchanted by a passing mage, and it works wondrously in the fields. I use it for everything! The tigerlion had run itself through upon it. As it died, the thing spoke.\"");
	say();
	UI_remove_answer("died");
	UI_add_answer(["spoke", "hoe"]);
labelFunc043D_0238:
	case "spoke" attend labelFunc043D_0252:
	message("\"It said two words. \"Kill Wrathy.\" I do not know who this Wrathy person is, or why the tigerlion wanted me to kill him. But I do know I sure get worried now whenever I see moving lights in the night sky.\"");
	say();
	UI_remove_answer("spoke");
	UI_add_answer("Kill Wrathy");
labelFunc043D_0252:
	case "hoe" attend labelFunc043D_026C:
	message("\"I am sure thou dost know about the plague of looniness that has come to afflict all of the mages in the world. It was several years ago that I brought my broken hoe to a mage called Mumb. Fixing things was all he was good for anymore. There was also some fighter who wanted Mumb to enchant his sword, turning it into \"The Sword of Death\". It appears poor Mumb got confused and that fighter came back and killed him because the man wound up with a sword that was only good for cutting weeds. I could never figure out exactly what happened. It appears that old Mumb made mine hoe into the Hoe of Destruction! Unfortunately, the hoe is lost.\"");
	say();
	UI_remove_answer("hoe");
	UI_add_answer("lost");
labelFunc043D_026C:
	case "lost" attend labelFunc043D_027F:
	message("\"Well, 'tis not really lost. It is locked up in my shed. It is the key to the shed that is lost! I think I might have accidentally used it as a fishhook when I was fishing on the banks of Lock Lake. So now I cannot get into my shed. One would think I -am- a looney!\"");
	say();
	UI_remove_answer("lost");
labelFunc043D_027F:
	case "Kill Wrathy" attend labelFunc043D_0296:
	message("\"I am quite certain that was it, or something like that. Anyway the tigerlion itself proved to be quite delicious.\"");
	say();
	gflags[0x0095] = true;
	UI_remove_answer("Kill Wrathy");
labelFunc043D_0296:
	case "work" attend labelFunc043D_02C4:
	message("\"I need someone to work for me and help gather all the eggs being laid by the chickens! When that big thing came crashing down it scared them all so much that they cannot stop laying eggs! Wilt thou work for me? I will pay thee 1 gold per egg.\"");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc043D_02B9;
	message("\"Fine! Thou wilt find the chickens out back. Thou must feel around in the nest to find the eggs that are there. But there is a limit to how many they will produce in one day, of course.\"");
	say();
	gflags[0x00CF] = true;
	goto labelFunc043D_02BD;
labelFunc043D_02B9:
	message("\"Ask me again if thou dost change thy mind.\"");
	say();
labelFunc043D_02BD:
	UI_remove_answer("work");
labelFunc043D_02C4:
	case "picked eggs" attend labelFunc043D_02D6:
	Func08B8();
	UI_remove_answer("picked eggs");
labelFunc043D_02D6:
	case "bye" attend labelFunc043D_02E1:
	goto labelFunc043D_02E4;
labelFunc043D_02E1:
	goto labelFunc043D_0058;
labelFunc043D_02E4:
	endconv;
	message("\"I thank thee for thy decency and consideration.\"");
	say();
labelFunc043D_02E9:
	if (!(event == 0x0000)) goto labelFunc043D_02F7;
	Func092E(0xFFC3);
labelFunc043D_02F7:
	return;
}


