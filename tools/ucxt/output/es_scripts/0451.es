#game "blackgate"
// externs
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func0909 0x909 ();
extern void Func087B 0x87B ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();
extern void Func0911 0x911 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func0451 object#(0x451) ()
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

	if (!(event == 0x0001)) goto labelFunc0451_048E;
	UI_show_npc_face(0xFFAF, 0x0000);
	var0000 = UI_wearing_fellowship();
	var0001 = Func0931(0xFE9B, 0x0001, 0x03D5, 0xFE99, 0x0001);
	var0002 = Func0909();
	var0003 = UI_part_of_day();
	var0004 = UI_get_schedule_type(UI_get_npc_object(0xFFAF));
	if (!(var0003 == 0x0007)) goto labelFunc0451_0064;
	if (!(var0004 == 0x001C)) goto labelFunc0451_0064;
	message("\"It is time for the ceremony to begin.\" says Elynor.");
	say();
	Func087B();
labelFunc0451_0064:
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x0087]) goto labelFunc0451_0081;
	UI_add_answer("Elizabeth and Abraham");
labelFunc0451_0081:
	var0005 = Func08F7(0xFFAE);
	if (!var0005) goto labelFunc0451_00A1;
	if (!(var0004 == 0x0010)) goto labelFunc0451_00A1;
	UI_add_answer("Gregor");
labelFunc0451_00A1:
	if (!gflags[0x0125]) goto labelFunc0451_00AE;
	UI_add_answer("candelabra");
labelFunc0451_00AE:
	if (!(!gflags[0x010C])) goto labelFunc0451_00C0;
	message("You see a woman whose cultured manner is tinged with a suggestion of arrogance.");
	say();
	gflags[0x010C] = true;
	goto labelFunc0451_00CA;
labelFunc0451_00C0:
	message("\"Art thou speaking to me, ");
	message(var0002);
	message("?\" Elynor asks.");
	say();
labelFunc0451_00CA:
	converse attend labelFunc0451_0489;
	case "name" attend labelFunc0451_00E0:
	message("She straightens her shoulders and looks you in the eye.~~\"I am Elynor.\"");
	say();
	UI_remove_answer("name");
labelFunc0451_00E0:
	case "job" attend labelFunc0451_0161:
	if (!gflags[0x011F]) goto labelFunc0451_0152;
	message("\"I am the head counselor of the Fellowship branch here in Minoc. We are a society of spiritual seekers, dedicated to achieving our highest potential, advancing worthiness, unity and trust in our brothers.");
	say();
	if (!(!gflags[0x0096])) goto labelFunc0451_0111;
	message("\"Perhaps thou wouldst wish to join our Fellowship?\"");
	say();
	if (!Func090A()) goto labelFunc0451_010A;
	message("\"This is indeed a great day for The Fellowship! Seek out Batlin in Britain.\tHe is our founder. Such a great honor as the acceptance of the Avatar into The Fellowship should properly\tbe reserved for him alone.\"");
	say();
	goto labelFunc0451_010E;
labelFunc0451_010A:
	message("\"I can see by the look in thine eyes that thou dost lack the courage to take this vital step in thy life. Perhaps one day soon thou shalt be ready.\"~~She looks down her nose at you. \"We shall see...\"");
	say();
labelFunc0451_010E:
	goto labelFunc0451_0115;
labelFunc0451_0111:
	message("\"Ah-- but thou dost know all of this.\"");
	say();
labelFunc0451_0115:
	if (!(gflags[0x008F] && (!(gflags[0x0109] || (gflags[0x0102] || gflags[0x011E]))))) goto labelFunc0451_0133;
	message("\"I now recall a message Batlin sent to me. I have been expecting thee. Thou has been sent to deliver our package. Thou mayest relinquish it now.\"");
	say();
	UI_add_answer("deliver");
labelFunc0451_0133:
	if (!(var0000 && (!gflags[0x0006]))) goto labelFunc0451_0142;
	message("Elynor notices your medallion. \"I do not think thou shouldst be wearing the medallion yet. Thou hast not been properly inducted into The Fellowship! I am afraid I must inform Batlin of thy falsehood!\"");
	say();
labelFunc0451_0142:
	UI_add_answer(["Minoc", "Fellowship"]);
	goto labelFunc0451_0161;
