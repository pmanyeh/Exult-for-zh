#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern void Func08A8 0x8A8 ();
extern void Func092E 0x92E (var var0000);

void Func04ED object#(0x4ED) ()
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

	if (!(event == 0x0001)) goto labelFunc04ED_0309;
	UI_show_npc_face(0xFF13, 0x0000);
	var0000 = UI_part_of_day();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFF13));
	var0002 = Func0909();
	UI_add_answer(["name", "job", "bye"]);
	var0003 = Func0931(0xFE9B, 0x0001, 0x0289, 0xFE99, 0xFE99);
	if (!var0003) goto labelFunc04ED_005F;
	UI_add_answer("venom");
labelFunc04ED_005F:
	if (!(!gflags[0x00B1])) goto labelFunc04ED_0071;
	message("You see a very authoritative-looking older man who looks at you with thoughtful concern.");
	say();
	gflags[0x00B1] = true;
	goto labelFunc04ED_0075;
labelFunc04ED_0071:
	message("\"I am very glad thou hast come to see me again,\" says Kessler.");
	say();
labelFunc04ED_0075:
	converse attend labelFunc04ED_02FE;
	case "name" attend labelFunc04ED_008B:
	message("\"My name is Kessler.\"");
	say();
	UI_remove_answer("name");
labelFunc04ED_008B:
	case "job" attend labelFunc04ED_009E:
	message("\"I run the apothecary shop here in Britain.\"");
	say();
	UI_add_answer("apothecary");
labelFunc04ED_009E:
	case "apothecary" attend labelFunc04ED_00C1:
	message("\"While the normal function of an apothecary is to administer potions and magical reagents, I am nowadays working almost exclusively for Lord British trying to study a specific problem.\"");
	say();
	UI_remove_answer("apothecary");
	UI_add_answer(["potions", "study", "problem"]);
labelFunc04ED_00C1:
	case "potions" attend labelFunc04ED_00E1:
	message("\"They are certainly not a recent invention here in Britannia! Potions are liquids that possess certain magical qualities which are used for all sorts of purposes, such as the treatment of injury and disease. I have a quantity of them for sale if thou art interested.\"");
	say();
	UI_remove_answer("potions");
	UI_add_answer(["magical qualities", "buy potions"]);
labelFunc04ED_00E1:
	case "magical qualities" attend labelFunc04ED_00FB:
	message("\"Since the mages have become so ineffective, we have been forced to develop other ways to accomplish all the things we used to be able to depend on mages to do. Unfortunately, many of these new methods are as yet untested.\"");
	say();
	UI_remove_answer("magical qualities");
	UI_add_answer("untested");
labelFunc04ED_00FB:
	case "untested" attend labelFunc04ED_010E:
	message("\"We still know very little about the effects of most of the substances we use. Many cause more problems than they solve, or react differently if taken in unison with other elements. Some might cause thee to become dependent on them for thine health and some may simply be poisonous.\"");
	say();
	UI_remove_answer("untested");
labelFunc04ED_010E:
	case "study" attend labelFunc04ED_012E:
	message("\"I am studying the effects of a particular substance known as silver snake venom. But I am encountering a number of difficulties.\"");
	say();
	UI_remove_answer("study");
	UI_add_answer(["silver snake", "difficulties"]);
labelFunc04ED_012E:
	case "silver snake" attend labelFunc04ED_0148:
	message("\"As one may surmise from the name it is the venom taken from the dangerous silver snake. The fascination that many people possess for these creatures has created a great deal of curiosity about the venom itself.\"");
	say();
	UI_remove_answer("silver snake");
	UI_add_answer("curiosity");
labelFunc04ED_0148:
	case "curiosity" attend labelFunc04ED_015B:
	message("\"There are those who claim that gargoyles take the venom which results in their becoming enhanced in combat and such. Now this may be just a myth, but the curiosity people feel is real enough.\"");
	say();
	UI_remove_answer("curiosity");
labelFunc04ED_015B:
	case "difficulties" attend labelFunc04ED_017B:
	message("\"My greatest difficulty is in finding any significant quantity of silver snake venom. But it is by no means mine only difficulty.\"");
	say();
	UI_remove_answer("difficulties");
	UI_add_answer(["finding", "other difficulties"]);
labelFunc04ED_017B:
	case "finding" attend labelFunc04ED_0192:
	message("\"If by any chance thou wouldst come across any silver snake venom bring it back to me here. I shall pay thee fifty gold coins for every vial of it thou canst supply.\"");
	say();
	var0004 = true;
	UI_remove_answer("finding");
labelFunc04ED_0192:
	case "other difficulties" attend labelFunc04ED_01A5:
	message("\"People need to be alerted to how dangerous silver snake venom is. To this end I wish to announce my findings before Lord British and a consortium of lords and mayors, but to do that I must first finish my study.\"");
	say();
	UI_remove_answer("other difficulties");
