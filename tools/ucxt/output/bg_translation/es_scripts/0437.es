#game "blackgate"
// externs
extern var Func08FC 0x8FC (var var0000, var var0001);
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func0897 0x897 ();
extern void Func0898 0x898 ();
extern void Func092E 0x92E (var var0000);

void Func0437 object#(0x437) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0001)) goto labelFunc0437_01CB;
	UI_show_npc_face(0xFFC9, 0x0000);
	var0000 = UI_wearing_fellowship();
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFFC9));
	if (!(var0001 == 0x0007)) goto labelFunc0437_0067;
	var0003 = Func08FC(0xFFC9, 0xFFE6);
	if (!var0003) goto labelFunc0437_0052;
	message("Grayson shushes you, as you are disturbing the Fellowship meeting.*");
	say();
	abort;
	goto labelFunc0437_0067;
labelFunc0437_0052:
	if (!gflags[0x00DA]) goto labelFunc0437_0062;
	message("\"Now where could that Batlin be? I suppose we shall have to have the meeting without him!\"");
	say();
	goto labelFunc0437_006D;
	goto labelFunc0437_0067;
labelFunc0437_0062:
	message("\"I must run! I must run! I must! I must! I am late for the Fellowship meeting!\"*");
	say();
	abort;
labelFunc0437_0067:
	var0004 = Func0909();
labelFunc0437_006D:
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x00B8])) goto labelFunc0437_008F;
	message("You see a shrewd-looking man who smiles as if he has just seen his next customer.");
	say();
	gflags[0x00B8] = true;
	goto labelFunc0437_0093;
labelFunc0437_008F:
	message("\"Hello again, my good friend,\" says Grayson.");
	say();
labelFunc0437_0093:
	converse attend labelFunc0437_01C0;
	case "name" attend labelFunc0437_00AF:
	message("\"I am Grayson, ");
	message(var0004);
	message(". A humble and honest man.\"");
	say();
	UI_remove_answer("name");
labelFunc0437_00AF:
	case "job" attend labelFunc0437_00C8:
	message("\"Why, here in Britain I sell the best armour and weapons that money can buy. In my spare time, I do deeds for The Fellowship.\"");
	say();
	UI_add_answer(["buy", "Fellowship"]);
labelFunc0437_00C8:
	case "armour" attend labelFunc0437_00EF:
	message("Grayson looks you up and down. \"Dost thou truly believe that thou art sufficiently protected in what thou art wearing? In truth I fear for thy safety if thou shouldst become involved in combat. Are thou interested in buying something today?\"");
	say();
	if (!Func090A()) goto labelFunc0437_00E0;
	Func0897();
	goto labelFunc0437_00E8;
labelFunc0437_00E0:
	message("\"Another time, then.\"");
	say();
	UI_pop_answers();
labelFunc0437_00E8:
	UI_remove_answer("armour");
labelFunc0437_00EF:
	case "weapons" attend labelFunc0437_0116:
	message("After looking at you, Grayson says, \"I can see that thou art in sore need of weaponry. Dost thou want to buy something today?\"");
	say();
	if (!Func090A()) goto labelFunc0437_0107;
	Func0898();
	goto labelFunc0437_010F;
labelFunc0437_0107:
	message("\"Another time, then.\"");
	say();
	UI_pop_answers();
labelFunc0437_010F:
	UI_remove_answer("weapons");
labelFunc0437_0116:
	case "buy" attend labelFunc0437_0148:
	message("\"I sell a complete line of armour and weapons.\"");
	say();
	if (!(var0002 == 0x0007)) goto labelFunc0437_0144;
	message("\"Which wouldst thou care to inspect?\"");
	say();
	UI_push_answers();
	UI_add_answer(["armour", "weapons"]);
	goto labelFunc0437_0148;
labelFunc0437_0144:
	message("\"Please come to the shop when it is open.\"");
	say();
labelFunc0437_0148:
	case "Fellowship" attend labelFunc0437_0172:
	if (!var0000) goto labelFunc0437_015A;
	message("\"I see that thou art a member of The Fellowship!\"");
	say();
labelFunc0437_015A:
	message("\"It has been very beneficial in my life. I was on the verge of going out of business before I joined and now I am more prosperous than ever before.\"");
	say();
	UI_remove_answer("Fellowship");
	UI_add_answer(["beneficial", "out of business"]);
labelFunc0437_0172:
	case "beneficial" attend labelFunc0437_018C:
	message("\"I was never sufficiently forward or aggressive enough to be successful as a merchant but The Fellowship changed all that for me.\"");
	say();
	UI_remove_answer("beneficial");
	UI_add_answer("changed");
labelFunc0437_018C:
	case "changed" attend labelFunc0437_019F:
	message("\"By applying the values of the Triad of Inner Strength to my life I have accomplished what I have set out to do with my life. Mine armour and weapon shop is successful and I have a place where I belong in The Fellowship.\"");
	say();
	UI_remove_answer("changed");
labelFunc0437_019F:
	case "out of business" attend labelFunc0437_01B2:
	message("\"Thou dost see, I am convinced that my failures were all due to my bad attitude. It took the teachings of The Fellowship to change the way I used my mind and to turn me in the proper direction.\"");
	say();
	UI_remove_answer("out of business");
labelFunc0437_01B2:
	case "bye" attend labelFunc0437_01BD:
	goto labelFunc0437_01C0;
labelFunc0437_01BD:
	goto labelFunc0437_0093;
labelFunc0437_01C0:
	endconv;
	message("\"Goodbye and farewell, ");
	message(var0004);
	message(".\"*");
	say();
labelFunc0437_01CB:
	if (!(event == 0x0000)) goto labelFunc0437_0252;
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFFC9));
	var0005 = UI_die_roll(0x0001, 0x0004);
	if (!(var0002 == 0x0007)) goto labelFunc0437_024C;
	if (!(var0005 == 0x0001)) goto labelFunc0437_020F;
	var0006 = "@Weapons?@";
labelFunc0437_020F:
	if (!(var0005 == 0x0002)) goto labelFunc0437_021F;
	var0006 = "@Armour?@";
labelFunc0437_021F:
	if (!(var0005 == 0x0003)) goto labelFunc0437_022F;
	var0006 = "@Something to equip thee?@";
labelFunc0437_022F:
	if (!(var0005 == 0x0004)) goto labelFunc0437_023F;
	var0006 = "@Need a weapon?@";
labelFunc0437_023F:
	UI_item_say(0xFFC9, var0006);
	goto labelFunc0437_0252;
labelFunc0437_024C:
	Func092E(0xFFC9);
labelFunc0437_0252:
	return;
}


