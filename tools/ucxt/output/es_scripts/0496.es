#game "blackgate"
// externs
extern var Func08C9 0x8C9 ();
extern var Func0908 0x908 ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func0909 0x909 ();
extern void Func0911 0x911 (var var0000);
extern var Func090A 0x90A ();
extern var Func090B 0x90B (var var0000);

void Func0496 object#(0x496) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	if (!(event == 0x0000)) goto labelFunc0496_0009;
	abort;
labelFunc0496_0009:
	UI_show_npc_face(0xFF6A, 0x0000);
	gflags[0x01E2] = Func08C9();
	var0000 = Func0908();
	var0001 = Func0931(0xFE9B, 0x0001, 0x02F7, 0xFE99, 0xFE99);
	var0002 = Func0909();
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x01DF]) goto labelFunc0496_0057;
	UI_add_answer("blackrock");
labelFunc0496_0057:
	if (!gflags[0x01E0]) goto labelFunc0496_0064;
	UI_add_answer("ring");
labelFunc0496_0064:
	if (!(!gflags[0x01F8])) goto labelFunc0496_009B;
	message("The mage, having been asleep for 200 years, looks just as she did upon your last visit to Britannia.~~\"Avatar! I cannot believe 'tis thee! Thou didst come and wake me! I knew thee would!\"");
	say();
	message("Suddenly, Penumbra grabs her head in pain. \"Oh!\" she cries. \"Mine head! The pain! What is happening? What didst thou do to me?\" She closes her eyes and concentrates. \"There is a disturbance in the ether! I can feel my magical powers fading! Help me, ");
	message(var0000);
	message("! Help me!!\"");
	say();
	UI_set_schedule_type(UI_get_npc_object(0xFF6A), 0x000B);
	UI_add_answer("ether");
	gflags[0x01F8] = true;
	Func0911(0x0320);
	goto labelFunc0496_00CE;
labelFunc0496_009B:
	if (!(!gflags[0x0003])) goto labelFunc0496_00BD;
	if (!(!gflags[0x01E2])) goto labelFunc0496_00B6;
	message("Penumbra is in so much pain she can barely speak. \"Yes, ");
	message(var0000);
	message("?\"");
	say();
	goto labelFunc0496_00BA;
labelFunc0496_00B6:
	message("\"Oh! I feel so much better! The pain is ebbing. Now we may converse much more easily.\"");
	say();
labelFunc0496_00BA:
	goto labelFunc0496_00C7;
labelFunc0496_00BD:
	message("\"Yes, ");
	message(var0000);
	message("?\"");
	say();
labelFunc0496_00C7:
	UI_add_answer("ether");
labelFunc0496_00CE:
	converse attend labelFunc0496_0357;
	case "name" attend labelFunc0496_00E4:
	message("\"I am Penumbra. Surely thou dost remember me?\"");
	say();
	UI_remove_answer("name");
labelFunc0496_00E4:
	case "job" attend labelFunc0496_00FE:
	if (!(!gflags[0x01E2])) goto labelFunc0496_00FA;
	message("Penumbra is in pain. \"I cannot think straight whilst the ether is disturbed. I can do nothing until it is flowing smoothly again!\"");
	say();
	goto labelFunc0496_00FE;
labelFunc0496_00FA:
	message("\"I am a practicing mage. Once I get my business going again, I should be able to sell spells and reagents. After all, I have been asleep for 200 years!\"");
	say();
labelFunc0496_00FE:
	case "ether" attend labelFunc0496_015B:
	if (!(!gflags[0x0003])) goto labelFunc0496_014A;
	if (!(!gflags[0x01E2])) goto labelFunc0496_0122;
	message("\"The ether controls all the magic in the world. When there is a disturbance in the ether, no mage can cast successful spells. A mage might even lose his mind after a long period of time! Thou must find a way to protect me from the warped ethereal waves!\"");
	say();
	UI_add_answer("protect");
	goto labelFunc0496_0147;
labelFunc0496_0122:
	message("\"I feel much better. The damaged ethereal waves are not striking my mind. But now we must destroy what is causing this problem!\"");
	say();
	if (!(!gflags[0x0000])) goto labelFunc0496_013C;
	message("Penumbra thinks a moment. \"I feel that the damaged ethereal waves are coming from a source very near here. I suspect there is something in a dungeon on these islands that is creating the havoc. Try Dungeon Deceit. I have a strong sense that thy goal is there.");
	say();
	message("She closes her eyes a moment.");
	say();
	message("\"In my mind's eye, I see a large object shaped like a tetrahedron. I am beginning to understand what this is.\"");
	say();
	goto labelFunc0496_0140;
