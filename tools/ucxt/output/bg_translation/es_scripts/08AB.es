#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);

void Func08AB 0x8AB ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	var0000 = Func08F7(0xFFF2);
	var0001 = Func08F7(0xFF14);
	var0002 = Func08F7(0xFFEE);
	var0003 = Func08F7(0xFFEA);
	var0004 = Func08F7(0xFFFF);
	var0005 = Func08F7(0xFFFE);
	UI_show_npc_face(0xFFF0, 0x0000);
	message("Klog is leading the town members in a Fellowship meeting.");
	say();
	message("\"Thank you, Fellowship members of Trinsic, for attending our meeting this evening.~~\"I am certain you are all sorely aware of the crimes that have been committed in our city. Now is a time to mourn those whom we have lost. We will always remember Christopher, our blacksmith, as a valuable citizen of our town as well as a dear friend. Inamo was an amiable and hard-working gargoyle. As their deaths show us, Britannia needs The Fellowship now more than ever.");
	say();
	message("\"The Fellowship was created to advance a philosophy, a method of applying an optimistic order of thought to one's life. How dost thou follow this method? By applying the Triad of Inner Strength to thy life. The Triad is composed of three principles that, when applied in unison to thy life, can soothe the fever of a society that teaches thee to accept failure and banishes the destructive illusory thoughts and feelings from thy spirit.");
	say();
	message("\"The first principle is to Strive For Unity. This means that we should reject divisiveness, put aside our differences and work together for the good of us all.");
	say();
	message("\"The second principle is to Trust Thy Brother. Trust is essential, for what will you accomplish if you must be divided by constantly watching each other?");
	say();
	message("\"The third and final principle is Worthiness Precedes Reward. One must strive to be worthy of the rewards each of us seeks, for if one is not worthy of reward, why should you believe they should receive it?");
	say();
	message("\"We must spread the philosophy to everyone who can hear it. For who is there to lift the disunited, mistrustful, and unworthy Britannia up from its sad state but we of The Fellowship?");
	say();
	message("\"And now is the time we ask each of our members to give testimonial aloud, and tell how walking with The Fellowship has affected their life.\"*");
	say();
	if (!var0001) goto labelFunc08AB_007B;
	UI_show_npc_face(0xFF14, 0x0000);
	message("\"The Fellowship has enabled me to reach out and help people where before I have been too preoccupied.\"*");
	say();
	UI_remove_npc_face(0xFF14);
labelFunc08AB_007B:
	if (!var0000) goto labelFunc08AB_0096;
	UI_show_npc_face(0xFFF2, 0x0000);
	message("\"The Fellowship has made me more alert and thorough in the execution of my job as a Trinsic guard.\"*");
	say();
	UI_remove_npc_face(0xFFF2);
labelFunc08AB_0096:
	if (!var0002) goto labelFunc08AB_00BF;
	UI_show_npc_face(0xFFEE, 0x0000);
	message("\"The Fellowship has made me a happier, more agreeable person.\"*");
	say();
	UI_show_npc_face(0xFFF0, 0x0000);
	message("\"Thank thee for sharing, brother!\"*");
	say();
	UI_remove_npc_face(0xFFEE);
labelFunc08AB_00BF:
	if (!var0003) goto labelFunc08AB_00DA;
	UI_show_npc_face(0xFFEA, 0x0000);
	message("\"As a Fellowship member, I feel as if I am doing some good for Britannia.\"*");
	say();
	UI_remove_npc_face(0xFFEA);
labelFunc08AB_00DA:
	if (!var0005) goto labelFunc08AB_00F5;
	UI_show_npc_face(0xFFFE, 0x0000);
	message("Spark whispers to no one in particular, \"This is the most boring pile of horse manure in which I have ever had the pleasure to wallow!\"*");
	say();
	UI_remove_npc_face(0xFFFE);
labelFunc08AB_00F5:
	if (!var0004) goto labelFunc08AB_0110;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("Iolo slaps his own cheek to keep himself from dozing off. ~~\"Avatar, I do believe that we have heard enough of this.\"*");
	say();
	UI_remove_npc_face(0xFFFF);
labelFunc08AB_0110:
	UI_show_npc_face(0xFFF0, 0x0000);
	message("It is apparent that the meeting will be continuing for some time... You decide you have more important matters to attend to.*");
	say();
	abort;
	return;
}


