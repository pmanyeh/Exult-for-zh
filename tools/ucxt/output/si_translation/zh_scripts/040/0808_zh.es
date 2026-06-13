#game "serpentisle"
// externs
extern void Func0809 0x809 ();
extern var Func0954 0x954 ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func07D1 object#(0x7D1) ();
extern void Func07D2 object#(0x7D2) ();
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func0808 0x808 (var var0000, var var0001)
{
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;

	if (!UI_get_item_flag(item, 0x001E)) goto labelFunc0808_000F;
	Func0809();
	abort;
labelFunc0808_000F:
	var0002 = "";
	var0003 = Func0954();
	var0004 = UI_is_pc_female();
	if (!((event == 0x0000) && (UI_get_schedule_type(item) == 0x0009))) goto labelFunc0808_006C;
	if (!(UI_get_random(0x000A) < 0x0006)) goto labelFunc0808_0043;
	abort;
labelFunc0808_0043:
	var0005 = ["@Leave this place!@", "@Intrude not!@", "@Call the Rangers!@", "@Anger not the Mages...@", "@Take nothing!@", "@Thief! Thief!@"];
	Func097F(item, var0005[UI_get_random(0x0006)], 0x0000);
labelFunc0808_006C:
	if (!((event == 0x0001) && (UI_get_schedule_type(item) != 0x000A))) goto labelFunc0808_00EE;
	UI_item_say(0xFE9C, "Hold!");
	item->Func07D1();
	Func097F(item, "@Yes?@", 0x0002);
	var0006 = UI_get_npc_number(item);
	if (!((var0006 == 0xFF3A) || ((var0006 == 0xFF39) || (var0006 == 0xFF38)))) goto labelFunc0808_00E6;
	UI_set_schedule_type(item, 0x000A);
	item->Func07D2();
	var0006 = (0x0400 - var0006);
	var0006 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x27, 0x0007, (byte)0x55, var0006]);
	abort;
labelFunc0808_00E6:
	UI_set_schedule_type(item, 0x0003);
labelFunc0808_00EE:
	if (!((event == 0x0009) || (event == 0x0002))) goto labelFunc0808_035E;
	UI_run_schedule(item);
	UI_clear_item_say(item);
	UI_show_npc_face0(0xFED6, 0x0000);
	if (!((var0000 == "Canton") || (var0000 == "Seminarium"))) goto labelFunc0808_0135;
	message("\"I am the servant and protector here at the ");
	message(var0000);
	message(". If thou wishest to conduct any business, thou must speak to my master. If thou dost not have any concern here, ");
	message(var0003);
	message(", I must ask thee to please depart.\"");
	say();
	goto labelFunc0808_0145;
labelFunc0808_0135:
	message("\"I am the servant and protector of ");
	message(var0000);
	message(". If thou dost not belong here, ");
	message(var0003);
	message(", I must ask thee to please depart. I cannot help thee with matters of importance. My duty is only to protect my master and my master's possessions.\"");
	say();
labelFunc0808_0145:
	UI_add_answer(["servant", "bye"]);
labelFunc0808_0152:
	converse attend labelFunc0808_035D;
	case "servant" attend labelFunc0808_02F0:
	UI_remove_answer("servant");
	if (!(var0001 == 0x0002)) goto labelFunc0808_0172;
	message("\"As I have said, I serve and protect my master's household.\"");
	say();
labelFunc0808_0172:
	if (!(var0001 == 0x0003)) goto labelFunc0808_018B;
	message("\"As I have said, I serve and protect my master's household. I must work...\"");
	say();
	Func097F(item, "@Where be the pan?@", 0x0000);
	abort;
labelFunc0808_018B:
	if (!(var0001 == 0x0004)) goto labelFunc0808_01A4;
	message("\"As I have said, I serve and protect my master's household. I do not have time for talk.\"");
	say();
	Func097F(item, "@Back to work!@", 0x0000);
	abort;
