#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08FC 0x8FC (var var0000, var var0001);
extern var Func090A 0x90A ();
extern void Func0919 0x919 ();
extern void Func091A 0x91A ();
extern void Func08E3 0x8E3 ();
extern void Func092E 0x92E (var var0000);

void Func043B object#(0x43B) ()
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
	var var000C;
	var var000D;
	var var000E;
	var var000F;
	var var0010;
	var var0011;
	var var0012;

	if (!(event == 0x0001)) goto labelFunc043B_030F;
	UI_show_npc_face(0xFFC5, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFFC5));
	var0003 = UI_wearing_fellowship();
	var0001 = UI_part_of_day();
	if (!(var0001 == 0x0007)) goto labelFunc043B_0074;
	var0004 = Func08FC(0xFFC5, 0xFFE6);
	if (!var0004) goto labelFunc043B_005F;
	message("Sean is deep in concentration, listening to the Fellowship meeting.*");
	say();
	abort;
	goto labelFunc043B_0074;
labelFunc043B_005F:
	if (!gflags[0x00DA]) goto labelFunc043B_006F;
	message("\"I cannot imagine where Batlin is. He never misses Fellowship meeting!\"");
	say();
	goto labelFunc043B_0074;
	goto labelFunc043B_0074;
labelFunc043B_006F:
	message("\"I must not stop to speak now! I am late for the Fellowship meeting!\"*");
	say();
	abort;
labelFunc043B_0074:
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x00BC])) goto labelFunc043B_0096;
	message("You see a man whose boyish face is set with scrutinizing eyes that look as if they have seen much.");
	say();
	gflags[0x00BC] = true;
	goto labelFunc043B_00A0;
labelFunc043B_0096:
	message("\"And what may I do for thee, ");
	message(var0000);
	message("?\" asks Sean.");
	say();
labelFunc043B_00A0:
	converse attend labelFunc043B_030A;
	case "name" attend labelFunc043B_00B6:
	message("\"My name is Sean.\"");
	say();
	UI_remove_answer("name");
labelFunc043B_00B6:
	case "job" attend labelFunc043B_00D5:
	message("\"When not tending to Fellowship affairs, I am a jeweller here in Britain. If thou dost wish to buy something, say so!\"");
	say();
	UI_add_answer(["Fellowship", "jeweller", "Britain", "buy"]);
labelFunc043B_00D5:
	case "jeweller" attend labelFunc043B_00F5:
	message("\"It is very delicate work. It requires a special touch that only a few have. Thou must know precisely how to handle precious materials. Only the finest of craftsmen become jewellers and they receive the highest compensation.\"");
	say();
	UI_remove_answer("jeweller");
	UI_add_answer(["precious materials", "finest craftsmen"]);
labelFunc043B_00F5:
	case "precious materials" attend labelFunc043B_010F:
	message("\"I constantly require new materials with which to create my very special jewelry. I am always in the market to buy gems. If thou dost ever come across any, I am the man to come to if thou shouldst want to sell them and make money.\"");
	say();
	UI_remove_answer("precious materials");
	UI_add_answer("gems");
labelFunc043B_010F:
	case "finest craftsmen" attend labelFunc043B_0122:
	message("\"As I have told thee, only the finest of craftsmen become jewellers, and I am the finest of jewellers. Does that not tell thee something?\" Sean sniffs. \"My business makes more money than the mint!\" He laughs forcibly.");
	say();
	UI_remove_answer("finest craftsmen");
labelFunc043B_0122:
	case "gems" attend labelFunc043B_0257:
	if (!(!(var0002 == 0x0007))) goto labelFunc043B_013C;
	message("\"The jeweller's shop is currently closed for business. Come back later!\"");
	say();
	goto labelFunc043B_0250;
labelFunc043B_013C:
	message("\"Dost thou have a gem for sale?\"");
	say();
	var0005 = Func090A();
	if (!var0005) goto labelFunc043B_024C;
	message("\"I will pay thee 30 gold coins per gem. Is that price agreeable?\"");
	say();
	var0006 = Func090A();
	if (!var0006) goto labelFunc043B_0245;
	var0007 = [0x000C, 0x000D];
	enum();
labelFunc043B_0169:
	for (var000A in var0007 with var0008 to var0009) attend labelFunc043B_01A7;
	if (!UI_count_objects(0xFE9B, 0x02F8, 0xFE99, var000A)) goto labelFunc043B_01A4;
	if (!(var000A == 0x000C)) goto labelFunc043B_0195;
	message("\"Dost thou think me a fool?! This little blue bauble is worthless!\"");
	say();
labelFunc043B_0195:
	if (!(var000A == 0x000D)) goto labelFunc043B_01A3;
	message("Sean's face tightens. \"This gem is small and dark as the heart of an unholy Liche. Away with it!\"");
	say();
labelFunc043B_01A3:
	abort;
labelFunc043B_01A4:
	goto labelFunc043B_0169;
