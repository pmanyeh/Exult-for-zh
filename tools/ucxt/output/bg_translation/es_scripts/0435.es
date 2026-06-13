#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08FC 0x8FC (var var0000, var var0001);
extern var Func090A 0x90A ();
extern void Func088E 0x88E ();
extern void Func0919 0x919 ();
extern void Func092E 0x92E (var var0000);

void Func0435 object#(0x435) ()
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
	var var000B;

	if (!(event == 0x0001)) goto labelFunc0435_01FD;
	UI_show_npc_face(0xFFCB, 0x0000);
	var0000 = Func0909();
	var0001 = UI_wearing_fellowship();
	var0002 = UI_part_of_day();
	var0003 = UI_get_schedule_type(UI_get_npc_object(0xFFCB));
	if (!(var0002 == 0x0007)) goto labelFunc0435_006D;
	var0004 = Func08FC(0xFFCB, 0xFFE6);
	if (!var0004) goto labelFunc0435_0058;
	message("Gaye is watching the Fellowship meeting. She turns to you brusquely and puts a finger to her lips, gesturing for you to be silent.*");
	say();
	abort;
	goto labelFunc0435_006D;
labelFunc0435_0058:
	if (!gflags[0x00DA]) goto labelFunc0435_0068;
	message("\"I cannot imagine where Batlin is. I am worried about him...\"");
	say();
	goto labelFunc0435_006D;
	goto labelFunc0435_006D;
labelFunc0435_0068:
	message("\"I cannot speak now! I am on my way to the Fellowship meeting at the Hall!\"*");
	say();
	abort;
labelFunc0435_006D:
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x00B5]) goto labelFunc0435_008A;
	UI_add_answer("Willy");
labelFunc0435_008A:
	if (!(!gflags[0x00B6])) goto labelFunc0435_009C;
	message("You see a woman who oozes partially sincere friendliness.");
	say();
	gflags[0x00B6] = true;
	goto labelFunc0435_00A0;
labelFunc0435_009C:
	message("\"Hello again, and what may I do for thee today?\" asks Gaye.");
	say();
labelFunc0435_00A0:
	converse attend labelFunc0435_01F2;
	case "name" attend labelFunc0435_00B6:
	message("\"My name is Gaye.\"");
	say();
	UI_remove_answer("name");
labelFunc0435_00B6:
	case "job" attend labelFunc0435_00D2:
	message("\"I oversee the clothier's here in Britain when I am not pursuing the teachings of The Fellowship.\"");
	say();
	UI_add_answer(["clothiers", "buy", "Fellowship"]);
labelFunc0435_00D2:
	case "clothiers" attend labelFunc0435_00E5:
	message("\"At our clothier's shop we have the finest silks and garments to buy that thou hast ever seen, imported from every corner of Britannia to cater to all tastes.\"");
	say();
	UI_remove_answer("clothiers");
labelFunc0435_00E5:
	case "buy" attend labelFunc0435_01AD:
	if (!(!(var0003 == 0x0013))) goto labelFunc0435_00FF;
	message("\"I am so sorry, the clothier's shop is closed. Please return during our regular business hours. We are open from nine until six every day.\"");
	say();
	goto labelFunc0435_01A6;
labelFunc0435_00FF:
	if (!gflags[0x0067]) goto labelFunc0435_0188;
	message("\"Do not tell me! Raymundo sent thee to get an Avatar costume! They cost thirty gold coins. Dost thou want one?\"");
	say();
	var0005 = Func090A();
	if (!var0005) goto labelFunc0435_017E;
	message("She looks you up and down. \"Yes, I think we might be able to find something for thee.\"~~After several minutes of rummaging through the store, Gaye returns. \"Here it is! Not many left-- we have had a run on them recently!\"");
	say();
	var0006 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var0006 < 0x001E)) goto labelFunc0435_013D;
	message("\"Um. Perhaps thou couldst return when thou dost have enough gold.\" She lays the costume down and smiles.");
	say();
	goto labelFunc0435_017B;
