#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func0994 0x994 ();
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func0955 0x955 ();
extern void Func0864 0x864 ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func0294 shape#(0x294) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	var0003 = Func0994();
	var0004 = false;
	var0005 = false;
	if (!(event == 0x0002)) goto labelFunc0294_02B5;
	UI_run_schedule(item);
	UI_clear_item_say(item);
	UI_show_npc_face0(0xFEF6, 0x0000);
	if (!(gflags[0x0004] == false)) goto labelFunc0294_0046;
	abort;
labelFunc0294_0046:
	if (!UI_get_item_flag(item, 0x001E)) goto labelFunc0294_00B0;
	message("\"I told thee, ");
	message(var0002);
	message(", there is nothing left for me... Without the Comb of Beauty there is no hope in the world!\"");
	say();
	if (!Func097D(0xFE9B, 0x0001, 0x0289, 0xFE99, 0x0000)) goto labelFunc0294_009A;
	message("\"Thou hast the Comb of Beauty! Wilt thou give me the Comb? I will grant thee Fawn's greatest treasure, as I promised the heavens.\"");
	say();
	if (!Func0955()) goto labelFunc0294_0084;
	message("\"In this one thing, at least, I can fulfill mine obligation.\"");
	say();
	Func0864();
	goto labelFunc0294_0097;
labelFunc0294_0084:
	message("\"Such is the story of my life... Then I shall remain here, within this fetid swamp -- where I belong!\"");
	say();
	UI_remove_npc_face0();
	Func097F(item, "@Leave me!@", 0x0000);
	abort;
labelFunc0294_0097:
	goto labelFunc0294_00AD;
labelFunc0294_009A:
	message("\"Leave me to die in peace! I have nothing left... nothing...\"");
	say();
	UI_remove_npc_face0();
	Func097F(item, "@Go away!@", 0x0000);
	abort;
labelFunc0294_00AD:
	goto labelFunc0294_00C8;
labelFunc0294_00B0:
	message("\"Look what thy mad companion, Iolo, hath done to me! He told me to tell thee that only thou couldst prove whether Beauty was skin deep.\"");
	say();
	message("\"Thou must have some way to remove this foul enchantment! But... What have I to live for? My very heart hath been torn asunder! My people are dead! There is nothing left for me!\"");
	say();
	UI_add_answer(["prove", "heart", "people"]);
labelFunc0294_00C8:
	UI_add_answer("bye");
labelFunc0294_00CF:
	converse attend labelFunc0294_02B4;
	case "bye" attend labelFunc0294_00F3:
	Func097F(0xFE9C, "@Keep faith!@", 0x0000);
	Func097F(item, "@I am cursed!@", 0x0002);
	goto labelFunc0294_02B4;
labelFunc0294_00F3:
	case "prove" attend labelFunc0294_0111:
	UI_remove_answer("prove");
	message("\"How would I know the mind of a madman?!\"");
	say();
	message("\"Perhaps he thought that thou didst have some magic with which to counter his cruelty.\"");
	say();
	UI_add_answer("magic");
labelFunc0294_0111:
	case "magic" attend labelFunc0294_013E:
	UI_remove_answer("magic");
	message("\"I am no mage, to tell thee such things!\"");
	say();
	message("\"No one can restore the life to my people...\"");
	say();
	message("\"Should I selfishly ask that mine own Beauty be restored when the life's blood of Fawn -- the city of Beauty -- lies dead in the streets?!\"");
	say();
	message("\"If only the Comb of Beauty had not been stolen! Everything changed in Fawn after it was taken... Perhaps it was some token of the heavens. And this is my punishment for losing it!\"");
	say();
	if (!(!var0004)) goto labelFunc0294_013E;
	UI_add_answer("Comb of Beauty");
labelFunc0294_013E:
	case "Comb of Beauty" attend labelFunc0294_0197:
	UI_remove_answer("Comb of Beauty");
	message("\"I thought it nothing more than a trinket... Passed down from the Lady Fawn herself, granted, but a bauble nonetheless.\"");
	say();
	message("\"Only now do I see that it was the tradition, the duty, that I tossed aside as worthless. And now it is lost forever!\"");
	say();
	message("\"I would give Fawn's greatest treasure if only I could find the Comb of Beauty!\"");
	say();
	if (!Func097D(0xFE9B, 0x0001, 0x0289, 0xFE99, 0x0000)) goto labelFunc0294_018C;
	var0006 = Func0992(0x0001, "@Avatar, what about the comb thou didst take from Columna?@", "@I wonder... What about Columna's comb?!@", false);
	UI_set_conversation_slot(0x0000);
	UI_add_answer("Columna");