labelFunc04ED_01A5:
	case "problem" attend labelFunc04ED_01BF:
	message("\"Recently there has been a dramatic rise in the use of a very strange substance. People have begun to purposefully ingest the venom of the silver snake.\"");
	say();
	UI_remove_answer("problem");
	UI_add_answer("ingest");
labelFunc04ED_01BF:
	case "ingest" attend labelFunc04ED_01D9:
	message("\"The silver snake produces a venom that is extremely poisonous, but when taken in less than lethal amounts, it causes a variety of strange effects.\"");
	say();
	UI_remove_answer("ingest");
	UI_add_answer("effects");
labelFunc04ED_01D9:
	case "effects" attend labelFunc04ED_01F3:
	message("\"For a time the venom will heighten one's physical and mental performance, such as allowing one to work harder, for example. But after the effects have worn off, it will impair the user permanently.\"");
	say();
	UI_remove_answer("effects");
	UI_add_answer("impair");
labelFunc04ED_01F3:
	case "impair" attend labelFunc04ED_0206:
	message("\"It first makes the user feel extremely tired and eventually causes a sloughing of the skin. The venom is a dangerous substance and thou shouldst not partake of it under any circumstances.\"");
	say();
	UI_remove_answer("impair");
labelFunc04ED_0206:
	case "venom" attend labelFunc04ED_02B5:
	var0005 = UI_count_objects(0xFE9B, 0x0289, 0xFE99, 0xFE99);
	var0006 = (0x0032 * var0005);
	if (!(var0005 == 0x0000)) goto labelFunc04ED_023C;
	message("\"Thou dost not have any vials of venom!\"");
	say();
	goto labelFunc04ED_02AE;
labelFunc04ED_023C:
	if (!(var0005 == 0x0001)) goto labelFunc04ED_024D;
	message("Kessler examines the vial carefully. ");
	say();
	goto labelFunc04ED_0251;
labelFunc04ED_024D:
	message("Kessler examines the vials carefully. ");
	say();
labelFunc04ED_0251:
	message("He looks up at you and nods. \"This is indeed silver snake venom. I shall pay thee 50 gold coins per vial. All right?\"");
	say();
	if (!Func090A()) goto labelFunc04ED_02AA;
	var0007 = UI_remove_party_items(var0005, 0x0289, 0xFE99, 0xFE99, true);
	if (!var0007) goto labelFunc04ED_02A3;
	var0008 = UI_add_party_items(var0006, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0008) goto labelFunc04ED_029C;
	message("Kessler opens his coinpurse and pays you ");
	message(var0006);
	message(" gold coins.");
	say();
	goto labelFunc04ED_02A0;
labelFunc04ED_029C:
	message("\"Thou art too burdened to carry any more money.\"");
	say();
labelFunc04ED_02A0:
	goto labelFunc04ED_02A7;
labelFunc04ED_02A3:
	message("\"I see thou dost have a quantity of silver snake venom in thy possession. Perhaps we should talk further.\"");
	say();
labelFunc04ED_02A7:
	goto labelFunc04ED_02AE;
labelFunc04ED_02AA:
	message("\"Very well.\"");
	say();
labelFunc04ED_02AE:
	UI_remove_answer("venom");
labelFunc04ED_02B5:
	case "buy potions" attend labelFunc04ED_02F0:
	if (!(!(var0001 == 0x0007))) goto labelFunc04ED_02CF;
	message("\"The Apothecary is closed. It is open from noon until midnight. Thou mayest return then.\"");
	say();
	goto labelFunc04ED_02E9;
labelFunc04ED_02CF:
	message("\"I always keep a fresh stock of ingredients and an inventory of prepared potions in case anyone should be in need of them. Wouldst thou like to buy one?\"");
	say();
	var0009 = Func090A();
	if (!var0009) goto labelFunc04ED_02E5;
	Func08A8();
	goto labelFunc04ED_02E9;
labelFunc04ED_02E5:
	message("\"Be sure to come back if thou dost ever need any potions.\"");
	say();
labelFunc04ED_02E9:
	UI_remove_answer("buy potions");
labelFunc04ED_02F0:
	case "bye" attend labelFunc04ED_02FB:
	goto labelFunc04ED_02FE;
labelFunc04ED_02FB:
	goto labelFunc04ED_0075;
labelFunc04ED_02FE:
	endconv;
	message("\"It was good speaking with thee, ");
	message(var0002);
	message(".\"*");
	say();
labelFunc04ED_0309:
	if (!(event == 0x0000)) goto labelFunc04ED_0317;
	Func092E(0xFF13);
labelFunc04ED_0317:
	return;
}


