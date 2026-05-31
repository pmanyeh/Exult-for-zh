#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func0439 object#(0x439) ()
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

	if (!(event == 0x0001)) goto labelFunc0439_0260;
	UI_show_npc_face(0xFFC7, 0x0000);
	var0000 = UI_part_of_day();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFFC7));
	var0002 = Func0909();
	var0003 = UI_wearing_fellowship();
	UI_add_answer(["name", "job", "bye"]);
	if (!(gflags[0x004A] || gflags[0x0040])) goto labelFunc0439_0055;
	UI_add_answer("Crown Jewel");
labelFunc0439_0055:
	if (!(!gflags[0x00BA])) goto labelFunc0439_0067;
	message("Before you stands an old sailing man whose determined face appears to have weathered many a storm.");
	say();
	gflags[0x00BA] = true;
	goto labelFunc0439_0071;
labelFunc0439_0067:
	message("\"And what be thy business with me this time, ");
	message(var0002);
	message("?\" says Clint.");
	say();
labelFunc0439_0071:
	converse attend labelFunc0439_025B;
	case "name" attend labelFunc0439_0087:
	message("\"I be Clint.\"");
	say();
	UI_remove_answer("name");
labelFunc0439_0087:
	case "job" attend labelFunc0439_00A0:
	message("\"In my youth I was a sailor who sailed across the sea in tall ships. Now I must content myself solely with selling ships and sextants to others.\"");
	say();
	UI_add_answer(["sailor", "buy"]);
labelFunc0439_00A0:
	case "sailor" attend labelFunc0439_00BA:
	message("\"Of course this was in the day when it took mighty men to be a sailor. Nowadays those who set out to sea would not have lasted a day. But I suppose it is the nature of the universe that everything slowly becomes more tame.\"");
	say();
	UI_remove_answer("sailor");
	UI_add_answer("tame");
labelFunc0439_00BA:
	case "tame" attend labelFunc0439_00D4:
	message("\"Soon all the monsters will die off and the whole world will join together in trust and worthiness and unity like all those Fellowship people say. Bah! The world was a better place when everybody fought everybody else, I say.\"");
	say();
	UI_remove_answer("tame");
	UI_add_answer("Fellowship");
labelFunc0439_00D4:
	case "Fellowship" attend labelFunc0439_00FB:
	if (!var0003) goto labelFunc0439_00F0;
	message("\"No offense intended, of course. I did not realize that thou art a member.\" Clint reacts as if he has just touched a leper.");
	say();
	UI_remove_answer("Fellowship");
	goto labelFunc0439_00FB;
labelFunc0439_00F0:
	message("\"It is always the best thing to make thine own way in the world and not listen to what thou art told to believe. Thou hast better remember that!\"");
	say();
	UI_remove_answer("Fellowship");
labelFunc0439_00FB:
	case "buy" attend labelFunc0439_0132:
	if (!(var0001 == 0x0007)) goto labelFunc0439_0121;
	message("\"If thou art in need of a ship I hold the deed to a fine one. Thou wilt also need a sextant to help steer her true.\"");
	say();
	UI_add_answer(["buy ship deed", "buy sextant"]);
	goto labelFunc0439_012B;
labelFunc0439_0121:
	message("\"My business is now closed. Return another time and I will be happy to serve thee, ");
	message(var0002);
	message(".\"");
	say();
labelFunc0439_012B:
	UI_remove_answer("buy");
labelFunc0439_0132:
	case "buy ship deed" attend labelFunc0439_01B5:
	if (!gflags[0x00D2]) goto labelFunc0439_0147;
	message("\"I do believe I sold thee the deed to 'The Beast'! What happened to it? Hast thou lost the ship? If so, then thou must find another shipwright!\"");
	say();
	goto labelFunc0439_01AE;
labelFunc0439_0147:
	message("\"The deed to the ship 'The Beast' costs eight hundred gold pieces. Dost thou wish to purchase her?\"");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc0439_01AA;
	var0005 = UI_remove_party_items(0x0320, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0005) goto labelFunc0439_01A3;
	var0006 = UI_add_party_items(0x0001, 0x031D, 0x000F, 0xFE99, false);
	if (!var0006) goto labelFunc0439_019C;
	message("\"Here is thy deed, ");
	message(var0002);
	message(".\"");
	say();
	gflags[0x00D2] = true;
	goto labelFunc0439_01A0;
