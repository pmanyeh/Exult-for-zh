#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);

void Func08C7 0x8C7 ()
{
	var var0000;
	var var0001;

	UI_show_npc_face(0xFF17, 0x0000);
	var0000 = Func08F7(0xFFFF);
	var0001 = Func08F7(0xFFFE);
	message("As the actors take their places and don masks, you settle down to watch the action.*");
	say();
	if (!var0001) goto labelFunc08C7_0045;
	UI_show_npc_face(0xFFFE, 0x0000);
	message("Spark whispers to you, \"I wish there was a confectioner that sold candied apples!\"*");
	say();
	UI_remove_npc_face(0xFFFE);
	UI_show_npc_face(0xFF17, 0x0000);
labelFunc08C7_0045:
	message("The music starts the play, as Paul takes center stage and addresses the audience.");
	say();
	message("\"Welcome to Our Tale, ~A tale so true to life. ~'Tis a tale of tragedy ~A man has lost his wife.");
	say();
	message("\"But the story need not be sad ~When The Fellowship is here. ~The Triad of Inner Strength ~Gives one no cause to fear.\"*");
	say();
	UI_remove_npc_face(0xFF17);
	UI_show_npc_face(0xFF15, 0x0000);
	message("Dustin takes the stage as Paul moves away. Meryl lies on the ground in front of him and assumes a death-like pose.");
	say();
	message("\"'Tis doom! 'Tis despair! 'Tis death! ~My beloved wife is gone! ~Disease has taken her away ~And left me with but a song.\"");
	say();
	message("Dustin puts his head in his hands and mimes sobbing. As he sobs, Meryl rises from her \"death\" in a ghost-like fashion, then addresses Dustin.*");
	say();
	UI_show_npc_face(0xFF16, 0x0000);
	message("\"Mine husband, my love! ~Do not despair! 'Tis not doom! ~Thou shalt rise above ~All this melancholy and gloom!\"*");
	say();
	UI_show_npc_face(0xFF15, 0x0000);
	message("\"Who doth speak to me? ~Could it be she? ~Or have I indeed gone mad? ~But who else -could- it be?\"*");
	say();
	UI_show_npc_face(0xFF16, 0x0000);
	message("\"Mine husband, thou must listen. ~Thou hast thy comfort within thy grip. ~Thou must only seek them out -- ~Those that can help -- The Fellowship!\"*");
	say();
	UI_remove_npc_face(0xFF16);
	UI_show_npc_face(0xFF15, 0x0000);
	message("Meryl drifts off stage, leaving Dustin alone.");
	say();
	message("\"The Fellowship, she said? ~But what do I need with it? ~I have mine eight virtues and mine healers ~With these nothing else will fit!\"*");
	say();
	UI_show_npc_face(0xFF17, 0x0000);
	message("Paul enters the stage with Meryl, who now wears a different mask.");
	say();
	message("\"But that is where thou art wrong! ~The Fellowship exists to help thee! ~The Triad of Inner Strength is here ~To give thee a sense of unity!\"");
	say();
	message("\"Join us now and thou wilt see. ~Join thy brothers and our plan ~To promote the tenets of our group -- ~Thou wilt be a better man.\"");
	say();
	message("At this point, an elaborate mimed sequence reveals how Dustin joins The Fellowship, receives his medallion from a \"branch leader\", portrayed by Paul, and receives congratulations from Meryl.");
	say();
	message("\"Strive for Unity at all times, ~And Trust Thy Brother through all ill, ~For Worthiness Precedes thine own Reward ~Hark to our words -- it surely will!\"*");
	say();
	UI_show_npc_face(0xFF15, 0x0000);
	message("\"I shall give half my wealth to thee! ~I shall do thy bidding and then wait. ~My reward shall come one day ~And free me from mine awful fate.\"");
	say();
	message("Dustin mimes giving Paul some money. Paul exits, then Dustin lies down on the stage and mimes going to sleep. After a moment, Meryl enters the stage, dances around Dustin's body, sprinkling some kind of sparkling dust on him.*");
	say();
	if (!var0000) goto labelFunc08C7_010D;
	UI_remove_npc_face(0xFF17);
	UI_show_npc_face(0xFFFF, 0x0000);
	message("Iolo whispers to you. \"I am particularly enjoying the visual effects. The script is a little weak, dost thou not think?\"*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFF15, 0x0000);
labelFunc08C7_010D:
	message("Meryl leaves the stage and Dustin 'wakes up'. Lo and behold, he finds a bag near his place of sleep. Upon opening it, he finds a bundle of gold!");
	say();
	message("\"By Lord British I declare! ~'Tis my reward! From the air! ~The voice I heard at night was right ~About my wretched life I will not care!");
	say();
	message("\"The voice came to me in a dream ~'Twas mine 'inner' voice, so fair. ~I now have a companion and provider, ~And a master about whom I care.\"");
	say();
	message("You are jarred by the actor's choice of words -- 'companion', 'provider', and 'master'. You realize you have heard them before.*");
	say();
	if (!var0001) goto labelFunc08C7_0142;
	UI_show_npc_face(0xFFFE, 0x0000);
	message("\"This is really awful.\"*");
	say();
	UI_remove_npc_face(0xFFFE);
	UI_show_npc_face(0xFF15, 0x0000);
labelFunc08C7_0142:
	message("Paul and Meryl join Dustin on stage and they all hold hands.*");
	say();
	UI_show_npc_face(0xFF17, 0x0000);
	message("\"The Fellowship can give thee purpose ~To join is thine only choice ~Commit thyself to our just cause ~And find thine inner voice.\"");
	say();
	message("At that point, the actors bow, and you realize it is the end. You give them polite applause.*");
	say();
	gflags[0x000A] = true;
	if (!var0000) goto labelFunc08C7_017E;
	UI_remove_npc_face(0xFF17);
	UI_show_npc_face(0xFFFF, 0x0000);
	message("\"What do they mean about the voice? I am not sure I understand. 'Twas a confusing play. I did not like it at all. We have wasted our time and money! That is the last time that I let thee decide how best we entertain ourselves!\"*");
	say();
	UI_remove_npc_face(0xFFFF);
labelFunc08C7_017E:
	abort;
	return;
}