labelFunc0451_0152:
	message("\"Thou hast picked a most inappropriate time to engage in such casual conversation. Perhaps thou wouldst be interested knowing that there have been two murders discovered in this sawmill!\"");
	say();
	gflags[0x011F] = true;
	UI_add_answer("murders");
labelFunc0451_0161:
	case "Minoc" attend labelFunc0451_0199:
	if (!(!gflags[0x00F7])) goto labelFunc0451_0187;
	message("\"We should strive to put this business of the murders behind us. Minoc will soon be known throughout Britannia as a city where majestic ships are built. There\tis even going to be a statue erected in the center of town honoring our shipwright, Owen. He is a skilled and valued member of our community and, of course, a Fellowship member.\"");
	say();
	UI_add_answer(["murders", "Owen", "Fellowship"]);
	goto labelFunc0451_0192;
labelFunc0451_0187:
	message("\"Ours is not a great city, such as Britain, but it is widely known as a center of commerce and for its mine. The slight embarrassment of the legacy of Owen will fade in time.\"");
	say();
	UI_add_answer("Owen");
labelFunc0451_0192:
	UI_remove_answer("Minoc");
labelFunc0451_0199:
	case "murders" attend labelFunc0451_01D3:
	message("\"I am saddened at the loss of life but cannot say I am surprised. Frederico and Tania were antagonistic people. The same may be said of most gypsies. I have nothing against them personally, of course.\"");
	say();
	UI_add_answer(["antagonistic", "gypsies"]);
	UI_remove_answer("murders");
	if (!gflags[0x0040]) goto labelFunc0451_01C6;
	UI_add_answer("Crown Jewel");
labelFunc0451_01C6:
	if (!gflags[0x0043]) goto labelFunc0451_01D3;
	UI_add_answer("Hook");
labelFunc0451_01D3:
	case "deliver" attend labelFunc0451_0379:
	var0006 = false;
	var0007 = UI_find_object(0xFE9B, 0x031E, 0x0001, 0xFE99);
	var0008 = UI_find_object(0xFE9B, 0x031F, 0x0001, 0xFE99);
	var0009 = 0x0000;
	if (!var0008) goto labelFunc0451_0227;
	var0009 = UI_find_object(var0008, 0x031D, 0x0008, 0xFE99);
	goto labelFunc0451_0240;
labelFunc0451_0227:
	if (!var0007) goto labelFunc0451_0240;
	var0009 = UI_find_object(var0007, 0x031D, 0x0008, 0xFE99);
labelFunc0451_0240:
	if (!var0009) goto labelFunc0451_024A;
	var0006 = true;
labelFunc0451_024A:
	if (!(var0007 || var0008)) goto labelFunc0451_036E;
	message("You produce the package and hold it before Elynor. Her eyes shift from you to the package and then back to you.~~\"Surely thou hast been instructed not to open\tthe package. Hast thou opened it nonetheless?\"");
	say();
	if (!Func090A()) goto labelFunc0451_02E8;
	message("\"Thou knowest well that thou wert instructed to deliver the package unopened. As a Fellowship member, thou dost understand that we must be worthy of the rewards we seek. As thou hast violated Batlin's trust, any payment is forfeited. He will be informed of this indiscretion, and he will not be pleased.\"~~She takes the box from your\thands.");
	say();
	if (!var0007) goto labelFunc0451_02AC;
	message("\"Nonsense. The package is still perfectly sealed.\" She stares at you suspiciously.~~ \"I know not why thou didst choose to claim that it was opened, but thou must learn better to trust thy brother. As the box is still intact, thou wilt receive thy reward, but thine actions will be reported. Be careful, my brother.\"");
	say();
	var000A = UI_add_party_items(0x0032, 0x0284, 0xFE99, 0xFE99, true);
	if (!var000A) goto labelFunc0451_02A5;
	message("She hands you 50 gold coins.");
	say();
	gflags[0x0109] = true;
	Func0911(0x01F4);
	UI_remove_item(var0009);
	UI_remove_item(var0007);
	goto labelFunc0451_02A9;
labelFunc0451_02A5:
	message("\"Thou cannot carry thy reward! My, thy travels have indeed been successful. Well, then, thou must endure a further test. Return the sealed box to me when thou canst tote the extra gold, and thou wilt be paid what thou dost deserve.\"");
	say();
labelFunc0451_02A9:
	goto labelFunc0451_02E5;
