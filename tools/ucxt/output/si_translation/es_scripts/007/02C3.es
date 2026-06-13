#game "serpentisle"
// externs
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func09A0 0x9A0 (var var0000, var var0001);

void Func02C3 shape#(0x2C3) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event != 0x0001)) goto labelFunc02C3_0009;
	return;
labelFunc02C3_0009:
	var0000 = UI_get_item_quality(item);
	if (!(var0000 == 0x001F)) goto labelFunc02C3_00A9;
	UI_close_gumps();
	var0001 = UI_get_object_position(item);
	var0001[0x0001] = (var0001[0x0001] - (var0001[0x0003] / 0x0002));
	var0001[0x0002] = (var0001[0x0002] - (var0001[0x0003] / 0x0002));
	UI_remove_item(item);
	var0002 = Func0992(0x0001, "@The scroll talks!@", "@The scroll talks...@", true);
	UI_sprite_effect(0x0015, var0001[0x0001], var0001[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0003 = UI_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x27, 0x000D, (byte)0x55, 0x041F]);
	abort;
labelFunc02C3_00A9:
	UI_play_sound_effect2(0x005E, item);
	UI_book_mode(item);
	if (!(var0000 == 0x0000)) goto labelFunc02C3_00C7;
	message("From the desk of the Great Hierophant.");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_00C7:
	if (!(var0000 == 0x0001)) goto labelFunc02C3_00E8;
	message("A SOLDIER'S NOTES~~");
	say();
	message("These sheep all went to their deaths with smiles on their accursed faces!~");
	say();
	message("We pulled out their fingernails, seared their flesh with burning coals, peeled their skin back with rusty knives, gouged out their eyes with sharp sticks, and still they said nothing!~");
	say();
	message("We must have the answer. But I cannot obtain the answer to my question now that they all lie dead. Could there be any truth to the old one's claim that \"meditation leads to enlightenment?\"");
	say();
	message("~Whatever the answer may be, there is no time left. We must go. I have ordered the destruction of the temple -- there\tmust be no trace of this structure left...");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_00E8:
	if (!(var0000 == 0x0002)) goto labelFunc02C3_00FD;
	message("MUSINGS, by Issik the Architect~~");
	say();
	message("  The snowswept surface of Sunrise Isle is totally barren. No life can live long upon the surface. It is a good thing, indeed, that the Great Hierophant decreed that it was too dangerous to allow access to the surface.");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_00FD:
	if (!(var0000 == 0x0003)) goto labelFunc02C3_0112;
	message("MAGIC CANDLES~~");
	say();
	message("  The devout follower of Balance will know how to form the blocks of ice which are necessary in achieving Balance. To those of you who have forgotten your lessons, take heed: Take the magic tapers to the Walls of Ice. Therein, use the tapers upon the walls.");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_0112:
	if (!(var0000 == 0x0004)) goto labelFunc02C3_0123;
	message("Create Soul Prism~~ This spell doth enchant a prism so that it may become the receptacle for a soul. Though powerful, this spell hath limited applications. The reagents necessary are: sulfuric ash, blood moss, garlic, mandrake root, spider silk, and serpent scales. ");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_0123:
	if (!(var0000 == 0x0005)) goto labelFunc02C3_0134;
	message("Create Automata~~ This spell is actually misnamed, for it doth not create automata, rather, it repairs them. If thou dost have a damaged automaton, simply cast this spell over the body and it shall be fully restored. The necessary reagents to cast this spell are as follows: sulfuric ash, mandrake root, spider silk, and serpent scales. ");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_0134:
	if (!(var0000 == 0x0006)) goto labelFunc02C3_0145;
	message("Create Ice~~ This spell immobilizes a chosen enemy in a block of ice. After a short period of time, the ice shatters, and the foe is released. Only two reagents are necessary to cast this spell: worm heart and spider silk. ");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_0145:
	if (!(var0000 == 0x0007)) goto labelFunc02C3_0156;
	message("Invoke Serpent~~ This spell summons a snow serpent that is \"friendly\" to the caster. The reagents necessary to cast this spell are as follows: blood moss, garlic, worm heart, spider silk, and serpent scales. ");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_0156:
	if (!(var0000 == 0x0008)) goto labelFunc02C3_0167;
	message("Serpent Bond~~ This powerful spell transforms the caster into a serpent for a short duration. This spell is very useful for obtaining ingress into places ordinarily inaccessible, such as a small crawlspace. ~The reagents necessary to cast this spell are as follows: blood moss, black pearl, garlic, worm heart, spider silk, and serpent scales. ");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_0167:
	if (!(var0000 == 0x0009)) goto labelFunc02C3_0178;
	message("Imbalance~~ This powerful spell is very dangerous. The energy released by this spell sprays out in a random pattern, usually destroying whatever is hit.~ The reagents necessary to cast this spell are as follows: blood moss, sulfuric ash, worm heart, nightshade plant, and serpent scales. ");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_0178:
	if (!(var0000 == 0x000A)) goto labelFunc02C3_0189;
	message("'Tis a wise man that doth know the contented man is never poor, whilst the discontented man is never rich...");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_0189:
	if (!(var0000 == 0x000B)) goto labelFunc02C3_019A;
	message("When a man finds no peace within himself, 'tis useless to seek it elsewhere...");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_019A:
	if (!(var0000 == 0x000C)) goto labelFunc02C3_01AB;
	message("Thou canst never teach a person anything. Thou canst only help him discover wisdom himself...");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_01AB:
	if (!(var0000 == 0x000F)) goto labelFunc02C3_01BC;
	message("Things unsavory may often be necessary. All Causes are not what they seem. What appears evil often can be good. Never discount.");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_01BC:
	if (!(var0000 == 0x0010)) goto labelFunc02C3_01CD;
	message("The Hero from Another World must encounter again what he thought eradicated. The Cause is good this time.");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_01CD:
	if (!(var0000 == 0x0018)) goto labelFunc02C3_01DE;
	message("~~Those who desire to meditate need only kneel before the serpent.");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_01DE:
	if (!(var0000 == 0x001C)) goto labelFunc02C3_01F7;
	message("~~\tThe Ethical Man obtains his strength through Ethics.");
	say();
	message("Hence, he is stronger as well as more daring.");
	say();
	message("The Ethical Man would risk his life to save another man's life");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_01F7:
	if (!(var0000 == 0x001D)) goto labelFunc02C3_0218;
	message("~On the topic of Wealth and Ethics:");
	say();
	message("To be truly ethical, thou shouldst reject Wealth.");
	say();
	message("Wealth corrupts the soul. It doth do so by placing a greater value upon goods and material possessions rather than upon the \"anima\", that is the living matter or spiritual matter. Spiritual kinship should be established as early as possible instead of the numerous tentative efforts by parents and the various communities to establish a Wealth kinship.");
	say();
	message("Believing thou shouldst abide by rules of conduct, learning well and being of good rule and disposition are what will make an ethical Man of thee. Wealth turns too many men away from rules of conduct.");
	say();
	message("Quickly enough, young men like thee become wastrels and haunters of alehouses, thereby losing their temporary possession, Wealth, but above all losing their richest dowry, their only true wealth, their soul. Ethics will prevent thee from following that path. Reject Wealth, my dear reader and most assured brother, and be truly ethical.~ I hope I have convinced thee, for if so, I have saved thee.");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_0218:
	if (!(var0000 == 0x001E)) goto labelFunc02C3_022D;
	message("Never, NEVER, surrender to thine enemies.");
	say();
	message("Fight to the death, but do not abandon thine Ethics.");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_022D:
	if (!(var0000 == 0x003D)) goto labelFunc02C3_023E;
	message("~The serpent of gold can send thee along the path to knowledge, but only if balanced by wisdom. Thou mayest already have felt the ill fortune brought about by wealth without wisdom; now use thy newfound wisdom to balance the power of gold.");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_023E:
	if (!(var0000 == 0x003E)) goto labelFunc02C3_024F;
	message("In the event that the waiting lizard should become uncontrollable, use this hammer, but be warned that using it foolishly will result in punishment for it is not easily replaced.");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_024F:
	if (!(var0000 == 0x003F)) goto labelFunc02C3_0268;
	message("~Do thou not despair, general, for the Arrows of Discipline");
	say();
	message("are well hidden.");
	say();
	message("If thou hast need of them, I will provide them.");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_0268:
	if (!(var0000 == 0x0040)) goto labelFunc02C3_0279;
	message("~Thou hast proven, through thy discipline, to be worthy.");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_0279:
	if (!(var0000 == 0x0041)) goto labelFunc02C3_028A;
	message("~Drink thou of the fountain and feel the Force of Discipline flow through thee.");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_028A:
	if (!(var0000 == 0x0042)) goto labelFunc02C3_029B;
	message("~Congratulations to thee, initiate. Thou hast found the symbol of balance.");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_029B:
	if (!(var0000 == 0x0043)) goto labelFunc02C3_02AC;
	message("~It is thy duty to meet thy death protecting the women and children. Their lives are the wellspring of our strength; draw courage from the knowledge that it is thy body which stands between the foul blades of Order and their hearts.");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_02AC:
	if (!(var0000 == 0x0044)) goto labelFunc02C3_02C5;
	message("~Move one of the stones so that there are two straight lines");
	say();
	message("of four stones that cross each other at the center point of");
	say();
	message("each line");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_02C5:
	if (!(var0000 == 0x004B)) goto labelFunc02C3_02DA;
	message("~Here doth lie Ssithnos, foully murdered in his unrelenting");
	say();
	message("service to balance.");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_02DA:
	if (!(var0000 == 0x004D)) goto labelFunc02C3_02EB;
	message("~Let this be a final warning: Those who enter this room lacking in discipline will forfeit their lives.");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_02EB:
	if (!(var0000 == 0x004E)) goto labelFunc02C3_02FC;
	message("Those who know not the password, Despair! The brass gate bars thy way, would-be intruder, and only those privy to the secret password know when to use the runes! Crawl back to your cities of structured folly and temples of Order, dog!  As I lie here, slowly dying of starvation, I laugh at thy fate, for though our city hath fallen, fool, thou wilt not use my gate as a means of ingress! Here in our city, your fellow dogs revel in their victory, knowing not that I have sealed them within! There, look! A general shakes his fist at me through the brass gate, sealed within! Nay, Order dogs, thou wilt not use my gate to send your metal slayers toward my fellows! Thou wilt have to use the serpent gates to conquer the southern lands! I can die in peace, knowing that, though mine home lies in ruin and the Chaos that is our city is now under the control of the enemy, my gate will stand closed for all eternity!");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_02FC:
	if (!(var0000 == 0x0050)) goto labelFunc02C3_0321;
	message("I write this in great haste, for I can already hear the forces of Order breaching the keep walls. I know not how this missive will survive to reach the outside lands, or for that matter, future generations. Mine only hope is that this speedily-drafted work will offer record of our hallowed philosophy. For our culture to have any chance of enduring the ages, someone, somewhere must find this. Please, reader, I beseech thee, spread the word of our peoples. Balance -- The harmony between the Principles of Order and Chaos -- is the one pure axiom we hold true. All three Principles are symbolized in our hieroglyphs: The Great Earth Serpent, keeper of Balance, lies on a vertical plane, around which the two opposing serpents of Chaos and Order wrap themselves.");
	say();
	message("Chaos and Order each embrace three Forces. These six Forces, when combined, form the three Principles of Balance. The Forces of Chaos are Tolerance, Enthusiasm, and Emotion; the Forces of Order are Ethicality, Discipline, and Logic.");
	say();
	message("CHAOS -- Tolerance is that which encourages the acceptance of all things. Enthusiasm is the energy that allows one to perform great tasks. Emotion is the ability to perceive those feelings that come from the heart, as opposed to coming from the mind.");
	say();
	message("ORDER -- Ethicality is the belief that there is great value in abiding by rules of conduct. Discipline is the drive to complete a task and avoid the distractions that will prevent its completion. Logic permits clear, reasoned thought, free from any instinctual biases.");
	say();
	message("BALANCE -- From the marriage between two Forces, one each from Chaos and Order, come the Principles. Tolerance and Ethicality combine to form Harmony, the ability to be at peace with the self, the individual, and the world. From the union of Enthusiasm and Discipline springs Dedication, that which permits one to surmount obstacles and lead others. Finally, Emotion tempered by Logic results in Rationality, the ability to comprehend life and understand the world around us. The Forces of Chaos and Order must ever remain in Balance, for imbalance leads to disaster. Witness the war-torn state of our world today! As thou canst surely see, my world hath been torn asunder by disregard for Balance -- our dearest axiom! If thou dost thrive in a time less violent, I can do no more than plead with thee to help restore Balance to the Serpent Isle! I must end this brief explication here, for I can hear mine attackers pounding upon the oaken door downstairs.");
	say();
	message("I wish thee and thy world better fortune than mine own. -- Ssithnos, the Great Hierophant");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_0321:
	if (!(var0000 == 0x0051)) goto labelFunc02C3_033A;
	message("~The Chaos vermin took their own lives");
	say();
	message(" rather than face us.");
	say();
	message("\tLet them rot!");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_033A:
	if (!(var0000 == 0x0052)) goto labelFunc02C3_034F;
	message("~\t\t\tSceptre of Enlightenment.");
	say();
	message("True dedication places Enlightenment above all else.");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_034F:
	if (!(var0000 == 0x0053)) goto labelFunc02C3_0360;
	message("~Revere these remains, for they are the ashes of the brave initiates who sacrificed their bodies for the greater victory of Order over Chaos. Theirs are the minds that make the Lords of Discipline more than mere automatons. Their sacrifice will bring ultimate victory to our cause, for none can stand against an automaton with the Will and Discipline of an initiate!");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_0360:
	if (!(var0000 == 0x0054)) goto labelFunc02C3_0375;
	message("~Report on the Cleansing of the Fiend's Domain~");
	say();
	message("~Subcommander Stherask, I regret to inform thee that, of the entire company of brass automatons, not one has returned. This mission has not only proven costly in terms of the efforts expended by our wizards to create these automatons, but in the lives of brave soldiers as well.  Of the three humans we had sent on the mission, Lieutenant Alspeth and her two sergeants, Shesparios and Iskil, none have returned.  We can only fear the worst in this case; the mission has failed.  Were it not for the unfaltering faith I have in thee and our Commander, I would question the value of our attempt, as the Fiend has ceased to meddle in the affairs of Serpent's Fang.  I assure thee, Subcommander, that none blame thee for the deaths of those three fine warriors.  All who know of the failed mission have no doubts that this was a just cause for loss of lives.");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_0375:
	if (!(var0000 == 0x0063)) goto labelFunc02C3_0396;
	message("~Ritual of Reunification. ~");
	say();
	message("~  First -- Open the window into the Void by placing the Blackrock Serpent in its proper slot.");
	say();
	message("~  Second -- Each imprisoned Bane must be placed upon the altar corresponding to its Principle. Unrestrained Emotion leads to Madness. Unchecked Enthusiasm leads to Wantonness. Unthinking Tolerance produces Anarchy. The Flame of Chaos shall welcome each Bane to its proper place.");
	say();
	message("~  Third -- That which shall bond the Banes together must be placed upon the remaining altar.");
	say();
	message("~  If all is done correctly, Chaos shall be reunited.");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_0396:
	if (!(var0000 == 0x0078)) goto labelFunc02C3_03B3;
	message("~Ethicality. ~");
	say();
	message("~\tAs a follower of Order thou must always conform to the principles of conduct as accepted by our alliance. Without these as guides we as a people would be lost. We would be no better than those who are controlled by Chaos.");
	say();
	message("~\tWe are far better than those who permit anarchy to control their lives and their thoughts. We must be eternally vigilant to insure that our system of ethics stands strong, that it must not be corrupted from within. We must insure that we remain pure, for corruption is the strength of our enemy, though it will be his own undoing should we stand aligned against it.");
	say();
	message("~\tStudent of Ethicality, take heed! Thou must be stronger than thou art in order to stand against the false truths that Chaos will tempt thee with. As iron is in a forge, thou wilt be blasted with the torrent of Chaos and corruption 'til thou wilt lose thy brittleness and harden into a core of strength. Through Ethics, thou canst become free of the anarchy and pain that lies within Chaos and ignorance.");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_03B3:
	if (!(var0000 == 0x0079)) goto labelFunc02C3_03D4;
	message("~Library of the Hierophant ~~ \tThe Great Library of the Hierophant contains all the history and knowledge that defines and guides the followers of Order. Though it is hidden away within the bowels of the mountain, a student of Order may enter it through the portal in the Temple of the Hierophant.");
	say();
	message("~\tIn times of disaster and of war, the Great Library was sealed to prevent its valuable works from being destroyed, or from falling into the hands of Chaos. Entry into the Library meant first opening the door to the Temple of the Hierophant.");
	say();
	message("~ This could only be achieved by a student placing the correct symbols of Order on the pedestal before the door to the temple. Since only true followers of Order would have the understanding of the symbols, this was the first test to prevent those of Chaos from desecrating both Temple and Library.\tOnly those who have studied\tthe writers and poets of Order will have the wisdom and knowledge to open the door.");
	say();
	message("~\tOnce the door opens the student doth need the Sceptre of the Hierophant to gain entry into the Library. Since the Hierophant keeps it in his charge, only by asking his permission can one gain access. Should the Sceptre be lost, or the Hierophant killed in battle, the Library will remain forever closed, away from the corruptions of Chaos.");
	say();
	message("~\tWith Sceptre in hand, the student must stand in front of the blue pedestal of the temple. He must place the Sceptre atop the pedestal. The student will then gain instant access to the Library. All knowledge of Order is held there as a bastion against corruption and Chaos.");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_03D4:
	if (!(var0000 == 0x007A)) goto labelFunc02C3_03E9;
	message("~What is Order? a poem by Sschittek the Wise ~");
	say();
	message("~\tWhat is Order? ~Is it a rule? ~Is it a law? ~Is it a whip with barbs to control the unruly? ~It is not any of these, it is more... ~It is wisdom, it is knowledge, ~It is a sense of duty!~ ~Ethicality is a Scroll, ~speaking of principles, ~of wisdom and of freedom ~from fear and hate. ~It is a gleam of sunrise ~guiding thee toward enlightenment ~and to thy true fate.~ ~Discipline is strength of the mind, ~born of willpower and knowledge, ~cleansing like a noon summer shower. ~It is a well-honed Serpent Dagger, ~a blade that cuts through ~Chaos and corruption's foul power.~ ~Logic is a straight path, ~without obstacles or brambles, ~free from both rock and tooth. ~Logic is precise and unswerving, ~counting Order's truth on an ~eternal Abacus\tof Truth.");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_03E9:
	if (!(var0000 == 0x007B)) goto labelFunc02C3_03FA;
	message("~To commune with the Serpent one must be in possession of the Earrings of the Serpent. Only via these can the Great Serpent channel his words to thee. ~To be at one with Balance one must have the blackrock Serpents of Order, Chaos, and of Balance. ~To enter into the Grand Shrine of Balance one must wear the Armour of the Serpent, carry the great Staff of the Serpent, and wear the Crown of the Serpent upon one's head. ~Only after these are obtained may one enter the most sacred of sanctums of the people of the Ophidian order.");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_03FA:
	if (!(var0000 == 0x007C)) goto labelFunc02C3_0426;
	message("~I have blocked the entrance to the Catacombs beneath our outpost with walls of force. None may pass ere this key is used. If thy need is great, and thou dost follow in the steps of Order, thou shalt know what to do to retrieve Loriel's Gift. ~~Ardiniss");
	say();
	var0003 = UI_delayed_execute_usecode_array(Func09A0(0x0000, 0x0001), [(byte)0x55, 0x0603], 0x0001);
	goto labelFunc02C3_043B;
labelFunc02C3_0426:
	if (!(var0000 == 0x007D)) goto labelFunc02C3_0437;
	message("~NOTES: ~~I have looked for a way through to the other chambers of this cursed outpost, but have yet found nothing. I did discover that the well in the southernmost chamber was empty. By using rope I lowered myself down into the darkness. ~At the last chamber I could go no further -- a wall of some kind of eldritch force blocked my way. I discerned that no ordinary key would grant me passage. ~I will search for this key.");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_0437:
	message("     This is not a valid scroll.");
	say();
labelFunc02C3_043B:
	return;
}


