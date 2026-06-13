#game "serpentisle"
// externs
extern var Func0956 0x956 (var var0000);
extern var Func0999 0x999 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0955 0x955 ();

var Func0850 0x850 (var var0000, var var0001)
{
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

	var0002 = var0000;
	var0003 = ((var0001 / 0x0003) * 0x0002);
	var0004 = 0x0005;
	var0005 = 0x0000;
	var0006 = 0x0001;
	var0007 = 0x0000;
	var0008 = 0x0002;
labelFunc0850_0032:
	if (!var0006) goto labelFunc0850_0372;
	var0009 = Func0956(["yes", "no", "haggle"]);
	if (!(var0009 == "no")) goto labelFunc0850_005B;
	return 0x0000;
	goto labelFunc0850_006E;
labelFunc0850_005B:
	if (!(var0009 == "yes")) goto labelFunc0850_006E;
	var000A = 0x0000;
	goto labelFunc0850_00BD;
labelFunc0850_006E:
	var000B = Func0999(var0002, var0001, var0008, var0003, var0007, var0004, var0005);
	var0007 = (var0007 + 0x0001);
	var0005 = var000B[0x0004];
	var000A = var000B[0x0003];
	var000C = var0002;
	var0002 = var000B[0x0002];
	var0003 = var000B[0x0001];
labelFunc0850_00BD:
	var000D = UI_get_random(0x0003);
	if (!(var000A < 0x0002)) goto labelFunc0850_0211;
	if (!(var0002 < (var0001 + ((var0000 - var0001) / 0x0004)))) goto labelFunc0850_0114;
	if (!(var000D == 0x0001)) goto labelFunc0850_00F5;
	message("\"Thou dost bargain well, my friend.\"");
	say();
labelFunc0850_00F5:
	if (!(var000D == 0x0002)) goto labelFunc0850_0103;
	message("\"It pains me to agree... But what else can I do?\"");
	say();
labelFunc0850_0103:
	if (!(var000D == 0x0003)) goto labelFunc0850_0111;
	message("\"I must be spending too much time speaking with the dead. I cannot believe that I am agreeing to this!\"");
	say();
labelFunc0850_0111:
	goto labelFunc0850_01CA;
labelFunc0850_0114:
	if (!(var0002 < (var0001 + ((var0000 - var0001) / 0x0003)))) goto labelFunc0850_0157;
	if (!(var000D == 0x0001)) goto labelFunc0850_0138;
	message("\"I have little enough business these days. I shall have to accept.\"");
	say();
labelFunc0850_0138:
	if (!(var000D == 0x0002)) goto labelFunc0850_0146;
	message("\"Thou hast a talent for bargaining. I will accept this price.\"");
	say();
labelFunc0850_0146:
	if (!(var000D == 0x0003)) goto labelFunc0850_0154;
	message("\"I should retire from magery. I am losing mine edge.\"");
	say();
labelFunc0850_0154:
	goto labelFunc0850_01CA;
labelFunc0850_0157:
	if (!(var0002 < (var0001 + ((var0000 - var0001) / 0x0002)))) goto labelFunc0850_01A0;
	if (!(var000D == 0x0001)) goto labelFunc0850_0181;
	message("\"Only ");
	message(var0002);
	message("??! I suppose it is the best I can hope for.\"");
	say();
labelFunc0850_0181:
	if (!(var000D == 0x0002)) goto labelFunc0850_018F;
	message("\"A modest amount. Not bad...\"");
	say();
labelFunc0850_018F:
	if (!(var000D == 0x0003)) goto labelFunc0850_019D;
	message("\"There is simply no profit in selling spells...\"");
	say();
labelFunc0850_019D:
	goto labelFunc0850_01CA;
labelFunc0850_01A0:
	if (!(var000D == 0x0001)) goto labelFunc0850_01AE;
	message("\"I accept thine offer!\"");
	say();
labelFunc0850_01AE:
	if (!(var000D == 0x0002)) goto labelFunc0850_01BC;
	message("\"It is a pleasure doing business with thee!\"");
	say();
labelFunc0850_01BC:
	if (!(var000D == 0x0003)) goto labelFunc0850_01CA;
	message("\"Thou art most generous! I accept.\"");
	say();
labelFunc0850_01CA:
	message("\"So, have we agreed on the price of ");
	message(var0002);
	message("?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc0850_01E3;
	return var0002;
	goto labelFunc0850_0211;
labelFunc0850_01E3:
	if (!(var000D == 0x0001)) goto labelFunc0850_01F1;
	message("\"Then why didst thou go to such trouble?!\"");
	say();
labelFunc0850_01F1:
	if (!(var000D == 0x0002)) goto labelFunc0850_01FF;
	message("\"I shall remember this outrage!\"");
	say();
labelFunc0850_01FF:
	if (!(var000D == 0x0003)) goto labelFunc0850_020D;
	message("\"All this time spent for nothing?! Thou art mad!\"");
	say();
labelFunc0850_020D:
	return 0x0000;
labelFunc0850_0211:
	if (!(var0005 == 0x0001)) goto labelFunc0850_0251;
	if (!(var000A == 0x0005)) goto labelFunc0850_0244;
	message("\"I said that ");
	message(var0002);
	message(" is my final offer. Dost thou agree?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc0850_023B;
	return var0002;
labelFunc0850_023B:
	var0006 = 0x0000;
	goto labelFunc0850_024E;
labelFunc0850_0244:
	message("\"");
	message(var0002);
	message(" is my final offer. I could make more profit from a shade...\"");
	say();
labelFunc0850_024E:
	goto labelFunc0850_036F;
labelFunc0850_0251:
	if (!(var000A == 0x0002)) goto labelFunc0850_0297;
	if (!(var000D == 0x0001)) goto labelFunc0850_026F;
	message("\"How doth ");
	message(var0002);
	message(" sound? I like thee...\"");
	say();
labelFunc0850_026F:
	if (!(var000D == 0x0002)) goto labelFunc0850_0283;
	message("\"I can trust thee with my spells, surely. How doth ");
	message(var0002);
	message(" sound?\"");
	say();
labelFunc0850_0283:
	if (!(var000D == 0x0003)) goto labelFunc0850_0297;
	message("\"Thou art worthy of my knowledge. I offer thee ");
	message(var0002);
	message(".\"");
	say();
labelFunc0850_0297:
	if (!(var000A == 0x0003)) goto labelFunc0850_02DD;
	if (!(var000D == 0x0001)) goto labelFunc0850_02B5;
	message("\"Hmmm.... Possibly ");
	message(var0002);
	message("?\"");
	say();
labelFunc0850_02B5:
	if (!(var000D == 0x0002)) goto labelFunc0850_02C9;
	message("\"I must consider this... ");
	message(var0002);
	message("?\"");
	say();
labelFunc0850_02C9:
	if (!(var000D == 0x0003)) goto labelFunc0850_02DD;
	message("\"What wouldst thou say to ");
	message(var0002);
	message("? I must be able to buy reagents...\"");
	say();
labelFunc0850_02DD:
	if (!(var000A == 0x0004)) goto labelFunc0850_0323;
	if (!(var000D == 0x0001)) goto labelFunc0850_02FB;
	message("\"Thief! Better that thou shouldst steal it from me! ");
	message(var0002);
	message(", no less.\"");
	say();
labelFunc0850_02FB:
	if (!(var000D == 0x0002)) goto labelFunc0850_030F;
	message("\"My knowledge is worth more than that! I can go no lower than ");
	message(var0002);
	message(".\"");
	say();
labelFunc0850_030F:
	if (!(var000D == 0x0003)) goto labelFunc0850_0323;
	message("\"This spell is worth at least ");
	message(var0002);
	message(".\"");
	say();
labelFunc0850_0323:
	if (!(var000A == 0x0005)) goto labelFunc0850_036F;
	var0002 = var000C;
	if (!(var000D == 0x0001)) goto labelFunc0850_0347;
	message("\"Thou must not want this spell... My previous offer stands, at ");
	message(var0002);
	message(".\"");
	say();
labelFunc0850_0347:
	if (!(var000D == 0x0002)) goto labelFunc0850_035B;
	message("\"Dost thou dare to insult me?! ");
	message(var0002);
	message(", no less.\"");
	say();
labelFunc0850_035B:
	if (!(var000D == 0x0003)) goto labelFunc0850_036F;
	message("\"Mine offer stands at ");
	message(var0002);
	message(". Thou art a fool if thou dost not agree.\"");
	say();
labelFunc0850_036F:
	goto labelFunc0850_0032;
labelFunc0850_0372:
	return 0;
}


