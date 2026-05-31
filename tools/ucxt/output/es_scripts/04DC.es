#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0908 0x908 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090B 0x90B (var var0000);
extern void Func092E 0x92E (var var0000);

void Func04DC object#(0x4DC) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	if (!(event == 0x0001)) goto labelFunc04DC_02FC;
	UI_show_npc_face(0xFF24, 0x0000);
	var0000 = Func0909();
	var0001 = Func0908();
	var0002 = Func08F7(0xFF10);
	var0003 = Func08F7(0xFF66);
	var0004 = false;
	UI_add_answer(["name", "job", "Fellowship", "bye"]);
	if (!gflags[0x02E2]) goto labelFunc04DC_0055;
	message("\"'Twas very kind of thee to release me from my cell. I shall now return to my former life. Good day!\"*");
	say();
	abort;
	goto labelFunc04DC_0069;
labelFunc04DC_0055:
	var0005 = UI_get_npc_object(0xFF24);
	UI_set_schedule_type(var0005, 0x000F);
labelFunc04DC_0069:
	if (!(!gflags[0x02C2])) goto labelFunc04DC_0077;
	message("The man in the prison greets you with a rather large smile.");
	say();
	goto labelFunc04DC_0081;
labelFunc04DC_0077:
	message("\"Why, hello, ");
	message(var0000);
	message(". In what way could I help thee this fine day?\"");
	say();
labelFunc04DC_0081:
	converse attend labelFunc04DC_02F1;
	case "name" attend labelFunc04DC_00F1:
	message("\"I am Sullivan, ");
	message(var0000);
	message(",\" he says pleasantly. \"Who wouldst thou be?\"*");
	say();
	var0006 = "the Avatar";
	var0007 = Func090B([var0001, var0006, var0000]);
	if (!(var0007 == var0001)) goto labelFunc04DC_00C8;
	message("\"Pleased to meet thee, ");
	message(var0001);
	message(".\" He moves his hand to shake yours but is prevented by the bars.~~\"Ah, well, sorry, ");
	message(var0000);
	message(". Consider thyself well shaken.\"");
	say();
labelFunc04DC_00C8:
	if (!(var0007 == var0000)) goto labelFunc04DC_00DC;
	message("\"Of course, ");
	message(var0000);
	message(". I understand.\" He smiles.");
	say();
labelFunc04DC_00DC:
	if (!(var0007 == var0006)) goto labelFunc04DC_00F1;
	message("\"Oh, I see. Oops...\" He shrugs.");
	say();
	UI_add_answer("Oops");
labelFunc04DC_00F1:
	case "job" attend labelFunc04DC_010A:
	message("\"Well, in all honesty, ");
	message(var0000);
	message(", I have no job. Although, for a time, I was a thieving scoundrel.\"");
	say();
	UI_add_answer("scoundrel");
labelFunc04DC_010A:
	case "Fellowship" attend labelFunc04DC_015C:
	message("\"'Tis truly a fantastic group of people, ");
	message(var0000);
	message(". We spread guidance and prosperity to the people who reside in our fair land. Of course, at the moment, my fellow members are a bit... displeased with me.\"");
	say();
	if (!var0002) goto labelFunc04DC_0145;
	message("*");
	say();
	UI_show_npc_face(0xFF10, 0x0000);
	message("\"That's a bit of an understatement!\"*");
	say();
	UI_remove_npc_face(0xFF10);
	UI_show_npc_face(0xFF24, 0x0000);
labelFunc04DC_0145:
	UI_remove_answer("Fellowship");
	UI_add_answer(["guidance", "prosperity", "displeased"]);
labelFunc04DC_015C:
	case "guidance" attend labelFunc04DC_016F:
	message("\"The Fellowship teaches people to follow their leaders like sheep. Canst thou think of better guidance?\"");
	say();
	UI_remove_answer("guidance");
labelFunc04DC_016F:
	case "prosperity" attend labelFunc04DC_0182:
	message("\"When a member behaves properly and follows directions and so forth, he -- or she -- can hear the `inner voice' that teaches one how to win at the games. 'Tis the very reason I joined!\" he grins broadly.~~\"However, I have yet to hear the voice.\"");
	say();
	UI_remove_answer("prosperity");
labelFunc04DC_0182:
	case "displeased" attend labelFunc04DC_01A2:
	message("\"Well, apparently I hadn't striven hard enough to be deserving of the loan I... acquired from the money box upstairs.\"");
	say();
	UI_remove_answer("displeased");
	UI_add_answer(["deserving", "loan"]);
