#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern void Func0911 0x911 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func047D object#(0x47D) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0001)) goto labelFunc047D_0246;
	UI_show_npc_face(0xFF83, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = UI_get_npc_object(0xFF83);
	var0003 = UI_get_npc_object(0xFF81);
	var0004 = UI_get_npc_object(0xFF82);
	var0005 = Func08F7(0xFF82);
	var0006 = Func08F7(0xFF81);
	if (!(!gflags[0x0177])) goto labelFunc047D_0067;
	message("You see a fighting man. His voice booms like thunder as he greets you. \"Hail to thee, ");
	message(var0000);
	message("!\"");
	say();
	gflags[0x0177] = true;
	goto labelFunc047D_006B;
labelFunc047D_0067:
	message("\"So, once again, I am at thy service,\" bellows Vokes.");
	say();
labelFunc047D_006B:
	if (!gflags[0x0168]) goto labelFunc047D_0080;
	if (!(!gflags[0x0164])) goto labelFunc047D_007D;
	message("\"If thou wouldst return the honor flag of the Library of Scars, then it is only proper that is turned back over to Syria, who was guarding it when it was stolen. Please do so.\"*");
	say();
	abort;
labelFunc047D_007D:
	goto labelFunc047D_00E1;
labelFunc047D_0080:
	if (!gflags[0x0170]) goto labelFunc047D_00E1;
	if (!(var0001 == 0x0004)) goto labelFunc047D_00DA;
	message("\"So, thou wishest to fight for the cowardly Sprellic! Then I have no choice but to finish thee myself!\"*");
	say();
	Func0911(0x0064);
	UI_set_alignment(var0002, 0x0003);
	UI_set_alignment(var0004, 0x0003);
	UI_set_alignment(var0003, 0x0003);
	UI_set_schedule_type(var0002, 0x0000);
	UI_set_schedule_type(var0003, 0x0000);
	UI_set_schedule_type(var0004, 0x0000);
	abort;
	goto labelFunc047D_00E1;
labelFunc047D_00DA:
	message("\"So, thou wishes to fight for the cowardly Sprellic! Meet us at the duelling area at next noon!\"");
	say();
	goto labelFunc047D_00E1;
labelFunc047D_00E1:
	UI_add_answer(["name", "job", "bye"]);
labelFunc047D_00F1:
	converse attend labelFunc047D_0241;
	case "name" attend labelFunc047D_010D:
	message("\"My name is Vokes, ");
	message(var0000);
	message(". As big as a mountain, as strong as an ox, as fierce as... well, more fierce than anything thou hast ever fought!\"");
	say();
	UI_remove_answer("name");
labelFunc047D_010D:
	case "job" attend labelFunc047D_0126:
	message("\"Job! I am not in the habit of plowing fields or peddling vegetables, ");
	message(var0000);
	message("! I earn my gold with this sword arm,\" he says as he flexes a mighty bicep. \"Right now I am in Jhelom continuing my studies in my trade with De Snel, and when I am finished my price is going to go up!\"");
	say();
	UI_add_answer("Jhelom");
labelFunc047D_0126:
	case "Jhelom" attend labelFunc047D_0140:
	message("\"I was born here! Is it not magnificent?! Why, in any hour of any day thou canst get into a duel with anyone for no reason at all! Now that is what I call the benefits of civilization!\"");
	say();
	UI_add_answer("duel");
	UI_remove_answer("Jhelom");
labelFunc047D_0140:
	case "duel" attend labelFunc047D_017F:
	message("\"A responsibility, yes, even a necessity. The cost of being honorable is that one must defend one's honor. There is no telling just where or when the next stain on one's honor may appear. Like this Sprellic fool, for instance. The perfect example!\"*");
	say();
	if (!var0005) goto labelFunc047D_0171;
	UI_show_npc_face(0xFF82, 0x0000);
	message("\"I'll make a stain on his honor, that's for sure. A blood red one!\"*");
	say();
	UI_remove_npc_face(0xFF82);
	UI_show_npc_face(0xFF83, 0x0000);
labelFunc047D_0171:
	UI_add_answer("Sprellic");
	UI_remove_answer("duel");
labelFunc047D_017F:
	case "Sprellic" attend labelFunc047D_01D9:
	if (!(!gflags[0x0164])) goto labelFunc047D_01CE;
	message("\"The bloody idiot had no idea that when he took our honor flag he would be seen doing it. Hence, he never considered the fact that he would have to fight a duel over our sullied honor. But now that the whole town is talking of the incident there is no way that we could refrain from standing up for ourselves. Especially since he has refused to return what he has taken from us.\"*");
	say();
	if (!var0006) goto labelFunc047D_01B7;
	UI_show_npc_face(0xFF81, 0x0000);
	message("\"Were he not such a cad, he would see the foolishness of his actions. 'Tis now up to us to show him!\"*");
	say();
	UI_remove_npc_face(0xFF81);
	UI_show_npc_face(0xFF83, 0x0000);
labelFunc047D_01B7:
	UI_add_answer("honor flag");
	if (!gflags[0x0186]) goto labelFunc047D_01CB;
	UI_add_answer("misunderstanding");
labelFunc047D_01CB:
	goto labelFunc047D_01D2;
labelFunc047D_01CE:
	message("\"If he had not returned the honor flag to us we would have had to kill him dead as sure as I am standing here.\"");
	say();
labelFunc047D_01D2:
	UI_remove_answer("Sprellic");
labelFunc047D_01D9:
	case "honor flag" attend labelFunc047D_01F3:
	message("\"There is a widely known and long-standing tradition concerning the honor flag of the Library of Scars. It is said that taking the flag from the wall is a signal meaning that the person who takes the flag can beat anyone who studies at the school in a fight. It is also a grossly insulting way of saying that thou dost think the method of fighting a school teaches is inferior, which the Library of Scars most certainly is not!\"");
	say();
	UI_add_answer("Library of Scars");
	UI_remove_answer("honor flag");
labelFunc047D_01F3:
	case "misunderstanding" attend labelFunc047D_0206:
	message("\"I have heard that rot about it all being a misunderstanding. The only thing misunderstood is how bad Sprellic will look when we finish with him!\"");
	say();
	UI_remove_answer("misunderstanding");
labelFunc047D_0206:
	case "Library of Scars" attend labelFunc047D_0220:
	message("\"The Library of Scars teaches the supreme fighting style! One that enables thee to get the advantage against thine opponents and soundly defeat them through the brilliantly conceived subterfuge of Master De Snel!\"");
	say();
	UI_add_answer("De Snel");
	UI_remove_answer("Library of Scars");
labelFunc047D_0220:
	case "De Snel" attend labelFunc047D_0233:
	message("\"He is a genius. Perhaps the greatest military mind that ever lived. He told us so!\"");
	say();
	UI_remove_answer("De Snel");
labelFunc047D_0233:
	case "bye" attend labelFunc047D_023E:
	goto labelFunc047D_0241;
labelFunc047D_023E:
	goto labelFunc047D_00F1;
labelFunc047D_0241:
	endconv;
	message("\"If I am not killed and thou art not killed perhaps we may raise a\tglass together some day!\"*");
	say();
labelFunc047D_0246:
	if (!(event == 0x0000)) goto labelFunc047D_0254;
	Func092E(0xFF83);
labelFunc047D_0254:
	return;
}


