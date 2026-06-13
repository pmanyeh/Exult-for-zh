#game "serpentisle"
// externs
extern var Func0953 0x953 ();
extern var Func08AC 0x8AC (var var0000);

void Func00F9 shape#(0xF9) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	var0000 = Func0953();
	var0001 = Func08AC(false);
	var0002 = "his";
	if (!UI_is_pc_female()) goto labelFunc00F9_0020;
	var0002 = "her";
labelFunc00F9_0020:
	var0003 = false;
	if (!(event == 0x0002)) goto labelFunc00F9_01D6;
	UI_show_npc_face0(0xFEFB, 0x0000);
	message("\"What dost thou wish, Master?\"");
	say();
	if (!gflags[0x0171]) goto labelFunc00F9_004D;
	UI_add_answer(["revelation", "change revelation"]);
labelFunc00F9_004D:
	if (!(gflags[0x0172] && ((!gflags[0x0004]) && (!gflags[0x0171])))) goto labelFunc00F9_008C;
	if (!((!gflags[0x016E]) && (!gflags[0x016F]))) goto labelFunc00F9_0072;
	message("\"Forgive me for denouncing thee, stranger. I was under compulsion from the Great Captains, and had no choice.\"");
	say();
	message("\"Now that Alyssand and Jorvin have unmasked the true villains, I can once again speak the Truth. Go in peace, stranger. I wish thee well in thy quest.\"");
	say();
	abort;
labelFunc00F9_0072:
	if (!gflags[0x016E]) goto labelFunc00F9_007D;
	message("\"Thy friend hath been spared, stranger. Go thy way... I must attend to the wishes of my masters.\"");
	say();
	abort;
labelFunc00F9_007D:
	if (!gflags[0x016F]) goto labelFunc00F9_008C;
	message("\"I thank thee for freeing me from the yoke of the Great Captains, stranger. Thy friend is safe and I may once again speak the Truth.\"");
	say();
	message("\"Go in peace, stranger. I wish thee well on thy quest.\"");
	say();
	abort;
labelFunc00F9_008C:
	if (!gflags[0x0004]) goto labelFunc00F9_009F;
	message("\"It saddens me to speak the Truth to thee, stranger.\"");
	say();
	message("\"Thy former companion, Iolo, hath fallen prey to the imbalance that plagues this land. He hath ripped Beauty from the soul of Fawn and driven it into the wilds.\"");
	say();
	message("\"Seek out the one whose Beauty lies deep within. He will set thee upon the path to the lost soul of Fawn.\"");
	say();
	abort;
labelFunc00F9_009F:
	UI_add_answer("bye");
labelFunc00F9_00A6:
	converse attend labelFunc00F9_01D5;
	case "revelation" attend labelFunc00F9_0117:
	if (!(!var0003)) goto labelFunc00F9_00C0;
	message("\"There will be a Grand Trial soon. At the end of the proceedings, I shall proclaim the verdict.\"");
	say();
	var0003 = true;
labelFunc00F9_00C0:
	message("\"I have been told to say the following...\"");
	say();
	if (!gflags[0x016E]) goto labelFunc00F9_00E4;
	message("\"");
	message(var0001);
	message(" is innocent! ");
	message(var0000);
	message(" and ");
	message(var0002);
	message(" companions have no wish to destroy Beauty!\"");
	say();
	message("\"Free them at once!\"");
	say();
labelFunc00F9_00E4:
	if (!gflags[0x016F]) goto labelFunc00F9_00F8;
	message("\"");
	message(var0001);
	message(" is innocent! Set him and his companions free!\"");
	say();
	message("\"The true criminals are Priestess Kylista and Great Captain Voldin, who have conspired to convict this innocent man!\"");
	say();
labelFunc00F9_00F8:
	if (!(!(gflags[0x016E] || gflags[0x016F]))) goto labelFunc00F9_0117;
	message("\"");
	message(var0001);
	message(" is guilty of associating with Daemons to destroy our Beauty! The fiend, ");
	message(var0000);
	message(", is also guilty!\"");
	say();
	message("\"Such offense to Beauty cannot go unpunished... The stain of their presence must be washed away with their blood.\"");
	say();
labelFunc00F9_0117:
	case "change revelation" attend labelFunc00F9_0137:
	message("\"I shall proclaim whatever thou dost instruct me to proclaim. What dost thou wish me to say regarding the accused traitor, Master?\"");
	say();
	UI_push_answers();
	UI_add_answer(["He is innocent.", "The trial is corrupted.", "Make no change."]);
labelFunc00F9_0137:
	case "Make no change." attend labelFunc00F9_014F:
	message("\"I shall do as thou hast instructed.\"");
	say();
	gflags[0x016E] = false;
	gflags[0x016F] = false;
	UI_pop_answers();
labelFunc00F9_014F:
	case "He is innocent." attend labelFunc00F9_016D:
	message("\"I will say that ");
	message(var0001);
	message(" is innocent.\"");
	say();
	gflags[0x016E] = true;
	gflags[0x016F] = false;
	UI_pop_answers();
labelFunc00F9_016D:
	case "The trial is corrupted." attend labelFunc00F9_0190:
	message("\"I will say that the trial is corrupted, and I shall denounce the true traitors.\"");
	say();
	message("\"I have waited many years for this moment. I thank thee, Master!\"");
	say();
	gflags[0x016F] = true;
	gflags[0x016E] = false;
	UI_pop_answers();
	UI_add_answer("many years");
labelFunc00F9_0190:
	case "many years" attend labelFunc00F9_01A7:
	UI_remove_answer("many years");
	message("\"I have been the prisoner of the Great Captains for many generations, stranger.\"");
	say();
	message("\"I do not know who thou art, but I am glad thou hast come! At last, I can speak the Truth.\"");
	say();
labelFunc00F9_01A7:
	case "nothing" attend labelFunc00F9_01B7:
	message("\"As thou wishest. I shall proclaim the verdict which I was previously instructed to give.\"");
	say();
	UI_pop_answers();
labelFunc00F9_01B7:
	case "bye" attend labelFunc00F9_01D2:
	var0004 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x52, "@'Tis my duty.@"]);
	abort;
labelFunc00F9_01D2:
	goto labelFunc00F9_00A6;
labelFunc00F9_01D5:
	endconv;
labelFunc00F9_01D6:
	return;
}


