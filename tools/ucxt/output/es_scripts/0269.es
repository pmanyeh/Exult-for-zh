#game "blackgate"
// externs
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func0911 0x911 (var var0000);
extern var Func090A 0x90A ();

void Func0269 shape#(0x269) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0000)) goto labelFunc0269_0009;
	abort;
labelFunc0269_0009:
	UI_show_npc_face(0xFEE4, 0x0000);
	var0000 = Func0931(0xFE9B, 0x0001, 0x0347, 0xFE99, 0x0000);
	if (!(gflags[0x0004] && (!gflags[0x0012]))) goto labelFunc0269_0056;
	message("\"Congratulations, Avatar, on destroying the Sphere. I am free from my celestial prison. I thank thee. But I regret to inform thee that The Guardian engineered the Sphere such that its destruction has permanently disabled the Moongates, and thine Orb of the Moons as well. Thou canst not return to thine home by way of a red Moongate.~~");
	say();
	message("\"Thine only hope of leaving Britannia at the conclusion of thy quest is to use The Guardian's own vehicle for entering the land -- The Black Gate.");
	say();
	message("\"The Guardian's followers are building The Black Gate of blackrock and will be using magic and natural elements to activate it. The Guardian plans to enter Britannia during the upcoming Astronomical Alignment, which is imminent. That is the only time when the elements will work well enough for The Black Gate to be permeable and active. Thou wilt need a device which has the ability to vanquish blackrock. If thou hast not already encountered such a device, thou canst find something to help thee in the workshop of Rudyom the Mage, in Cove.");
	say();
	message("\"Before thou canst locate The Black Gate, there is one more generator which must be destroyed. It is the device used to transmit The Guardian's voice to his followers and charm them into obeying his wishes. Look in the area near Serpent's Hold for a dungeon containing this generator. It is most likely shaped like a Cube. It could very well be on The Fellowship's island east of Serpent's Hold.");
	say();
	message("\"When thou hast completed this task, concentrate thine efforts in Buccaneer's Den. Thou mayest find clues there as to the location of The Black Gate.");
	say();
	message("\"Shouldst thou wish to speak with me again, simply use the hourglass. Goodbye.\"*");
	say();
	gflags[0x0012] = true;
	Func0911(0x00C8);
	abort;
labelFunc0269_0056:
	if (!(gflags[0x0005] && (!gflags[0x0013]))) goto labelFunc0269_0078;
	message("\"Avatar! The Astronomical Alignment is almost at hand! Time is running out! The Guardian must be prevented from coming through The Black Gate!");
	say();
	message("\"The Cube will help thee find the location of The Black Gate. With it in thy possession, those under the influence of The Guardian will be more receptive to speaking the truth to thee.");
	say();
	message("\"Go to Buccaneer's Den. Search for the one called 'Hook'. Talk to the so-called Fellowship. Thou shouldst have no trouble ascertaining his whereabouts there. I am sure that thou wilt eventually find the location of The Black Gate! Good luck!\"*");
	say();
	gflags[0x0013] = true;
	Func0911(0x00C8);
	abort;
labelFunc0269_0078:
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x01D4])) goto labelFunc0269_00AD;
	message("You see a vaguely familiar but intimidating figure enclosed in some kind of cylindrical cell. He looks at you intently.~~\"It has been many years since we met during the time of Exodus! I have never wanted to see thee again as badly as most recently! It is about time thou shouldst arrive! I do not have eras to waste whilst I wait for thee! There is a crisis and Britannia needs thine help! I need thine help! The entire universe needs thine help!\"");
	say();
	UI_add_answer(["about time", "crisis"]);
	gflags[0x01D4] = true;
	Func0911(0x00C8);
	goto labelFunc0269_00E2;
labelFunc0269_00AD:
	if (!(!gflags[0x01D3])) goto labelFunc0269_00DE;
	message("\"Hast thou decided if thou wilt help me?\"");
	say();
	var0001 = Func090A();
	if (!var0001) goto labelFunc0269_00D6;
	message("The Time Lord looks relieved.");
	say();
	message("\"Then I have a mission for thee.\"");
	say();
	UI_add_answer("mission");
	goto labelFunc0269_00DB;