labelFunc0451_02AC:
	if (!var0006) goto labelFunc0451_02CA;
	message("She inspects the inside of the box.~~ \"Ah, good. The contents, at least, are still intact. The guilty one was only a victim of his own curiosity, and not truly a thief.\"~~She looks you up and down. \"It is quite possible that thou wilt still learn to be a worthy member of our illustrious Membership. We shall see.\"");
	say();
	UI_remove_item(var0009);
	gflags[0x0102] = true;
	Func0911(0x01F4);
	goto labelFunc0451_02DE;
labelFunc0451_02CA:
	message("She inspects the inside of the box.~~ \"I see that the contents of the box are missing. Either thou art a thief, or, at the least, not very diligent in thy duty as a messenger. One way or the other, ");
	message(var0002);
	message(", the box hath been robbed!\"~~She looks you up and down. \"Batlin will be informed of this... development.\"");
	say();
	gflags[0x011E] = true;
	Func0911(0x01F4);
labelFunc0451_02DE:
	UI_remove_item(var0008);
labelFunc0451_02E5:
	goto labelFunc0451_036B;
labelFunc0451_02E8:
	if (!var0007) goto labelFunc0451_032E;
	var000A = UI_add_party_items(0x0032, 0x0284, 0xFE99, 0xFE99, true);
	if (!var000A) goto labelFunc0451_0327;
	message("Elynor takes the package from your hands.~~\"Thou hast done very well. Now as promised, here is thy payment.\"");
	say();
	gflags[0x0109] = true;
	Func0911(0x01F4);
	UI_remove_item(var0009);
	UI_remove_item(var0007);
	goto labelFunc0451_032B;
labelFunc0451_0327:
	message("\"Thou cannot carry thy reward! My, thy travels have indeed been successful. Well, then, thou must endure a further test. Return the sealed box to me when thou canst tote the extra gold, and thou wilt be paid what thou dost deserve.\"");
	say();
labelFunc0451_032B:
	goto labelFunc0451_036B;
labelFunc0451_032E:
	message("Elynor takes the package from you. Examining it, she immediately notices that it has been opened.~~\"^");
	message(var0002);
	message("! The box is open! Certainly, one as diligent as thee could not have been robbed?\"");
	say();
	if (!var0006) goto labelFunc0451_0356;
	message("She inspects the inside of the box.~~ \"Ah, good. The contents, at least, are still intact. The guilty one was only a victim of his own curiosity, and not truly a thief.\"~~She looks you up and down. \"It is quite possible that thou wilt still learn to be a worthy member of our illustrious Membership. We shall see.\"~~She sniffs. \"This will, of course,\tbe reported to Batlin.\"");
	say();
	UI_remove_item(var0009);
	gflags[0x0102] = true;
	Func0911(0x01F4);
	goto labelFunc0451_0364;
labelFunc0451_0356:
	message("Peering inside, she is beset by a fit of anger. \"It would appear thou hast been robbed. Obviously, as thou hast failed in the responsibility entrusted to thee by Batlin, thou shalt not receive any payment.\"~~\"Batlin will be informed of this indiscretion.\"");
	say();
	gflags[0x011E] = true;
	Func0911(0x01F4);
labelFunc0451_0364:
	UI_remove_item(var0008);
labelFunc0451_036B:
	goto labelFunc0451_0372;
labelFunc0451_036E:
	message("\"Dost thou not have it with thee at this time? Thou wilt not be paid until thou dost deliver it unto mine own hand. I do hope thou hast secreted it in a safe place.\"");
	say();
labelFunc0451_0372:
	UI_remove_answer("deliver");
labelFunc0451_0379:
	case "Owen" attend labelFunc0451_039A:
	if (!(!gflags[0x00F7])) goto labelFunc0451_038F;
	message("\"He is a classic example of The Fellowship making a vast difference in a person's life. Before he joined The Fellowship, he was without confidence and ready to put aside his trade. Now he stands on the verge of being recognized as the finest at his craft in the world.\"");
	say();
	goto labelFunc0451_0393;
labelFunc0451_038F:
	message("Elynor rolls her eyes. \"Oh, please!\" she says, sounding exasperated. \"I do not concern myself with ones such as him these days.\"");
	say();
labelFunc0451_0393:
	UI_remove_answer("Owen");
labelFunc0451_039A:
	case "antagonistic" attend labelFunc0451_03AD:
	message("\"Frederico and Tania treated all members of our Fellowship as if we were diseased. Frederico particularly would often bully our members. Thou dost know, it is common knowledge that we are pacifists. He had a reputation for cruelty, even among his own people. It is not surprising he came to a violent end.\"");
	say();
	UI_remove_answer("antagonistic");