labelFunc0435_013D:
	var0007 = UI_add_party_items(0x0001, 0x0346, 0xFE99, 0xFE99, false);
	if (!(!var0007)) goto labelFunc0435_015F;
	message("\"Oh. Thou canst not carry this with what thou art already carrying. Mayhaps thou couldst dispose of something and return for the costume.\"");
	say();
	goto labelFunc0435_017B;
labelFunc0435_015F:
	message("\"It is, indeed, a pleasure to do business with thee, O great Avatar!\" She grins and hands you the costume.");
	say();
	var0008 = UI_remove_party_items(0x001E, 0x0284, 0xFE99, 0xFE99, true);
	gflags[0x0068] = true;
labelFunc0435_017B:
	goto labelFunc0435_0185;
labelFunc0435_017E:
	message("\"'Tis strange! I thought for certain that thou wert the theatrical type!\"");
	say();
	Func088E();
labelFunc0435_0185:
	goto labelFunc0435_01A6;
labelFunc0435_0188:
	message("\"Wouldst thou like to buy some clothing today?\"");
	say();
	var0009 = Func090A();
	if (!var0009) goto labelFunc0435_01A2;
	message("\"We have many nice clothes to choose from.\"");
	say();
	Func088E();
	goto labelFunc0435_01A6;
labelFunc0435_01A2:
	message("\"Thou mayest look around for thyself. If thou dost change thy mind be sure to let me know.\"");
	say();
labelFunc0435_01A6:
	UI_remove_answer("buy");
labelFunc0435_01AD:
	case "Fellowship" attend labelFunc0435_01D1:
	if (!(!var0001)) goto labelFunc0435_01BF;
	Func0919();
labelFunc0435_01BF:
	message("\"Thou wouldst want to attend the Fellowship meeting tonight at nine o'clock. It is always a moving experience to hear the words of Batlin, our founder.\"");
	say();
	UI_remove_answer("Fellowship");
	UI_remove_answer("philosophy");
labelFunc0435_01D1:
	case "Willy" attend labelFunc0435_01E4:
	message("\"Yes, he is a very amusing fellow. I am quite taken with him and I do see him against my better judgment. He does not seem like the type to join The Fellowship, though. Since The Fellowship is my whole life, I do not know if there is a place in it for him. I have not made up my mind about that yet.\"");
	say();
	UI_remove_answer("Willy");
labelFunc0435_01E4:
	case "bye" attend labelFunc0435_01EF:
	goto labelFunc0435_01F2;
labelFunc0435_01EF:
	goto labelFunc0435_00A0;
labelFunc0435_01F2:
	endconv;
	message("\"Good day, ");
	message(var0000);
	message(".\"*");
	say();
labelFunc0435_01FD:
	if (!(event == 0x0000)) goto labelFunc0435_0284;
	var0002 = UI_part_of_day();
	var0003 = UI_get_schedule_type(UI_get_npc_object(0xFFCB));
	var000A = UI_die_roll(0x0001, 0x0004);
	if (!(var0003 == 0x0013)) goto labelFunc0435_027E;
	if (!(var000A == 0x0001)) goto labelFunc0435_0241;
	var000B = "@Clothing? Boots?@";
labelFunc0435_0241:
	if (!(var000A == 0x0002)) goto labelFunc0435_0251;
	var000B = "@Swamp boots?@";
labelFunc0435_0251:
	if (!(var000A == 0x0003)) goto labelFunc0435_0261;
	var000B = "@Tunic? Dress?@";
labelFunc0435_0261:
	if (!(var000A == 0x0004)) goto labelFunc0435_0271;
	var000B = "@Fine clothes here!@";
labelFunc0435_0271:
	UI_item_say(0xFFCB, var000B);
	goto labelFunc0435_0284;
labelFunc0435_027E:
	Func092E(0xFFCB);
labelFunc0435_0284:
	return;
}