labelFunc0269_00D6:
	message("\"Then away with thee!\"*");
	say();
	abort;
labelFunc0269_00DB:
	goto labelFunc0269_00E2;
labelFunc0269_00DE:
	message("\"How may I help thee, Avatar?\" the Time Lord asks.");
	say();
labelFunc0269_00E2:
	if (!gflags[0x01D3]) goto labelFunc0269_00EF;
	UI_add_answer("The Guardian");
labelFunc0269_00EF:
	if (!gflags[0x0000]) goto labelFunc0269_0102;
	UI_add_answer(["Tetrahedron", "ethereal defense"]);
labelFunc0269_0102:
	if (!gflags[0x0003]) goto labelFunc0269_0115;
	UI_remove_answer(["Tetrahedron", "ethereal defense"]);
labelFunc0269_0115:
	if (!gflags[0x0001]) goto labelFunc0269_0128;
	UI_add_answer(["Sphere", "Moongate"]);
labelFunc0269_0128:
	if (!gflags[0x0004]) goto labelFunc0269_013B;
	UI_remove_answer(["Sphere", "Moongate"]);
labelFunc0269_013B:
	if (!(gflags[0x0012] && (!gflags[0x0005]))) goto labelFunc0269_014D;
	UI_add_answer("Cube");
labelFunc0269_014D:
	if (!gflags[0x0002]) goto labelFunc0269_0160;
	UI_add_answer(["Cube", "noise"]);
labelFunc0269_0160:
	if (!gflags[0x0005]) goto labelFunc0269_0173;
	UI_remove_answer(["Cube", "noise"]);
labelFunc0269_0173:
	if (!(gflags[0x0211] || var0000)) goto labelFunc0269_0184;
	UI_add_answer("fix magic");
labelFunc0269_0184:
	if (!gflags[0x0003]) goto labelFunc0269_0191;
	UI_remove_answer("fix magic");
labelFunc0269_0191:
	converse attend labelFunc0269_03C7;
	case "name" attend labelFunc0269_01A7:
	message("\"I am known as the Time Lord.\"");
	say();
	UI_remove_answer("name");
labelFunc0269_01A7:
	case "job" attend labelFunc0269_01B3:
	message("\"I ensure that time flows smoothly through space.\" He shrugs his shoulders. \"Do not ask me to explain this. It is beyond mortal beings' comprehension.\"");
	say();
labelFunc0269_01B3:
	case "about time" attend labelFunc0269_01D1:
	message("\"It was I who sent the red moongate to thine homeland to lure thee to Britannia! It took every bit of my strength to make it functional, and still something went wrong. Thou didst arrive in Trinsic, which was not mine intention. It has therefore taken thee much longer to reach me than I anticipated.");
	say();
	message("\"Once thou didst arrive in Britannia, the only other way I could contact thee was via the Wisps. After the considerable rest I had since creating the red moongate, I managed to repair the one Orb of the Moons location that would bring thee to me. I cannot roam freely through time and space, doing my work, whilst I am trapped here.\"");
	say();
	UI_remove_answer("about time");
	UI_add_answer("Wisps");
labelFunc0269_01D1:
	case "crisis" attend labelFunc0269_021E:
	message("\"The land is under attack by a powerful and malicious being from another dimension, and thou art the only one who can stop him! I have been trapped here by a trick, due to a sorcery which The Guardian has performed. The Guardian has put a wrinkle in the space-time continuum by creating a powerful 'generator' which has made the Moongates and thine Orb of the Moons mostly inoperable.");
	say();
	message("\"Thou -must- free me and we must work together in battling The Guardian. The fate of thy people depends upon it. Dost thou accept?\"");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc0269_01FB;
	message("\"Then I have a mission for thee.\"");
	say();
	UI_add_answer("mission");
	goto labelFunc0269_0217;