labelFunc0451_03AD:
	case "Fellowship" attend labelFunc0451_03C0:
	message("\"The Fellowship is highly regarded in Minoc. Why, even the Mayor himself is a member. I brought him into The Fellowship myself. He was the first new member of our local branch. Gregor, the head of The Fellowship here, directs the Britannian Mining Company. Many Fellowship members pass through Minoc.\"");
	say();
	UI_remove_answer("Fellowship");
labelFunc0451_03C0:
	case "Elizabeth and Abraham" attend labelFunc0451_03E5:
	if (!(!gflags[0x0217])) goto labelFunc0451_03DA;
	message("\"Thou hast just missed them! They were here collecting funds. They have moved on to Paws to visit our Shelter there.\"");
	say();
	gflags[0x0105] = true;
	goto labelFunc0451_03DE;
labelFunc0451_03DA:
	message("\"I have not seen Elizabeth or Abraham since they were here last.\"");
	say();
labelFunc0451_03DE:
	UI_remove_answer("Elizabeth and Abraham");
labelFunc0451_03E5:
	case "Hook" attend labelFunc0451_0405:
	if (!var0001) goto labelFunc0451_03FA;
	message("The Cube vibrates. \"Hook lives somewhere on Buccaneer's Den. I do not know where.\"");
	say();
	goto labelFunc0451_03FE;
labelFunc0451_03FA:
	message("\"A man with a Hook? I am certain I would remember having seen anyone like that, and I am positive that does not match the description of any Fellowship member this branch has ever come in contact with.\"");
	say();
labelFunc0451_03FE:
	UI_remove_answer("Hook");
labelFunc0451_0405:
	case "Crown Jewel" attend labelFunc0451_0425:
	if (!var0001) goto labelFunc0451_041A;
	message("The Cube vibrates. \"That is Hook's ship. I have not seen it in some time.\"");
	say();
	goto labelFunc0451_041E;
labelFunc0451_041A:
	message("\"Many ships come and go in our busy port. I do not know of any one specific ship. Perhaps thou shouldst ask Owen.\"");
	say();
labelFunc0451_041E:
	UI_remove_answer("Crown Jewel");
labelFunc0451_0425:
	case "Gregor" attend labelFunc0451_0438:
	message("\"Thou dost dare to spy upon Gregor and I as we share our moments together?! Dost thou have no decency?! Gregor and I have a right to privacy the same as do any lovers!\"");
	say();
	UI_remove_answer("Gregor");
labelFunc0451_0438:
	case "candelabra" attend labelFunc0451_0468:
	if (!var0001) goto labelFunc0451_044D;
	message("The Cube vibrates. \"The candelabra was left at the murder site by mistake. Hook and Forskis are getting careless.\"");
	say();
	goto labelFunc0451_0461;
labelFunc0451_044D:
	message("\"Yes, The Fellowship commissioned Xanthia to create a candelabra which thou dost describe. Its design incorporates our three tenets: 'U' for Unity, 'T' for Trust, and 'W' for Worthiness.\"");
	say();
	message("You tell Elynor that it was found at the murder site. Elynor registers surprise.");
	say();
	message("\"I cannot imagine why it was there. Someone must be trying to implicate The Fellowship!\"");
	say();
	message("She thinks a moment.");
	say();
	message("\"If thou didst ask it of me, I would wager that Frederico and Tania were murdered by their own people, and another gypsy placed the candelabra at the site to implicate us. Those gypsies would kill their own mother if it meant gaining a bit of gold!\"");
	say();
labelFunc0451_0461:
	UI_remove_answer("candelabra");
labelFunc0451_0468:
	case "gypsies" attend labelFunc0451_047B:
	message("\"They have set up camp southeast of town. Near the sawmill. That is suspicious, dost thou not think?\"");
	say();
	UI_remove_answer("gypsies");
labelFunc0451_047B:
	case "bye" attend labelFunc0451_0486:
	goto labelFunc0451_0489;
labelFunc0451_0486:
	goto labelFunc0451_00CA;
labelFunc0451_0489:
	endconv;
	message("\"I have a feeling that we shall see each other again.\"*");
	say();
labelFunc0451_048E:
	if (!(event == 0x0000)) goto labelFunc0451_049C;
	Func092E(0xFFAF);
labelFunc0451_049C:
	return;
}