labelFunc0496_013C:
	message("\"In my mind's eye, I see a large object in a dungeon north of here. Thou dost know of what I speak, dost thou not?\"");
	say();
labelFunc0496_0140:
	UI_add_answer("Tetrahedron");
labelFunc0496_0147:
	goto labelFunc0496_0154;
labelFunc0496_014A:
	message("\"The ether is flowing smoothly now. I thank thee, ");
	message(var0000);
	message(". Thou hast saved all mages everywhere!\"");
	say();
labelFunc0496_0154:
	UI_remove_answer("ether");
labelFunc0496_015B:
	case "Draxinusom" attend labelFunc0496_016E:
	message("\"Thou shalt find him on the island of Terfin. Ask him about the ring.\"");
	say();
	UI_remove_answer("Draxinusom");
labelFunc0496_016E:
	case "Tetrahedron" attend labelFunc0496_01D2:
	if (!(!gflags[0x0003])) goto labelFunc0496_01C7;
	if (!(!gflags[0x01E2])) goto labelFunc0496_018B;
	message("\"Please! I cannot help thee until I am protected from the damaged ether!\"");
	say();
	goto labelFunc0496_01C4;
labelFunc0496_018B:
	message("\"Yes, that is the shape of the thing I have seen in my mind's eye. It appears to be some type of magic generator which damages the ethereal flow.\"");
	say();
	message("Penumbra thinks a moment. \"This generator is producing dangerous ethereal waves. Thou must find the Ethereal Ring and wear it to break the generator's defense. Now where is that ring...?\"");
	say();
	if (!(!var0001)) goto labelFunc0496_01AC;
	message("Penumbra consults some books and cross references them with a map. \"I believe that the Ethereal Ring was last in the possession of King Draxinusom of the Gargoyles. Once thou hast found the ring, thou must bring it back to me. I must perform an enchantment upon it so that it may work for thee.\"");
	say();
	UI_add_answer("Draxinusom");
	gflags[0x01E0] = true;
	goto labelFunc0496_01C4;
labelFunc0496_01AC:
	if (!gflags[0x01E1]) goto labelFunc0496_01B9;
	message("\"The enchanted ring shall protect thee.\"");
	say();
	goto labelFunc0496_01C4;
labelFunc0496_01B9:
	message("\"The ethereal ring must be enchanted.\"");
	say();
	UI_add_answer("ring");
labelFunc0496_01C4:
	goto labelFunc0496_01CB;
labelFunc0496_01C7:
	message("\"Thou hast destroyed it! All the mages thank thee!\"");
	say();
labelFunc0496_01CB:
	UI_remove_answer("Tetrahedron");
labelFunc0496_01D2:
	case "protect" attend labelFunc0496_023A:
	message("\"I need some kind of barrier to protect me from the ethereal waves. There must be a material we could use!\"~~ Penumbra clutches her temples. She is obviously in great pain.");
	say();
	message("\"Dost thou know of a material that is impenetrable?\"");
	say();
	var0003 = Func090A();
	if (!var0003) goto labelFunc0496_0227;
	message("\"What is it?\"");
	say();
	UI_push_answers();
	var0004 = Func090B(["iron ore", "gold", "blackrock", "lead"]);
	if (!(var0004 == "blackrock")) goto labelFunc0496_021C;
	message("\"Yes! That is what we need!");
	say();
	goto labelFunc0496_0220;
labelFunc0496_021C:
	message("\"No, I do not think that will work. Oh, I cannot think, the pain is so great!");
	say();
labelFunc0496_0220:
	UI_pop_answers();
	goto labelFunc0496_022B;
labelFunc0496_0227:
	message("\"There must be something! Oh, I cannot think, the pain is so great!");
	say();
labelFunc0496_022B:
	message("\"Please -- canst thou find a few pieces of blackrock to set about my room? I will need four pieces! But hurry! I do not think I can last much longer! Please go!\"");
	say();
	gflags[0x01DF] = true;
	UI_remove_answer("protect");