labelFunc0269_01FB:
	message("\"Then thou shalt be doomed to never finish thy quest. Art thou sure? I give thee one more chance. Dost thou want to help?\"");
	say();
	var0001 = Func090A();
	if (!var0001) goto labelFunc0269_0212;
	message("\"Then I have a mission for thee.\"");
	say();
	goto labelFunc0269_0217;
labelFunc0269_0212:
	message("\"Then farewell, Avatar. Leave now. Thou wilt come back when thou dost realize it is thy destiny to help me.\"*");
	say();
	abort;
labelFunc0269_0217:
	UI_remove_answer("crisis");
labelFunc0269_021E:
	case "mission" attend labelFunc0269_0269:
	message("\"I knew thou wouldst not let me down.~~\"Go at once to the Serpent's Spine area. Search for the entrance to a dungeon somewhere northwest of Britain. I believe it may be called 'Dungeon Despise'. This will lead thee to the generator causing the problem. If mine hunch is correct, it will resemble a large Sphere.");
	say();
	if (!gflags[0x0001]) goto labelFunc0269_0234;
	message("\"Thou may have already seen it.");
	say();
labelFunc0269_0234:
	message("\"Thou must find a way to destroy it.");
	say();
	if (!(!gflags[0x0001])) goto labelFunc0269_024D;
	message("\"It may have a defense mechanism. If thou canst not conquer it, return here and describe the defense to me. Perhaps I can help thee more. It might be wise to use the spells Mark and Recall to save thyself the trouble of finding thy way through the entire dungeon a second time, should thou have to travel there again.\"");
	say();
	UI_add_answer("Sphere");
	goto labelFunc0269_025E;
labelFunc0269_024D:
	message("\"Its defense, as thou dost know, is an unusual Moongate.\"");
	say();
	UI_add_answer(["Sphere", "Moongate"]);
labelFunc0269_025E:
	gflags[0x01D3] = true;
	UI_remove_answer("mission");
labelFunc0269_0269:
	case "Wisps" attend labelFunc0269_027C:
	message("\"Oddly aloof creatures. They have made good messengers in the past.\"");
	say();
	UI_remove_answer("Wisps");
labelFunc0269_027C:
	case "The Guardian" attend labelFunc0269_028F:
	message("\"He is an embodiment of supreme evil. He must be stopped. He thrives on domination and control.\"");
	say();
	UI_remove_answer("The Guardian");
labelFunc0269_028F:
	case "Sphere" attend labelFunc0269_02A2:
	message("\"It is a magic generator that The Guardian was able to send from his world. Its purpose is to disable the Moongates. Thou must break its outer defense and enter the structure, taking the smaller Sphere floating inside. Keep the small Sphere, as it will be useful later.\"");
	say();
	UI_remove_answer("Sphere");
labelFunc0269_02A2:
	case "Moongate" attend labelFunc0269_02C6:
	message("\"The Sphere's outer defense sends thy party back to a specific position in space. Until this defense is broken, thou canst not enter the generator. Thou must find Nicodemus' hourglass.~~\"If I am correct in mine hypothesis, the Sphere's inner defense will involve Moongates. Look for a visual pattern to help thee solve this mystery.\"");
	say();
	gflags[0x01D2] = true;
	UI_remove_answer("Moongate");
	UI_add_answer(["hourglass", "Nicodemus"]);
labelFunc0269_02C6:
	case "hourglass" attend labelFunc0269_02EE:
	if (!(!gflags[0x0004])) goto labelFunc0269_02E3;
	message("\"It is an enchanted hourglass which will help thee if it is used at the site of the Sphere. Once I am free of the power of the generator, thou canst summon me by using the hourglass.\"");
	say();
	UI_remove_answer("hourglass");
	goto labelFunc0269_02EE;
labelFunc0269_02E3:
	message("\"It is of no use to thee now, unless thou dost want to summon me again.\"");
	say();
	UI_remove_answer("hourglass");