labelFunc04DC_01A2:
	case "deserving" attend labelFunc04DC_01C3:
	message("As best he can, he leans toward you. For perhaps the first time in his entire life, he turns somber. \"Actually, deserve is a relative term. I have finally realized -- being on the racks for many hours during the day leaves time for quite a number of realizations -- the true nature of The Fellowship. Batlin and Abraham and Danag, they all are in error.~~When the Guardian makes his appearance here in Britannia, I have no doubt he will simply eliminate everyone, including The Fellowship leaders.\" His smile returns.~~\"That is why I decided to get everything out of The Fellowship and Britannia now, before we are all killed.\"");
	say();
	UI_remove_answer("deserving");
	if (!(!var0004)) goto labelFunc04DC_01C3;
	UI_add_answer("racks");
labelFunc04DC_01C3:
	case "loan" attend labelFunc04DC_01D6:
	message("\"Well... I was going to return the money eventually. I just needed it to win more in the games.\"");
	say();
	UI_remove_answer("loan");
labelFunc04DC_01D6:
	case "Oops" attend labelFunc04DC_0242:
	if (!var0002) goto labelFunc04DC_020A;
	UI_show_npc_face(0xFF10, 0x0000);
	message("\"What the fool means is that he used to don a costume and pretend to be thee in an attempt to woo goods from the proprietors.\"*");
	say();
	UI_remove_npc_face(0xFF10);
	UI_show_npc_face(0xFF24, 0x0000);
	message("\"Quite true, Avatar. The ruse worked far too well. 'Twas a true shame, to be honest. I should not have gotten away with it, and, indeed, am being properly castigated for it now.\"");
	say();
	goto labelFunc04DC_023B;
labelFunc04DC_020A:
	message("\"Oh, just that I have been impersonating thee for some time now to take items from shopkeepers without paying for them. Well, -had- been actually. Now I am being properly castigated for it.\"");
	say();
	if (!var0003) goto labelFunc04DC_023B;
	message("*");
	say();
	UI_show_npc_face(0xFF66, 0x0000);
	message("\"I thank thee.\"*");
	say();
	UI_remove_npc_face(0xFF66);
	UI_show_npc_face(0xFF24, 0x0000);
	message("\"Thou art welcome.\" He nods.*");
	say();
labelFunc04DC_023B:
	UI_remove_answer("Oops");
labelFunc04DC_0242:
	case "scoundrel" attend labelFunc04DC_0298:
	message("\"Well, until I was caught, I would go from shop to shop all across Britannia, posing as `the Avatar.' The owners were all too happy to supply me with numerous gifts. Thou truly hast a good life, ");
	message(var0000);
	message(".\"");
	say();
	if (!var0002) goto labelFunc04DC_028A;
	message("*");
	say();
	UI_show_npc_face(0xFF10, 0x0000);
	message("\"Ask him about his taxes, ");
	message(var0000);
	message(".\"*");
	say();
	UI_remove_npc_face(0xFF10);
	UI_show_npc_face(0xFF24, 0x0000);
	UI_add_answer("taxes");
labelFunc04DC_028A:
	UI_add_answer("gifts");
	UI_remove_answer("scoundrel");
labelFunc04DC_0298:
	case "gifts" attend labelFunc04DC_02AB:
	message("\"Oh, just anything I asked for -- weapons, armour, provisions, spells. Of course, I had no real use for the spells, but it was nice to acquire them for free, regardless.\"");
	say();
	UI_remove_answer("gifts");
labelFunc04DC_02AB:
	case "taxes" attend labelFunc04DC_02CC:
	message("He smiles.~~\"The Britannian Tax Council created a tax to raise money for the government. I did not feel like paying them,\" he shrugs, \"so I didn't. And, of course,\" he says, grinning, \"now they often put me on that fine rack.\"~~He stretches his neck and peers at the wooden slab.~~\"Very fine workmanship.\" He nods. \"Indeed, that is by far the best rack I have ever seen!\"");
	say();
	UI_remove_answer("taxes");
	if (!(!var0004)) goto labelFunc04DC_02CC;
	UI_add_answer("racks");
labelFunc04DC_02CC:
	case "racks" attend labelFunc04DC_02E3:
	message("\"Is not that the finest rack thou hast ever seen? Exquisite workmanship, beautiful detail.\"");
	say();
	var0004 = true;
	UI_remove_answer("racks");
labelFunc04DC_02E3:
	case "bye" attend labelFunc04DC_02EE:
	goto labelFunc04DC_02F1;
labelFunc04DC_02EE:
	goto labelFunc04DC_0081;
labelFunc04DC_02F1:
	endconv;
	message("\"Pleasant days, ");
	message(var0000);
	message(". See thee soon on the surface world!\"*");
	say();
labelFunc04DC_02FC:
	if (!(event == 0x0000)) goto labelFunc04DC_030A;
	Func092E(0xFF24);
labelFunc04DC_030A:
	return;
}


