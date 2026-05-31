#game "blackgate"
// externs
extern var Func08FC 0x8FC (var var0000, var var0001);
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func045B object#(0x45B) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc045B_02B3;
	UI_show_npc_face(0xFFA5, 0x0000);
	var0000 = UI_get_schedule_type(UI_get_npc_object(0xFFA5));
	var0001 = UI_part_of_day();
	if (!(var0001 == 0x0007)) goto labelFunc045B_005E;
	if (!(!(var0000 == 0x0010))) goto labelFunc045B_003F;
	goto labelFunc045B_005E;
labelFunc045B_003F:
	var0002 = Func08FC(0xFFA5, 0xFFAF);
	if (!var0002) goto labelFunc045B_0059;
	message("The Fellowship meeting is in progress, and Burnside will not speak with you now.*");
	say();
	abort;
	goto labelFunc045B_005E;
labelFunc045B_0059:
	message("\"I cannot speak now! I am late for the Fellowship meeting!\"*");
	say();
	abort;
labelFunc045B_005E:
	var0003 = Func0909();
	var0004 = UI_wearing_fellowship();
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x00FD]) goto labelFunc045B_0088;
	UI_add_answer("plans");
labelFunc045B_0088:
	if (!(!gflags[0x0116])) goto labelFunc045B_00A2;
	message("You see an elderly man struggling to maintain a regal posture.");
	say();
	message("His eyes widen at the sight of you.");
	say();
	message("\"I had heard thou were travelling in Britannia again, but it took mine own eyes to believe it! Welcome, Avatar!\"");
	say();
	gflags[0x0116] = true;
	goto labelFunc045B_00A6;
labelFunc045B_00A2:
	message("\"Ahh, Avatar. Good to see thee again.\" says Burnside.");
	say();
labelFunc045B_00A6:
	converse attend labelFunc045B_02AE;
	case "name" attend labelFunc045B_00BC:
	message("\"Burnside is my name.\"");
	say();
	UI_remove_answer("name");
labelFunc045B_00BC:
	case "job" attend labelFunc045B_00ED:
	if (!gflags[0x011F]) goto labelFunc045B_00D8;
	message("\"I am Mayor of Minoc and have been lo these past twenty years and more.\"");
	say();
	UI_add_answer("Minoc");
	goto labelFunc045B_00ED;
labelFunc045B_00D8:
	message("\"I beseech thee, ");
	message(var0003);
	message(", do show some respect for the two poor souls who have been found murdered there in William's sawmill.\"");
	say();
	gflags[0x011F] = true;
	UI_add_answer("murders");
labelFunc045B_00ED:
	case "Minoc" attend labelFunc045B_010D:
	message("\"Apart from this business of the murders we are a town run by commerce. Gold runs this town. As goes the money, so goes Minoc. Take this monument affair, for instance.\"");
	say();
	UI_remove_answer("Minoc");
	UI_add_answer(["murders", "monument"]);
labelFunc045B_010D:
	case "murders" attend labelFunc045B_0120:
	message("\"As Frederico and Tania were not actually residents of Minoc there is little I can do as Mayor other than increase the town guard. The investigation falls somewhat beyond my jurisdiction. It would appear the killer or killers were from out of town and are probably long gone by now. Thank goodness.\"");
	say();
	UI_remove_answer("murders");
labelFunc045B_0120:
	case "monument" attend labelFunc045B_014E:
	if (!(!gflags[0x00F7])) goto labelFunc045B_0143;
	message("\"I am sure thou art aware of the plans for a monument of Owen, the shipwright. He is paying for it himself. I am usually against such public vanity but The Fellowship is very much in favor of it.\"");
	say();
	UI_add_answer(["vanity", "Fellowship"]);
	goto labelFunc045B_0147;
labelFunc045B_0143:
	message("\"This town would have been ruined if I had allowed that monument to be built, so I immediately forbade it, of course.\"");
	say();
labelFunc045B_0147:
	UI_remove_answer("monument");
labelFunc045B_014E:
	case "vanity" attend labelFunc045B_0168:
	message("\"But in this special case it does immeasurable good for the town. It increases our prestige. People will come from all over Britannia for the unveiling.\"");
	say();
	UI_remove_answer("vanity");
	UI_add_answer("unveiling");
labelFunc045B_0168:
	case "unveiling" attend labelFunc045B_017B:
	message("\"Why, even Lord British himself will be in attendance! It is a special opportunity when one gets a private audience.\"");
	say();
	UI_remove_answer("unveiling");
labelFunc045B_017B:
	case "Fellowship" attend labelFunc045B_01A2:
	if (!var0004) goto labelFunc045B_0190;
	message("\"Ah, I see thou art wearing thy Fellowship medallion. I received mine from Elynor when The Fellowship branch was first opened here a few years ago.\"");
	say();
	goto labelFunc045B_0194;
