#game "serpentisle"
// externs
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func0955 0x955 ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func0619 object#(0x619) ()
{
	var var0000;
	var var0001;

	var0000 = false;
	var0001 = UI_get_npc_id(item);
	if (!(var0001 == 0x000B)) goto labelFunc0619_001A;
	var0000 = true;
labelFunc0619_001A:
	if (!(event == 0x0002)) goto labelFunc0619_020D;
	UI_set_schedule_type(item, 0x000A);
	UI_clear_item_say(item);
	UI_show_npc_face0(0xFEC6, 0x0000);
	if (!(!gflags[0x0310])) goto labelFunc0619_0057;
	message("\"Well, now, sweet cakes. It's about time ye showed up. I was beginnin' to get tired a waitin'. Me name's Drusilla.");
	say();
	message("\"Ye aren't what I expected. But who am I to know what a pawn of prophecy looks like?\"");
	say();
	gflags[0x0310] = true;
	UI_set_npc_id(item, 0x000B);
	goto labelFunc0619_00BF;
labelFunc0619_0057:
	message("\"Hey ho! It's good to see ye again! Found yer way out of that there maze, huh? Somethin' tricky, weren't it?\"");
	say();
	if (!Func097D(0xFE9B, 0x0001, 0x03F5, 0xFE99, 0x0000)) goto labelFunc0619_007B;
	message("\"An' ye got that there fancy helm, too! Good for ye!");
	say();
	message("\"Never saw any use fer it meself. I kin make me own light... Wit'out mussin' up me hair! Ha!\"");
	say();
	goto labelFunc0619_008A;
labelFunc0619_007B:
	message("\"Not that I want ye to think that I'm an ol' busybody, or anythin' like that... But I think ye might want ta go back an' search that there maze, deary.");
	say();
	message("\"I think ye missed somethin' ye might find real helpful-like.\"");
	say();
	UI_add_answer("something helpful");
labelFunc0619_008A:
	if (!Func097D(0xFE9B, 0x0001, 0x01C2, 0xFE99, 0x0009)) goto labelFunc0619_00AA;
	message("\"Looks like ye talked wit' that there kitty person, too. He didn't want ta talk wit' me, hmmph!");
	say();
	message("\"Never did get on too well wit' cats...\"");
	say();
	goto labelFunc0619_00BF;
labelFunc0619_00AA:
	message("\"Ah, deary, I hate ta sound like I'm meddlin'... But ye left somethin' real important back there in that there maze.");
	say();
	message("\"I think ye might want ta talk wit' that there cat critter. He needs a friend, unless I miss my guess.\"");
	say();
	UI_add_answer(["something important", "cat critter"]);
labelFunc0619_00BF:
	UI_add_answer(["waiting", "pawn of prophecy", "bye"]);
labelFunc0619_00CF:
	converse attend labelFunc0619_020C;
	case "waiting" attend labelFunc0619_00F0:
	UI_remove_answer("waiting");
	message("\"Why else would I be a standin' here, deary? This isn't exactly the hotbed of excitement, iffin ye know what I mean.");
	say();
	message("\"Ye might say that I'm a part o' yer prophecy... One o' yer guides like.\"");
	say();
	UI_add_answer("guides");
labelFunc0619_00F0:
	case "guides" attend labelFunc0619_010E:
	UI_remove_answer("guides");
	message("\"Well now, deary, ye seem ta need some help, iffin ye don't mind my sayin' so. Ye look a little lost, if ye ask me.");
	say();
	message("\"So here I am! I kin give ye three hints ta help ye on yer way. So listen well.\"");
	say();
	UI_add_answer("hints");
labelFunc0619_010E:
	case "hints" attend labelFunc0619_014A:
	UI_remove_answer("hints");
	message("\"Got yer attention now, do I? Ha! Thought so...");
	say();
	message("\"What lies beyond this 'ere gate is a magical-type o' maze, sweet cakes. Now ye listen good to ol' Drusilla, fer only one person kin enter this 'ere maze at a time else all become confused an' die!");
	say();
	message("\"I'll tell ye straight on that it'd be easier iffin ye turned an went back to that there keep right now. So do ye want yer hints or not?\"");
	say();
	if (!Func0955()) goto labelFunc0619_0146;
	message("\"Stubborn cuss, aren't ye? All right, heed me well then...");
	say();
	message("\"Iffin ye find yerself trapped, do not despair lest madness overtake ye. Know that death is the only way any of us will ever win free o' this 'ere world.");
	say();
	message("\"Keep careful track of yer turnin's, fer ye may pass through a room more than once. An' sometimes ye'll have ta turn back on yer heels afore ye can find yer way.");
	say();
	message("\"Yer third, an' final, hint is that once ye have found yer path, that section of the maze shall remain clear ta ye forever more. Do not be distracted from yer path.");
	say();
	message("\"An' now, before I let ye go, deary, I'll warn ye again... Do not take anyone inta that there maze wit' ye. No two see this place the same.\"");
	say();
	goto labelFunc0619_014A;
labelFunc0619_0146:
	message("\"Well now, perhaps ye be more wise than ol' Drusilla gave ye credit for. Go back ta the keep. This is no place fer ye.\"");
	say();
labelFunc0619_014A:
	case "pawn of prophecy" attend labelFunc0619_0168:
	UI_remove_answer("pawn of prophecy");
	message("\"Why look so surprised, sweet cakes? Ye can't tell me that this is the first time someone has told ye that ye are marked...");
	say();
	message("\"Why even those benighted idiots, the Ophidians, knew ta expect ye. So it can't be such a shock ta ye.\"");
	say();
	UI_add_answer("benighted idiots");
labelFunc0619_0168:
	case "benighted idiots" attend labelFunc0619_018A:
	UI_remove_answer("benighted idiots");
	message("\"Well now, perhaps I shouldn't have been so harsh, not in front of ye.");
	say();
	message("\"Suffice it to say that not all people in this 'ere world are so addled as ta believe that wisdom is found in the hissing o' serpents... especially serpents no one kin see.");
	say();
	message("\"I follow the Guide, meself, an' it's enough that I be 'ere ta meet ye ta tell ol' Drusilla whose pot is cracked an' whose isn't.\"");
	say();
	UI_add_answer("Guide");
labelFunc0619_018A:
	case "Guide" attend labelFunc0619_01A1:
	UI_remove_answer("Guide");
	message("\"Full o' questions, aren't ye? Well now, deary, ol' Drusilla has more ta do than ta stand an' talk philosophy wit' ye. An' ye should be about yer business as well.");
	say();
	message("\"Those what follow the Guide don't seek no converts. We've enough ta do. Iffin ye finish yer own tasks an' still want ta talk, well now, perhaps there will be time fer that later.\"");
	say();
labelFunc0619_01A1:
	case "something helpful" attend labelFunc0619_01B4:
	UI_remove_answer("something helpful");
	message("\"Well now, deary, iffin I told ye what it were I'd jus' take the fun outta it fer ye. So ye go back an' have a look see fer yerself.\"");
	say();
labelFunc0619_01B4:
	case "something important" attend labelFunc0619_01C7:
	UI_remove_answer("something important");
	message("\"I can't go a tellin' ye ever'thing, deary. Iffin yer ta be this 'ere pawn of prophecy ye'll jus' have ta figger it out yerself.\"");
	say();
labelFunc0619_01C7:
	case "cat critter" attend labelFunc0619_01DA:
	UI_remove_answer("cat critter");
	message("\"I can't see how ye could have missed 'im. Poor thing is scared half ta death... an' hungry too, I'll wager. Ye kin afford to be friendly like to such a pitiful critter.\"");
	say();
labelFunc0619_01DA:
	case "bye" attend labelFunc0619_0209:
	message("\"Mercy! This has taken far longer than I thought! Ye should be on yer way now...\"");
	say();
	UI_remove_npc_face0();
	UI_item_say(0xFE9C, "@Goodbye!@");
	Func097F(item, "@Be off wit' ye!@", 0x0002);
	UI_set_schedule_type(item, 0x000B);
	goto labelFunc0619_020C;
labelFunc0619_0209:
	goto labelFunc0619_00CF;
labelFunc0619_020C:
	endconv;
labelFunc0619_020D:
	return;
}