labelFunc0439_019C:
	message("\"I would give thee thy deed but thou art carrying too much to take it from me!\"");
	say();
labelFunc0439_01A0:
	goto labelFunc0439_01A7;
labelFunc0439_01A3:
	message("\"Thou dost not have enough gold to buy a ship!\"");
	say();
labelFunc0439_01A7:
	goto labelFunc0439_01AE;
labelFunc0439_01AA:
	message("\"If thou dost need a ship be sure to come back here.\"");
	say();
labelFunc0439_01AE:
	UI_remove_answer("buy ship deed");
labelFunc0439_01B5:
	case "buy sextant" attend labelFunc0439_0221:
	message("\"A sextant costs one hundred gold pieces. Does thou wish to buy one?\"");
	say();
	var0007 = Func090A();
	if (!var0007) goto labelFunc0439_0216;
	var0008 = UI_remove_party_items(0x0064, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0008) goto labelFunc0439_020F;
	var0009 = UI_add_party_items(0x0001, 0x028A, 0xFE99, 0xFE99, false);
	if (!var0009) goto labelFunc0439_0208;
	message("\"Here is thy sextant. She shall steer thee true, to be sure.\"");
	say();
	goto labelFunc0439_020C;
labelFunc0439_0208:
	message("\"I would give thee thy sextant, but thou art carrying too much to take it from me.\"");
	say();
labelFunc0439_020C:
	goto labelFunc0439_0213;
labelFunc0439_020F:
	message("\"Thou dost not have enough money to buy a sextant!\"");
	say();
labelFunc0439_0213:
	goto labelFunc0439_021A;
labelFunc0439_0216:
	message("\"If thou shouldst ever need a sextant be sure to come back.\"");
	say();
labelFunc0439_021A:
	UI_remove_answer("buy sextant");
labelFunc0439_0221:
	case "Crown Jewel" attend labelFunc0439_024D:
	if (!(!gflags[0x0086])) goto labelFunc0439_023B;
	message("\"The Crown Jewel came to Britain? Not anytime recently. Most certainly not. I remember the Crown Jewel and it has not been to Britain for a long time.\"");
	say();
	gflags[0x0086] = true;
	goto labelFunc0439_0246;
labelFunc0439_023B:
	message("\"As I have told thee before, the Crown Jewel has not been here in a long time.\"");
	say();
	UI_remove_answer("Crown Jewel");
labelFunc0439_0246:
	UI_remove_answer("Crown Jewel");
labelFunc0439_024D:
	case "bye" attend labelFunc0439_0258:
	goto labelFunc0439_025B;
labelFunc0439_0258:
	goto labelFunc0439_0071;
labelFunc0439_025B:
	endconv;
	message("\"May thy travels do well.\" *");
	say();
labelFunc0439_0260:
	if (!(event == 0x0000)) goto labelFunc0439_02E0;
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFFC7));
	var000A = UI_die_roll(0x0001, 0x0004);
	if (!(var0001 == 0x0007)) goto labelFunc0439_02DA;
	if (!(var000A == 0x0001)) goto labelFunc0439_029D;
	var000B = "@Where's that spanner?@";
labelFunc0439_029D:
	if (!(var000A == 0x0002)) goto labelFunc0439_02AD;
	var000B = "@Where's mine hammer?@";
labelFunc0439_02AD:
	if (!(var000A == 0x0003)) goto labelFunc0439_02BD;
	var000B = "@Ahh, smell that sea breeze...@";
labelFunc0439_02BD:
	if (!(var000A == 0x0004)) goto labelFunc0439_02CD;
	var000B = "@Need a ship or sextant?@";
labelFunc0439_02CD:
	UI_item_say(0xFFC7, var000B);
	goto labelFunc0439_02E0;
labelFunc0439_02DA:
	Func092E(0xFFC7);
labelFunc0439_02E0:
	return;
}


