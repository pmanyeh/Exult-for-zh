#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090B 0x90B (var var0000);
extern var Func090A 0x90A ();
extern var Func0886 0x886 ();
extern void Func0911 0x911 (var var0000);

void Func0884 0x884 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	var0000 = Func0909();
	UI_clear_answers();
	if (!(!gflags[0x005E])) goto labelFunc0884_0040;
	message("\"Very well. What was Christopher's occupation?\"");
	say();
	var0001 = Func090B(["tailor", "blacksmith", "provisioner", "barkeep"]);
	if (!(var0001 == "blacksmith")) goto labelFunc0884_003B;
	gflags[0x005E] = true;
	goto labelFunc0884_0040;
labelFunc0884_003B:
	message("\"That is not right. Thou shouldst do some more work.\"*");
	say();
	abort;
labelFunc0884_0040:
	if (!(!gflags[0x005F])) goto labelFunc0884_009F;
	UI_clear_answers();
	message("\"What didst thou find at the murder site?\"");
	say();
	var0001 = Func090B(["nothing", "a body", "a key", "a bucket"]);
	if (!(var0001 == "a key")) goto labelFunc0884_0072;
	gflags[0x005F] = true;
labelFunc0884_0072:
	if (!(var0001 == "a body")) goto labelFunc0884_0081;
	message("\"I know that! What ELSE didst thou find? Thou shouldst look again, Avatar!\"*");
	say();
	abort;
labelFunc0884_0081:
	if (!(var0001 == "a bucket")) goto labelFunc0884_0090;
	message("\"Yes, obviously it is filled with poor Christopher's own blood. But surely there was something else that might point us in the direction of the killer or killers - thou shouldst look again, Avatar.\"*");
	say();
	abort;
labelFunc0884_0090:
	if (!(var0001 == "nothing")) goto labelFunc0884_009F;
	message("\"Thou shouldst look again, 'Avatar'!\"*");
	say();
	abort;
labelFunc0884_009F:
	if (!(!gflags[0x0060])) goto labelFunc0884_00D9;
	UI_clear_answers();
	message("\"What did the key open?\"");
	say();
	var0001 = Func090B(["a book", "a door", "a trap door", "a chest"]);
	if (!(var0001 == "a chest")) goto labelFunc0884_00D4;
	gflags[0x0060] = true;
	goto labelFunc0884_00D9;
labelFunc0884_00D4:
	message("\"I do not think that is correct.\"*");
	say();
	abort;
labelFunc0884_00D9:
	if (!(!gflags[0x0061])) goto labelFunc0884_0152;
	UI_clear_answers();
	message("\"What didst thou find in the chest?\"");
	say();
	var0001 = Func090B(["gold", "a medallion", "a scroll", "none of these", "all of these"]);
	if (!(var0001 == "all of these")) goto labelFunc0884_0124;
	UI_clear_answers();
	message("\"Dost thou have a suspect?\"");
	say();
	if (!Func090A()) goto labelFunc0884_011F;
	gflags[0x0061] = true;
	goto labelFunc0884_0124;
labelFunc0884_011F:
	message("\"Well, continue to gather information until thou dost have one.\"*");
	say();
	abort;
labelFunc0884_0124:
	if (!((var0001 == "gold") || ((var0001 == "a medallion") || (var0001 == "a scroll")))) goto labelFunc0884_0143;
	message("\"Hmmm. I cannot believe that was all. Perhaps thou shouldst search again.\"*");
	say();
	abort;
labelFunc0884_0143:
	if (!(var0001 == "none of these")) goto labelFunc0884_0152;
	message("\"I do not believe thou hast searched properly.\"*");
	say();
	abort;
labelFunc0884_0152:
	if (!(!gflags[0x0062])) goto labelFunc0884_01A2;
	UI_clear_answers();
	message("\"What dost this villain look like?\"");
	say();
	var0002 = ["I don't know", "scar", "pegleg", "eyepatch"];
	if (!gflags[0x0043]) goto labelFunc0884_0183;
	var0002 = (var0002 & "hook");