labelFunc0269_02EE:
	case "Nicodemus" attend labelFunc0269_0301:
	message("\"He is a mage that lives west of the forest of Yew.\"");
	say();
	UI_remove_answer("Nicodemus");
labelFunc0269_0301:
	case "fix magic" attend labelFunc0269_0329:
	if (!(!gflags[0x0003])) goto labelFunc0269_031E;
	message("The Time Lord thinks a moment.~~\"The ether must be repaired before the mages in Britannia can use magic again. I suggest that thou seest Penumbra in Moonglow. She may be able to help thee with this problem.\"");
	say();
	UI_add_answer("Penumbra");
	goto labelFunc0269_0322;
labelFunc0269_031E:
	message("\"Magic must be functioning properly now, Avatar. Use it wisely.\"");
	say();
labelFunc0269_0322:
	UI_remove_answer("fix magic");
labelFunc0269_0329:
	case "Tetrahedron" attend labelFunc0269_033C:
	message("\"It is a magic generator that The Guardian has sent from his world. It is controlling the ether which is depended upon by the mages to perform magic. Like the Sphere, thou must penetrate its outer defense, enter the structure, and take the smaller Tetrahedron floating inside.\"");
	say();
	UI_remove_answer("Tetrahedron");
labelFunc0269_033C:
	case "ethereal defense" attend labelFunc0269_0353:
	message("\"It is not surprising that the Tetrahedron has such a defense. Penumbra in Moonglow should be able to help thee with that. It is obvious now that the Tetrahedron must be destroyed before thou canst destroy the Sphere.~~\"I am not sure what kind of inner defense the Tetrahedron may hold. It may be dangerous. Be sure to be well-armed when entering it.\"");
	say();
	gflags[0x0007] = true;
	UI_remove_answer("ethereal defense");
labelFunc0269_0353:
	case "Penumbra" attend labelFunc0269_0366:
	message("\"She is an elderly mage who lives in Moonglow.\"");
	say();
	UI_remove_answer("Penumbra");
labelFunc0269_0366:
	case "Cube" attend labelFunc0269_0399:
	if (!(!(gflags[0x0004] || gflags[0x0003]))) goto labelFunc0269_0380;
	message("\"It is a magic generator which The Guardian has sent from his world. From what thou dost say, it sounds to me like the device he uses to 'speak' to his followers and charm them into submitting to his wishes. I am afraid that before thou canst destroy it, thou must take care of the other magic generators which The Guardian has placed in Britannia.\"");
	say();
	goto labelFunc0269_0384;
labelFunc0269_0380:
	message("\"It is the third and final magic generator which The Guardian has sent from his world. It is the device he uses to 'speak' to his followers and charm them into submitting to his wishes. Tis in a dungeon near Serpents Hold. Thou must destroy its outer defense, enter it, and take the smaller Cube floating inside.\"");
	say();
labelFunc0269_0384:
	UI_remove_answer("Cube");
	if (!(!gflags[0x0002])) goto labelFunc0269_0399;
	UI_add_answer("Cube defense");
labelFunc0269_0399:
	case "Cube defense", "noise" attend labelFunc0269_03B9:
	message("\"This outer defense can be conquered by using special helmets which cover your ears. The helmets must be made from a rare mineral called 'Caddellite'. It is present in meteors. Seek out Brion, at the Observatory near the Lycaeum. He can give thee more advice on finding this mineral.~~\"The inner defense will most likely involve The Guardian himself. Do not listen to what he might tell thee.\"");
	say();
	gflags[0x0008] = true;
	UI_remove_answer(["Cube defense", "noise"]);
labelFunc0269_03B9:
	case "bye" attend labelFunc0269_03C4:
	goto labelFunc0269_03C7;
labelFunc0269_03C4:
	goto labelFunc0269_0191;
labelFunc0269_03C7:
	endconv;
	message("\"Farewell, Avatar. Good luck to thee.\"*");
	say();
	return;
}