labelFunc043B_01A7:
	var000B = UI_count_objects(0xFE9B, 0x02F8, 0xFE99, 0xFE99);
	var000C = (var000B * 0x001E);
	var000D = UI_remove_party_items(var000B, 0x02F8, 0xFE99, 0xFE99, true);
	if (!(var000B == 0x0000)) goto labelFunc043B_01E7;
	message("\"Thou dost have no gems! Thou art a liar! I will do no business with thee!\"");
	say();
	abort;
labelFunc043B_01E7:
	if (!(var000B == 0x0001)) goto labelFunc043B_01F5;
	message("\"I see that thou has one gem.\"");
	say();
labelFunc043B_01F5:
	if (!(var000B > 0x0001)) goto labelFunc043B_0209;
	message("\"I see that thou hast ");
	message(var000B);
	message(" gems.\"");
	say();
labelFunc043B_0209:
	var000E = UI_add_party_items(var000C, 0x0284, 0xFE99, 0xFE99, true);
	if (!var000E) goto labelFunc043B_022A;
	message("\"Here is thy payment.\"");
	say();
	goto labelFunc043B_0242;
labelFunc043B_022A:
	message("\"Thou art carrying too much to take thy payment!\"");
	say();
	var000F = UI_add_party_items(var000B, 0x02F8, 0xFE99, 0xFE99, true);
labelFunc043B_0242:
	goto labelFunc043B_0249;
labelFunc043B_0245:
	message("\"It seems we have little left to discuss then.\"");
	say();
labelFunc043B_0249:
	goto labelFunc043B_0250;
labelFunc043B_024C:
	message("\"If thou dost have no gems for sale then do not even waste my time by mentioning it!\"");
	say();
labelFunc043B_0250:
	UI_remove_answer("gems");
labelFunc043B_0257:
	case "Fellowship" attend labelFunc043B_0285:
	if (!var0003) goto labelFunc043B_026C;
	message("\"I see thou art a member!\" Sean suddenly looks at you with a bit more respect. \"I am sure The Fellowship will do thee a world of good in the future.\" He smiles condescendingly.");
	say();
	goto labelFunc043B_0277;
labelFunc043B_026C:
	message("\"Even thou mayest join The Fellowship and I can tell thee more about it.\"");
	say();
	Func0919();
	message("\"I can tell thee about The Fellowship's philosophy if thou dost wish.\"");
	say();
labelFunc043B_0277:
	UI_remove_answer("Fellowship");
	UI_add_answer("philosophy");
labelFunc043B_0285:
	case "philosophy" attend labelFunc043B_02AE:
	message("\"Thou art really interested in hearing more?\"");
	say();
	var0010 = Func090A();
	if (!var0010) goto labelFunc043B_02A3;
	Func091A();
	goto labelFunc043B_02A7;
labelFunc043B_02A3:
	message("\"I thought I was wasting my breath on thee.\"");
	say();
labelFunc043B_02A7:
	UI_remove_answer("philosophy");
labelFunc043B_02AE:
	case "Britain" attend labelFunc043B_02C8:
	message("\"I moved mine entire business here to Britain to be near the main branch of The Fellowship. Thou hast no idea how much my business improved after I joined The Fellowship.\"");
	say();
	UI_remove_answer("Britain");
	UI_add_answer("Fellowship");
labelFunc043B_02C8:
	case "buy" attend labelFunc043B_02FC:
	if (!(var0002 == 0x0007)) goto labelFunc043B_02F1;
	message("\"Wouldst thou like to buy something?\"");
	say();
	if (!Func090A()) goto labelFunc043B_02EA;
	Func08E3();
	goto labelFunc043B_02EE;
labelFunc043B_02EA:
	message("\"Then please browse if thou dost like.\"");
	say();
labelFunc043B_02EE:
	goto labelFunc043B_02F5;
labelFunc043B_02F1:
	message("\"Please come to the shop during normal business hours.\"");
	say();
labelFunc043B_02F5:
	UI_remove_answer("buy");
labelFunc043B_02FC:
	case "bye" attend labelFunc043B_0307:
	goto labelFunc043B_030A;
labelFunc043B_0307:
	goto labelFunc043B_00A0;
labelFunc043B_030A:
	endconv;
	message("\"I am sure thou must be on thy way.\" Sean smiles.*");
	say();
labelFunc043B_030F:
	if (!(event == 0x0000)) goto labelFunc043B_0396;
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFFC5));
	var0011 = UI_die_roll(0x0001, 0x0004);
	if (!(var0002 == 0x0007)) goto labelFunc043B_0390;
	if (!(var0011 == 0x0001)) goto labelFunc043B_0353;
	var0012 = "@Fine jewelry!@";
labelFunc043B_0353:
	if (!(var0011 == 0x0002)) goto labelFunc043B_0363;
	var0012 = "@Need gold trinkets?@";
labelFunc043B_0363:
	if (!(var0011 == 0x0003)) goto labelFunc043B_0373;
	var0012 = "@Fine gems!@";
labelFunc043B_0373:
	if (!(var0011 == 0x0004)) goto labelFunc043B_0383;
	var0012 = "@Fine crafted jewelry!@";
labelFunc043B_0383:
	UI_item_say(0xFFC5, var0012);
	goto labelFunc043B_0396;
labelFunc043B_0390:
	Func092E(0xFFC5);
labelFunc043B_0396:
	return;
}