labelFunc0884_0183:
	var0003 = Func090B(var0002);
	if (!(var0003 == "hook")) goto labelFunc0884_019D;
	gflags[0x0062] = true;
	goto labelFunc0884_01A2;
labelFunc0884_019D:
	message("\"That is not satisfactory. Thou must needs continue thy search, Avatar.\"*");
	say();
	abort;
labelFunc0884_01A2:
	if (!(!gflags[0x0063])) goto labelFunc0884_029B;
	UI_clear_answers();
	message("\"Hmmm. Any leads on finding this villain?\"");
	say();
	var0002 = ["I don't know", "Could be anywhere", "No one saw him"];
	if (!gflags[0x0040]) goto labelFunc0884_01D0;
	var0002 = (var0002 & "Crown Jewel");
labelFunc0884_01D0:
	var0004 = Func090B(var0002);
	if (!(var0004 == "Crown Jewel")) goto labelFunc0884_0296;
	gflags[0x0063] = true;
	message("The Mayor is pleased.~~\"It seems that thou art pursuing thine investigation with genuine fervor. Methinks thou shouldst go to Britain and see if thou canst find this Man with a Hook.\"");
	say();
	if (!(!gflags[0x0044])) goto labelFunc0884_0228;
	message("\"Here is half of thy reward money. Thou wilt receive the rest when thou dost prove that the killer hath been brought to justice!\"");
	say();
	var0005 = UI_add_party_items(0x0064, 0x0284, 0xFE99, 0xFE99, true);
	if (!(!var0005)) goto labelFunc0884_021C;
	message("\"Thou dost not have enough companions to carry thy reward! Thou must return to me later, and I will give thee thy gold.\"");
	say();
	gflags[0x0045] = true;
	goto labelFunc0884_0228;
labelFunc0884_021C:
	message("The Mayor hands you 100 gold coins.");
	say();
	gflags[0x0044] = true;
	gflags[0x0045] = false;
labelFunc0884_0228:
	message("\"Dost thou need the password?\"");
	say();
	gflags[0x0042] = true;
	if (!Func090A()) goto labelFunc0884_025A;
	if (!Func0886()) goto labelFunc0884_0252;
	message("\"Excellent! I have no doubt now that thou art the one true Avatar!\"");
	say();
	message("\"Oh-- I almost forgot! The password to leave or enter the town is `Blackbird'!\"*");
	say();
	gflags[0x003D] = true;
	Func0911(0x0064);
	abort;
	goto labelFunc0884_0257;
labelFunc0884_0252:
	message("\"Hmmm. I am afraid that I still have my doubts about thou being the Avatar. My public duty disallows me to give thee the password. I am sorry.\"");
	say();
	abort;
labelFunc0884_0257:
	goto labelFunc0884_0293;
labelFunc0884_025A:
	message("\"All right then. Thou dost know that thou must have the password to leave or enter our town? I ask again -- dost thou wish to know the password?\"");
	say();
	if (!Func090A()) goto labelFunc0884_0288;
	if (!Func0886()) goto labelFunc0884_0280;
	message("\"Excellent! I have no doubt now that thou art the one true Avatar!\"");
	say();
	message("\"Oh-- I almost forgot! The password to leave or enter the town is `Blackbird'!\"*");
	say();
	gflags[0x003D] = true;
	Func0911(0x0064);
	abort;
	goto labelFunc0884_0285;
labelFunc0884_0280:
	message("\"Hmmm. I am afraid that I still have my doubts about thou being the Avatar. My public duty disallows me to give thee the password. I am sorry.\"");
	say();
	abort;
labelFunc0884_0285:
	goto labelFunc0884_0293;
labelFunc0884_0288:
	message("\"All right, ");
	message(var0000);
	message(". I thank thee for all thine help.\"*");
	say();
	abort;
labelFunc0884_0293:
	goto labelFunc0884_029B;
labelFunc0884_0296:
	message("\"Hmmm. Methinks thou shouldst continue the investigation. Be sure to talk with Gilberto and Johnson. Question them closely.\"*");
	say();
	abort;
labelFunc0884_029B:
	return;
}