labelFunc0808_01A4:
	if (!(var0001 == 0x0005)) goto labelFunc0808_01E1;
	message("\"As I have said, I serve and protect my master's household. This have I done for a great many years.\"");
	say();
	var0007 = Func0992(0xFFFD, "@Why, this being doth move so silently!@", 0x0000, false);
	if (!(var0007 != 0xFE9C)) goto labelFunc0808_01D7;
	UI_set_conversation_slot(0x0000);
	message("\"Master Filbercio hath enchanted my feet to prevent them from clattering as I walk. He was greatly disturbed by the noise.\"");
	say();
labelFunc0808_01D7:
	UI_add_answer(["many years"]);
labelFunc0808_01E1:
	if (!(var0001 == 0x0006)) goto labelFunc0808_021C;
	var0008 = UI_part_of_day();
	if (!((var0008 == 0x0007) || ((var0008 == 0x0000) || (var0008 == 0x0001)))) goto labelFunc0808_0212;
	var0002 = ", especially at this time of night";
labelFunc0808_0212:
	message("\"As I have said, I serve and protect my master's possessions from the many thieves who would take them");
	message(var0002);
	message(".\"");
	say();
labelFunc0808_021C:
	if (!(var0001 == 0x0007)) goto labelFunc0808_023D;
	if (!(!gflags[0x00D9])) goto labelFunc0808_0233;
	var0002 = ", especially when Master Pothos is away";
labelFunc0808_0233:
	message("\"As I have said, I serve and protect my master's household. The apothecary's shop is a prime target for thievery");
	message(var0002);
	message(".\"");
	say();
labelFunc0808_023D:
	if (!(var0001 == 0x000B)) goto labelFunc0808_0256;
	message("\"As I have said, I serve and protect my master's household.\"");
	say();
	Func097F(item, "@I must go...@", 0x0000);
	abort;
labelFunc0808_0256:
	if (!(var0001 == 0x0008)) goto labelFunc0808_0264;
	message("\"I serve by playing melodies for the patrons. I prefer to play the songs I memorized long ago, but the residents here do not seem to like them.\"");
	say();
labelFunc0808_0264:
	if (!(var0001 == 0x0009)) goto labelFunc0808_02DC;
	message("\"I perform music for those who would listen. Music is a difficult art.\"");
	say();
	if (!UI_npc_nearby(0xFFE2)) goto labelFunc0808_0298;
	UI_show_npc_face1(0xFFE2, 0x0000);
	message("\"And thou art indeed a master, musician automaton.\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	goto labelFunc0808_02DC;
labelFunc0808_0298:
	if (!UI_npc_nearby(0xFFE4)) goto labelFunc0808_02DC;
	UI_show_npc_face1(0xFFE4, 0x0000);
	message("\"There are some who say that when it comes to music, we automatons have a tin ear.\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"That is patently untrue.\"");
	say();
	UI_show_npc_face1(0xFFE4, 0x0000);
	message("\"I was making a humorous remark, musician.\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"I do not understand humor, milady.\"");
	say();
labelFunc0808_02DC:
	if (!(var0001 == 0x000A)) goto labelFunc0808_02F0;
	message("\"I am both a musician and a dancer, ");
	message(var0003);
	message(". Ofttimes I will accompany my fellows, other times I will rise and perform a jig for the patrons. Some who drink here even join in the dancing.\"");
	say();
labelFunc0808_02F0:
	case "many years" attend labelFunc0808_0303:
	UI_remove_answer("many years");
	message("\"There is much I have witnessed in these halls, but I am forbidden to speak of it.\"");
	say();
labelFunc0808_0303:
	case "bye" attend labelFunc0808_035A:
	Func097F(0xFE9C, "@Goodbye.@", 0x0000);
	if (!((var0000 == "Canton") || ((var0000 == "Filbercio") || (var0000 == "Rocco")))) goto labelFunc0808_0347;
	UI_set_schedule_type(item, 0x0001);
	Func097F(item, "@Goodbye@", 0x0005);
	abort;
	goto labelFunc0808_035A;
labelFunc0808_0347:
	UI_set_schedule_type(item, 0x0009);
	Func097F(item, "@Move along...@", 0x000A);
	abort;
labelFunc0808_035A:
	goto labelFunc0808_0152;
labelFunc0808_035D:
	endconv;
labelFunc0808_035E:
	return;
}