labelFunc045B_0190:
	message("\"Yes, I wear the Fellowship medallion, given to me by Elynor. Do not worry thyself. I shall not try to make thee join!\" He laughs nervously at his own little joke.");
	say();
labelFunc045B_0194:
	UI_remove_answer("Fellowship");
	UI_add_answer("Elynor");
labelFunc045B_01A2:
	case "Elynor" attend labelFunc045B_01D7:
	if (!var0004) goto labelFunc045B_01C5;
	message("\"Elynor tells me The Fellowship will be doing good works here in the future. I am proud to be a member of thy society although I must confess to being fairly ignorant concerning thy, umm, our philosophy.\"");
	say();
	UI_add_answer("member");
	UI_remove_answer("Elynor");
	goto labelFunc045B_01D7;
labelFunc045B_01C5:
	message("\"Elynor says The Fellowship could bring much money into Minoc. It would be wonderful for trade. I could never let my personal feelings get in the way of the good of this town.\"");
	say();
	UI_add_answer("feelings");
	UI_remove_answer("Elynor");
labelFunc045B_01D7:
	case "member" attend labelFunc045B_0208:
	message("\"I was given an honorary membership when the Fellowship branch was first opened in Minoc. I do not attend regular meetings. I hope thou'rt not disappointed in me?\"");
	say();
	var0005 = Func090A();
	if (!var0005) goto labelFunc045B_01F6;
	message("\"I am sorry, Avatar. I will try to do well and be a more valuable member of the Fellowship. I beg thee, do not speak of this to Elynor.\"");
	say();
	goto labelFunc045B_0201;
labelFunc045B_01F6:
	message("\"Thank heaven! I wear this medallion mainly for ceremonial purposes, as I suspect thou dost. We both see that support of The Fellowship is currently the wisest course of action politically, no matter our personal feelings.\"");
	say();
	UI_add_answer("feelings");
labelFunc045B_0201:
	UI_remove_answer("member");
labelFunc045B_0208:
	case "feelings" attend labelFunc045B_0232:
	message("\"Avatar, may I tell thee a secret?\"");
	say();
	var0005 = Func090A();
	if (!var0005) goto labelFunc045B_0227;
	message("\"Avatar, I must confess to thee that I feel The Fellowship promotes a philosophy that is dubious at best, and its membership seems to be comprised chiefly of fools and emotional weaklings.\"");
	say();
	goto labelFunc045B_022B;
labelFunc045B_0227:
	message("\"Hrmph! Well, then, kindly forget mine ill-considered words!\"");
	say();
labelFunc045B_022B:
	UI_remove_answer("feelings");
labelFunc045B_0232:
	case "plans" attend labelFunc045B_0252:
	message("You show the Mayor the plans Owen had drawn, making sure to carefully point out the flaws discovered by Julia. The Mayor is aghast.~~\"This is terrible! No one must see this! It would ruin Owen and cause irreparable damage to our town if it became known that our shipwright caused those deaths!\"");
	say();
	UI_remove_answer("plans");
	UI_add_answer(["damage", "deaths"]);
labelFunc045B_0252:
	case "damage" attend labelFunc045B_0265:
	message("\"But very few suspect the deaths are attributable to Owen's shipbuilding! We can destroy the plans and the truth would never get out! It would save the town from disgrace and possible ruin!\"");
	say();
	UI_remove_answer("damage");
labelFunc045B_0265:
	case "deaths" attend labelFunc045B_0285:
	message("\"Then again, the ships Owen builds will continue to sink. It would harm Minoc even more if it were to become known as the place where the \"death ships\" are made. A town that built a monument to an incompetent.\"");
	say();
	UI_remove_answer(["deaths", "damage"]);
	UI_add_answer("statue");
labelFunc045B_0285:
	case "statue" attend labelFunc045B_02A0:
	message("\"There are no two ways about it. The statue must be stopped. I am hereby cancelling the erection of the statue.\"");
	say();
	message("\"Oh, and...er, Avatar... couldst thou please go inform Owen of this bad news for me? I am a bit busy at the moment. Besides, I think he will take it much better hearing it from thee.\"");
	say();
	gflags[0x00F7] = true;
	UI_remove_answer("statue");
labelFunc045B_02A0:
	case "bye" attend labelFunc045B_02AB:
	goto labelFunc045B_02AE;
labelFunc045B_02AB:
	goto labelFunc045B_00A6;
labelFunc045B_02AE:
	endconv;
	message("\"A pleasure, friend Avatar. A pleasure.\"*");
	say();
labelFunc045B_02B3:
	if (!(event == 0x0000)) goto labelFunc045B_02C1;
	Func092E(0xFFA5);
labelFunc045B_02C1:
	return;
}