labelFunc0496_023A:
	case "blackrock" attend labelFunc0496_0294:
	if (!(!gflags[0x0003])) goto labelFunc0496_0289;
	if (!(!gflags[0x01E2])) goto labelFunc0496_027B;
	var0005 = Func0931(0xFE9B, 0x0004, 0x0392, 0xFE99, 0xFE99);
	if (!var0005) goto labelFunc0496_0273;
	message("\"Thou hast brought the blackrock! I did not think I could manage much longer! Hurry! Place the pieces on the pedestals at the north, south, east, and west ends of the room! I shall wait here!\"*");
	say();
	abort;
	goto labelFunc0496_0278;
labelFunc0496_0273:
	message("\"But thou dost not have the blackrock! Thou must get four pieces and help me! Thou wilt need to place the pieces on the pedestals at the north, south, east, and west ends of the room! Hurry!\"*");
	say();
	abort;
labelFunc0496_0278:
	goto labelFunc0496_0286;
labelFunc0496_027B:
	message("\"The blackrock is working! I no longer feel the painful ether!\"");
	say();
	UI_remove_answer("blackrock");
labelFunc0496_0286:
	goto labelFunc0496_0294;
labelFunc0496_0289:
	message("\"It is quite a material, is it not? I imagine it could be used for many magical things.\"");
	say();
	UI_remove_answer("blackrock");
labelFunc0496_0294:
	case "ring" attend labelFunc0496_0349:
	if (!(!gflags[0x0003])) goto labelFunc0496_033E;
	if (!(!gflags[0x01E1])) goto labelFunc0496_0337;
	var0001 = Func0931(0xFE9B, 0x0001, 0x02F7, 0xFE99, 0x0000);
	if (!var0001) goto labelFunc0496_032F;
	message("\"Thou hast the ethereal ring? Good! I must enchant it! Quickly!\"~~Penumbra takes the ring from you and intones a few magical words upon it. After a moment, she hands it back to you.");
	say();
	var0006 = UI_remove_party_items(0x0001, 0x02F7, 0xFE99, 0x0000, false);
	var0007 = UI_add_party_items(0x0001, 0x02F7, 0xFE99, 0x0001, false);
	gflags[0x01E1] = true;
	Func0911(0x00C8);
	message("\"Now thou must go to the generator. Be sure thou art wearing the ring! It should now protect thee from the ethereal attacks. Be aware that it is functional only near the Tetrahedron. And tell thy companions to wait out of range. Thou must enter the generator alone!\"");
	say();
	message("Penumbra thinks a moment. \"By the way. How didst thou happen to know to come to me about this problem?\"");
	say();
	var0004 = Func090B(["Nicodemus", "Time Lord"]);
	if (!((var0004 == "Nicodemus") || (var0004 == "Time Lord"))) goto labelFunc0496_032C;
	message("You tell Penumbra the story of how you need to get the hourglass enchanted.");
	say();
	message("\"I see. Well, thou best be on thy way, so that thou canst indeed get thine hourglass enchanted!\"");
	say();
labelFunc0496_032C:
	goto labelFunc0496_0334;
labelFunc0496_032F:
	message("\"Where is the ring? Dost thou not have it? We can do nothing without the ring! Go and find it! Please!\"*");
	say();
	abort;
labelFunc0496_0334:
	goto labelFunc0496_033B;
labelFunc0496_0337:
	message("\"What dost thou want? I have already enchanted the ring!\"");
	say();
labelFunc0496_033B:
	goto labelFunc0496_0342;
labelFunc0496_033E:
	message("\"What dost thou want? I have already enchanted the ring. It can do no more for thee!\"");
	say();
labelFunc0496_0342:
	UI_remove_answer("ring");
labelFunc0496_0349:
	case "bye" attend labelFunc0496_0354:
	goto labelFunc0496_0357;
labelFunc0496_0354:
	goto labelFunc0496_00CE;
labelFunc0496_0357:
	endconv;
	if (!(!gflags[0x01E2])) goto labelFunc0496_0366;
	message("Penumbra waves at you and then closes her eyes in pain.*");
	say();
	goto labelFunc0496_0370;
labelFunc0496_0366:
	message("\"Farewell, ");
	message(var0000);
	message("! And good luck to thee!\"*");
	say();
labelFunc0496_0370:
	return;
}