labelFunc0294_018C:
	var0004 = true;
	UI_add_answer("treasure");
labelFunc0294_0197:
	case "Columna" attend labelFunc0294_01D5:
	UI_remove_answer("Columna");
	message("\"I recall a Lady Columna visiting Fawn a number of years ago! Now that I think of it... It wasn't long after that that I discovered the Comb missing!\"");
	say();
	message("\"Yes, yes! It all fits now! She admired it greatly, and seemed a bit offended when I did not offer it to her...\"");
	say();
	message("\"Of course she took it! Wilt thou give me the Comb? I will grant thee Fawn's greatest treasure, as I promised the heavens.\"");
	say();
	var0005 = true;
	if (!Func0955()) goto labelFunc0294_01C2;
	Func0864();
	goto labelFunc0294_01D5;
labelFunc0294_01C2:
	message("\"Such is the story of my life... Then I shall remain here, within this fetid swamp -- where I belong!\"");
	say();
	UI_remove_npc_face0();
	Func097F(item, "@Leave me!@", 0x0000);
	abort;
labelFunc0294_01D5:
	case "treasure" attend labelFunc0294_0214:
	UI_remove_answer("treasure");
	message("\"It is an ancient piece of armour that was found near the Serpent ruin around which the palace is built.\"");
	say();
	message("\"I do not know its significance, but we have treasured it ever since... as a sign of Fawn's strength.\"");
	say();
	if (!(!var0005)) goto labelFunc0294_0214;
	message("\"What a farce! Leave me, ");
	message(var0002);
	message("! Without the Comb of Beauty I will remain here, within this fetid swamp -- where I belong!\"");
	say();
	UI_remove_npc_face0();
	Func097F(item, "@Leave me!@", 0x0000);
	UI_set_item_flag(item, 0x001E);
	abort;
labelFunc0294_0214:
	case "heart" attend labelFunc0294_0232:
	UI_remove_answer("heart");
	message("\"Jorvin is dead! My love, mine heart's true desire!\"");
	say();
	message("\"But... Perhaps it is for the best -- That he never see the depths to which mine ignorance hath plunged our city, or the mark of the guilt that weighs upon my features...\"");
	say();
	UI_add_answer("ignorance");
labelFunc0294_0232:
	case "ignorance" attend labelFunc0294_0257:
	UI_remove_answer("ignorance");
	message("\"Criminal ignorance! I listened to those who would mislead me! I let their compliments turn mine head... And never felt Love for the city that was in my charge!\"");
	say();
	message("\"Even as I let the Comb of Beauty slip from the city, I have let all of Fawn slip into lifeless darkness!\"");
	say();
	if (!(!var0004)) goto labelFunc0294_0257;
	UI_add_answer("Comb of Beauty");
labelFunc0294_0257:
	case "people" attend labelFunc0294_027F:
	UI_remove_answer("people");
	message("\"The storms grew worse and worse! Food was scarce... And a strange sickness crept through the city like some silent predator.\"");
	say();
	message("\"One by one they fell... And there was nothing I could do! My pleas to the heavens were in vain!\"");
	say();
	message("\"The only other living soul is one I turned away -- One I deemed unworthy of Fawn's Beauty!\"");
	say();
	UI_add_answer(["sickness", "living soul"]);
labelFunc0294_027F:
	case "sickness" attend labelFunc0294_0296:
	UI_remove_answer("sickness");
	message("\"There was no fever. It seemed as if they were sleeping...\"");
	say();
	message("\"It came without warning... Until, at last, no one was left to care for them. Many never woke from where they fell. And I was powerless! Powerless!\"");
	say();
labelFunc0294_0296:
	case "living soul" attend labelFunc0294_02B1:
	UI_remove_answer("living soul");
	message("\"Hahaha! What cruel joke the heavens have had at mine expense!\"");
	say();
	message("\"I listened to the words of traitors and turned out good men, barring them from my protection!\"");
	say();
	message("\"And now only the one called Ruggs lives... To taunt me with an empty city and my ruined Beauty!\"");
	say();
labelFunc0294_02B1:
	goto labelFunc0294_00CF;
labelFunc0294_02B4:
	endconv;
labelFunc0294_02B5:
	return;
}


